import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationObjectStorageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Optional. The access key is used if credentials are required to access the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#access_key DatasyncLocationObjectStorage#access_key}
    */
    readonly accessKey?: string;
    /**
    * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#agent_arns DatasyncLocationObjectStorage#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * The name of the bucket on the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#bucket_name DatasyncLocationObjectStorage#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#secret_key DatasyncLocationObjectStorage#secret_key}
    */
    readonly secretKey?: string;
    /**
    * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#server_hostname DatasyncLocationObjectStorage#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * The port that your self-managed server accepts inbound network traffic on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#server_port DatasyncLocationObjectStorage#server_port}
    */
    readonly serverPort?: number;
    /**
    * The protocol that the object storage server uses to communicate.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#server_protocol DatasyncLocationObjectStorage#server_protocol}
    */
    readonly serverProtocol?: string;
    /**
    * The subdirectory in the self-managed object storage server that is used to read data from.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#subdirectory DatasyncLocationObjectStorage#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#tags DatasyncLocationObjectStorage#tags}
    */
    readonly tags?: DatasyncLocationObjectStorageTags[];
}
export interface DatasyncLocationObjectStorageTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#key DatasyncLocationObjectStorage#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html#value DatasyncLocationObjectStorage#value}
    */
    readonly value: string;
}
export declare function datasyncLocationObjectStorageTagsToTerraform(struct?: DatasyncLocationObjectStorageTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html awscc_datasync_location_object_storage}
*/
export declare class DatasyncLocationObjectStorage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html awscc_datasync_location_object_storage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationObjectStorageConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationObjectStorageConfig);
    private _accessKey?;
    get accessKey(): string;
    set accessKey(value: string);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _agentArns;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[];
    private _bucketName;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _secretKey?;
    get secretKey(): string;
    set secretKey(value: string);
    resetSecretKey(): void;
    get secretKeyInput(): string | undefined;
    private _serverHostname;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string;
    private _serverPort?;
    get serverPort(): number;
    set serverPort(value: number);
    resetServerPort(): void;
    get serverPortInput(): number | undefined;
    private _serverProtocol?;
    get serverProtocol(): string;
    set serverProtocol(value: string);
    resetServerProtocol(): void;
    get serverProtocolInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
    private _tags?;
    get tags(): DatasyncLocationObjectStorageTags[];
    set tags(value: DatasyncLocationObjectStorageTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationObjectStorageTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
