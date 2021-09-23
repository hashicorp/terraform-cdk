import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html#id DataAwsccApigatewayApiKey#id}
    */
    readonly id: string;
}
export declare class DataAwsccApigatewayApiKeyStageKeys extends cdktf.ComplexComputedList {
    get restApiId(): string;
    get stageName(): string;
}
export declare function dataAwsccApigatewayApiKeyStageKeysToTerraform(struct?: DataAwsccApigatewayApiKeyStageKeys): any;
export declare class DataAwsccApigatewayApiKeyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApigatewayApiKeyTagsToTerraform(struct?: DataAwsccApigatewayApiKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html awscc_apigateway_api_key}
*/
export declare class DataAwsccApigatewayApiKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html awscc_apigateway_api_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayApiKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayApiKeyConfig);
    get apiKeyId(): string;
    get customerId(): string;
    get description(): string;
    get enabled(): cdktf.IResolvable;
    get generateDistinctId(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get stageKeys(): any;
    get tags(): any;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
