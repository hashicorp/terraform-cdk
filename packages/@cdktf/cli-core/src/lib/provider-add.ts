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
};

export async function providerAdd({
  providers,
  language,
  projectDirectory,
  cdktfVersion,
  forceLocal,
}: ProviderAddArgs): Promise<boolean> {
  const version =
    cdktfVersion || (await determineDeps(cdktfVersion)).cdktf_version;

  const manager = new DependencyManager(language, version, projectDirectory);

  let needsGet = false;

  for (const provider of providers) {
    const constraint = ProviderConstraint.fromConfigEntry(provider);
    if (forceLocal) {
      needsGet = true;
      await manager.addLocalProvider(constraint);
    } else {
      const { addedLocalProvider } = await manager.addProvider(constraint);
      if (addedLocalProvider) {
        needsGet = true;
      }
    }
  }

  return needsGet;
}
