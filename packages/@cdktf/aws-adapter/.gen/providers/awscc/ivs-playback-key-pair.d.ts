import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsPlaybackKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#name IvsPlaybackKeyPair#name}
    */
    readonly name?: string;
    /**
    * The public portion of a customer-generated key pair.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#public_key_material IvsPlaybackKeyPair#public_key_material}
    */
    readonly publicKeyMaterial: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#tags IvsPlaybackKeyPair#tags}
    */
    readonly tags?: IvsPlaybackKeyPairTags[];
}
export interface IvsPlaybackKeyPairTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#key IvsPlaybackKeyPair#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#value IvsPlaybackKeyPair#value}
    */
    readonly value: string;
}
export declare function ivsPlaybackKeyPairTagsToTerraform(struct?: IvsPlaybackKeyPairTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html awscc_ivs_playback_key_pair}
*/
export declare class IvsPlaybackKeyPair extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html awscc_ivs_playback_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsPlaybackKeyPairConfig
    */
    constructor(scope: Construct, id: string, config: IvsPlaybackKeyPairConfig);
    get arn(): string;
    get fingerprint(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _publicKeyMaterial;
    get publicKeyMaterial(): string;
    set publicKeyMaterial(value: string);
    get publicKeyMaterialInput(): string;
    private _tags?;
    get tags(): IvsPlaybackKeyPairTags[];
    set tags(value: IvsPlaybackKeyPairTags[]);
    resetTags(): void;
    get tagsInput(): IvsPlaybackKeyPairTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
