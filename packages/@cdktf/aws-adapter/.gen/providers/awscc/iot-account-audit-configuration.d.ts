import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any;
export interface IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#enabled IotAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any;
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
export declare function iotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurations): any;
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
export declare function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any;
export interface IotAccountAuditConfigurationAuditNotificationTargetConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html#sns IotAccountAuditConfiguration#sns}
    */
    readonly sns?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns;
}
export declare function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html awscc_iot_account_audit_configuration}
*/
export declare class IotAccountAuditConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_account_audit_configuration.html awscc_iot_account_audit_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotAccountAuditConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: IotAccountAuditConfigurationConfig);
    private _accountId;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _auditCheckConfigurations;
    get auditCheckConfigurations(): IotAccountAuditConfigurationAuditCheckConfigurations;
    set auditCheckConfigurations(value: IotAccountAuditConfigurationAuditCheckConfigurations);
    get auditCheckConfigurationsInput(): IotAccountAuditConfigurationAuditCheckConfigurations;
    private _auditNotificationTargetConfigurations?;
    get auditNotificationTargetConfigurations(): IotAccountAuditConfigurationAuditNotificationTargetConfigurations;
    set auditNotificationTargetConfigurations(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurations);
    resetAuditNotificationTargetConfigurations(): void;
    get auditNotificationTargetConfigurationsInput(): IotAccountAuditConfigurationAuditNotificationTargetConfigurations | undefined;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
