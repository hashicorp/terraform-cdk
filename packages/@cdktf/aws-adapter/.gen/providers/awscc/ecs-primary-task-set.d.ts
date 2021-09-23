import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsPrimaryTaskSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html#cluster EcsPrimaryTaskSet#cluster}
    */
    readonly cluster: string;
    /**
    * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html#service EcsPrimaryTaskSet#service}
    */
    readonly service: string;
    /**
    * The ID or full Amazon Resource Name (ARN) of the task set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html#task_set_id EcsPrimaryTaskSet#task_set_id}
    */
    readonly taskSetId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html awscc_ecs_primary_task_set}
*/
export declare class EcsPrimaryTaskSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html awscc_ecs_primary_task_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsPrimaryTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: EcsPrimaryTaskSetConfig);
    private _cluster;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string;
    get id(): string;
    private _service;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
    private _taskSetId;
    get taskSetId(): string;
    set taskSetId(value: string);
    get taskSetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
