import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { Token } from "./tokens";

export interface TerraformVariableConfig {
    readonly default?: any;
    readonly description?: string;
    readonly type?: VariableType;
}

export type VariableType = PrimitiveVariableType | ComplexVariableType;
export type ComplexVariableType = CollectionVariableType | TupleVariableType | ObjectVariableType;

export enum PrimitiveVariableType {
    STRING = 'string',
    NUMBER = 'number',
    BOOL = 'bool',
    ANY = 'any'
}

export enum CollectionType {
    LIST = 'list',
    MAP = 'map',
    SET = 'set'
}

export interface CollectionVariableType {
    readonly collectionType: CollectionType;
    readonly elementType?: VariableType;
}

export interface TupleVariableType {
    readonly elements: VariableType[];
}

export interface ObjectVariableType {
    readonly attributes: {[key: string]: VariableType};
}

export class TerraformVariable extends TerraformElement {
    public readonly default?: any;
    public readonly description?: string;
    public readonly type?: VariableType;

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

    public toTerraform(): any {
        return {
            variable: {
                [this.friendlyUniqueId]: deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides)
            }
        };
    }

    public synthesizeAttributes(): { [key: string]: any } {
        return {
            default: this.default,
            description: this.description,
            type: this.renderType(this.type)
        }
    }

    private renderType(type?: VariableType): string | undefined {
        if (type === null) {
            return undefined;
        }
        else if(this.isCollectionType(type)) {
            return `${type.collectionType}(${this.renderType(type.elementType)})`;
        }
        else if(this.isTupleType(type)) {
            return `tuple(${type.elements.map(e => this.renderType(e)).join(", ")})`;
        }
        else if(this.isObjectType(type)) {
            return `object({${Object.keys(type.attributes).map(k => k + "=" + this.renderType(type.attributes[k])).join(", ")}})`;
        }
        else {
            return type?.toString();
        }
    }

    private isCollectionType(type?: VariableType): type is CollectionVariableType {
        return (type as CollectionVariableType)?.collectionType !== undefined;
    }

    private isTupleType(type?: VariableType): type is TupleVariableType {
        return (type as TupleVariableType)?.elements !== undefined;
    }

    private isObjectType(type?: VariableType): type is ObjectVariableType {
        return (type as ObjectVariableType)?.attributes !== undefined;
    }
}