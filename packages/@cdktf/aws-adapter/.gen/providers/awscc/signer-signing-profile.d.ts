import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#platform_id SignerSigningProfile#platform_id}
    */
    readonly platformId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#signature_validity_period SignerSigningProfile#signature_validity_period}
    */
    readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
    /**
    * A list of tags associated with the signing profile.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#tags SignerSigningProfile#tags}
    */
    readonly tags?: SignerSigningProfileTags[];
}
export interface SignerSigningProfileSignatureValidityPeriod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#type SignerSigningProfile#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#value SignerSigningProfile#value}
    */
    readonly value?: number;
}
export declare function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriod): any;
export interface SignerSigningProfileTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#key SignerSigningProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#value SignerSigningProfile#value}
    */
    readonly value?: string;
}
export declare function signerSigningProfileTagsToTerraform(struct?: SignerSigningProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html awscc_signer_signing_profile}
*/
export declare class SignerSigningProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html awscc_signer_signing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfileConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningProfileConfig);
    get arn(): string;
    get id(): string;
    private _platformId;
    get platformId(): string;
    set platformId(value: string);
    get platformIdInput(): string;
    get profileName(): string;
    get profileVersion(): string;
    get profileVersionArn(): string;
    private _signatureValidityPeriod?;
    get signatureValidityPeriod(): SignerSigningProfileSignatureValidityPeriod;
    set signatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod);
    resetSignatureValidityPeriod(): void;
    get signatureValidityPeriodInput(): SignerSigningProfileSignatureValidityPeriod | undefined;
    private _tags?;
    get tags(): SignerSigningProfileTags[];
    set tags(value: SignerSigningProfileTags[]);
    resetTags(): void;
    get tagsInput(): SignerSigningProfileTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
