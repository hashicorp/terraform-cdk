import { AwsTerraformAdapter } from "../aws-adapter";
import { Aspects, TerraformResource, TerraformStack, Testing } from "cdktf";
import { CfnElement } from "aws-cdk-lib";
import { CloudFormationTemplate } from "../cfn";
import { Construct } from "constructs";
import { registerMapping } from "../mapping";
import { camelCase } from "camel-case";
import { snakeCase } from "snake-case";

describe("AwsTerraformAdapter", () => {
  let adapter: AwsTerraformAdapter;
  let stack: TerraformStack;
  beforeEach(() => {
    const app = Testing.app();
    stack = new TerraformStack(app, "test");
    adapter = new AwsTerraformAdapter(stack, "adapter");
  });

  describe("resolveIntrinsic", () => {
    it("should resolve Fn::GetAtt", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: { "Fn::GetAtt": ["another", "List"] },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
        "{
          \\"resource\\": {
            \\"test\\": {
              \\"adapter_another_C86ABFE2\\": {},
              \\"adapter_subject_24E89D84\\": {
                \\"value\\": \\"\${test.adapter_another_C86ABFE2.list}\\"
              }
            }
          }
        }"
      `);
    });

    it("should resolve Fn::Join", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Join": [
                  ",",
                  ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${join(\\\\\\",\\\\\\", [\\\\\\"one\\\\\\", \\\\\\"two\\\\\\", test.adapter_another_C86ABFE2.string])}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Select", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Select": [1, { "Fn::GetAtt": ["another", "List"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });

      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${element(test.adapter_another_C86ABFE2.list, 1)}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::GetAZs", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::GetAZs": [],
              },
              Value2: {
                "Fn::GetAZs": ["eu-central-1"],
              },
            },
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"data\\": {
    \\"aws_availability_zones\\": {
      \\"adapter_aws_azs_default_region_9CD033CD\\": {},
      \\"adapter_aws_azs_eu_central_1_B40FEB09\\": {
        \\"provider\\": \\"aws.eu_central_1\\"
      }
    }
  },
  \\"provider\\": {
    \\"aws\\": [
      {
        \\"alias\\": \\"eu_central_1\\",
        \\"region\\": \\"eu-central-1\\"
      }
    ]
  },
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names}\\",
        \\"value2\\": \\"\${data.aws_availability_zones.adapter_aws_azs_eu_central_1_B40FEB09.names}\\"
      }
    }
  },
  \\"terraform\\": {
    \\"required_providers\\": {
      \\"aws\\": {
        \\"source\\": \\"aws\\",
        \\"version\\": \\"~> 3.0\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Base64", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Base64": [{ "Fn::GetAtt": ["another", "String"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${base64encode(test.adapter_another_C86ABFE2.string)}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Cidr", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Cidr": ["192.168.0.0/24", "6", "5"],
              },
              Value2: {
                "Fn::Cidr": ["192.168.0.0/24", "1", "8"],
              },
            },
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${cidrsubnets(\\\\\\"192.168.0.0/24\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\")}\\",
        \\"value2\\": \\"\${cidrsubnets(\\\\\\"192.168.0.0/24\\\\\\", \\\\\\"8\\\\\\")}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::FindInMap", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::FindInMap": [
                  { "Fn::GetAtt": ["another", "Map"] },
                  "keyA",
                  { "Fn::GetAtt": ["another", "String"] },
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${test.adapter_another_C86ABFE2.map[\\\\\\"keyA\\\\\\"][test.adapter_another_C86ABFE2.string]}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Sub", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Sub": [
                  "this is the ${TEMPLATE} string. This will not be ${!REPLACED} but end up without the exclamation mark",
                  { TEMPLATE: { "Fn::GetAtt": ["another", "String"] } },
                ],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${replace(replace(\\\\\\"this is the $\${TEMPLATE} string. This will not be $\${!REPLACED} but end up without the exclamation mark\\\\\\", \\\\\\"$\${TEMPLATE}\\\\\\", test.adapter_another_C86ABFE2.string), \\\\\\"/\\\\\\\\\\\\\\\\$\\\\\\\\\\\\\\\\{!(\\\\\\\\\\\\\\\\w+)\\\\\\\\\\\\\\\\}/\\\\\\", \\\\\\"$\${$1}\\\\\\")}\\"
      }
    }
  }
}"
`);
    });

    it("should resolve Fn::Split", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {
          subject: {
            Type: "Test::Resource",
            Properties: {
              Value: {
                "Fn::Split": [",", { "Fn::GetAtt": ["another", "String"] }],
              },
            },
          },
          another: {
            Type: "Test::Resource",
            Properties: {},
          },
        },
      });
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${split(\\\\\\",\\\\\\", test.adapter_another_C86ABFE2.string)}\\"
      }
    }
  }
}"
`);
    });
  });

  describe("Conditions", () => {
    it("should create locals for conditions", () => {
      new StaticCfnConstruct(adapter, "cfn", {
        Resources: {},
        Conditions: {
          IsProd: { "Fn::Equals": ["A", "A"] },
          IsDev: { "Fn::Not": ["IsProd"] },
          And: { "Fn::And": [{ Condition: "IsProd" }, true, true] },
          Or: { "Fn::Or": [{ Condition: "IsProd" }, true, true] },
          If: { "Fn::If": ["IsProd", 1, 0] },
        },
      });
      // TODO: check how (if at all) literal true and false can be passed
      // TODO: check why "false" ends up as undefined
      expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"locals\\": {
    \\"adapter_condition_And_696B6B21\\": \\"\${((local.adapter_condition_IsProd_8FB293B1 && true) && true)}\\",
    \\"adapter_condition_If_4412FEF9\\": \\"\${local.adapter_condition_IsProd_8FB293B1 ? 1 : 0}\\",
    \\"adapter_condition_IsDev_FDA8D7BD\\": \\"\${!local.adapter_condition_IsProd_8FB293B1}\\",
    \\"adapter_condition_IsProd_8FB293B1\\": \\"\${(\\\\\\"A\\\\\\" == \\\\\\"A\\\\\\")}\\",
    \\"adapter_condition_Or_83D17798\\": \\"\${((local.adapter_condition_IsProd_8FB293B1 || true) || true)}\\"
  }
}"
`);
    });
  });
});

/**
 * Currently `Testing.synth` does not invoke Aspects, so we make sure this happens
 * this is not a correct (read complete) invocation of Aspects, but it invokes
 * the convertion of the AwsTerraformAdapter
 */
function synthWithAspects(stack: TerraformStack) {
  Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

  return Testing.synth(stack);
}

registerMapping("Test::Resource", {
  resource: (scope, id, props) => {
    const converted: { [i: string]: any } = {};
    // "PascalCase" to "camelCase" for all keys
    Object.keys(props).forEach((key) => {
      const cdktfKey = camelCase(key);
      converted[cdktfKey] = props[key];
      delete props[key];
    });
    return new TestResource(scope, id, converted);
  },
  attributes: {
    Ref: (r) => r.getStringAttribute("ref"),
    Arn: (r) => r.getStringAttribute("arn"),
    List: (r) => r.getListAttribute("list") as any,
    Bool: (r) => r.getBooleanAttribute("bool") as any,
    String: (r) => r.getStringAttribute("string"),
    Number: (r) => r.getNumberAttribute("number") as any,
    Map: (r) => r.getStringAttribute("map") as any,
  },
});

/**
 * resource for testing purposes that will just convert everything to snake case
 */
class TestResource extends TerraformResource {
  constructor(
    scope: Construct,
    id: string,
    private config: { [i: string]: any }
  ) {
    super(scope, id, { terraformResourceType: "test" });
  }
  synthesizeAttributes() {
    const converted: { [i: string]: any } = {};
    Object.keys(this.config).forEach((key) => {
      const cdktfKey = snakeCase(key);
      converted[cdktfKey] = this.config[key];
    });
    return converted;
  }
}

class StaticCfnConstruct extends CfnElement {
  constructor(
    scope: Construct,
    id: string,
    private cfn: CloudFormationTemplate
  ) {
    super(scope, id);
  }

  _toCloudFormation(): object {
    return this.cfn;
  }
}
