import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * A list of ConformancePackInputParameter objects.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#conformance_pack_input_parameters ConfigConformancePack#conformance_pack_input_parameters}
    */
    readonly conformancePackInputParameters?: ConfigConformancePackConformancePackInputParameters[];
    /**
    * Name of the conformance pack which will be assigned as the unique identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#conformance_pack_name ConfigConformancePack#conformance_pack_name}
    */
    readonly conformancePackName: string;
    /**
    * AWS Config stores intermediate files while processing conformance pack template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * The prefix for delivery S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#template_body ConfigConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#template_s3_uri ConfigConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
}
export interface ConfigConformancePackConformancePackInputParameters {
    /**
    * Key part of key-value pair with value being parameter value
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#parameter_name ConfigConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Value part of key-value pair with key being parameter Name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html#parameter_value ConfigConformancePack#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function configConformancePackConformancePackInputParametersToTerraform(struct?: ConfigConformancePackConformancePackInputParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html awscc_config_conformance_pack}
*/
export declare class ConfigConformancePack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html awscc_config_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConformancePackConfig);
    private _conformancePackInputParameters?;
    get conformancePackInputParameters(): ConfigConformancePackConformancePackInputParameters[];
    set conformancePackInputParameters(value: ConfigConformancePackConformancePackInputParameters[]);
    resetConformancePackInputParameters(): void;
    get conformancePackInputParametersInput(): ConfigConformancePackConformancePackInputParameters[] | undefined;
    private _conformancePackName;
    get conformancePackName(): string;
    set conformancePackName(value: string);
    get conformancePackNameInput(): string;
    private _deliveryS3Bucket?;
    get deliveryS3Bucket(): string;
    set deliveryS3Bucket(value: string);
    resetDeliveryS3Bucket(): void;
    get deliveryS3BucketInput(): string | undefined;
    private _deliveryS3KeyPrefix?;
    get deliveryS3KeyPrefix(): string;
    set deliveryS3KeyPrefix(value: string);
    resetDeliveryS3KeyPrefix(): void;
    get deliveryS3KeyPrefixInput(): string | undefined;
    get id(): string;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateS3Uri?;
    get templateS3Uri(): string;
    set templateS3Uri(value: string);
    resetTemplateS3Uri(): void;
    get templateS3UriInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
