// https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#app_name SagemakerApp#app_name}
  */
  readonly appName: string;
  /**
  * The type of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#app_type SagemakerApp#app_type}
  */
  readonly appType: string;
  /**
  * The domain ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#domain_id SagemakerApp#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#resource_spec SagemakerApp#resource_spec}
  */
  readonly resourceSpec?: SagemakerAppResourceSpec;
  /**
  * A list of tags to apply to the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#tags SagemakerApp#tags}
  */
  readonly tags?: SagemakerAppTags[];
  /**
  * The user profile name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#user_profile_name SagemakerApp#user_profile_name}
  */
  readonly userProfileName: string;
}
export interface SagemakerAppResourceSpec {
  /**
  * The instance type that the image version runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#instance_type SagemakerApp#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#sage_maker_image_arn SagemakerApp#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#sage_maker_image_version_arn SagemakerApp#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export interface SagemakerAppTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#key SagemakerApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#value SagemakerApp#value}
  */
  readonly value: string;
}

export function sagemakerAppTagsToTerraform(struct?: SagemakerAppTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html awscc_sagemaker_app}
*/
export class SagemakerApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html awscc_sagemaker_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_app',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appName = config.appName;
    this._appType = config.appType;
    this._domainId = config.domainId;
    this._resourceSpec = config.resourceSpec;
    this._tags = config.tags;
    this._userProfileName = config.userProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_arn - computed: true, optional: false, required: false
  public get appArn() {
    return this.getStringAttribute('app_arn');
  }

  // app_name - computed: false, optional: false, required: true
  private _appName: string;
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName
  }

  // app_type - computed: false, optional: false, required: true
  private _appType: string;
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId: string;
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_spec - computed: false, optional: true, required: false
  private _resourceSpec?: SagemakerAppResourceSpec;
  public get resourceSpec() {
    return this.interpolationForAttribute('resource_spec') as any;
  }
  public set resourceSpec(value: SagemakerAppResourceSpec ) {
    this._resourceSpec = value;
  }
  public resetResourceSpec() {
    this._resourceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerAppTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerAppTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName: string;
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      app_type: cdktf.stringToTerraform(this._appType),
      domain_id: cdktf.stringToTerraform(this._domainId),
      resource_spec: sagemakerAppResourceSpecToTerraform(this._resourceSpec),
      tags: cdktf.listMapper(sagemakerAppTagsToTerraform)(this._tags),
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
    };
  }
}
