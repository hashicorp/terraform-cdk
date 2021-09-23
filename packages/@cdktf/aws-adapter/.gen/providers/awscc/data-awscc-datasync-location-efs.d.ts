import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html#id DataAwsccDatasyncLocationEfs#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationEfsEc2Config extends cdktf.ComplexComputedList {
    get securityGroupArns(): string[];
    get subnetArn(): string;
}
export declare function dataAwsccDatasyncLocationEfsEc2ConfigToTerraform(struct?: DataAwsccDatasyncLocationEfsEc2Config): any;
export declare class DataAwsccDatasyncLocationEfsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationEfsTagsToTerraform(struct?: DataAwsccDatasyncLocationEfsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html awscc_datasync_location_efs}
*/
export declare class DataAwsccDatasyncLocationEfs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html awscc_datasync_location_efs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationEfsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationEfsConfig);
    get ec2Config(): any;
    get efsFilesystemArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get subdirectory(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
