// https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudformationTypeActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html#id DataAwsccCloudformationTypeActivation#id}
  */
  readonly id: string;
}
export class DataAwsccCloudformationTypeActivationLoggingConfig extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_role_arn - computed: true, optional: false, required: false
  public get logRoleArn() {
    return this.getStringAttribute('log_role_arn');
  }
}

export function dataAwsccCloudformationTypeActivationLoggingConfigToTerraform(struct?: DataAwsccCloudformationTypeActivationLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html awscc_cloudformation_type_activation}
*/
export class DataAwsccCloudformationTypeActivation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_type_activation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html awscc_cloudformation_type_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationTypeActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationTypeActivationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_update - computed: true, optional: false, required: false
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // logging_config - computed: true, optional: false, required: false
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }

  // public_type_arn - computed: true, optional: false, required: false
  public get publicTypeArn() {
    return this.getStringAttribute('public_type_arn');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // type_name_alias - computed: true, optional: false, required: false
  public get typeNameAlias() {
    return this.getStringAttribute('type_name_alias');
  }

  // version_bump - computed: true, optional: false, required: false
  public get versionBump() {
    return this.getStringAttribute('version_bump');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
