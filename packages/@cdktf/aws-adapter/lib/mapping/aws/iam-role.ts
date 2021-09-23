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

// old and incomplete
// registerMapping("AWS::IAM::Role", {
//   resource: (scope, id, props) => {
//     console.log({ props });

//     const assumeRolePolicyDocument = props.AssumeRolePolicyDocument;
//     delete props.AssumeRolePolicyDocument;
//     const managedPolicyArns = props.ManagedPolicyArns;
//     delete props.ManagedPolicyArns;

//     return new IamRole(scope, id, {
//       assumeRolePolicy: JSON.stringify(assumeRolePolicyDocument),
//       managedPolicyArns,
//     });
//   },
//   attributes: {},
// });
