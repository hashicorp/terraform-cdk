import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_domain_list.html#id DataAwsccRoute53ResolverFirewallDomainList#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53ResolverFirewallDomainListTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRoute53ResolverFirewallDomainListTagsToTerraform(struct?: DataAwsccRoute53ResolverFirewallDomainListTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list}
*/
export declare class DataAwsccRoute53ResolverFirewallDomainList extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverFirewallDomainListConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallDomainListConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get domainCount(): number;
    get domainFileUrl(): string;
    get domains(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get managedOwnerName(): string;
    get modificationTime(): string;
    get name(): string;
    get status(): string;
    get statusMessage(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
