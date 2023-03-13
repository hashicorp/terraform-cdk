/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Builds a single example, passed  as the first argument.

const path = require("path");
const os = require("os");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { performance } = require("perf_hooks");

async function run(command) {
  const start = performance.now();
  const args = os.platform() === "darwin" ? `-pl` : `-pv`;
  const res = await exec(`/usr/bin/time ${args} ${command}`, {
    env: {
      ...process.env,
      CI: "true", // Disable spinner even when we have a TTY
    },
    maxBuffer: 256 * 1024 * 1024, // ~270 MB; Nodejs default is 1024 * 1024 (bytes) which is ~1 MiB
    cwd: path.resolve(__dirname, ".."),
  });
  const time = (performance.now() - start) / 1000;

  const output = res.stdout.toString();
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
  const getStats = await runInExample(`build`);
  await runInExample(`beforeSynth`);
  const synthStats = await runInExample(`synth`);

  console.log(
    `${exampleToBuild} built in ${getStats.time}s using ${getStats.maxMemoryKbytes} kb of memory`
  );
  console.log(
    `${exampleToBuild} synthesized in ${synthStats.time}s using ${synthStats.maxMemoryKbytes} kb of memory`
  );
}

(async function catchUnhandledRejections() {
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
