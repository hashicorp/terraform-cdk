import { convert } from "../lib/index";

describe("convert", () => {
  describe("typescript", () => {
    it.each([
      [
        "output",
        `
        output "cidr_out" {
            value = "test"
        }`,
      ],
      [
        "sensitive output",
        `
        output "cidr_out" {
            value = "test"
            sensitive = true
        }`,
      ],
      [
        "output withdescription",
        `
        output "cidr_out" {
            value = "test"
            sensitive = true
            description = "Best output"
        }`,
      ],
      [
        "multiple outputs",
        `
        output "first_cidr_out" {
            value = "first"
        }
        output "second_cidr_out" {
            value = "second"
        }`,
      ],
      ["variable", `variable "weekday" {}`],
      [
        "variable with default",
        `
        variable "availability_zone_names" {
            type    = list(string)
            default = ["us-west-1a"]
            description = "What AMI to use to create an instance"
        }`,
      ],
      ["empty provider", `provider "docker" {}`],
      [
        "provider with complex config",
        `
        provider "aws" {
          access_key                  = "mock_access_key"
          region                      = "us-east-1"
          secret_key                  = "mock_secret_key"
          skip_credentials_validation = true
          skip_metadata_api_check     = true
          skip_requesting_account_id  = true
        
          endpoints {
            dynamodb = "http://localhost:8000"
          }
        }
      `,
      ],
      [
        "simple resource",
        `
        resource "aws_vpc" "example" {
          cidr_block = "10.0.0.0/16"
        }`,
      ],
    ])("%s configuration", async (_name, hcl) => {
      const code = await convert(`file.hcl`, hcl, {
        language: "typescript",
      });
      expect(code).toMatchSnapshot();
    });
  });
});
