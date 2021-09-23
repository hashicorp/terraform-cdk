// https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediapackagePackagingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html#id DataAwsccMediapackagePackagingGroup#id}
  */
  readonly id: string;
}
export class DataAwsccMediapackagePackagingGroupAuthorization extends cdktf.ComplexComputedList {

  // cdn_identifier_secret - computed: true, optional: false, required: false
  public get cdnIdentifierSecret() {
    return this.getStringAttribute('cdn_identifier_secret');
  }

  // secrets_role_arn - computed: true, optional: false, required: false
  public get secretsRoleArn() {
    return this.getStringAttribute('secrets_role_arn');
  }
}

export function dataAwsccMediapackagePackagingGroupAuthorizationToTerraform(struct?: DataAwsccMediapackagePackagingGroupAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cdn_identifier_secret: cdktf.stringToTerraform(struct!.cdnIdentifierSecret),
    secrets_role_arn: cdktf.stringToTerraform(struct!.secretsRoleArn),
  }
}

export class DataAwsccMediapackagePackagingGroupEgressAccessLogs extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}

export function dataAwsccMediapackagePackagingGroupEgressAccessLogsToTerraform(struct?: DataAwsccMediapackagePackagingGroupEgressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export class DataAwsccMediapackagePackagingGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccMediapackagePackagingGroupTagsToTerraform(struct?: DataAwsccMediapackagePackagingGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html awscc_mediapackage_packaging_group}
*/
export class DataAwsccMediapackagePackagingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_packaging_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html awscc_mediapackage_packaging_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagePackagingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_packaging_group',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.interpolationForAttribute('authorization') as any;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // egress_access_logs - computed: true, optional: false, required: false
  public get egressAccessLogs() {
    return this.interpolationForAttribute('egress_access_logs') as any;
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
