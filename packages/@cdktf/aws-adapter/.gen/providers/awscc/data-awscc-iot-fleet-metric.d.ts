import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotFleetMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_fleet_metric.html#id DataAwsccIotFleetMetric#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotFleetMetricAggregationType extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccIotFleetMetricAggregationTypeToTerraform(struct?: DataAwsccIotFleetMetricAggregationType): any;
export declare class DataAwsccIotFleetMetricTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotFleetMetricTagsToTerraform(struct?: DataAwsccIotFleetMetricTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_fleet_metric.html awscc_iot_fleet_metric}
*/
export declare class DataAwsccIotFleetMetric extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_fleet_metric.html awscc_iot_fleet_metric} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotFleetMetricConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotFleetMetricConfig);
    get aggregationField(): string;
    get aggregationType(): any;
    get creationDate(): number;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get indexName(): string;
    get lastModifiedDate(): number;
    get metricArn(): string;
    get metricName(): string;
    get period(): number;
    get queryString(): string;
    get queryVersion(): string;
    get tags(): any;
    get unit(): string;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
