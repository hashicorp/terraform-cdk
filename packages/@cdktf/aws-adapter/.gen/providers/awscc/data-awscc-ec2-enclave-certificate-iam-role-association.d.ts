import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DataAwsccEc2EnclaveCertificateIamRoleAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_enclave_certificate_iam_role_association.html awscc_ec2_enclave_certificate_iam_role_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig);
    get certificateArn(): string;
    get certificateS3BucketName(): string;
    get certificateS3ObjectKey(): string;
    get encryptionKmsKeyId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get roleArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
