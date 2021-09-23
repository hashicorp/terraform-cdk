import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html#id DataAwsccServicecatalogServiceAction#id}
    */
    readonly id: string;
}
export declare class DataAwsccServicecatalogServiceActionDefinition extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccServicecatalogServiceActionDefinitionToTerraform(struct?: DataAwsccServicecatalogServiceActionDefinition): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html awscc_servicecatalog_service_action}
*/
export declare class DataAwsccServicecatalogServiceAction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html awscc_servicecatalog_service_action} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogServiceActionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogServiceActionConfig);
    get acceptLanguage(): string;
    get definition(): any;
    get definitionType(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
