import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html#id DataAwsccEcsCapacityProvider#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling extends cdktf.ComplexComputedList {
    get instanceWarmupPeriod(): number;
    get maximumScalingStepSize(): number;
    get minimumScalingStepSize(): number;
    get status(): string;
    get targetCapacity(): number;
}
export declare function dataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling): any;
export declare class DataAwsccEcsCapacityProviderAutoScalingGroupProvider extends cdktf.ComplexComputedList {
    get autoScalingGroupArn(): string;
    get managedScaling(): any;
    get managedTerminationProtection(): string;
}
export declare function dataAwsccEcsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProvider): any;
export declare class DataAwsccEcsCapacityProviderTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEcsCapacityProviderTagsToTerraform(struct?: DataAwsccEcsCapacityProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html awscc_ecs_capacity_provider}
*/
export declare class DataAwsccEcsCapacityProvider extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html awscc_ecs_capacity_provider} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsCapacityProviderConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsCapacityProviderConfig);
    get autoScalingGroupProvider(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
