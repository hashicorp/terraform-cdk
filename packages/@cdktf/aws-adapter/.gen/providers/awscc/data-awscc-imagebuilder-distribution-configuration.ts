// https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html#id DataAwsccImagebuilderDistributionConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration extends cdktf.ComplexComputedList {

  // user_groups - computed: true, optional: false, required: false
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userGroups),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userIds),
  }
}

export class DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration extends cdktf.ComplexComputedList {

  // ami_tags - computed: true, optional: false, required: false
  public get amiTags() {
    return this.interpolationForAttribute('ami_tags') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // launch_permission_configuration - computed: true, optional: false, required: false
  public get launchPermissionConfiguration() {
    return this.interpolationForAttribute('launch_permission_configuration') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_account_ids - computed: true, optional: false, required: false
  public get targetAccountIds() {
    return this.getListAttribute('target_account_ids');
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.amiTags),
    description: cdktf.stringToTerraform(struct!.description),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    launch_permission_configuration: dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct!.launchPermissionConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
    target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetAccountIds),
  }
}

export class DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository extends cdktf.ComplexComputedList {

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration extends cdktf.ComplexComputedList {

  // container_tags - computed: true, optional: false, required: false
  public get containerTags() {
    return this.getListAttribute('container_tags');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // target_repository - computed: true, optional: false, required: false
  public get targetRepository() {
    return this.interpolationForAttribute('target_repository') as any;
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerTags),
    description: cdktf.stringToTerraform(struct!.description),
    target_repository: dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct!.targetRepository),
  }
}

export class DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations extends cdktf.ComplexComputedList {

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // set_default_version - computed: true, optional: false, required: false
  public get setDefaultVersion() {
    return this.getBooleanAttribute('set_default_version');
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    set_default_version: cdktf.booleanToTerraform(struct!.setDefaultVersion),
  }
}

export class DataAwsccImagebuilderDistributionConfigurationDistributions extends cdktf.ComplexComputedList {

  // ami_distribution_configuration - computed: true, optional: false, required: false
  public get amiDistributionConfiguration() {
    return this.interpolationForAttribute('ami_distribution_configuration') as any;
  }

  // container_distribution_configuration - computed: true, optional: false, required: false
  public get containerDistributionConfiguration() {
    return this.interpolationForAttribute('container_distribution_configuration') as any;
  }

  // launch_template_configurations - computed: true, optional: false, required: false
  public get launchTemplateConfigurations() {
    return this.interpolationForAttribute('launch_template_configurations') as any;
  }

  // license_configuration_arns - computed: true, optional: false, required: false
  public get licenseConfigurationArns() {
    return this.getListAttribute('license_configuration_arns');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export function dataAwsccImagebuilderDistributionConfigurationDistributionsToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami_distribution_configuration: dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct!.amiDistributionConfiguration),
    container_distribution_configuration: dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct!.containerDistributionConfiguration),
    launch_template_configurations: cdktf.listMapper(dataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform)(struct!.launchTemplateConfigurations),
    license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.licenseConfigurationArns),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration}
*/
export class DataAwsccImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderDistributionConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distributions - computed: true, optional: false, required: false
  public get distributions() {
    return this.interpolationForAttribute('distributions') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
