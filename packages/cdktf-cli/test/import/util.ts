import { jsiiCompile } from "../../lib/import/jsii";
import { promises as fs } from 'fs';
import { withTempDir } from "../../lib/util";
import { Language, ImportBase } from "../../lib/import/base";

export function expectImportMatchSnapshot(name: string, fn: () => ImportBase) {
  jest.setTimeout(60_000);

  test(name, async () => {
    await withTempDir('import-k8s', async () => {
      const workdir = '.';

      const importer = fn();

      await importer.import({
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