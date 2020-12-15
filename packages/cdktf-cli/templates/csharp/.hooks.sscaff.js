const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');
const path = require('path');

const cli = require.resolve('../../bin/cdktf');

exports.pre = (variables) => {
  try {
    if (os.platform() === 'win32') {
      execSync('where dotnet')
    }
    else {
      execSync('which dotnet')
    }
  } catch {
    console.error(`Unable to find "dotnet" installation. Install from https://dotnet.microsoft.com/download`);
    process.exit(1);
  }
};

exports.post = options => {
  const { nuget_cdktf, cdktf_version } = options;
  if (!nuget_cdktf) {
    throw new Error(`missing context "nuget_cdktf"`);
  }

  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (options.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${options.OrganizationName}' organization and '${options.WorkspaceName}' workspace.....`)
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName)
  }

  // locally built package
  if (cdktf_version == '0.0.0') {
    pkgFileName = path.basename(nuget_cdktf);
    pkgName = pkgFileName.substring(0, pkgFileName.lastIndexOf(".".concat(cdktf_version)));
    srcFolder = path.dirname(nuget_cdktf);

    execSync(`dotnet add package '${pkgName}' --source '${srcFolder}'`, { stdio: 'inherit' });
  }
  else {
    execSync(`dotnet restore`, { stdio: 'inherit' });
  }

  execSync(`\"${process.execPath}\" ${cli} get`, { stdio: 'inherit' });
  execSync(`\"${process.execPath}\" ${cli} synth`, { stdio: 'inherit' });

  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName) {
  template = readFileSync('./Main.cs', 'utf-8');

  result = template.replace(`using Hashicorp.Cdktf.App;`, `using Hashicorp.Cdktf.App;
using Hashicorp.Cdktf.NamedRemoteWorkspace;
using Hashicorp.Cdktf.RemoteBackend;
using Hashicorp.Cdktf.RemoteBackendProps;`);
  result = result.replace(`new Main(app, "${baseName}");`, `Main stack = new Main(app, "${baseName}");
new RemoteBackend(stack, new RemoteBackendProps { Hostname = "app.terraform.io", Organization = "${organizationName}", Workspaces = new NamedRemoteWorkspace("${workspaceName}") };`);

  writeFileSync('./Main.cs', result, 'utf-8');
} 