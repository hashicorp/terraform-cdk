import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of Addon
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#addon_name EksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Version of Addon
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#addon_version EksAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Name of Cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#cluster_name EksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Resolve parameter value conflicts
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#resolve_conflicts EksAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * IAM role to bind to the add-on's service account
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#service_account_role_arn EksAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#tags EksAddon#tags}
    */
    readonly tags?: EksAddonTags[];
}
export interface EksAddonTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#key EksAddon#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#value EksAddon#value}
    */
    readonly value: string;
}
export declare function eksAddonTagsToTerraform(struct?: EksAddonTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html awscc_eks_addon}
*/
export declare class EksAddon extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html awscc_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    constructor(scope: Construct, id: string, config: EksAddonConfig);
    private _addonName;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string;
    private _addonVersion?;
    get addonVersion(): string;
    set addonVersion(value: string);
    resetAddonVersion(): void;
    get addonVersionInput(): string | undefined;
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get id(): string;
    private _resolveConflicts?;
    get resolveConflicts(): string;
    set resolveConflicts(value: string);
    resetResolveConflicts(): void;
    get resolveConflictsInput(): string | undefined;
    private _serviceAccountRoleArn?;
    get serviceAccountRoleArn(): string;
    set serviceAccountRoleArn(value: string);
    resetServiceAccountRoleArn(): void;
    get serviceAccountRoleArnInput(): string | undefined;
    private _tags?;
    get tags(): EksAddonTags[];
    set tags(value: EksAddonTags[]);
    resetTags(): void;
    get tagsInput(): EksAddonTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
