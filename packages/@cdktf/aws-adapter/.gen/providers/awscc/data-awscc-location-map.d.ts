import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationMapConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html#id DataAwsccLocationMap#id}
    */
    readonly id: string;
}
export declare class DataAwsccLocationMapConfiguration extends cdktf.ComplexComputedList {
    get style(): string;
}
export declare function dataAwsccLocationMapConfigurationToTerraform(struct?: DataAwsccLocationMapConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html awscc_location_map}
*/
export declare class DataAwsccLocationMap extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html awscc_location_map} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationMapConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationMapConfig);
    get arn(): string;
    get configuration(): any;
    get createTime(): string;
    get dataSource(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get mapArn(): string;
    get mapName(): string;
    get pricingPlan(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
