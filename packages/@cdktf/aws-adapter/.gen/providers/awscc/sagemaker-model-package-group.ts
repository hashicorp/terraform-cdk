// https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function sagemakerModelPackageGroupTagsToTerraform(struct?: SagemakerModelPackageGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html awscc_sagemaker_model_package_group}
*/
export class SagemakerModelPackageGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_model_package_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_package_group.html awscc_sagemaker_model_package_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelPackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_package_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._modelPackageGroupDescription = config.modelPackageGroupDescription;
    this._modelPackageGroupName = config.modelPackageGroupName;
    this._modelPackageGroupPolicy = config.modelPackageGroupPolicy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_package_group_arn - computed: true, optional: false, required: false
  public get modelPackageGroupArn() {
    return this.getStringAttribute('model_package_group_arn');
  }

  // model_package_group_description - computed: true, optional: true, required: false
  private _modelPackageGroupDescription?: string;
  public get modelPackageGroupDescription() {
    return this.getStringAttribute('model_package_group_description');
  }
  public set modelPackageGroupDescription(value: string) {
    this._modelPackageGroupDescription = value;
  }
  public resetModelPackageGroupDescription() {
    this._modelPackageGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupDescriptionInput() {
    return this._modelPackageGroupDescription
  }

  // model_package_group_name - computed: false, optional: false, required: true
  private _modelPackageGroupName: string;
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName
  }

  // model_package_group_policy - computed: false, optional: true, required: false
  private _modelPackageGroupPolicy?: string;
  public get modelPackageGroupPolicy() {
    return this.getStringAttribute('model_package_group_policy');
  }
  public set modelPackageGroupPolicy(value: string ) {
    this._modelPackageGroupPolicy = value;
  }
  public resetModelPackageGroupPolicy() {
    this._modelPackageGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupPolicyInput() {
    return this._modelPackageGroupPolicy
  }

  // model_package_group_status - computed: true, optional: false, required: false
  public get modelPackageGroupStatus() {
    return this.getStringAttribute('model_package_group_status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerModelPackageGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerModelPackageGroupTags[] ) {
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
      model_package_group_description: cdktf.stringToTerraform(this._modelPackageGroupDescription),
      model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
      model_package_group_policy: cdktf.stringToTerraform(this._modelPackageGroupPolicy),
      tags: cdktf.listMapper(sagemakerModelPackageGroupTagsToTerraform)(this._tags),
    };
  }
}
