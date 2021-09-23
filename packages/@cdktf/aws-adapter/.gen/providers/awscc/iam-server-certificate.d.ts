import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#certificate_body IamServerCertificate#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#certificate_chain IamServerCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#path IamServerCertificate#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#private_key IamServerCertificate#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#server_certificate_name IamServerCertificate#server_certificate_name}
    */
    readonly serverCertificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#tags IamServerCertificate#tags}
    */
    readonly tags?: IamServerCertificateTags[];
}
export interface IamServerCertificateTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#key IamServerCertificate#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#value IamServerCertificate#value}
    */
    readonly value: string;
}
export declare function iamServerCertificateTagsToTerraform(struct?: IamServerCertificateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate}
*/
export declare class IamServerCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServerCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IamServerCertificateConfig);
    get arn(): string;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    get id(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    private _serverCertificateName?;
    get serverCertificateName(): string;
    set serverCertificateName(value: string);
    resetServerCertificateName(): void;
    get serverCertificateNameInput(): string | undefined;
    private _tags?;
    get tags(): IamServerCertificateTags[];
    set tags(value: IamServerCertificateTags[]);
    resetTags(): void;
    get tagsInput(): IamServerCertificateTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
