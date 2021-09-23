// https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigAggregationAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The 12-digit account ID of the account authorized to aggregate data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#authorized_account_id ConfigAggregationAuthorization#authorized_account_id}
  */
  readonly authorizedAccountId: string;
  /**
  * The region authorized to collect aggregated data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#authorized_aws_region ConfigAggregationAuthorization#authorized_aws_region}
  */
  readonly authorizedAwsRegion: string;
  /**
  * The tags for the AggregationAuthorization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#tags ConfigAggregationAuthorization#tags}
  */
  readonly tags?: ConfigAggregationAuthorizationTags[];
}
export interface ConfigAggregationAuthorizationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#key ConfigAggregationAuthorization#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#value ConfigAggregationAuthorization#value}
  */
  readonly value: string;
}

export function configAggregationAuthorizationTagsToTerraform(struct?: ConfigAggregationAuthorizationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html awscc_config_aggregation_authorization}
*/
export class ConfigAggregationAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_aggregation_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html awscc_config_aggregation_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigAggregationAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigAggregationAuthorizationConfig) {
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
    this._authorizedAccountId = config.authorizedAccountId;
    this._authorizedAwsRegion = config.authorizedAwsRegion;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_authorization_arn - computed: true, optional: false, required: false
  public get aggregationAuthorizationArn() {
    return this.getStringAttribute('aggregation_authorization_arn');
  }

  // authorized_account_id - computed: false, optional: false, required: true
  private _authorizedAccountId: string;
  public get authorizedAccountId() {
    return this.getStringAttribute('authorized_account_id');
  }
  public set authorizedAccountId(value: string) {
    this._authorizedAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAccountIdInput() {
    return this._authorizedAccountId
  }

  // authorized_aws_region - computed: false, optional: false, required: true
  private _authorizedAwsRegion: string;
  public get authorizedAwsRegion() {
    return this.getStringAttribute('authorized_aws_region');
  }
  public set authorizedAwsRegion(value: string) {
    this._authorizedAwsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAwsRegionInput() {
    return this._authorizedAwsRegion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ConfigAggregationAuthorizationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ConfigAggregationAuthorizationTags[] ) {
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
      authorized_account_id: cdktf.stringToTerraform(this._authorizedAccountId),
      authorized_aws_region: cdktf.stringToTerraform(this._authorizedAwsRegion),
      tags: cdktf.listMapper(configAggregationAuthorizationTagsToTerraform)(this._tags),
    };
  }
}
