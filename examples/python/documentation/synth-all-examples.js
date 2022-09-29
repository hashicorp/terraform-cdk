const fs = require("fs");
const path = require("path");
const exec = require("child_process").execSync;

// find all main.py files
const files = fs.readdirSync(path.resolve(__dirname))

const targets = files.filter(file => file.startsWith("main-") && file.endsWith(".py"))

console.log(targets)
let failed = false;
// synth each main.py file
for (const target of targets){
    try{
        exec(`cdktf synth --app "pipenv run python ${target}"`)
    } catch(e){
        console.error(e.message)
        failed = true;
    }
    
}

if(failed){
    console.error("One or more examples failed to synth")
    process.exit(1)
}