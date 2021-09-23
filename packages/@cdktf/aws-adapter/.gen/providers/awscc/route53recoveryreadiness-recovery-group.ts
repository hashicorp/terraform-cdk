// https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the cell Amazon Resource Names (ARNs) in the recovery group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#cells Route53RecoveryreadinessRecoveryGroup#cells}
  */
  readonly cells?: string[];
  /**
  * The name of the recovery group to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
  */
  readonly recoveryGroupName: string;
  /**
  * A collection of tags associated with a resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#tags Route53RecoveryreadinessRecoveryGroup#tags}
  */
  readonly tags?: Route53RecoveryreadinessRecoveryGroupTags[];
}
export interface Route53RecoveryreadinessRecoveryGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#key Route53RecoveryreadinessRecoveryGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#value Route53RecoveryreadinessRecoveryGroup#value}
  */
  readonly value: string[];
}

export function route53RecoveryreadinessRecoveryGroupTagsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group}
*/
export class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_recovery_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessRecoveryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_recovery_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cells = config.cells;
    this._recoveryGroupName = config.recoveryGroupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cells - computed: false, optional: true, required: false
  private _cells?: string[];
  public get cells() {
    return this.getListAttribute('cells');
  }
  public set cells(value: string[] ) {
    this._cells = value;
  }
  public resetCells() {
    this._cells = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellsInput() {
    return this._cells
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recovery_group_arn - computed: true, optional: false, required: false
  public get recoveryGroupArn() {
    return this.getStringAttribute('recovery_group_arn');
  }

  // recovery_group_name - computed: false, optional: false, required: true
  private _recoveryGroupName: string;
  public get recoveryGroupName() {
    return this.getStringAttribute('recovery_group_name');
  }
  public set recoveryGroupName(value: string) {
    this._recoveryGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryGroupNameInput() {
    return this._recoveryGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Route53RecoveryreadinessRecoveryGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53RecoveryreadinessRecoveryGroupTags[] ) {
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
      cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
      recovery_group_name: cdktf.stringToTerraform(this._recoveryGroupName),
      tags: cdktf.listMapper(route53RecoveryreadinessRecoveryGroupTagsToTerraform)(this._tags),
    };
  }
}
