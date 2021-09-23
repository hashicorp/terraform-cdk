import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * The change description of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#change_description ImagebuilderComponent#change_description}
    */
    readonly changeDescription?: string;
    /**
    * The data of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#data ImagebuilderComponent#data}
    */
    readonly data?: string;
    /**
    * The description of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#description ImagebuilderComponent#description}
    */
    readonly description?: string;
    /**
    * The KMS key identifier used to encrypt the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#kms_key_id ImagebuilderComponent#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#name ImagebuilderComponent#name}
    */
    readonly name: string;
    /**
    * The platform of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#platform ImagebuilderComponent#platform}
    */
    readonly platform: string;
    /**
    * The operating system (OS) version supported by the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#supported_os_versions ImagebuilderComponent#supported_os_versions}
    */
    readonly supportedOsVersions?: string[];
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#tags ImagebuilderComponent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The uri of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#uri ImagebuilderComponent#uri}
    */
    readonly uri?: string;
    /**
    * The version of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#version ImagebuilderComponent#version}
    */
    readonly version: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html awscc_imagebuilder_component}
*/
export declare class ImagebuilderComponent extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html awscc_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderComponentConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig);
    get arn(): string;
    private _changeDescription?;
    get changeDescription(): string;
    set changeDescription(value: string);
    resetChangeDescription(): void;
    get changeDescriptionInput(): string | undefined;
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _platform;
    get platform(): string;
    set platform(value: string);
    get platformInput(): string;
    private _supportedOsVersions?;
    get supportedOsVersions(): string[];
    set supportedOsVersions(value: string[]);
    resetSupportedOsVersions(): void;
    get supportedOsVersionsInput(): string[] | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    get type(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
    private _version;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
