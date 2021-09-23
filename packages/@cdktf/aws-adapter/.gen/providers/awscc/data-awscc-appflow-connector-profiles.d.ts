import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAppflowConnectorProfilesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profiles.html awscc_appflow_connector_profiles}
*/
export declare class DataAwsccAppflowConnectorProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profiles.html awscc_appflow_connector_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAppflowConnectorProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccAppflowConnectorProfilesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
