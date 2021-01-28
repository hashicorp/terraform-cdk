import yargs from 'yargs'
import * as readlineSync from 'readline-sync';
import { TerraformLogin } from './helper/terraform-login'
import * as fs from 'fs-extra';
import * as path from 'path';
import { sscaff } from 'sscaff';
import * as terraformCloudClient from './helper/terraform-cloud-client';
import * as chalk from 'chalk';
import { terraformCheck } from './terraform-check';
import { displayVersionMessage } from './version-check'
import { FUTURE_FLAGS } from 'cdktf/lib/features';

const chalkColour = new chalk.Instance();

const templatesDir = path.join(__dirname, '..', '..', 'templates');
const availableTemplates = fs.readdirSync(templatesDir).filter(x => !x.startsWith('.'));
const templates: string[] = [];
for (const template of availableTemplates) {
  templates.push(template)
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');
const constructsVersion = pkg.dependencies.constructs;

class Command implements yargs.CommandModule {
  public readonly command = 'init [OPTIONS]';
  public readonly describe = 'Create a new cdktf project from a template.';
  public readonly builder = (args: yargs.Argv) => args
    .showHelpOnFail(true)
    .option('template', { type: 'string', desc: 'The template name to be used to create a new project.' })
    .option('project-name', { type: 'string', desc: 'The name of the project.'})
    .option('project-description', { type: 'string', desc: 'The description of the project.'})
    .option('dist', { type: 'string', desc: 'Install dependencies from a "dist" directory (for development)' })
    .option('local', { type: 'boolean', desc: 'Use local state storage for generated Terraform.', default: false})
    .option('cdktf-version', { type: 'string', desc: 'The cdktf version to use while creating a new project.', default: pkg.version })
    .strict()
    .choices('template', templates);

  public async handler(argv: any) {
    await terraformCheck()
    await displayVersionMessage()

    if (fs.readdirSync('.').filter(f => !f.startsWith('.')).length > 0) {
      console.error(chalkColour`{redBright ERROR: Cannot initialize a project in a non-empty directory}`);
      process.exit(1);
    }

    let token = ""
    if (!argv.local) {
      // We ask the user to login to Terraform Cloud and set a token
      // If the user chooses not to use Terraform Cloud, we continue
      // without a token and set up the project.
      const terraformLogin = new TerraformLogin
      token = await terraformLogin.askToLogin();
    } else {
      console.log(chalkColour`{yellow Note: By supplying '--local' option you have chosen local storage mode for storing the state of your stack.
This means that your Terraform state file will be stored locally on disk in a file 'terraform.tfstate' in the root of your project.}`)
    }

    // Check if template was specified by the user
    let template = ""
    if (argv.template) {
      template = argv.template
    }

    // Gather information about the template and the project
    const templateInfo = await getTemplatePath(template);

    const projectInfo: any = await gatherInfo(token, templateInfo.Name, argv.projectName, argv.projectDescription);

    // Check if token is set so we can set up Terraform Cloud workspace
    // only set with the '--local' option is specified the user.
    if (token != "") {
      console.log(chalkColour`\n{whiteBright Setting up remote state backend and workspace in Terraform Cloud.}`);
      await terraformCloudClient.createWorkspace(projectInfo.OrganizationName, projectInfo.WorkspaceName, token);
    }

    const deps: any = await determineDeps(argv.cdktfVersion, argv.dist);

    const futureFlags = Object.entries(FUTURE_FLAGS).map(([key, value]) => `"${key}": "${value}"`).join(`,\n`);

    await sscaff(templateInfo.Path, '.', {
      ...deps, ...projectInfo, futureFlags
    });
  }
}

async function determineDeps(version: string, dist?: string): Promise<Deps> {
  const pythonVersion = version.replace(/-pre\./g, '.dev')

  if (dist) {
    const ret = {
      'npm_cdktf': path.resolve(dist, 'js', `cdktf@${version}.jsii.tgz`),
      'npm_cdktf_cli': path.resolve(dist, 'js', `cdktf-cli-${version}.tgz`),
      'pypi_cdktf': path.resolve(dist, 'python', `cdktf-${pythonVersion}-py3-none-any.whl`),
      'mvn_cdktf': path.resolve(dist, 'java', `com/hashicorp/cdktf/${version}/cdktf-${version}.jar`),
      'nuget_cdktf': path.resolve(dist, 'dotnet', `HashiCorp.Cdktf.${version}.nupkg`)
    };

    for (const file of Object.values(ret)) {
      if (!(await fs.pathExists(file))) {
        throw new Error(`unable to find ${file} under the "dist" directory (${dist})`);
      }
    }

    const versions = {
      'cdktf_version': version,
      'constructs_version': constructsVersion,
    }

    return {
      ...ret,
      ...versions
    };
  }

  if (version === '0.0.0') {
    throw new Error(chalkColour`{redBright cannot use version 0.0.0, use --cdktf-version, --dist or CDKTF_DIST to install from a "dist" directory}`);
  }

  // determine if we want a specific pinned version or a version range we take
  // a pinned version if version includes a hyphen which means it is a
  // pre-release (e.g. "0.12.0-pre.e6834d3"). otherwise, we require a caret
  // version.
  const ver = version.includes('-') ? version : `^${version}`;

  return {
    'cdktf_version': version,
    'constructs_version': constructsVersion,
    'npm_cdktf': `cdktf@${ver}`,
    'npm_cdktf_cli': `cdktf-cli@${ver}`,
    'pypi_cdktf': `cdktf~=${pythonVersion}`,
    'mvn_cdktf': version,
    'nuget_cdktf': version
  };
}

async function gatherInfo(token: string, templateName: string, projectName: string, projectDescription: string): Promise<Project> {

  if (!projectName && !projectDescription) {
    console.log(chalkColour`\nWe will now set up the project. Please enter the details for your project.
If you want to exit, press {magenta ^C}.
`)
  }

  if (!projectName) {
    // Current working directory
    const currentDirectory = path.basename(process.cwd());
    projectName = readlineSync.question(chalkColour`{greenBright Project Name:} (default: '${currentDirectory}') `, { defaultInput: currentDirectory })
  }

  if (!projectDescription) {
    const projectDescriptionDefault = 'A simple getting started project for cdktf.'
    projectDescription = readlineSync.question(chalkColour`{greenBright Project Description:} (default: '${projectDescriptionDefault}') `, { defaultInput: projectDescriptionDefault })
  }

  const project: Project = {
    'Name': projectName,
    'Description': projectDescription,
    'OrganizationName': '',
    'WorkspaceName': ''
  }

  if (token != '') {
    console.log(chalkColour`\nDetected {blueBright Terraform Cloud} token.`)
    console.log(chalkColour`\nWe will now set up {blueBright Terraform Cloud} for your project.\n`)
    const organizationNames = await terraformCloudClient.getOrganizationNames(token);
    const organizationData = organizationNames.data;
    const organizationOptions = [];
    for (const organization of organizationData) {
      organizationOptions.push(organization.id)
    }

    // todo: add validation for the organization name and workspace. add error handling
    const organizationSelect = readlineSync.keyInSelect(organizationOptions, chalkColour`{blueBright Terraform Cloud Organization Name:} `)
    if (organizationSelect == -1) {
      process.exit(0);
    }
    const workspaceName = readlineSync.question(chalkColour`{blueBright Terraform Cloud Workspace Name:} (default: '${templateName}') `, { defaultInput: templateName } )
    project.OrganizationName = organizationOptions[organizationSelect]
    project.WorkspaceName = workspaceName
  }

  return project;
}

async function getTemplatePath(templateName: string): Promise<Template> {
  if (templateName == '') {
    // Prompt for template
    const selection = readlineSync.keyInSelect(templates, chalkColour`{whiteBright What template you want to use?}`)
    if (selection == -1) {
      process.exit(0);
    }
    templateName = templates[selection];
    console.log(chalkColour`\n{whiteBright Initializing a project using the {greenBright ${templateName}} template.}`);
  }

  const templatePath = path.join(templatesDir, templateName);

  return {
    'Name': templateName,
    'Path': templatePath
  }
}

interface Deps {
  npm_cdktf: string;
  npm_cdktf_cli: string;
  pypi_cdktf: string;
  mvn_cdktf: string;
  nuget_cdktf: string;
  cdktf_version: string;
  constructs_version: string;
}

interface Project {
  Name: string;
  Description: string;
  OrganizationName: string;
  WorkspaceName: string;
}

interface Template {
  Name: string;
  Path: string;
}

module.exports = new Command();
