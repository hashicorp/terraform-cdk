import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class Ec2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2EnclaveCertificateIamRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig);
    private _certificateArn;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
    get certificateS3BucketName(): string;
    get certificateS3ObjectKey(): string;
    get encryptionKmsKeyId(): string;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
