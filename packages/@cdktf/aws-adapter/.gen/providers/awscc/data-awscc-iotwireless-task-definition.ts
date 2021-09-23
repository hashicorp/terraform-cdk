// https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotwirelessTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html#id DataAwsccIotwirelessTaskDefinition#id}
  */
  readonly id: string;
}
export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion extends cdktf.ComplexComputedList {

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion extends cdktf.ComplexComputedList {

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry extends cdktf.ComplexComputedList {

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.interpolationForAttribute('current_version') as any;
  }

  // update_version - computed: true, optional: false, required: false
  public get updateVersion() {
    return this.interpolationForAttribute('update_version') as any;
  }
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    current_version: dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct!.currentVersion),
    update_version: dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct!.updateVersion),
  }
}

export class DataAwsccIotwirelessTaskDefinitionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotwirelessTaskDefinitionTagsToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion extends cdktf.ComplexComputedList {

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion extends cdktf.ComplexComputedList {

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan extends cdktf.ComplexComputedList {

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.interpolationForAttribute('current_version') as any;
  }

  // sig_key_crc - computed: true, optional: false, required: false
  public get sigKeyCrc() {
    return this.getNumberAttribute('sig_key_crc');
  }

  // update_signature - computed: true, optional: false, required: false
  public get updateSignature() {
    return this.getStringAttribute('update_signature');
  }

  // update_version - computed: true, optional: false, required: false
  public get updateVersion() {
    return this.interpolationForAttribute('update_version') as any;
  }
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    current_version: dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct!.currentVersion),
    sig_key_crc: cdktf.numberToTerraform(struct!.sigKeyCrc),
    update_signature: cdktf.stringToTerraform(struct!.updateSignature),
    update_version: dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct!.updateVersion),
  }
}

export class DataAwsccIotwirelessTaskDefinitionUpdate extends cdktf.ComplexComputedList {

  // lo_ra_wan - computed: true, optional: false, required: false
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }

  // update_data_role - computed: true, optional: false, required: false
  public get updateDataRole() {
    return this.getStringAttribute('update_data_role');
  }

  // update_data_source - computed: true, optional: false, required: false
  public get updateDataSource() {
    return this.getStringAttribute('update_data_source');
  }
}

export function dataAwsccIotwirelessTaskDefinitionUpdateToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lo_ra_wan: dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct!.loRaWan),
    update_data_role: cdktf.stringToTerraform(struct!.updateDataRole),
    update_data_source: cdktf.stringToTerraform(struct!.updateDataSource),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html awscc_iotwireless_task_definition}
*/
export class DataAwsccIotwirelessTaskDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_task_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html awscc_iotwireless_task_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_task_definition',
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

  // auto_create_tasks - computed: true, optional: false, required: false
  public get autoCreateTasks() {
    return this.getBooleanAttribute('auto_create_tasks');
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

  // lo_ra_wan_update_gateway_task_entry - computed: true, optional: false, required: false
  public get loRaWanUpdateGatewayTaskEntry() {
    return this.interpolationForAttribute('lo_ra_wan_update_gateway_task_entry') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // task_definition_type - computed: true, optional: false, required: false
  public get taskDefinitionType() {
    return this.getStringAttribute('task_definition_type');
  }

  // update - computed: true, optional: false, required: false
  public get update() {
    return this.interpolationForAttribute('update') as any;
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
