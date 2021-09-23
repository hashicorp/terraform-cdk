import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsDbProxyEndpointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_endpoints.html awscc_rds_db_proxy_endpoints}
*/
export declare class DataAwsccRdsDbProxyEndpoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_endpoints.html awscc_rds_db_proxy_endpoints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsDbProxyEndpointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRdsDbProxyEndpointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
