// https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function configConformancePackConformancePackInputParametersToTerraform(struct?: ConfigConformancePackConformancePackInputParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html awscc_config_conformance_pack}
*/
export class ConfigConformancePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_conformance_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_conformance_pack.html awscc_config_conformance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConformancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_conformance_pack',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._conformancePackInputParameters = config.conformancePackInputParameters;
    this._conformancePackName = config.conformancePackName;
    this._deliveryS3Bucket = config.deliveryS3Bucket;
    this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
    this._templateBody = config.templateBody;
    this._templateS3Uri = config.templateS3Uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conformance_pack_input_parameters - computed: false, optional: true, required: false
  private _conformancePackInputParameters?: ConfigConformancePackConformancePackInputParameters[];
  public get conformancePackInputParameters() {
    return this.interpolationForAttribute('conformance_pack_input_parameters') as any;
  }
  public set conformancePackInputParameters(value: ConfigConformancePackConformancePackInputParameters[] ) {
    this._conformancePackInputParameters = value;
  }
  public resetConformancePackInputParameters() {
    this._conformancePackInputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformancePackInputParametersInput() {
    return this._conformancePackInputParameters
  }

  // conformance_pack_name - computed: false, optional: false, required: true
  private _conformancePackName: string;
  public get conformancePackName() {
    return this.getStringAttribute('conformance_pack_name');
  }
  public set conformancePackName(value: string) {
    this._conformancePackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conformancePackNameInput() {
    return this._conformancePackName
  }

  // delivery_s3_bucket - computed: false, optional: true, required: false
  private _deliveryS3Bucket?: string;
  public get deliveryS3Bucket() {
    return this.getStringAttribute('delivery_s3_bucket');
  }
  public set deliveryS3Bucket(value: string ) {
    this._deliveryS3Bucket = value;
  }
  public resetDeliveryS3Bucket() {
    this._deliveryS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3BucketInput() {
    return this._deliveryS3Bucket
  }

  // delivery_s3_key_prefix - computed: false, optional: true, required: false
  private _deliveryS3KeyPrefix?: string;
  public get deliveryS3KeyPrefix() {
    return this.getStringAttribute('delivery_s3_key_prefix');
  }
  public set deliveryS3KeyPrefix(value: string ) {
    this._deliveryS3KeyPrefix = value;
  }
  public resetDeliveryS3KeyPrefix() {
    this._deliveryS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3KeyPrefixInput() {
    return this._deliveryS3KeyPrefix
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // template_body - computed: false, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string ) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // template_s3_uri - computed: false, optional: true, required: false
  private _templateS3Uri?: string;
  public get templateS3Uri() {
    return this.getStringAttribute('template_s3_uri');
  }
  public set templateS3Uri(value: string ) {
    this._templateS3Uri = value;
  }
  public resetTemplateS3Uri() {
    this._templateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateS3UriInput() {
    return this._templateS3Uri
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conformance_pack_input_parameters: cdktf.listMapper(configConformancePackConformancePackInputParametersToTerraform)(this._conformancePackInputParameters),
      conformance_pack_name: cdktf.stringToTerraform(this._conformancePackName),
      delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
      delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
    };
  }
}
