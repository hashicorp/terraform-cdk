// https://www.terraform.io/docs/providers/awscc/r/glue_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the registry. If description is not provided, there will not be any default value for this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#description GlueRegistry#description}
  */
  readonly description?: string;
  /**
  * Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#name GlueRegistry#name}
  */
  readonly name: string;
  /**
  * List of tags to tag the Registry
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#tags GlueRegistry#tags}
  */
  readonly tags?: GlueRegistryTags[];
}
export interface GlueRegistryTags {
  /**
  * A key to identify the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#key GlueRegistry#key}
  */
  readonly key: string;
  /**
  * Corresponding tag value for the key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#value GlueRegistry#value}
  */
  readonly value: string;
}

export function glueRegistryTagsToTerraform(struct?: GlueRegistryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html awscc_glue_registry}
*/
export class GlueRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html awscc_glue_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: GlueRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_registry',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // tags - computed: true, optional: true, required: false
  private _tags?: GlueRegistryTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GlueRegistryTags[]) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(glueRegistryTagsToTerraform)(this._tags),
    };
  }
}
