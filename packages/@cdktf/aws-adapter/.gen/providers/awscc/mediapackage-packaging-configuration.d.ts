import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediapackagePackagingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * A CMAF packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#cmaf_package MediapackagePackagingConfiguration#cmaf_package}
    */
    readonly cmafPackage?: MediapackagePackagingConfigurationCmafPackage;
    /**
    * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#dash_package MediapackagePackagingConfiguration#dash_package}
    */
    readonly dashPackage?: MediapackagePackagingConfigurationDashPackage;
    /**
    * An HTTP Live Streaming (HLS) packaging configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#hls_package MediapackagePackagingConfiguration#hls_package}
    */
    readonly hlsPackage?: MediapackagePackagingConfigurationHlsPackage;
    /**
    * The ID of the PackagingConfiguration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#id MediapackagePackagingConfiguration#id}
    */
    readonly id: string;
    /**
    * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#mss_package MediapackagePackagingConfiguration#mss_package}
    */
    readonly mssPackage?: MediapackagePackagingConfigurationMssPackage;
    /**
    * The ID of a PackagingGroup.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}
    */
    readonly packagingGroupId: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#tags MediapackagePackagingConfiguration#tags}
    */
    readonly tags?: MediapackagePackagingConfigurationTags[];
}
export interface MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#role_arn MediapackagePackagingConfiguration#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#system_ids MediapackagePackagingConfiguration#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#url MediapackagePackagingConfiguration#url}
    */
    readonly url: string;
}
export declare function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any;
export interface MediapackagePackagingConfigurationCmafPackageEncryption {
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryption): any;
export interface MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_order MediapackagePackagingConfiguration#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any;
export interface MediapackagePackagingConfigurationCmafPackageHlsManifests {
    /**
    * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#ad_markers MediapackagePackagingConfiguration#ad_markers}
    */
    readonly adMarkers?: string;
    /**
    * When enabled, an I-Frame only stream will be included in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}
    */
    readonly includeIframeOnlyStream?: boolean | cdktf.IResolvable;
    /**
    * An optional string to include in the name of the manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#manifest_name MediapackagePackagingConfiguration#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}
    */
    readonly repeatExtXKey?: boolean | cdktf.IResolvable;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_selection MediapackagePackagingConfiguration#stream_selection}
    */
    readonly streamSelection?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection;
}
export declare function mediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifests): any;
export interface MediapackagePackagingConfigurationCmafPackage {
    /**
    * A CMAF encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#encryption MediapackagePackagingConfiguration#encryption}
    */
    readonly encryption?: MediapackagePackagingConfigurationCmafPackageEncryption;
    /**
    * A list of HLS manifest configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#hls_manifests MediapackagePackagingConfiguration#hls_manifests}
    */
    readonly hlsManifests: MediapackagePackagingConfigurationCmafPackageHlsManifests[];
    /**
    * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}
    */
    readonly includeEncoderConfigurationInSegments?: boolean | cdktf.IResolvable;
    /**
    * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
}
export declare function mediapackagePackagingConfigurationCmafPackageToTerraform(struct?: MediapackagePackagingConfigurationCmafPackage): any;
export interface MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_order MediapackagePackagingConfiguration#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any;
export interface MediapackagePackagingConfigurationDashPackageDashManifests {
    /**
    * Determines the position of some tags in the Media Presentation Description (MPD). When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#manifest_layout MediapackagePackagingConfiguration#manifest_layout}
    */
    readonly manifestLayout?: string;
    /**
    * An optional string to include in the name of the manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#manifest_name MediapackagePackagingConfiguration#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#min_buffer_time_seconds MediapackagePackagingConfiguration#min_buffer_time_seconds}
    */
    readonly minBufferTimeSeconds?: number;
    /**
    * The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#profile MediapackagePackagingConfiguration#profile}
    */
    readonly profile?: string;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_selection MediapackagePackagingConfiguration#stream_selection}
    */
    readonly streamSelection?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection;
}
export declare function mediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifests): any;
export interface MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#role_arn MediapackagePackagingConfiguration#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#system_ids MediapackagePackagingConfiguration#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#url MediapackagePackagingConfiguration#url}
    */
    readonly url: string;
}
export declare function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any;
export interface MediapackagePackagingConfigurationDashPackageEncryption {
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryption): any;
export interface MediapackagePackagingConfigurationDashPackage {
    /**
    * A list of DASH manifest configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#dash_manifests MediapackagePackagingConfiguration#dash_manifests}
    */
    readonly dashManifests: MediapackagePackagingConfigurationDashPackageDashManifests[];
    /**
    * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#encryption MediapackagePackagingConfiguration#encryption}
    */
    readonly encryption?: MediapackagePackagingConfigurationDashPackageEncryption;
    /**
    * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}
    */
    readonly includeEncoderConfigurationInSegments?: boolean | cdktf.IResolvable;
    /**
    * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#period_triggers MediapackagePackagingConfiguration#period_triggers}
    */
    readonly periodTriggers?: string[];
    /**
    * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#segment_template_format MediapackagePackagingConfiguration#segment_template_format}
    */
    readonly segmentTemplateFormat?: string;
}
export declare function mediapackagePackagingConfigurationDashPackageToTerraform(struct?: MediapackagePackagingConfigurationDashPackage): any;
export interface MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#role_arn MediapackagePackagingConfiguration#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#system_ids MediapackagePackagingConfiguration#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#url MediapackagePackagingConfiguration#url}
    */
    readonly url: string;
}
export declare function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any;
export interface MediapackagePackagingConfigurationHlsPackageEncryption {
    /**
    * An HTTP Live Streaming (HLS) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * The encryption method to use.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#encryption_method MediapackagePackagingConfiguration#encryption_method}
    */
    readonly encryptionMethod?: string;
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryption): any;
export interface MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_order MediapackagePackagingConfiguration#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any;
export interface MediapackagePackagingConfigurationHlsPackageHlsManifests {
    /**
    * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#ad_markers MediapackagePackagingConfiguration#ad_markers}
    */
    readonly adMarkers?: string;
    /**
    * When enabled, an I-Frame only stream will be included in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}
    */
    readonly includeIframeOnlyStream?: boolean | cdktf.IResolvable;
    /**
    * An optional string to include in the name of the manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#manifest_name MediapackagePackagingConfiguration#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}
    */
    readonly repeatExtXKey?: boolean | cdktf.IResolvable;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_selection MediapackagePackagingConfiguration#stream_selection}
    */
    readonly streamSelection?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection;
}
export declare function mediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifests): any;
export interface MediapackagePackagingConfigurationHlsPackage {
    /**
    * An HTTP Live Streaming (HLS) encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#encryption MediapackagePackagingConfiguration#encryption}
    */
    readonly encryption?: MediapackagePackagingConfigurationHlsPackageEncryption;
    /**
    * A list of HLS manifest configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#hls_manifests MediapackagePackagingConfiguration#hls_manifests}
    */
    readonly hlsManifests: MediapackagePackagingConfigurationHlsPackageHlsManifests[];
    /**
    * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * When enabled, audio streams will be placed in rendition groups in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}
    */
    readonly useAudioRenditionGroup?: boolean | cdktf.IResolvable;
}
export declare function mediapackagePackagingConfigurationHlsPackageToTerraform(struct?: MediapackagePackagingConfigurationHlsPackage): any;
export interface MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    /**
    * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#role_arn MediapackagePackagingConfiguration#role_arn}
    */
    readonly roleArn: string;
    /**
    * The system IDs to include in key requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#system_ids MediapackagePackagingConfiguration#system_ids}
    */
    readonly systemIds: string[];
    /**
    * The URL of the external key provider service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#url MediapackagePackagingConfiguration#url}
    */
    readonly url: string;
}
export declare function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any;
export interface MediapackagePackagingConfigurationMssPackageEncryption {
    /**
    * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
    */
    readonly spekeKeyProvider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider;
}
export declare function mediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryption): any;
export interface MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {
    /**
    * The maximum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
    */
    readonly maxVideoBitsPerSecond?: number;
    /**
    * The minimum video bitrate (bps) to include in output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
    */
    readonly minVideoBitsPerSecond?: number;
    /**
    * A directive that determines the order of streams in the output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_order MediapackagePackagingConfiguration#stream_order}
    */
    readonly streamOrder?: string;
}
export declare function mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any;
export interface MediapackagePackagingConfigurationMssPackageMssManifests {
    /**
    * An optional string to include in the name of the manifest.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#manifest_name MediapackagePackagingConfiguration#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * A StreamSelection configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#stream_selection MediapackagePackagingConfiguration#stream_selection}
    */
    readonly streamSelection?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection;
}
export declare function mediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifests): any;
export interface MediapackagePackagingConfigurationMssPackage {
    /**
    * A CMAF encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#encryption MediapackagePackagingConfiguration#encryption}
    */
    readonly encryption?: MediapackagePackagingConfigurationMssPackageEncryption;
    /**
    * A list of MSS manifest configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#mss_manifests MediapackagePackagingConfiguration#mss_manifests}
    */
    readonly mssManifests: MediapackagePackagingConfigurationMssPackageMssManifests[];
    /**
    * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
}
export declare function mediapackagePackagingConfigurationMssPackageToTerraform(struct?: MediapackagePackagingConfigurationMssPackage): any;
export interface MediapackagePackagingConfigurationTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#key MediapackagePackagingConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#value MediapackagePackagingConfiguration#value}
    */
    readonly value: string;
}
export declare function mediapackagePackagingConfigurationTagsToTerraform(struct?: MediapackagePackagingConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration}
*/
export declare class MediapackagePackagingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediapackagePackagingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: MediapackagePackagingConfigurationConfig);
    get arn(): string;
    private _cmafPackage?;
    get cmafPackage(): MediapackagePackagingConfigurationCmafPackage;
    set cmafPackage(value: MediapackagePackagingConfigurationCmafPackage);
    resetCmafPackage(): void;
    get cmafPackageInput(): MediapackagePackagingConfigurationCmafPackage | undefined;
    private _dashPackage?;
    get dashPackage(): MediapackagePackagingConfigurationDashPackage;
    set dashPackage(value: MediapackagePackagingConfigurationDashPackage);
    resetDashPackage(): void;
    get dashPackageInput(): MediapackagePackagingConfigurationDashPackage | undefined;
    private _hlsPackage?;
    get hlsPackage(): MediapackagePackagingConfigurationHlsPackage;
    set hlsPackage(value: MediapackagePackagingConfigurationHlsPackage);
    resetHlsPackage(): void;
    get hlsPackageInput(): MediapackagePackagingConfigurationHlsPackage | undefined;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _mssPackage?;
    get mssPackage(): MediapackagePackagingConfigurationMssPackage;
    set mssPackage(value: MediapackagePackagingConfigurationMssPackage);
    resetMssPackage(): void;
    get mssPackageInput(): MediapackagePackagingConfigurationMssPackage | undefined;
    private _packagingGroupId;
    get packagingGroupId(): string;
    set packagingGroupId(value: string);
    get packagingGroupIdInput(): string;
    private _tags?;
    get tags(): MediapackagePackagingConfigurationTags[];
    set tags(value: MediapackagePackagingConfigurationTags[]);
    resetTags(): void;
    get tagsInput(): MediapackagePackagingConfigurationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
