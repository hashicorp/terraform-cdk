import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description for the edge device fleet
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#description SagemakerDeviceFleet#description}
    */
    readonly description?: string;
    /**
    * The name of the edge device fleet
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#output_config SagemakerDeviceFleet#output_config}
    */
    readonly outputConfig: SagemakerDeviceFleetOutputConfig;
    /**
    * Role associated with the device fleet
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#role_arn SagemakerDeviceFleet#role_arn}
    */
    readonly roleArn: string;
    /**
    * Associate tags with the resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#tags SagemakerDeviceFleet#tags}
    */
    readonly tags?: SagemakerDeviceFleetTags[];
}
export interface SagemakerDeviceFleetOutputConfig {
    /**
    * The KMS key id used for encryption on the S3 bucket
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#kms_key_id SagemakerDeviceFleet#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The Amazon Simple Storage (S3) bucket URI
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#s3_output_location SagemakerDeviceFleet#s3_output_location}
    */
    readonly s3OutputLocation: string;
}
export declare function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfig): any;
export interface SagemakerDeviceFleetTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#key SagemakerDeviceFleet#key}
    */
    readonly key: string;
    /**
    * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html#value SagemakerDeviceFleet#value}
    */
    readonly value: string;
}
export declare function sagemakerDeviceFleetTagsToTerraform(struct?: SagemakerDeviceFleetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html awscc_sagemaker_device_fleet}
*/
export declare class SagemakerDeviceFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device_fleet.html awscc_sagemaker_device_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceFleetConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _deviceFleetName;
    get deviceFleetName(): string;
    set deviceFleetName(value: string);
    get deviceFleetNameInput(): string;
    get id(): string;
    private _outputConfig;
    get outputConfig(): SagemakerDeviceFleetOutputConfig;
    set outputConfig(value: SagemakerDeviceFleetOutputConfig);
    get outputConfigInput(): SagemakerDeviceFleetOutputConfig;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): SagemakerDeviceFleetTags[];
    set tags(value: SagemakerDeviceFleetTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerDeviceFleetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
