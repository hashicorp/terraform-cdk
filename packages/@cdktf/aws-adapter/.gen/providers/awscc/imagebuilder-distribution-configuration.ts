// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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

export function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userGroups),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userIds),
  }
}

export interface ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration {
  /**
  * The tags to apply to AMIs distributed to this Region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
  */
  readonly amiTags?: { [key: string]: string } | cdktf.IResolvable;
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

export function imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.amiTags),
    description: cdktf.stringToTerraform(struct!.description),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    launch_permission_configuration: imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct!.launchPermissionConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
    target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetAccountIds),
  }
}

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

export function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

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

export function imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerTags),
    description: cdktf.stringToTerraform(struct!.description),
    target_repository: imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct!.targetRepository),
  }
}

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

export function imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    set_default_version: cdktf.booleanToTerraform(struct!.setDefaultVersion),
  }
}

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

export function imagebuilderDistributionConfigurationDistributionsToTerraform(struct?: ImagebuilderDistributionConfigurationDistributions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami_distribution_configuration: imagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct!.amiDistributionConfiguration),
    container_distribution_configuration: imagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct!.containerDistributionConfiguration),
    launch_template_configurations: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform)(struct!.launchTemplateConfigurations),
    license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.licenseConfigurationArns),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration}
*/
export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_distribution_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._distributions = config.distributions;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // distributions - computed: false, optional: false, required: true
  private _distributions: ImagebuilderDistributionConfigurationDistributions[];
  public get distributions() {
    return this.interpolationForAttribute('distributions') as any;
  }
  public set distributions(value: ImagebuilderDistributionConfigurationDistributions[]) {
    this._distributions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionsInput() {
    return this._distributions
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      description: cdktf.stringToTerraform(this._description),
      distributions: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionsToTerraform)(this._distributions),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
