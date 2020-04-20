const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const constructs_version = require('../../package.json').dependencies.constructs;

exports.post = ctx => {
  const npm_cdktf = ctx.npm_cdktf;
  const npm_cdktf_cli = ctx.npm_cdktf_cli;

  if (!npm_cdktf) { throw new Error(`missing context "npm_cdktf"`); }
  if (!npm_cdktf_cli) { throw new Error(`missing context "npm_cdktf_cli"`); }

  installDeps([ npm_cdktf, `constructs@${constructs_version}` ]);
  installDeps([ npm_cdktf_cli, '@types/node', 'typescript' ], true);

  execSync('npm run get', { stdio: 'inherit' });
  execSync('npm run build', { stdio: 'inherit' });

  console.log(readFileSync('./help', 'utf-8'));
};

function installDeps(deps, isDev) {
  const devDep = isDev ? '-D' : '';
  execSync(`npm install ${devDep} ${deps.join(' ')}`, { stdio: 'inherit' });
}

