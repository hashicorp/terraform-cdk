import { convert } from "../lib/index";

describe("convert", () => {
  describe("typescript", () => {
    it.each([
      {
        t: "output",
        hcl: `
        output "cidr_out" {
            value = "test"
        }`,
      },
      {
        t: "output-sensitive",
        hcl: `
        output "cidr_out" {
            value = "test"
            sensitive = true
        }`,
      },
      {
        t: "output-description",
        hcl: `
        output "cidr_out" {
            value = "test"
            sensitive = true
            description = "Best output"
        }`,
      },
      {
        t: "output-multiple",
        hcl: `
        output "first_cidr_out" {
            value = "first"
        }
        output "second_cidr_out" {
            value = "second"
        }`,
      },
      {
        t: "variable",
        hcl: `variable "weekday" {}`,
      },
      {
        t: "variable-default",
        hcl: `
        variable "availability_zone_names" {
            type    = list(string)
            default = ["us-west-1a"]
            description = "What AMI to use to create an instance"
        }`,
      },
    ])("handles $t configuration", async ({ hcl, t }) => {
      const code = await convert(`${t}.hcl`, hcl, { language: "typescript" });
      expect(code).toMatchSnapshot();
    });

    it.todo("handles variable configuration");
    it.todo("handles references");
    it.todo("handles provider configuration");
    it.todo("handles module configuration");
  });
});
