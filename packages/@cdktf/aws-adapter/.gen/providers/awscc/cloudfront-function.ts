// https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#auto_publish CloudfrontFunction#auto_publish}
  */
  readonly autoPublish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_code CloudfrontFunction#function_code}
  */
  readonly functionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_config CloudfrontFunction#function_config}
  */
  readonly functionConfig?: CloudfrontFunctionFunctionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_metadata CloudfrontFunction#function_metadata}
  */
  readonly functionMetadata?: CloudfrontFunctionFunctionMetadata;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#name CloudfrontFunction#name}
  */
  readonly name: string;
}
export interface CloudfrontFunctionFunctionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#comment CloudfrontFunction#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#runtime CloudfrontFunction#runtime}
  */
  readonly runtime: string;
}

export function cloudfrontFunctionFunctionConfigToTerraform(struct?: CloudfrontFunctionFunctionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}

export interface CloudfrontFunctionFunctionMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_arn CloudfrontFunction#function_arn}
  */
  readonly functionArn: string;
}

export function cloudfrontFunctionFunctionMetadataToTerraform(struct?: CloudfrontFunctionFunctionMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function}
*/
export class CloudfrontFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig) {
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
    this._autoPublish = config.autoPublish;
    this._functionCode = config.functionCode;
    this._functionConfig = config.functionConfig;
    this._functionMetadata = config.functionMetadata;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_publish - computed: false, optional: true, required: false
  private _autoPublish?: boolean | cdktf.IResolvable;
  public get autoPublish() {
    return this.getBooleanAttribute('auto_publish');
  }
  public set autoPublish(value: boolean | cdktf.IResolvable ) {
    this._autoPublish = value;
  }
  public resetAutoPublish() {
    this._autoPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPublishInput() {
    return this._autoPublish
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_code - computed: false, optional: true, required: false
  private _functionCode?: string;
  public get functionCode() {
    return this.getStringAttribute('function_code');
  }
  public set functionCode(value: string ) {
    this._functionCode = value;
  }
  public resetFunctionCode() {
    this._functionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionCodeInput() {
    return this._functionCode
  }

  // function_config - computed: false, optional: true, required: false
  private _functionConfig?: CloudfrontFunctionFunctionConfig;
  public get functionConfig() {
    return this.interpolationForAttribute('function_config') as any;
  }
  public set functionConfig(value: CloudfrontFunctionFunctionConfig ) {
    this._functionConfig = value;
  }
  public resetFunctionConfig() {
    this._functionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionConfigInput() {
    return this._functionConfig
  }

  // function_metadata - computed: false, optional: true, required: false
  private _functionMetadata?: CloudfrontFunctionFunctionMetadata;
  public get functionMetadata() {
    return this.interpolationForAttribute('function_metadata') as any;
  }
  public set functionMetadata(value: CloudfrontFunctionFunctionMetadata ) {
    this._functionMetadata = value;
  }
  public resetFunctionMetadata() {
    this._functionMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionMetadataInput() {
    return this._functionMetadata
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
      auto_publish: cdktf.booleanToTerraform(this._autoPublish),
      function_code: cdktf.stringToTerraform(this._functionCode),
      function_config: cloudfrontFunctionFunctionConfigToTerraform(this._functionConfig),
      function_metadata: cloudfrontFunctionFunctionMetadataToTerraform(this._functionMetadata),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
