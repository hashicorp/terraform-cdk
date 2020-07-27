import { Construct } from 'constructs';
import { ComplexComputedList, TerraformDataSource, TerraformMetaArguments } from '../../lib';
import { TestProviderMetadata } from './provider';

export interface TestDataSourceConfig extends TerraformMetaArguments {
  name: string;
}

export class TestDataSource extends TerraformDataSource {

  public name: string;

  constructor(scope: Construct, id: string, config: TestDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'test_data_source',
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
    });
    this.name = config.name;
  }

  public complexComputedList(index: string) {
    return new TestComplexComputedList(this, 'complex_computed_list', index);
  }

  protected synthesizeAttributes(): { [p: string]: any } {
    return {};
  }
}

class TestComplexComputedList extends ComplexComputedList {
  public get id() {
    return this.getStringAttribute('id');
  }
}
