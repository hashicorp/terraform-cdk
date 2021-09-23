import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueSchemaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html#id DataAwsccGlueSchemaVersion#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlueSchemaVersionSchema extends cdktf.ComplexComputedList {
    get registryName(): string;
    get schemaArn(): string;
    get schemaName(): string;
}
export declare function dataAwsccGlueSchemaVersionSchemaToTerraform(struct?: DataAwsccGlueSchemaVersionSchema): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html awscc_glue_schema_version}
*/
export declare class DataAwsccGlueSchemaVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html awscc_glue_schema_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueSchemaVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlueSchemaVersionConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get schema(): any;
    get schemaDefinition(): string;
    get versionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
