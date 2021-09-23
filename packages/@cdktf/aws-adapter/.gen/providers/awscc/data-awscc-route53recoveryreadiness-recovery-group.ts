// https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html#id DataAwsccRoute53RecoveryreadinessRecoveryGroup#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53RecoveryreadinessRecoveryGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export function dataAwsccRoute53RecoveryreadinessRecoveryGroupTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessRecoveryGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group}
*/
export class DataAwsccRoute53RecoveryreadinessRecoveryGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_recovery_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cells - computed: true, optional: false, required: false
  public get cells() {
    return this.getListAttribute('cells');
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

  // recovery_group_arn - computed: true, optional: false, required: false
  public get recoveryGroupArn() {
    return this.getStringAttribute('recovery_group_arn');
  }

  // recovery_group_name - computed: true, optional: false, required: false
  public get recoveryGroupName() {
    return this.getStringAttribute('recovery_group_name');
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
