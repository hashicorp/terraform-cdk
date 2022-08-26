#!/usr/bin/env node

const exec = (cmd) => require("child_process").execSync(cmd).toString();
const lastReleasedVersion = require("../package.json").version;

const lastReleaseMergedAt = exec(
  `git log -1 --format=%as v${lastReleasedVersion}`
);
const json = JSON.parse(
  exec(
    `gh pr list --state merged --json number,title -B main -S='merged:>${lastReleaseMergedAt}'`
  )
); // just a high enough limit

const allowedTypes = [
  "feat",
  "fix",
  "chore",
  "refactor",
  "revert",
  "test",
  "perf",
];
function getType(prTitle) {
  return allowedTypes.find((type) => prTitle.startsWith(type)) || "Other";
}
const titleMap = json.reduce(
  (map, pr) => ({ ...map, [pr.number]: pr.title }),
  {}
);
const typeMap = json.reduce((map, pr) => {
  const type = getType(pr.title);

  return { ...map, [type]: [...(map[type] || []), pr.number] };
}, {});

const lines = Object.entries(typeMap).map(([type, prsPerType]) => {
  const content = prsPerType
    .map((num) => {
      if (titleMap[num])
        return `- ${titleMap[num]} [\\#${num}](https://github.com/hashicorp/terraform-cdk/pull/${num})`;
      else throw new Error(`no json data for PR #${num}`);
    })
    .join("\n");

  return `### ${type}\n${content}\n\n`;
});
console.log(lines.join("\n"));
