import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogappregistryApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_application.html#id DataAwsccServicecatalogappregistryApplication#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_application.html awscc_servicecatalogappregistry_application}
*/
export declare class DataAwsccServicecatalogappregistryApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_application.html awscc_servicecatalogappregistry_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogappregistryApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogappregistryApplicationConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
