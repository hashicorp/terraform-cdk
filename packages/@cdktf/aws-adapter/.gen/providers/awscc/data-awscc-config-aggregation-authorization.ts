// https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccConfigAggregationAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html#id DataAwsccConfigAggregationAuthorization#id}
  */
  readonly id: string;
}
export class DataAwsccConfigAggregationAuthorizationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccConfigAggregationAuthorizationTagsToTerraform(struct?: DataAwsccConfigAggregationAuthorizationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html awscc_config_aggregation_authorization}
*/
export class DataAwsccConfigAggregationAuthorization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_aggregation_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html awscc_config_aggregation_authorization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigAggregationAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigAggregationAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_aggregation_authorization',
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

  // aggregation_authorization_arn - computed: true, optional: false, required: false
  public get aggregationAuthorizationArn() {
    return this.getStringAttribute('aggregation_authorization_arn');
  }

  // authorized_account_id - computed: true, optional: false, required: false
  public get authorizedAccountId() {
    return this.getStringAttribute('authorized_account_id');
  }

  // authorized_aws_region - computed: true, optional: false, required: false
  public get authorizedAwsRegion() {
    return this.getStringAttribute('authorized_aws_region');
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
