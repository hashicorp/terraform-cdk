// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IConstruct, IValidation } from "constructs";
import isEqual = require("lodash.isequal");
import { TerraformBackend } from "..";

/**
 * A validation that is added by default, ensuring that the same backend config
 * is not accidentally used for different stacks
 */
export class ValidateBackends implements IValidation {
  /**
   * Creates a ValidateBackends
   */
  constructor(protected host: IConstruct) {}

  /**
   * Run the validation
   */
  public validate() {
    const backends = this.host.node
      .findAll()
      .filter(TerraformBackend.isBackend);

    // List of all backends, if there are multiple in the same group that means the two are conflicting with each other
    const groups: TerraformBackend[][] = [];

    backends.forEach((backend) => {
      // is there a group for this backend to fit in?
      const group = groups.find((group) => backendsConflict(group[0], backend));
      if (group) {
        group.push(backend);
      }
      groups.push([backend]); // create a new group (or the first)
    });

    return groups
      .filter((group) => group.length > 1)
      .map(
        (group) =>
          `Found ${
            group.length
          } stacks that store their state in the same location. Please ensure the following stacks have different backend configurations: ${group
            .map((b) => b.cdktfStack.node.id)
            .join(", ")}`
      );
  }
}

/**
 * checks whether two backends will conflict with each other when writing their state
 * @param a
 * @param b
 * @returns true if the backends store their state in the same location
 */
export function backendsConflict(
  a: TerraformBackend,
  b: TerraformBackend
): boolean {
  // TODO: we could add `LocalBackend.isLocalBackend()` static helpers (breaking change!)
  // and a isConflicting(otherBackend) method to our backends to move this logic into
  // the individual backends instead of having it here

  const ta = a.toTerraform(); // e.g. { terraform: { backend: { local: { path: 'terraform.tfstate' } } } }
  const tb = b.toTerraform();

  // do a deep compare for now
  // TODO: in theory backends could be partly configured via environment variables which could make this a false positive
  return isEqual(ta, tb);
}
