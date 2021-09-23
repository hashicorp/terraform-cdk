import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewDatasetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html#id DataAwsccDatabrewDataset#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatabrewDatasetFormatOptionsCsv extends cdktf.ComplexComputedList {
    get delimiter(): string;
    get headerRow(): any;
}
export declare function dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsCsv): any;
export declare class DataAwsccDatabrewDatasetFormatOptionsExcel extends cdktf.ComplexComputedList {
    get headerRow(): any;
    get sheetIndexes(): any;
    get sheetNames(): string[];
}
export declare function dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsExcel): any;
export declare class DataAwsccDatabrewDatasetFormatOptionsJson extends cdktf.ComplexComputedList {
    get multiLine(): any;
}
export declare function dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsJson): any;
export declare class DataAwsccDatabrewDatasetFormatOptions extends cdktf.ComplexComputedList {
    get csv(): any;
    get excel(): any;
    get json(): any;
}
export declare function dataAwsccDatabrewDatasetFormatOptionsToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptions): any;
export declare class DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any;
export declare class DataAwsccDatabrewDatasetInputDataCatalogInputDefinition extends cdktf.ComplexComputedList {
    get catalogId(): string;
    get databaseName(): string;
    get tableName(): string;
    get tempDirectory(): any;
}
export declare function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinition): any;
export declare class DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any;
export declare class DataAwsccDatabrewDatasetInputDatabaseInputDefinition extends cdktf.ComplexComputedList {
    get databaseTableName(): string;
    get glueConnectionName(): string;
    get tempDirectory(): any;
}
export declare function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinition): any;
export declare class DataAwsccDatabrewDatasetInputS3InputDefinition extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputS3InputDefinition): any;
export declare class DataAwsccDatabrewDatasetInput extends cdktf.ComplexComputedList {
    get dataCatalogInputDefinition(): any;
    get databaseInputDefinition(): any;
    get s3InputDefinition(): any;
}
export declare function dataAwsccDatabrewDatasetInputToTerraform(struct?: DataAwsccDatabrewDatasetInput): any;
export declare class DataAwsccDatabrewDatasetPathOptionsFilesLimit extends cdktf.ComplexComputedList {
    get maxFiles(): number;
    get order(): string;
    get orderedBy(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsFilesLimit): any;
export declare class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap extends cdktf.ComplexComputedList {
    get value(): string;
    get valueReference(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any;
export declare class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition extends cdktf.ComplexComputedList {
    get expression(): string;
    get valuesMap(): any;
}
export declare function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition): any;
export declare class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions extends cdktf.ComplexComputedList {
    get format(): string;
    get localeCode(): string;
    get timezoneOffset(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any;
export declare class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap extends cdktf.ComplexComputedList {
    get value(): string;
    get valueReference(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any;
export declare class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter extends cdktf.ComplexComputedList {
    get expression(): string;
    get valuesMap(): any;
}
export declare function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter): any;
export declare class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter extends cdktf.ComplexComputedList {
    get createColumn(): any;
    get datetimeOptions(): any;
    get filter(): any;
    get name(): string;
    get type(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter): any;
export declare class DataAwsccDatabrewDatasetPathOptionsParameters extends cdktf.ComplexComputedList {
    get datasetParameter(): any;
    get pathParameterName(): string;
}
export declare function dataAwsccDatabrewDatasetPathOptionsParametersToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParameters): any;
export declare class DataAwsccDatabrewDatasetPathOptions extends cdktf.ComplexComputedList {
    get filesLimit(): any;
    get lastModifiedDateCondition(): any;
    get parameters(): any;
}
export declare function dataAwsccDatabrewDatasetPathOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptions): any;
export declare class DataAwsccDatabrewDatasetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatabrewDatasetTagsToTerraform(struct?: DataAwsccDatabrewDatasetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html awscc_databrew_dataset}
*/
export declare class DataAwsccDatabrewDataset extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html awscc_databrew_dataset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewDatasetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatabrewDatasetConfig);
    get format(): string;
    get formatOptions(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get input(): any;
    get name(): string;
    get pathOptions(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
