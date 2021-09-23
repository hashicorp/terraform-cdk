import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseAssetModelsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_models.html awscc_iotsitewise_asset_models}
*/
export declare class DataAwsccIotsitewiseAssetModels extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_models.html awscc_iotsitewise_asset_models} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAssetModelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotsitewiseAssetModelsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
