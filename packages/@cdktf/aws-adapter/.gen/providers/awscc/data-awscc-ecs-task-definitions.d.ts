import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsTaskDefinitionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definitions.html awscc_ecs_task_definitions}
*/
export declare class DataAwsccEcsTaskDefinitions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definitions.html awscc_ecs_task_definitions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsTaskDefinitionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcsTaskDefinitionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
