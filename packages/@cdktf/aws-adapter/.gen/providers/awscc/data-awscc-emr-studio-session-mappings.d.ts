import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrStudioSessionMappingsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mappings.html awscc_emr_studio_session_mappings}
*/
export declare class DataAwsccEmrStudioSessionMappings extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mappings.html awscc_emr_studio_session_mappings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrStudioSessionMappingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEmrStudioSessionMappingsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
