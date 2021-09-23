// https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html#id DataAwsccAuditmanagerAssessment#id}
  */
  readonly id: string;
}
export class DataAwsccAuditmanagerAssessmentAssessmentReportsDestination extends cdktf.ComplexComputedList {

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
}

export function dataAwsccAuditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: DataAwsccAuditmanagerAssessmentAssessmentReportsDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
  }
}

export class DataAwsccAuditmanagerAssessmentAwsAccount extends cdktf.ComplexComputedList {

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccAuditmanagerAssessmentAwsAccountToTerraform(struct?: DataAwsccAuditmanagerAssessmentAwsAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccAuditmanagerAssessmentDelegations extends cdktf.ComplexComputedList {

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // assessment_name - computed: true, optional: false, required: false
  public get assessmentName() {
    return this.getStringAttribute('assessment_name');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // control_set_id - computed: true, optional: false, required: false
  public get controlSetId() {
    return this.getStringAttribute('control_set_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export function dataAwsccAuditmanagerAssessmentDelegationsToTerraform(struct?: DataAwsccAuditmanagerAssessmentDelegations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assessment_id: cdktf.stringToTerraform(struct!.assessmentId),
    assessment_name: cdktf.stringToTerraform(struct!.assessmentName),
    comment: cdktf.stringToTerraform(struct!.comment),
    control_set_id: cdktf.stringToTerraform(struct!.controlSetId),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    creation_time: cdktf.numberToTerraform(struct!.creationTime),
    id: cdktf.stringToTerraform(struct!.id),
    last_updated: cdktf.numberToTerraform(struct!.lastUpdated),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_type: cdktf.stringToTerraform(struct!.roleType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class DataAwsccAuditmanagerAssessmentRoles extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
}

export function dataAwsccAuditmanagerAssessmentRolesToTerraform(struct?: DataAwsccAuditmanagerAssessmentRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}

export class DataAwsccAuditmanagerAssessmentScopeAwsAccounts extends cdktf.ComplexComputedList {

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccAuditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: DataAwsccAuditmanagerAssessmentScopeAwsAccounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccAuditmanagerAssessmentScopeAwsServices extends cdktf.ComplexComputedList {

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export function dataAwsccAuditmanagerAssessmentScopeAwsServicesToTerraform(struct?: DataAwsccAuditmanagerAssessmentScopeAwsServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class DataAwsccAuditmanagerAssessmentScope extends cdktf.ComplexComputedList {

  // aws_accounts - computed: true, optional: false, required: false
  public get awsAccounts() {
    return this.interpolationForAttribute('aws_accounts') as any;
  }

  // aws_services - computed: true, optional: false, required: false
  public get awsServices() {
    return this.interpolationForAttribute('aws_services') as any;
  }
}

export function dataAwsccAuditmanagerAssessmentScopeToTerraform(struct?: DataAwsccAuditmanagerAssessmentScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_accounts: cdktf.listMapper(dataAwsccAuditmanagerAssessmentScopeAwsAccountsToTerraform)(struct!.awsAccounts),
    aws_services: cdktf.listMapper(dataAwsccAuditmanagerAssessmentScopeAwsServicesToTerraform)(struct!.awsServices),
  }
}

export class DataAwsccAuditmanagerAssessmentTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAuditmanagerAssessmentTagsToTerraform(struct?: DataAwsccAuditmanagerAssessmentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html awscc_auditmanager_assessment}
*/
export class DataAwsccAuditmanagerAssessment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_auditmanager_assessment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html awscc_auditmanager_assessment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAuditmanagerAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAuditmanagerAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_auditmanager_assessment',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // assessment_reports_destination - computed: true, optional: false, required: false
  public get assessmentReportsDestination() {
    return this.interpolationForAttribute('assessment_reports_destination') as any;
  }

  // aws_account - computed: true, optional: false, required: false
  public get awsAccount() {
    return this.interpolationForAttribute('aws_account') as any;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // delegations - computed: true, optional: false, required: false
  public get delegations() {
    return this.interpolationForAttribute('delegations') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // framework_id - computed: true, optional: false, required: false
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
