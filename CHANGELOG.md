## Unreleased

### Minimum required Node version updated to 18.17

Since the long-term support for Node 16 is ending, we updated our minimum compatible node version to 18.17.

## 0.18.0

### chore

- chore: Disable windows integration tests temporarily [\#3086](https://github.com/hashicorp/terraform-cdk/pull/3086)
- chore: update jsii-srcmak [\#3081](https://github.com/hashicorp/terraform-cdk/pull/3081)
- chore: fix assertion of java tests [\#3079](https://github.com/hashicorp/terraform-cdk/pull/3079)
- chore: add wget [\#3075](https://github.com/hashicorp/terraform-cdk/pull/3075)
- chore: use gh cli to create PRs [\#3074](https://github.com/hashicorp/terraform-cdk/pull/3074)
- chore(deps): roll back trusted workflow updates [\#3073](https://github.com/hashicorp/terraform-cdk/pull/3073)
- chore: add gradle as a dependency for our tests [\#3066](https://github.com/hashicorp/terraform-cdk/pull/3066)
- chore: new lookup functionality changes assertion [\#3065](https://github.com/hashicorp/terraform-cdk/pull/3065)
- chore: update terraform versions we test again [\#3064](https://github.com/hashicorp/terraform-cdk/pull/3064)
- chore: add link to performance page [\#3060](https://github.com/hashicorp/terraform-cdk/pull/3060)
- chore(examples): update TS examples to use explicit imports [\#3053](https://github.com/hashicorp/terraform-cdk/pull/3053)
- chore: update tfe docs as well [\#3050](https://github.com/hashicorp/terraform-cdk/pull/3050)
- chore: remove waiting-on-answer label on comments [\#3046](https://github.com/hashicorp/terraform-cdk/pull/3046)
- chore(deps): pin trusted workflows based on HashiCorp TSCCR [\#3040](https://github.com/hashicorp/terraform-cdk/pull/3040)
- chore: add workflow to rollout provider documentation [\#3039](https://github.com/hashicorp/terraform-cdk/pull/3039)
- chore: clean up code a bit [\#3037](https://github.com/hashicorp/terraform-cdk/pull/3037)
- chore: fix links in README [\#3016](https://github.com/hashicorp/terraform-cdk/pull/3016)

### fix

- fix: provider add java integration test failures due to test setup [\#3083](https://github.com/hashicorp/terraform-cdk/pull/3083)
- fix: Gradle related provider add/list/upgrade [\#3080](https://github.com/hashicorp/terraform-cdk/pull/3080)
- fix(cli): cdktf debug to read gradle package versions [\#3077](https://github.com/hashicorp/terraform-cdk/pull/3077)
- fix(provider-generator): Handle \*/ in docstrings better, try 3 [\#3076](https://github.com/hashicorp/terraform-cdk/pull/3076)
- fix(lib): improve error message for passing an app to a construct [\#3062](https://github.com/hashicorp/terraform-cdk/pull/3062)
- fix(tests): remove only in test suite :sweat_smile: [\#3055](https://github.com/hashicorp/terraform-cdk/pull/3055)
- fix: install pipenv in Docker [\#3052](https://github.com/hashicorp/terraform-cdk/pull/3052)
- fix: install python3-venv and pin base image [\#3049](https://github.com/hashicorp/terraform-cdk/pull/3049)
- fix: correctly handle if version constraint is defined as star [\#3045](https://github.com/hashicorp/terraform-cdk/pull/3045)
- fix: fix single quote escaping [\#3018](https://github.com/hashicorp/terraform-cdk/pull/3018)
- fix(hcl2cdk): correctly keep escape sequences for interpolations in template expressions [\#3017](https://github.com/hashicorp/terraform-cdk/pull/3017)
- fix(examples): Properly set the Aspect on the stack instead of on the S3Bucket only [\#3003](https://github.com/hashicorp/terraform-cdk/pull/3003)

### feat

- feat(hcl2cdk): use Fn.lookupNested() instead of propertyAccess() [\#3056](https://github.com/hashicorp/terraform-cdk/pull/3056)
- feat(cli): move java template to gradle [\#3048](https://github.com/hashicorp/terraform-cdk/pull/3048)
- feat(cli): support gradle projects in provider add and list [\#3047](https://github.com/hashicorp/terraform-cdk/pull/3047)
- feat(docs): Link Registry docs blog post [\#3043](https://github.com/hashicorp/terraform-cdk/pull/3043)
- feat: remove root-level import of all modules in python [\#3030](https://github.com/hashicorp/terraform-cdk/pull/3030)
- feat(provider-generator): handle 'tuple' type for variable [\#2964](https://github.com/hashicorp/terraform-cdk/pull/2964)

**Breaking changes**

### Python performance improvements disable root-level provider imports

When using a Provider in python one could previously import the resource and data source namespaces on the root level. This is no longer possible and the namespaces must be imported through specifying the paht in the import. The syntax was supported before as well, so you can change your code within `0.17.x` and then upgrade to `0.18.x`.

Before:

```python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import provider, sns_topic, lambda_function, iam_role

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        provider.AwsProvider(self, 'Aws', region='eu-central-1')

        sns_topic.SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        role = iam_role.IamRole(self, 'Role', name='lambda-role',
                       assume_role_policy='{}')
        lambda_function.LambdaFunction(self, 'Lambda', function_name='my-first-lambda-function',
                       role=role.arn, handler='index.handler', runtime='python3.6')

app = App()
MyStack(app, "before-change")
app.synth()
```

After:

```python
from constructs import Construct
from cdktf import App, TerraformStack
# This syntax was supported before as well
from imports.aws.provider import AwsProvider
from imports.aws.sns_topic import SnsTopic
from imports.aws.lambda_function import LambdaFunction
from imports.aws.iam_role import IamRole

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')

        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        role = IamRole(self, 'Role', name='lambda-role',
                       assume_role_policy='{}')
        LambdaFunction(self, 'Lambda', function_name='my-first-lambda-function',
                       role=role.arn, handler='index.handler', runtime='python3.6')


app = App()
MyStack(app, "after-change")
app.synth()
```

## 0.17.3

### fix

- fix: don't cross package boundaries for templates [\#3029](https://github.com/hashicorp/terraform-cdk/pull/3029)
- fix: use local NPM registry for running integration tests on unix systems [\#3031](https://github.com/hashicorp/terraform-cdk/pull/3031)
- fix: trying to fix tsc error by updating how we invoke ts projects [\#3033](https://github.com/hashicorp/terraform-cdk/pull/3033)
- fix(docs): python docs for aspect [\#3002](https://github.com/hashicorp/terraform-cdk/pull/3002)

### chore

- chore: update vercel.json [\#3028](https://github.com/hashicorp/terraform-cdk/pull/3028)

## 0.17.2

### feat

- feat(cli): allow skipping synth [\#2993](https://github.com/hashicorp/terraform-cdk/pull/2993)

### fix

- fix(provider-generator): wrap dynamic block iterator .key and .value in Token.asString as simply concatenating it won't work in non-TS languages [\#3014](https://github.com/hashicorp/terraform-cdk/pull/3014)
- fix: remove old lerna option causing it to fail when building a matrix in CI runs [\#3004](https://github.com/hashicorp/terraform-cdk/pull/3004)
- fix: quote files in shared workflows [\#2994](https://github.com/hashicorp/terraform-cdk/pull/2994)
- fix: let workflow checkout different repositories [\#2991](https://github.com/hashicorp/terraform-cdk/pull/2991)
- fix(provider-generator): sanitize all comments [\#2990](https://github.com/hashicorp/terraform-cdk/pull/2990)

### chore

- chore: fix link to examples [\#3015](https://github.com/hashicorp/terraform-cdk/pull/3015)
- chore: build example script should show stdout and stderr [\#3013](https://github.com/hashicorp/terraform-cdk/pull/3013)
- chore: retry pushing converted code in registry conversion [\#2999](https://github.com/hashicorp/terraform-cdk/pull/2999)
- chore: Convert should use a typescript project to convert within [\#2992](https://github.com/hashicorp/terraform-cdk/pull/2992)
- chore: update cdk.tf links [\#2989](https://github.com/hashicorp/terraform-cdk/pull/2989)
- chore: add registry translation workflow [\#2958](https://github.com/hashicorp/terraform-cdk/pull/2958)

## 0.17.1

### fix

- fix: Handle \*/ sequences within variable descriptions and defaults for variables in modules [\#2986](https://github.com/hashicorp/terraform-cdk/pull/2986)
- fix: Upgrade @inquirer/prompts to resolve #2952 [\#2977](https://github.com/hashicorp/terraform-cdk/pull/2977)
- fix(tests): update integration test snapshot [\#2962](https://github.com/hashicorp/terraform-cdk/pull/2962)
- fix(cli): catch possible errors when trying to open a url [\#2961](https://github.com/hashicorp/terraform-cdk/pull/2961)
- fix(cli): Support PNPM when retrieving package dependency information [\#2959](https://github.com/hashicorp/terraform-cdk/pull/2959)
- fix(hcl2cdk): parse handling of null providers and aliases [\#2947](https://github.com/hashicorp/terraform-cdk/pull/2947)
- fix(hcl2cdk): use correct import path per language [\#2935](https://github.com/hashicorp/terraform-cdk/pull/2935)
- fix: do not always overwrite global.performance [\#2922](https://github.com/hashicorp/terraform-cdk/pull/2922)

### chore

- chore(deps): upgrade semver version [\#2981](https://github.com/hashicorp/terraform-cdk/pull/2981)
- chore(docs): update doc links to new URLs [\#2979](https://github.com/hashicorp/terraform-cdk/pull/2979)
- chore: Add regression test for input on init [\#2978](https://github.com/hashicorp/terraform-cdk/pull/2978)
- chore: Update diagram in docs with new provider count [\#2974](https://github.com/hashicorp/terraform-cdk/pull/2974)
- chore: trigger project board update when issues modified [\#2973](https://github.com/hashicorp/terraform-cdk/pull/2973)
- chore: remove project board update script [\#2970](https://github.com/hashicorp/terraform-cdk/pull/2970)
- chore: use resource name only unless conflict [\#2956](https://github.com/hashicorp/terraform-cdk/pull/2956)
- chore: remove dependency updates [\#2950](https://github.com/hashicorp/terraform-cdk/pull/2950)
- chore: correct constructs docs "Through Validations" example [\#2927](https://github.com/hashicorp/terraform-cdk/pull/2927)

### feat

- feat: Specific imports for convert [\#2946](https://github.com/hashicorp/terraform-cdk/pull/2946)
- feat: allow partial snippet translation [\#2920](https://github.com/hashicorp/terraform-cdk/pull/2920)

## 0.17.0

### feat

- feat(provider-generator): allow removing big, cost intensive structures [\#2932](https://github.com/hashicorp/terraform-cdk/pull/2932)
- feat(cli): add flag to display memory / time used for get and synth [\#2914](https://github.com/hashicorp/terraform-cdk/pull/2914)
- feat(cli): Improve telemetry reporting [\#2840](https://github.com/hashicorp/terraform-cdk/pull/2840)
- feat: make testing more resilient towards usage with app.synth [\#2762](https://github.com/hashicorp/terraform-cdk/pull/2762)
- feat(provider-generator): Add docstring to main class generated for modules [\#2589](https://github.com/hashicorp/terraform-cdk/pull/2589)

### fix

- fix(cli): exit ink app when done synthesizing [\#2933](https://github.com/hashicorp/terraform-cdk/pull/2933)
- fix(lib): Support Computed List<List<primitive>> [\#2850](https://github.com/hashicorp/terraform-cdk/pull/2850)
- fix(cli): Give hint when cdktf synth failed to create config [\#2714](https://github.com/hashicorp/terraform-cdk/pull/2714)
- fix(cli): Always run init, but selectively skip locking providers [\#2617](https://github.com/hashicorp/terraform-cdk/pull/2617)

### chore

- chore: remove existing feature flags [\#2937](https://github.com/hashicorp/terraform-cdk/pull/2937)
- chore: remove legacy comment [\#2938](https://github.com/hashicorp/terraform-cdk/pull/2938)
- chore: pin all workflows after update [\#2926](https://github.com/hashicorp/terraform-cdk/pull/2926)
- chore: remove PR sizing [\#2925](https://github.com/hashicorp/terraform-cdk/pull/2925)
- chore: remove update snapshots CI job [\#2924](https://github.com/hashicorp/terraform-cdk/pull/2924)
- chore: fix CODEOWNERS [\#2921](https://github.com/hashicorp/terraform-cdk/pull/2921)
- chore: add merge queue and remove timechart [\#2909](https://github.com/hashicorp/terraform-cdk/pull/2909)
- chore(hcl2cdk): add testing infrastructure for convert in Python & CSharp [\#2716](https://github.com/hashicorp/terraform-cdk/pull/2716)

### refactor

- refactor: exit after cdktf project commands finishes [\#2934](https://github.com/hashicorp/terraform-cdk/pull/2934)
- refactor(cli): upgrade inquirer to @inquirer/prompts [\#2853](https://github.com/hashicorp/terraform-cdk/pull/2853)

## 0.16.3

In `0.16.2` the release to maven failed, we fixed the issue and release this version so that maven is included in the release.

## 0.16.2

### fix

- fix(provider-generator): remove duplicates between wrapper classes and interfaces generated from provider schemas [\#2895](https://github.com/hashicorp/terraform-cdk/pull/2895)
- fix(cli): run terraform init in serial so no text file is busy in the cache [\#2843](https://github.com/hashicorp/terraform-cdk/pull/2843)
- fix(cli): buffer the output from the Terraform CLI and only forward output that has been terminated by a newline [\#2844](https://github.com/hashicorp/terraform-cdk/pull/2844)
- fix(cli): fix no-color flag passing [\#2845](https://github.com/hashicorp/terraform-cdk/pull/2845)
- fix(hcl2cdk): Support conversion of functions that have variate arguments at the end [\#2833](https://github.com/hashicorp/terraform-cdk/pull/2833)

### chore

- chore: Mock synth to make parallelism test fail less [\#2831](https://github.com/hashicorp/terraform-cdk/pull/2831)
- chore: Refactor hcl2cdk to read nicer [\#2826](https://github.com/hashicorp/terraform-cdk/pull/2826)

## 0.16.1

### fix

- fix(cli): run terraform init in serial so no text file is busy in the cache [\#2843](https://github.com/hashicorp/terraform-cdk/pull/2843)
- fix(cli): buffer the output from the Terraform CLI and only forward output that has been terminated by a newline [\#2844](https://github.com/hashicorp/terraform-cdk/pull/2844)
- fix(cli): fix no-color flag passing [\#2845](https://github.com/hashicorp/terraform-cdk/pull/2845)
- fix(hcl2cdk): Support conversion of functions that have variate arguments at the end [\#2833](https://github.com/hashicorp/terraform-cdk/pull/2833)

### chore

- chore: Mock synth to make parallelism test fail less [\#2831](https://github.com/hashicorp/terraform-cdk/pull/2831)
- chore: Refactor hcl2cdk to read nicer [\#2826](https://github.com/hashicorp/terraform-cdk/pull/2826)

## 0.16.0

**Breaking changes**

### Update to .NET 6.0

We updated our C# template to .NET 6.0 as JSII updated recently and dropped support for `netcoreapp3.1`:

> The runtime library for .NET & generated .NET bindings will no longer support netcoreapp3.1 after this release. Users are advised to upgrade their apps to use net6.0 or net7.0 instead.

from [JSII v.1.76.0 release notes](https://github.com/aws/jsii/releases/tag/v1.76.0)

### Changes to Terraform function bindings

Terraform functions are now generated based on the JSON schema returned by the new `metadata functions` command which is going to be added to the Terraform CLI in version 1.4 ([PR \#32487](https://github.com/hashicorp/terraform/pull/32487), already available in [`v1.4.0-beta2`](https://github.com/hashicorp/terraform/releases/tag/v1.4.0-beta2)).

The following new functions were introduced:

- [`Fn.endswith()`](https://developer.hashicorp.com/terraform/language/functions/endswith) - checks the suffix of a string
- [`Fn.startswith()`](https://developer.hashicorp.com/terraform/language/functions/startswith) - checks the prefix of a string
- [`Fn.timecmp()`](https://developer.hashicorp.com/terraform/language/functions/timecmp) - compares two timestamps

The following functions changed:

- `Fn.parseInt()` is now `Fn.parseint()` to match the format of all other functions
- `Fn.mergeLists()` does not exist anymore, use `Fn.concat()` instead
- `Fn.mergeMaps()` does not exist anymore, use `Fn.merge()` instead

As part of this change, we use the same parameter names as Terraform which might require changing keyword arguments in Python.

```python
# old
Fn.join(",", [src.stringResource.result, src.stringResource.result])
Fn.join(separator=",", value=[src.stringResource.result, src.stringResource.result])
# new
Fn.join(",", [src.stringResource.result, src.stringResource.result]) # stays the same
Fn.join(separator=",", list=[src.stringResource.result, src.stringResource.result]) # value -> list
```

### Converted Code now wrapped in `constructs.Construct` or `cdktf.TerraformStack`

To improve the translation capabilities of `cdktf convert` for languages other than Typescript we need to make the converted Typescript code compile. Currently the imports and CDKTF statements are printed below one another, with CDKTF 0.16 we will always wrap them in a custom construct or if you pass the `--stack` flag in a TerraformStack. As long as you don't have any automation set up around convert this change will not affect you. If you do, we suggest switching to the `@cdktf/hcl2cdk` npm package since it exports both the imports and the raw code seperately.

### Addition of meta resource properties like condtions

We added support for advanced lifecycle features like [`preconditions`](/terraform/language/expressions/custom-conditions#preconditions-and-postconditions), so all generated resource or data source bindings made a breaking change.

### Minimum required Node version updated to 16.13

Since the long-term support for Node 14 is ending, we updated our minimum compatible node version to 16.13.

### fix

- fix(tests): update edge provider tests [\#2814](https://github.com/hashicorp/terraform-cdk/pull/2814)
- fix: Accept nested quotes within strings [\#2813](https://github.com/hashicorp/terraform-cdk/pull/2813)
- fix(hcl2cdk): Handle multi-line strings better [\#2812](https://github.com/hashicorp/terraform-cdk/pull/2812)
- fix(lib): Fix access expressions rendering invalid Terraform [\#2811](https://github.com/hashicorp/terraform-cdk/pull/2811)
- fix: Support index expressions [\#2809](https://github.com/hashicorp/terraform-cdk/pull/2809)
- fix: type coercion on primitive values [\#2805](https://github.com/hashicorp/terraform-cdk/pull/2805)
- fix(hcl2cdk): handle object expressions [\#2804](https://github.com/hashicorp/terraform-cdk/pull/2804)
- fix(cli): fix version constraint for Terraform provider including space [\#2803](https://github.com/hashicorp/terraform-cdk/pull/2803)
- fix(lib): allow propertyAccess to handle splat and resources [\#2802](https://github.com/hashicorp/terraform-cdk/pull/2802)
- fix: Use property access when refrencing numeric and map accessors [\#2801](https://github.com/hashicorp/terraform-cdk/pull/2801)
- fix(lib): fix Symbol for Terraform dynamic expression causing crashes when using Iterator.dynamic() on blocks [\#2794](https://github.com/hashicorp/terraform-cdk/pull/2794)
- fix(cli): send terraform output before approval [\#2790](https://github.com/hashicorp/terraform-cdk/pull/2790)
- fix(hcl2cdk): handle external provider data [\#2777](https://github.com/hashicorp/terraform-cdk/pull/2777)
- fix(hcl2cdk): Handle referencing lists, sets and maps better when converting [\#2775](https://github.com/hashicorp/terraform-cdk/pull/2775)
- fix(tests): set JSII env var to not print Node version warning [\#2772](https://github.com/hashicorp/terraform-cdk/pull/2772)
- fix: Revert "chore: upgrade our Docker image to be based on Node 0.16" [\#2771](https://github.com/hashicorp/terraform-cdk/pull/2771)
- fix(hcl2cdk): flaky tests on hcl2cdk expressions [\#2769](https://github.com/hashicorp/terraform-cdk/pull/2769)
- fix(hcl2cdk): use better fallbacks for resource and namespace nammings without a schema [\#2763](https://github.com/hashicorp/terraform-cdk/pull/2763)
- fix(hcl2cdk): Heredocs expression parsing [\#2758](https://github.com/hashicorp/terraform-cdk/pull/2758)
- fix(docs): Fix typo in commands.mdx [\#2752](https://github.com/hashicorp/terraform-cdk/pull/2752)
- fix(docs): fix typo in upgrade-guide-v0-15.mdx [\#2738](https://github.com/hashicorp/terraform-cdk/pull/2738)
- fix(cli): remove deprecated tsconfig option [\#2737](https://github.com/hashicorp/terraform-cdk/pull/2737)
- fix(provider-generator): Fix generating bindings for providers that have only block types in their schema [\#2736](https://github.com/hashicorp/terraform-cdk/pull/2736)
- fix(hcl2cdk): handle namespace level renamings [\#2722](https://github.com/hashicorp/terraform-cdk/pull/2722)
- fix(lib): Don't append copyright header to version file used for releasing Go [\#2721](https://github.com/hashicorp/terraform-cdk/pull/2721)
- fix(cli): remove extra quotes [\#2712](https://github.com/hashicorp/terraform-cdk/pull/2712)
- fix(hcl2cdk): handle JSII Rosetta translation properly [\#2706](https://github.com/hashicorp/terraform-cdk/pull/2706)
- fix(lib): make ComplexMap an interpolating parent [\#2700](https://github.com/hashicorp/terraform-cdk/pull/2700)
- fix(tests): fix keyword argument for python test [\#2699](https://github.com/hashicorp/terraform-cdk/pull/2699)
- fix(cli): fix watch telemetry [\#2698](https://github.com/hashicorp/terraform-cdk/pull/2698)
- fix: don't post about large PRs since this currently happens repeatedly and spams the timeline of PRs [\#2697](https://github.com/hashicorp/terraform-cdk/pull/2697)
- fix(provider-generator): Use registry.terraform.io links instead of old terraform.io [\#2696](https://github.com/hashicorp/terraform-cdk/pull/2696)
- fix(lib): Update old terraform.io links [\#2694](https://github.com/hashicorp/terraform-cdk/pull/2694)
- fix(docs): Replace old terraform.io links [\#2693](https://github.com/hashicorp/terraform-cdk/pull/2693)
- fix: change trigger for adding PR labels to pull_request_target [\#2689](https://github.com/hashicorp/terraform-cdk/pull/2689)
- fix(lib): support objects with keys that need escaping like e.g. colons [\#2678](https://github.com/hashicorp/terraform-cdk/pull/2678)
- fix: set older C# version until JSII releases an update and we can upgrade to v6.0 [\#2676](https://github.com/hashicorp/terraform-cdk/pull/2676)
- fix(docs): fix stack escape hatch override example for TS, Python, and Java [\#2663](https://github.com/hashicorp/terraform-cdk/pull/2663)
- fix(hcl2cdk): fix type coercion [\#2632](https://github.com/hashicorp/terraform-cdk/pull/2632)
- fix(provider-generator): fix resources named 'license' causing collisions with LICENSE file on case-insensitive filesystems for Go packages [\#2630](https://github.com/hashicorp/terraform-cdk/pull/2630)
- fix(docs): source java iterator snippets from examples [\#2595](https://github.com/hashicorp/terraform-cdk/pull/2595)

### feat

- feat(docs): Add example for TerraformCount to iterators.mdx [\#2808](https://github.com/hashicorp/terraform-cdk/pull/2808)
- feat(hcl2cdk): support count using TerraformCount [\#2796](https://github.com/hashicorp/terraform-cdk/pull/2796)
- feat(lib): fix using variables and locals directly in template strings [\#2791](https://github.com/hashicorp/terraform-cdk/pull/2791)
- feat(hcl2cdk): support variable types and validations [\#2773](https://github.com/hashicorp/terraform-cdk/pull/2773)
- feat(lib): add support for terraform count [\#2766](https://github.com/hashicorp/terraform-cdk/pull/2766)
- feat(hcl2cdk): support resource metadata [\#2745](https://github.com/hashicorp/terraform-cdk/pull/2745)
- feat(lib): TerraformIterators allow chaining [\#2739](https://github.com/hashicorp/terraform-cdk/pull/2739)
- feat(hcl2cdk): use TerraformIterator API instead of overrides [\#2732](https://github.com/hashicorp/terraform-cdk/pull/2732)
- feat(lib): Add `TerraformCachedAsset` [\#2679](https://github.com/hashicorp/terraform-cdk/pull/2679)
- feat(cli): Upgrade init template to .NET 6.0 [\#2673](https://github.com/hashicorp/terraform-cdk/pull/2673)
- feat(lib): Generate Terraform function bindings using `terraform metadata functions` [\#2659](https://github.com/hashicorp/terraform-cdk/pull/2659)

### chore

- chore: use nx feature for parallelizing and caching [\#2806](https://github.com/hashicorp/terraform-cdk/pull/2806)
- chore: pin provider versions in documentation examples [\#2799](https://github.com/hashicorp/terraform-cdk/pull/2799)
- chore: add chown to release steps [\#2798](https://github.com/hashicorp/terraform-cdk/pull/2798)
- chore: add chown to release process [\#2797](https://github.com/hashicorp/terraform-cdk/pull/2797)
- chore: upgrade our Docker image to be based on Node 0.16 [\#2789](https://github.com/hashicorp/terraform-cdk/pull/2789)
- chore: update to node 16 [\#2788](https://github.com/hashicorp/terraform-cdk/pull/2788)
- chore: upgrade dependencies in hcl2cdk and hcl2json [\#2779](https://github.com/hashicorp/terraform-cdk/pull/2779)
- chore: update go version [\#2778](https://github.com/hashicorp/terraform-cdk/pull/2778)
- chore(lib): update to JSII 5 [\#2776](https://github.com/hashicorp/terraform-cdk/pull/2776)
- chore: upgrade our Docker image to be based on Node 0.16 [\#2770](https://github.com/hashicorp/terraform-cdk/pull/2770)
- chore(examples): Disable Java Gradle example [\#2760](https://github.com/hashicorp/terraform-cdk/pull/2760)
- chore(docs): change to `synth` from `synthScope` for #2755 [\#2756](https://github.com/hashicorp/terraform-cdk/pull/2756)
- chore: Make iterators working again with convert [\#2754](https://github.com/hashicorp/terraform-cdk/pull/2754)
- chore: Enable type coercion again [\#2750](https://github.com/hashicorp/terraform-cdk/pull/2750)
- chore: Use new Terraform Expression AST for generating Typescript expression [\#2744](https://github.com/hashicorp/terraform-cdk/pull/2744)
- chore: Add tree traversal, and better types for terraform expression AST [\#2740](https://github.com/hashicorp/terraform-cdk/pull/2740)
- chore(hcl2cdk): prepare for convert using Terraform function bindings [\#2734](https://github.com/hashicorp/terraform-cdk/pull/2734)
- chore: Add 'getExpressionAst' method to go bridge [\#2729](https://github.com/hashicorp/terraform-cdk/pull/2729)
- chore: fix copyright headers automation [\#2725](https://github.com/hashicorp/terraform-cdk/pull/2725)
- chore: improve development performance by excluding synth [\#2723](https://github.com/hashicorp/terraform-cdk/pull/2723)
- chore(docs): explain constructs in contrast to modules better [\#2715](https://github.com/hashicorp/terraform-cdk/pull/2715)
- chore: Reduce warnings to get to the bottom of documentation issues [\#2713](https://github.com/hashicorp/terraform-cdk/pull/2713)
- chore: update jsii-srcmak in provider-generator [\#2707](https://github.com/hashicorp/terraform-cdk/pull/2707)
- chore: uprade jsii versions to latest [\#2701](https://github.com/hashicorp/terraform-cdk/pull/2701)
- chore: add /dashboard short link [\#2695](https://github.com/hashicorp/terraform-cdk/pull/2695)
- chore(docs): Migrate link formats [\#2687](https://github.com/hashicorp/terraform-cdk/pull/2687)
- chore: Remove links within headers of documentation pages [\#2686](https://github.com/hashicorp/terraform-cdk/pull/2686)
- chore: add copyright headers automation [\#2683](https://github.com/hashicorp/terraform-cdk/pull/2683)
- chore: set label to run integration tests if workflow file or test/ directory changes [\#2677](https://github.com/hashicorp/terraform-cdk/pull/2677)
- chore: Automate go package copyright/license inculsion [\#2666](https://github.com/hashicorp/terraform-cdk/pull/2666)
- chore: fix incorrect changelog [\#2661](https://github.com/hashicorp/terraform-cdk/pull/2661)
- chore: create pull request template [\#2654](https://github.com/hashicorp/terraform-cdk/pull/2654)
- chore: fix naming issue with csharp stack template [\#2626](https://github.com/hashicorp/terraform-cdk/pull/2626)

### refactor

- refactor(hcl2json): rename wasm method to match its implementation and expose it more direct aswell [\#2724](https://github.com/hashicorp/terraform-cdk/pull/2724)

### Other

- Revert "feat(lib): Add `TerraformCachedAsset`" [\#2719](https://github.com/hashicorp/terraform-cdk/pull/2719)

## 0.15.5

### fix

- chore: update JSII to 1.75.0 [\#2653](https://github.com/hashicorp/terraform-cdk/pull/2653)
- fix(lib): zipmap arg validators [\#2633](https://github.com/hashicorp/terraform-cdk/pull/2633)

## 0.15.4

### fix

- fix(cli): Remove @types/node-fetch from dependencies as those take precedence over direct devDependencies on @node/types [\#2623](https://github.com/hashicorp/terraform-cdk/pull/2623)

## 0.15.3

### chore

- chore: Don't run `terraform init` when not required [\#2572](https://github.com/hashicorp/terraform-cdk/pull/2572)
- chore: additionally lock providers for linux only [\#2593](https://github.com/hashicorp/terraform-cdk/pull/2593)
- chore: refactor 'needs upgrade' [\#2570](https://github.com/hashicorp/terraform-cdk/pull/2570)
- chore: Update remaining Typescript documentation snippets [\#2564](https://github.com/hashicorp/terraform-cdk/pull/2564)
- chore: translate more csharp docs [\#2433](https://github.com/hashicorp/terraform-cdk/pull/2433)
- chore: translate rest of the docs to C# [\#2558](https://github.com/hashicorp/terraform-cdk/pull/2558)
- chore: run dotnet format [\#2559](https://github.com/hashicorp/terraform-cdk/pull/2559)
- chore: Update contributing [\#2479](https://github.com/hashicorp/terraform-cdk/pull/2479)
- chore: truly autoclose older GHA updater PRs [\#2546](https://github.com/hashicorp/terraform-cdk/pull/2546)

### fix

- fix: rename CloudBackendProps to CloudBackendConfig in templates [\#2553](https://github.com/hashicorp/terraform-cdk/pull/2553)
- fix: switch back to offical image to fix issue with stale signature files [\#2588](https://github.com/hashicorp/terraform-cdk/pull/2588)
- fix: use correctly named syntax in comments [\#2562](https://github.com/hashicorp/terraform-cdk/pull/2562)
- fix(lib): Update special defaults [\#2523](https://github.com/hashicorp/terraform-cdk/pull/2523)
- fix(docs): camel -> snake case in resource escape hatches [\#2571](https://github.com/hashicorp/terraform-cdk/pull/2571)
- fix(docs): Go post mortem review feedback [\#2587](https://github.com/hashicorp/terraform-cdk/pull/2587)
- fix(docs): fix typo in CSharp example [\#2580](https://github.com/hashicorp/terraform-cdk/pull/2580)
- fix(docs): fix links to examples page [\#2574](https://github.com/hashicorp/terraform-cdk/pull/2574)
- fix(docs): add missing java remote backend example [\#2563](https://github.com/hashicorp/terraform-cdk/pull/2563)
- fix(docs): properties in create module example use snake case [\#2561](https://github.com/hashicorp/terraform-cdk/pull/2561)

### feat

- feat: add cache flag for prettier to speed up subsequent runs [\#2556](https://github.com/hashicorp/terraform-cdk/pull/2556)
- feat: Add a wrap in stack optional param to cdktf convert [\#2539](https://github.com/hashicorp/terraform-cdk/pull/2539)
- feat(docs): Convert some code snippets in docs to Golang [\#2439](https://github.com/hashicorp/terraform-cdk/pull/2439)
- feat(docs): Translate Aspect example to Go [\#2445](https://github.com/hashicorp/terraform-cdk/pull/2445)
- feat(docs): Translate more examples to Go [\#2554](https://github.com/hashicorp/terraform-cdk/pull/2554)
- feat(docs): Translate more examples to Go [\#2560](https://github.com/hashicorp/terraform-cdk/pull/2560)
- feat(docs): Translate more examples to Go [\#2569](https://github.com/hashicorp/terraform-cdk/pull/2569)
- feat: also go through files not yet added to git [\#2567](https://github.com/hashicorp/terraform-cdk/pull/2567)

## 0.15.2

### feat

- feat: create a plan file for non-TFC runs [\#2531](https://github.com/hashicorp/terraform-cdk/pull/2531)

### fix

- fix: cdktf login issues [\#2543](https://github.com/hashicorp/terraform-cdk/pull/2543)
- fix(lib): don't use Fn.set on tagged cloud backend [\#2536](https://github.com/hashicorp/terraform-cdk/pull/2536)
- fix(provider-generator): use class based map abstractions [\#2530](https://github.com/hashicorp/terraform-cdk/pull/2530)

### chore

- chore: actually autoclose older GHA updater PRs [\#2542](https://github.com/hashicorp/terraform-cdk/pull/2542)
- chore: fill out homebrew pr body [\#2537](https://github.com/hashicorp/terraform-cdk/pull/2537)
- chore: support soft sentinel overrides [\#2485](https://github.com/hashicorp/terraform-cdk/pull/2485)

## 0.15.1

### fix

- fix(provider-generator): fix resources named 'provider' breaking the code generation [\#2504](https://github.com/hashicorp/terraform-cdk/pull/2504)

### chore

- chore: autoclose older GHA updater PRs [\#2505](https://github.com/hashicorp/terraform-cdk/pull/2505)

## 0.15.0

**Breaking changes**

### Renaming of `*Options` and `*Props` to `*Config`

We had several exports where the configuration passed to constructs or functions was using a class with a different suffix then `Config`. If you are using a language like C#, Java, Python, or Go you might have needed to specify these classes in your CDKTF application. To simplify the usage we changed every suffix to be `Config`, so if you currently use one of the others please rename them to use the `Config` suffix. No options were changed in the process, only the names were aligned.

This would be one example of the change to be made (this is in Java):

```diff
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.CloudBackend;
-import com.hashicorp.cdktf.CloudBackendProps;
+import com.hashicorp.cdktf.CloudBackendConfig;
import com.hashicorp.cdktf.NamedCloudWorkspace;

    public static class Demo extends TerraformStack{

        public Demo(Construct scope, String id){
            super(scope, id);
-            new CloudBackend(this, CloudBackendProps.builder()
+            new CloudBackend(this, CloudBackendConfig.builder()
                    .organization("hashicorp")
                    .workspaces(new NamedCloudWorkspace("demo"))
                    .build()
            );
```

### Notice: CDKTF 0.15 bumps minimum Terraform version to 1.2

CDKTF is bumping the minimum supported version of Terraform from 1.0 to 1.2 starting from CDKTF version 0.15. This change is necessary as CDKTF 0.15 uses the Terraform CLI for planning and applying changes for Terraform Cloud and Terraform Enterprise instead of [the API](https://developer.hashicorp.com/terraform/cloud-docs/api-docs) used in version 0.14.

[Terraform promises compatibility](https://developer.hashicorp.com/terraform/language/v1-compatibility-promises) between all v1.x releases, so there shouldn't be any issues with this change. The only changes between these versions are bug fixes, and new feature additions.

Please open an issue if you encounter any issues or bugs with this change.

### Deprecation: We deprecate the feature flags that go into the `context` field of the `cdktf.json`

CDKTF used to use feature flags to enable potentially breaking behaviors in a release. These are no longer needed since most of the changes we introduce from here can not be hidden behind feature flags. When the feature flags are removed, the behavior will be the same as this configuration:

```json
{
  "context": {
    "excludeStackIdFromLogicalIds": "true",
    "allowSepCharsInLogicalIds": "true"
  }
}
```

### feat

- feat(cli): Add cdktf provider list command [\#2270](https://github.com/hashicorp/terraform-cdk/pull/2270)
- feat(cli): support -var and -var-file terraform flags [\#2468](https://github.com/hashicorp/terraform-cdk/pull/2468)
- feat(cli): add -no-color tag [\#2307](https://github.com/hashicorp/terraform-cdk/pull/2307)
- feat: enable non-escaping mode for tokens [\#2179](https://github.com/hashicorp/terraform-cdk/pull/2179)
- feat: use our own pre-built package for node-pty to have builds for Nodejs 19 available [\#2478](https://github.com/hashicorp/terraform-cdk/pull/2478)
- feat(docs): Document node-gyp errors if no precompiled binaries are available and the target system misses a native toolchain [\#2497](https://github.com/hashicorp/terraform-cdk/pull/2497)

### fix

- fix(cli): don't enquote args as they will be escaped and end up in the calls to Terraform [\#2493](https://github.com/hashicorp/terraform-cdk/pull/2493)
- fix: detect destroys on windows / TF version [\#2486](https://github.com/hashicorp/terraform-cdk/pull/2486)
- fix(tests): change Options -> Config as per #2471 [\#2482](https://github.com/hashicorp/terraform-cdk/pull/2482)
- fix(cli): windows fixes [\#2480](https://github.com/hashicorp/terraform-cdk/pull/2480)
- fix: limit concurrency for integration tests to 10 for each windows and linux [\#2474](https://github.com/hashicorp/terraform-cdk/pull/2474)
- fix(tests): Make version more stable [\#2467](https://github.com/hashicorp/terraform-cdk/pull/2467)
- fix: use older SHA from jsii superchain docker image [\#2465](https://github.com/hashicorp/terraform-cdk/pull/2465)
- fix: fix go build in pipeline [\#2464](https://github.com/hashicorp/terraform-cdk/pull/2464)
- fix(cli): remove newlines from tokens during terraform login [\#2459](https://github.com/hashicorp/terraform-cdk/pull/2459)
- fix(cli): abort apply if not all variables are known [\#2455](https://github.com/hashicorp/terraform-cdk/pull/2455)
- fix: Expose provider matcher to jest [\#2448](https://github.com/hashicorp/terraform-cdk/pull/2448)
- fix: Adds `environment` to keys to preserve case [\#2446](https://github.com/hashicorp/terraform-cdk/pull/2446)
- fix: Allow git access for sentry cli in docker [\#2426](https://github.com/hashicorp/terraform-cdk/pull/2426)
- fix: add path: dist for npm and pypi [\#2410](https://github.com/hashicorp/terraform-cdk/pull/2410)

### chore

- chore: create upgrade guide [\#2494](https://github.com/hashicorp/terraform-cdk/pull/2494)
- chore: increase parallel limit (10->30) to speed up integration tests [\#2487](https://github.com/hashicorp/terraform-cdk/pull/2487)
- chore: disable cron for project board [\#2484](https://github.com/hashicorp/terraform-cdk/pull/2484)
- chore(docs): fix some docs [\#2483](https://github.com/hashicorp/terraform-cdk/pull/2483)
- chore: fix typo in function name [\#2462](https://github.com/hashicorp/terraform-cdk/pull/2462)
- chore: add a notice for minimum supported version to changelog [\#2461](https://github.com/hashicorp/terraform-cdk/pull/2461)
- chore: fix broken GHA version updater [\#2453](https://github.com/hashicorp/terraform-cdk/pull/2453)
- chore: update CODEOWNERS [\#2444](https://github.com/hashicorp/terraform-cdk/pull/2444)
- chore(docs): running snippet update tool revealed an existing snippet that is not up-to-date [\#2440](https://github.com/hashicorp/terraform-cdk/pull/2440)
- chore: update JSII [\#2428](https://github.com/hashicorp/terraform-cdk/pull/2428)
- chore: Support custom endpoints [\#2427](https://github.com/hashicorp/terraform-cdk/pull/2427)
- chore: create TFC/TFE workspace using the Terraform CLI [\#2424](https://github.com/hashicorp/terraform-cdk/pull/2424)
- chore: switch to SHA-based workflow pins [\#2422](https://github.com/hashicorp/terraform-cdk/pull/2422)
- chore: Update all documentation examples for Typescript [\#2421](https://github.com/hashicorp/terraform-cdk/pull/2421)
- chore: remove long-running hooks [\#2418](https://github.com/hashicorp/terraform-cdk/pull/2418)
- chore: translate documentation to csharp [\#2417](https://github.com/hashicorp/terraform-cdk/pull/2417)
- chore: add a refactoring guide [\#2413](https://github.com/hashicorp/terraform-cdk/pull/2413)
- chore: fix homebrew deploy step [\#2412](https://github.com/hashicorp/terraform-cdk/pull/2412)
- chore: add TFE information to TFC docs [\#2407](https://github.com/hashicorp/terraform-cdk/pull/2407)
- chore: deprecate feature flags [\#2498](https://github.com/hashicorp/terraform-cdk/pull/2498)
- chore: document variable flags [\#2495](https://github.com/hashicorp/terraform-cdk/pull/2495)

### refactor

- refactor: rename all *Props and *Options classes and interfaces to \*Config [\#2471](https://github.com/hashicorp/terraform-cdk/pull/2471)

## 0.14.3

### fix

- fix: add completed tfc pending states [\#2398](https://github.com/hashicorp/terraform-cdk/pull/2398)
- fix: skip confirming on auto-apply enabled tfc workspaces [\#2397](https://github.com/hashicorp/terraform-cdk/pull/2397)
- fix(hcl2cdk): snapshot generated code instead of snapshotting that the function returns a promise [\#2392](https://github.com/hashicorp/terraform-cdk/pull/2392)
- fix: add `required_version` to json schema [\#2355](https://github.com/hashicorp/terraform-cdk/pull/2355)

### chore

- chore: add provider-integration tests conditionally for PRs and to releases [\#2371](https://github.com/hashicorp/terraform-cdk/pull/2371)
- chore: increase operations per run of stale workflow [\#2363](https://github.com/hashicorp/terraform-cdk/pull/2363)
- chore: update github workflow actions [\#2361](https://github.com/hashicorp/terraform-cdk/pull/2361)
- chore(docs): Add Example for Complex input variables [\#2309](https://github.com/hashicorp/terraform-cdk/pull/2309)
- chore: add Terraform `1.3.4` to Docker container [\#2285](https://github.com/hashicorp/terraform-cdk/pull/2285)

### feat

- feat(cli): prompt added in init - asks to use TFC when credentials are present [\#2386](https://github.com/hashicorp/terraform-cdk/pull/2386)
- feat(docs): document Token.nullValue() [\#2297](https://github.com/hashicorp/terraform-cdk/pull/2297)

## 0.14.2

**Breaking changes**

We split up our `cdktf-cli` package into `cdktf-cli` for the UI parts, utilizing `@cdktf/cli-core` for the functionality. If you previously relied on the internal `cdktf-cli/lib` entrypoint you should switch to `@cdktf/cli-core`. This was never an official API, but we want to mention it here in case it breaks for anyone.

### chore

- chore: skip hcl2cdk tests for now [\#2384](https://github.com/hashicorp/terraform-cdk/pull/2384)
- chore: Update Digital Team Files [\#2383](https://github.com/hashicorp/terraform-cdk/pull/2383)
- chore: move from pr target to pr [\#2381](https://github.com/hashicorp/terraform-cdk/pull/2381)
- chore: fix finalizing the Sentry release [\#2379](https://github.com/hashicorp/terraform-cdk/pull/2379)
- chore: update workflows for new workflow endpoint [\#2378](https://github.com/hashicorp/terraform-cdk/pull/2378)
- chore: disable python edge test [\#2369](https://github.com/hashicorp/terraform-cdk/pull/2369)
- chore: only trigger unit tests once [\#2362](https://github.com/hashicorp/terraform-cdk/pull/2362)
- chore: use secret [\#2358](https://github.com/hashicorp/terraform-cdk/pull/2358)
- chore: document go version [\#2351](https://github.com/hashicorp/terraform-cdk/pull/2351)
- chore: fix stale workflow [\#2343](https://github.com/hashicorp/terraform-cdk/pull/2343)
- chore: add build step to ci [\#2338](https://github.com/hashicorp/terraform-cdk/pull/2338)
- chore: add workflows to auto-close and lock stale issues and PRs [\#2335](https://github.com/hashicorp/terraform-cdk/pull/2335)
- chore: add expression paranthesis [\#2332](https://github.com/hashicorp/terraform-cdk/pull/2332)
- chore: dedupe concurrency prefix [\#2330](https://github.com/hashicorp/terraform-cdk/pull/2330)
- chore: npm-check-updates && yarn upgrade [\#2329](https://github.com/hashicorp/terraform-cdk/pull/2329)
- chore: improve release pipelines [\#2328](https://github.com/hashicorp/terraform-cdk/pull/2328)
- chore: add GH Action that labels PRs [\#2325](https://github.com/hashicorp/terraform-cdk/pull/2325)
- chore(docs): Update remote-backends.mdx [\#2324](https://github.com/hashicorp/terraform-cdk/pull/2324)
- chore: ensure we run all tests on dependency updates [\#2323](https://github.com/hashicorp/terraform-cdk/pull/2323)
- chore: re-add run url [\#2320](https://github.com/hashicorp/terraform-cdk/pull/2320)
- chore: limit concurrency on releases [\#2318](https://github.com/hashicorp/terraform-cdk/pull/2318)
- chore: fix sentry release script [\#2317](https://github.com/hashicorp/terraform-cdk/pull/2317)
- chore: fix typo [\#2316](https://github.com/hashicorp/terraform-cdk/pull/2316)
- chore: offboard checks from PRs to main [\#2315](https://github.com/hashicorp/terraform-cdk/pull/2315)
- chore(docs): prepare for code samples in multiple languages [\#2314](https://github.com/hashicorp/terraform-cdk/pull/2314)
- chore: run CI more selectively [\#2313](https://github.com/hashicorp/terraform-cdk/pull/2313)
- chore: make feature flag tests more resilient to provider updates [\#2312](https://github.com/hashicorp/terraform-cdk/pull/2312)
- chore: additional potential speedup experiments for hcl2cdk unit tests [\#2311](https://github.com/hashicorp/terraform-cdk/pull/2311)
- chore(tests): enable go provider add tests [\#2308](https://github.com/hashicorp/terraform-cdk/pull/2308)
- chore: run linting and prettier as part of CI [\#2304](https://github.com/hashicorp/terraform-cdk/pull/2304)
- chore(docs): translate hcl-interop examples to c# [\#2288](https://github.com/hashicorp/terraform-cdk/pull/2288)
- chore: add workflow to update our github actions [\#2283](https://github.com/hashicorp/terraform-cdk/pull/2283)
- chore(docs): translate functions examples to c# [\#2277](https://github.com/hashicorp/terraform-cdk/pull/2277)
- chore(docs): translate data-sources examples to c# [\#2276](https://github.com/hashicorp/terraform-cdk/pull/2276)
- chore(docs): translate aspects example to c# [\#2273](https://github.com/hashicorp/terraform-cdk/pull/2273)
- chore(docs): translate all examples to python [\#2186](https://github.com/hashicorp/terraform-cdk/pull/2186)
- chore(docs): Translate Documentation Snippets for Java [\#2183](https://github.com/hashicorp/terraform-cdk/pull/2183)
- chore: make info level log a debug level one [\#2502](https://github.com/hashicorp/terraform-cdk/pull/2502)

### feat

- feat(examples): python upcloud server [\#2366](https://github.com/hashicorp/terraform-cdk/pull/2366)

### fix

- fix: pin yargs types version [\#2364](https://github.com/hashicorp/terraform-cdk/pull/2364)
- fix: Transition to planned state after cost estimation and policy checks with TFC/TFE [\#2360](https://github.com/hashicorp/terraform-cdk/pull/2360)
- fix(cli): don't fail with UsageError when determining whether a provider is installed as a pre-built provider [\#2348](https://github.com/hashicorp/terraform-cdk/pull/2348)
- fix: scoped packages need a publish config to be published to npm [\#2347](https://github.com/hashicorp/terraform-cdk/pull/2347)
- fix: scoped packages need a publish config to be published to npm [\#2346](https://github.com/hashicorp/terraform-cdk/pull/2346)
- fix(docs): fix header indentation causing no page contents sidebar for this page [\#2299](https://github.com/hashicorp/terraform-cdk/pull/2299)
- fix(hcl2json): don't overwrite crypto if it's set already [\#2282](https://github.com/hashicorp/terraform-cdk/pull/2282)
- fix: Graceful failures when using `cdktf` with non-admin tokens [\#2258](https://github.com/hashicorp/terraform-cdk/pull/2258)
- fix: Prevent any release jobs from triggering if no release is required [\#2158](https://github.com/hashicorp/terraform-cdk/pull/2158)

### refactor

- refactor(cli): parse json according to schema [\#2286](https://github.com/hashicorp/terraform-cdk/pull/2286)
- refactor: extract asset and constructs example into separate files [\#2275](https://github.com/hashicorp/terraform-cdk/pull/2275)
- refactor(cli): move cli library into seperate package [\#2253](https://github.com/hashicorp/terraform-cdk/pull/2253)

## 0.14.1

A broken import that only appeared in the bundled `cdktf-cli` that we publish broke the `0.14.0` release. This patch release fixes this.

### fix

- fix(provider-generator): fix cross package import which breaks the cdktf-cli release bundle [\#2302](https://github.com/hashicorp/terraform-cdk/pull/2302)

### chore

- chore: document authoring cdktf constructs [\#2287](https://github.com/hashicorp/terraform-cdk/pull/2287)

## 0.14.0

**Breaking changes**
Back in October, we [announced significant performance improvements with CDKTF version 0.13](https://www.hashicorp.com/blog/cdk-for-terraform-0-13-significantly-improves-performance). These improvements required breaking changes for which we provided backward-compatible provider bindings in version 0.13. As announced, the 0.12 (non-namespaced) provider bindings will no longer work starting with CDKTF 0.14. Refer to the [upgrade guide for 0.13](https://developer.hashicorp.com/terraform/cdktf/release/upgrade-guide-v0-13) to learn how to update your imports for these changes.

### feat

- feat(cli): add provider upgrade command [\#2202](https://github.com/hashicorp/terraform-cdk/pull/2202)
- feat(cli): Add option to select providers to add with init [\#2184](https://github.com/hashicorp/terraform-cdk/pull/2184)
- feat(cli): only re-generate provider bindings on get if necessary [\#2266](https://github.com/hashicorp/terraform-cdk/pull/2266)
- feat(lib): expose operators on their own API class [\#2292](https://github.com/hashicorp/terraform-cdk/pull/2292)
- feat(lib): Introduce `Token.nullValue()` that allows to pass null to Terraform configurations in languages other than TypeScript [\#2284](https://github.com/hashicorp/terraform-cdk/pull/2284)
- feat(cli): Automatically Update Locked Providers [\#2020](https://github.com/hashicorp/terraform-cdk/pull/2020)
- feat(lib): Added testing matchers for Providers [\#2154](https://github.com/hashicorp/terraform-cdk/pull/2154)
- feat(lib): adds failed process output to test matcher APIs #1953 [\#2196](https://github.com/hashicorp/terraform-cdk/pull/2196)

### fix

- fix(cli): do not check for version when DISABLE_VERSION_CHECK [\#2257](https://github.com/hashicorp/terraform-cdk/pull/2257)
- fix(docs): fix module code example [\#2256](https://github.com/hashicorp/terraform-cdk/pull/2256)
- fix(docs): fix links to pre-built provider repositories [\#2264](https://github.com/hashicorp/terraform-cdk/pull/2264)
- fix(docs): fix a couple of typos in stacks.mdx [\#2269](https://github.com/hashicorp/terraform-cdk/pull/2269)
- fix(examples): fix CI for Python examples [\#2291](https://github.com/hashicorp/terraform-cdk/pull/2291)
- fix: set global flag to be able to start search for code blocks at an index [\#2274](https://github.com/hashicorp/terraform-cdk/pull/2274)

### chore

- chore(docs): Add CDK for Terraform to page titles [\#2278](https://github.com/hashicorp/terraform-cdk/pull/2278)
- chore: document Python hash error in local development [\#2272](https://github.com/hashicorp/terraform-cdk/pull/2272)
- chore: document JSII debug flags in contribution guide [\#2271](https://github.com/hashicorp/terraform-cdk/pull/2271)
- chore: update LICENSE [\#2268](https://github.com/hashicorp/terraform-cdk/pull/2268)
- chore(cli): Prevent minification when watching cdktf-cli [\#2262](https://github.com/hashicorp/terraform-cdk/pull/2262)
- chore(lib): Add deprecation notices to backends that were deprecated in Terraform v1.2.3 and removed in TF 1.3 [\#2261](https://github.com/hashicorp/terraform-cdk/pull/2261)
- chore: adding mgarrell777 to docs codeowners to be notified for docs changes [\#2259](https://github.com/hashicorp/terraform-cdk/pull/2259)
- chore: add ecs-microservices example [\#2252](https://github.com/hashicorp/terraform-cdk/pull/2252)
- chore: sync version and changelog from the 0.13.3 backported release [\#2251](https://github.com/hashicorp/terraform-cdk/pull/2251)
- chore: install pre-built provider with exact version [\#2249](https://github.com/hashicorp/terraform-cdk/pull/2249)
- chore: cache examples and terraform plugins [\#2213](https://github.com/hashicorp/terraform-cdk/pull/2213)

## 0.13.3

### fix

- fix: Redact authorization header when error logging from TFC/TFE [\#2241](https://github.com/hashicorp/terraform-cdk/pull/2241)

## 0.13.2

### fix

- fix(provider-generator): don't require arrays wrapping variable / output declarations [\#2199](https://github.com/hashicorp/terraform-cdk/pull/2199)
- fix(cli): Use 'id' as argument name for all templates [\#2119](https://github.com/hashicorp/terraform-cdk/pull/2119)
- fix(cli): use a custom user-agent when talking to TFC [\#2210](https://github.com/hashicorp/terraform-cdk/pull/2210)
- fix(cli): Ignore local obj/ dir in C# template [\#2217](https://github.com/hashicorp/terraform-cdk/pull/2217)
- fix(deps): Use apt instead of yum, since base image is debian based now [\#2216](https://github.com/hashicorp/terraform-cdk/pull/2216)
- fix: correctly denote all of our redirects as temporary because they might change [\#2218](https://github.com/hashicorp/terraform-cdk/pull/2218)

### chore

- chore: Update Go to version 1.18 on windows workflows [\#2219](https://github.com/hashicorp/terraform-cdk/pull/2219)
- chore: Update Digital Team Files [\#2203](https://github.com/hashicorp/terraform-cdk/pull/2203)
- chore(cli): change url to pre-built providers to one we control [\#2181](https://github.com/hashicorp/terraform-cdk/pull/2181)
- chore(cli): Move things to src/ folder [\#2130](https://github.com/hashicorp/terraform-cdk/pull/2130)
- chore(deps): Update docker image to use new jsii/superchain tag [\#2214](https://github.com/hashicorp/terraform-cdk/pull/2214)
- chore(docs): rewrite internal redirects [\#2204](https://github.com/hashicorp/terraform-cdk/pull/2204)

### feat

- feat: add CODEOWNERS file for automatic PR review assignment [\#2212](https://github.com/hashicorp/terraform-cdk/pull/2212)

## 0.13.1

### feat

- feat(cli): Add support for terraform's parallelism flag [\#2107](https://github.com/hashicorp/terraform-cdk/pull/2107)
- feat: add redirect link to pre-built providers json file [\#2180](https://github.com/hashicorp/terraform-cdk/pull/2180)
- feat(cli): link to troubleshooting page for error [\#2192](https://github.com/hashicorp/terraform-cdk/pull/2192)

### fix

- fix(provider-generator): change Static resource class to StaticResource as their namespace 'static' is not valid in TypeScript re-exports [\#2168](https://github.com/hashicorp/terraform-cdk/pull/2168)
- fix(cli): dont wrap list terminal output [\#2188](https://github.com/hashicorp/terraform-cdk/pull/2188)
- fix(cli): handle missing package versions for non-npm packages [\#2177](https://github.com/hashicorp/terraform-cdk/pull/2177)
- fix(docs): Fix upgrade guide imports for Python [\#2171](https://github.com/hashicorp/terraform-cdk/pull/2171)
- fix(docs): update old config key [\#2195](https://github.com/hashicorp/terraform-cdk/pull/2195)

### chore

- chore: Update link to blogpost [\#2176](https://github.com/hashicorp/terraform-cdk/pull/2176)

## 0.13.0

**Breaking Changes**
Abbreviated version below, for a guide see [Upgrade Guide for 0.13](https://www.terraform.io/cdktf/release/upgrade-guide-v0-13).

0.13 includes performance improvements to generated providers. Instead of exporting a flat list of exports including all supported resources and data sources, we now export each construct and it's associated structures in their own namespace. Due to this, the way you import constructs from your CDKTF application will change. For more information regarding this release, and some of the reasonings behind the changes, please check out the [version 0.13 release post](https://cdk.tf/0.13).

#### Typescript

```typescript
// Before version 0.13
import { Container, Image, DockerProvider } from "@ckdtf/provider-docker";

// Version 0.13
import { Image } from "@cdktf/provider-docker/lib/image";
import { DockerProvider } from "@cdktf/provider-docker/lib/provider";
import { Container } from "@cdktf/provider-docker/lib/container";
```

#### Python

```python
# Before version 0.13
from cdktf_cdktf_provider_kubernetes.kubernetes import Namespace, Service, Deployment, KubernetesProvider

# Version 0.13
from cdktf_cdktf_provider_kubernetes.kubernetes.provider import KubernetesProvider
from cdktf_cdktf_provider_kubernetes.kubernetes.namespace import Namespace
from cdktf_cdktf_provider_kubernetes.kubernetes.deployment import Deployment
from cdktf_cdktf_provider_kubernetes.kubernetes.service import Service
```

#### Go

> **Note:** For Go projects, another important thing to note is that we've also moved our pre-built providers to the `cdktf` Github Organization. You can find more about that change [here](https://github.com/hashicorp/terraform-cdk/issues/2146).

```go
// Before version 0.13
import (
  "github.com/cdktf/cdktf-provider-azurerm-go/azurerm"
)

// Version 0.13
import (
  azurermprovider "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/provider"
  "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterface"
)
```

#### Java

```java
// Before version 0.13
import com.hashicorp.cdktf.providers.google.ComputeInstance;
import com.hashicorp.cdktf.providers.google.GoogleProvider;

// Version 0.13
import com.hashicorp.cdktf.providers.google.compute_instance.ComputeInstance;
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;
```

#### C\#

```csharp
// Before version 0.13
using azurerm;

// Version 0.13
using azurerm.Provider;
using azurerm.VirtualNetwork;
```

### feat

- feat(provider-generator): namespace every resource / data source / provider [\#2087](https://github.com/hashicorp/terraform-cdk/pull/2087)
- feat(provider-generator): Move generated files into their own directories [\#2153](https://github.com/hashicorp/terraform-cdk/pull/2153)

### fix

- fix(docs): Fix Aspects example [\#2152](https://github.com/hashicorp/terraform-cdk/pull/2152)

### chore

- chore: update documentation for version 0.13 release [\#2156](https://github.com/hashicorp/terraform-cdk/pull/2156)
- chore: Upgrade guide for 0.13 [\#2155](https://github.com/hashicorp/terraform-cdk/pull/2155)
- chore: Add version 0.13 upgrade guide to releases page [\#2161](https://github.com/hashicorp/terraform-cdk/pull/2161)
- chore: Add redirect to incoming github issue [\#2159](https://github.com/hashicorp/terraform-cdk/pull/2159)

## 0.12.3

**Breaking Changes**

A very minor change in the UX of the `cdktf get` command now generates the provider bindings for all languages (except TypeScript) in parallel. This speeds up the process in general, but on devices with limited memory it could lead to Out of Memory errors. If this happens you can limit the parallelism by providing the parallelism flag: `cdktf get --parallelism=1`.

### fix

- fix(provider-generator): Add special case in case resource is named 'object' [\#2138](https://github.com/hashicorp/terraform-cdk/pull/2138)
- fix(docs): Fix two small bugs in the code causing it to not compile [\#2128](https://github.com/hashicorp/terraform-cdk/pull/2128)
- fix(lib): Add missing config options for AzurermBackend [\#2127](https://github.com/hashicorp/terraform-cdk/pull/2127)
- fix(cli): Update require package in template [\#2118](https://github.com/hashicorp/terraform-cdk/pull/2118)
- fix: Change url of `pipenv` in log [\#2117](https://github.com/hashicorp/terraform-cdk/pull/2117)
- fix(cli): support using remote execution in Terraform Cloud with up to 500 MB (instead of 10MB) [\#2108](https://github.com/hashicorp/terraform-cdk/pull/2108)
- fix(docs): remove empty code block [\#2102](https://github.com/hashicorp/terraform-cdk/pull/2102)
- fix: update constructs and go runtime versions [\#2096](https://github.com/hashicorp/terraform-cdk/pull/2096)
- fix(cli): add sentry DSN in build process [\#2085](https://github.com/hashicorp/terraform-cdk/pull/2085)
- fix(docs): fix wrong command mentioned in TFC docs [\#2083](https://github.com/hashicorp/terraform-cdk/pull/2083)
- fix: let create changelog script use commit hashes from PRs instead of finding merge commit messages that may not always exist [\#2068](https://github.com/hashicorp/terraform-cdk/pull/2068)

### feat

- feat(cli): include language used in cdktf init telemetry event [\#2123](https://github.com/hashicorp/terraform-cdk/pull/2123)
- feat(cli): support generating provider bindings in parallel [\#2111](https://github.com/hashicorp/terraform-cdk/pull/2111)

### chore

- chore(cli): Use the npm package's repository field for generating go package name [\#2145](https://github.com/hashicorp/terraform-cdk/pull/2145)
- chore: npm-check-updates && yarn upgrade [\#2142](https://github.com/hashicorp/terraform-cdk/pull/2142)
- chore: split up unit tests per package [\#2122](https://github.com/hashicorp/terraform-cdk/pull/2122)
- chore: Update diagram with new provider count [\#2104](https://github.com/hashicorp/terraform-cdk/pull/2104)
- chore: change YT link to cut version [\#2103](https://github.com/hashicorp/terraform-cdk/pull/2103)
- chore(cli): Don't trim output for unstructured logs [\#2100](https://github.com/hashicorp/terraform-cdk/pull/2100)
- chore: only run expensive tasks on source code changes [\#2099](https://github.com/hashicorp/terraform-cdk/pull/2099)
- chore: Support building with Go 1.19 [\#2098](https://github.com/hashicorp/terraform-cdk/pull/2098)
- chore: fix go azure example [\#2092](https://github.com/hashicorp/terraform-cdk/pull/2092)
- chore: fix the project board TS errors [\#2091](https://github.com/hashicorp/terraform-cdk/pull/2091)
- chore: npm-check-updates && yarn upgrade [\#2090](https://github.com/hashicorp/terraform-cdk/pull/2090)
- chore: npm-check-updates && yarn upgrade [\#2077](https://github.com/hashicorp/terraform-cdk/pull/2077)
- chore(examples): clean up examples [\#2069](https://github.com/hashicorp/terraform-cdk/pull/2069)
- chore(docs): Check whether links work :) [\#2063](https://github.com/hashicorp/terraform-cdk/pull/2063)
- chore: ensure we have license header [\#1960](https://github.com/hashicorp/terraform-cdk/pull/1960)
- chore: measure and print memory consumption of build and synth steps for examples in CI [\#2060](https://github.com/hashicorp/terraform-cdk/pull/2060)
- chore: start running tests against TF 1.2.8 and drop running against 1.0.7 [\#2058](https://github.com/hashicorp/terraform-cdk/pull/2058)

## 0.12.2

**Breaking Changes**

A very minor change in the interface names for provisioners occured [to support them in JSII languages](https://github.com/hashicorp/terraform-cdk/pull/2042), renaming the following interfaces:

- `ISSHProvisionerConnection` to `SSHProvisionerConnection`
- `IWinrmProvisionerConnection` to `WinrmProvisionerConnection`
- `IFileProvisioner` to `FileProvisioner`
- `ILocalExecProvisioner` to `LocalExecProvisioner`
- `IRemoteExecProvisioner` to `RemoteExecProvisioner`

Another very minor change is that we now use the `CloudBackend` by default when running cdktf init. This requires Terraform >=1.1, therefore an error is thrown on `cdktf init` if you want to use Terraform Cloud and are on an older version. Already existing projects are not affected and you can use `cdktf init --local` and configure the `RemoteBackend` if you need to use an older version.

### feat

- feat(cli): throw an error if a user tries to create a new project with TFC on an old TF version [\#2062](https://github.com/hashicorp/terraform-cdk/pull/2062)
- feat: install time tool in Docker container to be able to use it for memory consumption tracking in tests [\#2059](https://github.com/hashicorp/terraform-cdk/pull/2059)
- feat: add Go port of TypeScript Google CloudRun example [\#2035](https://github.com/hashicorp/terraform-cdk/pull/2035)
- feat(lib): add support for cloud backend [\#1924](https://github.com/hashicorp/terraform-cdk/pull/1924)

### fix

- fix(provider-generator): use terraform get instead of init to download modules [\#2057](https://github.com/hashicorp/terraform-cdk/pull/2057)
- fix(lib): Add missing config options for S3Backend: skipRegionValidation, assumeRolePolicyArns, assumeRoleTags, and assumeRoleTransitiveTagKeys [\#2050](https://github.com/hashicorp/terraform-cdk/pull/2050)
- fix: support provisioners in JSII languages [\#2042](https://github.com/hashicorp/terraform-cdk/pull/2042)
- fix(hcl2json): add fs-extra to dependencies [\#2040](https://github.com/hashicorp/terraform-cdk/pull/2040)
- fix(lib): Improve error message when provider constructs are missing [\#2039](https://github.com/hashicorp/terraform-cdk/pull/2039)
- fix(cli): Make provider add command case insensitive for provider names [\#2038](https://github.com/hashicorp/terraform-cdk/pull/2038)
- fix(cli): run a speculative plan on diff [\#2033](https://github.com/hashicorp/terraform-cdk/pull/2033)

### chore

- chore(cli): remove red and magenta from colors for stack names [\#2064](https://github.com/hashicorp/terraform-cdk/pull/2064)
- chore: add link to hybrid module talk [\#2054](https://github.com/hashicorp/terraform-cdk/pull/2054)
- chore: make Terraform 1.2.8 available in Docker image [\#2051](https://github.com/hashicorp/terraform-cdk/pull/2051)
- chore: document updating the API documentation [\#2046](https://github.com/hashicorp/terraform-cdk/pull/2046)
- chore(docs): Remove positional language + fix style nits [\#2045](https://github.com/hashicorp/terraform-cdk/pull/2045)
- chore(lib): deprecate Resource in favor of Construct [\#2044](https://github.com/hashicorp/terraform-cdk/pull/2044)
- chore: update links in our youtube playlist examples [\#2043](https://github.com/hashicorp/terraform-cdk/pull/2043)
- chore: npm-check-updates && yarn upgrade [\#2025](https://github.com/hashicorp/terraform-cdk/pull/2025)
- chore: translate parts of the documentation [\#2011](https://github.com/hashicorp/terraform-cdk/pull/2011)

### refactor

- refactor: port example script to JS [\#2047](https://github.com/hashicorp/terraform-cdk/pull/2047)

## 0.12.1

### fix

- fix(cli): add major versions greater 1 to package name when installing pre-built providers for go [\#2002](https://github.com/hashicorp/terraform-cdk/pull/2002)
- fix(cli): Wait for other stacks to complete if one of them failed [\#1987](https://github.com/hashicorp/terraform-cdk/pull/1987)
- fix(cli): fix version detection for Java being a bit too optimistic about the package name [\#1995](https://github.com/hashicorp/terraform-cdk/pull/1995)
- fix(cli): Improve wording around starting from an existing Terraform project [\#1985](https://github.com/hashicorp/terraform-cdk/pull/1985)
- fix(tests): force local as Go now has pre-built providers [\#2005](https://github.com/hashicorp/terraform-cdk/pull/2005)
- fix(tests): as predicted, the test needs to be skipped for a bit of time [\#2004](https://github.com/hashicorp/terraform-cdk/pull/2004)
- fix(docs): fix aspects example not being valid TypeScript [\#1986](https://github.com/hashicorp/terraform-cdk/pull/1986)
- fix(docs): fix links by removing all links to the providers-and-resources page that does not exist anymore [\#2010](https://github.com/hashicorp/terraform-cdk/pull/2010)
- fix: don't lock state in tests [\#1990](https://github.com/hashicorp/terraform-cdk/pull/1990)
- fix: don't overwrite all `NODE_OPTIONS` [\#2009](https://github.com/hashicorp/terraform-cdk/pull/2009)

### chore

- chore: add vercel config for cdk.tf redirects page [\#2016](https://github.com/hashicorp/terraform-cdk/pull/2016)
- chore: add notes for how to clean the local dotnet cache [\#2022](https://github.com/hashicorp/terraform-cdk/pull/2022)
- chore: add issue template for filing bugs with a pre-built providers label [\#1983](https://github.com/hashicorp/terraform-cdk/pull/1983)
- chore: npm-check-updates && yarn upgrade [\#1984](https://github.com/hashicorp/terraform-cdk/pull/1984)
- chore: npm-check-updates && yarn upgrade [\#2007](https://github.com/hashicorp/terraform-cdk/pull/2007)

## 0.12.0

**Breaking Changes**

### `cdktf get` exits with 0 exit code when no provider / module specifications are found in the `cdktf.json`

Previously we would throw an error and exit with 1 if there were no provider or module specifications in the `cdktf.json` file. This can be inconvenient if `cdktf get` is part of a workflow.

### `Fn.merge` is split into `Fn.mergeLists` and `Fn.mergeMaps`

The Terraform `merge` function can merge both lists and maps, but this can cause [issues](https://github.com/hashicorp/terraform-cdk/issues/1653) when using the result in a typed language. Therefore we split it into `Fn.mergeLists` and `Fn.mergeMaps`, this means you need to change your cdktf programs code.

### Simplified interfaces of recursive attributes

The generated provider bindings are based on the Terraform schema which does not support recursion and hence uses a large, explicit structure instead. Previously this resulted in long names such as e.g. `Wafv2WebAclRuleStatementAndStatementStatementOrStatementStatementLabelMatchStatement`. In 0.12 we implemented a first rough detection for this underlying recursion which drastically reduced the amount of generated interfaces as they now are converted to recursive data structures themselves.
If you are currently using those types e.g. in a language like Java, you will need to change them to the new shorter names.

### feat

- feat(lib): Introduce Iterator and `for_each` to implement apply time iteration [\#1830](https://github.com/hashicorp/terraform-cdk/pull/1830)
- feat(lib): Introduce TerraformDynamicBlock to enable iterator usage on blocks [\#1882](https://github.com/hashicorp/terraform-cdk/pull/1882)
- feat(cli): support refresh only option for diff and deploy [\#1851](https://github.com/hashicorp/terraform-cdk/pull/1851)
- feat(docs): Add iterator docs page [\#1840](https://github.com/hashicorp/terraform-cdk/pull/1840)
- feat(docs): document FORCE_COLOR env var that allows disabling colored output [\#1917](https://github.com/hashicorp/terraform-cdk/pull/1917)
- feat(cli): plug provider add command in help printed after initializing a new cdktf project [\#1833](https://github.com/hashicorp/terraform-cdk/pull/1833)
- feat(lib): exposed testing matchers for other languages properly [\#1935](https://github.com/hashicorp/terraform-cdk/pull/1935)

### fix

- fix: Allow "all" as ignoreChanges lifecycle value [\#1848](https://github.com/hashicorp/terraform-cdk/pull/1848)
- fix: Fixed naming collision between resources of different providers [\#1870](https://github.com/hashicorp/terraform-cdk/pull/1870)
- fix: Small fix to the CONTRIBUTING.md [\#1887](https://github.com/hashicorp/terraform-cdk/pull/1887)
- fix(cli): increase default max memory for node process when running app command for synth [\#1915](https://github.com/hashicorp/terraform-cdk/pull/1915)
- fix(provider-generator): Meta arguments available for generated modules [\#1880](https://github.com/hashicorp/terraform-cdk/pull/1880)
- fix(provider-generator): replace dashes with underscores in module names for Go when generating bindings for Terraform modules [\#1928](https://github.com/hashicorp/terraform-cdk/pull/1928)
- fix(hcl2json): bundle wasm_exec used for building Go instead of looking for it at runtime [\#1954](https://github.com/hashicorp/terraform-cdk/pull/1954)
- fix(hcl2cdk): use the same attribute renaming function as in the provider generation [\#1842](https://github.com/hashicorp/terraform-cdk/pull/1842)
- fix(hcl2cdk): maps should not be wrapped in arrays [\#1838](https://github.com/hashicorp/terraform-cdk/pull/1838)

### chore

- chore: document CI flag [\#1888](https://github.com/hashicorp/terraform-cdk/pull/1888)
- chore: modernize example output [\#1914](https://github.com/hashicorp/terraform-cdk/pull/1914)
- chore: pin provider version [\#1896](https://github.com/hashicorp/terraform-cdk/pull/1896)
- chore: update prerequisites [\#1894](https://github.com/hashicorp/terraform-cdk/pull/1894)
- chore(tests): Re-enable Windows Provider Add C# Test [\#1879](https://github.com/hashicorp/terraform-cdk/pull/1879)
- chore: add tfe test as pre-step to releasing [\#1872](https://github.com/hashicorp/terraform-cdk/pull/1872)
- chore: split provider tests into one test per provider [\#1862](https://github.com/hashicorp/terraform-cdk/pull/1862)
- chore: reuse integration test definition for releases [\#1859](https://github.com/hashicorp/terraform-cdk/pull/1859)
- chore: fix broken link in readme [\#1845](https://github.com/hashicorp/terraform-cdk/pull/1845)
- chore: npm-check-updates && yarn upgrade [\#1706](https://github.com/hashicorp/terraform-cdk/pull/1706)

## 0.11.2

### feat

- feat(cli): support custom Terraform Enterprise instances [\#1857](https://github.com/hashicorp/terraform-cdk/pull/1857)
- feat(hcl2json): expose hcl expression parser [\#1794](https://github.com/hashicorp/terraform-cdk/pull/1794)

### chore

- chore: synthesize all boolean as iresolvable tests [\#1849](https://github.com/hashicorp/terraform-cdk/pull/1849)
- chore(docs): Fix Environment Variables and Best Practices [\#1839](https://github.com/hashicorp/terraform-cdk/pull/1839)

## 0.11.1

### fix

- fix(cli): Fix package version check on Windows [\#1831](https://github.com/hashicorp/terraform-cdk/pull/1831)
- fix(docs): fix code blocks in "create and deploy" documentation [\#1826](https://github.com/hashicorp/terraform-cdk/pull/1826)
- fix(release): update changelog [\#1824](https://github.com/hashicorp/terraform-cdk/pull/1824)

### chore

- chore(cli): filter usage errors from error reporting [\#1828](https://github.com/hashicorp/terraform-cdk/pull/1828)
- chore: document debug command [\#1812](https://github.com/hashicorp/terraform-cdk/pull/1812)
- chore: add best practice page [\#1790](https://github.com/hashicorp/terraform-cdk/pull/1790)

## 0.11.0

**Breaking Changes**

Abbreviated version below, for a guide see [Upgrade Guide for 0.11](./docs/upgrade-guide/upgrading-to-0.11.md)

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

### Use ComplexLists and ComplexMaps for complex assignable properties [#1725](https://github.com/hashicorp/terraform-cdk/pull/1725)

Assignable properties of the form `Object[]` or `{ [key: string]: Object }` no longer have setters; they instead have `putX` methods. The getter return type is also changed to be a derivative of either `ComplexList` or `ComplexMap`.

### fix

- fix(docs): Make sure code example works [\#1807](https://github.com/hashicorp/terraform-cdk/pull/1807)
- fix(lib): Delay complex object fqn so that override id can still be used [\#1793](https://github.com/hashicorp/terraform-cdk/pull/1793)
- fix(provider-generator): strictly adhere to the provider schema [\#1792](https://github.com/hashicorp/terraform-cdk/pull/1792)
- fix: Avoid unstable fqn for TerraformElements [\#1779](https://github.com/hashicorp/terraform-cdk/pull/1779)
- fix(cli): Respect CDKTF_HOME environment variable for checkpoint telemetry [\#1778](https://github.com/hashicorp/terraform-cdk/pull/1778)
- fix(docs): remove outdated docs from the previous watch implementation [\#1768](https://github.com/hashicorp/terraform-cdk/pull/1768)
- fix(cli): throw an error if a stack contains a whitespace [\#1750](https://github.com/hashicorp/terraform-cdk/pull/1750)

### feat

- feat(lib): add docstrings to gcs/http/local backend resources [\#1803](https://github.com/hashicorp/terraform-cdk/pull/1803)
- feat(lib): add a warning about id fields [\#1802](https://github.com/hashicorp/terraform-cdk/pull/1802)
- feat(docs): add guidance around secrets and warn that those values might be inlined in the generated Terraform config [\#1801](https://github.com/hashicorp/terraform-cdk/pull/1801)
- feat(lib): add docstrings to cos/etcd/etcdv3 backend resources [\#1783](https://github.com/hashicorp/terraform-cdk/pull/1783)
- feat(lib): add docstrings to artifactory/azurerm/consul backend resources [\#1781](https://github.com/hashicorp/terraform-cdk/pull/1781)
- feat(lib): add docstrings to S3 backend resource [\#1780](https://github.com/hashicorp/terraform-cdk/pull/1780)
- feat(release): support running releases on backport-release branches besides only on main [\#1770](https://github.com/hashicorp/terraform-cdk/pull/1770)
- feat(cli): add cdktf provider add command [\#1761](https://github.com/hashicorp/terraform-cdk/pull/1761)
- feat(provider-generator): Use `ComplexList` for any complex list [\#1725](https://github.com/hashicorp/terraform-cdk/pull/1725)

### test

- test(lib): ensure list mapper does not fail when passed IResolvables [\#1791](https://github.com/hashicorp/terraform-cdk/pull/1791)

### chore

- chore: group needs to be prefixed per type [\#1813](https://github.com/hashicorp/terraform-cdk/pull/1813)
- chore: limit CI concurrency to the latest pushed commits [\#1810](https://github.com/hashicorp/terraform-cdk/pull/1810)
- chore(cli): add sentry error reporting [\#1809](https://github.com/hashicorp/terraform-cdk/pull/1809)
- chore: document computed map reference documentation [\#1775](https://github.com/hashicorp/terraform-cdk/pull/1775)
- chore(release): Update changelog to contain backported release for 0.10.4 [\#1773](https://github.com/hashicorp/terraform-cdk/pull/1773)
- chore(docs): document how to debug cdktf programs [\#1758](https://github.com/hashicorp/terraform-cdk/pull/1758)

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

- `cdktf init` was broken on Windows [\#198](https://github.com/hashicorp/terraform-cd
