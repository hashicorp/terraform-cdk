import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html#id DataAwsccDatasyncTask#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncTaskExcludes extends cdktf.ComplexComputedList {
    get filterType(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncTaskExcludesToTerraform(struct?: DataAwsccDatasyncTaskExcludes): any;
export declare class DataAwsccDatasyncTaskOptions extends cdktf.ComplexComputedList {
    get atime(): string;
    get bytesPerSecond(): number;
    get gid(): string;
    get logLevel(): string;
    get mtime(): string;
    get overwriteMode(): string;
    get posixPermissions(): string;
    get preserveDeletedFiles(): string;
    get preserveDevices(): string;
    get securityDescriptorCopyFlags(): string;
    get taskQueueing(): string;
    get transferMode(): string;
    get uid(): string;
    get verifyMode(): string;
}
export declare function dataAwsccDatasyncTaskOptionsToTerraform(struct?: DataAwsccDatasyncTaskOptions): any;
export declare class DataAwsccDatasyncTaskSchedule extends cdktf.ComplexComputedList {
    get scheduleExpression(): string;
}
export declare function dataAwsccDatasyncTaskScheduleToTerraform(struct?: DataAwsccDatasyncTaskSchedule): any;
export declare class DataAwsccDatasyncTaskTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncTaskTagsToTerraform(struct?: DataAwsccDatasyncTaskTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html awscc_datasync_task}
*/
export declare class DataAwsccDatasyncTask extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html awscc_datasync_task} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncTaskConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncTaskConfig);
    get cloudwatchLogGroupArn(): string;
    get destinationLocationArn(): string;
    get destinationNetworkInterfaceArns(): string[];
    get errorCode(): string;
    get errorDetail(): string;
    get excludes(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get options(): any;
    get schedule(): any;
    get sourceLocationArn(): string;
    get sourceNetworkInterfaceArns(): string[];
    get status(): string;
    get tags(): any;
    get taskArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
