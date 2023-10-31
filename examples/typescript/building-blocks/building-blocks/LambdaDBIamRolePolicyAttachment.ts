import { Construct } from "constructs";
import {
  IamRolePolicyAttachment,
  IamRolePolicyAttachmentConfig,
} from "../.gen/providers/aws/iam-role-policy-attachment";

import { IamRole } from "../.gen/providers/aws/iam-role";

/**
 * A Building Block for IamRolePolicyAttachment
 * @defaults Uses the following defaults:
 *  {
 *   "policyArn": "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
 * }
 */
export class LambdaDBIamRolePolicyAttachment {
  public defaultValues = {
    policyArn:
      "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
  };
  public valueExtractorMap = {
    role: (role: IamRole | any) => {
      return role.name;
    },
  };
  constructor(
    scope: Construct,
    id: string,
    config: TypedIamRolePolicyAttachmentConfig
  ) {
    const resourceConfig = this._convertConfig(config);

    new IamRolePolicyAttachment(
      scope,
      id,
      resourceConfig as IamRolePolicyAttachmentConfig
    );
  }

  private _deepMerge(newConfig: any, defaultConfig: any): any {
    if (!newConfig && !defaultConfig) {
      return;
    }
    if (Array.isArray(newConfig) && Array.isArray(defaultConfig)) {
      return [
        {
          ...newConfig[0],
          ...defaultConfig[0],
        },
        this._deepMerge(newConfig.shift(), defaultConfig.shift()),
      ];
    } else {
      return {
        ...newConfig,
        ...defaultConfig,
      };
    }
  }

  private _convertConfig(typedConfig: any) {
    const userSpecifiedConfig =
      this._userSpecifiedAttributesConvert(typedConfig);
    const newConfig = this._populateDefaultValues(userSpecifiedConfig);
    return newConfig;
  }

  private _userSpecifiedAttributesConvert(typedConfig: any) {
    if (!typedConfig) {
      return;
    }
    type NewConfig = { [key: string]: any };
    let newConfig: NewConfig = {};
    for (const key in typedConfig) {
      type TypedConfigKey = keyof typeof typedConfig;
      const typeConfigKey = key as TypedConfigKey;
      if (key in this.valueExtractorMap) {
        type ValueExtractorKey = keyof typeof this.valueExtractorMap;
        const valueExtractorKey = key as ValueExtractorKey;
        newConfig[key] = this.valueExtractorMap[valueExtractorKey](
          typedConfig[typeConfigKey]
        );
      }
      // need to deal with the case that its an array as well
      else if (typeof typedConfig[key] === "object") {
        if (Array.isArray(typedConfig[key])) {
          const attributeArray = [];
          for (const attribute of typedConfig[key]) {
            attributeArray.push(
              this._userSpecifiedAttributesConvert(attribute)
            );
          }
          newConfig[key] = attributeArray;
        } else {
          newConfig[key] = this._userSpecifiedAttributesConvert(
            typedConfig[key]
          );
        }
      } else {
        newConfig[key] = typedConfig[key];
      }
    }
    return newConfig;
  }
  // still isn't working correctly, first element of array is repeated
  private _populateDefaultValues(userSpecifiedConfig: any) {
    type NewConfig = { [key: string]: any };
    let newConfig: NewConfig = userSpecifiedConfig;
    for (const key in this.defaultValues) {
      type DefaultValueKey = keyof typeof this.defaultValues;
      const defaultValueKey = key as DefaultValueKey;
      if (!newConfig.hasOwnProperty(key)) {
        newConfig[key] = this.defaultValues[defaultValueKey];
      } else if (
        newConfig.hasOwnProperty(key) &&
        typeof newConfig[key] === "object"
      ) {
        newConfig[key] = this._deepMerge(
          newConfig[key],
          this.defaultValues[defaultValueKey]
        );
      }
    }
    return newConfig;
  }
}

export interface TypedIamRolePolicyAttachmentConfig {
  id?: string | undefined;
  policyArn?: string;
  role: IamRole;
}
