// https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#key_group_config CloudfrontKeyGroup#key_group_config}
  */
  readonly keyGroupConfig: CloudfrontKeyGroupKeyGroupConfig;
}
export interface CloudfrontKeyGroupKeyGroupConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#comment CloudfrontKeyGroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#items CloudfrontKeyGroup#items}
  */
  readonly items: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#name CloudfrontKeyGroup#name}
  */
  readonly name: string;
}

export function cloudfrontKeyGroupKeyGroupConfigToTerraform(struct?: CloudfrontKeyGroupKeyGroupConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group}
*/
export class CloudfrontKeyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_key_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontKeyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontKeyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_key_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyGroupConfig = config.keyGroupConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_group_config - computed: false, optional: false, required: true
  private _keyGroupConfig: CloudfrontKeyGroupKeyGroupConfig;
  public get keyGroupConfig() {
    return this.interpolationForAttribute('key_group_config') as any;
  }
  public set keyGroupConfig(value: CloudfrontKeyGroupKeyGroupConfig) {
    this._keyGroupConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyGroupConfigInput() {
    return this._keyGroupConfig
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_group_config: cloudfrontKeyGroupKeyGroupConfigToTerraform(this._keyGroupConfig),
    };
  }
}
