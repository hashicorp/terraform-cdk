import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html#id DataAwsccLambdaFunction#id}
    */
    readonly id: string;
}
export declare class DataAwsccLambdaFunctionCode extends cdktf.ComplexComputedList {
    get imageUri(): string;
    get s3Bucket(): string;
    get s3Key(): string;
    get s3ObjectVersion(): string;
    get zipFile(): string;
}
export declare function dataAwsccLambdaFunctionCodeToTerraform(struct?: DataAwsccLambdaFunctionCode): any;
export declare class DataAwsccLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {
    get targetArn(): string;
}
export declare function dataAwsccLambdaFunctionDeadLetterConfigToTerraform(struct?: DataAwsccLambdaFunctionDeadLetterConfig): any;
export declare class DataAwsccLambdaFunctionEnvironment extends cdktf.ComplexComputedList {
    get variables(): any;
}
export declare function dataAwsccLambdaFunctionEnvironmentToTerraform(struct?: DataAwsccLambdaFunctionEnvironment): any;
export declare class DataAwsccLambdaFunctionFileSystemConfigs extends cdktf.ComplexComputedList {
    get arn(): string;
    get localMountPath(): string;
}
export declare function dataAwsccLambdaFunctionFileSystemConfigsToTerraform(struct?: DataAwsccLambdaFunctionFileSystemConfigs): any;
export declare class DataAwsccLambdaFunctionImageConfig extends cdktf.ComplexComputedList {
    get command(): string[];
    get entryPoint(): string[];
    get workingDirectory(): string;
}
export declare function dataAwsccLambdaFunctionImageConfigToTerraform(struct?: DataAwsccLambdaFunctionImageConfig): any;
export declare class DataAwsccLambdaFunctionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccLambdaFunctionTagsToTerraform(struct?: DataAwsccLambdaFunctionTags): any;
export declare class DataAwsccLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {
    get mode(): string;
}
export declare function dataAwsccLambdaFunctionTracingConfigToTerraform(struct?: DataAwsccLambdaFunctionTracingConfig): any;
export declare class DataAwsccLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccLambdaFunctionVpcConfigToTerraform(struct?: DataAwsccLambdaFunctionVpcConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html awscc_lambda_function}
*/
export declare class DataAwsccLambdaFunction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_function.html awscc_lambda_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLambdaFunctionConfig);
    get arn(): string;
    get code(): any;
    get codeSigningConfigArn(): string;
    get deadLetterConfig(): any;
    get description(): string;
    get environment(): any;
    get fileSystemConfigs(): any;
    get functionName(): string;
    get handler(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageConfig(): any;
    get kmsKeyArn(): string;
    get layers(): string[];
    get memorySize(): number;
    get packageType(): string;
    get reservedConcurrentExecutions(): number;
    get role(): string;
    get runtime(): string;
    get tags(): any;
    get timeout(): number;
    get tracingConfig(): any;
    get vpcConfig(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
