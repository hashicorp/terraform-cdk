/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { binding, Snapshot, Synth, testCase } from "./helpers/convert";

describe("JSII Language Support", () => {
  testCase.test(
    "complex aws example",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_kms_key" "examplekms" {
      description             = "KMS key 1"
      deletion_window_in_days = 7
    }
    
    resource "aws_s3_bucket" "examplebucket" {
      bucket = "examplebuckettftest"
      acl    = "private"
    }
    
    resource "aws_s3_bucket_object" "examplebucket_object" {
      key        = "someobject"
      bucket     = aws_s3_bucket.examplebucket.bucket
      source     = "index.html"
      kms_key_id = aws_kms_key.examplekms.arn
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
    }
    `,
    [binding.aws],
    Snapshot.yes_all_languages,
    Synth.yes_but_only_typescript_right_now_because_it_breaks,
  );
});
