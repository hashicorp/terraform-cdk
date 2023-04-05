import { testCase, Synth, binding } from "./helpers/convert";

describe("externals", () => {
  testCase.test(
    "handle external data",
    `
    provider "aws" {
      region = "us-east-1"
    }
    
    provider "external" {
    }

    resource "aws_eks_cluster" "changeme_spot_and_fargate_eks_cluster" {
      name = "foo"
      role_arn = "arn:aws:iam::123456789012:role/eksctl-foo-cluster-ServiceRole-1A2B3C4D5E6F"
      vpc_config {
        subnet_ids = ["subnet-12345678901234567"]
      }
    }

    data "aws_eks_cluster" "changeme_spot_and_fargate_eks_cluster_data" {
      name = "foo"
    }

    variable "changeme_spot_and_fargate_region" {
      type    = string
      default = "us-east-1"
    }

    # Fetch OIDC provider thumbprint for root CA
    # Documentation: https://www.terraform.io/docs/language/data-sources/index.html
    data "external" "changeme_external_thumbprint_data" {
      program    = ["\${path.module}/oidc_thumbprint.sh", var.changeme_spot_and_fargate_region]
      depends_on = [aws_eks_cluster.changeme_spot_and_fargate_eks_cluster]
    }


    # Documentation: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_openid_connect_provider
    resource "aws_iam_openid_connect_provider" "changeme_iam_openid_connect_provider" {
      client_id_list  = ["sts.amazonaws.com"]
      thumbprint_list = [data.external.changeme_external_thumbprint_data.result.thumbprint]
      url             = data.aws_eks_cluster.changeme_spot_and_fargate_eks_cluster_data.identity[0].oidc[0].issuer

      lifecycle {
        ignore_changes = [thumbprint_list]
      }
    }
      `,
    [binding.aws, binding.external],
    Synth.yes,
    {
      dataSources: ["aws_eks_cluster", "external"],
      resources: ["aws_iam_openid_connect_provider", "aws_eks_cluster"],
    }
  );
});
