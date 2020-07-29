const { execSync } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const env = Object.assign({}, process.env);
// Disable spinner even when we have a TTY
env['CI'] = '1';

const scriptdir = __dirname;

const projectPath = path.join(os.tmpdir(), 'test');
const folder = fs.mkdtempSync(projectPath);
process.chdir(folder);

// initialize an empty project
execSync(`cdktf init --template typescript --project-name="typescript-test" --project-description="typescript test app" --local`, { stdio: 'inherit', env });

// put some code in it
fs.copyFileSync(path.join(scriptdir, 'main.ts'), 'main.ts');

// add null provider
fs.copyFileSync(path.join(scriptdir, 'cdktf.json'), 'cdktf.json');
execSync(`cdktf get`, { stdio: 'inherit', env });

// diff
execSync(`cdktf deploy --auto-approve > output`, { stdio: 'inherit', env });
if (os.platform() === 'win32') {
    execSync(`fc output ${scriptdir}/expected/output`, { stdio: 'inherit', env });
}
else {
    execSync(`diff output ${scriptdir}/expected/output`, { stdio: 'inherit', env });
}

console.log('PASS');