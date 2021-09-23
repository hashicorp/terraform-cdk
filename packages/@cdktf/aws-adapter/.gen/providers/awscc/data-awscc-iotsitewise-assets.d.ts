import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseAssetsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_assets.html awscc_iotsitewise_assets}
*/
export declare class DataAwsccIotsitewiseAssets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_assets.html awscc_iotsitewise_assets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAssetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotsitewiseAssetsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
