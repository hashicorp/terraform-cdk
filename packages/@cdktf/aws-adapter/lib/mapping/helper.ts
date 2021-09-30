import createDebug from "debug";
import { camelCase } from "camel-case";

import { ResourceMapper } from "../mapping";
import { TerraformResource } from "cdktf";
import { Construct } from "constructs";
import { objectFromEntries } from "../es2019";

const debug = createDebug("tf-aws-adapter:mapper:debug");
const trace = createDebug("tf-aws-adapter:mapper:trace");

const isObject = (x: any): x is object =>
  x && typeof x === "object" && !Array.isArray(x);
const isArrayOfObjects = (x: any): x is object[] =>
  Array.isArray(x) && x.length > 0 && isObject(x[0]);

const autoMapObjectPropertyKeys = (obj: object): object =>
  objectFromEntries(
    Object.entries(obj).map(([cfnKey, nestedValue]) => {
      const res = createAutoPropertyMapping(cfnKey)(nestedValue);
      return [res.tfAttributeName, res.value];
    })
  );

function createNamePropertyMapping(
  tfAttributeName: string
): PropertyMappingFunc {
  return (value) => {
    // TODO: this is somewhat duplicated code – check with awscc stuff, we're doing similar things there..
    if (isObject(value)) {
      value = autoMapObjectPropertyKeys(value);
    } else if (isArrayOfObjects(value)) {
      value = value.map(autoMapObjectPropertyKeys);
    }

    return { tfAttributeName, value };
  };
}

function createAutoPropertyMapping(
  cfnPropertyName: string
): PropertyMappingFunc {
  // convert name to CDKTF TypeScript name
  const tfAttributeName = camelCase(cfnPropertyName);
  // TODO: maybe this can become smarter in the future :)

  return createNamePropertyMapping(tfAttributeName);
}

type Class<T> = new (...args: any[]) => T;
type PropertyMappingFunc = (value: any) => {
  tfAttributeName: string;
  value: any;
};
type PropertyMapping =
  | string // just maps onto the attribute name passed as string without adjusting the value
  | PropertyMappingFunc; // dynamically maps to one (or more) attributes, can adjust the value
type PropertyMappings = { [cfnProperty: string]: PropertyMapping };

// TODO: detect if something has been mapped to a tfAttributeName that does not exist in the props of a resource
// -> needs validations in generated provider bindings!

export function createGuessingResourceMapper<T extends TerraformResource>(
  Resource: Class<T>,
  propMappings: PropertyMappings = {}
): ResourceMapper<T> {
  const mapper: ResourceMapper<T> = (
    scope: Construct,
    id: string,
    props: any
  ) => {
    const mappedProps: { [tfAttributeName: string]: any } = {};

    // TODO: extract this prop mapping code to be able to reuse it when writing custom mappers?
    // loop over all CloudFormation properties and convert them one by one
    Object.entries(props).forEach(([cfnPropertyName, cfnValue]) => {
      // Determine how to map this prop?
      let mapping: PropertyMappingFunc;
      switch (typeof propMappings[cfnPropertyName]) {
        case "function":
          mapping = propMappings[cfnPropertyName] as PropertyMappingFunc;
          trace(`using a custom mapping function for ${cfnPropertyName}`);
          break;
        case "string":
          mapping = createNamePropertyMapping(
            propMappings[cfnPropertyName] as string
          );
          trace(
            `using a custom name for ${cfnPropertyName} (${propMappings[cfnPropertyName]})`
          );
          break;
        default:
          trace(`auto mapping ${cfnPropertyName}`);
          mapping = createAutoPropertyMapping(cfnPropertyName);
      }

      // map the value
      const { tfAttributeName, value } = mapping(cfnValue);
      if (Object.keys(mappedProps).includes(tfAttributeName)) {
        throw new Error(
          `Conflict! ${cfnPropertyName} has been mapped to ${tfAttributeName} but there has already been a value set for that key.`
        );
      }

      mappedProps[tfAttributeName] = value;

      // delete to mark this as done
      // (the adapter will cautiously error for values left in props after mapping)
      delete props[cfnPropertyName];
    });

    debug(
      `mapped props for Resource ${Resource.name}: ${JSON.stringify(
        mappedProps,
        null,
        2
      )}`
    );

    return new Resource(scope, id, mappedProps);
  };
  return mapper;
}
