import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * The parent resource's identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#parent_id ApigatewayResource#parent_id}
    */
    readonly parentId: string;
    /**
    * The last path segment for this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#path_part ApigatewayResource#path_part}
    */
    readonly pathPart: string;
    /**
    * The ID of the RestApi resource in which you want to create this resource..
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#rest_api_id ApigatewayResource#rest_api_id}
    */
    readonly restApiId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html awscc_apigateway_resource}
*/
export declare class ApigatewayResource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html awscc_apigateway_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayResourceConfig
    */
    constructor(scope: Construct, id: string, config: ApigatewayResourceConfig);
    get id(): string;
    private _parentId;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
    private _pathPart;
    get pathPart(): string;
    set pathPart(value: string);
    get pathPartInput(): string;
    get resourceId(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
