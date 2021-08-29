export interface TerraformDependencyConstraint {
  readonly name: string;
  readonly source: string;
  readonly version?: string;
  readonly fqn: string;
  readonly namespace?: string;
}
