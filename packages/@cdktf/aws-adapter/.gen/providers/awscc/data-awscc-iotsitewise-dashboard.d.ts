import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html#id DataAwsccIotsitewiseDashboard#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseDashboardTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewiseDashboardTagsToTerraform(struct?: DataAwsccIotsitewiseDashboardTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html awscc_iotsitewise_dashboard}
*/
export declare class DataAwsccIotsitewiseDashboard extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html awscc_iotsitewise_dashboard} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseDashboardConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseDashboardConfig);
    get dashboardArn(): string;
    get dashboardDefinition(): string;
    get dashboardDescription(): string;
    get dashboardId(): string;
    get dashboardName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get projectId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
