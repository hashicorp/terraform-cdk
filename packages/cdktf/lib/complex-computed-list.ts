import { Node } from "constructs";
import { Token } from "./tokens"
import { TerraformResource } from "./terraform-resource";

abstract class ComplexComputedAttribute {
  constructor(protected terraformResource: TerraformResource, protected terraformAttribute: string) {}

  public getStringAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute));
  }

  public getNumberAttribute(terraformAttribute: string) {
    return Token.asNumber(this.interpolationForAttribute(terraformAttribute));
  }

  public getListAttribute(terraformAttribute: string) {
    return Token.asList(this.interpolationForAttribute(terraformAttribute));
  }

  protected abstract interpolationForAttribute(terraformAttribute: string): string
}

export class StringMap {
  constructor(protected terraformResource: TerraformResource, protected terraformAttribute: string) {}

  public lookup(key: string): string {
    return Token.asString(`\${${this.terraformResource.terraformResourceType}.${Node.of(this.terraformResource).uniqueId}.${this.terraformAttribute}["${key}"]}`)
  }
}

export class NumberMap {
  constructor(protected terraformResource: TerraformResource, protected terraformAttribute: string) {}

  public lookup(key: string): number {
    return Token.asNumber(`\${${this.terraformResource.terraformResourceType}.${Node.of(this.terraformResource).uniqueId}.${this.terraformAttribute}["${key}"]`)
  }
}

export class BooleanMap {
  constructor(protected terraformResource: TerraformResource, protected terraformAttribute: string) {}

  public lookup(key: string): boolean {
    return Token.asString(`\${${this.terraformResource.terraformResourceType}.${Node.of(this.terraformResource).uniqueId}.${this.terraformAttribute}["${key}"]`) as any as boolean
  }
}

export class ComplexComputedList extends ComplexComputedAttribute {
  constructor(protected terraformResource: TerraformResource, protected terraformAttribute: string, protected index: string) {
    super(terraformResource, terraformAttribute)
  }

  protected interpolationForAttribute(property: string) {
    return `\${${this.terraformResource.terraformResourceType}.${Node.of(this.terraformResource).uniqueId}.${this.terraformAttribute}.${this.index}.${property}}`;
  }
}
