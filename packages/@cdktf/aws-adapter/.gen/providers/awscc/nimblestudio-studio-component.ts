// https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NimblestudioStudioComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#configuration NimblestudioStudioComponent#configuration}
  */
  readonly configuration?: NimblestudioStudioComponentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#description NimblestudioStudioComponent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}
  */
  readonly ec2SecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#initialization_scripts NimblestudioStudioComponent#initialization_scripts}
  */
  readonly initializationScripts?: NimblestudioStudioComponentInitializationScripts[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#name NimblestudioStudioComponent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#script_parameters NimblestudioStudioComponent#script_parameters}
  */
  readonly scriptParameters?: NimblestudioStudioComponentScriptParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#studio_id NimblestudioStudioComponent#studio_id}
  */
  readonly studioId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#subtype NimblestudioStudioComponent#subtype}
  */
  readonly subtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#tags NimblestudioStudioComponent#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#type NimblestudioStudioComponent#type}
  */
  readonly type: string;
}
export interface NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#name NimblestudioStudioComponent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#value NimblestudioStudioComponent#value}
  */
  readonly value?: string;
}

export function nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform(struct?: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#computer_attributes NimblestudioStudioComponent#computer_attributes}
  */
  readonly computerAttributes?: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#directory_id NimblestudioStudioComponent#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
}

export function nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    computer_attributes: cdktf.listMapper(nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform)(struct!.computerAttributes),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}

export interface NimblestudioStudioComponentConfigurationComputeFarmConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#active_directory_user NimblestudioStudioComponent#active_directory_user}
  */
  readonly activeDirectoryUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
  */
  readonly endpoint?: string;
}

export function nimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationComputeFarmConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_user: cdktf.stringToTerraform(struct!.activeDirectoryUser),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export interface NimblestudioStudioComponentConfigurationLicenseServiceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
  */
  readonly endpoint?: string;
}

export function nimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export interface NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#file_system_id NimblestudioStudioComponent#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#linux_mount_point NimblestudioStudioComponent#linux_mount_point}
  */
  readonly linuxMountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#share_name NimblestudioStudioComponent#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}
  */
  readonly windowsMountDrive?: string;
}

export function nimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    linux_mount_point: cdktf.stringToTerraform(struct!.linuxMountPoint),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    windows_mount_drive: cdktf.stringToTerraform(struct!.windowsMountDrive),
  }
}

export interface NimblestudioStudioComponentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}
  */
  readonly activeDirectoryConfiguration?: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}
  */
  readonly computeFarmConfiguration?: NimblestudioStudioComponentConfigurationComputeFarmConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#license_service_configuration NimblestudioStudioComponent#license_service_configuration}
  */
  readonly licenseServiceConfiguration?: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}
  */
  readonly sharedFileSystemConfiguration?: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;
}

export function nimblestudioStudioComponentConfigurationToTerraform(struct?: NimblestudioStudioComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_configuration: nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct!.activeDirectoryConfiguration),
    compute_farm_configuration: nimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct!.computeFarmConfiguration),
    license_service_configuration: nimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct!.licenseServiceConfiguration),
    shared_file_system_configuration: nimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct!.sharedFileSystemConfiguration),
  }
}

export interface NimblestudioStudioComponentInitializationScripts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}
  */
  readonly launchProfileProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#platform NimblestudioStudioComponent#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#run_context NimblestudioStudioComponent#run_context}
  */
  readonly runContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#script NimblestudioStudioComponent#script}
  */
  readonly script?: string;
}

export function nimblestudioStudioComponentInitializationScriptsToTerraform(struct?: NimblestudioStudioComponentInitializationScripts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_profile_protocol_version: cdktf.stringToTerraform(struct!.launchProfileProtocolVersion),
    platform: cdktf.stringToTerraform(struct!.platform),
    run_context: cdktf.stringToTerraform(struct!.runContext),
    script: cdktf.stringToTerraform(struct!.script),
  }
}

export interface NimblestudioStudioComponentScriptParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#key NimblestudioStudioComponent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#value NimblestudioStudioComponent#value}
  */
  readonly value?: string;
}

export function nimblestudioStudioComponentScriptParametersToTerraform(struct?: NimblestudioStudioComponentScriptParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html awscc_nimblestudio_studio_component}
*/
export class NimblestudioStudioComponent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_studio_component";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html awscc_nimblestudio_studio_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioStudioComponentConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioStudioComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_studio_component',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configuration = config.configuration;
    this._description = config.description;
    this._ec2SecurityGroupIds = config.ec2SecurityGroupIds;
    this._initializationScripts = config.initializationScripts;
    this._name = config.name;
    this._scriptParameters = config.scriptParameters;
    this._studioId = config.studioId;
    this._subtype = config.subtype;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration?: NimblestudioStudioComponentConfiguration;
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: NimblestudioStudioComponentConfiguration ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

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

  // ec_2_security_group_ids - computed: false, optional: true, required: false
  private _ec2SecurityGroupIds?: string[];
  public get ec2SecurityGroupIds() {
    return this.getListAttribute('ec_2_security_group_ids');
  }
  public set ec2SecurityGroupIds(value: string[] ) {
    this._ec2SecurityGroupIds = value;
  }
  public resetEc2SecurityGroupIds() {
    this._ec2SecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SecurityGroupIdsInput() {
    return this._ec2SecurityGroupIds
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialization_scripts - computed: false, optional: true, required: false
  private _initializationScripts?: NimblestudioStudioComponentInitializationScripts[];
  public get initializationScripts() {
    return this.interpolationForAttribute('initialization_scripts') as any;
  }
  public set initializationScripts(value: NimblestudioStudioComponentInitializationScripts[] ) {
    this._initializationScripts = value;
  }
  public resetInitializationScripts() {
    this._initializationScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationScriptsInput() {
    return this._initializationScripts
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // script_parameters - computed: false, optional: true, required: false
  private _scriptParameters?: NimblestudioStudioComponentScriptParameters[];
  public get scriptParameters() {
    return this.interpolationForAttribute('script_parameters') as any;
  }
  public set scriptParameters(value: NimblestudioStudioComponentScriptParameters[] ) {
    this._scriptParameters = value;
  }
  public resetScriptParameters() {
    this._scriptParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptParametersInput() {
    return this._scriptParameters
  }

  // studio_component_id - computed: true, optional: false, required: false
  public get studioComponentId() {
    return this.getStringAttribute('studio_component_id');
  }

  // studio_id - computed: false, optional: false, required: true
  private _studioId: string;
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId
  }

  // subtype - computed: true, optional: true, required: false
  private _subtype?: string;
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: nimblestudioStudioComponentConfigurationToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      ec_2_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ec2SecurityGroupIds),
      initialization_scripts: cdktf.listMapper(nimblestudioStudioComponentInitializationScriptsToTerraform)(this._initializationScripts),
      name: cdktf.stringToTerraform(this._name),
      script_parameters: cdktf.listMapper(nimblestudioStudioComponentScriptParametersToTerraform)(this._scriptParameters),
      studio_id: cdktf.stringToTerraform(this._studioId),
      subtype: cdktf.stringToTerraform(this._subtype),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
