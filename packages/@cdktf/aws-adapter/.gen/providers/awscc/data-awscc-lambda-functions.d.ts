import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLambdaFunctionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_functions.html awscc_lambda_functions}
*/
export declare class DataAwsccLambdaFunctions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_functions.html awscc_lambda_functions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaFunctionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLambdaFunctionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
