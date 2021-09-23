// https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html#id DataAwsccCloudfrontFunction#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontFunctionFunctionConfig extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
}

export function dataAwsccCloudfrontFunctionFunctionConfigToTerraform(struct?: DataAwsccCloudfrontFunctionFunctionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}

export class DataAwsccCloudfrontFunctionFunctionMetadata extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}

export function dataAwsccCloudfrontFunctionFunctionMetadataToTerraform(struct?: DataAwsccCloudfrontFunctionFunctionMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html awscc_cloudfront_function}
*/
export class DataAwsccCloudfrontFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html awscc_cloudfront_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_function',
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

  // auto_publish - computed: true, optional: false, required: false
  public get autoPublish() {
    return this.getBooleanAttribute('auto_publish');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_code - computed: true, optional: false, required: false
  public get functionCode() {
    return this.getStringAttribute('function_code');
  }

  // function_config - computed: true, optional: false, required: false
  public get functionConfig() {
    return this.interpolationForAttribute('function_config') as any;
  }

  // function_metadata - computed: true, optional: false, required: false
  public get functionMetadata() {
    return this.interpolationForAttribute('function_metadata') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
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
