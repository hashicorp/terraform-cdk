import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_project.html#id DataAwsccIotsitewiseProject#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseProjectTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewiseProjectTagsToTerraform(struct?: DataAwsccIotsitewiseProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_project.html awscc_iotsitewise_project}
*/
export declare class DataAwsccIotsitewiseProject extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_project.html awscc_iotsitewise_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseProjectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseProjectConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get portalId(): string;
    get projectArn(): string;
    get projectDescription(): string;
    get projectId(): string;
    get projectName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
