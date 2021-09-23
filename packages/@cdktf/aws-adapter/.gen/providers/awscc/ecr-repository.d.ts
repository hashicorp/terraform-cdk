import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any;
export interface EcrRepositoryImageScanningConfiguration {
    /**
    * The setting that determines whether images are scanned after being pushed to a repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
    */
    readonly scanOnPush?: boolean | cdktf.IResolvable;
}
export declare function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration): any;
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
export declare function ecrRepositoryLifecyclePolicyToTerraform(struct?: EcrRepositoryLifecyclePolicy): any;
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
export declare function ecrRepositoryTagsToTerraform(struct?: EcrRepositoryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html awscc_ecr_repository}
*/
export declare class EcrRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_repository.html awscc_ecr_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcrRepositoryConfig);
    get arn(): string;
    private _encryptionConfiguration?;
    get encryptionConfiguration(): EcrRepositoryEncryptionConfiguration;
    set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration);
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): EcrRepositoryEncryptionConfiguration | undefined;
    get id(): string;
    private _imageScanningConfiguration?;
    get imageScanningConfiguration(): EcrRepositoryImageScanningConfiguration;
    set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration);
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): EcrRepositoryImageScanningConfiguration | undefined;
    private _imageTagMutability?;
    get imageTagMutability(): string;
    set imageTagMutability(value: string);
    resetImageTagMutability(): void;
    get imageTagMutabilityInput(): string | undefined;
    private _lifecyclePolicy?;
    get lifecyclePolicy(): EcrRepositoryLifecyclePolicy;
    set lifecyclePolicy(value: EcrRepositoryLifecyclePolicy);
    resetLifecyclePolicy(): void;
    get lifecyclePolicyInput(): EcrRepositoryLifecyclePolicy | undefined;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    resetRepositoryName(): void;
    get repositoryNameInput(): string | undefined;
    private _repositoryPolicyText?;
    get repositoryPolicyText(): string;
    set repositoryPolicyText(value: string);
    resetRepositoryPolicyText(): void;
    get repositoryPolicyTextInput(): string | undefined;
    get repositoryUri(): string;
    private _tags?;
    get tags(): EcrRepositoryTags[];
    set tags(value: EcrRepositoryTags[]);
    resetTags(): void;
    get tagsInput(): EcrRepositoryTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
