import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWafv2WebAclAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_web_acl_association.html#id DataAwsccWafv2WebAclAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_web_acl_association.html awscc_wafv2_web_acl_association}
*/
export declare class DataAwsccWafv2WebAclAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_web_acl_association.html awscc_wafv2_web_acl_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWafv2WebAclAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccWafv2WebAclAssociationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resourceArn(): string;
    get webAclArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
