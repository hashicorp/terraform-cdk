// https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsLogGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#kms_key_id LogsLogGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#log_group_name LogsLogGroup#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#retention_in_days LogsLogGroup#retention_in_days}
  */
  readonly retentionInDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html awscc_logs_log_group}
*/
export class LogsLogGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_logs_log_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html awscc_logs_log_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsLogGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogsLogGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_log_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyId = config.kmsKeyId;
    this._logGroupName = config.logGroupName;
    this._retentionInDays = config.retentionInDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number ) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
    };
  }
}
