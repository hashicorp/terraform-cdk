# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyConstruct <a name="MyConstruct" id="my-module.MyConstruct"></a>

#### Initializers <a name="Initializers" id="my-module.MyConstruct.Initializer"></a>

```typescript
import { MyConstruct } from 'my-module'

new MyConstruct(scope: Construct, id: string, config: MyConstructOptions)
```

| **Name**                                                                              | **Type**                                                                    | **Description**   |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.MyConstruct.Initializer.parameter.scope">scope</a></code>   | <code>constructs.Construct</code>                                           | _No description._ |
| <code><a href="#my-module.MyConstruct.Initializer.parameter.id">id</a></code>         | <code>string</code>                                                         | _No description._ |
| <code><a href="#my-module.MyConstruct.Initializer.parameter.config">config</a></code> | <code><a href="#my-module.MyConstructOptions">MyConstructOptions</a></code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="my-module.MyConstruct.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="my-module.MyConstruct.Initializer.parameter.id"></a>

- _Type:_ string

---

##### `config`<sup>Required</sup> <a name="config" id="my-module.MyConstruct.Initializer.parameter.config"></a>

- _Type:_ <a href="#my-module.MyConstructOptions">MyConstructOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                            | **Description**                                    |
| ------------------------------------------------------------------- | -------------------------------------------------- |
| <code><a href="#my-module.MyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="my-module.MyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                  | **Description**               |
| ------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#my-module.MyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="my-module.MyConstruct.isConstruct"></a>

```typescript
import { MyConstruct } from 'my-module'

MyConstruct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="my-module.MyConstruct.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                 | **Type**                                                                    | **Description**   |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.MyConstruct.property.node">node</a></code>     | <code>constructs.Node</code>                                                | The tree node.    |
| <code><a href="#my-module.MyConstruct.property.config">config</a></code> | <code><a href="#my-module.MyConstructOptions">MyConstructOptions</a></code> | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="my-module.MyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="my-module.MyConstruct.property.config"></a>

```typescript
public readonly config: MyConstructOptions;
```

- _Type:_ <a href="#my-module.MyConstructOptions">MyConstructOptions</a>

---

## Structs <a name="Structs" id="Structs"></a>

### MyConstructOptions <a name="MyConstructOptions" id="my-module.MyConstructOptions"></a>

#### Initializer <a name="Initializer" id="my-module.MyConstructOptions.Initializer"></a>

```typescript
import { MyConstructOptions } from 'my-module'

const myConstructOptions: MyConstructOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                              | **Type**            | **Description**   |
| ------------------------------------------------------------------------------------- | ------------------- | ----------------- |
| <code><a href="#my-module.MyConstructOptions.property.propertyA">propertyA</a></code> | <code>string</code> | _No description._ |

---

##### `propertyA`<sup>Required</sup> <a name="propertyA" id="my-module.MyConstructOptions.property.propertyA"></a>

```typescript
public readonly propertyA: string;
```

- _Type:_ string

---
