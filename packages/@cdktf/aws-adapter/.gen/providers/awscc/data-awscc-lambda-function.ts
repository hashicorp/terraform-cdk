// https://www.terraform.io/docs/providers/awscc/d/lambda_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html#id DataAwsccLambdaFunction#id}
  */
  readonly id: string;
}
export class DataAwsccLambdaFunctionCode extends cdktf.ComplexComputedList {

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }

  // s3_object_version - computed: true, optional: false, required: false
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }

  // zip_file - computed: true, optional: false, required: false
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
}

export function dataAwsccLambdaFunctionCodeToTerraform(struct?: DataAwsccLambdaFunctionCode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktf.stringToTerraform(struct!.s3ObjectVersion),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}

export class DataAwsccLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccLambdaFunctionDeadLetterConfigToTerraform(struct?: DataAwsccLambdaFunctionDeadLetterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccLambdaFunctionEnvironment extends cdktf.ComplexComputedList {

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
}

export function dataAwsccLambdaFunctionEnvironmentToTerraform(struct?: DataAwsccLambdaFunctionEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}

export class DataAwsccLambdaFunctionFileSystemConfigs extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // local_mount_path - computed: true, optional: false, required: false
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
}

export function dataAwsccLambdaFunctionFileSystemConfigsToTerraform(struct?: DataAwsccLambdaFunctionFileSystemConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
  }
}

export class DataAwsccLambdaFunctionImageConfig extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export function dataAwsccLambdaFunctionImageConfigToTerraform(struct?: DataAwsccLambdaFunctionImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}

export class DataAwsccLambdaFunctionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccLambdaFunctionTagsToTerraform(struct?: DataAwsccLambdaFunctionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export function dataAwsccLambdaFunctionTracingConfigToTerraform(struct?: DataAwsccLambdaFunctionTracingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class DataAwsccLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccLambdaFunctionVpcConfigToTerraform(struct?: DataAwsccLambdaFunctionVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html awscc_lambda_function}
*/
export class DataAwsccLambdaFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lambda_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html awscc_lambda_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaFunctionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.interpolationForAttribute('code') as any;
  }

  // code_signing_config_arn - computed: true, optional: false, required: false
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }

  // dead_letter_config - computed: true, optional: false, required: false
  public get deadLetterConfig() {
    return this.interpolationForAttribute('dead_letter_config') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }

  // file_system_configs - computed: true, optional: false, required: false
  public get fileSystemConfigs() {
    return this.interpolationForAttribute('file_system_configs') as any;
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // handler - computed: true, optional: false, required: false
  public get handler() {
    return this.getStringAttribute('handler');
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

  // image_config - computed: true, optional: false, required: false
  public get imageConfig() {
    return this.interpolationForAttribute('image_config') as any;
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // layers - computed: true, optional: false, required: false
  public get layers() {
    return this.getListAttribute('layers');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // reserved_concurrent_executions - computed: true, optional: false, required: false
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tracing_config - computed: true, optional: false, required: false
  public get tracingConfig() {
    return this.interpolationForAttribute('tracing_config') as any;
  }

  // vpc_config - computed: true, optional: false, required: false
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
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
