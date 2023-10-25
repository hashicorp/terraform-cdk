import {
  Aspects,
  IAspect,
  TerraformModule,
  TerraformResource,
  TerraformStack,
} from "cdktf";
import { Construct, IConstruct } from "constructs";

type Constructor<T> = new (...args: any[]) => T;

export class CdktfAutoConnect implements IAspect {
  private constructor(private scope: Construct) {}

  public static init(scope: Construct) {
    Aspects.of(scope).add(new CdktfAutoConnect(scope));
  }

  visit(node: IConstruct): void {
    if (
      (node instanceof TerraformModule && connections[node.source]) ||
      (node instanceof TerraformResource &&
        connections[node.terraformResourceType])
    ) {
      const connection = connections[getConstructId(node)];
      const a = node;
      const b = this.find(connection[0]);
      if (b) {
        connection[1](a, b);
      }
    }
  }

  private find(connectableId: ConnectableId): Connectable | undefined {
    return TerraformStack.of(this.scope)
      .node.findAll()
      .find(
        (c) =>
          (c instanceof TerraformModule && c.source === connectableId) ||
          (c instanceof TerraformResource &&
            c.terraformResourceType === connectableId)
      ) as TerraformModule | undefined;
  }
}

type ConnectableId =
  | TerraformModule["source"]
  | TerraformResource["terraformResourceType"];
type Connectable = TerraformModule | TerraformResource;

type ConnectFn<F extends Connectable, T extends Connectable> = (
  a: F,
  b: T
) => void;

const connections: Record<
  ConnectableId,
  [ConnectableId, ConnectFn<Connectable, Connectable>]
> = {};

export function registerConnection<
  F extends Connectable,
  T extends Connectable
>(from: Constructor<F>, to: Constructor<T>, connect: ConnectFn<F, T>) {
  connections[getId(from)] = [getId(to), connect as any];
}

function getConstructId(o: Connectable): ConnectableId {
  if (o instanceof TerraformModule) {
    return o.source;
  } else if (o instanceof TerraformResource) {
    return o.terraformResourceType;
  }
  throw new Error(
    `Invalid Connectable ${o}. Only Resources and Modules are supported at this time`
  );
}

function getId(c: Constructor<Connectable>): ConnectableId {
  const o = new c();
  return getConstructId(o);
}
