import { Token } from "./tokens";
import { ITerraformResource } from "./terraform-resource";

abstract class ComplexComputedAttribute {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string
  ) {}

  public getStringAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute));
  }

  public getNumberAttribute(terraformAttribute: string) {
    return Token.asNumber(this.interpolationForAttribute(terraformAttribute));
  }

  public getListAttribute(terraformAttribute: string) {
    return Token.asList(this.interpolationForAttribute(terraformAttribute));
  }

  public getBooleanAttribute(terraformAttribute: string) {
    return this.interpolationForAttribute(terraformAttribute);
  }

  protected abstract interpolationForAttribute(terraformAttribute: string): any;
}

export class StringMap {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string
  ) {}

  public lookup(key: string): string {
    return Token.asString(
      this.terraformResource.interpolationForAttribute(
        `${this.terraformAttribute}["${key}"]`
      )
    );
  }
}

export class NumberMap {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string
  ) {}

  public lookup(key: string): number {
    return Token.asNumber(
      this.terraformResource.interpolationForAttribute(
        `${this.terraformAttribute}["${key}"]`
      )
    );
  }
}

export class BooleanMap {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string
  ) {}

  public lookup(key: string): boolean {
    return Token.asString(
      this.terraformResource.interpolationForAttribute(
        `${this.terraformAttribute}["${key}"]`
      )
    ) as any as boolean;
  }
}

export class ComplexComputedList extends ComplexComputedAttribute {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string,
    protected complexComputedListIndex: string
  ) {
    super(terraformResource, terraformAttribute);
  }

  protected interpolationForAttribute(property: string) {
    return this.terraformResource.interpolationForAttribute(
      `${this.terraformAttribute}.${this.complexComputedListIndex}.${property}`
    );
  }
}

export class ComplexObject extends ComplexComputedAttribute {
  constructor(
    protected terraformResource: ITerraformResource,
    protected terraformAttribute: string,
    protected isSingleItem: boolean
  ) {
    super(terraformResource, terraformAttribute);
  }

  protected interpolationForAttribute(property: string) {
    return this.terraformResource.interpolationForAttribute(
      `${this.terraformAttribute}${this.isSingleItem ? "[0]" : ""}.${property}`
    );
  }

  protected interpolationAsList() {
    return this.terraformResource.interpolationForAttribute(
      `${this.terraformAttribute}.*`
    );
  }
}
