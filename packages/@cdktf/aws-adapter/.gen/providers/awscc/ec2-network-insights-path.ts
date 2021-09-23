// https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination Ec2NetworkInsightsPath#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination_ip Ec2NetworkInsightsPath#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination_port Ec2NetworkInsightsPath#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#protocol Ec2NetworkInsightsPath#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#source Ec2NetworkInsightsPath#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#source_ip Ec2NetworkInsightsPath#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#tags Ec2NetworkInsightsPath#tags}
  */
  readonly tags?: Ec2NetworkInsightsPathTags[];
}
export interface Ec2NetworkInsightsPathTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#key Ec2NetworkInsightsPath#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#value Ec2NetworkInsightsPath#value}
  */
  readonly value?: string;
}

export function ec2NetworkInsightsPathTagsToTerraform(struct?: Ec2NetworkInsightsPathTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html awscc_ec2_network_insights_path}
*/
export class Ec2NetworkInsightsPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_network_insights_path";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html awscc_ec2_network_insights_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NetworkInsightsPathConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2NetworkInsightsPathConfig) {
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
    this._destination = config.destination;
    this._destinationIp = config.destinationIp;
    this._destinationPort = config.destinationPort;
    this._protocol = config.protocol;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // destination_ip - computed: true, optional: true, required: false
  private _destinationIp?: string;
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number;
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_insights_path_arn - computed: true, optional: false, required: false
  public get networkInsightsPathArn() {
    return this.getStringAttribute('network_insights_path_arn');
  }

  // network_insights_path_id - computed: true, optional: false, required: false
  public get networkInsightsPathId() {
    return this.getStringAttribute('network_insights_path_id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string;
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2NetworkInsightsPathTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2NetworkInsightsPathTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      protocol: cdktf.stringToTerraform(this._protocol),
      source: cdktf.stringToTerraform(this._source),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      tags: cdktf.listMapper(ec2NetworkInsightsPathTagsToTerraform)(this._tags),
    };
  }
}
