import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html#id DataAwsccQuicksightAnalysis#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightAnalysisErrors extends cdktf.ComplexComputedList {
    get message(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightAnalysisErrorsToTerraform(struct?: DataAwsccQuicksightAnalysisErrors): any;
export declare class DataAwsccQuicksightAnalysisParametersDateTimeParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersDateTimeParameters): any;
export declare class DataAwsccQuicksightAnalysisParametersDecimalParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): any;
}
export declare function dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersDecimalParameters): any;
export declare class DataAwsccQuicksightAnalysisParametersIntegerParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): any;
}
export declare function dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersIntegerParameters): any;
export declare class DataAwsccQuicksightAnalysisParametersStringParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccQuicksightAnalysisParametersStringParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersStringParameters): any;
export declare class DataAwsccQuicksightAnalysisParameters extends cdktf.ComplexComputedList {
    get dateTimeParameters(): any;
    get decimalParameters(): any;
    get integerParameters(): any;
    get stringParameters(): any;
}
export declare function dataAwsccQuicksightAnalysisParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParameters): any;
export declare class DataAwsccQuicksightAnalysisPermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightAnalysisPermissionsToTerraform(struct?: DataAwsccQuicksightAnalysisPermissions): any;
export declare class DataAwsccQuicksightAnalysisSheets extends cdktf.ComplexComputedList {
    get name(): string;
    get sheetId(): string;
}
export declare function dataAwsccQuicksightAnalysisSheetsToTerraform(struct?: DataAwsccQuicksightAnalysisSheets): any;
export declare class DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {
    get dataSetArn(): string;
    get dataSetPlaceholder(): string;
}
export declare function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences): any;
export declare class DataAwsccQuicksightAnalysisSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    get arn(): string;
    get dataSetReferences(): any;
}
export declare function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntitySourceTemplate): any;
export declare class DataAwsccQuicksightAnalysisSourceEntity extends cdktf.ComplexComputedList {
    get sourceTemplate(): any;
}
export declare function dataAwsccQuicksightAnalysisSourceEntityToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntity): any;
export declare class DataAwsccQuicksightAnalysisTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightAnalysisTagsToTerraform(struct?: DataAwsccQuicksightAnalysisTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html awscc_quicksight_analysis}
*/
export declare class DataAwsccQuicksightAnalysis extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html awscc_quicksight_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightAnalysisConfig);
    get analysisId(): string;
    get arn(): string;
    get awsAccountId(): string;
    get createdTime(): string;
    get dataSetArns(): string[];
    get errors(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get parameters(): any;
    get permissions(): any;
    get sheets(): any;
    get sourceEntity(): any;
    get status(): string;
    get tags(): any;
    get themeArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
