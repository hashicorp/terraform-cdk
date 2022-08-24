// Builds a single example, passed  as the first argument.

var fs = require("fs");
var path = require("path");
var exec = require("child_process").execSync;

function run(command) {
  const start = performance.now();
  exec(command, {
    stdio: "inherit",
    env: {
      ...process.env,
      CI: "true", // Disable spinner even when we have a TTY
    },
  });
  return (performance.now() - start) / 1000;
}

const exampleToBuild = process.argv[2];

if (!exampleToBuild) {
  console.error("No example to build specified");
  process.exit(1);
}

run(`npx lerna run --scope ${exampleToBuild}* reinstall`);
const getTime = run(`npx lerna run --scope ${exampleToBuild}* build`);
const synthTime = run(`npx lerna run --scope ${exampleToBuild}* synth`);

console.log(`${exampleToBuild} built in ${getTime}s`);
console.log(`${exampleToBuild} synthesized in ${synthTime}s`);
