import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediapackagePackagingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#authorization MediapackagePackagingGroup#authorization}
    */
    readonly authorization?: MediapackagePackagingGroupAuthorization;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#egress_access_logs MediapackagePackagingGroup#egress_access_logs}
    */
    readonly egressAccessLogs?: MediapackagePackagingGroupEgressAccessLogs;
    /**
    * The ID of the PackagingGroup.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#id MediapackagePackagingGroup#id}
    */
    readonly id: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#tags MediapackagePackagingGroup#tags}
    */
    readonly tags?: MediapackagePackagingGroupTags[];
}
export interface MediapackagePackagingGroupAuthorization {
    /**
    * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}
    */
    readonly cdnIdentifierSecret: string;
    /**
    * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}
    */
    readonly secretsRoleArn: string;
}
export declare function mediapackagePackagingGroupAuthorizationToTerraform(struct?: MediapackagePackagingGroupAuthorization): any;
export interface MediapackagePackagingGroupEgressAccessLogs {
    /**
    * Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#log_group_name MediapackagePackagingGroup#log_group_name}
    */
    readonly logGroupName?: string;
}
export declare function mediapackagePackagingGroupEgressAccessLogsToTerraform(struct?: MediapackagePackagingGroupEgressAccessLogs): any;
export interface MediapackagePackagingGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#key MediapackagePackagingGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html#value MediapackagePackagingGroup#value}
    */
    readonly value: string;
}
export declare function mediapackagePackagingGroupTagsToTerraform(struct?: MediapackagePackagingGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html awscc_mediapackage_packaging_group}
*/
export declare class MediapackagePackagingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_group.html awscc_mediapackage_packaging_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediapackagePackagingGroupConfig
    */
    constructor(scope: Construct, id: string, config: MediapackagePackagingGroupConfig);
    get arn(): string;
    private _authorization?;
    get authorization(): MediapackagePackagingGroupAuthorization;
    set authorization(value: MediapackagePackagingGroupAuthorization);
    resetAuthorization(): void;
    get authorizationInput(): MediapackagePackagingGroupAuthorization | undefined;
    get domainName(): string;
    private _egressAccessLogs?;
    get egressAccessLogs(): MediapackagePackagingGroupEgressAccessLogs;
    set egressAccessLogs(value: MediapackagePackagingGroupEgressAccessLogs);
    resetEgressAccessLogs(): void;
    get egressAccessLogsInput(): MediapackagePackagingGroupEgressAccessLogs | undefined;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _tags?;
    get tags(): MediapackagePackagingGroupTags[];
    set tags(value: MediapackagePackagingGroupTags[]);
    resetTags(): void;
    get tagsInput(): MediapackagePackagingGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
