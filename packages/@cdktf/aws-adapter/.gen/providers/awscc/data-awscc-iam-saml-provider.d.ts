import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamSamlProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iam_saml_provider.html#id DataAwsccIamSamlProvider#id}
    */
    readonly id: string;
}
export declare class DataAwsccIamSamlProviderTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIamSamlProviderTagsToTerraform(struct?: DataAwsccIamSamlProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_saml_provider.html awscc_iam_saml_provider}
*/
export declare class DataAwsccIamSamlProvider extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_saml_provider.html awscc_iam_saml_provider} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamSamlProviderConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIamSamlProviderConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get samlMetadataDocument(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
