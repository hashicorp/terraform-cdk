# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderRequirement <a name="ProviderRequirement" id="cdktf-tf-module-stack.ProviderRequirement"></a>

#### Initializers <a name="Initializers" id="cdktf-tf-module-stack.ProviderRequirement.Initializer"></a>

```typescript
import { ProviderRequirement } from 'cdktf-tf-module-stack'

new ProviderRequirement(scope: Construct, providerName: string, providerVersionConstraint?: string, terraformProviderSource?: string)
```

| **Name**                                                                                                                                        | **Type**                          | **Description**   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------- |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.scope">scope</a></code>                                         | <code>constructs.Construct</code> | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.providerName">providerName</a></code>                           | <code>string</code>               | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint">providerVersionConstraint</a></code> | <code>string</code>               | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource">terraformProviderSource</a></code>     | <code>string</code>               | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.providerName"></a>

- _Type:_ string

---

##### `providerVersionConstraint`<sup>Optional</sup> <a name="providerVersionConstraint" id="cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint"></a>

- _Type:_ string

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="cdktf-tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource"></a>

- _Type:_ string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                            | **Description**                                                                   |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.toString">toString</a></code>                             | Returns a string representation of this construct.                                |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.addOverride">addOverride</a></code>                       | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.overrideLogicalId">overrideLogicalId</a></code>           | Overrides the auto-generated logical ID with a specific ID.                       |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.toMetadata">toMetadata</a></code>                         | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.toTerraform">toTerraform</a></code>                       | Adds this resource to the terraform JSON output.                                  |

---

##### `toString` <a name="toString" id="cdktf-tf-module-stack.ProviderRequirement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-tf-module-stack.ProviderRequirement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-tf-module-stack.ProviderRequirement.addOverride.parameter.path"></a>

- _Type:_ string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-tf-module-stack.ProviderRequirement.addOverride.parameter.value"></a>

- _Type:_ any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-tf-module-stack.ProviderRequirement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-tf-module-stack.ProviderRequirement.overrideLogicalId.parameter.newLogicalId"></a>

- _Type:_ string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-tf-module-stack.ProviderRequirement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-tf-module-stack.ProviderRequirement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-tf-module-stack.ProviderRequirement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                      | **Description**               |
| --------------------------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-tf-module-stack.ProviderRequirement.isConstruct"></a>

```typescript
import { ProviderRequirement } from 'cdktf-tf-module-stack'

ProviderRequirement.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.ProviderRequirement.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                             | **Type**                                              | **Description**   |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ----------------- |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.node">node</a></code>                                             | <code>constructs.Node</code>                          | The tree node.    |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.cdktfStack">cdktfStack</a></code>                                 | <code>cdktf.TerraformStack</code>                     | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.fqn">fqn</a></code>                                               | <code>string</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.friendlyUniqueId">friendlyUniqueId</a></code>                     | <code>string</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.metaAttributes">metaAttributes</a></code>                         | <code>{[ key: string ]: any}</code>                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.terraformResourceType">terraformResourceType</a></code>           | <code>string</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.terraformProviderSource">terraformProviderSource</a></code>       | <code>string</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.ProviderRequirement.property.alias">alias</a></code>                                           | <code>string</code>                                   | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-tf-module-stack.ProviderRequirement.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-tf-module-stack.ProviderRequirement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- _Type:_ cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-tf-module-stack.ProviderRequirement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- _Type:_ string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-tf-module-stack.ProviderRequirement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- _Type:_ string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="cdktf-tf-module-stack.ProviderRequirement.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- _Type:_ {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="cdktf-tf-module-stack.ProviderRequirement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- _Type:_ string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="cdktf-tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- _Type:_ cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="cdktf-tf-module-stack.ProviderRequirement.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- _Type:_ string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="cdktf-tf-module-stack.ProviderRequirement.property.alias"></a>

```typescript
public readonly alias: string;
```

- _Type:_ string

---

### TFModuleApp <a name="TFModuleApp" id="cdktf-tf-module-stack.TFModuleApp"></a>

#### Initializers <a name="Initializers" id="cdktf-tf-module-stack.TFModuleApp.Initializer"></a>

```typescript
import { TFModuleApp } from 'cdktf-tf-module-stack'

new TFModuleApp(options?: AppOptions)
```

| **Name**                                                                                            | **Type**                      | **Description**   |
| --------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.Initializer.parameter.options">options</a></code> | <code>cdktf.AppOptions</code> | _No description._ |

---

##### `options`<sup>Optional</sup> <a name="options" id="cdktf-tf-module-stack.TFModuleApp.Initializer.parameter.options"></a>

- _Type:_ cdktf.AppOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                              | **Description**                                                                                          |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.toString">toString</a></code>                       | Returns a string representation of this construct.                                                       |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.crossStackReference">crossStackReference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.synth">synth</a></code>                             | Synthesizes all resources to the output directory.                                                       |

---

##### `toString` <a name="toString" id="cdktf-tf-module-stack.TFModuleApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `crossStackReference` <a name="crossStackReference" id="cdktf-tf-module-stack.TFModuleApp.crossStackReference"></a>

```typescript
public crossStackReference(fromStack: TerraformStack, toStack: TerraformStack, identifier: string): string
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-tf-module-stack.TFModuleApp.crossStackReference.parameter.fromStack"></a>

- _Type:_ cdktf.TerraformStack

---

###### `toStack`<sup>Required</sup> <a name="toStack" id="cdktf-tf-module-stack.TFModuleApp.crossStackReference.parameter.toStack"></a>

- _Type:_ cdktf.TerraformStack

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-tf-module-stack.TFModuleApp.crossStackReference.parameter.identifier"></a>

- _Type:_ string

---

##### `synth` <a name="synth" id="cdktf-tf-module-stack.TFModuleApp.synth"></a>

```typescript
public synth(): void
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                              | **Description**               |
| ------------------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.isApp">isApp</a></code>             | _No description._             |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.of">of</a></code>                   | _No description._             |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-tf-module-stack.TFModuleApp.isConstruct"></a>

```typescript
import { TFModuleApp } from 'cdktf-tf-module-stack'

TFModuleApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleApp.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

##### `isApp` <a name="isApp" id="cdktf-tf-module-stack.TFModuleApp.isApp"></a>

```typescript
import { TFModuleApp } from 'cdktf-tf-module-stack'

TFModuleApp.isApp(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleApp.isApp.parameter.x"></a>

- _Type:_ any

---

##### `of` <a name="of" id="cdktf-tf-module-stack.TFModuleApp.of"></a>

```typescript
import { TFModuleApp } from 'cdktf-tf-module-stack'

TFModuleApp.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-tf-module-stack.TFModuleApp.of.parameter.construct"></a>

- _Type:_ constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                             | **Type**                     | **Description**                                                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.property.node">node</a></code>                     | <code>constructs.Node</code> | The tree node.                                                 |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.property.manifest">manifest</a></code>             | <code>cdktf.Manifest</code>  | _No description._                                              |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.property.outdir">outdir</a></code>                 | <code>string</code>          | The output directory into which resources will be synthesized. |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.property.skipValidation">skipValidation</a></code> | <code>boolean</code>         | Whether to skip the validation during synthesis of the app.    |
| <code><a href="#cdktf-tf-module-stack.TFModuleApp.property.targetStackId">targetStackId</a></code>   | <code>string</code>          | The stack which will be synthesized.                           |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-tf-module-stack.TFModuleApp.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="cdktf-tf-module-stack.TFModuleApp.property.manifest"></a>

```typescript
public readonly manifest: Manifest;
```

- _Type:_ cdktf.Manifest

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktf-tf-module-stack.TFModuleApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string

The output directory into which resources will be synthesized.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="cdktf-tf-module-stack.TFModuleApp.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean;
```

- _Type:_ boolean

Whether to skip the validation during synthesis of the app.

---

##### `targetStackId`<sup>Optional</sup> <a name="targetStackId" id="cdktf-tf-module-stack.TFModuleApp.property.targetStackId"></a>

```typescript
public readonly targetStackId: string;
```

- _Type:_ string

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---

### TFModuleStack <a name="TFModuleStack" id="cdktf-tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="cdktf-tf-module-stack.TFModuleStack.Initializer"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

new TFModuleStack(scope: Construct, id: string)
```

| **Name**                                                                                          | **Type**                          | **Description**   |
| ------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.id">id</a></code>       | <code>string</code>               | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- _Type:_ string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                                                | **Description**                                    |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.toString">toString</a></code>                                                       | Returns a string representation of this construct. |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.addDependency">addDependency</a></code>                                             | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.addOverride">addOverride</a></code>                                                 | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.allProviders">allProviders</a></code>                                               | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.dependsOn">dependsOn</a></code>                                                     | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.ensureBackendExists">ensureBackendExists</a></code>                                 | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.getLogicalId">getLogicalId</a></code>                                               | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.prepareStack">prepareStack</a></code>                                               | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | _No description._                                  |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.toTerraform">toTerraform</a></code>                                                 | _No description._                                  |

---

##### `toString` <a name="toString" id="cdktf-tf-module-stack.TFModuleStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-tf-module-stack.TFModuleStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- _Type:_ cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-tf-module-stack.TFModuleStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- _Type:_ string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- _Type:_ any

---

##### `allProviders` <a name="allProviders" id="cdktf-tf-module-stack.TFModuleStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-tf-module-stack.TFModuleStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- _Type:_ cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-tf-module-stack.TFModuleStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- _Type:_ cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="cdktf-tf-module-stack.TFModuleStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- _Type:_ cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- _Type:_ string

---

##### `toTerraform` <a name="toTerraform" id="cdktf-tf-module-stack.TFModuleStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                | **Description**               |
| --------------------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.isStack">isStack</a></code>         | _No description._             |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.of">of</a></code>                   | _No description._             |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-tf-module-stack.TFModuleStack.isConstruct"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-tf-module-stack.TFModuleStack.isStack"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- _Type:_ any

---

##### `of` <a name="of" id="cdktf-tf-module-stack.TFModuleStack.of"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- _Type:_ constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                           | **Type**                             | **Description**   |
| -------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.node">node</a></code>                 | <code>constructs.Node</code>         | The tree node.    |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code>  | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.synthesizer">synthesizer</a></code>   | <code>cdktf.IStackSynthesizer</code> | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-tf-module-stack.TFModuleStack.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-tf-module-stack.TFModuleStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- _Type:_ cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-tf-module-stack.TFModuleStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- _Type:_ cdktf.IStackSynthesizer

---

### TFModuleVariable <a name="TFModuleVariable" id="cdktf-tf-module-stack.TFModuleVariable"></a>

#### Initializers <a name="Initializers" id="cdktf-tf-module-stack.TFModuleVariable.Initializer"></a>

```typescript
import { TFModuleVariable } from 'cdktf-tf-module-stack'

new TFModuleVariable(scope: Construct, name: string, config: TerraformVariableConfig)
```

| **Name**                                                                                               | **Type**                                   | **Description**   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ----------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.scope">scope</a></code>   | <code>constructs.Construct</code>          | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.name">name</a></code>     | <code>string</code>                        | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.config">config</a></code> | <code>cdktf.TerraformVariableConfig</code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.name"></a>

- _Type:_ string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-tf-module-stack.TFModuleVariable.Initializer.parameter.config"></a>

- _Type:_ cdktf.TerraformVariableConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                         | **Description**                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.toString">toString</a></code>                             | Returns a string representation of this construct.                                |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.addOverride">addOverride</a></code>                       | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.overrideLogicalId">overrideLogicalId</a></code>           | Overrides the auto-generated logical ID with a specific ID.                       |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.toMetadata">toMetadata</a></code>                         | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.toTerraform">toTerraform</a></code>                       | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.addValidation">addValidation</a></code>                   | _No description._                                                                 |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.synthesizeAttributes">synthesizeAttributes</a></code>     | _No description._                                                                 |

---

##### `toString` <a name="toString" id="cdktf-tf-module-stack.TFModuleVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-tf-module-stack.TFModuleVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-tf-module-stack.TFModuleVariable.addOverride.parameter.path"></a>

- _Type:_ string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-tf-module-stack.TFModuleVariable.addOverride.parameter.value"></a>

- _Type:_ any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-tf-module-stack.TFModuleVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-tf-module-stack.TFModuleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- _Type:_ string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-tf-module-stack.TFModuleVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-tf-module-stack.TFModuleVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-tf-module-stack.TFModuleVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addValidation` <a name="addValidation" id="cdktf-tf-module-stack.TFModuleVariable.addValidation"></a>

```typescript
public addValidation(validation: TerraformVariableValidationConfig): void
```

###### `validation`<sup>Required</sup> <a name="validation" id="cdktf-tf-module-stack.TFModuleVariable.addValidation.parameter.validation"></a>

- _Type:_ cdktf.TerraformVariableValidationConfig

---

##### `synthesizeAttributes` <a name="synthesizeAttributes" id="cdktf-tf-module-stack.TFModuleVariable.synthesizeAttributes"></a>

```typescript
public synthesizeAttributes(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                   | **Description**               |
| ------------------------------------------------------------------------------------------ | ----------------------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-tf-module-stack.TFModuleVariable.isConstruct"></a>

```typescript
import { TFModuleVariable } from 'cdktf-tf-module-stack'

TFModuleVariable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleVariable.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                      | **Type**                                               | **Description**   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------- |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.node">node</a></code>                         | <code>constructs.Node</code>                           | The tree node.    |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.cdktfStack">cdktfStack</a></code>             | <code>cdktf.TerraformStack</code>                      | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.fqn">fqn</a></code>                           | <code>string</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.booleanValue">booleanValue</a></code>         | <code>cdktf.IResolvable</code>                         | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.listValue">listValue</a></code>               | <code>string[]</code>                                  | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.numberValue">numberValue</a></code>           | <code>number</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.stringValue">stringValue</a></code>           | <code>string</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.value">value</a></code>                       | <code>any</code>                                       | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.default">default</a></code>                   | <code>any</code>                                       | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.description">description</a></code>           | <code>string</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.nullable">nullable</a></code>                 | <code>boolean</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.sensitive">sensitive</a></code>               | <code>boolean</code>                                   | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.type">type</a></code>                         | <code>string</code>                                    | _No description._ |
| <code><a href="#cdktf-tf-module-stack.TFModuleVariable.property.validation">validation</a></code>             | <code>cdktf.TerraformVariableValidationConfig[]</code> | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-tf-module-stack.TFModuleVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-tf-module-stack.TFModuleVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- _Type:_ cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-tf-module-stack.TFModuleVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- _Type:_ string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-tf-module-stack.TFModuleVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- _Type:_ string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="cdktf-tf-module-stack.TFModuleVariable.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- _Type:_ cdktf.IResolvable

---

##### `listValue`<sup>Required</sup> <a name="listValue" id="cdktf-tf-module-stack.TFModuleVariable.property.listValue"></a>

```typescript
public readonly listValue: string[];
```

- _Type:_ string[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="cdktf-tf-module-stack.TFModuleVariable.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- _Type:_ number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="cdktf-tf-module-stack.TFModuleVariable.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- _Type:_ string

---

##### `value`<sup>Required</sup> <a name="value" id="cdktf-tf-module-stack.TFModuleVariable.property.value"></a>

```typescript
public readonly value: any;
```

- _Type:_ any

---

##### `default`<sup>Optional</sup> <a name="default" id="cdktf-tf-module-stack.TFModuleVariable.property.default"></a>

```typescript
public readonly default: any;
```

- _Type:_ any

---

##### `description`<sup>Optional</sup> <a name="description" id="cdktf-tf-module-stack.TFModuleVariable.property.description"></a>

```typescript
public readonly description: string;
```

- _Type:_ string

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="cdktf-tf-module-stack.TFModuleVariable.property.nullable"></a>

```typescript
public readonly nullable: boolean;
```

- _Type:_ boolean

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="cdktf-tf-module-stack.TFModuleVariable.property.sensitive"></a>

```typescript
public readonly sensitive: boolean;
```

- _Type:_ boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="cdktf-tf-module-stack.TFModuleVariable.property.type"></a>

```typescript
public readonly type: string;
```

- _Type:_ string

---

##### `validation`<sup>Optional</sup> <a name="validation" id="cdktf-tf-module-stack.TFModuleVariable.property.validation"></a>

```typescript
public readonly validation: TerraformVariableValidationConfig[];
```

- _Type:_ cdktf.TerraformVariableValidationConfig[]

---
