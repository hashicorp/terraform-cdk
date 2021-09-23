// https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface MediapackagePackagingConfigurationCmafPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

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

export function mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

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

export function mediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktf.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

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

export function mediapackagePackagingConfigurationCmafPackageToTerraform(struct?: MediapackagePackagingConfigurationCmafPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: mediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktf.listMapper(mediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform)(struct!.hlsManifests),
    include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
  }
}

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

export function mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

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

export function mediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_layout: cdktf.stringToTerraform(struct!.manifestLayout),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    min_buffer_time_seconds: cdktf.numberToTerraform(struct!.minBufferTimeSeconds),
    profile: cdktf.stringToTerraform(struct!.profile),
    stream_selection: mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

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

export function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface MediapackagePackagingConfigurationDashPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

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

export function mediapackagePackagingConfigurationDashPackageToTerraform(struct?: MediapackagePackagingConfigurationDashPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dash_manifests: cdktf.listMapper(mediapackagePackagingConfigurationDashPackageDashManifestsToTerraform)(struct!.dashManifests),
    encryption: mediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct!.encryption),
    include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    period_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.periodTriggers),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    segment_template_format: cdktf.stringToTerraform(struct!.segmentTemplateFormat),
  }
}

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

export function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

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

export function mediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    speke_key_provider: mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

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

export function mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

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

export function mediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktf.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

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

export function mediapackagePackagingConfigurationHlsPackageToTerraform(struct?: MediapackagePackagingConfigurationHlsPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: mediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktf.listMapper(mediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform)(struct!.hlsManifests),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    use_audio_rendition_group: cdktf.booleanToTerraform(struct!.useAudioRenditionGroup),
  }
}

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

export function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface MediapackagePackagingConfigurationMssPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

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

export function mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

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

export function mediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    stream_selection: mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

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

export function mediapackagePackagingConfigurationMssPackageToTerraform(struct?: MediapackagePackagingConfigurationMssPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: mediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct!.encryption),
    mss_manifests: cdktf.listMapper(mediapackagePackagingConfigurationMssPackageMssManifestsToTerraform)(struct!.mssManifests),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
  }
}

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

export function mediapackagePackagingConfigurationTagsToTerraform(struct?: MediapackagePackagingConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration}
*/
export class MediapackagePackagingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_packaging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediapackagePackagingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MediapackagePackagingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_packaging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cmafPackage = config.cmafPackage;
    this._dashPackage = config.dashPackage;
    this._hlsPackage = config.hlsPackage;
    this._id = config.id;
    this._mssPackage = config.mssPackage;
    this._packagingGroupId = config.packagingGroupId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cmaf_package - computed: false, optional: true, required: false
  private _cmafPackage?: MediapackagePackagingConfigurationCmafPackage;
  public get cmafPackage() {
    return this.interpolationForAttribute('cmaf_package') as any;
  }
  public set cmafPackage(value: MediapackagePackagingConfigurationCmafPackage ) {
    this._cmafPackage = value;
  }
  public resetCmafPackage() {
    this._cmafPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmafPackageInput() {
    return this._cmafPackage
  }

  // dash_package - computed: false, optional: true, required: false
  private _dashPackage?: MediapackagePackagingConfigurationDashPackage;
  public get dashPackage() {
    return this.interpolationForAttribute('dash_package') as any;
  }
  public set dashPackage(value: MediapackagePackagingConfigurationDashPackage ) {
    this._dashPackage = value;
  }
  public resetDashPackage() {
    this._dashPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashPackageInput() {
    return this._dashPackage
  }

  // hls_package - computed: false, optional: true, required: false
  private _hlsPackage?: MediapackagePackagingConfigurationHlsPackage;
  public get hlsPackage() {
    return this.interpolationForAttribute('hls_package') as any;
  }
  public set hlsPackage(value: MediapackagePackagingConfigurationHlsPackage ) {
    this._hlsPackage = value;
  }
  public resetHlsPackage() {
    this._hlsPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsPackageInput() {
    return this._hlsPackage
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // mss_package - computed: false, optional: true, required: false
  private _mssPackage?: MediapackagePackagingConfigurationMssPackage;
  public get mssPackage() {
    return this.interpolationForAttribute('mss_package') as any;
  }
  public set mssPackage(value: MediapackagePackagingConfigurationMssPackage ) {
    this._mssPackage = value;
  }
  public resetMssPackage() {
    this._mssPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssPackageInput() {
    return this._mssPackage
  }

  // packaging_group_id - computed: false, optional: false, required: true
  private _packagingGroupId: string;
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }
  public set packagingGroupId(value: string) {
    this._packagingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingGroupIdInput() {
    return this._packagingGroupId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: MediapackagePackagingConfigurationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: MediapackagePackagingConfigurationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmaf_package: mediapackagePackagingConfigurationCmafPackageToTerraform(this._cmafPackage),
      dash_package: mediapackagePackagingConfigurationDashPackageToTerraform(this._dashPackage),
      hls_package: mediapackagePackagingConfigurationHlsPackageToTerraform(this._hlsPackage),
      id: cdktf.stringToTerraform(this._id),
      mss_package: mediapackagePackagingConfigurationMssPackageToTerraform(this._mssPackage),
      packaging_group_id: cdktf.stringToTerraform(this._packagingGroupId),
      tags: cdktf.listMapper(mediapackagePackagingConfigurationTagsToTerraform)(this._tags),
    };
  }
}
