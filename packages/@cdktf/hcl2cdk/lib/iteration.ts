// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { DirectedGraph } from "graphology";
import { providers as telemetryAllowedProviders } from "./telemetryAllowList.json";
import { ProgramScope } from "./types";
import { Import } from "./schema";

// locals, variables, and outputs are global key value maps
export function forEachGlobal<T, R>(
  scope: ProgramScope,
  prefix: string,
  record: Record<string, T> | undefined,
  iterator: (
    scope: ProgramScope,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph,
  ) => Promise<R>,
): Record<string, { code: (graph: DirectedGraph) => Promise<R>; value: T }> {
  return Object.entries(record || {}).reduce((carry, [key, item]) => {
    const id = `${prefix}.${key}`;
    return {
      ...carry,
      [id]: {
        code: async (graph: DirectedGraph) =>
          await iterator(scope, key, id, item, graph),
        value: item,
      },
    };
  }, {});
}

export function forEachImport<R>(
  scope: ProgramScope,
  prefix: string,
  record: Import[] | undefined,
  iterator: (
    scope: ProgramScope,
    id: string,
    value: Import,
    graph: DirectedGraph,
  ) => Promise<R>,
): Record<
  string,
  { code: (graph: DirectedGraph) => Promise<R>; value: Import }
> {
  return (record || []).reduce((carry, item) => {
    const target =
      item.to.startsWith("${") && item.to.endsWith("}")
        ? item.to.substring(2, item.to.length - 1)
        : item.to;

    const id = `${prefix}.${target}`;
    return {
      ...carry,
      [id]: {
        code: async (graph: DirectedGraph) =>
          await iterator(scope, id, item, graph),
        value: item,
      },
    };
  }, {});
}

export function forEachProvider<T extends { alias?: string }, R>(
  scope: ProgramScope,
  record: Record<string, T[]> | undefined,
  iterator: (
    scope: ProgramScope,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph,
  ) => Promise<R>,
): Record<string, { code: (graph: DirectedGraph) => Promise<R>; value: T }> {
  return Object.entries(record || {}).reduce((carry, [key, items]) => {
    return {
      ...carry,
      ...items.reduce((innerCarry, item: T) => {
        const id = item.alias ? `${key}.${item.alias}` : `${key}`;
        return {
          ...innerCarry,
          [id]: {
            code: async (graph: DirectedGraph) =>
              await iterator(scope, key, id, item, graph),
            value: item,
          },
        };
      }, {}),
    };
  }, {});
}

// data and resource are namespaced key value maps
export function forEachNamespaced<T, R>(
  scope: ProgramScope,
  record: Record<string, Record<string, T>> | undefined,
  iterator: (
    scope: ProgramScope,
    type: string,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph,
  ) => Promise<R>,
  prefix?: string,
): Record<string, { code: (graph: DirectedGraph) => Promise<R>; value: T }> {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => ({
      ...outerCarry,
      ...Object.entries(items).reduce(
        (innerCarry, [key, item]) => {
          const prefixedType = prefix ? `${prefix}.${type}` : type;
          const id = prefix ? `${prefix}.${type}.${key}` : `${type}.${key}`;
          return {
            ...innerCarry,
            [id]: {
              code: async (graph: DirectedGraph) =>
                await iterator(scope, prefixedType, key, id, item, graph),
              value: item,
            },
          };
        },
        {} as Record<
          string,
          { code: (graph: DirectedGraph) => Promise<R>; value: T }
        >,
      ),
    }),
    {} as Record<
      string,
      { code: (graph: DirectedGraph) => Promise<R>; value: T }
    >,
  );
}

export function resourceStats(obj: Record<string, Record<string, unknown>>) {
  return Object.entries(obj).reduce(
    (carry, [key, value]) => {
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
    },
    {} as Record<string, Record<string, number>>,
  );
}
