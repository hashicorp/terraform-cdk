import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#description ImagebuilderInfrastructureConfiguration#description}
    */
    readonly description?: string;
    /**
    * The instance profile of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}
    */
    readonly instanceProfileName: string;
    /**
    * The instance types of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#instance_types ImagebuilderInfrastructureConfiguration#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * The EC2 key pair of the infrastructure configuration..
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#key_pair ImagebuilderInfrastructureConfiguration#key_pair}
    */
    readonly keyPair?: string;
    /**
    * The logging configuration of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#logging ImagebuilderInfrastructureConfiguration#logging}
    */
    readonly logging?: ImagebuilderInfrastructureConfigurationLogging;
    /**
    * The name of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#name ImagebuilderInfrastructureConfiguration#name}
    */
    readonly name: string;
    /**
    * The tags attached to the resource created by Image Builder.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The security group IDs of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * The subnet ID of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#tags ImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The terminate instance on failure configuration of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}
    */
    readonly terminateInstanceOnFailure?: boolean | cdktf.IResolvable;
}
export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    /**
    * S3BucketName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * S3KeyPrefix
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export interface ImagebuilderInfrastructureConfigurationLogging {
    /**
    * The S3 path in which to store the logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}
    */
    readonly s3Logs?: ImagebuilderInfrastructureConfigurationLoggingS3Logs;
}
export declare function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: ImagebuilderInfrastructureConfigurationLogging): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration}
*/
export declare class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderInfrastructureConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _instanceProfileName;
    get instanceProfileName(): string;
    set instanceProfileName(value: string);
    get instanceProfileNameInput(): string;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[] | undefined;
    private _keyPair?;
    get keyPair(): string;
    set keyPair(value: string);
    resetKeyPair(): void;
    get keyPairInput(): string | undefined;
    private _logging?;
    get logging(): ImagebuilderInfrastructureConfigurationLogging;
    set logging(value: ImagebuilderInfrastructureConfigurationLogging);
    resetLogging(): void;
    get loggingInput(): ImagebuilderInfrastructureConfigurationLogging | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set resourceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _terminateInstanceOnFailure?;
    get terminateInstanceOnFailure(): boolean | cdktf.IResolvable;
    set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable);
    resetTerminateInstanceOnFailure(): void;
    get terminateInstanceOnFailureInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
