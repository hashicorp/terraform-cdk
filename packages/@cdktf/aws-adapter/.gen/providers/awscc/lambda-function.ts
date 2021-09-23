// https://www.terraform.io/docs/providers/awscc/r/lambda_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#code LambdaFunction#code}
  */
  readonly code: LambdaFunctionCode;
  /**
  * A unique Arn for CodeSigningConfig resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#code_signing_config_arn LambdaFunction#code_signing_config_arn}
  */
  readonly codeSigningConfigArn?: string;
  /**
  * The dead-letter queue for failed asynchronous invocations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#dead_letter_config LambdaFunction#dead_letter_config}
  */
  readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig;
  /**
  * A description of the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#description LambdaFunction#description}
  */
  readonly description?: string;
  /**
  * A function's environment variable settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#environment LambdaFunction#environment}
  */
  readonly environment?: LambdaFunctionEnvironment;
  /**
  * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an AWS::EFS::MountTarget resource, you must also specify a DependsOn attribute to ensure that the mount target is created or updated before the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#file_system_configs LambdaFunction#file_system_configs}
  */
  readonly fileSystemConfigs?: LambdaFunctionFileSystemConfigs[];
  /**
  * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#function_name LambdaFunction#function_name}
  */
  readonly functionName?: string;
  /**
  * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#handler LambdaFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#image_config LambdaFunction#image_config}
  */
  readonly imageConfig?: LambdaFunctionImageConfig;
  /**
  * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#kms_key_arn LambdaFunction#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#layers LambdaFunction#layers}
  */
  readonly layers?: string[];
  /**
  * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#memory_size LambdaFunction#memory_size}
  */
  readonly memorySize?: number;
  /**
  * PackageType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#package_type LambdaFunction#package_type}
  */
  readonly packageType?: string;
  /**
  * The number of simultaneous executions to reserve for the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
  */
  readonly reservedConcurrentExecutions?: number;
  /**
  * The Amazon Resource Name (ARN) of the function's execution role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#role LambdaFunction#role}
  */
  readonly role: string;
  /**
  * The identifier of the function's runtime.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#runtime LambdaFunction#runtime}
  */
  readonly runtime?: string;
  /**
  * A list of tags to apply to the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#tags LambdaFunction#tags}
  */
  readonly tags?: LambdaFunctionTags[];
  /**
  * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#timeout LambdaFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set Mode to Active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#tracing_config LambdaFunction#tracing_config}
  */
  readonly tracingConfig?: LambdaFunctionTracingConfig;
  /**
  * The VPC security groups and subnets that are attached to a Lambda function. When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#vpc_config LambdaFunction#vpc_config}
  */
  readonly vpcConfig?: LambdaFunctionVpcConfig;
}
export interface LambdaFunctionCode {
  /**
  * ImageUri.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#image_uri LambdaFunction#image_uri}
  */
  readonly imageUri?: string;
  /**
  * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#s3_bucket LambdaFunction#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * The Amazon S3 key of the deployment package.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#s3_key LambdaFunction#s3_key}
  */
  readonly s3Key?: string;
  /**
  * For versioned objects, the version of the deployment package object to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#s3_object_version LambdaFunction#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named index and zips it to create a deployment package..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#zip_file LambdaFunction#zip_file}
  */
  readonly zipFile?: string;
}

export function lambdaFunctionCodeToTerraform(struct?: LambdaFunctionCode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktf.stringToTerraform(struct!.s3ObjectVersion),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}

export interface LambdaFunctionDeadLetterConfig {
  /**
  * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#target_arn LambdaFunction#target_arn}
  */
  readonly targetArn?: string;
}

export function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface LambdaFunctionEnvironment {
  /**
  * Environment variable key-value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#variables LambdaFunction#variables}
  */
  readonly variables?: { [key: string]: string } | cdktf.IResolvable;
}

export function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.variables),
  }
}

export interface LambdaFunctionFileSystemConfigs {
  /**
  * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#arn LambdaFunction#arn}
  */
  readonly arn: string;
  /**
  * The path where the function can access the file system, starting with /mnt/.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#local_mount_path LambdaFunction#local_mount_path}
  */
  readonly localMountPath: string;
}

export function lambdaFunctionFileSystemConfigsToTerraform(struct?: LambdaFunctionFileSystemConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
  }
}

export interface LambdaFunctionImageConfig {
  /**
  * Command.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#command LambdaFunction#command}
  */
  readonly command?: string[];
  /**
  * EntryPoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#entry_point LambdaFunction#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * WorkingDirectory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#working_directory LambdaFunction#working_directory}
  */
  readonly workingDirectory?: string;
}

export function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}

export interface LambdaFunctionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#key LambdaFunction#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#value LambdaFunction#value}
  */
  readonly value?: string;
}

export function lambdaFunctionTagsToTerraform(struct?: LambdaFunctionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LambdaFunctionTracingConfig {
  /**
  * The tracing mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#mode LambdaFunction#mode}
  */
  readonly mode?: string;
}

export function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface LambdaFunctionVpcConfig {
  /**
  * A list of VPC security groups IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#security_group_ids LambdaFunction#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * A list of VPC subnet IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#subnet_ids LambdaFunction#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html awscc_lambda_function}
*/
export class LambdaFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lambda_function";

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
  public constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: false, required: true
  private _code: LambdaFunctionCode;
  public get code() {
    return this.interpolationForAttribute('code') as any;
  }
  public set code(value: LambdaFunctionCode) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // code_signing_config_arn - computed: false, optional: true, required: false
  private _codeSigningConfigArn?: string;
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }
  public set codeSigningConfigArn(value: string ) {
    this._codeSigningConfigArn = value;
  }
  public resetCodeSigningConfigArn() {
    this._codeSigningConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningConfigArnInput() {
    return this._codeSigningConfigArn
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig?: LambdaFunctionDeadLetterConfig;
  public get deadLetterConfig() {
    return this.interpolationForAttribute('dead_letter_config') as any;
  }
  public set deadLetterConfig(value: LambdaFunctionDeadLetterConfig ) {
    this._deadLetterConfig = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: LambdaFunctionEnvironment;
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: LambdaFunctionEnvironment ) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // file_system_configs - computed: false, optional: true, required: false
  private _fileSystemConfigs?: LambdaFunctionFileSystemConfigs[];
  public get fileSystemConfigs() {
    return this.interpolationForAttribute('file_system_configs') as any;
  }
  public set fileSystemConfigs(value: LambdaFunctionFileSystemConfigs[] ) {
    this._fileSystemConfigs = value;
  }
  public resetFileSystemConfigs() {
    this._fileSystemConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigsInput() {
    return this._fileSystemConfigs
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string;
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string;
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string ) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig?: LambdaFunctionImageConfig;
  public get imageConfig() {
    return this.interpolationForAttribute('image_config') as any;
  }
  public set imageConfig(value: LambdaFunctionImageConfig ) {
    this._imageConfig = value;
  }
  public resetImageConfig() {
    this._imageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string ) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[];
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[] ) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number;
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number ) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string;
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string ) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number;
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }
  public set reservedConcurrentExecutions(value: number ) {
    this._reservedConcurrentExecutions = value;
  }
  public resetReservedConcurrentExecutions() {
    this._reservedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrentExecutionsInput() {
    return this._reservedConcurrentExecutions
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string;
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string ) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: LambdaFunctionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: LambdaFunctionTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig?: LambdaFunctionTracingConfig;
  public get tracingConfig() {
    return this.interpolationForAttribute('tracing_config') as any;
  }
  public set tracingConfig(value: LambdaFunctionTracingConfig ) {
    this._tracingConfig = value;
  }
  public resetTracingConfig() {
    this._tracingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: LambdaFunctionVpcConfig;
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: LambdaFunctionVpcConfig ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
