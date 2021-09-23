"use strict";
// https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccMediapackageOriginEndpoint = exports.dataAwsccMediapackageOriginEndpointTagsToTerraform = exports.DataAwsccMediapackageOriginEndpointTags = exports.dataAwsccMediapackageOriginEndpointMssPackageToTerraform = exports.DataAwsccMediapackageOriginEndpointMssPackage = exports.dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform = exports.DataAwsccMediapackageOriginEndpointMssPackageStreamSelection = exports.dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform = exports.DataAwsccMediapackageOriginEndpointMssPackageEncryption = exports.dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackageOriginEndpointHlsPackageToTerraform = exports.DataAwsccMediapackageOriginEndpointHlsPackage = exports.dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform = exports.DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection = exports.dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform = exports.DataAwsccMediapackageOriginEndpointHlsPackageEncryption = exports.dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackageOriginEndpointDashPackageToTerraform = exports.DataAwsccMediapackageOriginEndpointDashPackage = exports.dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform = exports.DataAwsccMediapackageOriginEndpointDashPackageStreamSelection = exports.dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform = exports.DataAwsccMediapackageOriginEndpointDashPackageEncryption = exports.dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackageOriginEndpointCmafPackageToTerraform = exports.DataAwsccMediapackageOriginEndpointCmafPackage = exports.dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform = exports.DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection = exports.dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform = exports.DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests = exports.dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform = exports.DataAwsccMediapackageOriginEndpointCmafPackageEncryption = exports.dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackageOriginEndpointAuthorizationToTerraform = exports.DataAwsccMediapackageOriginEndpointAuthorization = void 0;
const cdktf = require("cdktf");
class DataAwsccMediapackageOriginEndpointAuthorization extends cdktf.ComplexComputedList {
    // cdn_identifier_secret - computed: true, optional: false, required: false
    get cdnIdentifierSecret() {
        return this.getStringAttribute('cdn_identifier_secret');
    }
    // secrets_role_arn - computed: true, optional: false, required: false
    get secretsRoleArn() {
        return this.getStringAttribute('secrets_role_arn');
    }
}
exports.DataAwsccMediapackageOriginEndpointAuthorization = DataAwsccMediapackageOriginEndpointAuthorization;
function dataAwsccMediapackageOriginEndpointAuthorizationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cdn_identifier_secret: cdktf.stringToTerraform(struct.cdnIdentifierSecret),
        secrets_role_arn: cdktf.stringToTerraform(struct.secretsRoleArn),
    };
}
exports.dataAwsccMediapackageOriginEndpointAuthorizationToTerraform = dataAwsccMediapackageOriginEndpointAuthorizationToTerraform;
class DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    // certificate_arn - computed: true, optional: false, required: false
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // resource_id - computed: true, optional: false, required: false
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // system_ids - computed: true, optional: false, required: false
    get systemIds() {
        return this.getListAttribute('system_ids');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider = DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackageOriginEndpointCmafPackageEncryption extends cdktf.ComplexComputedList {
    // constant_initialization_vector - computed: true, optional: false, required: false
    get constantInitializationVector() {
        return this.getStringAttribute('constant_initialization_vector');
    }
    // key_rotation_interval_seconds - computed: true, optional: false, required: false
    get keyRotationIntervalSeconds() {
        return this.getNumberAttribute('key_rotation_interval_seconds');
    }
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackageOriginEndpointCmafPackageEncryption = DataAwsccMediapackageOriginEndpointCmafPackageEncryption;
function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        constant_initialization_vector: cdktf.stringToTerraform(struct.constantInitializationVector),
        key_rotation_interval_seconds: cdktf.numberToTerraform(struct.keyRotationIntervalSeconds),
        speke_key_provider: dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform = dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform;
class DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests extends cdktf.ComplexComputedList {
    // ad_markers - computed: true, optional: false, required: false
    get adMarkers() {
        return this.getStringAttribute('ad_markers');
    }
    // ad_triggers - computed: true, optional: false, required: false
    get adTriggers() {
        return this.getListAttribute('ad_triggers');
    }
    // ads_on_delivery_restrictions - computed: true, optional: false, required: false
    get adsOnDeliveryRestrictions() {
        return this.getStringAttribute('ads_on_delivery_restrictions');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include_iframe_only_stream - computed: true, optional: false, required: false
    get includeIframeOnlyStream() {
        return this.getBooleanAttribute('include_iframe_only_stream');
    }
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // playlist_type - computed: true, optional: false, required: false
    get playlistType() {
        return this.getStringAttribute('playlist_type');
    }
    // playlist_window_seconds - computed: true, optional: false, required: false
    get playlistWindowSeconds() {
        return this.getNumberAttribute('playlist_window_seconds');
    }
    // program_date_time_interval_seconds - computed: true, optional: false, required: false
    get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests = DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests;
function dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_markers: cdktf.stringToTerraform(struct.adMarkers),
        ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.adTriggers),
        ads_on_delivery_restrictions: cdktf.stringToTerraform(struct.adsOnDeliveryRestrictions),
        id: cdktf.stringToTerraform(struct.id),
        include_iframe_only_stream: cdktf.booleanToTerraform(struct.includeIframeOnlyStream),
        manifest_name: cdktf.stringToTerraform(struct.manifestName),
        playlist_type: cdktf.stringToTerraform(struct.playlistType),
        playlist_window_seconds: cdktf.numberToTerraform(struct.playlistWindowSeconds),
        program_date_time_interval_seconds: cdktf.numberToTerraform(struct.programDateTimeIntervalSeconds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform = dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform;
class DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection extends cdktf.ComplexComputedList {
    // max_video_bits_per_second - computed: true, optional: false, required: false
    get maxVideoBitsPerSecond() {
        return this.getNumberAttribute('max_video_bits_per_second');
    }
    // min_video_bits_per_second - computed: true, optional: false, required: false
    get minVideoBitsPerSecond() {
        return this.getNumberAttribute('min_video_bits_per_second');
    }
    // stream_order - computed: true, optional: false, required: false
    get streamOrder() {
        return this.getStringAttribute('stream_order');
    }
}
exports.DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection = DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection;
function dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform = dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform;
class DataAwsccMediapackageOriginEndpointCmafPackage extends cdktf.ComplexComputedList {
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // hls_manifests - computed: true, optional: false, required: false
    get hlsManifests() {
        return this.interpolationForAttribute('hls_manifests');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    // segment_prefix - computed: true, optional: false, required: false
    get segmentPrefix() {
        return this.getStringAttribute('segment_prefix');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackageOriginEndpointCmafPackage = DataAwsccMediapackageOriginEndpointCmafPackage;
function dataAwsccMediapackageOriginEndpointCmafPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption: dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct.encryption),
        hls_manifests: cdktf.listMapper(dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform)(struct.hlsManifests),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        segment_prefix: cdktf.stringToTerraform(struct.segmentPrefix),
        stream_selection: dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackageOriginEndpointCmafPackageToTerraform = dataAwsccMediapackageOriginEndpointCmafPackageToTerraform;
class DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    // certificate_arn - computed: true, optional: false, required: false
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // resource_id - computed: true, optional: false, required: false
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // system_ids - computed: true, optional: false, required: false
    get systemIds() {
        return this.getListAttribute('system_ids');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider = DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackageOriginEndpointDashPackageEncryption extends cdktf.ComplexComputedList {
    // key_rotation_interval_seconds - computed: true, optional: false, required: false
    get keyRotationIntervalSeconds() {
        return this.getNumberAttribute('key_rotation_interval_seconds');
    }
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackageOriginEndpointDashPackageEncryption = DataAwsccMediapackageOriginEndpointDashPackageEncryption;
function dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_rotation_interval_seconds: cdktf.numberToTerraform(struct.keyRotationIntervalSeconds),
        speke_key_provider: dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform = dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform;
class DataAwsccMediapackageOriginEndpointDashPackageStreamSelection extends cdktf.ComplexComputedList {
    // max_video_bits_per_second - computed: true, optional: false, required: false
    get maxVideoBitsPerSecond() {
        return this.getNumberAttribute('max_video_bits_per_second');
    }
    // min_video_bits_per_second - computed: true, optional: false, required: false
    get minVideoBitsPerSecond() {
        return this.getNumberAttribute('min_video_bits_per_second');
    }
    // stream_order - computed: true, optional: false, required: false
    get streamOrder() {
        return this.getStringAttribute('stream_order');
    }
}
exports.DataAwsccMediapackageOriginEndpointDashPackageStreamSelection = DataAwsccMediapackageOriginEndpointDashPackageStreamSelection;
function dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform = dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform;
class DataAwsccMediapackageOriginEndpointDashPackage extends cdktf.ComplexComputedList {
    // ad_triggers - computed: true, optional: false, required: false
    get adTriggers() {
        return this.getListAttribute('ad_triggers');
    }
    // ads_on_delivery_restrictions - computed: true, optional: false, required: false
    get adsOnDeliveryRestrictions() {
        return this.getStringAttribute('ads_on_delivery_restrictions');
    }
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // manifest_layout - computed: true, optional: false, required: false
    get manifestLayout() {
        return this.getStringAttribute('manifest_layout');
    }
    // manifest_window_seconds - computed: true, optional: false, required: false
    get manifestWindowSeconds() {
        return this.getNumberAttribute('manifest_window_seconds');
    }
    // min_buffer_time_seconds - computed: true, optional: false, required: false
    get minBufferTimeSeconds() {
        return this.getNumberAttribute('min_buffer_time_seconds');
    }
    // min_update_period_seconds - computed: true, optional: false, required: false
    get minUpdatePeriodSeconds() {
        return this.getNumberAttribute('min_update_period_seconds');
    }
    // period_triggers - computed: true, optional: false, required: false
    get periodTriggers() {
        return this.getListAttribute('period_triggers');
    }
    // profile - computed: true, optional: false, required: false
    get profile() {
        return this.getStringAttribute('profile');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    // segment_template_format - computed: true, optional: false, required: false
    get segmentTemplateFormat() {
        return this.getStringAttribute('segment_template_format');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
    // suggested_presentation_delay_seconds - computed: true, optional: false, required: false
    get suggestedPresentationDelaySeconds() {
        return this.getNumberAttribute('suggested_presentation_delay_seconds');
    }
    // utc_timing - computed: true, optional: false, required: false
    get utcTiming() {
        return this.getStringAttribute('utc_timing');
    }
    // utc_timing_uri - computed: true, optional: false, required: false
    get utcTimingUri() {
        return this.getStringAttribute('utc_timing_uri');
    }
}
exports.DataAwsccMediapackageOriginEndpointDashPackage = DataAwsccMediapackageOriginEndpointDashPackage;
function dataAwsccMediapackageOriginEndpointDashPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.adTriggers),
        ads_on_delivery_restrictions: cdktf.stringToTerraform(struct.adsOnDeliveryRestrictions),
        encryption: dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform(struct.encryption),
        manifest_layout: cdktf.stringToTerraform(struct.manifestLayout),
        manifest_window_seconds: cdktf.numberToTerraform(struct.manifestWindowSeconds),
        min_buffer_time_seconds: cdktf.numberToTerraform(struct.minBufferTimeSeconds),
        min_update_period_seconds: cdktf.numberToTerraform(struct.minUpdatePeriodSeconds),
        period_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.periodTriggers),
        profile: cdktf.stringToTerraform(struct.profile),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        segment_template_format: cdktf.stringToTerraform(struct.segmentTemplateFormat),
        stream_selection: dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct.streamSelection),
        suggested_presentation_delay_seconds: cdktf.numberToTerraform(struct.suggestedPresentationDelaySeconds),
        utc_timing: cdktf.stringToTerraform(struct.utcTiming),
        utc_timing_uri: cdktf.stringToTerraform(struct.utcTimingUri),
    };
}
exports.dataAwsccMediapackageOriginEndpointDashPackageToTerraform = dataAwsccMediapackageOriginEndpointDashPackageToTerraform;
class DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    // certificate_arn - computed: true, optional: false, required: false
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // resource_id - computed: true, optional: false, required: false
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // system_ids - computed: true, optional: false, required: false
    get systemIds() {
        return this.getListAttribute('system_ids');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider = DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackageOriginEndpointHlsPackageEncryption extends cdktf.ComplexComputedList {
    // constant_initialization_vector - computed: true, optional: false, required: false
    get constantInitializationVector() {
        return this.getStringAttribute('constant_initialization_vector');
    }
    // encryption_method - computed: true, optional: false, required: false
    get encryptionMethod() {
        return this.getStringAttribute('encryption_method');
    }
    // key_rotation_interval_seconds - computed: true, optional: false, required: false
    get keyRotationIntervalSeconds() {
        return this.getNumberAttribute('key_rotation_interval_seconds');
    }
    // repeat_ext_x_key - computed: true, optional: false, required: false
    get repeatExtXKey() {
        return this.getBooleanAttribute('repeat_ext_x_key');
    }
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackageOriginEndpointHlsPackageEncryption = DataAwsccMediapackageOriginEndpointHlsPackageEncryption;
function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        constant_initialization_vector: cdktf.stringToTerraform(struct.constantInitializationVector),
        encryption_method: cdktf.stringToTerraform(struct.encryptionMethod),
        key_rotation_interval_seconds: cdktf.numberToTerraform(struct.keyRotationIntervalSeconds),
        repeat_ext_x_key: cdktf.booleanToTerraform(struct.repeatExtXKey),
        speke_key_provider: dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform = dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform;
class DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection extends cdktf.ComplexComputedList {
    // max_video_bits_per_second - computed: true, optional: false, required: false
    get maxVideoBitsPerSecond() {
        return this.getNumberAttribute('max_video_bits_per_second');
    }
    // min_video_bits_per_second - computed: true, optional: false, required: false
    get minVideoBitsPerSecond() {
        return this.getNumberAttribute('min_video_bits_per_second');
    }
    // stream_order - computed: true, optional: false, required: false
    get streamOrder() {
        return this.getStringAttribute('stream_order');
    }
}
exports.DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection = DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection;
function dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform = dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform;
class DataAwsccMediapackageOriginEndpointHlsPackage extends cdktf.ComplexComputedList {
    // ad_markers - computed: true, optional: false, required: false
    get adMarkers() {
        return this.getStringAttribute('ad_markers');
    }
    // ad_triggers - computed: true, optional: false, required: false
    get adTriggers() {
        return this.getListAttribute('ad_triggers');
    }
    // ads_on_delivery_restrictions - computed: true, optional: false, required: false
    get adsOnDeliveryRestrictions() {
        return this.getStringAttribute('ads_on_delivery_restrictions');
    }
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // include_iframe_only_stream - computed: true, optional: false, required: false
    get includeIframeOnlyStream() {
        return this.getBooleanAttribute('include_iframe_only_stream');
    }
    // playlist_type - computed: true, optional: false, required: false
    get playlistType() {
        return this.getStringAttribute('playlist_type');
    }
    // playlist_window_seconds - computed: true, optional: false, required: false
    get playlistWindowSeconds() {
        return this.getNumberAttribute('playlist_window_seconds');
    }
    // program_date_time_interval_seconds - computed: true, optional: false, required: false
    get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
    // use_audio_rendition_group - computed: true, optional: false, required: false
    get useAudioRenditionGroup() {
        return this.getBooleanAttribute('use_audio_rendition_group');
    }
}
exports.DataAwsccMediapackageOriginEndpointHlsPackage = DataAwsccMediapackageOriginEndpointHlsPackage;
function dataAwsccMediapackageOriginEndpointHlsPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_markers: cdktf.stringToTerraform(struct.adMarkers),
        ad_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.adTriggers),
        ads_on_delivery_restrictions: cdktf.stringToTerraform(struct.adsOnDeliveryRestrictions),
        encryption: dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct.encryption),
        include_iframe_only_stream: cdktf.booleanToTerraform(struct.includeIframeOnlyStream),
        playlist_type: cdktf.stringToTerraform(struct.playlistType),
        playlist_window_seconds: cdktf.numberToTerraform(struct.playlistWindowSeconds),
        program_date_time_interval_seconds: cdktf.numberToTerraform(struct.programDateTimeIntervalSeconds),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        stream_selection: dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct.streamSelection),
        use_audio_rendition_group: cdktf.booleanToTerraform(struct.useAudioRenditionGroup),
    };
}
exports.dataAwsccMediapackageOriginEndpointHlsPackageToTerraform = dataAwsccMediapackageOriginEndpointHlsPackageToTerraform;
class DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    // certificate_arn - computed: true, optional: false, required: false
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // resource_id - computed: true, optional: false, required: false
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // system_ids - computed: true, optional: false, required: false
    get systemIds() {
        return this.getListAttribute('system_ids');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider = DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackageOriginEndpointMssPackageEncryption extends cdktf.ComplexComputedList {
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackageOriginEndpointMssPackageEncryption = DataAwsccMediapackageOriginEndpointMssPackageEncryption;
function dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        speke_key_provider: dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform = dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform;
class DataAwsccMediapackageOriginEndpointMssPackageStreamSelection extends cdktf.ComplexComputedList {
    // max_video_bits_per_second - computed: true, optional: false, required: false
    get maxVideoBitsPerSecond() {
        return this.getNumberAttribute('max_video_bits_per_second');
    }
    // min_video_bits_per_second - computed: true, optional: false, required: false
    get minVideoBitsPerSecond() {
        return this.getNumberAttribute('min_video_bits_per_second');
    }
    // stream_order - computed: true, optional: false, required: false
    get streamOrder() {
        return this.getStringAttribute('stream_order');
    }
}
exports.DataAwsccMediapackageOriginEndpointMssPackageStreamSelection = DataAwsccMediapackageOriginEndpointMssPackageStreamSelection;
function dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform = dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform;
class DataAwsccMediapackageOriginEndpointMssPackage extends cdktf.ComplexComputedList {
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // manifest_window_seconds - computed: true, optional: false, required: false
    get manifestWindowSeconds() {
        return this.getNumberAttribute('manifest_window_seconds');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackageOriginEndpointMssPackage = DataAwsccMediapackageOriginEndpointMssPackage;
function dataAwsccMediapackageOriginEndpointMssPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption: dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform(struct.encryption),
        manifest_window_seconds: cdktf.numberToTerraform(struct.manifestWindowSeconds),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        stream_selection: dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackageOriginEndpointMssPackageToTerraform = dataAwsccMediapackageOriginEndpointMssPackageToTerraform;
class DataAwsccMediapackageOriginEndpointTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccMediapackageOriginEndpointTags = DataAwsccMediapackageOriginEndpointTags;
function dataAwsccMediapackageOriginEndpointTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccMediapackageOriginEndpointTagsToTerraform = dataAwsccMediapackageOriginEndpointTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint}
*/
class DataAwsccMediapackageOriginEndpoint extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // authorization - computed: true, optional: false, required: false
    get authorization() {
        return this.interpolationForAttribute('authorization');
    }
    // channel_id - computed: true, optional: false, required: false
    get channelId() {
        return this.getStringAttribute('channel_id');
    }
    // cmaf_package - computed: true, optional: false, required: false
    get cmafPackage() {
        return this.interpolationForAttribute('cmaf_package');
    }
    // dash_package - computed: true, optional: false, required: false
    get dashPackage() {
        return this.interpolationForAttribute('dash_package');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // hls_package - computed: true, optional: false, required: false
    get hlsPackage() {
        return this.interpolationForAttribute('hls_package');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // mss_package - computed: true, optional: false, required: false
    get mssPackage() {
        return this.interpolationForAttribute('mss_package');
    }
    // origination - computed: true, optional: false, required: false
    get origination() {
        return this.getStringAttribute('origination');
    }
    // startover_window_seconds - computed: true, optional: false, required: false
    get startoverWindowSeconds() {
        return this.getNumberAttribute('startover_window_seconds');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // time_delay_seconds - computed: true, optional: false, required: false
    get timeDelaySeconds() {
        return this.getNumberAttribute('time_delay_seconds');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // whitelist - computed: true, optional: false, required: false
    get whitelist() {
        return this.getListAttribute('whitelist');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccMediapackageOriginEndpoint = DataAwsccMediapackageOriginEndpoint;
// =================
// STATIC PROPERTIES
// =================
DataAwsccMediapackageOriginEndpoint.tfResourceType = "awscc_mediapackage_origin_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1tZWRpYXBhY2thZ2Utb3JpZ2luLWVuZHBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1tZWRpYXBhY2thZ2Utb3JpZ2luLWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBb0Y7QUFDcEYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsZ0RBQWlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RiwyRUFBMkU7SUFDM0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQVhELDRHQVdDO0FBRUQsU0FBZ0IsMkRBQTJELENBQUMsTUFBeUQ7SUFDbkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzNFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBTkQsa0lBTUM7QUFFRCxNQUFhLHdFQUF5RSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckgscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFB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UztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBcElILGtGQXFJQztBQW5JQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGtEQUFjLEdBQVcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9tZWRpYXBhY2thZ2Vfb3JpZ2luX2VuZHBvaW50Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL21lZGlhcGFja2FnZV9vcmlnaW5fZW5kcG9pbnQuaHRtbCNpZCBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludCNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEF1dGhvcml6YXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjZG5faWRlbnRpZmllcl9zZWNyZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjZG5JZGVudGlmaWVyU2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2RuX2lkZW50aWZpZXJfc2VjcmV0Jyk7XG4gIH1cblxuICAvLyBzZWNyZXRzX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjcmV0c1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRzX3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50QXV0aG9yaXphdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50QXV0aG9yaXphdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZG5faWRlbnRpZmllcl9zZWNyZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2RuSWRlbnRpZmllclNlY3JldCksXG4gICAgc2VjcmV0c19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRzUm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cblxuICAvLyByZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9pZCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHN5c3RlbV9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzeXN0ZW1JZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3lzdGVtX2lkcycpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICAgIHJlc291cmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlSWQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN5c3RlbV9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3lzdGVtSWRzKSxcbiAgICB1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZUVuY3J5cHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25zdGFudF9pbml0aWFsaXphdGlvbl92ZWN0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zdGFudEluaXRpYWxpemF0aW9uVmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uc3RhbnRfaW5pdGlhbGl6YXRpb25fdmVjdG9yJyk7XG4gIH1cblxuICAvLyBrZXlfcm90YXRpb25faW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVJvdGF0aW9uSW50ZXJ2YWxTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgna2V5X3JvdGF0aW9uX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHNwZWtlX2tleV9wcm92aWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwZWtlS2V5UHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3Bla2Vfa2V5X3Byb3ZpZGVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2VFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnN0YW50X2luaXRpYWxpemF0aW9uX3ZlY3RvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25zdGFudEluaXRpYWxpemF0aW9uVmVjdG9yKSxcbiAgICBrZXlfcm90YXRpb25faW50ZXJ2YWxfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlSb3RhdGlvbkludGVydmFsU2Vjb25kcyksXG4gICAgc3Bla2Vfa2V5X3Byb3ZpZGVyOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwZWtlS2V5UHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlSGxzTWFuaWZlc3RzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWRfbWFya2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkTWFya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkX21hcmtlcnMnKTtcbiAgfVxuXG4gIC8vIGFkX3RyaWdnZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRUcmlnZ2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhZF90cmlnZ2VycycpO1xuICB9XG5cbiAgLy8gYWRzX29uX2RlbGl2ZXJ5X3Jlc3RyaWN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkc09uRGVsaXZlcnlSZXN0cmljdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZHNfb25fZGVsaXZlcnlfcmVzdHJpY3Rpb25zJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfaWZyYW1lX29ubHlfc3RyZWFtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUlmcmFtZU9ubHlTdHJlYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9pZnJhbWVfb25seV9zdHJlYW0nKTtcbiAgfVxuXG4gIC8vIG1hbmlmZXN0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5pZmVzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW5pZmVzdF9uYW1lJyk7XG4gIH1cblxuICAvLyBwbGF5bGlzdF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGxheWxpc3RUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxheWxpc3RfdHlwZScpO1xuICB9XG5cbiAgLy8gcGxheWxpc3Rfd2luZG93X3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGF5bGlzdFdpbmRvd1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwbGF5bGlzdF93aW5kb3dfc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gcHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2dyYW1EYXRlVGltZUludGVydmFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Byb2dyYW1fZGF0ZV90aW1lX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlSGxzTWFuaWZlc3RzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZUhsc01hbmlmZXN0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZF9tYXJrZXJzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkTWFya2VycyksXG4gICAgYWRfdHJpZ2dlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWRUcmlnZ2VycyksXG4gICAgYWRzX29uX2RlbGl2ZXJ5X3Jlc3RyaWN0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZHNPbkRlbGl2ZXJ5UmVzdHJpY3Rpb25zKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgaW5jbHVkZV9pZnJhbWVfb25seV9zdHJlYW06IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVJZnJhbWVPbmx5U3RyZWFtKSxcbiAgICBtYW5pZmVzdF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0TmFtZSksXG4gICAgcGxheWxpc3RfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGF5bGlzdFR5cGUpLFxuICAgIHBsYXlsaXN0X3dpbmRvd19zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBsYXlsaXN0V2luZG93U2Vjb25kcyksXG4gICAgcHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9ncmFtRGF0ZVRpbWVJbnRlcnZhbFNlY29uZHMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlU3RyZWFtU2VsZWN0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIG1pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5WaWRlb0JpdHNQZXJTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fdmlkZW9fYml0c19wZXJfc2Vjb25kJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fb3JkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1PcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0cmVhbV9vcmRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludENtYWZQYWNrYWdlU3RyZWFtU2VsZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZVN0cmVhbVNlbGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZpZGVvQml0c1BlclNlY29uZCksXG4gICAgbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5WaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIHN0cmVhbV9vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1PcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaGxzX21hbmlmZXN0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhsc01hbmlmZXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdobHNfbWFuaWZlc3RzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VnbWVudER1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZ21lbnRfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gc2VnbWVudF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VnbWVudF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9zZWxlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1TZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RyZWFtX3NlbGVjdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5jcnlwdGlvbjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZUVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb24pLFxuICAgIGhsc19tYW5pZmVzdHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRDbWFmUGFja2FnZUhsc01hbmlmZXN0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhsc01hbmlmZXN0cyksXG4gICAgc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnREdXJhdGlvblNlY29uZHMpLFxuICAgIHNlZ21lbnRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnRQcmVmaXgpLFxuICAgIHN0cmVhbV9zZWxlY3Rpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q21hZlBhY2thZ2VTdHJlYW1TZWxlY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbVNlbGVjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cblxuICAvLyByZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9pZCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHN5c3RlbV9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzeXN0ZW1JZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3lzdGVtX2lkcycpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICAgIHJlc291cmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlSWQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN5c3RlbV9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3lzdGVtSWRzKSxcbiAgICB1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnREYXNoUGFja2FnZUVuY3J5cHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXlfcm90YXRpb25faW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVJvdGF0aW9uSW50ZXJ2YWxTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgna2V5X3JvdGF0aW9uX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHNwZWtlX2tleV9wcm92aWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwZWtlS2V5UHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3Bla2Vfa2V5X3Byb3ZpZGVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludERhc2hQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleV9yb3RhdGlvbl9pbnRlcnZhbF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleVJvdGF0aW9uSW50ZXJ2YWxTZWNvbmRzKSxcbiAgICBzcGVrZV9rZXlfcHJvdmlkZXI6IGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdCEuc3Bla2VLZXlQcm92aWRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VTdHJlYW1TZWxlY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9vcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX29yZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VTdHJlYW1TZWxlY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludERhc2hQYWNrYWdlU3RyZWFtU2VsZWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF92aWRlb19iaXRzX3Blcl9zZWNvbmQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4VmlkZW9CaXRzUGVyU2Vjb25kKSxcbiAgICBtaW5fdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblZpZGVvQml0c1BlclNlY29uZCksXG4gICAgc3RyZWFtX29yZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbU9yZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnREYXNoUGFja2FnZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFkX3RyaWdnZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRUcmlnZ2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhZF90cmlnZ2VycycpO1xuICB9XG5cbiAgLy8gYWRzX29uX2RlbGl2ZXJ5X3Jlc3RyaWN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkc09uRGVsaXZlcnlSZXN0cmljdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZHNfb25fZGVsaXZlcnlfcmVzdHJpY3Rpb25zJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWFuaWZlc3RfbGF5b3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3RMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW5pZmVzdF9sYXlvdXQnKTtcbiAgfVxuXG4gIC8vIG1hbmlmZXN0X3dpbmRvd19zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3RXaW5kb3dTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWFuaWZlc3Rfd2luZG93X3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIG1pbl9idWZmZXJfdGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluQnVmZmVyVGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fYnVmZmVyX3RpbWVfc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gbWluX3VwZGF0ZV9wZXJpb2Rfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblVwZGF0ZVBlcmlvZFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fdXBkYXRlX3BlcmlvZF9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBwZXJpb2RfdHJpZ2dlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwZXJpb2RUcmlnZ2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwZXJpb2RfdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIC8vIHByb2ZpbGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZmlsZScpO1xuICB9XG5cbiAgLy8gc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VnbWVudER1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZ21lbnRfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gc2VnbWVudF90ZW1wbGF0ZV9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50VGVtcGxhdGVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWdtZW50X3RlbXBsYXRlX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gc3RyZWFtX3NlbGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdHJlYW1fc2VsZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3VnZ2VzdGVkX3ByZXNlbnRhdGlvbl9kZWxheV9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXlTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3VnZ2VzdGVkX3ByZXNlbnRhdGlvbl9kZWxheV9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyB1dGNfdGltaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXRjVGltaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXRjX3RpbWluZycpO1xuICB9XG5cbiAgLy8gdXRjX3RpbWluZ191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1dGNUaW1pbmdVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1dGNfdGltaW5nX3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludERhc2hQYWNrYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnREYXNoUGFja2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZF90cmlnZ2VyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hZFRyaWdnZXJzKSxcbiAgICBhZHNfb25fZGVsaXZlcnlfcmVzdHJpY3Rpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkc09uRGVsaXZlcnlSZXN0cmljdGlvbnMpLFxuICAgIGVuY3J5cHRpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uKSxcbiAgICBtYW5pZmVzdF9sYXlvdXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuaWZlc3RMYXlvdXQpLFxuICAgIG1hbmlmZXN0X3dpbmRvd19zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0V2luZG93U2Vjb25kcyksXG4gICAgbWluX2J1ZmZlcl90aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluQnVmZmVyVGltZVNlY29uZHMpLFxuICAgIG1pbl91cGRhdGVfcGVyaW9kX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluVXBkYXRlUGVyaW9kU2Vjb25kcyksXG4gICAgcGVyaW9kX3RyaWdnZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBlcmlvZFRyaWdnZXJzKSxcbiAgICBwcm9maWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2ZpbGUpLFxuICAgIHNlZ21lbnRfZHVyYXRpb25fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZWdtZW50RHVyYXRpb25TZWNvbmRzKSxcbiAgICBzZWdtZW50X3RlbXBsYXRlX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWdtZW50VGVtcGxhdGVGb3JtYXQpLFxuICAgIHN0cmVhbV9zZWxlY3Rpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50RGFzaFBhY2thZ2VTdHJlYW1TZWxlY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbVNlbGVjdGlvbiksXG4gICAgc3VnZ2VzdGVkX3ByZXNlbnRhdGlvbl9kZWxheV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5U2Vjb25kcyksXG4gICAgdXRjX3RpbWluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51dGNUaW1pbmcpLFxuICAgIHV0Y190aW1pbmdfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnV0Y1RpbWluZ1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50SGxzUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2VydGlmaWNhdGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2lkJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3lzdGVtX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN5c3RlbUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzeXN0ZW1faWRzJyk7XG4gIH1cblxuICAvLyB1cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRIbHNQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEhsc1BhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICAgIHJlc291cmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlSWQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN5c3RlbV9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3lzdGVtSWRzKSxcbiAgICB1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRIbHNQYWNrYWdlRW5jcnlwdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnN0YW50X2luaXRpYWxpemF0aW9uX3ZlY3RvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnN0YW50SW5pdGlhbGl6YXRpb25WZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25zdGFudF9pbml0aWFsaXphdGlvbl92ZWN0b3InKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fbWV0aG9kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbk1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fbWV0aG9kJyk7XG4gIH1cblxuICAvLyBrZXlfcm90YXRpb25faW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVJvdGF0aW9uSW50ZXJ2YWxTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgna2V5X3JvdGF0aW9uX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHJlcGVhdF9leHRfeF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBlYXRFeHRYS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGVhdF9leHRfeF9rZXknKTtcbiAgfVxuXG4gIC8vIHNwZWtlX2tleV9wcm92aWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwZWtlS2V5UHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3Bla2Vfa2V5X3Byb3ZpZGVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEhsc1BhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRIbHNQYWNrYWdlRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25zdGFudF9pbml0aWFsaXphdGlvbl92ZWN0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uc3RhbnRJbml0aWFsaXphdGlvblZlY3RvciksXG4gICAgZW5jcnlwdGlvbl9tZXRob2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbk1ldGhvZCksXG4gICAga2V5X3JvdGF0aW9uX2ludGVydmFsX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEua2V5Um90YXRpb25JbnRlcnZhbFNlY29uZHMpLFxuICAgIHJlcGVhdF9leHRfeF9rZXk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcGVhdEV4dFhLZXkpLFxuICAgIHNwZWtlX2tleV9wcm92aWRlcjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRIbHNQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwZWtlS2V5UHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEhsc1BhY2thZ2VTdHJlYW1TZWxlY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9vcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX29yZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50SGxzUGFja2FnZVN0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50SGxzUGFja2FnZVN0cmVhbVNlbGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZpZGVvQml0c1BlclNlY29uZCksXG4gICAgbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5WaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIHN0cmVhbV9vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1PcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50SGxzUGFja2FnZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFkX21hcmtlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZE1hcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZF9tYXJrZXJzJyk7XG4gIH1cblxuICAvLyBhZF90cmlnZ2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkVHJpZ2dlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWRfdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIC8vIGFkc19vbl9kZWxpdmVyeV9yZXN0cmljdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZHNPbkRlbGl2ZXJ5UmVzdHJpY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWRzX29uX2RlbGl2ZXJ5X3Jlc3RyaWN0aW9ucycpO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5jcnlwdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfaWZyYW1lX29ubHlfc3RyZWFtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUlmcmFtZU9ubHlTdHJlYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9pZnJhbWVfb25seV9zdHJlYW0nKTtcbiAgfVxuXG4gIC8vIHBsYXlsaXN0X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGF5bGlzdFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF5bGlzdF90eXBlJyk7XG4gIH1cblxuICAvLyBwbGF5bGlzdF93aW5kb3dfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBsYXlsaXN0V2luZG93U2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BsYXlsaXN0X3dpbmRvd19zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBwcm9ncmFtX2RhdGVfdGltZV9pbnRlcnZhbF9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvZ3JhbURhdGVUaW1lSW50ZXJ2YWxTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VnbWVudER1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZ21lbnRfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gc3RyZWFtX3NlbGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdHJlYW1fc2VsZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdXNlX2F1ZGlvX3JlbmRpdGlvbl9ncm91cCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZUF1ZGlvUmVuZGl0aW9uR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2F1ZGlvX3JlbmRpdGlvbl9ncm91cCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEhsc1BhY2thZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludEhsc1BhY2thZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWRfbWFya2VyczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZE1hcmtlcnMpLFxuICAgIGFkX3RyaWdnZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFkVHJpZ2dlcnMpLFxuICAgIGFkc19vbl9kZWxpdmVyeV9yZXN0cmljdGlvbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRzT25EZWxpdmVyeVJlc3RyaWN0aW9ucyksXG4gICAgZW5jcnlwdGlvbjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRIbHNQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbiksXG4gICAgaW5jbHVkZV9pZnJhbWVfb25seV9zdHJlYW06IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVJZnJhbWVPbmx5U3RyZWFtKSxcbiAgICBwbGF5bGlzdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBsYXlsaXN0VHlwZSksXG4gICAgcGxheWxpc3Rfd2luZG93X3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGxheWxpc3RXaW5kb3dTZWNvbmRzKSxcbiAgICBwcm9ncmFtX2RhdGVfdGltZV9pbnRlcnZhbF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2dyYW1EYXRlVGltZUludGVydmFsU2Vjb25kcyksXG4gICAgc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnREdXJhdGlvblNlY29uZHMpLFxuICAgIHN0cmVhbV9zZWxlY3Rpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50SGxzUGFja2FnZVN0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtU2VsZWN0aW9uKSxcbiAgICB1c2VfYXVkaW9fcmVuZGl0aW9uX2dyb3VwOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VBdWRpb1JlbmRpdGlvbkdyb3VwKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRNc3NQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2FybicpO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfaWQnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzeXN0ZW1faWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3lzdGVtSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N5c3RlbV9pZHMnKTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUFybiksXG4gICAgcmVzb3VyY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VJZCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3lzdGVtX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zeXN0ZW1JZHMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VFbmNyeXB0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc3Bla2Vfa2V5X3Byb3ZpZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3Bla2VLZXlQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGVrZV9rZXlfcHJvdmlkZXInKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZUVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNwZWtlX2tleV9wcm92aWRlcjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnRNc3NQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwZWtlS2V5UHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VTdHJlYW1TZWxlY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9vcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX29yZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZVN0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZVN0cmVhbVNlbGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZpZGVvQml0c1BlclNlY29uZCksXG4gICAgbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5WaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIHN0cmVhbV9vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1PcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYW5pZmVzdF93aW5kb3dfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hbmlmZXN0V2luZG93U2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21hbmlmZXN0X3dpbmRvd19zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzZWdtZW50X2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50RHVyYXRpb25TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fc2VsZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RyZWFtU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0cmVhbV9zZWxlY3Rpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50TXNzUGFja2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0aW9uOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uKSxcbiAgICBtYW5pZmVzdF93aW5kb3dfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYW5pZmVzdFdpbmRvd1NlY29uZHMpLFxuICAgIHNlZ21lbnRfZHVyYXRpb25fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZWdtZW50RHVyYXRpb25TZWNvbmRzKSxcbiAgICBzdHJlYW1fc2VsZWN0aW9uOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VPcmlnaW5FbmRwb2ludE1zc1BhY2thZ2VTdHJlYW1TZWxlY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbVNlbGVjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50VGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9tZWRpYXBhY2thZ2Vfb3JpZ2luX2VuZHBvaW50Lmh0bWwgYXdzY2NfbWVkaWFwYWNrYWdlX29yaWdpbl9lbmRwb2ludH1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlT3JpZ2luRW5kcG9pbnQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX21lZGlhcGFja2FnZV9vcmlnaW5fZW5kcG9pbnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbWVkaWFwYWNrYWdlX29yaWdpbl9lbmRwb2ludC5odG1sIGF3c2NjX21lZGlhcGFja2FnZV9vcmlnaW5fZW5kcG9pbnR9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY01lZGlhcGFja2FnZU9yaWdpbkVuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19tZWRpYXBhY2thZ2Vfb3JpZ2luX2VuZHBvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNoYW5uZWxfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGFubmVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaGFubmVsX2lkJyk7XG4gIH1cblxuICAvLyBjbWFmX3BhY2thZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbWFmUGFja2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbWFmX3BhY2thZ2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkYXNoX3BhY2thZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXNoUGFja2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXNoX3BhY2thZ2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGhsc19wYWNrYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGxzUGFja2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdobHNfcGFja2FnZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBtYW5pZmVzdF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuaWZlc3RfbmFtZScpO1xuICB9XG5cbiAgLy8gbXNzX3BhY2thZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtc3NQYWNrYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21zc19wYWNrYWdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3JpZ2luYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbmF0aW9uJyk7XG4gIH1cblxuICAvLyBzdGFydG92ZXJfd2luZG93X3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFydG92ZXJXaW5kb3dTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RhcnRvdmVyX3dpbmRvd19zZWNvbmRzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGltZV9kZWxheV9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZURlbGF5U2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVfZGVsYXlfc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICAvLyB3aGl0ZWxpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3aGl0ZWxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnd2hpdGVsaXN0Jyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19