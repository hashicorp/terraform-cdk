import { Testing, TerraformStack, TerraformOutput, Fn } from "../lib";
import { TerraformVariable } from "../lib/terraform-variable";

test("static values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.abs(-42),
  });
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${abs(var.test-var)}\\"
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${max(10, var.test-var, 200)}\\"
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"list(number)\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${max(var.test-var)}\\"
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${parseInt(\\\\\\"-210\\\\\\", 10)}\\"
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${format(\\\\\\"There are %d out of %d lights are on in %s\\\\\\", var.test-var, 4, \\\\\\"Hamburg\\\\\\")}\\"
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"index\\": {
          \\"type\\": \\"number\\"
        },
        \\"list\\": {
          \\"type\\": \\"list(object({\\\\n      internal = number\\\\n      external = number\\\\n      protocol = string\\\\n    }))\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${try(lookup(element(var.list, var.index), \\\\\\"internal\\\\\\", \\\\\\"waaat\\\\\\"), timestamp(), uuid())}\\"
        }
      }
    }"
  `);
});

test("function with infinite number of args", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "list(number)",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.merge([variable.value, [1, 2, 3]]),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"list(number)\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${merge(var.test-var, [1, 2, 3])}\\"
        }
      }
    }"
  `);
});

test("complex example", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable1 = new TerraformVariable(stack, "test-var1", {
    type: "list(number)",
  });
  const variable2 = new TerraformVariable(stack, "test-var2", {
    type: "list(number)",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.cidrsubnet(
      Fn.element(Fn.merge([variable1.value, variable2.value]), 3),
      4,
      2
    ),
  });

  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var1\\": {
          \\"type\\": \\"list(number)\\"
        },
        \\"test-var2\\": {
          \\"type\\": \\"list(number)\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${cidrsubnet(element(merge(var.test-var1, var.test-var2), 3), 4, 2)}\\"
        }
      }
    }"
  `);
});

test.only("interpolation within string ", () => {
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
      \\"//\\": {
        \\"metadata\\": {
          \\"version\\": \\"stubbed\\",
          \\"stackName\\": \\"test\\",
          \\"backend\\": \\"local\\"
        }
      },
      \\"variable\\": {
        \\"test-var\\": {
          \\"type\\": \\"number\\"
        }
      },
      \\"output\\": {
        \\"test-output\\": {
          \\"value\\": \\"\${cidrsubnet(\\\\\\"172.16.0.0/\${var.test-var}\\\\\\", 2, 3)}\\"
        }
      }
    }"
  `);
});
