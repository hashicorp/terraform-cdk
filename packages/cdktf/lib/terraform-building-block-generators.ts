// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Project } from "ts-morph";

const privateFunctions = `
private _deepMerge(newConfig: any, defaultConfig: any): any {
    if (!newConfig && !defaultConfig) {
        return
    }
    if (Array.isArray(newConfig) && Array.isArray(defaultConfig)) {
        return [
            {
                ...newConfig[0],
                ...defaultConfig[0]
            },
            this._deepMerge(newConfig.shift(), defaultConfig.shift())
        ]
    } else {
        return {
            ...newConfig,
            ...defaultConfig
        }
    }
}

private _convertConfig(typedConfig: any) {
    const userSpecifiedConfig = this._userSpecifiedAttributesConvert(typedConfig);
    const newConfig = this._populateDefaultValues(userSpecifiedConfig)
    return newConfig
}

private _userSpecifiedAttributesConvert(typedConfig: any) {
    if (!typedConfig) {
        return
    }
    type NewConfig = { [key: string]: any }
    let newConfig: NewConfig = {}
    for (const key in typedConfig) {
        type TypedConfigKey = keyof typeof typedConfig;
        const typeConfigKey = key as TypedConfigKey;
        if (key in this.valueExtractorMap) {
            type ValueExtractorKey = keyof typeof this.valueExtractorMap;
            const valueExtractorKey = key as ValueExtractorKey;
            newConfig[key] = this.valueExtractorMap[valueExtractorKey](typedConfig[typeConfigKey])
        }
        // need to deal with the case that its an array as well
        else if (typeof typedConfig[key] === "object") {
            if (Array.isArray(typedConfig[key])) {
                const attributeArray = []
                for (const attribute of typedConfig[key]) {
                    attributeArray.push(this._userSpecifiedAttributesConvert(attribute))
                }
                newConfig[key] = attributeArray;
            } else {
                newConfig[key] = this._userSpecifiedAttributesConvert(typedConfig[key])
            }
        } else {
            newConfig[key] = typedConfig[key]
        }
    }
    return newConfig;
}
// still isn't working correctly, first element of array is repeated
private _populateDefaultValues(userSpecifiedConfig: any) {
    type NewConfig = { [key: string]: any }
    let newConfig: NewConfig = userSpecifiedConfig;
    for (const key in this.defaultValues) {
        type DefaultValueKey = keyof typeof this.defaultValues;
        const defaultValueKey = key as DefaultValueKey;
        if (!newConfig.hasOwnProperty(key)) {
            newConfig[key] = this.defaultValues[defaultValueKey]
        }
        else if (newConfig.hasOwnProperty(key) && typeof newConfig[key] === "object") {
            newConfig[key] = this._deepMerge(newConfig[key], this.defaultValues[defaultValueKey])
        }
    }
    return newConfig;
}
`;

export interface TerraformConstructor {
  readonly tfResourceType: string;
}

export interface TypedAttributeDoc {
  description: string;
  tags?: string[];
}

export interface TypedAttribute {
  name: string;
  type: TerraformConstructor;
  function: string;
  initializer?: any;
  hasQuestionToken?: boolean;
  isReadonly?: boolean;
  docs?: TypedAttributeDoc[];
}

export interface TerraformAtomGeneratorConfig {
  imports?: [
    {
      name: string;
      path: string;
    }
  ];
  defaults?: any;
  typedAttributes?: TypedAttribute[];
  resource: TerraformConstructor;
  className: string;
  workingDir: string;
}
/**
 *
 * @param resource
 */
function resourceTypeToClassName(resource: TerraformConstructor) {
  const pieces = resource.tfResourceType.split("_");
  pieces.shift();
  const className = pieces.reduce((accum, curr) => {
    return accum + curr.charAt(0).toUpperCase() + curr.slice(1);
  }, "");
  return className;
}
/**
 *
 * @param resource
 */
function resourceTypeToFilePath(resource: TerraformConstructor) {
  const pieces = resource.tfResourceType.split("_");
  const providerName = pieces[0];
  pieces.shift();
  const first = pieces[0];
  pieces.shift();
  const folderName = pieces.reduce((accum, curr) => {
    return accum + "-" + curr;
  }, first);
  return `.gen/providers/${providerName}/${folderName}`;
}

/**
 *
 */
export class TerraformAtomGenerator {
  constructor(config: TerraformAtomGeneratorConfig) {
    const project = new Project({
      tsConfigFilePath: `${config.workingDir}/tsconfig.json`,
      libFolderPath: `${config.workingDir}`,
    });

    //project.addSourceFilesAtPaths(`${config.pathToResourceFile}/*{.d.ts,.ts}`)
    const resourceClassName = resourceTypeToClassName(config.resource);
    const resourceFilePath = resourceTypeToFilePath(config.resource);
    const resourceSourceFile = project.getSourceFile(
      `${resourceFilePath}/index.ts`
    );
    if (!resourceSourceFile) {
      throw new Error(
        `wrong path to resource at: ${resourceFilePath}/index.ts`
      );
    }
    const resourceInterface = resourceSourceFile.getInterfaceOrThrow(
      `${resourceClassName}Config`
    );

    const interfaceName = resourceInterface.getName();
    const interfaceProperties = resourceInterface.getProperties();

    const newTypedAttributes = config.typedAttributes
      ? config.typedAttributes.map((attribute) => {
          return attribute.name;
        })
      : [];
    const attributes = [];
    for (const property of interfaceProperties) {
      if (!newTypedAttributes.includes(property.getName())) {
        attributes.push({
          name: property.getName(),
          type: property.getType().getText(),
          hasQuestionToken: property.hasQuestionToken(),
        });
      }
    }
    const functions = [];
    if (config.typedAttributes) {
      for (const property of config.typedAttributes) {
        const name = property.name;
        attributes.push({
          name: name,
          type: resourceTypeToClassName(property.type),
        });
        functions.push({ name: name, function: property.function });
      }
    }

    const valueExtractorMap = functions.reduce((accum, curr) => {
      return `${accum}\n${curr.name}:${curr.function}`;
    }, "");

    const importsArray = [];
    if (config.imports) {
      for (const importOf of config.imports) {
        importsArray.push(
          `import { ${importOf.name} } from "../${importOf.path}"`
        );
      }
    }
    const importsString = importsArray.reduce((accum, curr) => {
      return `${accum}\n${curr}`;
    }, "");

    const buildingBlockFile = project.createSourceFile(
      `${config.workingDir}/building-blocks/${config.className}.ts`,
      `
            import { Construct } from "constructs";
            import { ${resourceClassName}, ${interfaceName}} from "../${resourceFilePath}"
            ${importsString}

            export class ${config.className} {
                public defaultValues = ${JSON.stringify(config.defaults)}
                public valueExtractorMap = {
                    ${valueExtractorMap}
                }
                constructor(scope: Construct, id: string, config: Typed${interfaceName}) {
            
                    const resourceConfig = this._convertConfig(config)
            
                    new ${resourceClassName}(scope, id, resourceConfig as ${interfaceName})
                }

                ${privateFunctions}
            }           
            `,
      { overwrite: true }
    );

    buildingBlockFile.getClass(config.className)?.addJsDoc({
      description: `A Building Block for ${resourceClassName}`,
      tags: [
        {
          tagName: "defaults",
          text: `Uses the following defaults: \n ${JSON.stringify(
            config.defaults,
            null,
            2
          )}`,
        },
      ],
    });

    buildingBlockFile.addInterface({
      name: `Typed${interfaceName}`,
      isExported: true,
      properties: attributes,
    });
    project.saveSync();
  }
}
