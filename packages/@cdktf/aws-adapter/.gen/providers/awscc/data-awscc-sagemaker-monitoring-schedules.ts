// https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerMonitoringSchedulesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedules.html awscc_sagemaker_monitoring_schedules}
*/
export class DataAwsccSagemakerMonitoringSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_monitoring_schedules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedules.html awscc_sagemaker_monitoring_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerMonitoringSchedulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerMonitoringSchedulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_monitoring_schedules',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
