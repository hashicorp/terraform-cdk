// https://www.terraform.io/docs/providers/awscc/d/ssm_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html#id DataAwsccSsmAssociation#id}
  */
  readonly id: string;
}
export class DataAwsccSsmAssociationOutputLocationS3Location extends cdktf.ComplexComputedList {

  // output_s3_bucket_name - computed: true, optional: false, required: false
  public get outputS3BucketName() {
    return this.getStringAttribute('output_s3_bucket_name');
  }

  // output_s3_key_prefix - computed: true, optional: false, required: false
  public get outputS3KeyPrefix() {
    return this.getStringAttribute('output_s3_key_prefix');
  }

  // output_s3_region - computed: true, optional: false, required: false
  public get outputS3Region() {
    return this.getStringAttribute('output_s3_region');
  }
}

export function dataAwsccSsmAssociationOutputLocationS3LocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocationS3Location): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_s3_bucket_name: cdktf.stringToTerraform(struct!.outputS3BucketName),
    output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
    output_s3_region: cdktf.stringToTerraform(struct!.outputS3Region),
  }
}

export class DataAwsccSsmAssociationOutputLocation extends cdktf.ComplexComputedList {

  // s3_location - computed: true, optional: false, required: false
  public get s3Location() {
    return this.interpolationForAttribute('s3_location') as any;
  }
}

export function dataAwsccSsmAssociationOutputLocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_location: dataAwsccSsmAssociationOutputLocationS3LocationToTerraform(struct!.s3Location),
  }
}

export class DataAwsccSsmAssociationTargets extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccSsmAssociationTargetsToTerraform(struct?: DataAwsccSsmAssociationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html awscc_ssm_association}
*/
export class DataAwsccSsmAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssm_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html awscc_ssm_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_association',
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

  // apply_only_at_cron_interval - computed: true, optional: false, required: false
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: true, optional: false, required: false
  public get associationName() {
    return this.getStringAttribute('association_name');
  }

  // automation_target_parameter_name - computed: true, optional: false, required: false
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }

  // calendar_names - computed: true, optional: false, required: false
  public get calendarNames() {
    return this.getListAttribute('calendar_names');
  }

  // compliance_severity - computed: true, optional: false, required: false
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }

  // document_version - computed: true, optional: false, required: false
  public get documentVersion() {
    return this.getStringAttribute('document_version');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }

  // max_errors - computed: true, optional: false, required: false
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.interpolationForAttribute('output_location') as any;
  }

  // parameters - computed: true, optional: false, required: false
  public parameters(index: string, key: string): string {
    return new cdktf.StringMap(this, `parameters.${index}`).lookup(key);
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // sync_compliance - computed: true, optional: false, required: false
  public get syncCompliance() {
    return this.getStringAttribute('sync_compliance');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }

  // wait_for_success_timeout_seconds - computed: true, optional: false, required: false
  public get waitForSuccessTimeoutSeconds() {
    return this.getNumberAttribute('wait_for_success_timeout_seconds');
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
