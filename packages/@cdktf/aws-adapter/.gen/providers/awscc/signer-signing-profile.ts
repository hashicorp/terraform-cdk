// https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#platform_id SignerSigningProfile#platform_id}
  */
  readonly platformId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#signature_validity_period SignerSigningProfile#signature_validity_period}
  */
  readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
  /**
  * A list of tags associated with the signing profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#tags SignerSigningProfile#tags}
  */
  readonly tags?: SignerSigningProfileTags[];
}
export interface SignerSigningProfileSignatureValidityPeriod {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#type SignerSigningProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#value SignerSigningProfile#value}
  */
  readonly value?: number;
}

export function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SignerSigningProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#key SignerSigningProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html#value SignerSigningProfile#value}
  */
  readonly value?: string;
}

export function signerSigningProfileTagsToTerraform(struct?: SignerSigningProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html awscc_signer_signing_profile}
*/
export class SignerSigningProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_signer_signing_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/signer_signing_profile.html awscc_signer_signing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignerSigningProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SignerSigningProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_signer_signing_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._platformId = config.platformId;
    this._signatureValidityPeriod = config.signatureValidityPeriod;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // platform_id - computed: false, optional: false, required: true
  private _platformId: string;
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // profile_version - computed: true, optional: false, required: false
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // profile_version_arn - computed: true, optional: false, required: false
  public get profileVersionArn() {
    return this.getStringAttribute('profile_version_arn');
  }

  // signature_validity_period - computed: true, optional: true, required: false
  private _signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
  public get signatureValidityPeriod() {
    return this.interpolationForAttribute('signature_validity_period') as any;
  }
  public set signatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod) {
    this._signatureValidityPeriod = value;
  }
  public resetSignatureValidityPeriod() {
    this._signatureValidityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidityPeriodInput() {
    return this._signatureValidityPeriod
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SignerSigningProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SignerSigningProfileTags[] ) {
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
      platform_id: cdktf.stringToTerraform(this._platformId),
      signature_validity_period: signerSigningProfileSignatureValidityPeriodToTerraform(this._signatureValidityPeriod),
      tags: cdktf.listMapper(signerSigningProfileTagsToTerraform)(this._tags),
    };
  }
}
