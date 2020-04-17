import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ModuleGenerator } from '../lib/get/generator/module-generator';
import { CodeMaker } from 'codemaker';

test('generate some modules', async () => {
  const code = new CodeMaker()
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'module-generator.test'));
  const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'module-generator.test.fixture.json'), 'utf-8'));
  new ModuleGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(path.join(workdir, 'modules/terraform-aws-modules/eks/aws.ts'), 'utf-8');
  expect(output).toMatchSnapshot();
});