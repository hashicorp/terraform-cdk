import { promises as fs } from 'fs';
import { mkdtemp } from "../../lib/util";
import { Language, ConstructsMaker } from "../../lib/get/constructs-maker";
import * as path from 'path';
import { TerraformDependencyConstraint } from '../../lib/config';

export function expectImportMatchSnapshot(constraint: TerraformDependencyConstraint) {
  jest.setTimeout(60_000);

  test(constraint.source, async () => {
    await mkdtemp(async workdir => {
      const jsiiPath = path.join(workdir, '.jsii');

      const maker = new ConstructsMaker({
        codeMakerOutput: workdir,
        outputJsii: jsiiPath,
        targetLanguage: Language.TYPESCRIPT
      }, [constraint])

      await maker.generate()

      const manifest = JSON.parse(await fs.readFile(jsiiPath, 'utf-8'));

      // patch cdktf version in manifest because it's not stable
      manifest.dependencies.cdktf = '999.999.999';
      manifest.fingerprint = '<fingerprint>';

      expect(manifest).toMatchSnapshot();
    });
  });
}