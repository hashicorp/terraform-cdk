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

| **Name**                                                       | **Description**                 |
| -------------------------------------------------------------- | ------------------------------- |
| <code><a href="#@cdktf/api.Api.get">get</a></code>             | Generate cdktf bindings.        |
| <code><a href="#@cdktf/api.Api.inlineApp">inlineApp</a></code> | Create a new CDKTF application. |
| <code><a href="#@cdktf/api.Api.localApp">localApp</a></code>   | Create a new CDKTF application. |

---

##### `get` <a name="get" id="@cdktf/api.Api.get"></a>

```typescript
import { Api } from '@cdktf/api'

Api.get(providers: string | IProviderConstraint[], modules: string | IModuleConstraint[])
```

Generate cdktf bindings.

###### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/api.Api.get.parameter.providers"></a>

- _Type:_ string | <a href="#@cdktf/api.IProviderConstraint">IProviderConstraint</a>[]

---

###### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/api.Api.get.parameter.modules"></a>

- _Type:_ string | <a href="#@cdktf/api.IModuleConstraint">IModuleConstraint</a>[]

---

##### `inlineApp` <a name="inlineApp" id="@cdktf/api.Api.inlineApp"></a>

```typescript
import { Api } from '@cdktf/api'

Api.inlineApp(__0: IProgramProducer)
```

Create a new CDKTF application.

###### `__0`<sup>Required</sup> <a name="__0" id="@cdktf/api.Api.inlineApp.parameter.__0"></a>

- _Type:_ <a href="#@cdktf/api.IProgramProducer">IProgramProducer</a>

---

##### `localApp` <a name="localApp" id="@cdktf/api.Api.localApp"></a>

```typescript
import { Api } from '@cdktf/api'

Api.localApp(cwd: string)
```

Create a new CDKTF application.

###### `cwd`<sup>Required</sup> <a name="cwd" id="@cdktf/api.Api.localApp.parameter.cwd"></a>

- _Type:_ string

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

## Protocols <a name="Protocols" id="Protocols"></a>

### ICdktfApplicationOptions <a name="ICdktfApplicationOptions" id="@cdktf/api.ICdktfApplicationOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>, <a href="#@cdktf/api.IInlineProgram">IInlineProgram</a>, <a href="#@cdktf/api.ILocalProgram">ILocalProgram</a>

### IInlineProgram <a name="IInlineProgram" id="@cdktf/api.IInlineProgram"></a>

- _Extends:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

- _Implemented By:_ <a href="#@cdktf/api.IInlineProgram">IInlineProgram</a>

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                       | **Type**                                                                 | **Description**          |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------ |
| <code><a href="#@cdktf/api.IInlineProgram.property.program">program</a></code> | <code><a href="#@cdktf/api.IProgramProducer">IProgramProducer</a></code> | Produce a cdktf program. |

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

| **Name**                                                              | **Type**            | **Description**          |
| --------------------------------------------------------------------- | ------------------- | ------------------------ |
| <code><a href="#@cdktf/api.ILocalProgram.property.cwd">cwd</a></code> | <code>string</code> | Path to cdktf directory. |

---

##### `cwd`<sup>Required</sup> <a name="cwd" id="@cdktf/api.ILocalProgram.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- _Type:_ string

Path to cdktf directory.

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

### ISynthesizedStackOptions <a name="ISynthesizedStackOptions" id="@cdktf/api.ISynthesizedStackOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ISynthesizedStackOptions">ISynthesizedStackOptions</a>

### ITerraformPlan <a name="ITerraformPlan" id="@cdktf/api.ITerraformPlan"></a>

- _Implemented By:_ <a href="#@cdktf/api.ITerraformPlan">ITerraformPlan</a>
