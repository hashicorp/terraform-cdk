"use strict";
// https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude = void 0;
exports.DataAwsccAppflowConnectorProfile = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfig = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce = exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform = exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift = void 0;
const cdktf = require("cdktf");
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude extends cdktf.ComplexComputedList {
    // api_key - computed: true, optional: false, required: false
    get apiKey() {
        return this.getStringAttribute('api_key');
    }
    // secret_key - computed: true, optional: false, required: false
    get secretKey() {
        return this.getStringAttribute('secret_key');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_key: cdktf.stringToTerraform(struct.apiKey),
        secret_key: cdktf.stringToTerraform(struct.secretKey),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog extends cdktf.ComplexComputedList {
    // api_key - computed: true, optional: false, required: false
    get apiKey() {
        return this.getStringAttribute('api_key');
    }
    // application_key - computed: true, optional: false, required: false
    get applicationKey() {
        return this.getStringAttribute('application_key');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_key: cdktf.stringToTerraform(struct.apiKey),
        application_key: cdktf.stringToTerraform(struct.applicationKey),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace extends cdktf.ComplexComputedList {
    // api_token - computed: true, optional: false, required: false
    get apiToken() {
        return this.getStringAttribute('api_token');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_token: cdktf.stringToTerraform(struct.apiToken),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest extends cdktf.ComplexComputedList {
    // auth_code - computed: true, optional: false, required: false
    get authCode() {
        return this.getStringAttribute('auth_code');
    }
    // redirect_uri - computed: true, optional: false, required: false
    get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_code: cdktf.stringToTerraform(struct.authCode),
        redirect_uri: cdktf.stringToTerraform(struct.redirectUri),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics extends cdktf.ComplexComputedList {
    // access_token - computed: true, optional: false, required: false
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // connector_o_auth_request - computed: true, optional: false, required: false
    get connectorOAuthRequest() {
        return this.interpolationForAttribute('connector_o_auth_request');
    }
    // refresh_token - computed: true, optional: false, required: false
    get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct.connectorOAuthRequest),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus extends cdktf.ComplexComputedList {
    // access_key_id - computed: true, optional: false, required: false
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    // datakey - computed: true, optional: false, required: false
    get datakey() {
        return this.getStringAttribute('datakey');
    }
    // secret_access_key - computed: true, optional: false, required: false
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    // user_id - computed: true, optional: false, required: false
    get userId() {
        return this.getStringAttribute('user_id');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        datakey: cdktf.stringToTerraform(struct.datakey),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
        user_id: cdktf.stringToTerraform(struct.userId),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest extends cdktf.ComplexComputedList {
    // auth_code - computed: true, optional: false, required: false
    get authCode() {
        return this.getStringAttribute('auth_code');
    }
    // redirect_uri - computed: true, optional: false, required: false
    get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_code: cdktf.stringToTerraform(struct.authCode),
        redirect_uri: cdktf.stringToTerraform(struct.redirectUri),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo extends cdktf.ComplexComputedList {
    // access_token - computed: true, optional: false, required: false
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // connector_o_auth_request - computed: true, optional: false, required: false
    get connectorOAuthRequest() {
        return this.interpolationForAttribute('connector_o_auth_request');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct.connectorOAuthRequest),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift extends cdktf.ComplexComputedList {
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest extends cdktf.ComplexComputedList {
    // auth_code - computed: true, optional: false, required: false
    get authCode() {
        return this.getStringAttribute('auth_code');
    }
    // redirect_uri - computed: true, optional: false, required: false
    get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_code: cdktf.stringToTerraform(struct.authCode),
        redirect_uri: cdktf.stringToTerraform(struct.redirectUri),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce extends cdktf.ComplexComputedList {
    // access_token - computed: true, optional: false, required: false
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    // client_credentials_arn - computed: true, optional: false, required: false
    get clientCredentialsArn() {
        return this.getStringAttribute('client_credentials_arn');
    }
    // connector_o_auth_request - computed: true, optional: false, required: false
    get connectorOAuthRequest() {
        return this.interpolationForAttribute('connector_o_auth_request');
    }
    // refresh_token - computed: true, optional: false, required: false
    get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_credentials_arn: cdktf.stringToTerraform(struct.clientCredentialsArn),
        connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct.connectorOAuthRequest),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow extends cdktf.ComplexComputedList {
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular extends cdktf.ComplexComputedList {
    // api_key - computed: true, optional: false, required: false
    get apiKey() {
        return this.getStringAttribute('api_key');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_key: cdktf.stringToTerraform(struct.apiKey),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest extends cdktf.ComplexComputedList {
    // auth_code - computed: true, optional: false, required: false
    get authCode() {
        return this.getStringAttribute('auth_code');
    }
    // redirect_uri - computed: true, optional: false, required: false
    get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_code: cdktf.stringToTerraform(struct.authCode),
        redirect_uri: cdktf.stringToTerraform(struct.redirectUri),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack extends cdktf.ComplexComputedList {
    // access_token - computed: true, optional: false, required: false
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // connector_o_auth_request - computed: true, optional: false, required: false
    get connectorOAuthRequest() {
        return this.interpolationForAttribute('connector_o_auth_request');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct.connectorOAuthRequest),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake extends cdktf.ComplexComputedList {
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro extends cdktf.ComplexComputedList {
    // api_secret_key - computed: true, optional: false, required: false
    get apiSecretKey() {
        return this.getStringAttribute('api_secret_key');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_secret_key: cdktf.stringToTerraform(struct.apiSecretKey),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva extends cdktf.ComplexComputedList {
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest extends cdktf.ComplexComputedList {
    // auth_code - computed: true, optional: false, required: false
    get authCode() {
        return this.getStringAttribute('auth_code');
    }
    // redirect_uri - computed: true, optional: false, required: false
    get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_code: cdktf.stringToTerraform(struct.authCode),
        redirect_uri: cdktf.stringToTerraform(struct.redirectUri),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk extends cdktf.ComplexComputedList {
    // access_token - computed: true, optional: false, required: false
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // connector_o_auth_request - computed: true, optional: false, required: false
    get connectorOAuthRequest() {
        return this.interpolationForAttribute('connector_o_auth_request');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        connector_o_auth_request: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct.connectorOAuthRequest),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials extends cdktf.ComplexComputedList {
    // amplitude - computed: true, optional: false, required: false
    get amplitude() {
        return this.interpolationForAttribute('amplitude');
    }
    // datadog - computed: true, optional: false, required: false
    get datadog() {
        return this.interpolationForAttribute('datadog');
    }
    // dynatrace - computed: true, optional: false, required: false
    get dynatrace() {
        return this.interpolationForAttribute('dynatrace');
    }
    // google_analytics - computed: true, optional: false, required: false
    get googleAnalytics() {
        return this.interpolationForAttribute('google_analytics');
    }
    // infor_nexus - computed: true, optional: false, required: false
    get inforNexus() {
        return this.interpolationForAttribute('infor_nexus');
    }
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.interpolationForAttribute('marketo');
    }
    // redshift - computed: true, optional: false, required: false
    get redshift() {
        return this.interpolationForAttribute('redshift');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.interpolationForAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.interpolationForAttribute('service_now');
    }
    // singular - computed: true, optional: false, required: false
    get singular() {
        return this.interpolationForAttribute('singular');
    }
    // slack - computed: true, optional: false, required: false
    get slack() {
        return this.interpolationForAttribute('slack');
    }
    // snowflake - computed: true, optional: false, required: false
    get snowflake() {
        return this.interpolationForAttribute('snowflake');
    }
    // trendmicro - computed: true, optional: false, required: false
    get trendmicro() {
        return this.interpolationForAttribute('trendmicro');
    }
    // veeva - computed: true, optional: false, required: false
    get veeva() {
        return this.interpolationForAttribute('veeva');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.interpolationForAttribute('zendesk');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amplitude: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct.amplitude),
        datadog: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct.datadog),
        dynatrace: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct.dynatrace),
        google_analytics: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct.googleAnalytics),
        infor_nexus: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct.inforNexus),
        marketo: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct.marketo),
        redshift: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct.redshift),
        salesforce: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct.salesforce),
        service_now: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct.serviceNow),
        singular: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct.singular),
        slack: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct.slack),
        snowflake: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct.snowflake),
        trendmicro: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct.trendmicro),
        veeva: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct.veeva),
        zendesk: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct.zendesk),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // database_url - computed: true, optional: false, required: false
    get databaseUrl() {
        return this.getStringAttribute('database_url');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        database_url: cdktf.stringToTerraform(struct.databaseUrl),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    // is_sandbox_environment - computed: true, optional: false, required: false
    get isSandboxEnvironment() {
        return this.getBooleanAttribute('is_sandbox_environment');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
        is_sandbox_environment: cdktf.booleanToTerraform(struct.isSandboxEnvironment),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake extends cdktf.ComplexComputedList {
    // account_name - computed: true, optional: false, required: false
    get accountName() {
        return this.getStringAttribute('account_name');
    }
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // private_link_service_name - computed: true, optional: false, required: false
    get privateLinkServiceName() {
        return this.getStringAttribute('private_link_service_name');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // stage - computed: true, optional: false, required: false
    get stage() {
        return this.getStringAttribute('stage');
    }
    // warehouse - computed: true, optional: false, required: false
    get warehouse() {
        return this.getStringAttribute('warehouse');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_name: cdktf.stringToTerraform(struct.accountName),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        private_link_service_name: cdktf.stringToTerraform(struct.privateLinkServiceName),
        region: cdktf.stringToTerraform(struct.region),
        stage: cdktf.stringToTerraform(struct.stage),
        warehouse: cdktf.stringToTerraform(struct.warehouse),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk extends cdktf.ComplexComputedList {
    // instance_url - computed: true, optional: false, required: false
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties extends cdktf.ComplexComputedList {
    // datadog - computed: true, optional: false, required: false
    get datadog() {
        return this.interpolationForAttribute('datadog');
    }
    // dynatrace - computed: true, optional: false, required: false
    get dynatrace() {
        return this.interpolationForAttribute('dynatrace');
    }
    // infor_nexus - computed: true, optional: false, required: false
    get inforNexus() {
        return this.interpolationForAttribute('infor_nexus');
    }
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.interpolationForAttribute('marketo');
    }
    // redshift - computed: true, optional: false, required: false
    get redshift() {
        return this.interpolationForAttribute('redshift');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.interpolationForAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.interpolationForAttribute('service_now');
    }
    // slack - computed: true, optional: false, required: false
    get slack() {
        return this.interpolationForAttribute('slack');
    }
    // snowflake - computed: true, optional: false, required: false
    get snowflake() {
        return this.interpolationForAttribute('snowflake');
    }
    // veeva - computed: true, optional: false, required: false
    get veeva() {
        return this.interpolationForAttribute('veeva');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.interpolationForAttribute('zendesk');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties = DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        datadog: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct.datadog),
        dynatrace: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct.dynatrace),
        infor_nexus: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct.inforNexus),
        marketo: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct.marketo),
        redshift: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct.redshift),
        salesforce: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct.salesforce),
        service_now: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct.serviceNow),
        slack: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct.slack),
        snowflake: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct.snowflake),
        veeva: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct.veeva),
        zendesk: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct.zendesk),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform;
class DataAwsccAppflowConnectorProfileConnectorProfileConfig extends cdktf.ComplexComputedList {
    // connector_profile_credentials - computed: true, optional: false, required: false
    get connectorProfileCredentials() {
        return this.interpolationForAttribute('connector_profile_credentials');
    }
    // connector_profile_properties - computed: true, optional: false, required: false
    get connectorProfileProperties() {
        return this.interpolationForAttribute('connector_profile_properties');
    }
}
exports.DataAwsccAppflowConnectorProfileConnectorProfileConfig = DataAwsccAppflowConnectorProfileConnectorProfileConfig;
function dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_profile_credentials: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct.connectorProfileCredentials),
        connector_profile_properties: dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct.connectorProfileProperties),
    };
}
exports.dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform = dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_connector_profile.html awscc_appflow_connector_profile}
*/
class DataAwsccAppflowConnectorProfile extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get connectionMode() {
        return this.getStringAttribute('connection_mode');
    }
    // connector_profile_arn - computed: true, optional: false, required: false
    get connectorProfileArn() {
        return this.getStringAttribute('connector_profile_arn');
    }
    // connector_profile_config - computed: true, optional: false, required: false
    get connectorProfileConfig() {
        return this.interpolationForAttribute('connector_profile_config');
    }
    // connector_profile_name - computed: true, optional: false, required: false
    get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    // connector_type - computed: true, optional: false, required: false
    get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    // credentials_arn - computed: true, optional: false, required: false
    get credentialsArn() {
        return this.getStringAttribute('credentials_arn');
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
    // kms_arn - computed: true, optional: false, required: false
    get kmsArn() {
        return this.getStringAttribute('kms_arn');
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
exports.DataAwsccAppflowConnectorProfile = DataAwsccAppflowConnectorProfile;
// =================
// STATIC PROPERTIES
// =================
DataAwsccAppflowConnectorProfile.tfResourceType = "awscc_appflow_connector_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hcHBmbG93LWNvbm5lY3Rvci1wcm9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1hcHBmbG93LWNvbm5lY3Rvci1wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRkFBaUY7QUFDakYsMkNBQTJDOzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLDBGQUEyRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkksNkRBQTZEO0lBQzdELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQVhELGdNQVdDO0FBRUQsU0FBZ0IscUdBQXFHLENBQUMsTUFBbUc7SUFDdk4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3ZELENBQUE7QUFDSCxDQUFDO0FBTkQsc05BTUM7QUFFRCxNQUFhLHdGQUF5RixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckksNkRBQTZEO0lBQzdELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQs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QWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQTVGSCw0RUE2RkM7QUEzRkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywrQ0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwZmxvd19jb25uZWN0b3JfcHJvZmlsZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hcHBmbG93X2Nvbm5lY3Rvcl9wcm9maWxlLmh0bWwjaWQgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGUjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzQW1wbGl0dWRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXBpX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFwaUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwaV9rZXknKTtcbiAgfVxuXG4gIC8vIHNlY3JldF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfa2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0FtcGxpdHVkZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0FtcGxpdHVkZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcGlfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwaUtleSksXG4gICAgc2VjcmV0X2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRLZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEYXRhZG9nIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXBpX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFwaUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwaV9rZXknKTtcbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25fa2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0RhdGFkb2dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEYXRhZG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFwaV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBpS2V5KSxcbiAgICBhcHBsaWNhdGlvbl9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25LZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEeW5hdHJhY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcGlfdG9rZW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcGlUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwaV90b2tlbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEeW5hdHJhY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEeW5hdHJhY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXBpX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwaVRva2VuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzR29vZ2xlQW5hbHl0aWNzQ29ubmVjdG9yT0F1dGhSZXF1ZXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0aF9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aENvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoX2NvZGUnKTtcbiAgfVxuXG4gIC8vIHJlZGlyZWN0X3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZGlyZWN0VXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVkaXJlY3RfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0dvb2dsZUFuYWx5dGljc0Nvbm5lY3Rvck9BdXRoUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0dvb2dsZUFuYWx5dGljc0Nvbm5lY3Rvck9BdXRoUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aENvZGUpLFxuICAgIHJlZGlyZWN0X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRpcmVjdFVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0dvb2dsZUFuYWx5dGljcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjY2Vzc190b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cblxuICAvLyBjbGllbnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGllbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9pZCcpO1xuICB9XG5cbiAgLy8gY2xpZW50X3NlY3JldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudFNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9zZWNyZXQnKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rvcl9vX2F1dGhfcmVxdWVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rvck9BdXRoUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3QnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWZyZXNoX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVmcmVzaF90b2tlbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNHb29nbGVBbmFseXRpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNHb29nbGVBbmFseXRpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1Rva2VuKSxcbiAgICBjbGllbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50SWQpLFxuICAgIGNsaWVudF9zZWNyZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50U2VjcmV0KSxcbiAgICBjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3Q6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0dvb2dsZUFuYWx5dGljc0Nvbm5lY3Rvck9BdXRoUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdG9yT0F1dGhSZXF1ZXN0KSxcbiAgICByZWZyZXNoX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZnJlc2hUb2tlbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0luZm9yTmV4dXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3Nfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3Nfa2V5X2lkJyk7XG4gIH1cblxuICAvLyBkYXRha2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFrZXknKTtcbiAgfVxuXG4gIC8vIHNlY3JldF9hY2Nlc3Nfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjcmV0QWNjZXNzS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X2FjY2Vzc19rZXknKTtcbiAgfVxuXG4gIC8vIHVzZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc0luZm9yTmV4dXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNJbmZvck5leHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzS2V5SWQpLFxuICAgIGRhdGFrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWtleSksXG4gICAgc2VjcmV0X2FjY2Vzc19rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0QWNjZXNzS2V5KSxcbiAgICB1c2VyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc01hcmtldG9Db25uZWN0b3JPQXV0aFJlcXVlc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdXRoX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhfY29kZScpO1xuICB9XG5cbiAgLy8gcmVkaXJlY3RfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkaXJlY3RVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWRpcmVjdF91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzTWFya2V0b0Nvbm5lY3Rvck9BdXRoUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc01hcmtldG9Db25uZWN0b3JPQXV0aFJlcXVlc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXV0aF9jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhDb2RlKSxcbiAgICByZWRpcmVjdF91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVkaXJlY3RVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNNYXJrZXRvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3NfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIGNsaWVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X2lkJyk7XG4gIH1cblxuICAvLyBjbGllbnRfc2VjcmV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50U2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X3NlY3JldCcpO1xuICB9XG5cbiAgLy8gY29ubmVjdG9yX29fYXV0aF9yZXF1ZXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdG9yT0F1dGhSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nvbm5lY3Rvcl9vX2F1dGhfcmVxdWVzdCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzTWFya2V0b1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc01hcmtldG8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1Rva2VuKSxcbiAgICBjbGllbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50SWQpLFxuICAgIGNsaWVudF9zZWNyZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50U2VjcmV0KSxcbiAgICBjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3Q6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc01hcmtldG9Db25uZWN0b3JPQXV0aFJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rvck9BdXRoUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1JlZHNoaWZ0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzUmVkc2hpZnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNSZWRzaGlmdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTYWxlc2ZvcmNlQ29ubmVjdG9yT0F1dGhSZXF1ZXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0aF9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aENvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoX2NvZGUnKTtcbiAgfVxuXG4gIC8vIHJlZGlyZWN0X3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZGlyZWN0VXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVkaXJlY3RfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NhbGVzZm9yY2VDb25uZWN0b3JPQXV0aFJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTYWxlc2ZvcmNlQ29ubmVjdG9yT0F1dGhSZXF1ZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dGhfY29kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoQ29kZSksXG4gICAgcmVkaXJlY3RfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZGlyZWN0VXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2FsZXNmb3JjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjY2Vzc190b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cblxuICAvLyBjbGllbnRfY3JlZGVudGlhbHNfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50Q3JlZGVudGlhbHNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfY3JlZGVudGlhbHNfYXJuJyk7XG4gIH1cblxuICAvLyBjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JPQXV0aFJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29ubmVjdG9yX29fYXV0aF9yZXF1ZXN0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVmcmVzaF90b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZnJlc2hUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2FsZXNmb3JjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NhbGVzZm9yY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1Rva2VuKSxcbiAgICBjbGllbnRfY3JlZGVudGlhbHNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudENyZWRlbnRpYWxzQXJuKSxcbiAgICBjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3Q6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NhbGVzZm9yY2VDb25uZWN0b3JPQXV0aFJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rvck9BdXRoUmVxdWVzdCksXG4gICAgcmVmcmVzaF90b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZyZXNoVG9rZW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTZXJ2aWNlTm93IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NlcnZpY2VOb3cpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2luZ3VsYXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcGlfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXBpS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBpX2tleScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTaW5ndWxhclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1Npbmd1bGFyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFwaV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBpS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2xhY2tDb25uZWN0b3JPQXV0aFJlcXVlc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdXRoX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhfY29kZScpO1xuICB9XG5cbiAgLy8gcmVkaXJlY3RfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkaXJlY3RVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWRpcmVjdF91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2xhY2tDb25uZWN0b3JPQXV0aFJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTbGFja0Nvbm5lY3Rvck9BdXRoUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aENvZGUpLFxuICAgIHJlZGlyZWN0X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRpcmVjdFVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NsYWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3NfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIGNsaWVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X2lkJyk7XG4gIH1cblxuICAvLyBjbGllbnRfc2VjcmV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50U2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X3NlY3JldCcpO1xuICB9XG5cbiAgLy8gY29ubmVjdG9yX29fYXV0aF9yZXF1ZXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdG9yT0F1dGhSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nvbm5lY3Rvcl9vX2F1dGhfcmVxdWVzdCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2xhY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTbGFjayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzVG9rZW4pLFxuICAgIGNsaWVudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRJZCksXG4gICAgY2xpZW50X3NlY3JldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRTZWNyZXQpLFxuICAgIGNvbm5lY3Rvcl9vX2F1dGhfcmVxdWVzdDogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2xhY2tDb25uZWN0b3JPQXV0aFJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rvck9BdXRoUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1Nub3dmbGFrZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXNzd29yZCcpO1xuICB9XG5cbiAgLy8gdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJuYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1Nub3dmbGFrZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1Nub3dmbGFrZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNUcmVuZG1pY3JvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXBpX3NlY3JldF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcGlTZWNyZXRLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcGlfc2VjcmV0X2tleScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNUcmVuZG1pY3JvVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzVHJlbmRtaWNybyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcGlfc2VjcmV0X2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcGlTZWNyZXRLZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNWZWV2YSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXNzd29yZCcpO1xuICB9XG5cbiAgLy8gdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJuYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1ZlZXZhVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzVmVldmEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzWmVuZGVza0Nvbm5lY3Rvck9BdXRoUmVxdWVzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF1dGhfY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aF9jb2RlJyk7XG4gIH1cblxuICAvLyByZWRpcmVjdF91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWRpcmVjdFVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZGlyZWN0X3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNaZW5kZXNrQ29ubmVjdG9yT0F1dGhSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzWmVuZGVza0Nvbm5lY3Rvck9BdXRoUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aENvZGUpLFxuICAgIHJlZGlyZWN0X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRpcmVjdFVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1plbmRlc2sgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfdG9rZW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc190b2tlbicpO1xuICB9XG5cbiAgLy8gY2xpZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfaWQnKTtcbiAgfVxuXG4gIC8vIGNsaWVudF9zZWNyZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfc2VjcmV0Jyk7XG4gIH1cblxuICAvLyBjb25uZWN0b3Jfb19hdXRoX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JPQXV0aFJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29ubmVjdG9yX29fYXV0aF9yZXF1ZXN0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNaZW5kZXNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzWmVuZGVzayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzVG9rZW4pLFxuICAgIGNsaWVudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRJZCksXG4gICAgY2xpZW50X3NlY3JldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRTZWNyZXQpLFxuICAgIGNvbm5lY3Rvcl9vX2F1dGhfcmVxdWVzdDogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzWmVuZGVza0Nvbm5lY3Rvck9BdXRoUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdG9yT0F1dGhSZXF1ZXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYW1wbGl0dWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW1wbGl0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FtcGxpdHVkZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFkb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhZG9nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFkb2cnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkeW5hdHJhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkeW5hdHJhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZHluYXRyYWNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZ29vZ2xlX2FuYWx5dGljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdvb2dsZUFuYWx5dGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnb29nbGVfYW5hbHl0aWNzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW5mb3JfbmV4dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmZvck5leHVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZm9yX25leHVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWFya2V0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmtldG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWFya2V0bycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVkc2hpZnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzYWxlc2ZvcmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2FsZXNmb3JjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzYWxlc2ZvcmNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VydmljZV9ub3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlTm93KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlcnZpY2Vfbm93JykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2luZ3VsYXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaW5ndWxhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzaW5ndWxhcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNsYWNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2xhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2xhY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzbm93Zmxha2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbm93Zmxha2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc25vd2ZsYWtlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHJlbmRtaWNybyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyZW5kbWljcm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHJlbmRtaWNybycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZlZXZhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVldmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmVldmEnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB6ZW5kZXNrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgemVuZGVzaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd6ZW5kZXNrJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1wbGl0dWRlOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNBbXBsaXR1ZGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmFtcGxpdHVkZSksXG4gICAgZGF0YWRvZzogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzRGF0YWRvZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWRvZyksXG4gICAgZHluYXRyYWNlOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNEeW5hdHJhY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmR5bmF0cmFjZSksXG4gICAgZ29vZ2xlX2FuYWx5dGljczogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzR29vZ2xlQW5hbHl0aWNzVG9UZXJyYWZvcm0oc3RydWN0IS5nb29nbGVBbmFseXRpY3MpLFxuICAgIGluZm9yX25leHVzOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNJbmZvck5leHVzVG9UZXJyYWZvcm0oc3RydWN0IS5pbmZvck5leHVzKSxcbiAgICBtYXJrZXRvOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNNYXJrZXRvVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRvKSxcbiAgICByZWRzaGlmdDogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzUmVkc2hpZnRUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZHNoaWZ0KSxcbiAgICBzYWxlc2ZvcmNlOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTYWxlc2ZvcmNlVG9UZXJyYWZvcm0oc3RydWN0IS5zYWxlc2ZvcmNlKSxcbiAgICBzZXJ2aWNlX25vdzogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5vdyksXG4gICAgc2luZ3VsYXI6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1Npbmd1bGFyVG9UZXJyYWZvcm0oc3RydWN0IS5zaW5ndWxhciksXG4gICAgc2xhY2s6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1NsYWNrVG9UZXJyYWZvcm0oc3RydWN0IS5zbGFjayksXG4gICAgc25vd2ZsYWtlOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNTbm93Zmxha2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnNub3dmbGFrZSksXG4gICAgdHJlbmRtaWNybzogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzVHJlbmRtaWNyb1RvVGVycmFmb3JtKHN0cnVjdCEudHJlbmRtaWNybyksXG4gICAgdmVldmE6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFsc1ZlZXZhVG9UZXJyYWZvcm0oc3RydWN0IS52ZWV2YSksXG4gICAgemVuZGVzazogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZUNyZWRlbnRpYWxzWmVuZGVza1RvVGVycmFmb3JtKHN0cnVjdCEuemVuZGVzayksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzRGF0YWRvZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzRGF0YWRvZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzRGF0YWRvZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc0R5bmF0cmFjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzRHluYXRyYWNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNEeW5hdHJhY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNJbmZvck5leHVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5zdGFuY2VfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV91cmwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNJbmZvck5leHVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNJbmZvck5leHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVVybCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzTWFya2V0byBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzTWFya2V0b1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzTWFya2V0byk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1JlZHNoaWZ0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZVVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX3VybCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNSZWRzaGlmdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzUmVkc2hpZnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgYnVja2V0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRQcmVmaXgpLFxuICAgIGRhdGFiYXNlX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZVVybCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2FsZXNmb3JjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cblxuICAvLyBpc19zYW5kYm94X2Vudmlyb25tZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXNTYW5kYm94RW52aXJvbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaXNfc2FuZGJveF9lbnZpcm9ubWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1NhbGVzZm9yY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1NhbGVzZm9yY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVXJsKSxcbiAgICBpc19zYW5kYm94X2Vudmlyb25tZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pc1NhbmRib3hFbnZpcm9ubWVudCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2VydmljZU5vdyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2VydmljZU5vdyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1NsYWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5zdGFuY2VfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV91cmwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNTbGFja1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2xhY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVXJsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNTbm93Zmxha2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NvdW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2NvdW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfbmFtZScpO1xuICB9XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBwcml2YXRlX2xpbmtfc2VydmljZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUxpbmtTZXJ2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfbGlua19zZXJ2aWNlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lvbicpO1xuICB9XG5cbiAgLy8gc3RhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWdlJyk7XG4gIH1cblxuICAvLyB3YXJlaG91c2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJlaG91c2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3YXJlaG91c2UnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNTbm93Zmxha2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1Nub3dmbGFrZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudE5hbWUpLFxuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBwcml2YXRlX2xpbmtfc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaXZhdGVMaW5rU2VydmljZU5hbWUpLFxuICAgIHJlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWdpb24pLFxuICAgIHN0YWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YWdlKSxcbiAgICB3YXJlaG91c2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FyZWhvdXNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNWZWV2YSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzVmVldmFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1ZlZXZhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVVybCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzWmVuZGVzayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzWmVuZGVza1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzWmVuZGVzayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFkb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhZG9nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFkb2cnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkeW5hdHJhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkeW5hdHJhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZHluYXRyYWNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW5mb3JfbmV4dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmZvck5leHVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZm9yX25leHVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWFya2V0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmtldG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWFya2V0bycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVkc2hpZnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzYWxlc2ZvcmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2FsZXNmb3JjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzYWxlc2ZvcmNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VydmljZV9ub3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlTm93KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlcnZpY2Vfbm93JykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2xhY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbGFjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNub3dmbGFrZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNub3dmbGFrZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbm93Zmxha2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZWV2YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlZXZhKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlZXZhJykgYXMgYW55O1xuICB9XG5cbiAgLy8gemVuZGVzayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHplbmRlc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnemVuZGVzaycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhZG9nOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc0RhdGFkb2dUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFkb2cpLFxuICAgIGR5bmF0cmFjZTogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNEeW5hdHJhY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmR5bmF0cmFjZSksXG4gICAgaW5mb3JfbmV4dXM6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzSW5mb3JOZXh1c1RvVGVycmFmb3JtKHN0cnVjdCEuaW5mb3JOZXh1cyksXG4gICAgbWFya2V0bzogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNNYXJrZXRvVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRvKSxcbiAgICByZWRzaGlmdDogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNSZWRzaGlmdFRvVGVycmFmb3JtKHN0cnVjdCEucmVkc2hpZnQpLFxuICAgIHNhbGVzZm9yY2U6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2FsZXNmb3JjZVRvVGVycmFmb3JtKHN0cnVjdCEuc2FsZXNmb3JjZSksXG4gICAgc2VydmljZV9ub3c6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5vdyksXG4gICAgc2xhY2s6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU2xhY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLnNsYWNrKSxcbiAgICBzbm93Zmxha2U6IGRhdGFBd3NjY0FwcGZsb3dDb25uZWN0b3JQcm9maWxlQ29ubmVjdG9yUHJvZmlsZUNvbmZpZ0Nvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzU25vd2ZsYWtlVG9UZXJyYWZvcm0oc3RydWN0IS5zbm93Zmxha2UpLFxuICAgIHZlZXZhOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlUHJvcGVydGllc1ZlZXZhVG9UZXJyYWZvcm0oc3RydWN0IS52ZWV2YSksXG4gICAgemVuZGVzazogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNaZW5kZXNrVG9UZXJyYWZvcm0oc3RydWN0IS56ZW5kZXNrKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29ubmVjdG9yX3Byb2ZpbGVfY3JlZGVudGlhbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29ubmVjdG9yX3Byb2ZpbGVfY3JlZGVudGlhbHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb25uZWN0b3JfcHJvZmlsZV9wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29ubmVjdG9yX3Byb2ZpbGVfcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rvcl9wcm9maWxlX2NyZWRlbnRpYWxzOiBkYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZUNvbm5lY3RvclByb2ZpbGVDb25maWdDb25uZWN0b3JQcm9maWxlQ3JlZGVudGlhbHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3RvclByb2ZpbGVDcmVkZW50aWFscyksXG4gICAgY29ubmVjdG9yX3Byb2ZpbGVfcHJvcGVydGllczogZGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25uZWN0b3JQcm9maWxlQ29uZmlnQ29ubmVjdG9yUHJvZmlsZVByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3RvclByb2ZpbGVQcm9wZXJ0aWVzKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FwcGZsb3dfY29ubmVjdG9yX3Byb2ZpbGUuaHRtbCBhd3NjY19hcHBmbG93X2Nvbm5lY3Rvcl9wcm9maWxlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Q29ubmVjdG9yUHJvZmlsZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfYXBwZmxvd19jb25uZWN0b3JfcHJvZmlsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hcHBmbG93X2Nvbm5lY3Rvcl9wcm9maWxlLmh0bWwgYXdzY2NfYXBwZmxvd19jb25uZWN0b3JfcHJvZmlsZX0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjQXBwZmxvd0Nvbm5lY3RvclByb2ZpbGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2FwcGZsb3dfY29ubmVjdG9yX3Byb2ZpbGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY29ubmVjdGlvbl9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0aW9uX21vZGUnKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rvcl9wcm9maWxlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3RvclByb2ZpbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0b3JfcHJvZmlsZV9hcm4nKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rvcl9wcm9maWxlX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3RvclByb2ZpbGVDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29ubmVjdG9yX3Byb2ZpbGVfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29ubmVjdG9yX3Byb2ZpbGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3RvclByb2ZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdG9yX3Byb2ZpbGVfbmFtZScpO1xuICB9XG5cbiAgLy8gY29ubmVjdG9yX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdG9yX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxzX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWRlbnRpYWxzQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlZGVudGlhbHNfYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8ga21zX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19hcm4nKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=