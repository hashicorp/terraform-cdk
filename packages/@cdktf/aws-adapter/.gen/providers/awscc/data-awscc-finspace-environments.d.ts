import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFinspaceEnvironmentsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environments.html awscc_finspace_environments}
*/
export declare class DataAwsccFinspaceEnvironments extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environments.html awscc_finspace_environments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFinspaceEnvironmentsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccFinspaceEnvironmentsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
