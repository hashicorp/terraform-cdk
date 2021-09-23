import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html#resource_id Route53ResolverResolverDnssecConfig#resource_id}
    */
    readonly resourceId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config}
*/
export declare class Route53ResolverResolverDnssecConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverResolverDnssecConfigConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53ResolverResolverDnssecConfigConfig);
    get id(): string;
    get ownerId(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    resetResourceId(): void;
    get resourceIdInput(): string | undefined;
    get validationStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
