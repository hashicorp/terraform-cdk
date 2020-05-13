// generates constructs from terraform providers schema
import { TerraformGenerator } from './generator/provider-generator';
import { ProviderSchema, readSchema } from './generator/provider-schema';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'

export class GetProvider extends GetBase {
  protected async generateTypeScript(code: CodeMaker, providers: string[]): Promise<void> {
    const schema = await this.fetchSchema(providers)
    const provider = await this.parseProviders(providers)
    new TerraformGenerator(code, schema, provider);
  }

  private async fetchSchema(providers: string[]): Promise<ProviderSchema> {
    return readSchema(providers);
  }

  protected typesPath(name: string): string {
    return `providers/${name}/index`;
  }

  private async parseProviders(providers: string[]): Promise<{ [name: string]: string }> {
    const provider: { [name: string]: string } = { };
    for (const p of providers) {
      const [ name, version ] = p.split('@');
      provider[name] = version;
    }
    return provider;
  }
}