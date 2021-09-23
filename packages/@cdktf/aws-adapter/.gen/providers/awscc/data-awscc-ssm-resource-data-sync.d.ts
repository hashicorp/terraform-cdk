import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html#id DataAwsccSsmResourceDataSync#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmResourceDataSyncS3Destination extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get bucketRegion(): string;
    get kmsKeyArn(): string;
    get syncFormat(): string;
}
export declare function dataAwsccSsmResourceDataSyncS3DestinationToTerraform(struct?: DataAwsccSsmResourceDataSyncS3Destination): any;
export declare class DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource extends cdktf.ComplexComputedList {
    get organizationSourceType(): string;
    get organizationalUnits(): string[];
}
export declare function dataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct?: DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource): any;
export declare class DataAwsccSsmResourceDataSyncSyncSource extends cdktf.ComplexComputedList {
    get awsOrganizationsSource(): any;
    get includeFutureRegions(): any;
    get sourceRegions(): string[];
    get sourceType(): string;
}
export declare function dataAwsccSsmResourceDataSyncSyncSourceToTerraform(struct?: DataAwsccSsmResourceDataSyncSyncSource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html awscc_ssm_resource_data_sync}
*/
export declare class DataAwsccSsmResourceDataSync extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html awscc_ssm_resource_data_sync} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmResourceDataSyncConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmResourceDataSyncConfig);
    get bucketName(): string;
    get bucketPrefix(): string;
    get bucketRegion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyArn(): string;
    get s3Destination(): any;
    get syncFormat(): string;
    get syncName(): string;
    get syncSource(): any;
    get syncType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
