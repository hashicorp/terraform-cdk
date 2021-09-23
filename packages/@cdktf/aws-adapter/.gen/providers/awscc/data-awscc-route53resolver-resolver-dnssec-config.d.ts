import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html#id DataAwsccRoute53ResolverResolverDnssecConfig#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config}
*/
export declare class DataAwsccRoute53ResolverResolverDnssecConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverResolverDnssecConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverDnssecConfigConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ownerId(): string;
    get resourceId(): string;
    get validationStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
