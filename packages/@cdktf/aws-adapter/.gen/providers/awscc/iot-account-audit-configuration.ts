// https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotAccountAuditConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#account_id IotAccountAuditConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Specifies which audit checks are enabled and disabled for this account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#audit_check_configurations IotAccountAuditConfiguration#audit_check_configurations}
  */
  readonly auditCheckConfigurations: IotAccountAuditConfigurationAuditCheckConfigurations;
  /**
  * Information about the targets to which audit notifications are sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#audit_notification_target_configurations IotAccountAuditConfiguration#audit_notification_target_configurations}
  */
  readonly auditNotificationTargetConfigurations?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations;
  /**
  * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#role_arn IotAccountAuditConfiguration#role_arn}
  */
  readonly roleArn: string;
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface IotAccountAuditConfigurationAuditCheckConfigurations {
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#authenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}
  */
  readonly authenticatedCognitoRoleOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#ca_certificate_expiring_check IotAccountAuditConfiguration#ca_certificate_expiring_check}
  */
  readonly caCertificateExpiringCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#ca_certificate_key_quality_check IotAccountAuditConfiguration#ca_certificate_key_quality_check}
  */
  readonly caCertificateKeyQualityCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#conflicting_client_ids_check IotAccountAuditConfiguration#conflicting_client_ids_check}
  */
  readonly conflictingClientIdsCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#device_certificate_expiring_check IotAccountAuditConfiguration#device_certificate_expiring_check}
  */
  readonly deviceCertificateExpiringCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#device_certificate_key_quality_check IotAccountAuditConfiguration#device_certificate_key_quality_check}
  */
  readonly deviceCertificateKeyQualityCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#device_certificate_shared_check IotAccountAuditConfiguration#device_certificate_shared_check}
  */
  readonly deviceCertificateSharedCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#iot_policy_overly_permissive_check IotAccountAuditConfiguration#iot_policy_overly_permissive_check}
  */
  readonly iotPolicyOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#iot_role_alias_allows_access_to_unused_services_check IotAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}
  */
  readonly iotRoleAliasAllowsAccessToUnusedServicesCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#iot_role_alias_overly_permissive_check IotAccountAuditConfiguration#iot_role_alias_overly_permissive_check}
  */
  readonly iotRoleAliasOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#logging_disabled_check IotAccountAuditConfiguration#logging_disabled_check}
  */
  readonly loggingDisabledCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#revoked_ca_certificate_still_active_check IotAccountAuditConfiguration#revoked_ca_certificate_still_active_check}
  */
  readonly revokedCaCertificateStillActiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#revoked_device_certificate_still_active_check IotAccountAuditConfiguration#revoked_device_certificate_still_active_check}
  */
  readonly revokedDeviceCertificateStillActiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck;
  /**
  * The configuration for a specific audit check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#unauthenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}
  */
  readonly unauthenticatedCognitoRoleOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authenticated_cognito_role_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
    ca_certificate_expiring_check: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct!.caCertificateExpiringCheck),
    ca_certificate_key_quality_check: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct!.caCertificateKeyQualityCheck),
    conflicting_client_ids_check: iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct!.conflictingClientIdsCheck),
    device_certificate_expiring_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct!.deviceCertificateExpiringCheck),
    device_certificate_key_quality_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct!.deviceCertificateKeyQualityCheck),
    device_certificate_shared_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct!.deviceCertificateSharedCheck),
    iot_policy_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct!.iotPolicyOverlyPermissiveCheck),
    iot_role_alias_allows_access_to_unused_services_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
    iot_role_alias_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
    logging_disabled_check: iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct!.loggingDisabledCheck),
    revoked_ca_certificate_still_active_check: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct!.revokedCaCertificateStillActiveCheck),
    revoked_device_certificate_still_active_check: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
    unauthenticated_cognito_role_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
  }
}

export interface IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns {
  /**
  * True if notifications to the target are enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ARN of the role that grants permission to send notifications to the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#role_arn IotAccountAuditConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the target (SNS topic) to which audit notifications are sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#target_arn IotAccountAuditConfiguration#target_arn}
  */
  readonly targetArn?: string;
}

export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotAccountAuditConfigurationAuditNotificationTargetConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#sns IotAccountAuditConfiguration#sns}
  */
  readonly sns?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns;
}

export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct!.sns),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html awscc_iot_account_audit_configuration}
*/
export class IotAccountAuditConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_account_audit_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html awscc_iot_account_audit_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotAccountAuditConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IotAccountAuditConfigurationConfig) {
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
    this._accountId = config.accountId;
    this._auditCheckConfigurations = config.auditCheckConfigurations;
    this._auditNotificationTargetConfigurations = config.auditNotificationTargetConfigurations;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // audit_check_configurations - computed: false, optional: false, required: true
  private _auditCheckConfigurations: IotAccountAuditConfigurationAuditCheckConfigurations;
  public get auditCheckConfigurations() {
    return this.interpolationForAttribute('audit_check_configurations') as any;
  }
  public set auditCheckConfigurations(value: IotAccountAuditConfigurationAuditCheckConfigurations) {
    this._auditCheckConfigurations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCheckConfigurationsInput() {
    return this._auditCheckConfigurations
  }

  // audit_notification_target_configurations - computed: false, optional: true, required: false
  private _auditNotificationTargetConfigurations?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations;
  public get auditNotificationTargetConfigurations() {
    return this.interpolationForAttribute('audit_notification_target_configurations') as any;
  }
  public set auditNotificationTargetConfigurations(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurations ) {
    this._auditNotificationTargetConfigurations = value;
  }
  public resetAuditNotificationTargetConfigurations() {
    this._auditNotificationTargetConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNotificationTargetConfigurationsInput() {
    return this._auditNotificationTargetConfigurations
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      audit_check_configurations: iotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(this._auditCheckConfigurations),
      audit_notification_target_configurations: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(this._auditNotificationTargetConfigurations),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
