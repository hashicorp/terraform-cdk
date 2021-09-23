import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLambdaCodeSigningConfigsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_configs.html awscc_lambda_code_signing_configs}
*/
export declare class DataAwsccLambdaCodeSigningConfigs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_configs.html awscc_lambda_code_signing_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaCodeSigningConfigsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLambdaCodeSigningConfigsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
