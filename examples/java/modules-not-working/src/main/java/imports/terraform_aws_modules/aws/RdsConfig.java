package imports.terraform_aws_modules.aws;

@javax.annotation.Generated(value = "jsii-pacmak/1.91.0 (build 1b1f239)", date = "2023-11-27T19:56:36.291Z")
@software.amazon.jsii.Jsii(module = imports.terraform_aws_modules.aws.$Module.class, fqn = "rds.RdsConfig")
@software.amazon.jsii.Jsii.Proxy(RdsConfig.Jsii$Proxy.class)
public interface RdsConfig extends software.amazon.jsii.JsiiSerializable, com.hashicorp.cdktf.TerraformModuleUserConfig {

    /**
     * The name of the RDS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getIdentifier();

    /**
     * The allocated storage in gigabytes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAllocatedStorage() {
        return null;
    }

    /**
     * Indicates that major version upgrades are allowed.
     * <p>
     * Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getAllowMajorVersionUpgrade() {
        return null;
    }

    /**
     * Specifies whether any database modifications are applied immediately, or during the next maintenance window.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getApplyImmediately() {
        return null;
    }

    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getAutoMinorVersionUpgrade() {
        return null;
    }

    /**
     * The Availability Zone of the RDS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAvailabilityZone() {
        return null;
    }

    /**
     * The days to retain backups for.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getBackupRetentionPeriod() {
        return null;
    }

    /**
     * The daily time range (in UTC) during which automated backups are created if they are enabled.
     * <p>
     * Example: '09:46-10:16'. Must not overlap with maintenance_window
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBackupWindow() {
        return null;
    }

    /**
     * Specifies the identifier of the CA certificate for the DB instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCaCertIdentifier() {
        return null;
    }

    /**
     * The character set name to use for DB encoding in Oracle instances.
     * <p>
     * This can't be changed. See Oracle Character Sets Supported in Amazon RDS and Collations and Character Sets for Microsoft SQL Server for more information. This can only be set on creation
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCharacterSetName() {
        return null;
    }

    /**
     * The ARN of the KMS Key to use when encrypting log data.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCloudwatchLogGroupKmsKeyId() {
        return null;
    }

    /**
     * The number of days to retain CloudWatch logs for the DB instance 7.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getCloudwatchLogGroupRetentionInDays() {
        return null;
    }

    /**
     * On delete, copy all Instance tags to the final snapshot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCopyTagsToSnapshot() {
        return null;
    }

    /**
     * Determines whether a CloudWatch log group is created for each <code>enabled_cloudwatch_logs_exports</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateCloudwatchLogGroup() {
        return null;
    }

    /**
     * Whether to create a database instance true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbInstance() {
        return null;
    }

    /**
     * Create a database option group true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbOptionGroup() {
        return null;
    }

    /**
     * Whether to create a database parameter group true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbParameterGroup() {
        return null;
    }

    /**
     * Whether to create a database subnet group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDbSubnetGroup() {
        return null;
    }

    /**
     * Create IAM role with a defined name that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateMonitoringRole() {
        return null;
    }

    /**
     * Whether to create random password for RDS primary cluster true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRandomPassword() {
        return null;
    }

    /**
     * Additional tags for the DB instance The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbInstanceTags() {
        return null;
    }

    /**
     * The DB name to create.
     * <p>
     * If omitted, no database is created initially
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbName() {
        return null;
    }

    /**
     * Additional tags for the DB option group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbOptionGroupTags() {
        return null;
    }

    /**
     * Additional tags for the  DB parameter group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbParameterGroupTags() {
        return null;
    }

    /**
     * Description of the DB subnet group to create.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbSubnetGroupDescription() {
        return null;
    }

    /**
     * Name of DB subnet group.
     * <p>
     * DB instance will be created in the VPC associated with the DB subnet group. If unspecified, will be created in the default VPC
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbSubnetGroupName() {
        return null;
    }

    /**
     * Additional tags for the DB subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDbSubnetGroupTags() {
        return null;
    }

    /**
     * Determines whether to use <code>subnet_group_name</code> as is or create a unique name beginning with the <code>subnet_group_name</code> as the prefix true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDbSubnetGroupUseNamePrefix() {
        return null;
    }

    /**
     * Specifies whether to remove automated backups immediately after the DB instance is deleted true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDeleteAutomatedBackups() {
        return null;
    }

    /**
     * The database can't be deleted when this value is set to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDeletionProtection() {
        return null;
    }

    /**
     * The ID of the Directory Service Active Directory domain to create the instance in.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDomain() {
        return null;
    }

    /**
     * (Required if domain is provided) The name of the IAM role to be used when making API calls to the Directory Service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDomainIamRoleName() {
        return null;
    }

    /**
     * List of log types to enable for exporting to CloudWatch logs.
     * <p>
     * If omitted, no logs will be exported. Valid values (depending on engine): alert, audit, error, general, listener, slowquery, trace, postgresql (PostgreSQL), upgrade (PostgreSQL)
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getEnabledCloudwatchLogsExports() {
        return null;
    }

    /**
     * The database engine to use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEngine() {
        return null;
    }

    /**
     * The engine version to use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEngineVersion() {
        return null;
    }

    /**
     * The family of the DB parameter group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFamily() {
        return null;
    }

    /**
     * The name which is prefixed to the final snapshot on cluster destroy final.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFinalSnapshotIdentifierPrefix() {
        return null;
    }

    /**
     * Specifies whether or not the mappings of AWS Identity and Access Management (IAM) accounts to database accounts are enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIamDatabaseAuthenticationEnabled() {
        return null;
    }

    /**
     * The instance type of the RDS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceClass() {
        return null;
    }

    /**
     * Determines whether to use <code>identifier</code> as is or create a unique identifier beginning with <code>identifier</code> as the specified prefix.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getInstanceUseIdentifierPrefix() {
        return null;
    }

    /**
     * The amount of provisioned IOPS.
     * <p>
     * Setting this implies a storage_type of 'io1'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIops() {
        return null;
    }

    /**
     * The ARN for the KMS encryption key.
     * <p>
     * If creating an encrypted replica, set this to the destination KMS ARN. If storage_encrypted is set to true and kms_key_id is not specified the default KMS key created in your account will be used
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
        return null;
    }

    /**
     * License model information for this DB instance.
     * <p>
     * Optional, but required for some DB engines, i.e. Oracle SE1
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLicenseModel() {
        return null;
    }

    /**
     * The window to perform maintenance in.
     * <p>
     * Syntax: 'ddd:hh24:mi-ddd:hh24:mi'. Eg: 'Mon:00:00-Mon:03:00'
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMaintenanceWindow() {
        return null;
    }

    /**
     * Specifies the major version of the engine that this option group should be associated with.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMajorEngineVersion() {
        return null;
    }

    /**
     * Specifies the value for Storage Autoscaling.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMaxAllocatedStorage() {
        return null;
    }

    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
     * <p>
     * To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMonitoringInterval() {
        return null;
    }

    /**
     * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
     * <p>
     * Must be specified if monitoring_interval is non-zero
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleArn() {
        return null;
    }

    /**
     * Description of the monitoring IAM role.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleDescription() {
        return null;
    }

    /**
     * Name of the IAM role which will be created when create_monitoring_role is enabled rds-monitoring-role.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMonitoringRoleName() {
        return null;
    }

    /**
     * Determines whether to use <code>monitoring_role_name</code> as is or create a unique identifier beginning with <code>monitoring_role_name</code> as the specified prefix.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getMonitoringRoleUseNamePrefix() {
        return null;
    }

    /**
     * Specifies if the RDS instance is multi-AZ.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getMultiAz() {
        return null;
    }

    /**
     * The description of the option group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOptionGroupDescription() {
        return null;
    }

    /**
     * Name of the option group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOptionGroupName() {
        return null;
    }

    /**
     * Define maximum timeout for deletion of `aws_db_option_group` resource The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOptionGroupTimeouts() {
        return null;
    }

    /**
     * Determines whether to use <code>option_group_name</code> as is or create a unique name beginning with the <code>option_group_name</code> as the prefix true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOptionGroupUseNamePrefix() {
        return null;
    }

    /**
     * A list of Options to apply.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     * Description of the DB parameter group to create.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getParameterGroupDescription() {
        return null;
    }

    /**
     * Name of the DB parameter group to associate or create.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getParameterGroupName() {
        return null;
    }

    /**
     * Determines whether to use <code>parameter_group_name</code> as is or create a unique name beginning with the <code>parameter_group_name</code> as the prefix true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getParameterGroupUseNamePrefix() {
        return null;
    }

    /**
     * A list of DB parameters (map) to apply.
     * <p>
     * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getParameters() {
        return null;
    }

    /**
     * Password for the master DB user.
     * <p>
     * Note that this may show up in logs, and it will be stored in the state file
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return null;
    }

    /**
     * Specifies whether Performance Insights are enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPerformanceInsightsEnabled() {
        return null;
    }

    /**
     * The ARN for the KMS key to encrypt Performance Insights data.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPerformanceInsightsKmsKeyId() {
        return null;
    }

    /**
     * The amount of time in days to retain Performance Insights data.
     * <p>
     * Either 7 (7 days) or 731 (2 years)
     * 7
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPerformanceInsightsRetentionPeriod() {
        return null;
    }

    /**
     * The port on which the DB accepts connections.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPort() {
        return null;
    }

    /**
     * Bool to control if instance is publicly accessible.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPubliclyAccessible() {
        return null;
    }

    /**
     * Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?
     * <p>
     * More info: https://en.wikipedia.org/wiki/Putin_khuylo!
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPutinKhuylo() {
        return null;
    }

    /**
     * Length of random password to create 16.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRandomPasswordLength() {
        return null;
    }

    /**
     * Specifies whether the replica is in either mounted or open-read-only mode.
     * <p>
     * This attribute is only supported by Oracle instances. Oracle replicas operate in open-read-only mode unless otherwise specified
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getReplicaMode() {
        return null;
    }

    /**
     * Specifies that this resource is a Replicate database, and to use this value as the source database.
     * <p>
     * This correlates to the identifier of another Amazon RDS Database to replicate
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getReplicateSourceDb() {
        return null;
    }

    /**
     * Restore to a point in time (MySQL is NOT supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRestoreToPointInTime() {
        return null;
    }

    /**
     * Restore from a Percona Xtrabackup in S3 (only MySQL is supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getS3Import() {
        return null;
    }

    /**
     * Determines whether a final DB snapshot is created before the DB instance is deleted.
     * <p>
     * If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getSkipFinalSnapshot() {
        return null;
    }

    /**
     * Specifies whether or not to create this database from a snapshot.
     * <p>
     * This correlates to the snapshot ID you'd find in the RDS console, e.g: rds:production-2015-06-26-06-05
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotIdentifier() {
        return null;
    }

    /**
     * Specifies whether the DB instance is encrypted true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getStorageEncrypted() {
        return null;
    }

    /**
     * One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD).
     * <p>
     * The default is 'io1' if iops is specified, 'gp2' if not
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStorageType() {
        return null;
    }

    /**
     * A list of VPC subnet IDs.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSubnetIds() {
        return null;
    }

    /**
     * A mapping of tags to assign to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTags() {
        return null;
    }

    /**
     * Updated Terraform resource management timeouts.
     * <p>
     * Applies to `aws_db_instance` in particular to permit resource management times
     * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTimeouts() {
        return null;
    }

    /**
     * Time zone of the DB instance.
     * <p>
     * timezone is currently only supported by Microsoft SQL Server. The timezone can only be set on creation. See MSSQL User Guide for more information
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTimezone() {
        return null;
    }

    /**
     * Username for the master DB user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getUsername() {
        return null;
    }

    /**
     * List of VPC security groups to associate.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getVpcSecurityGroupIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RdsConfig}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RdsConfig}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RdsConfig> {
        java.lang.String identifier;
        java.lang.String allocatedStorage;
        java.lang.Boolean allowMajorVersionUpgrade;
        java.lang.Boolean applyImmediately;
        java.lang.Boolean autoMinorVersionUpgrade;
        java.lang.String availabilityZone;
        java.lang.Number backupRetentionPeriod;
        java.lang.String backupWindow;
        java.lang.String caCertIdentifier;
        java.lang.String characterSetName;
        java.lang.String cloudwatchLogGroupKmsKeyId;
        java.lang.Number cloudwatchLogGroupRetentionInDays;
        java.lang.Boolean copyTagsToSnapshot;
        java.lang.Boolean createCloudwatchLogGroup;
        java.lang.Boolean createDbInstance;
        java.lang.Boolean createDbOptionGroup;
        java.lang.Boolean createDbParameterGroup;
        java.lang.Boolean createDbSubnetGroup;
        java.lang.Boolean createMonitoringRole;
        java.lang.Boolean createRandomPassword;
        java.util.Map<java.lang.String, java.lang.String> dbInstanceTags;
        java.lang.String dbName;
        java.util.Map<java.lang.String, java.lang.String> dbOptionGroupTags;
        java.util.Map<java.lang.String, java.lang.String> dbParameterGroupTags;
        java.lang.String dbSubnetGroupDescription;
        java.lang.String dbSubnetGroupName;
        java.util.Map<java.lang.String, java.lang.String> dbSubnetGroupTags;
        java.lang.Boolean dbSubnetGroupUseNamePrefix;
        java.lang.Boolean deleteAutomatedBackups;
        java.lang.Boolean deletionProtection;
        java.lang.String domain;
        java.lang.String domainIamRoleName;
        java.util.List<java.lang.String> enabledCloudwatchLogsExports;
        java.lang.String engine;
        java.lang.String engineVersion;
        java.lang.String family;
        java.lang.String finalSnapshotIdentifierPrefix;
        java.lang.Boolean iamDatabaseAuthenticationEnabled;
        java.lang.String instanceClass;
        java.lang.Boolean instanceUseIdentifierPrefix;
        java.lang.Number iops;
        java.lang.String kmsKeyId;
        java.lang.String licenseModel;
        java.lang.String maintenanceWindow;
        java.lang.String majorEngineVersion;
        java.lang.Number maxAllocatedStorage;
        java.lang.Number monitoringInterval;
        java.lang.String monitoringRoleArn;
        java.lang.String monitoringRoleDescription;
        java.lang.String monitoringRoleName;
        java.lang.Boolean monitoringRoleUseNamePrefix;
        java.lang.Boolean multiAz;
        java.lang.String optionGroupDescription;
        java.lang.String optionGroupName;
        java.util.Map<java.lang.String, java.lang.String> optionGroupTimeouts;
        java.lang.Boolean optionGroupUseNamePrefix;
        java.lang.Object options;
        java.lang.String parameterGroupDescription;
        java.lang.String parameterGroupName;
        java.lang.Boolean parameterGroupUseNamePrefix;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> parameters;
        java.lang.String password;
        java.lang.Boolean performanceInsightsEnabled;
        java.lang.String performanceInsightsKmsKeyId;
        java.lang.Number performanceInsightsRetentionPeriod;
        java.lang.String port;
        java.lang.Boolean publiclyAccessible;
        java.lang.Boolean putinKhuylo;
        java.lang.Number randomPasswordLength;
        java.lang.String replicaMode;
        java.lang.String replicateSourceDb;
        java.util.Map<java.lang.String, java.lang.String> restoreToPointInTime;
        java.util.Map<java.lang.String, java.lang.String> s3Import;
        java.lang.Boolean skipFinalSnapshot;
        java.lang.String snapshotIdentifier;
        java.lang.Boolean storageEncrypted;
        java.lang.String storageType;
        java.util.List<java.lang.String> subnetIds;
        java.util.Map<java.lang.String, java.lang.String> tags;
        java.util.Map<java.lang.String, java.lang.String> timeouts;
        java.lang.String timezone;
        java.lang.String username;
        java.util.List<java.lang.String> vpcSecurityGroupIds;
        java.util.List<com.hashicorp.cdktf.ITerraformDependable> dependsOn;
        com.hashicorp.cdktf.ITerraformIterator forEach;
        java.util.List<java.lang.Object> providers;
        java.lang.Boolean skipAssetCreationFromLocalModules;

        /**
         * Sets the value of {@link RdsConfig#getIdentifier}
         * @param identifier The name of the RDS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder identifier(java.lang.String identifier) {
            this.identifier = identifier;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getAllocatedStorage}
         * @param allocatedStorage The allocated storage in gigabytes.
         * @return {@code this}
         */
        public Builder allocatedStorage(java.lang.String allocatedStorage) {
            this.allocatedStorage = allocatedStorage;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getAllowMajorVersionUpgrade}
         * @param allowMajorVersionUpgrade Indicates that major version upgrades are allowed.
         *                                 Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible
         * @return {@code this}
         */
        public Builder allowMajorVersionUpgrade(java.lang.Boolean allowMajorVersionUpgrade) {
            this.allowMajorVersionUpgrade = allowMajorVersionUpgrade;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getApplyImmediately}
         * @param applyImmediately Specifies whether any database modifications are applied immediately, or during the next maintenance window.
         * @return {@code this}
         */
        public Builder applyImmediately(java.lang.Boolean applyImmediately) {
            this.applyImmediately = applyImmediately;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getAutoMinorVersionUpgrade}
         * @param autoMinorVersionUpgrade Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window true.
         * @return {@code this}
         */
        public Builder autoMinorVersionUpgrade(java.lang.Boolean autoMinorVersionUpgrade) {
            this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getAvailabilityZone}
         * @param availabilityZone The Availability Zone of the RDS instance.
         * @return {@code this}
         */
        public Builder availabilityZone(java.lang.String availabilityZone) {
            this.availabilityZone = availabilityZone;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getBackupRetentionPeriod}
         * @param backupRetentionPeriod The days to retain backups for.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getBackupWindow}
         * @param backupWindow The daily time range (in UTC) during which automated backups are created if they are enabled.
         *                     Example: '09:46-10:16'. Must not overlap with maintenance_window
         * @return {@code this}
         */
        public Builder backupWindow(java.lang.String backupWindow) {
            this.backupWindow = backupWindow;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCaCertIdentifier}
         * @param caCertIdentifier Specifies the identifier of the CA certificate for the DB instance.
         * @return {@code this}
         */
        public Builder caCertIdentifier(java.lang.String caCertIdentifier) {
            this.caCertIdentifier = caCertIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCharacterSetName}
         * @param characterSetName The character set name to use for DB encoding in Oracle instances.
         *                         This can't be changed. See Oracle Character Sets Supported in Amazon RDS and Collations and Character Sets for Microsoft SQL Server for more information. This can only be set on creation
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCloudwatchLogGroupKmsKeyId}
         * @param cloudwatchLogGroupKmsKeyId The ARN of the KMS Key to use when encrypting log data.
         * @return {@code this}
         */
        public Builder cloudwatchLogGroupKmsKeyId(java.lang.String cloudwatchLogGroupKmsKeyId) {
            this.cloudwatchLogGroupKmsKeyId = cloudwatchLogGroupKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCloudwatchLogGroupRetentionInDays}
         * @param cloudwatchLogGroupRetentionInDays The number of days to retain CloudWatch logs for the DB instance 7.
         * @return {@code this}
         */
        public Builder cloudwatchLogGroupRetentionInDays(java.lang.Number cloudwatchLogGroupRetentionInDays) {
            this.cloudwatchLogGroupRetentionInDays = cloudwatchLogGroupRetentionInDays;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCopyTagsToSnapshot}
         * @param copyTagsToSnapshot On delete, copy all Instance tags to the final snapshot.
         * @return {@code this}
         */
        public Builder copyTagsToSnapshot(java.lang.Boolean copyTagsToSnapshot) {
            this.copyTagsToSnapshot = copyTagsToSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateCloudwatchLogGroup}
         * @param createCloudwatchLogGroup Determines whether a CloudWatch log group is created for each <code>enabled_cloudwatch_logs_exports</code>.
         * @return {@code this}
         */
        public Builder createCloudwatchLogGroup(java.lang.Boolean createCloudwatchLogGroup) {
            this.createCloudwatchLogGroup = createCloudwatchLogGroup;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateDbInstance}
         * @param createDbInstance Whether to create a database instance true.
         * @return {@code this}
         */
        public Builder createDbInstance(java.lang.Boolean createDbInstance) {
            this.createDbInstance = createDbInstance;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateDbOptionGroup}
         * @param createDbOptionGroup Create a database option group true.
         * @return {@code this}
         */
        public Builder createDbOptionGroup(java.lang.Boolean createDbOptionGroup) {
            this.createDbOptionGroup = createDbOptionGroup;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateDbParameterGroup}
         * @param createDbParameterGroup Whether to create a database parameter group true.
         * @return {@code this}
         */
        public Builder createDbParameterGroup(java.lang.Boolean createDbParameterGroup) {
            this.createDbParameterGroup = createDbParameterGroup;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateDbSubnetGroup}
         * @param createDbSubnetGroup Whether to create a database subnet group.
         * @return {@code this}
         */
        public Builder createDbSubnetGroup(java.lang.Boolean createDbSubnetGroup) {
            this.createDbSubnetGroup = createDbSubnetGroup;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateMonitoringRole}
         * @param createMonitoringRole Create IAM role with a defined name that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
         * @return {@code this}
         */
        public Builder createMonitoringRole(java.lang.Boolean createMonitoringRole) {
            this.createMonitoringRole = createMonitoringRole;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getCreateRandomPassword}
         * @param createRandomPassword Whether to create random password for RDS primary cluster true.
         * @return {@code this}
         */
        public Builder createRandomPassword(java.lang.Boolean createRandomPassword) {
            this.createRandomPassword = createRandomPassword;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbInstanceTags}
         * @param dbInstanceTags Additional tags for the DB instance The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder dbInstanceTags(java.util.Map<java.lang.String, java.lang.String> dbInstanceTags) {
            this.dbInstanceTags = dbInstanceTags;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbName}
         * @param dbName The DB name to create.
         *               If omitted, no database is created initially
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbOptionGroupTags}
         * @param dbOptionGroupTags Additional tags for the DB option group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder dbOptionGroupTags(java.util.Map<java.lang.String, java.lang.String> dbOptionGroupTags) {
            this.dbOptionGroupTags = dbOptionGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbParameterGroupTags}
         * @param dbParameterGroupTags Additional tags for the  DB parameter group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder dbParameterGroupTags(java.util.Map<java.lang.String, java.lang.String> dbParameterGroupTags) {
            this.dbParameterGroupTags = dbParameterGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbSubnetGroupDescription}
         * @param dbSubnetGroupDescription Description of the DB subnet group to create.
         * @return {@code this}
         */
        public Builder dbSubnetGroupDescription(java.lang.String dbSubnetGroupDescription) {
            this.dbSubnetGroupDescription = dbSubnetGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbSubnetGroupName}
         * @param dbSubnetGroupName Name of DB subnet group.
         *                          DB instance will be created in the VPC associated with the DB subnet group. If unspecified, will be created in the default VPC
         * @return {@code this}
         */
        public Builder dbSubnetGroupName(java.lang.String dbSubnetGroupName) {
            this.dbSubnetGroupName = dbSubnetGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbSubnetGroupTags}
         * @param dbSubnetGroupTags Additional tags for the DB subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder dbSubnetGroupTags(java.util.Map<java.lang.String, java.lang.String> dbSubnetGroupTags) {
            this.dbSubnetGroupTags = dbSubnetGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDbSubnetGroupUseNamePrefix}
         * @param dbSubnetGroupUseNamePrefix Determines whether to use <code>subnet_group_name</code> as is or create a unique name beginning with the <code>subnet_group_name</code> as the prefix true.
         * @return {@code this}
         */
        public Builder dbSubnetGroupUseNamePrefix(java.lang.Boolean dbSubnetGroupUseNamePrefix) {
            this.dbSubnetGroupUseNamePrefix = dbSubnetGroupUseNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDeleteAutomatedBackups}
         * @param deleteAutomatedBackups Specifies whether to remove automated backups immediately after the DB instance is deleted true.
         * @return {@code this}
         */
        public Builder deleteAutomatedBackups(java.lang.Boolean deleteAutomatedBackups) {
            this.deleteAutomatedBackups = deleteAutomatedBackups;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDeletionProtection}
         * @param deletionProtection The database can't be deleted when this value is set to true.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDomain}
         * @param domain The ID of the Directory Service Active Directory domain to create the instance in.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDomainIamRoleName}
         * @param domainIamRoleName (Required if domain is provided) The name of the IAM role to be used when making API calls to the Directory Service.
         * @return {@code this}
         */
        public Builder domainIamRoleName(java.lang.String domainIamRoleName) {
            this.domainIamRoleName = domainIamRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getEnabledCloudwatchLogsExports}
         * @param enabledCloudwatchLogsExports List of log types to enable for exporting to CloudWatch logs.
         *                                     If omitted, no logs will be exported. Valid values (depending on engine): alert, audit, error, general, listener, slowquery, trace, postgresql (PostgreSQL), upgrade (PostgreSQL)
         * @return {@code this}
         */
        public Builder enabledCloudwatchLogsExports(java.util.List<java.lang.String> enabledCloudwatchLogsExports) {
            this.enabledCloudwatchLogsExports = enabledCloudwatchLogsExports;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getEngine}
         * @param engine The database engine to use.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getEngineVersion}
         * @param engineVersion The engine version to use.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getFamily}
         * @param family The family of the DB parameter group.
         * @return {@code this}
         */
        public Builder family(java.lang.String family) {
            this.family = family;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getFinalSnapshotIdentifierPrefix}
         * @param finalSnapshotIdentifierPrefix The name which is prefixed to the final snapshot on cluster destroy final.
         * @return {@code this}
         */
        public Builder finalSnapshotIdentifierPrefix(java.lang.String finalSnapshotIdentifierPrefix) {
            this.finalSnapshotIdentifierPrefix = finalSnapshotIdentifierPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getIamDatabaseAuthenticationEnabled}
         * @param iamDatabaseAuthenticationEnabled Specifies whether or not the mappings of AWS Identity and Access Management (IAM) accounts to database accounts are enabled.
         * @return {@code this}
         */
        public Builder iamDatabaseAuthenticationEnabled(java.lang.Boolean iamDatabaseAuthenticationEnabled) {
            this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getInstanceClass}
         * @param instanceClass The instance type of the RDS instance.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getInstanceUseIdentifierPrefix}
         * @param instanceUseIdentifierPrefix Determines whether to use <code>identifier</code> as is or create a unique identifier beginning with <code>identifier</code> as the specified prefix.
         * @return {@code this}
         */
        public Builder instanceUseIdentifierPrefix(java.lang.Boolean instanceUseIdentifierPrefix) {
            this.instanceUseIdentifierPrefix = instanceUseIdentifierPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getIops}
         * @param iops The amount of provisioned IOPS.
         *             Setting this implies a storage_type of 'io1'
         * @return {@code this}
         */
        public Builder iops(java.lang.Number iops) {
            this.iops = iops;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getKmsKeyId}
         * @param kmsKeyId The ARN for the KMS encryption key.
         *                 If creating an encrypted replica, set this to the destination KMS ARN. If storage_encrypted is set to true and kms_key_id is not specified the default KMS key created in your account will be used
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getLicenseModel}
         * @param licenseModel License model information for this DB instance.
         *                     Optional, but required for some DB engines, i.e. Oracle SE1
         * @return {@code this}
         */
        public Builder licenseModel(java.lang.String licenseModel) {
            this.licenseModel = licenseModel;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMaintenanceWindow}
         * @param maintenanceWindow The window to perform maintenance in.
         *                          Syntax: 'ddd:hh24:mi-ddd:hh24:mi'. Eg: 'Mon:00:00-Mon:03:00'
         * @return {@code this}
         */
        public Builder maintenanceWindow(java.lang.String maintenanceWindow) {
            this.maintenanceWindow = maintenanceWindow;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMajorEngineVersion}
         * @param majorEngineVersion Specifies the major version of the engine that this option group should be associated with.
         * @return {@code this}
         */
        public Builder majorEngineVersion(java.lang.String majorEngineVersion) {
            this.majorEngineVersion = majorEngineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMaxAllocatedStorage}
         * @param maxAllocatedStorage Specifies the value for Storage Autoscaling.
         * @return {@code this}
         */
        public Builder maxAllocatedStorage(java.lang.Number maxAllocatedStorage) {
            this.maxAllocatedStorage = maxAllocatedStorage;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMonitoringInterval}
         * @param monitoringInterval The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
         *                           To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60
         * @return {@code this}
         */
        public Builder monitoringInterval(java.lang.Number monitoringInterval) {
            this.monitoringInterval = monitoringInterval;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMonitoringRoleArn}
         * @param monitoringRoleArn The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs.
         *                          Must be specified if monitoring_interval is non-zero
         * @return {@code this}
         */
        public Builder monitoringRoleArn(java.lang.String monitoringRoleArn) {
            this.monitoringRoleArn = monitoringRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMonitoringRoleDescription}
         * @param monitoringRoleDescription Description of the monitoring IAM role.
         * @return {@code this}
         */
        public Builder monitoringRoleDescription(java.lang.String monitoringRoleDescription) {
            this.monitoringRoleDescription = monitoringRoleDescription;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMonitoringRoleName}
         * @param monitoringRoleName Name of the IAM role which will be created when create_monitoring_role is enabled rds-monitoring-role.
         * @return {@code this}
         */
        public Builder monitoringRoleName(java.lang.String monitoringRoleName) {
            this.monitoringRoleName = monitoringRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMonitoringRoleUseNamePrefix}
         * @param monitoringRoleUseNamePrefix Determines whether to use <code>monitoring_role_name</code> as is or create a unique identifier beginning with <code>monitoring_role_name</code> as the specified prefix.
         * @return {@code this}
         */
        public Builder monitoringRoleUseNamePrefix(java.lang.Boolean monitoringRoleUseNamePrefix) {
            this.monitoringRoleUseNamePrefix = monitoringRoleUseNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getMultiAz}
         * @param multiAz Specifies if the RDS instance is multi-AZ.
         * @return {@code this}
         */
        public Builder multiAz(java.lang.Boolean multiAz) {
            this.multiAz = multiAz;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getOptionGroupDescription}
         * @param optionGroupDescription The description of the option group.
         * @return {@code this}
         */
        public Builder optionGroupDescription(java.lang.String optionGroupDescription) {
            this.optionGroupDescription = optionGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getOptionGroupName}
         * @param optionGroupName Name of the option group.
         * @return {@code this}
         */
        public Builder optionGroupName(java.lang.String optionGroupName) {
            this.optionGroupName = optionGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getOptionGroupTimeouts}
         * @param optionGroupTimeouts Define maximum timeout for deletion of `aws_db_option_group` resource The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder optionGroupTimeouts(java.util.Map<java.lang.String, java.lang.String> optionGroupTimeouts) {
            this.optionGroupTimeouts = optionGroupTimeouts;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getOptionGroupUseNamePrefix}
         * @param optionGroupUseNamePrefix Determines whether to use <code>option_group_name</code> as is or create a unique name beginning with the <code>option_group_name</code> as the prefix true.
         * @return {@code this}
         */
        public Builder optionGroupUseNamePrefix(java.lang.Boolean optionGroupUseNamePrefix) {
            this.optionGroupUseNamePrefix = optionGroupUseNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getOptions}
         * @param options A list of Options to apply.
         * @return {@code this}
         */
        public Builder options(java.lang.Object options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getParameterGroupDescription}
         * @param parameterGroupDescription Description of the DB parameter group to create.
         * @return {@code this}
         */
        public Builder parameterGroupDescription(java.lang.String parameterGroupDescription) {
            this.parameterGroupDescription = parameterGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getParameterGroupName}
         * @param parameterGroupName Name of the DB parameter group to associate or create.
         * @return {@code this}
         */
        public Builder parameterGroupName(java.lang.String parameterGroupName) {
            this.parameterGroupName = parameterGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getParameterGroupUseNamePrefix}
         * @param parameterGroupUseNamePrefix Determines whether to use <code>parameter_group_name</code> as is or create a unique name beginning with the <code>parameter_group_name</code> as the prefix true.
         * @return {@code this}
         */
        public Builder parameterGroupUseNamePrefix(java.lang.Boolean parameterGroupUseNamePrefix) {
            this.parameterGroupUseNamePrefix = parameterGroupUseNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getParameters}
         * @param parameters A list of DB parameters (map) to apply.
         *                   The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder parameters(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> parameters) {
            this.parameters = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)parameters;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPassword}
         * @param password Password for the master DB user.
         *                 Note that this may show up in logs, and it will be stored in the state file
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPerformanceInsightsEnabled}
         * @param performanceInsightsEnabled Specifies whether Performance Insights are enabled.
         * @return {@code this}
         */
        public Builder performanceInsightsEnabled(java.lang.Boolean performanceInsightsEnabled) {
            this.performanceInsightsEnabled = performanceInsightsEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPerformanceInsightsKmsKeyId}
         * @param performanceInsightsKmsKeyId The ARN for the KMS key to encrypt Performance Insights data.
         * @return {@code this}
         */
        public Builder performanceInsightsKmsKeyId(java.lang.String performanceInsightsKmsKeyId) {
            this.performanceInsightsKmsKeyId = performanceInsightsKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPerformanceInsightsRetentionPeriod}
         * @param performanceInsightsRetentionPeriod The amount of time in days to retain Performance Insights data.
         *                                           Either 7 (7 days) or 731 (2 years)
         *                                           7
         * @return {@code this}
         */
        public Builder performanceInsightsRetentionPeriod(java.lang.Number performanceInsightsRetentionPeriod) {
            this.performanceInsightsRetentionPeriod = performanceInsightsRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPort}
         * @param port The port on which the DB accepts connections.
         * @return {@code this}
         */
        public Builder port(java.lang.String port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPubliclyAccessible}
         * @param publiclyAccessible Bool to control if instance is publicly accessible.
         * @return {@code this}
         */
        public Builder publiclyAccessible(java.lang.Boolean publiclyAccessible) {
            this.publiclyAccessible = publiclyAccessible;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getPutinKhuylo}
         * @param putinKhuylo Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?.
         *                    More info: https://en.wikipedia.org/wiki/Putin_khuylo!
         *                    true
         * @return {@code this}
         */
        public Builder putinKhuylo(java.lang.Boolean putinKhuylo) {
            this.putinKhuylo = putinKhuylo;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getRandomPasswordLength}
         * @param randomPasswordLength Length of random password to create 16.
         * @return {@code this}
         */
        public Builder randomPasswordLength(java.lang.Number randomPasswordLength) {
            this.randomPasswordLength = randomPasswordLength;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getReplicaMode}
         * @param replicaMode Specifies whether the replica is in either mounted or open-read-only mode.
         *                    This attribute is only supported by Oracle instances. Oracle replicas operate in open-read-only mode unless otherwise specified
         * @return {@code this}
         */
        public Builder replicaMode(java.lang.String replicaMode) {
            this.replicaMode = replicaMode;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getReplicateSourceDb}
         * @param replicateSourceDb Specifies that this resource is a Replicate database, and to use this value as the source database.
         *                          This correlates to the identifier of another Amazon RDS Database to replicate
         * @return {@code this}
         */
        public Builder replicateSourceDb(java.lang.String replicateSourceDb) {
            this.replicateSourceDb = replicateSourceDb;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getRestoreToPointInTime}
         * @param restoreToPointInTime Restore to a point in time (MySQL is NOT supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder restoreToPointInTime(java.util.Map<java.lang.String, java.lang.String> restoreToPointInTime) {
            this.restoreToPointInTime = restoreToPointInTime;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getS3Import}
         * @param s3Import Restore from a Percona Xtrabackup in S3 (only MySQL is supported) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder s3Import(java.util.Map<java.lang.String, java.lang.String> s3Import) {
            this.s3Import = s3Import;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getSkipFinalSnapshot}
         * @param skipFinalSnapshot Determines whether a final DB snapshot is created before the DB instance is deleted.
         *                          If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted
         * @return {@code this}
         */
        public Builder skipFinalSnapshot(java.lang.Boolean skipFinalSnapshot) {
            this.skipFinalSnapshot = skipFinalSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getSnapshotIdentifier}
         * @param snapshotIdentifier Specifies whether or not to create this database from a snapshot.
         *                           This correlates to the snapshot ID you'd find in the RDS console, e.g: rds:production-2015-06-26-06-05
         * @return {@code this}
         */
        public Builder snapshotIdentifier(java.lang.String snapshotIdentifier) {
            this.snapshotIdentifier = snapshotIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getStorageEncrypted}
         * @param storageEncrypted Specifies whether the DB instance is encrypted true.
         * @return {@code this}
         */
        public Builder storageEncrypted(java.lang.Boolean storageEncrypted) {
            this.storageEncrypted = storageEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getStorageType}
         * @param storageType One of 'standard' (magnetic), 'gp2' (general purpose SSD), or 'io1' (provisioned IOPS SSD).
         *                    The default is 'io1' if iops is specified, 'gp2' if not
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getSubnetIds}
         * @param subnetIds A list of VPC subnet IDs.
         * @return {@code this}
         */
        public Builder subnetIds(java.util.List<java.lang.String> subnetIds) {
            this.subnetIds = subnetIds;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getTags}
         * @param tags A mapping of tags to assign to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder tags(java.util.Map<java.lang.String, java.lang.String> tags) {
            this.tags = tags;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getTimeouts}
         * @param timeouts Updated Terraform resource management timeouts.
         *                 Applies to `aws_db_instance` in particular to permit resource management times
         *                 The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * @return {@code this}
         */
        public Builder timeouts(java.util.Map<java.lang.String, java.lang.String> timeouts) {
            this.timeouts = timeouts;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getTimezone}
         * @param timezone Time zone of the DB instance.
         *                 timezone is currently only supported by Microsoft SQL Server. The timezone can only be set on creation. See MSSQL User Guide for more information
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getUsername}
         * @param username Username for the master DB user.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getVpcSecurityGroupIds}
         * @param vpcSecurityGroupIds List of VPC security groups to associate.
         * @return {@code this}
         */
        public Builder vpcSecurityGroupIds(java.util.List<java.lang.String> vpcSecurityGroupIds) {
            this.vpcSecurityGroupIds = vpcSecurityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getDependsOn}
         * @param dependsOn the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @SuppressWarnings("unchecked")
        public Builder dependsOn(java.util.List<? extends com.hashicorp.cdktf.ITerraformDependable> dependsOn) {
            this.dependsOn = (java.util.List<com.hashicorp.cdktf.ITerraformDependable>)dependsOn;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getForEach}
         * @param forEach the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder forEach(com.hashicorp.cdktf.ITerraformIterator forEach) {
            this.forEach = forEach;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getProviders}
         * @param providers the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @SuppressWarnings("unchecked")
        public Builder providers(java.util.List<? extends java.lang.Object> providers) {
            this.providers = (java.util.List<java.lang.Object>)providers;
            return this;
        }

        /**
         * Sets the value of {@link RdsConfig#getSkipAssetCreationFromLocalModules}
         * @param skipAssetCreationFromLocalModules the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder skipAssetCreationFromLocalModules(java.lang.Boolean skipAssetCreationFromLocalModules) {
            this.skipAssetCreationFromLocalModules = skipAssetCreationFromLocalModules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RdsConfig}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RdsConfig build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RdsConfig}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RdsConfig {
        private final java.lang.String identifier;
        private final java.lang.String allocatedStorage;
        private final java.lang.Boolean allowMajorVersionUpgrade;
        private final java.lang.Boolean applyImmediately;
        private final java.lang.Boolean autoMinorVersionUpgrade;
        private final java.lang.String availabilityZone;
        private final java.lang.Number backupRetentionPeriod;
        private final java.lang.String backupWindow;
        private final java.lang.String caCertIdentifier;
        private final java.lang.String characterSetName;
        private final java.lang.String cloudwatchLogGroupKmsKeyId;
        private final java.lang.Number cloudwatchLogGroupRetentionInDays;
        private final java.lang.Boolean copyTagsToSnapshot;
        private final java.lang.Boolean createCloudwatchLogGroup;
        private final java.lang.Boolean createDbInstance;
        private final java.lang.Boolean createDbOptionGroup;
        private final java.lang.Boolean createDbParameterGroup;
        private final java.lang.Boolean createDbSubnetGroup;
        private final java.lang.Boolean createMonitoringRole;
        private final java.lang.Boolean createRandomPassword;
        private final java.util.Map<java.lang.String, java.lang.String> dbInstanceTags;
        private final java.lang.String dbName;
        private final java.util.Map<java.lang.String, java.lang.String> dbOptionGroupTags;
        private final java.util.Map<java.lang.String, java.lang.String> dbParameterGroupTags;
        private final java.lang.String dbSubnetGroupDescription;
        private final java.lang.String dbSubnetGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> dbSubnetGroupTags;
        private final java.lang.Boolean dbSubnetGroupUseNamePrefix;
        private final java.lang.Boolean deleteAutomatedBackups;
        private final java.lang.Boolean deletionProtection;
        private final java.lang.String domain;
        private final java.lang.String domainIamRoleName;
        private final java.util.List<java.lang.String> enabledCloudwatchLogsExports;
        private final java.lang.String engine;
        private final java.lang.String engineVersion;
        private final java.lang.String family;
        private final java.lang.String finalSnapshotIdentifierPrefix;
        private final java.lang.Boolean iamDatabaseAuthenticationEnabled;
        private final java.lang.String instanceClass;
        private final java.lang.Boolean instanceUseIdentifierPrefix;
        private final java.lang.Number iops;
        private final java.lang.String kmsKeyId;
        private final java.lang.String licenseModel;
        private final java.lang.String maintenanceWindow;
        private final java.lang.String majorEngineVersion;
        private final java.lang.Number maxAllocatedStorage;
        private final java.lang.Number monitoringInterval;
        private final java.lang.String monitoringRoleArn;
        private final java.lang.String monitoringRoleDescription;
        private final java.lang.String monitoringRoleName;
        private final java.lang.Boolean monitoringRoleUseNamePrefix;
        private final java.lang.Boolean multiAz;
        private final java.lang.String optionGroupDescription;
        private final java.lang.String optionGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> optionGroupTimeouts;
        private final java.lang.Boolean optionGroupUseNamePrefix;
        private final java.lang.Object options;
        private final java.lang.String parameterGroupDescription;
        private final java.lang.String parameterGroupName;
        private final java.lang.Boolean parameterGroupUseNamePrefix;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> parameters;
        private final java.lang.String password;
        private final java.lang.Boolean performanceInsightsEnabled;
        private final java.lang.String performanceInsightsKmsKeyId;
        private final java.lang.Number performanceInsightsRetentionPeriod;
        private final java.lang.String port;
        private final java.lang.Boolean publiclyAccessible;
        private final java.lang.Boolean putinKhuylo;
        private final java.lang.Number randomPasswordLength;
        private final java.lang.String replicaMode;
        private final java.lang.String replicateSourceDb;
        private final java.util.Map<java.lang.String, java.lang.String> restoreToPointInTime;
        private final java.util.Map<java.lang.String, java.lang.String> s3Import;
        private final java.lang.Boolean skipFinalSnapshot;
        private final java.lang.String snapshotIdentifier;
        private final java.lang.Boolean storageEncrypted;
        private final java.lang.String storageType;
        private final java.util.List<java.lang.String> subnetIds;
        private final java.util.Map<java.lang.String, java.lang.String> tags;
        private final java.util.Map<java.lang.String, java.lang.String> timeouts;
        private final java.lang.String timezone;
        private final java.lang.String username;
        private final java.util.List<java.lang.String> vpcSecurityGroupIds;
        private final java.util.List<com.hashicorp.cdktf.ITerraformDependable> dependsOn;
        private final com.hashicorp.cdktf.ITerraformIterator forEach;
        private final java.util.List<java.lang.Object> providers;
        private final java.lang.Boolean skipAssetCreationFromLocalModules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.identifier = software.amazon.jsii.Kernel.get(this, "identifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.allocatedStorage = software.amazon.jsii.Kernel.get(this, "allocatedStorage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.allowMajorVersionUpgrade = software.amazon.jsii.Kernel.get(this, "allowMajorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.applyImmediately = software.amazon.jsii.Kernel.get(this, "applyImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.autoMinorVersionUpgrade = software.amazon.jsii.Kernel.get(this, "autoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.availabilityZone = software.amazon.jsii.Kernel.get(this, "availabilityZone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.backupWindow = software.amazon.jsii.Kernel.get(this, "backupWindow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.caCertIdentifier = software.amazon.jsii.Kernel.get(this, "caCertIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cloudwatchLogGroupKmsKeyId = software.amazon.jsii.Kernel.get(this, "cloudwatchLogGroupKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cloudwatchLogGroupRetentionInDays = software.amazon.jsii.Kernel.get(this, "cloudwatchLogGroupRetentionInDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.copyTagsToSnapshot = software.amazon.jsii.Kernel.get(this, "copyTagsToSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createCloudwatchLogGroup = software.amazon.jsii.Kernel.get(this, "createCloudwatchLogGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDbInstance = software.amazon.jsii.Kernel.get(this, "createDbInstance", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDbOptionGroup = software.amazon.jsii.Kernel.get(this, "createDbOptionGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDbParameterGroup = software.amazon.jsii.Kernel.get(this, "createDbParameterGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDbSubnetGroup = software.amazon.jsii.Kernel.get(this, "createDbSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createMonitoringRole = software.amazon.jsii.Kernel.get(this, "createMonitoringRole", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createRandomPassword = software.amazon.jsii.Kernel.get(this, "createRandomPassword", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.dbInstanceTags = software.amazon.jsii.Kernel.get(this, "dbInstanceTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbOptionGroupTags = software.amazon.jsii.Kernel.get(this, "dbOptionGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dbParameterGroupTags = software.amazon.jsii.Kernel.get(this, "dbParameterGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dbSubnetGroupDescription = software.amazon.jsii.Kernel.get(this, "dbSubnetGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbSubnetGroupName = software.amazon.jsii.Kernel.get(this, "dbSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbSubnetGroupTags = software.amazon.jsii.Kernel.get(this, "dbSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dbSubnetGroupUseNamePrefix = software.amazon.jsii.Kernel.get(this, "dbSubnetGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.deleteAutomatedBackups = software.amazon.jsii.Kernel.get(this, "deleteAutomatedBackups", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.domainIamRoleName = software.amazon.jsii.Kernel.get(this, "domainIamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enabledCloudwatchLogsExports = software.amazon.jsii.Kernel.get(this, "enabledCloudwatchLogsExports", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.family = software.amazon.jsii.Kernel.get(this, "family", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.finalSnapshotIdentifierPrefix = software.amazon.jsii.Kernel.get(this, "finalSnapshotIdentifierPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.iamDatabaseAuthenticationEnabled = software.amazon.jsii.Kernel.get(this, "iamDatabaseAuthenticationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceUseIdentifierPrefix = software.amazon.jsii.Kernel.get(this, "instanceUseIdentifierPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.iops = software.amazon.jsii.Kernel.get(this, "iops", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.licenseModel = software.amazon.jsii.Kernel.get(this, "licenseModel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.maintenanceWindow = software.amazon.jsii.Kernel.get(this, "maintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.majorEngineVersion = software.amazon.jsii.Kernel.get(this, "majorEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.maxAllocatedStorage = software.amazon.jsii.Kernel.get(this, "maxAllocatedStorage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.monitoringInterval = software.amazon.jsii.Kernel.get(this, "monitoringInterval", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.monitoringRoleArn = software.amazon.jsii.Kernel.get(this, "monitoringRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.monitoringRoleDescription = software.amazon.jsii.Kernel.get(this, "monitoringRoleDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.monitoringRoleName = software.amazon.jsii.Kernel.get(this, "monitoringRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.monitoringRoleUseNamePrefix = software.amazon.jsii.Kernel.get(this, "monitoringRoleUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.multiAz = software.amazon.jsii.Kernel.get(this, "multiAz", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.optionGroupDescription = software.amazon.jsii.Kernel.get(this, "optionGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.optionGroupName = software.amazon.jsii.Kernel.get(this, "optionGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.optionGroupTimeouts = software.amazon.jsii.Kernel.get(this, "optionGroupTimeouts", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.optionGroupUseNamePrefix = software.amazon.jsii.Kernel.get(this, "optionGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameterGroupDescription = software.amazon.jsii.Kernel.get(this, "parameterGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameterGroupName = software.amazon.jsii.Kernel.get(this, "parameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameterGroupUseNamePrefix = software.amazon.jsii.Kernel.get(this, "parameterGroupUseNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.performanceInsightsEnabled = software.amazon.jsii.Kernel.get(this, "performanceInsightsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.performanceInsightsKmsKeyId = software.amazon.jsii.Kernel.get(this, "performanceInsightsKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.performanceInsightsRetentionPeriod = software.amazon.jsii.Kernel.get(this, "performanceInsightsRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.publiclyAccessible = software.amazon.jsii.Kernel.get(this, "publiclyAccessible", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.putinKhuylo = software.amazon.jsii.Kernel.get(this, "putinKhuylo", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.randomPasswordLength = software.amazon.jsii.Kernel.get(this, "randomPasswordLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.replicaMode = software.amazon.jsii.Kernel.get(this, "replicaMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.replicateSourceDb = software.amazon.jsii.Kernel.get(this, "replicateSourceDb", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreToPointInTime = software.amazon.jsii.Kernel.get(this, "restoreToPointInTime", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.s3Import = software.amazon.jsii.Kernel.get(this, "s3Import", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.skipFinalSnapshot = software.amazon.jsii.Kernel.get(this, "skipFinalSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.snapshotIdentifier = software.amazon.jsii.Kernel.get(this, "snapshotIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageEncrypted = software.amazon.jsii.Kernel.get(this, "storageEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.subnetIds = software.amazon.jsii.Kernel.get(this, "subnetIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.timeouts = software.amazon.jsii.Kernel.get(this, "timeouts", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcSecurityGroupIds = software.amazon.jsii.Kernel.get(this, "vpcSecurityGroupIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dependsOn = software.amazon.jsii.Kernel.get(this, "dependsOn", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.hashicorp.cdktf.ITerraformDependable.class)));
            this.forEach = software.amazon.jsii.Kernel.get(this, "forEach", software.amazon.jsii.NativeType.forClass(com.hashicorp.cdktf.ITerraformIterator.class));
            this.providers = software.amazon.jsii.Kernel.get(this, "providers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.skipAssetCreationFromLocalModules = software.amazon.jsii.Kernel.get(this, "skipAssetCreationFromLocalModules", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.identifier = java.util.Objects.requireNonNull(builder.identifier, "identifier is required");
            this.allocatedStorage = builder.allocatedStorage;
            this.allowMajorVersionUpgrade = builder.allowMajorVersionUpgrade;
            this.applyImmediately = builder.applyImmediately;
            this.autoMinorVersionUpgrade = builder.autoMinorVersionUpgrade;
            this.availabilityZone = builder.availabilityZone;
            this.backupRetentionPeriod = builder.backupRetentionPeriod;
            this.backupWindow = builder.backupWindow;
            this.caCertIdentifier = builder.caCertIdentifier;
            this.characterSetName = builder.characterSetName;
            this.cloudwatchLogGroupKmsKeyId = builder.cloudwatchLogGroupKmsKeyId;
            this.cloudwatchLogGroupRetentionInDays = builder.cloudwatchLogGroupRetentionInDays;
            this.copyTagsToSnapshot = builder.copyTagsToSnapshot;
            this.createCloudwatchLogGroup = builder.createCloudwatchLogGroup;
            this.createDbInstance = builder.createDbInstance;
            this.createDbOptionGroup = builder.createDbOptionGroup;
            this.createDbParameterGroup = builder.createDbParameterGroup;
            this.createDbSubnetGroup = builder.createDbSubnetGroup;
            this.createMonitoringRole = builder.createMonitoringRole;
            this.createRandomPassword = builder.createRandomPassword;
            this.dbInstanceTags = builder.dbInstanceTags;
            this.dbName = builder.dbName;
            this.dbOptionGroupTags = builder.dbOptionGroupTags;
            this.dbParameterGroupTags = builder.dbParameterGroupTags;
            this.dbSubnetGroupDescription = builder.dbSubnetGroupDescription;
            this.dbSubnetGroupName = builder.dbSubnetGroupName;
            this.dbSubnetGroupTags = builder.dbSubnetGroupTags;
            this.dbSubnetGroupUseNamePrefix = builder.dbSubnetGroupUseNamePrefix;
            this.deleteAutomatedBackups = builder.deleteAutomatedBackups;
            this.deletionProtection = builder.deletionProtection;
            this.domain = builder.domain;
            this.domainIamRoleName = builder.domainIamRoleName;
            this.enabledCloudwatchLogsExports = builder.enabledCloudwatchLogsExports;
            this.engine = builder.engine;
            this.engineVersion = builder.engineVersion;
            this.family = builder.family;
            this.finalSnapshotIdentifierPrefix = builder.finalSnapshotIdentifierPrefix;
            this.iamDatabaseAuthenticationEnabled = builder.iamDatabaseAuthenticationEnabled;
            this.instanceClass = builder.instanceClass;
            this.instanceUseIdentifierPrefix = builder.instanceUseIdentifierPrefix;
            this.iops = builder.iops;
            this.kmsKeyId = builder.kmsKeyId;
            this.licenseModel = builder.licenseModel;
            this.maintenanceWindow = builder.maintenanceWindow;
            this.majorEngineVersion = builder.majorEngineVersion;
            this.maxAllocatedStorage = builder.maxAllocatedStorage;
            this.monitoringInterval = builder.monitoringInterval;
            this.monitoringRoleArn = builder.monitoringRoleArn;
            this.monitoringRoleDescription = builder.monitoringRoleDescription;
            this.monitoringRoleName = builder.monitoringRoleName;
            this.monitoringRoleUseNamePrefix = builder.monitoringRoleUseNamePrefix;
            this.multiAz = builder.multiAz;
            this.optionGroupDescription = builder.optionGroupDescription;
            this.optionGroupName = builder.optionGroupName;
            this.optionGroupTimeouts = builder.optionGroupTimeouts;
            this.optionGroupUseNamePrefix = builder.optionGroupUseNamePrefix;
            this.options = builder.options;
            this.parameterGroupDescription = builder.parameterGroupDescription;
            this.parameterGroupName = builder.parameterGroupName;
            this.parameterGroupUseNamePrefix = builder.parameterGroupUseNamePrefix;
            this.parameters = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.parameters;
            this.password = builder.password;
            this.performanceInsightsEnabled = builder.performanceInsightsEnabled;
            this.performanceInsightsKmsKeyId = builder.performanceInsightsKmsKeyId;
            this.performanceInsightsRetentionPeriod = builder.performanceInsightsRetentionPeriod;
            this.port = builder.port;
            this.publiclyAccessible = builder.publiclyAccessible;
            this.putinKhuylo = builder.putinKhuylo;
            this.randomPasswordLength = builder.randomPasswordLength;
            this.replicaMode = builder.replicaMode;
            this.replicateSourceDb = builder.replicateSourceDb;
            this.restoreToPointInTime = builder.restoreToPointInTime;
            this.s3Import = builder.s3Import;
            this.skipFinalSnapshot = builder.skipFinalSnapshot;
            this.snapshotIdentifier = builder.snapshotIdentifier;
            this.storageEncrypted = builder.storageEncrypted;
            this.storageType = builder.storageType;
            this.subnetIds = builder.subnetIds;
            this.tags = builder.tags;
            this.timeouts = builder.timeouts;
            this.timezone = builder.timezone;
            this.username = builder.username;
            this.vpcSecurityGroupIds = builder.vpcSecurityGroupIds;
            this.dependsOn = (java.util.List<com.hashicorp.cdktf.ITerraformDependable>)builder.dependsOn;
            this.forEach = builder.forEach;
            this.providers = (java.util.List<java.lang.Object>)builder.providers;
            this.skipAssetCreationFromLocalModules = builder.skipAssetCreationFromLocalModules;
        }

        @Override
        public final java.lang.String getIdentifier() {
            return this.identifier;
        }

        @Override
        public final java.lang.String getAllocatedStorage() {
            return this.allocatedStorage;
        }

        @Override
        public final java.lang.Boolean getAllowMajorVersionUpgrade() {
            return this.allowMajorVersionUpgrade;
        }

        @Override
        public final java.lang.Boolean getApplyImmediately() {
            return this.applyImmediately;
        }

        @Override
        public final java.lang.Boolean getAutoMinorVersionUpgrade() {
            return this.autoMinorVersionUpgrade;
        }

        @Override
        public final java.lang.String getAvailabilityZone() {
            return this.availabilityZone;
        }

        @Override
        public final java.lang.Number getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.String getBackupWindow() {
            return this.backupWindow;
        }

        @Override
        public final java.lang.String getCaCertIdentifier() {
            return this.caCertIdentifier;
        }

        @Override
        public final java.lang.String getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.String getCloudwatchLogGroupKmsKeyId() {
            return this.cloudwatchLogGroupKmsKeyId;
        }

        @Override
        public final java.lang.Number getCloudwatchLogGroupRetentionInDays() {
            return this.cloudwatchLogGroupRetentionInDays;
        }

        @Override
        public final java.lang.Boolean getCopyTagsToSnapshot() {
            return this.copyTagsToSnapshot;
        }

        @Override
        public final java.lang.Boolean getCreateCloudwatchLogGroup() {
            return this.createCloudwatchLogGroup;
        }

        @Override
        public final java.lang.Boolean getCreateDbInstance() {
            return this.createDbInstance;
        }

        @Override
        public final java.lang.Boolean getCreateDbOptionGroup() {
            return this.createDbOptionGroup;
        }

        @Override
        public final java.lang.Boolean getCreateDbParameterGroup() {
            return this.createDbParameterGroup;
        }

        @Override
        public final java.lang.Boolean getCreateDbSubnetGroup() {
            return this.createDbSubnetGroup;
        }

        @Override
        public final java.lang.Boolean getCreateMonitoringRole() {
            return this.createMonitoringRole;
        }

        @Override
        public final java.lang.Boolean getCreateRandomPassword() {
            return this.createRandomPassword;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDbInstanceTags() {
            return this.dbInstanceTags;
        }

        @Override
        public final java.lang.String getDbName() {
            return this.dbName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDbOptionGroupTags() {
            return this.dbOptionGroupTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDbParameterGroupTags() {
            return this.dbParameterGroupTags;
        }

        @Override
        public final java.lang.String getDbSubnetGroupDescription() {
            return this.dbSubnetGroupDescription;
        }

        @Override
        public final java.lang.String getDbSubnetGroupName() {
            return this.dbSubnetGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDbSubnetGroupTags() {
            return this.dbSubnetGroupTags;
        }

        @Override
        public final java.lang.Boolean getDbSubnetGroupUseNamePrefix() {
            return this.dbSubnetGroupUseNamePrefix;
        }

        @Override
        public final java.lang.Boolean getDeleteAutomatedBackups() {
            return this.deleteAutomatedBackups;
        }

        @Override
        public final java.lang.Boolean getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.String getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.String getDomainIamRoleName() {
            return this.domainIamRoleName;
        }

        @Override
        public final java.util.List<java.lang.String> getEnabledCloudwatchLogsExports() {
            return this.enabledCloudwatchLogsExports;
        }

        @Override
        public final java.lang.String getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.String getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.String getFamily() {
            return this.family;
        }

        @Override
        public final java.lang.String getFinalSnapshotIdentifierPrefix() {
            return this.finalSnapshotIdentifierPrefix;
        }

        @Override
        public final java.lang.Boolean getIamDatabaseAuthenticationEnabled() {
            return this.iamDatabaseAuthenticationEnabled;
        }

        @Override
        public final java.lang.String getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Boolean getInstanceUseIdentifierPrefix() {
            return this.instanceUseIdentifierPrefix;
        }

        @Override
        public final java.lang.Number getIops() {
            return this.iops;
        }

        @Override
        public final java.lang.String getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.String getLicenseModel() {
            return this.licenseModel;
        }

        @Override
        public final java.lang.String getMaintenanceWindow() {
            return this.maintenanceWindow;
        }

        @Override
        public final java.lang.String getMajorEngineVersion() {
            return this.majorEngineVersion;
        }

        @Override
        public final java.lang.Number getMaxAllocatedStorage() {
            return this.maxAllocatedStorage;
        }

        @Override
        public final java.lang.Number getMonitoringInterval() {
            return this.monitoringInterval;
        }

        @Override
        public final java.lang.String getMonitoringRoleArn() {
            return this.monitoringRoleArn;
        }

        @Override
        public final java.lang.String getMonitoringRoleDescription() {
            return this.monitoringRoleDescription;
        }

        @Override
        public final java.lang.String getMonitoringRoleName() {
            return this.monitoringRoleName;
        }

        @Override
        public final java.lang.Boolean getMonitoringRoleUseNamePrefix() {
            return this.monitoringRoleUseNamePrefix;
        }

        @Override
        public final java.lang.Boolean getMultiAz() {
            return this.multiAz;
        }

        @Override
        public final java.lang.String getOptionGroupDescription() {
            return this.optionGroupDescription;
        }

        @Override
        public final java.lang.String getOptionGroupName() {
            return this.optionGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getOptionGroupTimeouts() {
            return this.optionGroupTimeouts;
        }

        @Override
        public final java.lang.Boolean getOptionGroupUseNamePrefix() {
            return this.optionGroupUseNamePrefix;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.String getParameterGroupDescription() {
            return this.parameterGroupDescription;
        }

        @Override
        public final java.lang.String getParameterGroupName() {
            return this.parameterGroupName;
        }

        @Override
        public final java.lang.Boolean getParameterGroupUseNamePrefix() {
            return this.parameterGroupUseNamePrefix;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.String getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Boolean getPerformanceInsightsEnabled() {
            return this.performanceInsightsEnabled;
        }

        @Override
        public final java.lang.String getPerformanceInsightsKmsKeyId() {
            return this.performanceInsightsKmsKeyId;
        }

        @Override
        public final java.lang.Number getPerformanceInsightsRetentionPeriod() {
            return this.performanceInsightsRetentionPeriod;
        }

        @Override
        public final java.lang.String getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Boolean getPubliclyAccessible() {
            return this.publiclyAccessible;
        }

        @Override
        public final java.lang.Boolean getPutinKhuylo() {
            return this.putinKhuylo;
        }

        @Override
        public final java.lang.Number getRandomPasswordLength() {
            return this.randomPasswordLength;
        }

        @Override
        public final java.lang.String getReplicaMode() {
            return this.replicaMode;
        }

        @Override
        public final java.lang.String getReplicateSourceDb() {
            return this.replicateSourceDb;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getRestoreToPointInTime() {
            return this.restoreToPointInTime;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getS3Import() {
            return this.s3Import;
        }

        @Override
        public final java.lang.Boolean getSkipFinalSnapshot() {
            return this.skipFinalSnapshot;
        }

        @Override
        public final java.lang.String getSnapshotIdentifier() {
            return this.snapshotIdentifier;
        }

        @Override
        public final java.lang.Boolean getStorageEncrypted() {
            return this.storageEncrypted;
        }

        @Override
        public final java.lang.String getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.util.List<java.lang.String> getSubnetIds() {
            return this.subnetIds;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getTags() {
            return this.tags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getTimeouts() {
            return this.timeouts;
        }

        @Override
        public final java.lang.String getTimezone() {
            return this.timezone;
        }

        @Override
        public final java.lang.String getUsername() {
            return this.username;
        }

        @Override
        public final java.util.List<java.lang.String> getVpcSecurityGroupIds() {
            return this.vpcSecurityGroupIds;
        }

        @Override
        public final java.util.List<com.hashicorp.cdktf.ITerraformDependable> getDependsOn() {
            return this.dependsOn;
        }

        @Override
        public final com.hashicorp.cdktf.ITerraformIterator getForEach() {
            return this.forEach;
        }

        @Override
        public final java.util.List<java.lang.Object> getProviders() {
            return this.providers;
        }

        @Override
        public final java.lang.Boolean getSkipAssetCreationFromLocalModules() {
            return this.skipAssetCreationFromLocalModules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("identifier", om.valueToTree(this.getIdentifier()));
            if (this.getAllocatedStorage() != null) {
                data.set("allocatedStorage", om.valueToTree(this.getAllocatedStorage()));
            }
            if (this.getAllowMajorVersionUpgrade() != null) {
                data.set("allowMajorVersionUpgrade", om.valueToTree(this.getAllowMajorVersionUpgrade()));
            }
            if (this.getApplyImmediately() != null) {
                data.set("applyImmediately", om.valueToTree(this.getApplyImmediately()));
            }
            if (this.getAutoMinorVersionUpgrade() != null) {
                data.set("autoMinorVersionUpgrade", om.valueToTree(this.getAutoMinorVersionUpgrade()));
            }
            if (this.getAvailabilityZone() != null) {
                data.set("availabilityZone", om.valueToTree(this.getAvailabilityZone()));
            }
            if (this.getBackupRetentionPeriod() != null) {
                data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            }
            if (this.getBackupWindow() != null) {
                data.set("backupWindow", om.valueToTree(this.getBackupWindow()));
            }
            if (this.getCaCertIdentifier() != null) {
                data.set("caCertIdentifier", om.valueToTree(this.getCaCertIdentifier()));
            }
            if (this.getCharacterSetName() != null) {
                data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            }
            if (this.getCloudwatchLogGroupKmsKeyId() != null) {
                data.set("cloudwatchLogGroupKmsKeyId", om.valueToTree(this.getCloudwatchLogGroupKmsKeyId()));
            }
            if (this.getCloudwatchLogGroupRetentionInDays() != null) {
                data.set("cloudwatchLogGroupRetentionInDays", om.valueToTree(this.getCloudwatchLogGroupRetentionInDays()));
            }
            if (this.getCopyTagsToSnapshot() != null) {
                data.set("copyTagsToSnapshot", om.valueToTree(this.getCopyTagsToSnapshot()));
            }
            if (this.getCreateCloudwatchLogGroup() != null) {
                data.set("createCloudwatchLogGroup", om.valueToTree(this.getCreateCloudwatchLogGroup()));
            }
            if (this.getCreateDbInstance() != null) {
                data.set("createDbInstance", om.valueToTree(this.getCreateDbInstance()));
            }
            if (this.getCreateDbOptionGroup() != null) {
                data.set("createDbOptionGroup", om.valueToTree(this.getCreateDbOptionGroup()));
            }
            if (this.getCreateDbParameterGroup() != null) {
                data.set("createDbParameterGroup", om.valueToTree(this.getCreateDbParameterGroup()));
            }
            if (this.getCreateDbSubnetGroup() != null) {
                data.set("createDbSubnetGroup", om.valueToTree(this.getCreateDbSubnetGroup()));
            }
            if (this.getCreateMonitoringRole() != null) {
                data.set("createMonitoringRole", om.valueToTree(this.getCreateMonitoringRole()));
            }
            if (this.getCreateRandomPassword() != null) {
                data.set("createRandomPassword", om.valueToTree(this.getCreateRandomPassword()));
            }
            if (this.getDbInstanceTags() != null) {
                data.set("dbInstanceTags", om.valueToTree(this.getDbInstanceTags()));
            }
            if (this.getDbName() != null) {
                data.set("dbName", om.valueToTree(this.getDbName()));
            }
            if (this.getDbOptionGroupTags() != null) {
                data.set("dbOptionGroupTags", om.valueToTree(this.getDbOptionGroupTags()));
            }
            if (this.getDbParameterGroupTags() != null) {
                data.set("dbParameterGroupTags", om.valueToTree(this.getDbParameterGroupTags()));
            }
            if (this.getDbSubnetGroupDescription() != null) {
                data.set("dbSubnetGroupDescription", om.valueToTree(this.getDbSubnetGroupDescription()));
            }
            if (this.getDbSubnetGroupName() != null) {
                data.set("dbSubnetGroupName", om.valueToTree(this.getDbSubnetGroupName()));
            }
            if (this.getDbSubnetGroupTags() != null) {
                data.set("dbSubnetGroupTags", om.valueToTree(this.getDbSubnetGroupTags()));
            }
            if (this.getDbSubnetGroupUseNamePrefix() != null) {
                data.set("dbSubnetGroupUseNamePrefix", om.valueToTree(this.getDbSubnetGroupUseNamePrefix()));
            }
            if (this.getDeleteAutomatedBackups() != null) {
                data.set("deleteAutomatedBackups", om.valueToTree(this.getDeleteAutomatedBackups()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDomain() != null) {
                data.set("domain", om.valueToTree(this.getDomain()));
            }
            if (this.getDomainIamRoleName() != null) {
                data.set("domainIamRoleName", om.valueToTree(this.getDomainIamRoleName()));
            }
            if (this.getEnabledCloudwatchLogsExports() != null) {
                data.set("enabledCloudwatchLogsExports", om.valueToTree(this.getEnabledCloudwatchLogsExports()));
            }
            if (this.getEngine() != null) {
                data.set("engine", om.valueToTree(this.getEngine()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getFamily() != null) {
                data.set("family", om.valueToTree(this.getFamily()));
            }
            if (this.getFinalSnapshotIdentifierPrefix() != null) {
                data.set("finalSnapshotIdentifierPrefix", om.valueToTree(this.getFinalSnapshotIdentifierPrefix()));
            }
            if (this.getIamDatabaseAuthenticationEnabled() != null) {
                data.set("iamDatabaseAuthenticationEnabled", om.valueToTree(this.getIamDatabaseAuthenticationEnabled()));
            }
            if (this.getInstanceClass() != null) {
                data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            }
            if (this.getInstanceUseIdentifierPrefix() != null) {
                data.set("instanceUseIdentifierPrefix", om.valueToTree(this.getInstanceUseIdentifierPrefix()));
            }
            if (this.getIops() != null) {
                data.set("iops", om.valueToTree(this.getIops()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getLicenseModel() != null) {
                data.set("licenseModel", om.valueToTree(this.getLicenseModel()));
            }
            if (this.getMaintenanceWindow() != null) {
                data.set("maintenanceWindow", om.valueToTree(this.getMaintenanceWindow()));
            }
            if (this.getMajorEngineVersion() != null) {
                data.set("majorEngineVersion", om.valueToTree(this.getMajorEngineVersion()));
            }
            if (this.getMaxAllocatedStorage() != null) {
                data.set("maxAllocatedStorage", om.valueToTree(this.getMaxAllocatedStorage()));
            }
            if (this.getMonitoringInterval() != null) {
                data.set("monitoringInterval", om.valueToTree(this.getMonitoringInterval()));
            }
            if (this.getMonitoringRoleArn() != null) {
                data.set("monitoringRoleArn", om.valueToTree(this.getMonitoringRoleArn()));
            }
            if (this.getMonitoringRoleDescription() != null) {
                data.set("monitoringRoleDescription", om.valueToTree(this.getMonitoringRoleDescription()));
            }
            if (this.getMonitoringRoleName() != null) {
                data.set("monitoringRoleName", om.valueToTree(this.getMonitoringRoleName()));
            }
            if (this.getMonitoringRoleUseNamePrefix() != null) {
                data.set("monitoringRoleUseNamePrefix", om.valueToTree(this.getMonitoringRoleUseNamePrefix()));
            }
            if (this.getMultiAz() != null) {
                data.set("multiAz", om.valueToTree(this.getMultiAz()));
            }
            if (this.getOptionGroupDescription() != null) {
                data.set("optionGroupDescription", om.valueToTree(this.getOptionGroupDescription()));
            }
            if (this.getOptionGroupName() != null) {
                data.set("optionGroupName", om.valueToTree(this.getOptionGroupName()));
            }
            if (this.getOptionGroupTimeouts() != null) {
                data.set("optionGroupTimeouts", om.valueToTree(this.getOptionGroupTimeouts()));
            }
            if (this.getOptionGroupUseNamePrefix() != null) {
                data.set("optionGroupUseNamePrefix", om.valueToTree(this.getOptionGroupUseNamePrefix()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getParameterGroupDescription() != null) {
                data.set("parameterGroupDescription", om.valueToTree(this.getParameterGroupDescription()));
            }
            if (this.getParameterGroupName() != null) {
                data.set("parameterGroupName", om.valueToTree(this.getParameterGroupName()));
            }
            if (this.getParameterGroupUseNamePrefix() != null) {
                data.set("parameterGroupUseNamePrefix", om.valueToTree(this.getParameterGroupUseNamePrefix()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPerformanceInsightsEnabled() != null) {
                data.set("performanceInsightsEnabled", om.valueToTree(this.getPerformanceInsightsEnabled()));
            }
            if (this.getPerformanceInsightsKmsKeyId() != null) {
                data.set("performanceInsightsKmsKeyId", om.valueToTree(this.getPerformanceInsightsKmsKeyId()));
            }
            if (this.getPerformanceInsightsRetentionPeriod() != null) {
                data.set("performanceInsightsRetentionPeriod", om.valueToTree(this.getPerformanceInsightsRetentionPeriod()));
            }
            if (this.getPort() != null) {
                data.set("port", om.valueToTree(this.getPort()));
            }
            if (this.getPubliclyAccessible() != null) {
                data.set("publiclyAccessible", om.valueToTree(this.getPubliclyAccessible()));
            }
            if (this.getPutinKhuylo() != null) {
                data.set("putinKhuylo", om.valueToTree(this.getPutinKhuylo()));
            }
            if (this.getRandomPasswordLength() != null) {
                data.set("randomPasswordLength", om.valueToTree(this.getRandomPasswordLength()));
            }
            if (this.getReplicaMode() != null) {
                data.set("replicaMode", om.valueToTree(this.getReplicaMode()));
            }
            if (this.getReplicateSourceDb() != null) {
                data.set("replicateSourceDb", om.valueToTree(this.getReplicateSourceDb()));
            }
            if (this.getRestoreToPointInTime() != null) {
                data.set("restoreToPointInTime", om.valueToTree(this.getRestoreToPointInTime()));
            }
            if (this.getS3Import() != null) {
                data.set("s3Import", om.valueToTree(this.getS3Import()));
            }
            if (this.getSkipFinalSnapshot() != null) {
                data.set("skipFinalSnapshot", om.valueToTree(this.getSkipFinalSnapshot()));
            }
            if (this.getSnapshotIdentifier() != null) {
                data.set("snapshotIdentifier", om.valueToTree(this.getSnapshotIdentifier()));
            }
            if (this.getStorageEncrypted() != null) {
                data.set("storageEncrypted", om.valueToTree(this.getStorageEncrypted()));
            }
            if (this.getStorageType() != null) {
                data.set("storageType", om.valueToTree(this.getStorageType()));
            }
            if (this.getSubnetIds() != null) {
                data.set("subnetIds", om.valueToTree(this.getSubnetIds()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeouts() != null) {
                data.set("timeouts", om.valueToTree(this.getTimeouts()));
            }
            if (this.getTimezone() != null) {
                data.set("timezone", om.valueToTree(this.getTimezone()));
            }
            if (this.getUsername() != null) {
                data.set("username", om.valueToTree(this.getUsername()));
            }
            if (this.getVpcSecurityGroupIds() != null) {
                data.set("vpcSecurityGroupIds", om.valueToTree(this.getVpcSecurityGroupIds()));
            }
            if (this.getDependsOn() != null) {
                data.set("dependsOn", om.valueToTree(this.getDependsOn()));
            }
            if (this.getForEach() != null) {
                data.set("forEach", om.valueToTree(this.getForEach()));
            }
            if (this.getProviders() != null) {
                data.set("providers", om.valueToTree(this.getProviders()));
            }
            if (this.getSkipAssetCreationFromLocalModules() != null) {
                data.set("skipAssetCreationFromLocalModules", om.valueToTree(this.getSkipAssetCreationFromLocalModules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("rds.RdsConfig"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RdsConfig.Jsii$Proxy that = (RdsConfig.Jsii$Proxy) o;

            if (!identifier.equals(that.identifier)) return false;
            if (this.allocatedStorage != null ? !this.allocatedStorage.equals(that.allocatedStorage) : that.allocatedStorage != null) return false;
            if (this.allowMajorVersionUpgrade != null ? !this.allowMajorVersionUpgrade.equals(that.allowMajorVersionUpgrade) : that.allowMajorVersionUpgrade != null) return false;
            if (this.applyImmediately != null ? !this.applyImmediately.equals(that.applyImmediately) : that.applyImmediately != null) return false;
            if (this.autoMinorVersionUpgrade != null ? !this.autoMinorVersionUpgrade.equals(that.autoMinorVersionUpgrade) : that.autoMinorVersionUpgrade != null) return false;
            if (this.availabilityZone != null ? !this.availabilityZone.equals(that.availabilityZone) : that.availabilityZone != null) return false;
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.backupWindow != null ? !this.backupWindow.equals(that.backupWindow) : that.backupWindow != null) return false;
            if (this.caCertIdentifier != null ? !this.caCertIdentifier.equals(that.caCertIdentifier) : that.caCertIdentifier != null) return false;
            if (this.characterSetName != null ? !this.characterSetName.equals(that.characterSetName) : that.characterSetName != null) return false;
            if (this.cloudwatchLogGroupKmsKeyId != null ? !this.cloudwatchLogGroupKmsKeyId.equals(that.cloudwatchLogGroupKmsKeyId) : that.cloudwatchLogGroupKmsKeyId != null) return false;
            if (this.cloudwatchLogGroupRetentionInDays != null ? !this.cloudwatchLogGroupRetentionInDays.equals(that.cloudwatchLogGroupRetentionInDays) : that.cloudwatchLogGroupRetentionInDays != null) return false;
            if (this.copyTagsToSnapshot != null ? !this.copyTagsToSnapshot.equals(that.copyTagsToSnapshot) : that.copyTagsToSnapshot != null) return false;
            if (this.createCloudwatchLogGroup != null ? !this.createCloudwatchLogGroup.equals(that.createCloudwatchLogGroup) : that.createCloudwatchLogGroup != null) return false;
            if (this.createDbInstance != null ? !this.createDbInstance.equals(that.createDbInstance) : that.createDbInstance != null) return false;
            if (this.createDbOptionGroup != null ? !this.createDbOptionGroup.equals(that.createDbOptionGroup) : that.createDbOptionGroup != null) return false;
            if (this.createDbParameterGroup != null ? !this.createDbParameterGroup.equals(that.createDbParameterGroup) : that.createDbParameterGroup != null) return false;
            if (this.createDbSubnetGroup != null ? !this.createDbSubnetGroup.equals(that.createDbSubnetGroup) : that.createDbSubnetGroup != null) return false;
            if (this.createMonitoringRole != null ? !this.createMonitoringRole.equals(that.createMonitoringRole) : that.createMonitoringRole != null) return false;
            if (this.createRandomPassword != null ? !this.createRandomPassword.equals(that.createRandomPassword) : that.createRandomPassword != null) return false;
            if (this.dbInstanceTags != null ? !this.dbInstanceTags.equals(that.dbInstanceTags) : that.dbInstanceTags != null) return false;
            if (this.dbName != null ? !this.dbName.equals(that.dbName) : that.dbName != null) return false;
            if (this.dbOptionGroupTags != null ? !this.dbOptionGroupTags.equals(that.dbOptionGroupTags) : that.dbOptionGroupTags != null) return false;
            if (this.dbParameterGroupTags != null ? !this.dbParameterGroupTags.equals(that.dbParameterGroupTags) : that.dbParameterGroupTags != null) return false;
            if (this.dbSubnetGroupDescription != null ? !this.dbSubnetGroupDescription.equals(that.dbSubnetGroupDescription) : that.dbSubnetGroupDescription != null) return false;
            if (this.dbSubnetGroupName != null ? !this.dbSubnetGroupName.equals(that.dbSubnetGroupName) : that.dbSubnetGroupName != null) return false;
            if (this.dbSubnetGroupTags != null ? !this.dbSubnetGroupTags.equals(that.dbSubnetGroupTags) : that.dbSubnetGroupTags != null) return false;
            if (this.dbSubnetGroupUseNamePrefix != null ? !this.dbSubnetGroupUseNamePrefix.equals(that.dbSubnetGroupUseNamePrefix) : that.dbSubnetGroupUseNamePrefix != null) return false;
            if (this.deleteAutomatedBackups != null ? !this.deleteAutomatedBackups.equals(that.deleteAutomatedBackups) : that.deleteAutomatedBackups != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
            if (this.domainIamRoleName != null ? !this.domainIamRoleName.equals(that.domainIamRoleName) : that.domainIamRoleName != null) return false;
            if (this.enabledCloudwatchLogsExports != null ? !this.enabledCloudwatchLogsExports.equals(that.enabledCloudwatchLogsExports) : that.enabledCloudwatchLogsExports != null) return false;
            if (this.engine != null ? !this.engine.equals(that.engine) : that.engine != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.family != null ? !this.family.equals(that.family) : that.family != null) return false;
            if (this.finalSnapshotIdentifierPrefix != null ? !this.finalSnapshotIdentifierPrefix.equals(that.finalSnapshotIdentifierPrefix) : that.finalSnapshotIdentifierPrefix != null) return false;
            if (this.iamDatabaseAuthenticationEnabled != null ? !this.iamDatabaseAuthenticationEnabled.equals(that.iamDatabaseAuthenticationEnabled) : that.iamDatabaseAuthenticationEnabled != null) return false;
            if (this.instanceClass != null ? !this.instanceClass.equals(that.instanceClass) : that.instanceClass != null) return false;
            if (this.instanceUseIdentifierPrefix != null ? !this.instanceUseIdentifierPrefix.equals(that.instanceUseIdentifierPrefix) : that.instanceUseIdentifierPrefix != null) return false;
            if (this.iops != null ? !this.iops.equals(that.iops) : that.iops != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.licenseModel != null ? !this.licenseModel.equals(that.licenseModel) : that.licenseModel != null) return false;
            if (this.maintenanceWindow != null ? !this.maintenanceWindow.equals(that.maintenanceWindow) : that.maintenanceWindow != null) return false;
            if (this.majorEngineVersion != null ? !this.majorEngineVersion.equals(that.majorEngineVersion) : that.majorEngineVersion != null) return false;
            if (this.maxAllocatedStorage != null ? !this.maxAllocatedStorage.equals(that.maxAllocatedStorage) : that.maxAllocatedStorage != null) return false;
            if (this.monitoringInterval != null ? !this.monitoringInterval.equals(that.monitoringInterval) : that.monitoringInterval != null) return false;
            if (this.monitoringRoleArn != null ? !this.monitoringRoleArn.equals(that.monitoringRoleArn) : that.monitoringRoleArn != null) return false;
            if (this.monitoringRoleDescription != null ? !this.monitoringRoleDescription.equals(that.monitoringRoleDescription) : that.monitoringRoleDescription != null) return false;
            if (this.monitoringRoleName != null ? !this.monitoringRoleName.equals(that.monitoringRoleName) : that.monitoringRoleName != null) return false;
            if (this.monitoringRoleUseNamePrefix != null ? !this.monitoringRoleUseNamePrefix.equals(that.monitoringRoleUseNamePrefix) : that.monitoringRoleUseNamePrefix != null) return false;
            if (this.multiAz != null ? !this.multiAz.equals(that.multiAz) : that.multiAz != null) return false;
            if (this.optionGroupDescription != null ? !this.optionGroupDescription.equals(that.optionGroupDescription) : that.optionGroupDescription != null) return false;
            if (this.optionGroupName != null ? !this.optionGroupName.equals(that.optionGroupName) : that.optionGroupName != null) return false;
            if (this.optionGroupTimeouts != null ? !this.optionGroupTimeouts.equals(that.optionGroupTimeouts) : that.optionGroupTimeouts != null) return false;
            if (this.optionGroupUseNamePrefix != null ? !this.optionGroupUseNamePrefix.equals(that.optionGroupUseNamePrefix) : that.optionGroupUseNamePrefix != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.parameterGroupDescription != null ? !this.parameterGroupDescription.equals(that.parameterGroupDescription) : that.parameterGroupDescription != null) return false;
            if (this.parameterGroupName != null ? !this.parameterGroupName.equals(that.parameterGroupName) : that.parameterGroupName != null) return false;
            if (this.parameterGroupUseNamePrefix != null ? !this.parameterGroupUseNamePrefix.equals(that.parameterGroupUseNamePrefix) : that.parameterGroupUseNamePrefix != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.performanceInsightsEnabled != null ? !this.performanceInsightsEnabled.equals(that.performanceInsightsEnabled) : that.performanceInsightsEnabled != null) return false;
            if (this.performanceInsightsKmsKeyId != null ? !this.performanceInsightsKmsKeyId.equals(that.performanceInsightsKmsKeyId) : that.performanceInsightsKmsKeyId != null) return false;
            if (this.performanceInsightsRetentionPeriod != null ? !this.performanceInsightsRetentionPeriod.equals(that.performanceInsightsRetentionPeriod) : that.performanceInsightsRetentionPeriod != null) return false;
            if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
            if (this.publiclyAccessible != null ? !this.publiclyAccessible.equals(that.publiclyAccessible) : that.publiclyAccessible != null) return false;
            if (this.putinKhuylo != null ? !this.putinKhuylo.equals(that.putinKhuylo) : that.putinKhuylo != null) return false;
            if (this.randomPasswordLength != null ? !this.randomPasswordLength.equals(that.randomPasswordLength) : that.randomPasswordLength != null) return false;
            if (this.replicaMode != null ? !this.replicaMode.equals(that.replicaMode) : that.replicaMode != null) return false;
            if (this.replicateSourceDb != null ? !this.replicateSourceDb.equals(that.replicateSourceDb) : that.replicateSourceDb != null) return false;
            if (this.restoreToPointInTime != null ? !this.restoreToPointInTime.equals(that.restoreToPointInTime) : that.restoreToPointInTime != null) return false;
            if (this.s3Import != null ? !this.s3Import.equals(that.s3Import) : that.s3Import != null) return false;
            if (this.skipFinalSnapshot != null ? !this.skipFinalSnapshot.equals(that.skipFinalSnapshot) : that.skipFinalSnapshot != null) return false;
            if (this.snapshotIdentifier != null ? !this.snapshotIdentifier.equals(that.snapshotIdentifier) : that.snapshotIdentifier != null) return false;
            if (this.storageEncrypted != null ? !this.storageEncrypted.equals(that.storageEncrypted) : that.storageEncrypted != null) return false;
            if (this.storageType != null ? !this.storageType.equals(that.storageType) : that.storageType != null) return false;
            if (this.subnetIds != null ? !this.subnetIds.equals(that.subnetIds) : that.subnetIds != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeouts != null ? !this.timeouts.equals(that.timeouts) : that.timeouts != null) return false;
            if (this.timezone != null ? !this.timezone.equals(that.timezone) : that.timezone != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            if (this.vpcSecurityGroupIds != null ? !this.vpcSecurityGroupIds.equals(that.vpcSecurityGroupIds) : that.vpcSecurityGroupIds != null) return false;
            if (this.dependsOn != null ? !this.dependsOn.equals(that.dependsOn) : that.dependsOn != null) return false;
            if (this.forEach != null ? !this.forEach.equals(that.forEach) : that.forEach != null) return false;
            if (this.providers != null ? !this.providers.equals(that.providers) : that.providers != null) return false;
            return this.skipAssetCreationFromLocalModules != null ? this.skipAssetCreationFromLocalModules.equals(that.skipAssetCreationFromLocalModules) : that.skipAssetCreationFromLocalModules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.identifier.hashCode();
            result = 31 * result + (this.allocatedStorage != null ? this.allocatedStorage.hashCode() : 0);
            result = 31 * result + (this.allowMajorVersionUpgrade != null ? this.allowMajorVersionUpgrade.hashCode() : 0);
            result = 31 * result + (this.applyImmediately != null ? this.applyImmediately.hashCode() : 0);
            result = 31 * result + (this.autoMinorVersionUpgrade != null ? this.autoMinorVersionUpgrade.hashCode() : 0);
            result = 31 * result + (this.availabilityZone != null ? this.availabilityZone.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.backupWindow != null ? this.backupWindow.hashCode() : 0);
            result = 31 * result + (this.caCertIdentifier != null ? this.caCertIdentifier.hashCode() : 0);
            result = 31 * result + (this.characterSetName != null ? this.characterSetName.hashCode() : 0);
            result = 31 * result + (this.cloudwatchLogGroupKmsKeyId != null ? this.cloudwatchLogGroupKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.cloudwatchLogGroupRetentionInDays != null ? this.cloudwatchLogGroupRetentionInDays.hashCode() : 0);
            result = 31 * result + (this.copyTagsToSnapshot != null ? this.copyTagsToSnapshot.hashCode() : 0);
            result = 31 * result + (this.createCloudwatchLogGroup != null ? this.createCloudwatchLogGroup.hashCode() : 0);
            result = 31 * result + (this.createDbInstance != null ? this.createDbInstance.hashCode() : 0);
            result = 31 * result + (this.createDbOptionGroup != null ? this.createDbOptionGroup.hashCode() : 0);
            result = 31 * result + (this.createDbParameterGroup != null ? this.createDbParameterGroup.hashCode() : 0);
            result = 31 * result + (this.createDbSubnetGroup != null ? this.createDbSubnetGroup.hashCode() : 0);
            result = 31 * result + (this.createMonitoringRole != null ? this.createMonitoringRole.hashCode() : 0);
            result = 31 * result + (this.createRandomPassword != null ? this.createRandomPassword.hashCode() : 0);
            result = 31 * result + (this.dbInstanceTags != null ? this.dbInstanceTags.hashCode() : 0);
            result = 31 * result + (this.dbName != null ? this.dbName.hashCode() : 0);
            result = 31 * result + (this.dbOptionGroupTags != null ? this.dbOptionGroupTags.hashCode() : 0);
            result = 31 * result + (this.dbParameterGroupTags != null ? this.dbParameterGroupTags.hashCode() : 0);
            result = 31 * result + (this.dbSubnetGroupDescription != null ? this.dbSubnetGroupDescription.hashCode() : 0);
            result = 31 * result + (this.dbSubnetGroupName != null ? this.dbSubnetGroupName.hashCode() : 0);
            result = 31 * result + (this.dbSubnetGroupTags != null ? this.dbSubnetGroupTags.hashCode() : 0);
            result = 31 * result + (this.dbSubnetGroupUseNamePrefix != null ? this.dbSubnetGroupUseNamePrefix.hashCode() : 0);
            result = 31 * result + (this.deleteAutomatedBackups != null ? this.deleteAutomatedBackups.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
            result = 31 * result + (this.domainIamRoleName != null ? this.domainIamRoleName.hashCode() : 0);
            result = 31 * result + (this.enabledCloudwatchLogsExports != null ? this.enabledCloudwatchLogsExports.hashCode() : 0);
            result = 31 * result + (this.engine != null ? this.engine.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.family != null ? this.family.hashCode() : 0);
            result = 31 * result + (this.finalSnapshotIdentifierPrefix != null ? this.finalSnapshotIdentifierPrefix.hashCode() : 0);
            result = 31 * result + (this.iamDatabaseAuthenticationEnabled != null ? this.iamDatabaseAuthenticationEnabled.hashCode() : 0);
            result = 31 * result + (this.instanceClass != null ? this.instanceClass.hashCode() : 0);
            result = 31 * result + (this.instanceUseIdentifierPrefix != null ? this.instanceUseIdentifierPrefix.hashCode() : 0);
            result = 31 * result + (this.iops != null ? this.iops.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.licenseModel != null ? this.licenseModel.hashCode() : 0);
            result = 31 * result + (this.maintenanceWindow != null ? this.maintenanceWindow.hashCode() : 0);
            result = 31 * result + (this.majorEngineVersion != null ? this.majorEngineVersion.hashCode() : 0);
            result = 31 * result + (this.maxAllocatedStorage != null ? this.maxAllocatedStorage.hashCode() : 0);
            result = 31 * result + (this.monitoringInterval != null ? this.monitoringInterval.hashCode() : 0);
            result = 31 * result + (this.monitoringRoleArn != null ? this.monitoringRoleArn.hashCode() : 0);
            result = 31 * result + (this.monitoringRoleDescription != null ? this.monitoringRoleDescription.hashCode() : 0);
            result = 31 * result + (this.monitoringRoleName != null ? this.monitoringRoleName.hashCode() : 0);
            result = 31 * result + (this.monitoringRoleUseNamePrefix != null ? this.monitoringRoleUseNamePrefix.hashCode() : 0);
            result = 31 * result + (this.multiAz != null ? this.multiAz.hashCode() : 0);
            result = 31 * result + (this.optionGroupDescription != null ? this.optionGroupDescription.hashCode() : 0);
            result = 31 * result + (this.optionGroupName != null ? this.optionGroupName.hashCode() : 0);
            result = 31 * result + (this.optionGroupTimeouts != null ? this.optionGroupTimeouts.hashCode() : 0);
            result = 31 * result + (this.optionGroupUseNamePrefix != null ? this.optionGroupUseNamePrefix.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.parameterGroupDescription != null ? this.parameterGroupDescription.hashCode() : 0);
            result = 31 * result + (this.parameterGroupName != null ? this.parameterGroupName.hashCode() : 0);
            result = 31 * result + (this.parameterGroupUseNamePrefix != null ? this.parameterGroupUseNamePrefix.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.performanceInsightsEnabled != null ? this.performanceInsightsEnabled.hashCode() : 0);
            result = 31 * result + (this.performanceInsightsKmsKeyId != null ? this.performanceInsightsKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.performanceInsightsRetentionPeriod != null ? this.performanceInsightsRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.publiclyAccessible != null ? this.publiclyAccessible.hashCode() : 0);
            result = 31 * result + (this.putinKhuylo != null ? this.putinKhuylo.hashCode() : 0);
            result = 31 * result + (this.randomPasswordLength != null ? this.randomPasswordLength.hashCode() : 0);
            result = 31 * result + (this.replicaMode != null ? this.replicaMode.hashCode() : 0);
            result = 31 * result + (this.replicateSourceDb != null ? this.replicateSourceDb.hashCode() : 0);
            result = 31 * result + (this.restoreToPointInTime != null ? this.restoreToPointInTime.hashCode() : 0);
            result = 31 * result + (this.s3Import != null ? this.s3Import.hashCode() : 0);
            result = 31 * result + (this.skipFinalSnapshot != null ? this.skipFinalSnapshot.hashCode() : 0);
            result = 31 * result + (this.snapshotIdentifier != null ? this.snapshotIdentifier.hashCode() : 0);
            result = 31 * result + (this.storageEncrypted != null ? this.storageEncrypted.hashCode() : 0);
            result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
            result = 31 * result + (this.subnetIds != null ? this.subnetIds.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeouts != null ? this.timeouts.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
            result = 31 * result + (this.vpcSecurityGroupIds != null ? this.vpcSecurityGroupIds.hashCode() : 0);
            result = 31 * result + (this.dependsOn != null ? this.dependsOn.hashCode() : 0);
            result = 31 * result + (this.forEach != null ? this.forEach.hashCode() : 0);
            result = 31 * result + (this.providers != null ? this.providers.hashCode() : 0);
            result = 31 * result + (this.skipAssetCreationFromLocalModules != null ? this.skipAssetCreationFromLocalModules.hashCode() : 0);
            return result;
        }
    }
}
