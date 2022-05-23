import * as fs from "fs-extra";
import * as chalk from "chalk";
import * as inquirer from "inquirer";
import extract from "extract-zip";
import { TerraformLogin } from "../helper/terraform-login";

import * as os from "os";
import * as path from "path";

import * as terraformCloudClient from "../helper/terraform-cloud-client";

import { downloadFile, HttpError } from "../../../lib/util";
import { logFileName, logger } from "../../../lib/logging";
import { Errors } from "../../../lib/errors";
import {
  convertProject,
  getTerraformConfigFromDir,
  parseProviderRequirements,
} from "@cdktf/hcl2cdk";
import { isLocalModule } from "@cdktf/provider-generator";
import { execSync } from "child_process";
import { sendTelemetry } from "../../../lib/checkpoint";
import { v4 as uuid } from "uuid";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";
import { templates, templatesDir } from "./init-templates";
import { init, Project } from "../../../lib";
import { askForCrashReportingConsent } from "../../../lib/error-reporting";
import ciDetect from "@npmcli/ci-detect";

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

type Options = {
  local?: boolean;
  template?: string;
  projectName?: string;
  projectDescription?: string;
  cdktfVersion?: string;
  dist?: string;
  destination: string;
  fromTerraformProject?: string;
  enableCrashReporting?: boolean;
};
export async function runInit(argv: Options) {
  const telemetryData: Record<string, unknown> = {};
  const destination = argv.destination || ".";
  let token = "";
  if (!argv.local) {
    // We ask the user to login to Terraform Cloud and set a token
    // If the user chooses not to use Terraform Cloud, we continue
    // without a token and set up the project.
    const terraformLogin = new TerraformLogin();
    token = await terraformLogin.askToLogin();
  } else {
    console.log(chalkColour`{yellow Note: By supplying '--local' option you have chosen local storage mode for storing the state of your stack.
This means that your Terraform state file will be stored locally on disk in a file 'terraform.<STACK NAME>.tfstate' in the root of your project.}`);
  }

  // Check if template was specified by the user
  let template = "";
  if (argv.template) {
    template = argv.template;
  }

  // Gather information about the template and the project
  const templateInfo = await getTemplate(template);
  telemetryData.template = templateInfo.Name;

  const projectInfo: Project = await gatherInfo(
    token,
    argv.projectName,
    argv.projectDescription
  );
  const projectId = uuid();
  telemetryData.projectId = projectId;

  if (!argv.local) {
    if (!("OrganizationName" in projectInfo)) {
      throw new Error(`Missing organization name in project info`);
    }

    if (!("WorkspaceName" in projectInfo)) {
      throw new Error(`Missing organization name in project info`);
    }

    // Check if token is set so we can set up Terraform Cloud workspace
    // only set with the '--local' option is specified the user.
    if (token != "") {
      telemetryData.isRemote = Boolean(token);
      console.log(
        chalkColour`\n{whiteBright Setting up remote state backend and workspace in Terraform Cloud.}`
      );
      try {
        await terraformCloudClient.createWorkspace(
          projectInfo.OrganizationName,
          projectInfo.WorkspaceName,
          token
        );
      } catch (error) {
        console.error(
          chalkColour`{redBright ERROR: Could not create Terraform Cloud Workspace: ${error.message}}`
        );
        process.exit(1);
      }
    }
  }

  const ci: string | false = ciDetect();
  const sendCrashReports =
    argv.enableCrashReporting ??
    (ci ? false : await askForCrashReportingConsent());

  await init({
    cdktfVersion: argv.cdktfVersion,
    destination,
    dist: argv.dist,
    projectId,
    projectInfo,
    templatePath: templateInfo.Path,
    sendCrashReports: sendCrashReports,
  });

  if (argv.fromTerraformProject) {
    if (argv.template === "typescript") {
      const mainTs = fs.readFileSync(
        path.resolve(destination, "main.ts"),
        "utf8"
      );

      const importPath = path.resolve(process.cwd(), argv.fromTerraformProject);

      const combinedTfFile = getTerraformConfigFromDir(importPath);

      // Fetch all provider requirements from the project
      const providerRequirements = await parseProviderRequirements(
        combinedTfFile
      );

      // Get all the provider schemas
      const { providerSchema } = await readSchema(
        Object.entries(providerRequirements).map(([name, version]) =>
          ConstructsMakerProviderTarget.from(
            new config.TerraformProviderConstraint(`${name}@ ${version}`),
            LANGUAGES[0]
          )
        )
      );
      try {
        const { code, cdktfJson, stats } = await convertProject(
          combinedTfFile,
          mainTs,
          require(path.resolve(destination, "cdktf.json")),
          {
            language: "typescript",
            providerSchema,
          }
        );

        fs.writeFileSync(path.resolve(destination, "main.ts"), code, "utf8");
        fs.writeFileSync(
          path.resolve(destination, "cdktf.json"),
          JSON.stringify(cdktfJson, null, 2),
          "utf8"
        );

        const { terraformModules, terraformProviders } = cdktfJson;

        if (terraformModules.length > 0) {
          copyLocalModules(terraformModules, importPath, destination);
        }

        if (terraformModules.length + terraformProviders.length > 0) {
          execSync("npm run get", { cwd: destination });
        }

        telemetryData.conversionStats = stats;
      } catch (err) {
        throw Errors.Internal(err, { fromTerraformProject: true });
      }
    } else {
      console.error(
        `The --from-terraform-project flag is only supported with the typescript template. The command will continue and ignore the flag.`
      );
    }
  }

  if (templateInfo.cleanupTemporaryFiles) {
    await templateInfo.cleanupTemporaryFiles();
  }

  await sendTelemetry("init", telemetryData);
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
  projectName?: string,
  projectDescription?: string
): Promise<Project> {
  const currentDirectory = path.basename(process.cwd());
  const projectDescriptionDefault =
    "A simple getting started project for cdktf.";
  const questions = [];
  if (!projectName) {
    questions.push({
      name: "projectName",
      message: "Project Name",
      default: currentDirectory,
    });
  }
  if (!projectDescription) {
    questions.push({
      name: "projectDescription",
      message: "Project Description",
      default: projectDescriptionDefault,
    });
  }

  const answers: {
    projectName?: string;
    projectDescription?: string;
  } = questions.length > 0 ? await inquirer.prompt(questions) : {};

  const project: Project = {
    Name: projectName || answers.projectName || "",
    Description: projectDescription || answers.projectDescription || "",
    OrganizationName: "",
    WorkspaceName: "",
  };

  if (token != "") {
    console.log(chalkColour`\nDetected {blueBright Terraform Cloud} token.`);
    console.log(
      chalkColour`\nWe will now set up {blueBright Terraform Cloud} for your project.\n`
    );
    const organizationNames = await terraformCloudClient.getOrganizationNames(
      token
    );
    const organizationData = organizationNames.data;
    const organizationOptions = [];
    for (const organization of organizationData) {
      organizationOptions.push(organization.id);
    }

    // todo: add validation for the organization name and workspace. add error handling
    const { organization: organizationSelect } = await inquirer.prompt([
      {
        type: "list",
        name: "organization",
        message: "Terraform Cloud Organization Name",
        choices: organizationOptions,
      },
    ]);

    console.log(
      chalkColour`\nWe are going to create a new {blueBright Terraform Cloud Workspace} for your project.\n`
    );

    const { workspace: workspaceName } = await inquirer.prompt([
      {
        name: "workspace",
        message: "Terraform Cloud Workspace Name",
        default: project.Name,
      },
    ]);
    project.OrganizationName = organizationSelect;
    project.WorkspaceName = workspaceName;
  }

  return project;
}

/**
 *
 * @param templateName either the name of built-in templates or an url pointing to a zip archive
 */
async function getTemplate(templateName: string): Promise<Template> {
  if (templateName == "") {
    const templateOptionRemote = "<remote zip file>";
    const options = [...templates, templateOptionRemote];
    // Prompt for template
    const { template: selection } = await inquirer.prompt([
      {
        type: "list",
        name: "template",
        message: "What template do you want to use?",
        choices: options,
      },
    ]);

    if (selection === templateOptionRemote) {
      const { templateName: remoteTemplateName } = await inquirer.prompt([
        {
          name: "templateName",
          message:
            "Please enter an URL pointing to the template zip file you want to use:",
          validate: (value: string) => {
            if (value === "") {
              return "Url can not be empty";
            } else {
              return true;
            }
          },
        },
      ]);

      templateName = remoteTemplateName;
    } else {
      templateName = selection;
      console.log(
        chalkColour`\n{whiteBright Initializing a project using the {greenBright ${templateName}} template.}`
      );
    }
  }

  // treat as remote url
  if (!templates.includes(templateName)) {
    return fetchRemoteTemplate(templateName);
  } else {
    return {
      Name: templateName,
      Path: path.join(templatesDir, templateName),
    };
  }
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
    if (e.code === "ERR_INVALID_URL") {
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
