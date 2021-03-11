import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { TerraformProviderGenerator } from '../../../lib/get/generator/provider-generator';
import { CodeMaker } from 'codemaker';

test('broken attribute description comments', async () => {
  const code = new CodeMaker()
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'description-escaping.test'));
  const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'description-escaping.test.fixture.json'), 'utf-8'));
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(path.join(workdir, 'providers/google/description-escaping.ts'), 'utf-8');
  expect(output).toMatchSnapshot();
});
