// https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#description IotwirelessDestination#description}
  */
  readonly description?: string;
  /**
  * Destination expression
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#expression IotwirelessDestination#expression}
  */
  readonly expression: string;
  /**
  * Must be RuleName
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#expression_type IotwirelessDestination#expression_type}
  */
  readonly expressionType: string;
  /**
  * Unique name of destination
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#name IotwirelessDestination#name}
  */
  readonly name: string;
  /**
  * AWS role ARN that grants access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#role_arn IotwirelessDestination#role_arn}
  */
  readonly roleArn: string;
  /**
  * A list of key-value pairs that contain metadata for the destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#tags IotwirelessDestination#tags}
  */
  readonly tags?: IotwirelessDestinationTags[];
}
export interface IotwirelessDestinationTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#key IotwirelessDestination#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#value IotwirelessDestination#value}
  */
  readonly value?: string;
}

export function iotwirelessDestinationTagsToTerraform(struct?: IotwirelessDestinationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html awscc_iotwireless_destination}
*/
export class IotwirelessDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html awscc_iotwireless_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_destination',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._expression = config.expression;
    this._expressionType = config.expressionType;
    this._name = config.name;
    this._roleArn = config.roleArn;
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

  // expression - computed: false, optional: false, required: true
  private _expression: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression
  }

  // expression_type - computed: false, optional: false, required: true
  private _expressionType: string;
  public get expressionType() {
    return this.getStringAttribute('expression_type');
  }
  public set expressionType(value: string) {
    this._expressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionTypeInput() {
    return this._expressionType
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotwirelessDestinationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessDestinationTags[] ) {
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
      expression: cdktf.stringToTerraform(this._expression),
      expression_type: cdktf.stringToTerraform(this._expressionType),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(iotwirelessDestinationTagsToTerraform)(this._tags),
    };
  }
}
