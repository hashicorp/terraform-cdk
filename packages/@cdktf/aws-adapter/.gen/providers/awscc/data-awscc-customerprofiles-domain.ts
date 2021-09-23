// https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html#id DataAwsccCustomerprofilesDomain#id}
  */
  readonly id: string;
}
export class DataAwsccCustomerprofilesDomainTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCustomerprofilesDomainTagsToTerraform(struct?: DataAwsccCustomerprofilesDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html awscc_customerprofiles_domain}
*/
export class DataAwsccCustomerprofilesDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html awscc_customerprofiles_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesDomainConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dead_letter_queue_url - computed: true, optional: false, required: false
  public get deadLetterQueueUrl() {
    return this.getStringAttribute('dead_letter_queue_url');
  }

  // default_encryption_key - computed: true, optional: false, required: false
  public get defaultEncryptionKey() {
    return this.getStringAttribute('default_encryption_key');
  }

  // default_expiration_days - computed: true, optional: false, required: false
  public get defaultExpirationDays() {
    return this.getNumberAttribute('default_expiration_days');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
