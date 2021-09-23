import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppflowConnectorProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connection_mode AppflowConnectorProfile#connection_mode}
    */
    readonly connectionMode: string;
    /**
    * Connector specific configurations needed to create connector profile
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_profile_config AppflowConnectorProfile#connector_profile_config}
    */
    readonly connectorProfileConfig?: AppflowConnectorProfileConnectorProfileConfig;
    /**
    * The maximum number of items to retrieve in a single batch.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_profile_name AppflowConnectorProfile#connector_profile_name}
    */
    readonly connectorProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_type AppflowConnectorProfile#connector_type}
    */
    readonly connectorType: string;
    /**
    * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#kms_arn AppflowConnectorProfile#kms_arn}
    */
    readonly kmsArn?: string;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#secret_key AppflowConnectorProfile#secret_key}
    */
    readonly secretKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#application_key AppflowConnectorProfile#application_key}
    */
    readonly applicationKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_token AppflowConnectorProfile#api_token}
    */
    readonly apiToken: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
  granted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_key_id AppflowConnectorProfile#access_key_id}
    */
    readonly accessKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#datakey AppflowConnectorProfile#datakey}
    */
    readonly datakey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#secret_access_key AppflowConnectorProfile#secret_access_key}
    */
    readonly secretAccessKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#user_id AppflowConnectorProfile#user_id}
    */
    readonly userId: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
  granted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
  granted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_credentials_arn AppflowConnectorProfile#client_credentials_arn}
    */
    readonly clientCredentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
  granted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_secret_key AppflowConnectorProfile#api_secret_key}
    */
    readonly apiSecretKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
  granted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#amplitude AppflowConnectorProfile#amplitude}
    */
    readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#datadog AppflowConnectorProfile#datadog}
    */
    readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#dynatrace AppflowConnectorProfile#dynatrace}
    */
    readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#google_analytics AppflowConnectorProfile#google_analytics}
    */
    readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#infor_nexus AppflowConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#marketo AppflowConnectorProfile#marketo}
    */
    readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redshift AppflowConnectorProfile#redshift}
    */
    readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#salesforce AppflowConnectorProfile#salesforce}
    */
    readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#service_now AppflowConnectorProfile#service_now}
    */
    readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#singular AppflowConnectorProfile#singular}
    */
    readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#slack AppflowConnectorProfile#slack}
    */
    readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#snowflake AppflowConnectorProfile#snowflake}
    */
    readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#trendmicro AppflowConnectorProfile#trendmicro}
    */
    readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#veeva AppflowConnectorProfile#veeva}
    */
    readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#zendesk AppflowConnectorProfile#zendesk}
    */
    readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#bucket_name AppflowConnectorProfile#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#bucket_prefix AppflowConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#database_url AppflowConnectorProfile#database_url}
    */
    readonly databaseUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#role_arn AppflowConnectorProfile#role_arn}
    */
    readonly roleArn: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#is_sandbox_environment AppflowConnectorProfile#is_sandbox_environment}
    */
    readonly isSandboxEnvironment?: boolean | cdktf.IResolvable;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#account_name AppflowConnectorProfile#account_name}
    */
    readonly accountName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#bucket_name AppflowConnectorProfile#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#bucket_prefix AppflowConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#private_link_service_name AppflowConnectorProfile#private_link_service_name}
    */
    readonly privateLinkServiceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#region AppflowConnectorProfile#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#stage AppflowConnectorProfile#stage}
    */
    readonly stage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#warehouse AppflowConnectorProfile#warehouse}
    */
    readonly warehouse: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any;
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#datadog AppflowConnectorProfile#datadog}
    */
    readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#dynatrace AppflowConnectorProfile#dynatrace}
    */
    readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#infor_nexus AppflowConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#marketo AppflowConnectorProfile#marketo}
    */
    readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#redshift AppflowConnectorProfile#redshift}
    */
    readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#salesforce AppflowConnectorProfile#salesforce}
    */
    readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#service_now AppflowConnectorProfile#service_now}
    */
    readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#slack AppflowConnectorProfile#slack}
    */
    readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#snowflake AppflowConnectorProfile#snowflake}
    */
    readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#veeva AppflowConnectorProfile#veeva}
    */
    readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#zendesk AppflowConnectorProfile#zendesk}
    */
    readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any;
export interface AppflowConnectorProfileConnectorProfileConfig {
    /**
    * Connector specific configuration needed to create connector profile based on Authentication mechanism
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_profile_credentials AppflowConnectorProfile#connector_profile_credentials}
    */
    readonly connectorProfileCredentials: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials;
    /**
    * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#connector_profile_properties AppflowConnectorProfile#connector_profile_properties}
    */
    readonly connectorProfileProperties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties;
}
export declare function appflowConnectorProfileConnectorProfileConfigToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html awscc_appflow_connector_profile}
*/
export declare class AppflowConnectorProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html awscc_appflow_connector_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppflowConnectorProfileConfig
    */
    constructor(scope: Construct, id: string, config: AppflowConnectorProfileConfig);
    private _connectionMode;
    get connectionMode(): string;
    set connectionMode(value: string);
    get connectionModeInput(): string;
    get connectorProfileArn(): string;
    private _connectorProfileConfig?;
    get connectorProfileConfig(): AppflowConnectorProfileConnectorProfileConfig;
    set connectorProfileConfig(value: AppflowConnectorProfileConnectorProfileConfig);
    resetConnectorProfileConfig(): void;
    get connectorProfileConfigInput(): AppflowConnectorProfileConnectorProfileConfig | undefined;
    private _connectorProfileName;
    get connectorProfileName(): string;
    set connectorProfileName(value: string);
    get connectorProfileNameInput(): string;
    private _connectorType;
    get connectorType(): string;
    set connectorType(value: string);
    get connectorTypeInput(): string;
    get credentialsArn(): string;
    get id(): string;
    private _kmsArn?;
    get kmsArn(): string;
    set kmsArn(value: string);
    resetKmsArn(): void;
    get kmsArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
