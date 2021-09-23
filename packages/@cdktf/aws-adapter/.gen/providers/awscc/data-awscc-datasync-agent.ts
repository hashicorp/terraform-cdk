// https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html#id DataAwsccDatasyncAgent#id}
  */
  readonly id: string;
}
export class DataAwsccDatasyncAgentTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncAgentTagsToTerraform(struct?: DataAwsccDatasyncAgentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html awscc_datasync_agent}
*/
export class DataAwsccDatasyncAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_agent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html awscc_datasync_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_agent',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: true, optional: false, required: false
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }

  // agent_arn - computed: true, optional: false, required: false
  public get agentArn() {
    return this.getStringAttribute('agent_arn');
  }

  // agent_name - computed: true, optional: false, required: false
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // security_group_arns - computed: true, optional: false, required: false
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }

  // subnet_arns - computed: true, optional: false, required: false
  public get subnetArns() {
    return this.getListAttribute('subnet_arns');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
