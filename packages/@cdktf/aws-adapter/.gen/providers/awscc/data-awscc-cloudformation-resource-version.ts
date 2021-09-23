// https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudformationResourceVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html#id DataAwsccCloudformationResourceVersion#id}
  */
  readonly id: string;
}
export class DataAwsccCloudformationResourceVersionLoggingConfig extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_role_arn - computed: true, optional: false, required: false
  public get logRoleArn() {
    return this.getStringAttribute('log_role_arn');
  }
}

export function dataAwsccCloudformationResourceVersionLoggingConfigToTerraform(struct?: DataAwsccCloudformationResourceVersionLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html awscc_cloudformation_resource_version}
*/
export class DataAwsccCloudformationResourceVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_resource_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html awscc_cloudformation_resource_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationResourceVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationResourceVersionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getBooleanAttribute('is_default_version');
  }

  // logging_config - computed: true, optional: false, required: false
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }

  // provisioning_type - computed: true, optional: false, required: false
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }

  // schema_handler_package - computed: true, optional: false, required: false
  public get schemaHandlerPackage() {
    return this.getStringAttribute('schema_handler_package');
  }

  // type_arn - computed: true, optional: false, required: false
  public get typeArn() {
    return this.getStringAttribute('type_arn');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
