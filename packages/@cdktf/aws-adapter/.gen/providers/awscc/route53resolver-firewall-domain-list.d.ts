import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
    /**
    * S3 URL to import domains from.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#domain_file_url Route53ResolverFirewallDomainList#domain_file_url}
    */
    readonly domainFileUrl?: string;
    /**
    * An inline list of domains to use for this domain list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#domains Route53ResolverFirewallDomainList#domains}
    */
    readonly domains?: string[];
    /**
    * FirewallDomainListName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#name Route53ResolverFirewallDomainList#name}
    */
    readonly name?: string;
    /**
    * Tags
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#tags Route53ResolverFirewallDomainList#tags}
    */
    readonly tags?: Route53ResolverFirewallDomainListTags[];
}
export interface Route53ResolverFirewallDomainListTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#key Route53ResolverFirewallDomainList#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html#value Route53ResolverFirewallDomainList#value}
    */
    readonly value: string;
}
export declare function route53ResolverFirewallDomainListTagsToTerraform(struct?: Route53ResolverFirewallDomainListTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list}
*/
export declare class Route53ResolverFirewallDomainList extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallDomainListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53ResolverFirewallDomainListConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get domainCount(): number;
    private _domainFileUrl?;
    get domainFileUrl(): string;
    set domainFileUrl(value: string);
    resetDomainFileUrl(): void;
    get domainFileUrlInput(): string | undefined;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    resetDomains(): void;
    get domainsInput(): string[] | undefined;
    get id(): string;
    get managedOwnerName(): string;
    get modificationTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get status(): string;
    get statusMessage(): string;
    private _tags?;
    get tags(): Route53ResolverFirewallDomainListTags[];
    set tags(value: Route53ResolverFirewallDomainListTags[]);
    resetTags(): void;
    get tagsInput(): Route53ResolverFirewallDomainListTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
