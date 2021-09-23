import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamOidcProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#client_id_list IamOidcProvider#client_id_list}
    */
    readonly clientIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#tags IamOidcProvider#tags}
    */
    readonly tags?: IamOidcProviderTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#thumbprint_list IamOidcProvider#thumbprint_list}
    */
    readonly thumbprintList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#url IamOidcProvider#url}
    */
    readonly url?: string;
}
export interface IamOidcProviderTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#key IamOidcProvider#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#value IamOidcProvider#value}
    */
    readonly value: string;
}
export declare function iamOidcProviderTagsToTerraform(struct?: IamOidcProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html awscc_iam_oidc_provider}
*/
export declare class IamOidcProvider extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html awscc_iam_oidc_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOidcProviderConfig
    */
    constructor(scope: Construct, id: string, config: IamOidcProviderConfig);
    get arn(): string;
    private _clientIdList?;
    get clientIdList(): string[];
    set clientIdList(value: string[]);
    resetClientIdList(): void;
    get clientIdListInput(): string[] | undefined;
    get id(): string;
    private _tags?;
    get tags(): IamOidcProviderTags[];
    set tags(value: IamOidcProviderTags[]);
    resetTags(): void;
    get tagsInput(): IamOidcProviderTags[] | undefined;
    private _thumbprintList;
    get thumbprintList(): string[];
    set thumbprintList(value: string[]);
    get thumbprintListInput(): string[];
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
