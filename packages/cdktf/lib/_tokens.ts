import { Tokenization, DefaultTokenResolver, StringConcat } from "./tokens";
import { Construct } from "constructs";

const TOKEN_RESOLVER = new DefaultTokenResolver(new StringConcat());

export function resolve<T>(scope: Construct, obj: T): T {
  return Tokenization.resolve(obj, {
    scope,
    preparing: false,
    resolver: TOKEN_RESOLVER,
  });
}
