import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsCapacityProvidersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_providers.html awscc_ecs_capacity_providers}
*/
export declare class DataAwsccEcsCapacityProviders extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_providers.html awscc_ecs_capacity_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsCapacityProvidersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcsCapacityProvidersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
