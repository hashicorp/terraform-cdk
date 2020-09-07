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

// This is baked into the image at 512m
env['MAVEN_OPTS'] = '-Xmx3G'

// initialize an empty project
execSync(`cdktf init --template java --project-name="java-test" --project-description="java test app" --local`, { stdio: 'inherit', env });

// put some code in it
fs.copyFileSync(path.join(scriptdir, 'Main.java'), 'src/main/java/com/mycompany/app/Main.java');
fs.copyFileSync(path.join(scriptdir, 'cdktf.json'), 'cdktf.json');

// regenerate with module
execSync(`cdktf get`, { stdio: 'inherit', env });

// build
execSync('cdktf synth', { stdio: 'inherit', env })

// show output
if (os.platform() === 'win32') {
    execSync(`fc cdktf.out\\* ${scriptdir}\\expected\\*`, { stdio: 'inherit', env });
}
else {
    execSync(`diff cdktf.out ${scriptdir}/expected`, { stdio: 'inherit', env });
}

console.log('PASS');