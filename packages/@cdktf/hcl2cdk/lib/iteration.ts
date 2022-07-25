import { DirectedGraph } from "graphology";
import { providers as telemetryAllowedProviders } from "./telemetryAllowList.json";
import { Scope } from "./types";

// locals, variables, and outputs are global key value maps
export function forEachGlobal<T, R>(
  scope: Scope,
  prefix: string,
  record: Record<string, T> | undefined,
  iterator: (
    scope: Scope,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph
  ) => Promise<R>
): Record<string, (graph: DirectedGraph) => Promise<R>> {
  return Object.entries(record || {}).reduce((carry, [key, item]) => {
    const id = `${prefix}.${key}`;
    return {
      ...carry,
      [id]: async (graph: DirectedGraph) =>
        await iterator(scope, key, id, item, graph),
    };
  }, {});
}

export function forEachProvider<T, R>(
  scope: Scope,
  record: Record<string, T[]> | undefined,
  iterator: (
    scope: Scope,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph
  ) => Promise<R>
): Record<string, (graph: DirectedGraph) => Promise<R>> {
  return Object.entries(record || {}).reduce((carry, [key, items]) => {
    return {
      ...carry,
      ...items.reduce((innerCarry, item: T & { alias?: string }) => {
        const id = item.alias ? `${key}.${item.alias}` : `${key}`;
        return {
          ...innerCarry,
          [id]: async (graph: DirectedGraph) =>
            await iterator(scope, key, id, item, graph),
        };
      }, {}),
    };
  }, {});
}

// data and resource are namespaced key value maps
export function forEachNamespaced<T, R>(
  scope: Scope,
  record: Record<string, Record<string, T>> | undefined,
  iterator: (
    scope: Scope,
    type: string,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph
  ) => Promise<R>,
  prefix?: string
): Record<string, (graph: DirectedGraph) => Promise<R>> {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => ({
      ...outerCarry,
      ...Object.entries(items).reduce((innerCarry, [key, item]) => {
        const prefixedType = prefix ? `${prefix}.${type}` : type;
        const id = prefix ? `${prefix}.${type}.${key}` : `${type}.${key}`;
        return {
          ...innerCarry,
          [id]: async (graph: DirectedGraph) =>
            await iterator(scope, prefixedType, key, id, item, graph),
        };
      }, {} as Record<string, (graph: DirectedGraph) => Promise<R>>),
    }),
    {} as Record<string, (graph: DirectedGraph) => Promise<R>>
  );
}

export function resourceStats(obj: Record<string, Record<string, unknown>>) {
  return Object.entries(obj).reduce((carry, [key, value]) => {
    const [provider, ...resourceParts] = key.split("_");
    const shouldBeTracked = telemetryAllowedProviders.includes(provider);
    const providerKey = shouldBeTracked ? provider : "other";
    const resourceName = shouldBeTracked ? resourceParts.join("_") : "other";

    return {
      ...carry,
      [providerKey]: {
        ...(carry[providerKey] || {}),
        [resourceName]: Object.keys(value).length,
      },
    };
  }, {} as Record<string, Record<string, number>>);
}
