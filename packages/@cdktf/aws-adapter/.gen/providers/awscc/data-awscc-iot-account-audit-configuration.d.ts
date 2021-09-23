import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotAccountAuditConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html#id DataAwsccIotAccountAuditConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations extends cdktf.ComplexComputedList {
    get authenticatedCognitoRoleOverlyPermissiveCheck(): any;
    get caCertificateExpiringCheck(): any;
    get caCertificateKeyQualityCheck(): any;
    get conflictingClientIdsCheck(): any;
    get deviceCertificateExpiringCheck(): any;
    get deviceCertificateKeyQualityCheck(): any;
    get deviceCertificateSharedCheck(): any;
    get iotPolicyOverlyPermissiveCheck(): any;
    get iotRoleAliasAllowsAccessToUnusedServicesCheck(): any;
    get iotRoleAliasOverlyPermissiveCheck(): any;
    get loggingDisabledCheck(): any;
    get revokedCaCertificateStillActiveCheck(): any;
    get revokedDeviceCertificateStillActiveCheck(): any;
    get unauthenticatedCognitoRoleOverlyPermissiveCheck(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns extends cdktf.ComplexComputedList {
    get enabled(): any;
    get roleArn(): string;
    get targetArn(): string;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any;
export declare class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations extends cdktf.ComplexComputedList {
    get sns(): any;
}
export declare function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html awscc_iot_account_audit_configuration}
*/
export declare class DataAwsccIotAccountAuditConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configuration.html awscc_iot_account_audit_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotAccountAuditConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotAccountAuditConfigurationConfig);
    get accountId(): string;
    get auditCheckConfigurations(): any;
    get auditNotificationTargetConfigurations(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get roleArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
