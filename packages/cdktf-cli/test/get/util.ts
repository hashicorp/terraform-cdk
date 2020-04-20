import { promises as fs } from 'fs';
import { withTempDir } from "../../lib/util";
import { jsiiCompile } from "../../lib/get/jsii"
import { Language, GetBase } from "../../lib/get/base";

export function expectImportMatchSnapshot(target: string, fn: () => GetBase) {
  jest.setTimeout(60_000);

  test.skip(target, async () => {
    await withTempDir('get-cdktf', async () => {
      const [ name ] = target.split('@');
      const workdir = '.';
      const importer = fn();

      await importer.get({
        outdir: workdir,
        targetLanguage: Language.TYPESCRIPT,
        targetNames: [target]
      });

      await jsiiCompile(workdir, {
        stdout: true,
        name: name,
        main: name
      });

      const manifest = JSON.parse(await fs.readFile('.jsii', 'utf-8'));
      expect(manifest).toMatchSnapshot();
    });
  });
}