// https://www.terraform.io/docs/providers/awscc/r/ssm_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
  */
  readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
  /**
  * The name of the association.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#association_name SsmAssociation#association_name}
  */
  readonly associationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
  */
  readonly automationTargetParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#calendar_names SsmAssociation#calendar_names}
  */
  readonly calendarNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}
  */
  readonly complianceSeverity?: string;
  /**
  * The version of the SSM document to associate with the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#document_version SsmAssociation#document_version}
  */
  readonly documentVersion?: string;
  /**
  * The ID of the instance that the SSM document is associated with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#instance_id SsmAssociation#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#max_errors SsmAssociation#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * The name of the SSM document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#name SsmAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_location SsmAssociation#output_location}
  */
  readonly outputLocation?: SsmAssociationOutputLocation;
  /**
  * Parameter values that the SSM document uses at runtime.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#parameters SsmAssociation#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A Cron or Rate expression that specifies when the association is applied to the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#sync_compliance SsmAssociation#sync_compliance}
  */
  readonly syncCompliance?: string;
  /**
  * The targets that the SSM document sends commands to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#targets SsmAssociation#targets}
  */
  readonly targets?: SsmAssociationTargets[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}
  */
  readonly waitForSuccessTimeoutSeconds?: number;
}
export interface SsmAssociationOutputLocationS3Location {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}
  */
  readonly outputS3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_region SsmAssociation#output_s3_region}
  */
  readonly outputS3Region?: string;
}

export function ssmAssociationOutputLocationS3LocationToTerraform(struct?: SsmAssociationOutputLocationS3Location): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_s3_bucket_name: cdktf.stringToTerraform(struct!.outputS3BucketName),
    output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
    output_s3_region: cdktf.stringToTerraform(struct!.outputS3Region),
  }
}

export interface SsmAssociationOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#s3_location SsmAssociation#s3_location}
  */
  readonly s3Location?: SsmAssociationOutputLocationS3Location;
}

export function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_location: ssmAssociationOutputLocationS3LocationToTerraform(struct!.s3Location),
  }
}

export interface SsmAssociationTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#key SsmAssociation#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#values SsmAssociation#values}
  */
  readonly values: string[];
}

export function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html awscc_ssm_association}
*/
export class SsmAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssm_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html awscc_ssm_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
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
    this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
    this._associationName = config.associationName;
    this._automationTargetParameterName = config.automationTargetParameterName;
    this._calendarNames = config.calendarNames;
    this._complianceSeverity = config.complianceSeverity;
    this._documentVersion = config.documentVersion;
    this._instanceId = config.instanceId;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._outputLocation = config.outputLocation;
    this._parameters = config.parameters;
    this._scheduleExpression = config.scheduleExpression;
    this._syncCompliance = config.syncCompliance;
    this._targets = config.targets;
    this._waitForSuccessTimeoutSeconds = config.waitForSuccessTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_only_at_cron_interval - computed: false, optional: true, required: false
  private _applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval');
  }
  public set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable ) {
    this._applyOnlyAtCronInterval = value;
  }
  public resetApplyOnlyAtCronInterval() {
    this._applyOnlyAtCronInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyAtCronIntervalInput() {
    return this._applyOnlyAtCronInterval
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: false, optional: true, required: false
  private _associationName?: string;
  public get associationName() {
    return this.getStringAttribute('association_name');
  }
  public set associationName(value: string ) {
    this._associationName = value;
  }
  public resetAssociationName() {
    this._associationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationNameInput() {
    return this._associationName
  }

  // automation_target_parameter_name - computed: false, optional: true, required: false
  private _automationTargetParameterName?: string;
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }
  public set automationTargetParameterName(value: string ) {
    this._automationTargetParameterName = value;
  }
  public resetAutomationTargetParameterName() {
    this._automationTargetParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTargetParameterNameInput() {
    return this._automationTargetParameterName
  }

  // calendar_names - computed: false, optional: true, required: false
  private _calendarNames?: string[];
  public get calendarNames() {
    return this.getListAttribute('calendar_names');
  }
  public set calendarNames(value: string[] ) {
    this._calendarNames = value;
  }
  public resetCalendarNames() {
    this._calendarNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarNamesInput() {
    return this._calendarNames
  }

  // compliance_severity - computed: false, optional: true, required: false
  private _complianceSeverity?: string;
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }
  public set complianceSeverity(value: string ) {
    this._complianceSeverity = value;
  }
  public resetComplianceSeverity() {
    this._complianceSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSeverityInput() {
    return this._complianceSeverity
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string;
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string ) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string ) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string;
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string ) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_errors - computed: false, optional: true, required: false
  private _maxErrors?: string;
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string ) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: SsmAssociationOutputLocation;
  public get outputLocation() {
    return this.interpolationForAttribute('output_location') as any;
  }
  public set outputLocation(value: SsmAssociationOutputLocation ) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string ) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression
  }

  // sync_compliance - computed: false, optional: true, required: false
  private _syncCompliance?: string;
  public get syncCompliance() {
    return this.getStringAttribute('sync_compliance');
  }
  public set syncCompliance(value: string ) {
    this._syncCompliance = value;
  }
  public resetSyncCompliance() {
    this._syncCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncComplianceInput() {
    return this._syncCompliance
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmAssociationTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmAssociationTargets[] ) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // wait_for_success_timeout_seconds - computed: false, optional: true, required: false
  private _waitForSuccessTimeoutSeconds?: number;
  public get waitForSuccessTimeoutSeconds() {
    return this.getNumberAttribute('wait_for_success_timeout_seconds');
  }
  public set waitForSuccessTimeoutSeconds(value: number ) {
    this._waitForSuccessTimeoutSeconds = value;
  }
  public resetWaitForSuccessTimeoutSeconds() {
    this._waitForSuccessTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSuccessTimeoutSecondsInput() {
    return this._waitForSuccessTimeoutSeconds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_only_at_cron_interval: cdktf.booleanToTerraform(this._applyOnlyAtCronInterval),
      association_name: cdktf.stringToTerraform(this._associationName),
      automation_target_parameter_name: cdktf.stringToTerraform(this._automationTargetParameterName),
      calendar_names: cdktf.listMapper(cdktf.stringToTerraform)(this._calendarNames),
      compliance_severity: cdktf.stringToTerraform(this._complianceSeverity),
      document_version: cdktf.stringToTerraform(this._documentVersion),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      output_location: ssmAssociationOutputLocationToTerraform(this._outputLocation),
      parameters: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._parameters),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      sync_compliance: cdktf.stringToTerraform(this._syncCompliance),
      targets: cdktf.listMapper(ssmAssociationTargetsToTerraform)(this._targets),
      wait_for_success_timeout_seconds: cdktf.numberToTerraform(this._waitForSuccessTimeoutSeconds),
    };
  }
}
