// https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2WebAclAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html#resource_arn Wafv2WebAclAssociation#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html#web_acl_arn Wafv2WebAclAssociation#web_acl_arn}
  */
  readonly webAclArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html awscc_wafv2_web_acl_association}
*/
export class Wafv2WebAclAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_wafv2_web_acl_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html awscc_wafv2_web_acl_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wafv2_web_acl_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceArn = config.resourceArn;
    this._webAclArn = config.webAclArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
  }

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn: string;
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      web_acl_arn: cdktf.stringToTerraform(this._webAclArn),
    };
  }
}
