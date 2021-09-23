"use strict";
// https://www.terraform.io/docs/providers/awscc/r/amplify_app.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyApp = exports.amplifyAppTagsToTerraform = exports.amplifyAppEnvironmentVariablesToTerraform = exports.amplifyAppCustomRulesToTerraform = exports.amplifyAppBasicAuthConfigToTerraform = exports.amplifyAppAutoBranchCreationConfigToTerraform = exports.amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform = exports.amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform = void 0;
const cdktf = require("cdktf");
function amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_basic_auth: cdktf.booleanToTerraform(struct.enableBasicAuth),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform = amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform;
function amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform = amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform;
function amplifyAppAutoBranchCreationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.autoBranchCreationPatterns),
        basic_auth_config: amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct.basicAuthConfig),
        build_spec: cdktf.stringToTerraform(struct.buildSpec),
        enable_auto_branch_creation: cdktf.booleanToTerraform(struct.enableAutoBranchCreation),
        enable_auto_build: cdktf.booleanToTerraform(struct.enableAutoBuild),
        enable_performance_mode: cdktf.booleanToTerraform(struct.enablePerformanceMode),
        enable_pull_request_preview: cdktf.booleanToTerraform(struct.enablePullRequestPreview),
        environment_variables: cdktf.listMapper(amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform)(struct.environmentVariables),
        pull_request_environment_name: cdktf.stringToTerraform(struct.pullRequestEnvironmentName),
        stage: cdktf.stringToTerraform(struct.stage),
    };
}
exports.amplifyAppAutoBranchCreationConfigToTerraform = amplifyAppAutoBranchCreationConfigToTerraform;
function amplifyAppBasicAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_basic_auth: cdktf.booleanToTerraform(struct.enableBasicAuth),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.amplifyAppBasicAuthConfigToTerraform = amplifyAppBasicAuthConfigToTerraform;
function amplifyAppCustomRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        source: cdktf.stringToTerraform(struct.source),
        status: cdktf.stringToTerraform(struct.status),
        target: cdktf.stringToTerraform(struct.target),
    };
}
exports.amplifyAppCustomRulesToTerraform = amplifyAppCustomRulesToTerraform;
function amplifyAppEnvironmentVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.amplifyAppEnvironmentVariablesToTerraform = amplifyAppEnvironmentVariablesToTerraform;
function amplifyAppTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.amplifyAppTagsToTerraform = amplifyAppTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app}
*/
class AmplifyApp extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_amplify_app',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessToken = config.accessToken;
        this._autoBranchCreationConfig = config.autoBranchCreationConfig;
        this._basicAuthConfig = config.basicAuthConfig;
        this._buildSpec = config.buildSpec;
        this._customHeaders = config.customHeaders;
        this._customRules = config.customRules;
        this._description = config.description;
        this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
        this._environmentVariables = config.environmentVariables;
        this._iamServiceRole = config.iamServiceRole;
        this._name = config.name;
        this._oauthToken = config.oauthToken;
        this._repository = config.repository;
        this._tags = config.tags;
    }
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenInput() {
        return this._accessToken;
    }
    // app_id - computed: true, optional: false, required: false
    get appId() {
        return this.getStringAttribute('app_id');
    }
    // app_name - computed: true, optional: false, required: false
    get appName() {
        return this.getStringAttribute('app_name');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoBranchCreationConfig() {
        return this.interpolationForAttribute('auto_branch_creation_config');
    }
    set autoBranchCreationConfig(value) {
        this._autoBranchCreationConfig = value;
    }
    resetAutoBranchCreationConfig() {
        this._autoBranchCreationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoBranchCreationConfigInput() {
        return this._autoBranchCreationConfig;
    }
    get basicAuthConfig() {
        return this.interpolationForAttribute('basic_auth_config');
    }
    set basicAuthConfig(value) {
        this._basicAuthConfig = value;
    }
    resetBasicAuthConfig() {
        this._basicAuthConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get basicAuthConfigInput() {
        return this._basicAuthConfig;
    }
    get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    set buildSpec(value) {
        this._buildSpec = value;
    }
    resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildSpecInput() {
        return this._buildSpec;
    }
    get customHeaders() {
        return this.getStringAttribute('custom_headers');
    }
    set customHeaders(value) {
        this._customHeaders = value;
    }
    resetCustomHeaders() {
        this._customHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customHeadersInput() {
        return this._customHeaders;
    }
    get customRules() {
        return this.interpolationForAttribute('custom_rules');
    }
    set customRules(value) {
        this._customRules = value;
    }
    resetCustomRules() {
        this._customRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRulesInput() {
        return this._customRules;
    }
    // default_domain - computed: true, optional: false, required: false
    get defaultDomain() {
        return this.getStringAttribute('default_domain');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get enableBranchAutoDeletion() {
        return this.getBooleanAttribute('enable_branch_auto_deletion');
    }
    set enableBranchAutoDeletion(value) {
        this._enableBranchAutoDeletion = value;
    }
    resetEnableBranchAutoDeletion() {
        this._enableBranchAutoDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBranchAutoDeletionInput() {
        return this._enableBranchAutoDeletion;
    }
    get environmentVariables() {
        return this.interpolationForAttribute('environment_variables');
    }
    set environmentVariables(value) {
        this._environmentVariables = value;
    }
    resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentVariablesInput() {
        return this._environmentVariables;
    }
    get iamServiceRole() {
        return this.getStringAttribute('iam_service_role');
    }
    set iamServiceRole(value) {
        this._iamServiceRole = value;
    }
    resetIamServiceRole() {
        this._iamServiceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamServiceRoleInput() {
        return this._iamServiceRole;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get oauthToken() {
        return this.getStringAttribute('oauth_token');
    }
    set oauthToken(value) {
        this._oauthToken = value;
    }
    resetOauthToken() {
        this._oauthToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oauthTokenInput() {
        return this._oauthToken;
    }
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token: cdktf.stringToTerraform(this._accessToken),
            auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig),
            basic_auth_config: amplifyAppBasicAuthConfigToTerraform(this._basicAuthConfig),
            build_spec: cdktf.stringToTerraform(this._buildSpec),
            custom_headers: cdktf.stringToTerraform(this._customHeaders),
            custom_rules: cdktf.listMapper(amplifyAppCustomRulesToTerraform)(this._customRules),
            description: cdktf.stringToTerraform(this._description),
            enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
            environment_variables: cdktf.listMapper(amplifyAppEnvironmentVariablesToTerraform)(this._environmentVariables),
            iam_service_role: cdktf.stringToTerraform(this._iamServiceRole),
            name: cdktf.stringToTerraform(this._name),
            oauth_token: cdktf.stringToTerraform(this._oauthToken),
            repository: cdktf.stringToTerraform(this._repository),
            tags: cdktf.listMapper(amplifyAppTagsToTerraform)(this._tags),
        };
    }
}
exports.AmplifyApp = AmplifyApp;
// =================
// STATIC PROPERTIES
// =================
AmplifyApp.tfResourceType = "awscc_amplify_app";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbXBsaWZ5LWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQW1FO0FBQ25FLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQTZFL0IsU0FBZ0IsNERBQTRELENBQUMsTUFBMEQ7SUFDckksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNwRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBUEQsb0lBT0M7QUFhRCxTQUFnQixpRUFBaUUsQ0FBQyxNQUErRDtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCw4SUFNQztBQTZDRCxTQUFnQiw2Q0FBNkMsQ0FBQyxNQUEyQztJQUN2RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQzVHLGlCQUFpQixFQUFFLDREQUE0RCxDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDeEcsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDdkYsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDcEUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRiwyQkFBMkIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3ZGLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDeEksNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMxRixLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFkRCxzR0FjQztBQWlCRCxTQUFnQixvQ0FBb0MsQ0FBQyxNQUFrQztJQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3BFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDcEQsQ0FBQTtBQUNILENBQUM7QUFQRCxvRkFPQztBQXFCRCxTQUFnQixnQ0FBZ0MsQ0FBQyxNQUE4QjtJQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUNyRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQVJELDRFQVFDO0FBYUQsU0FBZ0IseUNBQXlDLENBQUMsTUFBdUM7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBTkQsOEZBTUM7QUFhRCxTQUFnQix5QkFBeUIsQ0FBQyxNQUF1QjtJQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCw4REFNQztBQUdEOztFQUVFO0FBQ0YsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9yRCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF3QjtRQUN2RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1CQUFtQjtZQUMxQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFRRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDZCQUE2QixDQUFRLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQVcsd0JBQXdCLENBQUMsS0FBeUM7UUFDM0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQTtJQUN2QyxDQUFDO0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFRLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWdDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7SUFDOUIsQ0FBQztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBOEI7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFrQztRQUNwRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFBO0lBQ3ZDLENBQUM7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBUSxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQXVDO1FBQ3JFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUE7SUFDbkMsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUE7SUFDN0IsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBdUI7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELDJCQUEyQixFQUFFLDZDQUE2QyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUMxRyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkYsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZELDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDckYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMvRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDOUQsQ0FBQztJQUNKLENBQUM7O0FBNVRILGdDQTZUQztBQTNUQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHlCQUFjLEdBQVcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1wbGlmeUFwcENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjYWNjZXNzX3Rva2VuIEFtcGxpZnlBcHAjYWNjZXNzX3Rva2VufVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2F1dG9fYnJhbmNoX2NyZWF0aW9uX2NvbmZpZyBBbXBsaWZ5QXBwI2F1dG9fYnJhbmNoX2NyZWF0aW9uX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnPzogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2Jhc2ljX2F1dGhfY29uZmlnIEFtcGxpZnlBcHAjYmFzaWNfYXV0aF9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGJhc2ljQXV0aENvbmZpZz86IEFtcGxpZnlBcHBCYXNpY0F1dGhDb25maWc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNidWlsZF9zcGVjIEFtcGxpZnlBcHAjYnVpbGRfc3BlY31cbiAgKi9cbiAgcmVhZG9ubHkgYnVpbGRTcGVjPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjY3VzdG9tX2hlYWRlcnMgQW1wbGlmeUFwcCNjdXN0b21faGVhZGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tSGVhZGVycz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2N1c3RvbV9ydWxlcyBBbXBsaWZ5QXBwI2N1c3RvbV9ydWxlc31cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tUnVsZXM/OiBBbXBsaWZ5QXBwQ3VzdG9tUnVsZXNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2Rlc2NyaXB0aW9uIEFtcGxpZnlBcHAjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9uIEFtcGxpZnlBcHAjZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9ufVxuICAqL1xuICByZWFkb25seSBlbmFibGVCcmFuY2hBdXRvRGVsZXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNlbnZpcm9ubWVudF92YXJpYWJsZXMgQW1wbGlmeUFwcCNlbnZpcm9ubWVudF92YXJpYWJsZXN9XG4gICovXG4gIHJlYWRvbmx5IGVudmlyb25tZW50VmFyaWFibGVzPzogQW1wbGlmeUFwcEVudmlyb25tZW50VmFyaWFibGVzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNpYW1fc2VydmljZV9yb2xlIEFtcGxpZnlBcHAjaWFtX3NlcnZpY2Vfcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgaWFtU2VydmljZVJvbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNuYW1lIEFtcGxpZnlBcHAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjb2F1dGhfdG9rZW4gQW1wbGlmeUFwcCNvYXV0aF90b2tlbn1cbiAgKi9cbiAgcmVhZG9ubHkgb2F1dGhUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI3JlcG9zaXRvcnkgQW1wbGlmeUFwcCNyZXBvc2l0b3J5fVxuICAqL1xuICByZWFkb25seSByZXBvc2l0b3J5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjdGFncyBBbXBsaWZ5QXBwI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBBbXBsaWZ5QXBwVGFnc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBbXBsaWZ5QXBwQXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnQmFzaWNBdXRoQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2VuYWJsZV9iYXNpY19hdXRoIEFtcGxpZnlBcHAjZW5hYmxlX2Jhc2ljX2F1dGh9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUJhc2ljQXV0aD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI3Bhc3N3b3JkIEFtcGxpZnlBcHAjcGFzc3dvcmR9XG4gICovXG4gIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjdXNlcm5hbWUgQW1wbGlmeUFwcCN1c2VybmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlcm5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbXBsaWZ5QXBwQXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnQmFzaWNBdXRoQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Jhc2ljQXV0aENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVfYmFzaWNfYXV0aDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlQmFzaWNBdXRoKSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI25hbWUgQW1wbGlmeUFwcCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCN2YWx1ZSBBbXBsaWZ5QXBwI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Vudmlyb25tZW50VmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0PzogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Vudmlyb25tZW50VmFyaWFibGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNhdXRvX2JyYW5jaF9jcmVhdGlvbl9wYXR0ZXJucyBBbXBsaWZ5QXBwI2F1dG9fYnJhbmNoX2NyZWF0aW9uX3BhdHRlcm5zfVxuICAqL1xuICByZWFkb25seSBhdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjYmFzaWNfYXV0aF9jb25maWcgQW1wbGlmeUFwcCNiYXNpY19hdXRoX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgYmFzaWNBdXRoQ29uZmlnPzogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Jhc2ljQXV0aENvbmZpZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2J1aWxkX3NwZWMgQW1wbGlmeUFwcCNidWlsZF9zcGVjfVxuICAqL1xuICByZWFkb25seSBidWlsZFNwZWM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNlbmFibGVfYXV0b19icmFuY2hfY3JlYXRpb24gQW1wbGlmeUFwcCNlbmFibGVfYXV0b19icmFuY2hfY3JlYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2VuYWJsZV9hdXRvX2J1aWxkIEFtcGxpZnlBcHAjZW5hYmxlX2F1dG9fYnVpbGR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUF1dG9CdWlsZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2VuYWJsZV9wZXJmb3JtYW5jZV9tb2RlIEFtcGxpZnlBcHAjZW5hYmxlX3BlcmZvcm1hbmNlX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZVBlcmZvcm1hbmNlTW9kZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2VuYWJsZV9wdWxsX3JlcXVlc3RfcHJldmlldyBBbXBsaWZ5QXBwI2VuYWJsZV9wdWxsX3JlcXVlc3RfcHJldmlld31cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjZW52aXJvbm1lbnRfdmFyaWFibGVzIEFtcGxpZnlBcHAjZW52aXJvbm1lbnRfdmFyaWFibGVzfVxuICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudFZhcmlhYmxlcz86IEFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWdFbnZpcm9ubWVudFZhcmlhYmxlc1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjcHVsbF9yZXF1ZXN0X2Vudmlyb25tZW50X25hbWUgQW1wbGlmeUFwcCNwdWxsX3JlcXVlc3RfZW52aXJvbm1lbnRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHVsbFJlcXVlc3RFbnZpcm9ubWVudE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNzdGFnZSBBbXBsaWZ5QXBwI3N0YWdlfVxuICAqL1xuICByZWFkb25seSBzdGFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbXBsaWZ5QXBwQXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dG9fYnJhbmNoX2NyZWF0aW9uX3BhdHRlcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF1dG9CcmFuY2hDcmVhdGlvblBhdHRlcm5zKSxcbiAgICBiYXNpY19hdXRoX2NvbmZpZzogYW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Jhc2ljQXV0aENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmFzaWNBdXRoQ29uZmlnKSxcbiAgICBidWlsZF9zcGVjOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1aWxkU3BlYyksXG4gICAgZW5hYmxlX2F1dG9fYnJhbmNoX2NyZWF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBdXRvQnJhbmNoQ3JlYXRpb24pLFxuICAgIGVuYWJsZV9hdXRvX2J1aWxkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBdXRvQnVpbGQpLFxuICAgIGVuYWJsZV9wZXJmb3JtYW5jZV9tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVQZXJmb3JtYW5jZU1vZGUpLFxuICAgIGVuYWJsZV9wdWxsX3JlcXVlc3RfcHJldmlldzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3KSxcbiAgICBlbnZpcm9ubWVudF92YXJpYWJsZXM6IGNka3RmLmxpc3RNYXBwZXIoYW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ0Vudmlyb25tZW50VmFyaWFibGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgIHB1bGxfcmVxdWVzdF9lbnZpcm9ubWVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnB1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKSxcbiAgICBzdGFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbXBsaWZ5QXBwQmFzaWNBdXRoQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2VuYWJsZV9iYXNpY19hdXRoIEFtcGxpZnlBcHAjZW5hYmxlX2Jhc2ljX2F1dGh9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUJhc2ljQXV0aD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI3Bhc3N3b3JkIEFtcGxpZnlBcHAjcGFzc3dvcmR9XG4gICovXG4gIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjdXNlcm5hbWUgQW1wbGlmeUFwcCN1c2VybmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlcm5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbXBsaWZ5QXBwQmFzaWNBdXRoQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQW1wbGlmeUFwcEJhc2ljQXV0aENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVfYmFzaWNfYXV0aDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlQmFzaWNBdXRoKSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1wbGlmeUFwcEN1c3RvbVJ1bGVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2NvbmRpdGlvbiBBbXBsaWZ5QXBwI2NvbmRpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZGl0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjc291cmNlIEFtcGxpZnlBcHAjc291cmNlfVxuICAqL1xuICByZWFkb25seSBzb3VyY2U6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI3N0YXR1cyBBbXBsaWZ5QXBwI3N0YXR1c31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjdGFyZ2V0IEFtcGxpZnlBcHAjdGFyZ2V0fVxuICAqL1xuICByZWFkb25seSB0YXJnZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFtcGxpZnlBcHBDdXN0b21SdWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IEFtcGxpZnlBcHBDdXN0b21SdWxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZGl0aW9uKSxcbiAgICBzb3VyY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlKSxcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlBcHBFbnZpcm9ubWVudFZhcmlhYmxlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCNuYW1lIEFtcGxpZnlBcHAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FtcGxpZnlfYXBwLmh0bWwjdmFsdWUgQW1wbGlmeUFwcCN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFtcGxpZnlBcHBFbnZpcm9ubWVudFZhcmlhYmxlc1RvVGVycmFmb3JtKHN0cnVjdD86IEFtcGxpZnlBcHBFbnZpcm9ubWVudFZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlBcHBUYWdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sI2tleSBBbXBsaWZ5QXBwI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCN2YWx1ZSBBbXBsaWZ5QXBwI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW1wbGlmeUFwcFRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbXBsaWZ5QXBwVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hbXBsaWZ5X2FwcC5odG1sIGF3c2NjX2FtcGxpZnlfYXBwfVxuKi9cbmV4cG9ydCBjbGFzcyBBbXBsaWZ5QXBwIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfYW1wbGlmeV9hcHBcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYW1wbGlmeV9hcHAuaHRtbCBhd3NjY19hbXBsaWZ5X2FwcH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQW1wbGlmeUFwcENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBbXBsaWZ5QXBwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19hbXBsaWZ5X2FwcCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xuICAgIHRoaXMuX2F1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyA9IGNvbmZpZy5hdXRvQnJhbmNoQ3JlYXRpb25Db25maWc7XG4gICAgdGhpcy5fYmFzaWNBdXRoQ29uZmlnID0gY29uZmlnLmJhc2ljQXV0aENvbmZpZztcbiAgICB0aGlzLl9idWlsZFNwZWMgPSBjb25maWcuYnVpbGRTcGVjO1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlcnMgPSBjb25maWcuY3VzdG9tSGVhZGVycztcbiAgICB0aGlzLl9jdXN0b21SdWxlcyA9IGNvbmZpZy5jdXN0b21SdWxlcztcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb24gPSBjb25maWcuZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uO1xuICAgIHRoaXMuX2Vudmlyb25tZW50VmFyaWFibGVzID0gY29uZmlnLmVudmlyb25tZW50VmFyaWFibGVzO1xuICAgIHRoaXMuX2lhbVNlcnZpY2VSb2xlID0gY29uZmlnLmlhbVNlcnZpY2VSb2xlO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gY29uZmlnLm9hdXRoVG9rZW47XG4gICAgdGhpcy5fcmVwb3NpdG9yeSA9IGNvbmZpZy5yZXBvc2l0b3J5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2Nlc3NUb2tlbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuXG4gIH1cblxuICAvLyBhcHBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcHBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9pZCcpO1xuICB9XG5cbiAgLy8gYXBwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcHBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwX25hbWUnKTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19icmFuY2hfY3JlYXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZz86IEFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWc7XG4gIHB1YmxpYyBnZXQgYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F1dG9fYnJhbmNoX2NyZWF0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyh2YWx1ZTogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyApIHtcbiAgICB0aGlzLl9hdXRvQnJhbmNoQ3JlYXRpb25Db25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvQnJhbmNoQ3JlYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQnJhbmNoQ3JlYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnXG4gIH1cblxuICAvLyBiYXNpY19hdXRoX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYXNpY0F1dGhDb25maWc/OiBBbXBsaWZ5QXBwQmFzaWNBdXRoQ29uZmlnO1xuICBwdWJsaWMgZ2V0IGJhc2ljQXV0aENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdiYXNpY19hdXRoX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhc2ljQXV0aENvbmZpZyh2YWx1ZTogQW1wbGlmeUFwcEJhc2ljQXV0aENvbmZpZyApIHtcbiAgICB0aGlzLl9iYXNpY0F1dGhDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXNpY0F1dGhDb25maWcoKSB7XG4gICAgdGhpcy5fYmFzaWNBdXRoQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNpY0F1dGhDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzaWNBdXRoQ29uZmlnXG4gIH1cblxuICAvLyBidWlsZF9zcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkU3BlYz86IHN0cmluZztcbiAgcHVibGljIGdldCBidWlsZFNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWlsZF9zcGVjJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWlsZFNwZWModmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9idWlsZFNwZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZFNwZWMoKSB7XG4gICAgdGhpcy5fYnVpbGRTcGVjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZFNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRTcGVjXG4gIH1cblxuICAvLyBjdXN0b21faGVhZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21IZWFkZXJzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21faGVhZGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSGVhZGVycyh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21IZWFkZXJzKCkge1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUhlYWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSGVhZGVyc1xuICB9XG5cbiAgLy8gY3VzdG9tX3J1bGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVJ1bGVzPzogQW1wbGlmeUFwcEN1c3RvbVJ1bGVzW107XG4gIHB1YmxpYyBnZXQgY3VzdG9tUnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3VzdG9tX3J1bGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tUnVsZXModmFsdWU6IEFtcGxpZnlBcHBDdXN0b21SdWxlc1tdICkge1xuICAgIHRoaXMuX2N1c3RvbVJ1bGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tUnVsZXMoKSB7XG4gICAgdGhpcy5fY3VzdG9tUnVsZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVJ1bGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVJ1bGVzXG4gIH1cblxuICAvLyBkZWZhdWx0X2RvbWFpbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHREb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X2RvbWFpbicpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUJyYW5jaEF1dG9EZWxldGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCBlbmFibGVCcmFuY2hBdXRvRGVsZXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVCcmFuY2hBdXRvRGVsZXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVCcmFuY2hBdXRvRGVsZXRpb24oKSB7XG4gICAgdGhpcy5fZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVCcmFuY2hBdXRvRGVsZXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uXG4gIH1cblxuICAvLyBlbnZpcm9ubWVudF92YXJpYWJsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnRWYXJpYWJsZXM/OiBBbXBsaWZ5QXBwRW52aXJvbm1lbnRWYXJpYWJsZXNbXTtcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudF92YXJpYWJsZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbnZpcm9ubWVudFZhcmlhYmxlcyh2YWx1ZTogQW1wbGlmeUFwcEVudmlyb25tZW50VmFyaWFibGVzW10gKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRWYXJpYWJsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXNcbiAgfVxuXG4gIC8vIGlhbV9zZXJ2aWNlX3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtU2VydmljZVJvbGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWFtU2VydmljZVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1fc2VydmljZV9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1TZXJ2aWNlUm9sZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2lhbVNlcnZpY2VSb2xlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtU2VydmljZVJvbGUoKSB7XG4gICAgdGhpcy5faWFtU2VydmljZVJvbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbVNlcnZpY2VSb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbVNlcnZpY2VSb2xlXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gb2F1dGhfdG9rZW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2F1dGhUb2tlbj86IHN0cmluZztcbiAgcHVibGljIGdldCBvYXV0aFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2F1dGhfdG9rZW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9hdXRoVG9rZW4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2F1dGhUb2tlbigpIHtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYXV0aFRva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29hdXRoVG9rZW5cbiAgfVxuXG4gIC8vIHJlcG9zaXRvcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3NpdG9yeT86IHN0cmluZztcbiAgcHVibGljIGdldCByZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3NpdG9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3NpdG9yeSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3JlcG9zaXRvcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvc2l0b3J5KCkge1xuICAgIHRoaXMuX3JlcG9zaXRvcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogQW1wbGlmeUFwcFRhZ3NbXTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiBBbXBsaWZ5QXBwVGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY2Vzc1Rva2VuKSxcbiAgICAgIGF1dG9fYnJhbmNoX2NyZWF0aW9uX2NvbmZpZzogYW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2F1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyksXG4gICAgICBiYXNpY19hdXRoX2NvbmZpZzogYW1wbGlmeUFwcEJhc2ljQXV0aENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2Jhc2ljQXV0aENvbmZpZyksXG4gICAgICBidWlsZF9zcGVjOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idWlsZFNwZWMpLFxuICAgICAgY3VzdG9tX2hlYWRlcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbUhlYWRlcnMpLFxuICAgICAgY3VzdG9tX3J1bGVzOiBjZGt0Zi5saXN0TWFwcGVyKGFtcGxpZnlBcHBDdXN0b21SdWxlc1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21SdWxlcyksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uKSxcbiAgICAgIGVudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihhbXBsaWZ5QXBwRW52aXJvbm1lbnRWYXJpYWJsZXNUb1RlcnJhZm9ybSkodGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgICAgaWFtX3NlcnZpY2Vfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWFtU2VydmljZVJvbGUpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBvYXV0aF90b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb2F1dGhUb2tlbiksXG4gICAgICByZXBvc2l0b3J5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBvc2l0b3J5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoYW1wbGlmeUFwcFRhZ3NUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgfTtcbiAgfVxufVxuIl19