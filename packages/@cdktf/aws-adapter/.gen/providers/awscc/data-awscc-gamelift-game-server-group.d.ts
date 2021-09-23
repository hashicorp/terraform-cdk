import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGameliftGameServerGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html#id DataAwsccGameliftGameServerGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration extends cdktf.ComplexComputedList {
    get targetValue(): number;
}
export declare function dataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: DataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any;
export declare class DataAwsccGameliftGameServerGroupAutoScalingPolicy extends cdktf.ComplexComputedList {
    get estimatedInstanceWarmup(): number;
    get targetTrackingConfiguration(): any;
}
export declare function dataAwsccGameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: DataAwsccGameliftGameServerGroupAutoScalingPolicy): any;
export declare class DataAwsccGameliftGameServerGroupInstanceDefinitions extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get weightedCapacity(): string;
}
export declare function dataAwsccGameliftGameServerGroupInstanceDefinitionsToTerraform(struct?: DataAwsccGameliftGameServerGroupInstanceDefinitions): any;
export declare class DataAwsccGameliftGameServerGroupLaunchTemplate extends cdktf.ComplexComputedList {
    get launchTemplateId(): string;
    get launchTemplateName(): string;
    get version(): string;
}
export declare function dataAwsccGameliftGameServerGroupLaunchTemplateToTerraform(struct?: DataAwsccGameliftGameServerGroupLaunchTemplate): any;
export declare class DataAwsccGameliftGameServerGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGameliftGameServerGroupTagsToTerraform(struct?: DataAwsccGameliftGameServerGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html awscc_gamelift_game_server_group}
*/
export declare class DataAwsccGameliftGameServerGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html awscc_gamelift_game_server_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGameliftGameServerGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGameliftGameServerGroupConfig);
    get autoScalingGroupArn(): string;
    get autoScalingPolicy(): any;
    get balancingStrategy(): string;
    get deleteOption(): string;
    get gameServerGroupArn(): string;
    get gameServerGroupName(): string;
    get gameServerProtectionPolicy(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceDefinitions(): any;
    get launchTemplate(): any;
    get maxSize(): number;
    get minSize(): number;
    get roleArn(): string;
    get tags(): any;
    get vpcSubnets(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
