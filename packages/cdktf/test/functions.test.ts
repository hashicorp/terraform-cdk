// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformOutput, Fn } from "../lib";
import { TerraformVariable } from "../lib/terraform-variable";
import { TerraformLocal } from "../lib/terraform-local";
import { ref } from "../lib/tfExpression";
import { Token } from "../lib/tokens/token";

test("static values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.abs(-42),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${abs(-42)}\\"
        }
      }
    }"
  `);
});

test("dynamic values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.abs(variable.value),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${abs(var.test-var)}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      }
    }"
  `);
});

test("spreaded mixed values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.max([10, variable.value, 200]),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${max(10, var.test-var, 200)}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      }
    }"
  `);
});

test("spreaded token value", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "list(number)",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.max([variable.value]),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${max(var.test-var)}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"list(number)\\"
        }
      }
    }"
  `);
});

test("string values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.parseInt("-210", 10),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${parseint(\\\\\\"-210\\\\\\", 10)}\\"
        }
      }
    }"
  `);
});

test("mixed string spreads values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.format("There are %d out of %d lights are on in %s", [
      variable.value,
      4,
      "Hamburg",
    ]),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${format(\\\\\\"There are %d out of %d lights are on in %s\\\\\\", var.test-var, 4, \\\\\\"Hamburg\\\\\\")}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      }
    }"
  `);
});

test("combined functions", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const index = new TerraformVariable(stack, "index", {
    type: "number",
  });

  const list = new TerraformVariable(stack, "list", {
    type: `list(object({
      internal = number
      external = number
      protocol = string
    }))`,
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.try([
      Fn.lookup(Fn.element(list.value, index.value), "internal", "waaat"),
      Fn.timestamp(),
      Fn.uuid(),
    ]),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${try(lookup(element(var.list, var.index), \\\\\\"internal\\\\\\", \\\\\\"waaat\\\\\\"), timestamp(), uuid())}\\"
        }
      },
      \\"variable\\": {
        \\"index\\": {
          \\"type\\": \\"number\\"
        },
        \\"list\\": {
          \\"type\\": \\"list(object({\\\\n      internal = number\\\\n      external = number\\\\n      protocol = string\\\\n    }))\\"
        }
      }
    }"
  `);
});

test("function with varadic args", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "list(number)",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.mergeLists([variable.value, [1, 2, 3]]),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${merge(var.test-var, [1, 2, 3])}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"list(number)\\"
        }
      }
    }"
  `);
});

test("complex example", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable1 = new TerraformVariable(stack, "test-var1", {
    type: "object({ key = number})",
  });
  const variable2 = new TerraformVariable(stack, "test-var2", {
    type: "object({ key = number})",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.cidrsubnet(
      Fn.lookup(
        Fn.mergeMaps([variable1.value, variable2.value]),
        "key",
        "default"
      ),
      4,
      2
    ),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${cidrsubnet(lookup(merge(var.test-var1, var.test-var2), \\\\\\"key\\\\\\", \\\\\\"default\\\\\\"), 4, 2)}\\"
        }
      },
      \\"variable\\": {
        \\"test-var1\\": {
          \\"type\\": \\"object({ key = number})\\"
        },
        \\"test-var2\\": {
          \\"type\\": \\"object({ key = number})\\"
        }
      }
    }"
  `);
});

test("interpolation within string ", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.cidrsubnet(`172.16.0.0/${variable.value}`, 2, 3),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${cidrsubnet(\\\\\\"172.16.0.0/\${var.test-var}\\\\\\", 2, 3)}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      }
    }"
  `);
});

test("functions with object inputs", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: `number`,
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.lookup(
      { var: variable.value, stat: 4, internal: true, yes: "no" },
      "internal",
      "waaat"
    ),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${lookup({var = var.test-var, stat = 4, internal = true, yes = \\\\\\"no\\\\\\"}, \\\\\\"internal\\\\\\", \\\\\\"waaat\\\\\\")}\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      }
    }"
  `);
});

test("quoted primitives in list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.join(", ", ["world", "hello"]),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${join(\\\\\\", \\\\\\", [\\\\\\"world\\\\\\", \\\\\\"hello\\\\\\"])}\\"
        }
      }
    }"
  `);
});

test("quoted primitives, unquoted functions", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.join(", ", [Fn.join(" ", Fn.reverse(["world", "hello"]))]),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${join(\\\\\\", \\\\\\", [join(\\\\\\" \\\\\\", reverse([\\\\\\"world\\\\\\", \\\\\\"hello\\\\\\"]))])}\\"
        }
      }
    }"
  `);
});

test("nested objects and arrays as args", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.jsonencode({
      Statement: [
        {
          Action: "sts:AssumeRole",
          Effect: "Allow",
          Principal: { Service: "lambda.amazonaws.com" },
        },
      ],
      Version: "2012-10-17",
    }),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${jsonencode({Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"})}\\"
        }
      }
    }"
  `);
});

test("terraform local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const local = new TerraformLocal(stack, "list", ["world", "hello"]);

  new TerraformOutput(stack, "test-output", {
    value: Fn.reverse(local.asList),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"locals\\": {
        \\"list\\": [
          \\"world\\",
          \\"hello\\"
        ]
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${reverse(local.list)}\\"
        }
      }
    }"
  `);
});

test("undefined and null", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const local = new TerraformLocal(stack, "value", "hello world");

  new TerraformOutput(stack, "test-output", {
    value: Fn.coalesce([null, local.asString, undefined, 42, false]),
  });
  new TerraformOutput(stack, "json-object", {
    value: Fn.jsonencode({ a: "hello", b: 123, c: null, d: undefined }),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"locals\\": {
        \\"value\\": \\"hello world\\"
      },
      \\"output\\": {
        \\"json-object\\": {
          \\"value\\": \\"\${jsonencode({a = \\\\\\"hello\\\\\\", b = 123, c = null})}\\"
        },
        \\"test-output\\": {
          \\"value\\": \\"\${coalesce(local.value, 42, false)}\\"
        }
      }
    }"
  `);
});

describe("throws error on unescaped double quote string inputs", () => {
  const testsNotOk = ['"', '\\\\"', '\\\\\\\\"', '\\ \\\\"'];

  it.each(testsNotOk)("%s", (testNotOk) => {
    expect(() => {
      const app = Testing.app();
      const stack = new TerraformStack(app, "test");
      new TerraformOutput(stack, "test-output", {
        value: Fn.md5(testNotOk),
      });
      Testing.synth(stack);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe("throws no error on valid escaped double quote string inputs", () => {
  const testsOk = [
    "",
    '\\"',
    '\\\\\\"',
    '\\ \\\\\\"',
    '\\ \\"',
    "\\abc\\def\\",
    "\\\\abc\\\\def\\\\",
  ];

  it.each(testsOk)("%s", (testOk) => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    new TerraformOutput(stack, "test-output", {
      value: Fn.md5(testOk),
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

test("throws no error when wrapping unescaped double quotes in Fn.rawString", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TerraformOutput(stack, "test-output", {
    value: Fn.md5(Fn.rawString(`"`)),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${md5(\\\\\\"\\\\\\\\\\\\\\"\\\\\\")}\\"
        }
      }
    }"
  `);
});

test("rawString escapes correctly", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TerraformLocal(stack, "test", {
    default: "abc",
    plain: Fn.rawString("abc"),
    infn: Fn.base64encode(Fn.rawString("abc")),
    quotes: Fn.rawString(`"`),
    doublequotes: Fn.rawString(`""`),
    template: Fn.rawString("${TEMPLATE}"),
  });

  const str = Testing.synth(stack);
  const json = JSON.parse(str);

  const bslsh = `\\`; // a single backslash
  expect(json.locals.test).toHaveProperty("default", "abc");
  expect(json.locals.test).toHaveProperty("plain", "abc");
  expect(json.locals.test).toHaveProperty("infn", '${base64encode("abc")}');
  expect(json.locals.test).toHaveProperty("quotes", `${bslsh}"`);
  expect(json.locals.test).toHaveProperty("doublequotes", `${bslsh}"${bslsh}"`);
  expect(json.locals.test).toHaveProperty("template", "$${TEMPLATE}");
});

test("tomap does not destroy incoming ref", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  expect(
    Testing.synthScope(
      (scope) =>
        new TerraformLocal(
          scope,
          "test",
          Fn.tomap(Token.asString(ref("test.instance.attr", stack)))
        )
    )
  ).toMatchInlineSnapshot(`
    "{
      \\"locals\\": {
        \\"test\\": \\"\${tomap(test.instance.attr)}\\"
      }
    }"
  `);
});

it("errors mentioning function name and argument", () => {
  expect(() =>
    Fn.replace("this value is ok", `this one " not`, "this is okay")
  ).toThrowErrorMatchingInlineSnapshot(
    `"Argument 1 of replace failed the validation: Error: 'this one \\" not' can not be used as value directly since it has unescaped double quotes in it. To safely use the value please use Fn.rawString on your string."`
  );
});
