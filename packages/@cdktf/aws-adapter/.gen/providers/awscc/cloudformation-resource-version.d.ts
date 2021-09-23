import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationResourceVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#execution_role_arn CloudformationResourceVersion#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#logging_config CloudformationResourceVersion#logging_config}
    */
    readonly loggingConfig?: CloudformationResourceVersionLoggingConfig;
    /**
    * A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.
  
  For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#schema_handler_package CloudformationResourceVersion#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * The name of the type being registered.
  
  We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#type_name CloudformationResourceVersion#type_name}
    */
    readonly typeName: string;
}
export interface CloudformationResourceVersionLoggingConfig {
    /**
    * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#log_group_name CloudformationResourceVersion#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html#log_role_arn CloudformationResourceVersion#log_role_arn}
    */
    readonly logRoleArn?: string;
}
export declare function cloudformationResourceVersionLoggingConfigToTerraform(struct?: CloudformationResourceVersionLoggingConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html awscc_cloudformation_resource_version}
*/
export declare class CloudformationResourceVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html awscc_cloudformation_resource_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationResourceVersionConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationResourceVersionConfig);
    get arn(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    get id(): string;
    get isDefaultVersion(): cdktf.IResolvable;
    private _loggingConfig?;
    get loggingConfig(): CloudformationResourceVersionLoggingConfig;
    set loggingConfig(value: CloudformationResourceVersionLoggingConfig);
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudformationResourceVersionLoggingConfig | undefined;
    get provisioningType(): string;
    private _schemaHandlerPackage;
    get schemaHandlerPackage(): string;
    set schemaHandlerPackage(value: string);
    get schemaHandlerPackageInput(): string;
    get typeArn(): string;
    private _typeName;
    get typeName(): string;
    set typeName(value: string);
    get typeNameInput(): string;
    get versionId(): string;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
