import { Construct, IConstruct } from "constructs";

import {
  Aspects as AWSAspects,
  IAspect as IAWSAspect,
  Annotations as AWSAnnotations,
  Stack,
  CfnElement,
} from "aws-cdk-lib";

import { Aspects } from "cdktf";
import { addCustomSynthesis } from "cdktf/lib/synthesize/synthesizer"; // NOTE: these are internals

// TODO: walk through this file, migrate todos and delete this afterwards
export class ObsoleteAwsTerraformAdapter extends Stack {
  constructor(_scope: Construct, id: string) {
    super(undefined, id);

    // adds an Aspect to the parent hosting this Adapter which will invoke
    // All AWSAspects on children of this Adapter
    Aspects.of(_scope).add({
      visit: (node) => {
        if (node === _scope) {
          invokeAWSAspects(this);
          this.addResources();
        }
        // console.log("CDKTF ASPECT", node.node.path, {
        //   isCfnElement: CfnElement.isCfnElement(node),
        // });
      },
    });

    addCustomSynthesis(_scope, { onSynthesize: this._onSynth.bind(this) });
  }

  private addResources() {
    const elements = cfnElements(this);
    // TODO: maybe we want to gather intelligence on the resolve tokens before resolving to get the underlying
    // dependencies from it and to reuse them when creating TF resources instead of needing to parse them from
    // their resulting CloufFormation representation like Fn:Join, Fn:GetAtt etc.
    const fragments = elements.map((e) => this.resolve(e._toCloudFormation()));
    console.log(JSON.stringify(fragments, null, 2));
  }

  _onSynth(/*session: ISynthesisSession*/) {
    console.log("AWS Adapter: custom synthesis");
    // TODO: find out if we need this at all.. I think we don't as we are going to
    // convert everything to CDKTF first and then every work will happen there
    // maybe we can use this to let the synth fail or something
    // but that could also be done in the conversion already
    // so while this is cool we might not need it at all and this is fine, too
  }
}

/**
 * Invoke aspects on the given construct tree.
 *
 * originally from https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/private/synthesis.ts#L99-L137
 */
function invokeAWSAspects(root: IConstruct) {
  const invokedByPath: { [nodePath: string]: IAWSAspect[] } = {};

  let nestedAspectWarning = false;
  recurse(root, []);

  console.log(`invoked AWSAspects: `, invokedByPath);

  function recurse(construct: IConstruct, inheritedAspects: IAWSAspect[]) {
    const node = construct.node;
    const aspects = AWSAspects.of(construct);
    const allAspectsHere = [...(inheritedAspects ?? []), ...aspects.all];
    const nodeAspectsCount = aspects.all.length;
    for (const aspect of allAspectsHere) {
      let invoked = invokedByPath[node.path];
      if (!invoked) {
        invoked = invokedByPath[node.path] = [];
      }

      if (invoked.includes(aspect)) {
        continue;
      }

      aspect.visit(construct);

      // if an aspect was added to the node while invoking another aspect it will not be invoked, emit a warning
      // the `nestedAspectWarning` flag is used to prevent the warning from being emitted for every child
      if (!nestedAspectWarning && nodeAspectsCount !== aspects.all.length) {
        AWSAnnotations.of(construct).addWarning(
          "We detected an Aspect was added via another Aspect, and will not be applied"
        );
        nestedAspectWarning = true;
      }

      // mark as invoked for this node
      invoked.push(aspect);
    }

    for (const child of construct.node.children) {
      recurse(child, allAspectsHere);
    }
  }
}

function cfnElements(node: IConstruct, into: CfnElement[] = []): CfnElement[] {
  if (CfnElement.isCfnElement(node)) {
    into.push(node);
  }

  for (const child of node.node.children) {
    // Don't recurse into a substack
    if (Stack.isStack(child)) {
      throw new Error(
        "Encountered nested stack in AWS CDK construct which is not supported yet by the CDK for Terraform to convert"
      );
    }

    cfnElements(child, into);
  }

  return into;
}
