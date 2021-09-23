import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html#id DataAwsccImagebuilderInfrastructureConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {
    get s3BucketName(): string;
    get s3KeyPrefix(): string;
}
export declare function dataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare class DataAwsccImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {
    get s3Logs(): any;
}
export declare function dataAwsccImagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: DataAwsccImagebuilderInfrastructureConfigurationLogging): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration}
*/
export declare class DataAwsccImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderInfrastructureConfigurationConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceProfileName(): string;
    get instanceTypes(): string[];
    get keyPair(): string;
    get logging(): any;
    get name(): string;
    resourceTags(key: string): string;
    get securityGroupIds(): string[];
    get snsTopicArn(): string;
    get subnetId(): string;
    tags(key: string): string;
    get terminateInstanceOnFailure(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
