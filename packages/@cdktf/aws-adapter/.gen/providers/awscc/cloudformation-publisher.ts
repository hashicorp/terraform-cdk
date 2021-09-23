// https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html#accept_terms_and_conditions CloudformationPublisher#accept_terms_and_conditions}
  */
  readonly acceptTermsAndConditions: boolean | cdktf.IResolvable;
  /**
  * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html#connection_arn CloudformationPublisher#connection_arn}
  */
  readonly connectionArn?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html awscc_cloudformation_publisher}
*/
export class CloudformationPublisher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_publisher";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html awscc_cloudformation_publisher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationPublisherConfig) {
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
    this._acceptTermsAndConditions = config.acceptTermsAndConditions;
    this._connectionArn = config.connectionArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_terms_and_conditions - computed: false, optional: false, required: true
  private _acceptTermsAndConditions: boolean | cdktf.IResolvable;
  public get acceptTermsAndConditions() {
    return this.getBooleanAttribute('accept_terms_and_conditions');
  }
  public set acceptTermsAndConditions(value: boolean | cdktf.IResolvable) {
    this._acceptTermsAndConditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTermsAndConditionsInput() {
    return this._acceptTermsAndConditions
  }

  // connection_arn - computed: true, optional: true, required: false
  private _connectionArn?: string;
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  public resetConnectionArn() {
    this._connectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      accept_terms_and_conditions: cdktf.booleanToTerraform(this._acceptTermsAndConditions),
      connection_arn: cdktf.stringToTerraform(this._connectionArn),
    };
  }
}
