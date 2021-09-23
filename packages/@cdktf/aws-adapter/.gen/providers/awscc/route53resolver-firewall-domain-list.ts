// https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function route53ResolverFirewallDomainListTagsToTerraform(struct?: Route53ResolverFirewallDomainListTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list}
*/
export class Route53ResolverFirewallDomainList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_firewall_domain_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_domain_list.html awscc_route53resolver_firewall_domain_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallDomainListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallDomainListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_firewall_domain_list',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainFileUrl = config.domainFileUrl;
    this._domains = config.domains;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator_request_id - computed: true, optional: false, required: false
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }

  // domain_count - computed: true, optional: false, required: false
  public get domainCount() {
    return this.getNumberAttribute('domain_count');
  }

  // domain_file_url - computed: false, optional: true, required: false
  private _domainFileUrl?: string;
  public get domainFileUrl() {
    return this.getStringAttribute('domain_file_url');
  }
  public set domainFileUrl(value: string ) {
    this._domainFileUrl = value;
  }
  public resetDomainFileUrl() {
    this._domainFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFileUrlInput() {
    return this._domainFileUrl
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[];
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[] ) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_owner_name - computed: true, optional: false, required: false
  public get managedOwnerName() {
    return this.getStringAttribute('managed_owner_name');
  }

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Route53ResolverFirewallDomainListTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53ResolverFirewallDomainListTags[] ) {
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
      domain_file_url: cdktf.stringToTerraform(this._domainFileUrl),
      domains: cdktf.listMapper(cdktf.stringToTerraform)(this._domains),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(route53ResolverFirewallDomainListTagsToTerraform)(this._tags),
    };
  }
}
