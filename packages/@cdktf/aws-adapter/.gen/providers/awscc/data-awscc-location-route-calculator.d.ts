import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationRouteCalculatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_route_calculator.html#id DataAwsccLocationRouteCalculator#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_route_calculator.html awscc_location_route_calculator}
*/
export declare class DataAwsccLocationRouteCalculator extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_route_calculator.html awscc_location_route_calculator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationRouteCalculatorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationRouteCalculatorConfig);
    get arn(): string;
    get calculatorArn(): string;
    get calculatorName(): string;
    get createTime(): string;
    get dataSource(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get pricingPlan(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
