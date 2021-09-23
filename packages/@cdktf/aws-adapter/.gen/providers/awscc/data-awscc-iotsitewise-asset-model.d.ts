import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseAssetModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html#id DataAwsccIotsitewiseAssetModel#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {
    get defaultValue(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {
    get hierarchyLogicalId(): string;
    get propertyLogicalId(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {
    get interval(): string;
    get offset(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {
    get tumbling(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric extends cdktf.ComplexComputedList {
    get expression(): string;
    get variables(): any;
    get window(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {
    get hierarchyLogicalId(): string;
    get propertyLogicalId(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform extends cdktf.ComplexComputedList {
    get expression(): string;
    get variables(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType extends cdktf.ComplexComputedList {
    get attribute(): any;
    get metric(): any;
    get transform(): any;
    get typeName(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties extends cdktf.ComplexComputedList {
    get dataType(): string;
    get dataTypeSpec(): string;
    get logicalId(): string;
    get name(): string;
    get type(): any;
    get unit(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelCompositeModels extends cdktf.ComplexComputedList {
    get compositeModelProperties(): any;
    get description(): string;
    get name(): string;
    get type(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelHierarchies extends cdktf.ComplexComputedList {
    get childAssetModelId(): string;
    get logicalId(): string;
    get name(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelHierarchies): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {
    get defaultValue(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {
    get hierarchyLogicalId(): string;
    get propertyLogicalId(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {
    get interval(): string;
    get offset(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {
    get tumbling(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric extends cdktf.ComplexComputedList {
    get expression(): string;
    get variables(): any;
    get window(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {
    get hierarchyLogicalId(): string;
    get propertyLogicalId(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform extends cdktf.ComplexComputedList {
    get expression(): string;
    get variables(): any;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelPropertiesType extends cdktf.ComplexComputedList {
    get attribute(): any;
    get metric(): any;
    get transform(): any;
    get typeName(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType): any;
export declare class DataAwsccIotsitewiseAssetModelAssetModelProperties extends cdktf.ComplexComputedList {
    get dataType(): string;
    get dataTypeSpec(): string;
    get logicalId(): string;
    get name(): string;
    get type(): any;
    get unit(): string;
}
export declare function dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelProperties): any;
export declare class DataAwsccIotsitewiseAssetModelTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewiseAssetModelTagsToTerraform(struct?: DataAwsccIotsitewiseAssetModelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html awscc_iotsitewise_asset_model}
*/
export declare class DataAwsccIotsitewiseAssetModel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html awscc_iotsitewise_asset_model} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAssetModelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetModelConfig);
    get assetModelArn(): string;
    get assetModelCompositeModels(): any;
    get assetModelDescription(): string;
    get assetModelHierarchies(): any;
    get assetModelId(): string;
    get assetModelName(): string;
    get assetModelProperties(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
