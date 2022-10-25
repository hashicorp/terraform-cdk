// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";
import * as semver from "semver";
import { logger } from "../logging";
import { ProviderConstraint } from "./dependency-manager";
import { versionMatchesConstraint } from "./version-constraints";

const proxy = process.env.http_proxy || process.env.HTTP_PROXY;
let agent: HttpsProxyAgent | undefined;
if (proxy) {
  agent = new HttpsProxyAgent(proxy);
}

// uses https://github.com/hashicorp/cdktf-repository-manager/blob/main/provider.json
const providersMapUrl = `https://www.cdk.tf/.well-known/prebuilt-providers.json`;
type ProvidersMap = {
  [name: string]: string;
};

const fetchCache = new Map<string, any>();
async function cachedFetch<T>(url: string): Promise<T> {
  if (fetchCache.has(url)) {
    return fetchCache.get(url) as T;
  }

  const responseBody = await fetchWrapped<T>(url);
  fetchCache.set(url, responseBody);

  return responseBody as T;
}

// For testing purposes only
export async function resetFetchCache() {
  fetchCache.clear();
}

async function fetchWrapped<T>(url: string): Promise<T> {
  let response;
  try {
    response = await fetch(url, {
      agent,
      headers: { "User-Agent": "HashiCorp/cdktf-cli" },
    });
  } catch (e) {
    // Fetch only fails here because of connectivity issues
    logger.error(
      "Unable to request pre-built provider information: Network error, please check if you're connected to the internet and try again"
    );

    throw new Error("Connection error");
  }

  if (!response.ok) {
    if (response.status >= 500) {
      throw new Error(
        "Unexpected error while finding pre-built provider. Please try again."
      );
    }
    if (response.status === 404) {
      throw new Error(`Pre-built provider information not found`);
    }
    if (response.status >= 400) {
      const responseText = await response.text();
      // This means that we're sending a bad request. We should record this in sentry too.
      logger.error(
        `Received ${response.status} response from ${url}: ${responseText}`
      );

      throw new Error(
        "Unexpected error while finding pre-built provider. Please try again."
      );
    }
  }

  return response.json() as Promise<T>;
}

export async function getNpmPackageName(
  constraint: ProviderConstraint
): Promise<string | undefined> {
  const providers = await cachedFetch<ProvidersMap>(providersMapUrl);

  const entry = Object.entries(providers).find(
    ([, p]) =>
      ProviderConstraint.fromConfigEntry(p).source.toLowerCase() ===
      constraint.source.toLowerCase()
  );
  if (!entry) {
    return undefined; // no pre-built provider found for this constraint
  }
  const name = entry[0];

  return `@cdktf/provider-${name}`;
}

type PackageJson = {
  // has been introduced via https://github.com/hashicorp/cdktf-provider-project/pull/217
  cdktf?: {
    // provider is optional as we might set other cdktf related fields in the future
    // for other libs (i.e. construct packages) while still using the cdktf key
    provider?: {
      /**
       * name of the provider, will resolve to the full name as in the Terraform schema.
       * e.g. registry.terraform.io/hashicorp/aws
       */
      name: string;
      /**
       * the actual version that was used to build the provider
       * e.g. 4.12.1
       */
      version: string;
    };
  };
  peerDependencies?: {
    cdktf?: string;
  };
  repository?: {
    type: string;
    url: string;
  };
  // ... many more fields
};
type NpmPackageResult = {
  name: string; // e.g. "@cdktf/provider-aws"
  versions: {
    [version: string]: PackageJson;
  };
  repository?: {
    type: string;
    url: string;
  };
};

type PrebuiltProviderVersion = {
  packageVersion: string; // e.g. "7.0.42"
  providerVersion: string; // e.g. "4.12.1"
  cdktfPeerDependencyConstraint: string; // e.g. "^10.0.0"
};

export async function getPrebuiltProviderRepositoryName(
  packageName: string
): Promise<string> {
  const url = `https://registry.npmjs.org/${packageName}`;
  const result = await cachedFetch<NpmPackageResult>(url);

  const repositoryUrl = result?.repository?.url;

  if (!repositoryUrl) return "";

  const repositoryRegex = /^git\+https:\/\/(github.com\/.*)\.git$/;
  const match = repositoryRegex.exec(repositoryUrl);

  if (!match) return "";

  return match[1];
}

export async function getAllPrebuiltProviderVersions(
  packageName: string
): Promise<PrebuiltProviderVersion[]> {
  const url = `https://registry.npmjs.org/${packageName}`;
  const result = await cachedFetch<NpmPackageResult>(url);

  const versions = Object.entries(result.versions)
    .map(([version, packageJson]) => {
      const provider = packageJson.cdktf?.provider;
      if (!provider || !packageJson.peerDependencies?.cdktf) {
        logger.trace(
          `skipping version ${version} of ${packageName} as it does not have a cdktf.provider or peerDependencies.cdktf in package.json`
        );
        return undefined;
      }
      return {
        packageVersion: version,
        providerVersion: provider.version,
        cdktfPeerDependencyConstraint: packageJson.peerDependencies.cdktf,
      };
    })
    .filter((v) => v !== undefined) as PrebuiltProviderVersion[];

  // latest version first, sorted by packageVersion as that
  // one always increases while the providerVersion may not
  versions.sort((a, b) => {
    if (semver.gt(a.packageVersion, b.packageVersion)) {
      return -1;
    }
    if (semver.lt(a.packageVersion, b.packageVersion)) {
      return 1;
    }
    return 0;
  });

  return versions;
}

function cdktfVersionMatches(
  cdktfVersion: string,
  cdktfPeerDependencyConstraint: string
): boolean {
  return semver.satisfies(cdktfVersion, cdktfPeerDependencyConstraint);
}

export async function getPrebuiltProviderVersions(
  constraint: ProviderConstraint,
  cdktfVersion: string
): Promise<string[] | null> {
  const providerName = await getNpmPackageName(constraint); // TODO: add lots of debug logs to this call

  // no pre-built provider exists
  if (!providerName) {
    return null;
  }

  const versions = await getAllPrebuiltProviderVersions(providerName);

  // find first the version that matches the requested provider version and cdktf version
  const matchingVersions = versions.filter((v) => {
    if (!cdktfVersionMatches(cdktfVersion, v.cdktfPeerDependencyConstraint)) {
      return false; // skip if cdktf version does not match
    }
    if (constraint.version) {
      return versionMatchesConstraint(v.providerVersion, constraint.version);
    }
    return true; // if no version constraint is passed, return true on the first match
  });

  if (!matchingVersions.length) {
    return null;
  }
  const npmPackageVersions = matchingVersions
    .map((matchingVersion) => matchingVersion.packageVersion)
    .sort(semver.compare)
    .reverse();
  return npmPackageVersions;
}
