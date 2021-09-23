import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayDocumentationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the API documentation snapshot.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#description ApigatewayDocumentationVersion#description}
    */
    readonly description?: string;
    /**
    * The version identifier of the API documentation snapshot.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#documentation_version ApigatewayDocumentationVersion#documentation_version}
    */
    readonly documentationVersion: string;
    /**
    * The identifier of the API.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#rest_api_id ApigatewayDocumentationVersion#rest_api_id}
    */
    readonly restApiId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html awscc_apigateway_documentation_version}
*/
export declare class ApigatewayDocumentationVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html awscc_apigateway_documentation_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayDocumentationVersionConfig
    */
    constructor(scope: Construct, id: string, config: ApigatewayDocumentationVersionConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _documentationVersion;
    get documentationVersion(): string;
    set documentationVersion(value: string);
    get documentationVersionInput(): string;
    get id(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
