import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutvisionProjectsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutvision_projects.html awscc_lookoutvision_projects}
*/
export declare class DataAwsccLookoutvisionProjects extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutvision_projects.html awscc_lookoutvision_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutvisionProjectsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLookoutvisionProjectsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
