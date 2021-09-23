// https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cell to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#cell_name Route53RecoveryreadinessCell#cell_name}
  */
  readonly cellName: string;
  /**
  * A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#cells Route53RecoveryreadinessCell#cells}
  */
  readonly cells?: string[];
  /**
  * A collection of tags associated with a resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#tags Route53RecoveryreadinessCell#tags}
  */
  readonly tags?: Route53RecoveryreadinessCellTags[];
}
export interface Route53RecoveryreadinessCellTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#key Route53RecoveryreadinessCell#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#value Route53RecoveryreadinessCell#value}
  */
  readonly value: string[];
}

export function route53RecoveryreadinessCellTagsToTerraform(struct?: Route53RecoveryreadinessCellTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell}
*/
export class Route53RecoveryreadinessCell extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_cell";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessCellConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_cell',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cellName = config.cellName;
    this._cells = config.cells;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cell_arn - computed: true, optional: false, required: false
  public get cellArn() {
    return this.getStringAttribute('cell_arn');
  }

  // cell_name - computed: false, optional: false, required: true
  private _cellName: string;
  public get cellName() {
    return this.getStringAttribute('cell_name');
  }
  public set cellName(value: string) {
    this._cellName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cellNameInput() {
    return this._cellName
  }

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

  // parent_readiness_scopes - computed: true, optional: false, required: false
  public get parentReadinessScopes() {
    return this.getListAttribute('parent_readiness_scopes');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Route53RecoveryreadinessCellTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53RecoveryreadinessCellTags[] ) {
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
      cell_name: cdktf.stringToTerraform(this._cellName),
      cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
      tags: cdktf.listMapper(route53RecoveryreadinessCellTagsToTerraform)(this._tags),
    };
  }
}
