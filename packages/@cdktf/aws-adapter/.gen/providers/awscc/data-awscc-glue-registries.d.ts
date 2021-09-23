import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueRegistriesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_registries.html awscc_glue_registries}
*/
export declare class DataAwsccGlueRegistries extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_registries.html awscc_glue_registries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueRegistriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccGlueRegistriesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
