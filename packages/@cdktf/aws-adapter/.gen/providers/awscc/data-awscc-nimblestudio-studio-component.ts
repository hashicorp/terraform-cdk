// https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNimblestudioStudioComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html#id DataAwsccNimblestudioStudioComponent#id}
  */
  readonly id: string;
}
export class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration extends cdktf.ComplexComputedList {

  // computer_attributes - computed: true, optional: false, required: false
  public get computerAttributes() {
    return this.interpolationForAttribute('computer_attributes') as any;
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // organizational_unit_distinguished_name - computed: true, optional: false, required: false
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    computer_attributes: cdktf.listMapper(dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform)(struct!.computerAttributes),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}

export class DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration extends cdktf.ComplexComputedList {

  // active_directory_user - computed: true, optional: false, required: false
  public get activeDirectoryUser() {
    return this.getStringAttribute('active_directory_user');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_user: cdktf.stringToTerraform(struct!.activeDirectoryUser),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // linux_mount_point - computed: true, optional: false, required: false
  public get linuxMountPoint() {
    return this.getStringAttribute('linux_mount_point');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }

  // windows_mount_drive - computed: true, optional: false, required: false
  public get windowsMountDrive() {
    return this.getStringAttribute('windows_mount_drive');
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    linux_mount_point: cdktf.stringToTerraform(struct!.linuxMountPoint),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    windows_mount_drive: cdktf.stringToTerraform(struct!.windowsMountDrive),
  }
}

export class DataAwsccNimblestudioStudioComponentConfiguration extends cdktf.ComplexComputedList {

  // active_directory_configuration - computed: true, optional: false, required: false
  public get activeDirectoryConfiguration() {
    return this.interpolationForAttribute('active_directory_configuration') as any;
  }

  // compute_farm_configuration - computed: true, optional: false, required: false
  public get computeFarmConfiguration() {
    return this.interpolationForAttribute('compute_farm_configuration') as any;
  }

  // license_service_configuration - computed: true, optional: false, required: false
  public get licenseServiceConfiguration() {
    return this.interpolationForAttribute('license_service_configuration') as any;
  }

  // shared_file_system_configuration - computed: true, optional: false, required: false
  public get sharedFileSystemConfiguration() {
    return this.interpolationForAttribute('shared_file_system_configuration') as any;
  }
}

export function dataAwsccNimblestudioStudioComponentConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_configuration: dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct!.activeDirectoryConfiguration),
    compute_farm_configuration: dataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct!.computeFarmConfiguration),
    license_service_configuration: dataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct!.licenseServiceConfiguration),
    shared_file_system_configuration: dataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct!.sharedFileSystemConfiguration),
  }
}

export class DataAwsccNimblestudioStudioComponentInitializationScripts extends cdktf.ComplexComputedList {

  // launch_profile_protocol_version - computed: true, optional: false, required: false
  public get launchProfileProtocolVersion() {
    return this.getStringAttribute('launch_profile_protocol_version');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // run_context - computed: true, optional: false, required: false
  public get runContext() {
    return this.getStringAttribute('run_context');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export function dataAwsccNimblestudioStudioComponentInitializationScriptsToTerraform(struct?: DataAwsccNimblestudioStudioComponentInitializationScripts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_profile_protocol_version: cdktf.stringToTerraform(struct!.launchProfileProtocolVersion),
    platform: cdktf.stringToTerraform(struct!.platform),
    run_context: cdktf.stringToTerraform(struct!.runContext),
    script: cdktf.stringToTerraform(struct!.script),
  }
}

export class DataAwsccNimblestudioStudioComponentScriptParameters extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNimblestudioStudioComponentScriptParametersToTerraform(struct?: DataAwsccNimblestudioStudioComponentScriptParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html awscc_nimblestudio_studio_component}
*/
export class DataAwsccNimblestudioStudioComponent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_studio_component";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html awscc_nimblestudio_studio_component} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioStudioComponentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStudioComponentConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_2_security_group_ids - computed: true, optional: false, required: false
  public get ec2SecurityGroupIds() {
    return this.getListAttribute('ec_2_security_group_ids');
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

  // initialization_scripts - computed: true, optional: false, required: false
  public get initializationScripts() {
    return this.interpolationForAttribute('initialization_scripts') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script_parameters - computed: true, optional: false, required: false
  public get scriptParameters() {
    return this.interpolationForAttribute('script_parameters') as any;
  }

  // studio_component_id - computed: true, optional: false, required: false
  public get studioComponentId() {
    return this.getStringAttribute('studio_component_id');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
