/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Builds a single example, passed  as the first argument.

var path = require("path");
var os = require("os");
var exec = require("child_process").execSync;
const { performance } = require("perf_hooks");

function run(command) {
  const start = performance.now();
  const args = os.platform() === "darwin" ? `-pl` : `-pv`;
  const stdout = exec(`/usr/bin/time ${args} ${command}`, {
    stdio: ["pipe", "pipe", "pipe"],
    env: {
      ...process.env,
      CI: "true", // Disable spinner even when we have a TTY
    },
    cwd: path.resolve(__dirname, ".."),
  });
  const time = (performance.now() - start) / 1000;

  const output = stdout.toString();
  console.log(output);

  const match = /Maximum resident set size \(kbytes\): (\d+)/.exec(output);
  let maxMemoryKbytes = null;
  if (match) {
    maxMemoryKbytes = Number(match[1]);
  }

  return { time, maxMemoryKbytes };
}

const exampleToBuild = process.argv[2];

if (!exampleToBuild) {
  console.error("No example to build specified");
  process.exit(1);
}

function runInExample(command) {
  try {
    return run(`npx lerna run --scope='${exampleToBuild}' ${command}`);
  } catch (e) {
    const err = new Error(
      `Failed to run ${command} in ${exampleToBuild} with signal ${e.signal}`
    );
    console.error(err.message);
    console.error("STDOUT:");
    console.error(e.stdout.toString());
    console.error("STDERR:");
    console.error(e.stderr.toString());
    throw err;
  }
}

runInExample(`reinstall`);
const getStats = runInExample(`build`);
runInExample(`beforeSynth`);
const synthStats = runInExample(`synth`);

console.log(
  `${exampleToBuild} built in ${getStats.time}s using ${getStats.maxMemoryKbytes} kb of memory`
);
console.log(
  `${exampleToBuild} synthesized in ${synthStats.time}s using ${synthStats.maxMemoryKbytes} kb of memory`
);
