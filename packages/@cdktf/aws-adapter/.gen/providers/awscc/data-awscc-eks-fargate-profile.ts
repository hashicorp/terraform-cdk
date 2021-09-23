// https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEksFargateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html#id DataAwsccEksFargateProfile#id}
  */
  readonly id: string;
}
export class DataAwsccEksFargateProfileSelectorsLabels extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEksFargateProfileSelectorsLabelsToTerraform(struct?: DataAwsccEksFargateProfileSelectorsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEksFargateProfileSelectors extends cdktf.ComplexComputedList {

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export function dataAwsccEksFargateProfileSelectorsToTerraform(struct?: DataAwsccEksFargateProfileSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.listMapper(dataAwsccEksFargateProfileSelectorsLabelsToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataAwsccEksFargateProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEksFargateProfileTagsToTerraform(struct?: DataAwsccEksFargateProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html awscc_eks_fargate_profile}
*/
export class DataAwsccEksFargateProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_eks_fargate_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/eks_fargate_profile.html awscc_eks_fargate_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEksFargateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEksFargateProfileConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // fargate_profile_name - computed: true, optional: false, required: false
  public get fargateProfileName() {
    return this.getStringAttribute('fargate_profile_name');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // pod_execution_role_arn - computed: true, optional: false, required: false
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }

  // selectors - computed: true, optional: false, required: false
  public get selectors() {
    return this.interpolationForAttribute('selectors') as any;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
