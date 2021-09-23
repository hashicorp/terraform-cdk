// https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html#id DataAwsccEc2NetworkInsightsPath#id}
  */
  readonly id: string;
}
export class DataAwsccEc2NetworkInsightsPathTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2NetworkInsightsPathTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsPathTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html awscc_ec2_network_insights_path}
*/
export class DataAwsccEc2NetworkInsightsPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_network_insights_path";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html awscc_ec2_network_insights_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkInsightsPathConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsPathConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_insights_path',
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

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
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

  // network_insights_path_arn - computed: true, optional: false, required: false
  public get networkInsightsPathArn() {
    return this.getStringAttribute('network_insights_path_arn');
  }

  // network_insights_path_id - computed: true, optional: false, required: false
  public get networkInsightsPathId() {
    return this.getStringAttribute('network_insights_path_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
