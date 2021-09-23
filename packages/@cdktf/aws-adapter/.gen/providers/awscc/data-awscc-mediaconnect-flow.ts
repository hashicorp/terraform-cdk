// https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediaconnectFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html#id DataAwsccMediaconnectFlow#id}
  */
  readonly id: string;
}
export class DataAwsccMediaconnectFlowSourceDecryption extends cdktf.ComplexComputedList {

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediaconnectFlowSourceDecryptionToTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    region: cdktf.stringToTerraform(struct!.region),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediaconnectFlowSource extends cdktf.ComplexComputedList {

  // decryption - computed: true, optional: false, required: false
  public get decryption() {
    return this.interpolationForAttribute('decryption') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entitlement_arn - computed: true, optional: false, required: false
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }

  // ingest_ip - computed: true, optional: false, required: false
  public get ingestIp() {
    return this.getStringAttribute('ingest_ip');
  }

  // ingest_port - computed: true, optional: false, required: false
  public get ingestPort() {
    return this.getNumberAttribute('ingest_port');
  }

  // max_bitrate - computed: true, optional: false, required: false
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }

  // max_latency - computed: true, optional: false, required: false
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }

  // whitelist_cidr - computed: true, optional: false, required: false
  public get whitelistCidr() {
    return this.getStringAttribute('whitelist_cidr');
  }
}

export function dataAwsccMediaconnectFlowSourceToTerraform(struct?: DataAwsccMediaconnectFlowSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    decryption: dataAwsccMediaconnectFlowSourceDecryptionToTerraform(struct!.decryption),
    description: cdktf.stringToTerraform(struct!.description),
    entitlement_arn: cdktf.stringToTerraform(struct!.entitlementArn),
    ingest_ip: cdktf.stringToTerraform(struct!.ingestIp),
    ingest_port: cdktf.numberToTerraform(struct!.ingestPort),
    max_bitrate: cdktf.numberToTerraform(struct!.maxBitrate),
    max_latency: cdktf.numberToTerraform(struct!.maxLatency),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    vpc_interface_name: cdktf.stringToTerraform(struct!.vpcInterfaceName),
    whitelist_cidr: cdktf.stringToTerraform(struct!.whitelistCidr),
  }
}

export class DataAwsccMediaconnectFlowSourceFailoverConfig extends cdktf.ComplexComputedList {

  // recovery_window - computed: true, optional: false, required: false
  public get recoveryWindow() {
    return this.getNumberAttribute('recovery_window');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export function dataAwsccMediaconnectFlowSourceFailoverConfigToTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recovery_window: cdktf.numberToTerraform(struct!.recoveryWindow),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html awscc_mediaconnect_flow}
*/
export class DataAwsccMediaconnectFlow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html awscc_mediaconnect_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow',
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_availability_zone - computed: true, optional: false, required: false
  public get flowAvailabilityZone() {
    return this.getStringAttribute('flow_availability_zone');
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

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }

  // source_failover_config - computed: true, optional: false, required: false
  public get sourceFailoverConfig() {
    return this.interpolationForAttribute('source_failover_config') as any;
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
