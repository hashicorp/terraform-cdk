// https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotScheduledAuditConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html#id DataAwsccIotScheduledAudit#id}
  */
  readonly id: string;
}
export class DataAwsccIotScheduledAuditTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotScheduledAuditTagsToTerraform(struct?: DataAwsccIotScheduledAuditTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html awscc_iot_scheduled_audit}
*/
export class DataAwsccIotScheduledAudit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_scheduled_audit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html awscc_iot_scheduled_audit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotScheduledAuditConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotScheduledAuditConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_scheduled_audit',
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

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
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

  // scheduled_audit_arn - computed: true, optional: false, required: false
  public get scheduledAuditArn() {
    return this.getStringAttribute('scheduled_audit_arn');
  }

  // scheduled_audit_name - computed: true, optional: false, required: false
  public get scheduledAuditName() {
    return this.getStringAttribute('scheduled_audit_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // target_check_names - computed: true, optional: false, required: false
  public get targetCheckNames() {
    return this.getListAttribute('target_check_names');
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
