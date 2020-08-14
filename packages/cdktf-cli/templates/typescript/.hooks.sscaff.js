const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');

const constructs_version = require('../../package.json').dependencies.constructs;

exports.post = ctx => {
  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (ctx.OrganizationName != '') {
    console.log(`\nGenerating Terraform Cloud configuration for '${ctx.OrganizationName}' organization and '${ctx.WorkspaceName}' workspace.....`)
    terraformCloudConfig(ctx.$base, ctx.OrganizationName, ctx.WorkspaceName);
  }

  const npm_cdktf = ctx.npm_cdktf;
  const npm_cdktf_cli = ctx.npm_cdktf_cli;

  if (!npm_cdktf) { throw new Error(`missing context "npm_cdktf"`); }
  if (!npm_cdktf_cli) { throw new Error(`missing context "npm_cdktf_cli"`); }

  installDeps([ npm_cdktf, `constructs@${constructs_version}` ]);
  installDeps([ npm_cdktf_cli, '@types/node', 'typescript' ], true);

  execSync('npm run build', { stdio: 'inherit' });

  console.log(readFileSync('./help', 'utf-8'));
};

function installDeps(deps, isDev) {
  const devDep = isDev ? '-D' : '';
  // make sure we're installing dev dependencies as well
  const env = Object.assign({}, process.env)
  env['NODE_ENV'] = 'development'

  execSync(`npm install ${devDep} ${deps.join(' ')}`, { stdio: 'inherit', env });
}

function terraformCloudConfig(baseName, organizationName, workspaceName) {
  template = readFileSync('./main.ts', 'utf-8');

  result = template.replace(`import { App, TerraformStack } from 'cdktf';`, `import { App, TerraformStack, RemoteBackend } from 'cdktf';`);
  result = result.replace(`new MyStack(app, '${baseName}');`, `const stack = new MyStack(app, '${baseName}');
new RemoteBackend(stack, {
  hostname: 'app.terraform.io',
  organization: '${organizationName}',
  workspaces: {
    name: '${workspaceName}'
  }
});`);

  writeFileSync('./main.ts', result, 'utf-8');
}

