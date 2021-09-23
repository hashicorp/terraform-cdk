"use strict";
// https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccMediapackagePackagingConfiguration = exports.dataAwsccMediapackagePackagingConfigurationTagsToTerraform = exports.DataAwsccMediapackagePackagingConfigurationTags = exports.dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform = exports.DataAwsccMediapackagePackagingConfigurationMssPackage = exports.dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform = exports.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests = exports.dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection = exports.dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption = exports.dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform = exports.DataAwsccMediapackagePackagingConfigurationHlsPackage = exports.dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform = exports.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests = exports.dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection = exports.dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption = exports.dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform = exports.DataAwsccMediapackagePackagingConfigurationDashPackage = exports.dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption = exports.dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider = exports.dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform = exports.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests = exports.dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection = exports.dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform = exports.DataAwsccMediapackagePackagingConfigurationCmafPackage = exports.dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform = exports.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests = exports.dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection = exports.dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform = exports.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption = exports.dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform = exports.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider = void 0;
const cdktf = require("cdktf");
class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider = DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption extends cdktf.ComplexComputedList {
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption = DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption;
function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        speke_key_provider: dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform = dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform;
class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection = DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection;
function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform = dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform;
class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests extends cdktf.ComplexComputedList {
    // ad_markers - computed: true, optional: false, required: false
    get adMarkers() {
        return this.getStringAttribute('ad_markers');
    }
    // include_iframe_only_stream - computed: true, optional: false, required: false
    get includeIframeOnlyStream() {
        return this.getBooleanAttribute('include_iframe_only_stream');
    }
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // program_date_time_interval_seconds - computed: true, optional: false, required: false
    get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    // repeat_ext_x_key - computed: true, optional: false, required: false
    get repeatExtXKey() {
        return this.getBooleanAttribute('repeat_ext_x_key');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests = DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests;
function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_markers: cdktf.stringToTerraform(struct.adMarkers),
        include_iframe_only_stream: cdktf.booleanToTerraform(struct.includeIframeOnlyStream),
        manifest_name: cdktf.stringToTerraform(struct.manifestName),
        program_date_time_interval_seconds: cdktf.numberToTerraform(struct.programDateTimeIntervalSeconds),
        repeat_ext_x_key: cdktf.booleanToTerraform(struct.repeatExtXKey),
        stream_selection: dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform = dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform;
class DataAwsccMediapackagePackagingConfigurationCmafPackage extends cdktf.ComplexComputedList {
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // hls_manifests - computed: true, optional: false, required: false
    get hlsManifests() {
        return this.interpolationForAttribute('hls_manifests');
    }
    // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
    get includeEncoderConfigurationInSegments() {
        return this.getBooleanAttribute('include_encoder_configuration_in_segments');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationCmafPackage = DataAwsccMediapackagePackagingConfigurationCmafPackage;
function dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption: dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct.encryption),
        hls_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform)(struct.hlsManifests),
        include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct.includeEncoderConfigurationInSegments),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform = dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform;
class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection = DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection;
function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform = dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform;
class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests extends cdktf.ComplexComputedList {
    // manifest_layout - computed: true, optional: false, required: false
    get manifestLayout() {
        return this.getStringAttribute('manifest_layout');
    }
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // min_buffer_time_seconds - computed: true, optional: false, required: false
    get minBufferTimeSeconds() {
        return this.getNumberAttribute('min_buffer_time_seconds');
    }
    // profile - computed: true, optional: false, required: false
    get profile() {
        return this.getStringAttribute('profile');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests = DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests;
function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_layout: cdktf.stringToTerraform(struct.manifestLayout),
        manifest_name: cdktf.stringToTerraform(struct.manifestName),
        min_buffer_time_seconds: cdktf.numberToTerraform(struct.minBufferTimeSeconds),
        profile: cdktf.stringToTerraform(struct.profile),
        stream_selection: dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform = dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform;
class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider = DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackagePackagingConfigurationDashPackageEncryption extends cdktf.ComplexComputedList {
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption = DataAwsccMediapackagePackagingConfigurationDashPackageEncryption;
function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        speke_key_provider: dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform = dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform;
class DataAwsccMediapackagePackagingConfigurationDashPackage extends cdktf.ComplexComputedList {
    // dash_manifests - computed: true, optional: false, required: false
    get dashManifests() {
        return this.interpolationForAttribute('dash_manifests');
    }
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
    get includeEncoderConfigurationInSegments() {
        return this.getBooleanAttribute('include_encoder_configuration_in_segments');
    }
    // period_triggers - computed: true, optional: false, required: false
    get periodTriggers() {
        return this.getListAttribute('period_triggers');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    // segment_template_format - computed: true, optional: false, required: false
    get segmentTemplateFormat() {
        return this.getStringAttribute('segment_template_format');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationDashPackage = DataAwsccMediapackagePackagingConfigurationDashPackage;
function dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dash_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform)(struct.dashManifests),
        encryption: dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct.encryption),
        include_encoder_configuration_in_segments: cdktf.booleanToTerraform(struct.includeEncoderConfigurationInSegments),
        period_triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.periodTriggers),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        segment_template_format: cdktf.stringToTerraform(struct.segmentTemplateFormat),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform = dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform;
class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider = DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption extends cdktf.ComplexComputedList {
    // constant_initialization_vector - computed: true, optional: false, required: false
    get constantInitializationVector() {
        return this.getStringAttribute('constant_initialization_vector');
    }
    // encryption_method - computed: true, optional: false, required: false
    get encryptionMethod() {
        return this.getStringAttribute('encryption_method');
    }
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption = DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption;
function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        constant_initialization_vector: cdktf.stringToTerraform(struct.constantInitializationVector),
        encryption_method: cdktf.stringToTerraform(struct.encryptionMethod),
        speke_key_provider: dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform = dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform;
class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection = DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection;
function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform = dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform;
class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests extends cdktf.ComplexComputedList {
    // ad_markers - computed: true, optional: false, required: false
    get adMarkers() {
        return this.getStringAttribute('ad_markers');
    }
    // include_iframe_only_stream - computed: true, optional: false, required: false
    get includeIframeOnlyStream() {
        return this.getBooleanAttribute('include_iframe_only_stream');
    }
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // program_date_time_interval_seconds - computed: true, optional: false, required: false
    get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    // repeat_ext_x_key - computed: true, optional: false, required: false
    get repeatExtXKey() {
        return this.getBooleanAttribute('repeat_ext_x_key');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests = DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests;
function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_markers: cdktf.stringToTerraform(struct.adMarkers),
        include_iframe_only_stream: cdktf.booleanToTerraform(struct.includeIframeOnlyStream),
        manifest_name: cdktf.stringToTerraform(struct.manifestName),
        program_date_time_interval_seconds: cdktf.numberToTerraform(struct.programDateTimeIntervalSeconds),
        repeat_ext_x_key: cdktf.booleanToTerraform(struct.repeatExtXKey),
        stream_selection: dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform = dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform;
class DataAwsccMediapackagePackagingConfigurationHlsPackage extends cdktf.ComplexComputedList {
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
    // use_audio_rendition_group - computed: true, optional: false, required: false
    get useAudioRenditionGroup() {
        return this.getBooleanAttribute('use_audio_rendition_group');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationHlsPackage = DataAwsccMediapackagePackagingConfigurationHlsPackage;
function dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption: dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct.encryption),
        hls_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform)(struct.hlsManifests),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
        use_audio_rendition_group: cdktf.booleanToTerraform(struct.useAudioRenditionGroup),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform = dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform;
class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider = DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider;
function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        system_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.systemIds),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform = dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform;
class DataAwsccMediapackagePackagingConfigurationMssPackageEncryption extends cdktf.ComplexComputedList {
    // speke_key_provider - computed: true, optional: false, required: false
    get spekeKeyProvider() {
        return this.interpolationForAttribute('speke_key_provider');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption = DataAwsccMediapackagePackagingConfigurationMssPackageEncryption;
function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        speke_key_provider: dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct.spekeKeyProvider),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform = dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform;
class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection extends cdktf.ComplexComputedList {
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
exports.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection = DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection;
function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_video_bits_per_second: cdktf.numberToTerraform(struct.maxVideoBitsPerSecond),
        min_video_bits_per_second: cdktf.numberToTerraform(struct.minVideoBitsPerSecond),
        stream_order: cdktf.stringToTerraform(struct.streamOrder),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform = dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform;
class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests extends cdktf.ComplexComputedList {
    // manifest_name - computed: true, optional: false, required: false
    get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    // stream_selection - computed: true, optional: false, required: false
    get streamSelection() {
        return this.interpolationForAttribute('stream_selection');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests = DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests;
function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_name: cdktf.stringToTerraform(struct.manifestName),
        stream_selection: dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct.streamSelection),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform = dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform;
class DataAwsccMediapackagePackagingConfigurationMssPackage extends cdktf.ComplexComputedList {
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // mss_manifests - computed: true, optional: false, required: false
    get mssManifests() {
        return this.interpolationForAttribute('mss_manifests');
    }
    // segment_duration_seconds - computed: true, optional: false, required: false
    get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationMssPackage = DataAwsccMediapackagePackagingConfigurationMssPackage;
function dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption: dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct.encryption),
        mss_manifests: cdktf.listMapper(dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform)(struct.mssManifests),
        segment_duration_seconds: cdktf.numberToTerraform(struct.segmentDurationSeconds),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform = dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform;
class DataAwsccMediapackagePackagingConfigurationTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccMediapackagePackagingConfigurationTags = DataAwsccMediapackagePackagingConfigurationTags;
function dataAwsccMediapackagePackagingConfigurationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccMediapackagePackagingConfigurationTagsToTerraform = dataAwsccMediapackagePackagingConfigurationTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration}
*/
class DataAwsccMediapackagePackagingConfiguration extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cmaf_package - computed: true, optional: false, required: false
    get cmafPackage() {
        return this.interpolationForAttribute('cmaf_package');
    }
    // dash_package - computed: true, optional: false, required: false
    get dashPackage() {
        return this.interpolationForAttribute('dash_package');
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
    // mss_package - computed: true, optional: false, required: false
    get mssPackage() {
        return this.interpolationForAttribute('mss_package');
    }
    // packaging_group_id - computed: true, optional: false, required: false
    get packagingGroupId() {
        return this.getStringAttribute('packaging_group_id');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
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
exports.DataAwsccMediapackagePackagingConfiguration = DataAwsccMediapackagePackagingConfiguration;
// =================
// STATIC PROPERTIES
// =================
DataAwsccMediapackagePackagingConfiguration.tfResourceType = "awscc_mediapackage_packaging_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1tZWRpYXBhY2thZ2UtcGFja2FnaW5nLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLW1lZGlhcGFja2FnZS1wYWNrYWdpbmctY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEZBQTRGO0FBQzVGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLGdGQUFpRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0gsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQWhCRCw0S0FnQkM7QUFFRCxTQUFnQiwyRkFBMkYsQ0FBQyxNQUF5RjtJQUNuTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hFLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVBELGtNQU9DO0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdHLHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQU5ELDRJQU1DO0FBRUQsU0FBZ0IsMkVBQTJFLENBQUMsTUFBeUU7SUFDbkssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxrQkFBa0IsRUFBRSwyRkFBMkYsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDMUksQ0FBQTtBQUNILENBQUM7QUFMRCxrS0FLQztBQUVELE1BQWEsaUZBQWtGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5SCwrRUFBK0U7SUFDL0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBaEJELDhLQWdCQztBQUVELFNBQWdCLDRGQUE0RixDQUFDLE1BQTBGO0lBQ3JNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2pGLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVBELG9NQU9DO0FBRUQsTUFBYSxrRUFBbUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRS9HLGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGdGQUFnRjtJQUNoRixJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3RkFBd0Y7SUFDeEYsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzRUFBc0U7SUFDdEUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBL0JELGdKQStCQztBQUVELFNBQWdCLDZFQUE2RSxDQUFDLE1BQTJFO0lBQ3ZLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELDBCQUEwQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDckYsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakUsZ0JBQWdCLEVBQUUsNEZBQTRGLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUN4SSxDQUFBO0FBQ0gsQ0FBQztBQVZELHNLQVVDO0FBRUQsTUFBYSxzREFBdUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5HLGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDaEUsQ0FBQztJQUVELCtGQUErRjtJQUMvRixJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFyQkQsd0hBcUJDO0FBRUQsU0FBZ0IsaUVBQWlFLENBQUMsTUFBK0Q7SUFDL0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsMkVBQTJFLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUMzRyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDcEkseUNBQXlDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxxQ0FBcUMsQ0FBQztRQUNsSCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO0tBQ2xGLENBQUE7QUFDSCxDQUFDO0FBUkQsOElBUUM7QUFFRCxNQUFhLGtGQUFtRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFL0gsK0VBQStFO0lBQy9FLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELCtFQUErRTtJQUMvRSxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxrRUFBa0U7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQWhCRCxnTEFnQkM7QUFFRCxTQUFnQiw2RkFBNkYsQ0FBQyxNQUEyRjtJQUN2TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDakYseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRixZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFQRCxzTUFPQztBQUVELE1BQWEsbUVBQW9FLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVoSCxxRUFBcUU7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzRUFBc0U7SUFDdEUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBMUJELGtKQTBCQztBQUVELFNBQWdCLDhFQUE4RSxDQUFDLE1BQTRFO0lBQ3pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzlFLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxnQkFBZ0IsRUFBRSw2RkFBNkYsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO0tBQ3pJLENBQUE7QUFDSCxDQUFDO0FBVEQsd0tBU0M7QUFFRCxNQUFhLGdGQUFpRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0gsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQWhCRCw0S0FnQkM7QUFFRCxTQUFnQiwyRkFBMkYsQ0FBQyxNQUF5RjtJQUNuTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hFLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVBELGtNQU9DO0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdHLHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQU5ELDRJQU1DO0FBRUQsU0FBZ0IsMkVBQTJFLENBQUMsTUFBeUU7SUFDbkssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxrQkFBa0IsRUFBRSwyRkFBMkYsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDMUksQ0FBQTtBQUNILENBQUM7QUFMRCxrS0FLQztBQUVELE1BQWEsc0RBQXVELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRyxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQztJQUVELCtGQUErRjtJQUMvRixJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7QUEvQkQsd0hBK0JDO0FBRUQsU0FBZ0IsaUVBQWlFLENBQUMsTUFBK0Q7SUFDL0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdkksVUFBVSxFQUFFLDJFQUEyRSxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDM0cseUNBQXlDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxxQ0FBcUMsQ0FBQztRQUNsSCxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2xGLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDakYsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUNoRixDQUFBO0FBQ0gsQ0FBQztBQVZELDhJQVVDO0FBRUQsTUFBYSwrRUFBZ0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVILDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFoQkQsMEtBZ0JDO0FBRUQsU0FBZ0IsMEZBQTBGLENBQUMsTUFBd0Y7SUFDak0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFQRCxnTUFPQztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1RyxvRkFBb0Y7SUFDcEYsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQWhCRCwwSUFnQkM7QUFFRCxTQUFnQiwwRUFBMEUsQ0FBQyxNQUF3RTtJQUNqSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsNEJBQTRCLENBQUM7UUFDN0YsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRSxrQkFBa0IsRUFBRSwwRkFBMEYsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDekksQ0FBQTtBQUNILENBQUM7QUFQRCxnS0FPQztBQUVELE1BQWEsZ0ZBQWlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3SCwrRUFBK0U7SUFDL0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBaEJELDRLQWdCQztBQUVELFNBQWdCLDJGQUEyRixDQUFDLE1BQXlGO0lBQ25NLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2pGLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVBELGtNQU9DO0FBRUQsTUFBYSxpRUFBa0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlHLGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGdGQUFnRjtJQUNoRixJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3RkFBd0Y7SUFDeEYsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzRUFBc0U7SUFDdEUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBL0JELDhJQStCQztBQUVELFNBQWdCLDRFQUE0RSxDQUFDLE1BQTBFO0lBQ3JLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELDBCQUEwQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDckYsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakUsZ0JBQWdCLEVBQUUsMkZBQTJGLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUN2SSxDQUFBO0FBQ0gsQ0FBQztBQVZELG9LQVVDO0FBRUQsTUFBYSxxREFBc0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxHLGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDaEUsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwrRUFBK0U7SUFDL0UsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFyQkQsc0hBcUJDO0FBRUQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBOEQ7SUFDN0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsMEVBQTBFLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUMxRyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkksd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO0tBQ3BGLENBQUE7QUFDSCxDQUFDO0FBUkQsNElBUUM7QUFFRCxNQUFhLCtFQUFnRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFNUgsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQWhCRCwwS0FnQkM7QUFFRCxTQUFnQiwwRkFBMEYsQ0FBQyxNQUF3RjtJQUNqTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hFLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVBELGdNQU9DO0FBRUQsTUFBYSwrREFBZ0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVHLHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQU5ELDBJQU1DO0FBRUQsU0FBZ0IsMEVBQTBFLENBQUMsTUFBd0U7SUFDakssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxrQkFBa0IsRUFBRSwwRkFBMEYsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDekksQ0FBQTtBQUNILENBQUM7QUFMRCxnS0FLQztBQUVELE1BQWEsZ0ZBQWlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3SCwrRUFBK0U7SUFDL0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBaEJELDRLQWdCQztBQUVELFNBQWdCLDJGQUEyRixDQUFDLE1BQXlGO0lBQ25NLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2pGLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVBELGtNQU9DO0FBRUQsTUFBYSxpRUFBa0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlHLG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQVEsQ0FBQztJQUNuRSxDQUFDO0NBQ0Y7QUFYRCw4SUFXQztBQUVELFNBQWdCLDRFQUE0RSxDQUFDLE1BQTBFO0lBQ3JLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGdCQUFnQixFQUFFLDJGQUEyRixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDdkksQ0FBQTtBQUNILENBQUM7QUFORCxvS0FNQztBQUVELE1BQWEscURBQXNELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRyxnRUFBZ0U7SUFDaEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQzdELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFoQkQsc0hBZ0JDO0FBRUQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBOEQ7SUFDN0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsMEVBQTBFLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUMxRyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkksd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztLQUNsRixDQUFBO0FBQ0gsQ0FBQztBQVBELDRJQU9DO0FBRUQsTUFBYSwrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVGLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQVhELDBHQVdDO0FBRUQsU0FBZ0IsMERBQTBELENBQUMsTUFBd0Q7SUFDakksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBTkQsZ0lBTUM7QUFHRDs7RUFFRTtBQUNGLE1BQWEsMkNBQTRDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU94RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF5RDtRQUN4RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDRDQUE0QztZQUNuRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQVEsQ0FBQztJQUM5RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBNUZILGtHQTZGQztBQTNGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDBEQUFjLEdBQVcsNENBQTRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9tZWRpYXBhY2thZ2VfcGFja2FnaW5nX2NvbmZpZ3VyYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9tZWRpYXBhY2thZ2VfcGFja2FnaW5nX2NvbmZpZ3VyYXRpb24uaHRtbCNpZCBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHN5c3RlbV9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzeXN0ZW1JZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3lzdGVtX2lkcycpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkNtYWZQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3lzdGVtX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zeXN0ZW1JZHMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ21hZlBhY2thZ2VFbmNyeXB0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc3Bla2Vfa2V5X3Byb3ZpZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3Bla2VLZXlQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGVrZV9rZXlfcHJvdmlkZXInKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ21hZlBhY2thZ2VFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNwZWtlX2tleV9wcm92aWRlcjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkNtYWZQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwZWtlS2V5UHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ21hZlBhY2thZ2VIbHNNYW5pZmVzdHNTdHJlYW1TZWxlY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9vcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX29yZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUhsc01hbmlmZXN0c1N0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUhsc01hbmlmZXN0c1N0cmVhbVNlbGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZpZGVvQml0c1BlclNlY29uZCksXG4gICAgbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5WaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIHN0cmVhbV9vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1PcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUhsc01hbmlmZXN0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFkX21hcmtlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZE1hcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZF9tYXJrZXJzJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2lmcmFtZV9vbmx5X3N0cmVhbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGVJZnJhbWVPbmx5U3RyZWFtKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfaWZyYW1lX29ubHlfc3RyZWFtJyk7XG4gIH1cblxuICAvLyBtYW5pZmVzdF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuaWZlc3RfbmFtZScpO1xuICB9XG5cbiAgLy8gcHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2dyYW1EYXRlVGltZUludGVydmFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Byb2dyYW1fZGF0ZV90aW1lX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHJlcGVhdF9leHRfeF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBlYXRFeHRYS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGVhdF9leHRfeF9rZXknKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9zZWxlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1TZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RyZWFtX3NlbGVjdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkNtYWZQYWNrYWdlSGxzTWFuaWZlc3RzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkNtYWZQYWNrYWdlSGxzTWFuaWZlc3RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkX21hcmtlcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRNYXJrZXJzKSxcbiAgICBpbmNsdWRlX2lmcmFtZV9vbmx5X3N0cmVhbTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZUlmcmFtZU9ubHlTdHJlYW0pLFxuICAgIG1hbmlmZXN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuaWZlc3ROYW1lKSxcbiAgICBwcm9ncmFtX2RhdGVfdGltZV9pbnRlcnZhbF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2dyYW1EYXRlVGltZUludGVydmFsU2Vjb25kcyksXG4gICAgcmVwZWF0X2V4dF94X2tleTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVwZWF0RXh0WEtleSksXG4gICAgc3RyZWFtX3NlbGVjdGlvbjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkNtYWZQYWNrYWdlSGxzTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1TZWxlY3Rpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ21hZlBhY2thZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaGxzX21hbmlmZXN0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhsc01hbmlmZXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdobHNfbWFuaWZlc3RzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW5jbHVkZV9lbmNvZGVyX2NvbmZpZ3VyYXRpb25faW5fc2VnbWVudHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdWRlRW5jb2RlckNvbmZpZ3VyYXRpb25JblNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfZW5jb2Rlcl9jb25maWd1cmF0aW9uX2luX3NlZ21lbnRzJyk7XG4gIH1cblxuICAvLyBzZWdtZW50X2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50RHVyYXRpb25TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmNyeXB0aW9uOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ21hZlBhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uKSxcbiAgICBobHNfbWFuaWZlc3RzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25DbWFmUGFja2FnZUhsc01hbmlmZXN0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhsc01hbmlmZXN0cyksXG4gICAgaW5jbHVkZV9lbmNvZGVyX2NvbmZpZ3VyYXRpb25faW5fc2VnbWVudHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVFbmNvZGVyQ29uZmlndXJhdGlvbkluU2VnbWVudHMpLFxuICAgIHNlZ21lbnRfZHVyYXRpb25fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZWdtZW50RHVyYXRpb25TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRGFzaE1hbmlmZXN0c1N0cmVhbVNlbGVjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1heF92aWRlb19iaXRzX3Blcl9zZWNvbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhWaWRlb0JpdHNQZXJTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kJyk7XG4gIH1cblxuICAvLyBtaW5fdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluVmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gc3RyZWFtX29yZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RyZWFtT3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fb3JkZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRGFzaE1hbmlmZXN0c1N0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25EYXNoUGFja2FnZURhc2hNYW5pZmVzdHNTdHJlYW1TZWxlY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhWaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIG1pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluVmlkZW9CaXRzUGVyU2Vjb25kKSxcbiAgICBzdHJlYW1fb3JkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtT3JkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VEYXNoTWFuaWZlc3RzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWFuaWZlc3RfbGF5b3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3RMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW5pZmVzdF9sYXlvdXQnKTtcbiAgfVxuXG4gIC8vIG1hbmlmZXN0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5pZmVzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW5pZmVzdF9uYW1lJyk7XG4gIH1cblxuICAvLyBtaW5fYnVmZmVyX3RpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbkJ1ZmZlclRpbWVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2J1ZmZlcl90aW1lX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHByb2ZpbGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZmlsZScpO1xuICB9XG5cbiAgLy8gc3RyZWFtX3NlbGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdHJlYW1fc2VsZWN0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VEYXNoTWFuaWZlc3RzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRGFzaE1hbmlmZXN0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYW5pZmVzdF9sYXlvdXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuaWZlc3RMYXlvdXQpLFxuICAgIG1hbmlmZXN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuaWZlc3ROYW1lKSxcbiAgICBtaW5fYnVmZmVyX3RpbWVfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5CdWZmZXJUaW1lU2Vjb25kcyksXG4gICAgcHJvZmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9maWxlKSxcbiAgICBzdHJlYW1fc2VsZWN0aW9uOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VEYXNoTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1TZWxlY3Rpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzeXN0ZW1faWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3lzdGVtSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N5c3RlbV9pZHMnKTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25EYXNoUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN5c3RlbV9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3lzdGVtSWRzKSxcbiAgICB1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRW5jcnlwdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNwZWtlX2tleV9wcm92aWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwZWtlS2V5UHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3Bla2Vfa2V5X3Byb3ZpZGVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzcGVrZV9rZXlfcHJvdmlkZXI6IGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25EYXNoUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5zcGVrZUtleVByb3ZpZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGFzaF9tYW5pZmVzdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXNoTWFuaWZlc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rhc2hfbWFuaWZlc3RzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5jcnlwdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfZW5jb2Rlcl9jb25maWd1cmF0aW9uX2luX3NlZ21lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUVuY29kZXJDb25maWd1cmF0aW9uSW5TZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2VuY29kZXJfY29uZmlndXJhdGlvbl9pbl9zZWdtZW50cycpO1xuICB9XG5cbiAgLy8gcGVyaW9kX3RyaWdnZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVyaW9kVHJpZ2dlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncGVyaW9kX3RyaWdnZXJzJyk7XG4gIH1cblxuICAvLyBzZWdtZW50X2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50RHVyYXRpb25TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzZWdtZW50X3RlbXBsYXRlX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlZ21lbnRUZW1wbGF0ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlZ21lbnRfdGVtcGxhdGVfZm9ybWF0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25EYXNoUGFja2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25EYXNoUGFja2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXNoX21hbmlmZXN0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uRGFzaFBhY2thZ2VEYXNoTWFuaWZlc3RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGFzaE1hbmlmZXN0cyksXG4gICAgZW5jcnlwdGlvbjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkRhc2hQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbiksXG4gICAgaW5jbHVkZV9lbmNvZGVyX2NvbmZpZ3VyYXRpb25faW5fc2VnbWVudHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVFbmNvZGVyQ29uZmlndXJhdGlvbkluU2VnbWVudHMpLFxuICAgIHBlcmlvZF90cmlnZ2VyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wZXJpb2RUcmlnZ2VycyksXG4gICAgc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnREdXJhdGlvblNlY29uZHMpLFxuICAgIHNlZ21lbnRfdGVtcGxhdGVfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnRUZW1wbGF0ZUZvcm1hdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3lzdGVtX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN5c3RlbUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzeXN0ZW1faWRzJyk7XG4gIH1cblxuICAvLyB1cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3lzdGVtX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zeXN0ZW1JZHMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uSGxzUGFja2FnZUVuY3J5cHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25zdGFudF9pbml0aWFsaXphdGlvbl92ZWN0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zdGFudEluaXRpYWxpemF0aW9uVmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uc3RhbnRfaW5pdGlhbGl6YXRpb25fdmVjdG9yJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX21ldGhvZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25NZXRob2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNyeXB0aW9uX21ldGhvZCcpO1xuICB9XG5cbiAgLy8gc3Bla2Vfa2V5X3Byb3ZpZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3Bla2VLZXlQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGVrZV9rZXlfcHJvdmlkZXInKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25zdGFudF9pbml0aWFsaXphdGlvbl92ZWN0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uc3RhbnRJbml0aWFsaXphdGlvblZlY3RvciksXG4gICAgZW5jcnlwdGlvbl9tZXRob2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbk1ldGhvZCksXG4gICAgc3Bla2Vfa2V5X3Byb3ZpZGVyOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uSGxzUGFja2FnZUVuY3J5cHRpb25TcGVrZUtleVByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5zcGVrZUtleVByb3ZpZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2VIbHNNYW5pZmVzdHNTdHJlYW1TZWxlY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfdmlkZW9fYml0c19wZXJfc2Vjb25kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VmlkZW9CaXRzUGVyU2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCcpO1xuICB9XG5cbiAgLy8gbWluX3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9vcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX29yZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlSGxzTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2VIbHNNYW5pZmVzdHNTdHJlYW1TZWxlY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhWaWRlb0JpdHNQZXJTZWNvbmQpLFxuICAgIG1pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluVmlkZW9CaXRzUGVyU2Vjb25kKSxcbiAgICBzdHJlYW1fb3JkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtT3JkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uSGxzUGFja2FnZUhsc01hbmlmZXN0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFkX21hcmtlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZE1hcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZF9tYXJrZXJzJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2lmcmFtZV9vbmx5X3N0cmVhbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGVJZnJhbWVPbmx5U3RyZWFtKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfaWZyYW1lX29ubHlfc3RyZWFtJyk7XG4gIH1cblxuICAvLyBtYW5pZmVzdF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuaWZlc3RfbmFtZScpO1xuICB9XG5cbiAgLy8gcHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2dyYW1EYXRlVGltZUludGVydmFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Byb2dyYW1fZGF0ZV90aW1lX2ludGVydmFsX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHJlcGVhdF9leHRfeF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBlYXRFeHRYS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGVhdF9leHRfeF9rZXknKTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9zZWxlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1TZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RyZWFtX3NlbGVjdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2VIbHNNYW5pZmVzdHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uSGxzUGFja2FnZUhsc01hbmlmZXN0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZF9tYXJrZXJzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkTWFya2VycyksXG4gICAgaW5jbHVkZV9pZnJhbWVfb25seV9zdHJlYW06IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVJZnJhbWVPbmx5U3RyZWFtKSxcbiAgICBtYW5pZmVzdF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0TmFtZSksXG4gICAgcHJvZ3JhbV9kYXRlX3RpbWVfaW50ZXJ2YWxfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9ncmFtRGF0ZVRpbWVJbnRlcnZhbFNlY29uZHMpLFxuICAgIHJlcGVhdF9leHRfeF9rZXk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcGVhdEV4dFhLZXkpLFxuICAgIHN0cmVhbV9zZWxlY3Rpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlSGxzTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJlYW1TZWxlY3Rpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uSGxzUGFja2FnZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBobHNfbWFuaWZlc3RzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGxzTWFuaWZlc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2hsc19tYW5pZmVzdHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWdtZW50X2R1cmF0aW9uX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWdtZW50RHVyYXRpb25TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyB1c2VfYXVkaW9fcmVuZGl0aW9uX2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlQXVkaW9SZW5kaXRpb25Hcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfYXVkaW9fcmVuZGl0aW9uX2dyb3VwJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5jcnlwdGlvbjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbkhsc1BhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uKSxcbiAgICBobHNfbWFuaWZlc3RzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25IbHNQYWNrYWdlSGxzTWFuaWZlc3RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGxzTWFuaWZlc3RzKSxcbiAgICBzZWdtZW50X2R1cmF0aW9uX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2VnbWVudER1cmF0aW9uU2Vjb25kcyksXG4gICAgdXNlX2F1ZGlvX3JlbmRpdGlvbl9ncm91cDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlQXVkaW9SZW5kaXRpb25Hcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3lzdGVtX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN5c3RlbUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzeXN0ZW1faWRzJyk7XG4gIH1cblxuICAvLyB1cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlRW5jcnlwdGlvblNwZWtlS2V5UHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3lzdGVtX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zeXN0ZW1JZHMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZUVuY3J5cHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzcGVrZV9rZXlfcHJvdmlkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcGVrZUtleVByb3ZpZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwZWtlX2tleV9wcm92aWRlcicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2VFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2VFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNwZWtlX2tleV9wcm92aWRlcjogZGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2VFbmNyeXB0aW9uU3Bla2VLZXlQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdCEuc3Bla2VLZXlQcm92aWRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlTXNzTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWF4X3ZpZGVvX2JpdHNfcGVyX3NlY29uZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFZpZGVvQml0c1BlclNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF92aWRlb19iaXRzX3Blcl9zZWNvbmQnKTtcbiAgfVxuXG4gIC8vIG1pbl92aWRlb19iaXRzX3Blcl9zZWNvbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5WaWRlb0JpdHNQZXJTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fdmlkZW9fYml0c19wZXJfc2Vjb25kJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fb3JkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1PcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0cmVhbV9vcmRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZU1zc01hbmlmZXN0c1N0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlTXNzTWFuaWZlc3RzU3RyZWFtU2VsZWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF92aWRlb19iaXRzX3Blcl9zZWNvbmQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4VmlkZW9CaXRzUGVyU2Vjb25kKSxcbiAgICBtaW5fdmlkZW9fYml0c19wZXJfc2Vjb25kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblZpZGVvQml0c1BlclNlY29uZCksXG4gICAgc3RyZWFtX29yZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbU9yZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2VNc3NNYW5pZmVzdHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYW5pZmVzdF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFuaWZlc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuaWZlc3RfbmFtZScpO1xuICB9XG5cbiAgLy8gc3RyZWFtX3NlbGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdHJlYW1fc2VsZWN0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZU1zc01hbmlmZXN0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlTXNzTWFuaWZlc3RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hbmlmZXN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuaWZlc3ROYW1lKSxcbiAgICBzdHJlYW1fc2VsZWN0aW9uOiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZU1zc01hbmlmZXN0c1N0cmVhbVNlbGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtU2VsZWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvbk1zc1BhY2thZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbXNzX21hbmlmZXN0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1zc01hbmlmZXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtc3NfbWFuaWZlc3RzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VnbWVudER1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZ21lbnRfZHVyYXRpb25fc2Vjb25kcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuY3J5cHRpb246IGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Nc3NQYWNrYWdlRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbiksXG4gICAgbXNzX21hbmlmZXN0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uTXNzUGFja2FnZU1zc01hbmlmZXN0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1zc01hbmlmZXN0cyksXG4gICAgc2VnbWVudF9kdXJhdGlvbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZ21lbnREdXJhdGlvblNlY29uZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25UYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTWVkaWFwYWNrYWdlUGFja2FnaW5nQ29uZmlndXJhdGlvblRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbWVkaWFwYWNrYWdlX3BhY2thZ2luZ19jb25maWd1cmF0aW9uLmh0bWwgYXdzY2NfbWVkaWFwYWNrYWdlX3BhY2thZ2luZ19jb25maWd1cmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19tZWRpYXBhY2thZ2VfcGFja2FnaW5nX2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbWVkaWFwYWNrYWdlX3BhY2thZ2luZ19jb25maWd1cmF0aW9uLmh0bWwgYXdzY2NfbWVkaWFwYWNrYWdlX3BhY2thZ2luZ19jb25maWd1cmF0aW9ufSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NNZWRpYXBhY2thZ2VQYWNrYWdpbmdDb25maWd1cmF0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY01lZGlhcGFja2FnZVBhY2thZ2luZ0NvbmZpZ3VyYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX21lZGlhcGFja2FnZV9wYWNrYWdpbmdfY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNtYWZfcGFja2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNtYWZQYWNrYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NtYWZfcGFja2FnZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhc2hfcGFja2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhc2hQYWNrYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rhc2hfcGFja2FnZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGhsc19wYWNrYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGxzUGFja2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdobHNfcGFja2FnZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBtc3NfcGFja2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1zc1BhY2thZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbXNzX3BhY2thZ2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwYWNrYWdpbmdfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYWNrYWdpbmdHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFja2FnaW5nX2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==