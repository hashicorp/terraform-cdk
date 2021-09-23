// https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#certificate_body IamServerCertificate#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#certificate_chain IamServerCertificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#path IamServerCertificate#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#private_key IamServerCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#server_certificate_name IamServerCertificate#server_certificate_name}
  */
  readonly serverCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#tags IamServerCertificate#tags}
  */
  readonly tags?: IamServerCertificateTags[];
}
export interface IamServerCertificateTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#key IamServerCertificate#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html#value IamServerCertificate#value}
  */
  readonly value: string;
}

export function iamServerCertificateTagsToTerraform(struct?: IamServerCertificateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate}
*/
export class IamServerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iam_server_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_server_certificate.html awscc_iam_server_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServerCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IamServerCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iam_server_certificate',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._path = config.path;
    this._privateKey = config.privateKey;
    this._serverCertificateName = config.serverCertificateName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_body - computed: true, optional: true, required: false
  private _certificateBody?: string;
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody
  }

  // certificate_chain - computed: true, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string ) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // server_certificate_name - computed: true, optional: true, required: false
  private _serverCertificateName?: string;
  public get serverCertificateName() {
    return this.getStringAttribute('server_certificate_name');
  }
  public set serverCertificateName(value: string) {
    this._serverCertificateName = value;
  }
  public resetServerCertificateName() {
    this._serverCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateNameInput() {
    return this._serverCertificateName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IamServerCertificateTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IamServerCertificateTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      path: cdktf.stringToTerraform(this._path),
      private_key: cdktf.stringToTerraform(this._privateKey),
      server_certificate_name: cdktf.stringToTerraform(this._serverCertificateName),
      tags: cdktf.listMapper(iamServerCertificateTagsToTerraform)(this._tags),
    };
  }
}
