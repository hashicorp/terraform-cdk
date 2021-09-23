import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies): any;
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
export declare function cloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues): any;
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
export declare function cloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations): any;
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
export declare function cloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations): any;
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
export declare function cloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform(struct?: CloudfrontDistributionDistributionConfigCacheBehaviors): any;
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
export declare function cloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform(struct?: CloudfrontDistributionDistributionConfigCustomErrorResponses): any;
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
export declare function cloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct?: CloudfrontDistributionDistributionConfigCustomOrigin): any;
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
export declare function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies): any;
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
export declare function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues): any;
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
export declare function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations): any;
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
export declare function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations): any;
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
export declare function cloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDistributionConfigDefaultCacheBehavior): any;
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
export declare function cloudfrontDistributionDistributionConfigLoggingToTerraform(struct?: CloudfrontDistributionDistributionConfigLogging): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes): any;
export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}
    */
    readonly statusCodes: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes;
}
export declare function cloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria): any;
export interface CloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
}
export declare function cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItemsMembers): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroupsItems): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginGroups): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsCustomOriginConfig): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsOriginShield): any;
export interface CloudfrontDistributionDistributionConfigOriginsS3OriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
    */
    readonly originAccessIdentity?: string;
}
export declare function cloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct?: CloudfrontDistributionDistributionConfigOriginsS3OriginConfig): any;
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
export declare function cloudfrontDistributionDistributionConfigOriginsToTerraform(struct?: CloudfrontDistributionDistributionConfigOrigins): any;
export declare class CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction extends cdktf.ComplexComputedList {
    private _locations?;
    get locations(): string[];
    set locations(value: string[]);
    resetLocations(): void;
    get locationsInput(): string[] | undefined;
    get restrictionType(): string;
}
export declare function cloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction): any;
export interface CloudfrontDistributionDistributionConfigRestrictions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
    */
    readonly geoRestriction: CloudfrontDistributionDistributionConfigRestrictionsGeoRestriction;
}
export declare function cloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct?: CloudfrontDistributionDistributionConfigRestrictions): any;
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
export declare function cloudfrontDistributionDistributionConfigS3OriginToTerraform(struct?: CloudfrontDistributionDistributionConfigS3Origin): any;
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
export declare function cloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct?: CloudfrontDistributionDistributionConfigViewerCertificate): any;
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
export declare function cloudfrontDistributionDistributionConfigToTerraform(struct?: CloudfrontDistributionDistributionConfig): any;
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
export declare function cloudfrontDistributionTagsToTerraform(struct?: CloudfrontDistributionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html awscc_cloudfront_distribution}
*/
export declare class CloudfrontDistribution extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_distribution.html awscc_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig);
    private _distributionConfig;
    get distributionConfig(): CloudfrontDistributionDistributionConfig;
    set distributionConfig(value: CloudfrontDistributionDistributionConfig);
    get distributionConfigInput(): CloudfrontDistributionDistributionConfig;
    get domainName(): string;
    get id(): string;
    private _tags?;
    get tags(): CloudfrontDistributionTags[];
    set tags(value: CloudfrontDistributionTags[]);
    resetTags(): void;
    get tagsInput(): CloudfrontDistributionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
