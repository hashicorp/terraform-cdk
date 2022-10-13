// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Tokenization, DefaultTokenResolver, StringConcat } from "./tokens";
import { Construct } from "constructs";

const TOKEN_RESOLVER = new DefaultTokenResolver(new StringConcat());

// eslint-disable-next-line jsdoc/require-jsdoc
export function resolve<T>(scope: Construct, obj: T, preparing = false): T {
  return Tokenization.resolve(obj, {
    scope,
    preparing,
    resolver: TOKEN_RESOLVER,
  });
}
