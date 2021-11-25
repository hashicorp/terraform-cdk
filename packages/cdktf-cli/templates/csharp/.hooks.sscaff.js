const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');
const path = require('path');

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

  // dist package
  if (nuget_cdktf.endsWith('.nupkg')) {
    srcFolder = path.dirname(nuget_cdktf);

    writeFileSync('./NuGet.Config', `<?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <add key="Locally Distributed Packages" value="${srcFolder}" />
        <add key="NuGet official package source" value="https://api.nuget.org/v3/index.json" />
      </packageSources>
    </configuration>`, 'utf-8');
  }

  execSync(`dotnet restore`, { stdio: 'inherit' });
  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName) {
  template = readFileSync('./Main.cs', 'utf-8');

  result = template.replace(`new MyApp(app, "${baseName}");`, `MyApp stack = new MyApp(app, "${baseName}");
new RemoteBackend(stack, new RemoteBackendProps { Hostname = "app.terraform.io", Organization = "${organizationName}", Workspaces = new NamedRemoteWorkspace("${workspaceName}") });`);

  writeFileSync('./Main.cs', result, 'utf-8');
}