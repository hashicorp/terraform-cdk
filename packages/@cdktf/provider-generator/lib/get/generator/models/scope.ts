export interface ScopeProps {
  readonly name: string;
  readonly isProvider: boolean;
  readonly isComputed?: boolean;
  readonly isOptional?: boolean;
  readonly isRequired?: boolean;
  readonly inBlockType?: boolean;
  readonly isNestedType?: boolean;
  readonly parent?: Scope;
}

export class Scope {
  public readonly name: string;
  public readonly parent?: Scope;
  public readonly isProvider: boolean;
  public isComputed: boolean;
  public isOptional: boolean;
  public isRequired: boolean;
  public inBlockType: boolean;
  public isNestedType: boolean;

  constructor(props: ScopeProps) {
    this.name = props.name;
    this.parent = props.parent;
    this.isProvider = props.isProvider;
    this.isComputed = props.isComputed ?? false;
    this.isOptional = props.isOptional ?? true;
    this.isRequired = props.isRequired ?? false;
    this.inBlockType = props.inBlockType ?? false;
    this.isNestedType = props.isNestedType ?? false;
  }

  public fullName(attributeName: string) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let scope: Scope | undefined = this;
    let name = attributeName;
    while (scope) {
      name = `${scope.name}.${name}`;
      scope = scope.parent;
    }
    return name;
  }
}
