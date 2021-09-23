import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function lambdaFunctionCodeToTerraform(struct?: LambdaFunctionCode): any;
export interface LambdaFunctionDeadLetterConfig {
    /**
    * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#target_arn LambdaFunction#target_arn}
    */
    readonly targetArn?: string;
}
export declare function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfig): any;
export interface LambdaFunctionEnvironment {
    /**
    * Environment variable key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#variables LambdaFunction#variables}
    */
    readonly variables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironment): any;
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
export declare function lambdaFunctionFileSystemConfigsToTerraform(struct?: LambdaFunctionFileSystemConfigs): any;
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
export declare function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfig): any;
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
export declare function lambdaFunctionTagsToTerraform(struct?: LambdaFunctionTags): any;
export interface LambdaFunctionTracingConfig {
    /**
    * The tracing mode.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html#mode LambdaFunction#mode}
    */
    readonly mode?: string;
}
export declare function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfig): any;
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
export declare function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html awscc_lambda_function}
*/
export declare class LambdaFunction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_function.html awscc_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionConfig);
    get arn(): string;
    private _code;
    get code(): LambdaFunctionCode;
    set code(value: LambdaFunctionCode);
    get codeInput(): LambdaFunctionCode;
    private _codeSigningConfigArn?;
    get codeSigningConfigArn(): string;
    set codeSigningConfigArn(value: string);
    resetCodeSigningConfigArn(): void;
    get codeSigningConfigArnInput(): string | undefined;
    private _deadLetterConfig?;
    get deadLetterConfig(): LambdaFunctionDeadLetterConfig;
    set deadLetterConfig(value: LambdaFunctionDeadLetterConfig);
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): LambdaFunctionDeadLetterConfig | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environment?;
    get environment(): LambdaFunctionEnvironment;
    set environment(value: LambdaFunctionEnvironment);
    resetEnvironment(): void;
    get environmentInput(): LambdaFunctionEnvironment | undefined;
    private _fileSystemConfigs?;
    get fileSystemConfigs(): LambdaFunctionFileSystemConfigs[];
    set fileSystemConfigs(value: LambdaFunctionFileSystemConfigs[]);
    resetFileSystemConfigs(): void;
    get fileSystemConfigsInput(): LambdaFunctionFileSystemConfigs[] | undefined;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    resetFunctionName(): void;
    get functionNameInput(): string | undefined;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    resetHandler(): void;
    get handlerInput(): string | undefined;
    get id(): string;
    private _imageConfig?;
    get imageConfig(): LambdaFunctionImageConfig;
    set imageConfig(value: LambdaFunctionImageConfig);
    resetImageConfig(): void;
    get imageConfigInput(): LambdaFunctionImageConfig | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _layers?;
    get layers(): string[];
    set layers(value: string[]);
    resetLayers(): void;
    get layersInput(): string[] | undefined;
    private _memorySize?;
    get memorySize(): number;
    set memorySize(value: number);
    resetMemorySize(): void;
    get memorySizeInput(): number | undefined;
    private _packageType?;
    get packageType(): string;
    set packageType(value: string);
    resetPackageType(): void;
    get packageTypeInput(): string | undefined;
    private _reservedConcurrentExecutions?;
    get reservedConcurrentExecutions(): number;
    set reservedConcurrentExecutions(value: number);
    resetReservedConcurrentExecutions(): void;
    get reservedConcurrentExecutionsInput(): number | undefined;
    private _role;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string | undefined;
    private _tags?;
    get tags(): LambdaFunctionTags[];
    set tags(value: LambdaFunctionTags[]);
    resetTags(): void;
    get tagsInput(): LambdaFunctionTags[] | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _tracingConfig?;
    get tracingConfig(): LambdaFunctionTracingConfig;
    set tracingConfig(value: LambdaFunctionTracingConfig);
    resetTracingConfig(): void;
    get tracingConfigInput(): LambdaFunctionTracingConfig | undefined;
    private _vpcConfig?;
    get vpcConfig(): LambdaFunctionVpcConfig;
    set vpcConfig(value: LambdaFunctionVpcConfig);
    resetVpcConfig(): void;
    get vpcConfigInput(): LambdaFunctionVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
