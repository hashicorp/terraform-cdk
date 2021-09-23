// https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function datasyncLocationObjectStorageTagsToTerraform(struct?: DatasyncLocationObjectStorageTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html awscc_datasync_location_object_storage}
*/
export class DatasyncLocationObjectStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_object_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_object_storage.html awscc_datasync_location_object_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationObjectStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationObjectStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_object_storage',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessKey = config.accessKey;
    this._agentArns = config.agentArns;
    this._bucketName = config.bucketName;
    this._secretKey = config.secretKey;
    this._serverHostname = config.serverHostname;
    this._serverPort = config.serverPort;
    this._serverProtocol = config.serverProtocol;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string;
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string ) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns: string[];
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string;
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string ) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey
  }

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname: string;
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number;
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number ) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort
  }

  // server_protocol - computed: false, optional: true, required: false
  private _serverProtocol?: string;
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }
  public set serverProtocol(value: string ) {
    this._serverProtocol = value;
  }
  public resetServerProtocol() {
    this._serverProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtocolInput() {
    return this._serverProtocol
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string ) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: DatasyncLocationObjectStorageTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationObjectStorageTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      server_port: cdktf.numberToTerraform(this._serverPort),
      server_protocol: cdktf.stringToTerraform(this._serverProtocol),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationObjectStorageTagsToTerraform)(this._tags),
    };
  }
}
