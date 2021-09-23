// https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMacieCustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html#id DataAwsccMacieCustomDataIdentifier#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html awscc_macie_custom_data_identifier}
*/
export class DataAwsccMacieCustomDataIdentifier extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_macie_custom_data_identifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html awscc_macie_custom_data_identifier} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMacieCustomDataIdentifierConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMacieCustomDataIdentifierConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_macie_custom_data_identifier',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ignore_words - computed: true, optional: false, required: false
  public get ignoreWords() {
    return this.getListAttribute('ignore_words');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // maximum_match_distance - computed: true, optional: false, required: false
  public get maximumMatchDistance() {
    return this.getNumberAttribute('maximum_match_distance');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
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
