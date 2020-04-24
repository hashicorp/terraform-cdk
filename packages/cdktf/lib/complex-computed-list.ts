import { Node, Token } from "constructs";
import { TerraformResource } from "./terraform-resource";

abstract class ComplexComputedAttribute {
  constructor(protected resource: TerraformResource, protected terraformAttribute: string) {}

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
  constructor(protected resource: TerraformResource, protected terraformAttribute: string) {}

  public lookup(key: string): string {
    return Token.asString(`\${lookup(${this.resource.type}.${Node.of(this.resource).uniqueId}.${this.terraformAttribute}, ${key})}`)
  }
}

export class ComplexComputedList extends ComplexComputedAttribute {
  constructor(protected resource: TerraformResource, protected terraformAttribute: string, protected index: string) {
    super(resource, terraformAttribute)
  }

  protected interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.resource.type}.${Node.of(this.resource).uniqueId}.${this.index}.${terraformAttribute}}`;
  }
}
