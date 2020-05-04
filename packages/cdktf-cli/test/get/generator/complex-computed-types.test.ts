import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { TerraformGenerator } from '../../../lib/get/generator/provider-generator';
import { CodeMaker } from 'codemaker';

test('generate an acm certifacte resource with complex computed types', async () => {
  const code = new CodeMaker()
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'complex-computed-types.test'));
  const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'aws_acm_certificate.test.fixture.json'), 'utf-8'));
  new TerraformGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(path.join(workdir, 'providers/aws/acm-certificate.ts'), 'utf-8');
  expect(output).toMatchSnapshot();
});