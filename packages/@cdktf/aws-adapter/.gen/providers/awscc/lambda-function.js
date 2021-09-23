"use strict";
// https://www.terraform.io/docs/providers/awscc/r/lambda_function.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaFunction = exports.lambdaFunctionVpcConfigToTerraform = exports.lambdaFunctionTracingConfigToTerraform = exports.lambdaFunctionTagsToTerraform = exports.lambdaFunctionImageConfigToTerraform = exports.lambdaFunctionFileSystemConfigsToTerraform = exports.lambdaFunctionEnvironmentToTerraform = exports.lambdaFunctionDeadLetterConfigToTerraform = exports.lambdaFunctionCodeToTerraform = void 0;
const cdktf = require("cdktf");
function lambdaFunctionCodeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_uri: cdktf.stringToTerraform(struct.imageUri),
        s3_bucket: cdktf.stringToTerraform(struct.s3Bucket),
        s3_key: cdktf.stringToTerraform(struct.s3Key),
        s3_object_version: cdktf.stringToTerraform(struct.s3ObjectVersion),
        zip_file: cdktf.stringToTerraform(struct.zipFile),
    };
}
exports.lambdaFunctionCodeToTerraform = lambdaFunctionCodeToTerraform;
function lambdaFunctionDeadLetterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_arn: cdktf.stringToTerraform(struct.targetArn),
    };
}
exports.lambdaFunctionDeadLetterConfigToTerraform = lambdaFunctionDeadLetterConfigToTerraform;
function lambdaFunctionEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.variables),
    };
}
exports.lambdaFunctionEnvironmentToTerraform = lambdaFunctionEnvironmentToTerraform;
function lambdaFunctionFileSystemConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        local_mount_path: cdktf.stringToTerraform(struct.localMountPath),
    };
}
exports.lambdaFunctionFileSystemConfigsToTerraform = lambdaFunctionFileSystemConfigsToTerraform;
function lambdaFunctionImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        command: cdktf.listMapper(cdktf.stringToTerraform)(struct.command),
        entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct.entryPoint),
        working_directory: cdktf.stringToTerraform(struct.workingDirectory),
    };
}
exports.lambdaFunctionImageConfigToTerraform = lambdaFunctionImageConfigToTerraform;
function lambdaFunctionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.lambdaFunctionTagsToTerraform = lambdaFunctionTagsToTerraform;
function lambdaFunctionTracingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
exports.lambdaFunctionTracingConfigToTerraform = lambdaFunctionTracingConfigToTerraform;
function lambdaFunctionVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.lambdaFunctionVpcConfigToTerraform = lambdaFunctionVpcConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html awscc_lambda_function}
*/
class LambdaFunction extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html awscc_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_function',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._code = config.code;
        this._codeSigningConfigArn = config.codeSigningConfigArn;
        this._deadLetterConfig = config.deadLetterConfig;
        this._description = config.description;
        this._environment = config.environment;
        this._fileSystemConfigs = config.fileSystemConfigs;
        this._functionName = config.functionName;
        this._handler = config.handler;
        this._imageConfig = config.imageConfig;
        this._kmsKeyArn = config.kmsKeyArn;
        this._layers = config.layers;
        this._memorySize = config.memorySize;
        this._packageType = config.packageType;
        this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
        this._role = config.role;
        this._runtime = config.runtime;
        this._tags = config.tags;
        this._timeout = config.timeout;
        this._tracingConfig = config.tracingConfig;
        this._vpcConfig = config.vpcConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get code() {
        return this.interpolationForAttribute('code');
    }
    set code(value) {
        this._code = value;
    }
    // Temporarily expose input value. Use with caution.
    get codeInput() {
        return this._code;
    }
    get codeSigningConfigArn() {
        return this.getStringAttribute('code_signing_config_arn');
    }
    set codeSigningConfigArn(value) {
        this._codeSigningConfigArn = value;
    }
    resetCodeSigningConfigArn() {
        this._codeSigningConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeSigningConfigArnInput() {
        return this._codeSigningConfigArn;
    }
    get deadLetterConfig() {
        return this.interpolationForAttribute('dead_letter_config');
    }
    set deadLetterConfig(value) {
        this._deadLetterConfig = value;
    }
    resetDeadLetterConfig() {
        this._deadLetterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deadLetterConfigInput() {
        return this._deadLetterConfig;
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
    get environment() {
        return this.interpolationForAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    get fileSystemConfigs() {
        return this.interpolationForAttribute('file_system_configs');
    }
    set fileSystemConfigs(value) {
        this._fileSystemConfigs = value;
    }
    resetFileSystemConfigs() {
        this._fileSystemConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileSystemConfigsInput() {
        return this._fileSystemConfigs;
    }
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    set functionName(value) {
        this._functionName = value;
    }
    resetFunctionName() {
        this._functionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionNameInput() {
        return this._functionName;
    }
    get handler() {
        return this.getStringAttribute('handler');
    }
    set handler(value) {
        this._handler = value;
    }
    resetHandler() {
        this._handler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get handlerInput() {
        return this._handler;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get imageConfig() {
        return this.interpolationForAttribute('image_config');
    }
    set imageConfig(value) {
        this._imageConfig = value;
    }
    resetImageConfig() {
        this._imageConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageConfigInput() {
        return this._imageConfig;
    }
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    get layers() {
        return this.getListAttribute('layers');
    }
    set layers(value) {
        this._layers = value;
    }
    resetLayers() {
        this._layers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get layersInput() {
        return this._layers;
    }
    get memorySize() {
        return this.getNumberAttribute('memory_size');
    }
    set memorySize(value) {
        this._memorySize = value;
    }
    resetMemorySize() {
        this._memorySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memorySizeInput() {
        return this._memorySize;
    }
    get packageType() {
        return this.getStringAttribute('package_type');
    }
    set packageType(value) {
        this._packageType = value;
    }
    resetPackageType() {
        this._packageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get packageTypeInput() {
        return this._packageType;
    }
    get reservedConcurrentExecutions() {
        return this.getNumberAttribute('reserved_concurrent_executions');
    }
    set reservedConcurrentExecutions(value) {
        this._reservedConcurrentExecutions = value;
    }
    resetReservedConcurrentExecutions() {
        this._reservedConcurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reservedConcurrentExecutionsInput() {
        return this._reservedConcurrentExecutions;
    }
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    set runtime(value) {
        this._runtime = value;
    }
    resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeInput() {
        return this._runtime;
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
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    get tracingConfig() {
        return this.interpolationForAttribute('tracing_config');
    }
    set tracingConfig(value) {
        this._tracingConfig = value;
    }
    resetTracingConfig() {
        this._tracingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tracingConfigInput() {
        return this._tracingConfig;
    }
    get vpcConfig() {
        return this.interpolationForAttribute('vpc_config');
    }
    set vpcConfig(value) {
        this._vpcConfig = value;
    }
    resetVpcConfig() {
        this._vpcConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcConfigInput() {
        return this._vpcConfig;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            code: lambdaFunctionCodeToTerraform(this._code),
            code_signing_config_arn: cdktf.stringToTerraform(this._codeSigningConfigArn),
            dead_letter_config: lambdaFunctionDeadLetterConfigToTerraform(this._deadLetterConfig),
            description: cdktf.stringToTerraform(this._description),
            environment: lambdaFunctionEnvironmentToTerraform(this._environment),
            file_system_configs: cdktf.listMapper(lambdaFunctionFileSystemConfigsToTerraform)(this._fileSystemConfigs),
            function_name: cdktf.stringToTerraform(this._functionName),
            handler: cdktf.stringToTerraform(this._handler),
            image_config: lambdaFunctionImageConfigToTerraform(this._imageConfig),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            layers: cdktf.listMapper(cdktf.stringToTerraform)(this._layers),
            memory_size: cdktf.numberToTerraform(this._memorySize),
            package_type: cdktf.stringToTerraform(this._packageType),
            reserved_concurrent_executions: cdktf.numberToTerraform(this._reservedConcurrentExecutions),
            role: cdktf.stringToTerraform(this._role),
            runtime: cdktf.stringToTerraform(this._runtime),
            tags: cdktf.listMapper(lambdaFunctionTagsToTerraform)(this._tags),
            timeout: cdktf.numberToTerraform(this._timeout),
            tracing_config: lambdaFunctionTracingConfigToTerraform(this._tracingConfig),
            vpc_config: lambdaFunctionVpcConfigToTerraform(this._vpcConfig),
        };
    }
}
exports.LambdaFunction = LambdaFunction;
// =================
// STATIC PROPERTIES
// =================
LambdaFunction.tfResourceType = "awscc_lambda_function";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RUFBdUU7QUFDdkUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBMkovQixTQUFnQiw2QkFBNkIsQ0FBQyxNQUEyQjtJQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzlDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQVRELHNFQVNDO0FBV0QsU0FBZ0IseUNBQXlDLENBQUMsTUFBdUM7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFMRCw4RkFLQztBQVdELFNBQWdCLG9DQUFvQyxDQUFDLE1BQWtDO0lBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDckUsQ0FBQTtBQUNILENBQUM7QUFMRCxvRkFLQztBQWlCRCxTQUFnQiwwQ0FBMEMsQ0FBQyxNQUF3QztJQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQU5ELGdHQU1DO0FBdUJELFNBQWdCLG9DQUFvQyxDQUFDLE1BQWtDO0lBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDckUsQ0FBQTtBQUNILENBQUM7QUFQRCxvRkFPQztBQWlCRCxTQUFnQiw2QkFBNkIsQ0FBQyxNQUEyQjtJQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCxzRUFNQztBQVdELFNBQWdCLHNDQUFzQyxDQUFDLE1BQW9DO0lBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBTEQsd0ZBS0M7QUFpQkQsU0FBZ0Isa0NBQWtDLENBQUMsTUFBZ0M7SUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBTkQsZ0ZBTUM7QUFHRDs7RUFFRTtBQUNGLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPekQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNEI7UUFDM0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUF5QjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFBO0lBQ25DLENBQUM7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQXFDO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUE7SUFDL0IsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWdDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBd0M7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUNoQyxDQUFDO0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBUSxDQUFDO0lBQy9ELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFnQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFJRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxJQUFXLDRCQUE0QixDQUFDLEtBQWE7UUFDbkQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ00saUNBQWlDO1FBQ3RDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxTQUFTLENBQUM7SUFDakQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQTtJQUMzQyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3RCLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBMkI7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFrQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO0lBQzVCLENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQThCO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLGtCQUFrQixFQUFFLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQsV0FBVyxFQUFFLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUMxRyxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9DLFlBQVksRUFBRSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNyRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQy9ELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsOEJBQThCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztZQUMzRixJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9DLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRSxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsY0FBYyxFQUFFLHNDQUFzQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0UsVUFBVSxFQUFFLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUM7O0FBdFpILHdDQXVaQztBQXJaQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDZCQUFjLEdBQVcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUZ1bmN0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjY29kZSBMYW1iZGFGdW5jdGlvbiNjb2RlfVxuICAqL1xuICByZWFkb25seSBjb2RlOiBMYW1iZGFGdW5jdGlvbkNvZGU7XG4gIC8qKlxuICAqIEEgdW5pcXVlIEFybiBmb3IgQ29kZVNpZ25pbmdDb25maWcgcmVzb3VyY2VcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI2NvZGVfc2lnbmluZ19jb25maWdfYXJuIExhbWJkYUZ1bmN0aW9uI2NvZGVfc2lnbmluZ19jb25maWdfYXJufVxuICAqL1xuICByZWFkb25seSBjb2RlU2lnbmluZ0NvbmZpZ0Fybj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGRlYWQtbGV0dGVyIHF1ZXVlIGZvciBmYWlsZWQgYXN5bmNocm9ub3VzIGludm9jYXRpb25zLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjZGVhZF9sZXR0ZXJfY29uZmlnIExhbWJkYUZ1bmN0aW9uI2RlYWRfbGV0dGVyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgZGVhZExldHRlckNvbmZpZz86IExhbWJkYUZ1bmN0aW9uRGVhZExldHRlckNvbmZpZztcbiAgLyoqXG4gICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZnVuY3Rpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNkZXNjcmlwdGlvbiBMYW1iZGFGdW5jdGlvbiNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgZnVuY3Rpb24ncyBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXR0aW5ncy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI2Vudmlyb25tZW50IExhbWJkYUZ1bmN0aW9uI2Vudmlyb25tZW50fVxuICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudD86IExhbWJkYUZ1bmN0aW9uRW52aXJvbm1lbnQ7XG4gIC8qKlxuICAqIENvbm5lY3Rpb24gc2V0dGluZ3MgZm9yIGFuIEFtYXpvbiBFRlMgZmlsZSBzeXN0ZW0uIFRvIGNvbm5lY3QgYSBmdW5jdGlvbiB0byBhIGZpbGUgc3lzdGVtLCBhIG1vdW50IHRhcmdldCBtdXN0IGJlIGF2YWlsYWJsZSBpbiBldmVyeSBBdmFpbGFiaWxpdHkgWm9uZSB0aGF0IHlvdXIgZnVuY3Rpb24gY29ubmVjdHMgdG8uIElmIHlvdXIgdGVtcGxhdGUgY29udGFpbnMgYW4gQVdTOjpFRlM6Ok1vdW50VGFyZ2V0IHJlc291cmNlLCB5b3UgbXVzdCBhbHNvIHNwZWNpZnkgYSBEZXBlbmRzT24gYXR0cmlidXRlIHRvIGVuc3VyZSB0aGF0IHRoZSBtb3VudCB0YXJnZXQgaXMgY3JlYXRlZCBvciB1cGRhdGVkIGJlZm9yZSB0aGUgZnVuY3Rpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNmaWxlX3N5c3RlbV9jb25maWdzIExhbWJkYUZ1bmN0aW9uI2ZpbGVfc3lzdGVtX2NvbmZpZ3N9XG4gICovXG4gIHJlYWRvbmx5IGZpbGVTeXN0ZW1Db25maWdzPzogTGFtYmRhRnVuY3Rpb25GaWxlU3lzdGVtQ29uZmlnc1tdO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgTGFtYmRhIGZ1bmN0aW9uLCB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSWYgeW91IGRvbid0IHNwZWNpZnkgYSBuYW1lLCBBV1MgQ2xvdWRGb3JtYXRpb24gZ2VuZXJhdGVzIG9uZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI2Z1bmN0aW9uX25hbWUgTGFtYmRhRnVuY3Rpb24jZnVuY3Rpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdpdGhpbiB5b3VyIGNvZGUgdGhhdCBMYW1iZGEgY2FsbHMgdG8gZXhlY3V0ZSB5b3VyIGZ1bmN0aW9uLiBUaGUgZm9ybWF0IGluY2x1ZGVzIHRoZSBmaWxlIG5hbWUuIEl0IGNhbiBhbHNvIGluY2x1ZGUgbmFtZXNwYWNlcyBhbmQgb3RoZXIgcXVhbGlmaWVycywgZGVwZW5kaW5nIG9uIHRoZSBydW50aW1lXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNoYW5kbGVyIExhbWJkYUZ1bmN0aW9uI2hhbmRsZXJ9XG4gICovXG4gIHJlYWRvbmx5IGhhbmRsZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjaW1hZ2VfY29uZmlnIExhbWJkYUZ1bmN0aW9uI2ltYWdlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgaW1hZ2VDb25maWc/OiBMYW1iZGFGdW5jdGlvbkltYWdlQ29uZmlnO1xuICAvKipcbiAgKiBUaGUgQVJOIG9mIHRoZSBBV1MgS2V5IE1hbmFnZW1lbnQgU2VydmljZSAoQVdTIEtNUykga2V5IHRoYXQncyB1c2VkIHRvIGVuY3J5cHQgeW91ciBmdW5jdGlvbidzIGVudmlyb25tZW50IHZhcmlhYmxlcy4gSWYgaXQncyBub3QgcHJvdmlkZWQsIEFXUyBMYW1iZGEgdXNlcyBhIGRlZmF1bHQgc2VydmljZSBrZXkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNrbXNfa2V5X2FybiBMYW1iZGFGdW5jdGlvbiNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBBIGxpc3Qgb2YgZnVuY3Rpb24gbGF5ZXJzIHRvIGFkZCB0byB0aGUgZnVuY3Rpb24ncyBleGVjdXRpb24gZW52aXJvbm1lbnQuIFNwZWNpZnkgZWFjaCBsYXllciBieSBpdHMgQVJOLCBpbmNsdWRpbmcgdGhlIHZlcnNpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNsYXllcnMgTGFtYmRhRnVuY3Rpb24jbGF5ZXJzfVxuICAqL1xuICByZWFkb25seSBsYXllcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogVGhlIGFtb3VudCBvZiBtZW1vcnkgdGhhdCB5b3VyIGZ1bmN0aW9uIGhhcyBhY2Nlc3MgdG8uIEluY3JlYXNpbmcgdGhlIGZ1bmN0aW9uJ3MgbWVtb3J5IGFsc28gaW5jcmVhc2VzIGl0cyBDUFUgYWxsb2NhdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMTI4IE1CLiBUaGUgdmFsdWUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0IE1CLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjbWVtb3J5X3NpemUgTGFtYmRhRnVuY3Rpb24jbWVtb3J5X3NpemV9XG4gICovXG4gIHJlYWRvbmx5IG1lbW9yeVNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAqIFBhY2thZ2VUeXBlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjcGFja2FnZV90eXBlIExhbWJkYUZ1bmN0aW9uI3BhY2thZ2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcGFja2FnZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBudW1iZXIgb2Ygc2ltdWx0YW5lb3VzIGV4ZWN1dGlvbnMgdG8gcmVzZXJ2ZSBmb3IgdGhlIGZ1bmN0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjcmVzZXJ2ZWRfY29uY3VycmVudF9leGVjdXRpb25zIExhbWJkYUZ1bmN0aW9uI3Jlc2VydmVkX2NvbmN1cnJlbnRfZXhlY3V0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9ucz86IG51bWJlcjtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBmdW5jdGlvbidzIGV4ZWN1dGlvbiByb2xlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjcm9sZSBMYW1iZGFGdW5jdGlvbiNyb2xlfVxuICAqL1xuICByZWFkb25seSByb2xlOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBmdW5jdGlvbidzIHJ1bnRpbWUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNydW50aW1lIExhbWJkYUZ1bmN0aW9uI3J1bnRpbWV9XG4gICovXG4gIHJlYWRvbmx5IHJ1bnRpbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgbGlzdCBvZiB0YWdzIHRvIGFwcGx5IHRvIHRoZSBmdW5jdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI3RhZ3MgTGFtYmRhRnVuY3Rpb24jdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IExhbWJkYUZ1bmN0aW9uVGFnc1tdO1xuICAvKipcbiAgKiBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBMYW1iZGEgYWxsb3dzIGEgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSBzdG9wcGluZyBpdC4gVGhlIGRlZmF1bHQgaXMgMyBzZWNvbmRzLiBUaGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlIGlzIDkwMCBzZWNvbmRzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjdGltZW91dCBMYW1iZGFGdW5jdGlvbiN0aW1lb3V0fVxuICAqL1xuICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xuICAvKipcbiAgKiBUaGUgZnVuY3Rpb24ncyBBV1MgWC1SYXkgdHJhY2luZyBjb25maWd1cmF0aW9uLiBUbyBzYW1wbGUgYW5kIHJlY29yZCBpbmNvbWluZyByZXF1ZXN0cywgc2V0IE1vZGUgdG8gQWN0aXZlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjdHJhY2luZ19jb25maWcgTGFtYmRhRnVuY3Rpb24jdHJhY2luZ19jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IHRyYWNpbmdDb25maWc/OiBMYW1iZGFGdW5jdGlvblRyYWNpbmdDb25maWc7XG4gIC8qKlxuICAqIFRoZSBWUEMgc2VjdXJpdHkgZ3JvdXBzIGFuZCBzdWJuZXRzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGEgTGFtYmRhIGZ1bmN0aW9uLiBXaGVuIHlvdSBjb25uZWN0IGEgZnVuY3Rpb24gdG8gYSBWUEMsIExhbWJkYSBjcmVhdGVzIGFuIGVsYXN0aWMgbmV0d29yayBpbnRlcmZhY2UgZm9yIGVhY2ggY29tYmluYXRpb24gb2Ygc2VjdXJpdHkgZ3JvdXAgYW5kIHN1Ym5ldCBpbiB0aGUgZnVuY3Rpb24ncyBWUEMgY29uZmlndXJhdGlvbi4gVGhlIGZ1bmN0aW9uIGNhbiBvbmx5IGFjY2VzcyByZXNvdXJjZXMgYW5kIHRoZSBpbnRlcm5ldCB0aHJvdWdoIHRoYXQgVlBDLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjdnBjX2NvbmZpZyBMYW1iZGFGdW5jdGlvbiN2cGNfY29uZmlnfVxuICAqL1xuICByZWFkb25seSB2cGNDb25maWc/OiBMYW1iZGFGdW5jdGlvblZwY0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRnVuY3Rpb25Db2RlIHtcbiAgLyoqXG4gICogSW1hZ2VVcmkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNpbWFnZV91cmkgTGFtYmRhRnVuY3Rpb24jaW1hZ2VfdXJpfVxuICAqL1xuICByZWFkb25seSBpbWFnZVVyaT86IHN0cmluZztcbiAgLyoqXG4gICogQW4gQW1hem9uIFMzIGJ1Y2tldCBpbiB0aGUgc2FtZSBBV1MgUmVnaW9uIGFzIHlvdXIgZnVuY3Rpb24uIFRoZSBidWNrZXQgY2FuIGJlIGluIGEgZGlmZmVyZW50IEFXUyBhY2NvdW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjczNfYnVja2V0IExhbWJkYUZ1bmN0aW9uI3MzX2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgczNCdWNrZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gUzMga2V5IG9mIHRoZSBkZXBsb3ltZW50IHBhY2thZ2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNzM19rZXkgTGFtYmRhRnVuY3Rpb24jczNfa2V5fVxuICAqL1xuICByZWFkb25seSBzM0tleT86IHN0cmluZztcbiAgLyoqXG4gICogRm9yIHZlcnNpb25lZCBvYmplY3RzLCB0aGUgdmVyc2lvbiBvZiB0aGUgZGVwbG95bWVudCBwYWNrYWdlIG9iamVjdCB0byB1c2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNzM19vYmplY3RfdmVyc2lvbiBMYW1iZGFGdW5jdGlvbiNzM19vYmplY3RfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgczNPYmplY3RWZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgc291cmNlIGNvZGUgb2YgeW91ciBMYW1iZGEgZnVuY3Rpb24uIElmIHlvdSBpbmNsdWRlIHlvdXIgZnVuY3Rpb24gc291cmNlIGlubGluZSB3aXRoIHRoaXMgcGFyYW1ldGVyLCBBV1MgQ2xvdWRGb3JtYXRpb24gcGxhY2VzIGl0IGluIGEgZmlsZSBuYW1lZCBpbmRleCBhbmQgemlwcyBpdCB0byBjcmVhdGUgYSBkZXBsb3ltZW50IHBhY2thZ2UuLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjemlwX2ZpbGUgTGFtYmRhRnVuY3Rpb24jemlwX2ZpbGV9XG4gICovXG4gIHJlYWRvbmx5IHppcEZpbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFGdW5jdGlvbkNvZGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYW1iZGFGdW5jdGlvbkNvZGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW1hZ2VfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlVXJpKSxcbiAgICBzM19idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCdWNrZXQpLFxuICAgIHMzX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0tleSksXG4gICAgczNfb2JqZWN0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNPYmplY3RWZXJzaW9uKSxcbiAgICB6aXBfZmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS56aXBGaWxlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUZ1bmN0aW9uRGVhZExldHRlckNvbmZpZyB7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiBhbiBBbWF6b24gU1FTIHF1ZXVlIG9yIEFtYXpvbiBTTlMgdG9waWMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCN0YXJnZXRfYXJuIExhbWJkYUZ1bmN0aW9uI3RhcmdldF9hcm59XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldEFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uRGVhZExldHRlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRGVhZExldHRlckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldEFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvbkVudmlyb25tZW50IHtcbiAgLyoqXG4gICogRW52aXJvbm1lbnQgdmFyaWFibGUga2V5LXZhbHVlIHBhaXJzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjdmFyaWFibGVzIExhbWJkYUZ1bmN0aW9uI3ZhcmlhYmxlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FbnZpcm9ubWVudFRvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRW52aXJvbm1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdmFyaWFibGVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhcmlhYmxlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvbkZpbGVTeXN0ZW1Db25maWdzIHtcbiAgLyoqXG4gICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBBbWF6b24gRUZTIGFjY2VzcyBwb2ludCB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZmlsZSBzeXN0ZW0uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZnVuY3Rpb24uaHRtbCNhcm4gTGFtYmRhRnVuY3Rpb24jYXJufVxuICAqL1xuICByZWFkb25seSBhcm46IHN0cmluZztcbiAgLyoqXG4gICogVGhlIHBhdGggd2hlcmUgdGhlIGZ1bmN0aW9uIGNhbiBhY2Nlc3MgdGhlIGZpbGUgc3lzdGVtLCBzdGFydGluZyB3aXRoIC9tbnQvLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjbG9jYWxfbW91bnRfcGF0aCBMYW1iZGFGdW5jdGlvbiNsb2NhbF9tb3VudF9wYXRofVxuICAqL1xuICByZWFkb25seSBsb2NhbE1vdW50UGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25GaWxlU3lzdGVtQ29uZmlnc1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRmlsZVN5c3RlbUNvbmZpZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgbG9jYWxfbW91bnRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbE1vdW50UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvbkltYWdlQ29uZmlnIHtcbiAgLyoqXG4gICogQ29tbWFuZC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI2NvbW1hbmQgTGFtYmRhRnVuY3Rpb24jY29tbWFuZH1cbiAgKi9cbiAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBFbnRyeVBvaW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjZW50cnlfcG9pbnQgTGFtYmRhRnVuY3Rpb24jZW50cnlfcG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IGVudHJ5UG9pbnQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogV29ya2luZ0RpcmVjdG9yeS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI3dvcmtpbmdfZGlyZWN0b3J5IExhbWJkYUZ1bmN0aW9uI3dvcmtpbmdfZGlyZWN0b3J5fVxuICAqL1xuICByZWFkb25seSB3b3JraW5nRGlyZWN0b3J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25JbWFnZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uSW1hZ2VDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tbWFuZDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jb21tYW5kKSxcbiAgICBlbnRyeV9wb2ludDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5lbnRyeVBvaW50KSxcbiAgICB3b3JraW5nX2RpcmVjdG9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JraW5nRGlyZWN0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUZ1bmN0aW9uVGFncyB7XG4gIC8qKlxuICAqIFRoZSBrZXkgbmFtZSBvZiB0aGUgdGFnLiBZb3UgY2FuIHNwZWNpZnkgYSB2YWx1ZSB0aGF0IGlzIDEgdG8gMTI4IFVuaWNvZGUgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBiZSBwcmVmaXhlZCB3aXRoIGF3czouIFlvdSBjYW4gdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IHRoZSBzZXQgb2YgVW5pY29kZSBsZXR0ZXJzLCBkaWdpdHMsIHdoaXRlc3BhY2UsIF8sIC4sIC8sID0sICssIGFuZCAtLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwja2V5IExhbWJkYUZ1bmN0aW9uI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSB2YWx1ZSBmb3IgdGhlIHRhZy4gWW91IGNhbiBzcGVjaWZ5IGEgdmFsdWUgdGhhdCBpcyAwIHRvIDI1NiBVbmljb2RlIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3QgYmUgcHJlZml4ZWQgd2l0aCBhd3M6LiBZb3UgY2FuIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzOiB0aGUgc2V0IG9mIFVuaWNvZGUgbGV0dGVycywgZGlnaXRzLCB3aGl0ZXNwYWNlLCBfLCAuLCAvLCA9LCArLCBhbmQgLS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI3ZhbHVlIExhbWJkYUZ1bmN0aW9uI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvblRyYWNpbmdDb25maWcge1xuICAvKipcbiAgKiBUaGUgdHJhY2luZyBtb2RlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjbW9kZSBMYW1iZGFGdW5jdGlvbiNtb2RlfVxuICAqL1xuICByZWFkb25seSBtb2RlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25UcmFjaW5nQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25UcmFjaW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvblZwY0NvbmZpZyB7XG4gIC8qKlxuICAqIEEgbGlzdCBvZiBWUEMgc2VjdXJpdHkgZ3JvdXBzIElEcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sI3NlY3VyaXR5X2dyb3VwX2lkcyBMYW1iZGFGdW5jdGlvbiNzZWN1cml0eV9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogQSBsaXN0IG9mIFZQQyBzdWJuZXQgSURzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwjc3VibmV0X2lkcyBMYW1iZGFGdW5jdGlvbiNzdWJuZXRfaWRzfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uVnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25WcGNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3VibmV0SWRzKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9mdW5jdGlvbi5odG1sIGF3c2NjX2xhbWJkYV9mdW5jdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19sYW1iZGFfZnVuY3Rpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2Z1bmN0aW9uLmh0bWwgYXdzY2NfbGFtYmRhX2Z1bmN0aW9ufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBMYW1iZGFGdW5jdGlvbkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBMYW1iZGFGdW5jdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbGFtYmRhX2Z1bmN0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29kZSA9IGNvbmZpZy5jb2RlO1xuICAgIHRoaXMuX2NvZGVTaWduaW5nQ29uZmlnQXJuID0gY29uZmlnLmNvZGVTaWduaW5nQ29uZmlnQXJuO1xuICAgIHRoaXMuX2RlYWRMZXR0ZXJDb25maWcgPSBjb25maWcuZGVhZExldHRlckNvbmZpZztcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgICB0aGlzLl9maWxlU3lzdGVtQ29uZmlncyA9IGNvbmZpZy5maWxlU3lzdGVtQ29uZmlncztcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSBjb25maWcuZnVuY3Rpb25OYW1lO1xuICAgIHRoaXMuX2hhbmRsZXIgPSBjb25maWcuaGFuZGxlcjtcbiAgICB0aGlzLl9pbWFnZUNvbmZpZyA9IGNvbmZpZy5pbWFnZUNvbmZpZztcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX2xheWVycyA9IGNvbmZpZy5sYXllcnM7XG4gICAgdGhpcy5fbWVtb3J5U2l6ZSA9IGNvbmZpZy5tZW1vcnlTaXplO1xuICAgIHRoaXMuX3BhY2thZ2VUeXBlID0gY29uZmlnLnBhY2thZ2VUeXBlO1xuICAgIHRoaXMuX3Jlc2VydmVkQ29uY3VycmVudEV4ZWN1dGlvbnMgPSBjb25maWcucmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9ucztcbiAgICB0aGlzLl9yb2xlID0gY29uZmlnLnJvbGU7XG4gICAgdGhpcy5fcnVudGltZSA9IGNvbmZpZy5ydW50aW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG4gICAgdGhpcy5fdHJhY2luZ0NvbmZpZyA9IGNvbmZpZy50cmFjaW5nQ29uZmlnO1xuICAgIHRoaXMuX3ZwY0NvbmZpZyA9IGNvbmZpZy52cGNDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb2RlOiBMYW1iZGFGdW5jdGlvbkNvZGU7XG4gIHB1YmxpYyBnZXQgY29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2RlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29kZSh2YWx1ZTogTGFtYmRhRnVuY3Rpb25Db2RlKSB7XG4gICAgdGhpcy5fY29kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVcbiAgfVxuXG4gIC8vIGNvZGVfc2lnbmluZ19jb25maWdfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGVTaWduaW5nQ29uZmlnQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvZGVTaWduaW5nQ29uZmlnQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29kZV9zaWduaW5nX2NvbmZpZ19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvZGVTaWduaW5nQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fY29kZVNpZ25pbmdDb25maWdBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlU2lnbmluZ0NvbmZpZ0FybigpIHtcbiAgICB0aGlzLl9jb2RlU2lnbmluZ0NvbmZpZ0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZVNpZ25pbmdDb25maWdBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZVNpZ25pbmdDb25maWdBcm5cbiAgfVxuXG4gIC8vIGRlYWRfbGV0dGVyX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWFkTGV0dGVyQ29uZmlnPzogTGFtYmRhRnVuY3Rpb25EZWFkTGV0dGVyQ29uZmlnO1xuICBwdWJsaWMgZ2V0IGRlYWRMZXR0ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVhZF9sZXR0ZXJfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVhZExldHRlckNvbmZpZyh2YWx1ZTogTGFtYmRhRnVuY3Rpb25EZWFkTGV0dGVyQ29uZmlnICkge1xuICAgIHRoaXMuX2RlYWRMZXR0ZXJDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWFkTGV0dGVyQ29uZmlnKCkge1xuICAgIHRoaXMuX2RlYWRMZXR0ZXJDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlYWRMZXR0ZXJDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVhZExldHRlckNvbmZpZ1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZW52aXJvbm1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnQ/OiBMYW1iZGFGdW5jdGlvbkVudmlyb25tZW50O1xuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnQodmFsdWU6IExhbWJkYUZ1bmN0aW9uRW52aXJvbm1lbnQgKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnZpcm9ubWVudCgpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRcbiAgfVxuXG4gIC8vIGZpbGVfc3lzdGVtX2NvbmZpZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZVN5c3RlbUNvbmZpZ3M/OiBMYW1iZGFGdW5jdGlvbkZpbGVTeXN0ZW1Db25maWdzW107XG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUNvbmZpZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsZV9zeXN0ZW1fY29uZmlncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVTeXN0ZW1Db25maWdzKHZhbHVlOiBMYW1iZGFGdW5jdGlvbkZpbGVTeXN0ZW1Db25maWdzW10gKSB7XG4gICAgdGhpcy5fZmlsZVN5c3RlbUNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlU3lzdGVtQ29uZmlncygpIHtcbiAgICB0aGlzLl9maWxlU3lzdGVtQ29uZmlncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUNvbmZpZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZVN5c3RlbUNvbmZpZ3NcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdW5jdGlvbk5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnVuY3Rpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGdW5jdGlvbk5hbWUoKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25OYW1lXG4gIH1cblxuICAvLyBoYW5kbGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hhbmRsZXI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hhbmRsZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhhbmRsZXIodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9oYW5kbGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGFuZGxlcigpIHtcbiAgICB0aGlzLl9oYW5kbGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoYW5kbGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW1hZ2VfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlQ29uZmlnPzogTGFtYmRhRnVuY3Rpb25JbWFnZUNvbmZpZztcbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbWFnZV9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZUNvbmZpZyh2YWx1ZTogTGFtYmRhRnVuY3Rpb25JbWFnZUNvbmZpZyApIHtcbiAgICB0aGlzLl9pbWFnZUNvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlQ29uZmlnKCkge1xuICAgIHRoaXMuX2ltYWdlQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZUNvbmZpZ1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuXG4gIH1cblxuICAvLyBsYXllcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF5ZXJzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgbGF5ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xheWVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF5ZXJzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9sYXllcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXllcnMoKSB7XG4gICAgdGhpcy5fbGF5ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXllcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXJzXG4gIH1cblxuICAvLyBtZW1vcnlfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZW1vcnlTaXplPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IG1lbW9yeVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtZW1vcnlfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVtb3J5U2l6ZSh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX21lbW9yeVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZW1vcnlTaXplKCkge1xuICAgIHRoaXMuX21lbW9yeVNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lbW9yeVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5U2l6ZVxuICB9XG5cbiAgLy8gcGFja2FnZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhY2thZ2VUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBhY2thZ2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFja2FnZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYWNrYWdlVHlwZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3BhY2thZ2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFja2FnZVR5cGUoKSB7XG4gICAgdGhpcy5fcGFja2FnZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhY2thZ2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2thZ2VUeXBlXG4gIH1cblxuICAvLyByZXNlcnZlZF9jb25jdXJyZW50X2V4ZWN1dGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9ucz86IG51bWJlcjtcbiAgcHVibGljIGdldCByZXNlcnZlZENvbmN1cnJlbnRFeGVjdXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmVzZXJ2ZWRfY29uY3VycmVudF9leGVjdXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNlcnZlZENvbmN1cnJlbnRFeGVjdXRpb25zKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fcmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc2VydmVkQ29uY3VycmVudEV4ZWN1dGlvbnMoKSB7XG4gICAgdGhpcy5fcmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzZXJ2ZWRDb25jdXJyZW50RXhlY3V0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNlcnZlZENvbmN1cnJlbnRFeGVjdXRpb25zXG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGU6IHN0cmluZztcbiAgcHVibGljIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVcbiAgfVxuXG4gIC8vIHJ1bnRpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVudGltZT86IHN0cmluZztcbiAgcHVibGljIGdldCBydW50aW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVudGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcnVudGltZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3J1bnRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW50aW1lKCkge1xuICAgIHRoaXMuX3J1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVudGltZVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogTGFtYmRhRnVuY3Rpb25UYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogTGFtYmRhRnVuY3Rpb25UYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQ/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXQodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dCgpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRcbiAgfVxuXG4gIC8vIHRyYWNpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyYWNpbmdDb25maWc/OiBMYW1iZGFGdW5jdGlvblRyYWNpbmdDb25maWc7XG4gIHB1YmxpYyBnZXQgdHJhY2luZ0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0cmFjaW5nX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYWNpbmdDb25maWcodmFsdWU6IExhbWJkYUZ1bmN0aW9uVHJhY2luZ0NvbmZpZyApIHtcbiAgICB0aGlzLl90cmFjaW5nQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJhY2luZ0NvbmZpZygpIHtcbiAgICB0aGlzLl90cmFjaW5nQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFjaW5nQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWNpbmdDb25maWdcbiAgfVxuXG4gIC8vIHZwY19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjQ29uZmlnPzogTGFtYmRhRnVuY3Rpb25WcGNDb25maWc7XG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNDb25maWcodmFsdWU6IExhbWJkYUZ1bmN0aW9uVnBjQ29uZmlnICkge1xuICAgIHRoaXMuX3ZwY0NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY0NvbmZpZygpIHtcbiAgICB0aGlzLl92cGNDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNDb25maWdcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogbGFtYmRhRnVuY3Rpb25Db2RlVG9UZXJyYWZvcm0odGhpcy5fY29kZSksXG4gICAgICBjb2RlX3NpZ25pbmdfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29kZVNpZ25pbmdDb25maWdBcm4pLFxuICAgICAgZGVhZF9sZXR0ZXJfY29uZmlnOiBsYW1iZGFGdW5jdGlvbkRlYWRMZXR0ZXJDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9kZWFkTGV0dGVyQ29uZmlnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBlbnZpcm9ubWVudDogbGFtYmRhRnVuY3Rpb25FbnZpcm9ubWVudFRvVGVycmFmb3JtKHRoaXMuX2Vudmlyb25tZW50KSxcbiAgICAgIGZpbGVfc3lzdGVtX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIobGFtYmRhRnVuY3Rpb25GaWxlU3lzdGVtQ29uZmlnc1RvVGVycmFmb3JtKSh0aGlzLl9maWxlU3lzdGVtQ29uZmlncyksXG4gICAgICBmdW5jdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mdW5jdGlvbk5hbWUpLFxuICAgICAgaGFuZGxlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faGFuZGxlciksXG4gICAgICBpbWFnZV9jb25maWc6IGxhbWJkYUZ1bmN0aW9uSW1hZ2VDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9pbWFnZUNvbmZpZyksXG4gICAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5QXJuKSxcbiAgICAgIGxheWVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbGF5ZXJzKSxcbiAgICAgIG1lbW9yeV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tZW1vcnlTaXplKSxcbiAgICAgIHBhY2thZ2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGFja2FnZVR5cGUpLFxuICAgICAgcmVzZXJ2ZWRfY29uY3VycmVudF9leGVjdXRpb25zOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9yZXNlcnZlZENvbmN1cnJlbnRFeGVjdXRpb25zKSxcbiAgICAgIHJvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGUpLFxuICAgICAgcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcnVudGltZSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKGxhbWJkYUZ1bmN0aW9uVGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXQpLFxuICAgICAgdHJhY2luZ19jb25maWc6IGxhbWJkYUZ1bmN0aW9uVHJhY2luZ0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3RyYWNpbmdDb25maWcpLFxuICAgICAgdnBjX2NvbmZpZzogbGFtYmRhRnVuY3Rpb25WcGNDb25maWdUb1RlcnJhZm9ybSh0aGlzLl92cGNDb25maWcpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==