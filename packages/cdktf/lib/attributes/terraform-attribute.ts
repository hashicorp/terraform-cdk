import { ITerraformAddressable } from "../terraform-addressable";

export interface TerraformAttributeOptions {
  readonly nested?: TerraformAttribute;

  /**
   * @internal
   */
  readonly _operation?: { (fqn: string): string };
}

export abstract class TerraformAttribute implements ITerraformAddressable {
  protected nested?: TerraformAttribute;

  /**
   * @internal
   */
  protected readonly _operations: { (fqn: string): string }[] = [];

  public constructor(
    protected readonly parent: ITerraformAddressable,
    protected readonly attribute: string,
    protected realValue?: any,
    options?: TerraformAttributeOptions
  ) {
    if (options) {
      this.nested = options.nested;
      if (options._operation) {
        this._operations.push(options._operation);
      }
    }
  }

  public reset() {
    this.realValue = undefined;
    this.nested = undefined;
  }

  public toTerraform(): any {
    if (this.nested) {
      //only go up one level to maintain terraform dependencies
      return this.nested.terraformReference;
    } else {
      return this.valueToTerraform();
    }
  }

  public get fqn(): string {
    let reference = `${this.parent.fqn}.${this.attribute}`;
    this._operations.forEach((operation) => {
      reference = operation(reference);
    });
    return reference;
  }

  public get terraformReference(): string {
    return `\${${this.fqn}}`;
  }

  protected abstract valueToTerraform(): any;
}
