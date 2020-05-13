
import { TerraformResource, TerraformMetaArguments } from '../../lib';
import { Construct } from 'constructs';
import { TestProviderMetadata } from './provider'

export interface TestResourceConfig extends TerraformMetaArguments {
  name: string;
}

export class TestResource extends TerraformResource {
  public name: string;
  public names?: string[];

  constructor(scope: Construct, id: string, config: TestResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'test_resource',
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider
    });

    this.name = config.name
  }

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this.name,
      names: this.names
    }
  }
}

export class OtherTestResource extends TerraformResource {
  constructor(scope: Construct, id: string, config: TerraformMetaArguments) {
    super(scope, id, {
      terraformResourceType: 'other_test_resource',
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider
    });
  }

  public get names(): string[] {
    return this.getListAttribute("names")
  }

  public synthesizeAttributes(): { [name: string]: any } {
    return {}
  }
}

