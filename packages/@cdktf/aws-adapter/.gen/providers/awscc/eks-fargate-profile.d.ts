import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of the Cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Name of FargateProfile
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}
    */
    readonly fargateProfileName?: string;
    /**
    * The IAM policy arn for pods
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
    */
    readonly podExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#selectors EksFargateProfile#selectors}
    */
    readonly selectors: EksFargateProfileSelectors[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#subnets EksFargateProfile#subnets}
    */
    readonly subnets?: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#tags EksFargateProfile#tags}
    */
    readonly tags?: EksFargateProfileTags[];
}
export interface EksFargateProfileSelectorsLabels {
    /**
    * The key name of the label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#key EksFargateProfile#key}
    */
    readonly key: string;
    /**
    * The value for the label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#value EksFargateProfile#value}
    */
    readonly value: string;
}
export declare function eksFargateProfileSelectorsLabelsToTerraform(struct?: EksFargateProfileSelectorsLabels): any;
export interface EksFargateProfileSelectors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#labels EksFargateProfile#labels}
    */
    readonly labels?: EksFargateProfileSelectorsLabels[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}
    */
    readonly namespace: string;
}
export declare function eksFargateProfileSelectorsToTerraform(struct?: EksFargateProfileSelectors): any;
export interface EksFargateProfileTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#key EksFargateProfile#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html#value EksFargateProfile#value}
    */
    readonly value: string;
}
export declare function eksFargateProfileTagsToTerraform(struct?: EksFargateProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html awscc_eks_fargate_profile}
*/
export declare class EksFargateProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html awscc_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    constructor(scope: Construct, id: string, config: EksFargateProfileConfig);
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _fargateProfileName?;
    get fargateProfileName(): string;
    set fargateProfileName(value: string);
    resetFargateProfileName(): void;
    get fargateProfileNameInput(): string | undefined;
    get id(): string;
    private _podExecutionRoleArn;
    get podExecutionRoleArn(): string;
    set podExecutionRoleArn(value: string);
    get podExecutionRoleArnInput(): string;
    private _selectors;
    get selectors(): EksFargateProfileSelectors[];
    set selectors(value: EksFargateProfileSelectors[]);
    get selectorsInput(): EksFargateProfileSelectors[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
    private _tags?;
    get tags(): EksFargateProfileTags[];
    set tags(value: EksFargateProfileTags[]);
    resetTags(): void;
    get tagsInput(): EksFargateProfileTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
