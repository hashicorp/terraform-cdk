import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LookoutvisionProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Amazon Lookout for Vision project
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html#project_name LookoutvisionProject#project_name}
    */
    readonly projectName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html awscc_lookoutvision_project}
*/
export declare class LookoutvisionProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html awscc_lookoutvision_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LookoutvisionProjectConfig
    */
    constructor(scope: Construct, id: string, config: LookoutvisionProjectConfig);
    get arn(): string;
    get id(): string;
    private _projectName;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
