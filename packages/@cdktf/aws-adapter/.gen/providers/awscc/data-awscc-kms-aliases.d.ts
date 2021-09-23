import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKmsAliasesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kms_aliases.html awscc_kms_aliases}
*/
export declare class DataAwsccKmsAliases extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kms_aliases.html awscc_kms_aliases} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKmsAliasesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccKmsAliasesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
