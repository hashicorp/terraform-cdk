// https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoverycontrolClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html#id DataAwsccRoute53RecoverycontrolCluster#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53RecoverycontrolClusterClusterEndpoints extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export function dataAwsccRoute53RecoverycontrolClusterClusterEndpointsToTerraform(struct?: DataAwsccRoute53RecoverycontrolClusterClusterEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster}
*/
export class DataAwsccRoute53RecoverycontrolCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoverycontrolClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoverycontrol_cluster',
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

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // cluster_endpoints - computed: true, optional: false, required: false
  public get clusterEndpoints() {
    return this.interpolationForAttribute('cluster_endpoints') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
