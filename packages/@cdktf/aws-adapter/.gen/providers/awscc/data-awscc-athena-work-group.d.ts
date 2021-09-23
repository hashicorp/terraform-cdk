import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaWorkGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html#id DataAwsccAthenaWorkGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccAthenaWorkGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAthenaWorkGroupTagsToTerraform(struct?: DataAwsccAthenaWorkGroupTags): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion extends cdktf.ComplexComputedList {
    get effectiveEngineVersion(): string;
    get selectedEngineVersion(): string;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get encryptionOption(): string;
    get kmsKey(): string;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration extends cdktf.ComplexComputedList {
    get encryptionConfiguration(): any;
    get outputLocation(): string;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfiguration extends cdktf.ComplexComputedList {
    get bytesScannedCutoffPerQuery(): number;
    get enforceWorkGroupConfiguration(): any;
    get engineVersion(): any;
    get publishCloudwatchMetricsEnabled(): any;
    get requesterPaysEnabled(): any;
    get resultConfiguration(): any;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfiguration): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion extends cdktf.ComplexComputedList {
    get effectiveEngineVersion(): string;
    get selectedEngineVersion(): string;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration extends cdktf.ComplexComputedList {
    get encryptionOption(): string;
    get kmsKey(): string;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates extends cdktf.ComplexComputedList {
    get encryptionConfiguration(): any;
    get outputLocation(): string;
    get removeEncryptionConfiguration(): any;
    get removeOutputLocation(): any;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): any;
export declare class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates extends cdktf.ComplexComputedList {
    get bytesScannedCutoffPerQuery(): number;
    get enforceWorkGroupConfiguration(): any;
    get engineVersion(): any;
    get publishCloudwatchMetricsEnabled(): any;
    get removeBytesScannedCutoffPerQuery(): any;
    get requesterPaysEnabled(): any;
    get resultConfigurationUpdates(): any;
}
export declare function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html awscc_athena_work_group}
*/
export declare class DataAwsccAthenaWorkGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html awscc_athena_work_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaWorkGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAthenaWorkGroupConfig);
    get creationTime(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get recursiveDeleteOption(): cdktf.IResolvable;
    get state(): string;
    get tags(): any;
    get workGroupConfiguration(): any;
    get workGroupConfigurationUpdates(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
