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
execSync(`cdktf init --template csharp --project-name="csharp-test" --project-description="csharp test app" --local`, { stdio: 'inherit', env });

execSync(`dotnet restore`)

// put some code in it
fs.copyFileSync(path.join(scriptdir, 'Main.cs'), 'Main.cs');
fs.copyFileSync(path.join(scriptdir, 'cdktf.json'), 'cdktf.json');

// regenerate with module
execSync(`cdktf get`, { stdio: 'inherit', env });

// reference generated module
execSync('dotnet add reference .gen/aws/aws.csproj', { stdio: 'inherit', env });

// build
execSync('cdktf synth', { stdio: 'inherit', env });

// show output
if (os.platform() === 'win32') {
    execSync(`fc cdktf.out\\* ${scriptdir}\\expected\\*`, { stdio: 'inherit', env });
}
else {
    execSync(`diff cdktf.out ${scriptdir}/expected`, { stdio: 'inherit', env });
}

console.log('PASS');