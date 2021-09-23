import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ObjectlambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name you want to assign to this Object lambda Access Point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#name S3ObjectlambdaAccessPoint#name}
    */
    readonly name: string;
    /**
    * Configuration to be applied to this Object lambda Access Point. It specifies Supporting Access Point, Transformation Configurations. Customers can also set if they like to enable Cloudwatch metrics for accesses to this Object lambda Access Point. Default setting for Cloudwatch metrics is disable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}
    */
    readonly objectLambdaConfiguration?: S3ObjectlambdaAccessPointObjectLambdaConfiguration;
}
export interface S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#actions S3ObjectlambdaAccessPoint#actions}
    */
    readonly actions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#content_transformation S3ObjectlambdaAccessPoint#content_transformation}
    */
    readonly contentTransformation?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform(struct?: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any;
export interface S3ObjectlambdaAccessPointObjectLambdaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#allowed_features S3ObjectlambdaAccessPoint#allowed_features}
    */
    readonly allowedFeatures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}
    */
    readonly supportingAccessPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}
    */
    readonly transformationConfigurations: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[];
}
export declare function s3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(struct?: S3ObjectlambdaAccessPointObjectLambdaConfiguration): any;
export declare class S3ObjectlambdaAccessPointPolicyStatus extends cdktf.ComplexComputedList {
    private _isPublic?;
    get isPublic(): boolean | cdktf.IResolvable;
    set isPublic(value: boolean | cdktf.IResolvable);
    resetIsPublic(): void;
    get isPublicInput(): boolean | cdktf.IResolvable | undefined;
}
export declare function s3ObjectlambdaAccessPointPolicyStatusToTerraform(struct?: S3ObjectlambdaAccessPointPolicyStatus): any;
export declare class S3ObjectlambdaAccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean | cdktf.IResolvable;
    set blockPublicAcls(value: boolean | cdktf.IResolvable);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable | undefined;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean | cdktf.IResolvable;
    set ignorePublicAcls(value: boolean | cdktf.IResolvable);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean | cdktf.IResolvable;
    set restrictPublicBuckets(value: boolean | cdktf.IResolvable);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | cdktf.IResolvable | undefined;
}
export declare function s3ObjectlambdaAccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html awscc_s3objectlambda_access_point}
*/
export declare class S3ObjectlambdaAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html awscc_s3objectlambda_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectlambdaAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3ObjectlambdaAccessPointConfig);
    get arn(): string;
    get creationDate(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _objectLambdaConfiguration?;
    get objectLambdaConfiguration(): S3ObjectlambdaAccessPointObjectLambdaConfiguration;
    set objectLambdaConfiguration(value: S3ObjectlambdaAccessPointObjectLambdaConfiguration);
    resetObjectLambdaConfiguration(): void;
    get objectLambdaConfigurationInput(): S3ObjectlambdaAccessPointObjectLambdaConfiguration | undefined;
    get policyStatus(): any;
    get publicAccessBlockConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
