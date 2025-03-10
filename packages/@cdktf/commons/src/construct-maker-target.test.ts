/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Language, TerraformModuleConstraint } from "./config";
import { ConstructsMakerModuleTarget } from "./construct-maker-target";

describe("ConstructsMakerModuleTarget", () => {
  describe.each([
    {
      fqn: "cloudposse/label/null",
      names: {
        [Language.TYPESCRIPT]: "cloudposse.null",
        [Language.PYTHON]: "cloudposse.label.null",
        [Language.JAVA]: "cloudposse.label.null",
        [Language.CSHARP]: "cloudposse.label.null",
        [Language.GO]: "label",
      },
    },
    {
      fqn: "terraform-google-modules/project-factory/google",
      names: {
        [Language.TYPESCRIPT]: "terraform_google_modules.google",
        [Language.PYTHON]: "terraform_google_modules.project_factory.google",
        [Language.JAVA]: "terraform_google_modules.project_factory.google",
        [Language.CSHARP]: "terraform_google_modules.project_factory.google",
        [Language.GO]: "project_factory",
      },
    },
    {
      fqn: "terraform-aws-modules/vpc/aws@5.0.0",
      names: {
        [Language.TYPESCRIPT]: "terraform_aws_modules.aws",
        [Language.PYTHON]: "terraform_aws_modules.vpc.aws",
        [Language.JAVA]: "terraform_aws_modules.vpc.aws",
        [Language.CSHARP]: "terraform_aws_modules.vpc.aws",
        [Language.GO]: "vpc",
      },
    },
    {
      fqn: "terraform-aws-modules/eks/aws//modules/self-managed-node-group",
      names: {
        [Language.TYPESCRIPT]: "terraform_aws_modules.aws.eks.modules",
        [Language.PYTHON]:
          "terraform_aws_modules.eks.aws.modules.self_managed_node_group",
        [Language.JAVA]:
          "terraform_aws_modules.eks.aws.modules.self_managed_node_group",
        [Language.CSHARP]:
          "terraform_aws_modules.eks.aws.modules.self_managed_node_group",
        [Language.GO]: "self_managed_node_group",
      },
    },
    {
      fqn: {
        name: "my-local-module",
        source: "./path/to/local/terraform/module",
      },
      names: {
        [Language.TYPESCRIPT]: "my-local-module",
        [Language.PYTHON]: "my_local_module",
        [Language.JAVA]: "my_local_module",
        [Language.CSHARP]: "my_local_module",
        [Language.GO]: "my_local_module",
      },
    },
  ])("#srcMakName %#", ({ fqn, names }) => {
    it.each(Object.entries(names))(
      `expect name for ${JSON.stringify(fqn)} in %s to be %s`,
      (language, name) => {
        const constraint = new TerraformModuleConstraint(fqn as any);
        const target = new ConstructsMakerModuleTarget(
          constraint,
          language as Language,
        );
        expect(target.srcMakName).toBe(name);
      },
    );
  });
});
