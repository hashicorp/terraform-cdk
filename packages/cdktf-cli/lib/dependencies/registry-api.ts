// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";
import { ProviderConstraint } from "./dependency-manager";
import * as semver from "semver";
import { Errors } from "../errors";

type VersionsReturnType = {
  id: string; // e.g. hashicorp/aws
  versions: {
    version: string; // e.g. "0.12.0"
    protocols: unknown;
    platforms: unknown;
  }[];
};

async function fetchVersions(
  constraint: ProviderConstraint
): Promise<VersionsReturnType["versions"] | null> {
  const proxy = process.env.http_proxy || process.env.HTTP_PROXY;
  let agent;
  if (proxy) {
    agent = new HttpsProxyAgent(proxy);
  }
  const url = `https://registry.terraform.io/v1/providers/${constraint.namespace}/${constraint.name}/versions`;

  const result = await fetch(url, {
    agent,
    headers: { "User-Agent": "HashiCorp/cdktf-cli" },
  });
  if (!result.ok) {
    if (result.status !== 404) {
      throw Errors.External(`Failed to fetch ${url}. Status: ${result.status}`);
    }

    return null;
  }

  const json = (await result.json()) as VersionsReturnType;
  return json.versions;
}

/**
 * returns the latest available version for the provider in the constraint
 * the version of the constraint is ignored
 * returns null, if the provider does not exist
 */
export async function getLatestVersion(
  constraint: ProviderConstraint
): Promise<string | null> {
  const versions = await fetchVersions(constraint);
  if (!versions) {
    return null;
  }

  const latestVersion = versions
    .map((v) => v.version)
    .reduce((acc, curr) => {
      if (semver.gte(acc, curr)) {
        return acc;
      }
      return curr;
    });

  return latestVersion;
}
