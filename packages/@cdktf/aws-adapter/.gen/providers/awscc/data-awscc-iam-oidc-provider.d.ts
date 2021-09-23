import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamOidcProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iam_oidc_provider.html#id DataAwsccIamOidcProvider#id}
    */
    readonly id: string;
}
export declare class DataAwsccIamOidcProviderTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIamOidcProviderTagsToTerraform(struct?: DataAwsccIamOidcProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_oidc_provider.html awscc_iam_oidc_provider}
*/
export declare class DataAwsccIamOidcProvider extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_oidc_provider.html awscc_iam_oidc_provider} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamOidcProviderConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIamOidcProviderConfig);
    get arn(): string;
    get clientIdList(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    get thumbprintList(): string[];
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
