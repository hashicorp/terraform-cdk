# API Reference <a name="API Reference" id="api-reference"></a>

## Classes <a name="Classes" id="Classes"></a>

### CdktfApplication <a name="CdktfApplication" id="@cdktf/api.CdktfApplication"></a>

Controls synth / plan / deploy for a CDKTF application.

#### Initializers <a name="Initializers" id="@cdktf/api.CdktfApplication.Initializer"></a>

```typescript
import { CdktfApplication } from '@cdktf/api'

new CdktfApplication(opts: ICdktfApplicationOptions)
```

| **Name**                                                                                | **Type**                                                                                 | **Description**   |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.CdktfApplication.Initializer.parameter.opts">opts</a></code> | <code><a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a></code> | _No description._ |

---

##### `opts`<sup>Required</sup> <a name="opts" id="@cdktf/api.CdktfApplication.Initializer.parameter.opts"></a>

- _Type:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

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

Controls synth / plan / deploy for a CDKTF application.

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

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                      | **Description**   |
| ----------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@cdktf/api.SynthesizedApplication.deploy">deploy</a></code>   | _No description._ |
| <code><a href="#@cdktf/api.SynthesizedApplication.destroy">destroy</a></code> | _No description._ |
| <code><a href="#@cdktf/api.SynthesizedApplication.plan">plan</a></code>       | _No description._ |

---

##### `deploy` <a name="deploy" id="@cdktf/api.SynthesizedApplication.deploy"></a>

```typescript
public deploy(): boolean
```

##### `destroy` <a name="destroy" id="@cdktf/api.SynthesizedApplication.destroy"></a>

```typescript
public destroy(): boolean
```

##### `plan` <a name="plan" id="@cdktf/api.SynthesizedApplication.plan"></a>

```typescript
public plan(): boolean
```

## Protocols <a name="Protocols" id="Protocols"></a>

### ICdktfApplicationOptions <a name="ICdktfApplicationOptions" id="@cdktf/api.ICdktfApplicationOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ICdktfApplicationOptions">ICdktfApplicationOptions</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                        | **Description**                                        |
| ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| <code><a href="#@cdktf/api.ICdktfApplicationOptions.program">program</a></code> | Produce a cdktf program, forbidden if cwd is provided? |

---

##### `program` <a name="program" id="@cdktf/api.ICdktfApplicationOptions.program"></a>

```typescript
public program(app: any): void
```

Produce a cdktf program, forbidden if cwd is provided?

###### `app`<sup>Required</sup> <a name="app" id="@cdktf/api.ICdktfApplicationOptions.program.parameter.app"></a>

- _Type:_ any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                         | **Type**            | **Description**                                            |
| -------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------- |
| <code><a href="#@cdktf/api.ICdktfApplicationOptions.property.cwd">cwd</a></code> | <code>string</code> | Path to cdktf directory (optional if program is provided). |

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="@cdktf/api.ICdktfApplicationOptions.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- _Type:_ string

Path to cdktf directory (optional if program is provided).

---

### IResult <a name="IResult" id="@cdktf/api.IResult"></a>

- _Implemented By:_ <a href="#@cdktf/api.IResult">IResult</a>

### ISynthesizedApplicationOptions <a name="ISynthesizedApplicationOptions" id="@cdktf/api.ISynthesizedApplicationOptions"></a>

- _Implemented By:_ <a href="#@cdktf/api.ISynthesizedApplicationOptions">ISynthesizedApplicationOptions</a>
