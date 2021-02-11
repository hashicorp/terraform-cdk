const { execSync } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const env = Object.assign({}, process.env);
env['CI'] = '1';
env['FORCE_COLOR'] = '1';

const projectPath = path.join(os.tmpdir(), 'test');
const folder = fs.mkdtempSync(projectPath);
process.chdir(folder);

execSync(`cdktf init --template typescript --project-name="typescript-test" --project-description="typescript test app" --local`, { stdio: 'inherit', env });

console.log('PASS');