"use strict";
// https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccIotAccountAuditConfiguration = exports.dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations = exports.dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck = exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform = exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck = void 0;
const cdktf = require("cdktf");
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations extends cdktf.ComplexComputedList {
    // authenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
    get authenticatedCognitoRoleOverlyPermissiveCheck() {
        return this.interpolationForAttribute('authenticated_cognito_role_overly_permissive_check');
    }
    // ca_certificate_expiring_check - computed: true, optional: false, required: false
    get caCertificateExpiringCheck() {
        return this.interpolationForAttribute('ca_certificate_expiring_check');
    }
    // ca_certificate_key_quality_check - computed: true, optional: false, required: false
    get caCertificateKeyQualityCheck() {
        return this.interpolationForAttribute('ca_certificate_key_quality_check');
    }
    // conflicting_client_ids_check - computed: true, optional: false, required: false
    get conflictingClientIdsCheck() {
        return this.interpolationForAttribute('conflicting_client_ids_check');
    }
    // device_certificate_expiring_check - computed: true, optional: false, required: false
    get deviceCertificateExpiringCheck() {
        return this.interpolationForAttribute('device_certificate_expiring_check');
    }
    // device_certificate_key_quality_check - computed: true, optional: false, required: false
    get deviceCertificateKeyQualityCheck() {
        return this.interpolationForAttribute('device_certificate_key_quality_check');
    }
    // device_certificate_shared_check - computed: true, optional: false, required: false
    get deviceCertificateSharedCheck() {
        return this.interpolationForAttribute('device_certificate_shared_check');
    }
    // iot_policy_overly_permissive_check - computed: true, optional: false, required: false
    get iotPolicyOverlyPermissiveCheck() {
        return this.interpolationForAttribute('iot_policy_overly_permissive_check');
    }
    // iot_role_alias_allows_access_to_unused_services_check - computed: true, optional: false, required: false
    get iotRoleAliasAllowsAccessToUnusedServicesCheck() {
        return this.interpolationForAttribute('iot_role_alias_allows_access_to_unused_services_check');
    }
    // iot_role_alias_overly_permissive_check - computed: true, optional: false, required: false
    get iotRoleAliasOverlyPermissiveCheck() {
        return this.interpolationForAttribute('iot_role_alias_overly_permissive_check');
    }
    // logging_disabled_check - computed: true, optional: false, required: false
    get loggingDisabledCheck() {
        return this.interpolationForAttribute('logging_disabled_check');
    }
    // revoked_ca_certificate_still_active_check - computed: true, optional: false, required: false
    get revokedCaCertificateStillActiveCheck() {
        return this.interpolationForAttribute('revoked_ca_certificate_still_active_check');
    }
    // revoked_device_certificate_still_active_check - computed: true, optional: false, required: false
    get revokedDeviceCertificateStillActiveCheck() {
        return this.interpolationForAttribute('revoked_device_certificate_still_active_check');
    }
    // unauthenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
    get unauthenticatedCognitoRoleOverlyPermissiveCheck() {
        return this.interpolationForAttribute('unauthenticated_cognito_role_overly_permissive_check');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations = DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations;
function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authenticated_cognito_role_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct.authenticatedCognitoRoleOverlyPermissiveCheck),
        ca_certificate_expiring_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct.caCertificateExpiringCheck),
        ca_certificate_key_quality_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct.caCertificateKeyQualityCheck),
        conflicting_client_ids_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct.conflictingClientIdsCheck),
        device_certificate_expiring_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct.deviceCertificateExpiringCheck),
        device_certificate_key_quality_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct.deviceCertificateKeyQualityCheck),
        device_certificate_shared_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct.deviceCertificateSharedCheck),
        iot_policy_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct.iotPolicyOverlyPermissiveCheck),
        iot_role_alias_allows_access_to_unused_services_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct.iotRoleAliasAllowsAccessToUnusedServicesCheck),
        iot_role_alias_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct.iotRoleAliasOverlyPermissiveCheck),
        logging_disabled_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct.loggingDisabledCheck),
        revoked_ca_certificate_still_active_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct.revokedCaCertificateStillActiveCheck),
        revoked_device_certificate_still_active_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct.revokedDeviceCertificateStillActiveCheck),
        unauthenticated_cognito_role_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct.unauthenticatedCognitoRoleOverlyPermissiveCheck),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform = dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // target_arn - computed: true, optional: false, required: false
    get targetArn() {
        return this.getStringAttribute('target_arn');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns = DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns;
function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        target_arn: cdktf.stringToTerraform(struct.targetArn),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform = dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform;
class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations extends cdktf.ComplexComputedList {
    // sns - computed: true, optional: false, required: false
    get sns() {
        return this.interpolationForAttribute('sns');
    }
}
exports.DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations = DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations;
function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sns: dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct.sns),
    };
}
exports.dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform = dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html awscc_iot_account_audit_configuration}
*/
class DataAwsccIotAccountAuditConfiguration extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html awscc_iot_account_audit_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotAccountAuditConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_account_audit_configuration',
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
    // account_id - computed: true, optional: false, required: false
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    // audit_check_configurations - computed: true, optional: false, required: false
    get auditCheckConfigurations() {
        return this.interpolationForAttribute('audit_check_configurations');
    }
    // audit_notification_target_configurations - computed: true, optional: false, required: false
    get auditNotificationTargetConfigurations() {
        return this.interpolationForAttribute('audit_notification_target_configurations');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccIotAccountAuditConfiguration = DataAwsccIotAccountAuditConfiguration;
// =================
// STATIC PROPERTIES
// =================
DataAwsccIotAccountAuditConfiguration.tfResourceType = "awscc_iot_account_audit_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1pb3QtYWNjb3VudC1hdWRpdC1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1pb3QtYWNjb3VudC1hdWRpdC1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RkFBdUY7QUFDdkYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsMEdBQTJHLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV2Siw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQU5ELGdPQU1DO0FBRUQsU0FBZ0IscUhBQXFILENBQUMsTUFBbUg7SUFDdlAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFMRCxzUEFLQztBQUVELE1BQWEsdUZBQXdGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwSSw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQU5ELDBMQU1DO0FBRUQsU0FBZ0Isa0dBQWtHLENBQUMsTUFBZ0c7SUFDak4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFMRCxn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O0lBSUQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQVcsRUFBRSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUE3RUgsc0ZBOEVDO0FBNUVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csb0RBQWMsR0FBVyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdF9hY2NvdW50X2F1ZGl0X2NvbmZpZ3VyYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9pb3RfYWNjb3VudF9hdWRpdF9jb25maWd1cmF0aW9uLmh0bWwjaWQgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbiNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0F1dGhlbnRpY2F0ZWRDb2duaXRvUm9sZU92ZXJseVBlcm1pc3NpdmVDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0NhQ2VydGlmaWNhdGVFeHBpcmluZ0NoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ2FDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ2FDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNDYUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ2FDZXJ0aWZpY2F0ZUtleVF1YWxpdHlDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNDYUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ29uZmxpY3RpbmdDbGllbnRJZHNDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0NvbmZsaWN0aW5nQ2xpZW50SWRzQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ29uZmxpY3RpbmdDbGllbnRJZHNDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0RldmljZUNlcnRpZmljYXRlRXhwaXJpbmdDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0RldmljZUNlcnRpZmljYXRlRXhwaXJpbmdDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNEZXZpY2VDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNEZXZpY2VDZXJ0aWZpY2F0ZUtleVF1YWxpdHlDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0RldmljZUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0RldmljZUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zRGV2aWNlQ2VydGlmaWNhdGVTaGFyZWRDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0RldmljZUNlcnRpZmljYXRlU2hhcmVkQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zRGV2aWNlQ2VydGlmaWNhdGVTaGFyZWRDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFBvbGljeU92ZXJseVBlcm1pc3NpdmVDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFBvbGljeU92ZXJseVBlcm1pc3NpdmVDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNJb3RQb2xpY3lPdmVybHlQZXJtaXNzaXZlQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNJb3RSb2xlQWxpYXNBbGxvd3NBY2Nlc3NUb1VudXNlZFNlcnZpY2VzQ2hlY2sgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNJb3RSb2xlQWxpYXNBbGxvd3NBY2Nlc3NUb1VudXNlZFNlcnZpY2VzQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zSW90Um9sZUFsaWFzQWxsb3dzQWNjZXNzVG9VbnVzZWRTZXJ2aWNlc0NoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zSW90Um9sZUFsaWFzT3Zlcmx5UGVybWlzc2l2ZUNoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zSW90Um9sZUFsaWFzT3Zlcmx5UGVybWlzc2l2ZUNoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFJvbGVBbGlhc092ZXJseVBlcm1pc3NpdmVDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0xvZ2dpbmdEaXNhYmxlZENoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zTG9nZ2luZ0Rpc2FibGVkQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zTG9nZ2luZ0Rpc2FibGVkQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNSZXZva2VkQ2FDZXJ0aWZpY2F0ZVN0aWxsQWN0aXZlQ2hlY2sgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNSZXZva2VkQ2FDZXJ0aWZpY2F0ZVN0aWxsQWN0aXZlQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zUmV2b2tlZENhQ2VydGlmaWNhdGVTdGlsbEFjdGl2ZUNoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zUmV2b2tlZERldmljZUNlcnRpZmljYXRlU3RpbGxBY3RpdmVDaGVjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc1Jldm9rZWREZXZpY2VDZXJ0aWZpY2F0ZVN0aWxsQWN0aXZlQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zUmV2b2tlZERldmljZUNlcnRpZmljYXRlU3RpbGxBY3RpdmVDaGVjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc1VuYXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zVW5hdXRoZW50aWNhdGVkQ29nbml0b1JvbGVPdmVybHlQZXJtaXNzaXZlQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zVW5hdXRoZW50aWNhdGVkQ29nbml0b1JvbGVPdmVybHlQZXJtaXNzaXZlQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdXRoZW50aWNhdGVkX2NvZ25pdG9fcm9sZV9vdmVybHlfcGVybWlzc2l2ZV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0ZWRDb2duaXRvUm9sZU92ZXJseVBlcm1pc3NpdmVDaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdXRoZW50aWNhdGVkX2NvZ25pdG9fcm9sZV9vdmVybHlfcGVybWlzc2l2ZV9jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNhX2NlcnRpZmljYXRlX2V4cGlyaW5nX2NoZWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FfY2VydGlmaWNhdGVfZXhwaXJpbmdfY2hlY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjYV9jZXJ0aWZpY2F0ZV9rZXlfcXVhbGl0eV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhQ2VydGlmaWNhdGVLZXlRdWFsaXR5Q2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FfY2VydGlmaWNhdGVfa2V5X3F1YWxpdHlfY2hlY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb25mbGljdGluZ19jbGllbnRfaWRzX2NoZWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZmxpY3RpbmdDbGllbnRJZHNDaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25mbGljdGluZ19jbGllbnRfaWRzX2NoZWNrJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGV2aWNlX2NlcnRpZmljYXRlX2V4cGlyaW5nX2NoZWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlQ2VydGlmaWNhdGVFeHBpcmluZ0NoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RldmljZV9jZXJ0aWZpY2F0ZV9leHBpcmluZ19jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRldmljZV9jZXJ0aWZpY2F0ZV9rZXlfcXVhbGl0eV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RldmljZV9jZXJ0aWZpY2F0ZV9rZXlfcXVhbGl0eV9jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRldmljZV9jZXJ0aWZpY2F0ZV9zaGFyZWRfY2hlY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VDZXJ0aWZpY2F0ZVNoYXJlZENoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RldmljZV9jZXJ0aWZpY2F0ZV9zaGFyZWRfY2hlY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3RfcG9saWN5X292ZXJseV9wZXJtaXNzaXZlX2NoZWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW90UG9saWN5T3Zlcmx5UGVybWlzc2l2ZUNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lvdF9wb2xpY3lfb3Zlcmx5X3Blcm1pc3NpdmVfY2hlY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3Rfcm9sZV9hbGlhc19hbGxvd3NfYWNjZXNzX3RvX3VudXNlZF9zZXJ2aWNlc19jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvdFJvbGVBbGlhc0FsbG93c0FjY2Vzc1RvVW51c2VkU2VydmljZXNDaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpb3Rfcm9sZV9hbGlhc19hbGxvd3NfYWNjZXNzX3RvX3VudXNlZF9zZXJ2aWNlc19jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlvdF9yb2xlX2FsaWFzX292ZXJseV9wZXJtaXNzaXZlX2NoZWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW90Um9sZUFsaWFzT3Zlcmx5UGVybWlzc2l2ZUNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lvdF9yb2xlX2FsaWFzX292ZXJseV9wZXJtaXNzaXZlX2NoZWNrJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbG9nZ2luZ19kaXNhYmxlZF9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdEaXNhYmxlZENoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ2dpbmdfZGlzYWJsZWRfY2hlY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXZva2VkX2NhX2NlcnRpZmljYXRlX3N0aWxsX2FjdGl2ZV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJldm9rZWRDYUNlcnRpZmljYXRlU3RpbGxBY3RpdmVDaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXZva2VkX2NhX2NlcnRpZmljYXRlX3N0aWxsX2FjdGl2ZV9jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJldm9rZWRfZGV2aWNlX2NlcnRpZmljYXRlX3N0aWxsX2FjdGl2ZV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJldm9rZWREZXZpY2VDZXJ0aWZpY2F0ZVN0aWxsQWN0aXZlQ2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmV2b2tlZF9kZXZpY2VfY2VydGlmaWNhdGVfc3RpbGxfYWN0aXZlX2NoZWNrJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdW5hdXRoZW50aWNhdGVkX2NvZ25pdG9fcm9sZV9vdmVybHlfcGVybWlzc2l2ZV9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVuYXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VuYXV0aGVudGljYXRlZF9jb2duaXRvX3JvbGVfb3Zlcmx5X3Blcm1pc3NpdmVfY2hlY2snKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY2F0ZWRfY29nbml0b19yb2xlX292ZXJseV9wZXJtaXNzaXZlX2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoZW50aWNhdGVkQ29nbml0b1JvbGVPdmVybHlQZXJtaXNzaXZlQ2hlY2spLFxuICAgIGNhX2NlcnRpZmljYXRlX2V4cGlyaW5nX2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zQ2FDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhQ2VydGlmaWNhdGVFeHBpcmluZ0NoZWNrKSxcbiAgICBjYV9jZXJ0aWZpY2F0ZV9rZXlfcXVhbGl0eV9jaGVjazogZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0NhQ2VydGlmaWNhdGVLZXlRdWFsaXR5Q2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhQ2VydGlmaWNhdGVLZXlRdWFsaXR5Q2hlY2spLFxuICAgIGNvbmZsaWN0aW5nX2NsaWVudF9pZHNfY2hlY2s6IGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNDb25mbGljdGluZ0NsaWVudElkc0NoZWNrVG9UZXJyYWZvcm0oc3RydWN0IS5jb25mbGljdGluZ0NsaWVudElkc0NoZWNrKSxcbiAgICBkZXZpY2VfY2VydGlmaWNhdGVfZXhwaXJpbmdfY2hlY2s6IGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNEZXZpY2VDZXJ0aWZpY2F0ZUV4cGlyaW5nQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZUNlcnRpZmljYXRlRXhwaXJpbmdDaGVjayksXG4gICAgZGV2aWNlX2NlcnRpZmljYXRlX2tleV9xdWFsaXR5X2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zRGV2aWNlQ2VydGlmaWNhdGVLZXlRdWFsaXR5Q2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZUNlcnRpZmljYXRlS2V5UXVhbGl0eUNoZWNrKSxcbiAgICBkZXZpY2VfY2VydGlmaWNhdGVfc2hhcmVkX2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zRGV2aWNlQ2VydGlmaWNhdGVTaGFyZWRDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlQ2VydGlmaWNhdGVTaGFyZWRDaGVjayksXG4gICAgaW90X3BvbGljeV9vdmVybHlfcGVybWlzc2l2ZV9jaGVjazogZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFBvbGljeU92ZXJseVBlcm1pc3NpdmVDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEuaW90UG9saWN5T3Zlcmx5UGVybWlzc2l2ZUNoZWNrKSxcbiAgICBpb3Rfcm9sZV9hbGlhc19hbGxvd3NfYWNjZXNzX3RvX3VudXNlZF9zZXJ2aWNlc19jaGVjazogZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFJvbGVBbGlhc0FsbG93c0FjY2Vzc1RvVW51c2VkU2VydmljZXNDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEuaW90Um9sZUFsaWFzQWxsb3dzQWNjZXNzVG9VbnVzZWRTZXJ2aWNlc0NoZWNrKSxcbiAgICBpb3Rfcm9sZV9hbGlhc19vdmVybHlfcGVybWlzc2l2ZV9jaGVjazogZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc0lvdFJvbGVBbGlhc092ZXJseVBlcm1pc3NpdmVDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEuaW90Um9sZUFsaWFzT3Zlcmx5UGVybWlzc2l2ZUNoZWNrKSxcbiAgICBsb2dnaW5nX2Rpc2FibGVkX2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zTG9nZ2luZ0Rpc2FibGVkQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ2dpbmdEaXNhYmxlZENoZWNrKSxcbiAgICByZXZva2VkX2NhX2NlcnRpZmljYXRlX3N0aWxsX2FjdGl2ZV9jaGVjazogZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Q2hlY2tDb25maWd1cmF0aW9uc1Jldm9rZWRDYUNlcnRpZmljYXRlU3RpbGxBY3RpdmVDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEucmV2b2tlZENhQ2VydGlmaWNhdGVTdGlsbEFjdGl2ZUNoZWNrKSxcbiAgICByZXZva2VkX2RldmljZV9jZXJ0aWZpY2F0ZV9zdGlsbF9hY3RpdmVfY2hlY2s6IGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdENoZWNrQ29uZmlndXJhdGlvbnNSZXZva2VkRGV2aWNlQ2VydGlmaWNhdGVTdGlsbEFjdGl2ZUNoZWNrVG9UZXJyYWZvcm0oc3RydWN0IS5yZXZva2VkRGV2aWNlQ2VydGlmaWNhdGVTdGlsbEFjdGl2ZUNoZWNrKSxcbiAgICB1bmF1dGhlbnRpY2F0ZWRfY29nbml0b19yb2xlX292ZXJseV9wZXJtaXNzaXZlX2NoZWNrOiBkYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXRDaGVja0NvbmZpZ3VyYXRpb25zVW5hdXRoZW50aWNhdGVkQ29nbml0b1JvbGVPdmVybHlQZXJtaXNzaXZlQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuYXV0aGVudGljYXRlZENvZ25pdG9Sb2xlT3Zlcmx5UGVybWlzc2l2ZUNoZWNrKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Tm90aWZpY2F0aW9uVGFyZ2V0Q29uZmlndXJhdGlvbnNTbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Tm90aWZpY2F0aW9uVGFyZ2V0Q29uZmlndXJhdGlvbnNTbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXROb3RpZmljYXRpb25UYXJnZXRDb25maWd1cmF0aW9uc1Nucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0YXJnZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldEFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdE5vdGlmaWNhdGlvblRhcmdldENvbmZpZ3VyYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NucycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkF1ZGl0Tm90aWZpY2F0aW9uVGFyZ2V0Q29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RBY2NvdW50QXVkaXRDb25maWd1cmF0aW9uQXVkaXROb3RpZmljYXRpb25UYXJnZXRDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzbnM6IGRhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25BdWRpdE5vdGlmaWNhdGlvblRhcmdldENvbmZpZ3VyYXRpb25zU25zVG9UZXJyYWZvcm0oc3RydWN0IS5zbnMpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvaW90X2FjY291bnRfYXVkaXRfY29uZmlndXJhdGlvbi5odG1sIGF3c2NjX2lvdF9hY2NvdW50X2F1ZGl0X2NvbmZpZ3VyYXRpb259XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2lvdF9hY2NvdW50X2F1ZGl0X2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvaW90X2FjY291bnRfYXVkaXRfY29uZmlndXJhdGlvbi5odG1sIGF3c2NjX2lvdF9hY2NvdW50X2F1ZGl0X2NvbmZpZ3VyYXRpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0lvdEFjY291bnRBdWRpdENvbmZpZ3VyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjSW90QWNjb3VudEF1ZGl0Q29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfaW90X2FjY291bnRfYXVkaXRfY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gYXVkaXRfY2hlY2tfY29uZmlndXJhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdWRpdENoZWNrQ29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXVkaXRfY2hlY2tfY29uZmlndXJhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdWRpdF9ub3RpZmljYXRpb25fdGFyZ2V0X2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXVkaXROb3RpZmljYXRpb25UYXJnZXRDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdWRpdF9ub3RpZmljYXRpb25fdGFyZ2V0X2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19