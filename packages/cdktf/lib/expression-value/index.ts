import * as tex from "./helpers";
import { ResourceState, ResourceInstance } from "../terraform-module";
import { functionCall } from "./functions";

/**
 *
 */
export function valueFromExpression(
  node: tex.ExpressionType,
  module: ResourceState[]
): any {
  if (tex.isLiteralValueExpression(node)) {
    return node.meta.value;
  }

  if (tex.isScopeTraversalExpression(node)) {
    return valueFromScopeTraversalExpression(node, module);
  }

  if (tex.isUnaryOpExpression(node)) {
    return valueFromUnaryOpExpression(node, module);
  }

  if (tex.isBinaryOpExpression(node)) {
    return valueFromBinaryOpExpression(node, module);
  }

  if (tex.isTemplateExpression(node) || tex.isTemplateWrapExpression(node)) {
    return valueFromTemplateExpression(node, module);
  }

  if (tex.isObjectExpression(node)) {
    return valueFromObjectExpression(node, module);
  }

  if (tex.isFunctionCallExpression(node)) {
    return valueFromFunctionCallExpression(node, module);
  }

  if (tex.isIndexExpression(node)) {
    return valueFromIndexExpression(node, module);
  }

  if (tex.isSplatExpression(node)) {
    return valueFromSplatExpression(node, module);
  }

  if (tex.isConditionalExpression(node)) {
    return valueFromConditionalExpression(node, module);
  }

  if (tex.isTupleExpression(node)) {
    return valueFromTupleExpression(node, module);
  }

  if (tex.isRelativeTraversalExpression(node)) {
    return valueFromRelativeTraversalExpression(node, module as any);
  }

  if (tex.isForExpression(node)) {
    return valueFromForExpression(node, module);
  }

  return "";
}

/**
 *
 */
function valueFromScopeTraversalExpression(
  _node: tex.ScopeTraversalExpression,
  _module: ResourceState[]
) {
  const resourceMatch = _module.find(
    (resource) =>
      resource.type === _node.meta.traversal[0].segment &&
      resource.name === _node.meta.traversal[1].segment
  );

  if (!resourceMatch) {
    return null;
  }

  if (_node.meta.traversal.length === 2) {
    return resourceMatch;
  }

  let index = 2;
  let val: any = resourceMatch.instances;

  // jump to attributes if
  // - we have a single instance, and the first segment is not an index
  if (
    val.length === 1 &&
    tex.isNameTraversalPart(_node.meta.traversal[index])
  ) {
    val = val[0].attributes;
    index++;
  } else if (tex.isIndexTraversalPart(_node.meta.traversal[index])) {
    // jump to the attributes of the instance if the first segment is an index
    const seg = parseInt(_node.meta.traversal[index].segment, 10);
    val = val[seg].attributes;
    index++;
  }

  const remainingSegments = _node.meta.traversal.slice(index);

  for (const segment of remainingSegments) {
    let seg: string | number = segment.segment;
    if (tex.isIndexTraversalPart(segment)) {
      seg = parseInt(seg, 10);
    }

    val = val[seg];
  }

  return val;
}

/**
 *
 */
function valueFromUnaryOpExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromBinaryOpExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromTemplateExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
// function valueFromTemplateWrapExpression(
//   _node: tex.ExpressionType,
//   _module: ResourceState[]
// ) {
//   return "";
// }

/**
 *
 */
function valueFromObjectExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromFunctionCallExpression(
  _node: tex.FunctionCallExpression,
  _module: ResourceState[]
) {
  const fn = _node.meta.name;

  const args = _node.children.map((child) =>
    valueFromExpression(child, _module)
  );

  console.log("ARGS: ", args, "NAME: ", fn);

  return functionCall(fn, args, _module);
}

/**
 *
 */
function valueFromIndexExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromSplatExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  const nonSplatExpression = _node.children[0];
  const splatExpression = _node.children[1];

  console.log("NON-SPLAT:", nonSplatExpression);

  const value = valueFromExpression(nonSplatExpression, _module);

  console.log("VALUE:", value);

  if (!value) {
    return [];
  }

  const instances = value.instances;

  if (!instances) {
    return [];
  }

  return valueFromRelativeTraversalExpression(
    splatExpression as tex.RelativeTraversalExpression,
    instances
  );
}

/**
 *
 */
function valueFromConditionalExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromTupleExpression(
  _node: tex.ExpressionType,
  _module: ResourceState[]
) {
  return "";
}

/**
 *
 */
function valueFromRelativeTraversalExpression(
  _node: tex.RelativeTraversalExpression,
  _module: ResourceInstance[]
) {
  // we will probably receive instances of a resource here
  const traversal = _node.meta.traversal;
  const collection = [];

  for (const instance of _module) {
    console.log("INSTANCE:", instance);
    let val: any = instance.attributes;
    for (const segment of traversal) {
      val = val[segment.segment];
    }

    collection.push(val);
  }

  return collection;
}

/**
 *
 */
function valueFromForExpression(
  node: tex.ForExpression,
  _module: ResourceState[]
) {
  const meta = node.meta;
  const isList = meta.openRangeValue === "[";

  if (!isList) {
    throw new Error("unable to handle object for loops");
  }

  const collectionExpression = valueFromExpression(node.children[0], _module);

  if (!collectionExpression) {
    return [];
  }

  return "";
}
