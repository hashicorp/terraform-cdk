// https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotScheduledAuditConfig extends cdktf.TerraformMetaArguments {
  /**
  * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#day_of_month IotScheduledAudit#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#day_of_week IotScheduledAudit#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#frequency IotScheduledAudit#frequency}
  */
  readonly frequency: string;
  /**
  * The name you want to give to the scheduled audit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#scheduled_audit_name IotScheduledAudit#scheduled_audit_name}
  */
  readonly scheduledAuditName?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#tags IotScheduledAudit#tags}
  */
  readonly tags?: IotScheduledAuditTags[];
  /**
  * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#target_check_names IotScheduledAudit#target_check_names}
  */
  readonly targetCheckNames: string[];
}
export interface IotScheduledAuditTags {
  /**
  * The tag's key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#key IotScheduledAudit#key}
  */
  readonly key: string;
  /**
  * The tag's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#value IotScheduledAudit#value}
  */
  readonly value: string;
}

export function iotScheduledAuditTagsToTerraform(struct?: IotScheduledAuditTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html awscc_iot_scheduled_audit}
*/
export class IotScheduledAudit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_scheduled_audit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html awscc_iot_scheduled_audit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotScheduledAuditConfig
  */
  public constructor(scope: Construct, id: string, config: IotScheduledAuditConfig) {
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
    this._dayOfMonth = config.dayOfMonth;
    this._dayOfWeek = config.dayOfWeek;
    this._frequency = config.frequency;
    this._scheduledAuditName = config.scheduledAuditName;
    this._tags = config.tags;
    this._targetCheckNames = config.targetCheckNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: string;
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string ) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string;
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string ) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scheduled_audit_arn - computed: true, optional: false, required: false
  public get scheduledAuditArn() {
    return this.getStringAttribute('scheduled_audit_arn');
  }

  // scheduled_audit_name - computed: true, optional: true, required: false
  private _scheduledAuditName?: string;
  public get scheduledAuditName() {
    return this.getStringAttribute('scheduled_audit_name');
  }
  public set scheduledAuditName(value: string) {
    this._scheduledAuditName = value;
  }
  public resetScheduledAuditName() {
    this._scheduledAuditName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledAuditNameInput() {
    return this._scheduledAuditName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotScheduledAuditTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotScheduledAuditTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_check_names - computed: false, optional: false, required: true
  private _targetCheckNames: string[];
  public get targetCheckNames() {
    return this.getListAttribute('target_check_names');
  }
  public set targetCheckNames(value: string[]) {
    this._targetCheckNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCheckNamesInput() {
    return this._targetCheckNames
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      day_of_month: cdktf.stringToTerraform(this._dayOfMonth),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      frequency: cdktf.stringToTerraform(this._frequency),
      scheduled_audit_name: cdktf.stringToTerraform(this._scheduledAuditName),
      tags: cdktf.listMapper(iotScheduledAuditTagsToTerraform)(this._tags),
      target_check_names: cdktf.listMapper(cdktf.stringToTerraform)(this._targetCheckNames),
    };
  }
}
