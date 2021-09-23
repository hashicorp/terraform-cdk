import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iam_server_certificate.html#id DataAwsccIamServerCertificate#id}
    */
    readonly id: string;
}
export declare class DataAwsccIamServerCertificateTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIamServerCertificateTagsToTerraform(struct?: DataAwsccIamServerCertificateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_server_certificate.html awscc_iam_server_certificate}
*/
export declare class DataAwsccIamServerCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_server_certificate.html awscc_iam_server_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamServerCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIamServerCertificateConfig);
    get arn(): string;
    get certificateBody(): string;
    get certificateChain(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get path(): string;
    get privateKey(): string;
    get serverCertificateName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
