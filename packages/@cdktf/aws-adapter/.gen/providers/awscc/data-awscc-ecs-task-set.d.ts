import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsTaskSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html#id DataAwsccEcsTaskSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsTaskSetLoadBalancers extends cdktf.ComplexComputedList {
    get containerName(): string;
    get containerPort(): number;
    get loadBalancerName(): string;
    get targetGroupArn(): string;
}
export declare function dataAwsccEcsTaskSetLoadBalancersToTerraform(struct?: DataAwsccEcsTaskSetLoadBalancers): any;
export declare class DataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfiguration extends cdktf.ComplexComputedList {
    get assignPublicIp(): string;
    get securityGroups(): string[];
    get subnets(): string[];
}
export declare function dataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: DataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfiguration): any;
export declare class DataAwsccEcsTaskSetNetworkConfiguration extends cdktf.ComplexComputedList {
    get awsVpcConfiguration(): any;
}
export declare function dataAwsccEcsTaskSetNetworkConfigurationToTerraform(struct?: DataAwsccEcsTaskSetNetworkConfiguration): any;
export declare class DataAwsccEcsTaskSetScale extends cdktf.ComplexComputedList {
    get unit(): string;
    get value(): number;
}
export declare function dataAwsccEcsTaskSetScaleToTerraform(struct?: DataAwsccEcsTaskSetScale): any;
export declare class DataAwsccEcsTaskSetServiceRegistries extends cdktf.ComplexComputedList {
    get containerName(): string;
    get containerPort(): number;
    get port(): number;
    get registryArn(): string;
}
export declare function dataAwsccEcsTaskSetServiceRegistriesToTerraform(struct?: DataAwsccEcsTaskSetServiceRegistries): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html awscc_ecs_task_set}
*/
export declare class DataAwsccEcsTaskSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html awscc_ecs_task_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsTaskSetConfig);
    get cluster(): string;
    get externalId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get launchType(): string;
    get loadBalancers(): any;
    get networkConfiguration(): any;
    get platformVersion(): string;
    get scale(): any;
    get service(): string;
    get serviceRegistries(): any;
    get taskDefinition(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
