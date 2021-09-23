import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategy): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html awscc_gamelift_alias}
*/
export declare class GameliftAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_alias.html awscc_gamelift_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftAliasConfig
    */
    constructor(scope: Construct, id: string, config: GameliftAliasConfig);
    get aliasId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routingStrategy;
    get routingStrategy(): GameliftAliasRoutingStrategy;
    set routingStrategy(value: GameliftAliasRoutingStrategy);
    get routingStrategyInput(): GameliftAliasRoutingStrategy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
