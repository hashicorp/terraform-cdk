// https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function eksFargateProfileSelectorsLabelsToTerraform(struct?: EksFargateProfileSelectorsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function eksFargateProfileSelectorsToTerraform(struct?: EksFargateProfileSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.listMapper(eksFargateProfileSelectorsLabelsToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

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

export function eksFargateProfileTagsToTerraform(struct?: EksFargateProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html awscc_eks_fargate_profile}
*/
export class EksFargateProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_eks_fargate_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eks_fargate_profile.html awscc_eks_fargate_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksFargateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eks_fargate_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._fargateProfileName = config.fargateProfileName;
    this._podExecutionRoleArn = config.podExecutionRoleArn;
    this._selectors = config.selectors;
    this._subnets = config.subnets;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // fargate_profile_name - computed: true, optional: true, required: false
  private _fargateProfileName?: string;
  public get fargateProfileName() {
    return this.getStringAttribute('fargate_profile_name');
  }
  public set fargateProfileName(value: string) {
    this._fargateProfileName = value;
  }
  public resetFargateProfileName() {
    this._fargateProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fargateProfileNameInput() {
    return this._fargateProfileName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pod_execution_role_arn - computed: false, optional: false, required: true
  private _podExecutionRoleArn: string;
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleArnInput() {
    return this._podExecutionRoleArn
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors: EksFargateProfileSelectors[];
  public get selectors() {
    return this.interpolationForAttribute('selectors') as any;
  }
  public set selectors(value: EksFargateProfileSelectors[]) {
    this._selectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[];
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EksFargateProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EksFargateProfileTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
      pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
      selectors: cdktf.listMapper(eksFargateProfileSelectorsToTerraform)(this._selectors),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
      tags: cdktf.listMapper(eksFargateProfileTagsToTerraform)(this._tags),
    };
  }
}
