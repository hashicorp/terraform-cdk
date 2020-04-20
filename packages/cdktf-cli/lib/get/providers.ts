// generates constructs from terraform providers schema
import * as fs from 'fs-extra';
import { TerraformGenerator } from './generator/provider-generator';
import { ProviderSchema, readSchema } from './generator/provider-schema';
import { promisify } from 'util';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'
import { readConfigSync } from '../../lib/config';

const config = readConfigSync();
const mkdirp = promisify(fs.mkdirp);

export class GetProvider extends GetBase {
  protected async generateTypeScript(code: CodeMaker, providers: string[]): Promise<void> {
    const schema = await this.fetchSchema(providers)
    new TerraformGenerator(code, schema);
  }

  private async fetchSchema(providers: string[]): Promise<ProviderSchema> {
    const outdir = config.output;
    await mkdirp(outdir);
    return readSchema(outdir, providers);
  }
}