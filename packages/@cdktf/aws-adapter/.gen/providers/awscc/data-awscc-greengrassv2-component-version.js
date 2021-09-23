"use strict";
// https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccGreengrassv2ComponentVersion = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunction = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources = exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform = exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies = void 0;
const cdktf = require("cdktf");
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies extends cdktf.ComplexComputedList {
    // dependency_type - computed: true, optional: false, required: false
    get dependencyType() {
        return this.getStringAttribute('dependency_type');
    }
    // version_requirement - computed: true, optional: false, required: false
    get versionRequirement() {
        return this.getStringAttribute('version_requirement');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dependency_type: cdktf.stringToTerraform(struct.dependencyType),
        version_requirement: cdktf.stringToTerraform(struct.versionRequirement),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources extends cdktf.ComplexComputedList {
    // topic - computed: true, optional: false, required: false
    get topic() {
        return this.getStringAttribute('topic');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        topic: cdktf.stringToTerraform(struct.topic),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices extends cdktf.ComplexComputedList {
    // add_group_owner - computed: true, optional: false, required: false
    get addGroupOwner() {
        return this.getBooleanAttribute('add_group_owner');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // permission - computed: true, optional: false, required: false
    get permission() {
        return this.getStringAttribute('permission');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        add_group_owner: cdktf.booleanToTerraform(struct.addGroupOwner),
        path: cdktf.stringToTerraform(struct.path),
        permission: cdktf.stringToTerraform(struct.permission),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes extends cdktf.ComplexComputedList {
    // add_group_owner - computed: true, optional: false, required: false
    get addGroupOwner() {
        return this.getBooleanAttribute('add_group_owner');
    }
    // destination_path - computed: true, optional: false, required: false
    get destinationPath() {
        return this.getStringAttribute('destination_path');
    }
    // permission - computed: true, optional: false, required: false
    get permission() {
        return this.getStringAttribute('permission');
    }
    // source_path - computed: true, optional: false, required: false
    get sourcePath() {
        return this.getStringAttribute('source_path');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        add_group_owner: cdktf.booleanToTerraform(struct.addGroupOwner),
        destination_path: cdktf.stringToTerraform(struct.destinationPath),
        permission: cdktf.stringToTerraform(struct.permission),
        source_path: cdktf.stringToTerraform(struct.sourcePath),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams extends cdktf.ComplexComputedList {
    // devices - computed: true, optional: false, required: false
    get devices() {
        return this.interpolationForAttribute('devices');
    }
    // memory_size_in_kb - computed: true, optional: false, required: false
    get memorySizeInKb() {
        return this.getNumberAttribute('memory_size_in_kb');
    }
    // mount_ro_sysfs - computed: true, optional: false, required: false
    get mountRoSysfs() {
        return this.getBooleanAttribute('mount_ro_sysfs');
    }
    // volumes - computed: true, optional: false, required: false
    get volumes() {
        return this.interpolationForAttribute('volumes');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        devices: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform)(struct.devices),
        memory_size_in_kb: cdktf.numberToTerraform(struct.memorySizeInKb),
        mount_ro_sysfs: cdktf.booleanToTerraform(struct.mountRoSysfs),
        volumes: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform)(struct.volumes),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams extends cdktf.ComplexComputedList {
    // container_params - computed: true, optional: false, required: false
    get containerParams() {
        return this.interpolationForAttribute('container_params');
    }
    // isolation_mode - computed: true, optional: false, required: false
    get isolationMode() {
        return this.getStringAttribute('isolation_mode');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_params: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct.containerParams),
        isolation_mode: cdktf.stringToTerraform(struct.isolationMode),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters extends cdktf.ComplexComputedList {
    // environment_variables - computed: true, optional: false, required: false
    get environmentVariables() {
        return this.interpolationForAttribute('environment_variables');
    }
    // event_sources - computed: true, optional: false, required: false
    get eventSources() {
        return this.interpolationForAttribute('event_sources');
    }
    // exec_args - computed: true, optional: false, required: false
    get execArgs() {
        return this.getListAttribute('exec_args');
    }
    // input_payload_encoding_type - computed: true, optional: false, required: false
    get inputPayloadEncodingType() {
        return this.getStringAttribute('input_payload_encoding_type');
    }
    // linux_process_params - computed: true, optional: false, required: false
    get linuxProcessParams() {
        return this.interpolationForAttribute('linux_process_params');
    }
    // max_idle_time_in_seconds - computed: true, optional: false, required: false
    get maxIdleTimeInSeconds() {
        return this.getNumberAttribute('max_idle_time_in_seconds');
    }
    // max_instances_count - computed: true, optional: false, required: false
    get maxInstancesCount() {
        return this.getNumberAttribute('max_instances_count');
    }
    // max_queue_size - computed: true, optional: false, required: false
    get maxQueueSize() {
        return this.getNumberAttribute('max_queue_size');
    }
    // pinned - computed: true, optional: false, required: false
    get pinned() {
        return this.getBooleanAttribute('pinned');
    }
    // status_timeout_in_seconds - computed: true, optional: false, required: false
    get statusTimeoutInSeconds() {
        return this.getNumberAttribute('status_timeout_in_seconds');
    }
    // timeout_in_seconds - computed: true, optional: false, required: false
    get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environmentVariables),
        event_sources: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform)(struct.eventSources),
        exec_args: cdktf.listMapper(cdktf.stringToTerraform)(struct.execArgs),
        input_payload_encoding_type: cdktf.stringToTerraform(struct.inputPayloadEncodingType),
        linux_process_params: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct.linuxProcessParams),
        max_idle_time_in_seconds: cdktf.numberToTerraform(struct.maxIdleTimeInSeconds),
        max_instances_count: cdktf.numberToTerraform(struct.maxInstancesCount),
        max_queue_size: cdktf.numberToTerraform(struct.maxQueueSize),
        pinned: cdktf.booleanToTerraform(struct.pinned),
        status_timeout_in_seconds: cdktf.numberToTerraform(struct.statusTimeoutInSeconds),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms extends cdktf.ComplexComputedList {
    // attributes - computed: true, optional: false, required: false
    get attributes() {
        return this.interpolationForAttribute('attributes');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms = DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct.attributes),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform;
class DataAwsccGreengrassv2ComponentVersionLambdaFunction extends cdktf.ComplexComputedList {
    // component_dependencies - computed: true, optional: false, required: false
    get componentDependencies() {
        return this.interpolationForAttribute('component_dependencies');
    }
    // component_lambda_parameters - computed: true, optional: false, required: false
    get componentLambdaParameters() {
        return this.interpolationForAttribute('component_lambda_parameters');
    }
    // component_name - computed: true, optional: false, required: false
    get componentName() {
        return this.getStringAttribute('component_name');
    }
    // component_platforms - computed: true, optional: false, required: false
    get componentPlatforms() {
        return this.interpolationForAttribute('component_platforms');
    }
    // component_version - computed: true, optional: false, required: false
    get componentVersion() {
        return this.getStringAttribute('component_version');
    }
    // lambda_arn - computed: true, optional: false, required: false
    get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
}
exports.DataAwsccGreengrassv2ComponentVersionLambdaFunction = DataAwsccGreengrassv2ComponentVersionLambdaFunction;
function dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_dependencies: cdktf.hashMapper(cdktf.anyToTerraform)(struct.componentDependencies),
        component_lambda_parameters: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct.componentLambdaParameters),
        component_name: cdktf.stringToTerraform(struct.componentName),
        component_platforms: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform)(struct.componentPlatforms),
        component_version: cdktf.stringToTerraform(struct.componentVersion),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
exports.dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform = dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version}
*/
class DataAwsccGreengrassv2ComponentVersion extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGreengrassv2ComponentVersionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_greengrassv2_component_version',
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
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // component_name - computed: true, optional: false, required: false
    get componentName() {
        return this.getStringAttribute('component_name');
    }
    // component_version - computed: true, optional: false, required: false
    get componentVersion() {
        return this.getStringAttribute('component_version');
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
    // inline_recipe - computed: true, optional: false, required: false
    get inlineRecipe() {
        return this.getStringAttribute('inline_recipe');
    }
    // lambda_function - computed: true, optional: false, required: false
    get lambdaFunction() {
        return this.interpolationForAttribute('lambda_function');
    }
    // tags - computed: true, optional: false, required: false
    tags(key) {
        return new cdktf.StringMap(this, 'tags').lookup(key);
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
exports.DataAwsccGreengrassv2ComponentVersion = DataAwsccGreengrassv2ComponentVersion;
// =================
// STATIC PROPERTIES
// =================
DataAwsccGreengrassv2ComponentVersion.tfResourceType = "awscc_greengrassv2_component_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1ncmVlbmdyYXNzdjItY29tcG9uZW50LXZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWdyZWVuZ3Jhc3N2Mi1jb21wb25lbnQtdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0ZBQXNGO0FBQ3RGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHdFQUF5RSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckgscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5RUFBeUU7SUFDekUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0Y7QUFYRCw0SkFXQztBQUVELFNBQWdCLG1GQUFtRixDQUFDLE1BQWlGO0lBQ25MLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDekUsQ0FBQTtBQUNILENBQUM7QUFORCxrTEFNQztBQUVELE1BQWEsd0ZBQXlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVySSwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFN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czovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb24uaHRtbCNpZCBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudERlcGVuZGVuY2llcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlcGVuZGVuY3lfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY3lUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVwZW5kZW5jeV90eXBlJyk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX3JlcXVpcmVtZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvblJlcXVpcmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9yZXF1aXJlbWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnREZXBlbmRlbmNpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnREZXBlbmRlbmNpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVwZW5kZW5jeV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlcGVuZGVuY3lUeXBlKSxcbiAgICB2ZXJzaW9uX3JlcXVpcmVtZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb25SZXF1aXJlbWVudCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNFdmVudFNvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0b3BpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9waWMnKTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzRXZlbnRTb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0V2ZW50U291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0b3BpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50b3BpYyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc0RldmljZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZGRfZ3JvdXBfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZGRHcm91cE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FkZF9ncm91cF9vd25lcicpO1xuICB9XG5cbiAgLy8gcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Blcm1pc3Npb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc0RldmljZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zQ29udGFpbmVyUGFyYW1zRGV2aWNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZGRfZ3JvdXBfb3duZXI6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFkZEdyb3VwT3duZXIpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcGVybWlzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wZXJtaXNzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc1ZvbHVtZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZGRfZ3JvdXBfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZGRHcm91cE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FkZF9ncm91cF9vd25lcicpO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BhdGgnKTtcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwZXJtaXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVybWlzc2lvbicpO1xuICB9XG5cbiAgLy8gc291cmNlX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3BhdGgnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc1ZvbHVtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zQ29udGFpbmVyUGFyYW1zVm9sdW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZGRfZ3JvdXBfb3duZXI6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFkZEdyb3VwT3duZXIpLFxuICAgIGRlc3RpbmF0aW9uX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25QYXRoKSxcbiAgICBwZXJtaXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlcm1pc3Npb24pLFxuICAgIHNvdXJjZV9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zQ29udGFpbmVyUGFyYW1zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGV2aWNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGV2aWNlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1lbW9yeV9zaXplX2luX2tiIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVtb3J5U2l6ZUluS2IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtZW1vcnlfc2l6ZV9pbl9rYicpO1xuICB9XG5cbiAgLy8gbW91bnRfcm9fc3lzZnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb3VudFJvU3lzZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbW91bnRfcm9fc3lzZnMnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZvbHVtZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNMaW51eFByb2Nlc3NQYXJhbXNDb250YWluZXJQYXJhbXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zQ29udGFpbmVyUGFyYW1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRldmljZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc0RldmljZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXZpY2VzKSxcbiAgICBtZW1vcnlfc2l6ZV9pbl9rYjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnlTaXplSW5LYiksXG4gICAgbW91bnRfcm9fc3lzZnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1vdW50Um9TeXNmcyksXG4gICAgdm9sdW1lczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zQ29udGFpbmVyUGFyYW1zVm9sdW1lc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZvbHVtZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzTGludXhQcm9jZXNzUGFyYW1zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGFpbmVyX3BhcmFtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lclBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb250YWluZXJfcGFyYW1zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaXNvbGF0aW9uX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpc29sYXRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXNvbGF0aW9uX21vZGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNMaW51eFByb2Nlc3NQYXJhbXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX3BhcmFtczogZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc0xpbnV4UHJvY2Vzc1BhcmFtc0NvbnRhaW5lclBhcmFtc1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUGFyYW1zKSxcbiAgICBpc29sYXRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pc29sYXRpb25Nb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVudmlyb25tZW50X3ZhcmlhYmxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50X3ZhcmlhYmxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGV2ZW50X3NvdXJjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldmVudFNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXZlbnRfc291cmNlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGV4ZWNfYXJncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4ZWNBcmdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4ZWNfYXJncycpO1xuICB9XG5cbiAgLy8gaW5wdXRfcGF5bG9hZF9lbmNvZGluZ190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5wdXRQYXlsb2FkRW5jb2RpbmdUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfcGF5bG9hZF9lbmNvZGluZ190eXBlJyk7XG4gIH1cblxuICAvLyBsaW51eF9wcm9jZXNzX3BhcmFtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxpbnV4UHJvY2Vzc1BhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsaW51eF9wcm9jZXNzX3BhcmFtcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1heF9pZGxlX3RpbWVfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heElkbGVUaW1lSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2lkbGVfdGltZV9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBtYXhfaW5zdGFuY2VzX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4SW5zdGFuY2VzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW5zdGFuY2VzX2NvdW50Jyk7XG4gIH1cblxuICAvLyBtYXhfcXVldWVfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFF1ZXVlU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9xdWV1ZV9zaXplJyk7XG4gIH1cblxuICAvLyBwaW5uZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwaW5uZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncGlubmVkJyk7XG4gIH1cblxuICAvLyBzdGF0dXNfdGltZW91dF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzVGltZW91dEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0YXR1c190aW1lb3V0X2luX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVvdXRJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0X2luX3NlY29uZHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50TGFtYmRhUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW52aXJvbm1lbnRfdmFyaWFibGVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVudmlyb25tZW50VmFyaWFibGVzKSxcbiAgICBldmVudF9zb3VyY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNFdmVudFNvdXJjZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5ldmVudFNvdXJjZXMpLFxuICAgIGV4ZWNfYXJnczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGVjQXJncyksXG4gICAgaW5wdXRfcGF5bG9hZF9lbmNvZGluZ190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0UGF5bG9hZEVuY29kaW5nVHlwZSksXG4gICAgbGludXhfcHJvY2Vzc19wYXJhbXM6IGRhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNMaW51eFByb2Nlc3NQYXJhbXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpbnV4UHJvY2Vzc1BhcmFtcyksXG4gICAgbWF4X2lkbGVfdGltZV9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heElkbGVUaW1lSW5TZWNvbmRzKSxcbiAgICBtYXhfaW5zdGFuY2VzX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEluc3RhbmNlc0NvdW50KSxcbiAgICBtYXhfcXVldWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhRdWV1ZVNpemUpLFxuICAgIHBpbm5lZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucGlubmVkKSxcbiAgICBzdGF0dXNfdGltZW91dF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c1RpbWVvdXRJblNlY29uZHMpLFxuICAgIHRpbWVvdXRfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0SW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50UGxhdGZvcm1zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXR0cmlidXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXR0cmlidXRlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRQbGF0Zm9ybXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb25Db21wb25lbnRQbGF0Zm9ybXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hdHRyaWJ1dGVzKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NHcmVlbmdyYXNzdjJDb21wb25lbnRWZXJzaW9uTGFtYmRhRnVuY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb21wb25lbnRfZGVwZW5kZW5jaWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50RGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBvbmVudF9kZXBlbmRlbmNpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb21wb25lbnRfbGFtYmRhX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wb25lbnRMYW1iZGFQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBvbmVudF9sYW1iZGFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBvbmVudF9uYW1lJyk7XG4gIH1cblxuICAvLyBjb21wb25lbnRfcGxhdGZvcm1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50UGxhdGZvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBvbmVudF9wbGF0Zm9ybXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb21wb25lbnRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wb25lbnRfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gbGFtYmRhX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhbWJkYUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudF9kZXBlbmRlbmNpZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuY29tcG9uZW50RGVwZW5kZW5jaWVzKSxcbiAgICBjb21wb25lbnRfbGFtYmRhX3BhcmFtZXRlcnM6IGRhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25MYW1iZGFGdW5jdGlvbkNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudExhbWJkYVBhcmFtZXRlcnMpLFxuICAgIGNvbXBvbmVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudE5hbWUpLFxuICAgIGNvbXBvbmVudF9wbGF0Zm9ybXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkxhbWJkYUZ1bmN0aW9uQ29tcG9uZW50UGxhdGZvcm1zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29tcG9uZW50UGxhdGZvcm1zKSxcbiAgICBjb21wb25lbnRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnRWZXJzaW9uKSxcbiAgICBsYW1iZGFfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb24uaHRtbCBhd3NjY19ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb259XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2dyZWVuZ3Jhc3N2Ml9jb21wb25lbnRfdmVyc2lvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb24uaHRtbCBhd3NjY19ncmVlbmdyYXNzdjJfY29tcG9uZW50X3ZlcnNpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0dyZWVuZ3Jhc3N2MkNvbXBvbmVudFZlcnNpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjR3JlZW5ncmFzc3YyQ29tcG9uZW50VmVyc2lvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZ3JlZW5ncmFzc3YyX2NvbXBvbmVudF92ZXJzaW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wb25lbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcG9uZW50X25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBvbmVudF92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gaW5saW5lX3JlY2lwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlubGluZVJlY2lwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lubGluZV9yZWNpcGUnKTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9mdW5jdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhbWJkYUZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYV9mdW5jdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHRhZ3Moa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgY2RrdGYuU3RyaW5nTWFwKHRoaXMsICd0YWdzJykubG9va3VwKGtleSk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19