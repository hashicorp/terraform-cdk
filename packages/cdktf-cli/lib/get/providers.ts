// generates constructs from terraform providers schema
import { TerraformGenerator, TerraformProviderConstraint } from './generator/provider-generator';
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

  private async parseProviders(providers: string[]): Promise<TerraformProviderConstraint[]> {
    const provider: TerraformProviderConstraint[] = [];
    for (const p of providers) {
      provider.push(new TerraformProviderConstraint(p))
    }
    return provider;
  }
}