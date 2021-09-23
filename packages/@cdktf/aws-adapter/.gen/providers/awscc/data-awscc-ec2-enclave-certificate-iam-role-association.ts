// https://www.terraform.io/docs/providers/awscc/d/ec2_enclave_certificate_iam_role_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_enclave_certificate_iam_role_association.html#id DataAwsccEc2EnclaveCertificateIamRoleAssociation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association}
*/
export class DataAwsccEc2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_enclave_certificate_iam_role_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_enclave_certificate_iam_role_association',
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

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_s3_bucket_name - computed: true, optional: false, required: false
  public get certificateS3BucketName() {
    return this.getStringAttribute('certificate_s3_bucket_name');
  }

  // certificate_s3_object_key - computed: true, optional: false, required: false
  public get certificateS3ObjectKey() {
    return this.getStringAttribute('certificate_s3_object_key');
  }

  // encryption_kms_key_id - computed: true, optional: false, required: false
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
