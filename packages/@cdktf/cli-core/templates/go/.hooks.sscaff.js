/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { readFile } = require('fs-extra');
const os = require('os');

exports.pre = (variables) => {
  try {
    if (os.platform() === 'win32') {
      execSync('where go')
    }
    else {
      execSync('which go')
    }
  } catch {
    console.error(`Unable to find "go" installation. Install from https://golang.org/dl/`);
    process.exit(1);
  }
  // remove caret (^) from constructs_version as Go needs a specific version
  variables.constructs_version = variables.constructs_version.replace('^', '');
};

exports.post = options => {
  const { go_cdktf, cdktf_version } = options;
  if (!go_cdktf) {
    throw new Error(`missing context "go_cdktf"`);
  }

  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (options.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${options.OrganizationName}' organization and '${options.WorkspaceName}' workspace.....`)
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName, options.TerraformRemoteHostname)
  }

  // dist package
  if (go_cdktf.endsWith('cdktf')) {
    const gomod = readFileSync('./go.mod', 'utf-8');

    // set the version of the package to the version of the CDKTF CLI as the package itself
    // will be replaced and have no version on its own
    let result = gomod.replace(go_cdktf, `v${cdktf_version}`);
    result += `\n\nreplace github.com/hashicorp/terraform-cdk-go/cdktf => ${go_cdktf}\n`;

    writeFileSync('./go.mod', result, 'utf-8');
  }

  execSync(`go get`, { stdio: 'inherit' });

  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName, terraformRemoteHostname) {
  template = readFileSync('./main.go', 'utf-8');

  result = template.replace(`NewMyStack(app, "${baseName}")`, `stack := NewMyStack(app, "${baseName}")
	cdktf.NewCloudBackend(stack, &cdktf.CloudBackendConfig{
		Hostname:     jsii.String("${terraformRemoteHostname}"),
		Organization: jsii.String("${organizationName}"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("${workspaceName}")),
	})`);

  // add import for jsii helper used above
  result = result.replace(`"github.com/aws/constructs-go/constructs/v10"`, `"github.com/aws/constructs-go/constructs/v10"\n	"github.com/aws/jsii-runtime-go"`);

  writeFileSync('./main.go', result, 'utf-8');
}
