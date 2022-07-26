// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import * as fs from "fs-extra";
import * as path from "path";
import { projectRootPath } from "./utilities";

export const templatesDir = path.join(projectRootPath(), "templates");
const availableTemplates = fs
  .readdirSync(templatesDir)
  .filter((x) => !x.startsWith("."));
export const templates: string[] = [];
for (const template of availableTemplates) {
  templates.push(template);
}
