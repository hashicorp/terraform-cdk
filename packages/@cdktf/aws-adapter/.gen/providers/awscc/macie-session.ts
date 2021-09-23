// https://www.terraform.io/docs/providers/awscc/r/macie_session.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A enumeration value that specifies how frequently finding updates are published.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html#finding_publishing_frequency MacieSession#finding_publishing_frequency}
  */
  readonly findingPublishingFrequency?: string;
  /**
  * A enumeration value that specifies the status of the Macie Session.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html#status MacieSession#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html awscc_macie_session}
*/
export class MacieSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_macie_session";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html awscc_macie_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieSessionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MacieSessionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_macie_session',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string;
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string) {
    this._findingPublishingFrequency = value;
  }
  public resetFindingPublishingFrequency() {
    this._findingPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingPublishingFrequencyInput() {
    return this._findingPublishingFrequency
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
