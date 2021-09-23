import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html#id DataAwsccEcsCluster#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsClusterClusterSettings extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccEcsClusterClusterSettingsToTerraform(struct?: DataAwsccEcsClusterClusterSettings): any;
export declare class DataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfiguration extends cdktf.ComplexComputedList {
    get cloudwatchEncryptionEnabled(): any;
    get cloudwatchLogGroupName(): string;
    get s3BucketName(): string;
    get s3EncryptionEnabled(): any;
    get s3KeyPrefix(): string;
}
export declare function dataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: DataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any;
export declare class DataAwsccEcsClusterConfigurationExecuteCommandConfiguration extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get logConfiguration(): any;
    get logging(): string;
}
export declare function dataAwsccEcsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: DataAwsccEcsClusterConfigurationExecuteCommandConfiguration): any;
export declare class DataAwsccEcsClusterConfiguration extends cdktf.ComplexComputedList {
    get executeCommandConfiguration(): any;
}
export declare function dataAwsccEcsClusterConfigurationToTerraform(struct?: DataAwsccEcsClusterConfiguration): any;
export declare class DataAwsccEcsClusterDefaultCapacityProviderStrategy extends cdktf.ComplexComputedList {
    get base(): number;
    get capacityProvider(): string;
    get weight(): number;
}
export declare function dataAwsccEcsClusterDefaultCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsClusterDefaultCapacityProviderStrategy): any;
export declare class DataAwsccEcsClusterTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEcsClusterTagsToTerraform(struct?: DataAwsccEcsClusterTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html awscc_ecs_cluster}
*/
export declare class DataAwsccEcsCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html awscc_ecs_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsClusterConfig);
    get arn(): string;
    get capacityProviders(): string[];
    get clusterName(): string;
    get clusterSettings(): any;
    get configuration(): any;
    get defaultCapacityProviderStrategy(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
