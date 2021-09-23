import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamOidcProvidersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_oidc_providers.html awscc_iam_oidc_providers}
*/
export declare class DataAwsccIamOidcProviders extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_oidc_providers.html awscc_iam_oidc_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamOidcProvidersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIamOidcProvidersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
