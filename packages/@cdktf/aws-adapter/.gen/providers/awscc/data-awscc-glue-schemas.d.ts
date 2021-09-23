import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueSchemasConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schemas.html awscc_glue_schemas}
*/
export declare class DataAwsccGlueSchemas extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schemas.html awscc_glue_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueSchemasConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccGlueSchemasConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
