// https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see Registry permissions (https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the Amazon Elastic Container Registry User Guide.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html#policy_text EcrRegistryPolicy#policy_text}
  */
  readonly policyText: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html awscc_ecr_registry_policy}
*/
export class EcrRegistryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecr_registry_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html awscc_ecr_registry_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRegistryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRegistryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_registry_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyText = config.policyText;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_text - computed: false, optional: false, required: true
  private _policyText: { [key: string]: string } | cdktf.IResolvable;
  public get policyText() {
    return this.interpolationForAttribute('policy_text') as any;
  }
  public set policyText(value: { [key: string]: string } | cdktf.IResolvable) {
    this._policyText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTextInput() {
    return this._policyText
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_text: cdktf.hashMapper(cdktf.anyToTerraform)(this._policyText),
    };
  }
}
