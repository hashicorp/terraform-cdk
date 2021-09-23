// https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAppflowConnectorProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html#id DataAwsccAppflowConnectorProfile#id}
  */
  readonly id: string;
}
export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude extends cdktf.ComplexComputedList {

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog extends cdktf.ComplexComputedList {

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace extends cdktf.ComplexComputedList {

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest extends cdktf.ComplexComputedList {

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  public get connectorOAuthRequest() {
    return this.interpolationForAttribute('connector_o_auth_request') as any;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus extends cdktf.ComplexComputedList {

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // datakey - computed: true, optional: false, required: false
  public get datakey() {
    return this.getStringAttribute('datakey');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    datakey: cdktf.stringToTerraform(struct!.datakey),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest extends cdktf.ComplexComputedList {

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  public get connectorOAuthRequest() {
    return this.interpolationForAttribute('connector_o_auth_request') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest extends cdktf.ComplexComputedList {

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_credentials_arn - computed: true, optional: false, required: false
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  public get connectorOAuthRequest() {
    return this.interpolationForAttribute('connector_o_auth_request') as any;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktf.stringToTerraform(struct!.clientCredentialsArn),
    connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular extends cdktf.ComplexComputedList {

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest extends cdktf.ComplexComputedList {

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  public get connectorOAuthRequest() {
    return this.interpolationForAttribute('connector_o_auth_request') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro extends cdktf.ComplexComputedList {

  // api_secret_key - computed: true, optional: false, required: false
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_secret_key: cdktf.stringToTerraform(struct!.apiSecretKey),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest extends cdktf.ComplexComputedList {

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  public get connectorOAuthRequest() {
    return this.interpolationForAttribute('connector_o_auth_request') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials extends cdktf.ComplexComputedList {

  // amplitude - computed: true, optional: false, required: false
  public get amplitude() {
    return this.interpolationForAttribute('amplitude') as any;
  }

  // datadog - computed: true, optional: false, required: false
  public get datadog() {
    return this.interpolationForAttribute('datadog') as any;
  }

  // dynatrace - computed: true, optional: false, required: false
  public get dynatrace() {
    return this.interpolationForAttribute('dynatrace') as any;
  }

  // google_analytics - computed: true, optional: false, required: false
  public get googleAnalytics() {
    return this.interpolationForAttribute('google_analytics') as any;
  }

  // infor_nexus - computed: true, optional: false, required: false
  public get inforNexus() {
    return this.interpolationForAttribute('infor_nexus') as any;
  }

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.interpolationForAttribute('marketo') as any;
  }

  // redshift - computed: true, optional: false, required: false
  public get redshift() {
    return this.interpolationForAttribute('redshift') as any;
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.interpolationForAttribute('salesforce') as any;
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.interpolationForAttribute('service_now') as any;
  }

  // singular - computed: true, optional: false, required: false
  public get singular() {
    return this.interpolationForAttribute('singular') as any;
  }

  // slack - computed: true, optional: false, required: false
  public get slack() {
    return this.interpolationForAttribute('slack') as any;
  }

  // snowflake - computed: true, optional: false, required: false
  public get snowflake() {
    return this.interpolationForAttribute('snowflake') as any;
  }

  // trendmicro - computed: true, optional: false, required: false
  public get trendmicro() {
    return this.interpolationForAttribute('trendmicro') as any;
  }

  // veeva - computed: true, optional: false, required: false
  public get veeva() {
    return this.interpolationForAttribute('veeva') as any;
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.interpolationForAttribute('zendesk') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct!.amplitude),
    datadog: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct!.datadog),
    dynatrace: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct!.dynatrace),
    google_analytics: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct!.inforNexus),
    marketo: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct!.marketo),
    redshift: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct!.redshift),
    salesforce: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct!.salesforce),
    service_now: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct!.serviceNow),
    singular: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct!.singular),
    slack: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct!.slack),
    snowflake: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct!.snowflake),
    trendmicro: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct!.trendmicro),
    veeva: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct!.veeva),
    zendesk: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct!.zendesk),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // database_url - computed: true, optional: false, required: false
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    database_url: cdktf.stringToTerraform(struct!.databaseUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_sandbox_environment - computed: true, optional: false, required: false
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktf.booleanToTerraform(struct!.isSandboxEnvironment),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake extends cdktf.ComplexComputedList {

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any {
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

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk extends cdktf.ComplexComputedList {

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties extends cdktf.ComplexComputedList {

  // datadog - computed: true, optional: false, required: false
  public get datadog() {
    return this.interpolationForAttribute('datadog') as any;
  }

  // dynatrace - computed: true, optional: false, required: false
  public get dynatrace() {
    return this.interpolationForAttribute('dynatrace') as any;
  }

  // infor_nexus - computed: true, optional: false, required: false
  public get inforNexus() {
    return this.interpolationForAttribute('infor_nexus') as any;
  }

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.interpolationForAttribute('marketo') as any;
  }

  // redshift - computed: true, optional: false, required: false
  public get redshift() {
    return this.interpolationForAttribute('redshift') as any;
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.interpolationForAttribute('salesforce') as any;
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.interpolationForAttribute('service_now') as any;
  }

  // slack - computed: true, optional: false, required: false
  public get slack() {
    return this.interpolationForAttribute('slack') as any;
  }

  // snowflake - computed: true, optional: false, required: false
  public get snowflake() {
    return this.interpolationForAttribute('snowflake') as any;
  }

  // veeva - computed: true, optional: false, required: false
  public get veeva() {
    return this.interpolationForAttribute('veeva') as any;
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.interpolationForAttribute('zendesk') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datadog: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct!.dynatrace),
    infor_nexus: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct!.marketo),
    redshift: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct!.redshift),
    salesforce: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct!.serviceNow),
    slack: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct!.slack),
    snowflake: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct!.snowflake),
    veeva: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct!.veeva),
    zendesk: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfig extends cdktf.ComplexComputedList {

  // connector_profile_credentials - computed: true, optional: false, required: false
  public get connectorProfileCredentials() {
    return this.interpolationForAttribute('connector_profile_credentials') as any;
  }

  // connector_profile_properties - computed: true, optional: false, required: false
  public get connectorProfileProperties() {
    return this.interpolationForAttribute('connector_profile_properties') as any;
  }
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_credentials: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct!.connectorProfileCredentials),
    connector_profile_properties: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct!.connectorProfileProperties),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html awscc_appflow_connector_profile}
*/
export class DataAwsccAppflowConnectorProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appflow_connector_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html awscc_appflow_connector_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppflowConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppflowConnectorProfileConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // connector_profile_arn - computed: true, optional: false, required: false
  public get connectorProfileArn() {
    return this.getStringAttribute('connector_profile_arn');
  }

  // connector_profile_config - computed: true, optional: false, required: false
  public get connectorProfileConfig() {
    return this.interpolationForAttribute('connector_profile_config') as any;
  }

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
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

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
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
