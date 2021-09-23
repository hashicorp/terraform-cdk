// https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2EnclaveCertificateIamRoleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html#certificate_arn Ec2EnclaveCertificateIamRoleAssociation#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html#role_arn Ec2EnclaveCertificateIamRoleAssociation#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association}
*/
export class Ec2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_enclave_certificate_iam_role_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2EnclaveCertificateIamRoleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig) {
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
    this._certificateArn = config.certificateArn;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
