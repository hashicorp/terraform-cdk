import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/signer_signing_profile.html#id DataAwsccSignerSigningProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccSignerSigningProfileSignatureValidityPeriod extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): number;
}
export declare function dataAwsccSignerSigningProfileSignatureValidityPeriodToTerraform(struct?: DataAwsccSignerSigningProfileSignatureValidityPeriod): any;
export declare class DataAwsccSignerSigningProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSignerSigningProfileTagsToTerraform(struct?: DataAwsccSignerSigningProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/signer_signing_profile.html awscc_signer_signing_profile}
*/
export declare class DataAwsccSignerSigningProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/signer_signing_profile.html awscc_signer_signing_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSignerSigningProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSignerSigningProfileConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get platformId(): string;
    get profileName(): string;
    get profileVersion(): string;
    get profileVersionArn(): string;
    get signatureValidityPeriod(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
