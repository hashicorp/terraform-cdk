// https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the alias.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#description GameliftAlias#description}
  */
  readonly description?: string;
  /**
  * A descriptive label that is associated with an alias. Alias names do not need to be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#name GameliftAlias#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#routing_strategy GameliftAlias#routing_strategy}
  */
  readonly routingStrategy: GameliftAliasRoutingStrategy;
}
export interface GameliftAliasRoutingStrategy {
  /**
  * A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#fleet_id GameliftAlias#fleet_id}
  */
  readonly fleetId?: string;
  /**
  * The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#message GameliftAlias#message}
  */
  readonly message?: string;
  /**
  * Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html#type GameliftAlias#type}
  */
  readonly type: string;
}

export function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fleet_id: cdktf.stringToTerraform(struct!.fleetId),
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html awscc_gamelift_alias}
*/
export class GameliftAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_gamelift_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html awscc_gamelift_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftAliasConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_alias',
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
    this._routingStrategy = config.routingStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_id - computed: true, optional: false, required: false
  public get aliasId() {
    return this.getStringAttribute('alias_id');
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

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy: GameliftAliasRoutingStrategy;
  public get routingStrategy() {
    return this.interpolationForAttribute('routing_strategy') as any;
  }
  public set routingStrategy(value: GameliftAliasRoutingStrategy) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      routing_strategy: gameliftAliasRoutingStrategyToTerraform(this._routingStrategy),
    };
  }
}
