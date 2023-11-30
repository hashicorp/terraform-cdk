/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

//TODO: add a verbose mode in some manner

export const noAppFound = (constructPath: string) =>
  new Error(
    `No app could be identified for the construct at path '${constructPath}', likely a TerraformStack.
The scope of CDKTF's TerraformStack class is a single App instance created by 'const app = new App()'. The App is the root of your project that holds project configuration and validations.
You can learn more about the App here: https://developer.hashicorp.com/terraform/cdktf/concepts/cdktf-architecture#app-class:~:text=and%20Resource.-,App%20Class,-Each%20CDKTF%20project
    `
  );

export const appValidationFailure = (errorList: string) =>
  new Error(
    `App level validation failed with the following errors:\n  ${errorList}
Validations allow for dynamic verification of your project.
To skip validations, add 'skipValidation: true' to your App config
    `
  );

export const providerVersionMismatch = () =>
  new Error(
    `Version mismatch detected: The provider bindings seem to have been built for an older version of CDKTF. 
Upgrade your pre-built provider or re-run cdktf get with a more recent version (>= 0.10) of the cdktf-cli.
    `
  );

export const assetOutOfScopeOfCDKTFJson = (id: string, configPath: string) =>
  new Error(
    `TerraformAsset ${id} was created with a relative path '${configPath}', but no cdktf.json file was found to base it on.

The cdktf.json is needed to establish the base for the relative path (e.g the '.' in './foo/bar'). We cannot find the cdktf.json within your current working directory '${process.cwd()}'
To avoid this, please place a cdktf.json at the root of your project. Learn more here: https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file
To learn more about TerraformAsset read here: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
`
  );

export const assetExpectsDirectory = (id: string, configPath: string) =>
  new Error(
    `TerraformAsset ${id} expects path to be a directory, a file was passed: '${configPath}'
To learn more about TerraformAsset read here: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
    `
  );

export const assetTypeNotImplemented = () =>
  new Error(`Asset type is not implemented
Possible Asset types include: FILE, DIRECTORY, and ARCHIVE
The values are to be taken from the AssetType Enum.
To learn more about TerraformAsset read here: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
  `);

export const dynamicBlockNotSupported = (foreachExpression: string) =>
  new Error(
    `Tried to directly resolve a TerraformDynamicBlock which is not supported.
The TerraformDynamicBlock is created by calling '.dynamic' on a TerraformIterator instance.
Dynamic blocks are only supported on block attributes of resources, data sources and providers.
The expression used for the dynamic block: '${`.dynamic({

})`}'
`
  );
