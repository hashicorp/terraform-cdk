// https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}
  */
  readonly accountAggregationSources?: ConfigConfigurationAggregatorAccountAggregationSources[];
  /**
  * The name of the aggregator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#configuration_aggregator_name ConfigConfigurationAggregator#configuration_aggregator_name}
  */
  readonly configurationAggregatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
  */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
  /**
  * The tags for the configuration aggregator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
  */
  readonly tags?: ConfigConfigurationAggregatorTags[];
}
export interface ConfigConfigurationAggregatorAccountAggregationSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}
  */
  readonly allAwsRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#aws_regions ConfigConfigurationAggregator#aws_regions}
  */
  readonly awsRegions?: string[];
}

export function configConfigurationAggregatorAccountAggregationSourcesToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
    all_aws_regions: cdktf.booleanToTerraform(struct!.allAwsRegions),
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.awsRegions),
  }
}

export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}
  */
  readonly allAwsRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#aws_regions ConfigConfigurationAggregator#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
  */
  readonly roleArn: string;
}

export function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_aws_regions: cdktf.booleanToTerraform(struct!.allAwsRegions),
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.awsRegions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface ConfigConfigurationAggregatorTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#key ConfigConfigurationAggregator#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html#value ConfigConfigurationAggregator#value}
  */
  readonly value: string;
}

export function configConfigurationAggregatorTagsToTerraform(struct?: ConfigConfigurationAggregatorTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html awscc_config_configuration_aggregator}
*/
export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_configuration_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html awscc_config_configuration_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationAggregatorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_configuration_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountAggregationSources = config.accountAggregationSources;
    this._configurationAggregatorName = config.configurationAggregatorName;
    this._organizationAggregationSource = config.organizationAggregationSource;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_aggregation_sources - computed: false, optional: true, required: false
  private _accountAggregationSources?: ConfigConfigurationAggregatorAccountAggregationSources[];
  public get accountAggregationSources() {
    return this.interpolationForAttribute('account_aggregation_sources') as any;
  }
  public set accountAggregationSources(value: ConfigConfigurationAggregatorAccountAggregationSources[] ) {
    this._accountAggregationSources = value;
  }
  public resetAccountAggregationSources() {
    this._accountAggregationSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAggregationSourcesInput() {
    return this._accountAggregationSources
  }

  // configuration_aggregator_arn - computed: true, optional: false, required: false
  public get configurationAggregatorArn() {
    return this.getStringAttribute('configuration_aggregator_arn');
  }

  // configuration_aggregator_name - computed: true, optional: true, required: false
  private _configurationAggregatorName?: string;
  public get configurationAggregatorName() {
    return this.getStringAttribute('configuration_aggregator_name');
  }
  public set configurationAggregatorName(value: string) {
    this._configurationAggregatorName = value;
  }
  public resetConfigurationAggregatorName() {
    this._configurationAggregatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationAggregatorNameInput() {
    return this._configurationAggregatorName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
  public get organizationAggregationSource() {
    return this.interpolationForAttribute('organization_aggregation_source') as any;
  }
  public set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource ) {
    this._organizationAggregationSource = value;
  }
  public resetOrganizationAggregationSource() {
    this._organizationAggregationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAggregationSourceInput() {
    return this._organizationAggregationSource
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ConfigConfigurationAggregatorTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ConfigConfigurationAggregatorTags[] ) {
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
      account_aggregation_sources: cdktf.listMapper(configConfigurationAggregatorAccountAggregationSourcesToTerraform)(this._accountAggregationSources),
      configuration_aggregator_name: cdktf.stringToTerraform(this._configurationAggregatorName),
      organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource),
      tags: cdktf.listMapper(configConfigurationAggregatorTagsToTerraform)(this._tags),
    };
  }
}
