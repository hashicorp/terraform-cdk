// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The change description of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#change_description ImagebuilderComponent#change_description}
  */
  readonly changeDescription?: string;
  /**
  * The data of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#data ImagebuilderComponent#data}
  */
  readonly data?: string;
  /**
  * The description of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#description ImagebuilderComponent#description}
  */
  readonly description?: string;
  /**
  * The KMS key identifier used to encrypt the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#kms_key_id ImagebuilderComponent#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The name of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#name ImagebuilderComponent#name}
  */
  readonly name: string;
  /**
  * The platform of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#platform ImagebuilderComponent#platform}
  */
  readonly platform: string;
  /**
  * The operating system (OS) version supported by the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#supported_os_versions ImagebuilderComponent#supported_os_versions}
  */
  readonly supportedOsVersions?: string[];
  /**
  * The tags associated with the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#tags ImagebuilderComponent#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The uri of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#uri ImagebuilderComponent#uri}
  */
  readonly uri?: string;
  /**
  * The version of the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html#version ImagebuilderComponent#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html awscc_imagebuilder_component}
*/
export class ImagebuilderComponent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_component";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_component.html awscc_imagebuilder_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_component',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._changeDescription = config.changeDescription;
    this._data = config.data;
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._platform = config.platform;
    this._supportedOsVersions = config.supportedOsVersions;
    this._tags = config.tags;
    this._uri = config.uri;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // change_description - computed: true, optional: true, required: false
  private _changeDescription?: string;
  public get changeDescription() {
    return this.getStringAttribute('change_description');
  }
  public set changeDescription(value: string) {
    this._changeDescription = value;
  }
  public resetChangeDescription() {
    this._changeDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDescriptionInput() {
    return this._changeDescription
  }

  // data - computed: true, optional: true, required: false
  private _data?: string;
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
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

  // platform - computed: false, optional: false, required: true
  private _platform: string;
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform
  }

  // supported_os_versions - computed: true, optional: true, required: false
  private _supportedOsVersions?: string[];
  public get supportedOsVersions() {
    return this.getListAttribute('supported_os_versions');
  }
  public set supportedOsVersions(value: string[]) {
    this._supportedOsVersions = value;
  }
  public resetSupportedOsVersions() {
    this._supportedOsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedOsVersionsInput() {
    return this._supportedOsVersions
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string;
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_description: cdktf.stringToTerraform(this._changeDescription),
      data: cdktf.stringToTerraform(this._data),
      description: cdktf.stringToTerraform(this._description),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      supported_os_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedOsVersions),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      uri: cdktf.stringToTerraform(this._uri),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
