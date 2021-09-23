import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogServiceActionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_actions.html awscc_servicecatalog_service_actions}
*/
export declare class DataAwsccServicecatalogServiceActions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_actions.html awscc_servicecatalog_service_actions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogServiceActionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccServicecatalogServiceActionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
