import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotfleethubApplicationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_applications.html awscc_iotfleethub_applications}
*/
export declare class DataAwsccIotfleethubApplications extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_applications.html awscc_iotfleethub_applications} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotfleethubApplicationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotfleethubApplicationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
