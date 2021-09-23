// https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#distribution_config CloudfrontDistribution#distribution_config}
  */
  readonly distributionConfig: CloudfrontDistributionDistributionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#tags CloudfrontDistribution#tags}
  */
  readonly tags?: CloudfrontDistributionTags[];
}
export interface CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}

export function cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export interface CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
  */
  readonly cookies?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
}

export function cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies: cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
  }
}

export interface CloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn?: string;
}

export function cloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface CloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#lambda_function_arn CloudfrontDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function cloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export interface CloudfrontDistributionDistributionConfigCacheBehaviors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#function_associations CloudfrontDistribution#function_associations}
  */
  readonly functionAssociations?: CloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#lambda_function_associations CloudfrontDistribution#lambda_function_associations}
  */
  readonly lambdaFunctionAssociations?: CloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#path_pattern CloudfrontDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
}

export function cloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: cdktf.listMapper(cloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform)(struct!.functionAssociations),
    lambda_function_associations: cdktf.listMapper(cloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform)(struct!.lambdaFunctionAssociations),
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

export interface CloudfrontDistributionDistributionConfigCustomErrorResponses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#error_code CloudfrontDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#response_code CloudfrontDistribution#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#response_page_path CloudfrontDistribution#response_page_path}
  */
  readonly responsePagePath?: string;
}

export function cloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform(struct?: CloudfrontDistributionDistributionConfigCustomErrorResponses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
  }
}

export interface CloudfrontDistributionDistributionConfigCustomOrigin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#dns_name CloudfrontDistribution#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols: string[];
}

export function cloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct?: CloudfrontDistributionDistributionConfigCustomOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.originSslProtocols),
  }
}

export interface CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}

export function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export interface CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
  */
  readonly cookies?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
}

export function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies: cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
  }
}

export interface CloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn?: string;
}

export function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface CloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#lambda_function_arn CloudfrontDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export interface CloudfrontDistributionDistributionConfigDefaultCacheBehavior {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#function_associations CloudfrontDistribution#function_associations}
  */
  readonly functionAssociations?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#lambda_function_associations CloudfrontDistribution#lambda_function_associations}
  */
  readonly lambdaFunctionAssociations?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
}

export function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: cdktf.listMapper(cloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform)(struct!.functionAssociations),
    lambda_function_associations: cdktf.listMapper(cloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform)(struct!.lambdaFunctionAssociations),
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

export interface CloudfrontDistributionDistributionConfigLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#bucket CloudfrontDistribution#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#include_cookies CloudfrontDistribution#include_cookies}
  */
  readonly includeCookies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#prefix CloudfrontDistribution#prefix}
  */
  readonly prefix?: string;
}

export function cloudfrontDistributionDistributionConfigLoggingToTerraform(struct?: CloudfrontDistributionDistributionConfigLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    include_cookies: cdktf.booleanToTerraform(struct!.includeCookies),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#items CloudfrontDistribution#items}
  */
  readonly items: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#quantity CloudfrontDistribution#quantity}
  */
  readonly quantity: number;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.numberToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}
  */
  readonly statusCodes: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status_codes: cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct!.statusCodes),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsMembers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#items CloudfrontDistribution#items}
  */
  readonly items: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#quantity CloudfrontDistribution#quantity}
  */
  readonly quantity: number;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroupsItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#failover_criteria CloudfrontDistribution#failover_criteria}
  */
  readonly failoverCriteria: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#id CloudfrontDistribution#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#members CloudfrontDistribution#members}
  */
  readonly members: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembers;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failover_criteria: cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct!.failoverCriteria),
    id: cdktf.stringToTerraform(struct!.id),
    members: cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct!.members),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#items CloudfrontDistribution#items}
  */
  readonly items?: CloudfrontDistributionDistributionConfigOriginGroupsItems[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#quantity CloudfrontDistribution#quantity}
  */
  readonly quantity: number;
}

export function cloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginsCustomOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols?: string[];
}

export function cloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsCustomOriginConfig): any {
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

export interface CloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#header_name CloudfrontDistribution#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#header_value CloudfrontDistribution#header_value}
  */
  readonly headerValue: string;
}

export function cloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginsOriginShield {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_shield_region CloudfrontDistribution#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}

export function cloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsOriginShield): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
  }
}

export interface CloudfrontDistributionDistributionConfigOriginsS3OriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
  */
  readonly originAccessIdentity?: string;
}

export function cloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsS3OriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}

export interface CloudfrontDistributionDistributionConfigOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#connection_attempts CloudfrontDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#connection_timeout CloudfrontDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#custom_origin_config CloudfrontDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CloudfrontDistributionDistributionConfigOriginsCustomOriginConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#domain_name CloudfrontDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#id CloudfrontDistribution#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_custom_headers CloudfrontDistribution#origin_custom_headers}
  */
  readonly originCustomHeaders?: CloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_path CloudfrontDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_shield CloudfrontDistribution#origin_shield}
  */
  readonly originShield?: CloudfrontDistributionDistributionConfigOriginsOriginShield;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#s3_origin_config CloudfrontDistribution#s3_origin_config}
  */
  readonly s3OriginConfig?: CloudfrontDistributionDistributionConfigOriginsS3OriginConfig;
}

export function cloudfrontDistributionDistributionConfigOriginsToTerraform(struct?: CloudfrontDistributionDistributionConfigOrigins): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    custom_origin_config: cloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct!.customOriginConfig),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    id: cdktf.stringToTerraform(struct!.id),
    origin_custom_headers: cdktf.listMapper(cloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform)(struct!.originCustomHeaders),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    origin_shield: cloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct!.originShield),
    s3_origin_config: cloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct!.s3OriginConfig),
  }
}

export class CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction extends cdktf.ComplexComputedList {

  // locations - computed: true, optional: true, required: false
  private _locations?: string[];
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // restriction_type - computed: true, optional: false, required: true
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
}

export function cloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.locations),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
  }
}

export interface CloudfrontDistributionDistributionConfigRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
  */
  readonly geoRestriction: CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction;
}

export function cloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct?: CloudfrontDistributionDistributionConfigRestrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_restriction: cloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct!.geoRestriction),
  }
}

export interface CloudfrontDistributionDistributionConfigS3Origin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#dns_name CloudfrontDistribution#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
  */
  readonly originAccessIdentity?: string;
}

export function cloudfrontDistributionDistributionConfigS3OriginToTerraform(struct?: CloudfrontDistributionDistributionConfigS3Origin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}

export interface CloudfrontDistributionDistributionConfigViewerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
  */
  readonly iamCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#ssl_support_method CloudfrontDistribution#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}

export function cloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct?: CloudfrontDistributionDistributionConfigViewerCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktf.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    iam_certificate_id: cdktf.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
  }
}

export interface CloudfrontDistributionDistributionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#aliases CloudfrontDistribution#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cache_behaviors CloudfrontDistribution#cache_behaviors}
  */
  readonly cacheBehaviors?: CloudfrontDistributionDistributionConfigCacheBehaviors[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#cnam_es CloudfrontDistribution#cnam_es}
  */
  readonly cnamEs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#comment CloudfrontDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#custom_error_responses CloudfrontDistribution#custom_error_responses}
  */
  readonly customErrorResponses?: CloudfrontDistributionDistributionConfigCustomErrorResponses[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#custom_origin CloudfrontDistribution#custom_origin}
  */
  readonly customOrigin?: CloudfrontDistributionDistributionConfigCustomOrigin;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior?: CloudfrontDistributionDistributionConfigDefaultCacheBehavior;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#default_root_object CloudfrontDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#http_version CloudfrontDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#ipv6_enabled CloudfrontDistribution#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#logging CloudfrontDistribution#logging}
  */
  readonly logging?: CloudfrontDistributionDistributionConfigLogging;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_groups CloudfrontDistribution#origin_groups}
  */
  readonly originGroups?: CloudfrontDistributionDistributionConfigOriginGroups;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origins CloudfrontDistribution#origins}
  */
  readonly origins?: CloudfrontDistributionDistributionConfigOrigins[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#price_class CloudfrontDistribution#price_class}
  */
  readonly priceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#restrictions CloudfrontDistribution#restrictions}
  */
  readonly restrictions?: CloudfrontDistributionDistributionConfigRestrictions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#s3_origin CloudfrontDistribution#s3_origin}
  */
  readonly s3Origin?: CloudfrontDistributionDistributionConfigS3Origin;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#viewer_certificate CloudfrontDistribution#viewer_certificate}
  */
  readonly viewerCertificate?: CloudfrontDistributionDistributionConfigViewerCertificate;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#web_acl_id CloudfrontDistribution#web_acl_id}
  */
  readonly webAclId?: string;
}

export function cloudfrontDistributionDistributionConfigToTerraform(struct?: CloudfrontDistributionDistributionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aliases),
    cache_behaviors: cdktf.listMapper(cloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform)(struct!.cacheBehaviors),
    cnam_es: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cnamEs),
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_error_responses: cdktf.listMapper(cloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform)(struct!.customErrorResponses),
    custom_origin: cloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct!.customOrigin),
    default_cache_behavior: cloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct!.defaultCacheBehavior),
    default_root_object: cdktf.stringToTerraform(struct!.defaultRootObject),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    ipv6_enabled: cdktf.booleanToTerraform(struct!.ipv6Enabled),
    logging: cloudfrontDistributionDistributionConfigLoggingToTerraform(struct!.logging),
    origin_groups: cloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct!.originGroups),
    origins: cdktf.listMapper(cloudfrontDistributionDistributionConfigOriginsToTerraform)(struct!.origins),
    price_class: cdktf.stringToTerraform(struct!.priceClass),
    restrictions: cloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct!.restrictions),
    s3_origin: cloudfrontDistributionDistributionConfigS3OriginToTerraform(struct!.s3Origin),
    viewer_certificate: cloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct!.viewerCertificate),
    web_acl_id: cdktf.stringToTerraform(struct!.webAclId),
  }
}

export interface CloudfrontDistributionTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#key CloudfrontDistribution#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#value CloudfrontDistribution#value}
  */
  readonly value: string;
}

export function cloudfrontDistributionTagsToTerraform(struct?: CloudfrontDistributionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html awscc_cloudfront_distribution}
*/
export class CloudfrontDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_distribution";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html awscc_cloudfront_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig) {
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
    this._distributionConfig = config.distributionConfig;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_config - computed: false, optional: false, required: true
  private _distributionConfig: CloudfrontDistributionDistributionConfig;
  public get distributionConfig() {
    return this.interpolationForAttribute('distribution_config') as any;
  }
  public set distributionConfig(value: CloudfrontDistributionDistributionConfig) {
    this._distributionConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigInput() {
    return this._distributionConfig
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CloudfrontDistributionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CloudfrontDistributionTags[] ) {
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
      distribution_config: cloudfrontDistributionDistributionConfigToTerraform(this._distributionConfig),
      tags: cdktf.listMapper(cloudfrontDistributionTagsToTerraform)(this._tags),
    };
  }
}
