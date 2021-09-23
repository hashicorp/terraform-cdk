import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio.html#id DataAwsccEmrStudio#id}
    */
    readonly id: string;
}
export declare class DataAwsccEmrStudioTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEmrStudioTagsToTerraform(struct?: DataAwsccEmrStudioTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio.html awscc_emr_studio}
*/
export declare class DataAwsccEmrStudio extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio.html awscc_emr_studio} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrStudioConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEmrStudioConfig);
    get arn(): string;
    get authMode(): string;
    get defaultS3Location(): string;
    get description(): string;
    get engineSecurityGroupId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get serviceRole(): string;
    get studioId(): string;
    get subnetIds(): string[];
    get tags(): any;
    get url(): string;
    get userRole(): string;
    get vpcId(): string;
    get workspaceSecurityGroupId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
