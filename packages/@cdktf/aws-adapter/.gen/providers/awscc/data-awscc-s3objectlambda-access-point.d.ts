import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3ObjectlambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html#id DataAwsccS3ObjectlambdaAccessPoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations extends cdktf.ComplexComputedList {
    get actions(): string[];
    get contentTransformation(): any;
}
export declare function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any;
export declare class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration extends cdktf.ComplexComputedList {
    get allowedFeatures(): string[];
    get cloudwatchMetricsEnabled(): any;
    get supportingAccessPoint(): string;
    get transformationConfigurations(): any;
}
export declare function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration): any;
export declare class DataAwsccS3ObjectlambdaAccessPointPolicyStatus extends cdktf.ComplexComputedList {
    get isPublic(): any;
}
export declare function dataAwsccS3ObjectlambdaAccessPointPolicyStatusToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPolicyStatus): any;
export declare class DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {
    get blockPublicAcls(): any;
    get blockPublicPolicy(): any;
    get ignorePublicAcls(): any;
    get restrictPublicBuckets(): any;
}
export declare function dataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html awscc_s3objectlambda_access_point}
*/
export declare class DataAwsccS3ObjectlambdaAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html awscc_s3objectlambda_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3ObjectlambdaAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3ObjectlambdaAccessPointConfig);
    get arn(): string;
    get creationDate(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get objectLambdaConfiguration(): any;
    get policyStatus(): any;
    get publicAccessBlockConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
