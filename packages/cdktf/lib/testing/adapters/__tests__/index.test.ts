// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing } from "../../..";
import { TestResource } from "../../../../test/helper";
import { TestDataSource } from "../../../../test/helper/data-source";
import { Construct } from "constructs";

describe("#synthScope", () => {
  test("basic example", () => {
    expect(
      Testing.synthScope((stack) => {
        new TestDataSource(stack, "test-data-source", {
          name: "foo",
        });

        new TestResource(stack, "test-resource", {
          name: "bar",
        });
      })
    ).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"test_data_source\\": {
            \\"test-data-source\\": {
              \\"name\\": \\"foo\\"
            }
          }
        },
        \\"resource\\": {
          \\"test_resource\\": {
            \\"test-resource\\": {
              \\"name\\": \\"bar\\"
            }
          }
        }
      }"
    `);
  });

  test("using resource", () => {
    class MyResource extends Construct {
      public resource: TestResource;

      constructor(scope: Construct, id: string) {
        super(scope, id);

        this.resource = new TestResource(this, "test-resource", {
          name: "bar",
        });
      }
    }
    expect(
      Testing.synthScope((stack) => {
        const res = new MyResource(stack, "my-resource");
        new TestResource(stack, "resource", {
          name: res.resource.stringValue,
        });
      })
    ).toMatchInlineSnapshot(`
      "{
        \\"resource\\": {
          \\"test_resource\\": {
            \\"my-resource_test-resource_4F34504B\\": {
              \\"name\\": \\"bar\\"
            },
            \\"resource\\": {
              \\"name\\": \\"\${test_resource.my-resource_test-resource_4F34504B.string_value}\\"
            }
          }
        }
      }"
    `);
  });
});
