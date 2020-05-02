import { TerraformProvider } from '../../lib';
import { Construct } from 'constructs';

export interface TestProviderConfig {
  alias?: string;
  accessKey: string;
}

export enum TestProviderMetadata {
  TYPE = 'test',
  VERSION = '1.0.0'
}

export class TestProvider extends TerraformProvider {
  public alias?: string;
  public accessKey: string;

  constructor(scope: Construct, id: string, config: TestProviderConfig) {
    super(scope, id, {
      terraformResourceType: TestProviderMetadata.TYPE,
      terraformProviderVersion: TestProviderMetadata.VERSION
    });

    this.alias = config.alias
    this.accessKey = config.accessKey
  }

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_key: this.accessKey
    }
  }
}
