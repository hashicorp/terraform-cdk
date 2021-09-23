// https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamVirtualMfaDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#path IamVirtualMfaDevice#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#tags IamVirtualMfaDevice#tags}
  */
  readonly tags?: IamVirtualMfaDeviceTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#users IamVirtualMfaDevice#users}
  */
  readonly users: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}
  */
  readonly virtualMfaDeviceName?: string;
}
export interface IamVirtualMfaDeviceTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#key IamVirtualMfaDevice#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#value IamVirtualMfaDevice#value}
  */
  readonly value: string;
}

export function iamVirtualMfaDeviceTagsToTerraform(struct?: IamVirtualMfaDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device}
*/
export class IamVirtualMfaDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iam_virtual_mfa_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamVirtualMfaDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IamVirtualMfaDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iam_virtual_mfa_device',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._path = config.path;
    this._tags = config.tags;
    this._users = config.users;
    this._virtualMfaDeviceName = config.virtualMfaDeviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: true, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IamVirtualMfaDeviceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IamVirtualMfaDeviceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // users - computed: false, optional: false, required: true
  private _users: string[];
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users
  }

  // virtual_mfa_device_name - computed: true, optional: true, required: false
  private _virtualMfaDeviceName?: string;
  public get virtualMfaDeviceName() {
    return this.getStringAttribute('virtual_mfa_device_name');
  }
  public set virtualMfaDeviceName(value: string) {
    this._virtualMfaDeviceName = value;
  }
  public resetVirtualMfaDeviceName() {
    this._virtualMfaDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMfaDeviceNameInput() {
    return this._virtualMfaDeviceName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
      tags: cdktf.listMapper(iamVirtualMfaDeviceTagsToTerraform)(this._tags),
      users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
      virtual_mfa_device_name: cdktf.stringToTerraform(this._virtualMfaDeviceName),
    };
  }
}
