import { ConstructsMakerTarget } from "@cdktf/commons";
import * as fs from "fs-extra";

// We keep this very simple since the caching feature is experimental
// we might need to do housekeeping / include terraform / cdktf version in the future
function cacheKey(input: ConstructsMakerTarget): string {
  return `${encodeURI(input.fqn)}@${input.version}`;
}

export function cachedAccess<I extends ConstructsMakerTarget, O>(
  producer: (input: I) => Promise<O>
): (input: I) => Promise<O> {
  const cacheDir = process.env.CDKTF_EXPERIMENTAL_PROVIDER_SCHEMA_CACHE_PATH;

  const cacheEnabled = Boolean(
    cacheDir && fs.lstatSync(cacheDir).isDirectory()
  );
  if (!cacheEnabled) {
    return (input) => {
      return producer(input);
    };
  }

  return async (input) => {
    const key = cacheKey(input);
    const cachePath = `${cacheDir}/${key}.json`;
    if (fs.existsSync(cachePath)) {
      return JSON.parse(await fs.readFile(cachePath, "utf-8")) as O;
    }

    const result = await producer(input);
    await fs.writeFile(cachePath, JSON.stringify(result));
    return result;
  };
}
