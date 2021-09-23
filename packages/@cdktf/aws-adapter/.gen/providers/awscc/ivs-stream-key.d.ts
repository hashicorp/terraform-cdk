import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsStreamKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Channel ARN for the stream.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#channel_arn IvsStreamKey#channel_arn}
    */
    readonly channelArn: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#tags IvsStreamKey#tags}
    */
    readonly tags?: IvsStreamKeyTags[];
}
export interface IvsStreamKeyTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#key IvsStreamKey#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#value IvsStreamKey#value}
    */
    readonly value: string;
}
export declare function ivsStreamKeyTagsToTerraform(struct?: IvsStreamKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html awscc_ivs_stream_key}
*/
export declare class IvsStreamKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html awscc_ivs_stream_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsStreamKeyConfig
    */
    constructor(scope: Construct, id: string, config: IvsStreamKeyConfig);
    get arn(): string;
    private _channelArn;
    get channelArn(): string;
    set channelArn(value: string);
    get channelArnInput(): string;
    get id(): string;
    private _tags?;
    get tags(): IvsStreamKeyTags[];
    set tags(value: IvsStreamKeyTags[]);
    resetTags(): void;
    get tagsInput(): IvsStreamKeyTags[] | undefined;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
