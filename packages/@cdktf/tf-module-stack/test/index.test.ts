import { NullProvider, Resource } from "@cdktf/provider-null";
import { RemoteBackend, Testing } from "cdktf";
import { Construct } from "constructs";
import { TFModuleStack } from "../src";
import { TFModuleVariable, ProviderRequirement } from "../src/index";

test("synthesizes a specific provider", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"2.1.2\\"
          }
        }
      }
    }"
  `);
});

test("synthesizes an abstract provider", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ProviderRequirement(this, "null", ">= 2.0.0");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"version\\": \\">= 2.0.0\\"
          }
        }
      }
    }"
  `);
});

test("synthesizes a provider with a specific source", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ProviderRequirement(this, "null", ">= 2.0.0", "hashicorp/null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"hashicorp/null\\",
            \\"version\\": \\">= 2.0.0\\"
          }
        }
      }
    }"
  `);
});

test("synthesizes no backend", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new RemoteBackend(this, {
        organization: "test",
        workspaces: [{ name: "test" }],
      });
      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"2.1.2\\"
          }
        }
      }
    }"
  `);
});

test("synthesizes variables", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new TFModuleVariable(this, "my_variable", {
        type: "string",
      });
      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"2.1.2\\"
          }
        }
      },
      \\"variable\\": {
        \\"my_variable\\": {
          \\"type\\": \\"string\\"
        }
      }
    }"
  `);
});
