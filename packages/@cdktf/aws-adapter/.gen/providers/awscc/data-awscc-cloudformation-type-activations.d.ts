import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationTypeActivationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activations.html awscc_cloudformation_type_activations}
*/
export declare class DataAwsccCloudformationTypeActivations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activations.html awscc_cloudformation_type_activations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationTypeActivationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudformationTypeActivationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
