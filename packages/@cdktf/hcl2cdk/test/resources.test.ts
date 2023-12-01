/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("resources", () => {
  testCase.test(
    "simple resource",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_vpc" "example" {
      cidr_block = "10.0.0.0/16"
    }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_vpc"],
    }
  );

  testCase.test(
    "complex resource",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_cloudfront_distribution" "s3_distribution" {
        origin {
          domain_name = "aws_s3_bucket.b.bucket_regional_domain_name"
          origin_id   = "local_s3_origin_id"

          s3_origin_config {
            origin_access_identity = "origin-access-identity/cloudfront/ABCDEFG1234567"
          }
        }

        enabled             = true
        is_ipv6_enabled     = true
        comment             = "Some comment"
        default_root_object = "index.html"

        logging_config {
          include_cookies = false
          bucket          = "mylogs.s3.amazonaws.com"
          prefix          = "myprefix"
        }

        aliases = ["mysite.example.com", "yoursite.example.com"]

        default_cache_behavior {
          allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
          cached_methods   = ["GET", "HEAD"]
          target_origin_id = "local_s3_origin_id"

          forwarded_values {
            query_string = false

            cookies {
              forward = "none"
            }
          }

          viewer_protocol_policy = "allow-all"
          min_ttl                = 0
          default_ttl            = 3600
          max_ttl                = 86400
        }

        # Cache behavior with precedence 0
        ordered_cache_behavior {
          path_pattern     = "/content/immutable/*"
          allowed_methods  = ["GET", "HEAD", "OPTIONS"]
          cached_methods   = ["GET", "HEAD", "OPTIONS"]
          target_origin_id = "local_s3_origin_id"

          forwarded_values {
            query_string = false
            headers      = ["Origin"]

            cookies {
              forward = "none"
            }
          }

          min_ttl                = 0
          default_ttl            = 86400
          max_ttl                = 31536000
          compress               = true
          viewer_protocol_policy = "redirect-to-https"
        }

        # Cache behavior with precedence 1
        ordered_cache_behavior {
          path_pattern     = "/content/*"
          allowed_methods  = ["GET", "HEAD", "OPTIONS"]
          cached_methods   = ["GET", "HEAD"]
          target_origin_id = "local_s3_origin_id"

          forwarded_values {
            query_string = false

            cookies {
              forward = "none"
            }
          }

          min_ttl                = 0
          default_ttl            = 3600
          max_ttl                = 86400
          compress               = true
          viewer_protocol_policy = "redirect-to-https"
        }

        price_class = "PriceClass_200"

        restrictions {
          geo_restriction {
            restriction_type = "whitelist"
            locations        = ["US", "CA", "GB", "DE"]
          }
        }

        tags = {
          Environment = "production"
        }

        viewer_certificate {
          cloudfront_default_certificate = true
        }
      }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_cloudfront_distribution"],
    }
  );

  testCase.test(
    "simple data source",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      data "aws_subnet" "selected" {
        vpc_id = "subnet_id"
      }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      dataSources: ["aws_subnet"],
    }
  );

  testCase.test(
    "multiple blocks",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_security_group" "allow_tls" {
      name        = "allow_tls"
      description = "Allow TLS inbound traffic"

      ingress {
        description      = "TLS from VPC"
        from_port        = 443
        to_port          = 443
        protocol         = "tcp"
      }

      ingress {
        description      = "TLS from VPC"
        from_port        = 80
        to_port          = 80
        protocol         = "tcp"
      }

      ingress {
        from_port        = 8080
        to_port          = 8080
        protocol         = "tcp"
      }

      egress {
        from_port        = 0
        to_port          = 0
        protocol         = "-1"
        cidr_blocks      = ["0.0.0.0/0"]
        ipv6_cidr_blocks = ["::/0"]
      }

      tags = {
        Name = "allow_tls"
      }
    }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_security_group"],
    }
  );

  testCase.test(
    "blocks should be arrays",
    `
    provider "google" {
      project = "my-project"
      region  = "us-central1"
    }
    resource "google_compute_autoscaler" "example" {
      name   = "example-autoscaler"
      zone   = "us-east1-b"
      target = "target-for-example-autoscaler"

      autoscaling_policy = {
        max_replicas    = 8
        min_replicas    = 2
        cooldown_period = 60

        cpu_utilization = {
          target = 0.5
        }
      }
    }
    `,
    [binding.google],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["google_compute_autoscaler"],
    }
  );

  testCase.test(
    "maps are not arrays",
    `
    provider "kubernetes" {
      config_path    = "~/.kube/config"
      config_context = "my-context"
    }

    resource "kubernetes_secret" "secrets-xxx" {
      metadata {
        name      = "secrets-xxx"
      }
      data = {
        "xxx" : "yyy"
      }
    }
    `,
    [binding.kubernetes],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["kubernetes_secret"],
    }
  );

  testCase.test(
    "maps dont get camel case keys",
    `
  provider "kubernetes" {
    config_path    = "~/.kube/config"
    config_context = "my-context"
  }

  resource "kubernetes_secret" "secrets-xxx" {
    metadata {
      name      = "secrets-xxx"
    }
    data = {
      "camel_cased_key": "yes"
    }
  }
  `,
    [binding.kubernetes],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["kubernetes_secret"],
    }
  );

  testCase.test(
    "same name local, var, out",
    `
    variable "test" {
      type    = string
    }
    locals {
      test = "\${var.test} + 1"
    }
    output "test" {
      value = "\${local.test}"
    }
    `,
    [],
    Snapshot.yes,
    Synth.yes
  );

  testCase.test(
    "property level renamings",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_guardduty_filter" "MyFilter" {
        name        = "MyFilter"
        action      = "ARCHIVE"
        detector_id = "id"
        rank        = 1

        finding_criteria {
          criterion {
            field  = "region"
            equals = ["eu-west-1"]
          }

          criterion {
            field      = "service.additionalInfo.threatListName"
            not_equals = ["some-threat", "another-threat"]
          }

          criterion {
            field        = "updatedAt"
            greater_than = "2020-01-01T00:00:00Z"
            less_than    = "2020-02-01T00:00:00Z"
          }

          criterion {
            field                 = "severity"
            greater_than_or_equal = "4"
          }
        }
      }
        `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_guardduty_filter"],
    }
  );

  testCase.test(
    "tricky to parse items",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "tags" {
        type    = map
      }


      resource "aws_instance" "play" {
        ami                         = join("-", [var.tags.app, var.tags.env])
        instance_type               = "t3.small"
        key_name                    = aws_key_pair.master_key.id
        vpc_security_group_ids      = [aws_security_group.ssh.id]
        subnet_id                   = aws_subnet.main.id
        associate_public_ip_address = true

        connection {
          type        = "ssh"
          user        = "ubuntu"
          private_key = file("./terraform_key")
          host        = self.public_ip
        }
      }
        `,
    [binding.aws],
    Snapshot.yes,
    Synth.never,
    {
      resources: ["aws_instance"],
    }
  );

  /**
   * Test for https://github.com/hashicorp/terraform-cdk/issues/2139
   *
   * This one currently fails because the convertion result looks like this:
   * new scaleway.object.ObjectResource(this, "some_file", { ...
   *
   * Which should be:
   * new scaleway.objectResource.ObjectResource(this, "some_file", { ...
   *
   * So it does already work for the class name but not for the namespace.
   */
  testCase.test(
    "handle special resource names",
    `
      provider "scaleway" {
        zone   = "fr-par-1"
        region = "fr-par"
      }

      resource "scaleway_object_bucket" "some_bucket" {
        name = "some-unique-name"
      }

      resource scaleway_object "some_file" {
        bucket = scaleway_object_bucket.some_bucket.name
        key = "object_path"

        file = "myfile"
        hash = filemd5("myfile")
      }
        `,
    [binding.scaleway],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["scaleway_object", "scaleway_object_bucket"],
    }
  );

  testCase.test(
    "handles special resource names without schema",
    `
      provider "scaleway" {
        zone   = "fr-par-1"
        region = "fr-par"
      }

      resource "scaleway_object_bucket" "some_bucket" {
        name = "some-unique-name"
      }

      resource scaleway_object "some_file" {
        bucket = scaleway_object_bucket.some_bucket.name
        key = "object_path"

        file = "myfile"
        hash = filemd5("myfile")
      }
        `,
    [],
    Snapshot.yes,
    Synth.never
  );

  testCase.test(
    "access use fqn for data source",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      data "aws_availability_zones" "changeme_az_list_ebs_snapshot" {
        state = "available"
      }
      resource "aws_ebs_volume" "changeme_ebs_volume_snapshot" {
        availability_zone = data.aws_availability_zones.changeme_az_list_ebs_snapshot.names[0]
        size              = 10
        type              = "standard"
        encrypted         = false
        tags = {
          Name = "changeme_ebs_volume_tag"
        }
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_ebs_volume"],
      dataSources: ["aws_availability_zones"],
    }
  );

  testCase.test(
    "handles JSON encoded blocks",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_ecs_task_definition" "client" {
        family                   = "client"
        requires_compatibilities = ["FARGATE"]
        # required for Fargate launch type
        memory       = 512
        cpu          = 256
        network_mode = "awsvpc"

        container_definitions = jsonencode([
          {
            name      = "client"
            image     = "crccheck/hello-world"
            cpu       = 0 # take up proportional cpu
            essential = true

            portMappings = [
              {
                containerPort = 8000
                hostPort      = 8000 # though, access to the ephemeral port range is needed to connect on EC2, the exact port is required on Fargate from a security group standpoint.
                protocol      = "tcp"
              }
            ]

            # Fake Service settings are set via Environment variables
            environment = [
              {
                name  = "NAME"
                value = "client"
              },
              {
                name  = "MESSAGE"
                value = "Hello from the client!"
              }
            ]
          }
        ])
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.no_missing_type_coercion,
    {
      resources: ["aws_ecs_task_definition"],
    }
  );

  testCase.test(
    "built-in data resource",
    `
    variable "revision" {
      default = 1
    }

    resource "terraform_data" "replacement" {
      input = var.revision
    }
  `,
    [],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["terraform_data"],
    }
  );
});
