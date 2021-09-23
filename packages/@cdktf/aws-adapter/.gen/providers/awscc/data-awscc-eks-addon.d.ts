import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html#id DataAwsccEksAddon#id}
    */
    readonly id: string;
}
export declare class DataAwsccEksAddonTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEksAddonTagsToTerraform(struct?: DataAwsccEksAddonTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html awscc_eks_addon}
*/
export declare class DataAwsccEksAddon extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html awscc_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEksAddonConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEksAddonConfig);
    get addonName(): string;
    get addonVersion(): string;
    get arn(): string;
    get clusterName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resolveConflicts(): string;
    get serviceAccountRoleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
