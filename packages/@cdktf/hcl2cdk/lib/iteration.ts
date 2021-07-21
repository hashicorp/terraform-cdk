import { DirectedGraph } from "graphology";

// locals, variables, and outputs are global key value maps
export function forEachGlobal<T, R>(
  prefix: string,
  record: Record<string, T> | undefined,
  iterator: (key: string, id: string, value: T, graph: DirectedGraph) => R
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce((carry, [key, item]) => {
    const id = `${prefix}.${key}`;
    return {
      ...carry,
      [id]: (graph: DirectedGraph) => iterator(key, id, item, graph),
    };
  }, {});
}

export function forEachProvider<T, R>(
  record: Record<string, T[]> | undefined,
  iterator: (key: string, id: string, value: T, graph: DirectedGraph) => R
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce((carry, [key, items]) => {
    return {
      ...carry,
      ...items.reduce((innerCarry, item: T & { alias?: string }) => {
        const id = item.alias ? `${key}.${item.alias}` : `${key}`;
        return {
          ...innerCarry,
          [id]: (graph: DirectedGraph) => iterator(key, id, item, graph),
        };
      }, {}),
    };
  }, {});
}

// data and resource are namespaced key value maps
export function forEachNamespaced<T, R>(
  record: Record<string, Record<string, T>> | undefined,
  iterator: (
    type: string,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph
  ) => R,
  prefix?: string
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => ({
      ...outerCarry,
      ...Object.entries(items).reduce((innerCarry, [key, item]) => {
        const prefixedType = prefix ? `${prefix}.${type}` : type;
        const id = prefix ? `${prefix}.${type}.${key}` : `${type}.${key}`;
        return {
          ...innerCarry,
          [id]: (graph: DirectedGraph) =>
            iterator(prefixedType, key, id, item, graph),
        };
      }, {} as Record<string, (graph: DirectedGraph) => R>),
    }),
    {} as Record<string, (graph: DirectedGraph) => R>
  );
}
