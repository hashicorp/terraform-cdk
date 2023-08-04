/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');

exports.pre = (variables) => {
  try {
    if (os.platform() === 'win32') {
      execSync('where gradle')
    }
    else {
      execSync('which gradle')
    }
  } catch {
    console.error(`Unable to find "gradle". Install from https://maven.apache.org/install.html`);
    process.exit(1);
  }
  variables.constructs_version = variables.constructs_version.replace('^', '').replace('~', '');
};

exports.post = options => {
  const { mvn_cdktf, cdktf_version } = options;
  if (!mvn_cdktf) {
    throw new Error(`missing context "mvn_cdktf"`);
  }

  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (options.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${options.OrganizationName}' organization and '${options.WorkspaceName}' workspace.....`)
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName, options.TerraformRemoteHostname)
  }

  // This is used for installing artifacts that are local (not from Maven)
  // https://maven.apache.org/plugins/maven-install-plugin/usage.html
  if (mvn_cdktf.endsWith('.jar')) {
    writeFileSync('./build.gradle',
      readFileSync('./build.gradle', 'utf-8').replace(
        `implementation "com.hashicorp:cdktf:${cdktf_version}"`, 
        `implementation files("${mvn_cdktf}")`
      )
    );
  }

  execSync(`gradle wrapper`, { stdio: 'inherit' });
  execSync(`./gradlew install`, { stdio: 'inherit' });
  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName, terraformRemoteHostname) {
  template = readFileSync('./src/main/java/com/mycompany/app/Main.java', 'utf-8');

  result = template.replace(`import com.hashicorp.cdktf.App;`, `import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.NamedCloudWorkspace;
import com.hashicorp.cdktf.CloudBackend;
import com.hashicorp.cdktf.CloudBackendConfig;`);
  result = result.replace(`new MainStack(app, "${baseName}");`, `MainStack stack = new MainStack(app, "${baseName}");
        new CloudBackend(stack, CloudBackendConfig.builder().hostname("${terraformRemoteHostname}").organization("${organizationName}").workspaces(new NamedCloudWorkspace("${workspaceName}")).build());`);

  writeFileSync('./src/main/java/com/mycompany/app/Main.java', result, 'utf-8');
}