/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Builds a single example, passed  as the first argument.

const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function run(command) {
  console.log(`Running: ${command}`);
  const { stdout, stderr } = await exec(command, {
    env: {
      ...process.env,
      CI: "true", // Disable spinner even when we have a TTY
    },
    maxBuffer: 256 * 1024 * 1024, // ~270 MB; Nodejs default is 1024 * 1024 (bytes) which is ~1 MiB
    cwd: path.resolve(__dirname, ".."),
  });
  console.log(stdout.toString());
  console.error(stderr.toString());
}

const exampleToBuild = process.argv[2];

if (!exampleToBuild) {
  console.error("No example to build specified");
  process.exit(1);
}

async function runInExample(command) {
  try {
    return run(`npx lerna run --scope='${exampleToBuild}' ${command}`);
  } catch (e) {
    const err = new Error(
      `Failed to run ${command} in ${exampleToBuild} with status ${e.status} and signal ${e.signal}`
    );
    console.error(err.message);
    console.error(e);
    console.error("STDERR:");
    console.error(e.stderr.toString());
    console.error("STDOUT:");
    console.error(e.stdout.toString());
    throw err;
  }
}

async function main() {
  await runInExample(`reinstall`);
  await runInExample(`build`);
  await runInExample(`beforeSynth`);
  await runInExample(`synth`);
}

(async function catchUnhandledRejections() {
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
