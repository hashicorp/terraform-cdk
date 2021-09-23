"use strict";
// https://www.terraform.io/docs/providers/awscc/r/ecs_service.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsService = exports.ecsServiceTagsToTerraform = exports.ecsServiceServiceRegistriesToTerraform = exports.ecsServicePlacementStrategiesToTerraform = exports.ecsServicePlacementConstraintsToTerraform = exports.ecsServiceNetworkConfigurationToTerraform = exports.ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform = exports.ecsServiceLoadBalancersToTerraform = exports.ecsServiceDeploymentControllerToTerraform = exports.ecsServiceDeploymentConfigurationToTerraform = exports.ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform = exports.ecsServiceCapacityProviderStrategyToTerraform = void 0;
const cdktf = require("cdktf");
function ecsServiceCapacityProviderStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        base: cdktf.numberToTerraform(struct.base),
        capacity_provider: cdktf.stringToTerraform(struct.capacityProvider),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.ecsServiceCapacityProviderStrategyToTerraform = ecsServiceCapacityProviderStrategyToTerraform;
function ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable: cdktf.booleanToTerraform(struct.enable),
        rollback: cdktf.booleanToTerraform(struct.rollback),
    };
}
exports.ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform = ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform;
function ecsServiceDeploymentConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deployment_circuit_breaker: ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct.deploymentCircuitBreaker),
        maximum_percent: cdktf.numberToTerraform(struct.maximumPercent),
        minimum_healthy_percent: cdktf.numberToTerraform(struct.minimumHealthyPercent),
    };
}
exports.ecsServiceDeploymentConfigurationToTerraform = ecsServiceDeploymentConfigurationToTerraform;
function ecsServiceDeploymentControllerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsServiceDeploymentControllerToTerraform = ecsServiceDeploymentControllerToTerraform;
function ecsServiceLoadBalancersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        load_balancer_name: cdktf.stringToTerraform(struct.loadBalancerName),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
    };
}
exports.ecsServiceLoadBalancersToTerraform = ecsServiceLoadBalancersToTerraform;
function ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assign_public_ip: cdktf.stringToTerraform(struct.assignPublicIp),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform = ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform;
function ecsServiceNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awsvpc_configuration: ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct.awsvpcConfiguration),
    };
}
exports.ecsServiceNetworkConfigurationToTerraform = ecsServiceNetworkConfigurationToTerraform;
function ecsServicePlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsServicePlacementConstraintsToTerraform = ecsServicePlacementConstraintsToTerraform;
function ecsServicePlacementStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsServicePlacementStrategiesToTerraform = ecsServicePlacementStrategiesToTerraform;
function ecsServiceServiceRegistriesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        port: cdktf.numberToTerraform(struct.port),
        registry_arn: cdktf.stringToTerraform(struct.registryArn),
    };
}
exports.ecsServiceServiceRegistriesToTerraform = ecsServiceServiceRegistriesToTerraform;
function ecsServiceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.ecsServiceTagsToTerraform = ecsServiceTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service}
*/
class EcsService extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_service',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._capacityProviderStrategy = config.capacityProviderStrategy;
        this._cluster = config.cluster;
        this._deploymentConfiguration = config.deploymentConfiguration;
        this._deploymentController = config.deploymentController;
        this._desiredCount = config.desiredCount;
        this._enableEcsManagedTags = config.enableEcsManagedTags;
        this._enableExecuteCommand = config.enableExecuteCommand;
        this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
        this._launchType = config.launchType;
        this._loadBalancers = config.loadBalancers;
        this._networkConfiguration = config.networkConfiguration;
        this._placementConstraints = config.placementConstraints;
        this._placementStrategies = config.placementStrategies;
        this._platformVersion = config.platformVersion;
        this._propagateTags = config.propagateTags;
        this._role = config.role;
        this._schedulingStrategy = config.schedulingStrategy;
        this._serviceName = config.serviceName;
        this._serviceRegistries = config.serviceRegistries;
        this._tags = config.tags;
        this._taskDefinition = config.taskDefinition;
    }
    get capacityProviderStrategy() {
        return this.interpolationForAttribute('capacity_provider_strategy');
    }
    set capacityProviderStrategy(value) {
        this._capacityProviderStrategy = value;
    }
    resetCapacityProviderStrategy() {
        this._capacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy;
    }
    get cluster() {
        return this.getStringAttribute('cluster');
    }
    set cluster(value) {
        this._cluster = value;
    }
    resetCluster() {
        this._cluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterInput() {
        return this._cluster;
    }
    get deploymentConfiguration() {
        return this.interpolationForAttribute('deployment_configuration');
    }
    set deploymentConfiguration(value) {
        this._deploymentConfiguration = value;
    }
    resetDeploymentConfiguration() {
        this._deploymentConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentConfigurationInput() {
        return this._deploymentConfiguration;
    }
    get deploymentController() {
        return this.interpolationForAttribute('deployment_controller');
    }
    set deploymentController(value) {
        this._deploymentController = value;
    }
    resetDeploymentController() {
        this._deploymentController = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentControllerInput() {
        return this._deploymentController;
    }
    get desiredCount() {
        return this.getNumberAttribute('desired_count');
    }
    set desiredCount(value) {
        this._desiredCount = value;
    }
    resetDesiredCount() {
        this._desiredCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredCountInput() {
        return this._desiredCount;
    }
    get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    set enableEcsManagedTags(value) {
        this._enableEcsManagedTags = value;
    }
    resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }
    get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    set enableExecuteCommand(value) {
        this._enableExecuteCommand = value;
    }
    resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }
    get healthCheckGracePeriodSeconds() {
        return this.getNumberAttribute('health_check_grace_period_seconds');
    }
    set healthCheckGracePeriodSeconds(value) {
        this._healthCheckGracePeriodSeconds = value;
    }
    resetHealthCheckGracePeriodSeconds() {
        this._healthCheckGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckGracePeriodSecondsInput() {
        return this._healthCheckGracePeriodSeconds;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get launchType() {
        return this.getStringAttribute('launch_type');
    }
    set launchType(value) {
        this._launchType = value;
    }
    resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTypeInput() {
        return this._launchType;
    }
    get loadBalancers() {
        return this.interpolationForAttribute('load_balancers');
    }
    set loadBalancers(value) {
        this._loadBalancers = value;
    }
    resetLoadBalancers() {
        this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancersInput() {
        return this._loadBalancers;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    get networkConfiguration() {
        return this.interpolationForAttribute('network_configuration');
    }
    set networkConfiguration(value) {
        this._networkConfiguration = value;
    }
    resetNetworkConfiguration() {
        this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration;
    }
    get placementConstraints() {
        return this.interpolationForAttribute('placement_constraints');
    }
    set placementConstraints(value) {
        this._placementConstraints = value;
    }
    resetPlacementConstraints() {
        this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementConstraintsInput() {
        return this._placementConstraints;
    }
    get placementStrategies() {
        return this.interpolationForAttribute('placement_strategies');
    }
    set placementStrategies(value) {
        this._placementStrategies = value;
    }
    resetPlacementStrategies() {
        this._placementStrategies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementStrategiesInput() {
        return this._placementStrategies;
    }
    get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    set platformVersion(value) {
        this._platformVersion = value;
    }
    resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformVersionInput() {
        return this._platformVersion;
    }
    get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    set propagateTags(value) {
        this._propagateTags = value;
    }
    resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagateTagsInput() {
        return this._propagateTags;
    }
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    get schedulingStrategy() {
        return this.getStringAttribute('scheduling_strategy');
    }
    set schedulingStrategy(value) {
        this._schedulingStrategy = value;
    }
    resetSchedulingStrategy() {
        this._schedulingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulingStrategyInput() {
        return this._schedulingStrategy;
    }
    // service_arn - computed: true, optional: false, required: false
    get serviceArn() {
        return this.getStringAttribute('service_arn');
    }
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    set serviceName(value) {
        this._serviceName = value;
    }
    resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceNameInput() {
        return this._serviceName;
    }
    get serviceRegistries() {
        return this.interpolationForAttribute('service_registries');
    }
    set serviceRegistries(value) {
        this._serviceRegistries = value;
    }
    resetServiceRegistries() {
        this._serviceRegistries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRegistriesInput() {
        return this._serviceRegistries;
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
    get taskDefinition() {
        return this.getStringAttribute('task_definition');
    }
    set taskDefinition(value) {
        this._taskDefinition = value;
    }
    resetTaskDefinition() {
        this._taskDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskDefinitionInput() {
        return this._taskDefinition;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
            cluster: cdktf.stringToTerraform(this._cluster),
            deployment_configuration: ecsServiceDeploymentConfigurationToTerraform(this._deploymentConfiguration),
            deployment_controller: ecsServiceDeploymentControllerToTerraform(this._deploymentController),
            desired_count: cdktf.numberToTerraform(this._desiredCount),
            enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
            enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
            health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
            launch_type: cdktf.stringToTerraform(this._launchType),
            load_balancers: cdktf.listMapper(ecsServiceLoadBalancersToTerraform)(this._loadBalancers),
            network_configuration: ecsServiceNetworkConfigurationToTerraform(this._networkConfiguration),
            placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
            placement_strategies: cdktf.listMapper(ecsServicePlacementStrategiesToTerraform)(this._placementStrategies),
            platform_version: cdktf.stringToTerraform(this._platformVersion),
            propagate_tags: cdktf.stringToTerraform(this._propagateTags),
            role: cdktf.stringToTerraform(this._role),
            scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
            service_name: cdktf.stringToTerraform(this._serviceName),
            service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
            tags: cdktf.listMapper(ecsServiceTagsToTerraform)(this._tags),
            task_definition: cdktf.stringToTerraform(this._taskDefinition),
        };
    }
}
exports.EcsService = EcsService;
// =================
// STATIC PROPERTIES
// =================
EcsService.tfResourceType = "awscc_ecs_service";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlY3Mtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQW1FO0FBQ25FLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQXlHL0IsU0FBZ0IsNkNBQTZDLENBQUMsTUFBMkM7SUFDdkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRSxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFQRCxzR0FPQztBQWFELFNBQWdCLG9FQUFvRSxDQUFDLE1BQWtFO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hELFFBQVEsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNyRCxDQUFBO0FBQ0gsQ0FBQztBQU5ELG9KQU1DO0FBaUJELFNBQWdCLDRDQUE0QyxDQUFDLE1BQTBDO0lBQ3JHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsMEJBQTBCLEVBQUUsb0VBQW9FLENBQUMsTUFBTyxDQUFDLHdCQUF3QixD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QyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDNUYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzNHLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzVELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RFLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JHLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7O0FBbmJILGdDQW9iQztBQWxiQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHlCQUFjLEdBQVcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRWNzU2VydmljZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjY2FwYWNpdHlfcHJvdmlkZXJfc3RyYXRlZ3kgRWNzU2VydmljZSNjYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneX1cbiAgKi9cbiAgcmVhZG9ubHkgY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5PzogRWNzU2VydmljZUNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVtdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjY2x1c3RlciBFY3NTZXJ2aWNlI2NsdXN0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNsdXN0ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNkZXBsb3ltZW50X2NvbmZpZ3VyYXRpb24gRWNzU2VydmljZSNkZXBsb3ltZW50X2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRDb25maWd1cmF0aW9uPzogRWNzU2VydmljZURlcGxveW1lbnRDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjZGVwbG95bWVudF9jb250cm9sbGVyIEVjc1NlcnZpY2UjZGVwbG95bWVudF9jb250cm9sbGVyfVxuICAqL1xuICByZWFkb25seSBkZXBsb3ltZW50Q29udHJvbGxlcj86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q29udHJvbGxlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2Rlc2lyZWRfY291bnQgRWNzU2VydmljZSNkZXNpcmVkX2NvdW50fVxuICAqL1xuICByZWFkb25seSBkZXNpcmVkQ291bnQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNlbmFibGVfZWNzX21hbmFnZWRfdGFncyBFY3NTZXJ2aWNlI2VuYWJsZV9lY3NfbWFuYWdlZF90YWdzfVxuICAqL1xuICByZWFkb25seSBlbmFibGVFY3NNYW5hZ2VkVGFncz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2VuYWJsZV9leGVjdXRlX2NvbW1hbmQgRWNzU2VydmljZSNlbmFibGVfZXhlY3V0ZV9jb21tYW5kfVxuICAqL1xuICByZWFkb25seSBlbmFibGVFeGVjdXRlQ29tbWFuZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2hlYWx0aF9jaGVja19ncmFjZV9wZXJpb2Rfc2Vjb25kcyBFY3NTZXJ2aWNlI2hlYWx0aF9jaGVja19ncmFjZV9wZXJpb2Rfc2Vjb25kc31cbiAgKi9cbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNsYXVuY2hfdHlwZSBFY3NTZXJ2aWNlI2xhdW5jaF90eXBlfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjbG9hZF9iYWxhbmNlcnMgRWNzU2VydmljZSNsb2FkX2JhbGFuY2Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2Vycz86IEVjc1NlcnZpY2VMb2FkQmFsYW5jZXJzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNuZXR3b3JrX2NvbmZpZ3VyYXRpb24gRWNzU2VydmljZSNuZXR3b3JrX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtDb25maWd1cmF0aW9uPzogRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjcGxhY2VtZW50X2NvbnN0cmFpbnRzIEVjc1NlcnZpY2UjcGxhY2VtZW50X2NvbnN0cmFpbnRzfVxuICAqL1xuICByZWFkb25seSBwbGFjZW1lbnRDb25zdHJhaW50cz86IEVjc1NlcnZpY2VQbGFjZW1lbnRDb25zdHJhaW50c1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjcGxhY2VtZW50X3N0cmF0ZWdpZXMgRWNzU2VydmljZSNwbGFjZW1lbnRfc3RyYXRlZ2llc31cbiAgKi9cbiAgcmVhZG9ubHkgcGxhY2VtZW50U3RyYXRlZ2llcz86IEVjc1NlcnZpY2VQbGFjZW1lbnRTdHJhdGVnaWVzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNwbGF0Zm9ybV92ZXJzaW9uIEVjc1NlcnZpY2UjcGxhdGZvcm1fdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcGxhdGZvcm1WZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjcHJvcGFnYXRlX3RhZ3MgRWNzU2VydmljZSNwcm9wYWdhdGVfdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgcHJvcGFnYXRlVGFncz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3JvbGUgRWNzU2VydmljZSNyb2xlfVxuICAqL1xuICByZWFkb25seSByb2xlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjc2NoZWR1bGluZ19zdHJhdGVneSBFY3NTZXJ2aWNlI3NjaGVkdWxpbmdfc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IHNjaGVkdWxpbmdTdHJhdGVneT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3NlcnZpY2VfbmFtZSBFY3NTZXJ2aWNlI3NlcnZpY2VfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNzZXJ2aWNlX3JlZ2lzdHJpZXMgRWNzU2VydmljZSNzZXJ2aWNlX3JlZ2lzdHJpZXN9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VSZWdpc3RyaWVzPzogRWNzU2VydmljZVNlcnZpY2VSZWdpc3RyaWVzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCN0YWdzIEVjc1NlcnZpY2UjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEVjc1NlcnZpY2VUYWdzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCN0YXNrX2RlZmluaXRpb24gRWNzU2VydmljZSN0YXNrX2RlZmluaXRpb259XG4gICovXG4gIHJlYWRvbmx5IHRhc2tEZWZpbml0aW9uPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2Jhc2UgRWNzU2VydmljZSNiYXNlfVxuICAqL1xuICByZWFkb25seSBiYXNlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjY2FwYWNpdHlfcHJvdmlkZXIgRWNzU2VydmljZSNjYXBhY2l0eV9wcm92aWRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgY2FwYWNpdHlQcm92aWRlcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3dlaWdodCBFY3NTZXJ2aWNlI3dlaWdodH1cbiAgKi9cbiAgcmVhZG9ubHkgd2VpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZUNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmFzZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5iYXNlKSxcbiAgICBjYXBhY2l0eV9wcm92aWRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVByb3ZpZGVyKSxcbiAgICB3ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VEZXBsb3ltZW50Q29uZmlndXJhdGlvbkRlcGxveW1lbnRDaXJjdWl0QnJlYWtlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNlbmFibGUgRWNzU2VydmljZSNlbmFibGV9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjcm9sbGJhY2sgRWNzU2VydmljZSNyb2xsYmFja31cbiAgKi9cbiAgcmVhZG9ubHkgcm9sbGJhY2s6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1NlcnZpY2VEZXBsb3ltZW50Q29uZmlndXJhdGlvbkRlcGxveW1lbnRDaXJjdWl0QnJlYWtlclRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q29uZmlndXJhdGlvbkRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZSksXG4gICAgcm9sbGJhY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGxiYWNrKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VEZXBsb3ltZW50Q29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNkZXBsb3ltZW50X2NpcmN1aXRfYnJlYWtlciBFY3NTZXJ2aWNlI2RlcGxveW1lbnRfY2lyY3VpdF9icmVha2VyfVxuICAqL1xuICByZWFkb25seSBkZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXI/OiBFY3NTZXJ2aWNlRGVwbG95bWVudENvbmZpZ3VyYXRpb25EZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNtYXhpbXVtX3BlcmNlbnQgRWNzU2VydmljZSNtYXhpbXVtX3BlcmNlbnR9XG4gICovXG4gIHJlYWRvbmx5IG1heGltdW1QZXJjZW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjbWluaW11bV9oZWFsdGh5X3BlcmNlbnQgRWNzU2VydmljZSNtaW5pbXVtX2hlYWx0aHlfcGVyY2VudH1cbiAgKi9cbiAgcmVhZG9ubHkgbWluaW11bUhlYWx0aHlQZXJjZW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZURlcGxveW1lbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZURlcGxveW1lbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlcGxveW1lbnRfY2lyY3VpdF9icmVha2VyOiBlY3NTZXJ2aWNlRGVwbG95bWVudENvbmZpZ3VyYXRpb25EZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlcGxveW1lbnRDaXJjdWl0QnJlYWtlciksXG4gICAgbWF4aW11bV9wZXJjZW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heGltdW1QZXJjZW50KSxcbiAgICBtaW5pbXVtX2hlYWx0aHlfcGVyY2VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5pbXVtSGVhbHRoeVBlcmNlbnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWNzU2VydmljZURlcGxveW1lbnRDb250cm9sbGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3R5cGUgRWNzU2VydmljZSN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZURlcGxveW1lbnRDb250cm9sbGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZURlcGxveW1lbnRDb250cm9sbGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlTG9hZEJhbGFuY2VycyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNjb250YWluZXJfbmFtZSBFY3NTZXJ2aWNlI2NvbnRhaW5lcl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjY29udGFpbmVyX3BvcnQgRWNzU2VydmljZSNjb250YWluZXJfcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGFpbmVyUG9ydD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2xvYWRfYmFsYW5jZXJfbmFtZSBFY3NTZXJ2aWNlI2xvYWRfYmFsYW5jZXJfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3RhcmdldF9ncm91cF9hcm4gRWNzU2VydmljZSN0YXJnZXRfZ3JvdXBfYXJufVxuICAqL1xuICByZWFkb25seSB0YXJnZXRHcm91cEFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1NlcnZpY2VMb2FkQmFsYW5jZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZUxvYWRCYWxhbmNlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyTmFtZSksXG4gICAgY29udGFpbmVyX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUG9ydCksXG4gICAgbG9hZF9iYWxhbmNlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlck5hbWUpLFxuICAgIHRhcmdldF9ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0R3JvdXBBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uQXdzdnBjQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNhc3NpZ25fcHVibGljX2lwIEVjc1NlcnZpY2UjYXNzaWduX3B1YmxpY19pcH1cbiAgKi9cbiAgcmVhZG9ubHkgYXNzaWduUHVibGljSXA/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNzZWN1cml0eV9ncm91cHMgRWNzU2VydmljZSNzZWN1cml0eV9ncm91cHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNzdWJuZXRzIEVjc1NlcnZpY2Ujc3VibmV0c31cbiAgKi9cbiAgcmVhZG9ubHkgc3VibmV0cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uQXdzdnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VOZXR3b3JrQ29uZmlndXJhdGlvbkF3c3ZwY0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXNzaWduX3B1YmxpY19pcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NpZ25QdWJsaWNJcCksXG4gICAgc2VjdXJpdHlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBzKSxcbiAgICBzdWJuZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI2F3c3ZwY19jb25maWd1cmF0aW9uIEVjc1NlcnZpY2UjYXdzdnBjX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGF3c3ZwY0NvbmZpZ3VyYXRpb24/OiBFY3NTZXJ2aWNlTmV0d29ya0NvbmZpZ3VyYXRpb25Bd3N2cGNDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF3c3ZwY19jb25maWd1cmF0aW9uOiBlY3NTZXJ2aWNlTmV0d29ya0NvbmZpZ3VyYXRpb25Bd3N2cGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hd3N2cGNDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VQbGFjZW1lbnRDb25zdHJhaW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNleHByZXNzaW9uIEVjc1NlcnZpY2UjZXhwcmVzc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZXhwcmVzc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3R5cGUgRWNzU2VydmljZSN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWNzU2VydmljZVBsYWNlbWVudFN0cmF0ZWdpZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjZmllbGQgRWNzU2VydmljZSNmaWVsZH1cbiAgKi9cbiAgcmVhZG9ubHkgZmllbGQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCN0eXBlIEVjc1NlcnZpY2UjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZVBsYWNlbWVudFN0cmF0ZWdpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlUGxhY2VtZW50U3RyYXRlZ2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmaWVsZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWVsZCksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNjb250YWluZXJfbmFtZSBFY3NTZXJ2aWNlI2NvbnRhaW5lcl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjY29udGFpbmVyX3BvcnQgRWNzU2VydmljZSNjb250YWluZXJfcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGFpbmVyUG9ydD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3BvcnQgRWNzU2VydmljZSNwb3J0fVxuICAqL1xuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Vjc19zZXJ2aWNlLmh0bWwjcmVnaXN0cnlfYXJuIEVjc1NlcnZpY2UjcmVnaXN0cnlfYXJufVxuICAqL1xuICByZWFkb25seSByZWdpc3RyeUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllc1RvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJOYW1lKSxcbiAgICBjb250YWluZXJfcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJQb3J0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHJlZ2lzdHJ5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWdpc3RyeUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlVGFncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCNrZXkgRWNzU2VydmljZSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sI3ZhbHVlIEVjc1NlcnZpY2UjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzU2VydmljZVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lY3Nfc2VydmljZS5odG1sIGF3c2NjX2Vjc19zZXJ2aWNlfVxuKi9cbmV4cG9ydCBjbGFzcyBFY3NTZXJ2aWNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfZWNzX3NlcnZpY2VcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWNzX3NlcnZpY2UuaHRtbCBhd3NjY19lY3Nfc2VydmljZX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRWNzU2VydmljZUNvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjc1NlcnZpY2VDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZWNzX3NlcnZpY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3kgPSBjb25maWcuY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5O1xuICAgIHRoaXMuX2NsdXN0ZXIgPSBjb25maWcuY2x1c3RlcjtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlndXJhdGlvbiA9IGNvbmZpZy5kZXBsb3ltZW50Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlciA9IGNvbmZpZy5kZXBsb3ltZW50Q29udHJvbGxlcjtcbiAgICB0aGlzLl9kZXNpcmVkQ291bnQgPSBjb25maWcuZGVzaXJlZENvdW50O1xuICAgIHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzID0gY29uZmlnLmVuYWJsZUVjc01hbmFnZWRUYWdzO1xuICAgIHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kID0gY29uZmlnLmVuYWJsZUV4ZWN1dGVDb21tYW5kO1xuICAgIHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzID0gY29uZmlnLmhlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzO1xuICAgIHRoaXMuX2xhdW5jaFR5cGUgPSBjb25maWcubGF1bmNoVHlwZTtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJzID0gY29uZmlnLmxvYWRCYWxhbmNlcnM7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24gPSBjb25maWcubmV0d29ya0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMgPSBjb25maWcucGxhY2VtZW50Q29uc3RyYWludHM7XG4gICAgdGhpcy5fcGxhY2VtZW50U3RyYXRlZ2llcyA9IGNvbmZpZy5wbGFjZW1lbnRTdHJhdGVnaWVzO1xuICAgIHRoaXMuX3BsYXRmb3JtVmVyc2lvbiA9IGNvbmZpZy5wbGF0Zm9ybVZlcnNpb247XG4gICAgdGhpcy5fcHJvcGFnYXRlVGFncyA9IGNvbmZpZy5wcm9wYWdhdGVUYWdzO1xuICAgIHRoaXMuX3JvbGUgPSBjb25maWcucm9sZTtcbiAgICB0aGlzLl9zY2hlZHVsaW5nU3RyYXRlZ3kgPSBjb25maWcuc2NoZWR1bGluZ1N0cmF0ZWd5O1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gY29uZmlnLnNlcnZpY2VOYW1lO1xuICAgIHRoaXMuX3NlcnZpY2VSZWdpc3RyaWVzID0gY29uZmlnLnNlcnZpY2VSZWdpc3RyaWVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YXNrRGVmaW5pdGlvbiA9IGNvbmZpZy50YXNrRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY2FwYWNpdHlfcHJvdmlkZXJfc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5PzogRWNzU2VydmljZUNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVtdO1xuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSh2YWx1ZTogRWNzU2VydmljZUNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVtdICkge1xuICAgIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UHJvdmlkZXJTdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3lcbiAgfVxuXG4gIC8vIGNsdXN0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbHVzdGVyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNsdXN0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcigpIHtcbiAgICB0aGlzLl9jbHVzdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50Q29uZmlndXJhdGlvbj86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXBsb3ltZW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXBsb3ltZW50Q29uZmlndXJhdGlvbih2YWx1ZTogRWNzU2VydmljZURlcGxveW1lbnRDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2NvbnRyb2xsZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50Q29udHJvbGxlcj86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q29udHJvbGxlcjtcbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29udHJvbGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXBsb3ltZW50X2NvbnRyb2xsZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXBsb3ltZW50Q29udHJvbGxlcih2YWx1ZTogRWNzU2VydmljZURlcGxveW1lbnRDb250cm9sbGVyKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbnRyb2xsZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXBsb3ltZW50Q29udHJvbGxlcigpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudENvbnRyb2xsZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudENvbnRyb2xsZXJcbiAgfVxuXG4gIC8vIGRlc2lyZWRfY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzaXJlZENvdW50PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGRlc2lyZWRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Rlc2lyZWRfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2lyZWRDb3VudCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2Rlc2lyZWRDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2lyZWRDb3VudCgpIHtcbiAgICB0aGlzLl9kZXNpcmVkQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2lyZWRDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNpcmVkQ291bnRcbiAgfVxuXG4gIC8vIGVuYWJsZV9lY3NfbWFuYWdlZF90YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlRWNzTWFuYWdlZFRhZ3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIHB1YmxpYyBnZXQgZW5hYmxlRWNzTWFuYWdlZFRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2Vjc19tYW5hZ2VkX3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUVjc01hbmFnZWRUYWdzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUVjc01hbmFnZWRUYWdzKCkge1xuICAgIHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVFY3NNYW5hZ2VkVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFnc1xuICB9XG5cbiAgLy8gZW5hYmxlX2V4ZWN1dGVfY29tbWFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVFeGVjdXRlQ29tbWFuZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCBlbmFibGVFeGVjdXRlQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZXhlY3V0ZV9jb21tYW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVFeGVjdXRlQ29tbWFuZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlICkge1xuICAgIHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlRXhlY3V0ZUNvbW1hbmQoKSB7XG4gICAgdGhpcy5fZW5hYmxlRXhlY3V0ZUNvbW1hbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUV4ZWN1dGVDb21tYW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kXG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcygpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHNcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGF1bmNoX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFR5cGUoKSB7XG4gICAgdGhpcy5fbGF1bmNoVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUeXBlXG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlcnM/OiBFY3NTZXJ2aWNlTG9hZEJhbGFuY2Vyc1tdO1xuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsb2FkQmFsYW5jZXJzKHZhbHVlOiBFY3NTZXJ2aWNlTG9hZEJhbGFuY2Vyc1tdKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrQ29uZmlndXJhdGlvbj86IEVjc1NlcnZpY2VOZXR3b3JrQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrQ29uZmlndXJhdGlvbih2YWx1ZTogRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBwbGFjZW1lbnRfY29uc3RyYWludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnRDb25zdHJhaW50cz86IEVjc1NlcnZpY2VQbGFjZW1lbnRDb25zdHJhaW50c1tdO1xuICBwdWJsaWMgZ2V0IHBsYWNlbWVudENvbnN0cmFpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BsYWNlbWVudF9jb25zdHJhaW50cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYWNlbWVudENvbnN0cmFpbnRzKHZhbHVlOiBFY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHNbXSkge1xuICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50Q29uc3RyYWludHMoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudENvbnN0cmFpbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzXG4gIH1cblxuICAvLyBwbGFjZW1lbnRfc3RyYXRlZ2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudFN0cmF0ZWdpZXM/OiBFY3NTZXJ2aWNlUGxhY2VtZW50U3RyYXRlZ2llc1tdO1xuICBwdWJsaWMgZ2V0IHBsYWNlbWVudFN0cmF0ZWdpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGxhY2VtZW50X3N0cmF0ZWdpZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFjZW1lbnRTdHJhdGVnaWVzKHZhbHVlOiBFY3NTZXJ2aWNlUGxhY2VtZW50U3RyYXRlZ2llc1tdKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50U3RyYXRlZ2llcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYWNlbWVudFN0cmF0ZWdpZXMoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50U3RyYXRlZ2llcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50U3RyYXRlZ2llc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnRTdHJhdGVnaWVzXG4gIH1cblxuICAvLyBwbGF0Zm9ybV92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhdGZvcm1WZXJzaW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBsYXRmb3JtVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhdGZvcm1WZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhdGZvcm1WZXJzaW9uKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1WZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtVmVyc2lvblxuICB9XG5cbiAgLy8gcHJvcGFnYXRlX3RhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9wYWdhdGVUYWdzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByb3BhZ2F0ZVRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9wYWdhdGVfdGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvcGFnYXRlVGFncyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3BhZ2F0ZVRhZ3MoKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlVGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRlVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wYWdhdGVUYWdzXG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZT86IHN0cmluZztcbiAgcHVibGljIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGUoKSB7XG4gICAgdGhpcy5fcm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlXG4gIH1cblxuICAvLyBzY2hlZHVsaW5nX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGluZ1N0cmF0ZWd5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNjaGVkdWxpbmdTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVkdWxpbmdfc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVkdWxpbmdTdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZWR1bGluZ1N0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZWR1bGluZ1N0cmF0ZWd5KCkge1xuICAgIHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGluZ1N0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneVxuICB9XG5cbiAgLy8gc2VydmljZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlTmFtZSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZU5hbWVcbiAgfVxuXG4gIC8vIHNlcnZpY2VfcmVnaXN0cmllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VSZWdpc3RyaWVzPzogRWNzU2VydmljZVNlcnZpY2VSZWdpc3RyaWVzW107XG4gIHB1YmxpYyBnZXQgc2VydmljZVJlZ2lzdHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VydmljZV9yZWdpc3RyaWVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZVJlZ2lzdHJpZXModmFsdWU6IEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllc1tdKSB7XG4gICAgdGhpcy5fc2VydmljZVJlZ2lzdHJpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlUmVnaXN0cmllcygpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUmVnaXN0cmllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJlZ2lzdHJpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJlZ2lzdHJpZXNcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IEVjc1NlcnZpY2VUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogRWNzU2VydmljZVRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhc2tfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXNrRGVmaW5pdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCB0YXNrRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfZGVmaW5pdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0RlZmluaXRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl90YXNrRGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tEZWZpbml0aW9uKCkge1xuICAgIHRoaXMuX3Rhc2tEZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrRGVmaW5pdGlvblxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneTogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5VG9UZXJyYWZvcm0pKHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSksXG4gICAgICBjbHVzdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVyKSxcbiAgICAgIGRlcGxveW1lbnRfY29uZmlndXJhdGlvbjogZWNzU2VydmljZURlcGxveW1lbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fZGVwbG95bWVudENvbmZpZ3VyYXRpb24pLFxuICAgICAgZGVwbG95bWVudF9jb250cm9sbGVyOiBlY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlciksXG4gICAgICBkZXNpcmVkX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXNpcmVkQ291bnQpLFxuICAgICAgZW5hYmxlX2Vjc19tYW5hZ2VkX3RhZ3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncyksXG4gICAgICBlbmFibGVfZXhlY3V0ZV9jb21tYW5kOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlRXhlY3V0ZUNvbW1hbmQpLFxuICAgICAgaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcyksXG4gICAgICBsYXVuY2hfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGF1bmNoVHlwZSksXG4gICAgICBsb2FkX2JhbGFuY2VyczogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlTG9hZEJhbGFuY2Vyc1RvVGVycmFmb3JtKSh0aGlzLl9sb2FkQmFsYW5jZXJzKSxcbiAgICAgIG5ldHdvcmtfY29uZmlndXJhdGlvbjogZWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24pLFxuICAgICAgcGxhY2VtZW50X2NvbnN0cmFpbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGVjc1NlcnZpY2VQbGFjZW1lbnRDb25zdHJhaW50c1RvVGVycmFmb3JtKSh0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cyksXG4gICAgICBwbGFjZW1lbnRfc3RyYXRlZ2llczogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlUGxhY2VtZW50U3RyYXRlZ2llc1RvVGVycmFmb3JtKSh0aGlzLl9wbGFjZW1lbnRTdHJhdGVnaWVzKSxcbiAgICAgIHBsYXRmb3JtX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BsYXRmb3JtVmVyc2lvbiksXG4gICAgICBwcm9wYWdhdGVfdGFnczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJvcGFnYXRlVGFncyksXG4gICAgICByb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICAgIHNjaGVkdWxpbmdfc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneSksXG4gICAgICBzZXJ2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VOYW1lKSxcbiAgICAgIHNlcnZpY2VfcmVnaXN0cmllczogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlU2VydmljZVJlZ2lzdHJpZXNUb1RlcnJhZm9ybSkodGhpcy5fc2VydmljZVJlZ2lzdHJpZXMpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhc2tfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFza0RlZmluaXRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==