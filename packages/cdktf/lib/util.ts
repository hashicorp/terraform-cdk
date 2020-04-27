function isObject(item: any) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export function deepMerge(target: any, ...sources: any[]): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

export function snakeCase(str: string): string {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z0-9])([A-Z])/g, (_m, a, b) => a + '_' + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, '_')
    .toLowerCase();
}

export function keysToSnakeCase(object: any): any {
  if (Array.isArray(object)) {
    return object.map((e: any) => {
      return typeof(e) === 'object' ? keysToSnakeCase(e) : e
    });
  }
  const keys = Object.keys(object);
  return keys.reduce((newObject: any, key: string) => {
    let value = object[key];
    if (typeof(value) === 'object') {
      value = keysToSnakeCase(value)
    }
    if (Array.isArray(value)) {
      value = value.map((e: any) => {
        return typeof(e) === 'object' ? keysToSnakeCase(e) : e
      });
    }
    newObject[snakeCase(key)] = value
    return newObject
  }, {});
}
