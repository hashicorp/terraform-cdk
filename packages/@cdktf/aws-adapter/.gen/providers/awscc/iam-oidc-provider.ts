// https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOidcProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#client_id_list IamOidcProvider#client_id_list}
  */
  readonly clientIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#tags IamOidcProvider#tags}
  */
  readonly tags?: IamOidcProviderTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#thumbprint_list IamOidcProvider#thumbprint_list}
  */
  readonly thumbprintList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#url IamOidcProvider#url}
  */
  readonly url?: string;
}
export interface IamOidcProviderTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#key IamOidcProvider#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html#value IamOidcProvider#value}
  */
  readonly value: string;
}

export function iamOidcProviderTagsToTerraform(struct?: IamOidcProviderTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html awscc_iam_oidc_provider}
*/
export class IamOidcProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iam_oidc_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_oidc_provider.html awscc_iam_oidc_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOidcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamOidcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iam_oidc_provider',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientIdList = config.clientIdList;
    this._tags = config.tags;
    this._thumbprintList = config.thumbprintList;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_id_list - computed: false, optional: true, required: false
  private _clientIdList?: string[];
  public get clientIdList() {
    return this.getListAttribute('client_id_list');
  }
  public set clientIdList(value: string[] ) {
    this._clientIdList = value;
  }
  public resetClientIdList() {
    this._clientIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdListInput() {
    return this._clientIdList
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IamOidcProviderTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IamOidcProviderTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // thumbprint_list - computed: false, optional: false, required: true
  private _thumbprintList: string[];
  public get thumbprintList() {
    return this.getListAttribute('thumbprint_list');
  }
  public set thumbprintList(value: string[]) {
    this._thumbprintList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintListInput() {
    return this._thumbprintList
  }

  // url - computed: true, optional: true, required: false
  private _url?: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientIdList),
      tags: cdktf.listMapper(iamOidcProviderTagsToTerraform)(this._tags),
      thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform)(this._thumbprintList),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
