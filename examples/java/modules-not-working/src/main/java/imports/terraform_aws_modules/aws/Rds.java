/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package imports.terraform_aws_modules.aws;

/**
 * Defines an Rds based on a Terraform module.
 * <p>
 * Docs at Terraform Registry: {@link https://registry.terraform.io/modules/terraform-aws-modules/rds/aws/5.0.0 terraform-aws-modules/rds/aws}
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.91.0 (build 1b1f239)", date = "2023-11-27T19:56:36.282Z")
@software.amazon.jsii.Jsii(module = imports.terraform_aws_modules.aws.$Module.class, fqn = "rds.Rds")
public class Rds extends com.hashicorp.cdktf.TerraformModule {

    protected Rds(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rds(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Rds(final @org.jetbrains.annotations.NotNull software.constructs.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull imports.terraform_aws_modules.aws.RdsConfig config) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(config, "config is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> synthesizeAttributes() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "synthesizeAttributes", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceAddressOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceAddressOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceAvailabilityZoneOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceAvailabilityZoneOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceCaCertIdentifierOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceCaCertIdentifierOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceCloudwatchLogGroupsOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceCloudwatchLogGroupsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceDomainIamRoleNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDomainIamRoleNameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceDomainOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDomainOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceEndpointOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceEndpointOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceEngineOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceEngineOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceEngineVersionActualOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceEngineVersionActualOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceHostedZoneIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceHostedZoneIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceNameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstancePasswordOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstancePasswordOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstancePortOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstancePortOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceResourceIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceResourceIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceStatusOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStatusOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceUsernameOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceUsernameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbOptionGroupArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbOptionGroupArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbOptionGroupIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbOptionGroupIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbParameterGroupArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbParameterGroupArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbParameterGroupIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbParameterGroupIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbSubnetGroupArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbSubnetGroupArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDbSubnetGroupIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dbSubnetGroupIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getEnhancedMonitoringIamRoleArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "enhancedMonitoringIamRoleArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getEnhancedMonitoringIamRoleNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "enhancedMonitoringIamRoleNameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "identifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIdentifier(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "identifier", java.util.Objects.requireNonNull(value, "identifier is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object getOptions() {
        return software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    public void setOptions(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.set(this, "options", java.util.Objects.requireNonNull(value, "options is required"));
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getAllocatedStorage() {
        return software.amazon.jsii.Kernel.get(this, "allocatedStorage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setAllocatedStorage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "allocatedStorage", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getAllowMajorVersionUpgrade() {
        return software.amazon.jsii.Kernel.get(this, "allowMajorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setAllowMajorVersionUpgrade(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowMajorVersionUpgrade", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getApplyImmediately() {
        return software.amazon.jsii.Kernel.get(this, "applyImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setApplyImmediately(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "applyImmediately", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getAutoMinorVersionUpgrade() {
        return software.amazon.jsii.Kernel.get(this, "autoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setAutoMinorVersionUpgrade(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoMinorVersionUpgrade", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getAvailabilityZone() {
        return software.amazon.jsii.Kernel.get(this, "availabilityZone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setAvailabilityZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "availabilityZone", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getBackupWindow() {
        return software.amazon.jsii.Kernel.get(this, "backupWindow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setBackupWindow(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupWindow", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getCaCertIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "caCertIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setCaCertIdentifier(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "caCertIdentifier", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getCharacterSetName() {
        return software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setCharacterSetName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "characterSetName", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getCloudwatchLogGroupKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "cloudwatchLogGroupKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setCloudwatchLogGroupKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cloudwatchLogGroupKmsKeyId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getCloudwatchLogGroupRetentionInDays() {
        return software.amazon.jsii.Kernel.get(this, "cloudwatchLogGroupRetentionInDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setCloudwatchLogGroupRetentionInDays(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cloudwatchLogGroupRetentionInDays", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCopyTagsToSnapshot() {
        return software.amazon.jsii.Kernel.get(this, "copyTagsToSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCopyTagsToSnapshot(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "copyTagsToSnapshot", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateCloudwatchLogGroup() {
        return software.amazon.jsii.Kernel.get(this, "createCloudwatchLogGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateCloudwatchLogGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createCloudwatchLogGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbInstance() {
        return software.amazon.jsii.Kernel.get(this, "createDbInstance", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDbInstance(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDbInstance", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbOptionGroup() {
        return software.amazon.jsii.Kernel.get(this, "createDbOptionGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDbOptionGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDbOptionGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbParameterGroup() {
        return software.amazon.jsii.Kernel.get(this, "createDbParameterGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDbParameterGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDbParameterGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbSubnetGroup() {
        return software.amazon.jsii.Kernel.get(this, "createDbSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDbSubnetGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDbSubnetGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateMonitoringRole() {
        return software.amazon.jsii.Kernel.get(this, "createMonitoringRole", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateMonitoringRole(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createMonitoringRole", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRandomPassword() {
        return software.amazon.jsii.Kernel.get(this, "createRandomPassword", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateRandomPassword(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createRandomPassword", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbInstanceTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dbInstanceTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDbInstanceTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDbName() {
        return software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDbName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbOptionGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dbOptionGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDbOptionGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dbOptionGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbParameterGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dbParameterGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDbParameterGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dbParameterGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDbSubnetGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "dbSubnetGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDbSubnetGroupDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbSubnetGroupDescription", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDbSubnetGroupName() {
        return software.amazon.jsii.Kernel.get(this, "dbSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDbSubnetGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbSubnetGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbSubnetGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dbSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDbSubnetGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dbSubnetGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDbSubnetGroupUseNamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "dbSubnetGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDbSubnetGroupUseNamePrefix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dbSubnetGroupUseNamePrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDeleteAutomatedBackups() {
        return software.amazon.jsii.Kernel.get(this, "deleteAutomatedBackups", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDeleteAutomatedBackups(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deleteAutomatedBackups", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDomain() {
        return software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDomain(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domain", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDomainIamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "domainIamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDomainIamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainIamRoleName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getEnabledCloudwatchLogsExports() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "enabledCloudwatchLogsExports", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setEnabledCloudwatchLogsExports(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "enabledCloudwatchLogsExports", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setEngine(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setEngineVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFamily() {
        return software.amazon.jsii.Kernel.get(this, "family", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFamily(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "family", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFinalSnapshotIdentifierPrefix() {
        return software.amazon.jsii.Kernel.get(this, "finalSnapshotIdentifierPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFinalSnapshotIdentifierPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "finalSnapshotIdentifierPrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIamDatabaseAuthenticationEnabled() {
        return software.amazon.jsii.Kernel.get(this, "iamDatabaseAuthenticationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIamDatabaseAuthenticationEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "iamDatabaseAuthenticationEnabled", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setInstanceClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceClass", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getInstanceUseIdentifierPrefix() {
        return software.amazon.jsii.Kernel.get(this, "instanceUseIdentifierPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setInstanceUseIdentifierPrefix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "instanceUseIdentifierPrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getIops() {
        return software.amazon.jsii.Kernel.get(this, "iops", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setIops(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "iops", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getLicenseModel() {
        return software.amazon.jsii.Kernel.get(this, "licenseModel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setLicenseModel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "licenseModel", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getMaintenanceWindow() {
        return software.amazon.jsii.Kernel.get(this, "maintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setMaintenanceWindow(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "maintenanceWindow", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getMajorEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "majorEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setMajorEngineVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "majorEngineVersion", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getMaxAllocatedStorage() {
        return software.amazon.jsii.Kernel.get(this, "maxAllocatedStorage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setMaxAllocatedStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAllocatedStorage", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getMonitoringInterval() {
        return software.amazon.jsii.Kernel.get(this, "monitoringInterval", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setMonitoringInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "monitoringInterval", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "monitoringRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setMonitoringRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "monitoringRoleArn", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleDescription() {
        return software.amazon.jsii.Kernel.get(this, "monitoringRoleDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setMonitoringRoleDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "monitoringRoleDescription", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleName() {
        return software.amazon.jsii.Kernel.get(this, "monitoringRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setMonitoringRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "monitoringRoleName", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getMonitoringRoleUseNamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "monitoringRoleUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setMonitoringRoleUseNamePrefix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "monitoringRoleUseNamePrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getMultiAz() {
        return software.amazon.jsii.Kernel.get(this, "multiAz", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setMultiAz(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "multiAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOptionGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "optionGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOptionGroupDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "optionGroupDescription", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOptionGroupName() {
        return software.amazon.jsii.Kernel.get(this, "optionGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOptionGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "optionGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOptionGroupTimeouts() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "optionGroupTimeouts", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setOptionGroupTimeouts(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "optionGroupTimeouts", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOptionGroupUseNamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "optionGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOptionGroupUseNamePrefix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "optionGroupUseNamePrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getParameterGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "parameterGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setParameterGroupDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "parameterGroupDescription", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getParameterGroupName() {
        return software.amazon.jsii.Kernel.get(this, "parameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setParameterGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "parameterGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getParameterGroupUseNamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "parameterGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setParameterGroupUseNamePrefix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "parameterGroupUseNamePrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getParameters() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPerformanceInsightsEnabled() {
        return software.amazon.jsii.Kernel.get(this, "performanceInsightsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPerformanceInsightsEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "performanceInsightsEnabled", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPerformanceInsightsKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "performanceInsightsKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPerformanceInsightsKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "performanceInsightsKmsKeyId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getPerformanceInsightsRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "performanceInsightsRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setPerformanceInsightsRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "performanceInsightsRetentionPeriod", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPort() {
        return software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPort(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "port", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPubliclyAccessible() {
        return software.amazon.jsii.Kernel.get(this, "publiclyAccessible", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPubliclyAccessible(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publiclyAccessible", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPutinKhuylo() {
        return software.amazon.jsii.Kernel.get(this, "putinKhuylo", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPutinKhuylo(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "putinKhuylo", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getRandomPasswordLength() {
        return software.amazon.jsii.Kernel.get(this, "randomPasswordLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setRandomPasswordLength(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "randomPasswordLength", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getReplicaMode() {
        return software.amazon.jsii.Kernel.get(this, "replicaMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setReplicaMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "replicaMode", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getReplicateSourceDb() {
        return software.amazon.jsii.Kernel.get(this, "replicateSourceDb", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setReplicateSourceDb(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "replicateSourceDb", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRestoreToPointInTime() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "restoreToPointInTime", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setRestoreToPointInTime(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "restoreToPointInTime", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getS3Import() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "s3Import", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setS3Import(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "s3Import", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getSkipFinalSnapshot() {
        return software.amazon.jsii.Kernel.get(this, "skipFinalSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setSkipFinalSnapshot(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "skipFinalSnapshot", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getSnapshotIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "snapshotIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setSnapshotIdentifier(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snapshotIdentifier", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getStorageEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "storageEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setStorageEncrypted(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "storageEncrypted", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getStorageType() {
        return software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setStorageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageType", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSubnetIds() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "subnetIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setSubnetIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "subnetIds", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTimeouts() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "timeouts", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setTimeouts(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "timeouts", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getTimezone() {
        return software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setTimezone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getUsername() {
        return software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setUsername(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "username", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getVpcSecurityGroupIds() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "vpcSecurityGroupIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setVpcSecurityGroupIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "vpcSecurityGroupIds", value);
    }

    /**
     * A fluent builder for {@link imports.terraform_aws_modules.aws.Rds}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<imports.terraform_aws_modules.aws.Rds> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final software.constructs.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final software.constructs.Construct scope;
        private final java.lang.String id;
        private final imports.terraform_aws_modules.aws.RdsConfig.Builder config;

        private Builder(final software.constructs.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.config = new imports.terraform_aws_modules.aws.RdsConfig.Builder();
        }

        /**
         * @return {@code this}
         * @param dependsOn This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder dependsOn(final java.util.List<? extends com.hashicorp.cdktf.ITerraformDependable> dependsOn) {
            this.config.dependsOn(dependsOn);
            return this;
        }

        /**
         * @return {@code this}
         * @param forEach This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder forEach(final com.hashicorp.cdktf.ITerraformIterator forEach) {
            this.config.forEach(forEach);
            return this;
        }

        /**
         * @return {@code this}
         * @param providers This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder providers(final java.util.List<? extends java.lang.Object> providers) {
            this.config.providers(providers);
            return this;
        }

        /**
         * @return {@code this}
         * @param skipAssetCreationFromLocalModules This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder skipAssetCreationFromLocalModules(final java.lang.Boolean skipAssetCreationFromLocalModules) {
            this.config.skipAssetCreationFromLocalModules(skipAssetCreationFromLocalModules);
            return this;
        }

        /**
         * The name of the RDS instance.
         * <p>
         * @return {@code this}
         * @param identifier The name of the RDS instance. This parameter is required.
         */
        public Builder identifier(final java.lang.String identifier) {
            this.config.identifier(identifier);
            return this;
        }

        /**
         * The allocated storage in gigabytes.
         * <p>
         * @return {@code this}
         * @param allocatedStorage The allocated storage in gigabytes. This parameter is required.
         */
        public Builder allocatedStorage(final java.lang.String allocatedStorage) {
            this.config.allocatedStorage(allocatedStorage);
            return this;
        }

        /**
         * Indicates that major version upgrades are allowed.
         * <p>
         * Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible
         * <p>
         * @return {@code this}
         * @param allowMajorVersionUpgrade Indicates that major version upgrades are allowed. This parameter is required.
         */
        public Builder allowMajorVersionUpgrade(final java.lang.Boolean allowMajorVersionUpgrade) {
            this.config.allowMajorVersionUpgrade(allowMajorVersionUpgrade);
            return this;
        }

        /**
         * Specifies whether any database modifications are applied immediately, or during the next maintenance window.
         * <p>
         * @return {@code this}
         * @param applyImmediately Specifies whether any database modifications are applied immediately, or during the next maintenance window. This parameter is required.
         */
        public Builder applyImmediately(final java.lang.Boolean applyImmediately) {
            this.config.applyImmediately(applyImmediately);
            return this;
        }

        /**
         * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window true.
         * <p>
         * @return {@code this}
         * @param autoMinorVersionUpgrade Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window true. This parameter is required.
         */
        public Builder autoMinorVersionUpgrade(final java.lang.Boolean autoMinorVersionUpgrade) {
            this.config.autoMinorVersionUpgrade(autoMinorVersionUpgrade);
            return this;
        }

        /**
         * The Availability Zone of the RDS instance.
         * <p>
         * @return {@code this}
         * @param availabilityZone The Availability Zone of the RDS instance. This parameter is required.
         */
        public Builder availabilityZone(final java.lang.String availabilityZone) {
            this.config.availabilityZone(availabilityZone);
            return this;
        }

        /**
         * The days to retain backups for.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod The days to retain backups for. This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.config.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * The daily time range (in UTC) during which automated backups are created if they are enabled.
         * <p>
         * Example: '09:46-10:16'. Must not overlap with maintenance_window
         * <p>
         * @return {@code this}
         * @param backupWindow The daily time range (in UTC) during which automated backups are created if they are enabled. This parameter is required.
         */
        public Builder backupWindow(final java.lang.String backupWindow) {
            this.config.backupWindow(backupWindow);
            return this;
        }

        /**
         * Specifies the identifier of the CA certificate for the DB instance.
         * <p>
         * @return {@code this}
         * @param caCertIdentifier Specifies the identifier of the CA certificate for the DB instance. This parameter is required.
         */
        public Builder caCertIdentifier(final java.lang.String caCertIdentifier) {
            this.config.caCertIdentifier(caCertIdentifier);
            return this;
        }

        /**
         * The character set name to use for DB encoding in Oracle instances.
         * <p>
         * This can't be changed. See Oracle Character Sets Supported in Amazon RDS and Collations and Character Sets for Microsoft SQL Server for more information. This can only be set on creation
         * <p>
         * @return {@code this}
         * @param characterSetName The character set name to use for DB encoding in Oracle instances. This parameter is required.
         */
        public Builder characterSetName(final java.lang.String characterSetName) {
            this.config.characterSetName(characterSetName);
            return this;
        }

        /**
         * The ARN of the KMS Key to use when encrypting log data.
         * <p>
         * @return {@code this}
         * @param cloudwatchLogGroupKmsKeyId The ARN of the KMS Key to use when encrypting log data. This parameter is required.
         */
        public Builder cloudwatchLogGroupKmsKeyId(final java.lang.String cloudwatchLogGroupKmsKeyId) {
            this.config.cloudwatchLogGroupKmsKeyId(cloudwatchLogGroupKmsKeyId);
            return this;
        }

        /**
         * The number of days to retain CloudWatch logs for the DB instance 7.
         * <p>
         * @return {@code this}
         * @param cloudwatchLogGroupRetentionInDays The number of days to retain CloudWatch logs for the DB instance 7. This parameter is required.
         */
        public Builder cloudwatchLogGroupRetentionInDays(final java.lang.Number cloudwatchLogGroupRetentionInDays) {
            this.config.cloudwatchLogGroupRetentionInDays(cloudwatchLogGroupRetentionInDays);
            return this;
        }

        /**
         * On delete, copy all Instance tags to the final snapshot.
         * <p>
         * @return {@code this}
         * @param copyTagsToSnapshot On delete, copy all Instance tags to the final snapshot. This parameter is required.
         */
        public Builder copyTagsToSnapshot(final java.lang.Boolean copyTagsToSnapshot) {
            this.config.copyTagsToSnapshot(copyTagsToSnapshot);
            return this;
        }

        /**
         * Determines whether a CloudWatch log group is created for each <code>enabled_cloudwatch_logs_exports</code>.
         * <p>
         * @return {@code this}
         * @param createCloudwatchLogGroup Determines whether a CloudWatch log group is created for each <code>enabled_cloudwatch_logs_exports</code>. This parameter is required.
         */
        public Builder createCloudwatchLogGroup(final java.lang.Boolean createCloudwatchLogGroup) {
            this.config.createCloudwatchLogGroup(createCloudwatchLogGroup);
            return this;
        }

        /**
         * Whether to create a database instance true.
         * <p>
         * @return {@code this}
         * @param createDbInstance Whether to create a database instance true. This parameter is required.
         */
        public Builder createDbInstance(final java.lang.Boolean createDbInstance) {
            this.config.createDbInstance(createDbInstance);
            return this;
        }

        /**
         * Create a database option group true.
         * <p>
         * @return {@code this}
         * @param createDbOptionGroup Create a database option group true. This parameter is required.
         */
        public Builder createDbOptionGroup(final java.lang.Boolean createDbOptionGroup) {
            this.config.createDbOptionGroup(createDbOptionGroup);
            return this;
        }

        /**
         * Whether to create a database parameter group true.
         * <p>
         * @return {@code this}
         * @param createDbParameterGroup Whether to create a database parameter group true. This parameter is required.
         */
        public Builder createDbParameterGroup(final java.lang.Boolean createDbParameterGroup) {
            this.config.createDbParameterGroup(createDbParameterGroup);
            return this;
        }

        /**
         * Whether to create a database subnet group.
         * <p>
         * @return {@code this}
         * @param createDbSubnetGroup Whether to create a database subnet group. This parameter is required.
         */
        public Builder createDbSubnetGroup(final java.lang.Boolean createDbSubnetGroup) {
            this.config.createDbSubnetGroup(createDbSubnetGroup);
            return this;
        }

        /**
         * Create IAM role with a defined name that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
         * <p>
         * @return {@code this}
         * @param createMonitoringRole Create IAM role with a defined name that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. This parameter is required.
         */
        public Builder createMonitoringRole(final java.lang.Boolean createMonitoringRole) {
            this.config.createMonitoringRole(createMonitoringRole);
            return this;
        }

        /**
         * Whether to create random password for RDS primary cluster true.
         * <p>
         * @return {@code this}
         * @param createRandomPassword Whether to create random password for RDS primary cluster true. This parameter is required.
         */
        public Builder createRandomPassword(final java.lang.Boolean createRandomPassword) {
            this.config.createRandomPassword(createRandomPassword);
            return this;
        }

        /**
         * Additional tags for the DB instance The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param dbInstanceTags Additional tags for the DB instance The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder dbInstanceTags(final java.util.Map<java.lang.String, java.lang.String> dbInstanceTags) {
            this.config.dbInstanceTags(dbInstanceTags);
            return this;
        }

        /**
         * The DB name to create.
         * <p>
         * If omitted, no database is created initially
         * <p>
         * @return {@code this}
         * @param dbName The DB name to create. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.config.dbName(dbName);
            return this;
        }

        /**
         * Additional tags for the DB option group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param dbOptionGroupTags Additional tags for the DB option group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder dbOptionGroupTags(final java.util.Map<java.lang.String, java.lang.String> dbOptionGroupTags) {
            this.config.dbOptionGroupTags(dbOptionGroupTags);
            return this;
        }

        /**
         * Additional tags for the  DB parameter group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param dbParameterGroupTags Additional tags for the  DB parameter group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder dbParameterGroupTags(final java.util.Map<java.lang.String, java.lang.String> dbParameterGroupTags) {
            this.config.dbParameterGroupTags(dbParameterGroupTags);
            return this;
        }

        /**
         * Description of the DB subnet group to create.
         * <p>
         * @return {@code this}
         * @param dbSubnetGroupDescription Description of the DB subnet group to create. This parameter is required.
         */
        public Builder dbSubnetGroupDescription(final java.lang.String dbSubnetGroupDescription) {
            this.config.dbSubnetGroupDescription(dbSubnetGroupDescription);
            return this;
        }

        /**
         * Name of DB subnet group.
         * <p>
         * DB instance will be created in the VPC associated with the DB subnet group. If unspecified, will be created in the default VPC
         * <p>
         * @return {@code this}
         * @param dbSubnetGroupName Name of DB subnet group. This parameter is required.
         */
        public Builder dbSubnetGroupName(final java.lang.String dbSubnetGroupName) {
            this.config.dbSubnetGroupName(dbSubnetGroupName);
            return this;
        }

        /**
         * Additional tags for the DB subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param dbSubnetGroupTags Additional tags for the DB subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder dbSubnetGroupTags(final java.util.Map<java.lang.String, java.lang.String> dbSubnetGroupTags) {
            this.config.dbSubnetGroupTags(dbSubnetGroupTags);
            return this;
        }

        /**
         * Determines whether to use <code>subnet_group_name</code> as is or create a unique name beginning with the <code>subnet_group_name</code> as the prefix true.
         * <p>
         * @return {@code this}
         * @param dbSubnetGroupUseNamePrefix Determines whether to use <code>subnet_group_name</code> as is or create a unique name beginning with the <code>subnet_group_name</code> as the prefix true. This parameter is required.
         */
        public Builder dbSubnetGroupUseNamePrefix(final java.lang.Boolean dbSubnetGroupUseNamePrefix) {
            this.config.dbSubnetGroupUseNamePrefix(dbSubnetGroupUseNamePrefix);
            return this;
        }

        /**
         * Specifies whether to remove automated backups immediately after the DB instance is deleted true.
         * <p>
         * @return {@code this}
         * @param deleteAutomatedBackups Specifies whether to remove automated backups immediately after the DB instance is deleted true. This parameter is required.
         */
        public Builder deleteAutomatedBackups(final java.lang.Boolean deleteAutomatedBackups) {
            this.config.deleteAutomatedBackups(deleteAutomatedBackups);
            return this;
        }

        /**
         * The database can't be deleted when this value is set to true.
         * <p>
         * @return {@code this}
         * @param deletionProtection The database can't be deleted when this value is set to true. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.config.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * The ID of the Directory Service Active Directory domain to create the instance in.
         * <p>
         * @return {@code this}
         * @param domain The ID of the Directory Service Active Directory domain to create the instance in. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.config.domain(domain);
            return this;
        }

        /**
         * (Required if domain is provided) The name of the IAM role to be used when making API calls to the Directory Service.
         * <p>
         * @return {@code this}
         * @param domainIamRoleName (Required if domain is provided) The name of the IAM role to be used when making API calls to the Directory Service. This parameter is required.
         */
        public Builder domainIamRoleName(final java.lang.String domainIamRoleName) {
            this.config.domainIamRoleName(domainIamRoleName);
            return this;
        }

        /**
         * List of log types to enable for exporting to CloudWatch logs.
         * <p>
         * If omitted, no logs will be exported. Valid values (depending on engine): alert, audit, error, general, listener, slowquery, trace, postgresql (PostgreSQL), upgrade (PostgreSQL)
         * <p>
         * @return {@code this}
         * @param enabledCloudwatchLogsExports List of log types to enable for exporting to CloudWatch logs. This parameter is required.
         */
        public Builder enabledCloudwatchLogsExports(final java.util.List<java.lang.String> enabledCloudwatchLogsExports) {
            this.config.enabledCloudwatchLogsExports(enabledCloudwatchLogsExports);
            return this;
        }

        /**
         * The database engine to use.
         * <p>
         * @return {@code this}
         * @param engine The database engine to use. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.config.engine(engine);
            return this;
        }

        /**
         * The engine version to use.
         * <p>
         * @return {@code this}
         * @param engineVersion The engine version to use. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.config.engineVersion(engineVersion);
            return this;
        }

        /**
         * The family of the DB parameter group.
         * <p>
         * @return {@code this}
         * @param family The family of the DB parameter group. This parameter is required.
         */
        public Builder family(final java.lang.String family) {
            this.config.family(family);
            return this;
        }

        /**
         * The name which is prefixed to the final snapshot on cluster destroy final.
         * <p>
         * @return {@code this}
         * @param finalSnapshotIdentifierPrefix The name which is prefixed to the final snapshot on cluster destroy final. This parameter is required.
         */
        public Builder finalSnapshotIdentifierPrefix(final java.lang.String finalSnapshotIdentifierPrefix) {
            this.config.finalSnapshotIdentifierPrefix(finalSnapshotIdentifierPrefix);
            return this;
        }

        /**
         * Specifies whether or not the mappings of AWS Identity and Access Management (IAM) accounts to database accounts are enabled.
         * <p>
         * @return {@code this}
         * @param iamDatabaseAuthenticationEnabled Specifies whether or not the mappings of AWS Identity and Access Management (IAM) accounts to database accounts are enabled. This parameter is required.
         */
        public Builder iamDatabaseAuthenticationEnabled(final java.lang.Boolean iamDatabaseAuthenticationEnabled) {
            this.config.iamDatabaseAuthenticationEnabled(iamDatabaseAuthenticationEnabled);
            return this;
        }

        /**
         * The instance type of the RDS instance.
         * <p>
         * @return {@code this}
         * @param instanceClass The instance type of the RDS instance. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.config.instanceClass(instanceClass);
            return this;
        }

        /**
         * Determines whether to use <code>identifier</code> as is or create a unique identifier beginning with <code>identifier</code> as the specified prefix.
         * <p>
         * @return {@code this}
         * @param instanceUseIdentifierPrefix Determines whether to use <code>identifier</code> as is or create a unique identifier beginning with <code>identifier</code> as the specified prefix. This parameter is required.
         */
        public Builder instanceUseIdentifierPrefix(final java.lang.Boolean instanceUseIdentifierPrefix) {
            this.config.instanceUseIdentifierPrefix(instanceUseIdentifierPrefix);
            return this;
        }

        /**
         * The amount of provisioned IOPS.
         * <p>
         * Setting this implies a storage_type of 'io1'
         * <p>
         * @return {@code this}
         * @param iops The amount of provisioned IOPS. This parameter is required.
         */
        public Builder iops(final java.lang.Number iops) {
            this.config.iops(iops);
            return this;
        }

        /**
         * The ARN for the KMS encryption key.
         * <p>
         * If creating an encrypted replica, set this to the destination KMS ARN. If storage_encrypted is set to true and kms_key_id is not specified the default KMS key created in your account will be used
         * <p>
         * @return {@code this}
         * @param kmsKeyId The ARN for the KMS encryption key. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.config.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * License model information for this DB instance.
         * <p>
         * Optional, but required for some DB engines, i.e. Oracle SE1
         * <p>
         * @return {@code this}
         * @param licenseModel License model information for this DB instance. This parameter is required.
         */
        public Builder licenseModel(final java.lang.String licenseModel) {
            this.config.licenseModel(licenseModel);
            return this;
        }

        /**
         * The window to perform maintenance in.
         * <p>
         * Syntax: 'ddd:hh24:mi-ddd:hh24:mi'. Eg: 'Mon:00:00-Mon:03:00'
         * <p>
         * @return {@code this}
         * @param maintenanceWindow The window to perform maintenance in. This parameter is required.
         */
        public Builder maintenanceWindow(final java.lang.String maintenanceWindow) {
            this.config.maintenanceWindow(maintenanceWindow);
            return this;
        }

        /**
         * Specifies the major version of the engine that this option group should be associated with.
         * <p>
         * @return {@code this}
         * @param majorEngineVersion Specifies the major version of the engine that this option group should be associated with. This parameter is required.
         */
        public Builder majorEngineVersion(final java.lang.String majorEngineVersion) {
            this.config.majorEngineVersion(majorEngineVersion);
            return this;
        }

        /**
         * Specifies the value for Storage Autoscaling.
         * <p>
         * @return {@code this}
         * @param maxAllocatedStorage Specifies the value for Storage Autoscaling. This parameter is required.
         */
        public Builder maxAllocatedStorage(final java.lang.Number maxAllocatedStorage) {
            this.config.maxAllocatedStorage(maxAllocatedStorage);
            return this;
        }

        /**
         * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
         * <p>
         * To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60
         * <p>
         * @return {@code this}
         * @param monitoringInterval The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. This parameter is required.
         */
        public Builder monitoringInterval(final java.lang.Number monitoringInterval) {
            this.config.monitoringInterval(monitoringInterval);
            return this;
        }

        /**
         * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
         * <p>
         * Must be specified if monitoring_interval is non-zero
         * <p>
         * @return {@code this}
         * @param monitoringRoleArn The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. This parameter is required.
         */
        public Builder monitoringRoleArn(final java.lang.String monitoringRoleArn) {
            this.config.monitoringRoleArn(monitoringRoleArn);
            return this;
        }

        /**
         * Description of the monitoring IAM role.
         * <p>
         * @return {@code this}
         * @param monitoringRoleDescription Description of the monitoring IAM role. This parameter is required.
         */
        public Builder monitoringRoleDescription(final java.lang.String monitoringRoleDescription) {
            this.config.monitoringRoleDescription(monitoringRoleDescription);
            return this;
        }

        /**
         * Name of the IAM role which will be created when create_monitoring_role is enabled rds-monitoring-role.
         * <p>
         * @return {@code this}
         * @param monitoringRoleName Name of the IAM role which will be created when create_monitoring_role is enabled rds-monitoring-role. This parameter is required.
         */
        public Builder monitoringRoleName(final java.lang.String monitoringRoleName) {
            this.config.monitoringRoleName(monitoringRoleName);
            return this;
        }

        /**
         * Determines whether to use <code>monitoring_role_name</code> as is or create a unique identifier beginning with <code>monitoring_role_name</code> as the specified prefix.
         * <p>
         * @return {@code this}
         * @param monitoringRoleUseNamePrefix Determines whether to use <code>monitoring_role_name</code> as is or create a unique identifier beginning with <code>monitoring_role_name</code> as the specified prefix. This parameter is required.
         */
        public Builder monitoringRoleUseNamePrefix(final java.lang.Boolean monitoringRoleUseNamePrefix) {
            this.config.monitoringRoleUseNamePrefix(monitoringRoleUseNamePrefix);
            return this;
        }

        /**
         * Specifies if the RDS instance is multi-AZ.
         * <p>
         * @return {@code this}
         * @param multiAz Specifies if the RDS instance is multi-AZ. This parameter is required.
         */
        public Builder multiAz(final java.lang.Boolean multiAz) {
            this.config.multiAz(multiAz);
            return this;
        }

        /**
         * The description of the option group.
         * <p>
         * @return {@code this}
         * @param optionGroupDescription The description of the option group. This parameter is required.
         */
        public Builder optionGroupDescription(final java.lang.String optionGroupDescription) {
            this.config.optionGroupDescription(optionGroupDescription);
            return this;
        }

        /**
         * Name of the option group.
         * <p>
         * @return {@code this}
         * @param optionGroupName Name of the option group. This parameter is required.
         */
        public Builder optionGroupName(final java.lang.String optionGroupName) {
            this.config.optionGroupName(optionGroupName);
            return this;
        }

        /**
         * Define maximum timeout for deletion of `aws_db_option_group` resource The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param optionGroupTimeouts Define maximum timeout for deletion of `aws_db_option_group` resource The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder optionGroupTimeouts(final java.util.Map<java.lang.String, java.lang.String> optionGroupTimeouts) {
            this.config.optionGroupTimeouts(optionGroupTimeouts);
            return this;
        }

        /**
         * Determines whether to use <code>option_group_name</code> as is or create a unique name beginning with the <code>option_group_name</code> as the prefix true.
         * <p>
         * @return {@code this}
         * @param optionGroupUseNamePrefix Determines whether to use <code>option_group_name</code> as is or create a unique name beginning with the <code>option_group_name</code> as the prefix true. This parameter is required.
         */
        public Builder optionGroupUseNamePrefix(final java.lang.Boolean optionGroupUseNamePrefix) {
            this.config.optionGroupUseNamePrefix(optionGroupUseNamePrefix);
            return this;
        }

        /**
         * A list of Options to apply.
         * <p>
         * @return {@code this}
         * @param options A list of Options to apply. This parameter is required.
         */
        public Builder options(final java.lang.Object options) {
            this.config.options(options);
            return this;
        }

        /**
         * Description of the DB parameter group to create.
         * <p>
         * @return {@code this}
         * @param parameterGroupDescription Description of the DB parameter group to create. This parameter is required.
         */
        public Builder parameterGroupDescription(final java.lang.String parameterGroupDescription) {
            this.config.parameterGroupDescription(parameterGroupDescription);
            return this;
        }

        /**
         * Name of the DB parameter group to associate or create.
         * <p>
         * @return {@code this}
         * @param parameterGroupName Name of the DB parameter group to associate or create. This parameter is required.
         */
        public Builder parameterGroupName(final java.lang.String parameterGroupName) {
            this.config.parameterGroupName(parameterGroupName);
            return this;
        }

        /**
         * Determines whether to use <code>parameter_group_name</code> as is or create a unique name beginning with the <code>parameter_group_name</code> as the prefix true.
         * <p>
         * @return {@code this}
         * @param parameterGroupUseNamePrefix Determines whether to use <code>parameter_group_name</code> as is or create a unique name beginning with the <code>parameter_group_name</code> as the prefix true. This parameter is required.
         */
        public Builder parameterGroupUseNamePrefix(final java.lang.Boolean parameterGroupUseNamePrefix) {
            this.config.parameterGroupUseNamePrefix(parameterGroupUseNamePrefix);
            return this;
        }

        /**
         * A list of DB parameters (map) to apply.
         * <p>
         * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * <p>
         * @return {@code this}
         * @param parameters A list of DB parameters (map) to apply. This parameter is required.
         */
        public Builder parameters(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> parameters) {
            this.config.parameters(parameters);
            return this;
        }

        /**
         * Password for the master DB user.
         * <p>
         * Note that this may show up in logs, and it will be stored in the state file
         * <p>
         * @return {@code this}
         * @param password Password for the master DB user. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.config.password(password);
            return this;
        }

        /**
         * Specifies whether Performance Insights are enabled.
         * <p>
         * @return {@code this}
         * @param performanceInsightsEnabled Specifies whether Performance Insights are enabled. This parameter is required.
         */
        public Builder performanceInsightsEnabled(final java.lang.Boolean performanceInsightsEnabled) {
            this.config.performanceInsightsEnabled(performanceInsightsEnabled);
            return this;
        }

        /**
         * The ARN for the KMS key to encrypt Performance Insights data.
         * <p>
         * @return {@code this}
         * @param performanceInsightsKmsKeyId The ARN for the KMS key to encrypt Performance Insights data. This parameter is required.
         */
        public Builder performanceInsightsKmsKeyId(final java.lang.String performanceInsightsKmsKeyId) {
            this.config.performanceInsightsKmsKeyId(performanceInsightsKmsKeyId);
            return this;
        }

        /**
         * The amount of time in days to retain Performance Insights data.
         * <p>
         * Either 7 (7 days) or 731 (2 years)
         * 7
         * <p>
         * @return {@code this}
         * @param performanceInsightsRetentionPeriod The amount of time in days to retain Performance Insights data. This parameter is required.
         */
        public Builder performanceInsightsRetentionPeriod(final java.lang.Number performanceInsightsRetentionPeriod) {
            this.config.performanceInsightsRetentionPeriod(performanceInsightsRetentionPeriod);
            return this;
        }

        /**
         * The port on which the DB accepts connections.
         * <p>
         * @return {@code this}
         * @param port The port on which the DB accepts connections. This parameter is required.
         */
        public Builder port(final java.lang.String port) {
            this.config.port(port);
            return this;
        }

        /**
         * Bool to control if instance is publicly accessible.
         * <p>
         * @return {@code this}
         * @param publiclyAccessible Bool to control if instance is publicly accessible. This parameter is required.
         */
        public Builder publiclyAccessible(final java.lang.Boolean publiclyAccessible) {
            this.config.publiclyAccessible(publiclyAccessible);
            return this;
        }

        /**
         * Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?
         * <p>
         * More info: https://en.wikipedia.org/wiki/Putin_khuylo!
         * true
         * <p>
         * @return {@code this}
         * @param putinKhuylo Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?. This parameter is required.
         */
        public Builder putinKhuylo(final java.lang.Boolean putinKhuylo) {
            this.config.putinKhuylo(putinKhuylo);
            return this;
        }

        /**
         * Length of random password to create 16.
         * <p>
         * @return {@code this}
         * @param randomPasswordLength Length of random password to create 16. This parameter is required.
         */
        public Builder randomPasswordLength(final java.lang.Number randomPasswordLength) {
            this.config.randomPasswordLength(randomPasswordLength);
            return this;
        }

        /**
         * Specifies whether the replica is in either mounted or open-read-only mode.
         * <p>
         * This attribute is only supported by Oracle instances. Oracle replicas operate in open-read-only mode unless otherwise specified
         * <p>
         * @return {@code this}
         * @param replicaMode Specifies whether the replica is in either mounted or open-read-only mode. This parameter is required.
         */
        public Builder replicaMode(final java.lang.String replicaMode) {
            this.config.replicaMode(replicaMode);
            return this;
        }

        /**
         * Specifies that this resource is a Replicate database, and to use this value as the source database.
         * <p>
         * This correlates to the identifier of another Amazon RDS Database to replicate
         * <p>
         * @return {@code this}
         * @param replicateSourceDb Specifies that this resource is a Replicate database, and to use this value as the source database. This parameter is required.
         */
        public Builder replicateSourceDb(final java.lang.String replicateSourceDb) {
            this.config.replicateSourceDb(replicateSourceDb);
            return this;
        }

        /**
         * Restore to a point in time (MySQL is NOT supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param restoreToPointInTime Restore to a point in time (MySQL is NOT supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder restoreToPointInTime(final java.util.Map<java.lang.String, java.lang.String> restoreToPointInTime) {
            this.config.restoreToPointInTime(restoreToPointInTime);
            return this;
        }

        /**
         * Restore from a Percona Xtrabackup in S3 (only MySQL is supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param s3Import Restore from a Percona Xtrabackup in S3 (only MySQL is supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder s3Import(final java.util.Map<java.lang.String, java.lang.String> s3Import) {
            this.config.s3Import(s3Import);
            return this;
        }

        /**
         * Determines whether a final DB snapshot is created before the DB instance is deleted.
         * <p>
         * If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted
         * <p>
         * @return {@code this}
         * @param skipFinalSnapshot Determines whether a final DB snapshot is created before the DB instance is deleted. This parameter is required.
         */
        public Builder skipFinalSnapshot(final java.lang.Boolean skipFinalSnapshot) {
            this.config.skipFinalSnapshot(skipFinalSnapshot);
            return this;
        }

        /**
         * Specifies whether or not to create this database from a snapshot.
         * <p>
         * This correlates to the snapshot ID you'd find in the RDS console, e.g: rds:production-2015-06-26-06-05
         * <p>
         * @return {@code this}
         * @param snapshotIdentifier Specifies whether or not to create this database from a snapshot. This parameter is required.
         */
        public Builder snapshotIdentifier(final java.lang.String snapshotIdentifier) {
            this.config.snapshotIdentifier(snapshotIdentifier);
            return this;
        }

        /**
         * Specifies whether the DB instance is encrypted true.
         * <p>
         * @return {@code this}
         * @param storageEncrypted Specifies whether the DB instance is encrypted true. This parameter is required.
         */
        public Builder storageEncrypted(final java.lang.Boolean storageEncrypted) {
            this.config.storageEncrypted(storageEncrypted);
            return this;
        }

        /**
         * One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD).
         * <p>
         * The default is 'io1' if iops is specified, 'gp2' if not
         * <p>
         * @return {@code this}
         * @param storageType One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD). This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.config.storageType(storageType);
            return this;
        }

        /**
         * A list of VPC subnet IDs.
         * <p>
         * @return {@code this}
         * @param subnetIds A list of VPC subnet IDs. This parameter is required.
         */
        public Builder subnetIds(final java.util.List<java.lang.String> subnetIds) {
            this.config.subnetIds(subnetIds);
            return this;
        }

        /**
         * A mapping of tags to assign to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param tags A mapping of tags to assign to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, java.lang.String> tags) {
            this.config.tags(tags);
            return this;
        }

        /**
         * Updated Terraform resource management timeouts.
         * <p>
         * Applies to `aws_db_instance` in particular to permit resource management times
         * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * <p>
         * @return {@code this}
         * @param timeouts Updated Terraform resource management timeouts. This parameter is required.
         */
        public Builder timeouts(final java.util.Map<java.lang.String, java.lang.String> timeouts) {
            this.config.timeouts(timeouts);
            return this;
        }

        /**
         * Time zone of the DB instance.
         * <p>
         * timezone is currently only supported by Microsoft SQL Server. The timezone can only be set on creation. See MSSQL User Guide for more information
         * <p>
         * @return {@code this}
         * @param timezone Time zone of the DB instance. This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.config.timezone(timezone);
            return this;
        }

        /**
         * Username for the master DB user.
         * <p>
         * @return {@code this}
         * @param username Username for the master DB user. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.config.username(username);
            return this;
        }

        /**
         * List of VPC security groups to associate.
         * <p>
         * @return {@code this}
         * @param vpcSecurityGroupIds List of VPC security groups to associate. This parameter is required.
         */
        public Builder vpcSecurityGroupIds(final java.util.List<java.lang.String> vpcSecurityGroupIds) {
            this.config.vpcSecurityGroupIds(vpcSecurityGroupIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link imports.terraform_aws_modules.aws.Rds}.
         */
        @Override
        public imports.terraform_aws_modules.aws.Rds build() {
            return new imports.terraform_aws_modules.aws.Rds(
                this.scope,
                this.id,
                this.config.build()
            );
        }
    }
}
