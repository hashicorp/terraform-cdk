import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The distributions of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#distributions ImagebuilderDistributionConfiguration#distributions}
    */
    readonly distributions: ImagebuilderDistributionConfigurationDistributions[];
    /**
    * The name of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name: string;
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#tags ImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export interface ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration {
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#user_groups ImagebuilderDistributionConfiguration#user_groups}
    */
    readonly userGroups?: string[];
    /**
    * The AWS account ID.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#user_ids ImagebuilderDistributionConfiguration#user_ids}
    */
    readonly userIds?: string[];
}
export declare function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration): any;
export interface ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration {
    /**
    * The tags to apply to AMIs distributed to this Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
    */
    readonly amiTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The description of the AMI distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The KMS key identifier used to encrypt the distributed image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#launch_permission_configuration ImagebuilderDistributionConfiguration#launch_permission_configuration}
    */
    readonly launchPermissionConfiguration?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration;
    /**
    * The name of the AMI distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name?: string;
    /**
    * The ID of accounts to which you want to distribute an image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
    */
    readonly targetAccountIds?: string[];
}
export declare function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration): any;
export interface ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository {
    /**
    * The repository name of target container repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#repository_name ImagebuilderDistributionConfiguration#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * The service of target container repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#service ImagebuilderDistributionConfiguration#service}
    */
    readonly service?: string;
}
export declare function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository): any;
export interface ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration {
    /**
    * Tags that are attached to the container distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#container_tags ImagebuilderDistributionConfiguration#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * The description of the container distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The destination repository for the container image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#target_repository ImagebuilderDistributionConfiguration#target_repository}
    */
    readonly targetRepository?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository;
}
export declare function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration): any;
export interface ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations {
    /**
    * The account ID that this configuration applies to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#account_id ImagebuilderDistributionConfiguration#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifies the EC2 launch template to use.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Set the specified EC2 launch template as the default launch template for the specified account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#set_default_version ImagebuilderDistributionConfiguration#set_default_version}
    */
    readonly setDefaultVersion?: boolean | cdktf.IResolvable;
}
export declare function imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations): any;
export interface ImagebuilderDistributionConfigurationDistributions {
    /**
    * The specific AMI settings (for example, launch permissions, AMI tags).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
    */
    readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration;
    /**
    * Container distribution settings for encryption, licensing, and sharing in a specific Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}
    */
    readonly containerDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration;
    /**
    * A group of launchTemplateConfiguration settings that apply to image distribution.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#launch_template_configurations ImagebuilderDistributionConfiguration#launch_template_configurations}
    */
    readonly launchTemplateConfigurations?: ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations[];
    /**
    * The License Manager Configuration to associate with the AMI in the specified Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * region
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#region ImagebuilderDistributionConfiguration#region}
    */
    readonly region: string;
}
export declare function imagebuilderDistributionConfigurationDistributionsToTerraform(struct?: ImagebuilderDistributionConfigurationDistributions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration}
*/
export declare class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _distributions;
    get distributions(): ImagebuilderDistributionConfigurationDistributions[];
    set distributions(value: ImagebuilderDistributionConfigurationDistributions[]);
    get distributionsInput(): ImagebuilderDistributionConfigurationDistributions[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
