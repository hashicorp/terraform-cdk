"use strict";
// https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaEventSourceMapping = exports.lambdaEventSourceMappingSourceAccessConfigurationsToTerraform = exports.lambdaEventSourceMappingSelfManagedEventSourceToTerraform = exports.lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform = exports.lambdaEventSourceMappingDestinationConfigToTerraform = exports.lambdaEventSourceMappingDestinationConfigOnFailureToTerraform = void 0;
const cdktf = require("cdktf");
function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
    };
}
exports.lambdaEventSourceMappingDestinationConfigOnFailureToTerraform = lambdaEventSourceMappingDestinationConfigOnFailureToTerraform;
function lambdaEventSourceMappingDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_failure: lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct.onFailure),
    };
}
exports.lambdaEventSourceMappingDestinationConfigToTerraform = lambdaEventSourceMappingDestinationConfigToTerraform;
function lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kafka_bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct.kafkaBootstrapServers),
    };
}
exports.lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform = lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform;
function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoints: lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct.endpoints),
    };
}
exports.lambdaEventSourceMappingSelfManagedEventSourceToTerraform = lambdaEventSourceMappingSelfManagedEventSourceToTerraform;
function lambdaEventSourceMappingSourceAccessConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.lambdaEventSourceMappingSourceAccessConfigurationsToTerraform = lambdaEventSourceMappingSourceAccessConfigurationsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html awscc_lambda_event_source_mapping}
*/
class LambdaEventSourceMapping extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html awscc_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_event_source_mapping',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._batchSize = config.batchSize;
        this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
        this._destinationConfig = config.destinationConfig;
        this._enabled = config.enabled;
        this._eventSourceArn = config.eventSourceArn;
        this._functionName = config.functionName;
        this._functionResponseTypes = config.functionResponseTypes;
        this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
        this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._parallelizationFactor = config.parallelizationFactor;
        this._queues = config.queues;
        this._selfManagedEventSource = config.selfManagedEventSource;
        this._sourceAccessConfigurations = config.sourceAccessConfigurations;
        this._startingPosition = config.startingPosition;
        this._startingPositionTimestamp = config.startingPositionTimestamp;
        this._topics = config.topics;
        this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
    }
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchSizeInput() {
        return this._batchSize;
    }
    get bisectBatchOnFunctionError() {
        return this.getBooleanAttribute('bisect_batch_on_function_error');
    }
    set bisectBatchOnFunctionError(value) {
        this._bisectBatchOnFunctionError = value;
    }
    resetBisectBatchOnFunctionError() {
        this._bisectBatchOnFunctionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bisectBatchOnFunctionErrorInput() {
        return this._bisectBatchOnFunctionError;
    }
    get destinationConfig() {
        return this.interpolationForAttribute('destination_config');
    }
    set destinationConfig(value) {
        this._destinationConfig = value;
    }
    resetDestinationConfig() {
        this._destinationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationConfigInput() {
        return this._destinationConfig;
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get eventSourceArn() {
        return this.getStringAttribute('event_source_arn');
    }
    set eventSourceArn(value) {
        this._eventSourceArn = value;
    }
    resetEventSourceArn() {
        this._eventSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventSourceArnInput() {
        return this._eventSourceArn;
    }
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get functionNameInput() {
        return this._functionName;
    }
    get functionResponseTypes() {
        return this.getListAttribute('function_response_types');
    }
    set functionResponseTypes(value) {
        this._functionResponseTypes = value;
    }
    resetFunctionResponseTypes() {
        this._functionResponseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionResponseTypesInput() {
        return this._functionResponseTypes;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    set maximumBatchingWindowInSeconds(value) {
        this._maximumBatchingWindowInSeconds = value;
    }
    resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }
    get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    set maximumRecordAgeInSeconds(value) {
        this._maximumRecordAgeInSeconds = value;
    }
    resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
    }
    get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    set maximumRetryAttempts(value) {
        this._maximumRetryAttempts = value;
    }
    resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }
    get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    set parallelizationFactor(value) {
        this._parallelizationFactor = value;
    }
    resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }
    get queues() {
        return this.getListAttribute('queues');
    }
    set queues(value) {
        this._queues = value;
    }
    resetQueues() {
        this._queues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queuesInput() {
        return this._queues;
    }
    get selfManagedEventSource() {
        return this.interpolationForAttribute('self_managed_event_source');
    }
    set selfManagedEventSource(value) {
        this._selfManagedEventSource = value;
    }
    resetSelfManagedEventSource() {
        this._selfManagedEventSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selfManagedEventSourceInput() {
        return this._selfManagedEventSource;
    }
    get sourceAccessConfigurations() {
        return this.interpolationForAttribute('source_access_configurations');
    }
    set sourceAccessConfigurations(value) {
        this._sourceAccessConfigurations = value;
    }
    resetSourceAccessConfigurations() {
        this._sourceAccessConfigurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceAccessConfigurationsInput() {
        return this._sourceAccessConfigurations;
    }
    get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    set startingPosition(value) {
        this._startingPosition = value;
    }
    resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startingPositionInput() {
        return this._startingPosition;
    }
    get startingPositionTimestamp() {
        return this.getNumberAttribute('starting_position_timestamp');
    }
    set startingPositionTimestamp(value) {
        this._startingPositionTimestamp = value;
    }
    resetStartingPositionTimestamp() {
        this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startingPositionTimestampInput() {
        return this._startingPositionTimestamp;
    }
    get topics() {
        return this.getListAttribute('topics');
    }
    set topics(value) {
        this._topics = value;
    }
    resetTopics() {
        this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topicsInput() {
        return this._topics;
    }
    get tumblingWindowInSeconds() {
        return this.getNumberAttribute('tumbling_window_in_seconds');
    }
    set tumblingWindowInSeconds(value) {
        this._tumblingWindowInSeconds = value;
    }
    resetTumblingWindowInSeconds() {
        this._tumblingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tumblingWindowInSecondsInput() {
        return this._tumblingWindowInSeconds;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            batch_size: cdktf.numberToTerraform(this._batchSize),
            bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
            destination_config: lambdaEventSourceMappingDestinationConfigToTerraform(this._destinationConfig),
            enabled: cdktf.booleanToTerraform(this._enabled),
            event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
            function_name: cdktf.stringToTerraform(this._functionName),
            function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
            maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
            maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
            queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
            self_managed_event_source: lambdaEventSourceMappingSelfManagedEventSourceToTerraform(this._selfManagedEventSource),
            source_access_configurations: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationsToTerraform)(this._sourceAccessConfigurations),
            starting_position: cdktf.stringToTerraform(this._startingPosition),
            starting_position_timestamp: cdktf.numberToTerraform(this._startingPositionTimestamp),
            topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
            tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
        };
    }
}
exports.LambdaEventSourceMapping = LambdaEventSourceMapping;
// =================
// STATIC PROPERTIES
// =================
LambdaEventSourceMapping.tfResourceType = "awscc_lambda_event_source_mapping";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWV2ZW50LXNvdXJjZS1tYXBwaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWV2ZW50LXNvdXJjZS1tYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtRkFBbUY7QUFDbkYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBMkgvQixTQUFnQiw2REFBNkQsQ0FBQyxNQUEyRDtJQUN2SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMxRCxDQUFBO0FBQ0gsQ0FBQztBQUxELHNJQUtDO0FBV0QsU0FBZ0Isb0RBQW9ELENBQUMsTUFBa0Q7SUFDckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsNkRBQTZELENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUM3RixDQUFBO0FBQ0gsQ0FBQztBQUxELG9IQUtDO0FBV0QsU0FBZ0Isa0VBQWtFLENBQUMsTUFBZ0U7SUFDakosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUNsRyxDQUFBO0FBQ0gsQ0FBQztBQUxELGdKQUtDO0FBV0QsU0FBZ0IseURBQXlELENBQUMsTUFBdUQ7SUFDL0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxP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QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0byByZXRyaWV2ZSBpbiBhIHNpbmdsZSBiYXRjaC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI2JhdGNoX3NpemUgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI2JhdGNoX3NpemV9XG4gICovXG4gIHJlYWRvbmx5IGJhdGNoU2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogKFN0cmVhbXMpIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGFuIGVycm9yLCBzcGxpdCB0aGUgYmF0Y2ggaW4gdHdvIGFuZCByZXRyeS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI2Jpc2VjdF9iYXRjaF9vbl9mdW5jdGlvbl9lcnJvciBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjYmlzZWN0X2JhdGNoX29uX2Z1bmN0aW9uX2Vycm9yfVxuICAqL1xuICByZWFkb25seSBiaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogKFN0cmVhbXMpIEFuIEFtYXpvbiBTUVMgcXVldWUgb3IgQW1hem9uIFNOUyB0b3BpYyBkZXN0aW5hdGlvbiBmb3IgZGlzY2FyZGVkIHJlY29yZHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCNkZXN0aW5hdGlvbl9jb25maWcgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI2Rlc3RpbmF0aW9uX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25Db25maWc/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZztcbiAgLyoqXG4gICogRGlzYWJsZXMgdGhlIGV2ZW50IHNvdXJjZSBtYXBwaW5nIHRvIHBhdXNlIHBvbGxpbmcgYW5kIGludm9jYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCNlbmFibGVkIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBUaGUgQW1hem9uIFJlc291cmNlIE5hbWUgKEFSTikgb2YgdGhlIGV2ZW50IHNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI2V2ZW50X3NvdXJjZV9hcm4gTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI2V2ZW50X3NvdXJjZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGV2ZW50U291cmNlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgbmFtZSBvZiB0aGUgTGFtYmRhIGZ1bmN0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjZnVuY3Rpb25fbmFtZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjZnVuY3Rpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIChTdHJlYW1zKSBBIGxpc3Qgb2YgcmVzcG9uc2UgdHlwZXMgc3VwcG9ydGVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI2Z1bmN0aW9uX3Jlc3BvbnNlX3R5cGVzIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyNmdW5jdGlvbl9yZXNwb25zZV90eXBlc31cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25SZXNwb25zZVR5cGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIChTdHJlYW1zKSBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0byBnYXRoZXIgcmVjb3JkcyBiZWZvcmUgaW52b2tpbmcgdGhlIGZ1bmN0aW9uLCBpbiBzZWNvbmRzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjbWF4aW11bV9iYXRjaGluZ193aW5kb3dfaW5fc2Vjb25kcyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjbWF4aW11bV9iYXRjaGluZ193aW5kb3dfaW5fc2Vjb25kc31cbiAgKi9cbiAgcmVhZG9ubHkgbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiAoU3RyZWFtcykgVGhlIG1heGltdW0gYWdlIG9mIGEgcmVjb3JkIHRoYXQgTGFtYmRhIHNlbmRzIHRvIGEgZnVuY3Rpb24gZm9yIHByb2Nlc3NpbmcuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCNtYXhpbXVtX3JlY29yZF9hZ2VfaW5fc2Vjb25kcyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjbWF4aW11bV9yZWNvcmRfYWdlX2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IG1heGltdW1SZWNvcmRBZ2VJblNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIChTdHJlYW1zKSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGltZXMgdG8gcmV0cnkgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhbiBlcnJvci5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI21heGltdW1fcmV0cnlfYXR0ZW1wdHMgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI21heGltdW1fcmV0cnlfYXR0ZW1wdHN9XG4gICovXG4gIHJlYWRvbmx5IG1heGltdW1SZXRyeUF0dGVtcHRzPzogbnVtYmVyO1xuICAvKipcbiAgKiAoU3RyZWFtcykgVGhlIG51bWJlciBvZiBiYXRjaGVzIHRvIHByb2Nlc3MgZnJvbSBlYWNoIHNoYXJkIGNvbmN1cnJlbnRseS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI3BhcmFsbGVsaXphdGlvbl9mYWN0b3IgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI3BhcmFsbGVsaXphdGlvbl9mYWN0b3J9XG4gICovXG4gIHJlYWRvbmx5IHBhcmFsbGVsaXphdGlvbkZhY3Rvcj86IG51bWJlcjtcbiAgLyoqXG4gICogKEFjdGl2ZU1RKSBBIGxpc3Qgb2YgQWN0aXZlTVEgcXVldWVzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjcXVldWVzIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyNxdWV1ZXN9XG4gICovXG4gIHJlYWRvbmx5IHF1ZXVlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBUaGUgY29uZmlndXJhdGlvbiB1c2VkIGJ5IEFXUyBMYW1iZGEgdG8gYWNjZXNzIGEgc2VsZi1tYW5hZ2VkIGV2ZW50IHNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI3NlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI3NlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IHNlbGZNYW5hZ2VkRXZlbnRTb3VyY2U/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlO1xuICAvKipcbiAgKiBBIGxpc3Qgb2YgU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI3NvdXJjZV9hY2Nlc3NfY29uZmlndXJhdGlvbnMgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI3NvdXJjZV9hY2Nlc3NfY29uZmlndXJhdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb25zPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnNbXTtcbiAgLyoqXG4gICogVGhlIHBvc2l0aW9uIGluIGEgc3RyZWFtIGZyb20gd2hpY2ggdG8gc3RhcnQgcmVhZGluZy4gUmVxdWlyZWQgZm9yIEFtYXpvbiBLaW5lc2lzIGFuZCBBbWF6b24gRHluYW1vREIgU3RyZWFtcyBzb3VyY2VzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjc3RhcnRpbmdfcG9zaXRpb24gTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI3N0YXJ0aW5nX3Bvc2l0aW9ufVxuICAqL1xuICByZWFkb25seSBzdGFydGluZ1Bvc2l0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBXaXRoIFN0YXJ0aW5nUG9zaXRpb24gc2V0IHRvIEFUX1RJTUVTVEFNUCwgdGhlIHRpbWUgZnJvbSB3aGljaCB0byBzdGFydCByZWFkaW5nLCBpbiBVbml4IHRpbWUgc2Vjb25kcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI3N0YXJ0aW5nX3Bvc2l0aW9uX3RpbWVzdGFtcCBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjc3RhcnRpbmdfcG9zaXRpb25fdGltZXN0YW1wfVxuICAqL1xuICByZWFkb25seSBzdGFydGluZ1Bvc2l0aW9uVGltZXN0YW1wPzogbnVtYmVyO1xuICAvKipcbiAgKiAoS2Fma2EpIEEgbGlzdCBvZiBLYWZrYSB0b3BpY3MuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCN0b3BpY3MgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI3RvcGljc31cbiAgKi9cbiAgcmVhZG9ubHkgdG9waWNzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIChTdHJlYW1zKSBUdW1ibGluZyB3aW5kb3cgKG5vbi1vdmVybGFwcGluZyB0aW1lIHdpbmRvdykgZHVyYXRpb24gdG8gcGVyZm9ybSBhZ2dyZWdhdGlvbnMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCN0dW1ibGluZ193aW5kb3dfaW5fc2Vjb25kcyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjdHVtYmxpbmdfd2luZG93X2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHR1bWJsaW5nV2luZG93SW5TZWNvbmRzPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSB7XG4gIC8qKlxuICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgZGVzdGluYXRpb24gcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCNkZXN0aW5hdGlvbiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjZGVzdGluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAqIEEgZGVzdGluYXRpb24gZm9yIGV2ZW50cyB0aGF0IGZhaWxlZCBwcm9jZXNzaW5nLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjb25fZmFpbHVyZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjb25fZmFpbHVyZX1cbiAgKi9cbiAgcmVhZG9ubHkgb25GYWlsdXJlPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9uX2ZhaWx1cmU6IGxhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9UZXJyYWZvcm0oc3RydWN0IS5vbkZhaWx1cmUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZUVuZHBvaW50cyB7XG4gIC8qKlxuICAqIEEgbGlzdCBvZiBLYWZrYSBzZXJ2ZXIgZW5kcG9pbnRzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwja2Fma2FfYm9vdHN0cmFwX3NlcnZlcnMgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nI2thZmthX2Jvb3RzdHJhcF9zZXJ2ZXJzfVxuICAqL1xuICByZWFkb25seSBrYWZrYUJvb3RzdHJhcFNlcnZlcnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NlbGZNYW5hZ2VkRXZlbnRTb3VyY2VFbmRwb2ludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlRW5kcG9pbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGthZmthX2Jvb3RzdHJhcF9zZXJ2ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmthZmthQm9vdHN0cmFwU2VydmVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlIHtcbiAgLyoqXG4gICogVGhlIGVuZHBvaW50cyB1c2VkIGJ5IEFXUyBMYW1iZGEgdG8gYWNjZXNzIGEgc2VsZi1tYW5hZ2VkIGV2ZW50IHNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sI2VuZHBvaW50cyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmcjZW5kcG9pbnRzfVxuICAqL1xuICByZWFkb25seSBlbmRwb2ludHM/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlRW5kcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnRzOiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlRW5kcG9pbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnMge1xuICAvKipcbiAgKiBUaGUgdHlwZSBvZiBzb3VyY2UgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcuaHRtbCN0eXBlIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgVVJJIGZvciB0aGUgc291cmNlIGFjY2VzcyBjb25maWd1cmF0aW9uIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nLmh0bWwjdXJpIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyN1cml9XG4gICovXG4gIHJlYWRvbmx5IHVyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB1cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJpKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sIGF3c2NjX2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZ31cbiovXG5leHBvcnQgY2xhc3MgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZy5odG1sIGF3c2NjX2xhbWJkYV9ldmVudF9zb3VyY2VfbWFwcGluZ30gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbGFtYmRhX2V2ZW50X3NvdXJjZV9tYXBwaW5nJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gY29uZmlnLmJhdGNoU2l6ZTtcbiAgICB0aGlzLl9iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvciA9IGNvbmZpZy5iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcjtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZyA9IGNvbmZpZy5kZXN0aW5hdGlvbkNvbmZpZztcbiAgICB0aGlzLl9lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG4gICAgdGhpcy5fZXZlbnRTb3VyY2VBcm4gPSBjb25maWcuZXZlbnRTb3VyY2VBcm47XG4gICAgdGhpcy5fZnVuY3Rpb25OYW1lID0gY29uZmlnLmZ1bmN0aW9uTmFtZTtcbiAgICB0aGlzLl9mdW5jdGlvblJlc3BvbnNlVHlwZXMgPSBjb25maWcuZnVuY3Rpb25SZXNwb25zZVR5cGVzO1xuICAgIHRoaXMuX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcyA9IGNvbmZpZy5tYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHM7XG4gICAgdGhpcy5fbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcyA9IGNvbmZpZy5tYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzO1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gY29uZmlnLm1heGltdW1SZXRyeUF0dGVtcHRzO1xuICAgIHRoaXMuX3BhcmFsbGVsaXphdGlvbkZhY3RvciA9IGNvbmZpZy5wYXJhbGxlbGl6YXRpb25GYWN0b3I7XG4gICAgdGhpcy5fcXVldWVzID0gY29uZmlnLnF1ZXVlcztcbiAgICB0aGlzLl9zZWxmTWFuYWdlZEV2ZW50U291cmNlID0gY29uZmlnLnNlbGZNYW5hZ2VkRXZlbnRTb3VyY2U7XG4gICAgdGhpcy5fc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnMgPSBjb25maWcuc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnM7XG4gICAgdGhpcy5fc3RhcnRpbmdQb3NpdGlvbiA9IGNvbmZpZy5zdGFydGluZ1Bvc2l0aW9uO1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAgPSBjb25maWcuc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcDtcbiAgICB0aGlzLl90b3BpY3MgPSBjb25maWcudG9waWNzO1xuICAgIHRoaXMuX3R1bWJsaW5nV2luZG93SW5TZWNvbmRzID0gY29uZmlnLnR1bWJsaW5nV2luZG93SW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBiYXRjaF9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhdGNoU2l6ZT86IG51bWJlcjtcbiAgcHVibGljIGdldCBiYXRjaFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiYXRjaF9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBiYXRjaFNpemUodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXRjaFNpemUoKSB7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXRjaFNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmF0Y2hTaXplXG4gIH1cblxuICAvLyBiaXNlY3RfYmF0Y2hfb25fZnVuY3Rpb25fZXJyb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3I/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIHB1YmxpYyBnZXQgYmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmlzZWN0X2JhdGNoX29uX2Z1bmN0aW9uX2Vycm9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBiaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlICkge1xuICAgIHRoaXMuX2Jpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy5fYmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yXG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25Db25maWc/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZztcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbkNvbmZpZyh2YWx1ZTogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWcgKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Db25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0aW5hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Db25maWdcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRcbiAgfVxuXG4gIC8vIGV2ZW50X3NvdXJjZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudFNvdXJjZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBldmVudFNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X3NvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV2ZW50U291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmVudFNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2ZW50U291cmNlQXJuKCkge1xuICAgIHRoaXMuX2V2ZW50U291cmNlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmVudFNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFNvdXJjZUFyblxuICB9XG5cbiAgLy8gZnVuY3Rpb25fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mdW5jdGlvbk5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25OYW1lXG4gIH1cblxuICAvLyBmdW5jdGlvbl9yZXNwb25zZV90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdW5jdGlvblJlc3BvbnNlVHlwZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBmdW5jdGlvblJlc3BvbnNlVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZnVuY3Rpb25fcmVzcG9uc2VfdHlwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uUmVzcG9uc2VUeXBlcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25SZXNwb25zZVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnVuY3Rpb25SZXNwb25zZVR5cGVzKCkge1xuICAgIHRoaXMuX2Z1bmN0aW9uUmVzcG9uc2VUeXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25SZXNwb25zZVR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uUmVzcG9uc2VUeXBlc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtYXhpbXVtX2JhdGNoaW5nX3dpbmRvd19pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCBtYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX2JhdGNoaW5nX3dpbmRvd19pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9tYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzXG4gIH1cblxuICAvLyBtYXhpbXVtX3JlY29yZF9hZ2VfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IG1heGltdW1SZWNvcmRBZ2VJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX3JlY29yZF9hZ2VfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX21heGltdW1SZWNvcmRBZ2VJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX21heGltdW1SZWNvcmRBZ2VJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1SZWNvcmRBZ2VJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4aW11bVJlY29yZEFnZUluU2Vjb25kc1xuICB9XG5cbiAgLy8gbWF4aW11bV9yZXRyeV9hdHRlbXB0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtUmV0cnlBdHRlbXB0cz86IG51bWJlcjtcbiAgcHVibGljIGdldCBtYXhpbXVtUmV0cnlBdHRlbXB0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fcmV0cnlfYXR0ZW1wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1SZXRyeUF0dGVtcHRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhpbXVtUmV0cnlBdHRlbXB0cygpIHtcbiAgICB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bVJldHJ5QXR0ZW1wdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHNcbiAgfVxuXG4gIC8vIHBhcmFsbGVsaXphdGlvbl9mYWN0b3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFyYWxsZWxpemF0aW9uRmFjdG9yPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXphdGlvbkZhY3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhcmFsbGVsaXphdGlvbl9mYWN0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFsbGVsaXphdGlvbkZhY3Rvcih2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXphdGlvbkZhY3RvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFsbGVsaXphdGlvbkZhY3RvcigpIHtcbiAgICB0aGlzLl9wYXJhbGxlbGl6YXRpb25GYWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXphdGlvbkZhY3RvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGl6YXRpb25GYWN0b3JcbiAgfVxuXG4gIC8vIHF1ZXVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWV1ZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBxdWV1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncXVldWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWV1ZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3F1ZXVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1ZXVlcygpIHtcbiAgICB0aGlzLl9xdWV1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZXNcbiAgfVxuXG4gIC8vIHNlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWxmTWFuYWdlZEV2ZW50U291cmNlPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZTtcbiAgcHVibGljIGdldCBzZWxmTWFuYWdlZEV2ZW50U291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZWxmTWFuYWdlZEV2ZW50U291cmNlKHZhbHVlOiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlKSB7XG4gICAgdGhpcy5fc2VsZk1hbmFnZWRFdmVudFNvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlbGZNYW5hZ2VkRXZlbnRTb3VyY2UoKSB7XG4gICAgdGhpcy5fc2VsZk1hbmFnZWRFdmVudFNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VsZk1hbmFnZWRFdmVudFNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxmTWFuYWdlZEV2ZW50U291cmNlXG4gIH1cblxuICAvLyBzb3VyY2VfYWNjZXNzX2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb25zPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnNbXTtcbiAgcHVibGljIGdldCBzb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfYWNjZXNzX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnModmFsdWU6IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb25zW10gKSB7XG4gICAgdGhpcy5fc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9ucygpIHtcbiAgICB0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQWNjZXNzQ29uZmlndXJhdGlvbnNcbiAgfVxuXG4gIC8vIHN0YXJ0aW5nX3Bvc2l0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhcnRpbmdQb3NpdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBzdGFydGluZ1Bvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhcnRpbmdfcG9zaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0aW5nUG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydGluZ1Bvc2l0aW9uKCkge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRpbmdQb3NpdGlvblxuICB9XG5cbiAgLy8gc3RhcnRpbmdfcG9zaXRpb25fdGltZXN0YW1wIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXA/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0YXJ0aW5nX3Bvc2l0aW9uX3RpbWVzdGFtcCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydGluZ1Bvc2l0aW9uVGltZXN0YW1wKCkge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcFxuICB9XG5cbiAgLy8gdG9waWNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RvcGljcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHRvcGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0b3BpY3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvcGljcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdG9waWNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9waWNzKCkge1xuICAgIHRoaXMuX3RvcGljcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9waWNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcGljc1xuICB9XG5cbiAgLy8gdHVtYmxpbmdfd2luZG93X2luX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVtYmxpbmdXaW5kb3dJblNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHVtYmxpbmdXaW5kb3dJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW1ibGluZ193aW5kb3dfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVtYmxpbmdXaW5kb3dJblNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90dW1ibGluZ1dpbmRvd0luU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bWJsaW5nV2luZG93SW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bWJsaW5nV2luZG93SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW1ibGluZ1dpbmRvd0luU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW1ibGluZ1dpbmRvd0luU2Vjb25kc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaF9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9iYXRjaFNpemUpLFxuICAgICAgYmlzZWN0X2JhdGNoX29uX2Z1bmN0aW9uX2Vycm9yOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3IpLFxuICAgICAgZGVzdGluYXRpb25fY29uZmlnOiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnKSxcbiAgICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVkKSxcbiAgICAgIGV2ZW50X3NvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50U291cmNlQXJuKSxcbiAgICAgIGZ1bmN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Z1bmN0aW9uTmFtZSksXG4gICAgICBmdW5jdGlvbl9yZXNwb25zZV90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fZnVuY3Rpb25SZXNwb25zZVR5cGVzKSxcbiAgICAgIG1heGltdW1fYmF0Y2hpbmdfd2luZG93X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcyksXG4gICAgICBtYXhpbXVtX3JlY29yZF9hZ2VfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcyksXG4gICAgICBtYXhpbXVtX3JldHJ5X2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyksXG4gICAgICBwYXJhbGxlbGl6YXRpb25fZmFjdG9yOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wYXJhbGxlbGl6YXRpb25GYWN0b3IpLFxuICAgICAgcXVldWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9xdWV1ZXMpLFxuICAgICAgc2VsZl9tYW5hZ2VkX2V2ZW50X3NvdXJjZTogbGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZVRvVGVycmFmb3JtKHRoaXMuX3NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UpLFxuICAgICAgc291cmNlX2FjY2Vzc19jb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9ucyksXG4gICAgICBzdGFydGluZ19wb3NpdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhcnRpbmdQb3NpdGlvbiksXG4gICAgICBzdGFydGluZ19wb3NpdGlvbl90aW1lc3RhbXA6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXApLFxuICAgICAgdG9waWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90b3BpY3MpLFxuICAgICAgdHVtYmxpbmdfd2luZG93X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bWJsaW5nV2luZG93SW5TZWNvbmRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=