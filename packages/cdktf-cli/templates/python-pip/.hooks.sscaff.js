const { execSync } = require('child_process');
const { chmodSync } = require('fs');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');

exports.pre = () => {
  try {
    if (os.platform() === 'win32') {
      execSync('where pip3')
    }
    else {
      execSync('which pip3')
    }
  } catch {
    console.error(`Unable to find "pip3".`)
    process.exit(1);
  }
};

exports.post = options => {
  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (options.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${options.OrganizationName}' organization and '${options.WorkspaceName}' workspace.....`)
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName)
  }

  const pypi_cdktf = options.pypi_cdktf;
  if (!pypi_cdktf) {
    throw new Error(`missing context "pypi_cdktf"`);
  }

  writeFileSync('requirements.txt', pypi_cdktf, 'utf-8');
  let installArgs = '';
  if (!process.env.VIRTUAL_ENV) {
    installArgs += '--user'
  }
  execSync(`pip3 install ${installArgs} -r requirements.txt`, { stdio: 'inherit' });
  chmodSync('main.py', '700');

  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName) {
  template = readFileSync('./main.py', 'utf-8');

  const templateWithImports = template.replace(`from cdktf import App, TerraformStack`,
    `from cdktf import App, TerraformStack, RemoteBackend, NamedRemoteWorkspace`)

  const result = templateWithImports.replace(`MyStack(app, "${baseName}")`, `stack = MyStack(app, "${baseName}")
RemoteBackend(stack,
  hostname='app.terraform.io',
  organization='${organizationName}',
  workspaces=NamedRemoteWorkspace('${workspaceName}')
)`);

  writeFileSync('./main.py', result, 'utf-8');
}
