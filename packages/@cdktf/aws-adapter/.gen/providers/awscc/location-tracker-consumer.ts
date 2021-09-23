// https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationTrackerConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html#consumer_arn LocationTrackerConsumer#consumer_arn}
  */
  readonly consumerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html#tracker_name LocationTrackerConsumer#tracker_name}
  */
  readonly trackerName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer}
*/
export class LocationTrackerConsumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_tracker_consumer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationTrackerConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: LocationTrackerConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_tracker_consumer',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consumerArn = config.consumerArn;
    this._trackerName = config.trackerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_arn - computed: false, optional: false, required: true
  private _consumerArn: string;
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }
  public set consumerArn(value: string) {
    this._consumerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerArnInput() {
    return this._consumerArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tracker_name - computed: false, optional: false, required: true
  private _trackerName: string;
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_arn: cdktf.stringToTerraform(this._consumerArn),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
    };
  }
}
