// https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the site.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#description NetworkmanagerSite#description}
  */
  readonly description?: string;
  /**
  * The ID of the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#global_network_id NetworkmanagerSite#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * The location of the site
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#location NetworkmanagerSite#location}
  */
  readonly location?: NetworkmanagerSiteLocation;
  /**
  * The tags for the site.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#tags NetworkmanagerSite#tags}
  */
  readonly tags?: NetworkmanagerSiteTags[];
}
export interface NetworkmanagerSiteLocation {
  /**
  * The physical address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#address NetworkmanagerSite#address}
  */
  readonly address?: string;
  /**
  * The latitude.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#latitude NetworkmanagerSite#latitude}
  */
  readonly latitude?: string;
  /**
  * The longitude.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#longitude NetworkmanagerSite#longitude}
  */
  readonly longitude?: string;
}

export function networkmanagerSiteLocationToTerraform(struct?: NetworkmanagerSiteLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
  }
}

export interface NetworkmanagerSiteTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#key NetworkmanagerSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#value NetworkmanagerSite#value}
  */
  readonly value?: string;
}

export function networkmanagerSiteTagsToTerraform(struct?: NetworkmanagerSiteTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html awscc_networkmanager_site}
*/
export class NetworkmanagerSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_site";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html awscc_networkmanager_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerSiteConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_site',
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
  private _location?: NetworkmanagerSiteLocation;
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }
  public set location(value: NetworkmanagerSiteLocation ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // site_arn - computed: true, optional: false, required: false
  public get siteArn() {
    return this.getStringAttribute('site_arn');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkmanagerSiteTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkmanagerSiteTags[] ) {
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
      global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
      location: networkmanagerSiteLocationToTerraform(this._location),
      tags: cdktf.listMapper(networkmanagerSiteTagsToTerraform)(this._tags),
    };
  }
}
