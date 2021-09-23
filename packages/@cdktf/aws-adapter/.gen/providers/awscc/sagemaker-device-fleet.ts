// https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the edge device fleet
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#description SagemakerDeviceFleet#description}
  */
  readonly description?: string;
  /**
  * The name of the edge device fleet
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#output_config SagemakerDeviceFleet#output_config}
  */
  readonly outputConfig: SagemakerDeviceFleetOutputConfig;
  /**
  * Role associated with the device fleet
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#role_arn SagemakerDeviceFleet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Associate tags with the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#tags SagemakerDeviceFleet#tags}
  */
  readonly tags?: SagemakerDeviceFleetTags[];
}
export interface SagemakerDeviceFleetOutputConfig {
  /**
  * The KMS key id used for encryption on the S3 bucket
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#kms_key_id SagemakerDeviceFleet#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The Amazon Simple Storage (S3) bucket URI
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#s3_output_location SagemakerDeviceFleet#s3_output_location}
  */
  readonly s3OutputLocation: string;
}

export function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_location: cdktf.stringToTerraform(struct!.s3OutputLocation),
  }
}

export interface SagemakerDeviceFleetTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#key SagemakerDeviceFleet#key}
  */
  readonly key: string;
  /**
  * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#value SagemakerDeviceFleet#value}
  */
  readonly value: string;
}

export function sagemakerDeviceFleetTagsToTerraform(struct?: SagemakerDeviceFleetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html awscc_sagemaker_device_fleet}
*/
export class SagemakerDeviceFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_device_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html awscc_sagemaker_device_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDeviceFleetConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_device_fleet',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._deviceFleetName = config.deviceFleetName;
    this._outputConfig = config.outputConfig;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // device_fleet_name - computed: false, optional: false, required: true
  private _deviceFleetName: string;
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
  }
  public set deviceFleetName(value: string) {
    this._deviceFleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFleetNameInput() {
    return this._deviceFleetName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig: SagemakerDeviceFleetOutputConfig;
  public get outputConfig() {
    return this.interpolationForAttribute('output_config') as any;
  }
  public set outputConfig(value: SagemakerDeviceFleetOutputConfig) {
    this._outputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerDeviceFleetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerDeviceFleetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
      output_config: sagemakerDeviceFleetOutputConfigToTerraform(this._outputConfig),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(sagemakerDeviceFleetTagsToTerraform)(this._tags),
    };
  }
}
