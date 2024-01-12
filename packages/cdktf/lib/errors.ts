/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { IDependable } from "constructs";
import { TerraformStack } from "./terraform-stack";

export const noAppFound = (constructPath: string) =>
  new Error(
    `No app could be identified for the construct at path '${constructPath}' (likely a TerraformStack).
The scope of CDKTF's TerraformStack class is a single App instance created by 'const app = new App()'. The App is your project's root, holding project configuration and validations.
Learn more about the App: https://developer.hashicorp.com/terraform/cdktf/concepts/cdktf-architecture#app-class:~:text=and%20Resource.-,App%20Class,-Each%20CDKTF%20project
    `
  );

export const appValidationFailure = (errorList: string) =>
  new Error(
    `App-level validation failed with the following errors:\n  ${errorList}
Validations allow for dynamic verification of your project.
To skip validations, add 'skipValidation: true' to your App config.
    `
  );

export const providerVersionMismatch = () =>
  new Error(
    `Version mismatch detected: Your provider bindings are built for an older version of CDKTF. 
Upgrade your pre-built provider or re-run cdktf get with a more recent version (>= 0.10) of the cdktf-cli.
    `
  );

export const assetOutOfScopeOfCDKTFJson = (id: string, configPath: string) =>
  new Error(
    `TerraformAsset ${id} was created with a relative path '${configPath}', but we cannot find the cdktf.json within your current working directory '${process.cwd()}'

The cdktf.json file is needed to establish the base for the relative path (the '.' in './foo/bar'). 

Place a cdktf.json at the root of your project. Learn more: https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file
Learn more about TerraformAsset: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
`
  );

export const assetExpectsDirectory = (id: string, configPath: string) =>
  new Error(
    `TerraformAsset ${id} expects path to point to a directory. Instead, this file was passed: '${configPath}'. Please correct the path to point to a directory.
Learn more about TerraformAsset: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
    `
  );

export const assetTypeNotImplemented = () =>
  new Error(`Asset type is not implemented.
Possible Asset types include: FILE, DIRECTORY, and ARCHIVE.
Take one of these values from the AssetType Enum.
Learn more about TerraformAsset: https://developer.hashicorp.com/terraform/cdktf/concepts/assets
  `);

export const dynamicBlockNotSupported = (_foreachExpression: string) =>
  new Error(
    `We do not support directly resolving a TerraformDynamicBlock. Dynamic blocks are only supported on block attributes of resources, data sources, and providers.

You can create a TerraformDynamicBlock by calling '.dynamic' on a TerraformIterator instance.

The following expression was used for the dynamic block: .dynamic({
  ${_foreachExpression}
})
`
  );

export const unresolvedTokenInConstructId = (id: string) =>
  new Error(
    `You cannot use a token (e.g., a reference to an attribute) as the id of a construct. Ids of constructs must be known at synthesis time, and token values are only known when Terraform runs. Please use a concrete value for your constructs ID instead. 
You passed the following id: "${id}"
`
  );

export const iteratorOnResourceWithCount = () =>
  new Error(
    `You cannot create an iterator from a resource with a count argument.
Instead, reuse this resource's TerraformCount instance in the resource you want to use as an iterator.

If you want to use an iterator to populate a list attribute, replace the count on the resource with an iterator passed into the forEach argument.`
  );

export const iteratorOnResourceWithoutForEach = () =>
  new Error(`Cannot create an iterator from a resource without a forEach argument. If you want to create more instances of this resource, pass an iterator to the forEach argument of the resource first.
  `);

export const modulesWithSameAlias = (alias: string) =>
  new Error(`Multiple providers have the same alias: "${alias}"
Each provider must have a unique alias when passing multiple providers of the same type to modules.
  `);

export const moveTargetAlreadySet = (
  target: string,
  friendlyUniqueId: string | undefined
) =>
  new Error(`Target "${target}" has already been used for the construct ${friendlyUniqueId}.
Target must be a string that is unique across all resources in the same stack.`);

export const moveTargetNotSet = (target: string, entries: string) =>
  new Error(`Target "${target}" has not been set.
You tried to move a resource without a target.
Call .addMoveTarget("${target}") on the instance of the resource you want to move this resource to.

Alternatively, you can use one of the following targets (in case you had a typo):
${entries}
`);

export const movedToResourceOfDifferentType = (
  moveTarget: string,
  originalResourceType: string,
  destinationResourceType: string
) =>
  new Error(`We do not support moving resources to a different type.

The destination "${moveTarget}"'s resource type ${destinationResourceType} differs from the original resource type (${originalResourceType}) you are trying to move.

If this was intentional, try importing the existing resource into your target instead. Learn more:
https://developer.hashicorp.com/terraform/cdktf/concepts/resources#importing-resources

Note that you must manually remove the original resource from your state file after importing it. Use the "terraform state rm" command in the output directory of the stack you defined this resource in. Learn more:
https://developer.hashicorp.com/terraform/cli/commands/state/rm
`);

export const resourceGivenTwoMoveOperationsByTargetAndId = (
  id: string,
  existingTarget: string,
  newMove: { to: string; from: string }
) =>
  new Error(`
The resource ${id} has been given two different move operations.

Move target: "${existingTarget}"
Move by id: {
  from: ${newMove.from}
  to: ${newMove.to}
}

Only one move operation can occur per plan/apply. Remove one of the operations.

Learn more about moving resources: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const resourceGivenTwoMoveOperationsById = (
  id: string,
  existingMove: { to: string; from: string },
  newMove: { to: string; from: string }
) =>
  new Error(`
The resource ${id} has been given two different move operations.

{
  from: ${existingMove.from}
  to: ${existingMove.to}
}
{
  from: ${newMove.from}
  to: ${newMove.to} (Resource calling the move to operation)
}

Only one move operation can occur per plan/apply. Remove one of the operations.

Learn more about moving resources: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const resourceGivenTwoMoveOperationsByTarget = (
  resourceId: string,
  existingMoveTarget: string,
  newMoveTarget: string
) =>
  new Error(`The resource ${resourceId} has been given two different moveTargets: "${newMoveTarget}" and "${existingMoveTarget}"

A resource can only be moved once per plan/apply.

Learn more about moving resources: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#:~:text=Moving%20%26%20Renaming%20Resources%20Within%20a%20Stack
`);

export const stackContainsDisallowedChar = (
  stackId: string,
  invalidChar: string
) =>
  new Error(`Cannot create Terraform stack with id "${stackId}". It contains an invalid glob character: "${invalidChar}".

Glob characters are not supported in stack names because we use them to deploy and destroy multiple stacks. For example, 'cdktf deploy \`*-production\`' deploys all stacks with names that end in '-production'.
`);

export const stackIdContainsWhitespace = (stackId: string) =>
  new Error(`Cannot create TerraformStack with id "${stackId}". It contains a whitespace character.

Please remove any whitespace characters in your TerraformStack id, like so: "${stackId.replace(
    /\s/g,
    ""
  )}"
`);

export const noStackForConstruct = (constructPath: string, hint: string) =>
  new Error(`No stack could be identified for the construct at path '${constructPath}'${hint}

You can only use constructs as part of a TerraformStack. 

To learn more about Constructs vs. TerraformStacks, refer to: https://developer.hashicorp.com/terraform/cdktf/concepts/constructs#:~:text=Constructs%20vs.%20Stacks
`);

export const stackHasCircularDependency = (
  thisStack: TerraformStack,
  dependency: TerraformStack
) =>
  new Error(`Cannot add dependency ${dependency} to ${thisStack}, because it would cause a circular dependency.

TerraformStack ${dependency} is already dependent on ${thisStack} directly, or dependent on a TerraformStack within ${thisStack}.
  
To learn more about circular dependency references, refer to: https://developer.hashicorp.com/terraform/cdktf/concepts/stacks#:~:text=Cross%2DStack%20References
`);

export const stackValidationFailure = (errorList: string) =>
  new Error(`Validation failed with the following errors:\n  ${errorList}
  
If you wish to ignore these validations, pass 'skipValidation: true' to your App configuration.
`);

export const matchersPathIsNotDirectory = (functionName: string) =>
  new Error(`Path is not a directory.

Ensure you are passing the result of Testing.fullSynth('stack instance') to '${functionName}', not Testing.synth('stack instance'). 

Testing.fullSynth returns a file path to a temporary testing environment. Testing.synth returns the JSON representation of your stack.

To learn more about testing in CDKTF, refer to: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests`);

export const matchersFoundErrorsInStack = (
  errorCount: any,
  stackName: string,
  diagnostics: string
) =>
  new Error(`Found ${errorCount} Errors in stack ${stackName}: ${diagnostics}
  
These errors are not test failures, but issues with the underlying TerraformStack being tested. Fix the above issues before running your tests again.
`);

export const jestNotInstantiated = () =>
  new Error(`Jest was not properly instantiated. 
  
Ensure you have a 'setup.js' file in your project's directory that calls 'cdktf.Testing.setupJest()'.

To learn more about setting up testing, refer to: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests#:~:text=Add%20Testing%20to%20Your%20Application
`);

export const expectNotGloballyAccessible = () =>
  new Error(`The expect function is not globally accessible.

To learn more about setting up testing, refer to: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests#:~:text=Add%20Testing%20to%20Your%20Application
`);

export const invalidStack = (stackContent: string) =>
  new Error(`Invalid JSON string passed: ${stackContent}


Ensure you are passing the result of Testing.synth('stack instance') to '${functionName}', not Testing.fullSynth('stack instance'). 


Testing.synth returns the JSON representation of your stack. CDKTF can use assertions with this JSON to check the composition of your stacks, like so: "Testing.toHaveResource(Testing.synth('TerraformStack instance'), S3Bucket)"

Testing.fullSynth returns a file path to a temporary testing environment.

To learn more about testing in CDKTF, refer to: https://developer.hashicorp.com/terraform/cdktf/test/unit-tests
`);

export const targetNotResolvableWithOverrides = (target: string) =>
  new Error(`Target (${target}) cannot be a resolvable token if you specified overrides. Replace the value of the field you are overriding with a static value.

To learn more about Tokens, refer to: https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
`);

export const sourceOrTargetNotAnObject = (
  source: string,
  sourceType: string,
  target: string,
  targetType: string
) =>
  new Error(`An issue occurred during the synthesization of your Terraform configuration. 
  
Both the source element (${source}) and its containing target element (${target}) must be objects.

Type of source: ${sourceType}
Type of target: ${targetType}
`);

export const constructDependencyBelowV10 = () =>
  new Error(`Version mismatch! CDKTF version 0.6 requires your constructs version to be v10 or above. 

Update your constructs dependency: https://cdk.tf/upgrade-constructs-v10
`);

export const cloudBackendWorkspaceIsNotDefinedByName = () =>
  new Error(`The Cloud backend only supports cross-stack references if the workspace is defined by name (not by tags).

To use cross-stack references, replace all mentions of 'TaggedCloudWorkspaces' with 'NamedCloudWorkspace', like so:

new CloudBackend(stack, {
  ...
  workspaces: new NamedCloudWorkspace("my-app"),
});

To learn more about Remote Backends, refer to: https://developer.hashicorp.com/terraform/cdktf/concepts/remote-backends
`);

export const valueContainsUnescapedQuotes = (value: string) =>
  new Error(
    `You value, '${value}', has unescaped double quotes in it, so it cannot be used as a value.

To safely use the value, use Fn.rawString on your string, like so:

Fn.rawString('${value}')

Doing this ensures CDKTF and Terraform interpret your values correctly.

To learn more about built in Terraform functions within CDKTF, refer to: https://developer.hashicorp.com/terraform/cdktf/concepts/functions
`
  );

export const encounteredAnnotationWithLevelError = (errors: string) =>
  new Error(`Encountered Annotations with level "ERROR":\n${errors}
  
Either fix the issues above, or set the environment variable CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS to ignore these annotations.
`);

export const valueIsInvalidStringOrToken = (value: string) =>
  new Error(
    `'${value}' is not a valid string nor a token. This function only accepts strings or tokens resolving to strings. Please change your code accordingly.`
  );

export const valueIsInvalidNumberOrToken = (value: string) =>
  new Error(
    `${value} is not a valid number nor a token. This function only accepts numbers or tokens resolving to numbers. Please change your code accordingly.`
  );

export const listElementIsOfWrongType = (
  value: any[],
  position: number,
  error: unknown
) =>
  new Error(
    `Element in list ${value} at position ${position} is not the right type: ${error}. 
    Please ensure all elements in the list are the correct type for this function.`
  );

export const functionReceivedWrongNumberOfArgs = (
  name: string,
  argValidatorsLength: number,
  argsLength: number
) =>
  new Error(
    `Function ${name} takes ${argValidatorsLength} arguments, but ${argsLength} were provided. Please add the missing arguments to the function.`
  );

export const functionArgumentValidationFailure = (
  argNumber: number,
  name: string,
  error: unknown
) =>
  new Error(
    `Argument ${argNumber} of ${name} failed the validation: ${error}. Please change your code to pass a valid value for this argument.`
  );

export const cannotCalcIdForEmptySetOfComponents = () =>
  new Error(
    `Unable to calculate a unique id for an empty set of components. This can only happen if you are trying to create a unique id while not passing in any construct node ids. This means your construct likely has no parent, which is not allowed. Please make sure your construct has a parent, e.g. new App(this) or new TerraformStack(this, 'stack')`
  );

export const stringValueAddedToReferenceList = (listToken: string[]) =>
  new Error(
    `Cannot add elements to list token, got: ${listToken}. We expect the elements of a tokenized string array to be a single string token, e.g. ["&{TfToken[Token.1]}"]. In this case the one element in the array consist of more than one value. To add values to a tokenized list use Terraform Functions instead, e.g. Fn.concat([yourReferencedList, ["my", "new", "items"]]).`
  );

export const cannotConcatenateStringsInTokenizedStringArray = (
  listToken: string
) =>
  new Error(
    `Cannot concatenate strings in a tokenized string array, got: ${listToken}. We expect the elements of a tokenized string array to be a single string token, e.g. ["&{TfToken[Token.1]}"]. In this case the one element in the array consist of something different than a single token, likely by mutating the value inside this list. This leads to CDKTF not being able to resolve the token into the appropriate runtime value. Please don't mutate tokenized string arrays.`
  );

export const numberValueAddedToReferenceList = (listToken: number[]) =>
  new Error(
    `Cannot add elements to list token, got: ${listToken}. Tokens are used to represent runtime values (e.g. references to attributes of resource or data sources), they don't contain the values since the values are only available at apply time, whereas the Tokens are present during compile time. You tried to add a value to a tokenized list, this should be done via Terraform function: Fn.concat([yourReferencedList, [42, 43, 44]]).`
  );

export const mapValueAddedToReferenceList = (mapToken: string) =>
  new Error(
    `Cannot add elements to map token, got: ${mapToken}. This can happen if you merge multiple maps or if you add a new key value pair to the map token. Tokens are used to represent runtime values (e.g. references to attributes of resource or data sources), they don't contain the values since the values are only available at apply time, whereas the Tokens are present during compile time. Instead of adding the value to the tokenized map you need to use a Terraform Function, e.g. Fn.merge([yourReferencedMap, { your: 'value' }]) that creates a new map Token for a value that represents what you want to express. For example this might get rendered as merge(my_resource.resource_name.one_specific_map_attribute, { your: ' value' })`
  );

export const cannotConcatenateStringsInTokenizedMap = (tokenizedMap: any) =>
  new Error(
    `Cannot concatenate strings in a tokenized map, got: ${tokenizedMap}. We expect the key of a tokenized map to be a string token, e.g. { "&{TfToken[Token.1]}": "String Map Token Value" }. In this case the key in the map consists of more than a string token (e.g. the Token and a static string or multiple Token). This can happen if you mutate the key of the map, which is not allowed. Please don't mutate tokenized Maps as it makes it impossible for CDKTF to translate them to their intended values.`
  );

export const doesNotImplementDependableTrait = (instance: IDependable) =>
  new Error(`${instance} does not implement DependableTrait`);

export const canOnlyEncodePositiveIntegers = () =>
  new Error(
    `Can only encode positive integers into Tokens. This is a bug in CDKTF, please file a bug report.`
  );

export const indexTooLargeToEncode = (index: number) =>
  new Error(
    `Got an index too large to encode into a Token :${index}. This happens if you have an enormous amount of Tokens in a single CDKTF application. Most likely you are creating numeric tokens in an infinite loop, e.g. by calling 'Token.asNumber()' a lot. If you reach the maximum number of allowed Tokens (a limitation imposed by the way we encode Tokens / separate them from real numeric values) you need to work around this issue by splitting up your application into multiple applications.`
  );

export const argToIntrinsicMustBePlainValue = (
  value: any,
  creationStack: string[]
) =>
  new Error(
    `You can only use a plain value (not a function) when creating an Intrinsic token. We got the value '${value}' created at:\n${creationStack.join(
      "\n"
    )}. If you want to use a function, please use the Lazy class, e.g. Lazy.anyValue({ produce: () => "Hello World" }).`
  );

export const intrinsicNewError = (message: string, createdAt: string) =>
  new Error(`${message}\nToken created:\n    at ${createdAt}\nError thrown:`);

export const unableToResolveCircularReference = (pathName: string) =>
  new Error(`Unable to resolve object tree with circular reference at '${pathName}'.
This error is thrown if the depth of the object tree is greater than 200 to protect against cyclic references.
To resolve this inspect the construct creating the cyclic reference (most likely in '${pathName}') and make sure
it does not create an infinite nesting of constructs.`);

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
