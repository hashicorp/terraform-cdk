#!/usr/bin/env node

const exec = (cmd) => require("child_process").execSync(cmd).toString();
const lastReleasedVersion = require("../package.json").version;
const commitHashes = exec(
  `git log --pretty=format:"%H" v${lastReleasedVersion}..HEAD`
);

const json = JSON.parse(
  exec("gh pr list --state merged --json number,title,mergeCommit --limit 200")
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
const mergeCommitMap = json.reduce(
  (map, pr) => ({ ...map, [pr.number]: pr.mergeCommit.oid }),
  {}
);

const lines = Object.entries(typeMap).map(([type, prsPerType]) => {
  const content = prsPerType
    .filter((num) => commitHashes.includes(mergeCommitMap[num]))
    .map((num) => {
      if (titleMap[num])
        return `- ${titleMap[num]} [\\#${num}](https://github.com/hashicorp/terraform-cdk/pull/${num})`;
      else throw new Error(`no json data for PR #${num}`);
    })
    .join("\n");

  return `### ${type}\n${content}\n\n`;
});
console.log(lines.join("\n"));
