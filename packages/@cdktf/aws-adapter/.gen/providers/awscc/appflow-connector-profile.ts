// https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_token AppflowConnectorProfile#api_token}
  */
  readonly apiToken: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    datakey: cdktf.stringToTerraform(struct!.datakey),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktf.stringToTerraform(struct!.clientCredentialsArn),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#api_secret_key AppflowConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_secret_key: cdktf.stringToTerraform(struct!.apiSecretKey),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct!.amplitude),
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct!.marketo),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct!.salesforce),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct!.serviceNow),
    singular: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct!.singular),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct!.snowflake),
    trendmicro: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct!.zendesk),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    database_url: cdktf.stringToTerraform(struct!.databaseUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktf.booleanToTerraform(struct!.isSandboxEnvironment),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    private_link_service_name: cdktf.stringToTerraform(struct!.privateLinkServiceName),
    region: cdktf.stringToTerraform(struct!.region),
    stage: cdktf.stringToTerraform(struct!.stage),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct!.dynatrace),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct!.marketo),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct!.serviceNow),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct!.snowflake),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct!.zendesk),
  }
}

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

export function appflowConnectorProfileConnectorProfileConfigToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct!.connectorProfileCredentials),
    connector_profile_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct!.connectorProfileProperties),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html awscc_appflow_connector_profile}
*/
export class AppflowConnectorProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appflow_connector_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appflow_connector_profile.html awscc_appflow_connector_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowConnectorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_connector_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionMode = config.connectionMode;
    this._connectorProfileConfig = config.connectorProfileConfig;
    this._connectorProfileName = config.connectorProfileName;
    this._connectorType = config.connectorType;
    this._kmsArn = config.kmsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mode - computed: false, optional: false, required: true
  private _connectionMode: string;
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode
  }

  // connector_profile_arn - computed: true, optional: false, required: false
  public get connectorProfileArn() {
    return this.getStringAttribute('connector_profile_arn');
  }

  // connector_profile_config - computed: false, optional: true, required: false
  private _connectorProfileConfig?: AppflowConnectorProfileConnectorProfileConfig;
  public get connectorProfileConfig() {
    return this.interpolationForAttribute('connector_profile_config') as any;
  }
  public set connectorProfileConfig(value: AppflowConnectorProfileConnectorProfileConfig ) {
    this._connectorProfileConfig = value;
  }
  public resetConnectorProfileConfig() {
    this._connectorProfileConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileConfigInput() {
    return this._connectorProfileConfig
  }

  // connector_profile_name - computed: false, optional: false, required: true
  private _connectorProfileName: string;
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType: string;
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string;
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      connector_profile_config: appflowConnectorProfileConnectorProfileConfigToTerraform(this._connectorProfileConfig),
      connector_profile_name: cdktf.stringToTerraform(this._connectorProfileName),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      kms_arn: cdktf.stringToTerraform(this._kmsArn),
    };
  }
}
