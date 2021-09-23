import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsPrimaryTaskSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_primary_task_set.html#id DataAwsccEcsPrimaryTaskSet#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_primary_task_set.html awscc_ecs_primary_task_set}
*/
export declare class DataAwsccEcsPrimaryTaskSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_primary_task_set.html awscc_ecs_primary_task_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsPrimaryTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsPrimaryTaskSetConfig);
    get cluster(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get service(): string;
    get taskSetId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
