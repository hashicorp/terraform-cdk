import { readSchema } from "../../lib/get/generator/provider-schema";
import { ConstructsMakerModuleTarget, ConstructsMakerProviderTarget, Language } from "../../lib/get/constructs-maker";
import { TerraformModuleConstraint, TerraformProviderConstraint } from "../../lib/config";

describe("readSchema", () => {
  beforeAll(() => {
    jest.setTimeout(60000)
  })

  it("generates a single provider schema", async () => {
    const provider = new TerraformProviderConstraint('hashicorp/null@3.1.0')
    const targets = new ConstructsMakerProviderTarget(provider, Language.TYPESCRIPT)
    const result = await readSchema([targets])
    expect(result).toMatchSnapshot();
  });

  it("generates a single module schema", async () => {
    const module = new TerraformModuleConstraint('terraform-aws-modules/iam/aws//modules/iam-account@3.12.0')
    const targets = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT)
    const result = await readSchema([targets])
    expect(result).toMatchSnapshot();
  });

  it("generates a more complex schema", async () => {
    const module = new TerraformModuleConstraint('terraform-aws-modules/eks/aws@7.0.1')
    const targets = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT)
    const result = await readSchema([targets])
    expect(result).toMatchSnapshot();
  });

});
