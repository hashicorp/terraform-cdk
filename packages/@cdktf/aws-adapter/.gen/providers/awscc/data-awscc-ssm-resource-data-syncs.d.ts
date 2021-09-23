import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmResourceDataSyncsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_syncs.html awscc_ssm_resource_data_syncs}
*/
export declare class DataAwsccSsmResourceDataSyncs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_syncs.html awscc_ssm_resource_data_syncs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmResourceDataSyncsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccSsmResourceDataSyncsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
