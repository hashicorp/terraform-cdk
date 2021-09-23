import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediapackageChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * A short text description of the Channel.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#description MediapackageChannel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#egress_access_logs MediapackageChannel#egress_access_logs}
    */
    readonly egressAccessLogs?: MediapackageChannelEgressAccessLogs;
    /**
    * The ID of the Channel.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#id MediapackageChannel#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#ingress_access_logs MediapackageChannel#ingress_access_logs}
    */
    readonly ingressAccessLogs?: MediapackageChannelIngressAccessLogs;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#tags MediapackageChannel#tags}
    */
    readonly tags?: MediapackageChannelTags[];
}
export interface MediapackageChannelEgressAccessLogs {
    /**
    * Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#log_group_name MediapackageChannel#log_group_name}
    */
    readonly logGroupName?: string;
}
export declare function mediapackageChannelEgressAccessLogsToTerraform(struct?: MediapackageChannelEgressAccessLogs): any;
export interface MediapackageChannelHlsIngestIngestEndpoints {
    /**
    * The system generated unique identifier for the IngestEndpoint
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#id MediapackageChannel#id}
    */
    readonly id?: string;
    /**
    * The system generated password for ingest authentication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#password MediapackageChannel#password}
    */
    readonly password?: string;
    /**
    * The ingest URL to which the source stream should be sent.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#url MediapackageChannel#url}
    */
    readonly url?: string;
    /**
    * The system generated username for ingest authentication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#username MediapackageChannel#username}
    */
    readonly username?: string;
}
export declare function mediapackageChannelHlsIngestIngestEndpointsToTerraform(struct?: MediapackageChannelHlsIngestIngestEndpoints): any;
export declare class MediapackageChannelHlsIngest extends cdktf.ComplexComputedList {
    private _ingestEndpoints?;
    get ingestEndpoints(): MediapackageChannelHlsIngestIngestEndpoints[];
    set ingestEndpoints(value: MediapackageChannelHlsIngestIngestEndpoints[]);
    resetIngestEndpoints(): void;
    get ingestEndpointsInput(): MediapackageChannelHlsIngestIngestEndpoints[] | undefined;
}
export declare function mediapackageChannelHlsIngestToTerraform(struct?: MediapackageChannelHlsIngest): any;
export interface MediapackageChannelIngressAccessLogs {
    /**
    * Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#log_group_name MediapackageChannel#log_group_name}
    */
    readonly logGroupName?: string;
}
export declare function mediapackageChannelIngressAccessLogsToTerraform(struct?: MediapackageChannelIngressAccessLogs): any;
export interface MediapackageChannelTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#key MediapackageChannel#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#value MediapackageChannel#value}
    */
    readonly value: string;
}
export declare function mediapackageChannelTagsToTerraform(struct?: MediapackageChannelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html awscc_mediapackage_channel}
*/
export declare class MediapackageChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html awscc_mediapackage_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediapackageChannelConfig
    */
    constructor(scope: Construct, id: string, config: MediapackageChannelConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _egressAccessLogs?;
    get egressAccessLogs(): MediapackageChannelEgressAccessLogs;
    set egressAccessLogs(value: MediapackageChannelEgressAccessLogs);
    resetEgressAccessLogs(): void;
    get egressAccessLogsInput(): MediapackageChannelEgressAccessLogs | undefined;
    get hlsIngest(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _ingressAccessLogs?;
    get ingressAccessLogs(): MediapackageChannelIngressAccessLogs;
    set ingressAccessLogs(value: MediapackageChannelIngressAccessLogs);
    resetIngressAccessLogs(): void;
    get ingressAccessLogsInput(): MediapackageChannelIngressAccessLogs | undefined;
    private _tags?;
    get tags(): MediapackageChannelTags[];
    set tags(value: MediapackageChannelTags[]);
    resetTags(): void;
    get tagsInput(): MediapackageChannelTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
