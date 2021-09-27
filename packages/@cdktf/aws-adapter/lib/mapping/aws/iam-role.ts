import { registerMapping } from "../index";
import { IamRole } from "@cdktf/provider-aws";
import { createGuessingResourceMapper } from "../helper";

registerMapping("AWS::IAM::Role", {
  resource: createGuessingResourceMapper(IamRole, {
    AssumeRolePolicyDocument: (doc) => ({
      tfAttributeName: "assumeRolePolicy",
      value: JSON.stringify(doc),
    }),
  }),
  attributes: {
    Arn: (role: IamRole) => role.arn,
    Ref: (role: IamRole) => role.id,
  },
});
