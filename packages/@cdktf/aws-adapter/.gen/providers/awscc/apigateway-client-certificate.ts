// https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayClientCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the client certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#description ApigatewayClientCertificate#description}
  */
  readonly description?: string;
  /**
  * An array of arbitrary tags (key-value pairs) to associate with the client certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#tags ApigatewayClientCertificate#tags}
  */
  readonly tags?: ApigatewayClientCertificateTags[];
}
export interface ApigatewayClientCertificateTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#key ApigatewayClientCertificate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#value ApigatewayClientCertificate#value}
  */
  readonly value: string;
}

export function apigatewayClientCertificateTagsToTerraform(struct?: ApigatewayClientCertificateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html awscc_apigateway_client_certificate}
*/
export class ApigatewayClientCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_client_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html awscc_apigateway_client_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayClientCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApigatewayClientCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_client_certificate',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_id - computed: true, optional: false, required: false
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ApigatewayClientCertificateTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApigatewayClientCertificateTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      tags: cdktf.listMapper(apigatewayClientCertificateTagsToTerraform)(this._tags),
    };
  }
}
