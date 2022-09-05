// Builds a single example, passed  as the first argument.

const path = require("path");
const exec = require("child_process").execSync;
const { performance } = require("perf_hooks");
const StatsD = require("hot-shots");

function run(command) {
  const start = performance.now();
  const stdout = exec(`/usr/bin/time -pv ${command}`, {
    stdio: ["pipe", "pipe", process.stderr],
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
  return run(`npx lerna run --scope='${exampleToBuild}*' ${command}`);
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

if (process.env.CI) {
  const client = new StatsD({
    port: 8125,
    globalTags: {
      env: process.env.NODE_ENV,
      gitSha: process.env.GITHUB_SHA,
      gitRef: process.env.GITHUB_REF_NAME,
    },
    errorHandler: function (error) {
      console.log("Socket errors caught here: ", error);
    },
  });
  // exampleToBuild is e.g. @examples/typescript-aws-cloudfront-proxy
  const exampleName = exampleToBuild.replace(/^@examples\//, "");
  const exampleParts = exampleName.split("-");
  const exampleLanguage = exampleParts.shift(); // e.g. typescript
  const exampleId = exampleParts.join("_"); // e.g. aws_cloudfront_proxy

  client.gauge(`cdktf.${exampleLanguage}.${exampleId}.get.time`, getStats.time);
  if (getStats.maxMemoryKbytes) {
    client.gauge(
      `cdktf.${exampleLanguage}.${exampleId}.get.memory`,
      getStats.maxMemoryKbytes
    );
  }
  client.gauge(
    `cdktf.${exampleLanguage}.${exampleId}.synth.time`,
    synthStats.time
  );

  if (synthStats.maxMemoryKbytes) {
    client.gauge(
      `cdktf.${exampleToBuild}.synth.memory`,
      synthStats.maxMemoryKbytes
    );
  }
  client.close();
  console.log("Sent stats to Datadog");
}
