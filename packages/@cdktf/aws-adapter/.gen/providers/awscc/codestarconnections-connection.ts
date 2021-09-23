// https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the connection. Connection names must be unique in an AWS user account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#connection_name CodestarconnectionsConnection#connection_name}
  */
  readonly connectionName: string;
  /**
  * The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#host_arn CodestarconnectionsConnection#host_arn}
  */
  readonly hostArn?: string;
  /**
  * The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#provider_type CodestarconnectionsConnection#provider_type}
  */
  readonly providerType?: string;
  /**
  * Specifies the tags applied to a connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#tags CodestarconnectionsConnection#tags}
  */
  readonly tags?: CodestarconnectionsConnectionTags[];
}
export interface CodestarconnectionsConnectionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#key CodestarconnectionsConnection#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html#value CodestarconnectionsConnection#value}
  */
  readonly value: string;
}

export function codestarconnectionsConnectionTagsToTerraform(struct?: CodestarconnectionsConnectionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html awscc_codestarconnections_connection}
*/
export class CodestarconnectionsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codestarconnections_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html awscc_codestarconnections_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodestarconnectionsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codestarconnections_connection',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionName = config.connectionName;
    this._hostArn = config.hostArn;
    this._providerType = config.providerType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName: string;
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // host_arn - computed: true, optional: true, required: false
  private _hostArn?: string;
  public get hostArn() {
    return this.getStringAttribute('host_arn');
  }
  public set hostArn(value: string) {
    this._hostArn = value;
  }
  public resetHostArn() {
    this._hostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostArnInput() {
    return this._hostArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // provider_type - computed: true, optional: true, required: false
  private _providerType?: string;
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CodestarconnectionsConnectionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CodestarconnectionsConnectionTags[] ) {
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
      connection_name: cdktf.stringToTerraform(this._connectionName),
      host_arn: cdktf.stringToTerraform(this._hostArn),
      provider_type: cdktf.stringToTerraform(this._providerType),
      tags: cdktf.listMapper(codestarconnectionsConnectionTagsToTerraform)(this._tags),
    };
  }
}
