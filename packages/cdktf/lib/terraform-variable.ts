import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { Token } from "./tokens";

export interface TerraformVariableConfig {
    readonly default?: any;
    readonly description?: string;
    readonly type?: IVariableType;
}

export interface IVariableType {
    /**
     * @internal
     */
    _render(): string;
}

export class PrimitiveVariableType implements IVariableType {
    public static readonly STRING = new PrimitiveVariableType('string');
    public static readonly NUMBER = new PrimitiveVariableType('number');
    public static readonly BOOL = new PrimitiveVariableType('bool');
    public static readonly ANY = new PrimitiveVariableType('any');

    constructor(private readonly type: string) {

    }

    /**
     * @internal
     */
    _render(): string {
        return this.type;
    }
}

export enum CollectionType {
    LIST = 'list',
    MAP = 'map',
    SET = 'set'
}

export class CollectionVariableType implements IVariableType {

    public static readonly LIST = new CollectionVariableType(CollectionType.LIST);
    public static readonly MAP = new CollectionVariableType(CollectionType.MAP);
    public static readonly SET = new CollectionVariableType(CollectionType.SET);

    public static readonly LIST_STRING = new CollectionVariableType(CollectionType.LIST, PrimitiveVariableType.STRING);
    public static readonly LIST_NUMBER = new CollectionVariableType(CollectionType.LIST, PrimitiveVariableType.NUMBER);
    public static readonly LIST_BOOL = new CollectionVariableType(CollectionType.LIST, PrimitiveVariableType.BOOL);

    public static readonly MAP_STRING = new CollectionVariableType(CollectionType.MAP, PrimitiveVariableType.STRING);
    public static readonly MAP_NUMBER = new CollectionVariableType(CollectionType.MAP, PrimitiveVariableType.NUMBER);
    public static readonly MAP_BOOL = new CollectionVariableType(CollectionType.MAP, PrimitiveVariableType.BOOL);

    public static readonly SET_STRING = new CollectionVariableType(CollectionType.SET, PrimitiveVariableType.STRING);
    public static readonly SET_NUMBER = new CollectionVariableType(CollectionType.SET, PrimitiveVariableType.NUMBER);
    public static readonly SET_BOOL = new CollectionVariableType(CollectionType.SET, PrimitiveVariableType.BOOL);

    constructor(public readonly collectionType: CollectionType, public readonly elementType?: IVariableType) {
    }

    public of(elementType: IVariableType): CollectionVariableType {
        return new CollectionVariableType(this.collectionType, elementType);
    }

    /**
     * @internal
     */
    _render(): string {
        return `${this.collectionType}(${(this.elementType ?? PrimitiveVariableType.ANY)._render()})`;
    }
}

export class TupleVariableType implements IVariableType {
    constructor(public readonly elements: IVariableType[]) {

    }

    /**
     * @internal
     */
    _render(): string {
        return `tuple(${this.elements.map(e => e._render()).join(", ")})`;
    }
}

export class ObjectVariableType implements IVariableType {
    constructor(public readonly attributes: { [k: string]: IVariableType }) {

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
    public readonly type?: IVariableType;

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