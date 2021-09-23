import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * The content type for the model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html#content_type ApigatewayModel#content_type}
    */
    readonly contentType?: string;
    /**
    * A description that identifies this model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html#description ApigatewayModel#description}
    */
    readonly description?: string;
    /**
    * A name for the model. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the model name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html#name ApigatewayModel#name}
    */
    readonly name?: string;
    /**
    * The ID of a REST API with which to associate this model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html#rest_api_id ApigatewayModel#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * The schema to use to transform data to one or more output formats. Specify null ({}) if you don't want to specify a schema.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html#schema ApigatewayModel#schema}
    */
    readonly schema?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html awscc_apigateway_model}
*/
export declare class ApigatewayModel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_model.html awscc_apigateway_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayModelConfig
    */
    constructor(scope: Construct, id: string, config: ApigatewayModelConfig);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
