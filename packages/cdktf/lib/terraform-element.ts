import { Construct, Node } from "constructs";
import { makeUniqueId } from './private/unique'
import { TerraformStack } from './terraform-stack'

export interface TerraformElementMetadata {
  readonly path: string;
  readonly uniqueId: string;
  readonly stackTrace: string[];
}

export class TerraformElement extends Construct {
  public readonly stack: TerraformStack;

  constructor(scope: Construct, id: string) {
    super(scope, id)

    this.node.addMetadata('stacktrace', 'trace')
    this.stack = TerraformStack.of(this);
  }

  public get node(): Node {
    return Node.of(this)
  }

  public toTerraform(): any {
    return { };
  }

  public get friendlyUniqueId() {
    const node = this.node
    const components = node.scopes.slice(1).map(c => Node.of(c).id);
    return components.length > 0 ? makeUniqueId(components) : '';
  }

  protected get nodeMetadata(): {[key: string]: any} {
    return {
      metadata: {
        path: this.node.path,
        uniqueId: this.friendlyUniqueId,
        stackTrace: this.node.metadata.find((e) => e.type === 'stacktrace')?.trace
      } as TerraformElementMetadata
    }
  }
}