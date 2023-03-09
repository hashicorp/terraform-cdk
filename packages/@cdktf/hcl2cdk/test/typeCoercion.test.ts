// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, binding } from "./helpers/convert";

describe("type coercion", () => {
  testCase.test(
    "variables used in resources need to use stringValue",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "zone_id" {
        type        = string
      }
      resource "aws_route53_record" "example_aws_route53_simple_record" {
        zone_id = var.zone_id
        name    = "example.com"
        type    = "TXT"
        ttl     = "300"
        records = ["example"]
      }
      `,
    [binding.aws],
    Synth.yes,
    { resources: ["aws_route53_record"] }
  );

  testCase.test(
    "references used in resources need to use Token.asString",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_route53_zone" "example_aws_route53_simple_zone" {
        name = "example.com"
      }
      resource "aws_route53_record" "example_aws_route53_simple_record" {
        zone_id = aws_route53_zone.example_aws_route53_simple_zone.zone_id
        name    = "example.com"
        type    = "TXT"
        ttl     = "300"
        records = ["example"]
      }
      `,
    [binding.aws],
    Synth.yes,
    { resources: ["aws_route53_zone", "aws_route53_record"] }
  );

  testCase.test(
    "references used in resource for_eachs need to understand how the value is used",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "iam_groups_users" {
        type        = map(object({
          groups = list(string)
        }))
      }
      resource "aws_iam_user_group_membership" "iam_user_group_membership_user_groups" {
        for_each = var.iam_groups_users
        user     = each.key
        groups   = each.value["groups"]
      }
      `,
    [binding.aws],
    Synth.yes,
    { resources: ["aws_iam_user_group_membership"] }
  );

  testCase.test(
    "expressions need to be coerced to required type",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "example_spot_and_fargate_name" {
        type        = string
      }
      variable "role_arn" {
        type        = string
      }
      variable "private_subnets" {
        type        = list(object({ id = string }))
      }
      variable "public_subnets" {
        type        = list(object({ id = string }))
      }
      resource "aws_eks_cluster" "example_spot_and_fargate_eks_cluster" {
        name     = "$\{var.example_spot_and_fargate_name}"
        role_arn = var.role_arn

        vpc_config {
          subnet_ids = concat(var.private_subnets.*.id, var.public_subnets.*.id)
        }
      }
      `,
    [binding.aws],
    Synth.yes,
    { resources: ["aws_eks_cluster"] }
  );
});
