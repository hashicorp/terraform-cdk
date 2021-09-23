import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSignerSigningProfilesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/signer_signing_profiles.html awscc_signer_signing_profiles}
*/
export declare class DataAwsccSignerSigningProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/signer_signing_profiles.html awscc_signer_signing_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSignerSigningProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccSignerSigningProfilesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
