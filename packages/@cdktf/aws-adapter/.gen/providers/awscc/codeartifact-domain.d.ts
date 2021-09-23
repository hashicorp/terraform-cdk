import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#domain_name CodeartifactDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * The access control resource policy on the provided domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#permissions_policy_document CodeartifactDomain#permissions_policy_document}
    */
    readonly permissionsPolicyDocument?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#tags CodeartifactDomain#tags}
    */
    readonly tags?: CodeartifactDomainTags[];
}
export interface CodeartifactDomainTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#key CodeartifactDomain#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#value CodeartifactDomain#value}
    */
    readonly value: string;
}
export declare function codeartifactDomainTagsToTerraform(struct?: CodeartifactDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html awscc_codeartifact_domain}
*/
export declare class CodeartifactDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html awscc_codeartifact_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactDomainConfig);
    get arn(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get encryptionKey(): string;
    get id(): string;
    get name(): string;
    get owner(): string;
    private _permissionsPolicyDocument?;
    get permissionsPolicyDocument(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set permissionsPolicyDocument(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetPermissionsPolicyDocument(): void;
    get permissionsPolicyDocumentInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _tags?;
    get tags(): CodeartifactDomainTags[];
    set tags(value: CodeartifactDomainTags[]);
    resetTags(): void;
    get tagsInput(): CodeartifactDomainTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
