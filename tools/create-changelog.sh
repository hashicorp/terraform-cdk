#!/usr/bin/env node

const exec = (cmd) => require("child_process").execSync(cmd).toString();
const lastReleasedVersion = require("../package.json").version;
const prs = exec(
  `git log v${lastReleasedVersion}..HEAD | grep "Merge pull request #"`
)
  .split(" ")
  .filter((word) => word.match(/#\d*/))
  .map((word) => parseInt(word.replace("#", ""), 10));

const json = JSON.parse(
  exec("gh pr list --state merged --json number,title --limit 200")
); // just a high enough limit

function getType(prTitle) {
  if (prTitle.indexOf("(") !== -1) {
    return prTitle.slice(0, prTitle.indexOf("("));
  } else {
    return "Other";
  }
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
    .filter((pr) => prs.includes(pr))
    .map((num) => {
      if (titleMap[num])
        return `- ${titleMap[num]} [\\#${num}](https://github.com/hashicorp/terraform-cdk/pull/${num})`;
      else throw new Error(`no json data for PR #${num}`);
    })
    .join("\n");

  return `### ${type}\n${content}\n\n`;
});
console.log(lines.join("\n"));