import { Node, Token } from "constructs";
import { TerraformResource } from "./terraform-resource";

export class ComplexComputedList {
  constructor(private resource: TerraformResource, private index: string) {}

  public getStringAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute));
  }

  public getNumberAttribute(terraformAttribute: string) {
    return Token.asNumber(this.interpolationForAttribute(terraformAttribute));
  }

  public getListAttribute(terraformAttribute: string) {
    return Token.asList(this.interpolationForAttribute(terraformAttribute));
  }

  private interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.resource.type}.${Node.of(this.resource).uniqueId}.${this.index}.${terraformAttribute}}`;
  }
}