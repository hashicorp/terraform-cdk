import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaWorkGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_groups.html awscc_athena_work_groups}
*/
export declare class DataAwsccAthenaWorkGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_groups.html awscc_athena_work_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaWorkGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccAthenaWorkGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
