import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html#id DataAwsccQuicksightTemplate#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightTemplatePermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightTemplatePermissionsToTerraform(struct?: DataAwsccQuicksightTemplatePermissions): any;
export declare class DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences extends cdktf.ComplexComputedList {
    get dataSetArn(): string;
    get dataSetPlaceholder(): string;
}
export declare function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences): any;
export declare class DataAwsccQuicksightTemplateSourceEntitySourceAnalysis extends cdktf.ComplexComputedList {
    get arn(): string;
    get dataSetReferences(): any;
}
export declare function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceAnalysis): any;
export declare class DataAwsccQuicksightTemplateSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceTemplate): any;
export declare class DataAwsccQuicksightTemplateSourceEntity extends cdktf.ComplexComputedList {
    get sourceAnalysis(): any;
    get sourceTemplate(): any;
}
export declare function dataAwsccQuicksightTemplateSourceEntityToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntity): any;
export declare class DataAwsccQuicksightTemplateTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightTemplateTagsToTerraform(struct?: DataAwsccQuicksightTemplateTags): any;
export declare class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList): any;
export declare class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList extends cdktf.ComplexComputedList {
    get columnGroupColumnSchemaList(): any;
    get name(): string;
}
export declare function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList): any;
export declare class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList extends cdktf.ComplexComputedList {
    get dataType(): string;
    get geographicRole(): string;
    get name(): string;
}
export declare function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList): any;
export declare class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema extends cdktf.ComplexComputedList {
    get columnSchemaList(): any;
}
export declare function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any;
export declare class DataAwsccQuicksightTemplateVersionDataSetConfigurations extends cdktf.ComplexComputedList {
    get columnGroupSchemaList(): any;
    get dataSetSchema(): any;
    get placeholder(): string;
}
export declare function dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurations): any;
export declare class DataAwsccQuicksightTemplateVersionErrors extends cdktf.ComplexComputedList {
    get message(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightTemplateVersionErrorsToTerraform(struct?: DataAwsccQuicksightTemplateVersionErrors): any;
export declare class DataAwsccQuicksightTemplateVersionSheets extends cdktf.ComplexComputedList {
    get name(): string;
    get sheetId(): string;
}
export declare function dataAwsccQuicksightTemplateVersionSheetsToTerraform(struct?: DataAwsccQuicksightTemplateVersionSheets): any;
export declare class DataAwsccQuicksightTemplateVersion extends cdktf.ComplexComputedList {
    get createdTime(): string;
    get dataSetConfigurations(): any;
    get description(): string;
    get errors(): any;
    get sheets(): any;
    get sourceEntityArn(): string;
    get status(): string;
    get themeArn(): string;
    get versionNumber(): number;
}
export declare function dataAwsccQuicksightTemplateVersionToTerraform(struct?: DataAwsccQuicksightTemplateVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template}
*/
export declare class DataAwsccQuicksightTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightTemplateConfig);
    get arn(): string;
    get awsAccountId(): string;
    get createdTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get permissions(): any;
    get sourceEntity(): any;
    get tags(): any;
    get templateId(): string;
    get version(): any;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
