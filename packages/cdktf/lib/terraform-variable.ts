import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { Token } from "./tokens";

export interface TerraformVariableConfig {
    readonly default?: any;
    readonly description?: string;
    readonly type?: VariableType;
}

export type VariableType = PrimitiveVariableType | CollectionVariableType | TupleVariableType | ObjectVariableType;

export enum PrimitiveVariableType {
    STRING = 'string',
    NUMBER = 'number',
    BOOL = 'bool',
    ANY = 'any'
}
const PrimitiveTypeVals = ['string', 'number', 'bool', 'any'] as const;

export enum CollectionType {
    LIST = 'list',
    MAP = 'map',
    SET = 'set'
}
const CollectionTypeVals = ['list', 'map', 'set'] as const;

export type CollectionVariableType = [CollectionType, VariableType];

export type TupleVariableType = VariableType[];

export interface ObjectVariableType {
    [key: string]: VariableType;
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
        if (type === null || type === undefined) {
            return undefined;
        }
        else if(this.isPrimitiveType(type)) {
            return type.toString();
        }
        else if(this.isCollectionType(type)) {
            return `${type[0]}(${this.renderType(type[1])})`;
        }
        else if(this.isTupleType(type)) {
            return `tuple(${type.map(e => this.renderType(e)).join(", ")})`;
        }
        else {
            return `object({${Object.keys(type).map(k => k + "=" + this.renderType(type[k])).join(", ")}})`;
        }
    }

    private isPrimitiveType(type: VariableType): type is PrimitiveVariableType {
        return PrimitiveTypeVals.find(val => val === type) !== undefined;
    }

    private isCollectionType(type: VariableType): type is CollectionVariableType {
        return CollectionTypeVals.find(val => val === type[0]) !== undefined;
    }

    private isTupleType(type: VariableType): type is TupleVariableType {
        return Array.isArray(type);
    }
}