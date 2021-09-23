import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53DnssecConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_dnssec.html#id DataAwsccRoute53Dnssec#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_dnssec.html awscc_route53_dnssec}
*/
export declare class DataAwsccRoute53Dnssec extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_dnssec.html awscc_route53_dnssec} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53DnssecConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53DnssecConfig);
    get hostedZoneId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
