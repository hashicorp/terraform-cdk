// generates constructs from terraform providers schema
import * as fs from 'fs';
import { TerraformGenerator } from './generator/provider-generator';
import { ProviderSchema, readSchema } from './generator/provider-schema';
import { promisify } from 'util';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'

const mkdir = promisify(fs.mkdir);

export class GetProvider extends GetBase {
  protected async generateTypeScript(code: CodeMaker, providers: string[]): Promise<void> {
    const schema = await this.fetchSchema(providers)
    new TerraformGenerator(code, schema);
  }

  private async fetchSchema(providers: string[]): Promise<ProviderSchema> {
    console.log({providers})
    const outdir = 'cdk.out';
    await mkdir(outdir, { recursive: true });
    return readSchema(outdir, providers);
  }
}