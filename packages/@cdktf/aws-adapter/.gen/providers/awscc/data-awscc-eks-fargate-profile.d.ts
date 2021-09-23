import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html#id DataAwsccEksFargateProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccEksFargateProfileSelectorsLabels extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEksFargateProfileSelectorsLabelsToTerraform(struct?: DataAwsccEksFargateProfileSelectorsLabels): any;
export declare class DataAwsccEksFargateProfileSelectors extends cdktf.ComplexComputedList {
    get labels(): any;
    get namespace(): string;
}
export declare function dataAwsccEksFargateProfileSelectorsToTerraform(struct?: DataAwsccEksFargateProfileSelectors): any;
export declare class DataAwsccEksFargateProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEksFargateProfileTagsToTerraform(struct?: DataAwsccEksFargateProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html awscc_eks_fargate_profile}
*/
export declare class DataAwsccEksFargateProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html awscc_eks_fargate_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEksFargateProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEksFargateProfileConfig);
    get arn(): string;
    get clusterName(): string;
    get fargateProfileName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get podExecutionRoleArn(): string;
    get selectors(): any;
    get subnets(): string[];
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
