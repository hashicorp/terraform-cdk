// https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
  */
  readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
  /**
  * Policies to control how to act if a signature is invalid
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#code_signing_policies LambdaCodeSigningConfig#code_signing_policies}
  */
  readonly codeSigningPolicies?: LambdaCodeSigningConfigCodeSigningPolicies;
  /**
  * A description of the CodeSigningConfig
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}
  */
  readonly description?: string;
}
export interface LambdaCodeSigningConfigAllowedPublishers {
  /**
  * List of Signing profile version Arns
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
  */
  readonly signingProfileVersionArns: string[];
}

export function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signingProfileVersionArns),
  }
}

export interface LambdaCodeSigningConfigCodeSigningPolicies {
  /**
  * Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
  */
  readonly untrustedArtifactOnDeployment?: string;
}

export function lambdaCodeSigningConfigCodeSigningPoliciesToTerraform(struct?: LambdaCodeSigningConfigCodeSigningPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html awscc_lambda_code_signing_config}
*/
export class LambdaCodeSigningConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lambda_code_signing_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html awscc_lambda_code_signing_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaCodeSigningConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_code_signing_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedPublishers = config.allowedPublishers;
    this._codeSigningPolicies = config.codeSigningPolicies;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_publishers - computed: false, optional: false, required: true
  private _allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
  public get allowedPublishers() {
    return this.interpolationForAttribute('allowed_publishers') as any;
  }
  public set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers) {
    this._allowedPublishers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPublishersInput() {
    return this._allowedPublishers
  }

  // code_signing_config_arn - computed: true, optional: false, required: false
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }

  // code_signing_config_id - computed: true, optional: false, required: false
  public get codeSigningConfigId() {
    return this.getStringAttribute('code_signing_config_id');
  }

  // code_signing_policies - computed: false, optional: true, required: false
  private _codeSigningPolicies?: LambdaCodeSigningConfigCodeSigningPolicies;
  public get codeSigningPolicies() {
    return this.interpolationForAttribute('code_signing_policies') as any;
  }
  public set codeSigningPolicies(value: LambdaCodeSigningConfigCodeSigningPolicies ) {
    this._codeSigningPolicies = value;
  }
  public resetCodeSigningPolicies() {
    this._codeSigningPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningPoliciesInput() {
    return this._codeSigningPolicies
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_publishers: lambdaCodeSigningConfigAllowedPublishersToTerraform(this._allowedPublishers),
      code_signing_policies: lambdaCodeSigningConfigCodeSigningPoliciesToTerraform(this._codeSigningPolicies),
      description: cdktf.stringToTerraform(this._description),
    };
  }
}
