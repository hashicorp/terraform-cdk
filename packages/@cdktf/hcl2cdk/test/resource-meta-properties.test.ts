// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("meta-properties", () => {
  describe("depends_on", () => {
    testCase.test(
      "depends on",
      `
      provider "aws" {
        region = "us-east-1"
      }
      resource "aws_iam_role_policy" "example" {
        name   = "example"
        role   = "role"
        policy = jsonencode({
          "Statement" = [{
            "Action" = "s3:*",
            "Effect" = "Allow",
          }],
        })
      }
      
      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        depends_on = [
          aws_iam_role_policy.example
        ]
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );
  });

  describe("provider", () => {
    testCase.test(
      "passing providers",
      `
      provider "google" {
        region = "us-central1"
      }
      
      # alternate configuration, whose alias is "europe"
      provider "google" {
        alias  = "europe"
        region = "europe-west1"
      }

      resource "google_compute_instance" "default" {
        provider = google.europe
        
        name         = "test"
        machine_type = "e2-medium"
        zone         = "us-central1-a"
      
        tags = ["foo", "bar"]
      
        boot_disk {
          initialize_params {
            image = "debian-cloud/debian-11"
            labels = {
              my_label = "value"
            }
          }
        }
      
        scratch_disk {
          interface = "SCSI"
        }
      
        network_interface {
          network = "default"
      
          access_config {
          }
        }
      
        metadata = {
          foo = "bar"
        }
      
        metadata_startup_script = "echo hi > /test.txt"
      }
      `,
      [binding.google],
      Snapshot.yes,
      Synth.yes,
    );
  });

  describe("lifecycle", () => {
    testCase.test(
      "all lifecycle properties",
      `
      provider "aws" {
        region = "us-east-1"
      }
      resource "aws_iam_role_policy" "example" {
        name   = "example"
        role   = "role"
        policy = jsonencode({
          "Statement" = [{
            "Action" = "s3:*",
            "Effect" = "Allow",
          }],
        })
      }

      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        lifecycle {
          create_before_destroy = true
          prevent_destroy = true
          ignore_changes = [
            "ami",
            "instance_type"
          ]
          replace_triggered_by = [
            aws_iam_role_policy.example.id
          ]
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );

    testCase.test(
      "preconditions and postconditions",
      `
      provider "aws" {
        region = "us-east-1"
      }
      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        lifecycle {
          precondition {
            condition = self.tags["Component"] == "nomad-server"
            error_message = "Please add the nomad-server tag to this instance."
          }

          postcondition {
            condition     = self.public_dns != ""
            error_message = "EC2 instance must be in a VPC that has public DNS hostnames enabled."
          }
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );
  });

  describe("provisioner", () => {
    testCase.test(
      "file",
      `
      provider "aws" {
        region = "us-east-1"
      }
      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        
        provisioner "file" {
          source      = "conf/myapp.conf"
          destination = "/etc/myapp.conf"
        }

        provisioner "file" {
          content     = "ami used: \${self.ami}"
          destination = "/tmp/file.log"
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );

    testCase.test(
      "local-exec",
      `
      provider "aws" {
        region = "us-east-1"
      }
      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        
        provisioner "local-exec" {
          command = "echo \${self.private_ip} >> private_ips.txt"
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );

    testCase.test(
      "remote-exec with global connection block",
      `
      provider "aws" {
        region = "us-east-1"
      }

      resource "aws_instance" "web" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
      }

      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
        
        connection {
          type     = "ssh"
          user     = "root"
          password = "password"
          host     = self.public_ip
        }
      
        provisioner "remote-exec" {
          inline = [
            "puppet apply",
            "consul join \${aws_instance.web.private_ip}",
          ]
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );

    testCase.test(
      "remote-exec with connection block",
      `
      provider "aws" {
        region = "us-east-1"
      }
      
      resource "aws_instance" "web" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
      }

      resource "aws_instance" "example" {
        ami           = "ami-a1b2c3d4"
        instance_type = "t2.micro"
        iam_instance_profile = "aws_iam_instance_profile"
      
      
        provisioner "remote-exec" {
          inline = [
            "puppet apply",
            "consul join \${aws_instance.web.private_ip}",
          ]
            
          connection {
            type     = "ssh"
            user     = "root"
            password = "password"
            host     = self.public_ip
          }
        }
      }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.yes,
    );
  });
});
