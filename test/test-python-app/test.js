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
execSync(`cdktf init --template python --project-name="python-test" --project-description="python test app" --local`, { stdio: 'inherit', env });

// put some code in it
fs.copyFileSync(path.join(scriptdir, 'main.py'), 'main.py');
fs.copyFileSync(path.join(scriptdir, 'cdktf.json'), 'cdktf.json');

fs.rmdirSync('cdktf.out', { recursive: true });

// regenerate with module
execSync(`cdktf get`, { stdio: 'inherit', env });

// build
execSync('cdktf synth', { stdio: 'inherit', env })

// get rid of downloaded Terraform providers, no point in diffing them
fs.rmdirSync('cdktf.out/.terraform', { recursive: true });

// show output
if (os.platform() === 'win32') {
    execSync(`fc cdktf.out\\* ${scriptdir}\\expected\\*`, { stdio: 'inherit', env });
}
else {
    execSync(`diff cdktf.out ${scriptdir}/expected`, { stdio: 'inherit', env });
}

console.log('PASS');