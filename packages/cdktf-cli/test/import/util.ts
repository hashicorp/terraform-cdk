import { jsiiCompile } from "../../lib/get/jsii";
import { promises as fs } from 'fs';
import { withTempDir } from "../../lib/util";
import { Language, GetBase } from "../../lib/get/base";

export function expectImportMatchSnapshot(name: string, fn: () => GetBase) {
  jest.setTimeout(60_000);

  test(name, async () => {
    await withTempDir('get-cdktf', async () => {
      const workdir = '.';

      const importer = fn();

      await importer.get({
        outdir: workdir,
        targetLanguage: Language.TYPESCRIPT,
      });

      for (const moduleName of importer.moduleNames) {
        await jsiiCompile(workdir, { 
          stdout: true,
          name: moduleName,
          main: moduleName
        });
      }
    
      const manifest = JSON.parse(await fs.readFile('.jsii', 'utf-8'));
      expect(manifest).toMatchSnapshot();
    });
  });
}