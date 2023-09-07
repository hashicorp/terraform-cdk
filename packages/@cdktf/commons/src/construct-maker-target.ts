/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import {
  Language,
  TerraformDependencyConstraint,
  TerraformModuleConstraint,
} from "./config";
import { ModuleSchema } from "./module-schema";
import { ProviderSchema } from "./provider-schema";

export abstract class ConstructsMakerTarget {
  public readonly fileName: string;

  constructor(
    public readonly constraint: TerraformDependencyConstraint,
    public readonly targetLanguage: Language
  ) {
    if (this.constraint instanceof TerraformModuleConstraint) {
      this.fileName = `${this.typesPath(this.constraint.fileName)}.ts`;
    } else {
      this.fileName = `${this.typesPath(this.constraint.name)}.ts`;
    }
  }

  public static from(
    constraint: TerraformDependencyConstraint,
    targetLanguage: Language
  ) {
    if (constraint instanceof TerraformModuleConstraint) {
      return new ConstructsMakerModuleTarget(constraint, targetLanguage);
    } else {
      return new ConstructsMakerProviderTarget(constraint, targetLanguage);
    }
  }

  public get version() {
    return this.constraint.version;
  }

  public get source() {
    return this.constraint.source;
  }

  public get name() {
    return this.constraint.name;
  }

  public get fqn() {
    return this.constraint.fqn;
  }

  public get namespace() {
    return this.constraint.namespace;
  }

  public get moduleKey() {
    return this.fqn.replace(/\//gi, "_");
  }

  public abstract get srcMakName(): string;
  public abstract get isModule(): boolean;
  public abstract get isProvider(): boolean;
  public abstract get trackingPayload(): Record<string, any>;
  protected abstract get simplifiedName(): string;

  protected abstract typesPath(name: string): string;
}

export class ConstructsMakerModuleTarget extends ConstructsMakerTarget {
  public spec?: ModuleSchema;

  public get isModule() {
    return true;
  }

  public get isProvider() {
    return false;
  }

  public get srcMakName(): string {
    switch (this.targetLanguage) {
      case Language.GO:
        return this.name.replace(/-/gi, "_");
      case Language.JAVA:
      case Language.CSHARP:
      case Language.PYTHON:
      default:
        return this.simplifiedName;
    }
  }

  public get trackingPayload() {
    return {
      name: this.name,
      fullName: this.fqn,
      version: this.version,
      type: "module",
    };
  }

  protected typesPath(name: string): string {
    return `modules/${name}`;
  }

  protected get simplifiedName(): string {
    return (
      this.namespace?.replace(/\//gi, ".").replace(/-/gi, "_") ?? this.name
    );
  }
}

export class ConstructsMakerProviderTarget extends ConstructsMakerTarget {
  public spec?: ProviderSchema;

  public get isModule() {
    return false;
  }

  public get isProvider() {
    return true;
  }

  public get srcMakName(): string {
    switch (this.targetLanguage) {
      case Language.JAVA:
        // "null" is a reserved keyword and can't be used as a package name
        return this.isNullProvider ? "nullprovider" : this.simplifiedName;
      case Language.CSHARP:
        // "null" is a reserved keyword and can't be used as a namespace
        return this.isNullProvider ? "Providers.Null" : this.simplifiedName;
      case Language.PYTHON:
        return this.simplifiedName;
      case Language.GO:
        return this.name.replace(/-/gi, "_");
      default:
        return this.constraint.fqn;
    }
  }

  public get trackingPayload() {
    return {
      name: this.name,
      fullName: this.source,
      version: this.version,
      type: "provider",
    };
  }

  protected typesPath(name: string): string {
    return `providers/${name}/index`;
  }

  private get isNullProvider() {
    return this.constraint.name === "null";
  }

  protected get simplifiedName(): string {
    return this.name.replace(/\//gi, ".").replace(/-/gi, "_");
  }
}
