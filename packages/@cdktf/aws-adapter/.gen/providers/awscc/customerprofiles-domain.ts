// https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of the SQS dead letter queue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}
  */
  readonly deadLetterQueueUrl?: string;
  /**
  * The default encryption key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#default_encryption_key CustomerprofilesDomain#default_encryption_key}
  */
  readonly defaultEncryptionKey?: string;
  /**
  * The default number of days until the data within the domain expires.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#default_expiration_days CustomerprofilesDomain#default_expiration_days}
  */
  readonly defaultExpirationDays?: number;
  /**
  * The unique name of the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#domain_name CustomerprofilesDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * The tags (keys and values) associated with the domain
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#tags CustomerprofilesDomain#tags}
  */
  readonly tags?: CustomerprofilesDomainTags[];
}
export interface CustomerprofilesDomainTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#key CustomerprofilesDomain#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#value CustomerprofilesDomain#value}
  */
  readonly value: string;
}

export function customerprofilesDomainTagsToTerraform(struct?: CustomerprofilesDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html awscc_customerprofiles_domain}
*/
export class CustomerprofilesDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html awscc_customerprofiles_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_domain',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deadLetterQueueUrl = config.deadLetterQueueUrl;
    this._defaultEncryptionKey = config.defaultEncryptionKey;
    this._defaultExpirationDays = config.defaultExpirationDays;
    this._domainName = config.domainName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dead_letter_queue_url - computed: false, optional: true, required: false
  private _deadLetterQueueUrl?: string;
  public get deadLetterQueueUrl() {
    return this.getStringAttribute('dead_letter_queue_url');
  }
  public set deadLetterQueueUrl(value: string ) {
    this._deadLetterQueueUrl = value;
  }
  public resetDeadLetterQueueUrl() {
    this._deadLetterQueueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueUrlInput() {
    return this._deadLetterQueueUrl
  }

  // default_encryption_key - computed: false, optional: true, required: false
  private _defaultEncryptionKey?: string;
  public get defaultEncryptionKey() {
    return this.getStringAttribute('default_encryption_key');
  }
  public set defaultEncryptionKey(value: string ) {
    this._defaultEncryptionKey = value;
  }
  public resetDefaultEncryptionKey() {
    this._defaultEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionKeyInput() {
    return this._defaultEncryptionKey
  }

  // default_expiration_days - computed: false, optional: true, required: false
  private _defaultExpirationDays?: number;
  public get defaultExpirationDays() {
    return this.getNumberAttribute('default_expiration_days');
  }
  public set defaultExpirationDays(value: number ) {
    this._defaultExpirationDays = value;
  }
  public resetDefaultExpirationDays() {
    this._defaultExpirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationDaysInput() {
    return this._defaultExpirationDays
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CustomerprofilesDomainTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CustomerprofilesDomainTags[] ) {
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
      dead_letter_queue_url: cdktf.stringToTerraform(this._deadLetterQueueUrl),
      default_encryption_key: cdktf.stringToTerraform(this._defaultEncryptionKey),
      default_expiration_days: cdktf.numberToTerraform(this._defaultExpirationDays),
      domain_name: cdktf.stringToTerraform(this._domainName),
      tags: cdktf.listMapper(customerprofilesDomainTagsToTerraform)(this._tags),
    };
  }
}
