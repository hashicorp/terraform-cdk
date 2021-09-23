import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackageOriginEndpointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoints.html awscc_mediapackage_origin_endpoints}
*/
export declare class DataAwsccMediapackageOriginEndpoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoints.html awscc_mediapackage_origin_endpoints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackageOriginEndpointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccMediapackageOriginEndpointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
