import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncTasksConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_tasks.html awscc_datasync_tasks}
*/
export declare class DataAwsccDatasyncTasks extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_tasks.html awscc_datasync_tasks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncTasksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDatasyncTasksConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
