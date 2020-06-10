import { Construct, Node } from "constructs";
import { makeUniqueId } from './private/unique'

export interface TerraformElementMetadata {
  readonly path: string;
  readonly uniqueId: string;
  readonly stackTrace: string[];
}

export class TerraformElement extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    Node.of(this).addMetadata('stacktrace', 'trace')
  }

  public toTerraform(): any {
    return { };
  }

  public get friendlyUniqueId() {
    const node = Node.of(this)
    const components = node.scopes.slice(1).map(c => Node.of(c).id);
    return components.length > 0 ? makeUniqueId(components) : '';
  }

  protected get nodeMetadata(): {[key: string]: any} {
    return {
      metadata: {
        path: Node.of(this).path,
        uniqueId: this.friendlyUniqueId,
        stackTrace: Node.of(this).metadata.find((e) => e.type === 'stacktrace')?.trace
      } as TerraformElementMetadata
    }
  }
}