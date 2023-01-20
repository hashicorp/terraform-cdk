// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// This is going to be derived from the terraform schema
export type Provider = {
  provider: {
    attributes: {
      // TODO: Figure out if we want to process the names read from schema to make
      // them more ingestible by Typescript without problems
      // or we want to do that later in the emitter e.g. attribute called 'node'
      // should be 'nodeAttribute' in Typescript.
      [name: string]: Attribute;
    };
    blockTypes: {
      [name: string]: Block;
    };
  };
};

export type Providers = {
  [fqpn: string]: Provider;
};

export type Attribute = ReadonlyAttribute | SettableAttribute;

export type AttributeType = {};

export type BaseAttribute = {
  description?: string;
  type: AttributeType;
};

export type ReadonlyAttribute = BaseAttribute & {
  __type: "readonly";
};

export type SettableAttribute = BaseAttribute & {
  __type: "settable";
  optionality: boolean;
  storageClass: string;
};

export type Block = {};
