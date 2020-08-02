import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { Token } from "./tokens";

export interface TerraformVariableConfig {
    readonly default?: any;
    readonly description?: string;
    readonly type?: ITerraformVariableType;
}

export interface ITerraformVariableType {
    /**
     * @internal
     */
    _render(): string;
}

export class TerraformPrimitiveVariableType implements ITerraformVariableType {
    public static readonly STRING = new TerraformPrimitiveVariableType('string');
    public static readonly NUMBER = new TerraformPrimitiveVariableType('number');
    public static readonly BOOL = new TerraformPrimitiveVariableType('bool');
    public static readonly ANY = new TerraformPrimitiveVariableType('any');

    constructor(private readonly type: string) {

    }

    /**
     * @internal
     */
    _render(): string {
        return this.type;
    }
}

export enum TerraformCollectionType {
    LIST = 'list',
    MAP = 'map',
    SET = 'set'
}

export class TerraformCollectionVariableType implements ITerraformVariableType {
    constructor(public readonly collectionType: TerraformCollectionType, public readonly elementType: ITerraformVariableType) {
    }

    /**
     * @internal
     */
    _render(): string {
        return `list(${this.elementType._render()})`;
    }
}

export class TerraformTupleVariableType implements ITerraformVariableType {
    constructor(public readonly elements: ITerraformVariableType[]) {

    }

    /**
     * @internal
     */
    _render(): string {
        return `tuple(${this.elements.map(e => e._render()).join(", ")})`;
    }
}

export class TerraformObjectVariableType implements ITerraformVariableType {
    constructor(public readonly attributes: { [k: string]: ITerraformVariableType }) {

    }

    /**
     * @internal
     */
    _render(): string {
        return `object({${Object.keys(this.attributes).map(k => k + "=" + this.attributes[k]._render()).join(", ")}})`;
    }
}

export class TerraformVariable extends TerraformElement {
    public readonly default?: any;
    public readonly description?: string;
    public readonly type?: ITerraformVariableType;

    constructor(scope: Construct, id: string, config: TerraformVariableConfig) {
        super(scope, id);

        this.default = config.default;
        this.description = config.description;
        this.type = config.type;
    }

    public get stringValue(): string {
        return Token.asString(this.interpolation());
    }

    public get numberValue(): number {
        return Token.asNumber(this.interpolation());
    }

    public get listValue(): string[] {
        return Token.asList(this.interpolation());
    }

    public get booleanValue(): boolean {
        return Token.asString(this.interpolation()) as any as boolean
    }

    public get value(): any {
        return Token.asAny(this.interpolation());
    }

    private interpolation(): any {
        return `\${var.${this.friendlyUniqueId}}`
    }

    public synthesizeAttributes(): { [key: string]: any } {
        return {
            default: this.default,
            description: this.description,
            type: this.type?._render()
        }
    }

    public toTerraform(): any {
        return {
            variable: {
                [this.friendlyUniqueId]: deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides)
            }
        };
    }
}