import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html#id DataAwsccSagemakerModelPackageGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerModelPackageGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerModelPackageGroupTagsToTerraform(struct?: DataAwsccSagemakerModelPackageGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html awscc_sagemaker_model_package_group}
*/
export declare class DataAwsccSagemakerModelPackageGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html awscc_sagemaker_model_package_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelPackageGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelPackageGroupConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get modelPackageGroupArn(): string;
    get modelPackageGroupDescription(): string;
    get modelPackageGroupName(): string;
    get modelPackageGroupPolicy(): string;
    get modelPackageGroupStatus(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
