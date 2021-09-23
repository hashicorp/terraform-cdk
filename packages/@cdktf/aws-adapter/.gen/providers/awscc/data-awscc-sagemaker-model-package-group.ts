// https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html#id DataAwsccSagemakerModelPackageGroup#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerModelPackageGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerModelPackageGroupTagsToTerraform(struct?: DataAwsccSagemakerModelPackageGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html awscc_sagemaker_model_package_group}
*/
export class DataAwsccSagemakerModelPackageGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_model_package_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_package_group.html awscc_sagemaker_model_package_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelPackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelPackageGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // model_package_group_arn - computed: true, optional: false, required: false
  public get modelPackageGroupArn() {
    return this.getStringAttribute('model_package_group_arn');
  }

  // model_package_group_description - computed: true, optional: false, required: false
  public get modelPackageGroupDescription() {
    return this.getStringAttribute('model_package_group_description');
  }

  // model_package_group_name - computed: true, optional: false, required: false
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }

  // model_package_group_policy - computed: true, optional: false, required: false
  public get modelPackageGroupPolicy() {
    return this.getStringAttribute('model_package_group_policy');
  }

  // model_package_group_status - computed: true, optional: false, required: false
  public get modelPackageGroupStatus() {
    return this.getStringAttribute('model_package_group_status');
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
