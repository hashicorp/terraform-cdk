import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamSamlProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#name IamSamlProvider#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#saml_metadata_document IamSamlProvider#saml_metadata_document}
    */
    readonly samlMetadataDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#tags IamSamlProvider#tags}
    */
    readonly tags?: IamSamlProviderTags[];
}
export interface IamSamlProviderTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#key IamSamlProvider#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#value IamSamlProvider#value}
    */
    readonly value: string;
}
export declare function iamSamlProviderTagsToTerraform(struct?: IamSamlProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html awscc_iam_saml_provider}
*/
export declare class IamSamlProvider extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html awscc_iam_saml_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamSamlProviderConfig
    */
    constructor(scope: Construct, id: string, config: IamSamlProviderConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _samlMetadataDocument;
    get samlMetadataDocument(): string;
    set samlMetadataDocument(value: string);
    get samlMetadataDocumentInput(): string;
    private _tags?;
    get tags(): IamSamlProviderTags[];
    set tags(value: IamSamlProviderTags[]);
    resetTags(): void;
    get tagsInput(): IamSamlProviderTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
