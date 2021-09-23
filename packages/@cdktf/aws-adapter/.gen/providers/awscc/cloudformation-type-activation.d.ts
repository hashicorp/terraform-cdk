import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationTypeActivationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#auto_update CloudformationTypeActivation#auto_update}
    */
    readonly autoUpdate?: boolean | cdktf.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#execution_role_arn CloudformationTypeActivation#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#logging_config CloudformationTypeActivation#logging_config}
    */
    readonly loggingConfig?: CloudformationTypeActivationLoggingConfig;
    /**
    * The Major Version of the type you want to enable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#major_version CloudformationTypeActivation#major_version}
    */
    readonly majorVersion?: string;
    /**
    * The Amazon Resource Number (ARN) assigned to the public extension upon publication
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#public_type_arn CloudformationTypeActivation#public_type_arn}
    */
    readonly publicTypeArn?: string;
    /**
    * The publisher id assigned by CloudFormation for publishing in this region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#publisher_id CloudformationTypeActivation#publisher_id}
    */
    readonly publisherId?: string;
    /**
    * The kind of extension
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#type CloudformationTypeActivation#type}
    */
    readonly type?: string;
    /**
    * The name of the type being registered.
  
  We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#type_name CloudformationTypeActivation#type_name}
    */
    readonly typeName?: string;
    /**
    * An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#type_name_alias CloudformationTypeActivation#type_name_alias}
    */
    readonly typeNameAlias?: string;
    /**
    * Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#version_bump CloudformationTypeActivation#version_bump}
    */
    readonly versionBump?: string;
}
export interface CloudformationTypeActivationLoggingConfig {
    /**
    * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#log_group_name CloudformationTypeActivation#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html#log_role_arn CloudformationTypeActivation#log_role_arn}
    */
    readonly logRoleArn?: string;
}
export declare function cloudformationTypeActivationLoggingConfigToTerraform(struct?: CloudformationTypeActivationLoggingConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation}
*/
export declare class CloudformationTypeActivation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeActivationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudformationTypeActivationConfig);
    get arn(): string;
    private _autoUpdate?;
    get autoUpdate(): boolean | cdktf.IResolvable;
    set autoUpdate(value: boolean | cdktf.IResolvable);
    resetAutoUpdate(): void;
    get autoUpdateInput(): boolean | cdktf.IResolvable | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    get id(): string;
    private _loggingConfig?;
    get loggingConfig(): CloudformationTypeActivationLoggingConfig;
    set loggingConfig(value: CloudformationTypeActivationLoggingConfig);
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudformationTypeActivationLoggingConfig | undefined;
    private _majorVersion?;
    get majorVersion(): string;
    set majorVersion(value: string);
    resetMajorVersion(): void;
    get majorVersionInput(): string | undefined;
    private _publicTypeArn?;
    get publicTypeArn(): string;
    set publicTypeArn(value: string);
    resetPublicTypeArn(): void;
    get publicTypeArnInput(): string | undefined;
    private _publisherId?;
    get publisherId(): string;
    set publisherId(value: string);
    resetPublisherId(): void;
    get publisherIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _typeNameAlias?;
    get typeNameAlias(): string;
    set typeNameAlias(value: string);
    resetTypeNameAlias(): void;
    get typeNameAliasInput(): string | undefined;
    private _versionBump?;
    get versionBump(): string;
    set versionBump(value: string);
    resetVersionBump(): void;
    get versionBumpInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
