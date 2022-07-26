// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { toSnakeCase } from "codemaker";
import path from "path";
import {
  ResourceNamespace,
  getResourceNamespace,
} from "../constants/provider-namespaces";
import { Schema } from "../provider-schema";
import { AttributeModel } from "./attribute-model";
import { Struct, ConfigStruct } from "./struct";

// Limit is 1200 to prevent stack size error.
// Could increase now that calculation is more accurate;
// however, probably better to have smaller
export const STRUCT_SHARDING_THRESHOLD = 400;

interface ResourceModelOptions {
  terraformType: string;
  className: string;
  baseName: string;
  fileName: string;
  filePath: string;
  attributes: AttributeModel[];
  structs: Struct[];
  provider: string;
  schema: Schema;
  terraformSchemaType: string;
  configStructName: string;
}

type DefinitionPath = string;
export class ResourceModel {
  public className: string;
  public filePath: string;
  public terraformType: string;
  public baseName: string;
  public provider: string;
  public providerVersionConstraint?: string;
  public providerVersion?: string;
  public terraformProviderSource?: string;
  public fileName: string;
  public attributes: AttributeModel[];
  public schema: Schema;
  private _structs: Struct[];
  private dependencies: string[];
  private terraformSchemaType: string;
  private configStructName: string;
  public readonly structsRequireSharding: boolean;
  public recursiveAttributePaths: { [usagePath: string]: DefinitionPath } = {};

  constructor(options: ResourceModelOptions) {
    this.className = options.className;
    this.filePath = options.filePath;
    this.terraformType = options.terraformType;
    this.baseName = options.baseName;
    this.attributes = options.attributes;
    this.schema = options.schema;
    this.provider = options.provider;
    this.fileName = options.fileName;
    this._structs = options.structs;
    this.terraformSchemaType = options.terraformSchemaType;
    this.configStructName = options.configStructName;
    this.dependencies = [
      `import { Construct } from 'constructs';`,
      `import * as cdktf from 'cdktf';`,
    ];

    this.structsRequireSharding =
      this._structs.reduce((partialSum, s) => partialSum + s.exportCount, 0) >
      STRUCT_SHARDING_THRESHOLD;
  }

  public get structs(): Struct[] {
    return [this.configStruct, ...this._structs];
  }

  public get configStruct() {
    return new ConfigStruct(this.configStructName, this.attributes);
  }

  public get synthesizableAttributes(): AttributeModel[] {
    return this.configStruct.assignableAttributes;
  }

  public get importStatements(): string[] {
    return this.dependencies;
  }

  public get schemaAsJson(): string {
    return this.escapeSchema(JSON.stringify(this.schema, undefined, 2));
  }

  public get linkToDocs(): string {
    if (this.isProvider)
      return `https://www.terraform.io/docs/providers/${this.provider}`;
    return `https://www.terraform.io/docs/providers/${this.provider}/${
      this.isDataSource ? "d" : "r"
    }/${this.terraformDocName}`;
  }

  public get isProvider(): boolean {
    return this.terraformSchemaType === "provider";
  }

  public get namespace(): ResourceNamespace | undefined {
    return getResourceNamespace(this.provider, this.baseName);
  }

  public get isDataSource(): boolean {
    return this.terraformSchemaType === "data_source";
  }

  public get parentClassName(): string {
    return this.isProvider
      ? "TerraformProvider"
      : this.isDataSource
      ? "TerraformDataSource"
      : "TerraformResource";
  }

  public get terraformResourceType(): string {
    return this.isProvider
      ? this.provider
      : this.isDataSource
      ? this.terraformType.replace(/^data_/, "")
      : this.terraformType;
  }

  public get terraformDocName(): string {
    return toSnakeCase(
      this.terraformResourceType.replace(
        new RegExp(`^${this.provider}_`, "i"),
        ""
      )
    );
  }

  public get referencedTypes(): string[] {
    return this.configStruct.referencedTypes;
  }

  public get structsFolderName(): string {
    return `${path.basename(this.fileName, ".ts")}-structs`;
  }

  public get structsFolderPath(): string {
    const basePath = this.filePath.split("/").slice(0, -1).join("/");

    if (this.namespace) {
      return path.join(basePath, this.namespace!.name, this.structsFolderName);
    } else {
      return path.join(basePath, this.structsFolderName);
    }
  }

  private escapeSchema(schema: string): string {
    return schema.replace(/(\*\/)/gi, `*\\/`);
  }
}
