// https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html#id DataAwsccCloudfrontDistribution#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies extends cdktf.ComplexComputedList {

  // forward - computed: true, optional: false, required: false
  public get forward() {
    return this.getStringAttribute('forward');
  }

  // whitelisted_names - computed: true, optional: false, required: false
  public get whitelistedNames() {
    return this.getListAttribute('whitelisted_names');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues extends cdktf.ComplexComputedList {

  // cookies - computed: true, optional: false, required: false
  public get cookies() {
    return this.interpolationForAttribute('cookies') as any;
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }

  // query_string_cache_keys - computed: true, optional: false, required: false
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies: dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations extends cdktf.ComplexComputedList {

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations extends cdktf.ComplexComputedList {

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // include_body - computed: true, optional: false, required: false
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors extends cdktf.ComplexComputedList {

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // cache_policy_id - computed: true, optional: false, required: false
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }

  // cached_methods - computed: true, optional: false, required: false
  public get cachedMethods() {
    return this.getListAttribute('cached_methods');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // field_level_encryption_id - computed: true, optional: false, required: false
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }

  // forwarded_values - computed: true, optional: false, required: false
  public get forwardedValues() {
    return this.interpolationForAttribute('forwarded_values') as any;
  }

  // function_associations - computed: true, optional: false, required: false
  public get functionAssociations() {
    return this.interpolationForAttribute('function_associations') as any;
  }

  // lambda_function_associations - computed: true, optional: false, required: false
  public get lambdaFunctionAssociations() {
    return this.interpolationForAttribute('lambda_function_associations') as any;
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // origin_request_policy_id - computed: true, optional: false, required: false
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }

  // path_pattern - computed: true, optional: false, required: false
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }

  // realtime_log_config_arn - computed: true, optional: false, required: false
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }

  // smooth_streaming - computed: true, optional: false, required: false
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }

  // target_origin_id - computed: true, optional: false, required: false
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }

  // trusted_key_groups - computed: true, optional: false, required: false
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }

  // trusted_signers - computed: true, optional: false, required: false
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }

  // viewer_protocol_policy - computed: true, optional: false, required: false
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform)(struct!.functionAssociations),
    lambda_function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform)(struct!.lambdaFunctionAssociations),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses extends cdktf.ComplexComputedList {

  // error_caching_min_ttl - computed: true, optional: false, required: false
  public get errorCachingMinTtl() {
    return this.getNumberAttribute('error_caching_min_ttl');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }

  // response_page_path - computed: true, optional: false, required: false
  public get responsePagePath() {
    return this.getStringAttribute('response_page_path');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // origin_protocol_policy - computed: true, optional: false, required: false
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }

  // origin_ssl_protocols - computed: true, optional: false, required: false
  public get originSslProtocols() {
    return this.getListAttribute('origin_ssl_protocols');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.originSslProtocols),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies extends cdktf.ComplexComputedList {

  // forward - computed: true, optional: false, required: false
  public get forward() {
    return this.getStringAttribute('forward');
  }

  // whitelisted_names - computed: true, optional: false, required: false
  public get whitelistedNames() {
    return this.getListAttribute('whitelisted_names');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues extends cdktf.ComplexComputedList {

  // cookies - computed: true, optional: false, required: false
  public get cookies() {
    return this.interpolationForAttribute('cookies') as any;
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }

  // query_string_cache_keys - computed: true, optional: false, required: false
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations extends cdktf.ComplexComputedList {

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations extends cdktf.ComplexComputedList {

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // include_body - computed: true, optional: false, required: false
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior extends cdktf.ComplexComputedList {

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // cache_policy_id - computed: true, optional: false, required: false
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }

  // cached_methods - computed: true, optional: false, required: false
  public get cachedMethods() {
    return this.getListAttribute('cached_methods');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // field_level_encryption_id - computed: true, optional: false, required: false
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }

  // forwarded_values - computed: true, optional: false, required: false
  public get forwardedValues() {
    return this.interpolationForAttribute('forwarded_values') as any;
  }

  // function_associations - computed: true, optional: false, required: false
  public get functionAssociations() {
    return this.interpolationForAttribute('function_associations') as any;
  }

  // lambda_function_associations - computed: true, optional: false, required: false
  public get lambdaFunctionAssociations() {
    return this.interpolationForAttribute('lambda_function_associations') as any;
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // origin_request_policy_id - computed: true, optional: false, required: false
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }

  // realtime_log_config_arn - computed: true, optional: false, required: false
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }

  // smooth_streaming - computed: true, optional: false, required: false
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }

  // target_origin_id - computed: true, optional: false, required: false
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }

  // trusted_key_groups - computed: true, optional: false, required: false
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }

  // trusted_signers - computed: true, optional: false, required: false
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }

  // viewer_protocol_policy - computed: true, optional: false, required: false
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform)(struct!.functionAssociations),
    lambda_function_associations: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform)(struct!.lambdaFunctionAssociations),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigLogging extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // include_cookies - computed: true, optional: false, required: false
  public get includeCookies() {
    return this.getBooleanAttribute('include_cookies');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    include_cookies: cdktf.booleanToTerraform(struct!.includeCookies),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.numberToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria extends cdktf.ComplexComputedList {

  // status_codes - computed: true, optional: false, required: false
  public get statusCodes() {
    return this.interpolationForAttribute('status_codes') as any;
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status_codes: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct!.statusCodes),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems extends cdktf.ComplexComputedList {

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems extends cdktf.ComplexComputedList {

  // failover_criteria - computed: true, optional: false, required: false
  public get failoverCriteria() {
    return this.interpolationForAttribute('failover_criteria') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.interpolationForAttribute('members') as any;
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failover_criteria: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct!.failoverCriteria),
    id: cdktf.stringToTerraform(struct!.id),
    members: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct!.members),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginGroups extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig extends cdktf.ComplexComputedList {

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // origin_keepalive_timeout - computed: true, optional: false, required: false
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }

  // origin_protocol_policy - computed: true, optional: false, required: false
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }

  // origin_read_timeout - computed: true, optional: false, required: false
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }

  // origin_ssl_protocols - computed: true, optional: false, required: false
  public get originSslProtocols() {
    return this.getListAttribute('origin_ssl_protocols');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.originSslProtocols),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders extends cdktf.ComplexComputedList {

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // origin_shield_region - computed: true, optional: false, required: false
  public get originShieldRegion() {
    return this.getStringAttribute('origin_shield_region');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig extends cdktf.ComplexComputedList {

  // origin_access_identity - computed: true, optional: false, required: false
  public get originAccessIdentity() {
    return this.getStringAttribute('origin_access_identity');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigOrigins extends cdktf.ComplexComputedList {

  // connection_attempts - computed: true, optional: false, required: false
  public get connectionAttempts() {
    return this.getNumberAttribute('connection_attempts');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // custom_origin_config - computed: true, optional: false, required: false
  public get customOriginConfig() {
    return this.interpolationForAttribute('custom_origin_config') as any;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_custom_headers - computed: true, optional: false, required: false
  public get originCustomHeaders() {
    return this.interpolationForAttribute('origin_custom_headers') as any;
  }

  // origin_path - computed: true, optional: false, required: false
  public get originPath() {
    return this.getStringAttribute('origin_path');
  }

  // origin_shield - computed: true, optional: false, required: false
  public get originShield() {
    return this.interpolationForAttribute('origin_shield') as any;
  }

  // s3_origin_config - computed: true, optional: false, required: false
  public get s3OriginConfig() {
    return this.interpolationForAttribute('s3_origin_config') as any;
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOrigins): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    custom_origin_config: dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct!.customOriginConfig),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    id: cdktf.stringToTerraform(struct!.id),
    origin_custom_headers: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform)(struct!.originCustomHeaders),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    origin_shield: dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct!.originShield),
    s3_origin_config: dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct!.s3OriginConfig),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction extends cdktf.ComplexComputedList {

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }

  // restriction_type - computed: true, optional: false, required: false
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.locations),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigRestrictions extends cdktf.ComplexComputedList {

  // geo_restriction - computed: true, optional: false, required: false
  public get geoRestriction() {
    return this.interpolationForAttribute('geo_restriction') as any;
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigRestrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_restriction: dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct!.geoRestriction),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigS3Origin extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // origin_access_identity - computed: true, optional: false, required: false
  public get originAccessIdentity() {
    return this.getStringAttribute('origin_access_identity');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigS3Origin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate extends cdktf.ComplexComputedList {

  // acm_certificate_arn - computed: true, optional: false, required: false
  public get acmCertificateArn() {
    return this.getStringAttribute('acm_certificate_arn');
  }

  // cloudfront_default_certificate - computed: true, optional: false, required: false
  public get cloudfrontDefaultCertificate() {
    return this.getBooleanAttribute('cloudfront_default_certificate');
  }

  // iam_certificate_id - computed: true, optional: false, required: false
  public get iamCertificateId() {
    return this.getStringAttribute('iam_certificate_id');
  }

  // minimum_protocol_version - computed: true, optional: false, required: false
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }

  // ssl_support_method - computed: true, optional: false, required: false
  public get sslSupportMethod() {
    return this.getStringAttribute('ssl_support_method');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktf.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    iam_certificate_id: cdktf.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
  }
}

export class DataAwsccCloudfrontDistributionDistributionConfig extends cdktf.ComplexComputedList {

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // cache_behaviors - computed: true, optional: false, required: false
  public get cacheBehaviors() {
    return this.interpolationForAttribute('cache_behaviors') as any;
  }

  // cnam_es - computed: true, optional: false, required: false
  public get cnamEs() {
    return this.getListAttribute('cnam_es');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // custom_error_responses - computed: true, optional: false, required: false
  public get customErrorResponses() {
    return this.interpolationForAttribute('custom_error_responses') as any;
  }

  // custom_origin - computed: true, optional: false, required: false
  public get customOrigin() {
    return this.interpolationForAttribute('custom_origin') as any;
  }

  // default_cache_behavior - computed: true, optional: false, required: false
  public get defaultCacheBehavior() {
    return this.interpolationForAttribute('default_cache_behavior') as any;
  }

  // default_root_object - computed: true, optional: false, required: false
  public get defaultRootObject() {
    return this.getStringAttribute('default_root_object');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // http_version - computed: true, optional: false, required: false
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }

  // ipv6_enabled - computed: true, optional: false, required: false
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }

  // origin_groups - computed: true, optional: false, required: false
  public get originGroups() {
    return this.interpolationForAttribute('origin_groups') as any;
  }

  // origins - computed: true, optional: false, required: false
  public get origins() {
    return this.interpolationForAttribute('origins') as any;
  }

  // price_class - computed: true, optional: false, required: false
  public get priceClass() {
    return this.getStringAttribute('price_class');
  }

  // restrictions - computed: true, optional: false, required: false
  public get restrictions() {
    return this.interpolationForAttribute('restrictions') as any;
  }

  // s3_origin - computed: true, optional: false, required: false
  public get s3Origin() {
    return this.interpolationForAttribute('s3_origin') as any;
  }

  // viewer_certificate - computed: true, optional: false, required: false
  public get viewerCertificate() {
    return this.interpolationForAttribute('viewer_certificate') as any;
  }

  // web_acl_id - computed: true, optional: false, required: false
  public get webAclId() {
    return this.getStringAttribute('web_acl_id');
  }
}

export function dataAwsccCloudfrontDistributionDistributionConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aliases),
    cache_behaviors: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform)(struct!.cacheBehaviors),
    cnam_es: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cnamEs),
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_error_responses: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform)(struct!.customErrorResponses),
    custom_origin: dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct!.customOrigin),
    default_cache_behavior: dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct!.defaultCacheBehavior),
    default_root_object: cdktf.stringToTerraform(struct!.defaultRootObject),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    ipv6_enabled: cdktf.booleanToTerraform(struct!.ipv6Enabled),
    logging: dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform(struct!.logging),
    origin_groups: dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct!.originGroups),
    origins: cdktf.listMapper(dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform)(struct!.origins),
    price_class: cdktf.stringToTerraform(struct!.priceClass),
    restrictions: dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct!.restrictions),
    s3_origin: dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform(struct!.s3Origin),
    viewer_certificate: dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct!.viewerCertificate),
    web_acl_id: cdktf.stringToTerraform(struct!.webAclId),
  }
}

export class DataAwsccCloudfrontDistributionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCloudfrontDistributionTagsToTerraform(struct?: DataAwsccCloudfrontDistributionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html awscc_cloudfront_distribution}
*/
export class DataAwsccCloudfrontDistribution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_distribution";

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
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontDistributionConfig) {
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
  public get distributionConfig() {
    return this.interpolationForAttribute('distribution_config') as any;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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
