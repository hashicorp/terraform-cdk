import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * An AWS Marketplace customer identifier to use when integrating with the AWS SaaS Marketplace.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#customer_id ApigatewayApiKey#customer_id}
    */
    readonly customerId?: string;
    /**
    * A description of the purpose of the API key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#description ApigatewayApiKey#description}
    */
    readonly description?: string;
    /**
    * Indicates whether the API key can be used by clients.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#enabled ApigatewayApiKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specifies whether the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#generate_distinct_id ApigatewayApiKey#generate_distinct_id}
    */
    readonly generateDistinctId?: boolean | cdktf.IResolvable;
    /**
    * A name for the API key. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#name ApigatewayApiKey#name}
    */
    readonly name?: string;
    /**
    * A list of stages to associate with this API key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#stage_keys ApigatewayApiKey#stage_keys}
    */
    readonly stageKeys?: ApigatewayApiKeyStageKeys[];
    /**
    * An array of arbitrary tags (key-value pairs) to associate with the API key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#tags ApigatewayApiKey#tags}
    */
    readonly tags?: ApigatewayApiKeyTags[];
    /**
    * The value of the API key. Must be at least 20 characters long.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#value ApigatewayApiKey#value}
    */
    readonly value?: string;
}
export interface ApigatewayApiKeyStageKeys {
    /**
    * The ID of a RestApi resource that includes the stage with which you want to associate the API key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#rest_api_id ApigatewayApiKey#rest_api_id}
    */
    readonly restApiId?: string;
    /**
    * The name of the stage with which to associate the API key. The stage must be included in the RestApi resource that you specified in the RestApiId property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#stage_name ApigatewayApiKey#stage_name}
    */
    readonly stageName?: string;
}
export declare function apigatewayApiKeyStageKeysToTerraform(struct?: ApigatewayApiKeyStageKeys): any;
export interface ApigatewayApiKeyTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#key ApigatewayApiKey#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#value ApigatewayApiKey#value}
    */
    readonly value: string;
}
export declare function apigatewayApiKeyTagsToTerraform(struct?: ApigatewayApiKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html awscc_apigateway_api_key}
*/
export declare class ApigatewayApiKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html awscc_apigateway_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayApiKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApigatewayApiKeyConfig);
    get apiKeyId(): string;
    private _customerId?;
    get customerId(): string;
    set customerId(value: string);
    resetCustomerId(): void;
    get customerIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _generateDistinctId?;
    get generateDistinctId(): boolean | cdktf.IResolvable;
    set generateDistinctId(value: boolean | cdktf.IResolvable);
    resetGenerateDistinctId(): void;
    get generateDistinctIdInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _stageKeys?;
    get stageKeys(): ApigatewayApiKeyStageKeys[];
    set stageKeys(value: ApigatewayApiKeyStageKeys[]);
    resetStageKeys(): void;
    get stageKeysInput(): ApigatewayApiKeyStageKeys[] | undefined;
    private _tags?;
    get tags(): ApigatewayApiKeyTags[];
    set tags(value: ApigatewayApiKeyTags[]);
    resetTags(): void;
    get tagsInput(): ApigatewayApiKeyTags[] | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
