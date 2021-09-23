import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorDetectorsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detectors.html awscc_frauddetector_detectors}
*/
export declare class DataAwsccFrauddetectorDetectors extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detectors.html awscc_frauddetector_detectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorDetectorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccFrauddetectorDetectorsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
