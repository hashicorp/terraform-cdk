// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import chalkStripAnsi from "strip-ansi";

export const stripAnsi = (str: string | undefined): string => {
  if (str === undefined) throw new Error("can't strip from undefined string");

  return chalkStripAnsi(str);
};
