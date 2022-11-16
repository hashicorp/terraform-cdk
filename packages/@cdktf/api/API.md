# API Reference <a name="API Reference" id="api-reference"></a>

## Classes <a name="Classes" id="Classes"></a>

### Api <a name="Api" id="@cdktf/api.Api"></a>

API for interacting with Terraform CDK.

#### Initializers <a name="Initializers" id="@cdktf/api.Api.Initializer"></a>

```typescript
import { Api } from "@cdktf/api";

new Api();
```

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                       | **Description**                                                               |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| <code><a href="#@cdktf/api.Api.get">get</a></code>             | Generate cdktf bindings.                                                      |
| <code><a href="#@cdktf/api.Api.inlineApp">inlineApp</a></code> | Create a new CDKTF application from an inline program.                        |
| <code><a href="#@cdktf/api.Api.localApp">localApp</a></code>   | Create a new CDKTF application from a local directory including a cdktf.json. |

---

##### `get` <a name="get" id="@cdktf/api.Api.get"></a>

```typescript
import { Api } from '@cdktf/api'

Api.get(targetDirectory: string, providers: string | IProviderConstraint[], modules: string | IModuleConstraint[])
```

Generate cdktf bindings.

###### `targetDirectory`<sup>Required</sup> <a name="targetDirectory" id="@cdktf/api.Api.get.parameter.targetDirectory"></a>

- _Type:_ string

---

###### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/api.Api.get.parameter.providers"></a>

- _Type:_ string | <a href="#@cdktf/api.IProviderConstraint">IProviderConstraint</a>[]

---

###### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/api.Api.get.parameter.modules"></a>

- _Type:_ string | <a href="#@cdktf/api.IModuleConstraint">IModuleConstraint</a>[]

---

##### `inlineApp` <a name="inlineApp" id="@cdktf/api.Api.inlineApp"></a>

```typescript
import { Api } from '@cdktf/api'

Api.inlineApp(config: IInlineProgram)
```

Create a new CDKTF application from an inline program.

###### `config`<sup>Required</sup> <a name="config" id="@cdktf/api.Api.inlineApp.parameter.config"></a>

- _Type:_ <a href="#@cdktf/api.IInlineProgram">IInlineProgram</a>

---

##### `localApp` <a name="localApp" id="@cdktf/api.Api.localApp"></a>

```typescript
import { Api } from '@cdktf/api'

Api.localApp(cwd: string, opts?: ICdktfApplicationOptions)
```

Create a new CDKTF application from a local directory including a cdktf.json.

###### `cwd`<sup>Required</sup> <a name="cwd" id="@cdktf/api.Api.localApp.parameter.cwd"></a>

- _Type:_ string

---

###### `opts`<sup>Optional</sup> <a name="opts" id="@cdktf/api.Api.localApp.parameter.opts"></a>

- _Type:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

---

### CdktfApplication <a name="CdktfApplication" id="@cdktf/api.CdktfApplication"></a>

Controls synth / plan / deploy for a CDKTF application.

#### Initializers <a name="Initializers" id="@cdktf/api.CdktfApplication.Initializer"></a>

```typescript
import { CdktfApplication } from '@cdktf/api'

new CdktfApplication(opts: IProgramProducer | ILocalProgram)
```

| **Name**                                                                                | **Type**                                                                                                                          | **Description**   |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.CdktfApplication.Initializer.parameter.opts">opts</a></code> | <code><a href="#@cdktf/api.IProgramProducer">IProgramProducer</a> \| <a href="#@cdktf/api.ILocalProgram">ILocalProgram</a></code> | _No description._ |

---

##### `opts`<sup>Required</sup> <a name="opts" id="@cdktf/api.CdktfApplication.Initializer.parameter.opts"></a>

- _Type:_ <a href="#@cdktf/api.IProgramProducer">IProgramProducer</a> | <a href="#@cdktf/api.ILocalProgram">ILocalProgram</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                            | **Description**   |
| ------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.CdktfApplication.synth">synth</a></code> | _No description._ |

---

##### `synth` <a name="synth" id="@cdktf/api.CdktfApplication.synth"></a>

```typescript
public synth(): SynthesizedApplication
```

### SynthesizedApplication <a name="SynthesizedApplication" id="@cdktf/api.SynthesizedApplication"></a>

Represents a synthesized CDKTF application.

#### Initializers <a name="Initializers" id="@cdktf/api.SynthesizedApplication.Initializer"></a>

```typescript
import { SynthesizedApplication } from '@cdktf/api'

new SynthesizedApplication(opts: ISynthesizedApplicationOptions)
```

| **Name**                                                                                      | **Type**                                                                                             | **Description**   |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedApplication.Initializer.parameter.opts">opts</a></code> | <code><a href="#@cdktf/api.ISynthesizedApplicationOptions">ISynthesizedApplicationOptions</a></code> | _No description._ |

---

##### `opts`<sup>Required</sup> <a name="opts" id="@cdktf/api.SynthesizedApplication.Initializer.parameter.opts"></a>

- _Type:_ <a href="#@cdktf/api.ISynthesizedApplicationOptions">ISynthesizedApplicationOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                             | **Type**                                                                                    | **Description**   |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedApplication.property.stacks">stacks</a></code> | <code>{[ key: string ]: <a href="#@cdktf/api.SynthesizedStack">SynthesizedStack</a>}</code> | _No description._ |

---

##### `stacks`<sup>Required</sup> <a name="stacks" id="@cdktf/api.SynthesizedApplication.property.stacks"></a>

```typescript
public readonly stacks: {[ key: string ]: SynthesizedStack};
```

- _Type:_ {[ key: string ]: <a href="#@cdktf/api.SynthesizedStack">SynthesizedStack</a>}

---

### SynthesizedStack <a name="SynthesizedStack" id="@cdktf/api.SynthesizedStack"></a>

Represents a synthesized CDKTF stack.

#### Initializers <a name="Initializers" id="@cdktf/api.SynthesizedStack.Initializer"></a>

```typescript
import { SynthesizedStack } from '@cdktf/api'

new SynthesizedStack(opts: ISynthesizedStackOptions)
```

| **Name**                                                                                | **Type**                                                                                 | **Description**   |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedStack.Initializer.parameter.opts">opts</a></code> | <code><a href="#@cdktf/api.ISynthesizedStackOptions">ISynthesizedStackOptions</a></code> | _No description._ |

---

##### `opts`<sup>Required</sup> <a name="opts" id="@cdktf/api.SynthesizedStack.Initializer.parameter.opts"></a>

- _Type:_ <a href="#@cdktf/api.ISynthesizedStackOptions">ISynthesizedStackOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                | **Description**   |
| ----------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedStack.deploy">deploy</a></code>   | _No description._ |
| <code><a href="#@cdktf/api.SynthesizedStack.destroy">destroy</a></code> | _No description._ |
| <code><a href="#@cdktf/api.SynthesizedStack.plan">plan</a></code>       | _No description._ |

---

##### `deploy` <a name="deploy" id="@cdktf/api.SynthesizedStack.deploy"></a>

```typescript
public deploy(): void
```

##### `destroy` <a name="destroy" id="@cdktf/api.SynthesizedStack.destroy"></a>

```typescript
public destroy(): void
```

##### `plan` <a name="plan" id="@cdktf/api.SynthesizedStack.plan"></a>

```typescript
public plan(): ITerraformPlan
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                   | **Type**            | **Description**   |
| -------------------------------------------------------------------------- | ------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedStack.property.name">name</a></code> | <code>string</code> | _No description._ |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/api.SynthesizedStack.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

---

## Protocols <a name="Protocols" id="Protocols"></a>

### ICdktfApplicationOptions <a name="ICdktfApplicationOptions" id="@cdktf/api.ICdktfApplicationOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>, <a href="#@cdktf/api.IInlineProgram">IInlineProgram</a>, <a href="#@cdktf/api.ILocalProgram">ILocalProgram</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                         | **Type**                                                         | **Description**   |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.ICdktfApplicationOptions.property.logCallback">logCallback</a></code> | <code><a href="#@cdktf/api.ILogCallback">ILogCallback</a></code> | _No description._ |
| <code><a href="#@cdktf/api.ICdktfApplicationOptions.property.logToStdOut">logToStdOut</a></code> | <code>boolean</code>                                             | _No description._ |

---

##### `logCallback`<sup>Optional</sup> <a name="logCallback" id="@cdktf/api.ICdktfApplicationOptions.property.logCallback"></a>

```typescript
public readonly logCallback: ILogCallback;
```

- _Type:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

---

##### `logToStdOut`<sup>Optional</sup> <a name="logToStdOut" id="@cdktf/api.ICdktfApplicationOptions.property.logToStdOut"></a>

```typescript
public readonly logToStdOut: boolean;
```

- _Type:_ boolean

---

### IInlineProgram <a name="IInlineProgram" id="@cdktf/api.IInlineProgram"></a>

- _Extends:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

- _Implemented By:_ <a href="#@cdktf/api.IInlineProgram">IInlineProgram</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                               | **Type**                                                                 | **Description**          |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------ |
| <code><a href="#@cdktf/api.IInlineProgram.property.logCallback">logCallback</a></code> | <code><a href="#@cdktf/api.ILogCallback">ILogCallback</a></code>         | _No description._        |
| <code><a href="#@cdktf/api.IInlineProgram.property.logToStdOut">logToStdOut</a></code> | <code>boolean</code>                                                     | _No description._        |
| <code><a href="#@cdktf/api.IInlineProgram.property.program">program</a></code>         | <code><a href="#@cdktf/api.IProgramProducer">IProgramProducer</a></code> | Produce a cdktf program. |

---

##### `logCallback`<sup>Optional</sup> <a name="logCallback" id="@cdktf/api.IInlineProgram.property.logCallback"></a>

```typescript
public readonly logCallback: ILogCallback;
```

- _Type:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

---

##### `logToStdOut`<sup>Optional</sup> <a name="logToStdOut" id="@cdktf/api.IInlineProgram.property.logToStdOut"></a>

```typescript
public readonly logToStdOut: boolean;
```

- _Type:_ boolean

---

##### `program`<sup>Required</sup> <a name="program" id="@cdktf/api.IInlineProgram.property.program"></a>

```typescript
public readonly program: IProgramProducer;
```

- _Type:_ <a href="#@cdktf/api.IProgramProducer">IProgramProducer</a>

Produce a cdktf program.

---

### ILocalProgram <a name="ILocalProgram" id="@cdktf/api.ILocalProgram"></a>

- _Extends:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

- _Implemented By:_ <a href="#@cdktf/api.ILocalProgram">ILocalProgram</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                              | **Type**                                                         | **Description**          |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------ |
| <code><a href="#@cdktf/api.ILocalProgram.property.logCallback">logCallback</a></code> | <code><a href="#@cdktf/api.ILogCallback">ILogCallback</a></code> | _No description._        |
| <code><a href="#@cdktf/api.ILocalProgram.property.logToStdOut">logToStdOut</a></code> | <code>boolean</code>                                             | _No description._        |
| <code><a href="#@cdktf/api.ILocalProgram.property.cwd">cwd</a></code>                 | <code>string</code>                                              | Path to cdktf directory. |

---

##### `logCallback`<sup>Optional</sup> <a name="logCallback" id="@cdktf/api.ILocalProgram.property.logCallback"></a>

```typescript
public readonly logCallback: ILogCallback;
```

- _Type:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

---

##### `logToStdOut`<sup>Optional</sup> <a name="logToStdOut" id="@cdktf/api.ILocalProgram.property.logToStdOut"></a>

```typescript
public readonly logToStdOut: boolean;
```

- _Type:_ boolean

---

##### `cwd`<sup>Required</sup> <a name="cwd" id="@cdktf/api.ILocalProgram.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- _Type:_ string

Path to cdktf directory.

---

### ILogCallback <a name="ILogCallback" id="@cdktf/api.ILogCallback"></a>

- _Implemented By:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

### IMetadata <a name="IMetadata" id="@cdktf/api.IMetadata"></a>

- _Implemented By:_ <a href="#@cdktf/api.IMetadata">IMetadata</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                              | **Type**            | **Description**   |
| --------------------------------------------------------------------- | ------------------- | ----------------- |
| <code><a href="#@cdktf/api.IMetadata.property.stack">stack</a></code> | <code>string</code> | _No description._ |

---

##### `stack`<sup>Optional</sup> <a name="stack" id="@cdktf/api.IMetadata.property.stack"></a>

```typescript
public readonly stack: string;
```

- _Type:_ string

---

### IModuleConstraint <a name="IModuleConstraint" id="@cdktf/api.IModuleConstraint"></a>

- _Implemented By:_ <a href="#@cdktf/api.IModuleConstraint">IModuleConstraint</a>

### IProgramProducer <a name="IProgramProducer" id="@cdktf/api.IProgramProducer"></a>

- _Implemented By:_ <a href="#@cdktf/api.IProgramProducer">IProgramProducer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                | **Description**   |
| ----------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.IProgramProducer.produce">produce</a></code> | _No description._ |

---

##### `produce` <a name="produce" id="@cdktf/api.IProgramProducer.produce"></a>

```typescript
public produce(app: any): void
```

###### `app`<sup>Required</sup> <a name="app" id="@cdktf/api.IProgramProducer.produce.parameter.app"></a>

- _Type:_ any

---

### IProviderConstraint <a name="IProviderConstraint" id="@cdktf/api.IProviderConstraint"></a>

- _Implemented By:_ <a href="#@cdktf/api.IProviderConstraint">IProviderConstraint</a>

### IResult <a name="IResult" id="@cdktf/api.IResult"></a>

- _Implemented By:_ <a href="#@cdktf/api.IResult">IResult</a>

### ISynthesizedApplicationOptions <a name="ISynthesizedApplicationOptions" id="@cdktf/api.ISynthesizedApplicationOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ISynthesizedApplicationOptions">ISynthesizedApplicationOptions</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                   | **Type**                                                         | **Description**   |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.ISynthesizedApplicationOptions.property.cdktfSynthDir">cdktfSynthDir</a></code> | <code>string</code>                                              | _No description._ |
| <code><a href="#@cdktf/api.ISynthesizedApplicationOptions.property.logCallback">logCallback</a></code>     | <code><a href="#@cdktf/api.ILogCallback">ILogCallback</a></code> | _No description._ |
| <code><a href="#@cdktf/api.ISynthesizedApplicationOptions.property.logToStdOut">logToStdOut</a></code>     | <code>boolean</code>                                             | _No description._ |

---

##### `cdktfSynthDir`<sup>Required</sup> <a name="cdktfSynthDir" id="@cdktf/api.ISynthesizedApplicationOptions.property.cdktfSynthDir"></a>

```typescript
public readonly cdktfSynthDir: string;
```

- _Type:_ string

---

##### `logCallback`<sup>Optional</sup> <a name="logCallback" id="@cdktf/api.ISynthesizedApplicationOptions.property.logCallback"></a>

```typescript
public readonly logCallback: ILogCallback;
```

- _Type:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

---

##### `logToStdOut`<sup>Optional</sup> <a name="logToStdOut" id="@cdktf/api.ISynthesizedApplicationOptions.property.logToStdOut"></a>

```typescript
public readonly logToStdOut: boolean;
```

- _Type:_ boolean

---

### ISynthesizedStackOptions <a name="ISynthesizedStackOptions" id="@cdktf/api.ISynthesizedStackOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ISynthesizedStackOptions">ISynthesizedStackOptions</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                         | **Type**                                                         | **Description**   |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.ISynthesizedStackOptions.property.name">name</a></code>               | <code>string</code>                                              | _No description._ |
| <code><a href="#@cdktf/api.ISynthesizedStackOptions.property.logCallback">logCallback</a></code> | <code><a href="#@cdktf/api.ILogCallback">ILogCallback</a></code> | _No description._ |
| <code><a href="#@cdktf/api.ISynthesizedStackOptions.property.logToStdOut">logToStdOut</a></code> | <code>boolean</code>                                             | _No description._ |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/api.ISynthesizedStackOptions.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

---

##### `logCallback`<sup>Optional</sup> <a name="logCallback" id="@cdktf/api.ISynthesizedStackOptions.property.logCallback"></a>

```typescript
public readonly logCallback: ILogCallback;
```

- _Type:_ <a href="#@cdktf/api.ILogCallback">ILogCallback</a>

---

##### `logToStdOut`<sup>Optional</sup> <a name="logToStdOut" id="@cdktf/api.ISynthesizedStackOptions.property.logToStdOut"></a>

```typescript
public readonly logToStdOut: boolean;
```

- _Type:_ boolean

---

### ITerraformPlan <a name="ITerraformPlan" id="@cdktf/api.ITerraformPlan"></a>

- _Implemented By:_ <a href="#@cdktf/api.ITerraformPlan">ITerraformPlan</a>
