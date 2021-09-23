import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function codestarconnectionsConnectionTagsToTerraform(struct?: CodestarconnectionsConnectionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html awscc_codestarconnections_connection}
*/
export declare class CodestarconnectionsConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codestarconnections_connection.html awscc_codestarconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsConnectionConfig
    */
    constructor(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig);
    get connectionArn(): string;
    private _connectionName;
    get connectionName(): string;
    set connectionName(value: string);
    get connectionNameInput(): string;
    get connectionStatus(): string;
    private _hostArn?;
    get hostArn(): string;
    set hostArn(value: string);
    resetHostArn(): void;
    get hostArnInput(): string | undefined;
    get id(): string;
    get ownerAccountId(): string;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    resetProviderType(): void;
    get providerTypeInput(): string | undefined;
    private _tags?;
    get tags(): CodestarconnectionsConnectionTags[];
    set tags(value: CodestarconnectionsConnectionTags[]);
    resetTags(): void;
    get tagsInput(): CodestarconnectionsConnectionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
