// https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.

By default, when no encryption configuration is set or the AES256 encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.

For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration;
  /**
  * The image scanning configuration for the repository. This setting determines whether images are scanned for known vulnerabilities after being pushed to the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
  /**
  * The image tag mutability setting for the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * The LifecyclePolicy property type specifies a lifecycle policy. For information about lifecycle policy syntax, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#lifecycle_policy EcrRepository#lifecycle_policy}
  */
  readonly lifecyclePolicy?: EcrRepositoryLifecyclePolicy;
  /**
  * The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#repository_name EcrRepository#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#repository_policy_text EcrRepository#repository_policy_text}
  */
  readonly repositoryPolicyText?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#tags EcrRepository#tags}
  */
  readonly tags?: EcrRepositoryTags[];
}
export interface EcrRepositoryEncryptionConfiguration {
  /**
  * The encryption type to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * If you use the KMS encryption type, specify the CMK to use for encryption. The alias, key ID, or full ARN of the CMK can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed CMK for Amazon ECR will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#kms_key EcrRepository#kms_key}
  */
  readonly kmsKey?: string;
}

export function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface EcrRepositoryImageScanningConfiguration {
  /**
  * The setting that determines whether images are scanned after being pushed to a repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
  */
  readonly scanOnPush?: boolean | cdktf.IResolvable;
}

export function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}

export interface EcrRepositoryLifecyclePolicy {
  /**
  * The JSON repository policy text to apply to the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#lifecycle_policy_text EcrRepository#lifecycle_policy_text}
  */
  readonly lifecyclePolicyText?: string;
  /**
  * The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#registry_id EcrRepository#registry_id}
  */
  readonly registryId?: string;
}

export function ecrRepositoryLifecyclePolicyToTerraform(struct?: EcrRepositoryLifecyclePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lifecycle_policy_text: cdktf.stringToTerraform(struct!.lifecyclePolicyText),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}

export interface EcrRepositoryTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#key EcrRepository#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#value EcrRepository#value}
  */
  readonly value: string;
}

export function ecrRepositoryTagsToTerraform(struct?: EcrRepositoryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html awscc_ecr_repository}
*/
export class EcrRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecr_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html awscc_ecr_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig = {}) {
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
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._imageScanningConfiguration = config.imageScanningConfiguration;
    this._imageTagMutability = config.imageTagMutability;
    this._lifecyclePolicy = config.lifecyclePolicy;
    this._repositoryName = config.repositoryName;
    this._repositoryPolicyText = config.repositoryPolicyText;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration?: EcrRepositoryEncryptionConfiguration;
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
  public get imageScanningConfiguration() {
    return this.interpolationForAttribute('image_scanning_configuration') as any;
  }
  public set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration ) {
    this._imageScanningConfiguration = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration
  }

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string;
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string ) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability
  }

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy?: EcrRepositoryLifecyclePolicy;
  public get lifecyclePolicy() {
    return this.interpolationForAttribute('lifecycle_policy') as any;
  }
  public set lifecyclePolicy(value: EcrRepositoryLifecyclePolicy ) {
    this._lifecyclePolicy = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy
  }

  // repository_name - computed: true, optional: true, required: false
  private _repositoryName?: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
  }

  // repository_policy_text - computed: false, optional: true, required: false
  private _repositoryPolicyText?: string;
  public get repositoryPolicyText() {
    return this.getStringAttribute('repository_policy_text');
  }
  public set repositoryPolicyText(value: string ) {
    this._repositoryPolicyText = value;
  }
  public resetRepositoryPolicyText() {
    this._repositoryPolicyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPolicyTextInput() {
    return this._repositoryPolicyText
  }

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EcrRepositoryTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EcrRepositoryTags[] ) {
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
      encryption_configuration: ecrRepositoryEncryptionConfigurationToTerraform(this._encryptionConfiguration),
      image_scanning_configuration: ecrRepositoryImageScanningConfigurationToTerraform(this._imageScanningConfiguration),
      image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
      lifecycle_policy: ecrRepositoryLifecyclePolicyToTerraform(this._lifecyclePolicy),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      repository_policy_text: cdktf.stringToTerraform(this._repositoryPolicyText),
      tags: cdktf.listMapper(ecrRepositoryTagsToTerraform)(this._tags),
    };
  }
}
