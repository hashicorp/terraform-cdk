// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";

export class KubernetesWebAppDeployment extends Construct {
  constructor(
    public scope: Construct,
    public id: string,
    public props: Record<string, any> // Could be typed better, is not in this case
  ) {
    super(scope, id);
    // Content is left to the readers imagination
  }
}
