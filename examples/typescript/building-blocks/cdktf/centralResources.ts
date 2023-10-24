import { Construct } from "constructs";

export interface CentralResource<T> {
  constructor(scope: Construct, name: string, value: T): void;
  loadFromVariables(): T;
}
