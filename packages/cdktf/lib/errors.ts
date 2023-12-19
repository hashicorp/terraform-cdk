/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { IDependable } from "constructs";
import { TerraformStack } from "./terraform-stack";

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

export const dynamicBlockNotSupported = (_foreachExpression: string) =>
  new Error(
    `Tried to directly resolve a TerraformDynamicBlock which is not supported.
The TerraformDynamicBlock is created by calling '.dynamic' on a TerraformIterator instance.
Dynamic blocks are only supported on block attributes of resources, data sources and providers.

The expression used for the dynamic block: .dynamic({
  ${_foreachExpression}
})
`
  );

export const unresolvedTokenInConstructId = (id: string) =>
  new Error(
    `You cannot use a Token (e.g. a reference to an attribute) as the id of a construct.
The following id was passed: "${id}"
Ids of constructs must be known at synthesis time and the value of tokens is only known when Terraform runs, hence you cannot use tokens in construct ids.`
  );

export const iteratorOnResourceWithCount = () =>
  new Error(
    `Cannot create iterator from a resource with a count argument.
The resource passed to the iterator has a count argument which determines how many instances of the resource are created.
Please re-use the same TerraformCount used in this resource on the resource where you planned to use this iterator instead.

If you need to use the iterator to populate a list attribute, replace the count on the resource with an iterator passed into the forEach argument.`
  );

export const iteratorOnResourceWithoutForEach = () =>
  new Error(`Cannot create iterator from resource without forEach argument.
The resource passed to the iterator does not have a forEach argument, meaning only a single instance of it will be created.
If you want to create more instances of this resource pass an iterator to the forEach argument of the resource first.
  `);

export const modulesWithSameAlias = (alias: string) =>
  new Error(`Error: Multiple providers have the same alias: "${alias}"
When passing multiple providers of the same type to modules, each provider must have a unique alias.
  `);

export const moveTargetAlreadySet = (
  target: string,
  friendlyUniqueId: string | undefined
) =>
  new Error(`Target "${target}" has already been used for the construct at ${friendlyUniqueId}.
Target must be a string that is unique across all resources in the same stack.`);

export const moveTargetNotSet = (target: string, entries: string) =>
  new Error(`Target "${target}" has not been set.
You tried to move a resource to a target that has not been set on any resource.
Call .addMoveTarget("${target}") on the instance of the resource you want to move this one to.

Alternatively you can use one of the following targets (in case you had a typo):
${entries}
`);

export const movedToResourceOfDifferentType = (
  moveTarget: string,
  originalResourceType: string,
  destinationResourceType: string
) =>
  new Error(`You have tried to move a resource to a different type which is not supported.

The move target "${moveTarget}" corresponding to the resource of type ${destinationResourceType} to move to differs from the resource of type ${originalResourceType} being moved from.

If this was intentional, you can instead try importing the existing resource into your target as described in the import docs:
https://developer.hashicorp.com/terraform/cdktf/concepts/resources#importing-resources

Please note, that you will manually need to remove the original resource from your state file after importing it, using the "terraform state rm" command in the output directory of the stack this resource is defined in. Read more about the command here:
https://developer.hashicorp.com/terraform/cli/commands/state/rm
`);

export const resourceGivenTwoMoveOperationsByTargetAndId = (
  id: string,
  existingTarget: string,
  newMove: { to: string; from: string }
) =>
  new Error(`
${id} has been given two separate moved operations.

Move target: "${existingTarget}"
Move by id: {
  from: ${newMove.from}
  to: ${newMove.to}
}

Only one move operation can occur per plan/apply. Remove one of the operations.

To learn more about moving resources see: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const resourceGivenTwoMoveOperationsById = (
  id: string,
  existingMove: { to: string; from: string },
  newMove: { to: string; from: string }
) =>
  new Error(`
${id} has been given two separate moved operations.

{
  from: ${existingMove.from}
  to: ${existingMove.to}
}
{
  from: ${newMove.from}
  to: ${newMove.to} (Resource calling the move to operation)
}

Only one move operation can occur per plan/apply. Remove one of the operations.

To learn more about moving resources see: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const resourceGivenTwoMoveOperationsByTarget = (
  resourceId: string,
  existingMoveTarget: string,
  newMoveTarget: string
) =>
  new Error(`The resource ${resourceId} has been given two moveTargets: "${newMoveTarget}" and "${existingMoveTarget}"

A resource can only be moved once per plan/apply

To learn more about moving resources see: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const stackContainsDisallowedChar = (
  stackId: string,
  invalidChar: string
) =>
  new Error(`Can not create Terraform stack with id "${stackId}". It contains a glob character: "${invalidChar}"

Glob characters are disallowed in stack names due to their use in deploying/destroy multiple stacks 

Such as 'cdktf deploy \`*-production\`' which deploys all stacks with names that end in '-production'
`);

export const stackIdContainsWhitespace = (stackId: string) =>
  new Error(`Can not create TerraformStack with id "${stackId}". It contains a whitespace character.

Please remove any whitespace characters in your TerraformStack id like so: "${stackId.replace(
    /\s/g,
    ""
  )}"
`);

export const noStackForConstruct = (constructPath: string, hint: string) =>
  new Error(`No stack could be identified for the construct at path '${constructPath}'${hint}

Constructs can only be used as a part of a TerraformStack. While Constructs represent a collection of infrastructure, they must be used within a TerraformStack to be apart of a dedication Terraform configuration.

To learn more about Constructs vs. TerraformStacks see here: https://developer.hashicorp.com/terraform/cdktf/concepts/constructs#:~:text=Constructs%20vs.%20Stacks
`);

export const stackHasCircularDependency = (
  thisStack: TerraformStack,
  dependency: TerraformStack
) =>
  new Error(`Can not add dependency ${dependency} to ${thisStack} since it would result in a loop

This is caused by the TerraformStack ${dependency} already being dependent on ${thisStack} directly, or dependent on a TerraformStack within ${thisStack}
  
To learn more about cross-stack references see here: https://developer.hashicorp.com/terraform/cdktf/concepts/stacks#:~:text=Cross%2DStack%20References
`);

export const stackValidationFailure = (errorList: string) =>
  new Error(`Validation failed with the following errors:\n  ${errorList}
  
If you wish to ignore these validations, pass 'skipValidation: true' to your App config
`);

export const matchersPathIsNotDirectory = (functionName: string) =>
  new Error(`Path is not a directory

Ensure you are passing the result of Testing.fullSynth('stack instance') and not Testing.synth('stack instance') in your usage of '${functionName}'. 

Testing.fullSynth returns a file path to temporary testing environment. This file path is used in CDKTF tests that ensure your TerraformStack produces a validate Terraform configuration (toBeValidTerraform & toPlanSuccessfully).
Like so: "Testing.toBeValidateTerraform(Testing.fullSynth('TerraformStack instance'))"

Testing.synth returns the JSON representation of your stack. This JSON can then be used in CDKTF assertions that check the composition of your stacks (toHaveResource, toHaveDataSource, ect.)
Like so: "Testing.toHaveResource(Testing.synth('TerraformStack instance'), S3Bucket)"

To learn more about testing in CDKTF see: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests`);

export const matchersFoundErrorsInStack = (
  errorCount: any,
  stackName: string,
  diagnostics: string
) =>
  new Error(`Found ${errorCount} Errors in stack ${stackName}: ${diagnostics}
  
These errors are not failures of your tests, but issues with the underlying TerraformStack being tested. Fix the above issues before running tests again.
`);

export const jestNotInstantiated = () =>
  new Error(`expect is not defined, jest was not propely instantiated
  
Ensure you have a 'setup.js' file in your project's directory that calls 'cdktf.Testing.setupJest()'

To learn more about setting up testing see: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests#:~:text=Add%20Testing%20to%20Your%20Application
`);

export const expectNotGloballyAccessible = () =>
  new Error(`setupJest called, but expect is not globally accessible

To learn more about setting up testing see: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests#:~:text=Add%20Testing%20to%20Your%20Application
`);

export const invalidStack = (stackContent: string) =>
  new Error(`invalid JSON string passed: ${stackContent}

Ensure you are passing the result of Testing.synth('stack instance') and not Testing.fullSynth('stack instance'). 

Testing.synth returns the JSON representation of your stack. This JSON can then be used in CDKTF assertions that check the composition of your stacks (toHaveResource, toHaveDataSource, ect.)
Like so: "Testing.toHaveResource(Testing.synth('TerraformStack instance'), S3Bucket)"

Testing.fullSynth returns a file path to temporary testing environment. This file path is used in CDKTF tests that ensure your TerraformStack produces a validate Terraform configuration (toBeValidTerraform & toPlanSuccessfully).
Like so: "Testing.toBeValidateTerraform(Testing.fullSynth('TerraformStack instance'))"

To learn more about testing in CDKTF see: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests`);

// Need to validate explanations and/or expand still

export const targetNotResolvableWithOverrides = (target: string) =>
  new Error(`Invalid usage. Target (${target}) can not be a resolvable token when overrides are specified. Please replace the value of the field you are overriding with a static value.

Because the target is a resolvable Token any overrides cannot be applied as it has not yet been resolved. 

To learn more about Tokens see here: https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
`);

export const sourceOrTargetNotAnObject = (
  source: string,
  sourceType: string,
  target: string,
  targetType: string
) =>
  new Error(`An issue was encountered during the synthesization of your Terraform configuration. 
  
Both the source element (${source}) and and its containing target element (${target}) must be objects

Type of source: ${sourceType}
Type of target: ${targetType}
`);

export const constructDependencyBelowV10 = () =>
  new Error(`Version mismatch! The constructs depedency appears to be lower than v10 which is required as of cdktf version 0.6.
Your current constructs version is missing Construct.node which was added in v10.
Please update your constructs dependency: https://cdk.tf/upgrade-constructs-v10
`);

export const cloudBackendWorkspaceIsNotDefinedByName = () =>
  new Error(`The Cloud backend only supports cross-stack references when the workspace is defined by name instead of by tags.

To properly utilize cross-stack references, replace your usage of 'TaggedCloudWorkspaces' to 'NamedCloudWorkspace' like so:

new CloudBackend(stack, {
  ...
  workspaces: new NamedCloudWorkspace("my-app"),
});

To learn more about Remote Backends see: https://developer.hashicorp.com/terraform/cdktf/concepts/remote-backends
`);

export const valueContainsUnescapedQuotes = (value: string) =>
  new Error(
    `'${value}' can not be used as value directly since it has unescaped double quotes in it.

To safely use the value, use Fn.rawString on your string like so:

Fn.rawString('${value}')

This is needed as CDKTF or Terraform will otherwise try to interpret these double quotes incorrectly.

To learn more about built in Terraform functions within CDKTF see: https://developer.hashicorp.com/terraform/cdktf/concepts/functions
`
  );

export const encounteredAnnotationWithLevelError = (errors: string) =>
  new Error(`Encountered Annotations with level "ERROR":\n${errors}
  
Either fix the issues above, or set the environment variable CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS to ignore these annotations
`);

// The ones below have no added context, or in other words, are the same as they have been

// The next 3 are for functions that provided arg validations to built in terraform functions

// TODO: expand explanation
export const valueIsInvalidStringOrToken = (value: string) =>
  new Error(`'${value}' is not a valid string nor a token`);

// TODO: expand explanation
export const valueIsInvalidNumberOrToken = (value: string) =>
  new Error(`${value} is not a valid number nor a token`);

// TODO: expand explanation
export const listElementIsOfWrongType = (
  value: any[],
  position: number,
  error: unknown
) =>
  new Error(`Element in list ${value} at position ${position} is not of the right type: ${error}

`);

// TODO: expand explanation?? Doesn't seem to be something that is caused by user error. Maybe Direct people to file a bug report?
export const functionRecievedWrongNumberOfArgs = (
  name: string,
  argValidatorsLength: number,
  argsLength: number
) =>
  new Error(
    `${name} takes ${argValidatorsLength} arguments, but ${argsLength} were provided`
  );

// TODO: expand explanation?? Doesn't seem to be something that is caused by user error. Maybe Direct people to file a bug report?
export const functionArgumnetValidationFailure = (
  argNumber: number,
  name: string,
  error: unknown
) =>
  new Error(`Argument ${argNumber} of ${name} failed the validation: ${error}`);

// TODO: expand explanation? Shouldn't happen as the only time it's called is in TerraformStack where this case is handled
// (in allocateLogicalId of TerraformStack) return components.length > 0 ? makeUniqueId(components) : "";
export const cannotCalcIdForEmptySetOfComponents = () =>
  new Error(`Unable to calculate a unique id for an empty set of components
  
`);

// TODO: expand explanation
export const stringValueAddedToReferenceList = (listToken: string[]) =>
  new Error(
    `Cannot add elements to list token, got: ${listToken}. You tried to add a value to a referenced list, instead use Fn.concat([yourReferencedList, ["my", "new", "items"]]).`
  );

// TODO: expand explanation
export const cannotConcatenateStringsInTokenizedStringArray = (
  listToken: string
) =>
  new Error(
    `Cannot concatenate strings in a tokenized string array, got: ${listToken}`
  );

// TODO: expand explanation
export const numberValueAddedToReferenceList = (listToken: number[]) =>
  new Error(
    `Cannot add elements to list token, got: ${listToken}. You tried to add a value to a referenced list, instead use Fn.concat([yourReferencedList, [42, 43, 44]]).`
  );

// TODO: expand explanation
export const mapValueAddedToReferenceList = (mapToken: string) =>
  new Error(
    `Cannot add elements to map token, got: ${mapToken}. You tried to add a value to a referenced map, instead use Fn.mergeMaps([yourReferencedMap, { your: 'value' }]).`
  );

// TODO: expand explanation
export const cannotConcatenateStringsInTokenizedMap = (tokenizedMap: any) =>
  new Error(
    `Cannot concatenate strings in a tokenized map, got: ${tokenizedMap}`
  );

// TODO: is this code actually used anywhere?
export const doesNotImplementDependableTrait = (instance: IDependable) =>
  new Error(`${instance} does not implement DependableTrait`);

// TODO: expand explanation. Not sure how it can be negative
export const canOnlyEncodePositiveIntegers = () =>
  new Error(`Can only encode positive integers`);

// TODO: expand explanation. Not sure how it grows
export const indexTooLargeToEncode = (index: number) =>
  new Error(`Got an index too large to encode: ${index}`);

// TODO: expand explanation
export const argToIntrinsicMustBePlainValue = (value: any) =>
  new Error(`Argument to Intrinsic must be a plain value object, got ${value}`);

// TODO: expand explanation?? Doesn't seem to be used anywhere
export const intrinsicNewError = (message: string, createdAt: string) =>
  new Error(`${message}\nToken created:\n    at ${createdAt}\nError thrown:`);

// TODO: expand explanation
export const unableToResolveCircularReference = (pathName: string) =>
  new Error(`Unable to resolve object tree with circular reference at '${pathName}'.
This error is thrown if the depth of the object tree is greater than 200 to protect against cyclic references.
To resolve this inspect the construct creating the cyclic reference (most likely in '${pathName}') and make sure
it does not create an infinite nesting of constructs.`);

// TODO: expand explanation
export const cannotResolveFunction = (pathName: string, obj: any) =>
  new Error(`Trying to resolve a non-data object (e.g. a function) at '${pathName}': ${obj}. Only tokens are supported for lazy evaluation.
If you want to have a lazily computed value, please use the Lazy class, e.g. Lazy.stringValue({ produce: () => "Hello World" })`);

const LIST_ERROR_EXPLANATION = `In CDKTF we represent lists where the value is only known at runtime (versus compile / synth time) as
Arrays with a single element that is a string token, e.g. ["Token.1"]. This is because at compile time we
don't know the length of the list, so far CDKTF did not invoke Terraform to communicate with the cloud provider.
This is done at a later stage on the synthesized static JSON file.
As we don't know the length of the list not the content we can not differentiate if the list was accessed at the first index,
the last index, or as part of a loop. To avoid this ambiguity:

- If you want to access a singular item use 'Fn.element(list, 0)' (not 'list[0]')
- If you want to loop over the list use 'TerraformIterator.fromList(list)' (not 'for (const item of list)' or 'list.forEach(item => ...)')

To learn more about tokens see https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
To learn more about iterators see https://developer.hashicorp.com/terraform/cdktf/concepts/iterators`;

const MAP_ERROR_EXPLANATION = `In CDKTF we represent maps where the value is only known at runtime (versus compile / synth time) as
objects with a single key-value pair where the value is a string token, e.g. { "&{TfToken[Token.1]}": "String Map Token Value" }.
This is because the length of the list isn't know at compile time, as CDKTF has not yet invoked Terraform to communicate with the cloud provider.
This is done at a later stage on the synthesized static JSON file.
As we don't know the contents of the map we do not know which key was accessed, or if the map was accessed as part of a loop.
To avoid this ambiguity:

- If you want to access a singular item use 'Fn.lookup(map, key)' (not 'map[key]')
- If you want to loop over the map use 'TerraformIterator.fromMap(map)' (not 'for (const [key, value] of map)' or 'Object.entries(map).forEach((key, value) => ...)')

To learn more about tokens see https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
To learn more about iterators see https://developer.hashicorp.com/terraform/cdktf/concepts/iterators`;

export const encodedListTokenInScalarStringContext = () =>
  new Error(`Found an encoded list token string in a scalar string context.
${LIST_ERROR_EXPLANATION}`);

export const encodedMapTokenInScalarStringContext = () =>
  new Error(`Found an encoded map token in a scalar string context.
${MAP_ERROR_EXPLANATION}`);

export const encodedMapTokenInScalarNumberContext = () =>
  new Error(`Found an encoded map token in a scalar number context.
${MAP_ERROR_EXPLANATION}`);

export const constructsCannotBeResolved = (pathName: string) =>
  new Error(`Trying to resolve() a Construct at '${pathName}'. 
This often means that there is an unintended cyclic dependency in your construct tree, leading to the resolution being stuck in an infinite loop which will eventually fail. This can happen if the scope passed into this construct is also part of its subtree in some way. To resolve this issue, please refactor your code to avoid this cyclic dependency by changing the scope of this construct.`);

export const mapKeyMustResolveToString = (
  pathName: string,
  key: string,
  resolvedKey: any
) =>
  new Error(
    `At "${pathName}" the key "${key}" is used in a map so it must resolve to a string, but it resolves to a ${typeof resolvedKey} with the value ${JSON.stringify(
      resolvedKey
    )}. This means that the token used as the key is not resolving into string, you must change the Token so that it does.`
  );

const unknownTokenExplanation = `This means that you are trying to access a Token value that does not exist. This can only happen if the Token is e.g. from another CDK (i.e. AWS CDK, CDK8s, etc.) and is not known to the CDKTF Application. You either need to make the other CDK resolve this token before CDKTF tries to resolve the token or work around using this token at all. 

If this error occurs without another CDK (or a value looking like a Token) being involved, please file a bug.`;

export const unknownNumberTokenFound = () =>
  new Error(
    `Encoded representation of unknown number Token found. ${unknownTokenExplanation}`
  );

export const unrecognizedTokenKey = (key: string) =>
  new Error(`Unrecognized Token Key '${key}'. ${unknownTokenExplanation}`);

export const IdIncludesUnresolvedTokens = (unresolvedTokens: string) =>
  new Error(
    `This construct (or its parent construct) was configured with an ID that contains a Token: ${unresolvedTokens}. This is not allowed as IDs must be known statically during synthesis. The values of tokens are only known during apply, therefore they cannot be used in IDs. Please use a concrete value for your constructs ID instead.`
  );
