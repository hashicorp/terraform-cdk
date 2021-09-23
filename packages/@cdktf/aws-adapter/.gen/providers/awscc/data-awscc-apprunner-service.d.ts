import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html#id DataAwsccApprunnerService#id}
    */
    readonly id: string;
}
export declare class DataAwsccApprunnerServiceEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsKey(): string;
}
export declare function dataAwsccApprunnerServiceEncryptionConfigurationToTerraform(struct?: DataAwsccApprunnerServiceEncryptionConfiguration): any;
export declare class DataAwsccApprunnerServiceHealthCheckConfiguration extends cdktf.ComplexComputedList {
    get healthyThreshold(): number;
    get interval(): number;
    get path(): string;
    get protocol(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare function dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform(struct?: DataAwsccApprunnerServiceHealthCheckConfiguration): any;
export declare class DataAwsccApprunnerServiceInstanceConfiguration extends cdktf.ComplexComputedList {
    get cpu(): string;
    get instanceRoleArn(): string;
    get memory(): string;
}
export declare function dataAwsccApprunnerServiceInstanceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceInstanceConfiguration): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration extends cdktf.ComplexComputedList {
    get accessRoleArn(): string;
    get connectionArn(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues extends cdktf.ComplexComputedList {
    get buildCommand(): string;
    get port(): string;
    get runtime(): string;
    get runtimeEnvironmentVariables(): any;
    get startCommand(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration extends cdktf.ComplexComputedList {
    get codeConfigurationValues(): any;
    get configurationSource(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationCodeRepository extends cdktf.ComplexComputedList {
    get codeConfiguration(): any;
    get repositoryUrl(): string;
    get sourceCodeVersion(): any;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepository): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration extends cdktf.ComplexComputedList {
    get port(): string;
    get runtimeEnvironmentVariables(): any;
    get startCommand(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any;
export declare class DataAwsccApprunnerServiceSourceConfigurationImageRepository extends cdktf.ComplexComputedList {
    get imageConfiguration(): any;
    get imageIdentifier(): string;
    get imageRepositoryType(): string;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepository): any;
export declare class DataAwsccApprunnerServiceSourceConfiguration extends cdktf.ComplexComputedList {
    get authenticationConfiguration(): any;
    get autoDeploymentsEnabled(): any;
    get codeRepository(): any;
    get imageRepository(): any;
}
export declare function dataAwsccApprunnerServiceSourceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfiguration): any;
export declare class DataAwsccApprunnerServiceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApprunnerServiceTagsToTerraform(struct?: DataAwsccApprunnerServiceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service}
*/
export declare class DataAwsccApprunnerService extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApprunnerServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApprunnerServiceConfig);
    get autoScalingConfigurationArn(): string;
    get encryptionConfiguration(): any;
    get healthCheckConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceConfiguration(): any;
    get serviceArn(): string;
    get serviceId(): string;
    get serviceName(): string;
    get serviceUrl(): string;
    get sourceConfiguration(): any;
    get status(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
