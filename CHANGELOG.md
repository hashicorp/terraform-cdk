## 0.11.0 (Unreleased)

**Breaking Changes**

### `TF_VAR_` prefixed environment variables can no longer be accessed at synth time

These environment variables will now be filtered out in the synth phase since they are only intended to be used during diff (plan) and deploy (apply) phases to supply values for [`TerraformVariable`s](https://www.terraform.io/cdktf/concepts/variables-and-outputs#input-variables). This inhibits accidentally inlining those values into the generated `cdk.tf.json` config.

### Environment variable and CLI option changes

- `DEBUG` is replaced by setting `CDKTF_LOG_LEVEL=debug`, setting the `CDKTF_LOG_LEVEL` to debug will now also behave like `DEBUG=1` and include logs from the provider generation
- `CDKTF_DISABLE_LOGGING=false` is replaced by setting `CDKTF_LOG_FILE_DIRECTORY=/path/to/logs/directory`. If left empty no logs will be written.
- `--disable-logging` was removed, instead use the environment variable `CDKTF_LOG_LEVEL=off`
- `DISABLE_VERSION_CHECK`, `CDKTF_DISABLE_PLUGIN_CACHE_ENV` need to be set to `true` or `1`, before anything worked.

### Stack ids can no longer contain whitespaces

A `TerraformStack` may no longer contain whitespace characters, since we rely on paths being whitespace free. If you have a stack with an id containing a whitespace, please replace it with a hyphen. If the stack was already deployed with the default `LocalBackend` you might need to rename your statefile to match the new stack id.

### Computed Map References are referenced through getter

For computed maps, the reference is now through a getter.

To access `{ property = "value" }`, instead of `resource.mapAttribute("property")` you can now use `resource.mapAttribute.lookup("property")`.

## 0.10.4

### fix

- fix(cli): Stop pinning jest in TS init template [\#1769](https://github.com/hashicorp/terraform-cdk/pull/1769)

## 0.10.3

### feat

- feat(provider-generator): emit a versions.json file to the output directory, containing the used provider versions [\#1749](https://github.com/hashicorp/terraform-cdk/pull/1749)
- feat(cli): debug command [\#1731](https://github.com/hashicorp/terraform-cdk/pull/1731)

### chore

- chore(cli): add environment variable to disable version checks [\#1757](https://github.com/hashicorp/terraform-cdk/pull/1757)
- chore: drop Terraform v0.15.7 from Docker image and replace with v1.1.9 for running tests [\#1747](https://github.com/hashicorp/terraform-cdk/pull/1747)
- chore: add Terraform v1.1.9 to Docker image [\#1743](https://github.com/hashicorp/terraform-cdk/pull/1743)
- chore(docs): update env var usage [\#1693](https://github.com/hashicorp/terraform-cdk/pull/1693)

### fix

- fix(lib): Add new optional AWS route attributes [\#1755](https://github.com/hashicorp/terraform-cdk/pull/1755)
- fix(cli): handle version check more defensively [\#1753](https://github.com/hashicorp/terraform-cdk/pull/1753)
- fix(cli): we should not send wait for approval if a stop has been issued [\#1740](https://github.com/hashicorp/terraform-cdk/pull/1740)
- fix(cli): Fix indentation of RemoteBackend in CSharp and Java template [\#1733](https://github.com/hashicorp/terraform-cdk/pull/1733)
- fix(cli): fix templates to properly indent cdktf.json and add RemoteBackend in TS template [\#1732](https://github.com/hashicorp/terraform-cdk/pull/1732)

## 0.10.2

### fix

- fix(tests): pin awscc version [\#1727](https://github.com/hashicorp/terraform-cdk/pull/1727)
- fix(cli): return non-zero exit code in case of error when using cdktf diff [\#1726](https://github.com/hashicorp/terraform-cdk/pull/1726)
- fix(cli): allow init command to run in a directory containing a README.md [\#1722](https://github.com/hashicorp/terraform-cdk/pull/1722)
- fix(provider-generator): Include "arn" when assignable [\#1716](https://github.com/hashicorp/terraform-cdk/pull/1716)
- fix(hcl2cdk): detect list extensions in strings and wrap them in an array [\#1707](https://github.com/hashicorp/terraform-cdk/pull/1707)
- fix(lib): override values containing intrinsic tokens caused an infinite loop [\#1702](https://github.com/hashicorp/terraform-cdk/pull/1702)
- fix(lib): contextualize error messages in terraform functions [\#1699](https://github.com/hashicorp/terraform-cdk/pull/1699)
- fix(cli): fix path for `.terraform` directory [\#1694](https://github.com/hashicorp/terraform-cdk/pull/1694)
- fix(cli): improve cli error handling [\#1687](https://github.com/hashicorp/terraform-cdk/pull/1687)

### chore

- chore: align versions to an unpublished version [\#1718](https://github.com/hashicorp/terraform-cdk/pull/1718)
- chore(docs): update convert docs [\#1701](https://github.com/hashicorp/terraform-cdk/pull/1701)
- chore(docs): update aspect docs [\#1690](https://github.com/hashicorp/terraform-cdk/pull/1690)
- chore: npm-check-updates && yarn upgrade [\#1683](https://github.com/hashicorp/terraform-cdk/pull/1683)

### test

- test(hcl2cdk): add test case for property renaming [\#1709](https://github.com/hashicorp/terraform-cdk/pull/1709)

### feat

- feat(cli): warn users about misaligned CLI and library versions [\#1700](https://github.com/hashicorp/terraform-cdk/pull/1700)
- feat(lib): improve error messages around misused list mutation [\#1691](https://github.com/hashicorp/terraform-cdk/pull/1691)

## 0.10.1

### fix

- fix(cli): fix convert single blocks as array bug [\#1680](https://github.com/hashicorp/terraform-cdk/pull/1680)
- fix(cli): Only print error that's thrown [\#1678](https://github.com/hashicorp/terraform-cdk/pull/1678)

### refactor

- refactor(tests): move from table driven tests to functional way [\#1679](https://github.com/hashicorp/terraform-cdk/pull/1679)
- refactor(cli): remove xstate as state machine [\#1670](https://github.com/hashicorp/terraform-cdk/pull/1670)

### chore

- chore(docs): update project maturity statement [\#1676](https://github.com/hashicorp/terraform-cdk/pull/1676)
- chore(docs): add sidebar link [\#1674](https://github.com/hashicorp/terraform-cdk/pull/1674)
- chore: add extra column for PRs outside our main repo [\#1673](https://github.com/hashicorp/terraform-cdk/pull/1673)

### feat

- feat(cli): support HTTP_PROXY for Terraform Cloud [\#1507](https://github.com/hashicorp/terraform-cdk/pull/1507)

## 0.10.0

**Breaking Changes**

### Remove `cdktf synth --json` Option [#1640](https://github.com/hashicorp/terraform-cdk/pull/1640)

If you are using `cdktf synth --json <stack-name>` to get the synthesized JSON configuration for your Stack, you will now need to run `cdktf synth && cat ./cdktf.out/stacks/<stack-name>/cdk.tf.json` instead. The `./cdktf.out` part is your output directory (set by `cdktf.json` or via the `--output` flag).

### Model ComplexComputedLists as ComplexLists and ComputedObjects [#1499](https://github.com/hashicorp/terraform-cdk/pull/1499)

In an effort to streamline the interfaces of resources, computed attributes of the type list and set are now modeled as a separate `ComplexList` type instead of being a method that directly takes an index and returns an item. This change also did change the type of the index from `string` to `number`.

#### Typescript

```ts
// previously
const firstItemId = resource.listAttribute("0").id;

// new
const firstItemId = resource.listAttribute.get(0).id;
const firstItem = resource.listAttribute.get(0); // now possible
```

#### Python

```python
# previously
first_item_id = resource.list_attribute("0").id;

# new
first_item_id = resource.list_attribute.get(0).id;
first_item = resource.list_attribute.get(0); # now possible
```

#### CSharp

```csharp
// previously
string firstItemId = resource.ListAttribute("0").Id;

// new
string firstItemId = resource.ListAttribute.Get(0).Id;
ListAttributeItem firstItem = resource.ListAttribute.Get(0); // now possible
```

#### Java

```java
// previously
String firstItemId = resource.listAttribute("0").getId();

// new
String firstItemId = resource.getListAttribute().get(0).getId();
ListAttributeItem firstItem = resource.getListAttribute().get(0); // now possible
```

#### Go

```golang
// previously
firstItemId := resource.ListAttribute(jsii.String("0")).Id();

// new
firstItemId := resource.ListAttribute().Get(jsii.Number(0)).Id();
firstItem := resource.ListAttribute().Get(jsii.Number(0)); // now possible
```

### Referencing computed string map entries via function call [#1630](https://github.com/hashicorp/terraform-cdk/pull/1630)

In preparation for a similar change as to the computed lists (section above), string map entries can now be accessed via a function call instead of using `Fn.lookup`. Accessing the whole map at once now requires a different function call in the meantime.

#### Example

```ts
const bucket = new s3.S3Bucket(this, "bucket");

// previously
const firstRuleStage = Fn.lookup(
  bucket.lifecycleRule("0").tags,
  "stage",
  "no-stage"
);
const firstRuleTags = bucket.lifecycleRule("0").tags;

// new
const firstRuleStage = bucket.lifecycleRule.get(0).tags("stage"); // tags is now a function
const firstRuleTags = bucket.lifecycleRule
  .get(0)
  .interpolationForAttribute("tags"); // will be improved in a future iteration
```

### feat

- feat(cli): rewrite watch using explicit file globs [\#1658](https://github.com/hashicorp/terraform-cdk/pull/1658)
- feat(cli): stop TFC plans when we discard / stop / ctrl-c [\#1650](https://github.com/hashicorp/terraform-cdk/pull/1650)
- feat(cli): throw clearer error if --from-terraform-project misses an arg [\#1646](https://github.com/hashicorp/terraform-cdk/pull/1646)
- feat(cli): enhance logs with path to construct [\#1635](https://github.com/hashicorp/terraform-cdk/pull/1635)
- feat(cli): match multiple stacks with patterns [\#1634](https://github.com/hashicorp/terraform-cdk/pull/1634)
- feat(cli): allow multiple stacks in the output command [\#1633](https://github.com/hashicorp/terraform-cdk/pull/1633)
- feat(cli): Support nested_type in generator [\#1630](https://github.com/hashicorp/terraform-cdk/pull/1630)
- feat(cli): check whether an existing token is still valid when running login command [\#1627](https://github.com/hashicorp/terraform-cdk/pull/1627)
- feat(cli): parallelize cdktf deploy/destroy [\#1625](https://github.com/hashicorp/terraform-cdk/pull/1625)
- feat(cli): handle dismissing a single stack vs stopping all stacks [\#1621](https://github.com/hashicorp/terraform-cdk/pull/1621)
- feat(lib): Support `impersonate_service_account` and `_delegate` on `gcs` backend [\#1615](https://github.com/hashicorp/terraform-cdk/pull/1615)
- feat(cli): serial multi-stack deploys [\#1609](https://github.com/hashicorp/terraform-cdk/pull/1609)
- feat(cli): properly shutdown subprocesses on abort [\#1605](https://github.com/hashicorp/terraform-cdk/pull/1605)
- feat: stream terraform output on diff, deploy, and destroy [\#1596](https://github.com/hashicorp/terraform-cdk/pull/1596)
- feat(lib): update attributes['//'] instead of assigning to it [\#1543](https://github.com/hashicorp/terraform-cdk/pull/1543)
- feat(provider-generator): allow tfResourceType to be narrowly typed [\#1535](https://github.com/hashicorp/terraform-cdk/pull/1535)
- feat: Model ComplexComputedLists as ComplexLists and ComputedObjects [\#1499](https://github.com/hashicorp/terraform-cdk/pull/1499)

### fix

- fix(readme): update links to getting started guides [\#1664](https://github.com/hashicorp/terraform-cdk/pull/1664)
- fix: ignore vercel for PRs as it currently fails on branches of forks [\#1649](https://github.com/hashicorp/terraform-cdk/pull/1649)
- fix(docs): improve documentation of module map inputs [\#1647](https://github.com/hashicorp/terraform-cdk/pull/1647)
- fix: fix snapshot tests [\#1636](https://github.com/hashicorp/terraform-cdk/pull/1636)
- fix(cli): parse JSON log lines if possible [\#1617](https://github.com/hashicorp/terraform-cdk/pull/1617)
- fix(cli): fix go template stack name replacing for Terraform Cloud [\#1598](https://github.com/hashicorp/terraform-cdk/pull/1598)
- fix: Support Auto Updating Snapshots for forks [\#1595](https://github.com/hashicorp/terraform-cdk/pull/1595)
- fix(examples): update eks python example [\#1400](https://github.com/hashicorp/terraform-cdk/pull/1400)

### chore

- chore(docs): sync up changelog and upgrade guide [\#1671](https://github.com/hashicorp/terraform-cdk/pull/1671)
- chore(docs): update cross stack ref docs for multi-stack deployment story [\#1665](https://github.com/hashicorp/terraform-cdk/pull/1665)
- chore: npm-check-updates && yarn upgrade [\#1663](https://github.com/hashicorp/terraform-cdk/pull/1663)
- chore(cli): remove deploying resource overview [\#1648](https://github.com/hashicorp/terraform-cdk/pull/1648)
- chore(docs): Update README and remove old files [\#1643](https://github.com/hashicorp/terraform-cdk/pull/1643)
- chore(cli): remove json flag from synth [\#1640](https://github.com/hashicorp/terraform-cdk/pull/1640)
- chore: disable watch test [\#1638](https://github.com/hashicorp/terraform-cdk/pull/1638)
- chore: use distinct GitHub token to push changes [\#1623](https://github.com/hashicorp/terraform-cdk/pull/1623)
- chore: npm-check-updates && yarn upgrade [\#1622](https://github.com/hashicorp/terraform-cdk/pull/1622)
- chore: npm-check-updates && yarn upgrade [\#1614](https://github.com/hashicorp/terraform-cdk/pull/1614)
- chore(docs): add vercel config [\#1611](https://github.com/hashicorp/terraform-cdk/pull/1611)
- chore(docs): Update page title and description [\#1603](https://github.com/hashicorp/terraform-cdk/pull/1603)
- chore: npm-check-updates && yarn upgrade [\#1600](https://github.com/hashicorp/terraform-cdk/pull/1600)
- chore(docs): Remove broken link on overview page [\#1594](https://github.com/hashicorp/terraform-cdk/pull/1594)
- chore(provider-generator): Include Provider Version in Generated Bindings [\#1586](https://github.com/hashicorp/terraform-cdk/pull/1586)
- chore(cli): remove date-fns dependency [\#1492](https://github.com/hashicorp/terraform-cdk/pull/1492)

### refactor

- refactor: separate logic from UI layer [\#1511](https://github.com/hashicorp/terraform-cdk/pull/1511)

## 0.9.4

### fix

- fix(lib): check for null objects and don't try to reverse undefined or null [\#1592](https://github.com/hashicorp/terraform-cdk/pull/1592)

### chore

- chore(cli): fix typo in test assertion [\#1591](https://github.com/hashicorp/terraform-cdk/pull/1591)

## 0.9.3

### feat

- feat(examples): Add Scaleway Golang example [\#1576](https://github.com/hashicorp/terraform-cdk/pull/1576)

### fix

- fix(cli): convert failed with a single provider passed [\#1588](https://github.com/hashicorp/terraform-cdk/pull/1588)
- fix(tests): Windows needs special docker host override to work [\#1567](https://github.com/hashicorp/terraform-cdk/pull/1567)

## 0.9.2

### fix

- fix: cross-stack references in terraform cloud remote execution mode [\#1574](https://github.com/hashicorp/terraform-cdk/pull/1574)

### chore

- chore: npm-check-updates && yarn upgrade [\#1579](https://github.com/hashicorp/terraform-cdk/pull/1579)
- chore: npm-check-updates && yarn upgrade [\#1565](https://github.com/hashicorp/terraform-cdk/pull/1565)

## 0.9.1

### feat

- feat(cli): show help when no command is passed [\#1540](https://github.com/hashicorp/terraform-cdk/pull/1540)

### fix

- fix(tests): run package before running unit tests in release pipelines [\#1563](https://github.com/hashicorp/terraform-cdk/pull/1563)
- fix(hcl2cdk): handle no providers passed and add cdktf import for remote state data sources [\#1561](https://github.com/hashicorp/terraform-cdk/pull/1561)
- fix(cli): Fix template for Go not adding jsii import when using Terraform Cloud [\#1556](https://github.com/hashicorp/terraform-cdk/pull/1556)
- fix(lib): Add missing regex Function [\#1531](https://github.com/hashicorp/terraform-cdk/pull/1531)
- fix(cli): add better messaging on inint [\#1524](https://github.com/hashicorp/terraform-cdk/pull/1524)
- fix(docs): fix a typo in serverless-application-typescript.md [\#1517](https://github.com/hashicorp/terraform-cdk/pull/1517)
- fix(provider-generator): Replace jsii incompatible names [\#1516](https://github.com/hashicorp/terraform-cdk/pull/1516)
- fix(provider-generator): don't build generated edge provider output as part of building the provider-generator [\#1509](https://github.com/hashicorp/terraform-cdk/pull/1509)
- fix(tests): add `--ci` flag to jest invocations when in CI [\#1498](https://github.com/hashicorp/terraform-cdk/pull/1498)
- fix: stringValue rated valid strings as unescaped double quotes [\#1566](https://github.com/hashicorp/terraform-cdk/pull/1566)
- chore(deps): upgrade jsii (substantially improves cdktf get performance for Go) [\#1558](https://github.com/hashicorp/terraform-cdk/pull/1558)
- fix(cli): reflect correct node version requirement [\#1573](https://github.com/hashicorp/terraform-cdk/pull/1573)

### chore

- chore(docs): we now support cross stack refs, the section is no longer needed [\#1571](https://github.com/hashicorp/terraform-cdk/pull/1571)
- chore(docs): remove old docs files [\#1542](https://github.com/hashicorp/terraform-cdk/pull/1542)
- chore(docs): Update main from stable-website [\#1529](https://github.com/hashicorp/terraform-cdk/pull/1529)
- chore(docs): remove old layouts folder [\#1522](https://github.com/hashicorp/terraform-cdk/pull/1522)
- chore(docs): Merge stable-website into main [\#1515](https://github.com/hashicorp/terraform-cdk/pull/1515)
- chore(docs): add 0.9 upgrade guide [\#1512](https://github.com/hashicorp/terraform-cdk/pull/1512)

### test

- test(hcl2cdk): check if produced code can generate HCL [\#1539](https://github.com/hashicorp/terraform-cdk/pull/1539)

## 0.9.0

**Breaking Changes**

### Standardize IResolvable Usage [#1299](https://github.com/hashicorp/terraform-cdk/pull/1299)

This is an effort to make sure attributes can be freely passed between resources for all different types.

There is a minor breaking change:

- `count` on resources and data sources has gone from `number | cdktf.IResolvable` to `number`. If code was previously passing an `IResolvable`, it will now need to use `Token.asNumber()`

### Map Tokens [#1411](https://github.com/hashicorp/terraform-cdk/pull/1411)

As part of an effort to use more native types, there are now tokens for maps of primitive values.

As a result, there is a minor breaking change:

- Map attributes have gone from `{ [key: string]: TYPE } | cdktf.IResolvable` to `{ [key: string]:TYPE }` when `TYPE` is `string, number, or boolean`.
  - The most common impact is maps created by using Terraform functions (`Fn.(...)`) will now need to be passed to `Token.as<String/Number/Boolean>Map()` before assigning to a resource attribute.

### Number[] Tokens [#1471](https://github.com/hashicorp/terraform-cdk/pull/1471)

As part of an effort to use more native types, there are now tokens for `number[]`.
This is mostly an internal change, but there is now `Token.asNumberList()` which can be used to convert other values into `number[]`.

As a result of some standardization, there is a minor breaking change:

- Boolean[] attributes have gone from `boolean[]` to `Array<boolean | IResolvable> | IResolvable`.
  - This is done because neither `boolean` or `boolean[]` is representable by a token.
  - This should make it easier to pass around `boolean[]` between resources and fuctions.
  - For jsii languages (especially Java and C#), these types will end up as `List<Object>`.

### feat

- feat(cli): output command [\#1495](https://github.com/hashicorp/terraform-cdk/pull/1495)
- feat(lib): cross-stack references [\#1416](https://github.com/hashicorp/terraform-cdk/pull/1416)
- feat(lib): cross stack references other backends [\#1488](https://github.com/hashicorp/terraform-cdk/pull/1488)
- feat(lib): Allow relative assets [\#1346](https://github.com/hashicorp/terraform-cdk/pull/1346)
- feat(lib): Create assets for local modules [\#1476](https://github.com/hashicorp/terraform-cdk/pull/1476)
- feat(lib): number[] Tokens [\#1471](https://github.com/hashicorp/terraform-cdk/pull/1471)
- feat(lib): produce stable `cdk.tf.json` output [\#1454](https://github.com/hashicorp/terraform-cdk/pull/1454)
- feat(lib): Initial improvements for set support [\#1415](https://github.com/hashicorp/terraform-cdk/pull/1415)
- feat(lib): Map Tokens [\#1411](https://github.com/hashicorp/terraform-cdk/pull/1411)
- feat(provider-generator): reference computed values nested in lists [\#1468](https://github.com/hashicorp/terraform-cdk/pull/1468)
- feat(tests): add test which confirms that modules now support sets [\#1497](https://github.com/hashicorp/terraform-cdk/pull/1497)

### fix

- fix(cli): speed up shell autocompletions [\#1496](https://github.com/hashicorp/terraform-cdk/pull/1496)
- fix(cli): remove deprecated -state option [\#1461](https://github.com/hashicorp/terraform-cdk/pull/1461)
- fix(lib): resolve objects correctly in cross stack references [\#1487](https://github.com/hashicorp/terraform-cdk/pull/1487)
- fix(docs): fix typo [\#1387](https://github.com/hashicorp/terraform-cdk/pull/1387)
- fix: increase memory for `integration:update` command [\#1490](https://github.com/hashicorp/terraform-cdk/pull/1490)

### chore

- chore(examples): Added go/azurerm examples [\#1275](https://github.com/hashicorp/terraform-cdk/pull/1275)
- chore(lib): Standardize IResolvable usage [\#1299](https://github.com/hashicorp/terraform-cdk/pull/1299)
- chore(docs): document pinning state to stack [\#1504](https://github.com/hashicorp/terraform-cdk/pull/1504)
- chore(docs): link to AWS Constructs base class [\#1473](https://github.com/hashicorp/terraform-cdk/pull/1473)
- chore(docs): Final Docs Migration Cleanup [\#1431](https://github.com/hashicorp/terraform-cdk/pull/1431)
- chore(docs): Manual windows testing [\#1407](https://github.com/hashicorp/terraform-cdk/pull/1407)
- chore: migrate docs to mdx [\#1421](https://github.com/hashicorp/terraform-cdk/pull/1421)
- chore: store website nav files [\#1434](https://github.com/hashicorp/terraform-cdk/pull/1434)
- chore: update example for azure app service [\#1484](https://github.com/hashicorp/terraform-cdk/pull/1484)
- chore: add tooling for an automated issue dashboard [\#1474](https://github.com/hashicorp/terraform-cdk/pull/1474)
- chore: decrease update speed of the project board [\#1485](https://github.com/hashicorp/terraform-cdk/pull/1485)
- chore: npm-check-updates && yarn upgrade [\#1477](https://github.com/hashicorp/terraform-cdk/pull/1477)
- chore: npm-check-updates && yarn upgrade [\#1489](https://github.com/hashicorp/terraform-cdk/pull/1489)
- chore: npm-check-updates && yarn upgrade [\#1503](https://github.com/hashicorp/terraform-cdk/pull/1503)
- chore: remove patch file created through update automation [\#1491](https://github.com/hashicorp/terraform-cdk/pull/1491)

## 0.8.6

### fix

- fix(lib): don't treat strings as maps [\#1467](https://github.com/hashicorp/terraform-cdk/pull/1467)
- fix: update specified nodejs version to >=14.0 to reflect our actual requirements [\#1466](https://github.com/hashicorp/terraform-cdk/pull/1466)

### Other

- chore: fix constructs error [\#1460](https://github.com/hashicorp/terraform-cdk/pull/1460)

## 0.8.5

### fix

- fix(provider-generator): rename String resource [\#1455](https://github.com/hashicorp/terraform-cdk/pull/1455)

### chore

- chore(hcl2cdk): update readme [\#1452](https://github.com/hashicorp/terraform-cdk/pull/1452)
- chore(examples): Upgrade aws provider version for Go example [\#1450](https://github.com/hashicorp/terraform-cdk/pull/1450)
- chore: update maven config for publishing [\#1457](https://github.com/hashicorp/terraform-cdk/pull/1457)
- chore: update constructs to 10.0.25 [\#1453](https://github.com/hashicorp/terraform-cdk/pull/1453)

## 0.8.4

### fix

- fix(provider-generator): remove .html suffix for doc links [\#1438](https://github.com/hashicorp/terraform-cdk/pull/1438)
- fix: Update Remote State Outputs documentation [\#1436](https://github.com/hashicorp/terraform-cdk/pull/1436)

### feat

- feat(lib): Add nullable field to terraform variables [\#1435](https://github.com/hashicorp/terraform-cdk/pull/1435)

### chore

- chore: update constructs to 10.0.20 [\#1444](https://github.com/hashicorp/terraform-cdk/pull/1444)
- chore: store website nav files (main) [\#1434](https://github.com/hashicorp/terraform-cdk/pull/1434)
- chore: add make website command to preview docs website [\#1426](https://github.com/hashicorp/terraform-cdk/pull/1426)

## 0.8.3

### fix

- fix(provider-generator): rename `system` attributes as they conflict in CSharp (fixes Okta provider) [\#1422](https://github.com/hashicorp/terraform-cdk/pull/1422)
- fix(docs): fix order of changelog steps to make sure version is bumped after running script [\#1419](https://github.com/hashicorp/terraform-cdk/pull/1419)

### chore

- chore: migrate docs to mdx [\#1421](https://github.com/hashicorp/terraform-cdk/pull/1421)
- chore: fix edge provider tests in pre-release pipeline [\#1423](https://github.com/hashicorp/terraform-cdk/pull/1423)

## 0.8.2

### fix

- fix(lib): make sure to resolve reference expression target [\#1412](https://github.com/hashicorp/terraform-cdk/pull/1412)
- fix(provider-generator): Fix false block attributes [\#1405](https://github.com/hashicorp/terraform-cdk/pull/1405)
- fix(lib): inline references in strings should not destroy string itself [\#1401](https://github.com/hashicorp/terraform-cdk/pull/1401)
- fix: data can be null in some cases as well [\#1395](https://github.com/hashicorp/terraform-cdk/pull/1395)

### chore

- chore(docs): Adds a REAMDE to docs folder [\#1381](https://github.com/hashicorp/terraform-cdk/pull/1381)
- chore: update constructs to 10.0.12 [\#1414](https://github.com/hashicorp/terraform-cdk/pull/1414)
- chore: copy edge provider on release pipeline [\#1408](https://github.com/hashicorp/terraform-cdk/pull/1408)

### test

- test(provider-generator): verify generated provider emit same HCL across languages [\#1311](https://github.com/hashicorp/terraform-cdk/pull/1311)

## 0.8.1 (December 3, 2021)

### fix

- fix(cli): Distribute unbundled source code [\#1379](https://github.com/hashicorp/terraform-cdk/pull/1379)
- fix(lib): Add struct sharding for providers without namespaces [\#1375](https://github.com/hashicorp/terraform-cdk/pull/1375)
- fix(cli): only log if logs are sent [\#1365](https://github.com/hashicorp/terraform-cdk/pull/1365)
- fix(lib): Keep specified empty objects [\#1329](https://github.com/hashicorp/terraform-cdk/pull/1329)

### chore

- chore(cli): typescript init prints link to all prebuilt providers [\#1348](https://github.com/hashicorp/terraform-cdk/pull/1348)

## 0.8.0 (December 1, 2021)

**Breaking Changes**

### Namespaced AWS Provider Resources [#1248](https://github.com/hashicorp/terraform-cdk/pull/1248)

We iterated on the namespacing for the AWS provider which got introduced in [#1101](https://github.com/hashicorp/terraform-cdk/issues/1101). Our goal was, to enable custom L2 / L3 abstractions being built with jsii, improve the general jsii support for the namespacing and last but not least to allow both namespace and barrel imports in Typescript. A welcome side effect is a 5x performance gain when building packages via jsii for Python (from ~ 16 minutes to ~ 3 minutes) and likely other targets such as Java or C#

As a result, there are a few minor breaking changes:

- Namespaces are all lowercased now, without a separating character
- Namespaces are all a single word now (e.g. `DynamoDb` used to be `dynamo_db` in Python - it's now just `dynamodb`)
- `CloudwatchEventBridge` namespace got renamed to `eventbridge`

#### Typescript Example

##### Before

This was pretty much the only way to use the namespaced provider classes.

```ts
import { CloudFront } from "@cdktf/provider-aws";

new CloudFront.CloudfrontDistribution(this, "cloudfront", {});
```

##### After

Now it's possible to either import the entire namespace, or a resource class directly.

```ts
// Similar to before, but namespace is lowercased
import { cloudfront } from "@cdktf/provider-aws";

new cloudfront.CloudfrontDistribution(this, "cloudfront", {});

// new option
import { CloudfrontDistribution } from "@cdktf/provider-aws/lib/cloudfront";

new CloudfrontDistribution(this, "cloudfront", {});
```

See this [Pull Request](https://github.com/hashicorp/terraform-cdk/pull/1248) for more details.

**Other Changes**

### fix

- fix(provider-generator): Fix private registry module generation [\#1361](https://github.com/hashicorp/terraform-cdk/pull/1361)
- fix(lib): Fix incorrect parseInt casing [\#1359](https://github.com/hashicorp/terraform-cdk/pull/1359)
- fix(lib): fix documentation link for lookup [\#1347](https://github.com/hashicorp/terraform-cdk/pull/1347)
- fix(provider-generator): Mutating complex objects [\#1331](https://github.com/hashicorp/terraform-cdk/pull/1331)
- fix(provider-generator): attributes on resources should not be undefined [\#1310](https://github.com/hashicorp/terraform-cdk/pull/1310)
- fix(examples): Make sure we're using pipenv [\#1272](https://github.com/hashicorp/terraform-cdk/pull/1272)
- fix(lib): Increased --max-old-space-size value [\#1265](https://github.com/hashicorp/terraform-cdk/pull/1265)
- fix(examples): temporarily set fixed AWS provider version for Java [\#1261](https://github.com/hashicorp/terraform-cdk/pull/1261)
- fix(cli): fix bug that required cdktf.json in parent directory when running convert [\#1256](https://github.com/hashicorp/terraform-cdk/pull/1256)
- fix(provider-generator): escape hyphens in provider names for Go package identifiers [\#1252](https://github.com/hashicorp/terraform-cdk/pull/1252)
- fix(lib): Rework AWS Provider Namespacing [\#1248](https://github.com/hashicorp/terraform-cdk/pull/1248)
- fix(lib): escape newlines in terraform functions [\#1233](https://github.com/hashicorp/terraform-cdk/pull/1233)
- fix(lib): Also separate Token Map and symbols for interoperability with AWS CDK Tokens [\#1176](https://github.com/hashicorp/terraform-cdk/pull/1176)
- fix(release): only include prs since last version in the changelog [\#1171](https://github.com/hashicorp/terraform-cdk/pull/1171)

### chore

- chore(docs): Fix broken anchor links [\#1345](https://github.com/hashicorp/terraform-cdk/pull/1345)
- chore(docs): link and layout fixes [\#1344](https://github.com/hashicorp/terraform-cdk/pull/1344)
- chore(docs): document list escape hatches [\#1342](https://github.com/hashicorp/terraform-cdk/pull/1342)
- chore(tests): remove jsii version from snapshot [\#1341](https://github.com/hashicorp/terraform-cdk/pull/1341)
- chore(docs): Add constructs documentation to website [\#1338](https://github.com/hashicorp/terraform-cdk/pull/1338)
- chore(deps): upgrade jsii versions and unpin AWS TF provider version for Java example [\#1336](https://github.com/hashicorp/terraform-cdk/pull/1336)
- chore(docs): Move examples up in sidebar, list out tutorials [\#1291](https://github.com/hashicorp/terraform-cdk/pull/1291)
- chore(deps): yarn upgrade [\#1283](https://github.com/hashicorp/terraform-cdk/pull/1283)
- chore(cli): upgrade React version [\#1259](https://github.com/hashicorp/terraform-cdk/pull/1259)
- chore(release): Pre-releases should use next version [\#1257](https://github.com/hashicorp/terraform-cdk/pull/1257)
- chore(docs): Fix docs nits like images, headings, and contractions [\#1245](https://github.com/hashicorp/terraform-cdk/pull/1245)
- chore(deps): remove obsolete dependency `json-schema-to-typescript` [\#1232](https://github.com/hashicorp/terraform-cdk/pull/1232)
- chore(deps): fix dependabot config [\#1220](https://github.com/hashicorp/terraform-cdk/pull/1220)
- chore(deps): re-enable dependabot [\#1219](https://github.com/hashicorp/terraform-cdk/pull/1219)
- chore(docs): document escape hatch for dynamic blocks [\#1215](https://github.com/hashicorp/terraform-cdk/pull/1215)
- chore(docs): copy over aspects [\#1214](https://github.com/hashicorp/terraform-cdk/pull/1214)
- chore(docs): revert link change [\#1177](https://github.com/hashicorp/terraform-cdk/pull/1177)
- chore(docs): Laura fix docs nits [\#1172](https://github.com/hashicorp/terraform-cdk/pull/1172)
- chore(examples): Use AWS provider 3.0 [\#1155](https://github.com/hashicorp/terraform-cdk/pull/1155)

### Other

- chore: add website release automation [\#1255](https://github.com/hashicorp/terraform-cdk/pull/1255)
- fix: Fix EC2 Instance creation example [\#1254](https://github.com/hashicorp/terraform-cdk/pull/1254)
- fix: Minor typo in error message about missing providers [\#1240](https://github.com/hashicorp/terraform-cdk/pull/1240)

### feat

- feat(cli): use ts-node to compile main.ts [\#1253](https://github.com/hashicorp/terraform-cdk/pull/1253)
- feat(docs): add link to new deploy apps tutorial [\#1236](https://github.com/hashicorp/terraform-cdk/pull/1236)
- feat(lib): Add `staticId` option to TerraformOutput (uses construct id as synthesized output name)" [\#1213](https://github.com/hashicorp/terraform-cdk/pull/1213)
- feat(lib): throw error when a token is used in a construct name [\#1181](https://github.com/hashicorp/terraform-cdk/pull/1181)
- feat(hcl2cdk): document providers with missing type information [\#1174](https://github.com/hashicorp/terraform-cdk/pull/1174)
- feat(lib): Expand Output value types [\#1145](https://github.com/hashicorp/terraform-cdk/pull/1145)

### test

- test(cli): test generated providers [\#1235](https://github.com/hashicorp/terraform-cdk/pull/1235)
- test(lib): ensure assets dont redeploy without FS changes [\#1178](https://github.com/hashicorp/terraform-cdk/pull/1178)

## 0.7.0 (October 19, 2021)

**Breaking Changes**

Abbreviated version below, for a guide see [Upgrade Guide for 0.7](./docs/upgrade-guide/upgrading-to-0.7.md)

### Namespaced AWS Provider Resources [#572](https://github.com/hashicorp/terraform-cdk/issues/572)

The AWS Provider has a size that makes it hard to navigate in editors, especially in languages that compile it to a single file like Python. We implemented namespaces that hold Resources and Data Sources the same category together, the categories can be found on the [AWS Provider page](https://registry.terraform.io/providers/hashicorp/aws/latest/docs).
If you don't use the AWS provider no action is needed, if you do you need to adjust your import statements to match the namespaces. You can find more information at [the upgrade guide](./docs/upgrade-guide/upgrading-to-0.7.md).

### Simplify Provider API Surface [#258](https://github.com/hashicorp/terraform-cdk/issues/258)

When generating the provider bindings we previously translated any block to an array of a certain type, both in configuration and as properties on the resource / data source instances. For blocks that can only appear once at most this is making the API harder to use. From this version on these blocks are going to be just the type instead of an array of a certain type.
For information on how to migrate please see [the upgrade guide](./docs/upgrade-guide/upgrading-to-0.7.md).

**Technical Preview**

### AWS Adapter

> **The AWS Adapter is a technical preview and not ready for production usage.** Its API is not stable and things might break unexpectedly.

The `AwsTerraformAdapter` (included in the `@cdktf/aws-cdk` package) allows you to use Amazon Web Services Cloud Development Kit (AWS CDK) constructs in your CDK for Terraform (CDKTF) projects. Find out more in the Github repository [hashicorp/aws-cdk](https://github.com/hashicorp/cdktf-aws-cdk) or jump straight to the [documentation](https://www.terraform.io/docs/cdktf/create-and-deploy/aws-adapter.html).

**Features**

- feat(docs): Aws Adapter [\#1149](https://github.com/hashicorp/terraform-cdk/pull/1149)
- feat(lib): change the namespace of encoded string, list and number tokens [\#1148](https://github.com/hashicorp/terraform-cdk/pull/1148)
- feat(docs): document the use of aspects and annotations [\#1144](https://github.com/hashicorp/terraform-cdk/pull/1144)
- feat(lib): invoke Aspects when using `Testing.synth` and `Testing.synthScope` [\#1143](https://github.com/hashicorp/terraform-cdk/pull/1143)
- feat(cli): namespace aws provider [\#1101](https://github.com/hashicorp/terraform-cdk/pull/1101)
- feat(docs): add telemetry docs [\#1071](https://github.com/hashicorp/terraform-cdk/pull/1071)
- feat(examples): add example azure service bus [\#1063](https://github.com/hashicorp/terraform-cdk/pull/1063)
- feat(hcl2cdk): Copy local modules when init from TF project [\#1024](https://github.com/hashicorp/terraform-cdk/pull/1024)
- feat(lib): use objects instead of objects in arrays if possible [\#935](https://github.com/hashicorp/terraform-cdk/pull/935)
- feat: Extend support for Terraform expressions [\#1131](https://github.com/hashicorp/terraform-cdk/pull/1131)

**Fixed Bugs**

- fix(docs): fix missing backticks [\#1167](https://github.com/hashicorp/terraform-cdk/pull/1167)
- fix(lib): Lock jsii version [\#1166](https://github.com/hashicorp/terraform-cdk/pull/1166)
- fix(provider-generator): rename lambda namespace in lambda functions [\#1154](https://github.com/hashicorp/terraform-cdk/pull/1154)
- fix(docs): fix typo in remote templates docs [\#1151](https://github.com/hashicorp/terraform-cdk/pull/1151)
- fix(examples): fix path to setup.js file in jest config [\#1147](https://github.com/hashicorp/terraform-cdk/pull/1147)
- fix(hcl2cdk): Convert null provider [\#1142](https://github.com/hashicorp/terraform-cdk/pull/1142)
- fix(docs): fix example for integration test [\#1129](https://github.com/hashicorp/terraform-cdk/pull/1129)
- fix(tests): quote lerna scope to prevent shell expansion [\#1121](https://github.com/hashicorp/terraform-cdk/pull/1121)
- fix(hcl2cdk): Always using module binding for convert command [\#1120](https://github.com/hashicorp/terraform-cdk/pull/1120)
- fix(hcl2cdk): Fix duplicate modules [\#1025](https://github.com/hashicorp/terraform-cdk/pull/1025)

**Refactoring**

- refactor(cli): replace links with redirects [\#1138](https://github.com/hashicorp/terraform-cdk/pull/1138)

**Documentation**

- chore(docs): Fix link to outputs doc [\#1164](https://github.com/hashicorp/terraform-cdk/pull/1164)
- chore(docs): Fixes broken links [\#1163](https://github.com/hashicorp/terraform-cdk/pull/1163)
- chore(docs): Update docs link [\#1162](https://github.com/hashicorp/terraform-cdk/pull/1162)
- chore(docs): Fix docs links [\#1161](https://github.com/hashicorp/terraform-cdk/pull/1161)
- chore(docs): reference interoperability layer [\#1160](https://github.com/hashicorp/terraform-cdk/pull/1160)
- chore(docs): add new namespaces [\#1159](https://github.com/hashicorp/terraform-cdk/pull/1159)
- chore(docs): review cli reference [\#1158](https://github.com/hashicorp/terraform-cdk/pull/1158)
- chore(docs): remove adapter part [\#1157](https://github.com/hashicorp/terraform-cdk/pull/1157)
- chore(docs): improve release script to not require manual pr selection [\#1156](https://github.com/hashicorp/terraform-cdk/pull/1156)
- chore(docs): Proofreading edits [\#1150](https://github.com/hashicorp/terraform-cdk/pull/1150)
- chore(docs): Terraform Docs [\#1146](https://github.com/hashicorp/terraform-cdk/pull/1146)
- chore(docs): document numeric tokens [\#1140](https://github.com/hashicorp/terraform-cdk/pull/1140)
- chore(deps): add script to update all snapshot tests [\#1139](https://github.com/hashicorp/terraform-cdk/pull/1139)
- chore(docs): Laura architecture edits [\#1137](https://github.com/hashicorp/terraform-cdk/pull/1137)
- chore(docs): Merge docs content to stable website [\#1133](https://github.com/hashicorp/terraform-cdk/pull/1133)
- chore(docs): Laura docs todos edits [\#1128](https://github.com/hashicorp/terraform-cdk/pull/1128)
- chore(docs): Add note and copyediting to providers page [\#1127](https://github.com/hashicorp/terraform-cdk/pull/1127)
- chore(docs): Address todos [\#1126](https://github.com/hashicorp/terraform-cdk/pull/1126)
- chore(docs): CDK for Terraform Architecture [\#1112](https://github.com/hashicorp/terraform-cdk/pull/1112)
- chore(docs): Update cli configuration doc [\#1111](https://github.com/hashicorp/terraform-cdk/pull/1111)
- chore(docs): Autofix prettier [\#1110](https://github.com/hashicorp/terraform-cdk/pull/1110)
- chore(tests): Ignore website changes for test workflows [\#1109](https://github.com/hashicorp/terraform-cdk/pull/1109)
- chore(docs): Combine Resources and Providers pages [\#1092](https://github.com/hashicorp/terraform-cdk/pull/1092)
- chore(docs): Edits to Project Setup & Config file docs [\#1085](https://github.com/hashicorp/terraform-cdk/pull/1085)
- chore(docs): Terraform Outputs [\#1078](https://github.com/hashicorp/terraform-cdk/pull/1078)
- chore(docs): Adds descriptions example drafts [\#1073](https://github.com/hashicorp/terraform-cdk/pull/1073)
- chore(docs): improve community documentation [\#1066](https://github.com/hashicorp/terraform-cdk/pull/1066)
- chore(docs): What is CDKTF and Interoperability [\#1065](https://github.com/hashicorp/terraform-cdk/pull/1065)
- chore(docs): link docs to Pocket codebase, YouTube [\#1062](https://github.com/hashicorp/terraform-cdk/pull/1062)
- chore(docs): Project Setup [\#1056](https://github.com/hashicorp/terraform-cdk/pull/1056)

## 0.6.4 (October 4, 2021)

**Breaking Changes**

### fix(cli): Better handle non-registry modules and improved naming [\#929](https://github.com/hashicorp/terraform-cdk/pull/929)

If you use Terraform Modules you will need to adust their names. We changed the naming to be more intuitive, e.g. `TerraformAwsModulesVpcAws` is now `Vpc`. To migrate please run `cdktf get` with this version and change your imports to match the new abbreviated form.

**Fixed Bugs**

- fix(cli): directly depend on cli-spinners v2.6.0 [\#1116](https://github.com/hashicorp/terraform-cdk/pull/1116)
- fix(cli): create .cdktf folder if needed [\#1107](https://github.com/hashicorp/terraform-cdk/pull/1107)
- fix(lib): check for null on removing metadata in testing framework [\#1075](https://github.com/hashicorp/terraform-cdk/pull/1075)
- fix: ignore build output in prettier [\#1077](https://github.com/hashicorp/terraform-cdk/pull/1077)

**Chores**

- chore(deps): bump trim-newlines from 3.0.0 to 3.0.1 [\#863](https://github.com/hashicorp/terraform-cdk/pull/863)
- chore(docs): remove roadmap link from README [\#1067](https://github.com/hashicorp/terraform-cdk/pull/1067)

## 0.6.3 (September 22, 2021)

**Features**

- feat(hcl2cdk): Add logical id override when construct id's aren't unique [\#1045](https://github.com/hashicorp/terraform-cdk/pull/1045)
- feat(lib): use jest asymetric matchers & nicer error messages [\#1052](https://github.com/hashicorp/terraform-cdk/pull/1052)

**Fixed Bugs**

- fix(hcl2cdk): Correctly handle remote state [\#1031](https://github.com/hashicorp/terraform-cdk/pull/1031)
- fix(docs): adjust setup handling in docs [\#1048](https://github.com/hashicorp/terraform-cdk/pull/1048)
- fix(cli): don't create config.json files if none was present before [\#1054](https://github.com/hashicorp/terraform-cdk/pull/1054)
- fix(lib): fix source path generated for local modules [\#947](https://github.com/hashicorp/terraform-cdk/pull/947)
- fix(docs): typo in documentation [\#1060](https://github.com/hashicorp/terraform-cdk/pull/1060)
- fix(lib): Fix release pipeline [\#1061](https://github.com/hashicorp/terraform-cdk/pull/1061)

**Chores**

- chore(tests): Build examples as matrix - 1 build per example [\#1043](https://github.com/hashicorp/terraform-cdk/pull/1043)
- chore(tests): Fix release pipeline [\#1050](https://github.com/hashicorp/terraform-cdk/pull/1050)
- chore(tests): Upgrade to jest 0.27 for integration tests and retry failed tests once [\#1051](https://github.com/hashicorp/terraform-cdk/pull/1051)
- chore(deps): bump tmpl from 1.0.4 to 1.0.5 [\#1055](https://github.com/hashicorp/terraform-cdk/pull/1055)
- chore: fix config for dependabot [\#1057](https://github.com/hashicorp/terraform-cdk/pull/1057)

## 0.6.2 (September 17, 2021)

**Fixed Bugs**

- fix(cli): replaceAll not available in node v14 [\#1036](https://github.com/hashicorp/terraform-cdk/pull/1036)
- fix(cli): fix import path for Manifest (was relative) [\#1037](https://github.com/hashicorp/terraform-cdk/pull/1037)

**Chores**

- chore: lint monorepo for relative imports between packages [\#1040](https://github.com/hashicorp/terraform-cdk/pull/1040)
- chore: remove duplicated jest interface members [\#1042](https://github.com/hashicorp/terraform-cdk/pull/1042)

**Documentation**

- feat(docs): add docs for `Testing.renderConstructTree()` [\#1029](https://github.com/hashicorp/terraform-cdk/pull/1029)

## 0.6.1 (September 16, 2021)

**Fixed Bugs**

- fix(lib): Fix testing setup [\#1027](https://github.com/hashicorp/terraform-cdk/pull/1027)

## 0.6.0 (September 15, 2021)

**Breaking Changes**

Abbreviated version below, for a guide see [Upgrade Guide for 0.6](./docs/upgrade-guide/upgrading-to-0.6.md)

### Constructs upgrade (`v3` to `v10`)

The `constructs` package serves as the base for all building blocks of the CDKs (e.g. CDK for Terraform, AWS CDK and cdk8s). Recently the `constructs` package was lifted to v10 with a few but major changes. The reason behind those was to make it future proof and stable across different CDKs. In this process the API surface area of the `constructs` base package was reduced and some functionality has been moved directly to the AWS CDK instead. For more information and the underlying motivation for the changes to the `constructs` library refer to the [Removal of Construct Compatibility Layer RFC](https://github.com/aws/aws-cdk-rfcs/blob/master/text/0192-remove-constructs-compat.md).

#### Moved functionality

- `Aspects` are now part of `cdktf` as they've been removed from `constructs`. If you use them, you need to change your import statement to import them from the `cdktf` package. The api also has changed a bit. The new way to register `Aspects` is `Aspects.of(construct).add(aspect)` instead of `construct.node.applyAspect(aspect)`.
- The `construct.node.addInfo()`, `construct.node.addWarning()` and `construct.node.addError()` methods are now available under the `Annotations.of(construct)` API: e.g. `Annotations.of(construct).addWarning('my warning')`. `Annotations` are a part of the `cdktf` base library.

#### Removed functionality

- `construct.onPrepare` / `construct.prepare()` has been removed. Instead you can use [`Aspects`](./docs/upgrade-guide/upgrading-to-0.6.md#onprepare-and-prepare-have-been-removed).
- `onSynthesize` has been removed. If you find yourself needing support for it, please file a new issue on this repo and describe your use-case.

**Features**

- feat(hcl2cdk): inform about recommended variable usage [\#875](https://github.com/hashicorp/terraform-cdk/pull/875)
- feat(lib): make asset paths change if asset content changes [\#769](https://github.com/hashicorp/terraform-cdk/pull/769)
- feat(cli): Introduce support for shell completions [\#943](https://github.com/hashicorp/terraform-cdk/pull/943)
- feat(lib): Print a hint when the app has been passed to a backend instead of the stack [\#945](https://github.com/hashicorp/terraform-cdk/pull/945)
- feat(lib): expose unit testing helpers [\#942](https://github.com/hashicorp/terraform-cdk/pull/942)
- feat(cli): detect and validate used node & go version [\#855](https://github.com/hashicorp/terraform-cdk/pull/855)
- feat(lib): expose terraform functions [\#903](https://github.com/hashicorp/terraform-cdk/pull/903)

**Documentation**

- chore(docs): add a first short note about how to release [\#864](https://github.com/hashicorp/terraform-cdk/pull/864)
- feat(docs): document how to connect CDKTF to Terraform Cloud [\#874](https://github.com/hashicorp/terraform-cdk/pull/874)
- fix(docs): update docs to be correct about outdir since multiple stacks feature [\#872](https://github.com/hashicorp/terraform-cdk/pull/872)
- fix(hcl2cdk): aliased provider missed in graph [\#876](https://github.com/hashicorp/terraform-cdk/pull/876)
- chore(docs): release pre-built providers [\#892](https://github.com/hashicorp/terraform-cdk/pull/892)
- chore(docs): update telemetry.md for 0.6 release [\#1017](https://github.com/hashicorp/terraform-cdk/pull/1017)
- chore(docs): remove custom adapter section for now [\#1021](https://github.com/hashicorp/terraform-cdk/pull/1021)
- feat(docs): upgrade guide for v0.6 [\#991](https://github.com/hashicorp/terraform-cdk/pull/991)

**Fixed Bugs**

- fix(lib): keysToSnakeCase needs to ignore intrinsic tokens [\#902](https://github.com/hashicorp/terraform-cdk/pull/902)
- fix(lib): synthesise numbers correctly [\#899](https://github.com/hashicorp/terraform-cdk/pull/899)
- fix(lib): better error for uninitialized provider [\#896](https://github.com/hashicorp/terraform-cdk/pull/896)
- fix(cli): Don't specify --user flag when running in an pip activated virtualenv [\#912](https://github.com/hashicorp/terraform-cdk/pull/912)
- fix(deps): check in husky hooks [\#919](https://github.com/hashicorp/terraform-cdk/pull/919)
- fix(lib): Alternative Validation Approach [\#911](https://github.com/hashicorp/terraform-cdk/pull/911)
- fix(cli): Don't print sensitive outputs when running deploy [\#940](https://github.com/hashicorp/terraform-cdk/pull/940)
- fix(tests): enable windows test with escapes [\#957](https://github.com/hashicorp/terraform-cdk/pull/957)
- fix(hcl2cdk): Fix convert with numeric count [\#1011](https://github.com/hashicorp/terraform-cdk/pull/1011)
- fix(lib): Module references to providers synthesizes array instead of map [\#933](https://github.com/hashicorp/terraform-cdk/pull/933)
- fix(tests): disable terraform cloud test for now [\#955](https://github.com/hashicorp/terraform-cdk/pull/955)

**Chores**

- chore(lib): speed up TS compilation [\#873](https://github.com/hashicorp/terraform-cdk/pull/873)
- chore(deps): ignore tsbuildinfo [\#894](https://github.com/hashicorp/terraform-cdk/pull/894)
- chore(docs): Brief reference for local provider usage [\#897](https://github.com/hashicorp/terraform-cdk/pull/897)
- chore(docs): Link Python Poetry community template [\#922](https://github.com/hashicorp/terraform-cdk/pull/922)
- chore(deps): bump tar from 4.4.13 to 4.4.17 [\#914](https://github.com/hashicorp/terraform-cdk/pull/914)
- chore(tests): remove unused aws provider dependency to speed up test [\#926](https://github.com/hashicorp/terraform-cdk/pull/926)
- chore: fix typos [\#927](https://github.com/hashicorp/terraform-cdk/pull/927)
- chore(lib): BREAKING CHANGE upgrade constructs lib to v10 [\#921](https://github.com/hashicorp/terraform-cdk/pull/921)
- chore(deps): Upgrade yargs to v17 [\#779](https://github.com/hashicorp/terraform-cdk/pull/779)
- chore(tests): Align workflow trigger [\#931](https://github.com/hashicorp/terraform-cdk/pull/931)
- chore(cli): Make sure Python dependencies are working locally [\#936](https://github.com/hashicorp/terraform-cdk/pull/936)
- chore(deps): bump tar from 4.4.17 to 4.4.19 [\#941](https://github.com/hashicorp/terraform-cdk/pull/941)
- chore(release): run all tests on npm test [\#962](https://github.com/hashicorp/terraform-cdk/pull/962)
- chore(hcl2cdk): Provide guidance for imports [\#949](https://github.com/hashicorp/terraform-cdk/pull/949)
- chore(deps): bump axios from 0.21.1 to 0.21.4 [\#963](https://github.com/hashicorp/terraform-cdk/pull/963)
- refactor(lib): use the same jest config everywhere [\#930](https://github.com/hashicorp/terraform-cdk/pull/930)
- feat(cli): Improve telemetry [\#895](https://github.com/hashicorp/terraform-cdk/pull/895)

## 0.5.0 (July 29, 2021)

**New Features**

- feat(cli): implement hcl2cdk [\#796](https://github.com/hashicorp/terraform-cdk/pull/796)
- feat(cli): add cdktf `watch` command [\#817](https://github.com/hashicorp/terraform-cdk/pull/817)

**Documentation**

- chore(docs): link docker integration example [\#789](https://github.com/hashicorp/terraform-cdk/pull/789)
- chore(docs): add google cloud kubernetes example [\#742](https://github.com/hashicorp/terraform-cdk/pull/742)
- chore(docs): python example for gcp cloud function [\#776](https://github.com/hashicorp/terraform-cdk/pull/776)
- chore(docs): Add serverless application guide [\#786](https://github.com/hashicorp/terraform-cdk/pull/786)
- chore(docs): link to serverless e2e example [\#795](https://github.com/hashicorp/terraform-cdk/pull/795)
- chore(docs): add examples for ucloud provider (ts/python/java/c#/go) [\#790](https://github.com/hashicorp/terraform-cdk/pull/790)
- chore(docs): add azure python link [\#773](https://github.com/hashicorp/terraform-cdk/pull/773)
- chore(docs): Enhance readme with Terraform Platform Illustration [\#778](https://github.com/hashicorp/terraform-cdk/pull/778)
- chore(docs): Add Project Maturity section to README [\#797](https://github.com/hashicorp/terraform-cdk/pull/797)
- chore(docs): Add callouts to Learn tutorials [\#767](https://github.com/hashicorp/terraform-cdk/pull/767)
- chore(docs): Create BUGPROCESS.md [\#815](https://github.com/hashicorp/terraform-cdk/pull/815)
- refactor(docs): clarify that we support all providers and modules [\#783](https://github.com/hashicorp/terraform-cdk/pull/783)
- fix(docs): remove Csharp readme in Python for #745 [\#820](https://github.com/hashicorp/terraform-cdk/pull/820)
- fix(docs): add mandatory cdktf get step [\#784](https://github.com/hashicorp/terraform-cdk/pull/784)
- fix(docs): document module generation [\#848](https://github.com/hashicorp/terraform-cdk/pull/848)

**Fixed Bugs**

- fix(cli): throw explicit error when commands are invoked outside of a cdktf project [\#854](https://github.com/hashicorp/terraform-cdk/pull/854)
- fix(cli): dont compile cdktf output directory [\#754](https://github.com/hashicorp/terraform-cdk/pull/754)
- fix(cli): dont upload .terraform folders [\#758](https://github.com/hashicorp/terraform-cdk/pull/758)
- fix(cli): polish user interaction by switching libraries [\#850](https://github.com/hashicorp/terraform-cdk/pull/850)
- fix(cli): update hint for tfstate file [\#756](https://github.com/hashicorp/terraform-cdk/pull/756)
- fix(cli): parse JSON output [\#774](https://github.com/hashicorp/terraform-cdk/pull/774)
- fix(hcl2cdk): exclude non-registry modules from the cdktf.json [\#847](https://github.com/hashicorp/terraform-cdk/pull/847)
- fix(hcl2cdk): adjust link for label renaming [\#852](https://github.com/hashicorp/terraform-cdk/pull/852)
- fix(hcl2cdk): only run get conditionally [\#846](https://github.com/hashicorp/terraform-cdk/pull/846)
- fix(hcl2cdk): camelCase backend properties [\#862](https://github.com/hashicorp/terraform-cdk/pull/862)
- fix(hcl2cdk): suffix variables and locals [\#845](https://github.com/hashicorp/terraform-cdk/pull/845)
- fix(tests): make less assumptions about environment in config.test.ts [\#832](https://github.com/hashicorp/terraform-cdk/pull/832)
- fix(lib): Add in new optional AWS route attributes [\#821](https://github.com/hashicorp/terraform-cdk/pull/821)

**Chores**

- chore(deps): use nodejs v14 version of aws jsii/superchain image [\#843](https://github.com/hashicorp/terraform-cdk/pull/843)
- chore(deps): add gcc and gcc-c++ to Dockerfile required for node-gyp [\#849](https://github.com/hashicorp/terraform-cdk/pull/849)
- chore(deps): Upgrade eslint to v7 [\#819](https://github.com/hashicorp/terraform-cdk/pull/819)
- chore(deps): bump ws from 7.4.2 to 7.4.6 [\#747](https://github.com/hashicorp/terraform-cdk/pull/747)
- chore(deps): bump y18n from 4.0.0 to 4.0.3 [\#777](https://github.com/hashicorp/terraform-cdk/pull/777)
- chore(cli): send telemetry on errors [\#829](https://github.com/hashicorp/terraform-cdk/pull/829)
- chore(cli): lint tsx files and clean up React Hooks code [\#818](https://github.com/hashicorp/terraform-cdk/pull/818)
- chore(cli): add prettier [\#793](https://github.com/hashicorp/terraform-cdk/pull/793)
- chore(lib): track overrides and backend types in stack [\#830](https://github.com/hashicorp/terraform-cdk/pull/830)
- chore(tests): Provide global PR workflow status [\#781](https://github.com/hashicorp/terraform-cdk/pull/781)

## 0.4.1 (June 7, 2021)

**Fixed Bugs**

- Fix `cdktf destroy` - Make sure output parses only relevant parts [\#761](https://github.com/hashicorp/terraform-cdk/pull/761)
- Dont error on init when log has been written [\#759](https://github.com/hashicorp/terraform-cdk/pull/759)

## 0.4.0 (May 27, 2021)

**Implemented enhancements**

- Experimental Go Support [\#686](https://github.com/hashicorp/terraform-cdk/pull/686)
- Add Asset Construct [\#698](https://github.com/hashicorp/terraform-cdk/pull/698)
- Support sensitive variables [\#701](https://github.com/hashicorp/terraform-cdk/pull/701)
- Update python templates to use RemoteBackend construct [\#644](https://github.com/hashicorp/terraform-cdk/pull/644) & [\#669](https://github.com/hashicorp/terraform-cdk/pull/669)
- UX: Explain how to specify a stack in the error message [\#689](https://github.com/hashicorp/terraform-cdk/pull/689)
- Terraform Cloud: Output uses attribute name instead of id [\#717](https://github.com/hashicorp/terraform-cdk/pull/717)
- Terraform Cloud: Stream resource updates [\#712](https://github.com/hashicorp/terraform-cdk/pull/712)
- Add JSDoc links to Terraform Registry docs when generating providers [\#576](https://github.com/hashicorp/terraform-cdk/pull/576)

**Fixed Bugs**

- Return non-zero exit code on unknown command and allow terraform-like command names [\#680](https://github.com/hashicorp/terraform-cdk/pull/680)
- Add cdktf.log to .gitignore of built-in templates [\#662](https://github.com/hashicorp/terraform-cdk/pull/662)
- Fix elasticsearch index resource [\#681](https://github.com/hashicorp/terraform-cdk/pull/681)
- Fix gitignore after init [\#691](https://github.com/hashicorp/terraform-cdk/pull/691)
- Deploy changes on TF output changes [\#687](https://github.com/hashicorp/terraform-cdk/pull/687)
- Fix: Unable to use resources containing an argument named 'stack' [\#716](https://github.com/hashicorp/terraform-cdk/pull/716)
- OCI Synth issues: "module has already exported a member" [\#713](https://github.com/hashicorp/terraform-cdk/pull/713)
- Adapt to changed output format in Terraform 0.15.4 [\#736](https://github.com/hashicorp/terraform-cdk/pull/736)

## 0.3.0 (April 21, 2021)

**Breaking Changes**

We're now supporting multiple Stacks! - existing Terraform state files from **local** Terraform workflows have to be renamed to match the stack name.

Up until CDK for Terraform version `0.2` only a single stack was supported. For local state handling, a `terraform.tfstate` file in the project root folder was used. With version `0.3.0` the local state file reflects the stack name it belongs to in its file name. When a `terraform.tfstate` file is still present in the project root folder, it has to be renamed to match the schema `terraform.<stack-name>.tfstate` manually.

**Implemented enhancements**

- Add support for remote templates [\#645](https://github.com/hashicorp/terraform-cdk/pull/645)
- Handle Multiple Stacks [\#636](https://github.com/hashicorp/terraform-cdk/pull/636)

**Fixed Bugs**

- Wait for ConfigurationVersion to be ready when using Terraform Cloud [\#655](https://github.com/hashicorp/terraform-cdk/pull/655)
- Fix module variables without type [\#630](https://github.com/hashicorp/terraform-cdk/pull/630)
- Fix module without newline [\#633](https://github.com/hashicorp/terraform-cdk/pull/633)
- Rename instance variable to a more specific name to avoid name collisions [\#640](https://github.com/hashicorp/terraform-cdk/pull/640)
- Fix multiple modules with same end name [\#637](https://github.com/hashicorp/terraform-cdk/pull/637)

## 0.2.2 (April 13, 2021)

**Fixed Bugs**

- Resources containing hyphens in resource ids did not correctly display their apply status [\#614](https://github.com/hashicorp/terraform-cdk/pull/614)
- Add missing handling for resource status lines [\#619](https://github.com/hashicorp/terraform-cdk/pull/619)
- Print more descriptive error messages if requests to Terraform Cloud fail [\#623](https://github.com/hashicorp/terraform-cdk/pull/623), [\#626](https://github.com/hashicorp/terraform-cdk/pull/626), [\#488](https://github.com/hashicorp/terraform-cdk/issues/488), [\#400](https://github.com/hashicorp/terraform-cdk/issues/400)

## 0.2.1 (March 29, 2021)

**Fixed Bugs**

- Allow for module without outputs [\#599](https://github.com/hashicorp/terraform-cdk/pull/599)
- Fix Python template [\#604](https://github.com/hashicorp/terraform-cdk/pull/604)
- Don't treat warning lines as resources [\#585](https://github.com/hashicorp/terraform-cdk/pull/585)
- Handle malformed code blocks in provider schema descriptions [\#605](https://github.com/hashicorp/terraform-cdk/pull/605)

## 0.2.0 (March 11, 2021)

**Breaking Changes**

- Generated classes for modules from the registry will change - see [this comment](https://github.com/hashicorp/terraform-cdk/pull/584#issuecomment-794534236) for more details
- Phased out testing and support for Terraform `0.12`. It's likely to still work for now, but it's not guaranteed anymore [\#592](https://github.com/hashicorp/terraform-cdk/issues/592)

**Implemented enhancements:**

- Improve Module Support [\#584](https://github.com/hashicorp/terraform-cdk/issues/584)
- Release packages to Maven Central [\#556](https://github.com/hashicorp/terraform-cdk/issues/556)
- Release packages to Nuget.org [\#528](https://github.com/hashicorp/terraform-cdk/issues/528)
- TerraformHclModule outputs use tokens [\#512](https://github.com/hashicorp/terraform-cdk/issues/512)
- Improve C# init behaviour for Github Package Registry [\#497](https://github.com/hashicorp/terraform-cdk/issues/497)
- Support for dynamic attribute type [\#565](https://github.com/hashicorp/terraform-cdk/issues/565)
- Upgrade to ink v3 [\#559](https://github.com/hashicorp/terraform-cdk/issues/559)

**Fixed bugs:**

- Correct depends on casing for modules [\#508](https://github.com/hashicorp/terraform-cdk/issues/508)
- Python pip template adjustments for windows [\#535](https://github.com/hashicorp/terraform-cdk/issues/535)
- Checkpoint Error Handling / Timeout [\#552](https://github.com/hashicorp/terraform-cdk/issues/552)
- Inject defaults for certain attributes [\#479](https://github.com/hashicorp/terraform-cdk/issues/479)
- Python-pip template fix/improvements [\#541](https://github.com/hashicorp/terraform-cdk/issues/541)
- Quote cdktf path in init templates [\#511](https://github.com/hashicorp/terraform-cdk/issues/511)
- Include feature flags in java template and test [\#471](https://github.com/hashicorp/terraform-cdk/issues/471)
- Update jsii-srcmak to remove symlink [\#580](https://github.com/hashicorp/terraform-cdk/issues/580)
- Rename null provider for java & c# [\#589](https://github.com/hashicorp/terraform-cdk/issues/589)

**Chores:**

- Fix typo in execTerraformSynth [\#554](https://github.com/hashicorp/terraform-cdk/issues/554)
- Upgrade Java exec-maven-plugin 3.0.0 [\#536](https://github.com/hashicorp/terraform-cdk/issues/536)

## 0.1.0 (January 14, 2021)

**Implemented enhancements:**

- C# Support [\#477](https://github.com/hashicorp/terraform-cdk/issues/477)
- Terraform Cloud support with remote execution mode [\#449](https://github.com/hashicorp/terraform-cdk/issues/449)

**Fixed bugs:**

- Include feature flags in java template and test [\#471](https://github.com/hashicorp/terraform-cdk/issues/471)

**Security Updates:**

- Bump ini from 1.3.5 to 1.3.8 [\#460](https://github.com/hashicorp/terraform-cdk/issues/460)
- CVE-2020-7789 / GHSA-p9pc-299p-vxgp [\#478](https://github.com/hashicorp/terraform-cdk/issues/478) / [\#493](https://github.com/hashicorp/terraform-cdk/issues/493)

## 0.0.19 (December 6, 2020)

**Fixed bugs:**

- Depends on expansion [\#442](https://github.com/hashicorp/terraform-cdk/issues/442)
- Make sure tokens resolved before converting to json [\#439](https://github.com/hashicorp/terraform-cdk/issues/439)
- Alter reset and input names when they conflict [\#429](https://github.com/hashicorp/terraform-cdk/issues/429)
- Fix complex map attribute data source reference [\#441](https://github.com/hashicorp/terraform-cdk/issues/441)
- Remap 'equals' to 'equalTo' to work around jsii limitation [\#428](https://github.com/hashicorp/terraform-cdk/issues/428)
- Generated custom mappings [\#395](https://github.com/hashicorp/terraform-cdk/issues/395)

## 0.0.18 (November 5, 2020)

**Fixed bugs:**

- Update jsii with python docs fix [\#418](https://github.com/hashicorp/terraform-cdk/issues/418)
- Maintain dependencies between required construct properties [\#310](https://github.com/hashicorp/terraform-cdk/issues/310)

**Implemented enhancements:**

- Java support [\#360](https://github.com/hashicorp/terraform-cdk/issues/360)
- Simple Terraform Locals [\#357](https://github.com/hashicorp/terraform-cdk/issues/357)
- allow to use TERRAFORM_BINARY_NAME env to set terraform binary [\#366](https://github.com/hashicorp/terraform-cdk/issues/366)
- Default to NPM in templates [\#359](https://github.com/hashicorp/terraform-cdk/issues/359)
- Terraform version check [\#378](https://github.com/hashicorp/terraform-cdk/issues/378)
- Terraform Variables [\#277](https://github.com/hashicorp/terraform-cdk/issues/277)
- Terraform hcl module [\#375](https://github.com/hashicorp/terraform-cdk/issues/375)
- Support for matching existing Terraform names [\#329](https://github.com/hashicorp/terraform-cdk/issues/329)

## 0.0.17 (September 1, 2020)

**Fixed bugs:**

- Fix Orcale Provider [\#341](https://github.com/hashicorp/terraform-cdk/issues/341)
- Run Terraform commands with `input=false` flag [\#343](https://github.com/hashicorp/terraform-cdk/issues/343)
- Use default provider caching of Terraform, rather than creating error prone symlinks [\#344](https://github.com/hashicorp/terraform-cdk/issues/344)

**Implemented enhancements:**

- Streamline CLI workflows for prebuilt providers [\#331](https://github.com/hashicorp/terraform-cdk/issues/331)
- CLI installable via Homebrew [\#342](https://github.com/hashicorp/terraform-cdk/issues/342)
- Support Terraform provider caching by default [#189](https://github.com/hashicorp/terraform-cdk/issues/189), [\#222](https://github.com/hashicorp/terraform-cdk/issues/222), [\#349](https://github.com/hashicorp/terraform-cdk/issues/349)

## 0.0.16 (August 21, 2020)

**Fixed bugs:**

- Fix TerraformProvider alias definition [\#332](https://github.com/hashicorp/terraform-cdk/issues/332)

**Implemented enhancements:**

- Checkpoint telemetry integration [\#326](https://github.com/hashicorp/terraform-cdk/issues/326)
- Adding cdktf version to the terraform user agent [\#321](https://github.com/hashicorp/terraform-cdk/issues/321)
- Migrate to jsii-srcmak [\#276](https://github.com/hashicorp/terraform-cdk/issues/276)

## 0.0.15 (August 17, 2020)

**Fixed bugs:**

- Terraform 0.13 Compatibility for 3rd Party Providers (e.g. Docker) in Python [\#309](https://github.com/hashicorp/terraform-cdk/issues/309)
- Fix Naming Collision with Config interfaces [\#300](https://github.com/hashicorp/terraform-cdk/issues/300)

**Implemented enhancements:**

- Use remote backend class for typescript template [\#313](https://github.com/hashicorp/terraform-cdk/issues/313)

## 0.0.14 (August 9, 2020)

**Implemented enhancements:**

- Terraform 0.13 Compatibility [\#285](https://github.com/hashicorp/terraform-cdk/issues/285)

**Security Updates:**

- Fix dot-prop security dependency bot alert [\#296](https://github.com/hashicorp/terraform-cdk/issues/296)

## 0.0.13 (July 31, 2020)

**Fixed bugs:**

- Fix interpolation bug in complex computed list of data sources [\#215](https://github.com/hashicorp/terraform-cdk/issues/215)
- Avoid conflicts with resource attributes called "node" [\#230](https://github.com/hashicorp/terraform-cdk/pull/230)
- Python: setup imports dir as a package [\#262](https://github.com/hashicorp/terraform-cdk/pull/262)

**Implemented enhancements:**

- Add support for List of Maps in schema generator [\#229](https://github.com/hashicorp/terraform-cdk/issues/229)
- Add Lists of Maps [\#229](https://github.com/hashicorp/terraform-cdk/pull/229)
- Bump and align Typescript / @node/types Dependencies - Upgrade lodash [\#252](https://github.com/hashicorp/terraform-cdk/pull/252)
- Terraform backend config [\#224](https://github.com/hashicorp/terraform-cdk/pull/224)
- Terraform data remote state [\#241](https://github.com/hashicorp/terraform-cdk/pull/241)

## 0.0.12 (July 18, 2020)

**Fixed bugs:**

- `cdktf init` was broken on Windows [\#198](https://github.com/hashicorp/terraform-cdk/issues/198)

## 0.0.11 (July 15, 2020)

**Implemented enhancements:**

- Defaults are opposite of Terraform but should default to being non-destructive [\#155](https://github.com/hashicorp/terraform-cdk/issues/155)
- Version check for new cdktf cli [\#130](https://github.com/hashicorp/terraform-cdk/issues/130)
- Set NODE_ENV for CLI [\#129](https://github.com/hashicorp/terraform-cdk/issues/129)
- Make local state persistent [\#116](https://github.com/hashicorp/terraform-cdk/issues/116)
- Improved resource name structure in Diff / Deploy / Destroy [\#135](https://github.com/hashicorp/terraform-cdk/issues/135)

**Fixed bugs:**

- cdktf destroy errors saying stale plan [\#182](https://github.com/hashicorp/terraform-cdk/issues/182)
- Migrating from local state to remote state doesn't work [\#168](https://github.com/hashicorp/terraform-cdk/issues/168)
- Display Typescript Errors for Synth [\#161](https://github.com/hashicorp/terraform-cdk/issues/161)
- cdktf init is broken [\#157](https://github.com/hashicorp/terraform-cdk/issues/157)
- Handle stale stacks in cdktf [\#150](https://github.com/hashicorp/terraform-cdk/issues/150)
- cdktf init Terraform Cloud workspace creation doesn't work [\#144](https://github.com/hashicorp/terraform-cdk/issues/144)
- Case sensitive tags are incorrectly downcased [\#75](https://github.com/hashicorp/terraform-cdk/issues/75)

## 0.0.10 (July 7, 2020)

- Bug when creating Terraform Cloud workspace via `cdktf init` (#144)

## 0.0.9 (Jul 7, 2020)

- Fix `cdktf init` issue (#139)

## 0.0.8 (July 5, 2020)

Minor bug fixes and documentation for getting started guides.

## 0.0.7 (July 3, 2020)

- Support for `cdktf diff` (#90)
- Support for `cdktf deploy` (#92)
- Support for `cdktf destroy` (#111)
- Support for Terraform Cloud via `cdktf login` (#96)
- Support for logging across the project (#100)
- New UI for `cdktf synth` and `cdktf get` (#103)
- Basic error handling support (#110)

There are other minor bug fixes included in the release. (#109, #122, #128).

## 0.0.6 (May 14, 2020)

- Typescript examples and template defaults for synthesize commands to compile application (#63)
- Terraform Output doesn't handle Optional Types (#83)

## 0.0.5 (May 13, 2020)

- Document Terraform outputs and remote backend (#64)
- Fix providers file workflow (#66)
- Stack escape hatch (#81)

## 0.0.4 (May 12, 2020)

- Getting started guide for Python (#73)
- Change output directory to `cdktf.out` for Terraform configuration (#70)
- Fix output directory argument for `cdktf synth` (#62)

## 0.0.3 (May 11, 2020)

Enable synthesis to Python

## 0.0.2-alpha.2 (May 9, 2020)

Minor output changes and updated README.md example.

## 0.0.2-alpha.1 (May 9, 2020)

Alpha release for Github and NPM

## 0.0.2 (May 8, 2020)

Initial release to GitHub and NPM.

## 0.0.1 (May 8, 2020)

Initial release of `cdktf-cli` and `cdktf` to Github and NPM registry.
