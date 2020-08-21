import { TerraformProvider } from '../../lib';
import { Construct } from 'constructs';

export interface TestProviderConfig {
  alias?: string;
  accessKey: string;
}

export enum TestProviderMetadata {
  TYPE = 'test'
}

export class TestProvider extends TerraformProvider {
  public accessKey: string;

  constructor(scope: Construct, id: string, config: TestProviderConfig) {
    super(scope, id, {
      terraformResourceType: TestProviderMetadata.TYPE
    });

    this.alias = config.alias
    this.accessKey = config.accessKey
  }

  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_key: this.accessKey
    }
  }
}
