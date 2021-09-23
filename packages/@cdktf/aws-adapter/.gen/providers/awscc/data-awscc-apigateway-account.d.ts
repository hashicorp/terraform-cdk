import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_account.html#id DataAwsccApigatewayAccount#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_account.html awscc_apigateway_account}
*/
export declare class DataAwsccApigatewayAccount extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_account.html awscc_apigateway_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayAccountConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayAccountConfig);
    get cloudwatchRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
