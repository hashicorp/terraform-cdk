import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53DnssecConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique string (ID) used to identify a hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html#hosted_zone_id Route53Dnssec#hosted_zone_id}
    */
    readonly hostedZoneId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html awscc_route53_dnssec}
*/
export declare class Route53Dnssec extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html awscc_route53_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DnssecConfig
    */
    constructor(scope: Construct, id: string, config: Route53DnssecConfig);
    private _hostedZoneId;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
