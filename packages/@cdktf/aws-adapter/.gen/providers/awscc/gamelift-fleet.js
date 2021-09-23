"use strict";
// https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameliftFleet = exports.gameliftFleetRuntimeConfigurationToTerraform = exports.gameliftFleetRuntimeConfigurationServerProcessesToTerraform = exports.gameliftFleetResourceCreationLimitPolicyToTerraform = exports.gameliftFleetLocationsToTerraform = exports.gameliftFleetLocationsLocationCapacityToTerraform = exports.gameliftFleetEc2InboundPermissionsToTerraform = exports.gameliftFleetCertificateConfigurationToTerraform = void 0;
const cdktf = require("cdktf");
function gameliftFleetCertificateConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_type: cdktf.stringToTerraform(struct.certificateType),
    };
}
exports.gameliftFleetCertificateConfigurationToTerraform = gameliftFleetCertificateConfigurationToTerraform;
function gameliftFleetEc2InboundPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        ip_range: cdktf.stringToTerraform(struct.ipRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.gameliftFleetEc2InboundPermissionsToTerraform = gameliftFleetEc2InboundPermissionsToTerraform;
function gameliftFleetLocationsLocationCapacityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        desired_ec2_instances: cdktf.numberToTerraform(struct.desiredEc2Instances),
        max_size: cdktf.numberToTerraform(struct.maxSize),
        min_size: cdktf.numberToTerraform(struct.minSize),
    };
}
exports.gameliftFleetLocationsLocationCapacityToTerraform = gameliftFleetLocationsLocationCapacityToTerraform;
function gameliftFleetLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        location: cdktf.stringToTerraform(struct.location),
        location_capacity: gameliftFleetLocationsLocationCapacityToTerraform(struct.locationCapacity),
    };
}
exports.gameliftFleetLocationsToTerraform = gameliftFleetLocationsToTerraform;
function gameliftFleetResourceCreationLimitPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        new_game_sessions_per_creator: cdktf.numberToTerraform(struct.newGameSessionsPerCreator),
        policy_period_in_minutes: cdktf.numberToTerraform(struct.policyPeriodInMinutes),
    };
}
exports.gameliftFleetResourceCreationLimitPolicyToTerraform = gameliftFleetResourceCreationLimitPolicyToTerraform;
function gameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        concurrent_executions: cdktf.numberToTerraform(struct.concurrentExecutions),
        launch_path: cdktf.stringToTerraform(struct.launchPath),
        parameters: cdktf.stringToTerraform(struct.parameters),
    };
}
exports.gameliftFleetRuntimeConfigurationServerProcessesToTerraform = gameliftFleetRuntimeConfigurationServerProcessesToTerraform;
function gameliftFleetRuntimeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct.gameSessionActivationTimeoutSeconds),
        max_concurrent_game_session_activations: cdktf.numberToTerraform(struct.maxConcurrentGameSessionActivations),
        server_processes: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessesToTerraform)(struct.serverProcesses),
    };
}
exports.gameliftFleetRuntimeConfigurationToTerraform = gameliftFleetRuntimeConfigurationToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet}
*/
class GameliftFleet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_gamelift_fleet',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._buildId = config.buildId;
        this._certificateConfiguration = config.certificateConfiguration;
        this._description = config.description;
        this._desiredEc2Instances = config.desiredEc2Instances;
        this._ec2InboundPermissions = config.ec2InboundPermissions;
        this._ec2InstanceType = config.ec2InstanceType;
        this._fleetType = config.fleetType;
        this._instanceRoleArn = config.instanceRoleArn;
        this._locations = config.locations;
        this._logPaths = config.logPaths;
        this._maxSize = config.maxSize;
        this._metricGroups = config.metricGroups;
        this._minSize = config.minSize;
        this._name = config.name;
        this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
        this._peerVpcAwsAccountId = config.peerVpcAwsAccountId;
        this._peerVpcId = config.peerVpcId;
        this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
        this._runtimeConfiguration = config.runtimeConfiguration;
        this._scriptId = config.scriptId;
        this._serverLaunchParameters = config.serverLaunchParameters;
        this._serverLaunchPath = config.serverLaunchPath;
    }
    get buildId() {
        return this.getStringAttribute('build_id');
    }
    set buildId(value) {
        this._buildId = value;
    }
    resetBuildId() {
        this._buildId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildIdInput() {
        return this._buildId;
    }
    get certificateConfiguration() {
        return this.interpolationForAttribute('certificate_configuration');
    }
    set certificateConfiguration(value) {
        this._certificateConfiguration = value;
    }
    resetCertificateConfiguration() {
        this._certificateConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateConfigurationInput() {
        return this._certificateConfiguration;
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
    get desiredEc2Instances() {
        return this.getNumberAttribute('desired_ec2_instances');
    }
    set desiredEc2Instances(value) {
        this._desiredEc2Instances = value;
    }
    resetDesiredEc2Instances() {
        this._desiredEc2Instances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredEc2InstancesInput() {
        return this._desiredEc2Instances;
    }
    get ec2InboundPermissions() {
        return this.interpolationForAttribute('ec2_inbound_permissions');
    }
    set ec2InboundPermissions(value) {
        this._ec2InboundPermissions = value;
    }
    resetEc2InboundPermissions() {
        this._ec2InboundPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2InboundPermissionsInput() {
        return this._ec2InboundPermissions;
    }
    get ec2InstanceType() {
        return this.getStringAttribute('ec2_instance_type');
    }
    set ec2InstanceType(value) {
        this._ec2InstanceType = value;
    }
    resetEc2InstanceType() {
        this._ec2InstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2InstanceTypeInput() {
        return this._ec2InstanceType;
    }
    // fleet_id - computed: true, optional: false, required: false
    get fleetId() {
        return this.getStringAttribute('fleet_id');
    }
    get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    set fleetType(value) {
        this._fleetType = value;
    }
    resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fleetTypeInput() {
        return this._fleetType;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    set instanceRoleArn(value) {
        this._instanceRoleArn = value;
    }
    resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }
    get locations() {
        return this.interpolationForAttribute('locations');
    }
    set locations(value) {
        this._locations = value;
    }
    resetLocations() {
        this._locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationsInput() {
        return this._locations;
    }
    get logPaths() {
        return this.getListAttribute('log_paths');
    }
    set logPaths(value) {
        this._logPaths = value;
    }
    resetLogPaths() {
        this._logPaths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logPathsInput() {
        return this._logPaths;
    }
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxSizeInput() {
        return this._maxSize;
    }
    get metricGroups() {
        return this.getListAttribute('metric_groups');
    }
    set metricGroups(value) {
        this._metricGroups = value;
    }
    resetMetricGroups() {
        this._metricGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricGroupsInput() {
        return this._metricGroups;
    }
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    set minSize(value) {
        this._minSize = value;
    }
    resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minSizeInput() {
        return this._minSize;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get newGameSessionProtectionPolicy() {
        return this.getStringAttribute('new_game_session_protection_policy');
    }
    set newGameSessionProtectionPolicy(value) {
        this._newGameSessionProtectionPolicy = value;
    }
    resetNewGameSessionProtectionPolicy() {
        this._newGameSessionProtectionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newGameSessionProtectionPolicyInput() {
        return this._newGameSessionProtectionPolicy;
    }
    get peerVpcAwsAccountId() {
        return this.getStringAttribute('peer_vpc_aws_account_id');
    }
    set peerVpcAwsAccountId(value) {
        this._peerVpcAwsAccountId = value;
    }
    resetPeerVpcAwsAccountId() {
        this._peerVpcAwsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get peerVpcAwsAccountIdInput() {
        return this._peerVpcAwsAccountId;
    }
    get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
    }
    set peerVpcId(value) {
        this._peerVpcId = value;
    }
    resetPeerVpcId() {
        this._peerVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get peerVpcIdInput() {
        return this._peerVpcId;
    }
    get resourceCreationLimitPolicy() {
        return this.interpolationForAttribute('resource_creation_limit_policy');
    }
    set resourceCreationLimitPolicy(value) {
        this._resourceCreationLimitPolicy = value;
    }
    resetResourceCreationLimitPolicy() {
        this._resourceCreationLimitPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceCreationLimitPolicyInput() {
        return this._resourceCreationLimitPolicy;
    }
    get runtimeConfiguration() {
        return this.interpolationForAttribute('runtime_configuration');
    }
    set runtimeConfiguration(value) {
        this._runtimeConfiguration = value;
    }
    resetRuntimeConfiguration() {
        this._runtimeConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeConfigurationInput() {
        return this._runtimeConfiguration;
    }
    get scriptId() {
        return this.getStringAttribute('script_id');
    }
    set scriptId(value) {
        this._scriptId = value;
    }
    resetScriptId() {
        this._scriptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scriptIdInput() {
        return this._scriptId;
    }
    get serverLaunchParameters() {
        return this.getStringAttribute('server_launch_parameters');
    }
    set serverLaunchParameters(value) {
        this._serverLaunchParameters = value;
    }
    resetServerLaunchParameters() {
        this._serverLaunchParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverLaunchParametersInput() {
        return this._serverLaunchParameters;
    }
    get serverLaunchPath() {
        return this.getStringAttribute('server_launch_path');
    }
    set serverLaunchPath(value) {
        this._serverLaunchPath = value;
    }
    resetServerLaunchPath() {
        this._serverLaunchPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverLaunchPathInput() {
        return this._serverLaunchPath;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            build_id: cdktf.stringToTerraform(this._buildId),
            certificate_configuration: gameliftFleetCertificateConfigurationToTerraform(this._certificateConfiguration),
            description: cdktf.stringToTerraform(this._description),
            desired_ec2_instances: cdktf.numberToTerraform(this._desiredEc2Instances),
            ec2_inbound_permissions: cdktf.listMapper(gameliftFleetEc2InboundPermissionsToTerraform)(this._ec2InboundPermissions),
            ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
            locations: cdktf.listMapper(gameliftFleetLocationsToTerraform)(this._locations),
            log_paths: cdktf.listMapper(cdktf.stringToTerraform)(this._logPaths),
            max_size: cdktf.numberToTerraform(this._maxSize),
            metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
            min_size: cdktf.numberToTerraform(this._minSize),
            name: cdktf.stringToTerraform(this._name),
            new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
            peer_vpc_aws_account_id: cdktf.stringToTerraform(this._peerVpcAwsAccountId),
            peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
            resource_creation_limit_policy: gameliftFleetResourceCreationLimitPolicyToTerraform(this._resourceCreationLimitPolicy),
            runtime_configuration: gameliftFleetRuntimeConfigurationToTerraform(this._runtimeConfiguration),
            script_id: cdktf.stringToTerraform(this._scriptId),
            server_launch_parameters: cdktf.stringToTerraform(this._serverLaunchParameters),
            server_launch_path: cdktf.stringToTerraform(this._serverLaunchPath),
        };
    }
}
exports.GameliftFleet = GameliftFleet;
// =================
// STATIC PROPERTIES
// =================
GameliftFleet.tfResourceType = "awscc_gamelift_fleet";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWxpZnQtZmxlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYW1lbGlmdC1mbGVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXVKL0IsU0FBZ0IsZ0RBQWdELENBQUMsTUFBOEM7SUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQUxELDRHQUtDO0FBNkJELFNBQWdCLDZDQUE2QyxDQUFDLE1BQTJDO0lBQ3ZHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBUkQsc0dBUUM7QUF1QkQsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFB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LENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzVFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztZQUNqRyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzNFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNyRCw4QkFBOEIsRUFBRSxtREFBbUQsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7WUFDdEgscUJBQXFCLEVBQUUsNENBQTRDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQy9GLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQy9FLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7O0FBaGNILHNDQWljQztBQS9iQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDRCQUFjLEdBQVcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZWxpZnRGbGVldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhIGJ1aWxkIHRvIGJlIGRlcGxveWVkIG9uIHRoZSBuZXcgZmxlZXQuIElmIHlvdSBhcmUgZGVwbG95aW5nIHRoZSBmbGVldCB3aXRoIGEgY3VzdG9tIGdhbWUgYnVpbGQsIHlvdSBtdXN0IHNwZWNpZnkgdGhpcyBwcm9wZXJ0eS4gVGhlIGJ1aWxkIG11c3QgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCB0byBBbWF6b24gR2FtZUxpZnQgYW5kIGJlIGluIGEgUkVBRFkgc3RhdHVzLiBUaGlzIGZsZWV0IHNldHRpbmcgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZmxlZXQgaXMgY3JlYXRlZC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjYnVpbGRfaWQgR2FtZWxpZnRGbGVldCNidWlsZF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVpbGRJZD86IHN0cmluZztcbiAgLyoqXG4gICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZSBvZiBhIFRMUy9TU0wgY2VydGlmaWNhdGUgZm9yIGEgZmxlZXQuIFRMUyBjZXJ0aWZpY2F0ZSBnZW5lcmF0aW9uIGlzIGVuYWJsZWQgYXQgdGhlIGZsZWV0IGxldmVsLCB3aXRoIG9uZSBjZXJ0aWZpY2F0ZSBnZW5lcmF0ZWQgZm9yIHRoZSBmbGVldC4gV2hlbiB0aGlzIGZlYXR1cmUgaXMgZW5hYmxlZCwgdGhlIGNlcnRpZmljYXRlIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlIEdhbWVMaWZ0IFNlcnZlciBTREsgY2FsbCBHZXRJbnN0YW5jZUNlcnRpZmljYXRlLiBBbGwgaW5zdGFuY2VzIGluIGEgZmxlZXQgc2hhcmUgdGhlIHNhbWUgY2VydGlmaWNhdGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2NlcnRpZmljYXRlX2NvbmZpZ3VyYXRpb24gR2FtZWxpZnRGbGVldCNjZXJ0aWZpY2F0ZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb24/OiBHYW1lbGlmdEZsZWV0Q2VydGlmaWNhdGVDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBBIGh1bWFuLXJlYWRhYmxlIGRlc2NyaXB0aW9uIG9mIGEgZmxlZXQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2Rlc2NyaXB0aW9uIEdhbWVsaWZ0RmxlZXQjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBbREVQUkVDQVRFRF0gVGhlIG51bWJlciBvZiBFQzIgaW5zdGFuY2VzIHRoYXQgeW91IHdhbnQgdGhpcyBmbGVldCB0byBob3N0LiBXaGVuIGNyZWF0aW5nIGEgbmV3IGZsZWV0LCBHYW1lTGlmdCBhdXRvbWF0aWNhbGx5IHNldHMgdGhpcyB2YWx1ZSB0byBcIjFcIiBhbmQgaW5pdGlhdGVzIGEgc2luZ2xlIGluc3RhbmNlLiBPbmNlIHRoZSBmbGVldCBpcyBhY3RpdmUsIHVwZGF0ZSB0aGlzIHZhbHVlIHRvIHRyaWdnZXIgR2FtZUxpZnQgdG8gYWRkIG9yIHJlbW92ZSBpbnN0YW5jZXMgZnJvbSB0aGUgZmxlZXQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2Rlc2lyZWRfZWMyX2luc3RhbmNlcyBHYW1lbGlmdEZsZWV0I2Rlc2lyZWRfZWMyX2luc3RhbmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzaXJlZEVjMkluc3RhbmNlcz86IG51bWJlcjtcbiAgLyoqXG4gICogQSByYW5nZSBvZiBJUCBhZGRyZXNzZXMgYW5kIHBvcnQgc2V0dGluZ3MgdGhhdCBhbGxvdyBpbmJvdW5kIHRyYWZmaWMgdG8gY29ubmVjdCB0byBzZXJ2ZXIgcHJvY2Vzc2VzIG9uIGFuIEFtYXpvbiBHYW1lTGlmdCBzZXJ2ZXIuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2VjMl9pbmJvdW5kX3Blcm1pc3Npb25zIEdhbWVsaWZ0RmxlZXQjZWMyX2luYm91bmRfcGVybWlzc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IGVjMkluYm91bmRQZXJtaXNzaW9ucz86IEdhbWVsaWZ0RmxlZXRFYzJJbmJvdW5kUGVybWlzc2lvbnNbXTtcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgYW4gRUMyIGluc3RhbmNlIHR5cGUgdGhhdCBpcyBzdXBwb3J0ZWQgaW4gQW1hem9uIEdhbWVMaWZ0LiBBIGZsZWV0IGluc3RhbmNlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgY29tcHV0aW5nIHJlc291cmNlcyBvZiBlYWNoIGluc3RhbmNlIGluIHRoZSBmbGVldCwgaW5jbHVkaW5nIENQVSwgbWVtb3J5LCBzdG9yYWdlLCBhbmQgbmV0d29ya2luZyBjYXBhY2l0eS4gQW1hem9uIEdhbWVMaWZ0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgRUMyIGluc3RhbmNlIHR5cGVzLiBTZWUgQW1hem9uIEVDMiBJbnN0YW5jZSBUeXBlcyBmb3IgZGV0YWlsZWQgZGVzY3JpcHRpb25zLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNlYzJfaW5zdGFuY2VfdHlwZSBHYW1lbGlmdEZsZWV0I2VjMl9pbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBlYzJJbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEluZGljYXRlcyB3aGV0aGVyIHRvIHVzZSBPbi1EZW1hbmQgaW5zdGFuY2VzIG9yIFNwb3QgaW5zdGFuY2VzIGZvciB0aGlzIGZsZWV0LiBJZiBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgT05fREVNQU5ELiBCb3RoIGNhdGVnb3JpZXMgb2YgaW5zdGFuY2VzIHVzZSBpZGVudGljYWwgaGFyZHdhcmUgYW5kIGNvbmZpZ3VyYXRpb25zIGJhc2VkIG9uIHRoZSBpbnN0YW5jZSB0eXBlIHNlbGVjdGVkIGZvciB0aGlzIGZsZWV0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNmbGVldF90eXBlIEdhbWVsaWZ0RmxlZXQjZmxlZXRfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgZmxlZXRUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhbiBBV1MgSUFNIHJvbGUgdGhhdCBtYW5hZ2VzIGFjY2VzcyB0byB5b3VyIEFXUyBzZXJ2aWNlcy4gV2l0aCBhbiBpbnN0YW5jZSByb2xlIEFSTiBzZXQsIGFueSBhcHBsaWNhdGlvbiB0aGF0IHJ1bnMgb24gYW4gaW5zdGFuY2UgaW4gdGhpcyBmbGVldCBjYW4gYXNzdW1lIHRoZSByb2xlLCBpbmNsdWRpbmcgaW5zdGFsbCBzY3JpcHRzLCBzZXJ2ZXIgcHJvY2Vzc2VzLCBhbmQgZGFlbW9ucyAoYmFja2dyb3VuZCBwcm9jZXNzZXMpLiBDcmVhdGUgYSByb2xlIG9yIGxvb2sgdXAgYSByb2xlJ3MgQVJOIGZyb20gdGhlIElBTSBkYXNoYm9hcmQgaW4gdGhlIEFXUyBNYW5hZ2VtZW50IENvbnNvbGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2luc3RhbmNlX3JvbGVfYXJuIEdhbWVsaWZ0RmxlZXQjaW5zdGFuY2Vfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2xvY2F0aW9ucyBHYW1lbGlmdEZsZWV0I2xvY2F0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYXRpb25zPzogR2FtZWxpZnRGbGVldExvY2F0aW9uc1tdO1xuICAvKipcbiAgKiBUaGlzIHBhcmFtZXRlciBpcyBubyBsb25nZXIgdXNlZC4gV2hlbiBob3N0aW5nIGEgY3VzdG9tIGdhbWUgYnVpbGQsIHNwZWNpZnkgd2hlcmUgQW1hem9uIEdhbWVMaWZ0IHNob3VsZCBzdG9yZSBsb2cgZmlsZXMgdXNpbmcgdGhlIEFtYXpvbiBHYW1lTGlmdCBzZXJ2ZXIgQVBJIGNhbGwgUHJvY2Vzc1JlYWR5KClcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbG9nX3BhdGhzIEdhbWVsaWZ0RmxlZXQjbG9nX3BhdGhzfVxuICAqL1xuICByZWFkb25seSBsb2dQYXRocz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBbREVQUkVDQVRFRF0gVGhlIG1heGltdW0gdmFsdWUgdGhhdCBpcyBhbGxvd2VkIGZvciB0aGUgZmxlZXQncyBpbnN0YW5jZSBjb3VudC4gV2hlbiBjcmVhdGluZyBhIG5ldyBmbGVldCwgR2FtZUxpZnQgYXV0b21hdGljYWxseSBzZXRzIHRoaXMgdmFsdWUgdG8gXCIxXCIuIE9uY2UgdGhlIGZsZWV0IGlzIGFjdGl2ZSwgeW91IGNhbiBjaGFuZ2UgdGhpcyB2YWx1ZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbWF4X3NpemUgR2FtZWxpZnRGbGVldCNtYXhfc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4U2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgYW4gQW1hem9uIENsb3VkV2F0Y2ggbWV0cmljIGdyb3VwLiBBIG1ldHJpYyBncm91cCBhZ2dyZWdhdGVzIHRoZSBtZXRyaWNzIGZvciBhbGwgZmxlZXRzIGluIHRoZSBncm91cC4gU3BlY2lmeSBhIHN0cmluZyBjb250YWluaW5nIHRoZSBtZXRyaWMgZ3JvdXAgbmFtZS4gWW91IGNhbiB1c2UgYW4gZXhpc3RpbmcgbmFtZSBvciB1c2UgYSBuZXcgbmFtZSB0byBjcmVhdGUgYSBuZXcgbWV0cmljIGdyb3VwLiBDdXJyZW50bHksIHRoaXMgcGFyYW1ldGVyIGNhbiBoYXZlIG9ubHkgb25lIHN0cmluZy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbWV0cmljX2dyb3VwcyBHYW1lbGlmdEZsZWV0I21ldHJpY19ncm91cHN9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY0dyb3Vwcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBbREVQUkVDQVRFRF0gVGhlIG1pbmltdW0gdmFsdWUgYWxsb3dlZCBmb3IgdGhlIGZsZWV0J3MgaW5zdGFuY2UgY291bnQuIFdoZW4gY3JlYXRpbmcgYSBuZXcgZmxlZXQsIEdhbWVMaWZ0IGF1dG9tYXRpY2FsbHkgc2V0cyB0aGlzIHZhbHVlIHRvIFwiMFwiLiBBZnRlciB0aGUgZmxlZXQgaXMgYWN0aXZlLCB5b3UgY2FuIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNtaW5fc2l6ZSBHYW1lbGlmdEZsZWV0I21pbl9zaXplfVxuICAqL1xuICByZWFkb25seSBtaW5TaXplPzogbnVtYmVyO1xuICAvKipcbiAgKiBBIGRlc2NyaXB0aXZlIGxhYmVsIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIGEgZmxlZXQuIEZsZWV0IG5hbWVzIGRvIG5vdCBuZWVkIHRvIGJlIHVuaXF1ZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbmFtZSBHYW1lbGlmdEZsZWV0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgZ2FtZSBzZXNzaW9uIHByb3RlY3Rpb24gcG9saWN5IHRvIGFwcGx5IHRvIGFsbCBnYW1lIHNlc3Npb25zIGhvc3RlZCBvbiBpbnN0YW5jZXMgaW4gdGhpcyBmbGVldC4gV2hlbiBwcm90ZWN0ZWQsIGFjdGl2ZSBnYW1lIHNlc3Npb25zIGNhbm5vdCBiZSB0ZXJtaW5hdGVkIGR1cmluZyBhIHNjYWxlLWRvd24gZXZlbnQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzZXQsIGluc3RhbmNlcyBpbiB0aGlzIGZsZWV0IGRlZmF1bHQgdG8gbm8gcHJvdGVjdGlvbi4gWW91IGNhbiBjaGFuZ2UgYSBmbGVldCdzIHByb3RlY3Rpb24gcG9saWN5IHRvIGFmZmVjdCBmdXR1cmUgZ2FtZSBzZXNzaW9ucyBvbiB0aGUgZmxlZXQuIFlvdSBjYW4gYWxzbyBzZXQgcHJvdGVjdGlvbiBmb3IgaW5kaXZpZHVhbCBnYW1lIHNlc3Npb25zLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNuZXdfZ2FtZV9zZXNzaW9uX3Byb3RlY3Rpb25fcG9saWN5IEdhbWVsaWZ0RmxlZXQjbmV3X2dhbWVfc2Vzc2lvbl9wcm90ZWN0aW9uX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgQVdTIGFjY291bnQgd2l0aCB0aGUgVlBDIHRoYXQgeW91IHdhbnQgdG8gcGVlciB5b3VyIEFtYXpvbiBHYW1lTGlmdCBmbGVldCB3aXRoLiBZb3UgY2FuIGZpbmQgeW91ciBhY2NvdW50IElEIGluIHRoZSBBV1MgTWFuYWdlbWVudCBDb25zb2xlIHVuZGVyIGFjY291bnQgc2V0dGluZ3MuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI3BlZXJfdnBjX2F3c19hY2NvdW50X2lkIEdhbWVsaWZ0RmxlZXQjcGVlcl92cGNfYXdzX2FjY291bnRfaWR9XG4gICovXG4gIHJlYWRvbmx5IHBlZXJWcGNBd3NBY2NvdW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGEgVlBDIHdpdGggcmVzb3VyY2VzIHRvIGJlIGFjY2Vzc2VkIGJ5IHlvdXIgQW1hem9uIEdhbWVMaWZ0IGZsZWV0LiBUaGUgVlBDIG11c3QgYmUgaW4gdGhlIHNhbWUgUmVnaW9uIGFzIHlvdXIgZmxlZXQuIFRvIGxvb2sgdXAgYSBWUEMgSUQsIHVzZSB0aGUgVlBDIERhc2hib2FyZCBpbiB0aGUgQVdTIE1hbmFnZW1lbnQgQ29uc29sZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjcGVlcl92cGNfaWQgR2FtZWxpZnRGbGVldCNwZWVyX3ZwY19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgcGVlclZwY0lkPzogc3RyaW5nO1xuICAvKipcbiAgKiBBIHBvbGljeSB0aGF0IGxpbWl0cyB0aGUgbnVtYmVyIG9mIGdhbWUgc2Vzc2lvbnMgYSBwbGF5ZXIgY2FuIGNyZWF0ZSBvbiB0aGUgc2FtZSBmbGVldC4gVGhpcyBvcHRpb25hbCBwb2xpY3kgZ2l2ZXMgZ2FtZSBvd25lcnMgY29udHJvbCBvdmVyIGhvdyBwbGF5ZXJzIGNhbiBjb25zdW1lIGF2YWlsYWJsZSBnYW1lIHNlcnZlciByZXNvdXJjZXMuIEEgcmVzb3VyY2UgY3JlYXRpb24gcG9saWN5IG1ha2VzIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50OiBcIkFuIGluZGl2aWR1YWwgcGxheWVyIGNhbiBjcmVhdGUgYSBtYXhpbXVtIG51bWJlciBvZiBuZXcgZ2FtZSBzZXNzaW9ucyB3aXRoaW4gYSBzcGVjaWZpZWQgdGltZSBwZXJpb2RcIi5cblxuVGhlIHBvbGljeSBpcyBldmFsdWF0ZWQgd2hlbiBhIHBsYXllciB0cmllcyB0byBjcmVhdGUgYSBuZXcgZ2FtZSBzZXNzaW9uLiBGb3IgZXhhbXBsZSwgYXNzdW1lIHlvdSBoYXZlIGEgcG9saWN5IG9mIDEwIG5ldyBnYW1lIHNlc3Npb25zIGFuZCBhIHRpbWUgcGVyaW9kIG9mIDYwIG1pbnV0ZXMuIE9uIHJlY2VpdmluZyBhIENyZWF0ZUdhbWVTZXNzaW9uIHJlcXVlc3QsIEFtYXpvbiBHYW1lTGlmdCBjaGVja3MgdGhhdCB0aGUgcGxheWVyIChpZGVudGlmaWVkIGJ5IENyZWF0b3JJZCkgaGFzIGNyZWF0ZWQgZmV3ZXIgdGhhbiAxMCBnYW1lIHNlc3Npb25zIGluIHRoZSBwYXN0IDYwIG1pbnV0ZXMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI3Jlc291cmNlX2NyZWF0aW9uX2xpbWl0X3BvbGljeSBHYW1lbGlmdEZsZWV0I3Jlc291cmNlX2NyZWF0aW9uX2xpbWl0X3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5PzogR2FtZWxpZnRGbGVldFJlc291cmNlQ3JlYXRpb25MaW1pdFBvbGljeTtcbiAgLyoqXG4gICogQSBjb2xsZWN0aW9uIG9mIHNlcnZlciBwcm9jZXNzIGNvbmZpZ3VyYXRpb25zIHRoYXQgZGVzY3JpYmUgdGhlIHByb2Nlc3NlcyB0byBydW4gb24gZWFjaCBpbnN0YW5jZSBpbiBhIGZsZWV0LiBBbGwgZmxlZXRzIG11c3QgaGF2ZSBhIHJ1bnRpbWUgY29uZmlndXJhdGlvbi4gRWFjaCBpbnN0YW5jZSBpbiB0aGUgZmxlZXQgbWFpbnRhaW5zIHNlcnZlciBwcm9jZXNzZXMgYXMgc3BlY2lmaWVkIGluIHRoZSBydW50aW1lIGNvbmZpZ3VyYXRpb24sIGxhdW5jaGluZyBuZXcgb25lcyBhcyBleGlzdGluZyBwcm9jZXNzZXMgZW5kLiBFYWNoIGluc3RhbmNlIHJlZ3VsYXJseSBjaGVja3MgZm9yIGFuIHVwZGF0ZWQgcnVudGltZSBjb25maWd1cmF0aW9uIG1ha2VzIGFkanVzdG1lbnRzIGFzIGNhbGxlZCBmb3IuXG5cblRoZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gZW5hYmxlcyB0aGUgaW5zdGFuY2VzIGluIGEgZmxlZXQgdG8gcnVuIG11bHRpcGxlIHByb2Nlc3NlcyBzaW11bHRhbmVvdXNseS4gUG90ZW50aWFsIHNjZW5hcmlvcyBhcmUgYXMgZm9sbG93czogKDEpIFJ1biBtdWx0aXBsZSBwcm9jZXNzZXMgb2YgYSBzaW5nbGUgZ2FtZSBzZXJ2ZXIgZXhlY3V0YWJsZSB0byBtYXhpbWl6ZSB1c2FnZSBvZiB5b3VyIGhvc3RpbmcgcmVzb3VyY2VzLiAoMikgUnVuIG9uZSBvciBtb3JlIHByb2Nlc3NlcyBvZiBkaWZmZXJlbnQgZXhlY3V0YWJsZXMsIHN1Y2ggYXMgeW91ciBnYW1lIHNlcnZlciBhbmQgYSBtZXRyaWNzIHRyYWNraW5nIHByb2dyYW0uICgzKSBSdW4gbXVsdGlwbGUgcHJvY2Vzc2VzIG9mIGEgc2luZ2xlIGdhbWUgc2VydmVyIGJ1dCB3aXRoIGRpZmZlcmVudCBsYXVuY2ggcGFyYW1ldGVycywgZm9yIGV4YW1wbGUgdG8gcnVuIG9uZSBwcm9jZXNzIG9uIGVhY2ggaW5zdGFuY2UgaW4gZGVidWcgbW9kZS5cblxuQW4gQW1hem9uIEdhbWVMaWZ0IGluc3RhbmNlIGlzIGxpbWl0ZWQgdG8gNTAgcHJvY2Vzc2VzIHJ1bm5pbmcgc2ltdWx0YW5lb3VzbHkuIEEgcnVudGltZSBjb25maWd1cmF0aW9uIG11c3Qgc3BlY2lmeSBmZXdlciB0aGFuIHRoaXMgbGltaXQuIFRvIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHByb2Nlc3NlcyBzcGVjaWZpZWQgaW4gYSBydW50aW1lIGNvbmZpZ3VyYXRpb24sIGFkZCB0aGUgdmFsdWVzIG9mIHRoZSBDb25jdXJyZW50RXhlY3V0aW9ucyBwYXJhbWV0ZXIgZm9yIGVhY2ggU2VydmVyUHJvY2VzcyBvYmplY3QgaW4gdGhlIHJ1bnRpbWUgY29uZmlndXJhdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjcnVudGltZV9jb25maWd1cmF0aW9uIEdhbWVsaWZ0RmxlZXQjcnVudGltZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBydW50aW1lQ29uZmlndXJhdGlvbj86IEdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgYSBSZWFsdGltZSBzY3JpcHQgdG8gYmUgZGVwbG95ZWQgb24gYSBuZXcgUmVhbHRpbWUgU2VydmVycyBmbGVldC4gVGhlIHNjcmlwdCBtdXN0IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgdXBsb2FkZWQgdG8gQW1hem9uIEdhbWVMaWZ0LiBUaGlzIGZsZWV0IHNldHRpbmcgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZmxlZXQgaXMgY3JlYXRlZC5cblxuTm90ZTogSXQgaXMgbm90IGN1cnJlbnRseSBwb3NzaWJsZSB0byB1c2UgdGhlICFSZWYgY29tbWFuZCB0byByZWZlcmVuY2UgYSBzY3JpcHQgY3JlYXRlZCB3aXRoIGEgQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGUgZm9yIHRoZSBmbGVldCBwcm9wZXJ0eSBTY3JpcHRJZC4gSW5zdGVhZCwgdXNlIEZuOjpHZXRBdHQgU2NyaXB0LkFybiBvciBGbjo6R2V0QXR0IFNjcmlwdC5JZCB0byByZXRyaWV2ZSBlaXRoZXIgb2YgdGhlc2UgcHJvcGVydGllcyBhcyBpbnB1dCBmb3IgU2NyaXB0SWQuIEFsdGVybmF0aXZlbHksIGVudGVyIGEgU2NyaXB0SWQgc3RyaW5nIG1hbnVhbGx5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNzY3JpcHRfaWQgR2FtZWxpZnRGbGVldCNzY3JpcHRfaWR9XG4gICovXG4gIHJlYWRvbmx5IHNjcmlwdElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGlzIHBhcmFtZXRlciBpcyBubyBsb25nZXIgdXNlZCBidXQgaXMgcmV0YWluZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIEluc3RlYWQsIHNwZWNpZnkgc2VydmVyIGxhdW5jaCBwYXJhbWV0ZXJzIGluIHRoZSBSdW50aW1lQ29uZmlndXJhdGlvbiBwYXJhbWV0ZXIuIEEgcmVxdWVzdCBtdXN0IHNwZWNpZnkgZWl0aGVyIGEgcnVudGltZSBjb25maWd1cmF0aW9uIG9yIHZhbHVlcyBmb3IgYm90aCBTZXJ2ZXJMYXVuY2hQYXJhbWV0ZXJzIGFuZCBTZXJ2ZXJMYXVuY2hQYXRoLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNzZXJ2ZXJfbGF1bmNoX3BhcmFtZXRlcnMgR2FtZWxpZnRGbGVldCNzZXJ2ZXJfbGF1bmNoX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlckxhdW5jaFBhcmFtZXRlcnM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoaXMgcGFyYW1ldGVyIGlzIG5vIGxvbmdlciB1c2VkLiBJbnN0ZWFkLCBzcGVjaWZ5IGEgc2VydmVyIGxhdW5jaCBwYXRoIHVzaW5nIHRoZSBSdW50aW1lQ29uZmlndXJhdGlvbiBwYXJhbWV0ZXIuIFJlcXVlc3RzIHRoYXQgc3BlY2lmeSBhIHNlcnZlciBsYXVuY2ggcGF0aCBhbmQgbGF1bmNoIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBhIHJ1bnRpbWUgY29uZmlndXJhdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHdvcmsuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI3NlcnZlcl9sYXVuY2hfcGF0aCBHYW1lbGlmdEZsZWV0I3NlcnZlcl9sYXVuY2hfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmVyTGF1bmNoUGF0aD86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZWxpZnRGbGVldENlcnRpZmljYXRlQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNjZXJ0aWZpY2F0ZV90eXBlIEdhbWVsaWZ0RmxlZXQjY2VydGlmaWNhdGVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lbGlmdEZsZWV0Q2VydGlmaWNhdGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2FtZWxpZnRGbGVldENlcnRpZmljYXRlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlcnRpZmljYXRlVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lbGlmdEZsZWV0RWMySW5ib3VuZFBlcm1pc3Npb25zIHtcbiAgLyoqXG4gICogQSBzdGFydGluZyB2YWx1ZSBmb3IgYSByYW5nZSBvZiBhbGxvd2VkIHBvcnQgbnVtYmVycy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjZnJvbV9wb3J0IEdhbWVsaWZ0RmxlZXQjZnJvbV9wb3J0fVxuICAqL1xuICByZWFkb25seSBmcm9tUG9ydDogbnVtYmVyO1xuICAvKipcbiAgKiBBIHJhbmdlIG9mIGFsbG93ZWQgSVAgYWRkcmVzc2VzLiBUaGlzIHZhbHVlIG11c3QgYmUgZXhwcmVzc2VkIGluIENJRFIgbm90YXRpb24uIEV4YW1wbGU6IFwiMDAwLjAwMC4wMDAuMDAwL1tzdWJuZXQgbWFza11cIiBvciBvcHRpb25hbGx5IHRoZSBzaG9ydGVuZWQgdmVyc2lvbiBcIjAuMC4wLjAvW3N1Ym5ldCBtYXNrXVwiLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNpcF9yYW5nZSBHYW1lbGlmdEZsZWV0I2lwX3JhbmdlfVxuICAqL1xuICByZWFkb25seSBpcFJhbmdlOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBuZXR3b3JrIGNvbW11bmljYXRpb24gcHJvdG9jb2wgdXNlZCBieSB0aGUgZmxlZXQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI3Byb3RvY29sIEdhbWVsaWZ0RmxlZXQjcHJvdG9jb2x9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG4gIC8qKlxuICAqIEFuIGVuZGluZyB2YWx1ZSBmb3IgYSByYW5nZSBvZiBhbGxvd2VkIHBvcnQgbnVtYmVycy4gUG9ydCBudW1iZXJzIGFyZSBlbmQtaW5jbHVzaXZlLiBUaGlzIHZhbHVlIG11c3QgYmUgaGlnaGVyIHRoYW4gRnJvbVBvcnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI3RvX3BvcnQgR2FtZWxpZnRGbGVldCN0b19wb3J0fVxuICAqL1xuICByZWFkb25seSB0b1BvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVsaWZ0RmxlZXRFYzJJbmJvdW5kUGVybWlzc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHYW1lbGlmdEZsZWV0RWMySW5ib3VuZFBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb21fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tUG9ydCksXG4gICAgaXBfcmFuZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXBSYW5nZSksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHRvX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG9Qb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVsaWZ0RmxlZXRMb2NhdGlvbnNMb2NhdGlvbkNhcGFjaXR5IHtcbiAgLyoqXG4gICogVGhlIG51bWJlciBvZiBFQzIgaW5zdGFuY2VzIHlvdSB3YW50IHRvIG1haW50YWluIGluIHRoZSBzcGVjaWZpZWQgZmxlZXQgbG9jYXRpb24uIFRoaXMgdmFsdWUgbXVzdCBmYWxsIGJldHdlZW4gdGhlIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZSBsaW1pdHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2Rlc2lyZWRfZWMyX2luc3RhbmNlcyBHYW1lbGlmdEZsZWV0I2Rlc2lyZWRfZWMyX2luc3RhbmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzaXJlZEVjMkluc3RhbmNlczogbnVtYmVyO1xuICAvKipcbiAgKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IGlzIGFsbG93ZWQgZm9yIHRoZSBmbGVldCdzIGluc3RhbmNlIGNvdW50IGZvciBhIGxvY2F0aW9uLiBXaGVuIGNyZWF0aW5nIGEgbmV3IGZsZWV0LCBHYW1lTGlmdCBhdXRvbWF0aWNhbGx5IHNldHMgdGhpcyB2YWx1ZSB0byBcIjFcIi4gT25jZSB0aGUgZmxlZXQgaXMgYWN0aXZlLCB5b3UgY2FuIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNtYXhfc2l6ZSBHYW1lbGlmdEZsZWV0I21heF9zaXplfVxuICAqL1xuICByZWFkb25seSBtYXhTaXplOiBudW1iZXI7XG4gIC8qKlxuICAqIFRoZSBtaW5pbXVtIHZhbHVlIGFsbG93ZWQgZm9yIHRoZSBmbGVldCdzIGluc3RhbmNlIGNvdW50IGZvciBhIGxvY2F0aW9uLiBXaGVuIGNyZWF0aW5nIGEgbmV3IGZsZWV0LCBHYW1lTGlmdCBhdXRvbWF0aWNhbGx5IHNldHMgdGhpcyB2YWx1ZSB0byBcIjBcIi4gQWZ0ZXIgdGhlIGZsZWV0IGlzIGFjdGl2ZSwgeW91IGNhbiBjaGFuZ2UgdGhpcyB2YWx1ZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbWluX3NpemUgR2FtZWxpZnRGbGVldCNtaW5fc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWluU2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWxpZnRGbGVldExvY2F0aW9uc0xvY2F0aW9uQ2FwYWNpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHYW1lbGlmdEZsZWV0TG9jYXRpb25zTG9jYXRpb25DYXBhY2l0eSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXNpcmVkX2VjMl9pbnN0YW5jZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGVzaXJlZEVjMkluc3RhbmNlcyksXG4gICAgbWF4X3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4U2l6ZSksXG4gICAgbWluX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluU2l6ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lbGlmdEZsZWV0TG9jYXRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI2xvY2F0aW9uIEdhbWVsaWZ0RmxlZXQjbG9jYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAqIEN1cnJlbnQgcmVzb3VyY2UgY2FwYWNpdHkgc2V0dGluZ3MgaW4gYSBzcGVjaWZpZWQgZmxlZXQgb3IgbG9jYXRpb24uIFRoZSBsb2NhdGlvbiB2YWx1ZSBtaWdodCByZWZlciB0byBhIGZsZWV0J3MgcmVtb3RlIGxvY2F0aW9uIG9yIGl0cyBob21lIFJlZ2lvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjbG9jYXRpb25fY2FwYWNpdHkgR2FtZWxpZnRGbGVldCNsb2NhdGlvbl9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYXRpb25DYXBhY2l0eT86IEdhbWVsaWZ0RmxlZXRMb2NhdGlvbnNMb2NhdGlvbkNhcGFjaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWxpZnRGbGVldExvY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEdhbWVsaWZ0RmxlZXRMb2NhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIGxvY2F0aW9uX2NhcGFjaXR5OiBnYW1lbGlmdEZsZWV0TG9jYXRpb25zTG9jYXRpb25DYXBhY2l0eVRvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb25DYXBhY2l0eSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lbGlmdEZsZWV0UmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5IHtcbiAgLyoqXG4gICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGdhbWUgc2Vzc2lvbnMgdGhhdCBhbiBpbmRpdmlkdWFsIGNhbiBjcmVhdGUgZHVyaW5nIHRoZSBwb2xpY3kgcGVyaW9kLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNuZXdfZ2FtZV9zZXNzaW9uc19wZXJfY3JlYXRvciBHYW1lbGlmdEZsZWV0I25ld19nYW1lX3Nlc3Npb25zX3Blcl9jcmVhdG9yfVxuICAqL1xuICByZWFkb25seSBuZXdHYW1lU2Vzc2lvbnNQZXJDcmVhdG9yPzogbnVtYmVyO1xuICAvKipcbiAgKiBUaGUgdGltZSBzcGFuIHVzZWQgaW4gZXZhbHVhdGluZyB0aGUgcmVzb3VyY2UgY3JlYXRpb24gbGltaXQgcG9saWN5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNwb2xpY3lfcGVyaW9kX2luX21pbnV0ZXMgR2FtZWxpZnRGbGVldCNwb2xpY3lfcGVyaW9kX2luX21pbnV0ZXN9XG4gICovXG4gIHJlYWRvbmx5IHBvbGljeVBlcmlvZEluTWludXRlcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVsaWZ0RmxlZXRSZXNvdXJjZUNyZWF0aW9uTGltaXRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHYW1lbGlmdEZsZWV0UmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5ld19nYW1lX3Nlc3Npb25zX3Blcl9jcmVhdG9yOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld0dhbWVTZXNzaW9uc1BlckNyZWF0b3IpLFxuICAgIHBvbGljeV9wZXJpb2RfaW5fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb2xpY3lQZXJpb2RJbk1pbnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZWxpZnRGbGVldFJ1bnRpbWVDb25maWd1cmF0aW9uU2VydmVyUHJvY2Vzc2VzIHtcbiAgLyoqXG4gICogVGhlIG51bWJlciBvZiBzZXJ2ZXIgcHJvY2Vzc2VzIHRoYXQgdXNlIHRoaXMgY29uZmlndXJhdGlvbiB0byBydW4gY29uY3VycmVudGx5IG9uIGFuIGluc3RhbmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNjb25jdXJyZW50X2V4ZWN1dGlvbnMgR2FtZWxpZnRGbGVldCNjb25jdXJyZW50X2V4ZWN1dGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGNvbmN1cnJlbnRFeGVjdXRpb25zOiBudW1iZXI7XG4gIC8qKlxuICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgc2VydmVyIGV4ZWN1dGFibGUgaW4gYSBjdXN0b20gZ2FtZSBidWlsZCBvciB0aGUgbmFtZSBvZiB0aGUgUmVhbHRpbWUgc2NyaXB0IGZpbGUgdGhhdCBjb250YWlucyB0aGUgSW5pdCgpIGZ1bmN0aW9uLiBHYW1lIGJ1aWxkcyBhbmQgUmVhbHRpbWUgc2NyaXB0cyBhcmUgaW5zdGFsbGVkIG9uIGluc3RhbmNlcyBhdCB0aGUgcm9vdDpcblxuV2luZG93cyAoZm9yIGN1c3RvbSBnYW1lIGJ1aWxkcyBvbmx5KTogQzpcXGdhbWUuIEV4YW1wbGU6IFwiQzpcXGdhbWVcXE15R2FtZVxcc2VydmVyLmV4ZVwiXG5cbkxpbnV4OiAvbG9jYWwvZ2FtZS4gRXhhbXBsZXM6IFwiL2xvY2FsL2dhbWUvTXlHYW1lL3NlcnZlci5leGVcIiBvciBcIi9sb2NhbC9nYW1lL015UmVhbHRpbWVTY3JpcHQuanNcIlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNsYXVuY2hfcGF0aCBHYW1lbGlmdEZsZWV0I2xhdW5jaF9wYXRofVxuICAqL1xuICByZWFkb25seSBsYXVuY2hQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAqIEFuIG9wdGlvbmFsIGxpc3Qgb2YgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBzZXJ2ZXIgZXhlY3V0YWJsZSBvciBSZWFsdGltZSBzY3JpcHQgb24gbGF1bmNoLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCNwYXJhbWV0ZXJzIEdhbWVsaWZ0RmxlZXQjcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvblNlcnZlclByb2Nlc3Nlc1RvVGVycmFmb3JtKHN0cnVjdD86IEdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvblNlcnZlclByb2Nlc3Nlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25jdXJyZW50X2V4ZWN1dGlvbnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29uY3VycmVudEV4ZWN1dGlvbnMpLFxuICAgIGxhdW5jaF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFBhdGgpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lbGlmdEZsZWV0UnVudGltZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSAoaW4gc2Vjb25kcykgdGhhdCBhIGdhbWUgc2Vzc2lvbiBjYW4gcmVtYWluIGluIHN0YXR1cyBBQ1RJVkFUSU5HLiBJZiB0aGUgZ2FtZSBzZXNzaW9uIGlzIG5vdCBhY3RpdmUgYmVmb3JlIHRoZSB0aW1lb3V0LCBhY3RpdmF0aW9uIGlzIHRlcm1pbmF0ZWQgYW5kIHRoZSBnYW1lIHNlc3Npb24gc3RhdHVzIGlzIGNoYW5nZWQgdG8gVEVSTUlOQVRFRC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjZ2FtZV9zZXNzaW9uX2FjdGl2YXRpb25fdGltZW91dF9zZWNvbmRzIEdhbWVsaWZ0RmxlZXQjZ2FtZV9zZXNzaW9uX2FjdGl2YXRpb25fdGltZW91dF9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBnYW1lU2Vzc2lvbkFjdGl2YXRpb25UaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGdhbWUgc2Vzc2lvbnMgd2l0aCBzdGF0dXMgQUNUSVZBVElORyB0byBhbGxvdyBvbiBhbiBpbnN0YW5jZSBzaW11bHRhbmVvdXNseS4gVGhpcyBzZXR0aW5nIGxpbWl0cyB0aGUgYW1vdW50IG9mIGluc3RhbmNlIHJlc291cmNlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBuZXcgZ2FtZSBhY3RpdmF0aW9ucyBhdCBhbnkgb25lIHRpbWUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sI21heF9jb25jdXJyZW50X2dhbWVfc2Vzc2lvbl9hY3RpdmF0aW9ucyBHYW1lbGlmdEZsZWV0I21heF9jb25jdXJyZW50X2dhbWVfc2Vzc2lvbl9hY3RpdmF0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgbWF4Q29uY3VycmVudEdhbWVTZXNzaW9uQWN0aXZhdGlvbnM/OiBudW1iZXI7XG4gIC8qKlxuICAqIEEgY29sbGVjdGlvbiBvZiBzZXJ2ZXIgcHJvY2VzcyBjb25maWd1cmF0aW9ucyB0aGF0IGRlc2NyaWJlIHdoaWNoIHNlcnZlciBwcm9jZXNzZXMgdG8gcnVuIG9uIGVhY2ggaW5zdGFuY2UgaW4gYSBmbGVldC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2dhbWVsaWZ0X2ZsZWV0Lmh0bWwjc2VydmVyX3Byb2Nlc3NlcyBHYW1lbGlmdEZsZWV0I3NlcnZlcl9wcm9jZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZlclByb2Nlc3Nlcz86IEdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvblNlcnZlclByb2Nlc3Nlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWxpZnRGbGVldFJ1bnRpbWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2FtZWxpZnRGbGVldFJ1bnRpbWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdhbWVfc2Vzc2lvbl9hY3RpdmF0aW9uX3RpbWVvdXRfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5nYW1lU2Vzc2lvbkFjdGl2YXRpb25UaW1lb3V0U2Vjb25kcyksXG4gICAgbWF4X2NvbmN1cnJlbnRfZ2FtZV9zZXNzaW9uX2FjdGl2YXRpb25zOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heENvbmN1cnJlbnRHYW1lU2Vzc2lvbkFjdGl2YXRpb25zKSxcbiAgICBzZXJ2ZXJfcHJvY2Vzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvblNlcnZlclByb2Nlc3Nlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlcnZlclByb2Nlc3NlcyksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9nYW1lbGlmdF9mbGVldC5odG1sIGF3c2NjX2dhbWVsaWZ0X2ZsZWV0fVxuKi9cbmV4cG9ydCBjbGFzcyBHYW1lbGlmdEZsZWV0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfZ2FtZWxpZnRfZmxlZXRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZ2FtZWxpZnRfZmxlZXQuaHRtbCBhd3NjY19nYW1lbGlmdF9mbGVldH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgR2FtZWxpZnRGbGVldENvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdhbWVsaWZ0RmxlZXRDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZ2FtZWxpZnRfZmxlZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9idWlsZElkID0gY29uZmlnLmJ1aWxkSWQ7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDb25maWd1cmF0aW9uID0gY29uZmlnLmNlcnRpZmljYXRlQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kZXNpcmVkRWMySW5zdGFuY2VzID0gY29uZmlnLmRlc2lyZWRFYzJJbnN0YW5jZXM7XG4gICAgdGhpcy5fZWMySW5ib3VuZFBlcm1pc3Npb25zID0gY29uZmlnLmVjMkluYm91bmRQZXJtaXNzaW9ucztcbiAgICB0aGlzLl9lYzJJbnN0YW5jZVR5cGUgPSBjb25maWcuZWMySW5zdGFuY2VUeXBlO1xuICAgIHRoaXMuX2ZsZWV0VHlwZSA9IGNvbmZpZy5mbGVldFR5cGU7XG4gICAgdGhpcy5faW5zdGFuY2VSb2xlQXJuID0gY29uZmlnLmluc3RhbmNlUm9sZUFybjtcbiAgICB0aGlzLl9sb2NhdGlvbnMgPSBjb25maWcubG9jYXRpb25zO1xuICAgIHRoaXMuX2xvZ1BhdGhzID0gY29uZmlnLmxvZ1BhdGhzO1xuICAgIHRoaXMuX21heFNpemUgPSBjb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLl9tZXRyaWNHcm91cHMgPSBjb25maWcubWV0cmljR3JvdXBzO1xuICAgIHRoaXMuX21pblNpemUgPSBjb25maWcubWluU2l6ZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5ID0gY29uZmlnLm5ld0dhbWVTZXNzaW9uUHJvdGVjdGlvblBvbGljeTtcbiAgICB0aGlzLl9wZWVyVnBjQXdzQWNjb3VudElkID0gY29uZmlnLnBlZXJWcGNBd3NBY2NvdW50SWQ7XG4gICAgdGhpcy5fcGVlclZwY0lkID0gY29uZmlnLnBlZXJWcGNJZDtcbiAgICB0aGlzLl9yZXNvdXJjZUNyZWF0aW9uTGltaXRQb2xpY3kgPSBjb25maWcucmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5O1xuICAgIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uID0gY29uZmlnLnJ1bnRpbWVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NjcmlwdElkID0gY29uZmlnLnNjcmlwdElkO1xuICAgIHRoaXMuX3NlcnZlckxhdW5jaFBhcmFtZXRlcnMgPSBjb25maWcuc2VydmVyTGF1bmNoUGFyYW1ldGVycztcbiAgICB0aGlzLl9zZXJ2ZXJMYXVuY2hQYXRoID0gY29uZmlnLnNlcnZlckxhdW5jaFBhdGg7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGJ1aWxkX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGRJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBidWlsZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVpbGRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1aWxkSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1aWxkSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZElkKCkge1xuICAgIHRoaXMuX2J1aWxkSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1aWxkSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRJZFxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ29uZmlndXJhdGlvbj86IEdhbWVsaWZ0RmxlZXRDZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb247XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb24odmFsdWU6IEdhbWVsaWZ0RmxlZXRDZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uXG4gIH1cblxuICAvLyBkZXNpcmVkX2VjMl9pbnN0YW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzaXJlZEVjMkluc3RhbmNlcz86IG51bWJlcjtcbiAgcHVibGljIGdldCBkZXNpcmVkRWMySW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVzaXJlZF9lYzJfaW5zdGFuY2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNpcmVkRWMySW5zdGFuY2VzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fZGVzaXJlZEVjMkluc3RhbmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2lyZWRFYzJJbnN0YW5jZXMoKSB7XG4gICAgdGhpcy5fZGVzaXJlZEVjMkluc3RhbmNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzaXJlZEVjMkluc3RhbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNpcmVkRWMySW5zdGFuY2VzXG4gIH1cblxuICAvLyBlYzJfaW5ib3VuZF9wZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYzJJbmJvdW5kUGVybWlzc2lvbnM/OiBHYW1lbGlmdEZsZWV0RWMySW5ib3VuZFBlcm1pc3Npb25zW107XG4gIHB1YmxpYyBnZXQgZWMySW5ib3VuZFBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VjMl9pbmJvdW5kX3Blcm1pc3Npb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWMySW5ib3VuZFBlcm1pc3Npb25zKHZhbHVlOiBHYW1lbGlmdEZsZWV0RWMySW5ib3VuZFBlcm1pc3Npb25zW10gKSB7XG4gICAgdGhpcy5fZWMySW5ib3VuZFBlcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWMySW5ib3VuZFBlcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX2VjMkluYm91bmRQZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWMySW5ib3VuZFBlcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VjMkluYm91bmRQZXJtaXNzaW9uc1xuICB9XG5cbiAgLy8gZWMyX2luc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYzJJbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZWMySW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWMyX2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVjMkluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWMySW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWMySW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2VjMkluc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWMySW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VjMkluc3RhbmNlVHlwZVxuICB9XG5cbiAgLy8gZmxlZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmbGVldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxlZXRfaWQnKTtcbiAgfVxuXG4gIC8vIGZsZWV0X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mbGVldFR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZmxlZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxlZXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmxlZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mbGVldFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGbGVldFR5cGUoKSB7XG4gICAgdGhpcy5fZmxlZXRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmbGVldFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxlZXRUeXBlXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VSb2xlQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlUm9sZUFybigpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVJvbGVBcm5cbiAgfVxuXG4gIC8vIGxvY2F0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2NhdGlvbnM/OiBHYW1lbGlmdEZsZWV0TG9jYXRpb25zW107XG4gIHB1YmxpYyBnZXQgbG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvY2F0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvY2F0aW9ucyh2YWx1ZTogR2FtZWxpZnRGbGVldExvY2F0aW9uc1tdICkge1xuICAgIHRoaXMuX2xvY2F0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvY2F0aW9ucygpIHtcbiAgICB0aGlzLl9sb2NhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbnNcbiAgfVxuXG4gIC8vIGxvZ19wYXRocyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ1BhdGhzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgbG9nUGF0aHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9nX3BhdGhzJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dQYXRocyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sb2dQYXRocyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ1BhdGhzKCkge1xuICAgIHRoaXMuX2xvZ1BhdGhzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dQYXRoc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dQYXRoc1xuICB9XG5cbiAgLy8gbWF4X3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4U2l6ZT86IG51bWJlcjtcbiAgcHVibGljIGdldCBtYXhTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFNpemUodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9tYXhTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4U2l6ZSgpIHtcbiAgICB0aGlzLl9tYXhTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFNpemVcbiAgfVxuXG4gIC8vIG1ldHJpY19ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWV0cmljR3JvdXBzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgbWV0cmljR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ21ldHJpY19ncm91cHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY0dyb3Vwcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fbWV0cmljR3JvdXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljR3JvdXBzKCkge1xuICAgIHRoaXMuX21ldHJpY0dyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0cmljR3JvdXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY0dyb3Vwc1xuICB9XG5cbiAgLy8gbWluX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluU2l6ZT86IG51bWJlcjtcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblNpemUodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9taW5TaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluU2l6ZSgpIHtcbiAgICB0aGlzLl9taW5TaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5TaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNpemVcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gbmV3X2dhbWVfc2Vzc2lvbl9wcm90ZWN0aW9uX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXdHYW1lU2Vzc2lvblByb3RlY3Rpb25Qb2xpY3k/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV3X2dhbWVfc2Vzc2lvbl9wcm90ZWN0aW9uX3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5KCkge1xuICAgIHRoaXMuX25ld0dhbWVTZXNzaW9uUHJvdGVjdGlvblBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ld0dhbWVTZXNzaW9uUHJvdGVjdGlvblBvbGljeVxuICB9XG5cbiAgLy8gcGVlcl92cGNfYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZWVyVnBjQXdzQWNjb3VudElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBlZXJWcGNBd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZWVyX3ZwY19hd3NfYWNjb3VudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVlclZwY0F3c0FjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGVlclZwY0F3c0FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlZXJWcGNBd3NBY2NvdW50SWQoKSB7XG4gICAgdGhpcy5fcGVlclZwY0F3c0FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVlclZwY0F3c0FjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZWVyVnBjQXdzQWNjb3VudElkXG4gIH1cblxuICAvLyBwZWVyX3ZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BlZXJWcGNJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBwZWVyVnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZWVyX3ZwY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVlclZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wZWVyVnBjSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZWVyVnBjSWQoKSB7XG4gICAgdGhpcy5fcGVlclZwY0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZWVyVnBjSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlclZwY0lkXG4gIH1cblxuICAvLyByZXNvdXJjZV9jcmVhdGlvbl9saW1pdF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5PzogR2FtZWxpZnRGbGVldFJlc291cmNlQ3JlYXRpb25MaW1pdFBvbGljeTtcbiAgcHVibGljIGdldCByZXNvdXJjZUNyZWF0aW9uTGltaXRQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzb3VyY2VfY3JlYXRpb25fbGltaXRfcG9saWN5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5KHZhbHVlOiBHYW1lbGlmdEZsZWV0UmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5ICkge1xuICAgIHRoaXMuX3Jlc291cmNlQ3JlYXRpb25MaW1pdFBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlQ3JlYXRpb25MaW1pdFBvbGljeSgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUNyZWF0aW9uTGltaXRQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQ3JlYXRpb25MaW1pdFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUNyZWF0aW9uTGltaXRQb2xpY3lcbiAgfVxuXG4gIC8vIHJ1bnRpbWVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydW50aW1lQ29uZmlndXJhdGlvbj86IEdhbWVsaWZ0RmxlZXRSdW50aW1lQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBydW50aW1lQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdydW50aW1lX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBydW50aW1lQ29uZmlndXJhdGlvbih2YWx1ZTogR2FtZWxpZnRGbGVldFJ1bnRpbWVDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVudGltZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBzY3JpcHRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY3JpcHRJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBzY3JpcHRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjcmlwdF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NyaXB0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjcmlwdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NyaXB0SWQoKSB7XG4gICAgdGhpcy5fc2NyaXB0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjcmlwdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjcmlwdElkXG4gIH1cblxuICAvLyBzZXJ2ZXJfbGF1bmNoX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2ZXJMYXVuY2hQYXJhbWV0ZXJzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNlcnZlckxhdW5jaFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfbGF1bmNoX3BhcmFtZXRlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZlckxhdW5jaFBhcmFtZXRlcnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlckxhdW5jaFBhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJMYXVuY2hQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3NlcnZlckxhdW5jaFBhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlckxhdW5jaFBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyTGF1bmNoUGFyYW1ldGVyc1xuICB9XG5cbiAgLy8gc2VydmVyX2xhdW5jaF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmVyTGF1bmNoUGF0aD86IHN0cmluZztcbiAgcHVibGljIGdldCBzZXJ2ZXJMYXVuY2hQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmVyX2xhdW5jaF9wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJMYXVuY2hQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2ZXJMYXVuY2hQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmVyTGF1bmNoUGF0aCgpIHtcbiAgICB0aGlzLl9zZXJ2ZXJMYXVuY2hQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2ZXJMYXVuY2hQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlckxhdW5jaFBhdGhcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVpbGRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1aWxkSWQpLFxuICAgICAgY2VydGlmaWNhdGVfY29uZmlndXJhdGlvbjogZ2FtZWxpZnRGbGVldENlcnRpZmljYXRlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NlcnRpZmljYXRlQ29uZmlndXJhdGlvbiksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZGVzaXJlZF9lYzJfaW5zdGFuY2VzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXNpcmVkRWMySW5zdGFuY2VzKSxcbiAgICAgIGVjMl9pbmJvdW5kX3Blcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGdhbWVsaWZ0RmxlZXRFYzJJbmJvdW5kUGVybWlzc2lvbnNUb1RlcnJhZm9ybSkodGhpcy5fZWMySW5ib3VuZFBlcm1pc3Npb25zKSxcbiAgICAgIGVjMl9pbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lYzJJbnN0YW5jZVR5cGUpLFxuICAgICAgZmxlZXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmxlZXRUeXBlKSxcbiAgICAgIGluc3RhbmNlX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVJvbGVBcm4pLFxuICAgICAgbG9jYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGdhbWVsaWZ0RmxlZXRMb2NhdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fbG9jYXRpb25zKSxcbiAgICAgIGxvZ19wYXRoczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbG9nUGF0aHMpLFxuICAgICAgbWF4X3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFNpemUpLFxuICAgICAgbWV0cmljX2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbWV0cmljR3JvdXBzKSxcbiAgICAgIG1pbl9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9taW5TaXplKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmV3X2dhbWVfc2Vzc2lvbl9wcm90ZWN0aW9uX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmV3R2FtZVNlc3Npb25Qcm90ZWN0aW9uUG9saWN5KSxcbiAgICAgIHBlZXJfdnBjX2F3c19hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZWVyVnBjQXdzQWNjb3VudElkKSxcbiAgICAgIHBlZXJfdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZWVyVnBjSWQpLFxuICAgICAgcmVzb3VyY2VfY3JlYXRpb25fbGltaXRfcG9saWN5OiBnYW1lbGlmdEZsZWV0UmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5VG9UZXJyYWZvcm0odGhpcy5fcmVzb3VyY2VDcmVhdGlvbkxpbWl0UG9saWN5KSxcbiAgICAgIHJ1bnRpbWVfY29uZmlndXJhdGlvbjogZ2FtZWxpZnRGbGVldFJ1bnRpbWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgc2NyaXB0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zY3JpcHRJZCksXG4gICAgICBzZXJ2ZXJfbGF1bmNoX3BhcmFtZXRlcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZlckxhdW5jaFBhcmFtZXRlcnMpLFxuICAgICAgc2VydmVyX2xhdW5jaF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2ZXJMYXVuY2hQYXRoKSxcbiAgICB9O1xuICB9XG59XG4iXX0=