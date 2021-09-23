import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApprunnerServicesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_services.html awscc_apprunner_services}
*/
export declare class DataAwsccApprunnerServices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_services.html awscc_apprunner_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApprunnerServicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccApprunnerServicesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
