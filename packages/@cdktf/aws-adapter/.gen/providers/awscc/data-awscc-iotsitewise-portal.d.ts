import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewisePortalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html#id DataAwsccIotsitewisePortal#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewisePortalAlarms extends cdktf.ComplexComputedList {
    get alarmRoleArn(): string;
    get notificationLambdaArn(): string;
}
export declare function dataAwsccIotsitewisePortalAlarmsToTerraform(struct?: DataAwsccIotsitewisePortalAlarms): any;
export declare class DataAwsccIotsitewisePortalTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewisePortalTagsToTerraform(struct?: DataAwsccIotsitewisePortalTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html awscc_iotsitewise_portal}
*/
export declare class DataAwsccIotsitewisePortal extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html awscc_iotsitewise_portal} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewisePortalConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewisePortalConfig);
    get alarms(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get notificationSenderEmail(): string;
    get portalArn(): string;
    get portalAuthMode(): string;
    get portalClientId(): string;
    get portalContactEmail(): string;
    get portalDescription(): string;
    get portalId(): string;
    get portalName(): string;
    get portalStartUrl(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
