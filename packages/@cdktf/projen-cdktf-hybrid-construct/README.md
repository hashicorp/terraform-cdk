# Projen-CDKTF-Hybrid-Construct

Projen template for CDKTF Constructs that should also be used as Terraform Modules and for republishing Terraform Modules as Constructs.

## Usage

### `HybridModule`

If you want to write a CDKTF construct and also publish it as a Terraform Module you can use the `HybridModule` template.

You can initialize such a project using `npx projen new --from @cdktf/projen-cdktf-hybrid-construct hybrid-module`.

A configutation might look like this:

```js
const { HybridModule } = require("@cdktf/projen-cdktf-hybrid-construct");

const project = new HybridModule({
  // The name of the module & repository need to start with terraform-cdk-
  name: "terraform-cdk-my-new-hybrid-construct",
  repositoryUrl:
    "github.com/DanielMSchmidt/terraform-cdk-my-new-hybrid-construct",

  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",

  // If enabled an example folder with terraform code will be created
  terraformExamples: {
    enabled: true,
    folder: "terraform",
    // The configuration to add to the example terraform file
    providerConfig: `
        terraform {
          required_providers {
            aws = {
              source  = "hashicorp/aws"
              version = "~> 3.74"
            }
          }
          # Terraform binary version constraint
          required_version = "~> 1.1.0"
        }
        
        
        provider "aws" {
          region = "eu-central-1"
        }
        `,
  },

  // If enabled a constructs example folder will be created
  constructExamples: {
    enabled: true,
    folder: "construct-examples",
  },
});
project.synth();
```

### `TerraformModule`

If you want to republish an existing Terraform module as a CDKTF construct or if you want to repackage them with an easier to use API you can use the `TerraformModule` template.

You can initialize such a project using `npx projen new --from @cdktf/projen-cdktf-hybrid-construct terraform-module`.

A configutation might look like this:

```js
const { TerraformModule } = require("@cdktf/projen-cdktf-hybrid-construct");

const project = new TerraformModule({
  name: "my-module",
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  repositoryUrl: "github.com/DanielMSchmidt/my-module",

  terraformModules: [
    {
      name: "eks",
      source: "terraform-aws-modules/eks/aws",
      version: "~> 18.0",
    },
    {
      name: "eks-managed-nodegroup",
      source: "terraform-aws-modules/eks/aws//modules/eks-managed-node-group",
      version: "~> 18.0",
    },
  ],
});

project.synth();
```

## Publishing

### Open Source

We have a helper method for easy configuration, but there are still some manual steps required.

```js
const {
  HybridModule,
  publishToRegistries,
} = require("@cdktf/projen-cdktf-hybrid-construct");

const project = new HybridModule({
  // ... all the other options
  ...publishToRegistries({
    name: "my-new-hybrid-construct",
    namespace: "my-org",
    registries: ["npm", "pypi", "nuget", "maven"],
  }),
});
```

#### Terraform

1. [Sign in at the registry](https://registry.terraform.io/sign-in)
2. [Select your repository](https://registry.terraform.io/github/create) and create the module

Please make sure your repository name starts with `terraform-cdk-`.

#### npm (Typescript)

1. Create an account at [npmjs.com](https://npmjs.com/)
2. Create an [automation token](https://docs.npmjs.com/creating-and-viewing-access-tokens) on npm
3. Create a [GitHub Action Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with the name `NPM_TOKEN` and the value of the token

#### pypi (Python)

1. Create an account at [pypi.org](https://pypi.org/)
2. Create an [API token](https://pypi.org/help/#apitoken) on pypi
3. Create a [GitHub Action Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with the name `TWINE_USERNAME` and the value `__token__` and a second one with the name `TWINE_PASSWORD` and the value of the token
4. Set the `publishToPypi` section in the options of `HybridModule` or `TerraformModule` (or use the helper mentioned above)

```js
const name = "name-of-my-hybrid-construct";
new HybridModule({
  name,
  // ... other options
  publishToPypi: {
    distName: name,
    module: name.replace(/-/g, "_"),
  },
});
```

#### Maven (Java)

1. [Create a Sonatype account and repository](https://central.sonatype.org/publish/publish-guide/#introduction)
2. Create [GitHub Action Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to configure maven:
   - `MAVEN_USERNAME`
   - `MAVEN_PASSWORD`
   - `MAVEN_STAGING_PROFILE_ID`
   - `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`
   - `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`
3. Setup the `publishToMaven` section in the options of `HybridModule` or `TerraformModule` (or use the helper mentioned above)

```js
const githubNamespace = "my-org";
const name = "name-of-my-hybrid-construct";
new HybridModule({
  name,
  // ... other options
  publishToMaven: {
    javaPackage: name.replace(/-/g, "_"),
    mavenGroupId: `com.${githubNamespace}`,
    mavenArtifactId: name,
  },
});
```

#### NuGet (C#)

1. [Create a NuGet account](https://www.nuget.org/users/account/LogOn) (you might need to create a Microsoft Account if you don't have one)
2. [Create API keys](https://docs.microsoft.com/en-us/nuget/nuget-org/publish-a-package#create-api-keys)
3. Create a [GitHub Action Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with the name `NUGET_API_KEY` and the value of the token
4. Setup the `publishToNuget` section in the options of `HybridModule` or `TerraformModule` (or use the helper mentioned above)

```js
const githubNamespace = "my-org";
const name = "name-of-my-hybrid-construct";

new HybridModule({
  name,
  // ... other options
  publishToNuget: {
    dotNetNamespace: `MyOrg.NameOfMyHybridConstruct`,
    packageId: `MyOrg.NameOfMyHybridConstruct`,
  },
});
```

### Github Packages

We have a helper method for easy configuration, no extra steps needed:

```js
const {
  HybridModule,
  publishToGithubPackages,
} = require("projen-cdktf-hybrid-construct");

const project = new HybridModule({
  // ... all the other options
  ...publishToGithubPackages({
    name: "my-new-hybrid-construct",
    namespace: "my-org",
    registries: ["npm", "maven"], // pypi and nuget are not yet supported
  }),
});
```

### Artifactory

We have a helper method for easy configuration, but there are also some manual steps required.

```js
const {
  HybridModule,
  publishToGithubPackages,
} = require("projen-cdktf-hybrid-construct");

const project = new HybridModule({
  // ... all the other options
  ...publishToGithubPackages({
    name: "my-new-hybrid-construct",
    namespace: "my-org",
    registries: ["npm", "pypi", "nuget"], // maven is currently not supported, PRs welcome
    artifactoryApiUrl: "https://artifactory.my-org.com/api/",
    artifactoryRepository: "my-repo", // needs to be the same across all registries, defaults to namespace so "my-org" in this case
  }),
});
```

#### Terraform

You can find more information about publishing Terraform Modules to Artifactory [here](https://www.jfrog.com/confluence/display/JFROG/Terraform+Registry#TerraformRegistry-SettingupaLocalModule/ProviderRegistry).

#### npm (Typescript)

1. [Create a virtual npm registry](https://www.jfrog.com/confluence/display/JFROG/npm+Registry#npmRegistry-VirtualnpmRegistry)
2. [Authenticate against artifactory to get a token](https://www.jfrog.com/confluence/display/JFROG/npm+Registry#npmRegistry-AuthenticatingthenpmClient)
3. Create a [GitHub Action Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with the name `NPM_TOKEN` and the value of the token

#### pypi (Python)

1. Create a [local repository](https://www.jfrog.com/confluence/display/JFROG/PyPI+Repositories#PyPIRepositories-LocalRepositories)
2. Create a [GitHub Action Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) with the name `TWINE_USERNAME` and the artifactory user name and a second one with the name `TWINE_PASSWORD` and the artifactory password
