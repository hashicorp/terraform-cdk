import { promises as fs } from 'fs';
import { mkdtemp } from "../../lib/util";
import { Language, GetBase } from "../../lib/get/base";
import * as path from 'path';

export function expectImportMatchSnapshot(target: string, fn: () => GetBase) {
  jest.setTimeout(60_000);

  test(target, async () => {
    await mkdtemp(async workdir => {
      const importer = fn();
      const jsiiPath = path.join(workdir, '.jsii');

      await importer.get({
        codeMakerOutput: workdir,
        outputJsii: jsiiPath,
        targetLanguage: Language.TYPESCRIPT,
        targetNames: [target]
      });

      const manifest = JSON.parse(await fs.readFile(jsiiPath, 'utf-8'));

      // patch cdktf version in manifest because it's not stable
      manifest.dependencies.cdktf = '999.999.999';
      manifest.fingerprint = '<fingerprint>';

      expect(manifest).toMatchSnapshot();
    });
  });
}