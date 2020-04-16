import * as path from 'path';
import { ModuleGenerator } from './generator/module-generator';
import { getModule } from './registry-client';

async function main() {
  const modules = process.argv.splice(2);
  if (modules.length === 0) {
    const progname = path.basename(process.argv[1]);
    console.error(`usage: ${progname} source[@version] [source[@version] ...]`);
    console.error(`example: ${progname} terraform-aws-modules/vpc/aws hashicorp/consul/aws@0.7.2`);
  }
  
  for (const module of modules) {
    const [ source, version ] = module.split('@');

    const spec = await getModule(source, version);
    const generator = new ModuleGenerator(spec);
    await generator.save(`.gen/modules`);
  }
}

main().catch(e => {
  console.log(e.stack);
  process.exit(1);
});
