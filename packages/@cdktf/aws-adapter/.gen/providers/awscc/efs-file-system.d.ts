import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#backup_policy EfsFileSystem#backup_policy}
    */
    readonly backupPolicy?: EfsFileSystemBackupPolicy;
    /**
    * Whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request to be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. Defaults to false
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#file_system_policy EfsFileSystem#file_system_policy}
    */
    readonly fileSystemPolicy?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#file_system_tags EfsFileSystem#file_system_tags}
    */
    readonly fileSystemTags?: EfsFileSystemFileSystemTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#lifecycle_policies EfsFileSystem#lifecycle_policies}
    */
    readonly lifecyclePolicies?: EfsFileSystemLifecyclePolicies[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}
    */
    readonly performanceMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
    */
    readonly provisionedThroughputInMibps?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}
    */
    readonly throughputMode?: string;
}
export interface EfsFileSystemBackupPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#status EfsFileSystem#status}
    */
    readonly status: string;
}
export declare function efsFileSystemBackupPolicyToTerraform(struct?: EfsFileSystemBackupPolicy): any;
export interface EfsFileSystemFileSystemTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#key EfsFileSystem#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#value EfsFileSystem#value}
    */
    readonly value: string;
}
export declare function efsFileSystemFileSystemTagsToTerraform(struct?: EfsFileSystemFileSystemTags): any;
export interface EfsFileSystemLifecyclePolicies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}
    */
    readonly transitionToIa: string;
}
export declare function efsFileSystemLifecyclePoliciesToTerraform(struct?: EfsFileSystemLifecyclePolicies): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html awscc_efs_file_system}
*/
export declare class EfsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html awscc_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EfsFileSystemConfig);
    get arn(): string;
    private _availabilityZoneName?;
    get availabilityZoneName(): string;
    set availabilityZoneName(value: string);
    resetAvailabilityZoneName(): void;
    get availabilityZoneNameInput(): string | undefined;
    private _backupPolicy?;
    get backupPolicy(): EfsFileSystemBackupPolicy;
    set backupPolicy(value: EfsFileSystemBackupPolicy);
    resetBackupPolicy(): void;
    get backupPolicyInput(): EfsFileSystemBackupPolicy | undefined;
    private _bypassPolicyLockoutSafetyCheck?;
    get bypassPolicyLockoutSafetyCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutSafetyCheck(): void;
    get bypassPolicyLockoutSafetyCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    get fileSystemId(): string;
    private _fileSystemPolicy?;
    get fileSystemPolicy(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set fileSystemPolicy(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetFileSystemPolicy(): void;
    get fileSystemPolicyInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _fileSystemTags?;
    get fileSystemTags(): EfsFileSystemFileSystemTags[];
    set fileSystemTags(value: EfsFileSystemFileSystemTags[]);
    resetFileSystemTags(): void;
    get fileSystemTagsInput(): EfsFileSystemFileSystemTags[] | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _lifecyclePolicies?;
    get lifecyclePolicies(): EfsFileSystemLifecyclePolicies[];
    set lifecyclePolicies(value: EfsFileSystemLifecyclePolicies[]);
    resetLifecyclePolicies(): void;
    get lifecyclePoliciesInput(): EfsFileSystemLifecyclePolicies[] | undefined;
    private _performanceMode?;
    get performanceMode(): string;
    set performanceMode(value: string);
    resetPerformanceMode(): void;
    get performanceModeInput(): string | undefined;
    private _provisionedThroughputInMibps?;
    get provisionedThroughputInMibps(): number;
    set provisionedThroughputInMibps(value: number);
    resetProvisionedThroughputInMibps(): void;
    get provisionedThroughputInMibpsInput(): number | undefined;
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
