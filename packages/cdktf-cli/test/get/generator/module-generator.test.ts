import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ConstructsMaker, Language } from '../../../lib/get/constructs-maker'
import { TerraformModuleConstraint  } from '../../../lib/config'
import { withTempDir } from '../../../lib/util';

test('generate some modules', async () => {
  jest.setTimeout(20000)

  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'module-generator.test'));
  const constraint = new TerraformModuleConstraint('terraform-aws-modules/eks/aws@7.0.1')

  const maker = new ConstructsMaker({codeMakerOutput: workdir, targetLanguage: Language.TYPESCRIPT}, [constraint])
  await maker.generate()

  const output = fs.readFileSync(path.join(workdir, 'modules/terraform-aws-modules/eks/aws.ts'), 'utf-8');
  expect(output).toMatchSnapshot();
});

test('no module outputs', async () => {
  await withTempDir('no-output-module.test', async () => {
    const curdir = process.cwd();
    fs.mkdirSync('module');
    fs.copyFileSync(path.join(__dirname, 'fixtures', 'module-no-outputs.test.fixture.tf'), path.join(curdir, 'module', 'main.tf'));

    const constraint = new TerraformModuleConstraint({
      source: './module',
      name: 'module',
      fqn: 'module'
    });

    fs.mkdirSync('work');
    const workdir = path.join(curdir, 'work');
  
    const maker = new ConstructsMaker({codeMakerOutput: workdir, targetLanguage: Language.TYPESCRIPT}, [constraint])
    await maker.generate();
  
    const output = fs.readFileSync(path.join(workdir, 'modules/module.ts'), 'utf-8');
    expect(output).toMatchSnapshot();
  });
});