// https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediapackageOriginEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html#id DataAwsccMediapackageOriginEndpoint#id}
  */
  readonly id: string;
}
export class DataAwsccMediapackageOriginEndpointAuthorization extends cdktf.ComplexComputedList {

  // cdn_identifier_secret - computed: true, optional: false, required: false
  public get cdnIdentifierSecret() {
    return this.getStringAttribute('cdn_identifier_secret');
  }

  // secrets_role_arn - computed: true, optional: false, required: false
  public get secretsRoleArn() {
    return this.getStringAttribute('secrets_role_arn');
  }
}

export function dataAwsccMediapackageOriginEndpointAuthorizationToTerraform(struct?: DataAwsccMediapackageOriginEndpointAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cdn_identifier_secret: cdktf.stringToTerraform(struct!.cdnIdentifierSecret),
    secrets_role_arn: cdktf.stringToTerraform(struct!.secretsRoleArn),
  }
}

export class DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageOriginEndpointCmafPackageEncryption extends cdktf.ComplexComputedList {

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // key_rotation_interval_seconds - computed: true, optional: false, required: false
  public get keyRotationIntervalSeconds() {
    return this.getNumberAttribute('key_rotation_interval_seconds');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    key_rotation_interval_seconds: cdktf.numberToTerraform(struct!.keyRotationIntervalSeconds),
    speke_key_provider: dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests extends cdktf.ComplexComputedList {

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // ad_triggers - computed: true, optional: false, required: false
  public get adTriggers() {
    return this.getListAttribute('ad_triggers');
  }

  // ads_on_delivery_restrictions - computed: true, optional: false, required: false
  public get adsOnDeliveryRestrictions() {
    return this.getStringAttribute('ads_on_delivery_restrictions');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // playlist_type - computed: true, optional: false, required: false
  public get playlistType() {
    return this.getStringAttribute('playlist_type');
  }

  // playlist_window_seconds - computed: true, optional: false, required: false
  public get playlistWindowSeconds() {
    return this.getNumberAttribute('playlist_window_seconds');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adTriggers),
    ads_on_delivery_restrictions: cdktf.stringToTerraform(struct!.adsOnDeliveryRestrictions),
    id: cdktf.stringToTerraform(struct!.id),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    playlist_type: cdktf.stringToTerraform(struct!.playlistType),
    playlist_window_seconds: cdktf.numberToTerraform(struct!.playlistWindowSeconds),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection extends cdktf.ComplexComputedList {

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}

export function dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackageOriginEndpointCmafPackage extends cdktf.ComplexComputedList {

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // hls_manifests - computed: true, optional: false, required: false
  public get hlsManifests() {
    return this.interpolationForAttribute('hls_manifests') as any;
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // segment_prefix - computed: true, optional: false, required: false
  public get segmentPrefix() {
    return this.getStringAttribute('segment_prefix');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointCmafPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktf.listMapper(dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform)(struct!.hlsManifests),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    segment_prefix: cdktf.stringToTerraform(struct!.segmentPrefix),
    stream_selection: dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageOriginEndpointDashPackageEncryption extends cdktf.ComplexComputedList {

  // key_rotation_interval_seconds - computed: true, optional: false, required: false
  public get keyRotationIntervalSeconds() {
    return this.getNumberAttribute('key_rotation_interval_seconds');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_rotation_interval_seconds: cdktf.numberToTerraform(struct!.keyRotationIntervalSeconds),
    speke_key_provider: dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackageOriginEndpointDashPackageStreamSelection extends cdktf.ComplexComputedList {

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}

export function dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackageOriginEndpointDashPackage extends cdktf.ComplexComputedList {

  // ad_triggers - computed: true, optional: false, required: false
  public get adTriggers() {
    return this.getListAttribute('ad_triggers');
  }

  // ads_on_delivery_restrictions - computed: true, optional: false, required: false
  public get adsOnDeliveryRestrictions() {
    return this.getStringAttribute('ads_on_delivery_restrictions');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // manifest_layout - computed: true, optional: false, required: false
  public get manifestLayout() {
    return this.getStringAttribute('manifest_layout');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // min_update_period_seconds - computed: true, optional: false, required: false
  public get minUpdatePeriodSeconds() {
    return this.getNumberAttribute('min_update_period_seconds');
  }

  // period_triggers - computed: true, optional: false, required: false
  public get periodTriggers() {
    return this.getListAttribute('period_triggers');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // segment_template_format - computed: true, optional: false, required: false
  public get segmentTemplateFormat() {
    return this.getStringAttribute('segment_template_format');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }

  // suggested_presentation_delay_seconds - computed: true, optional: false, required: false
  public get suggestedPresentationDelaySeconds() {
    return this.getNumberAttribute('suggested_presentation_delay_seconds');
  }

  // utc_timing - computed: true, optional: false, required: false
  public get utcTiming() {
    return this.getStringAttribute('utc_timing');
  }

  // utc_timing_uri - computed: true, optional: false, required: false
  public get utcTimingUri() {
    return this.getStringAttribute('utc_timing_uri');
  }
}

export function dataAwsccMediapackageOriginEndpointDashPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adTriggers),
    ads_on_delivery_restrictions: cdktf.stringToTerraform(struct!.adsOnDeliveryRestrictions),
    encryption: dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform(struct!.encryption),
    manifest_layout: cdktf.stringToTerraform(struct!.manifestLayout),
    manifest_window_seconds: cdktf.numberToTerraform(struct!.manifestWindowSeconds),
    min_buffer_time_seconds: cdktf.numberToTerraform(struct!.minBufferTimeSeconds),
    min_update_period_seconds: cdktf.numberToTerraform(struct!.minUpdatePeriodSeconds),
    period_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.periodTriggers),
    profile: cdktf.stringToTerraform(struct!.profile),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    segment_template_format: cdktf.stringToTerraform(struct!.segmentTemplateFormat),
    stream_selection: dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct!.streamSelection),
    suggested_presentation_delay_seconds: cdktf.numberToTerraform(struct!.suggestedPresentationDelaySeconds),
    utc_timing: cdktf.stringToTerraform(struct!.utcTiming),
    utc_timing_uri: cdktf.stringToTerraform(struct!.utcTimingUri),
  }
}

export class DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageOriginEndpointHlsPackageEncryption extends cdktf.ComplexComputedList {

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // key_rotation_interval_seconds - computed: true, optional: false, required: false
  public get keyRotationIntervalSeconds() {
    return this.getNumberAttribute('key_rotation_interval_seconds');
  }

  // repeat_ext_x_key - computed: true, optional: false, required: false
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    key_rotation_interval_seconds: cdktf.numberToTerraform(struct!.keyRotationIntervalSeconds),
    repeat_ext_x_key: cdktf.booleanToTerraform(struct!.repeatExtXKey),
    speke_key_provider: dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection extends cdktf.ComplexComputedList {

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}

export function dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackageOriginEndpointHlsPackage extends cdktf.ComplexComputedList {

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // ad_triggers - computed: true, optional: false, required: false
  public get adTriggers() {
    return this.getListAttribute('ad_triggers');
  }

  // ads_on_delivery_restrictions - computed: true, optional: false, required: false
  public get adsOnDeliveryRestrictions() {
    return this.getStringAttribute('ads_on_delivery_restrictions');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // playlist_type - computed: true, optional: false, required: false
  public get playlistType() {
    return this.getStringAttribute('playlist_type');
  }

  // playlist_window_seconds - computed: true, optional: false, required: false
  public get playlistWindowSeconds() {
    return this.getNumberAttribute('playlist_window_seconds');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }

  // use_audio_rendition_group - computed: true, optional: false, required: false
  public get useAudioRenditionGroup() {
    return this.getBooleanAttribute('use_audio_rendition_group');
  }
}

export function dataAwsccMediapackageOriginEndpointHlsPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adTriggers),
    ads_on_delivery_restrictions: cdktf.stringToTerraform(struct!.adsOnDeliveryRestrictions),
    encryption: dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct!.encryption),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    playlist_type: cdktf.stringToTerraform(struct!.playlistType),
    playlist_window_seconds: cdktf.numberToTerraform(struct!.playlistWindowSeconds),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    stream_selection: dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct!.streamSelection),
    use_audio_rendition_group: cdktf.booleanToTerraform(struct!.useAudioRenditionGroup),
  }
}

export class DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageOriginEndpointMssPackageEncryption extends cdktf.ComplexComputedList {

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackageOriginEndpointMssPackageStreamSelection extends cdktf.ComplexComputedList {

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}

export function dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackageOriginEndpointMssPackage extends cdktf.ComplexComputedList {

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackageOriginEndpointMssPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform(struct!.encryption),
    manifest_window_seconds: cdktf.numberToTerraform(struct!.manifestWindowSeconds),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    stream_selection: dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackageOriginEndpointTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccMediapackageOriginEndpointTagsToTerraform(struct?: DataAwsccMediapackageOriginEndpointTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint}
*/
export class DataAwsccMediapackageOriginEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_origin_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackageOriginEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackageOriginEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_origin_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.interpolationForAttribute('authorization') as any;
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // cmaf_package - computed: true, optional: false, required: false
  public get cmafPackage() {
    return this.interpolationForAttribute('cmaf_package') as any;
  }

  // dash_package - computed: true, optional: false, required: false
  public get dashPackage() {
    return this.interpolationForAttribute('dash_package') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hls_package - computed: true, optional: false, required: false
  public get hlsPackage() {
    return this.interpolationForAttribute('hls_package') as any;
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

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // mss_package - computed: true, optional: false, required: false
  public get mssPackage() {
    return this.interpolationForAttribute('mss_package') as any;
  }

  // origination - computed: true, optional: false, required: false
  public get origination() {
    return this.getStringAttribute('origination');
  }

  // startover_window_seconds - computed: true, optional: false, required: false
  public get startoverWindowSeconds() {
    return this.getNumberAttribute('startover_window_seconds');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // time_delay_seconds - computed: true, optional: false, required: false
  public get timeDelaySeconds() {
    return this.getNumberAttribute('time_delay_seconds');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // whitelist - computed: true, optional: false, required: false
  public get whitelist() {
    return this.getListAttribute('whitelist');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
