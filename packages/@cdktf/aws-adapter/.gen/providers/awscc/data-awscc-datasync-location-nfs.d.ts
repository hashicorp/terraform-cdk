import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html#id DataAwsccDatasyncLocationNfs#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationNfsMountOptions extends cdktf.ComplexComputedList {
    get version(): string;
}
export declare function dataAwsccDatasyncLocationNfsMountOptionsToTerraform(struct?: DataAwsccDatasyncLocationNfsMountOptions): any;
export declare class DataAwsccDatasyncLocationNfsOnPremConfig extends cdktf.ComplexComputedList {
    get agentArns(): string[];
}
export declare function dataAwsccDatasyncLocationNfsOnPremConfigToTerraform(struct?: DataAwsccDatasyncLocationNfsOnPremConfig): any;
export declare class DataAwsccDatasyncLocationNfsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationNfsTagsToTerraform(struct?: DataAwsccDatasyncLocationNfsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html awscc_datasync_location_nfs}
*/
export declare class DataAwsccDatasyncLocationNfs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html awscc_datasync_location_nfs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationNfsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationNfsConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get mountOptions(): any;
    get onPremConfig(): any;
    get serverHostname(): string;
    get subdirectory(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
