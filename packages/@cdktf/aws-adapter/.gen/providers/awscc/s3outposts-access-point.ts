// https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3OutpostsAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#bucket S3OutpostsAccessPoint#bucket}
  */
  readonly bucket: string;
  /**
  * A name for the AccessPoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#name S3OutpostsAccessPoint#name}
  */
  readonly name: string;
  /**
  * The access point policy associated with this access point.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#policy S3OutpostsAccessPoint#policy}
  */
  readonly policy?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#vpc_configuration S3OutpostsAccessPoint#vpc_configuration}
  */
  readonly vpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
}
export interface S3OutpostsAccessPointVpcConfiguration {
  /**
  * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#vpc_id S3OutpostsAccessPoint#vpc_id}
  */
  readonly vpcId?: string;
}

export function s3OutpostsAccessPointVpcConfigurationToTerraform(struct?: S3OutpostsAccessPointVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html awscc_s3outposts_access_point}
*/
export class S3OutpostsAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3outposts_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html awscc_s3outposts_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3OutpostsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3OutpostsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_access_point',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._name = config.name;
    this._policy = config.policy;
    this._vpcConfiguration = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: { [key: string]: string } | cdktf.IResolvable;
  public get policy() {
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // vpc_configuration - computed: false, optional: false, required: true
  private _vpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
  public set vpcConfiguration(value: S3OutpostsAccessPointVpcConfiguration) {
    this._vpcConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.hashMapper(cdktf.anyToTerraform)(this._policy),
      vpc_configuration: s3OutpostsAccessPointVpcConfigurationToTerraform(this._vpcConfiguration),
    };
  }
}
