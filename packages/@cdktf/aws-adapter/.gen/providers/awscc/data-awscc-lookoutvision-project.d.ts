import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutvisionProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lookoutvision_project.html#id DataAwsccLookoutvisionProject#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutvision_project.html awscc_lookoutvision_project}
*/
export declare class DataAwsccLookoutvisionProject extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutvision_project.html awscc_lookoutvision_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutvisionProjectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLookoutvisionProjectConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get projectName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
