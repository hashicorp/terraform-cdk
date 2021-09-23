import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_conformance_pack.html#id DataAwsccConfigConformancePack#id}
    */
    readonly id: string;
}
export declare class DataAwsccConfigConformancePackConformancePackInputParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccConfigConformancePackConformancePackInputParametersToTerraform(struct?: DataAwsccConfigConformancePackConformancePackInputParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_conformance_pack.html awscc_config_conformance_pack}
*/
export declare class DataAwsccConfigConformancePack extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_conformance_pack.html awscc_config_conformance_pack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConfigConformancePackConfig);
    get conformancePackInputParameters(): any;
    get conformancePackName(): string;
    get deliveryS3Bucket(): string;
    get deliveryS3KeyPrefix(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get templateBody(): string;
    get templateS3Uri(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
