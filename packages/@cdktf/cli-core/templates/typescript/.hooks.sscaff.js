/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

exports.post = (ctx) => {
  const silent = ctx.silent === "true" || ctx.silent === true;
  // Terraform Cloud configuration settings if the organization name and workspace is set.
  if (ctx.OrganizationName != "") {
    if (!silent) {
      console.log(
        `\nGenerating Terraform Cloud configuration for '${ctx.OrganizationName}' organization and '${ctx.WorkspaceName}' workspace.....`
      );
    }
    terraformCloudConfig(
      ctx.$base,
      ctx.OrganizationName,
      ctx.WorkspaceName,
      ctx.TerraformRemoteHostname
    );
  }

  const npm_cdktf = ctx.npm_cdktf;
  if (!npm_cdktf) {
    throw new Error(`missing context "npm_cdktf"`);
  }

  installDeps([npm_cdktf, `constructs@10`], false, silent);
  installDeps(
    ["@types/node", "typescript", "jest", "@types/jest", "ts-jest", "ts-node"],
    true,
    silent
  );

  if (!silent) {
    console.log(readFileSync("./help", "utf-8"));
  }
};

function installDeps(deps, isDev, silent) {
  const devDep = isDev ? "-D" : "";
  // make sure we're installing dev dependencies as well
  const env = Object.assign({}, process.env);
  env["NODE_ENV"] = "development";

  execSync(`npm install ${devDep} ${deps.join(" ")}`, {
    stdio: silent ? "ignore" : "inherit",
    env,
  });
}

function terraformCloudConfig(
  baseName,
  organizationName,
  workspaceName,
  terraformRemoteHostname
) {
  template = readFileSync("./main.ts", "utf-8");

  result = template.replace(
    `import { App, TerraformStack } from "cdktf";`,
    `import { App, TerraformStack, CloudBackend, NamedCloudWorkspace } from "cdktf";`
  );
  result = result.replace(
    `new MyStack(app, "${baseName}");`,
    `const stack = new MyStack(app, "${baseName}");
new CloudBackend(stack, {
  hostname: "${terraformRemoteHostname}",
  organization: "${organizationName}",
  workspaces: new NamedCloudWorkspace("${workspaceName}")
});`
  );

  writeFileSync("./main.ts", result, "utf-8");
}
