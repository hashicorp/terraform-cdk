const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');

exports.post = ctx => {
  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (ctx.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${ctx.OrganizationName}' organization and '${ctx.WorkspaceName}' workspace.....`)
    terraformCloudConfig(ctx.$base, ctx.OrganizationName, ctx.WorkspaceName, ctx.TerraformRemoteHostname);
  }

  const npm_cdktf = ctx.npm_cdktf;
  if (!npm_cdktf) { throw new Error(`missing context "npm_cdktf"`); }

  installDeps([npm_cdktf, `constructs@10`]);
  installDeps(['@types/node', 'typescript', 'jest', '@types/jest', "ts-jest", "ts-node", "tsconfig-paths"], true);

  console.log(readFileSync('./help', 'utf-8'));
};

function installDeps(deps, isDev) {
  const devDep = isDev ? '-D' : '';
  // make sure we're installing dev dependencies as well
  const env = Object.assign({}, process.env)
  env['NODE_ENV'] = 'development'

  execSync(`npm install ${devDep} ${deps.join(' ')}`, { stdio: 'inherit', env });
}

function terraformCloudConfig(baseName, organizationName, workspaceName, terraformRemoteHostname) {
  template = readFileSync('./src/myStack.ts', 'utf-8');

  result = template.replace(`import { TerraformStack } from "cdktf";`, `import { TerraformStack, CloudBackend, NamedCloudWorkspace } from "cdktf";`);
  result = result.replace(`// define resources here`, `// define resources here
    new CloudBackend(this, {
      hostname: "${terraformRemoteHostname}",
      organization: "${organizationName}",
      workspaces: new NamedCloudWorkspace("${workspaceName}")
    });`);

  writeFileSync('./src/myStack.ts', result, 'utf-8');
}
