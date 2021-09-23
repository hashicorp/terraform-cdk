// https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function cloudformationResourceVersionLoggingConfigToTerraform(struct?: CloudformationResourceVersionLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html awscc_cloudformation_resource_version}
*/
export class CloudformationResourceVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_resource_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_version.html awscc_cloudformation_resource_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationResourceVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationResourceVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_resource_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._executionRoleArn = config.executionRoleArn;
    this._loggingConfig = config.loggingConfig;
    this._schemaHandlerPackage = config.schemaHandlerPackage;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getBooleanAttribute('is_default_version');
  }

  // logging_config - computed: true, optional: true, required: false
  private _loggingConfig?: CloudformationResourceVersionLoggingConfig;
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }
  public set loggingConfig(value: CloudformationResourceVersionLoggingConfig) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // provisioning_type - computed: true, optional: false, required: false
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }

  // schema_handler_package - computed: false, optional: false, required: true
  private _schemaHandlerPackage: string;
  public get schemaHandlerPackage() {
    return this.getStringAttribute('schema_handler_package');
  }
  public set schemaHandlerPackage(value: string) {
    this._schemaHandlerPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaHandlerPackageInput() {
    return this._schemaHandlerPackage
  }

  // type_arn - computed: true, optional: false, required: false
  public get typeArn() {
    return this.getStringAttribute('type_arn');
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      logging_config: cloudformationResourceVersionLoggingConfigToTerraform(this._loggingConfig),
      schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
      type_name: cdktf.stringToTerraform(this._typeName),
    };
  }
}
