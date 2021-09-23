// https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}
  */
  readonly autoCreateTasks: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}
  */
  readonly loRaWanUpdateGatewayTaskEntry?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
  /**
  * The name of the new resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#name IotwirelessTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#tags IotwirelessTaskDefinition#tags}
  */
  readonly tags?: IotwirelessTaskDefinitionTags[];
  /**
  * A filter to list only the wireless gateway task definitions that use this task definition type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#task_definition_type IotwirelessTaskDefinition#task_definition_type}
  */
  readonly taskDefinitionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update IotwirelessTaskDefinition#update}
  */
  readonly update?: IotwirelessTaskDefinitionUpdate;
}
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#current_version IotwirelessTaskDefinition#current_version}
  */
  readonly currentVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_version IotwirelessTaskDefinition#update_version}
  */
  readonly updateVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    current_version: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct!.currentVersion),
    update_version: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct!.updateVersion),
  }
}

export interface IotwirelessTaskDefinitionTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#key IotwirelessTaskDefinition#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#value IotwirelessTaskDefinition#value}
  */
  readonly value?: string;
}

export function iotwirelessTaskDefinitionTagsToTerraform(struct?: IotwirelessTaskDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export interface IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    station: cdktf.stringToTerraform(struct!.station),
  }
}

export interface IotwirelessTaskDefinitionUpdateLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#current_version IotwirelessTaskDefinition#current_version}
  */
  readonly currentVersion?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}
  */
  readonly sigKeyCrc?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_signature IotwirelessTaskDefinition#update_signature}
  */
  readonly updateSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_version IotwirelessTaskDefinition#update_version}
  */
  readonly updateVersion?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    current_version: iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct!.currentVersion),
    sig_key_crc: cdktf.numberToTerraform(struct!.sigKeyCrc),
    update_signature: cdktf.stringToTerraform(struct!.updateSignature),
    update_version: iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct!.updateVersion),
  }
}

export interface IotwirelessTaskDefinitionUpdate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}
  */
  readonly loRaWan?: IotwirelessTaskDefinitionUpdateLoRaWan;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_data_role IotwirelessTaskDefinition#update_data_role}
  */
  readonly updateDataRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_data_source IotwirelessTaskDefinition#update_data_source}
  */
  readonly updateDataSource?: string;
}

export function iotwirelessTaskDefinitionUpdateToTerraform(struct?: IotwirelessTaskDefinitionUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lo_ra_wan: iotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct!.loRaWan),
    update_data_role: cdktf.stringToTerraform(struct!.updateDataRole),
    update_data_source: cdktf.stringToTerraform(struct!.updateDataSource),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html awscc_iotwireless_task_definition}
*/
export class IotwirelessTaskDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_task_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html awscc_iotwireless_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessTaskDefinitionConfig) {
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
    this._autoCreateTasks = config.autoCreateTasks;
    this._loRaWanUpdateGatewayTaskEntry = config.loRaWanUpdateGatewayTaskEntry;
    this._name = config.name;
    this._tags = config.tags;
    this._taskDefinitionType = config.taskDefinitionType;
    this._update = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_create_tasks - computed: false, optional: false, required: true
  private _autoCreateTasks: boolean | cdktf.IResolvable;
  public get autoCreateTasks() {
    return this.getBooleanAttribute('auto_create_tasks');
  }
  public set autoCreateTasks(value: boolean | cdktf.IResolvable) {
    this._autoCreateTasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTasksInput() {
    return this._autoCreateTasks
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lo_ra_wan_update_gateway_task_entry - computed: false, optional: true, required: false
  private _loRaWanUpdateGatewayTaskEntry?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
  public get loRaWanUpdateGatewayTaskEntry() {
    return this.interpolationForAttribute('lo_ra_wan_update_gateway_task_entry') as any;
  }
  public set loRaWanUpdateGatewayTaskEntry(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry ) {
    this._loRaWanUpdateGatewayTaskEntry = value;
  }
  public resetLoRaWanUpdateGatewayTaskEntry() {
    this._loRaWanUpdateGatewayTaskEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanUpdateGatewayTaskEntryInput() {
    return this._loRaWanUpdateGatewayTaskEntry
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotwirelessTaskDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessTaskDefinitionTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_definition_type - computed: false, optional: true, required: false
  private _taskDefinitionType?: string;
  public get taskDefinitionType() {
    return this.getStringAttribute('task_definition_type');
  }
  public set taskDefinitionType(value: string ) {
    this._taskDefinitionType = value;
  }
  public resetTaskDefinitionType() {
    this._taskDefinitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionTypeInput() {
    return this._taskDefinitionType
  }

  // update - computed: false, optional: true, required: false
  private _update?: IotwirelessTaskDefinitionUpdate;
  public get update() {
    return this.interpolationForAttribute('update') as any;
  }
  public set update(value: IotwirelessTaskDefinitionUpdate ) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_tasks: cdktf.booleanToTerraform(this._autoCreateTasks),
      lo_ra_wan_update_gateway_task_entry: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(this._loRaWanUpdateGatewayTaskEntry),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(iotwirelessTaskDefinitionTagsToTerraform)(this._tags),
      task_definition_type: cdktf.stringToTerraform(this._taskDefinitionType),
      update: iotwirelessTaskDefinitionUpdateToTerraform(this._update),
    };
  }
}
