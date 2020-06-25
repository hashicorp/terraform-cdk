import * as yargs from 'yargs';
import * as readlineSync from 'readline-sync';
import { TerraformLogin } from './helper/terraform-login'
import * as fs from 'fs-extra';
import * as path from 'path';
import { sscaff } from 'sscaff';
import * as terraformCloudClient from './helper/terraform-cloud-client'
import * as chalk from 'chalk';
const chalkColour = new chalk.Instance();

const templatesDir = path.join(__dirname, '..', '..', 'templates');
const availableTemplates = fs.readdirSync(templatesDir).filter(x => !x.startsWith('.'));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');

class Command implements yargs.CommandModule {
  public readonly command = 'init [OPTIONS]';
  public readonly describe = 'Create a new cdktf project from a template.';
  public readonly builder = (args: yargs.Argv) => args
    .showHelpOnFail(true)
    .option('template', { type: 'string', desc: 'The template name to be used to create a new project.' })
    .option('dist', { type: 'string', desc: 'Install dependencies from a "dist" directory (for development)' })
    .option('cdktf-version', { type: 'string', desc: 'The cdktf version to use while creating a new project.', default: pkg.version })
    .choices('template', availableTemplates);

  public async handler(argv: any) {
    if (fs.readdirSync('.').filter(f => !f.startsWith('.')).length > 0) {
      console.error(chalkColour`{redBright ERROR: Cannot initialize a project in a non-empty directory}`);
      process.exit(1);
    }

    // We ask the user to login to Terraform Cloud and set a token
    // If the user chooses not to use Terraform Cloud, we continue
    // without a token and setup the project.
    const terraformLogin = new TerraformLogin
    const token = await terraformLogin.askToLogin();

    // Check if template was specified by the user
    let template = ""
    if (argv.template) {
      template = argv.template
    }

    // Gather information about the template and the project
    const templateInfo = await getTemplatePath(template);

    const projectInfo: any = await gatherInfo(token, templateInfo.Name);

    // Check if token is set so we can setup Terraform Cloud workspace
    if (token != "") {
      console.log(chalkColour`\n{whiteBright Setting up remote state backend and workspace in Terraform Cloud.}`);
      await terraformCloudClient.createWorkspace(projectInfo.OrganizationName, projectInfo.WorkspaceName, token);
    }

    const deps: any = await determineDeps(argv.cdktfVersion, argv.dist);

    await sscaff(templateInfo.Path, '.', {
      ...deps, ...projectInfo
    });
  }
}

async function determineDeps(version: string, dist?: string): Promise<Deps> {
  if (dist) {
    const ret = {
      'npm_cdktf': path.resolve(dist, 'js', `cdktf@${version}.jsii.tgz`),
      'npm_cdktf_cli': path.resolve(dist, 'js', `cdktf-cli-${version}.tgz`),
      'pypi_cdktf': path.resolve(dist, 'python', `cdktf-${version.replace(/-/g, '_')}-py3-none-any.whl`)
    };

    for (const file of Object.values(ret)) {
      if (!(await fs.pathExists(file))) {
        throw new Error(`unable to find ${file} under the "dist" directory (${dist})`);
      }
    }

    return ret;
  }

  if (version === '0.0.0') {
    throw new Error(`cannot use version 0.0.0, use --cdktf-version, --dist or CDKTF_DIST to install from a "dist" directory`);
  }

  // determine if we want a specific pinned version or a version range we take
  // a pinned version if version includes a hyphen which means it is a
  // pre-release (e.g. "0.12.0-pre.e6834d3"). otherwise, we require a caret
  // version.
  const ver = version.includes('-') ? version : `^${version}`;

  return {
    'npm_cdktf': `cdktf@${ver}`,
    'npm_cdktf_cli': `cdktf-cli@${ver}`,
    'pypi_cdktf': `cdktf~=${version}` // no support for pre-release
  };
}

async function gatherInfo(token: string, templateName: string): Promise<Project> {
  
  console.log(chalkColour`\nWe will now setup the project. Please enter the details for your project.
If you want to exit, press {magenta ^C}.
`)

  // Current working directory
  const currentDirectory = path.basename(process.cwd());

  const projectName = readlineSync.question(chalkColour`{greenBright Project Name:} (default: '${currentDirectory}')`, { defaultInput: currentDirectory })
  const projectDescriptionDefault = 'A simple getting started project for cdktf.'
  const projectDescription = readlineSync.question(chalkColour`{greenBright Project Description:} (default: '${projectDescriptionDefault}') `, { defaultInput: projectDescriptionDefault })

  let project: Project = {
    'Name': projectName,
    'Description': projectDescription,
    'OrganizationName': '',
    'WorkspaceName': ''
  }

  if (token != '') {
    console.log(chalkColour`\nDetected {blueBright Terraform Cloud} token.`)
    console.log(chalkColour`\nWe will now setup {blueBright Terraform Cloud} for your project.\n`)

    // todo: add validation for the organization name and workspace. add error handling
    const organizationName = readlineSync.question(chalkColour`{blueBright Terraform Cloud Organization Name:} `)
    const workspaceName = readlineSync.question(chalkColour`{blueBright Terraform Cloud Workspace Name:} `, { defaultInput: templateName } )
    project.OrganizationName = organizationName
    project.WorkspaceName = workspaceName
  }

  
  return project;
}

async function getTemplatePath(templateName: string): Promise<Template> {
  if (templateName == '') {
    // Prompt for template
    const selection = readlineSync.keyInSelect(availableTemplates, chalkColour`{whiteBright What template you want to use?}`)
    if (selection == -1) {
      process.exit(0);
    }
    templateName = availableTemplates[selection];
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
