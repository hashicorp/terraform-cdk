import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html#id DataAwsccCloudfrontDistribution#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies extends cdktf.ComplexComputedList {
    get forward(): string;
    get whitelistedNames(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookiesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesCookies): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues extends cdktf.ComplexComputedList {
    get cookies(): any;
    get headers(): string[];
    get queryString(): any;
    get queryStringCacheKeys(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValuesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsForwardedValues): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations extends cdktf.ComplexComputedList {
    get eventType(): string;
    get functionArn(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsFunctionAssociations): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations extends cdktf.ComplexComputedList {
    get eventType(): string;
    get includeBody(): any;
    get lambdaFunctionArn(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsLambdaFunctionAssociations): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors extends cdktf.ComplexComputedList {
    get allowedMethods(): string[];
    get cachePolicyId(): string;
    get cachedMethods(): string[];
    get compress(): any;
    get defaultTtl(): number;
    get fieldLevelEncryptionId(): string;
    get forwardedValues(): any;
    get functionAssociations(): any;
    get lambdaFunctionAssociations(): any;
    get maxTtl(): number;
    get minTtl(): number;
    get originRequestPolicyId(): string;
    get pathPattern(): string;
    get realtimeLogConfigArn(): string;
    get smoothStreaming(): any;
    get targetOriginId(): string;
    get trustedKeyGroups(): string[];
    get trustedSigners(): string[];
    get viewerProtocolPolicy(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCacheBehaviorsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCacheBehaviors): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses extends cdktf.ComplexComputedList {
    get errorCachingMinTtl(): number;
    get errorCode(): number;
    get responseCode(): number;
    get responsePagePath(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponsesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCustomErrorResponses): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get httpPort(): number;
    get httpsPort(): number;
    get originProtocolPolicy(): string;
    get originSslProtocols(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigCustomOriginToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigCustomOrigin): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies extends cdktf.ComplexComputedList {
    get forward(): string;
    get whitelistedNames(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesCookies): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues extends cdktf.ComplexComputedList {
    get cookies(): any;
    get headers(): string[];
    get queryString(): any;
    get queryStringCacheKeys(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorForwardedValues): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations extends cdktf.ComplexComputedList {
    get eventType(): string;
    get functionArn(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorFunctionAssociations): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations extends cdktf.ComplexComputedList {
    get eventType(): string;
    get includeBody(): any;
    get lambdaFunctionArn(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior extends cdktf.ComplexComputedList {
    get allowedMethods(): string[];
    get cachePolicyId(): string;
    get cachedMethods(): string[];
    get compress(): any;
    get defaultTtl(): number;
    get fieldLevelEncryptionId(): string;
    get forwardedValues(): any;
    get functionAssociations(): any;
    get lambdaFunctionAssociations(): any;
    get maxTtl(): number;
    get minTtl(): number;
    get originRequestPolicyId(): string;
    get realtimeLogConfigArn(): string;
    get smoothStreaming(): any;
    get targetOriginId(): string;
    get trustedKeyGroups(): string[];
    get trustedSigners(): string[];
    get viewerProtocolPolicy(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehaviorToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigDefaultCacheBehavior): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigLogging extends cdktf.ComplexComputedList {
    get bucket(): string;
    get includeCookies(): any;
    get prefix(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigLoggingToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigLogging): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes extends cdktf.ComplexComputedList {
    get items(): any;
    get quantity(): number;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria extends cdktf.ComplexComputedList {
    get statusCodes(): any;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsFailoverCriteria): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems extends cdktf.ComplexComputedList {
    get originId(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersItems): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers extends cdktf.ComplexComputedList {
    get items(): any;
    get quantity(): number;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembersToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsMembers): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems extends cdktf.ComplexComputedList {
    get failoverCriteria(): any;
    get id(): string;
    get members(): any;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItemsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroupsItems): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginGroups extends cdktf.ComplexComputedList {
    get items(): any;
    get quantity(): number;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginGroupsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginGroups): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig extends cdktf.ComplexComputedList {
    get httpPort(): number;
    get httpsPort(): number;
    get originKeepaliveTimeout(): number;
    get originProtocolPolicy(): string;
    get originReadTimeout(): number;
    get originSslProtocols(): string[];
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsCustomOriginConfig): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders extends cdktf.ComplexComputedList {
    get headerName(): string;
    get headerValue(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeadersToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginCustomHeaders): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield extends cdktf.ComplexComputedList {
    get enabled(): any;
    get originShieldRegion(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShieldToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsOriginShield): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig extends cdktf.ComplexComputedList {
    get originAccessIdentity(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOriginsS3OriginConfig): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigOrigins extends cdktf.ComplexComputedList {
    get connectionAttempts(): number;
    get connectionTimeout(): number;
    get customOriginConfig(): any;
    get domainName(): string;
    get id(): string;
    get originCustomHeaders(): any;
    get originPath(): string;
    get originShield(): any;
    get s3OriginConfig(): any;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigOriginsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigOrigins): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction extends cdktf.ComplexComputedList {
    get locations(): string[];
    get restrictionType(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestrictionToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigRestrictionsGeoRestriction): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigRestrictions extends cdktf.ComplexComputedList {
    get geoRestriction(): any;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigRestrictionsToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigRestrictions): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigS3Origin extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get originAccessIdentity(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigS3OriginToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigS3Origin): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate extends cdktf.ComplexComputedList {
    get acmCertificateArn(): string;
    get cloudfrontDefaultCertificate(): any;
    get iamCertificateId(): string;
    get minimumProtocolVersion(): string;
    get sslSupportMethod(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigViewerCertificateToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfigViewerCertificate): any;
export declare class DataAwsccCloudfrontDistributionDistributionConfig extends cdktf.ComplexComputedList {
    get aliases(): string[];
    get cacheBehaviors(): any;
    get cnamEs(): string[];
    get comment(): string;
    get customErrorResponses(): any;
    get customOrigin(): any;
    get defaultCacheBehavior(): any;
    get defaultRootObject(): string;
    get enabled(): any;
    get httpVersion(): string;
    get ipv6Enabled(): any;
    get logging(): any;
    get originGroups(): any;
    get origins(): any;
    get priceClass(): string;
    get restrictions(): any;
    get s3Origin(): any;
    get viewerCertificate(): any;
    get webAclId(): string;
}
export declare function dataAwsccCloudfrontDistributionDistributionConfigToTerraform(struct?: DataAwsccCloudfrontDistributionDistributionConfig): any;
export declare class DataAwsccCloudfrontDistributionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCloudfrontDistributionTagsToTerraform(struct?: DataAwsccCloudfrontDistributionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html awscc_cloudfront_distribution}
*/
export declare class DataAwsccCloudfrontDistribution extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distribution.html awscc_cloudfront_distribution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontDistributionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontDistributionConfig);
    get distributionConfig(): any;
    get domainName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
