import { Struct } from "./struct";

export interface AttributeTypeModelOptions {
  struct?: Struct;
  isList?: boolean;
  isComputed?: boolean;
  isOptional?: boolean;
  isRequired?: boolean;
  isMap?: boolean;
  level?: number;
  isSet?: boolean;
}

export enum TokenizableTypes {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  DYNAMIC = "dynamic",
}

export class AttributeTypeModel {
  public isList: boolean;
  public isComputed: boolean;
  public isOptional: boolean;
  public isRequired?: boolean;
  public isMap: boolean;
  public struct?: Struct;
  public level?: number;
  public isSet: boolean;

  constructor(private _type: string, options: AttributeTypeModelOptions) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.isRequired = !!options.isRequired;
    this.level = options.level;
    this.struct = options.struct;
    this.isSet = !!options.isSet;
  }

  public get name(): string {
    if (this.isCollection) {
      switch (this._type) {
        case TokenizableTypes.STRING:
          return `cdktf.TerraformString${this.collectionType}`;
        case TokenizableTypes.NUMBER:
          return `cdktf.TerraformNumber${this.collectionType}`;
        case TokenizableTypes.BOOLEAN:
          return `cdktf.TerraformBoolean${this.collectionType}`;
        default:
          if (this.struct) {
            return `Terraform${this._type}${this.collectionType}`;
          } else {
            // May support some other types in the future
            return `cdktf.TerraformAny${this.collectionType}`;
          }
      }
    } else if (this.struct) {
      return `Terraform${this._type}`;
    } else {
      switch (this._type) {
        case TokenizableTypes.STRING:
          return `cdktf.TerraformString`;
        case TokenizableTypes.NUMBER:
          return `cdktf.TerraformNumber`;
        case TokenizableTypes.BOOLEAN:
          return `cdktf.TerraformBoolean`;
        case TokenizableTypes.DYNAMIC:
          return `cdktf.TerraformDynamic`;
        default:
          // I don't think this is possible, but just in case
          return `cdktf.TerraformAny`;
      }
    }
  }

  public get attributeName(): string {
    return `${this.name}Attribute`;
  }

  public get isComplex(): boolean {
    return !!this.struct || (this.isMap && this.isComputed);
  }

  public get isCollection(): boolean {
    return this.isList || this.isMap || this.isSet;
  }

  public get collectionType(): string | undefined {
    if (this.isList) {
      return "List";
    } else if (this.isMap) {
      return "Map";
    } else if (this.isSet) {
      return "Set";
    } else {
      return undefined;
    }
  }

  public get isString(): boolean {
    return this._type === TokenizableTypes.STRING;
  }

  public get isNumber(): boolean {
    return this._type === TokenizableTypes.NUMBER;
  }

  public get isBoolean(): boolean {
    return this._type === TokenizableTypes.BOOLEAN;
  }

  public get isStringList(): boolean {
    return this.isList && this._type === TokenizableTypes.STRING;
  }

  public get isNumberList(): boolean {
    return this.isList && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanList(): boolean {
    return this.isList && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isStringMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.STRING;
  }

  public get isNumberMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isStringSet(): boolean {
    return this.isSet && this._type === TokenizableTypes.STRING;
  }

  public get isNumberSet(): boolean {
    return this.isSet && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanSet(): boolean {
    return this.isSet && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isComputedComplex(): boolean {
    return this.isRootType && this.isComputed && this.isComplex;
  }

  public get isRootType(): boolean {
    return this.level === 2;
  }

  public get innerType() {
    return this._type;
  }
}
