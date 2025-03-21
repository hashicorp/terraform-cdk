// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { CodeMaker, toCamelCase } from "codemaker";
import {
  ConstructsMakerProviderTarget,
  ConstructsMakerTarget,
  LANGUAGES,
  logger,
  ProviderSchema,
  TerraformProviderConstraint,
} from "@cdktf/commons";
import { FQPN, parseFQPN, ProviderName } from "@cdktf/provider-schema";
import { ResourceModel } from "./models";
import { ResourceParser } from "./resource-parser";
import { ResourceEmitter, StructEmitter } from "./emitter";

interface ProviderData {
  name: string;
  source: string;
  version: string;
}

const isMatching = (
  target: ConstructsMakerTarget,
  terraformSchemaName: string,
): boolean => {
  if (target.isModule) return false;

  const elements = terraformSchemaName.split("/");

  if (elements.length === 1) {
    return target.source === terraformSchemaName;
  } else {
    const [hostname, namespace, provider] = elements;

    if (!hostname || !namespace || !provider) {
      throw new Error(`can't handle ${terraformSchemaName}`);
    }

    // If target.source is set, try to match it
    if (target.source) {
      const targetSource = {
        // defaults
        hostname: "registry.terraform.io",
        namespace: "hashicorp",
        name: "",
      };
      const targetElements = target.source.split("/");
      switch (targetElements.length) {
        case 1: // only name set
          targetSource.name = targetElements[0].toLowerCase();
          break;
        case 2: // namespace and name set
          targetSource.namespace = targetElements[0].toLowerCase();
          targetSource.name = targetElements[1].toLowerCase();
          break;
        case 3: // hostname, namespace and name set
          targetSource.hostname = targetElements[0].toLowerCase();
          targetSource.namespace = targetElements[1].toLowerCase();
          targetSource.name = targetElements[2].toLowerCase();
          break;
        default:
          throw new Error(
            `can't handle ${target.source}. Expected string with 1, 2 or 3 elements separated by '/'`,
          );
      }

      return (
        targetSource.hostname === hostname &&
        targetSource.namespace === namespace &&
        targetSource.name === provider
      );
    }

    // Else, try to match target.name to the provider name

    return target.name === provider;
  }
};

export interface ProviderConstraints {
  [fqn: string]: ProviderData;
}

export class TerraformProviderGenerator {
  private resourceParser = new ResourceParser();
  private resourceEmitter: ResourceEmitter;
  private structEmitter: StructEmitter;
  public versions: { [fqpn: string]: string | undefined } = {};

  constructor(
    private readonly code: CodeMaker,
    private readonly schema: ProviderSchema,
  ) {
    this.code.indentation = 2;
    this.resourceEmitter = new ResourceEmitter(this.code);
    this.structEmitter = new StructEmitter(this.code);
  }

  private getProviderByConstraint(
    providerConstraint: ConstructsMakerTarget,
  ): FQPN | undefined {
    return Object.keys(this.schema.provider_schemas || {}).find((fqpn) =>
      isMatching(providerConstraint, fqpn),
    ) as FQPN | undefined;
  }

  public generate(providerConstraint: ConstructsMakerTarget) {
    const fqpn = this.getProviderByConstraint(providerConstraint);
    if (!fqpn) {
      logger.debug(
        `Could not find provider constraint for ${providerConstraint} in schema: ${JSON.stringify(
          this.schema,
          null,
          2,
        )}`,
      );
      throw new Error(
        `Could not find provider with constraint ${JSON.stringify(
          providerConstraint,
        )}`,
      );
    }

    const providerVersion = this.schema.provider_versions?.[fqpn];
    this.emitProvider(fqpn, providerVersion, providerConstraint);
    this.versions[fqpn] = providerVersion;
  }

  public generateAll() {
    for (const fqpn of Object.keys(this.schema.provider_schemas || {})) {
      this.generate(
        new ConstructsMakerProviderTarget(
          new TerraformProviderConstraint(fqpn),
          LANGUAGES[0],
        ),
      );
    }
  }

  public async save(outdir: string) {
    await this.code.save(outdir);
  }

  public buildResourceModels(
    fqpn: FQPN,
    constraint?: ConstructsMakerTarget,
  ): ResourceModel[] {
    const provider = this.schema.provider_schemas?.[fqpn];
    if (!provider) {
      throw new Error(`Can not find provider '${fqpn}' in schema`);
    }

    const resources = Object.entries(provider.resource_schemas || {}).map(
      ([type, resource]) =>
        this.resourceParser.parse(fqpn, type, resource, "resource", constraint),
    );

    const dataSources = Object.entries(provider.data_source_schemas || {}).map(
      ([type, resource]) =>
        this.resourceParser.parse(
          fqpn,
          `data_${type}`,
          resource,
          "data_source",
          constraint,
        ),
    );

    return ([] as ResourceModel[]).concat(...resources, ...dataSources);
  }

  public getClassNameForResource(terraformType: string) {
    return this.resourceParser.getClassNameForResource(terraformType);
  }

  public getNamespaceNameForResource(terraformType: string) {
    return this.resourceParser.getNamespaceNameForResource(terraformType);
  }

  private emitProvider(
    fqpn: FQPN,
    providerVersion?: string,
    constraint?: ConstructsMakerTarget,
  ) {
    const name = constraint?.name
      ? (constraint.name as ProviderName)
      : parseFQPN(fqpn).name;
    const provider = this.schema.provider_schemas?.[fqpn];
    if (!provider) {
      throw new Error(`Can not find provider '${fqpn}' in schema`);
    }

    const files: string[] = [];
    this.buildResourceModels(fqpn, constraint).forEach((resourceModel) => {
      if (constraint) {
        resourceModel.providerVersionConstraint = constraint.version;
        resourceModel.terraformProviderSource = constraint.source;
      }
      resourceModel.providerVersion = providerVersion;

      if (resourceModel.structsRequireSharding) {
        files.push(this.emitResourceWithComplexStruct(resourceModel));
      } else {
        files.push(this.emitResource(resourceModel));
      }
      this.emitResourceReadme(resourceModel);
    });

    if (provider.provider) {
      const providerResource = this.resourceParser.parse(
        fqpn,
        `provider`,
        provider.provider,
        "provider",
        constraint,
      );
      if (constraint) {
        providerResource.providerVersionConstraint = constraint.version;
        providerResource.terraformProviderSource = constraint.source;
        providerResource.terraformProviderName = constraint.name;
      }
      providerResource.providerVersion = providerVersion;
      files.push(this.emitResource(providerResource));
      this.emitResourceReadme(providerResource);
    }

    this.emitIndexFile(name, files);
    this.emitLazyIndexFile(name, files);
  }

  private emitResourceReadme(resource: ResourceModel): void {
    const filePath = `${resource.namespaceFolderPath}/README.md`;
    this.code.openFile(filePath);
    this.code.line(`# \`${resource.terraformType}\``);
    this.code.line();
    const type = resource.isProvider
      ? resource.provider
      : resource.terraformType;
    this.code.line(
      `Refer to the Terraform Registry for docs: [\`${type}\`](${resource.linkToDocs}).`,
    );
    this.code.closeFile(filePath);
  }

  private emitIndexFile(provider: ProviderName, files: string[]): void {
    const folder = `providers/${provider}`;
    const filePath = `${folder}/index.ts`;
    this.code.openFile(filePath);
    this.code.line("// generated by cdktf get");
    for (const file of files) {
      const dirName = file.replace(`${folder}/`, "").replace("/index.ts", "");
      this.code.line(
        `export * as ${toCamelCase(dirName)} from './${dirName}';`,
      );
    }
    this.code.line();
    this.code.closeFile(filePath);
  }

  private emitLazyIndexFile(provider: ProviderName, files: string[]): void {
    const folder = `providers/${provider}`;
    const filePath = `${folder}/lazy-index.ts`;
    this.code.openFile(filePath);
    this.code.line("// generated by cdktf get");
    for (const file of files) {
      const dirName = file.replace(`${folder}/`, "").replace("/index.ts", "");
      this.code.line(
        `Object.defineProperty(exports, '${toCamelCase(
          dirName,
        )}', { get: function () { return require('./${dirName}'); } });`,
      );
    }
    this.code.line();
    this.code.closeFile(filePath);
  }

  private emitResource(resource: ResourceModel): string {
    this.code.openFile(resource.filePath);
    this.emitFileHeader(resource);
    this.structEmitter.emit(resource);
    this.resourceEmitter.emit(resource);
    this.code.closeFile(resource.filePath);

    return resource.filePath;
  }

  private emitResourceWithComplexStruct(resource: ResourceModel) {
    const generatedFiles = [];

    // drop the last segment of the filepath
    const filePath = resource.filePath;
    this.code.openFile(filePath);
    this.code.line(`// generated from terraform resource schema`);
    this.code.line();

    if (resource.structsRequireSharding) {
      if (resource.referencedTypes.length > 0) {
        this.code.line(
          `import { ${resource.referencedTypes.join(", \n")}} from './${
            resource.structsFolderName
          }'`,
        );
      }

      this.code.line(`export * from './${resource.structsFolderName}'`);

      resource.importStatements.forEach((statement) =>
        this.code.line(statement),
      );

      this.structEmitter.emitInterface(resource, resource.configStruct);
      this.resourceEmitter.emit(resource);

      this.code.closeFile(filePath);

      this.structEmitter.emit(resource);
      generatedFiles.push(resource.fileName);
      generatedFiles.push(resource.structsFolderName);
    } else {
      resource.importStatements.forEach((statement) =>
        this.code.line(statement),
      );

      this.structEmitter.emit(resource);
      this.resourceEmitter.emit(resource);
      this.code.closeFile(filePath);
      generatedFiles.push(resource.fileName);
    }

    return filePath;
  }

  private emitFileHeader(resource: ResourceModel) {
    this.code.line(`// ${resource.linkToDocs}`);
    this.code.line(`// generated from terraform resource schema`);
    this.code.line();
    resource.importStatements.forEach((statement) => this.code.line(statement));
    this.code.line();
    this.code.line("// Configuration");
    this.code.line();
  }
}
