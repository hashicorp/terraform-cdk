import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ModuleGenerator } from '../bin/module-generator';

test('generate some modules', async () => {
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'module-generator.test'));
  const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'module-generator.test.fixture.json'), 'utf-8'));
  const gen = new ModuleGenerator(spec);
  await gen.save(workdir);

  const output = fs.readFileSync(path.join(workdir, 'terraform-aws-modules/eks/aws/index.ts'), 'utf-8');
  expect(output).toMatchSnapshot();
});