import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationRouteCalculatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#calculator_name LocationRouteCalculator#calculator_name}
    */
    readonly calculatorName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#data_source LocationRouteCalculator#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#description LocationRouteCalculator#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#pricing_plan LocationRouteCalculator#pricing_plan}
    */
    readonly pricingPlan: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html awscc_location_route_calculator}
*/
export declare class LocationRouteCalculator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html awscc_location_route_calculator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationRouteCalculatorConfig
    */
    constructor(scope: Construct, id: string, config: LocationRouteCalculatorConfig);
    get arn(): string;
    get calculatorArn(): string;
    private _calculatorName;
    get calculatorName(): string;
    set calculatorName(value: string);
    get calculatorNameInput(): string;
    get createTime(): string;
    private _dataSource;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _pricingPlan;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    get pricingPlanInput(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
