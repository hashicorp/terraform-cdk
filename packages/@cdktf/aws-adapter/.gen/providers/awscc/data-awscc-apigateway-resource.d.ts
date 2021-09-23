import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_resource.html#id DataAwsccApigatewayResource#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_resource.html awscc_apigateway_resource}
*/
export declare class DataAwsccApigatewayResource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_resource.html awscc_apigateway_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayResourceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayResourceConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get parentId(): string;
    get pathPart(): string;
    get resourceId(): string;
    get restApiId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
