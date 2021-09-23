// https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#description NetworkmanagerDevice#description}
  */
  readonly description?: string;
  /**
  * The ID of the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#global_network_id NetworkmanagerDevice#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * The site location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#location NetworkmanagerDevice#location}
  */
  readonly location?: NetworkmanagerDeviceLocation;
  /**
  * The device model
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#model NetworkmanagerDevice#model}
  */
  readonly model?: string;
  /**
  * The device serial number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#serial_number NetworkmanagerDevice#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The site ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#site_id NetworkmanagerDevice#site_id}
  */
  readonly siteId?: string;
  /**
  * The tags for the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#tags NetworkmanagerDevice#tags}
  */
  readonly tags?: NetworkmanagerDeviceTags[];
  /**
  * The device type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#type NetworkmanagerDevice#type}
  */
  readonly type?: string;
  /**
  * The device vendor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#vendor NetworkmanagerDevice#vendor}
  */
  readonly vendor?: string;
}
export interface NetworkmanagerDeviceLocation {
  /**
  * The physical address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#address NetworkmanagerDevice#address}
  */
  readonly address?: string;
  /**
  * The latitude.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#latitude NetworkmanagerDevice#latitude}
  */
  readonly latitude?: string;
  /**
  * The longitude.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#longitude NetworkmanagerDevice#longitude}
  */
  readonly longitude?: string;
}

export function networkmanagerDeviceLocationToTerraform(struct?: NetworkmanagerDeviceLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
  }
}

export interface NetworkmanagerDeviceTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#key NetworkmanagerDevice#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#value NetworkmanagerDevice#value}
  */
  readonly value?: string;
}

export function networkmanagerDeviceTagsToTerraform(struct?: NetworkmanagerDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html awscc_networkmanager_device}
*/
export class NetworkmanagerDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html awscc_networkmanager_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_device',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._globalNetworkId = config.globalNetworkId;
    this._location = config.location;
    this._model = config.model;
    this._serialNumber = config.serialNumber;
    this._siteId = config.siteId;
    this._tags = config.tags;
    this._type = config.type;
    this._vendor = config.vendor;
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

  // device_arn - computed: true, optional: false, required: false
  public get deviceArn() {
    return this.getStringAttribute('device_arn');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // global_network_id - computed: false, optional: false, required: true
  private _globalNetworkId: string;
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
  }
  public set globalNetworkId(value: string) {
    this._globalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkIdInput() {
    return this._globalNetworkId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: NetworkmanagerDeviceLocation;
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }
  public set location(value: NetworkmanagerDeviceLocation ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // model - computed: false, optional: true, required: false
  private _model?: string;
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string ) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string;
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string ) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string;
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string ) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkmanagerDeviceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkmanagerDeviceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string;
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string ) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
      location: networkmanagerDeviceLocationToTerraform(this._location),
      model: cdktf.stringToTerraform(this._model),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      site_id: cdktf.stringToTerraform(this._siteId),
      tags: cdktf.listMapper(networkmanagerDeviceTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }
}
