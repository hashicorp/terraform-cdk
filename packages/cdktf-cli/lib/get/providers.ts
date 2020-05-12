// generates constructs from terraform providers schema
import * as fs from 'fs-extra';
import * as path from 'path';
import { TerraformGenerator } from './generator/provider-generator';
import { ProviderSchema, readSchema } from './generator/provider-schema';
import { promisify } from 'util';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'

const writeFile = promisify(fs.writeFile);

export class GetProvider extends GetBase {
  protected async generateTypeScript(code: CodeMaker, providers: string[], codeMakerOutput: string): Promise<void> {
    const schema = await this.fetchSchema(providers)
    new TerraformGenerator(code, schema);
    await this.writeLockFile(providers, codeMakerOutput)
  }

  private async fetchSchema(providers: string[]): Promise<ProviderSchema> {
    return readSchema(providers);
  }

  protected typesPath(name: string): string {
    return `providers/${name}/index`;
  }

  private async writeLockFile(providers: string[], codeMakerOutput: string) {
    const terraformFile = path.join(codeMakerOutput, 'terraform.tf.json')
    const provider: { [name: string]: string } = { };
    for (const p of providers) {
      const [ name, version ] = p.split('@');
      provider[name] = version;
    }

    const versionConstraints = {
      terraform: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        required_providers: provider
      }
    }
    await writeFile(terraformFile, JSON.stringify(versionConstraints));
  }

}