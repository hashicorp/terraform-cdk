import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNimblestudioStudiosConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studios.html awscc_nimblestudio_studios}
*/
export declare class DataAwsccNimblestudioStudios extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studios.html awscc_nimblestudio_studios} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNimblestudioStudiosConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccNimblestudioStudiosConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
