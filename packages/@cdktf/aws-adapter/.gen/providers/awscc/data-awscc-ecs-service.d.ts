import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html#id DataAwsccEcsService#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsServiceCapacityProviderStrategy extends cdktf.ComplexComputedList {
    get base(): number;
    get capacityProvider(): string;
    get weight(): number;
}
export declare function dataAwsccEcsServiceCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsServiceCapacityProviderStrategy): any;
export declare class DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker extends cdktf.ComplexComputedList {
    get enable(): any;
    get rollback(): any;
}
export declare function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any;
export declare class DataAwsccEcsServiceDeploymentConfiguration extends cdktf.ComplexComputedList {
    get deploymentCircuitBreaker(): any;
    get maximumPercent(): number;
    get minimumHealthyPercent(): number;
}
export declare function dataAwsccEcsServiceDeploymentConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfiguration): any;
export declare class DataAwsccEcsServiceDeploymentController extends cdktf.ComplexComputedList {
    get type(): string;
}
export declare function dataAwsccEcsServiceDeploymentControllerToTerraform(struct?: DataAwsccEcsServiceDeploymentController): any;
export declare class DataAwsccEcsServiceLoadBalancers extends cdktf.ComplexComputedList {
    get containerName(): string;
    get containerPort(): number;
    get loadBalancerName(): string;
    get targetGroupArn(): string;
}
export declare function dataAwsccEcsServiceLoadBalancersToTerraform(struct?: DataAwsccEcsServiceLoadBalancers): any;
export declare class DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration extends cdktf.ComplexComputedList {
    get assignPublicIp(): string;
    get securityGroups(): string[];
    get subnets(): string[];
}
export declare function dataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration): any;
export declare class DataAwsccEcsServiceNetworkConfiguration extends cdktf.ComplexComputedList {
    get awsvpcConfiguration(): any;
}
export declare function dataAwsccEcsServiceNetworkConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfiguration): any;
export declare class DataAwsccEcsServicePlacementConstraints extends cdktf.ComplexComputedList {
    get expression(): string;
    get type(): string;
}
export declare function dataAwsccEcsServicePlacementConstraintsToTerraform(struct?: DataAwsccEcsServicePlacementConstraints): any;
export declare class DataAwsccEcsServicePlacementStrategies extends cdktf.ComplexComputedList {
    get field(): string;
    get type(): string;
}
export declare function dataAwsccEcsServicePlacementStrategiesToTerraform(struct?: DataAwsccEcsServicePlacementStrategies): any;
export declare class DataAwsccEcsServiceServiceRegistries extends cdktf.ComplexComputedList {
    get containerName(): string;
    get containerPort(): number;
    get port(): number;
    get registryArn(): string;
}
export declare function dataAwsccEcsServiceServiceRegistriesToTerraform(struct?: DataAwsccEcsServiceServiceRegistries): any;
export declare class DataAwsccEcsServiceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEcsServiceTagsToTerraform(struct?: DataAwsccEcsServiceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html awscc_ecs_service}
*/
export declare class DataAwsccEcsService extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html awscc_ecs_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsServiceConfig);
    get capacityProviderStrategy(): any;
    get cluster(): string;
    get deploymentConfiguration(): any;
    get deploymentController(): any;
    get desiredCount(): number;
    get enableEcsManagedTags(): cdktf.IResolvable;
    get enableExecuteCommand(): cdktf.IResolvable;
    get healthCheckGracePeriodSeconds(): number;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get launchType(): string;
    get loadBalancers(): any;
    get name(): string;
    get networkConfiguration(): any;
    get placementConstraints(): any;
    get placementStrategies(): any;
    get platformVersion(): string;
    get propagateTags(): string;
    get role(): string;
    get schedulingStrategy(): string;
    get serviceArn(): string;
    get serviceName(): string;
    get serviceRegistries(): any;
    get tags(): any;
    get taskDefinition(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
