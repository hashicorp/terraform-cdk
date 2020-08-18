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
  protected readonly rawOverrides: any = {}

  constructor(scope: Construct, id: string) {
    super(scope, id)

    this.constructNode.addMetadata('stacktrace', 'trace')
    this.stack = TerraformStack.of(this);
  }

  public get constructNode(): Node {
    return Node.of(this)
  }

  public toTerraform(): any {
    return { };
  }

  public get friendlyUniqueId() {
    const node = this.constructNode
    if (this.stack.useStaticNames) {
      return node.id;
    }
    
    const components = node.scopes.slice(1).map(c => Node.of(c).id);
    return components.length > 0 ? makeUniqueId(components) : '';
  }

  public addOverride(path: string, value: any) {
    const parts = path.split('.');
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject = curr[key] != null && typeof(curr[key]) === 'object' && !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  protected get nodeMetadata(): {[key: string]: any} {
    return {
      metadata: {
        path: this.constructNode.path,
        uniqueId: this.friendlyUniqueId,
        stackTrace: this.constructNode.metadata.find((e) => e.type === 'stacktrace')?.trace
      } as TerraformElementMetadata
    }
  }
}