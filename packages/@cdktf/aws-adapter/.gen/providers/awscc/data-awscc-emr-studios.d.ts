import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrStudiosConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emr_studios.html awscc_emr_studios}
*/
export declare class DataAwsccEmrStudios extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emr_studios.html awscc_emr_studios} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrStudiosConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEmrStudiosConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
