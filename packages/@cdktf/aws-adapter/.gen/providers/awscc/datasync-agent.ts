// https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activation key of the Agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#activation_key DatasyncAgent#activation_key}
  */
  readonly activationKey: string;
  /**
  * The name configured for the agent. Text reference used to identify the agent in the console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#agent_name DatasyncAgent#agent_name}
  */
  readonly agentName?: string;
  /**
  * The ARNs of the security group used to protect your data transfer task subnets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#security_group_arns DatasyncAgent#security_group_arns}
  */
  readonly securityGroupArns?: string[];
  /**
  * The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#subnet_arns DatasyncAgent#subnet_arns}
  */
  readonly subnetArns?: string[];
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#tags DatasyncAgent#tags}
  */
  readonly tags?: DatasyncAgentTags[];
  /**
  * The ID of the VPC endpoint that the agent has access to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
}
export interface DatasyncAgentTags {
  /**
  * The key for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#key DatasyncAgent#key}
  */
  readonly key: string;
  /**
  * The value for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#value DatasyncAgent#value}
  */
  readonly value: string;
}

export function datasyncAgentTagsToTerraform(struct?: DatasyncAgentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html awscc_datasync_agent}
*/
export class DatasyncAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_agent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html awscc_datasync_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncAgentConfig) {
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
    this._activationKey = config.activationKey;
    this._agentName = config.agentName;
    this._securityGroupArns = config.securityGroupArns;
    this._subnetArns = config.subnetArns;
    this._tags = config.tags;
    this._vpcEndpointId = config.vpcEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: false, optional: false, required: true
  private _activationKey: string;
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string) {
    this._activationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationKeyInput() {
    return this._activationKey
  }

  // agent_arn - computed: true, optional: false, required: false
  public get agentArn() {
    return this.getStringAttribute('agent_arn');
  }

  // agent_name - computed: false, optional: true, required: false
  private _agentName?: string;
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string ) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_arns - computed: true, optional: true, required: false
  private _securityGroupArns?: string[];
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  public resetSecurityGroupArns() {
    this._securityGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns
  }

  // subnet_arns - computed: true, optional: true, required: false
  private _subnetArns?: string[];
  public get subnetArns() {
    return this.getListAttribute('subnet_arns');
  }
  public set subnetArns(value: string[]) {
    this._subnetArns = value;
  }
  public resetSubnetArns() {
    this._subnetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnsInput() {
    return this._subnetArns
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: DatasyncAgentTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncAgentTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_endpoint_id - computed: true, optional: true, required: false
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_key: cdktf.stringToTerraform(this._activationKey),
      agent_name: cdktf.stringToTerraform(this._agentName),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
      subnet_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetArns),
      tags: cdktf.listMapper(datasyncAgentTagsToTerraform)(this._tags),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
    };
  }
}
