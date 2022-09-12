// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { extractJsonLogIfPresent } from "../../lib/server/terraform-logs";

describe("extractJsonLogIfPresent", () => {
  it("parses log lines", () => {
    expect(
      extractJsonLogIfPresent(
        `{"@level":"info","@message":"Terraform 1.1.7","@module":"terraform.ui","@timestamp":"2022-03-24T14:17:24.197605Z","terraform":"1.1.7","type":"version","ui":"1.0"}`
      )
    ).toMatchInlineSnapshot(`"Terraform 1.1.7"`);
  });

  it("parses other log lines", () => {
    expect(
      extractJsonLogIfPresent(
        `{"@level":"info","@message":"null_resource.sleep-58_null-resource_82B91199: Provisioning with 'local-exec'...","@module":"terraform.ui","@timestamp":"2022-03-24T14:17:28.041062Z","hook":{"resource":{"addr":"null_resource.sleep-58_null-resource_82B91199","module":"","resource":"null_resource.sleep-58_null-resource_82B91199","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-58_null-resource_82B91199","resource_key":null},"provisioner":"local-exec"},"type":"provision_start"}`
      )
    ).toMatchInlineSnapshot(
      `"null_resource.sleep-58_null-resource_82B91199: Provisioning with 'local-exec'..."`
    );
  });

  it("parses multiple log lines", () => {
    expect(
      extractJsonLogIfPresent(
        `Terraform v1.1.7
          on linux_amd64
          Initializing plugins and modules...
          {"@level":"info","@message":"Terraform 1.1.7","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:23.670459Z","terraform":"1.1.7","type":"version","ui":"1.0"}
          {"@level":"info","@message":"null_resource.sleep-78_null-resource_BC9416E8 (sleep-78/null-resource): Plan to create","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:25.720398Z","change":{"resource":{"addr":"null_resource.sleep-78_null-resource_BC9416E8","module":"","resource":"null_resource.sleep-78_null-resource_BC9416E8","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-78_null-resource_BC9416E8","resource_key":null},"action":"create"},"type":"planned_change"}
          {"@level":"info","@message":"null_resource.sleep-72_null-resource_6139DD69 (sleep-72/null-resource): Plan to create","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:25.720653Z","change":{"resource":{"addr":"null_resource.sleep-72_null-resource_6139DD69","module":"","resource":"null_resource.sleep-72_null-resource_6139DD69","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-72_null-resource_6139DD69","resource_key":null},"action":"create"},"type":"planned_change"}
          {"@level":"info","@message":"null_resource.sleep-71_null-resource_28FC0011 (sleep-71/null-resource): Plan to create","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:25.720700Z","change":{"resource":{"addr":"null_resource.sleep-71_null-resource_28FC0011","module":"","resource":"null_resource.sleep-71_null-resource_28FC0011","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-71_null-resource_28FC0011","resource_key":null},"action":"create"},"type":"planned_change"}
          {"@level":"info","@message":"null_resource.sleep-73_null-resource_48B30717 (sleep-73/null-resource): Plan to create","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:25.720720Z","change":{"resource":{"addr":"null_resource.sleep-73_null-resource_48B30717","module":"","resource":"null_resource.sleep-73_null-resource_48B30717","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-73_null-resource_48B30717","resource_key":null},"action":"create"},"type":"planned_change"}
          {"@level":"info","@message":"null_resource.sleep-79_null-resource_7E1E3312 (sleep-79/null-resource): Plan to create","@module":"terraform.ui","@timestamp":"2022-03-24T14:31:25.720738Z","change":{"resource":{"addr":"null_resource.sleep-79_null-resource_7E1E3312","module":"","resource":"null_resource.sleep-79_null-resource_7E1E3312","implied_provider":"null","resource_type":"null_resource","resource_name":"sleep-79_null-resource_7E1E3312","resource_key":null},"action":"create"},"type":"planned_change"}`
      )
    ).toMatchInlineSnapshot(`
      "Terraform v1.1.7
                on linux_amd64
                Initializing plugins and modules...
      Terraform 1.1.7
      null_resource.sleep-78_null-resource_BC9416E8 (sleep-78/null-resource): Plan to create
      null_resource.sleep-72_null-resource_6139DD69 (sleep-72/null-resource): Plan to create
      null_resource.sleep-71_null-resource_28FC0011 (sleep-71/null-resource): Plan to create
      null_resource.sleep-73_null-resource_48B30717 (sleep-73/null-resource): Plan to create
      null_resource.sleep-79_null-resource_7E1E3312 (sleep-79/null-resource): Plan to create"
    `);
  });

  it("removes any whitespace before json messages", () => {
    expect(
      extractJsonLogIfPresent(
        `{"@level":"info","@message":" Terraform 1.1.7","@module":"terraform.ui","@timestamp":"2022-03-24T14:17:24.197605Z","terraform":"1.1.7","type":"version","ui":"1.0"}`
      )
    ).toMatchInlineSnapshot(`"Terraform 1.1.7"`);
  });

  it("does not remove whitespace before non-json messages", () => {
    expect(
      extractJsonLogIfPresent(
        [
          "Terraform v1.1.7",
          "\ton linux_amd64",
          "\tInitializing plugins and modules...",
        ].join("\n")
      )
    ).toMatchInlineSnapshot(`
      "Terraform v1.1.7
      	on linux_amd64
      	Initializing plugins and modules..."
    `);
  });
});
