// https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination in which evidence reports are stored for the specified assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}
  */
  readonly assessmentReportsDestination?: AuditmanagerAssessmentAssessmentReportsDestination;
  /**
  * The AWS account associated with the assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_account AuditmanagerAssessment#aws_account}
  */
  readonly awsAccount?: AuditmanagerAssessmentAwsAccount;
  /**
  * The description of the specified assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#description AuditmanagerAssessment#description}
  */
  readonly description?: string;
  /**
  * The identifier for the specified framework.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#framework_id AuditmanagerAssessment#framework_id}
  */
  readonly frameworkId?: string;
  /**
  * The name of the related assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
  */
  readonly name?: string;
  /**
  * The list of roles for the specified assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#roles AuditmanagerAssessment#roles}
  */
  readonly roles?: AuditmanagerAssessmentRoles[];
  /**
  * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#scope AuditmanagerAssessment#scope}
  */
  readonly scope?: AuditmanagerAssessmentScope;
  /**
  * The status of the specified assessment. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#status AuditmanagerAssessment#status}
  */
  readonly status?: string;
  /**
  * The tags associated with the assessment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#tags AuditmanagerAssessment#tags}
  */
  readonly tags?: AuditmanagerAssessmentTags[];
}
export interface AuditmanagerAssessmentAssessmentReportsDestination {
  /**
  * The URL of the specified Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#destination AuditmanagerAssessment#destination}
  */
  readonly destination?: string;
  /**
  * The destination type, such as Amazon S3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#destination_type AuditmanagerAssessment#destination_type}
  */
  readonly destinationType?: string;
}

export function auditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: AuditmanagerAssessmentAssessmentReportsDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
  }
}

export interface AuditmanagerAssessmentAwsAccount {
  /**
  * The unique identifier for the email account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#email_address AuditmanagerAssessment#email_address}
  */
  readonly emailAddress?: string;
  /**
  * The identifier for the specified AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#id AuditmanagerAssessment#id}
  */
  readonly id?: string;
  /**
  * The name of the specified AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
  */
  readonly name?: string;
}

export function auditmanagerAssessmentAwsAccountToTerraform(struct?: AuditmanagerAssessmentAwsAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class AuditmanagerAssessmentDelegations extends cdktf.ComplexComputedList {

  // assessment_id - computed: true, optional: true, required: false
  private _assessmentId?: string;
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }
  public set assessmentId(value: string) {
    this._assessmentId = value;
  }
  public resetAssessmentId() {
    this._assessmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentIdInput() {
    return this._assessmentId
  }

  // assessment_name - computed: true, optional: true, required: false
  private _assessmentName?: string;
  public get assessmentName() {
    return this.getStringAttribute('assessment_name');
  }
  public set assessmentName(value: string) {
    this._assessmentName = value;
  }
  public resetAssessmentName() {
    this._assessmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentNameInput() {
    return this._assessmentName
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // control_set_id - computed: true, optional: true, required: false
  private _controlSetId?: string;
  public get controlSetId() {
    return this.getStringAttribute('control_set_id');
  }
  public set controlSetId(value: string) {
    this._controlSetId = value;
  }
  public resetControlSetId() {
    this._controlSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSetIdInput() {
    return this._controlSetId
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string;
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number;
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: number;
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // role_type - computed: true, optional: true, required: false
  private _roleType?: string;
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }
}

export function auditmanagerAssessmentDelegationsToTerraform(struct?: AuditmanagerAssessmentDelegations): any {
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

export interface AuditmanagerAssessmentRoles {
  /**
  * The Amazon Resource Name (ARN) of the IAM user or role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#role_arn AuditmanagerAssessment#role_arn}
  */
  readonly roleArn?: string;
  /**
  *  The IAM role type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#role_type AuditmanagerAssessment#role_type}
  */
  readonly roleType?: string;
}

export function auditmanagerAssessmentRolesToTerraform(struct?: AuditmanagerAssessmentRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}

export interface AuditmanagerAssessmentScopeAwsAccounts {
  /**
  * The unique identifier for the email account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#email_address AuditmanagerAssessment#email_address}
  */
  readonly emailAddress?: string;
  /**
  * The identifier for the specified AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#id AuditmanagerAssessment#id}
  */
  readonly id?: string;
  /**
  * The name of the specified AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
  */
  readonly name?: string;
}

export function auditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: AuditmanagerAssessmentScopeAwsAccounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface AuditmanagerAssessmentScopeAwsServices {
  /**
  * The name of the AWS service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#service_name AuditmanagerAssessment#service_name}
  */
  readonly serviceName?: string;
}

export function auditmanagerAssessmentScopeAwsServicesToTerraform(struct?: AuditmanagerAssessmentScopeAwsServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface AuditmanagerAssessmentScope {
  /**
  * The AWS accounts included in scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_accounts AuditmanagerAssessment#aws_accounts}
  */
  readonly awsAccounts?: AuditmanagerAssessmentScopeAwsAccounts[];
  /**
  * The AWS services included in scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_services AuditmanagerAssessment#aws_services}
  */
  readonly awsServices?: AuditmanagerAssessmentScopeAwsServices[];
}

export function auditmanagerAssessmentScopeToTerraform(struct?: AuditmanagerAssessmentScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_accounts: cdktf.listMapper(auditmanagerAssessmentScopeAwsAccountsToTerraform)(struct!.awsAccounts),
    aws_services: cdktf.listMapper(auditmanagerAssessmentScopeAwsServicesToTerraform)(struct!.awsServices),
  }
}

export interface AuditmanagerAssessmentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#key AuditmanagerAssessment#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#value AuditmanagerAssessment#value}
  */
  readonly value: string;
}

export function auditmanagerAssessmentTagsToTerraform(struct?: AuditmanagerAssessmentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html awscc_auditmanager_assessment}
*/
export class AuditmanagerAssessment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_auditmanager_assessment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html awscc_auditmanager_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerAssessmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerAssessmentConfig = {}) {
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
    this._assessmentReportsDestination = config.assessmentReportsDestination;
    this._awsAccount = config.awsAccount;
    this._description = config.description;
    this._frameworkId = config.frameworkId;
    this._name = config.name;
    this._roles = config.roles;
    this._scope = config.scope;
    this._status = config.status;
    this._tags = config.tags;
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

  // assessment_reports_destination - computed: false, optional: true, required: false
  private _assessmentReportsDestination?: AuditmanagerAssessmentAssessmentReportsDestination;
  public get assessmentReportsDestination() {
    return this.interpolationForAttribute('assessment_reports_destination') as any;
  }
  public set assessmentReportsDestination(value: AuditmanagerAssessmentAssessmentReportsDestination ) {
    this._assessmentReportsDestination = value;
  }
  public resetAssessmentReportsDestination() {
    this._assessmentReportsDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentReportsDestinationInput() {
    return this._assessmentReportsDestination
  }

  // aws_account - computed: true, optional: true, required: false
  private _awsAccount?: AuditmanagerAssessmentAwsAccount;
  public get awsAccount() {
    return this.interpolationForAttribute('aws_account') as any;
  }
  public set awsAccount(value: AuditmanagerAssessmentAwsAccount) {
    this._awsAccount = value;
  }
  public resetAwsAccount() {
    this._awsAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // delegations - computed: true, optional: false, required: false
  public get delegations() {
    return this.interpolationForAttribute('delegations') as any;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // framework_id - computed: true, optional: true, required: false
  private _frameworkId?: string;
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }
  public set frameworkId(value: string) {
    this._frameworkId = value;
  }
  public resetFrameworkId() {
    this._frameworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkIdInput() {
    return this._frameworkId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: AuditmanagerAssessmentRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: AuditmanagerAssessmentRoles[] ) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: AuditmanagerAssessmentScope;
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: AuditmanagerAssessmentScope ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AuditmanagerAssessmentTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AuditmanagerAssessmentTags[] ) {
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
      assessment_reports_destination: auditmanagerAssessmentAssessmentReportsDestinationToTerraform(this._assessmentReportsDestination),
      aws_account: auditmanagerAssessmentAwsAccountToTerraform(this._awsAccount),
      description: cdktf.stringToTerraform(this._description),
      framework_id: cdktf.stringToTerraform(this._frameworkId),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(auditmanagerAssessmentRolesToTerraform)(this._roles),
      scope: auditmanagerAssessmentScopeToTerraform(this._scope),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(auditmanagerAssessmentTagsToTerraform)(this._tags),
    };
  }
}
