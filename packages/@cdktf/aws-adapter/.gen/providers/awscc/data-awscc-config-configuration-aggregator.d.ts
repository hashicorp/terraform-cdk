import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html#id DataAwsccConfigConfigurationAggregator#id}
    */
    readonly id: string;
}
export declare class DataAwsccConfigConfigurationAggregatorAccountAggregationSources extends cdktf.ComplexComputedList {
    get accountIds(): string[];
    get allAwsRegions(): any;
    get awsRegions(): string[];
}
export declare function dataAwsccConfigConfigurationAggregatorAccountAggregationSourcesToTerraform(struct?: DataAwsccConfigConfigurationAggregatorAccountAggregationSources): any;
export declare class DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource extends cdktf.ComplexComputedList {
    get allAwsRegions(): any;
    get awsRegions(): string[];
    get roleArn(): string;
}
export declare function dataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource): any;
export declare class DataAwsccConfigConfigurationAggregatorTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccConfigConfigurationAggregatorTagsToTerraform(struct?: DataAwsccConfigConfigurationAggregatorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html awscc_config_configuration_aggregator}
*/
export declare class DataAwsccConfigConfigurationAggregator extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregator.html awscc_config_configuration_aggregator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigConfigurationAggregatorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConfigConfigurationAggregatorConfig);
    get accountAggregationSources(): any;
    get configurationAggregatorArn(): string;
    get configurationAggregatorName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get organizationAggregationSource(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
