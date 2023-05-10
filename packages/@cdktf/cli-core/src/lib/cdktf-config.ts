// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import {
  Language,
  Errors,
  CONFIG_DEFAULTS,
  TerraformDependencyConstraint,
} from "@cdktf/commons";
import path from "path";
import { logger } from "@cdktf/commons";

function findFileAboveCwd(
  file: string,
  rootPath = process.cwd()
): string | null {
  const fullPath = path.resolve(rootPath, file);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  const parentDir = path.resolve(rootPath, "..");
  if (fs.existsSync(parentDir) && parentDir !== rootPath) {
    return findFileAboveCwd(file, parentDir);
  }

  return null;
}

// TODO: move this to @cdktf/commons
// tracked here https://github.com/hashicorp/terraform-cdk/issues/1814
export class CdktfConfig {
  constructor(private cdktfConfigPath: string) {}

  private readCdktfConfig(): Record<string, unknown> {
    const cdktfConfig = require(this.cdktfConfigPath);
    if (typeof cdktfConfig !== "object" || cdktfConfig === null) {
      throw Errors.External(
        "cdktf.json is malformed. The root must be a JSON object."
      ); // TODO: define a schema and validate against it
    }
    return cdktfConfig;
  }

  private writeCdktfConfig(cdktfConfig: Record<string, unknown>) {
    const cdktfConfigString = JSON.stringify(cdktfConfig, null, 2);
    fs.writeFileSync(this.cdktfConfigPath, cdktfConfigString);
  }

  private getProperty(property: string): unknown {
    const cdktfConfig = this.readCdktfConfig();
    return cdktfConfig[property] || (CONFIG_DEFAULTS as any)[property];
  }

  public get language(): Language {
    const rawLanguage = this.getProperty("language");
    const language = Object.values(Language).find(
      (value) => value === rawLanguage
    );
    if (!language)
      throw Errors.Usage(
        `${rawLanguage} is not a valid language. It must be one of ${Object.values(
          Language
        )}`
      );

    return language;
  }

  public get codeMakerOutput(): string {
    return this.getProperty("codeMakerOutput") as string;
  }

  public get terraformProviders(): (TerraformDependencyConstraint | string)[] {
    const providers = this.getProperty("terraformProviders");
    if (!Array.isArray(providers)) return [];
    return providers;
  }

  public get terraformModules(): (TerraformDependencyConstraint | string)[] {
    const modules = this.getProperty("terraformModules");
    if (!Array.isArray(modules)) return [];
    return modules;
  }

  public writeTerraformProviders(
    providers: (TerraformDependencyConstraint | string)[]
  ) {
    const cdktfConfig = this.readCdktfConfig();
    cdktfConfig.terraformProviders = providers;
    this.writeCdktfConfig(cdktfConfig);
  }

  public get projectDirectory(): string {
    return path.dirname(this.cdktfConfigPath);
  }

  public static read(path: string = process.cwd()): CdktfConfig {
    const cdktfConfigPath = findFileAboveCwd("cdktf.json", path);
    if (!cdktfConfigPath) {
      throw Errors.External(
        "Could not find cdktf.json. Make sure there is a cdktf.json file in the current directory or one of its parents."
      );
    }
    logger.trace(`cdktf.json found at ${cdktfConfigPath}`);

    return new CdktfConfig(cdktfConfigPath);
  }
}
