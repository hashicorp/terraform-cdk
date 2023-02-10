/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

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
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName, options.TerraformRemoteHostname)
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
  execSync(`dotnet add package Microsoft.NET.Test.Sdk --version 17.2.0`, { stdio: 'inherit' });
  execSync(`dotnet add package xunit --version 2.4.1`, { stdio: 'inherit' });
  execSync(`dotnet add package xunit.runner.visualstudio --version 2.4.5`, { stdio: 'inherit' });
  execSync(`dotnet restore`, { stdio: 'inherit' });
  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName, terraformRemoteHostname) {
  template = readFileSync('./Program.cs', 'utf-8');

  result = template.replace(`new MainStack(app, "${baseName}");`, `MainStack stack = new MainStack(app, "${baseName}");
            new CloudBackend(stack, new CloudBackendConfig { Hostname = "${terraformRemoteHostname}", Organization = "${organizationName}", Workspaces = new NamedCloudWorkspace("${workspaceName}") });`);

  writeFileSync('./Program.cs', result, 'utf-8');
}