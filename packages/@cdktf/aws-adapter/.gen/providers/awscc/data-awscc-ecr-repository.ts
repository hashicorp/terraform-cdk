// https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html#id DataAwsccEcrRepository#id}
  */
  readonly id: string;
}
export class DataAwsccEcrRepositoryEncryptionConfiguration extends cdktf.ComplexComputedList {

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}

export function dataAwsccEcrRepositoryEncryptionConfigurationToTerraform(struct?: DataAwsccEcrRepositoryEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class DataAwsccEcrRepositoryImageScanningConfiguration extends cdktf.ComplexComputedList {

  // scan_on_push - computed: true, optional: false, required: false
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
}

export function dataAwsccEcrRepositoryImageScanningConfigurationToTerraform(struct?: DataAwsccEcrRepositoryImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}

export class DataAwsccEcrRepositoryLifecyclePolicy extends cdktf.ComplexComputedList {

  // lifecycle_policy_text - computed: true, optional: false, required: false
  public get lifecyclePolicyText() {
    return this.getStringAttribute('lifecycle_policy_text');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
}

export function dataAwsccEcrRepositoryLifecyclePolicyToTerraform(struct?: DataAwsccEcrRepositoryLifecyclePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lifecycle_policy_text: cdktf.stringToTerraform(struct!.lifecyclePolicyText),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}

export class DataAwsccEcrRepositoryTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcrRepositoryTagsToTerraform(struct?: DataAwsccEcrRepositoryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html awscc_ecr_repository}
*/
export class DataAwsccEcrRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecr_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html awscc_ecr_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcrRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcrRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_repository',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
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

  // image_scanning_configuration - computed: true, optional: false, required: false
  public get imageScanningConfiguration() {
    return this.interpolationForAttribute('image_scanning_configuration') as any;
  }

  // image_tag_mutability - computed: true, optional: false, required: false
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }

  // lifecycle_policy - computed: true, optional: false, required: false
  public get lifecyclePolicy() {
    return this.interpolationForAttribute('lifecycle_policy') as any;
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // repository_policy_text - computed: true, optional: false, required: false
  public get repositoryPolicyText() {
    return this.getStringAttribute('repository_policy_text');
  }

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
