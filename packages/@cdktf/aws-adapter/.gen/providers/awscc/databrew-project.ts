// https://www.terraform.io/docs/providers/awscc/r/databrew_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabrewProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dataset name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#dataset_name DatabrewProject#dataset_name}
  */
  readonly datasetName: string;
  /**
  * Project name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#name DatabrewProject#name}
  */
  readonly name: string;
  /**
  * Recipe name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#recipe_name DatabrewProject#recipe_name}
  */
  readonly recipeName: string;
  /**
  * Role arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#role_arn DatabrewProject#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#sample DatabrewProject#sample}
  */
  readonly sample?: DatabrewProjectSample;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#tags DatabrewProject#tags}
  */
  readonly tags?: DatabrewProjectTags[];
}
export interface DatabrewProjectSample {
  /**
  * Sample size
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#size DatabrewProject#size}
  */
  readonly size?: number;
  /**
  * Sample type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#type DatabrewProject#type}
  */
  readonly type: string;
}

export function databrewProjectSampleToTerraform(struct?: DatabrewProjectSample): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DatabrewProjectTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#key DatabrewProject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#value DatabrewProject#value}
  */
  readonly value: string;
}

export function databrewProjectTagsToTerraform(struct?: DatabrewProjectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html awscc_databrew_project}
*/
export class DatabrewProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html awscc_databrew_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_project',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetName = config.datasetName;
    this._name = config.name;
    this._recipeName = config.recipeName;
    this._roleArn = config.roleArn;
    this._sample = config.sample;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_name - computed: false, optional: false, required: true
  private _datasetName: string;
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // recipe_name - computed: false, optional: false, required: true
  private _recipeName: string;
  public get recipeName() {
    return this.getStringAttribute('recipe_name');
  }
  public set recipeName(value: string) {
    this._recipeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeNameInput() {
    return this._recipeName
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // sample - computed: false, optional: true, required: false
  private _sample?: DatabrewProjectSample;
  public get sample() {
    return this.interpolationForAttribute('sample') as any;
  }
  public set sample(value: DatabrewProjectSample ) {
    this._sample = value;
  }
  public resetSample() {
    this._sample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: DatabrewProjectTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatabrewProjectTags[]) {
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
      dataset_name: cdktf.stringToTerraform(this._datasetName),
      name: cdktf.stringToTerraform(this._name),
      recipe_name: cdktf.stringToTerraform(this._recipeName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      sample: databrewProjectSampleToTerraform(this._sample),
      tags: cdktf.listMapper(databrewProjectTagsToTerraform)(this._tags),
    };
  }
}
