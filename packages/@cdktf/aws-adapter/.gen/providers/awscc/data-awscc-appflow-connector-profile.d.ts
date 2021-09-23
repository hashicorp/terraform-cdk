import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAppflowConnectorProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html#id DataAwsccAppflowConnectorProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude extends cdktf.ComplexComputedList {
    get apiKey(): string;
    get secretKey(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog extends cdktf.ComplexComputedList {
    get apiKey(): string;
    get applicationKey(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace extends cdktf.ComplexComputedList {
    get apiToken(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest extends cdktf.ComplexComputedList {
    get authCode(): string;
    get redirectUri(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics extends cdktf.ComplexComputedList {
    get accessToken(): string;
    get clientId(): string;
    get clientSecret(): string;
    get connectorOAuthRequest(): any;
    get refreshToken(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus extends cdktf.ComplexComputedList {
    get accessKeyId(): string;
    get datakey(): string;
    get secretAccessKey(): string;
    get userId(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest extends cdktf.ComplexComputedList {
    get authCode(): string;
    get redirectUri(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo extends cdktf.ComplexComputedList {
    get accessToken(): string;
    get clientId(): string;
    get clientSecret(): string;
    get connectorOAuthRequest(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift extends cdktf.ComplexComputedList {
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest extends cdktf.ComplexComputedList {
    get authCode(): string;
    get redirectUri(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce extends cdktf.ComplexComputedList {
    get accessToken(): string;
    get clientCredentialsArn(): string;
    get connectorOAuthRequest(): any;
    get refreshToken(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow extends cdktf.ComplexComputedList {
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular extends cdktf.ComplexComputedList {
    get apiKey(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest extends cdktf.ComplexComputedList {
    get authCode(): string;
    get redirectUri(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack extends cdktf.ComplexComputedList {
    get accessToken(): string;
    get clientId(): string;
    get clientSecret(): string;
    get connectorOAuthRequest(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake extends cdktf.ComplexComputedList {
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro extends cdktf.ComplexComputedList {
    get apiSecretKey(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva extends cdktf.ComplexComputedList {
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest extends cdktf.ComplexComputedList {
    get authCode(): string;
    get redirectUri(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk extends cdktf.ComplexComputedList {
    get accessToken(): string;
    get clientId(): string;
    get clientSecret(): string;
    get connectorOAuthRequest(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials extends cdktf.ComplexComputedList {
    get amplitude(): any;
    get datadog(): any;
    get dynatrace(): any;
    get googleAnalytics(): any;
    get inforNexus(): any;
    get marketo(): any;
    get redshift(): any;
    get salesforce(): any;
    get serviceNow(): any;
    get singular(): any;
    get slack(): any;
    get snowflake(): any;
    get trendmicro(): any;
    get veeva(): any;
    get zendesk(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get databaseUrl(): string;
    get roleArn(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
    get isSandboxEnvironment(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake extends cdktf.ComplexComputedList {
    get accountName(): string;
    get bucketName(): string;
    get bucketPrefix(): string;
    get privateLinkServiceName(): string;
    get region(): string;
    get stage(): string;
    get warehouse(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk extends cdktf.ComplexComputedList {
    get instanceUrl(): string;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties extends cdktf.ComplexComputedList {
    get datadog(): any;
    get dynatrace(): any;
    get inforNexus(): any;
    get marketo(): any;
    get redshift(): any;
    get salesforce(): any;
    get serviceNow(): any;
    get slack(): any;
    get snowflake(): any;
    get veeva(): any;
    get zendesk(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any;
export declare class DataAwsccAppflowConnectorProfileConnectorProfileConfig extends cdktf.ComplexComputedList {
    get connectorProfileCredentials(): any;
    get connectorProfileProperties(): any;
}
export declare function dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html awscc_appflow_connector_profile}
*/
export declare class DataAwsccAppflowConnectorProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html awscc_appflow_connector_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAppflowConnectorProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAppflowConnectorProfileConfig);
    get connectionMode(): string;
    get connectorProfileArn(): string;
    get connectorProfileConfig(): any;
    get connectorProfileName(): string;
    get connectorType(): string;
    get credentialsArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
