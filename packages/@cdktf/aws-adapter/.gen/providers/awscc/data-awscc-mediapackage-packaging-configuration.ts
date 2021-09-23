// https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediapackagePackagingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html#id DataAwsccMediapackagePackagingConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption extends cdktf.ComplexComputedList {

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests extends cdktf.ComplexComputedList {

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // repeat_ext_x_key - computed: true, optional: false, required: false
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktf.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackage extends cdktf.ComplexComputedList {

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // hls_manifests - computed: true, optional: false, required: false
  public get hlsManifests() {
    return this.interpolationForAttribute('hls_manifests') as any;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform)(struct!.hlsManifests),
    include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests extends cdktf.ComplexComputedList {

  // manifest_layout - computed: true, optional: false, required: false
  public get manifestLayout() {
    return this.getStringAttribute('manifest_layout');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_layout: cdktf.stringToTerraform(struct!.manifestLayout),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    min_buffer_time_seconds: cdktf.numberToTerraform(struct!.minBufferTimeSeconds),
    profile: cdktf.stringToTerraform(struct!.profile),
    stream_selection: dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageEncryption extends cdktf.ComplexComputedList {

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackage extends cdktf.ComplexComputedList {

  // dash_manifests - computed: true, optional: false, required: false
  public get dashManifests() {
    return this.interpolationForAttribute('dash_manifests') as any;
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }

  // period_triggers - computed: true, optional: false, required: false
  public get periodTriggers() {
    return this.getListAttribute('period_triggers');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // segment_template_format - computed: true, optional: false, required: false
  public get segmentTemplateFormat() {
    return this.getStringAttribute('segment_template_format');
  }
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dash_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform)(struct!.dashManifests),
    encryption: dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct!.encryption),
    include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    period_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.periodTriggers),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    segment_template_format: cdktf.stringToTerraform(struct!.segmentTemplateFormat),
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption extends cdktf.ComplexComputedList {

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    speke_key_provider: dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests extends cdktf.ComplexComputedList {

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // repeat_ext_x_key - computed: true, optional: false, required: false
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_markers: cdktf.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktf.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktf.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktf.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackage extends cdktf.ComplexComputedList {

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

  // use_audio_rendition_group - computed: true, optional: false, required: false
  public get useAudioRenditionGroup() {
    return this.getBooleanAttribute('use_audio_rendition_group');
  }
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform)(struct!.hlsManifests),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
    use_audio_rendition_group: cdktf.booleanToTerraform(struct!.useAudioRenditionGroup),
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.systemIds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageEncryption extends cdktf.ComplexComputedList {

  // speke_key_provider - computed: true, optional: false, required: false
  public get spekeKeyProvider() {
    return this.interpolationForAttribute('speke_key_provider') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    speke_key_provider: dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection extends cdktf.ComplexComputedList {

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

export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_video_bits_per_second: cdktf.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktf.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktf.stringToTerraform(struct!.streamOrder),
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests extends cdktf.ComplexComputedList {

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // stream_selection - computed: true, optional: false, required: false
  public get streamSelection() {
    return this.interpolationForAttribute('stream_selection') as any;
  }
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    stream_selection: dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackage extends cdktf.ComplexComputedList {

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // mss_manifests - computed: true, optional: false, required: false
  public get mssManifests() {
    return this.interpolationForAttribute('mss_manifests') as any;
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption: dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct!.encryption),
    mss_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform)(struct!.mssManifests),
    segment_duration_seconds: cdktf.numberToTerraform(struct!.segmentDurationSeconds),
  }
}

export class DataAwsccMediapackagePackagingConfigurationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccMediapackagePackagingConfigurationTagsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration}
*/
export class DataAwsccMediapackagePackagingConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_packaging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagePackagingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cmaf_package - computed: true, optional: false, required: false
  public get cmafPackage() {
    return this.interpolationForAttribute('cmaf_package') as any;
  }

  // dash_package - computed: true, optional: false, required: false
  public get dashPackage() {
    return this.interpolationForAttribute('dash_package') as any;
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

  // mss_package - computed: true, optional: false, required: false
  public get mssPackage() {
    return this.interpolationForAttribute('mss_package') as any;
  }

  // packaging_group_id - computed: true, optional: false, required: false
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
