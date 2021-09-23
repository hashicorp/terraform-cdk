// https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccBackupBackupSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html#id DataAwsccBackupBackupSelection#id}
  */
  readonly id: string;
}
export class DataAwsccBackupBackupSelectionBackupSelectionListOfTags extends cdktf.ComplexComputedList {

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export function dataAwsccBackupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionListOfTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_key: cdktf.stringToTerraform(struct!.conditionKey),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    condition_value: cdktf.stringToTerraform(struct!.conditionValue),
  }
}

export class DataAwsccBackupBackupSelectionBackupSelection extends cdktf.ComplexComputedList {

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // list_of_tags - computed: true, optional: false, required: false
  public get listOfTags() {
    return this.interpolationForAttribute('list_of_tags') as any;
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // selection_name - computed: true, optional: false, required: false
  public get selectionName() {
    return this.getStringAttribute('selection_name');
  }
}

export function dataAwsccBackupBackupSelectionBackupSelectionToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
    list_of_tags: cdktf.listMapper(dataAwsccBackupBackupSelectionBackupSelectionListOfTagsToTerraform)(struct!.listOfTags),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    selection_name: cdktf.stringToTerraform(struct!.selectionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html awscc_backup_backup_selection}
*/
export class DataAwsccBackupBackupSelection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_selection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html awscc_backup_backup_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_selection',
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

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_selection - computed: true, optional: false, required: false
  public get backupSelection() {
    return this.interpolationForAttribute('backup_selection') as any;
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

  // selection_id - computed: true, optional: false, required: false
  public get selectionId() {
    return this.getStringAttribute('selection_id');
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
