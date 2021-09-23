// https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html#id DataAwsccLambdaEventSourceMapping#id}
  */
  readonly id: string;
}
export class DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure extends cdktf.ComplexComputedList {

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }
}

export function dataAwsccLambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class DataAwsccLambdaEventSourceMappingDestinationConfig extends cdktf.ComplexComputedList {

  // on_failure - computed: true, optional: false, required: false
  public get onFailure() {
    return this.interpolationForAttribute('on_failure') as any;
  }
}

export function dataAwsccLambdaEventSourceMappingDestinationConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_failure: dataAwsccLambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct!.onFailure),
  }
}

export class DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints extends cdktf.ComplexComputedList {

  // kafka_bootstrap_servers - computed: true, optional: false, required: false
  public get kafkaBootstrapServers() {
    return this.getListAttribute('kafka_bootstrap_servers');
  }
}

export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kafka_bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.kafkaBootstrapServers),
  }
}

export class DataAwsccLambdaEventSourceMappingSelfManagedEventSource extends cdktf.ComplexComputedList {

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.interpolationForAttribute('endpoints') as any;
  }
}

export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints: dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct!.endpoints),
  }
}

export class DataAwsccLambdaEventSourceMappingSourceAccessConfigurations extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export function dataAwsccLambdaEventSourceMappingSourceAccessConfigurationsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html awscc_lambda_event_source_mapping}
*/
export class DataAwsccLambdaEventSourceMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lambda_event_source_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html awscc_lambda_event_source_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaEventSourceMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaEventSourceMappingConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // bisect_batch_on_function_error - computed: true, optional: false, required: false
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }

  // destination_config - computed: true, optional: false, required: false
  public get destinationConfig() {
    return this.interpolationForAttribute('destination_config') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_source_arn - computed: true, optional: false, required: false
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // function_response_types - computed: true, optional: false, required: false
  public get functionResponseTypes() {
    return this.getListAttribute('function_response_types');
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

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // maximum_record_age_in_seconds - computed: true, optional: false, required: false
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }

  // maximum_retry_attempts - computed: true, optional: false, required: false
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }

  // parallelization_factor - computed: true, optional: false, required: false
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }

  // queues - computed: true, optional: false, required: false
  public get queues() {
    return this.getListAttribute('queues');
  }

  // self_managed_event_source - computed: true, optional: false, required: false
  public get selfManagedEventSource() {
    return this.interpolationForAttribute('self_managed_event_source') as any;
  }

  // source_access_configurations - computed: true, optional: false, required: false
  public get sourceAccessConfigurations() {
    return this.interpolationForAttribute('source_access_configurations') as any;
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // starting_position_timestamp - computed: true, optional: false, required: false
  public get startingPositionTimestamp() {
    return this.getNumberAttribute('starting_position_timestamp');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // tumbling_window_in_seconds - computed: true, optional: false, required: false
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
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
