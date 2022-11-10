// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Language } from "@cdktf/provider-generator";
import { toPascalCase, toSnakeCase } from "codemaker";
import { CdktfConfig, ProviderDependencySpec } from "../cdktf-config";
import { Errors } from "../errors";
import { logger } from "../logging";
import { CdktfConfigManager } from "./cdktf-config-manager";
import { PackageManager } from "./package-manager";
import {
  getNpmPackageName,
  getPrebuiltProviderRepositoryName,
  getPrebuiltProviderVersionInformation,
  getPrebuiltProviderVersions,
} from "./prebuilt-providers";
import { getLatestVersion } from "./registry-api";
import { versionMatchesConstraint } from "./version-constraints";
import * as semver from "semver";
import { LocalProviderVersions } from "../local-provider-versions";

// ref: https://www.terraform.io/language/providers/requirements#source-addresses
const DEFAULT_HOSTNAME = "registry.terraform.io";
const DEFAULT_NAMESPACE = "hashicorp";
function normalizeProviderSource(source: string) {
  // returns <HOSTNAME>/<NAMESPACE>/<TYPE>
  const slashes = source.split("/").length - 1;
  switch (slashes) {
    case 0:
      return `${DEFAULT_HOSTNAME}/${DEFAULT_NAMESPACE}/${source}`;
    case 1:
      return `${DEFAULT_HOSTNAME}/${source}`;
    default:
      return source;
  }
}

export class ProviderConstraint {
  /**
   * normalized source of the provider
   * e.g. "registry.terraform.io/hashicorp/aws"
   */
  public readonly source: string;

  // TODO: add examples to cli command description (i.e. =,~>.> etc.)
  // if no version constraint is specified, we assume the latest version
  // if specific version is specified without e.g. =, we allow patch level increments (e.g. ~>2.12 for "2.12")
  constructor(source: string, public readonly version: string | undefined) {
    this.source = normalizeProviderSource(source);
  }

  static fromConfigEntry(
    provider: string | ProviderDependencySpec
  ): ProviderConstraint {
    if (typeof provider === "string") {
      const [src, version] = provider.split("@");
      return new ProviderConstraint(
        src.trim(),
        version ? version.trim() : undefined
      );
    }

    const src =
      (provider.namespace ? `${provider.namespace}/` : "") +
      (provider.source || provider.name);

    return new ProviderConstraint(src, provider.version);
  }

  public isFromTerraformRegistry(): boolean {
    return this.hostname === DEFAULT_HOSTNAME;
  }

  /**
   * the namespace of the provider
   * e.g. "hashicorp" or "kreuzwerker"
   */
  public get namespace(): string {
    return this.source.split("/")[1];
  }

  /**
   * the name of the provider
   * e.g. "aws"
   */
  public get name(): string {
    return this.source.split("/")[2];
  }

  /**
   * the hostname of the provider
   * e.g. "registry.terraform.io"
   */
  public get hostname(): string {
    return this.source.split("/")[0];
  }

  /**
   * returns a simplified provider name, dropping namespace and hostname
   * if they match the defaults
   */
  public get simplifiedName(): string {
    return this.source
      .split("/")
      .filter((part) => part !== DEFAULT_HOSTNAME && part !== DEFAULT_NAMESPACE)
      .join("/");
  }

  /**
   * checks if the version constraint matches the given version
   * @param version an actual version (e.g. "4.12.1")
   * @returns true if the version is compatible with the constraint
   */
  public matchesVersion(version: string): boolean {
    if (this.version) {
      return versionMatchesConstraint(version, this.version);
    }
    return true;
  }

  public toString() {
    return `${this.source}${this.version ? `@ ${this.version}` : ""}`;
  }
}

/**
 * manages dependencies of a CDKTF project (e.g. terraform providers)
 */
export class DependencyManager {
  private packageManager: PackageManager;

  constructor(
    private readonly targetLanguage: Language,
    private cdktfVersion: string,
    private readonly projectDirectory: string
  ) {
    this.packageManager = PackageManager.forLanguage(
      targetLanguage,
      this.projectDirectory
    );
  }

  async addProvider(
    constraint: ProviderConstraint
  ): Promise<{ addedLocalProvider: boolean }> {
    if (await this.hasPrebuiltProvider(constraint)) {
      await this.addPrebuiltProvider(constraint);
      return { addedLocalProvider: false };
    } else {
      await this.addLocalProvider(constraint);
      return { addedLocalProvider: true };
    }
  }

  async upgradeProvider(constraint: ProviderConstraint) {
    console.log(`Upgrading ${constraint.simplifiedName}...`);
    const cdktfJson = new CdktfConfigManager();
    const prebuiltVersion = await this.getCurrentlyInstalledVersion(constraint);
    if (prebuiltVersion) {
      await this.upgradePrebuiltProvider(constraint, prebuiltVersion);
      return { addedLocalProvider: false };
    }
    if (await cdktfJson.hasProvider(constraint)) {
      await cdktfJson.updateProvider(constraint);
      return { addedLocalProvider: true };
    }

    throw Errors.Usage(
      `Trying to upgrade ${constraint.simplifiedName} but it is not installed, please use "cdktf provider add ${constraint.simplifiedName}" to add it.`
    );
  }

  async getCurrentlyInstalledVersion(constraint: ProviderConstraint) {
    logger.info(`Checking if ${constraint.simplifiedName} is installed...`);
    const packageName = await this.getPackageName(constraint);
    logger.debug(
      `Expecting package ${packageName} to be installed if provider is installed as pre-built one`
    );

    let installedPackages;
    try {
      installedPackages = await this.packageManager.listProviderPackages();
    } catch (e) {
      throw new Error(`Failed to list packages: ${e}`);
    }

    logger.debug(
      `Installed packages found: ${JSON.stringify(installedPackages, null, 2)}`
    );

    return installedPackages.find((pkg) => pkg.name === packageName)?.version;
  }

  async upgradePrebuiltProvider(
    constraint: ProviderConstraint,
    currentVersion: string
  ) {
    logger.debug(
      `Searching for latest matching version of ${constraint.simplifiedName}`
    );

    const packageName = await this.getPackageName(constraint);
    const packageVersion = await this.getMatchingProviderVersion(constraint);

    logger.debug(`Found package ${packageName}@${packageVersion}`);
    if (packageVersion !== currentVersion) {
      await this.packageManager.addPackage(packageName, packageVersion);
    } else {
      console.log(
        `The latest version of ${packageName} is already installed: ${packageVersion}`
      );
    }
  }

  async hasPrebuiltProvider(constraint: ProviderConstraint): Promise<boolean> {
    logger.debug(
      `determining whether pre-built provider exists for ${constraint.source} with version constraint ${constraint.version} and cdktf version ${this.cdktfVersion}`
    );

    console.log(`Checking whether pre-built provider exists for the following constraints:
  provider: ${constraint.simplifiedName}
  version : ${constraint.version || "latest"}
  language: ${this.targetLanguage}
  cdktf   : ${this.cdktfVersion}
`);

    if (
      this.targetLanguage === Language.GO &&
      semver.lt(this.cdktfVersion, "0.12.0")
    ) {
      console.log(
        `Before CDKTF 0.12.0 there were no pre-built providers published for Go.`
      );
      return false;
    }

    const v = await getPrebuiltProviderVersions(constraint, this.cdktfVersion);
    const exists = v !== null;

    if (exists) {
      console.log(`Found pre-built provider.`);
    } else {
      console.log(
        `Pre-built provider does not exist for the given constraints.`
      );
    }

    return exists;
  }

  private async getPackageName(
    constraint: ProviderConstraint
  ): Promise<string> {
    const npmPackageName = await getNpmPackageName(constraint);

    if (!npmPackageName) {
      throw Errors.Usage(
        `Could not find pre-built provider for ${constraint.source}`
      );
    }

    const prebuiltProviderRepository = await getPrebuiltProviderRepositoryName(
      npmPackageName
    );

    return this.convertPackageName(npmPackageName, prebuiltProviderRepository);
  }

  async getMatchingProviderVersion(constraint: ProviderConstraint) {
    const packageName = await this.getPackageName(constraint);

    const prebuiltProviderNpmVersions = await getPrebuiltProviderVersions(
      constraint,
      this.cdktfVersion
    );
    if (!prebuiltProviderNpmVersions) {
      throw Errors.Usage(
        `No pre-built provider found for ${constraint.source} with version constraint ${constraint.version} and cdktf version ${this.cdktfVersion}`
      );
    }

    const packageVersion = await this.getLanguageSpecificPackageVersion(
      packageName,
      prebuiltProviderNpmVersions
    );

    if (!packageVersion) {
      throw Errors.Usage(
        `No pre-built provider found for ${constraint.source} with version constraint ${constraint.version} and cdktf version ${this.cdktfVersion} for language ${this.targetLanguage}.`
      );
    }

    return packageVersion;
  }

  async addPrebuiltProvider(constraint: ProviderConstraint) {
    logger.debug(
      `adding pre-built provider ${constraint.source} with version constraint ${constraint.version} for cdktf version ${this.cdktfVersion}`
    );

    const packageName = await this.getPackageName(constraint);
    const packageVersion = await this.getMatchingProviderVersion(constraint);
    await this.packageManager.addPackage(packageName, packageVersion);

    // TODO: more debug logs
  }

  // The version we use for npm might differ from other registries
  // This happens mostly in cases where a provider update failed to publish to one of the registries
  // In that case we use the latest version that was published successfully and works with the current cdktf release
  private async getLanguageSpecificPackageVersion(
    packageName: string,
    prebuiltProviderNpmVersions: string[]
  ) {
    logger.debug(
      "Found possibly matching versions (released on npm): ",
      prebuiltProviderNpmVersions
    );
    logger.debug(
      "Searching through package manager to find latest available version for given language"
    );

    for (const version of prebuiltProviderNpmVersions) {
      try {
        const isAvailable = await this.packageManager.isNpmVersionAvailable(
          packageName,
          version
        );
        if (isAvailable) {
          return version;
        }
      } catch (err) {
        logger.info(
          `Could not find version ${version} for package ${packageName}: '${err}'. Skipping...`
        );
      }
    }
    return null;
  }

  async addLocalProvider(constraint: ProviderConstraint) {
    console.log(
      `Adding local provider ${constraint.source} with version constraint ${constraint.version} to cdktf.json`
    );

    if (!constraint.version && constraint.isFromTerraformRegistry()) {
      const v = await getLatestVersion(constraint);
      if (v) {
        constraint = new ProviderConstraint(
          constraint.source,
          // "1.3.2" -> "~> 1.3"
          `~> ${v.split(".").slice(0, 2).join(".")}`
        );
      } else {
        throw Errors.Usage(
          `Could not find a version for the provider '${constraint}' in the public registry. This could be due to a typo, please take a look at https://cdk.tf/registry-providers to find all supported providers.`
        );
      }
    }

    await new CdktfConfigManager().addProvider(constraint);
  }

  /**
   * Converts an NPM package name of a pre-built provider package to the name in the target language
   */
  private convertPackageName(name: string, repository: string): string {
    const providerName = name.replace("@cdktf/provider-", "");
    switch (this.targetLanguage) {
      case Language.GO: // e.g. github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud
        if (repository) {
          return `${repository}-go/${providerName}`;
        }

        return `github.com/cdktf/cdktf-provider-${providerName}-go/${providerName}`;
      case Language.TYPESCRIPT: // e.g. @cdktf/provider-random
        return name; // already the correct name
      case Language.CSHARP: // e.g. HashiCorp.Cdktf.Providers.Opentelekomcloud
        return `HashiCorp.Cdktf.Providers.` + toPascalCase(providerName);
      case Language.JAVA: // e.g. com.hashicorp.opentelekomcloud
        return `com.hashicorp.cdktf-provider-${providerName}`;
      case Language.PYTHON: // e.g. cdktf-cdktf-provider-opentelekomcloud
        return `cdktf-cdktf-provider-${providerName}`;
      default:
        throw new Error(
          `converting package name for language ${this.targetLanguage} not implemented yet`
        );
    }
  }

  /**
   * Converts an package name of a pre-built provider package in target language to the name in npm
   * Inverse of: `convertPackageName`
   */
  private convertFromPackageNameToNpm(name: string): string {
    const npmPackagePrefix = "@cdktf/provider-";
    const regexes = {
      [Language.GO]:
        /github.com\/(?:cdktf|hashicorp)\/cdktf-provider-(.+)-go\//i,
      [Language.TYPESCRIPT]: /(.+)/i,
      [Language.CSHARP]: /HashiCorp\.Cdktf\.Providers\.(.+)/i,
      [Language.JAVA]: /com\.hashicorp\.cdktf-provider-(.+)/i,
      [Language.PYTHON]: /cdktf-cdktf-provider-(.+)/i,
    };
    const regex = regexes[this.targetLanguage];
    if (!regex) {
      throw Errors.Usage("Language not supported for pre-built providers");
    }

    const match = regex.exec(name);
    if (!match) {
      throw new Error(`Package name is not in expected format: ${name}`);
    }

    switch (this.targetLanguage) {
      case Language.GO: // e.g. github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud
        return npmPackagePrefix + match[1];
      case Language.TYPESCRIPT: // e.g. @cdktf/provider-random
        return match[1]; // already the correct name
      case Language.CSHARP: // e.g. HashiCorp.Cdktf.Providers.Opentelekomcloud
        return npmPackagePrefix + toSnakeCase(match[1]);
      case Language.JAVA: // e.g. com.hashicorp.opentelekomcloud
        return npmPackagePrefix + match[1];
      case Language.PYTHON: // e.g. cdktf-cdktf-provider-opentelekomcloud
        return npmPackagePrefix + match[1];
      default:
        throw new Error(
          `converting package name for language ${this.targetLanguage} not implemented yet`
        );
    }
  }

  public async allProviders() {
    const cdktfJson = CdktfConfig.read();
    const localVersions = new LocalProviderVersions(cdktfJson.language);

    const localProviderConfigs = cdktfJson.terraformProviders;
    const prebuiltProviderConfigs =
      await this.packageManager.listProviderPackages();

    const prebuiltProvidersInfo = [];

    for (const prebuiltProviderConfig of prebuiltProviderConfigs) {
      const packageName = await this.convertFromPackageNameToNpm(
        prebuiltProviderConfig.name
      );

      const providerInformation = await getPrebuiltProviderVersionInformation(
        packageName,
        prebuiltProviderConfig.version
      );

      prebuiltProvidersInfo.push(providerInformation);
    }

    const localProvidersInfo = [];
    for (const localProvider of localProviderConfigs) {
      const constraint = ProviderConstraint.fromConfigEntry(localProvider);
      const version = await localVersions.versionForProvider(
        constraint.simplifiedName
      );

      localProvidersInfo.push({
        providerName: constraint.simplifiedName,
        providerConstraint: constraint.version,
        providerVersion: version,
      });
    }

    return {
      local: localProvidersInfo,
      prebuilt: prebuiltProvidersInfo,
    };
  }
}
