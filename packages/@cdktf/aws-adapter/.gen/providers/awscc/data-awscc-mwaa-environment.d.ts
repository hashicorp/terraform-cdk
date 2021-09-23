import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html#id DataAwsccMwaaEnvironment#id}
    */
    readonly id: string;
}
export declare class DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logLevel(): string;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any;
export declare class DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logLevel(): string;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs): any;
export declare class DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logLevel(): string;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs): any;
export declare class DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logLevel(): string;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs): any;
export declare class DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logLevel(): string;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs): any;
export declare class DataAwsccMwaaEnvironmentLoggingConfiguration extends cdktf.ComplexComputedList {
    get dagProcessingLogs(): any;
    get schedulerLogs(): any;
    get taskLogs(): any;
    get webserverLogs(): any;
    get workerLogs(): any;
}
export declare function dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfiguration): any;
export declare class DataAwsccMwaaEnvironmentNetworkConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentNetworkConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment}
*/
export declare class DataAwsccMwaaEnvironment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMwaaEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMwaaEnvironmentConfig);
    airflowConfigurationOptions(key: string): string;
    get airflowVersion(): string;
    get arn(): string;
    get dagS3Path(): string;
    get environmentClass(): string;
    get executionRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKey(): string;
    get loggingConfiguration(): any;
    get maxWorkers(): number;
    get minWorkers(): number;
    get name(): string;
    get networkConfiguration(): any;
    get pluginsS3ObjectVersion(): string;
    get pluginsS3Path(): string;
    get requirementsS3ObjectVersion(): string;
    get requirementsS3Path(): string;
    get schedulers(): number;
    get sourceBucketArn(): string;
    tags(key: string): string;
    get webserverAccessMode(): string;
    get webserverUrl(): string;
    get weeklyMaintenanceWindowStart(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
