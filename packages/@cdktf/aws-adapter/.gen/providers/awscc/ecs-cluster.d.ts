import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cluster_name EcsCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cluster_settings EcsCluster#cluster_settings}
    */
    readonly clusterSettings?: EcsClusterClusterSettings[];
    /**
    * The configurations to be set at cluster level.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#configuration EcsCluster#configuration}
    */
    readonly configuration?: EcsClusterConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#tags EcsCluster#tags}
    */
    readonly tags?: EcsClusterTags[];
}
export interface EcsClusterClusterSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#name EcsCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#value EcsCluster#value}
    */
    readonly value?: string;
}
export declare function ecsClusterClusterSettingsToTerraform(struct?: EcsClusterClusterSettings): any;
export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cloudwatch_encryption_enabled EcsCluster#cloudwatch_encryption_enabled}
    */
    readonly cloudwatchEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cloudwatch_log_group_name EcsCluster#cloudwatch_log_group_name}
    */
    readonly cloudwatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_bucket_name EcsCluster#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_encryption_enabled EcsCluster#s3_encryption_enabled}
    */
    readonly s3EncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_key_prefix EcsCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any;
export interface EcsClusterConfigurationExecuteCommandConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#kms_key_id EcsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The session logging configuration for ExecuteCommand.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#log_configuration EcsCluster#log_configuration}
    */
    readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#logging EcsCluster#logging}
    */
    readonly logging?: string;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfiguration): any;
export interface EcsClusterConfiguration {
    /**
    * The configuration for ExecuteCommand.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
    */
    readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
}
export declare function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfiguration): any;
export interface EcsClusterDefaultCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#base EcsCluster#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#weight EcsCluster#weight}
    */
    readonly weight?: number;
}
export declare function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any;
export interface EcsClusterTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#key EcsCluster#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#value EcsCluster#value}
    */
    readonly value?: string;
}
export declare function ecsClusterTagsToTerraform(struct?: EcsClusterTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html awscc_ecs_cluster}
*/
export declare class EcsCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html awscc_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcsClusterConfig);
    get arn(): string;
    private _capacityProviders?;
    get capacityProviders(): string[];
    set capacityProviders(value: string[]);
    resetCapacityProviders(): void;
    get capacityProvidersInput(): string[] | undefined;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    resetClusterName(): void;
    get clusterNameInput(): string | undefined;
    private _clusterSettings?;
    get clusterSettings(): EcsClusterClusterSettings[];
    set clusterSettings(value: EcsClusterClusterSettings[]);
    resetClusterSettings(): void;
    get clusterSettingsInput(): EcsClusterClusterSettings[] | undefined;
    private _configuration?;
    get configuration(): EcsClusterConfiguration;
    set configuration(value: EcsClusterConfiguration);
    resetConfiguration(): void;
    get configurationInput(): EcsClusterConfiguration | undefined;
    private _defaultCapacityProviderStrategy?;
    get defaultCapacityProviderStrategy(): EcsClusterDefaultCapacityProviderStrategy[];
    set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[]);
    resetDefaultCapacityProviderStrategy(): void;
    get defaultCapacityProviderStrategyInput(): EcsClusterDefaultCapacityProviderStrategy[] | undefined;
    get id(): string;
    private _tags?;
    get tags(): EcsClusterTags[];
    set tags(value: EcsClusterTags[]);
    resetTags(): void;
    get tagsInput(): EcsClusterTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
