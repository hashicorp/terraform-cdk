
import { TerraformResource, TerraformMetaArguments, ComplexComputedList } from '../../lib';
import { Construct } from 'constructs';
import { TestProviderMetadata } from './provider'

export interface TestResourceConfig extends TerraformMetaArguments {
  name: string;
  tags?: { [key: string]: string };
  nestedType?: { [key: string]: string };
}

export class TestResource extends TerraformResource {
  public name: string;
  public names?: string[];
  public tags?: { [key: string]: string };
  public nestedType?: { [key: string]: string };

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
    this.tags = config.tags
    this.nestedType = config.nestedType
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this.name,
      names: this.names,
      tags: this.tags,
      nested_type: this.nestedType // eslint-disable-line @typescript-eslint/camelcase
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

  public complexComputedList(index: string) {
    return new TestComplexComputedList(this, 'complex_computed_list', index);
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {}
  }
}

class TestComplexComputedList extends ComplexComputedList {
  public get id() {
    return this.getStringAttribute('id');
  }
}
