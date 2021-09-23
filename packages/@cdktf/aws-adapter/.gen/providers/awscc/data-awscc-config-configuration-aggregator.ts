// https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html#id DataAwsccConfigConfigurationAggregator#id}
  */
  readonly id: string;
}
export class DataAwsccConfigConfigurationAggregatorAccountAggregationSources extends cdktf.ComplexComputedList {

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }

  // all_aws_regions - computed: true, optional: false, required: false
  public get allAwsRegions() {
    return this.getBooleanAttribute('all_aws_regions');
  }

  // aws_regions - computed: true, optional: false, required: false
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
}

export function dataAwsccConfigConfigurationAggregatorAccountAggregationSourcesToTerraform(struct?: DataAwsccConfigConfigurationAggregatorAccountAggregationSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
    all_aws_regions: cdktf.booleanToTerraform(struct!.allAwsRegions),
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.awsRegions),
  }
}

export class DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource extends cdktf.ComplexComputedList {

  // all_aws_regions - computed: true, optional: false, required: false
  public get allAwsRegions() {
    return this.getBooleanAttribute('all_aws_regions');
  }

  // aws_regions - computed: true, optional: false, required: false
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_aws_regions: cdktf.booleanToTerraform(struct!.allAwsRegions),
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.awsRegions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccConfigConfigurationAggregatorTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccConfigConfigurationAggregatorTagsToTerraform(struct?: DataAwsccConfigConfigurationAggregatorTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html awscc_config_configuration_aggregator}
*/
export class DataAwsccConfigConfigurationAggregator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_configuration_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html awscc_config_configuration_aggregator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigConfigurationAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigConfigurationAggregatorConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_aggregation_sources - computed: true, optional: false, required: false
  public get accountAggregationSources() {
    return this.interpolationForAttribute('account_aggregation_sources') as any;
  }

  // configuration_aggregator_arn - computed: true, optional: false, required: false
  public get configurationAggregatorArn() {
    return this.getStringAttribute('configuration_aggregator_arn');
  }

  // configuration_aggregator_name - computed: true, optional: false, required: false
  public get configurationAggregatorName() {
    return this.getStringAttribute('configuration_aggregator_name');
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

  // organization_aggregation_source - computed: true, optional: false, required: false
  public get organizationAggregationSource() {
    return this.interpolationForAttribute('organization_aggregation_source') as any;
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
