// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/mapping.ts
import { TerraformResource } from "cdktf";
import { Construct } from "constructs";

export type ResourceMapper<T extends TerraformResource> = (
  scope: Construct,
  id: string,
  props: any
) => T;
type AttributeMapper<T extends TerraformResource> = (resource: T) => string;

export type Mapping<T extends TerraformResource> = {
  resource: ResourceMapper<T>;
  attributes: {
    [name: string]: AttributeMapper<T>;
  };
};

const mapping: { [type: string]: any } = {};

export function findMapping(resourceType: string): Mapping<TerraformResource> {
  return mapping[resourceType];
}

export function registerMapping<T extends TerraformResource>(
  resourceType: string,
  map: Mapping<T>
) {
  mapping[resourceType] = map;
}

// load mappings
require("./awscc");
require("./aws");
