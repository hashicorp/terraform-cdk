// https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudformationPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html#id DataAwsccCloudformationPublisher#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html awscc_cloudformation_publisher}
*/
export class DataAwsccCloudformationPublisher extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_publisher";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_publisher.html awscc_cloudformation_publisher} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_publisher',
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

  // accept_terms_and_conditions - computed: true, optional: false, required: false
  public get acceptTermsAndConditions() {
    return this.getBooleanAttribute('accept_terms_and_conditions');
  }

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
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

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // publisher_profile - computed: true, optional: false, required: false
  public get publisherProfile() {
    return this.getStringAttribute('publisher_profile');
  }

  // publisher_status - computed: true, optional: false, required: false
  public get publisherStatus() {
    return this.getStringAttribute('publisher_status');
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
