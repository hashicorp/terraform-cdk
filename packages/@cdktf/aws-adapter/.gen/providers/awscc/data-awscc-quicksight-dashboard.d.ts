import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html#id DataAwsccQuicksightDashboard#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption extends cdktf.ComplexComputedList {
    get availabilityStatus(): string;
}
export declare function dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any;
export declare class DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption extends cdktf.ComplexComputedList {
    get availabilityStatus(): string;
}
export declare function dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption): any;
export declare class DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption extends cdktf.ComplexComputedList {
    get visibilityState(): string;
}
export declare function dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption): any;
export declare class DataAwsccQuicksightDashboardDashboardPublishOptions extends cdktf.ComplexComputedList {
    get adHocFilteringOption(): any;
    get exportToCsvOption(): any;
    get sheetControlsOption(): any;
}
export declare function dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptions): any;
export declare class DataAwsccQuicksightDashboardParametersDateTimeParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersDateTimeParameters): any;
export declare class DataAwsccQuicksightDashboardParametersDecimalParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): any;
}
export declare function dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersDecimalParameters): any;
export declare class DataAwsccQuicksightDashboardParametersIntegerParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): any;
}
export declare function dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersIntegerParameters): any;
export declare class DataAwsccQuicksightDashboardParametersStringParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccQuicksightDashboardParametersStringParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersStringParameters): any;
export declare class DataAwsccQuicksightDashboardParameters extends cdktf.ComplexComputedList {
    get dateTimeParameters(): any;
    get decimalParameters(): any;
    get integerParameters(): any;
    get stringParameters(): any;
}
export declare function dataAwsccQuicksightDashboardParametersToTerraform(struct?: DataAwsccQuicksightDashboardParameters): any;
export declare class DataAwsccQuicksightDashboardPermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightDashboardPermissionsToTerraform(struct?: DataAwsccQuicksightDashboardPermissions): any;
export declare class DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {
    get dataSetArn(): string;
    get dataSetPlaceholder(): string;
}
export declare function dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences): any;
export declare class DataAwsccQuicksightDashboardSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    get arn(): string;
    get dataSetReferences(): any;
}
export declare function dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntitySourceTemplate): any;
export declare class DataAwsccQuicksightDashboardSourceEntity extends cdktf.ComplexComputedList {
    get sourceTemplate(): any;
}
export declare function dataAwsccQuicksightDashboardSourceEntityToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntity): any;
export declare class DataAwsccQuicksightDashboardTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightDashboardTagsToTerraform(struct?: DataAwsccQuicksightDashboardTags): any;
export declare class DataAwsccQuicksightDashboardVersionErrors extends cdktf.ComplexComputedList {
    get message(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDashboardVersionErrorsToTerraform(struct?: DataAwsccQuicksightDashboardVersionErrors): any;
export declare class DataAwsccQuicksightDashboardVersionSheets extends cdktf.ComplexComputedList {
    get name(): string;
    get sheetId(): string;
}
export declare function dataAwsccQuicksightDashboardVersionSheetsToTerraform(struct?: DataAwsccQuicksightDashboardVersionSheets): any;
export declare class DataAwsccQuicksightDashboardVersion extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get dataSetArns(): string[];
    get description(): string;
    get errors(): any;
    get sheets(): any;
    get sourceEntityArn(): string;
    get status(): string;
    get themeArn(): string;
    get versionNumber(): number;
}
export declare function dataAwsccQuicksightDashboardVersionToTerraform(struct?: DataAwsccQuicksightDashboardVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
export declare class DataAwsccQuicksightDashboard extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html awscc_quicksight_dashboard} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightDashboardConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightDashboardConfig);
    get arn(): string;
    get awsAccountId(): string;
    get createdTime(): string;
    get dashboardId(): string;
    get dashboardPublishOptions(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastPublishedTime(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get parameters(): any;
    get permissions(): any;
    get sourceEntity(): any;
    get tags(): any;
    get themeArn(): string;
    get version(): any;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
