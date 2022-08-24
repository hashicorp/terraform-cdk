import { TerraformModule } from "../../lib";

const project = new TerraformModule({
  prettier: true,
  projenrcTs: true,
  defaultReleaseBranch: "main",
  name: "my-module",
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  repositoryUrl: "github.com/DanielMSchmidt/my-module",

  terraformModules: [
    {
      name: "eks",
      source: "terraform-aws-modules/eks/aws",
      version: "~> 18.0",
    },
    {
      name: "eks-managed-nodegroup",
      source: "terraform-aws-modules/eks/aws//modules/eks-managed-node-group",
      version: "~> 18.0",
    },
  ],

  projectId: "my-project-id",
});
project.gitignore.addPatterns("lib/");
project.synth();
