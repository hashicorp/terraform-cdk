// TODO: introduce caching for the calls to NPM

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
const providersMapUrl = `https://raw.githubusercontent.com/hashicorp/cdktf-repository-manager/main/provider.json`;
type ProvidersMap = {
  [name: string]: string;
};

export async function getNpmPackageName(
  constraint: ProviderConstraint
): Promise<string | undefined> {
  const providers = (await (
    await fetch(providersMapUrl, {
      agent,
      headers: { "User-Agent": "HashiCorp/cdktf-cli" },
    })
  ).json()) as ProvidersMap;

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
  // ... many more fields
};
type NpmPackageResult = {
  name: string; // e.g. "@cdktf/provider-aws"
  versions: {
    [version: string]: PackageJson;
  };
};

type PrebuiltProviderVersion = {
  packageVersion: string; // e.g. "7.0.42"
  providerVersion: string; // e.g. "4.12.1"
  cdktfPeerDependencyConstraint: string; // e.g. "^10.0.0"
};
async function getPrebuiltProviderVersions(
  packageName: string
): Promise<PrebuiltProviderVersion[]> {
  const url = `https://registry.npmjs.org/${packageName}`;
  const result = (await (
    await fetch(url, {
      agent,
      headers: { "User-Agent": "HashiCorp/cdktf-cli" },
    })
  ).json()) as NpmPackageResult; // TODO: handle 404 and other errors (abort on other errors)

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

export async function getPrebuiltProviderVersion(
  constraint: ProviderConstraint,
  cdktfVersion: string
): Promise<string | null> {
  const providerName = await getNpmPackageName(constraint); // TODO: add lots of debug logs to this call

  // no pre-built provider exists
  if (!providerName) {
    return null;
  }

  const versions = await getPrebuiltProviderVersions(providerName);

  // find first the version that matches the requested provider version and cdktf version
  const matchingVersion = versions.find((v) => {
    if (!cdktfVersionMatches(cdktfVersion, v.cdktfPeerDependencyConstraint)) {
      return false; // skip if cdktf version does not match
    }
    if (constraint.version) {
      return versionMatchesConstraint(v.providerVersion, constraint.version);
    }
    return true; // if no version constraint is passed, return true on the first match
  });

  if (matchingVersion) {
    return matchingVersion.packageVersion;
  }

  return null;
}
