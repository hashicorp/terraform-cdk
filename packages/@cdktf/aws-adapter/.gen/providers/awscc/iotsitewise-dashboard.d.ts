import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewiseDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * The dashboard definition specified in a JSON literal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_definition IotsitewiseDashboard#dashboard_definition}
    */
    readonly dashboardDefinition: string;
    /**
    * A description for the dashboard.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_description IotsitewiseDashboard#dashboard_description}
    */
    readonly dashboardDescription: string;
    /**
    * A friendly name for the dashboard.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_name IotsitewiseDashboard#dashboard_name}
    */
    readonly dashboardName: string;
    /**
    * The ID of the project in which to create the dashboard.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#project_id IotsitewiseDashboard#project_id}
    */
    readonly projectId?: string;
    /**
    * A list of key-value pairs that contain metadata for the dashboard.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#tags IotsitewiseDashboard#tags}
    */
    readonly tags?: IotsitewiseDashboardTags[];
}
export interface IotsitewiseDashboardTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#key IotsitewiseDashboard#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#value IotsitewiseDashboard#value}
    */
    readonly value: string;
}
export declare function iotsitewiseDashboardTagsToTerraform(struct?: IotsitewiseDashboardTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html awscc_iotsitewise_dashboard}
*/
export declare class IotsitewiseDashboard extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html awscc_iotsitewise_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseDashboardConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseDashboardConfig);
    get dashboardArn(): string;
    private _dashboardDefinition;
    get dashboardDefinition(): string;
    set dashboardDefinition(value: string);
    get dashboardDefinitionInput(): string;
    private _dashboardDescription;
    get dashboardDescription(): string;
    set dashboardDescription(value: string);
    get dashboardDescriptionInput(): string;
    get dashboardId(): string;
    private _dashboardName;
    get dashboardName(): string;
    set dashboardName(value: string);
    get dashboardNameInput(): string;
    get id(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string | undefined;
    private _tags?;
    get tags(): IotsitewiseDashboardTags[];
    set tags(value: IotsitewiseDashboardTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewiseDashboardTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
