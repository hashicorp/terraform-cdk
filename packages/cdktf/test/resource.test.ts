// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformElement,
  Fn,
  TerraformIterator,
} from "../lib";
import { TestProvider, TestResource, OtherTestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";
import { TerraformOutput } from "../lib/terraform-output";
import { Construct } from "constructs";

test("minimal configuration", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "foo",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with provider alias", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const provider = new TestProvider(stack, "aliased-provider", {
    alias: "foo",
    accessKey: "123",
  });

  new TestResource(stack, "test", {
    name: "bar",
    provider,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("provider setter", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const provider = new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  resource.provider = provider;

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("resource fqn", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  new TerraformOutput(stack, "result", {
    value: resource.fqn,
  });

  expect(JSON.parse(Testing.synth(stack) as any).output.result.value).toEqual(
    "${test_resource.test}"
  );
});

test("fqn is stable", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const elementWithFQN = new TerraformElement(stack, "test", "valid_type");
  const fqn = elementWithFQN.fqn;
  expect(elementWithFQN.fqn).toBe(fqn);

  // May not override logical id after fqn has been requested
  expect(() => elementWithFQN.overrideLogicalId("new-id")).toThrow();

  const elementWithoutFQN = new TerraformElement(stack, "test2");
  // May not request fqn on element without element type
  expect(() => elementWithoutFQN.fqn).toThrow();
});

test("serialize list interpolation", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});
  resource.names = otherResource.names;

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with complex computed list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});

  new TestResource(stack, "test", {
    name: otherResource.complexComputedList.get(0).id,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("do not change capitalization of tags", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "bar",
    tags: {
      Tag: "isWorking",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("do not change capitalization of arbritary nested types", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "bar",
    nestedType: {
      Tag: "isDowncased",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dependent resource", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const dataSource = new TestDataSource(stack, "data_source", {
    name: "foo",
  });

  new TestResource(stack, "resource", {
    name: "foo",
    dependsOn: [dataSource],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("numeric attributes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });

  new TerraformOutput(stack, "combined-string-number", {
    value: `${foo.stringValue} / 23.324 / ${foo.numericValue} / 42`,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("tokens as ids", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });

  expect(() => {
    new TestResource(stack, `resource-${foo.stringValue}`, {
      name: "foo",
    });
  }).toThrowErrorMatchingInlineSnapshot(
    `"You cannot use a Token (e.g. a reference to an attribute) as the id of a construct"`
  );
});

test("number[] attributes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });

  new TerraformOutput(stack, "number-list", {
    value: foo.numberList,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("using the same reference in two contexts", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });
  const reference = foo.stringValue;

  new TestResource(stack, "plain-function", {
    name: `plain:${reference}|inFunction:${Fn.lower(reference)}`,
  });

  new TestResource(stack, "function-plain", {
    name: `inFunction:${Fn.lower(reference)}|plain:${reference}`,
  });

  new TestResource(stack, "join", {
    name: `first:${Fn.join(",", [
      reference,
      `this is the ref: ${reference}`,
    ])}|second:${Fn.join(",", [`this is the ref: ${reference}`, reference])}`,
  });

  const q = JSON.parse(Testing.synth(stack)).resource.test_resource;

  expect(q["plain-function"].name).toBe(
    "plain:${test_resource.resource.string_value}|inFunction:${lower(test_resource.resource.string_value)}"
  );
  expect(q["function-plain"].name).toBe(
    "inFunction:${lower(test_resource.resource.string_value)}|plain:${test_resource.resource.string_value}"
  );
  expect(q["join"].name).toBe(
    `first:\${join(",", [test_resource.resource.string_value, "this is the ref: \${test_resource.resource.string_value}"])}|second:\${join(",", ["this is the ref: \${test_resource.resource.string_value}", test_resource.resource.string_value])}`
  );
});

it("supports file provisioner", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "content", {
    name: "foo",
    provisioners: [
      { type: "file", destination: "hello.txt", content: "my-content" },
    ],
  });
  new TestResource(stack, "source", {
    name: "bar",
    provisioners: [
      { type: "file", destination: "world.txt", source: "my.txt" },
    ],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

it("supports local-exec provisioner", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [{ type: "local-exec", command: "echo 'hello' > world.txt" }],
  });

  new TestResource(stack, "advanced", {
    name: "foo",
    provisioners: [
      {
        type: "local-exec",
        command: 'echo "hello $person" > greeting.txt',
        workingDir: "/tmp",
        environment: {
          person: "daniel",
        },
        interpreter: ["/bin/bash", "-c"],
      },
    ],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

it("maintains the same order of provisioner", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("includes import block when import is present", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "foo",
  }).importFrom("testId");
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("includes import block when import is present, provider given", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const provider = new TestProvider(stack, "provider", {
    alias: "foo",
  });
  new TestResource(stack, "test", {
    name: "foo",
  }).importFrom("testId", provider);
  expect(Testing.synth(stack)).toMatchSnapshot();
});

it("moves resource to greater nesting in contained construct", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test");

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual("test_resource.simple");
  expect(synthedStack.moved[0].to).toEqual(
    "test_resource.construct_nested-construct_simple_2C3755B0"
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "construct_nested-construct_simple_2C3755B0"
  );
  // Must not include old resource being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple"
  );
});

it("moves resource to a lesser nesting from contained construct", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test");
  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual(
    "test_resource.construct_nested-construct_simple_2C3755B0"
  );
  expect(synthedStack.moved[0].to).toEqual("test_resource.simple");
  expect(Object.keys(synthedStack.resource.test_resource)).toContain("simple");
  // Must not include old resource being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "construct_nested-construct_simple_2C3755B0"
  );
});

it("moves resource to be in composition with foreach using list iterator", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const iterator = TerraformIterator.fromList(["foo-one", "foo-two"]);

  new TestResource(stack, "simple-foreach", {
    forEach: iterator,
    name: iterator.value,
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test");

  new TestResource(stack, "simple", {
    name: "foo-one",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test", "foo-one");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual("test_resource.simple");
  expect(synthedStack.moved[0].to).toEqual(
    `test_resource.simple-foreach[\"foo-one\"]`
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "simple-foreach"
  );
  // Must not include old resource being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple"
  );
});

it("moves resource to be in composition with foreach using complex iterator", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const complexIterator = TerraformIterator.fromMap({
    "simple-foreach-one": {
      name: "foo-one",
      tags: {
        tag1: "tag1",
      },
    },
    "simple-foreach-two": {
      name: "foo-two",
      tags: {
        tag2: "tag2",
      },
    },
  });

  new TestResource(stack, "simple-foreach", {
    forEach: complexIterator,
    name: complexIterator.getString("name"),
    tags: complexIterator.getMap("tags"),
  }).addMoveTarget("test");

  new TestResource(stack, "simple", {
    name: "foo-one",
    tags: {
      tag1: "tag1",
    },
  }).moveTo("test", "simple-foreach-one");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual("test_resource.simple");
  expect(synthedStack.moved[0].to).toEqual(
    `test_resource.simple-foreach[\"simple-foreach-one\"]`
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "simple-foreach"
  );
  // Must not include old resource being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple"
  );
});

it("moves multiple resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test-1");

  new TestResource(nestedContruct, "simple-2", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test-2");

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test-1");

  new TestResource(stack, "simple-2", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test-2");
  //console.log(Testing.synth(stack))
  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual("test_resource.simple");
  expect(synthedStack.moved[0].to).toEqual(
    "test_resource.construct_nested-construct_simple_2C3755B0"
  );
  expect(synthedStack.moved[1].from).toEqual("test_resource.simple-2");
  expect(synthedStack.moved[1].to).toEqual(
    "test_resource.construct_nested-construct_simple-2_078CE0AF"
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "construct_nested-construct_simple-2_078CE0AF"
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "construct_nested-construct_simple_2C3755B0"
  );
  // Must not include old resources being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple"
  );
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple-2"
  );
});

it("moves correctly when target set after call to moveTo", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test");

  const resource = new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  });
  resource.addMoveTarget("test");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack.moved[0].from).toEqual("test_resource.simple");
  expect(synthedStack.moved[0].to).toEqual(
    "test_resource.construct_nested-construct_simple_2C3755B0"
  );
  expect(Object.keys(synthedStack.resource.test_resource)).toContain(
    "construct_nested-construct_simple_2C3755B0"
  );
  // Must not include old resource being moved from
  expect(Object.keys(synthedStack.resource.test_resource)).not.toContain(
    "simple"
  );
});

it.only("override logical ID - before moveTo", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const resource = new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  });
  resource.overrideLogicalId("old_logical_id");
  resource.moveToId("test_resource.construct_nested-construct_simple_2C3755B0");

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  });

  const synthedStack = JSON.parse(Testing.synth(stack));
  console.log(synthedStack);
  expect(synthedStack).toMatchInlineSnapshot(`
    {
      "moved": [
        {
          "from": "test_resource.old_logical_id",
          "to": "test_resource.construct_nested-construct_simple_2C3755B0",
        },
      ],
      "provider": {
        "test": [
          {},
        ],
      },
      "resource": {
        "test_resource": {
          "construct_nested-construct_simple_2C3755B0": {
            "name": "foo",
            "provisioner": [
              {
                "local-exec": {
                  "command": "echo 'hello' > world.txt",
                },
              },
              {
                "local-exec": {
                  "command": "echo 'hello' > world1.txt",
                },
              },
              {
                "local-exec": {
                  "command": "echo 'hello' > world2.txt",
                },
              },
            ],
          },
        },
      },
      "terraform": {
        "required_providers": {
          "test": {
            "version": "~> 2.0",
          },
        },
      },
    }
  `);
});

it.only("override logical ID - before addTarget", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).hasMoved();

  const resource = new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  });

  resource.overrideLogicalId("old_logical_id");
  resource.moveFromId("test_resource.simple");

  const synthedStack = JSON.parse(Testing.synth(stack));
  expect(synthedStack).toMatchInlineSnapshot(`
    {
      "moved": [
        {
          "from": "test_resource.simple",
          "to": "test_resource.old_logical_id",
        },
      ],
      "provider": {
        "test": [
          {},
        ],
      },
      "resource": {
        "test_resource": {
          "old_logical_id": {
            "name": "foo",
            "provisioner": [
              {
                "local-exec": {
                  "command": "echo 'hello' > world.txt",
                },
              },
              {
                "local-exec": {
                  "command": "echo 'hello' > world1.txt",
                },
              },
              {
                "local-exec": {
                  "command": "echo 'hello' > world2.txt",
                },
              },
            ],
          },
        },
      },
      "terraform": {
        "required_providers": {
          "test": {
            "version": "~> 2.0",
          },
        },
      },
    }
  `);
});
