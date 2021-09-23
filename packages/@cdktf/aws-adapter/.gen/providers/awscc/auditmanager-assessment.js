"use strict";
// https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditmanagerAssessment = exports.auditmanagerAssessmentTagsToTerraform = exports.auditmanagerAssessmentScopeToTerraform = exports.auditmanagerAssessmentScopeAwsServicesToTerraform = exports.auditmanagerAssessmentScopeAwsAccountsToTerraform = exports.auditmanagerAssessmentRolesToTerraform = exports.auditmanagerAssessmentDelegationsToTerraform = exports.AuditmanagerAssessmentDelegations = exports.auditmanagerAssessmentAwsAccountToTerraform = exports.auditmanagerAssessmentAssessmentReportsDestinationToTerraform = void 0;
const cdktf = require("cdktf");
function auditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        destination_type: cdktf.stringToTerraform(struct.destinationType),
    };
}
exports.auditmanagerAssessmentAssessmentReportsDestinationToTerraform = auditmanagerAssessmentAssessmentReportsDestinationToTerraform;
function auditmanagerAssessmentAwsAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email_address: cdktf.stringToTerraform(struct.emailAddress),
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.auditmanagerAssessmentAwsAccountToTerraform = auditmanagerAssessmentAwsAccountToTerraform;
class AuditmanagerAssessmentDelegations extends cdktf.ComplexComputedList {
    get assessmentId() {
        return this.getStringAttribute('assessment_id');
    }
    set assessmentId(value) {
        this._assessmentId = value;
    }
    resetAssessmentId() {
        this._assessmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assessmentIdInput() {
        return this._assessmentId;
    }
    get assessmentName() {
        return this.getStringAttribute('assessment_name');
    }
    set assessmentName(value) {
        this._assessmentName = value;
    }
    resetAssessmentName() {
        this._assessmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assessmentNameInput() {
        return this._assessmentName;
    }
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    get controlSetId() {
        return this.getStringAttribute('control_set_id');
    }
    set controlSetId(value) {
        this._controlSetId = value;
    }
    resetControlSetId() {
        this._controlSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get controlSetIdInput() {
        return this._controlSetId;
    }
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    set createdBy(value) {
        this._createdBy = value;
    }
    resetCreatedBy() {
        this._createdBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdByInput() {
        return this._createdBy;
    }
    get creationTime() {
        return this.getNumberAttribute('creation_time');
    }
    set creationTime(value) {
        this._creationTime = value;
    }
    resetCreationTime() {
        this._creationTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creationTimeInput() {
        return this._creationTime;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get lastUpdated() {
        return this.getNumberAttribute('last_updated');
    }
    set lastUpdated(value) {
        this._lastUpdated = value;
    }
    resetLastUpdated() {
        this._lastUpdated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lastUpdatedInput() {
        return this._lastUpdated;
    }
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    get roleType() {
        return this.getStringAttribute('role_type');
    }
    set roleType(value) {
        this._roleType = value;
    }
    resetRoleType() {
        this._roleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleTypeInput() {
        return this._roleType;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
}
exports.AuditmanagerAssessmentDelegations = AuditmanagerAssessmentDelegations;
function auditmanagerAssessmentDelegationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assessment_id: cdktf.stringToTerraform(struct.assessmentId),
        assessment_name: cdktf.stringToTerraform(struct.assessmentName),
        comment: cdktf.stringToTerraform(struct.comment),
        control_set_id: cdktf.stringToTerraform(struct.controlSetId),
        created_by: cdktf.stringToTerraform(struct.createdBy),
        creation_time: cdktf.numberToTerraform(struct.creationTime),
        id: cdktf.stringToTerraform(struct.id),
        last_updated: cdktf.numberToTerraform(struct.lastUpdated),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        role_type: cdktf.stringToTerraform(struct.roleType),
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.auditmanagerAssessmentDelegationsToTerraform = auditmanagerAssessmentDelegationsToTerraform;
function auditmanagerAssessmentRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        role_type: cdktf.stringToTerraform(struct.roleType),
    };
}
exports.auditmanagerAssessmentRolesToTerraform = auditmanagerAssessmentRolesToTerraform;
function auditmanagerAssessmentScopeAwsAccountsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email_address: cdktf.stringToTerraform(struct.emailAddress),
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.auditmanagerAssessmentScopeAwsAccountsToTerraform = auditmanagerAssessmentScopeAwsAccountsToTerraform;
function auditmanagerAssessmentScopeAwsServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        service_name: cdktf.stringToTerraform(struct.serviceName),
    };
}
exports.auditmanagerAssessmentScopeAwsServicesToTerraform = auditmanagerAssessmentScopeAwsServicesToTerraform;
function auditmanagerAssessmentScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_accounts: cdktf.listMapper(auditmanagerAssessmentScopeAwsAccountsToTerraform)(struct.awsAccounts),
        aws_services: cdktf.listMapper(auditmanagerAssessmentScopeAwsServicesToTerraform)(struct.awsServices),
    };
}
exports.auditmanagerAssessmentScopeToTerraform = auditmanagerAssessmentScopeToTerraform;
function auditmanagerAssessmentTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.auditmanagerAssessmentTagsToTerraform = auditmanagerAssessmentTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html awscc_auditmanager_assessment}
*/
class AuditmanagerAssessment extends cdktf.TerraformResource {
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
    constructor(scope, id, config = {}) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // assessment_id - computed: true, optional: false, required: false
    get assessmentId() {
        return this.getStringAttribute('assessment_id');
    }
    get assessmentReportsDestination() {
        return this.interpolationForAttribute('assessment_reports_destination');
    }
    set assessmentReportsDestination(value) {
        this._assessmentReportsDestination = value;
    }
    resetAssessmentReportsDestination() {
        this._assessmentReportsDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assessmentReportsDestinationInput() {
        return this._assessmentReportsDestination;
    }
    get awsAccount() {
        return this.interpolationForAttribute('aws_account');
    }
    set awsAccount(value) {
        this._awsAccount = value;
    }
    resetAwsAccount() {
        this._awsAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsAccountInput() {
        return this._awsAccount;
    }
    // creation_time - computed: true, optional: false, required: false
    get creationTime() {
        return this.getNumberAttribute('creation_time');
    }
    // delegations - computed: true, optional: false, required: false
    get delegations() {
        return this.interpolationForAttribute('delegations');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get frameworkId() {
        return this.getStringAttribute('framework_id');
    }
    set frameworkId(value) {
        this._frameworkId = value;
    }
    resetFrameworkId() {
        this._frameworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frameworkIdInput() {
        return this._frameworkId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get roles() {
        return this.interpolationForAttribute('roles');
    }
    set roles(value) {
        this._roles = value;
    }
    resetRoles() {
        this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rolesInput() {
        return this._roles;
    }
    get scope() {
        return this.interpolationForAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
exports.AuditmanagerAssessment = AuditmanagerAssessment;
// =================
// STATIC PROPERTIES
// =================
AuditmanagerAssessment.tfResourceType = "awscc_auditmanager_assessment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRtYW5hZ2VyLWFzc2Vzc21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdWRpdG1hbmFnZXItYXNzZXNzbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0VBQStFO0FBQy9FLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQTJFL0IsU0FBZ0IsNkRBQTZELENBQUMsTUFBMkQ7SUFDdkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDekQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFORCxzSUFNQztBQXVCRCxTQUFnQiwyQ0FBMkMsQ0FBQyxNQUF5QztJQUNuRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdkMsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBUEQsa0dBT0M7QUFFRCxNQUFhLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFJOUUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FB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QUFDLHNDQUFzQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1RSxLQUFLLEVBQUUsc0NBQXNDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscUNBQXFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFFLENBQUM7SUFDSixDQUFDOztBQXJPSCx3REFzT0M7QUFwT0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxxQ0FBYyxHQUFXLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIGRlc3RpbmF0aW9uIGluIHdoaWNoIGV2aWRlbmNlIHJlcG9ydHMgYXJlIHN0b3JlZCBmb3IgdGhlIHNwZWNpZmllZCBhc3Nlc3NtZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNhc3Nlc3NtZW50X3JlcG9ydHNfZGVzdGluYXRpb24gQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNhc3Nlc3NtZW50X3JlcG9ydHNfZGVzdGluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb24/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXNzZXNzbWVudFJlcG9ydHNEZXN0aW5hdGlvbjtcbiAgLyoqXG4gICogVGhlIEFXUyBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYXNzZXNzbWVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50Lmh0bWwjYXdzX2FjY291bnQgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNhd3NfYWNjb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgYXdzQWNjb3VudD86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBd3NBY2NvdW50O1xuICAvKipcbiAgKiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHNwZWNpZmllZCBhc3Nlc3NtZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNkZXNjcmlwdGlvbiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBzcGVjaWZpZWQgZnJhbWV3b3JrLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNmcmFtZXdvcmtfaWQgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNmcmFtZXdvcmtfaWR9XG4gICovXG4gIHJlYWRvbmx5IGZyYW1ld29ya0lkPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgcmVsYXRlZCBhc3Nlc3NtZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNuYW1lIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGxpc3Qgb2Ygcm9sZXMgZm9yIHRoZSBzcGVjaWZpZWQgYXNzZXNzbWVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50Lmh0bWwjcm9sZXMgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNyb2xlc31cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZXM/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50Um9sZXNbXTtcbiAgLyoqXG4gICogVGhlIHdyYXBwZXIgdGhhdCBjb250YWlucyB0aGUgQVdTIGFjY291bnRzIGFuZCBBV1Mgc2VydmljZXMgaW4gc2NvcGUgZm9yIHRoZSBhc3Nlc3NtZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNzY29wZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I3Njb3BlfVxuICAqL1xuICByZWFkb25seSBzY29wZT86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZTtcbiAgLyoqXG4gICogVGhlIHN0YXR1cyBvZiB0aGUgc3BlY2lmaWVkIGFzc2Vzc21lbnQuIFxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNzdGF0dXMgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNzdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHRhZ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBhc3Nlc3NtZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCN0YWdzIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRUYWdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uIHtcbiAgLyoqXG4gICogVGhlIFVSTCBvZiB0aGUgc3BlY2lmaWVkIEFtYXpvbiBTMyBidWNrZXQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI2Rlc3RpbmF0aW9uIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjZGVzdGluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgZGVzdGluYXRpb24gdHlwZSwgc3VjaCBhcyBBbWF6b24gUzMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI2Rlc3RpbmF0aW9uX3R5cGUgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNkZXN0aW5hdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXNzZXNzbWVudFJlcG9ydHNEZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICBkZXN0aW5hdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXdzQWNjb3VudCB7XG4gIC8qKlxuICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGVtYWlsIGFjY291bnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI2VtYWlsX2FkZHJlc3MgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNlbWFpbF9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBlbWFpbEFkZHJlc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBpZGVudGlmaWVyIGZvciB0aGUgc3BlY2lmaWVkIEFXUyBhY2NvdW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNpZCBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgdGhlIHNwZWNpZmllZCBBV1MgYWNjb3VudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50Lmh0bWwjbmFtZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXdzQWNjb3VudFRvVGVycmFmb3JtKHN0cnVjdD86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBd3NBY2NvdW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVtYWlsX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxBZGRyZXNzKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudERlbGVnYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXNzZXNzbWVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc2Vzc21lbnRJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBhc3Nlc3NtZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3Nlc3NtZW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3Nlc3NtZW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fzc2Vzc21lbnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFzc2Vzc21lbnRJZCgpIHtcbiAgICB0aGlzLl9hc3Nlc3NtZW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc2Vzc21lbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3Nlc3NtZW50SWRcbiAgfVxuXG4gIC8vIGFzc2Vzc21lbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc2Vzc21lbnROYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFzc2Vzc21lbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzZXNzbWVudF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3Nlc3NtZW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXNzZXNzbWVudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBc3Nlc3NtZW50TmFtZSgpIHtcbiAgICB0aGlzLl9hc3Nlc3NtZW50TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXNzZXNzbWVudE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzZXNzbWVudE5hbWVcbiAgfVxuXG4gIC8vIGNvbW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tZW50Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnRcbiAgfVxuXG4gIC8vIGNvbnRyb2xfc2V0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udHJvbFNldElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbnRyb2xTZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRyb2xfc2V0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250cm9sU2V0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRyb2xTZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRyb2xTZXRJZCgpIHtcbiAgICB0aGlzLl9jb250cm9sU2V0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRyb2xTZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sU2V0SWRcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfYnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGVkQnk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY3JlYXRlZEJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9ieScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlYXRlZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGVkQnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVkQnkoKSB7XG4gICAgdGhpcy5fY3JlYXRlZEJ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVkQnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEJ5XG4gIH1cblxuICAvLyBjcmVhdGlvbl90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRpb25UaW1lPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0aW9uVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3JlYXRpb25UaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRpb25UaW1lKCkge1xuICAgIHRoaXMuX2NyZWF0aW9uVGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25UaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0aW9uVGltZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhc3RVcGRhdGVkPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbGFzdF91cGRhdGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXN0VXBkYXRlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGFzdFVwZGF0ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLl9sYXN0VXBkYXRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFVwZGF0ZWRcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlQXJuKCkge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFyblxuICB9XG5cbiAgLy8gcm9sZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZVR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcm9sZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGVUeXBlKCkge1xuICAgIHRoaXMuX3JvbGVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlVHlwZVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1ZGl0bWFuYWdlckFzc2Vzc21lbnREZWxlZ2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnREZWxlZ2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhc3Nlc3NtZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFzc2Vzc21lbnRJZCksXG4gICAgYXNzZXNzbWVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFzc2Vzc21lbnROYW1lKSxcbiAgICBjb21tZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbW1lbnQpLFxuICAgIGNvbnRyb2xfc2V0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRyb2xTZXRJZCksXG4gICAgY3JlYXRlZF9ieTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVkQnkpLFxuICAgIGNyZWF0aW9uX3RpbWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRpb25UaW1lKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbGFzdF91cGRhdGVkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhc3RVcGRhdGVkKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICByb2xlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZVR5cGUpLFxuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudFJvbGVzIHtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBJQU0gdXNlciBvciByb2xlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNyb2xlX2FybiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSByb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiAgVGhlIElBTSByb2xlIHR5cGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI3JvbGVfdHlwZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I3JvbGVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50Um9sZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50Um9sZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgcm9sZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZUF3c0FjY291bnRzIHtcbiAgLyoqXG4gICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgZW1haWwgYWNjb3VudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50Lmh0bWwjZW1haWxfYWRkcmVzcyBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I2VtYWlsX2FkZHJlc3N9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsQWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBzcGVjaWZpZWQgQVdTIGFjY291bnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI2lkIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIEFXUyBhY2NvdW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNuYW1lIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZUF3c0FjY291bnRzVG9UZXJyYWZvcm0oc3RydWN0PzogQXVkaXRtYW5hZ2VyQXNzZXNzbWVudFNjb3BlQXdzQWNjb3VudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW1haWxfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbEFkZHJlc3MpLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudFNjb3BlQXdzU2VydmljZXMge1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgQVdTIHNlcnZpY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sI3NlcnZpY2VfbmFtZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I3NlcnZpY2VfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGVBd3NTZXJ2aWNlc1RvVGVycmFmb3JtKHN0cnVjdD86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZUF3c1NlcnZpY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGUge1xuICAvKipcbiAgKiBUaGUgQVdTIGFjY291bnRzIGluY2x1ZGVkIGluIHNjb3BlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNhd3NfYWNjb3VudHMgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNhd3NfYWNjb3VudHN9XG4gICovXG4gIHJlYWRvbmx5IGF3c0FjY291bnRzPzogQXVkaXRtYW5hZ2VyQXNzZXNzbWVudFNjb3BlQXdzQWNjb3VudHNbXTtcbiAgLyoqXG4gICogVGhlIEFXUyBzZXJ2aWNlcyBpbmNsdWRlZCBpbiBzY29wZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50Lmh0bWwjYXdzX3NlcnZpY2VzIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnQjYXdzX3NlcnZpY2VzfVxuICAqL1xuICByZWFkb25seSBhd3NTZXJ2aWNlcz86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZUF3c1NlcnZpY2VzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdzX2FjY291bnRzOiBjZGt0Zi5saXN0TWFwcGVyKGF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZUF3c0FjY291bnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYXdzQWNjb3VudHMpLFxuICAgIGF3c19zZXJ2aWNlczogY2RrdGYubGlzdE1hcHBlcihhdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGVBd3NTZXJ2aWNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF3c1NlcnZpY2VzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRUYWdzIHtcbiAgLyoqXG4gICogVGhlIGtleSBuYW1lIG9mIHRoZSB0YWcuIFlvdSBjYW4gc3BlY2lmeSBhIHZhbHVlIHRoYXQgaXMgMSB0byAxMjcgVW5pY29kZSBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IGJlIHByZWZpeGVkIHdpdGggYXdzOi4gWW91IGNhbiB1c2UgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogdGhlIHNldCBvZiBVbmljb2RlIGxldHRlcnMsIGRpZ2l0cywgd2hpdGVzcGFjZSwgXywgLiwgLywgPSwgKywgYW5kIC0uIFxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCNrZXkgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgdmFsdWUgZm9yIHRoZSB0YWcuIFlvdSBjYW4gc3BlY2lmeSBhIHZhbHVlIHRoYXQgaXMgMSB0byAyNTUgVW5pY29kZSBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IGJlIHByZWZpeGVkIHdpdGggYXdzOi4gWW91IGNhbiB1c2UgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogdGhlIHNldCBvZiBVbmljb2RlIGxldHRlcnMsIGRpZ2l0cywgd2hpdGVzcGFjZSwgXywgLiwgLywgPSwgKywgYW5kIC0uIFxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCN2YWx1ZSBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50I3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVkaXRtYW5hZ2VyQXNzZXNzbWVudFRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hdWRpdG1hbmFnZXJfYXNzZXNzbWVudC5odG1sIGF3c2NjX2F1ZGl0bWFuYWdlcl9hc3Nlc3NtZW50fVxuKi9cbmV4cG9ydCBjbGFzcyBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQuaHRtbCBhd3NjY19hdWRpdG1hbmFnZXJfYXNzZXNzbWVudH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXVkaXRtYW5hZ2VyQXNzZXNzbWVudENvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYXVkaXRtYW5hZ2VyX2Fzc2Vzc21lbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uID0gY29uZmlnLmFzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb247XG4gICAgdGhpcy5fYXdzQWNjb3VudCA9IGNvbmZpZy5hd3NBY2NvdW50O1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2ZyYW1ld29ya0lkID0gY29uZmlnLmZyYW1ld29ya0lkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9yb2xlcyA9IGNvbmZpZy5yb2xlcztcbiAgICB0aGlzLl9zY29wZSA9IGNvbmZpZy5zY29wZTtcbiAgICB0aGlzLl9zdGF0dXMgPSBjb25maWcuc3RhdHVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhc3Nlc3NtZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzZXNzbWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzZXNzbWVudF9pZCcpO1xuICB9XG5cbiAgLy8gYXNzZXNzbWVudF9yZXBvcnRzX2Rlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb24/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXNzZXNzbWVudFJlcG9ydHNEZXN0aW5hdGlvbjtcbiAgcHVibGljIGdldCBhc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Fzc2Vzc21lbnRfcmVwb3J0c19kZXN0aW5hdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb24odmFsdWU6IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uICkge1xuICAgIHRoaXMuX2Fzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uKCkge1xuICAgIHRoaXMuX2Fzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzZXNzbWVudFJlcG9ydHNEZXN0aW5hdGlvblxuICB9XG5cbiAgLy8gYXdzX2FjY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NBY2NvdW50PzogQXVkaXRtYW5hZ2VyQXNzZXNzbWVudEF3c0FjY291bnQ7XG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhd3NfYWNjb3VudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c0FjY291bnQodmFsdWU6IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRBd3NBY2NvdW50KSB7XG4gICAgdGhpcy5fYXdzQWNjb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c0FjY291bnQoKSB7XG4gICAgdGhpcy5fYXdzQWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NBY2NvdW50XG4gIH1cblxuICAvLyBjcmVhdGlvbl90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY3JlYXRpb25fdGltZScpO1xuICB9XG5cbiAgLy8gZGVsZWdhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWxlZ2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZWxlZ2F0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGZyYW1ld29ya19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZyYW1ld29ya0lkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGZyYW1ld29ya0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnJhbWV3b3JrX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmcmFtZXdvcmtJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnJhbWV3b3JrSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGcmFtZXdvcmtJZCgpIHtcbiAgICB0aGlzLl9mcmFtZXdvcmtJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnJhbWV3b3JrSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWV3b3JrSWRcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyByb2xlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlcz86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRSb2xlc1tdO1xuICBwdWJsaWMgZ2V0IHJvbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JvbGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZXModmFsdWU6IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRSb2xlc1tdICkge1xuICAgIHRoaXMuX3JvbGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZXMoKSB7XG4gICAgdGhpcy5fcm9sZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVzXG4gIH1cblxuICAvLyBzY29wZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY29wZT86IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZTtcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzY29wZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjb3BlKHZhbHVlOiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50U2NvcGUgKSB7XG4gICAgdGhpcy5fc2NvcGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY29wZSgpIHtcbiAgICB0aGlzLl9zY29wZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NvcGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGVcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0dXM/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzXG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiBBdWRpdG1hbmFnZXJBc3Nlc3NtZW50VGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEF1ZGl0bWFuYWdlckFzc2Vzc21lbnRUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzc2Vzc21lbnRfcmVwb3J0c19kZXN0aW5hdGlvbjogYXVkaXRtYW5hZ2VyQXNzZXNzbWVudEFzc2Vzc21lbnRSZXBvcnRzRGVzdGluYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9hc3Nlc3NtZW50UmVwb3J0c0Rlc3RpbmF0aW9uKSxcbiAgICAgIGF3c19hY2NvdW50OiBhdWRpdG1hbmFnZXJBc3Nlc3NtZW50QXdzQWNjb3VudFRvVGVycmFmb3JtKHRoaXMuX2F3c0FjY291bnQpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGZyYW1ld29ya19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZnJhbWV3b3JrSWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByb2xlczogY2RrdGYubGlzdE1hcHBlcihhdWRpdG1hbmFnZXJBc3Nlc3NtZW50Um9sZXNUb1RlcnJhZm9ybSkodGhpcy5fcm9sZXMpLFxuICAgICAgc2NvcGU6IGF1ZGl0bWFuYWdlckFzc2Vzc21lbnRTY29wZVRvVGVycmFmb3JtKHRoaXMuX3Njb3BlKSxcbiAgICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdHVzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoYXVkaXRtYW5hZ2VyQXNzZXNzbWVudFRhZ3NUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgfTtcbiAgfVxufVxuIl19