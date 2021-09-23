// https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function cloudformationTypeActivationLoggingConfigToTerraform(struct?: CloudformationTypeActivationLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation}
*/
export class CloudformationTypeActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_type_activation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_type_activation.html awscc_cloudformation_type_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationTypeActivationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudformationTypeActivationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_type_activation',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoUpdate = config.autoUpdate;
    this._executionRoleArn = config.executionRoleArn;
    this._loggingConfig = config.loggingConfig;
    this._majorVersion = config.majorVersion;
    this._publicTypeArn = config.publicTypeArn;
    this._publisherId = config.publisherId;
    this._type = config.type;
    this._typeName = config.typeName;
    this._typeNameAlias = config.typeNameAlias;
    this._versionBump = config.versionBump;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable;
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable ) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate
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

  // logging_config - computed: true, optional: true, required: false
  private _loggingConfig?: CloudformationTypeActivationLoggingConfig;
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }
  public set loggingConfig(value: CloudformationTypeActivationLoggingConfig) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // major_version - computed: false, optional: true, required: false
  private _majorVersion?: string;
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }
  public set majorVersion(value: string ) {
    this._majorVersion = value;
  }
  public resetMajorVersion() {
    this._majorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion
  }

  // public_type_arn - computed: true, optional: true, required: false
  private _publicTypeArn?: string;
  public get publicTypeArn() {
    return this.getStringAttribute('public_type_arn');
  }
  public set publicTypeArn(value: string) {
    this._publicTypeArn = value;
  }
  public resetPublicTypeArn() {
    this._publicTypeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicTypeArnInput() {
    return this._publicTypeArn
  }

  // publisher_id - computed: true, optional: true, required: false
  private _publisherId?: string;
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }
  public set publisherId(value: string) {
    this._publisherId = value;
  }
  public resetPublisherId() {
    this._publisherId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // type_name_alias - computed: true, optional: true, required: false
  private _typeNameAlias?: string;
  public get typeNameAlias() {
    return this.getStringAttribute('type_name_alias');
  }
  public set typeNameAlias(value: string) {
    this._typeNameAlias = value;
  }
  public resetTypeNameAlias() {
    this._typeNameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameAliasInput() {
    return this._typeNameAlias
  }

  // version_bump - computed: false, optional: true, required: false
  private _versionBump?: string;
  public get versionBump() {
    return this.getStringAttribute('version_bump');
  }
  public set versionBump(value: string ) {
    this._versionBump = value;
  }
  public resetVersionBump() {
    this._versionBump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionBumpInput() {
    return this._versionBump
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      logging_config: cloudformationTypeActivationLoggingConfigToTerraform(this._loggingConfig),
      major_version: cdktf.stringToTerraform(this._majorVersion),
      public_type_arn: cdktf.stringToTerraform(this._publicTypeArn),
      publisher_id: cdktf.stringToTerraform(this._publisherId),
      type: cdktf.stringToTerraform(this._type),
      type_name: cdktf.stringToTerraform(this._typeName),
      type_name_alias: cdktf.stringToTerraform(this._typeNameAlias),
      version_bump: cdktf.stringToTerraform(this._versionBump),
    };
  }
}
