import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the model package group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}
    */
    readonly modelPackageGroupDescription?: string;
    /**
    * The name of the model package group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#model_package_group_policy SagemakerModelPackageGroup#model_package_group_policy}
    */
    readonly modelPackageGroupPolicy?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#tags SagemakerModelPackageGroup#tags}
    */
    readonly tags?: SagemakerModelPackageGroupTags[];
}
export interface SagemakerModelPackageGroupTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#key SagemakerModelPackageGroup#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html#value SagemakerModelPackageGroup#value}
    */
    readonly value: string;
}
export declare function sagemakerModelPackageGroupTagsToTerraform(struct?: SagemakerModelPackageGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html awscc_sagemaker_model_package_group}
*/
export declare class SagemakerModelPackageGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html awscc_sagemaker_model_package_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig);
    get creationTime(): string;
    get id(): string;
    get modelPackageGroupArn(): string;
    private _modelPackageGroupDescription?;
    get modelPackageGroupDescription(): string;
    set modelPackageGroupDescription(value: string);
    resetModelPackageGroupDescription(): void;
    get modelPackageGroupDescriptionInput(): string | undefined;
    private _modelPackageGroupName;
    get modelPackageGroupName(): string;
    set modelPackageGroupName(value: string);
    get modelPackageGroupNameInput(): string;
    private _modelPackageGroupPolicy?;
    get modelPackageGroupPolicy(): string;
    set modelPackageGroupPolicy(value: string);
    resetModelPackageGroupPolicy(): void;
    get modelPackageGroupPolicyInput(): string | undefined;
    get modelPackageGroupStatus(): string;
    private _tags?;
    get tags(): SagemakerModelPackageGroupTags[];
    set tags(value: SagemakerModelPackageGroupTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerModelPackageGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
