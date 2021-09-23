// https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieCustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of custom data identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#description MacieCustomDataIdentifier#description}
  */
  readonly description?: string;
  /**
  * Words to be ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#ignore_words MacieCustomDataIdentifier#ignore_words}
  */
  readonly ignoreWords?: string[];
  /**
  * Keywords to be matched against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#keywords MacieCustomDataIdentifier#keywords}
  */
  readonly keywords?: string[];
  /**
  * Maximum match distance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#maximum_match_distance MacieCustomDataIdentifier#maximum_match_distance}
  */
  readonly maximumMatchDistance?: number;
  /**
  * Name of custom data identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#name MacieCustomDataIdentifier#name}
  */
  readonly name: string;
  /**
  * Regular expression for custom data identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#regex MacieCustomDataIdentifier#regex}
  */
  readonly regex: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html awscc_macie_custom_data_identifier}
*/
export class MacieCustomDataIdentifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_macie_custom_data_identifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html awscc_macie_custom_data_identifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieCustomDataIdentifierConfig
  */
  public constructor(scope: Construct, id: string, config: MacieCustomDataIdentifierConfig) {
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
    this._description = config.description;
    this._ignoreWords = config.ignoreWords;
    this._keywords = config.keywords;
    this._maximumMatchDistance = config.maximumMatchDistance;
    this._name = config.name;
    this._regex = config.regex;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_words - computed: true, optional: true, required: false
  private _ignoreWords?: string[];
  public get ignoreWords() {
    return this.getListAttribute('ignore_words');
  }
  public set ignoreWords(value: string[]) {
    this._ignoreWords = value;
  }
  public resetIgnoreWords() {
    this._ignoreWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWordsInput() {
    return this._ignoreWords
  }

  // keywords - computed: true, optional: true, required: false
  private _keywords?: string[];
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords
  }

  // maximum_match_distance - computed: true, optional: true, required: false
  private _maximumMatchDistance?: number;
  public get maximumMatchDistance() {
    return this.getNumberAttribute('maximum_match_distance');
  }
  public set maximumMatchDistance(value: number) {
    this._maximumMatchDistance = value;
  }
  public resetMaximumMatchDistance() {
    this._maximumMatchDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMatchDistanceInput() {
    return this._maximumMatchDistance
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // regex - computed: false, optional: false, required: true
  private _regex: string;
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ignore_words: cdktf.listMapper(cdktf.stringToTerraform)(this._ignoreWords),
      keywords: cdktf.listMapper(cdktf.stringToTerraform)(this._keywords),
      maximum_match_distance: cdktf.numberToTerraform(this._maximumMatchDistance),
      name: cdktf.stringToTerraform(this._name),
      regex: cdktf.stringToTerraform(this._regex),
    };
  }
}
