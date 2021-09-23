import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGreengrassv2ComponentVersionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_versions.html awscc_greengrassv2_component_versions}
*/
export declare class DataAwsccGreengrassv2ComponentVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_versions.html awscc_greengrassv2_component_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGreengrassv2ComponentVersionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccGreengrassv2ComponentVersionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
