// https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediapackagePackagingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#authorization MediapackagePackagingGroup#authorization}
  */
  readonly authorization?: MediapackagePackagingGroupAuthorization;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#egress_access_logs MediapackagePackagingGroup#egress_access_logs}
  */
  readonly egressAccessLogs?: MediapackagePackagingGroupEgressAccessLogs;
  /**
  * The ID of the PackagingGroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#id MediapackagePackagingGroup#id}
  */
  readonly id: string;
  /**
  * A collection of tags associated with a resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#tags MediapackagePackagingGroup#tags}
  */
  readonly tags?: MediapackagePackagingGroupTags[];
}
export interface MediapackagePackagingGroupAuthorization {
  /**
  * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}
  */
  readonly cdnIdentifierSecret: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}
  */
  readonly secretsRoleArn: string;
}

export function mediapackagePackagingGroupAuthorizationToTerraform(struct?: MediapackagePackagingGroupAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cdn_identifier_secret: cdktf.stringToTerraform(struct!.cdnIdentifierSecret),
    secrets_role_arn: cdktf.stringToTerraform(struct!.secretsRoleArn),
  }
}

export interface MediapackagePackagingGroupEgressAccessLogs {
  /**
  * Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#log_group_name MediapackagePackagingGroup#log_group_name}
  */
  readonly logGroupName?: string;
}

export function mediapackagePackagingGroupEgressAccessLogsToTerraform(struct?: MediapackagePackagingGroupEgressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export interface MediapackagePackagingGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#key MediapackagePackagingGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#value MediapackagePackagingGroup#value}
  */
  readonly value: string;
}

export function mediapackagePackagingGroupTagsToTerraform(struct?: MediapackagePackagingGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html awscc_mediapackage_packaging_group}
*/
export class MediapackagePackagingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_packaging_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html awscc_mediapackage_packaging_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediapackagePackagingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MediapackagePackagingGroupConfig) {
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
    this._authorization = config.authorization;
    this._egressAccessLogs = config.egressAccessLogs;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: MediapackagePackagingGroupAuthorization;
  public get authorization() {
    return this.interpolationForAttribute('authorization') as any;
  }
  public set authorization(value: MediapackagePackagingGroupAuthorization ) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // egress_access_logs - computed: false, optional: true, required: false
  private _egressAccessLogs?: MediapackagePackagingGroupEgressAccessLogs;
  public get egressAccessLogs() {
    return this.interpolationForAttribute('egress_access_logs') as any;
  }
  public set egressAccessLogs(value: MediapackagePackagingGroupEgressAccessLogs ) {
    this._egressAccessLogs = value;
  }
  public resetEgressAccessLogs() {
    this._egressAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAccessLogsInput() {
    return this._egressAccessLogs
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

  // tags - computed: true, optional: true, required: false
  private _tags?: MediapackagePackagingGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: MediapackagePackagingGroupTags[]) {
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
      authorization: mediapackagePackagingGroupAuthorizationToTerraform(this._authorization),
      egress_access_logs: mediapackagePackagingGroupEgressAccessLogsToTerraform(this._egressAccessLogs),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.listMapper(mediapackagePackagingGroupTagsToTerraform)(this._tags),
    };
  }
}
