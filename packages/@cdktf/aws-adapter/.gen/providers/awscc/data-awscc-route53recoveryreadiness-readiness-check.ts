// https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html#id DataAwsccRoute53RecoveryreadinessReadinessCheck#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53RecoveryreadinessReadinessCheckTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export function dataAwsccRoute53RecoveryreadinessReadinessCheckTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessReadinessCheckTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check}
*/
export class DataAwsccRoute53RecoveryreadinessReadinessCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_readiness_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoveryreadinessReadinessCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessReadinessCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_readiness_check',
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

  // readiness_check_arn - computed: true, optional: false, required: false
  public get readinessCheckArn() {
    return this.getStringAttribute('readiness_check_arn');
  }

  // readiness_check_name - computed: true, optional: false, required: false
  public get readinessCheckName() {
    return this.getStringAttribute('readiness_check_name');
  }

  // resource_set_name - computed: true, optional: false, required: false
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
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
