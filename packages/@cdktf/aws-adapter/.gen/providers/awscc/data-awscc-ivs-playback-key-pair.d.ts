import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsPlaybackKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_playback_key_pair.html#id DataAwsccIvsPlaybackKeyPair#id}
    */
    readonly id: string;
}
export declare class DataAwsccIvsPlaybackKeyPairTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIvsPlaybackKeyPairTagsToTerraform(struct?: DataAwsccIvsPlaybackKeyPairTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_playback_key_pair.html awscc_ivs_playback_key_pair}
*/
export declare class DataAwsccIvsPlaybackKeyPair extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_playback_key_pair.html awscc_ivs_playback_key_pair} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsPlaybackKeyPairConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIvsPlaybackKeyPairConfig);
    get arn(): string;
    get fingerprint(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get publicKeyMaterial(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
