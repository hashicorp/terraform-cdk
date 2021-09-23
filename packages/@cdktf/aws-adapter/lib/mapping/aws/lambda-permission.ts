//

import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";
import { LambdaPermission } from "../../../.gen/providers/aws";

registerMapping("AWS::Lambda::Permission", {
  resource: createGuessingResourceMapper(LambdaPermission),
  attributes: {
    Ref: (permission: LambdaPermission) => permission.id,
  },
});

// FIXME: idea write docs on how to add / register a custom mapping (maybe they need to be written in TypeScript at first)
