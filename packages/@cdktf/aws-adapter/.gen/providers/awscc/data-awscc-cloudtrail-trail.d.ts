import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudtrailTrailConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html#id DataAwsccCloudtrailTrail#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudtrailTrailEventSelectorsDataResources extends cdktf.ComplexComputedList {
    get type(): string;
    get values(): string[];
}
export declare function dataAwsccCloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectorsDataResources): any;
export declare class DataAwsccCloudtrailTrailEventSelectors extends cdktf.ComplexComputedList {
    get dataResources(): any;
    get excludeManagementEventSources(): string[];
    get includeManagementEvents(): any;
    get readWriteType(): string;
}
export declare function dataAwsccCloudtrailTrailEventSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectors): any;
export declare class DataAwsccCloudtrailTrailInsightSelectors extends cdktf.ComplexComputedList {
    get insightType(): string;
}
export declare function dataAwsccCloudtrailTrailInsightSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailInsightSelectors): any;
export declare class DataAwsccCloudtrailTrailTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCloudtrailTrailTagsToTerraform(struct?: DataAwsccCloudtrailTrailTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html awscc_cloudtrail_trail}
*/
export declare class DataAwsccCloudtrailTrail extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html awscc_cloudtrail_trail} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudtrailTrailConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudtrailTrailConfig);
    get arn(): string;
    get cloudwatchLogsLogGroupArn(): string;
    get cloudwatchLogsRoleArn(): string;
    get enableLogFileValidation(): cdktf.IResolvable;
    get eventSelectors(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get includeGlobalServiceEvents(): cdktf.IResolvable;
    get insightSelectors(): any;
    get isLogging(): cdktf.IResolvable;
    get isMultiRegionTrail(): cdktf.IResolvable;
    get isOrganizationTrail(): cdktf.IResolvable;
    get kmsKeyId(): string;
    get s3BucketName(): string;
    get s3KeyPrefix(): string;
    get snsTopicArn(): string;
    get snsTopicName(): string;
    get tags(): any;
    get trailName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
