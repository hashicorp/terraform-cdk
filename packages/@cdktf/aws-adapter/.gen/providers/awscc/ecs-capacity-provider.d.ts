import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}
    */
    readonly tags?: EcsCapacityProviderTags[];
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any;
export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn: string;
    /**
    * The managed scaling settings for the Auto Scaling group capacity provider.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProvider): any;
export interface EcsCapacityProviderTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#key EcsCapacityProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#value EcsCapacityProvider#value}
    */
    readonly value?: string;
}
export declare function ecsCapacityProviderTagsToTerraform(struct?: EcsCapacityProviderTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html awscc_ecs_capacity_provider}
*/
export declare class EcsCapacityProvider extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html awscc_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig);
    private _autoScalingGroupProvider;
    get autoScalingGroupProvider(): EcsCapacityProviderAutoScalingGroupProvider;
    set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider);
    get autoScalingGroupProviderInput(): EcsCapacityProviderAutoScalingGroupProvider;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): EcsCapacityProviderTags[];
    set tags(value: EcsCapacityProviderTags[]);
    resetTags(): void;
    get tagsInput(): EcsCapacityProviderTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
