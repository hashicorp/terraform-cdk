import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaDataCatalogConfig extends cdktf.TerraformMetaArguments {
    /**
    * A description of the data catalog to be created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#description AthenaDataCatalog#description}
    */
    readonly description?: string;
    /**
    * The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#name AthenaDataCatalog#name}
    */
    readonly name: string;
    /**
    * Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#parameters AthenaDataCatalog#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#tags AthenaDataCatalog#tags}
    */
    readonly tags?: AthenaDataCatalogTags[];
    /**
    * The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#type AthenaDataCatalog#type}
    */
    readonly type: string;
}
export interface AthenaDataCatalogTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#key AthenaDataCatalog#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html#value AthenaDataCatalog#value}
    */
    readonly value: string;
}
export declare function athenaDataCatalogTagsToTerraform(struct?: AthenaDataCatalogTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html awscc_athena_data_catalog}
*/
export declare class AthenaDataCatalog extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_data_catalog.html awscc_athena_data_catalog} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaDataCatalogConfig
    */
    constructor(scope: Construct, id: string, config: AthenaDataCatalogConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _tags?;
    get tags(): AthenaDataCatalogTags[];
    set tags(value: AthenaDataCatalogTags[]);
    resetTags(): void;
    get tagsInput(): AthenaDataCatalogTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
