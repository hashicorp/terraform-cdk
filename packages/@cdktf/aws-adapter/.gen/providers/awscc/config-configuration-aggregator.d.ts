import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function configConfigurationAggregatorAccountAggregationSourcesToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSources): any;
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
export declare function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSource): any;
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
export declare function configConfigurationAggregatorTagsToTerraform(struct?: ConfigConfigurationAggregatorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html awscc_config_configuration_aggregator}
*/
export declare class ConfigConfigurationAggregator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_configuration_aggregator.html awscc_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ConfigConfigurationAggregatorConfig);
    private _accountAggregationSources?;
    get accountAggregationSources(): ConfigConfigurationAggregatorAccountAggregationSources[];
    set accountAggregationSources(value: ConfigConfigurationAggregatorAccountAggregationSources[]);
    resetAccountAggregationSources(): void;
    get accountAggregationSourcesInput(): ConfigConfigurationAggregatorAccountAggregationSources[] | undefined;
    get configurationAggregatorArn(): string;
    private _configurationAggregatorName?;
    get configurationAggregatorName(): string;
    set configurationAggregatorName(value: string);
    resetConfigurationAggregatorName(): void;
    get configurationAggregatorNameInput(): string | undefined;
    get id(): string;
    private _organizationAggregationSource?;
    get organizationAggregationSource(): ConfigConfigurationAggregatorOrganizationAggregationSource;
    set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource);
    resetOrganizationAggregationSource(): void;
    get organizationAggregationSourceInput(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined;
    private _tags?;
    get tags(): ConfigConfigurationAggregatorTags[];
    set tags(value: ConfigConfigurationAggregatorTags[]);
    resetTags(): void;
    get tagsInput(): ConfigConfigurationAggregatorTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
