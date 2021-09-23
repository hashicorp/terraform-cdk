import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderDistributionConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configurations.html awscc_imagebuilder_distribution_configurations}
*/
export declare class DataAwsccImagebuilderDistributionConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_distribution_configurations.html awscc_imagebuilder_distribution_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderDistributionConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccImagebuilderDistributionConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
