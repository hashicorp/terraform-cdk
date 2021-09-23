import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class Wafv2WebAclAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_web_acl_association.html awscc_wafv2_web_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclAssociationConfig);
    get id(): string;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _webAclArn;
    get webAclArn(): string;
    set webAclArn(value: string);
    get webAclArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
