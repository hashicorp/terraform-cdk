import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediapackageOriginEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * CDN Authorization credentials
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#authorization MediapackageOriginEndpoint#authorization}
    */
    readonly authorization?: MediapackageOriginEndpointAuthorization;
    /**
    * The ID of the Channel the OriginEndpoint is associated with.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#channel_id MediapackageOriginEndpoint#channel_id}
    */
    readonly channelId: string;
    /**
    * A Common Media Application Format (CMAF) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#cmaf_package MediapackageOriginEndpoint#cmaf_package}
    */
    readonly cmafPackage?: MediapackageOriginEndpointCmafPackage;
    /**
    * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#dash_package MediapackageOriginEndpoint#dash_package}
    */
    readonly dashPackage?: MediapackageOriginEndpointDashPackage;
    /**
    * A short text description of the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#description MediapackageOriginEndpoint#description}
    */
    readonly description?: string;
    /**
    * An HTTP Live Streaming (HLS) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#hls_package MediapackageOriginEndpoint#hls_package}
    */
    readonly hlsPackage?: MediapackageOriginEndpointHlsPackage;
    /**
    * The ID of the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#id MediapackageOriginEndpoint#id}
    */
    readonly id: string;
    /**
    * A short string appended to the end of the OriginEndpoint URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#manifest_name MediapackageOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * A Microsoft Smooth Streaming (MSS) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#mss_package MediapackageOriginEndpoint#mss_package}
    */
    readonly mssPackage?: MediapackageOriginEndpointMssPackage;
    /**
    * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#origination MediapackageOriginEndpoint#origination}
    */
    readonly origination?: string;
    /**
    * Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#startover_window_seconds MediapackageOriginEndpoint#startover_window_seconds}
    */
    readonly startoverWindowSeconds?: number;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#tags MediapackageOriginEndpoint#tags}
    */
    readonly tags?: MediapackageOriginEndpointTags[];
    /**
    * Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#time_delay_seconds MediapackageOriginEndpoint#time_delay_seconds}
    */
    readonly timeDelaySeconds?: number;
    /**
    * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#whitelist MediapackageOriginEndpoint#whitelist}
    */
    readonly whitelist?: string[];
}
export interface MediapackageOriginEndpointAuthorization {
    /**
    * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#cdn_identifier_secret MediapackageOriginEndpoint#cdn_identifier_secret}
    */
    readonly cdnIdentifierSecret: string;
    /**
    * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#secrets_role_arn MediapackageOriginEndpoint#secrets_role_arn}
    */
    readonly secretsRoleArn: string;
}
export declare function mediapackageOriginEndpointAuthorizationToTerraform(struct?: MediapackageOriginEndpointAuthorization): any;
export interface MediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#certificate_arn MediapackageOriginEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The resource ID to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#resource_id MediapackageOriginEndpoint#resource_id}
    */
    readonly resourceId: string;
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#role_arn MediapackageOriginEndpoint#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#system_ids MediapackageOriginEndpoint#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#url MediapackageOriginEndpoint#url}
    */
    readonly url: string;
}
export declare function mediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider): any;
export interface MediapackageOriginEndpointCmafPackageEncryption {
    /**
    * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#constant_initialization_vector MediapackageOriginEndpoint#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * Time (in seconds) between each encryption key rotation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#key_rotation_interval_seconds MediapackageOriginEndpoint#key_rotation_interval_seconds}
    */
    readonly keyRotationIntervalSeconds?: number;
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#speke_key_provider MediapackageOriginEndpoint#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct?: MediapackageOriginEndpointCmafPackageEncryption): any;
export interface MediapackageOriginEndpointCmafPackageHlsManifests {
    /**
    * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ad_markers MediapackageOriginEndpoint#ad_markers}
    */
    readonly adMarkers?: string;
    /**
    * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ad_triggers MediapackageOriginEndpoint#ad_triggers}
    */
    readonly adTriggers?: string[];
    /**
    * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ads_on_delivery_restrictions MediapackageOriginEndpoint#ads_on_delivery_restrictions}
    */
    readonly adsOnDeliveryRestrictions?: string;
    /**
    * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#id MediapackageOriginEndpoint#id}
    */
    readonly id: string;
    /**
    * When enabled, an I-Frame only stream will be included in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#include_iframe_only_stream MediapackageOriginEndpoint#include_iframe_only_stream}
    */
    readonly includeIframeOnlyStream?: boolean | cdktf.IResolvable;
    /**
    * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#manifest_name MediapackageOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#playlist_type MediapackageOriginEndpoint#playlist_type}
    */
    readonly playlistType?: string;
    /**
    * Time window (in seconds) contained in each parent manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#playlist_window_seconds MediapackageOriginEndpoint#playlist_window_seconds}
    */
    readonly playlistWindowSeconds?: number;
    /**
    * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#program_date_time_interval_seconds MediapackageOriginEndpoint#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * The URL of the packaged OriginEndpoint for consumption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#url MediapackageOriginEndpoint#url}
    */
    readonly url?: string;
}
export declare function mediapackageOriginEndpointCmafPackageHlsManifestsToTerraform(struct?: MediapackageOriginEndpointCmafPackageHlsManifests): any;
export interface MediapackageOriginEndpointCmafPackageStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#max_video_bits_per_second MediapackageOriginEndpoint#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_video_bits_per_second MediapackageOriginEndpoint#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_order MediapackageOriginEndpoint#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct?: MediapackageOriginEndpointCmafPackageStreamSelection): any;
export interface MediapackageOriginEndpointCmafPackage {
    /**
    * A Common Media Application Format (CMAF) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#encryption MediapackageOriginEndpoint#encryption}
    */
    readonly encryption?: MediapackageOriginEndpointCmafPackageEncryption;
    /**
    * A list of HLS manifest configurations
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#hls_manifests MediapackageOriginEndpoint#hls_manifests}
    */
    readonly hlsManifests?: MediapackageOriginEndpointCmafPackageHlsManifests[];
    /**
    * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_duration_seconds MediapackageOriginEndpoint#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_prefix MediapackageOriginEndpoint#segment_prefix}
    */
    readonly segmentPrefix?: string;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_selection MediapackageOriginEndpoint#stream_selection}
    */
    readonly streamSelection?: MediapackageOriginEndpointCmafPackageStreamSelection;
}
export declare function mediapackageOriginEndpointCmafPackageToTerraform(struct?: MediapackageOriginEndpointCmafPackage): any;
export interface MediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#certificate_arn MediapackageOriginEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The resource ID to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#resource_id MediapackageOriginEndpoint#resource_id}
    */
    readonly resourceId: string;
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#role_arn MediapackageOriginEndpoint#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#system_ids MediapackageOriginEndpoint#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#url MediapackageOriginEndpoint#url}
    */
    readonly url: string;
}
export declare function mediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider): any;
export interface MediapackageOriginEndpointDashPackageEncryption {
    /**
    * Time (in seconds) between each encryption key rotation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#key_rotation_interval_seconds MediapackageOriginEndpoint#key_rotation_interval_seconds}
    */
    readonly keyRotationIntervalSeconds?: number;
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#speke_key_provider MediapackageOriginEndpoint#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackageOriginEndpointDashPackageEncryptionToTerraform(struct?: MediapackageOriginEndpointDashPackageEncryption): any;
export interface MediapackageOriginEndpointDashPackageStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#max_video_bits_per_second MediapackageOriginEndpoint#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_video_bits_per_second MediapackageOriginEndpoint#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_order MediapackageOriginEndpoint#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct?: MediapackageOriginEndpointDashPackageStreamSelection): any;
export interface MediapackageOriginEndpointDashPackage {
    /**
    * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ad_triggers MediapackageOriginEndpoint#ad_triggers}
    */
    readonly adTriggers?: string[];
    /**
    * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ads_on_delivery_restrictions MediapackageOriginEndpoint#ads_on_delivery_restrictions}
    */
    readonly adsOnDeliveryRestrictions?: string;
    /**
    * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#encryption MediapackageOriginEndpoint#encryption}
    */
    readonly encryption?: MediapackageOriginEndpointDashPackageEncryption;
    /**
    * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#manifest_layout MediapackageOriginEndpoint#manifest_layout}
    */
    readonly manifestLayout?: string;
    /**
    * Time window (in seconds) contained in each manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#manifest_window_seconds MediapackageOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_buffer_time_seconds MediapackageOriginEndpoint#min_buffer_time_seconds}
    */
    readonly minBufferTimeSeconds?: number;
    /**
    * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_update_period_seconds MediapackageOriginEndpoint#min_update_period_seconds}
    */
    readonly minUpdatePeriodSeconds?: number;
    /**
    * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Channel source contains SCTE-35 ad markers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#period_triggers MediapackageOriginEndpoint#period_triggers}
    */
    readonly periodTriggers?: string[];
    /**
    * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#profile MediapackageOriginEndpoint#profile}
    */
    readonly profile?: string;
    /**
    * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_duration_seconds MediapackageOriginEndpoint#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_template_format MediapackageOriginEndpoint#segment_template_format}
    */
    readonly segmentTemplateFormat?: string;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_selection MediapackageOriginEndpoint#stream_selection}
    */
    readonly streamSelection?: MediapackageOriginEndpointDashPackageStreamSelection;
    /**
    * Duration (in seconds) to delay live content before presentation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#suggested_presentation_delay_seconds MediapackageOriginEndpoint#suggested_presentation_delay_seconds}
    */
    readonly suggestedPresentationDelaySeconds?: number;
    /**
    * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#utc_timing MediapackageOriginEndpoint#utc_timing}
    */
    readonly utcTiming?: string;
    /**
    * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO or HTTP-HEAD
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#utc_timing_uri MediapackageOriginEndpoint#utc_timing_uri}
    */
    readonly utcTimingUri?: string;
}
export declare function mediapackageOriginEndpointDashPackageToTerraform(struct?: MediapackageOriginEndpointDashPackage): any;
export interface MediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#certificate_arn MediapackageOriginEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The resource ID to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#resource_id MediapackageOriginEndpoint#resource_id}
    */
    readonly resourceId: string;
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#role_arn MediapackageOriginEndpoint#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#system_ids MediapackageOriginEndpoint#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#url MediapackageOriginEndpoint#url}
    */
    readonly url: string;
}
export declare function mediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider): any;
export interface MediapackageOriginEndpointHlsPackageEncryption {
    /**
    * A constant initialization vector for encryption (optional). When not specified the initialization vector will be periodically rotated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#constant_initialization_vector MediapackageOriginEndpoint#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * The encryption method to use.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#encryption_method MediapackageOriginEndpoint#encryption_method}
    */
    readonly encryptionMethod?: string;
    /**
    * Interval (in seconds) between each encryption key rotation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#key_rotation_interval_seconds MediapackageOriginEndpoint#key_rotation_interval_seconds}
    */
    readonly keyRotationIntervalSeconds?: number;
    /**
    * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#repeat_ext_x_key MediapackageOriginEndpoint#repeat_ext_x_key}
    */
    readonly repeatExtXKey?: boolean | cdktf.IResolvable;
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#speke_key_provider MediapackageOriginEndpoint#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct?: MediapackageOriginEndpointHlsPackageEncryption): any;
export interface MediapackageOriginEndpointHlsPackageStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#max_video_bits_per_second MediapackageOriginEndpoint#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_video_bits_per_second MediapackageOriginEndpoint#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_order MediapackageOriginEndpoint#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct?: MediapackageOriginEndpointHlsPackageStreamSelection): any;
export interface MediapackageOriginEndpointHlsPackage {
    /**
    * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ad_markers MediapackageOriginEndpoint#ad_markers}
    */
    readonly adMarkers?: string;
    /**
    * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ad_triggers MediapackageOriginEndpoint#ad_triggers}
    */
    readonly adTriggers?: string[];
    /**
    * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#ads_on_delivery_restrictions MediapackageOriginEndpoint#ads_on_delivery_restrictions}
    */
    readonly adsOnDeliveryRestrictions?: string;
    /**
    * An HTTP Live Streaming (HLS) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#encryption MediapackageOriginEndpoint#encryption}
    */
    readonly encryption?: MediapackageOriginEndpointHlsPackageEncryption;
    /**
    * When enabled, an I-Frame only stream will be included in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#include_iframe_only_stream MediapackageOriginEndpoint#include_iframe_only_stream}
    */
    readonly includeIframeOnlyStream?: boolean | cdktf.IResolvable;
    /**
    * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#playlist_type MediapackageOriginEndpoint#playlist_type}
    */
    readonly playlistType?: string;
    /**
    * Time window (in seconds) contained in each parent manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#playlist_window_seconds MediapackageOriginEndpoint#playlist_window_seconds}
    */
    readonly playlistWindowSeconds?: number;
    /**
    * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#program_date_time_interval_seconds MediapackageOriginEndpoint#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_duration_seconds MediapackageOriginEndpoint#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_selection MediapackageOriginEndpoint#stream_selection}
    */
    readonly streamSelection?: MediapackageOriginEndpointHlsPackageStreamSelection;
    /**
    * When enabled, audio streams will be placed in rendition groups in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#use_audio_rendition_group MediapackageOriginEndpoint#use_audio_rendition_group}
    */
    readonly useAudioRenditionGroup?: boolean | cdktf.IResolvable;
}
export declare function mediapackageOriginEndpointHlsPackageToTerraform(struct?: MediapackageOriginEndpointHlsPackage): any;
export interface MediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#certificate_arn MediapackageOriginEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The resource ID to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#resource_id MediapackageOriginEndpoint#resource_id}
    */
    readonly resourceId: string;
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#role_arn MediapackageOriginEndpoint#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#system_ids MediapackageOriginEndpoint#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#url MediapackageOriginEndpoint#url}
    */
    readonly url: string;
}
export declare function mediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider): any;
export interface MediapackageOriginEndpointMssPackageEncryption {
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#speke_key_provider MediapackageOriginEndpoint#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackageOriginEndpointMssPackageEncryptionToTerraform(struct?: MediapackageOriginEndpointMssPackageEncryption): any;
export interface MediapackageOriginEndpointMssPackageStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#max_video_bits_per_second MediapackageOriginEndpoint#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#min_video_bits_per_second MediapackageOriginEndpoint#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_order MediapackageOriginEndpoint#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct?: MediapackageOriginEndpointMssPackageStreamSelection): any;
export interface MediapackageOriginEndpointMssPackage {
    /**
    * A Microsoft Smooth Streaming (MSS) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#encryption MediapackageOriginEndpoint#encryption}
    */
    readonly encryption?: MediapackageOriginEndpointMssPackageEncryption;
    /**
    * The time window (in seconds) contained in each manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#manifest_window_seconds MediapackageOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * The duration (in seconds) of each segment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#segment_duration_seconds MediapackageOriginEndpoint#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#stream_selection MediapackageOriginEndpoint#stream_selection}
    */
    readonly streamSelection?: MediapackageOriginEndpointMssPackageStreamSelection;
}
export declare function mediapackageOriginEndpointMssPackageToTerraform(struct?: MediapackageOriginEndpointMssPackage): any;
export interface MediapackageOriginEndpointTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#key MediapackageOriginEndpoint#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html#value MediapackageOriginEndpoint#value}
    */
    readonly value: string;
}
export declare function mediapackageOriginEndpointTagsToTerraform(struct?: MediapackageOriginEndpointTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint}
*/
export declare class MediapackageOriginEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediapackageOriginEndpointConfig
    */
    constructor(scope: Construct, id: string, config: MediapackageOriginEndpointConfig);
    get arn(): string;
    private _authorization?;
    get authorization(): MediapackageOriginEndpointAuthorization;
    set authorization(value: MediapackageOriginEndpointAuthorization);
    resetAuthorization(): void;
    get authorizationInput(): MediapackageOriginEndpointAuthorization | undefined;
    private _channelId;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string;
    private _cmafPackage?;
    get cmafPackage(): MediapackageOriginEndpointCmafPackage;
    set cmafPackage(value: MediapackageOriginEndpointCmafPackage);
    resetCmafPackage(): void;
    get cmafPackageInput(): MediapackageOriginEndpointCmafPackage | undefined;
    private _dashPackage?;
    get dashPackage(): MediapackageOriginEndpointDashPackage;
    set dashPackage(value: MediapackageOriginEndpointDashPackage);
    resetDashPackage(): void;
    get dashPackageInput(): MediapackageOriginEndpointDashPackage | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _hlsPackage?;
    get hlsPackage(): MediapackageOriginEndpointHlsPackage;
    set hlsPackage(value: MediapackageOriginEndpointHlsPackage);
    resetHlsPackage(): void;
    get hlsPackageInput(): MediapackageOriginEndpointHlsPackage | undefined;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _manifestName?;
    get manifestName(): string;
    set manifestName(value: string);
    resetManifestName(): void;
    get manifestNameInput(): string | undefined;
    private _mssPackage?;
    get mssPackage(): MediapackageOriginEndpointMssPackage;
    set mssPackage(value: MediapackageOriginEndpointMssPackage);
    resetMssPackage(): void;
    get mssPackageInput(): MediapackageOriginEndpointMssPackage | undefined;
    private _origination?;
    get origination(): string;
    set origination(value: string);
    resetOrigination(): void;
    get originationInput(): string | undefined;
    private _startoverWindowSeconds?;
    get startoverWindowSeconds(): number;
    set startoverWindowSeconds(value: number);
    resetStartoverWindowSeconds(): void;
    get startoverWindowSecondsInput(): number | undefined;
    private _tags?;
    get tags(): MediapackageOriginEndpointTags[];
    set tags(value: MediapackageOriginEndpointTags[]);
    resetTags(): void;
    get tagsInput(): MediapackageOriginEndpointTags[] | undefined;
    private _timeDelaySeconds?;
    get timeDelaySeconds(): number;
    set timeDelaySeconds(value: number);
    resetTimeDelaySeconds(): void;
    get timeDelaySecondsInput(): number | undefined;
    get url(): string;
    private _whitelist?;
    get whitelist(): string[];
    set whitelist(value: string[]);
    resetWhitelist(): void;
    get whitelistInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
