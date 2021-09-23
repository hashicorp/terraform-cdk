// https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html#id DataAwsccLambdaCodeSigningConfig#id}
  */
  readonly id: string;
}
export class DataAwsccLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {

  // signing_profile_version_arns - computed: true, optional: false, required: false
  public get signingProfileVersionArns() {
    return this.getListAttribute('signing_profile_version_arns');
  }
}

export function dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: DataAwsccLambdaCodeSigningConfigAllowedPublishers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signingProfileVersionArns),
  }
}

export class DataAwsccLambdaCodeSigningConfigCodeSigningPolicies extends cdktf.ComplexComputedList {

  // untrusted_artifact_on_deployment - computed: true, optional: false, required: false
  public get untrustedArtifactOnDeployment() {
    return this.getStringAttribute('untrusted_artifact_on_deployment');
  }
}

export function dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform(struct?: DataAwsccLambdaCodeSigningConfigCodeSigningPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config}
*/
export class DataAwsccLambdaCodeSigningConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lambda_code_signing_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaCodeSigningConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaCodeSigningConfigConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_publishers - computed: true, optional: false, required: false
  public get allowedPublishers() {
    return this.interpolationForAttribute('allowed_publishers') as any;
  }

  // code_signing_config_arn - computed: true, optional: false, required: false
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }

  // code_signing_config_id - computed: true, optional: false, required: false
  public get codeSigningConfigId() {
    return this.getStringAttribute('code_signing_config_id');
  }

  // code_signing_policies - computed: true, optional: false, required: false
  public get codeSigningPolicies() {
    return this.interpolationForAttribute('code_signing_policies') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
