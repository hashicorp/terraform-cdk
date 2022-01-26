const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');

exports.pre = (variables) => {
  try {
    if (os.platform() === 'win32') {
      execSync('where mvn')
    }
    else {
      execSync('which mvn')
    }
  } catch {
    console.error(`Unable to find "mvn". Install from https://maven.apache.org/install.html`);
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
    terraformCloudConfig(options.$base, options.OrganizationName, options.WorkspaceName)
  }

  // This is used for installing artifacts that are local (not from Maven)
  // https://maven.apache.org/plugins/maven-install-plugin/usage.html
  if (mvn_cdktf.endsWith('.jar')) {
    execSync(`mvn install:install-file -Dfile=${mvn_cdktf} -DgroupId=com.hashicorp -DartifactId=cdktf -Dversion=${cdktf_version} -Dpackaging=jar`, { stdio: 'inherit' })
  }

  execSync(`mvn install`, { stdio: 'inherit' });
  console.log(readFileSync('./help', 'utf-8'));
};

function terraformCloudConfig(baseName, organizationName, workspaceName) {
  template = readFileSync('./src/main/java/com/mycompany/app/Main.java', 'utf-8');

  result = template.replace(`import com.hashicorp.cdktf.App;`, `import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.NamedRemoteWorkspace;
import com.hashicorp.cdktf.RemoteBackend;
import com.hashicorp.cdktf.RemoteBackendProps;`);
  result = result.replace(`new Main(app, "${baseName}");`, `Main stack = new Main(app, "${baseName}");
new RemoteBackend(stack, RemoteBackendProps.builder().hostname("app.terraform.io").organization("${organizationName}").workspaces(new NamedRemoteWorkspace("${workspaceName}")).build());`);

  writeFileSync('./src/main/java/com/mycompany/app/Main.java', result, 'utf-8');
}