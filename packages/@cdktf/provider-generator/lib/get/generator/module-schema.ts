// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
export interface ModuleSchema {
  name: string;
  empty?: boolean;
  inputs: Input[];
  outputs: Output[];
}

export interface Output {
  name: string;
  type: string;
}

export interface Input {
  name: string;
  type: string;
  description?: string;
  default?: string;
  required: boolean;
}
