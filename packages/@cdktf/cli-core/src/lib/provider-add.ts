/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Language } from "@cdktf/commons";
import {
  DependencyManager,
  ProviderConstraint,
} from "./dependencies/dependency-manager";
import { determineDeps } from "./init";

export type ProviderAddArgs = {
  providers: string[];
  language: Language;
  projectDirectory: string;
  cdktfVersion?: string;
  forceLocal?: boolean;
  dist?: string;
  silent?: boolean;
};

export async function providerAdd({
  providers,
  language,
  projectDirectory,
  cdktfVersion,
  dist,
  forceLocal,
  silent,
}: ProviderAddArgs): Promise<boolean> {
  const version =
    cdktfVersion || (await determineDeps(cdktfVersion, dist)).cdktf_version;

  const manager = new DependencyManager(language, version, projectDirectory);

  let needsGet = false;

  for (const provider of providers) {
    const constraint = ProviderConstraint.fromConfigEntry(provider);
    if (forceLocal) {
      needsGet = true;
      await manager.addLocalProvider(constraint);
    } else {
      const { addedLocalProvider } = await manager.addProvider(
        constraint,
        silent
      );
      if (addedLocalProvider) {
        needsGet = true;
      }
    }
  }

  return needsGet;
}
