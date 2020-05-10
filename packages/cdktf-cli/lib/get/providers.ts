// generates constructs from terraform providers schema
import * as fs from 'fs-extra';
import { TerraformGenerator } from './generator/provider-generator';
import { ProviderSchema, readSchema } from './generator/provider-schema';
import { promisify } from 'util';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'

const mkdirp = promisify(fs.mkdirp);

export class GetProvider extends GetBase {
  protected async generateTypeScript(code: CodeMaker, providers: string[], outdir: string): Promise<void> {
    const schema = await this.fetchSchema(providers, outdir)
    new TerraformGenerator(code, schema);
  }

  private async fetchSchema(providers: string[], outdir: string): Promise<ProviderSchema> {
    await mkdirp(outdir);
    return readSchema(outdir, providers);
  }

  protected typesPath(name: string): string {
    return `providers/${name}/index`;
  }
}