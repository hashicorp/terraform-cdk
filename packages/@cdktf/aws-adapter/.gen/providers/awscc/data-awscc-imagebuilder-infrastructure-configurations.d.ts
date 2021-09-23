import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderInfrastructureConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configurations.html awscc_imagebuilder_infrastructure_configurations}
*/
export declare class DataAwsccImagebuilderInfrastructureConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configurations.html awscc_imagebuilder_infrastructure_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderInfrastructureConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccImagebuilderInfrastructureConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
