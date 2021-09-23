// https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html#id DataAwsccNetworkmanagerSite#id}
  */
  readonly id: string;
}
export class DataAwsccNetworkmanagerSiteLocation extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
}

export function dataAwsccNetworkmanagerSiteLocationToTerraform(struct?: DataAwsccNetworkmanagerSiteLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
  }
}

export class DataAwsccNetworkmanagerSiteTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkmanagerSiteTagsToTerraform(struct?: DataAwsccNetworkmanagerSiteTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html awscc_networkmanager_site}
*/
export class DataAwsccNetworkmanagerSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_site";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html awscc_networkmanager_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkmanagerSiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerSiteConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // global_network_id - computed: true, optional: false, required: false
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }

  // site_arn - computed: true, optional: false, required: false
  public get siteArn() {
    return this.getStringAttribute('site_arn');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
