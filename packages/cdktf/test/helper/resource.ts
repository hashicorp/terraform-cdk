
import { TerraformResource, TerraformMetaArguments } from '../../lib';
import { Construct } from 'constructs';
import { TestProviderMetadata } from './provider'

export interface TestResourceConfig extends TerraformMetaArguments {
  name: string;
}

export class TestResource extends TerraformResource {
  public name: string;

  constructor(scope: Construct, id: string, config: TestResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'test_resource',
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersion: TestProviderMetadata.VERSION
      },
      provider: config.provider
    });

    this.name = config.name
  }

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this.name
    }
  }
}
