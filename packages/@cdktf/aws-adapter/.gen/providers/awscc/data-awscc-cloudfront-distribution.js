"use strict";
// https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOrigins = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroups = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria = exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes = exports.dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigLogging = exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior = exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations = exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations = exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues = exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies = exports.dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin = exports.dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses = exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors = exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations = exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations = exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues = exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies = void 0;
exports.DataAwsccCloudfrontDistribution = exports.dataAwsccCloudfrontDistributionTagsToTerraform = exports.DataAwsccCloudfrontDistributionTags = exports.dataAwsccCloudfrontDistributionDistributionConfigToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfig = exports.dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate = exports.dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigS3Origin = exports.dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform = exports.DataAwsccCloudfrontDistributionDistributionConfigRestrictions = void 0;
const cdktf = require("cdktf");
class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies extends cdktf.ComplexComputedList {
    // forward - computed: true, optional: false, required: false
    get forward() {
        return this.getStringAttribute('forward');
    }
    // whitelisted_names - computed: true, optional: false, required: false
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies = DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies;
function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues extends cdktf.ComplexComputedList {
    // cookies - computed: true, optional: false, required: false
    get cookies() {
        return this.interpolationForAttribute('cookies');
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.getListAttribute('headers');
    }
    // query_string - computed: true, optional: false, required: false
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    // query_string_cache_keys - computed: true, optional: false, required: false
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues = DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues;
function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cookies: dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct.cookies),
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations extends cdktf.ComplexComputedList {
    // event_type - computed: true, optional: false, required: false
    get eventType() {
        return this.getStringAttribute('event_type');
    }
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations = DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations;
function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations extends cdktf.ComplexComputedList {
    // event_type - computed: true, optional: false, required: false
    get eventType() {
        return this.getStringAttribute('event_type');
    }
    // include_body - computed: true, optional: false, required: false
    get includeBody() {
        return this.getBooleanAttribute('include_body');
    }
    // lambda_function_arn - computed: true, optional: false, required: false
    get lambdaFunctionArn() {
        return this.getStringAttribute('lambda_function_arn');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations = DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations;
function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_function_arn: cdktf.stringToTerraform(struct.lambdaFunctionArn),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors extends cdktf.ComplexComputedList {
    // allowed_methods - computed: true, optional: false, required: false
    get allowedMethods() {
        return this.getListAttribute('allowed_methods');
    }
    // cache_policy_id - computed: true, optional: false, required: false
    get cachePolicyId() {
        return this.getStringAttribute('cache_policy_id');
    }
    // cached_methods - computed: true, optional: false, required: false
    get cachedMethods() {
        return this.getListAttribute('cached_methods');
    }
    // compress - computed: true, optional: false, required: false
    get compress() {
        return this.getBooleanAttribute('compress');
    }
    // default_ttl - computed: true, optional: false, required: false
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    // field_level_encryption_id - computed: true, optional: false, required: false
    get fieldLevelEncryptionId() {
        return this.getStringAttribute('field_level_encryption_id');
    }
    // forwarded_values - computed: true, optional: false, required: false
    get forwardedValues() {
        return this.interpolationForAttribute('forwarded_values');
    }
    // function_associations - computed: true, optional: false, required: false
    get functionAssociations() {
        return this.interpolationForAttribute('function_associations');
    }
    // lambda_function_associations - computed: true, optional: false, required: false
    get lambdaFunctionAssociations() {
        return this.interpolationForAttribute('lambda_function_associations');
    }
    // max_ttl - computed: true, optional: false, required: false
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    // min_ttl - computed: true, optional: false, required: false
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    // origin_request_policy_id - computed: true, optional: false, required: false
    get originRequestPolicyId() {
        return this.getStringAttribute('origin_request_policy_id');
    }
    // path_pattern - computed: true, optional: false, required: false
    get pathPattern() {
        return this.getStringAttribute('path_pattern');
    }
    // realtime_log_config_arn - computed: true, optional: false, required: false
    get realtimeLogConfigArn() {
        return this.getStringAttribute('realtime_log_config_arn');
    }
    // smooth_streaming - computed: true, optional: false, required: false
    get smoothStreaming() {
        return this.getBooleanAttribute('smooth_streaming');
    }
    // target_origin_id - computed: true, optional: false, required: false
    get targetOriginId() {
        return this.getStringAttribute('target_origin_id');
    }
    // trusted_key_groups - computed: true, optional: false, required: false
    get trustedKeyGroups() {
        return this.getListAttribute('trusted_key_groups');
    }
    // trusted_signers - computed: true, optional: false, required: false
    get trustedSigners() {
        return this.getListAttribute('trusted_signers');
    }
    // viewer_protocol_policy - computed: true, optional: false, required: false
    get viewerProtocolPolicy() {
        return this.getStringAttribute('viewer_protocol_policy');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors = DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors;
function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        forwarded_values: dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct.forwardedValues),
        function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform)(struct.functionAssociations),
        lambda_function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform)(struct.lambdaFunctionAssociations),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        path_pattern: cdktf.stringToTerraform(struct.pathPattern),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses extends cdktf.ComplexComputedList {
    // error_caching_min_ttl - computed: true, optional: false, required: false
    get errorCachingMinTtl() {
        return this.getNumberAttribute('error_caching_min_ttl');
    }
    // error_code - computed: true, optional: false, required: false
    get errorCode() {
        return this.getNumberAttribute('error_code');
    }
    // response_code - computed: true, optional: false, required: false
    get responseCode() {
        return this.getNumberAttribute('response_code');
    }
    // response_page_path - computed: true, optional: false, required: false
    get responsePagePath() {
        return this.getStringAttribute('response_page_path');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses = DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses;
function dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_caching_min_ttl: cdktf.numberToTerraform(struct.errorCachingMinTtl),
        error_code: cdktf.numberToTerraform(struct.errorCode),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_page_path: cdktf.stringToTerraform(struct.responsePagePath),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // http_port - computed: true, optional: false, required: false
    get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    // https_port - computed: true, optional: false, required: false
    get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    // origin_protocol_policy - computed: true, optional: false, required: false
    get originProtocolPolicy() {
        return this.getStringAttribute('origin_protocol_policy');
    }
    // origin_ssl_protocols - computed: true, optional: false, required: false
    get originSslProtocols() {
        return this.getListAttribute('origin_ssl_protocols');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin = DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin;
function dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dns_name: cdktf.stringToTerraform(struct.dnsName),
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform = dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies extends cdktf.ComplexComputedList {
    // forward - computed: true, optional: false, required: false
    get forward() {
        return this.getStringAttribute('forward');
    }
    // whitelisted_names - computed: true, optional: false, required: false
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies = DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies;
function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues extends cdktf.ComplexComputedList {
    // cookies - computed: true, optional: false, required: false
    get cookies() {
        return this.interpolationForAttribute('cookies');
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.getListAttribute('headers');
    }
    // query_string - computed: true, optional: false, required: false
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    // query_string_cache_keys - computed: true, optional: false, required: false
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues = DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues;
function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cookies: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct.cookies),
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations extends cdktf.ComplexComputedList {
    // event_type - computed: true, optional: false, required: false
    get eventType() {
        return this.getStringAttribute('event_type');
    }
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations = DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations;
function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations extends cdktf.ComplexComputedList {
    // event_type - computed: true, optional: false, required: false
    get eventType() {
        return this.getStringAttribute('event_type');
    }
    // include_body - computed: true, optional: false, required: false
    get includeBody() {
        return this.getBooleanAttribute('include_body');
    }
    // lambda_function_arn - computed: true, optional: false, required: false
    get lambdaFunctionArn() {
        return this.getStringAttribute('lambda_function_arn');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations = DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations;
function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_function_arn: cdktf.stringToTerraform(struct.lambdaFunctionArn),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior extends cdktf.ComplexComputedList {
    // allowed_methods - computed: true, optional: false, required: false
    get allowedMethods() {
        return this.getListAttribute('allowed_methods');
    }
    // cache_policy_id - computed: true, optional: false, required: false
    get cachePolicyId() {
        return this.getStringAttribute('cache_policy_id');
    }
    // cached_methods - computed: true, optional: false, required: false
    get cachedMethods() {
        return this.getListAttribute('cached_methods');
    }
    // compress - computed: true, optional: false, required: false
    get compress() {
        return this.getBooleanAttribute('compress');
    }
    // default_ttl - computed: true, optional: false, required: false
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    // field_level_encryption_id - computed: true, optional: false, required: false
    get fieldLevelEncryptionId() {
        return this.getStringAttribute('field_level_encryption_id');
    }
    // forwarded_values - computed: true, optional: false, required: false
    get forwardedValues() {
        return this.interpolationForAttribute('forwarded_values');
    }
    // function_associations - computed: true, optional: false, required: false
    get functionAssociations() {
        return this.interpolationForAttribute('function_associations');
    }
    // lambda_function_associations - computed: true, optional: false, required: false
    get lambdaFunctionAssociations() {
        return this.interpolationForAttribute('lambda_function_associations');
    }
    // max_ttl - computed: true, optional: false, required: false
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    // min_ttl - computed: true, optional: false, required: false
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    // origin_request_policy_id - computed: true, optional: false, required: false
    get originRequestPolicyId() {
        return this.getStringAttribute('origin_request_policy_id');
    }
    // realtime_log_config_arn - computed: true, optional: false, required: false
    get realtimeLogConfigArn() {
        return this.getStringAttribute('realtime_log_config_arn');
    }
    // smooth_streaming - computed: true, optional: false, required: false
    get smoothStreaming() {
        return this.getBooleanAttribute('smooth_streaming');
    }
    // target_origin_id - computed: true, optional: false, required: false
    get targetOriginId() {
        return this.getStringAttribute('target_origin_id');
    }
    // trusted_key_groups - computed: true, optional: false, required: false
    get trustedKeyGroups() {
        return this.getListAttribute('trusted_key_groups');
    }
    // trusted_signers - computed: true, optional: false, required: false
    get trustedSigners() {
        return this.getListAttribute('trusted_signers');
    }
    // viewer_protocol_policy - computed: true, optional: false, required: false
    get viewerProtocolPolicy() {
        return this.getStringAttribute('viewer_protocol_policy');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior = DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior;
function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        forwarded_values: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct.forwardedValues),
        function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform)(struct.functionAssociations),
        lambda_function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform)(struct.lambdaFunctionAssociations),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform = dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigLogging extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // include_cookies - computed: true, optional: false, required: false
    get includeCookies() {
        return this.getBooleanAttribute('include_cookies');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigLogging = DataAwsccCloudfrontDistributionDistributionConfigLogging;
function dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        include_cookies: cdktf.booleanToTerraform(struct.includeCookies),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform = dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.interpolationForAttribute('items');
    }
    // quantity - computed: true, optional: false, required: false
    get quantity() {
        return this.getNumberAttribute('quantity');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes = DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.numberToTerraform)(struct.items),
        quantity: cdktf.numberToTerraform(struct.quantity),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria extends cdktf.ComplexComputedList {
    // status_codes - computed: true, optional: false, required: false
    get statusCodes() {
        return this.interpolationForAttribute('status_codes');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria = DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        status_codes: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct.statusCodes),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems extends cdktf.ComplexComputedList {
    // origin_id - computed: true, optional: false, required: false
    get originId() {
        return this.getStringAttribute('origin_id');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems = DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.interpolationForAttribute('items');
    }
    // quantity - computed: true, optional: false, required: false
    get quantity() {
        return this.getNumberAttribute('quantity');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers = DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform)(struct.items),
        quantity: cdktf.numberToTerraform(struct.quantity),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems extends cdktf.ComplexComputedList {
    // failover_criteria - computed: true, optional: false, required: false
    get failoverCriteria() {
        return this.interpolationForAttribute('failover_criteria');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // members - computed: true, optional: false, required: false
    get members() {
        return this.interpolationForAttribute('members');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems = DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        failover_criteria: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct.failoverCriteria),
        id: cdktf.stringToTerraform(struct.id),
        members: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct.members),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginGroups extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.interpolationForAttribute('items');
    }
    // quantity - computed: true, optional: false, required: false
    get quantity() {
        return this.getNumberAttribute('quantity');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginGroups = DataAwsccCloudfrontDistributionDistributionConfigOriginGroups;
function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform)(struct.items),
        quantity: cdktf.numberToTerraform(struct.quantity),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig extends cdktf.ComplexComputedList {
    // http_port - computed: true, optional: false, required: false
    get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    // https_port - computed: true, optional: false, required: false
    get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    // origin_keepalive_timeout - computed: true, optional: false, required: false
    get originKeepaliveTimeout() {
        return this.getNumberAttribute('origin_keepalive_timeout');
    }
    // origin_protocol_policy - computed: true, optional: false, required: false
    get originProtocolPolicy() {
        return this.getStringAttribute('origin_protocol_policy');
    }
    // origin_read_timeout - computed: true, optional: false, required: false
    get originReadTimeout() {
        return this.getNumberAttribute('origin_read_timeout');
    }
    // origin_ssl_protocols - computed: true, optional: false, required: false
    get originSslProtocols() {
        return this.getListAttribute('origin_ssl_protocols');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig = DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig;
function dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_keepalive_timeout: cdktf.numberToTerraform(struct.originKeepaliveTimeout),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_read_timeout: cdktf.numberToTerraform(struct.originReadTimeout),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders extends cdktf.ComplexComputedList {
    // header_name - computed: true, optional: false, required: false
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    // header_value - computed: true, optional: false, required: false
    get headerValue() {
        return this.getStringAttribute('header_value');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders = DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders;
function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_name: cdktf.stringToTerraform(struct.headerName),
        header_value: cdktf.stringToTerraform(struct.headerValue),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // origin_shield_region - computed: true, optional: false, required: false
    get originShieldRegion() {
        return this.getStringAttribute('origin_shield_region');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield = DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield;
function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        origin_shield_region: cdktf.stringToTerraform(struct.originShieldRegion),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig extends cdktf.ComplexComputedList {
    // origin_access_identity - computed: true, optional: false, required: false
    get originAccessIdentity() {
        return this.getStringAttribute('origin_access_identity');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig = DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig;
function dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigOrigins extends cdktf.ComplexComputedList {
    // connection_attempts - computed: true, optional: false, required: false
    get connectionAttempts() {
        return this.getNumberAttribute('connection_attempts');
    }
    // connection_timeout - computed: true, optional: false, required: false
    get connectionTimeout() {
        return this.getNumberAttribute('connection_timeout');
    }
    // custom_origin_config - computed: true, optional: false, required: false
    get customOriginConfig() {
        return this.interpolationForAttribute('custom_origin_config');
    }
    // domain_name - computed: true, optional: false, required: false
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // origin_custom_headers - computed: true, optional: false, required: false
    get originCustomHeaders() {
        return this.interpolationForAttribute('origin_custom_headers');
    }
    // origin_path - computed: true, optional: false, required: false
    get originPath() {
        return this.getStringAttribute('origin_path');
    }
    // origin_shield - computed: true, optional: false, required: false
    get originShield() {
        return this.interpolationForAttribute('origin_shield');
    }
    // s3_origin_config - computed: true, optional: false, required: false
    get s3OriginConfig() {
        return this.interpolationForAttribute('s3_origin_config');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigOrigins = DataAwsccCloudfrontDistributionDistributionConfigOrigins;
function dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_attempts: cdktf.numberToTerraform(struct.connectionAttempts),
        connection_timeout: cdktf.numberToTerraform(struct.connectionTimeout),
        custom_origin_config: dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct.customOriginConfig),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        id: cdktf.stringToTerraform(struct.id),
        origin_custom_headers: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform)(struct.originCustomHeaders),
        origin_path: cdktf.stringToTerraform(struct.originPath),
        origin_shield: dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct.originShield),
        s3_origin_config: dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct.s3OriginConfig),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction extends cdktf.ComplexComputedList {
    // locations - computed: true, optional: false, required: false
    get locations() {
        return this.getListAttribute('locations');
    }
    // restriction_type - computed: true, optional: false, required: false
    get restrictionType() {
        return this.getStringAttribute('restriction_type');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction = DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction;
function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        locations: cdktf.listMapper(cdktf.stringToTerraform)(struct.locations),
        restriction_type: cdktf.stringToTerraform(struct.restrictionType),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform = dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigRestrictions extends cdktf.ComplexComputedList {
    // geo_restriction - computed: true, optional: false, required: false
    get geoRestriction() {
        return this.interpolationForAttribute('geo_restriction');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigRestrictions = DataAwsccCloudfrontDistributionDistributionConfigRestrictions;
function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        geo_restriction: dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct.geoRestriction),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform = dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigS3Origin extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // origin_access_identity - computed: true, optional: false, required: false
    get originAccessIdentity() {
        return this.getStringAttribute('origin_access_identity');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigS3Origin = DataAwsccCloudfrontDistributionDistributionConfigS3Origin;
function dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dns_name: cdktf.stringToTerraform(struct.dnsName),
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform = dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate extends cdktf.ComplexComputedList {
    // acm_certificate_arn - computed: true, optional: false, required: false
    get acmCertificateArn() {
        return this.getStringAttribute('acm_certificate_arn');
    }
    // cloudfront_default_certificate - computed: true, optional: false, required: false
    get cloudfrontDefaultCertificate() {
        return this.getBooleanAttribute('cloudfront_default_certificate');
    }
    // iam_certificate_id - computed: true, optional: false, required: false
    get iamCertificateId() {
        return this.getStringAttribute('iam_certificate_id');
    }
    // minimum_protocol_version - computed: true, optional: false, required: false
    get minimumProtocolVersion() {
        return this.getStringAttribute('minimum_protocol_version');
    }
    // ssl_support_method - computed: true, optional: false, required: false
    get sslSupportMethod() {
        return this.getStringAttribute('ssl_support_method');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate = DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate;
function dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm_certificate_arn: cdktf.stringToTerraform(struct.acmCertificateArn),
        cloudfront_default_certificate: cdktf.booleanToTerraform(struct.cloudfrontDefaultCertificate),
        iam_certificate_id: cdktf.stringToTerraform(struct.iamCertificateId),
        minimum_protocol_version: cdktf.stringToTerraform(struct.minimumProtocolVersion),
        ssl_support_method: cdktf.stringToTerraform(struct.sslSupportMethod),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform = dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform;
class DataAwsccCloudfrontDistributionDistributionConfig extends cdktf.ComplexComputedList {
    // aliases - computed: true, optional: false, required: false
    get aliases() {
        return this.getListAttribute('aliases');
    }
    // cache_behaviors - computed: true, optional: false, required: false
    get cacheBehaviors() {
        return this.interpolationForAttribute('cache_behaviors');
    }
    // cnam_es - computed: true, optional: false, required: false
    get cnamEs() {
        return this.getListAttribute('cnam_es');
    }
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    // custom_error_responses - computed: true, optional: false, required: false
    get customErrorResponses() {
        return this.interpolationForAttribute('custom_error_responses');
    }
    // custom_origin - computed: true, optional: false, required: false
    get customOrigin() {
        return this.interpolationForAttribute('custom_origin');
    }
    // default_cache_behavior - computed: true, optional: false, required: false
    get defaultCacheBehavior() {
        return this.interpolationForAttribute('default_cache_behavior');
    }
    // default_root_object - computed: true, optional: false, required: false
    get defaultRootObject() {
        return this.getStringAttribute('default_root_object');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // http_version - computed: true, optional: false, required: false
    get httpVersion() {
        return this.getStringAttribute('http_version');
    }
    // ipv6_enabled - computed: true, optional: false, required: false
    get ipv6Enabled() {
        return this.getBooleanAttribute('ipv6_enabled');
    }
    // logging - computed: true, optional: false, required: false
    get logging() {
        return this.interpolationForAttribute('logging');
    }
    // origin_groups - computed: true, optional: false, required: false
    get originGroups() {
        return this.interpolationForAttribute('origin_groups');
    }
    // origins - computed: true, optional: false, required: false
    get origins() {
        return this.interpolationForAttribute('origins');
    }
    // price_class - computed: true, optional: false, required: false
    get priceClass() {
        return this.getStringAttribute('price_class');
    }
    // restrictions - computed: true, optional: false, required: false
    get restrictions() {
        return this.interpolationForAttribute('restrictions');
    }
    // s3_origin - computed: true, optional: false, required: false
    get s3Origin() {
        return this.interpolationForAttribute('s3_origin');
    }
    // viewer_certificate - computed: true, optional: false, required: false
    get viewerCertificate() {
        return this.interpolationForAttribute('viewer_certificate');
    }
    // web_acl_id - computed: true, optional: false, required: false
    get webAclId() {
        return this.getStringAttribute('web_acl_id');
    }
}
exports.DataAwsccCloudfrontDistributionDistributionConfig = DataAwsccCloudfrontDistributionDistributionConfig;
function dataAwsccCloudfrontDistributionDistributionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct.aliases),
        cache_behaviors: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform)(struct.cacheBehaviors),
        cnam_es: cdktf.listMapper(cdktf.stringToTerraform)(struct.cnamEs),
        comment: cdktf.stringToTerraform(struct.comment),
        custom_error_responses: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform)(struct.customErrorResponses),
        custom_origin: dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct.customOrigin),
        default_cache_behavior: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct.defaultCacheBehavior),
        default_root_object: cdktf.stringToTerraform(struct.defaultRootObject),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        http_version: cdktf.stringToTerraform(struct.httpVersion),
        ipv6_enabled: cdktf.booleanToTerraform(struct.ipv6Enabled),
        logging: dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform(struct.logging),
        origin_groups: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct.originGroups),
        origins: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform)(struct.origins),
        price_class: cdktf.stringToTerraform(struct.priceClass),
        restrictions: dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct.restrictions),
        s3_origin: dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform(struct.s3Origin),
        viewer_certificate: dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct.viewerCertificate),
        web_acl_id: cdktf.stringToTerraform(struct.webAclId),
    };
}
exports.dataAwsccCloudfrontDistributionDistributionConfigToTerraform = dataAwsccCloudfrontDistributionDistributionConfigToTerraform;
class DataAwsccCloudfrontDistributionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccCloudfrontDistributionTags = DataAwsccCloudfrontDistributionTags;
function dataAwsccCloudfrontDistributionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccCloudfrontDistributionTagsToTerraform = dataAwsccCloudfrontDistributionTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html awscc_cloudfront_distribution}
*/
class DataAwsccCloudfrontDistribution extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html awscc_cloudfront_distribution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontDistributionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_distribution',
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
    // distribution_config - computed: true, optional: false, required: false
    get distributionConfig() {
        return this.interpolationForAttribute('distribution_config');
    }
    // domain_name - computed: true, optional: false, required: false
    get domainName() {
        return this.getStringAttribute('domain_name');
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
exports.DataAwsccCloudfrontDistribution = DataAwsccCloudfrontDistribution;
// =================
// STATIC PROPERTIES
// =================
DataAwsccCloudfrontDistribution.tfResourceType = "awscc_cloudfront_distribution";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1jbG91ZGZyb250LWRpc3RyaWJ1dGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtY2xvdWRmcm9udC1kaXN0cmlidXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtFQUErRTtBQUMvRSwyQ0FBMkM7Ozs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEscUZBQXNGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsSSw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFYRCxzTEFXQztBQUVELFNBQWdCLGdHQUFnRyxDQUFDLE1BQThGO0lBQzdNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3ZGLENBQUE7QUFDSCxDQUFDO0FBTkQsNE1BTUM7QUFFRCxNQUFhLDhFQUErRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0gsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFB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LHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUF4RUgsMEVBeUVDO0FBdkVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csOENBQWMsR0FBVywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2Nsb3VkZnJvbnRfZGlzdHJpYnV0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvY2xvdWRmcm9udF9kaXN0cmlidXRpb24uaHRtbCNpZCBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc0ZvcndhcmRlZFZhbHVlc0Nvb2tpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBmb3J3YXJkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9yd2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZvcndhcmQnKTtcbiAgfVxuXG4gIC8vIHdoaXRlbGlzdGVkX25hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2hpdGVsaXN0ZWROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd3aGl0ZWxpc3RlZF9uYW1lcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnNGb3J3YXJkZWRWYWx1ZXNDb29raWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzRm9yd2FyZGVkVmFsdWVzQ29va2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmb3J3YXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcndhcmQpLFxuICAgIHdoaXRlbGlzdGVkX25hbWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLndoaXRlbGlzdGVkTmFtZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnNGb3J3YXJkZWRWYWx1ZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb29raWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb29raWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaGVhZGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaGVhZGVycycpO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncXVlcnlfc3RyaW5nJyk7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmdfY2FjaGVfa2V5cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc0ZvcndhcmRlZFZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc0ZvcndhcmRlZFZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb29raWVzOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnNGb3J3YXJkZWRWYWx1ZXNDb29raWVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb29raWVzKSxcbiAgICBoZWFkZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlcnMpLFxuICAgIHF1ZXJ5X3N0cmluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlTdHJpbmcpLFxuICAgIHF1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzRnVuY3Rpb25Bc3NvY2lhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBldmVudF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfdHlwZScpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzRnVuY3Rpb25Bc3NvY2lhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnNGdW5jdGlvbkFzc29jaWF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBldmVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50VHlwZSksXG4gICAgZnVuY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBldmVudF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfdHlwZScpO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9ib2R5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUJvZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9ib2R5Jyk7XG4gIH1cblxuICAvLyBsYW1iZGFfZnVuY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFtYmRhRnVuY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfZnVuY3Rpb25fYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc0xhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ldmVudFR5cGUpLFxuICAgIGluY2x1ZGVfYm9keTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZUJvZHkpLFxuICAgIGxhbWJkYV9mdW5jdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhRnVuY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGxvd2VkX21ldGhvZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGxvd2VkTWV0aG9kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhbGxvd2VkX21ldGhvZHMnKTtcbiAgfVxuXG4gIC8vIGNhY2hlX3BvbGljeV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhY2hlUG9saWN5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYWNoZV9wb2xpY3lfaWQnKTtcbiAgfVxuXG4gIC8vIGNhY2hlZF9tZXRob2RzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FjaGVkTWV0aG9kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjYWNoZWRfbWV0aG9kcycpO1xuICB9XG5cbiAgLy8gY29tcHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb21wcmVzcycpO1xuICB9XG5cbiAgLy8gZGVmYXVsdF90dGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF90dGwnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX2xldmVsX2VuY3J5cHRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWVsZExldmVsRW5jcnlwdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZCcpO1xuICB9XG5cbiAgLy8gZm9yd2FyZGVkX3ZhbHVlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcndhcmRlZFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmb3J3YXJkZWRfdmFsdWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZnVuY3Rpb25fYXNzb2NpYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25Bc3NvY2lhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZnVuY3Rpb25fYXNzb2NpYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbGFtYmRhX2Z1bmN0aW9uX2Fzc29jaWF0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYV9mdW5jdGlvbl9hc3NvY2lhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYXhfdHRsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3R0bCcpO1xuICB9XG5cbiAgLy8gbWluX3R0bCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl90dGwnKTtcbiAgfVxuXG4gIC8vIG9yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yaWdpblJlcXVlc3RQb2xpY3lJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZCcpO1xuICB9XG5cbiAgLy8gcGF0aF9wYXR0ZXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0aFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoX3BhdHRlcm4nKTtcbiAgfVxuXG4gIC8vIHJlYWx0aW1lX2xvZ19jb25maWdfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhbHRpbWVMb2dDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWFsdGltZV9sb2dfY29uZmlnX2FybicpO1xuICB9XG5cbiAgLy8gc21vb3RoX3N0cmVhbWluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNtb290aFN0cmVhbWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzbW9vdGhfc3RyZWFtaW5nJyk7XG4gIH1cblxuICAvLyB0YXJnZXRfb3JpZ2luX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0T3JpZ2luSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXRfb3JpZ2luX2lkJyk7XG4gIH1cblxuICAvLyB0cnVzdGVkX2tleV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cnVzdGVkS2V5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RydXN0ZWRfa2V5X2dyb3VwcycpO1xuICB9XG5cbiAgLy8gdHJ1c3RlZF9zaWduZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZFNpZ25lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHJ1c3RlZF9zaWduZXJzJyk7XG4gIH1cblxuICAvLyB2aWV3ZXJfcHJvdG9jb2xfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmlld2VyUHJvdG9jb2xQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aWV3ZXJfcHJvdG9jb2xfcG9saWN5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd2VkX21ldGhvZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxsb3dlZE1ldGhvZHMpLFxuICAgIGNhY2hlX3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYWNoZVBvbGljeUlkKSxcbiAgICBjYWNoZWRfbWV0aG9kczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jYWNoZWRNZXRob2RzKSxcbiAgICBjb21wcmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3MpLFxuICAgIGRlZmF1bHRfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRUdGwpLFxuICAgIGZpZWxkX2xldmVsX2VuY3J5cHRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmllbGRMZXZlbEVuY3J5cHRpb25JZCksXG4gICAgZm9yd2FyZGVkX3ZhbHVlczogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3JzRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkZWRWYWx1ZXMpLFxuICAgIGZ1bmN0aW9uX2Fzc29jaWF0aW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcnNGdW5jdGlvbkFzc29jaWF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZ1bmN0aW9uQXNzb2NpYXRpb25zKSxcbiAgICBsYW1iZGFfZnVuY3Rpb25fYXNzb2NpYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc0xhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEubGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbnMpLFxuICAgIG1heF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4VHRsKSxcbiAgICBtaW5fdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblR0bCksXG4gICAgb3JpZ2luX3JlcXVlc3RfcG9saWN5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpblJlcXVlc3RQb2xpY3lJZCksXG4gICAgcGF0aF9wYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGhQYXR0ZXJuKSxcbiAgICByZWFsdGltZV9sb2dfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFsdGltZUxvZ0NvbmZpZ0FybiksXG4gICAgc21vb3RoX3N0cmVhbWluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc21vb3RoU3RyZWFtaW5nKSxcbiAgICB0YXJnZXRfb3JpZ2luX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldE9yaWdpbklkKSxcbiAgICB0cnVzdGVkX2tleV9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3RlZEtleUdyb3VwcyksXG4gICAgdHJ1c3RlZF9zaWduZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRydXN0ZWRTaWduZXJzKSxcbiAgICB2aWV3ZXJfcHJvdG9jb2xfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZpZXdlclByb3RvY29sUG9saWN5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0N1c3RvbUVycm9yUmVzcG9uc2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZXJyb3JfY2FjaGluZ19taW5fdHRsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JDYWNoaW5nTWluVHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXJyb3JfY2FjaGluZ19taW5fdHRsJyk7XG4gIH1cblxuICAvLyBlcnJvcl9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXJyb3JfY29kZScpO1xuICB9XG5cbiAgLy8gcmVzcG9uc2VfY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Jlc3BvbnNlX2NvZGUnKTtcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX3BhZ2VfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlUGFnZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9wYWdlX3BhdGgnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0N1c3RvbUVycm9yUmVzcG9uc2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0N1c3RvbUVycm9yUmVzcG9uc2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVycm9yX2NhY2hpbmdfbWluX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvckNhY2hpbmdNaW5UdGwpLFxuICAgIGVycm9yX2NvZGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JDb2RlKSxcbiAgICByZXNwb25zZV9jb2RlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlQ29kZSksXG4gICAgcmVzcG9uc2VfcGFnZV9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlUGFnZVBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ3VzdG9tT3JpZ2luIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIGh0dHBfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGh0dHBQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaHR0cF9wb3J0Jyk7XG4gIH1cblxuICAvLyBodHRwc19wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaHR0cHNQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaHR0cHNfcG9ydCcpO1xuICB9XG5cbiAgLy8gb3JpZ2luX3Byb3RvY29sX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yaWdpblByb3RvY29sUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JpZ2luX3Byb3RvY29sX3BvbGljeScpO1xuICB9XG5cbiAgLy8gb3JpZ2luX3NzbF9wcm90b2NvbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5Tc2xQcm90b2NvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnb3JpZ2luX3NzbF9wcm90b2NvbHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0N1c3RvbU9yaWdpblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDdXN0b21PcmlnaW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG5zX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG5zTmFtZSksXG4gICAgaHR0cF9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBQb3J0KSxcbiAgICBodHRwc19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBzUG9ydCksXG4gICAgb3JpZ2luX3Byb3RvY29sX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5Qcm90b2NvbFBvbGljeSksXG4gICAgb3JpZ2luX3NzbF9wcm90b2NvbHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3JpZ2luU3NsUHJvdG9jb2xzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0RlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZvcndhcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmb3J3YXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZm9yd2FyZCcpO1xuICB9XG5cbiAgLy8gd2hpdGVsaXN0ZWRfbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3aGl0ZWxpc3RlZE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3doaXRlbGlzdGVkX25hbWVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZvcndhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZCksXG4gICAgd2hpdGVsaXN0ZWRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEud2hpdGVsaXN0ZWROYW1lcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvb2tpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb29raWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nvb2tpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdoZWFkZXJzJyk7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWVyeVN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdxdWVyeV9zdHJpbmcnKTtcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdDYWNoZUtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncXVlcnlfc3RyaW5nX2NhY2hlX2tleXMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0RlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0RlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvb2tpZXM6IGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvb2tpZXMpLFxuICAgIGhlYWRlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVycyksXG4gICAgcXVlcnlfc3RyaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZyksXG4gICAgcXVlcnlfc3RyaW5nX2NhY2hlX2tleXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucXVlcnlTdHJpbmdDYWNoZUtleXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldmVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF90eXBlJyk7XG4gIH1cblxuICAvLyBmdW5jdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmdW5jdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvckZ1bmN0aW9uQXNzb2NpYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRUeXBlKSxcbiAgICBmdW5jdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnVuY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldmVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF90eXBlJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2JvZHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdWRlQm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2JvZHknKTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9mdW5jdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYW1iZGFGdW5jdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV9mdW5jdGlvbl9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0RlZmF1bHRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBldmVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50VHlwZSksXG4gICAgaW5jbHVkZV9ib2R5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQm9keSksXG4gICAgbGFtYmRhX2Z1bmN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFGdW5jdGlvbkFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsbG93ZWRfbWV0aG9kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsbG93ZWRNZXRob2RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FsbG93ZWRfbWV0aG9kcycpO1xuICB9XG5cbiAgLy8gY2FjaGVfcG9saWN5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FjaGVQb2xpY3lJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX3BvbGljeV9pZCcpO1xuICB9XG5cbiAgLy8gY2FjaGVkX21ldGhvZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWNoZWRNZXRob2RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NhY2hlZF9tZXRob2RzJyk7XG4gIH1cblxuICAvLyBjb21wcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXByZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbXByZXNzJyk7XG4gIH1cblxuICAvLyBkZWZhdWx0X3R0bCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X3R0bCcpO1xuICB9XG5cbiAgLy8gZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWVsZF9sZXZlbF9lbmNyeXB0aW9uX2lkJyk7XG4gIH1cblxuICAvLyBmb3J3YXJkZWRfdmFsdWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9yd2FyZGVkVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZvcndhcmRlZF92YWx1ZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmdW5jdGlvbl9hc3NvY2lhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmdW5jdGlvbkFzc29jaWF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmdW5jdGlvbl9hc3NvY2lhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsYW1iZGFfZnVuY3Rpb25fYXNzb2NpYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGFtYmRhX2Z1bmN0aW9uX2Fzc29jaWF0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1heF90dGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfdHRsJyk7XG4gIH1cblxuICAvLyBtaW5fdHRsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluVHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3R0bCcpO1xuICB9XG5cbiAgLy8gb3JpZ2luX3JlcXVlc3RfcG9saWN5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luUmVxdWVzdFBvbGljeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JpZ2luX3JlcXVlc3RfcG9saWN5X2lkJyk7XG4gIH1cblxuICAvLyByZWFsdGltZV9sb2dfY29uZmlnX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYWx0aW1lTG9nQ29uZmlnQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVhbHRpbWVfbG9nX2NvbmZpZ19hcm4nKTtcbiAgfVxuXG4gIC8vIHNtb290aF9zdHJlYW1pbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbW9vdGhTdHJlYW1pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc21vb3RoX3N0cmVhbWluZycpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X29yaWdpbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldE9yaWdpbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFyZ2V0X29yaWdpbl9pZCcpO1xuICB9XG5cbiAgLy8gdHJ1c3RlZF9rZXlfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZEtleUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0cnVzdGVkX2tleV9ncm91cHMnKTtcbiAgfVxuXG4gIC8vIHRydXN0ZWRfc2lnbmVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRydXN0ZWRTaWduZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RydXN0ZWRfc2lnbmVycycpO1xuICB9XG5cbiAgLy8gdmlld2VyX3Byb3RvY29sX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZpZXdlclByb3RvY29sUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlld2VyX3Byb3RvY29sX3BvbGljeScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dlZF9tZXRob2RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsbG93ZWRNZXRob2RzKSxcbiAgICBjYWNoZV9wb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FjaGVQb2xpY3lJZCksXG4gICAgY2FjaGVkX21ldGhvZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2FjaGVkTWV0aG9kcyksXG4gICAgY29tcHJlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzKSxcbiAgICBkZWZhdWx0X3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0VHRsKSxcbiAgICBmaWVsZF9sZXZlbF9lbmNyeXB0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQpLFxuICAgIGZvcndhcmRlZF92YWx1ZXM6IGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZGVkVmFsdWVzKSxcbiAgICBmdW5jdGlvbl9hc3NvY2lhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0RlZmF1bHRDYWNoZUJlaGF2aW9yRnVuY3Rpb25Bc3NvY2lhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5mdW5jdGlvbkFzc29jaWF0aW9ucyksXG4gICAgbGFtYmRhX2Z1bmN0aW9uX2Fzc29jaWF0aW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25zKSxcbiAgICBtYXhfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFR0bCksXG4gICAgbWluX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5UdGwpLFxuICAgIG9yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5SZXF1ZXN0UG9saWN5SWQpLFxuICAgIHJlYWx0aW1lX2xvZ19jb25maWdfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWx0aW1lTG9nQ29uZmlnQXJuKSxcbiAgICBzbW9vdGhfc3RyZWFtaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zbW9vdGhTdHJlYW1pbmcpLFxuICAgIHRhcmdldF9vcmlnaW5faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0T3JpZ2luSWQpLFxuICAgIHRydXN0ZWRfa2V5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdGVkS2V5R3JvdXBzKSxcbiAgICB0cnVzdGVkX3NpZ25lcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3RlZFNpZ25lcnMpLFxuICAgIHZpZXdlcl9wcm90b2NvbF9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlld2VyUHJvdG9jb2xQb2xpY3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnTG9nZ2luZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9jb29raWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNvb2tpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9jb29raWVzJyk7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0xvZ2dpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnTG9nZ2luZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBpbmNsdWRlX2Nvb2tpZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVDb29raWVzKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zRmFpbG92ZXJDcml0ZXJpYVN0YXR1c0NvZGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpdGVtcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHF1YW50aXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVhbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdxdWFudGl0eScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzSXRlbXNGYWlsb3ZlckNyaXRlcmlhU3RhdHVzQ29kZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzSXRlbXNGYWlsb3ZlckNyaXRlcmlhU3RhdHVzQ29kZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICAgIHF1YW50aXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1YW50aXR5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zRmFpbG92ZXJDcml0ZXJpYSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHN0YXR1c19jb2RlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zRmFpbG92ZXJDcml0ZXJpYVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtc0ZhaWxvdmVyQ3JpdGVyaWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzX2NvZGVzOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzSXRlbXNGYWlsb3ZlckNyaXRlcmlhU3RhdHVzQ29kZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c0NvZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zTWVtYmVyc0l0ZW1zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb3JpZ2luX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5faWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zTWVtYmVyc0l0ZW1zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zTWVtYmVyc0l0ZW1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5JZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtc01lbWJlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2l0ZW1zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcXVhbnRpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWFudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3F1YW50aXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtc01lbWJlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzSXRlbXNNZW1iZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtc01lbWJlcnNJdGVtc1RvVGVycmFmb3JtKShzdHJ1Y3QhLml0ZW1zKSxcbiAgICBxdWFudGl0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5xdWFudGl0eSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZhaWxvdmVyX2NyaXRlcmlhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmFpbG92ZXJDcml0ZXJpYSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmYWlsb3Zlcl9jcml0ZXJpYScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWVtYmVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lbWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWVtYmVycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZhaWxvdmVyX2NyaXRlcmlhOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzSXRlbXNGYWlsb3ZlckNyaXRlcmlhVG9UZXJyYWZvcm0oc3RydWN0IS5mYWlsb3ZlckNyaXRlcmlhKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbWVtYmVyczogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbkdyb3Vwc0l0ZW1zTWVtYmVyc1RvVGVycmFmb3JtKHN0cnVjdCEubWVtYmVycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2l0ZW1zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcXVhbnRpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWFudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3F1YW50aXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luR3JvdXBzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNJdGVtc1RvVGVycmFmb3JtKShzdHJ1Y3QhLml0ZW1zKSxcbiAgICBxdWFudGl0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5xdWFudGl0eSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zQ3VzdG9tT3JpZ2luQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaHR0cF9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaHR0cFBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3BvcnQnKTtcbiAgfVxuXG4gIC8vIGh0dHBzX3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwc1BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwc19wb3J0Jyk7XG4gIH1cblxuICAvLyBvcmlnaW5fa2VlcGFsaXZlX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5LZWVwYWxpdmVUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb3JpZ2luX2tlZXBhbGl2ZV90aW1lb3V0Jyk7XG4gIH1cblxuICAvLyBvcmlnaW5fcHJvdG9jb2xfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luUHJvdG9jb2xQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5fcHJvdG9jb2xfcG9saWN5Jyk7XG4gIH1cblxuICAvLyBvcmlnaW5fcmVhZF90aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luUmVhZFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvcmlnaW5fcmVhZF90aW1lb3V0Jyk7XG4gIH1cblxuICAvLyBvcmlnaW5fc3NsX3Byb3RvY29scyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yaWdpblNzbFByb3RvY29scygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdvcmlnaW5fc3NsX3Byb3RvY29scycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc0N1c3RvbU9yaWdpbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zQ3VzdG9tT3JpZ2luQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGh0dHBfcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwUG9ydCksXG4gICAgaHR0cHNfcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwc1BvcnQpLFxuICAgIG9yaWdpbl9rZWVwYWxpdmVfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5LZWVwYWxpdmVUaW1lb3V0KSxcbiAgICBvcmlnaW5fcHJvdG9jb2xfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpblByb3RvY29sUG9saWN5KSxcbiAgICBvcmlnaW5fcmVhZF90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpblJlYWRUaW1lb3V0KSxcbiAgICBvcmlnaW5fc3NsX3Byb3RvY29sczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5vcmlnaW5Tc2xQcm90b2NvbHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc09yaWdpbkN1c3RvbUhlYWRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoZWFkZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFkZXJfbmFtZScpO1xuICB9XG5cbiAgLy8gaGVhZGVyX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFkZXJfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbnNPcmlnaW5DdXN0b21IZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbnNPcmlnaW5DdXN0b21IZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlck5hbWUpLFxuICAgIGhlYWRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zT3JpZ2luU2hpZWxkIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gb3JpZ2luX3NoaWVsZF9yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5TaGllbGRSZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5fc2hpZWxkX3JlZ2lvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc09yaWdpblNoaWVsZFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zT3JpZ2luU2hpZWxkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIG9yaWdpbl9zaGllbGRfcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpblNoaWVsZFJlZ2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zUzNPcmlnaW5Db25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvcmlnaW5fYWNjZXNzX2lkZW50aXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luQWNjZXNzSWRlbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5fYWNjZXNzX2lkZW50aXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5zUzNPcmlnaW5Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc1MzT3JpZ2luQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9yaWdpbl9hY2Nlc3NfaWRlbnRpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luQWNjZXNzSWRlbnRpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2lucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbm5lY3Rpb25fYXR0ZW1wdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0aW9uQXR0ZW1wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb25uZWN0aW9uX2F0dGVtcHRzJyk7XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0aW9uVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Nvbm5lY3Rpb25fdGltZW91dCcpO1xuICB9XG5cbiAgLy8gY3VzdG9tX29yaWdpbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21PcmlnaW5Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3VzdG9tX29yaWdpbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBvcmlnaW5fY3VzdG9tX2hlYWRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5DdXN0b21IZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbl9jdXN0b21faGVhZGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG9yaWdpbl9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbl9wYXRoJyk7XG4gIH1cblxuICAvLyBvcmlnaW5fc2hpZWxkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luU2hpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbl9zaGllbGQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19vcmlnaW5fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNPcmlnaW5Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfb3JpZ2luX2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2lucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0aW9uX2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25BdHRlbXB0cyksXG4gICAgY29ubmVjdGlvbl90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25UaW1lb3V0KSxcbiAgICBjdXN0b21fb3JpZ2luX2NvbmZpZzogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbnNDdXN0b21PcmlnaW5Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbU9yaWdpbkNvbmZpZyksXG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIG9yaWdpbl9jdXN0b21faGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc09yaWdpbkN1c3RvbUhlYWRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5vcmlnaW5DdXN0b21IZWFkZXJzKSxcbiAgICBvcmlnaW5fcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5QYXRoKSxcbiAgICBvcmlnaW5fc2hpZWxkOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc09yaWdpblNoaWVsZFRvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luU2hpZWxkKSxcbiAgICBzM19vcmlnaW5fY29uZmlnOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc1MzT3JpZ2luQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5zM09yaWdpbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdSZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxvY2F0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2NhdGlvbnMnKTtcbiAgfVxuXG4gIC8vIHJlc3RyaWN0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXN0cmljdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXN0cmljdGlvbl90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdSZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdSZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9jYXRpb25zKSxcbiAgICByZXN0cmljdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3RyaWN0aW9uVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdSZXN0cmljdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBnZW9fcmVzdHJpY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnZW9SZXN0cmljdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnZW9fcmVzdHJpY3Rpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdSZXN0cmljdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnUmVzdHJpY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdlb19yZXN0cmljdGlvbjogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1Jlc3RyaWN0aW9uc0dlb1Jlc3RyaWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5nZW9SZXN0cmljdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdTM09yaWdpbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRuc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Ruc19uYW1lJyk7XG4gIH1cblxuICAvLyBvcmlnaW5fYWNjZXNzX2lkZW50aXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luQWNjZXNzSWRlbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5fYWNjZXNzX2lkZW50aXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdTM09yaWdpblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdTM09yaWdpbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkbnNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kbnNOYW1lKSxcbiAgICBvcmlnaW5fYWNjZXNzX2lkZW50aXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbkFjY2Vzc0lkZW50aXR5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1ZpZXdlckNlcnRpZmljYXRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNtX2NlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjbUNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNtX2NlcnRpZmljYXRlX2FybicpO1xuICB9XG5cbiAgLy8gY2xvdWRmcm9udF9kZWZhdWx0X2NlcnRpZmljYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjbG91ZGZyb250X2RlZmF1bHRfY2VydGlmaWNhdGUnKTtcbiAgfVxuXG4gIC8vIGlhbV9jZXJ0aWZpY2F0ZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlhbUNlcnRpZmljYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1fY2VydGlmaWNhdGVfaWQnKTtcbiAgfVxuXG4gIC8vIG1pbmltdW1fcHJvdG9jb2xfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbmltdW1Qcm90b2NvbFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtaW5pbXVtX3Byb3RvY29sX3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIHNzbF9zdXBwb3J0X21ldGhvZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNzbFN1cHBvcnRNZXRob2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfc3VwcG9ydF9tZXRob2QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1ZpZXdlckNlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1ZpZXdlckNlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjbV9jZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNtQ2VydGlmaWNhdGVBcm4pLFxuICAgIGNsb3VkZnJvbnRfZGVmYXVsdF9jZXJ0aWZpY2F0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSksXG4gICAgaWFtX2NlcnRpZmljYXRlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUNlcnRpZmljYXRlSWQpLFxuICAgIG1pbmltdW1fcHJvdG9jb2xfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taW5pbXVtUHJvdG9jb2xWZXJzaW9uKSxcbiAgICBzc2xfc3VwcG9ydF9tZXRob2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NsU3VwcG9ydE1ldGhvZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGlhc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWxpYXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhbGlhc2VzJyk7XG4gIH1cblxuICAvLyBjYWNoZV9iZWhhdmlvcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWNoZUJlaGF2aW9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjYWNoZV9iZWhhdmlvcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbmFtX2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY25hbUVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NuYW1fZXMnKTtcbiAgfVxuXG4gIC8vIGNvbW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG5cbiAgLy8gY3VzdG9tX2Vycm9yX3Jlc3BvbnNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN1c3RvbUVycm9yUmVzcG9uc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9lcnJvcl9yZXNwb25zZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjdXN0b21fb3JpZ2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tT3JpZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9vcmlnaW4nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZWZhdWx0X2NhY2hlX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENhY2hlQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVmYXVsdF9jYWNoZV9iZWhhdmlvcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcm9vdF9vYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0Um9vdE9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfcm9vdF9vYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGh0dHBfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGh0dHBWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBpcHY2X2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpcHY2X2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ2dpbmcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvcmlnaW5fZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbl9ncm91cHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvcmlnaW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2lucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcmlnaW5zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJpY2VfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmljZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpY2VfY2xhc3MnKTtcbiAgfVxuXG4gIC8vIHJlc3RyaWN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc3RyaWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXN0cmljdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19vcmlnaW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM09yaWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19vcmlnaW4nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2aWV3ZXJfY2VydGlmaWNhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2aWV3ZXJDZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2aWV3ZXJfY2VydGlmaWNhdGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3ZWJfYWNsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2ViQWNsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJfYWNsX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxpYXNlcyksXG4gICAgY2FjaGVfYmVoYXZpb3JzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDYWNoZUJlaGF2aW9yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNhY2hlQmVoYXZpb3JzKSxcbiAgICBjbmFtX2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNuYW1FcyksXG4gICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21tZW50KSxcbiAgICBjdXN0b21fZXJyb3JfcmVzcG9uc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdDdXN0b21FcnJvclJlc3BvbnNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmN1c3RvbUVycm9yUmVzcG9uc2VzKSxcbiAgICBjdXN0b21fb3JpZ2luOiBkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnQ3VzdG9tT3JpZ2luVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21PcmlnaW4pLFxuICAgIGRlZmF1bHRfY2FjaGVfYmVoYXZpb3I6IGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdEZWZhdWx0Q2FjaGVCZWhhdmlvclRvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdENhY2hlQmVoYXZpb3IpLFxuICAgIGRlZmF1bHRfcm9vdF9vYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJvb3RPYmplY3QpLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGh0dHBfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwVmVyc2lvbiksXG4gICAgaXB2Nl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pcHY2RW5hYmxlZCksXG4gICAgbG9nZ2luZzogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ0xvZ2dpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ2dpbmcpLFxuICAgIG9yaWdpbl9ncm91cHM6IGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdPcmlnaW5Hcm91cHNUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbkdyb3VwcyksXG4gICAgb3JpZ2luczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uRGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luc1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9yaWdpbnMpLFxuICAgIHByaWNlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaWNlQ2xhc3MpLFxuICAgIHJlc3RyaWN0aW9uczogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1Jlc3RyaWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmVzdHJpY3Rpb25zKSxcbiAgICBzM19vcmlnaW46IGRhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25EaXN0cmlidXRpb25Db25maWdTM09yaWdpblRvVGVycmFmb3JtKHN0cnVjdCEuczNPcmlnaW4pLFxuICAgIHZpZXdlcl9jZXJ0aWZpY2F0ZTogZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRpc3RyaWJ1dGlvbkNvbmZpZ1ZpZXdlckNlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0IS52aWV3ZXJDZXJ0aWZpY2F0ZSksXG4gICAgd2ViX2FjbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53ZWJBY2xJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25UYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9jbG91ZGZyb250X2Rpc3RyaWJ1dGlvbi5odG1sIGF3c2NjX2Nsb3VkZnJvbnRfZGlzdHJpYnV0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19jbG91ZGZyb250X2Rpc3RyaWJ1dGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9jbG91ZGZyb250X2Rpc3RyaWJ1dGlvbi5odG1sIGF3c2NjX2Nsb3VkZnJvbnRfZGlzdHJpYnV0aW9ufSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NDbG91ZGZyb250RGlzdHJpYnV0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0Nsb3VkZnJvbnREaXN0cmlidXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2Nsb3VkZnJvbnRfZGlzdHJpYnV0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRpc3RyaWJ1dGlvbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXN0cmlidXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGlzdHJpYnV0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9uYW1lJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=