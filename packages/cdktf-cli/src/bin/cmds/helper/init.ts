// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as chalk from "chalk";
import { input, confirm, select, checkbox } from "@inquirer/prompts";
import extract from "extract-zip";
import { TerraformLogin } from "../helper/terraform-login";

import * as os from "os";
import * as path from "path";

import * as terraformCloudClient from "../helper/terraform-cloud-client";

import {
  init,
  Project,
  CdktfConfig,
  getAllPrebuiltProviders,
} from "@cdktf/cli-core";
import {
  convertProject,
  getTerraformConfigFromDir,
  parseProviderRequirements,
} from "@cdktf/hcl2cdk";
import { isLocalModule } from "@cdktf/provider-generator";
import { ExecSyncOptions, execSync } from "child_process";
import { v4 as uuid } from "uuid";
import { readSchema } from "@cdktf/provider-schema";
import {
  LANGUAGES,
  TerraformProviderConstraint,
  downloadFile,
  HttpError,
  logFileName,
  logger,
  Errors,
  sendTelemetry,
  ConstructsMakerProviderTarget,
} from "@cdktf/commons";
import { templates, templatesDir } from "@cdktf/cli-core";
import ciDetect from "@npmcli/ci-detect";
import { isInteractiveTerminal } from "./check-environment";
import { getTerraformVersion } from "./terraform-check";
import * as semver from "semver";
import { askForCrashReportingConsent } from "./error-reporting";

const chalkColour = new chalk.Instance();

const isReadme = (file: string) => file.toLowerCase() === "readme.md";

export function checkForEmptyDirectory(dir: string) {
  if (
    fs
      .readdirSync(dir)
      .filter((f) => !f.startsWith(".") && f !== logFileName && !isReadme(f))
      .length > 0
  ) {
    console.error(
      chalkColour`{redBright ERROR: Cannot initialize a project in a non-empty directory}`
    );
    process.exit(1);
  }
}
const tfcHostname = "app.terraform.io";
type GatheredInfo = {
  projectInfo: Project;
  useTerraformCloud: boolean | undefined;
};
type Options = {
  local?: boolean;
  template?: string;
  projectName?: string;
  projectDescription?: string;
  cdktfVersion?: string;
  dist?: string;
  providers?: string[];
  providersForceLocal?: boolean;
  destination: string;
  fromTerraformProject?: string;
  enableCrashReporting?: boolean;
  tfeHostname?: string;
  silent?: boolean;
  nonInteractive?: boolean;
};

export async function runInit(argv: Options) {
  const telemetryData: Record<string, unknown> = {};
  const destination = argv.destination || ".";
  const terraformRemoteHostname = argv.tfeHostname || tfcHostname;
  let token = "";
  if (!argv.local) {
    // We ask the user to login to Terraform Cloud and set a token
    // If the user chooses not to use Terraform Cloud, we continue
    // without a token and set up the project.

    const terraformLogin = new TerraformLogin(terraformRemoteHostname);
    token = await terraformLogin.askToLogin(argv.nonInteractive ?? false);
  } else {
    if (!argv.silent) {
      console.log(chalkColour`{yellow Note: By supplying '--local' option you have chosen local storage mode for storing the state of your stack.
This means that your Terraform state file will be stored locally on disk in a file 'terraform.<STACK NAME>.tfstate' in the root of your project.}`);
    }
  }
  const isRemote = token != "";

  // Check if template was specified by the user
  let template = "";
  if (argv.template) {
    template = argv.template;
  }

  const tfVersion = await getTerraformVersion();
  if (tfVersion && semver.lt(tfVersion, "1.1.0") && isRemote) {
    throw Errors.Usage(
      `Terraform version ${tfVersion} is not supported for remote configuration. We use the CloudBackend to configure the connection to Terraform Cloud, which is only supported in Terraform 1.1 and higher. Please upgrade to version 1.1.0 or higher or use the local mode by passing --local (afterwards you can use the RemoteBackend to work with Terraform Cloud without upgrading your Terraform version.`
    );
  }

  // Gather information about the template and the project
  const templateInfo = await getTemplate(
    template,
    argv.nonInteractive ?? false
  );
  telemetryData.template = templateInfo.Name;

  if (!argv.projectName && argv.nonInteractive) {
    throw Errors.Usage(
      "You are trying to initialize a project without specifying a project name in non-interactive mode. This can also happen when running cdktf convert against a project not using Typescript, since we need to create a temporary cdktf project for an accurate translation. If this happens using convert, please report it as a bug. Please specify a project name using the --project-name option."
    );
  }
  if (!argv.projectDescription && argv.nonInteractive) {
    ("You are trying to initialize a project without specifying a project description in non-interactive mode. This can also happen when running cdktf convert against a project not using Typescript, since we need to create a temporary cdktf project for an accurate translation. If this happens using convert, please report it as a bug. Please specify a project name using the --project-description option.");
  }

  const { projectInfo, useTerraformCloud } = await gatherInfo(
    token,
    terraformRemoteHostname,
    argv.projectName,
    argv.projectDescription
  );
  const projectId = uuid();
  telemetryData.projectId = projectId;

  let fromTerraformProject = argv.fromTerraformProject || undefined;
  if (!fromTerraformProject) {
    if (templateInfo.Name === "typescript") {
      fromTerraformProject = await getTerraformProject(
        argv.nonInteractive ?? false
      );
    }
  } else if (fromTerraformProject === "no") {
    fromTerraformProject = undefined;
  }

  if (!argv.local && useTerraformCloud) {
    if (!("OrganizationName" in projectInfo)) {
      throw new Error(`Missing organization name in project info`);
    }

    if (!("WorkspaceName" in projectInfo)) {
      throw new Error(`Missing workspace name in project info`);
    }

    // Set up a Terraform Cloud workspace if the user opted-in
    if (isRemote) {
      telemetryData.isRemote = Boolean(token);
      console.log(
        chalkColour`\n{whiteBright Setting up a Cloud Backend for your project.}`
      );
    }
  }

  const ci: string | false = ciDetect();
  const sendCrashReports =
    argv.enableCrashReporting ??
    (ci ? false : await askForCrashReportingConsent());
  const providers =
    argv.providers?.length || argv.nonInteractive
      ? argv.providers
      : await askForProviders();

  let convertResult, importPath;
  if (fromTerraformProject) {
    if (templateInfo.Name !== "typescript") {
      console.error(
        `The --from-terraform-project flag is only supported with the typescript template. The command will continue and ignore the flag.`
      );
    }

    importPath = path.resolve(process.cwd(), fromTerraformProject);

    const combinedTfFile = getTerraformConfigFromDir(importPath);

    const providerRequirements = await parseProviderRequirements(
      combinedTfFile
    );

    // Get all the provider schemas
    const { providerSchema } = await readSchema(
      Object.entries(providerRequirements).map(([name, version]) =>
        ConstructsMakerProviderTarget.from(
          new TerraformProviderConstraint(`${name}@${version}`),
          LANGUAGES[0]
        )
      )
    );

    try {
      convertResult = await convertProject(combinedTfFile, {
        language: "typescript",
        providerSchema: providerSchema ?? {},
      });
    } catch (err: any) {
      throw Errors.Internal((err as Error).toString(), err, {
        fromTerraformProject: true,
      });
    }
  }

  const needsGet = await init({
    cdktfVersion: argv.cdktfVersion,
    destination,
    dist: argv.dist,
    projectId,
    projectInfo,
    templatePath: templateInfo.Path,
    sendCrashReports: sendCrashReports,
    providers,
    providersForceLocal: argv.providersForceLocal,
    silent: argv.silent,
  });

  if (convertResult && importPath) {
    const { code, cdktfJson, stats } = convertResult;

    const mainTs = fs.readFileSync(
      path.resolve(destination, "main.ts"),
      "utf8"
    );
    fs.writeFileSync(
      path.resolve(destination, "main.ts"),
      code(mainTs),
      "utf8"
    );

    const renderedCdktfJson = cdktfJson(
      require(path.resolve(destination, "cdktf.json"))
    );
    fs.writeFileSync(
      path.resolve(destination, "cdktf.json"),
      JSON.stringify(renderedCdktfJson, null, 2),
      "utf8"
    );

    const { terraformModules, terraformProviders } = renderedCdktfJson;

    if (terraformModules.length > 0) {
      copyLocalModules(terraformModules, importPath, destination);
    }

    if (terraformModules.length + terraformProviders.length > 0) {
      const npmRunGetOptions: ExecSyncOptions = {
        cwd: destination,
      };
      if (argv.silent) {
        npmRunGetOptions.stdio = "ignore";
      }
      execSync("npm run get", { cwd: destination });
    }

    telemetryData.conversionStats = stats;
  }

  if (templateInfo.cleanupTemporaryFiles) {
    await templateInfo.cleanupTemporaryFiles();
  }

  const cdktfConfig = CdktfConfig.read(destination);

  if (providers?.length) {
    telemetryData.addedProviders = providers;
  }

  await sendTelemetry("init", {
    ...telemetryData,
    language: cdktfConfig.language,
  });

  return {
    needsGet,
    codeMakerOutput: cdktfConfig.codeMakerOutput,
    language: cdktfConfig.language,
  };
}

async function askForProviders(): Promise<string[] | undefined> {
  if (!isInteractiveTerminal()) {
    return Promise.resolve(undefined);
  }
  const prebuiltProviders = await getAllPrebuiltProviders();
  const options = Object.keys(prebuiltProviders);
  console.log(
    chalkColour`{yellow Note: You can always add providers using 'cdktf provider add' later on}`
  );

  const selection = await checkbox({
    message: "What providers do you want to use?",
    choices: options.map((value) => ({ name: value, value })),
  });

  return Object.entries(prebuiltProviders)
    .filter((provider) => selection.includes(provider[0]))
    .map((provider) => provider[1].split("@")[0]);
}

function copyLocalModules(
  modules: any[],
  sourcePath: string,
  destination: string
) {
  modules
    .filter((m) => isLocalModule(m))
    .map((m) =>
      fs.copySync(path.resolve(sourcePath, m), path.resolve(destination, m), {
        recursive: true,
      })
    );
}

async function gatherInfo(
  token: string,
  terraformRemoteHostname: string,
  projectName?: string,
  projectDescription?: string
): Promise<GatheredInfo> {
  const currentDirectory = path.basename(process.cwd());
  const projectDescriptionDefault =
    "A simple getting started project for cdktf.";

  const projectNameInfo =
    projectName ||
    (await input({
      message: "Project Name",
      default: currentDirectory,
    }));

  const projectDescriptionInfo =
    projectDescription ||
    (await input({
      message: "Project Description",
      default: projectDescriptionDefault,
    }));

  const useTerraformEnterprise =
    token != "" && terraformRemoteHostname != tfcHostname;

  let useTerraformCloud = false;
  if (token != "") {
    // We only ask this question if a --tfe-hostname is not provided explicitly
    // Otherwise, we take it as a signal that the user wants to use Terraform Enterprise.
    if (terraformRemoteHostname === tfcHostname) {
      useTerraformCloud = await confirm({
        message: "Would you like to use Terraform Cloud?",
        default: true,
      });
    }
  }

  // Either the user answers yes to using Terraform Cloud,
  // or we've skipped asking the question, but we've inferred that the user wants to use Terraform Enterprise.
  const isRemote = useTerraformCloud || useTerraformEnterprise;

  const project: Project = {
    Name: projectNameInfo,
    Description: projectDescriptionInfo,
    OrganizationName: "",
    WorkspaceName: "",
    TerraformRemoteHostname: isRemote ? terraformRemoteHostname : "",
  };

  if (isRemote) {
    console.log(chalkColour`\nDetected {blueBright Terraform Cloud} token.`);
    console.log(
      chalkColour`\nWe will now set up {blueBright Terraform Cloud} for your project.\n`
    );
    const organizationIds = await terraformCloudClient.getOrganizationIds(
      terraformRemoteHostname,
      token
    );

    if (organizationIds.length == 0) {
      throw Errors.Usage(
        `You must be part of an organization in Terraform Cloud in order to use it as a RemoteBackend or CloudBackend.
You can create one here: https://${terraformRemoteHostname}/app/organizations/new`
      );
    }

    // todo: add validation for the organization name and workspace. add error handling
    const organizationSelect = await select({
      message: "Terraform Cloud Organization Name",
      choices: organizationIds.map((value) => ({ name: value, value })),
    });

    console.log(
      chalkColour`\nWe are going to create a new {blueBright Terraform Cloud Workspace} for your project.\n`
    );

    let workspaceName;
    while (!workspaceName) {
      const tryWorkspaceName = await input({
        message: `Terraform Cloud Workspace Name`,
        default: project.Name,
      });

      const isWorkspaceNameTaken =
        await terraformCloudClient.isExistingWorkspaceWithName(
          terraformRemoteHostname,
          organizationSelect,
          tryWorkspaceName,
          token
        );
      if (!isWorkspaceNameTaken) {
        workspaceName = tryWorkspaceName;
        break;
      }
      console.log(
        chalkColour`{redBright Error:} A workspace with the name {blueBright ${tryWorkspaceName}} already exists in the organization {blueBright ${organizationSelect}}. Please choose a different name.`
      );
    }

    project.OrganizationName = organizationSelect;
    project.WorkspaceName = workspaceName;
  }

  return {
    projectInfo: project,
    useTerraformCloud: isRemote,
  };
}

async function getTerraformProject(
  nonInteractive: boolean
): Promise<string | undefined> {
  if (!isInteractiveTerminal() || nonInteractive) {
    return Promise.resolve(undefined);
  }
  const shouldUseTerraformProject = await confirm({
    message: "Do you want to start from an existing Terraform project?",
    default: false,
  });

  if (!shouldUseTerraformProject) {
    return undefined;
  }

  let terraformProject = await input({
    message: "Please enter the path to the Terraform project",
    default: "",
  });

  if (!terraformProject || terraformProject === "") {
    return undefined;
  }

  if (!path.isAbsolute(terraformProject)) {
    terraformProject = path.resolve(process.cwd(), terraformProject);
  }

  if (!fs.existsSync(terraformProject)) {
    throw Errors.Usage(
      `Could not find folder '${terraformProject}' to initialize from.`
    );
  }

  return terraformProject;
}

/**
 *
 * @param templateName either the name of built-in templates or an url pointing to a zip archive
 */
async function getTemplate(
  templateName: string,
  nonInteractive: boolean
): Promise<Template> {
  if (templateName == "") {
    if (nonInteractive) {
      throw Errors.Usage(
        "You are trying to initialize a project without specifying a template in non-interactive mode. This can also happen when running cdktf convert against a project not using Typescript, since we need to create a temporary cdktf project for an accurate translation. Please specify a template using the --template option in init or --language in convert."
      );
    }
    const templateOptionRemote = "<remote zip file>";
    const options = [...templates, templateOptionRemote];
    // Prompt for template
    const selection = await select({
      message: "What template do you want to use?",
      choices: options.map((value) => ({ name: value, value })),
    });

    if (selection === templateOptionRemote) {
      const remoteTemplateName = await input({
        message:
          "Please enter an URL pointing to the template zip file you want to use:",
        validate: (value: string) => {
          if (value === "") {
            return "Url can not be empty";
          } else {
            return true;
          }
        },
      });

      templateName = remoteTemplateName;
    } else {
      templateName = selection;
      console.log(
        chalkColour`\n{whiteBright Initializing a project using the {greenBright ${templateName}} template.}`
      );
    }
  }

  if (templates.includes(templateName)) {
    return {
      Name: templateName,
      Path: path.join(templatesDir, templateName),
    };
  }
  if (
    templateName.startsWith("http://") ||
    templateName.startsWith("https://")
  ) {
    return fetchRemoteTemplate(templateName);
  }
  return {
    Name: path.basename(templateName),
    Path: templateName,
  };
}

async function fetchRemoteTemplate(templateUrl: string): Promise<Template> {
  console.log(
    chalkColour`Fetching remote template from: {whiteBright ${templateUrl}}`
  );
  try {
    const url = new URL(templateUrl);
    const remoteFileName = path.basename(url.pathname) || "template.zip";
    logger.trace(
      `Detected remote file name to be "${remoteFileName}" out of template URL "${templateUrl}"`
    );

    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf."));
    const tmpZipFile = path.join(tmpDir, remoteFileName);
    const zipExtractDir = path.join(tmpDir, "extracted");

    logger.trace(
      `Downloading "${remoteFileName}" to temporary directory "${tmpDir}"`
    );
    console.log(
      chalkColour`Downloading "{whiteBright ${remoteFileName}}" to temporary directory`
    );
    await downloadFile(url.href, tmpZipFile);

    console.log("Extracting zip file");
    await extract(tmpZipFile, { dir: zipExtractDir });

    // walk directory to find cdktf.json as the extracted directory contains a root directory with unknown name
    // this also allows nesting the template itself into a sub directory and having a root directory with an unrelated README
    console.log(
      chalkColour`Looking for directory containing {whiteBright cdktf.json}`
    );
    const templatePath = await findCdkTfJsonDirectory(zipExtractDir);

    if (!templatePath) {
      throw Errors.Usage(
        chalkColour`Could not find a {whiteBright cdktf.json} in the extracted directory`,
        new Error(),
        {}
      );
    }

    return {
      Name: path.parse(remoteFileName).name, // strips .zip from filename
      Path: templatePath,
      cleanupTemporaryFiles: async () => {
        console.log("Clearing up temporary directory of remote template");
        await fs.remove(tmpDir);
      },
    };
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ERR_INVALID_URL") {
      console.error(
        chalkColour`Could not download template: {redBright the supplied url is invalid}`
      );
      console.error(
        chalkColour`Please supply a valid url (including the protocol) or use one of the built-in templates.`
      );
      process.exit(1);
    }
    if (e instanceof HttpError) {
      console.error(
        chalkColour`Could not download template: {redBright ${e.message}}`
      );
      process.exit(1);
    }

    console.error(e);
    process.exit(1);
  }
}

async function findCdkTfJsonDirectory(rootDir: string): Promise<string | null> {
  const files = await fs.readdir(rootDir);

  if (files.includes("cdktf.json")) {
    return rootDir;
  }
  for (const file of files) {
    const fullPath = path.join(rootDir, file);
    if ((await fs.stat(fullPath)).isDirectory()) {
      const dir = findCdkTfJsonDirectory(fullPath);
      if (dir) return dir;
      // else continue with next sub directory
    }
  }
  return null;
}

interface Template {
  Name: string;
  Path: string;
  cleanupTemporaryFiles?: () => Promise<void>;
}
