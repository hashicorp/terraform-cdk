// https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class EcsPrimaryTaskSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_primary_task_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_primary_task_set.html awscc_ecs_primary_task_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsPrimaryTaskSetConfig
  */
  public constructor(scope: Construct, id: string, config: EcsPrimaryTaskSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_primary_task_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._service = config.service;
    this._taskSetId = config.taskSetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // task_set_id - computed: false, optional: false, required: true
  private _taskSetId: string;
  public get taskSetId() {
    return this.getStringAttribute('task_set_id');
  }
  public set taskSetId(value: string) {
    this._taskSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSetIdInput() {
    return this._taskSetId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      service: cdktf.stringToTerraform(this._service),
      task_set_id: cdktf.stringToTerraform(this._taskSetId),
    };
  }
}
