// https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html#id DataAwsccCloudfrontKeyGroup#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontKeyGroupKeyGroupConfig extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccCloudfrontKeyGroupKeyGroupConfigToTerraform(struct?: DataAwsccCloudfrontKeyGroupKeyGroupConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html awscc_cloudfront_key_group}
*/
export class DataAwsccCloudfrontKeyGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_key_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html awscc_cloudfront_key_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontKeyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontKeyGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_group_config - computed: true, optional: false, required: false
  public get keyGroupConfig() {
    return this.interpolationForAttribute('key_group_config') as any;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
