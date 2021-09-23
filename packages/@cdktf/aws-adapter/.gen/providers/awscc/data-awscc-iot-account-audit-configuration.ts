// https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotAccountAuditConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html#id DataAwsccIotAccountAuditConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations extends cdktf.ComplexComputedList {

  // authenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
  public get authenticatedCognitoRoleOverlyPermissiveCheck() {
    return this.interpolationForAttribute('authenticated_cognito_role_overly_permissive_check') as any;
  }

  // ca_certificate_expiring_check - computed: true, optional: false, required: false
  public get caCertificateExpiringCheck() {
    return this.interpolationForAttribute('ca_certificate_expiring_check') as any;
  }

  // ca_certificate_key_quality_check - computed: true, optional: false, required: false
  public get caCertificateKeyQualityCheck() {
    return this.interpolationForAttribute('ca_certificate_key_quality_check') as any;
  }

  // conflicting_client_ids_check - computed: true, optional: false, required: false
  public get conflictingClientIdsCheck() {
    return this.interpolationForAttribute('conflicting_client_ids_check') as any;
  }

  // device_certificate_expiring_check - computed: true, optional: false, required: false
  public get deviceCertificateExpiringCheck() {
    return this.interpolationForAttribute('device_certificate_expiring_check') as any;
  }

  // device_certificate_key_quality_check - computed: true, optional: false, required: false
  public get deviceCertificateKeyQualityCheck() {
    return this.interpolationForAttribute('device_certificate_key_quality_check') as any;
  }

  // device_certificate_shared_check - computed: true, optional: false, required: false
  public get deviceCertificateSharedCheck() {
    return this.interpolationForAttribute('device_certificate_shared_check') as any;
  }

  // iot_policy_overly_permissive_check - computed: true, optional: false, required: false
  public get iotPolicyOverlyPermissiveCheck() {
    return this.interpolationForAttribute('iot_policy_overly_permissive_check') as any;
  }

  // iot_role_alias_allows_access_to_unused_services_check - computed: true, optional: false, required: false
  public get iotRoleAliasAllowsAccessToUnusedServicesCheck() {
    return this.interpolationForAttribute('iot_role_alias_allows_access_to_unused_services_check') as any;
  }

  // iot_role_alias_overly_permissive_check - computed: true, optional: false, required: false
  public get iotRoleAliasOverlyPermissiveCheck() {
    return this.interpolationForAttribute('iot_role_alias_overly_permissive_check') as any;
  }

  // logging_disabled_check - computed: true, optional: false, required: false
  public get loggingDisabledCheck() {
    return this.interpolationForAttribute('logging_disabled_check') as any;
  }

  // revoked_ca_certificate_still_active_check - computed: true, optional: false, required: false
  public get revokedCaCertificateStillActiveCheck() {
    return this.interpolationForAttribute('revoked_ca_certificate_still_active_check') as any;
  }

  // revoked_device_certificate_still_active_check - computed: true, optional: false, required: false
  public get revokedDeviceCertificateStillActiveCheck() {
    return this.interpolationForAttribute('revoked_device_certificate_still_active_check') as any;
  }

  // unauthenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
  public get unauthenticatedCognitoRoleOverlyPermissiveCheck() {
    return this.interpolationForAttribute('unauthenticated_cognito_role_overly_permissive_check') as any;
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authenticated_cognito_role_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
    ca_certificate_expiring_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct!.caCertificateExpiringCheck),
    ca_certificate_key_quality_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct!.caCertificateKeyQualityCheck),
    conflicting_client_ids_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct!.conflictingClientIdsCheck),
    device_certificate_expiring_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct!.deviceCertificateExpiringCheck),
    device_certificate_key_quality_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct!.deviceCertificateKeyQualityCheck),
    device_certificate_shared_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct!.deviceCertificateSharedCheck),
    iot_policy_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct!.iotPolicyOverlyPermissiveCheck),
    iot_role_alias_allows_access_to_unused_services_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
    iot_role_alias_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
    logging_disabled_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct!.loggingDisabledCheck),
    revoked_ca_certificate_still_active_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct!.revokedCaCertificateStillActiveCheck),
    revoked_device_certificate_still_active_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
    unauthenticated_cognito_role_overly_permissive_check: dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations extends cdktf.ComplexComputedList {

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }
}

export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns: dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct!.sns),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html awscc_iot_account_audit_configuration}
*/
export class DataAwsccIotAccountAuditConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_account_audit_configuration";

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
  public constructor(scope: Construct, id: string, config: DataAwsccIotAccountAuditConfigurationConfig) {
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
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // audit_check_configurations - computed: true, optional: false, required: false
  public get auditCheckConfigurations() {
    return this.interpolationForAttribute('audit_check_configurations') as any;
  }

  // audit_notification_target_configurations - computed: true, optional: false, required: false
  public get auditNotificationTargetConfigurations() {
    return this.interpolationForAttribute('audit_notification_target_configurations') as any;
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
