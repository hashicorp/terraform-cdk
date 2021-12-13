import { Tokenization, DefaultTokenResolver, StringConcat } from "./tokens";
import { Construct } from "constructs";

const TOKEN_RESOLVER = new DefaultTokenResolver(new StringConcat());

export function resolve<T>(scope: Construct, obj: T, preparing = false): T {
  return Tokenization.resolve(obj, {
    scope,
    preparing,
    resolver: TOKEN_RESOLVER,
  });
}
