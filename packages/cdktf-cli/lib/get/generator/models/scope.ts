export interface ScopeProps {
  readonly name: string;
  readonly isProvider: boolean;
  readonly isComputed?: boolean;
  readonly isOptional?: boolean;
  readonly isRequired?: boolean;
  readonly inBlockType?: boolean;
}

export class Scope {
  public readonly name: string;
  public readonly isProvider: boolean;
  public isComputed: boolean;
  public isOptional: boolean;
  public isRequired: boolean;
  public inBlockType: boolean;

  constructor(props: ScopeProps) {
    this.name = props.name;
    this.isProvider = props.isProvider;
    this.isComputed = props.isComputed ?? false;
    this.isOptional = props.isOptional ?? true;
    this.isRequired = props.isRequired ?? false;
    this.inBlockType = props.inBlockType ?? false;
  }
}
