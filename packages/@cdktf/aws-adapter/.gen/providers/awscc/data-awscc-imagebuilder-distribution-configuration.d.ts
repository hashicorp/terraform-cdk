import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html#id DataAwsccImagebuilderDistributionConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration extends cdktf.ComplexComputedList {
    get userGroups(): string[];
    get userIds(): string[];
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration): any;
export declare class DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration extends cdktf.ComplexComputedList {
    get amiTags(): any;
    get description(): string;
    get kmsKeyId(): string;
    get launchPermissionConfiguration(): any;
    get name(): string;
    get targetAccountIds(): string[];
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration): any;
export declare class DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository extends cdktf.ComplexComputedList {
    get repositoryName(): string;
    get service(): string;
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository): any;
export declare class DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration extends cdktf.ComplexComputedList {
    get containerTags(): string[];
    get description(): string;
    get targetRepository(): any;
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration): any;
export declare class DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations extends cdktf.ComplexComputedList {
    get accountId(): string;
    get launchTemplateId(): string;
    get setDefaultVersion(): any;
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations): any;
export declare class DataAwsccImagebuilderDistributionConfigurationDistributions extends cdktf.ComplexComputedList {
    get amiDistributionConfiguration(): any;
    get containerDistributionConfiguration(): any;
    get launchTemplateConfigurations(): any;
    get licenseConfigurationArns(): string[];
    get region(): string;
}
export declare function dataAwsccImagebuilderDistributionConfigurationDistributionsToTerraform(struct?: DataAwsccImagebuilderDistributionConfigurationDistributions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration}
*/
export declare class DataAwsccImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configuration.html awscc_imagebuilder_distribution_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderDistributionConfigurationConfig);
    get arn(): string;
    get description(): string;
    get distributions(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
