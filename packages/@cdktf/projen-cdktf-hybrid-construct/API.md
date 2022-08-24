# API Reference <a name="API Reference" id="api-reference"></a>

## Structs <a name="Structs" id="Structs"></a>

### ConstructExamplesOption <a name="ConstructExamplesOption" id="projen-cdktf-hybrid-construct.ConstructExamplesOption"></a>

#### Initializer <a name="Initializer" id="projen-cdktf-hybrid-construct.ConstructExamplesOption.Initializer"></a>

```typescript
import { ConstructExamplesOption } from 'projen-cdktf-hybrid-construct'

const constructExamplesOption: ConstructExamplesOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                   | **Type**             | **Description**   |
| ---------------------------------------------------------------------------------------------------------- | -------------------- | ----------------- |
| <code><a href="#projen-cdktf-hybrid-construct.ConstructExamplesOption.property.enabled">enabled</a></code> | <code>boolean</code> | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.ConstructExamplesOption.property.folder">folder</a></code>   | <code>string</code>  | _No description._ |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="projen-cdktf-hybrid-construct.ConstructExamplesOption.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- _Type:_ boolean

---

##### `folder`<sup>Optional</sup> <a name="folder" id="projen-cdktf-hybrid-construct.ConstructExamplesOption.property.folder"></a>

```typescript
public readonly folder: string;
```

- _Type:_ string

---

### HybridModuleOptions <a name="HybridModuleOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions"></a>

#### Initializer <a name="Initializer" id="projen-cdktf-hybrid-construct.HybridModuleOptions.Initializer"></a>

```typescript
import { HybridModuleOptions } from 'projen-cdktf-hybrid-construct'

const hybridModuleOptions: HybridModuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                       | **Type**                                                                                                  | **Description**                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.name">name</a></code>                                               | <code>string</code>                                                                                       | This is the name of your project.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.logging">logging</a></code>                                         | <code>projen.LoggerOptions</code>                                                                         | Configure logging options such as verbosity.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.outdir">outdir</a></code>                                           | <code>string</code>                                                                                       | The root directory of the project.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.parent">parent</a></code>                                           | <code>projen.Project</code>                                                                               | The parent project, if this project is part of a bigger project.                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenCommand">projenCommand</a></code>                             | <code>string</code>                                                                                       | The shell command to use in order to run the projen CLI.                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJson">projenrcJson</a></code>                               | <code>boolean</code>                                                                                      | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code>                 | <code>projen.ProjenrcOptions</code>                                                                       | Options for .projenrc.json.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.renovatebot">renovatebot</a></code>                                 | <code>boolean</code>                                                                                      | Use renovatebot to handle dependency upgrades.                                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.renovatebotOptions">renovatebotOptions</a></code>                   | <code>projen.RenovatebotOptions</code>                                                                    | Options for renovatebot.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoApproveOptions">autoApproveOptions</a></code>                   | <code>projen.github.AutoApproveOptions</code>                                                             | Enable and configure the 'auto approve' workflow.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoMerge">autoMerge</a></code>                                     | <code>boolean</code>                                                                                      | Enable automatic merging on GitHub.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoMergeOptions">autoMergeOptions</a></code>                       | <code>projen.github.AutoMergeOptions</code>                                                               | Configure options for automatic merging on GitHub.                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.clobber">clobber</a></code>                                         | <code>boolean</code>                                                                                      | Add a `clobber` task which resets the repo to origin.                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.devContainer">devContainer</a></code>                               | <code>boolean</code>                                                                                      | Add a VSCode development environment (used for GitHub Codespaces).                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.github">github</a></code>                                           | <code>boolean</code>                                                                                      | Enable GitHub integration.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.githubOptions">githubOptions</a></code>                             | <code>projen.github.GitHubOptions</code>                                                                  | Options for GitHub integration.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.gitpod">gitpod</a></code>                                           | <code>boolean</code>                                                                                      | Add a Gitpod development environment.                                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.mergify">mergify</a></code>                                         | <code>boolean</code>                                                                                      | Whether mergify should be enabled on this repository or not.                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.mergifyOptions">mergifyOptions</a></code>                           | <code>projen.github.MergifyOptions</code>                                                                 | Options for mergify.                                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projectType">projectType</a></code>                                 | <code>projen.ProjectType</code>                                                                           | Which type of project this is (library/app).                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenCredentials">projenCredentials</a></code>                     | <code>projen.github.GithubCredentials</code>                                                              | Choose a method of providing GitHub API access for projen workflows.                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenTokenSecret">projenTokenSecret</a></code>                     | <code>string</code>                                                                                       | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.readme">readme</a></code>                                           | <code>projen.SampleReadmeProps</code>                                                                     | The README setup.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.stale">stale</a></code>                                             | <code>boolean</code>                                                                                      | Auto-close of stale issues and pull request.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.staleOptions">staleOptions</a></code>                               | <code>projen.github.StaleOptions</code>                                                                   | Auto-close stale issues and pull requests.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.vscode">vscode</a></code>                                           | <code>boolean</code>                                                                                      | Enable VSCode integration.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code>       | <code>boolean</code>                                                                                      | Allow the project to include `peerDependencies` and `bundledDependencies`.                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorEmail">authorEmail</a></code>                                 | <code>string</code>                                                                                       | Author's e-mail.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorName">authorName</a></code>                                   | <code>string</code>                                                                                       | Author's name.                                                                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorOrganization">authorOrganization</a></code>                   | <code>boolean</code>                                                                                      | Author's Organization.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorUrl">authorUrl</a></code>                                     | <code>string</code>                                                                                       | Author's URL / Website.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoDetectBin">autoDetectBin</a></code>                             | <code>boolean</code>                                                                                      | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.bin">bin</a></code>                                                 | <code>{[ key: string ]: string}</code>                                                                    | Binary programs vended with your module.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.bugsEmail">bugsEmail</a></code>                                     | <code>string</code>                                                                                       | The email address to which issues should be reported.                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.bugsUrl">bugsUrl</a></code>                                         | <code>string</code>                                                                                       | The url to your project's issue tracker.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.bundledDeps">bundledDeps</a></code>                                 | <code>string[]</code>                                                                                     | List of dependencies to bundle into this module.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeArtifactOptions">codeArtifactOptions</a></code>                 | <code>projen.javascript.CodeArtifactOptions</code>                                                        | Options for npm packages using AWS CodeArtifact.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.deps">deps</a></code>                                               | <code>string[]</code>                                                                                     | Runtime dependencies of this module.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.description">description</a></code>                                 | <code>string</code>                                                                                       | The description is just a string that helps people understand the purpose of the package.                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.devDeps">devDeps</a></code>                                         | <code>string[]</code>                                                                                     | Build dependencies for this module.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.entrypoint">entrypoint</a></code>                                   | <code>string</code>                                                                                       | Module entrypoint (`main` in `package.json`).                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.homepage">homepage</a></code>                                       | <code>string</code>                                                                                       | Package's Homepage / Website.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.keywords">keywords</a></code>                                       | <code>string[]</code>                                                                                     | Keywords to include in `package.json`.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.license">license</a></code>                                         | <code>string</code>                                                                                       | License's SPDX identifier.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.licensed">licensed</a></code>                                       | <code>boolean</code>                                                                                      | Indicates if a license should be added.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.maxNodeVersion">maxNodeVersion</a></code>                           | <code>string</code>                                                                                       | Minimum node.js version to require via `engines` (inclusive).                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.minNodeVersion">minNodeVersion</a></code>                           | <code>string</code>                                                                                       | Minimum Node.js version to require via package.json `engines` (inclusive).                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmAccess">npmAccess</a></code>                                     | <code>projen.javascript.NpmAccess</code>                                                                  | Access level of the npm package.                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmRegistry">npmRegistry</a></code>                                 | <code>string</code>                                                                                       | The host name of the npm registry to publish to.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmRegistryUrl">npmRegistryUrl</a></code>                           | <code>string</code>                                                                                       | The base URL of the npm package registry.                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmTokenSecret">npmTokenSecret</a></code>                           | <code>string</code>                                                                                       | GitHub secret which contains the NPM token to use when publishing packages.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.packageManager">packageManager</a></code>                           | <code>projen.javascript.NodePackageManager</code>                                                         | The Node Package Manager used to execute scripts.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.packageName">packageName</a></code>                                 | <code>string</code>                                                                                       | The "name" in package.json.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.peerDependencyOptions">peerDependencyOptions</a></code>             | <code>projen.javascript.PeerDependencyOptions</code>                                                      | Options for `peerDeps`.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.peerDeps">peerDeps</a></code>                                       | <code>string[]</code>                                                                                     | Peer dependencies for this module.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.repository">repository</a></code>                                   | <code>string</code>                                                                                       | The repository is the location where the actual code for your package lives.                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.repositoryDirectory">repositoryDirectory</a></code>                 | <code>string</code>                                                                                       | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code>             | <code>projen.javascript.ScopedPackagesOptions[]</code>                                                    | Options for privately hosted scoped packages.                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.scripts">scripts</a></code>                                         | <code>{[ key: string ]: string}</code>                                                                    | npm scripts to include.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.stability">stability</a></code>                                     | <code>string</code>                                                                                       | Package's Stability.                                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code>                   | <code>string</code>                                                                                       | Version requirement of `publib` which is used to publish modules to npm.                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.majorVersion">majorVersion</a></code>                               | <code>number</code>                                                                                       | Major version to release from the default branch.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmDistTag">npmDistTag</a></code>                                   | <code>string</code>                                                                                       | The npmDistTag to use when publishing from the default branch.                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.postBuildSteps">postBuildSteps</a></code>                           | <code>projen.github.workflows.JobStep[]</code>                                                            | Steps to execute after build as part of the release workflow.                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.prerelease">prerelease</a></code>                                   | <code>string</code>                                                                                       | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishDryRun">publishDryRun</a></code>                             | <code>boolean</code>                                                                                      | Instead of actually publishing to package managers, just print the publishing command.                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishTasks">publishTasks</a></code>                               | <code>boolean</code>                                                                                      | Define publishing tasks that can be executed manually as well as workflows.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseBranches">releaseBranches</a></code>                         | <code>{[ key: string ]: projen.release.BranchOptions}</code>                                              | Defines additional release branches.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseEveryCommit">releaseEveryCommit</a></code>                   | <code>boolean</code>                                                                                      | Automatically release new versions every commit to one of branches in `releaseBranches`.                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseFailureIssue">releaseFailureIssue</a></code>                 | <code>boolean</code>                                                                                      | Create a github issue on every failed publishing task.                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code>       | <code>string</code>                                                                                       | The label to apply to issues indicating publish failures.                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseSchedule">releaseSchedule</a></code>                         | <code>string</code>                                                                                       | CRON schedule to trigger new releases.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseTagPrefix">releaseTagPrefix</a></code>                       | <code>string</code>                                                                                       | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseTrigger">releaseTrigger</a></code>                           | <code>projen.release.ReleaseTrigger</code>                                                                | The release trigger to use.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflowName">releaseWorkflowName</a></code>                 | <code>string</code>                                                                                       | The name of the default release workflow.                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code>     | <code>projen.github.workflows.JobStep[]</code>                                                            | A set of workflow steps to execute in order to setup the workflow container.                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.versionrcOptions">versionrcOptions</a></code>                       | <code>{[ key: string ]: any}</code>                                                                       | Custom configuration used when creating changelog with standard-version package.                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowContainerImage">workflowContainerImage</a></code>           | <code>string</code>                                                                                       | Container image to use for GitHub workflows.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowRunsOn">workflowRunsOn</a></code>                           | <code>string[]</code>                                                                                     | Github Runner selection labels.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code>               | <code>string</code>                                                                                       | The name of the main release branch.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.artifactsDirectory">artifactsDirectory</a></code>                   | <code>string</code>                                                                                       | A directory which will contain build artifacts.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code>                 | <code>boolean</code>                                                                                      | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.buildWorkflow">buildWorkflow</a></code>                             | <code>boolean</code>                                                                                      | Define a GitHub workflow for building PRs.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code>             | <code>projen.github.workflows.Triggers</code>                                                             | Build workflow triggers.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.bundlerOptions">bundlerOptions</a></code>                           | <code>projen.javascript.BundlerOptions</code>                                                             | Options for `Bundler`.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeCov">codeCov</a></code>                                         | <code>boolean</code>                                                                                      | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code>                   | <code>string</code>                                                                                       | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.copyrightOwner">copyrightOwner</a></code>                           | <code>string</code>                                                                                       | License copyright owner.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.copyrightPeriod">copyrightPeriod</a></code>                         | <code>string</code>                                                                                       | The copyright years to put in the LICENSE file.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.dependabot">dependabot</a></code>                                   | <code>boolean</code>                                                                                      | Use dependabot to handle dependency upgrades.                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.dependabotOptions">dependabotOptions</a></code>                     | <code>projen.github.DependabotOptions</code>                                                              | Options for dependabot.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.depsUpgrade">depsUpgrade</a></code>                                 | <code>boolean</code>                                                                                      | Use github workflows to handle dependency upgrades.                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code>                   | <code>projen.javascript.UpgradeDependenciesOptions</code>                                                 | Options for `UpgradeDependencies`.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.gitignore">gitignore</a></code>                                     | <code>string[]</code>                                                                                     | Additional entries to .gitignore.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.jest">jest</a></code>                                               | <code>boolean</code>                                                                                      | Setup jest unit tests.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.jestOptions">jestOptions</a></code>                                 | <code>projen.javascript.JestOptions</code>                                                                | Jest options.                                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.mutableBuild">mutableBuild</a></code>                               | <code>boolean</code>                                                                                      | Automatically update files modified during builds to pull-request branches.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmignore">npmignore</a></code>                                     | <code>string[]</code>                                                                                     | Additional entries to .npmignore.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmignoreEnabled">npmignoreEnabled</a></code>                       | <code>boolean</code>                                                                                      | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.package">package</a></code>                                         | <code>boolean</code>                                                                                      | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.prettier">prettier</a></code>                                       | <code>boolean</code>                                                                                      | Setup prettier.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.prettierOptions">prettierOptions</a></code>                         | <code>projen.javascript.PrettierOptions</code>                                                            | Prettier options.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenDevDependency">projenDevDependency</a></code>                 | <code>boolean</code>                                                                                      | Indicates of "projen" should be installed as a devDependency.                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJs">projenrcJs</a></code>                                   | <code>boolean</code>                                                                                      | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJsOptions">projenrcJsOptions</a></code>                     | <code>projen.javascript.ProjenrcOptions</code>                                                            | Options for .projenrc.js.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenVersion">projenVersion</a></code>                             | <code>string</code>                                                                                       | Version of projen to install.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.pullRequestTemplate">pullRequestTemplate</a></code>                 | <code>boolean</code>                                                                                      | Include a GitHub pull request template.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code>                                                                                     | The contents of the pull request template.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.release">release</a></code>                                         | <code>boolean</code>                                                                                      | Add release management to this project.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseToNpm">releaseToNpm</a></code>                               | <code>boolean</code>                                                                                      | Automatically release to npm when new versions are introduced.                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflow">releaseWorkflow</a></code>                         | <code>boolean</code>                                                                                      | DEPRECATED: renamed to `release`.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code>           | <code>projen.github.workflows.JobStep[]</code>                                                            | Workflow steps to use in order to bootstrap this repo.                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowGitIdentity">workflowGitIdentity</a></code>                 | <code>projen.github.GitIdentity</code>                                                                    | The git identity to use in workflows.                                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowNodeVersion">workflowNodeVersion</a></code>                 | <code>string</code>                                                                                       | The node version to use in GitHub workflows.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.disableTsconfig">disableTsconfig</a></code>                         | <code>boolean</code>                                                                                      | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.docgen">docgen</a></code>                                           | <code>boolean</code>                                                                                      | Docgen by Typedoc.                                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.docsDirectory">docsDirectory</a></code>                             | <code>string</code>                                                                                       | Docs directory.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.entrypointTypes">entrypointTypes</a></code>                         | <code>string</code>                                                                                       | The .d.ts file that includes the type declarations for this module.                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.eslint">eslint</a></code>                                           | <code>boolean</code>                                                                                      | Setup eslint.                                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.eslintOptions">eslintOptions</a></code>                             | <code>projen.javascript.EslintOptions</code>                                                              | Eslint options.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.libdir">libdir</a></code>                                           | <code>string</code>                                                                                       | Typescript artifacts output directory.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcTs">projenrcTs</a></code>                                   | <code>boolean</code>                                                                                      | Use TypeScript for your projenrc file (`.projenrc.ts`).                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcTsOptions">projenrcTsOptions</a></code>                     | <code>projen.typescript.ProjenrcOptions</code>                                                            | Options for .projenrc.ts.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.sampleCode">sampleCode</a></code>                                   | <code>boolean</code>                                                                                      | Generate one-time sample in `src/` and `test/` if there are no files there.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.srcdir">srcdir</a></code>                                           | <code>string</code>                                                                                       | Typescript sources directory.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.testdir">testdir</a></code>                                         | <code>string</code>                                                                                       | Jest tests directory. Tests files should be named `xxx.test.ts`.                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfig">tsconfig</a></code>                                       | <code>projen.javascript.TypescriptConfigOptions</code>                                                    | Custom TSConfig.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfigDev">tsconfigDev</a></code>                                 | <code>projen.javascript.TypescriptConfigOptions</code>                                                    | Custom tsconfig options for the development tsconfig.json file (used for testing).                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfigDevFile">tsconfigDevFile</a></code>                         | <code>string</code>                                                                                       | The name of the development tsconfig.json file.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.typescriptVersion">typescriptVersion</a></code>                     | <code>string</code>                                                                                       | TypeScript version to use.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.author">author</a></code>                                           | <code>string</code>                                                                                       | The name of the library author.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorAddress">authorAddress</a></code>                             | <code>string</code>                                                                                       | Email or URL of the library author.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.repositoryUrl">repositoryUrl</a></code>                             | <code>string</code>                                                                                       | Git repository URL.                                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.compat">compat</a></code>                                           | <code>boolean</code>                                                                                      | Automatically run API compatibility test against the latest version published to npm after compilation.                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.compatIgnore">compatIgnore</a></code>                               | <code>string</code>                                                                                       | Name of the ignore file for API compatibility tests.                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.docgenFilePath">docgenFilePath</a></code>                           | <code>string</code>                                                                                       | File path for generated docs.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.dotnet">dotnet</a></code>                                           | <code>projen.cdk.JsiiDotNetTarget</code>                                                                  | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.excludeTypescript">excludeTypescript</a></code>                     | <code>string[]</code>                                                                                     | Accepts a list of glob patterns.                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToGo">publishToGo</a></code>                                 | <code>projen.cdk.JsiiGoTarget</code>                                                                      | Publish Go bindings to a git repository.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToMaven">publishToMaven</a></code>                           | <code>projen.cdk.JsiiJavaTarget</code>                                                                    | Publish to maven.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToNuget">publishToNuget</a></code>                           | <code>projen.cdk.JsiiDotNetTarget</code>                                                                  | Publish to NuGet.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToPypi">publishToPypi</a></code>                             | <code>projen.cdk.JsiiPythonTarget</code>                                                                  | Publish to pypi.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.python">python</a></code>                                           | <code>projen.cdk.JsiiPythonTarget</code>                                                                  | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.rootdir">rootdir</a></code>                                         | <code>string</code>                                                                                       | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.catalog">catalog</a></code>                                         | <code>projen.cdk.Catalog</code>                                                                           | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.cdktfVersion">cdktfVersion</a></code>                               | <code>string</code>                                                                                       | Minimum target version of this library.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.constructExamples">constructExamples</a></code>                     | <code><a href="#projen-cdktf-hybrid-construct.ConstructExamplesOption">ConstructExamplesOption</a></code> | If set a construct examples folder will be created.                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.constructVersion">constructVersion</a></code>                       | <code>string</code>                                                                                       | Construct version to use.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.projectId">projectId</a></code>                                     | <code>string</code>                                                                                       | If set a terraform examples folder will be created Defaults to a uuid string as cdktf would Mostly used for testing to have a predictable result.                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.runPlan">runPlan</a></code>                                         | <code>boolean</code>                                                                                      | If set a terraform plan is being run as part of the tests.                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions.property.terraformExamples">terraformExamples</a></code>                     | <code><a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption">TerraformExamplesOption</a></code> | If set a terraform examples folder will be created.                                                                                                                                                |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string
- _Default:_ $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- _Type:_ projen.LoggerOptions
- _Default:_ {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string
- _Default:_ "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string
- _Default:_ "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- _Type:_ boolean
- _Default:_ false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- _Type:_ projen.ProjenrcOptions
- _Default:_ default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- _Type:_ projen.RenovatebotOptions
- _Default:_ default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- _Type:_ projen.github.AutoApproveOptions
- _Default:_ auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- _Type:_ projen.github.AutoMergeOptions
- _Default:_ see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- _Type:_ boolean
- _Default:_ true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- _Type:_ projen.github.GitHubOptions
- _Default:_ see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.mergify"></a>

- _Deprecated:_ use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.mergifyOptions"></a>

- _Deprecated:_ use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- _Type:_ projen.github.MergifyOptions
- _Default:_ default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projectType"></a>

- _Deprecated:_ no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType
- _Default:_ ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- _Type:_ projen.github.GithubCredentials
- _Default:_ use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenTokenSecret"></a>

- _Deprecated:_ use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- _Type:_ string
- _Default:_ "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- _Type:_ projen.SampleReadmeProps
- _Default:_ { filename: 'README.md', contents: '# replace this' }

The README setup.

---

_Example_

```typescript
"{ filename: 'readme.md', contents: '# title' }";
```

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- _Type:_ boolean
- _Default:_ false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- _Type:_ projen.github.StaleOptions
- _Default:_ see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean
- _Default:_ true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- _Type:_ string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- _Type:_ string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- _Type:_ boolean

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- _Type:_ string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- _Type:_ string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- _Type:_ string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- _Type:_ string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- _Type:_ projen.javascript.CodeArtifactOptions
- _Default:_ undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- _Type:_ string[]
- _Default:_ []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
["express", "lodash", "foo@^2"];
```

##### `description`<sup>Optional</sup> <a name="description" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.description"></a>

```typescript
public readonly description: string;
```

- _Type:_ string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
["typescript", "@types/express"];
```

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- _Type:_ string
- _Default:_ "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- _Type:_ string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- _Type:_ string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.license"></a>

```typescript
public readonly license: string;
```

- _Type:_ string
- _Default:_ "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string
- _Default:_ no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string
- _Default:_ no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- _Type:_ projen.javascript.NpmAccess
- _Default:_ for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmRegistry"></a>

- _Deprecated:_ use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- _Type:_ string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- _Type:_ string
- _Default:_ "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- _Type:_ string
- _Default:_ "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager
- _Default:_ NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- _Type:_ string
- _Default:_ defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- _Type:_ projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- _Type:_ string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- _Type:_ string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- _Type:_ projen.javascript.ScopedPackagesOptions[]
- _Default:_ fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- _Type:_ string

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- _Type:_ number
- _Default:_ Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- _Type:_ string
- _Default:_ "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- _Type:_ string
- _Default:_ normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- _Type:_ boolean
- _Default:_ false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- _Type:_ {[ key: string ]: projen.release.BranchOptions}
- _Default:_ no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseEveryCommit"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- _Type:_ boolean
- _Default:_ false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- _Type:_ string
- _Default:_ "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseSchedule"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- _Type:_ string
- _Default:_ no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- _Type:_ string
- _Default:_ no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- _Type:_ projen.release.ReleaseTrigger
- _Default:_ Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- _Type:_ string
- _Default:_ "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- _Type:_ {[ key: string ]: any}
- _Default:_ standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- _Type:_ string
- _Default:_ default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- _Type:_ string[]
- _Default:_ ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- _Type:_ string
- _Default:_ "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string
- _Default:_ "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- _Type:_ projen.github.workflows.Triggers
- _Default:_ "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- _Type:_ projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- _Type:_ string
- _Default:_ if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- _Type:_ string
- _Default:_ defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- _Type:_ string
- _Default:_ current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- _Type:_ projen.github.DependabotOptions
- _Default:_ default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- _Type:_ boolean
- _Default:_ true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- _Type:_ projen.javascript.UpgradeDependenciesOptions
- _Default:_ default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- _Type:_ string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- _Type:_ projen.javascript.JestOptions
- _Default:_ default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmignore"></a>

- _Deprecated:_ - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- _Type:_ string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- _Type:_ boolean
- _Default:_ false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- _Type:_ projen.javascript.PrettierOptions
- _Default:_ default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- _Type:_ boolean
- _Default:_ true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- _Type:_ projen.javascript.ProjenrcOptions
- _Default:_ default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- _Type:_ string
- _Default:_ Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- _Type:_ boolean
- _Default:_ true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- _Type:_ string[]
- _Default:_ default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- _Type:_ boolean
- _Default:_ true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- _Type:_ boolean
- _Default:_ false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.releaseWorkflow"></a>

- _Deprecated:_ see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- _Type:_ projen.github.GitIdentity
- _Default:_ GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- _Type:_ string
- _Default:_ same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- _Type:_ boolean
- _Default:_ false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean
- _Default:_ false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string
- _Default:_ "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- _Type:_ string
- _Default:_ .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- _Type:_ projen.javascript.EslintOptions
- _Default:_ opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string
- _Default:_ "lib"

Typescript artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- _Type:_ projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string
- _Default:_ "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string
- _Default:_ "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- _Type:_ string
- _Default:_ "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.author"></a>

```typescript
public readonly author: string;
```

- _Type:_ string
- _Default:_ $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- _Type:_ string
- _Default:_ $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- _Type:_ string
- _Default:_ $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- _Type:_ boolean
- _Default:_ false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.

- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- _Type:_ string
- _Default:_ ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- _Type:_ string
- _Default:_ "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.dotnet"></a>

- _Deprecated:_ use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- _Type:_ projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- _Type:_ string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all \*.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- _Type:_ projen.cdk.JsiiGoTarget
- _Default:_ no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- _Type:_ projen.cdk.JsiiJavaTarget
- _Default:_ no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- _Type:_ projen.cdk.JsiiDotNetTarget
- _Default:_ no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- _Type:_ projen.cdk.JsiiPythonTarget
- _Default:_ no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.python"></a>

- _Deprecated:_ use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- _Type:_ projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- _Type:_ string
- _Default:_ "."

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.catalog"></a>

```typescript
public readonly catalog: Catalog;
```

- _Type:_ projen.cdk.Catalog
- _Default:_ new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

> [https://github.com/construct-catalog/catalog](https://github.com/construct-catalog/catalog)

---

##### `cdktfVersion`<sup>Optional</sup> <a name="cdktfVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.cdktfVersion"></a>

```typescript
public readonly cdktfVersion: string;
```

- _Type:_ string
- _Default:_ "^0.10.1"

Minimum target version of this library.

---

##### `constructExamples`<sup>Optional</sup> <a name="constructExamples" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.constructExamples"></a>

```typescript
public readonly constructExamples: ConstructExamplesOption;
```

- _Type:_ <a href="#projen-cdktf-hybrid-construct.ConstructExamplesOption">ConstructExamplesOption</a>
- _Default:_ undefined

If set a construct examples folder will be created.

---

##### `constructVersion`<sup>Optional</sup> <a name="constructVersion" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.constructVersion"></a>

```typescript
public readonly constructVersion: string;
```

- _Type:_ string
- _Default:_ "^10.0.12"

Construct version to use.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- _Type:_ string

If set a terraform examples folder will be created Defaults to a uuid string as cdktf would Mostly used for testing to have a predictable result.

---

##### `runPlan`<sup>Optional</sup> <a name="runPlan" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.runPlan"></a>

```typescript
public readonly runPlan: boolean;
```

- _Type:_ boolean

If set a terraform plan is being run as part of the tests.

---

##### `terraformExamples`<sup>Optional</sup> <a name="terraformExamples" id="projen-cdktf-hybrid-construct.HybridModuleOptions.property.terraformExamples"></a>

```typescript
public readonly terraformExamples: TerraformExamplesOption;
```

- _Type:_ <a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption">TerraformExamplesOption</a>
- _Default:_ undefined

If set a terraform examples folder will be created.

---

### TerraformExamplesOption <a name="TerraformExamplesOption" id="projen-cdktf-hybrid-construct.TerraformExamplesOption"></a>

#### Initializer <a name="Initializer" id="projen-cdktf-hybrid-construct.TerraformExamplesOption.Initializer"></a>

```typescript
import { TerraformExamplesOption } from 'projen-cdktf-hybrid-construct'

const terraformExamplesOption: TerraformExamplesOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                 | **Type**             | **Description**   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------- | ----------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption.property.enabled">enabled</a></code>               | <code>boolean</code> | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption.property.exampleCode">exampleCode</a></code>       | <code>string</code>  | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption.property.folder">folder</a></code>                 | <code>string</code>  | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformExamplesOption.property.providerConfig">providerConfig</a></code> | <code>string</code>  | _No description._ |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="projen-cdktf-hybrid-construct.TerraformExamplesOption.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- _Type:_ boolean

---

##### `exampleCode`<sup>Optional</sup> <a name="exampleCode" id="projen-cdktf-hybrid-construct.TerraformExamplesOption.property.exampleCode"></a>

```typescript
public readonly exampleCode: string;
```

- _Type:_ string

---

##### `folder`<sup>Optional</sup> <a name="folder" id="projen-cdktf-hybrid-construct.TerraformExamplesOption.property.folder"></a>

```typescript
public readonly folder: string;
```

- _Type:_ string

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="projen-cdktf-hybrid-construct.TerraformExamplesOption.property.providerConfig"></a>

```typescript
public readonly providerConfig: string;
```

- _Type:_ string

---

### TerraformModuleOptions <a name="TerraformModuleOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions"></a>

#### Initializer <a name="Initializer" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.Initializer"></a>

```typescript
import { TerraformModuleOptions } from 'projen-cdktf-hybrid-construct'

const terraformModuleOptions: TerraformModuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                          | **Type**                                                                                                          | **Description**                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.name">name</a></code>                                               | <code>string</code>                                                                                               | This is the name of your project.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.logging">logging</a></code>                                         | <code>projen.LoggerOptions</code>                                                                                 | Configure logging options such as verbosity.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.outdir">outdir</a></code>                                           | <code>string</code>                                                                                               | The root directory of the project.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.parent">parent</a></code>                                           | <code>projen.Project</code>                                                                                       | The parent project, if this project is part of a bigger project.                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenCommand">projenCommand</a></code>                             | <code>string</code>                                                                                               | The shell command to use in order to run the projen CLI.                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJson">projenrcJson</a></code>                               | <code>boolean</code>                                                                                              | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code>                 | <code>projen.ProjenrcOptions</code>                                                                               | Options for .projenrc.json.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.renovatebot">renovatebot</a></code>                                 | <code>boolean</code>                                                                                              | Use renovatebot to handle dependency upgrades.                                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.renovatebotOptions">renovatebotOptions</a></code>                   | <code>projen.RenovatebotOptions</code>                                                                            | Options for renovatebot.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoApproveOptions">autoApproveOptions</a></code>                   | <code>projen.github.AutoApproveOptions</code>                                                                     | Enable and configure the 'auto approve' workflow.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoMerge">autoMerge</a></code>                                     | <code>boolean</code>                                                                                              | Enable automatic merging on GitHub.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoMergeOptions">autoMergeOptions</a></code>                       | <code>projen.github.AutoMergeOptions</code>                                                                       | Configure options for automatic merging on GitHub.                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.clobber">clobber</a></code>                                         | <code>boolean</code>                                                                                              | Add a `clobber` task which resets the repo to origin.                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.devContainer">devContainer</a></code>                               | <code>boolean</code>                                                                                              | Add a VSCode development environment (used for GitHub Codespaces).                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.github">github</a></code>                                           | <code>boolean</code>                                                                                              | Enable GitHub integration.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.githubOptions">githubOptions</a></code>                             | <code>projen.github.GitHubOptions</code>                                                                          | Options for GitHub integration.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.gitpod">gitpod</a></code>                                           | <code>boolean</code>                                                                                              | Add a Gitpod development environment.                                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mergify">mergify</a></code>                                         | <code>boolean</code>                                                                                              | Whether mergify should be enabled on this repository or not.                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mergifyOptions">mergifyOptions</a></code>                           | <code>projen.github.MergifyOptions</code>                                                                         | Options for mergify.                                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projectType">projectType</a></code>                                 | <code>projen.ProjectType</code>                                                                                   | Which type of project this is (library/app).                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenCredentials">projenCredentials</a></code>                     | <code>projen.github.GithubCredentials</code>                                                                      | Choose a method of providing GitHub API access for projen workflows.                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenTokenSecret">projenTokenSecret</a></code>                     | <code>string</code>                                                                                               | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.readme">readme</a></code>                                           | <code>projen.SampleReadmeProps</code>                                                                             | The README setup.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.stale">stale</a></code>                                             | <code>boolean</code>                                                                                              | Auto-close of stale issues and pull request.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.staleOptions">staleOptions</a></code>                               | <code>projen.github.StaleOptions</code>                                                                           | Auto-close stale issues and pull requests.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.vscode">vscode</a></code>                                           | <code>boolean</code>                                                                                              | Enable VSCode integration.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code>       | <code>boolean</code>                                                                                              | Allow the project to include `peerDependencies` and `bundledDependencies`.                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorEmail">authorEmail</a></code>                                 | <code>string</code>                                                                                               | Author's e-mail.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorName">authorName</a></code>                                   | <code>string</code>                                                                                               | Author's name.                                                                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorOrganization">authorOrganization</a></code>                   | <code>boolean</code>                                                                                              | Author's Organization.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorUrl">authorUrl</a></code>                                     | <code>string</code>                                                                                               | Author's URL / Website.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoDetectBin">autoDetectBin</a></code>                             | <code>boolean</code>                                                                                              | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bin">bin</a></code>                                                 | <code>{[ key: string ]: string}</code>                                                                            | Binary programs vended with your module.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bugsEmail">bugsEmail</a></code>                                     | <code>string</code>                                                                                               | The email address to which issues should be reported.                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bugsUrl">bugsUrl</a></code>                                         | <code>string</code>                                                                                               | The url to your project's issue tracker.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bundledDeps">bundledDeps</a></code>                                 | <code>string[]</code>                                                                                             | List of dependencies to bundle into this module.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeArtifactOptions">codeArtifactOptions</a></code>                 | <code>projen.javascript.CodeArtifactOptions</code>                                                                | Options for npm packages using AWS CodeArtifact.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.deps">deps</a></code>                                               | <code>string[]</code>                                                                                             | Runtime dependencies of this module.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.description">description</a></code>                                 | <code>string</code>                                                                                               | The description is just a string that helps people understand the purpose of the package.                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.devDeps">devDeps</a></code>                                         | <code>string[]</code>                                                                                             | Build dependencies for this module.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.entrypoint">entrypoint</a></code>                                   | <code>string</code>                                                                                               | Module entrypoint (`main` in `package.json`).                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.homepage">homepage</a></code>                                       | <code>string</code>                                                                                               | Package's Homepage / Website.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.keywords">keywords</a></code>                                       | <code>string[]</code>                                                                                             | Keywords to include in `package.json`.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.license">license</a></code>                                         | <code>string</code>                                                                                               | License's SPDX identifier.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.licensed">licensed</a></code>                                       | <code>boolean</code>                                                                                              | Indicates if a license should be added.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.maxNodeVersion">maxNodeVersion</a></code>                           | <code>string</code>                                                                                               | Minimum node.js version to require via `engines` (inclusive).                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.minNodeVersion">minNodeVersion</a></code>                           | <code>string</code>                                                                                               | Minimum Node.js version to require via package.json `engines` (inclusive).                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmAccess">npmAccess</a></code>                                     | <code>projen.javascript.NpmAccess</code>                                                                          | Access level of the npm package.                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmRegistry">npmRegistry</a></code>                                 | <code>string</code>                                                                                               | The host name of the npm registry to publish to.                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmRegistryUrl">npmRegistryUrl</a></code>                           | <code>string</code>                                                                                               | The base URL of the npm package registry.                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmTokenSecret">npmTokenSecret</a></code>                           | <code>string</code>                                                                                               | GitHub secret which contains the NPM token to use when publishing packages.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.packageManager">packageManager</a></code>                           | <code>projen.javascript.NodePackageManager</code>                                                                 | The Node Package Manager used to execute scripts.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.packageName">packageName</a></code>                                 | <code>string</code>                                                                                               | The "name" in package.json.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.peerDependencyOptions">peerDependencyOptions</a></code>             | <code>projen.javascript.PeerDependencyOptions</code>                                                              | Options for `peerDeps`.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.peerDeps">peerDeps</a></code>                                       | <code>string[]</code>                                                                                             | Peer dependencies for this module.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repository">repository</a></code>                                   | <code>string</code>                                                                                               | The repository is the location where the actual code for your package lives.                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repositoryDirectory">repositoryDirectory</a></code>                 | <code>string</code>                                                                                               | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code>             | <code>projen.javascript.ScopedPackagesOptions[]</code>                                                            | Options for privately hosted scoped packages.                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.scripts">scripts</a></code>                                         | <code>{[ key: string ]: string}</code>                                                                            | npm scripts to include.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.stability">stability</a></code>                                     | <code>string</code>                                                                                               | Package's Stability.                                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code>                   | <code>string</code>                                                                                               | Version requirement of `publib` which is used to publish modules to npm.                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.majorVersion">majorVersion</a></code>                               | <code>number</code>                                                                                               | Major version to release from the default branch.                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmDistTag">npmDistTag</a></code>                                   | <code>string</code>                                                                                               | The npmDistTag to use when publishing from the default branch.                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.postBuildSteps">postBuildSteps</a></code>                           | <code>projen.github.workflows.JobStep[]</code>                                                                    | Steps to execute after build as part of the release workflow.                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prerelease">prerelease</a></code>                                   | <code>string</code>                                                                                               | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishDryRun">publishDryRun</a></code>                             | <code>boolean</code>                                                                                              | Instead of actually publishing to package managers, just print the publishing command.                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishTasks">publishTasks</a></code>                               | <code>boolean</code>                                                                                              | Define publishing tasks that can be executed manually as well as workflows.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseBranches">releaseBranches</a></code>                         | <code>{[ key: string ]: projen.release.BranchOptions}</code>                                                      | Defines additional release branches.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseEveryCommit">releaseEveryCommit</a></code>                   | <code>boolean</code>                                                                                              | Automatically release new versions every commit to one of branches in `releaseBranches`.                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseFailureIssue">releaseFailureIssue</a></code>                 | <code>boolean</code>                                                                                              | Create a github issue on every failed publishing task.                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code>       | <code>string</code>                                                                                               | The label to apply to issues indicating publish failures.                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseSchedule">releaseSchedule</a></code>                         | <code>string</code>                                                                                               | CRON schedule to trigger new releases.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseTagPrefix">releaseTagPrefix</a></code>                       | <code>string</code>                                                                                               | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseTrigger">releaseTrigger</a></code>                           | <code>projen.release.ReleaseTrigger</code>                                                                        | The release trigger to use.                                                                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflowName">releaseWorkflowName</a></code>                 | <code>string</code>                                                                                               | The name of the default release workflow.                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code>     | <code>projen.github.workflows.JobStep[]</code>                                                                    | A set of workflow steps to execute in order to setup the workflow container.                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.versionrcOptions">versionrcOptions</a></code>                       | <code>{[ key: string ]: any}</code>                                                                               | Custom configuration used when creating changelog with standard-version package.                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowContainerImage">workflowContainerImage</a></code>           | <code>string</code>                                                                                               | Container image to use for GitHub workflows.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowRunsOn">workflowRunsOn</a></code>                           | <code>string[]</code>                                                                                             | Github Runner selection labels.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code>               | <code>string</code>                                                                                               | The name of the main release branch.                                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.artifactsDirectory">artifactsDirectory</a></code>                   | <code>string</code>                                                                                               | A directory which will contain build artifacts.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code>                 | <code>boolean</code>                                                                                              | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.buildWorkflow">buildWorkflow</a></code>                             | <code>boolean</code>                                                                                              | Define a GitHub workflow for building PRs.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code>             | <code>projen.github.workflows.Triggers</code>                                                                     | Build workflow triggers.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bundlerOptions">bundlerOptions</a></code>                           | <code>projen.javascript.BundlerOptions</code>                                                                     | Options for `Bundler`.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeCov">codeCov</a></code>                                         | <code>boolean</code>                                                                                              | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code>                   | <code>string</code>                                                                                               | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.copyrightOwner">copyrightOwner</a></code>                           | <code>string</code>                                                                                               | License copyright owner.                                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.copyrightPeriod">copyrightPeriod</a></code>                         | <code>string</code>                                                                                               | The copyright years to put in the LICENSE file.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dependabot">dependabot</a></code>                                   | <code>boolean</code>                                                                                              | Use dependabot to handle dependency upgrades.                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dependabotOptions">dependabotOptions</a></code>                     | <code>projen.github.DependabotOptions</code>                                                                      | Options for dependabot.                                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.depsUpgrade">depsUpgrade</a></code>                                 | <code>boolean</code>                                                                                              | Use github workflows to handle dependency upgrades.                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code>                   | <code>projen.javascript.UpgradeDependenciesOptions</code>                                                         | Options for `UpgradeDependencies`.                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.gitignore">gitignore</a></code>                                     | <code>string[]</code>                                                                                             | Additional entries to .gitignore.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jest">jest</a></code>                                               | <code>boolean</code>                                                                                              | Setup jest unit tests.                                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jestOptions">jestOptions</a></code>                                 | <code>projen.javascript.JestOptions</code>                                                                        | Jest options.                                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mutableBuild">mutableBuild</a></code>                               | <code>boolean</code>                                                                                              | Automatically update files modified during builds to pull-request branches.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmignore">npmignore</a></code>                                     | <code>string[]</code>                                                                                             | Additional entries to .npmignore.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmignoreEnabled">npmignoreEnabled</a></code>                       | <code>boolean</code>                                                                                              | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.package">package</a></code>                                         | <code>boolean</code>                                                                                              | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prettier">prettier</a></code>                                       | <code>boolean</code>                                                                                              | Setup prettier.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prettierOptions">prettierOptions</a></code>                         | <code>projen.javascript.PrettierOptions</code>                                                                    | Prettier options.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenDevDependency">projenDevDependency</a></code>                 | <code>boolean</code>                                                                                              | Indicates of "projen" should be installed as a devDependency.                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJs">projenrcJs</a></code>                                   | <code>boolean</code>                                                                                              | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJsOptions">projenrcJsOptions</a></code>                     | <code>projen.javascript.ProjenrcOptions</code>                                                                    | Options for .projenrc.js.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenVersion">projenVersion</a></code>                             | <code>string</code>                                                                                               | Version of projen to install.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.pullRequestTemplate">pullRequestTemplate</a></code>                 | <code>boolean</code>                                                                                              | Include a GitHub pull request template.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code>                                                                                             | The contents of the pull request template.                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.release">release</a></code>                                         | <code>boolean</code>                                                                                              | Add release management to this project.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseToNpm">releaseToNpm</a></code>                               | <code>boolean</code>                                                                                              | Automatically release to npm when new versions are introduced.                                                                                                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflow">releaseWorkflow</a></code>                         | <code>boolean</code>                                                                                              | DEPRECATED: renamed to `release`.                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code>           | <code>projen.github.workflows.JobStep[]</code>                                                                    | Workflow steps to use in order to bootstrap this repo.                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowGitIdentity">workflowGitIdentity</a></code>                 | <code>projen.github.GitIdentity</code>                                                                            | The git identity to use in workflows.                                                                                                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowNodeVersion">workflowNodeVersion</a></code>                 | <code>string</code>                                                                                               | The node version to use in GitHub workflows.                                                                                                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.disableTsconfig">disableTsconfig</a></code>                         | <code>boolean</code>                                                                                              | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docgen">docgen</a></code>                                           | <code>boolean</code>                                                                                              | Docgen by Typedoc.                                                                                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docsDirectory">docsDirectory</a></code>                             | <code>string</code>                                                                                               | Docs directory.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.entrypointTypes">entrypointTypes</a></code>                         | <code>string</code>                                                                                               | The .d.ts file that includes the type declarations for this module.                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.eslint">eslint</a></code>                                           | <code>boolean</code>                                                                                              | Setup eslint.                                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.eslintOptions">eslintOptions</a></code>                             | <code>projen.javascript.EslintOptions</code>                                                                      | Eslint options.                                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.libdir">libdir</a></code>                                           | <code>string</code>                                                                                               | Typescript artifacts output directory.                                                                                                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcTs">projenrcTs</a></code>                                   | <code>boolean</code>                                                                                              | Use TypeScript for your projenrc file (`.projenrc.ts`).                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcTsOptions">projenrcTsOptions</a></code>                     | <code>projen.typescript.ProjenrcOptions</code>                                                                    | Options for .projenrc.ts.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.sampleCode">sampleCode</a></code>                                   | <code>boolean</code>                                                                                              | Generate one-time sample in `src/` and `test/` if there are no files there.                                                                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.srcdir">srcdir</a></code>                                           | <code>string</code>                                                                                               | Typescript sources directory.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.testdir">testdir</a></code>                                         | <code>string</code>                                                                                               | Jest tests directory. Tests files should be named `xxx.test.ts`.                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfig">tsconfig</a></code>                                       | <code>projen.javascript.TypescriptConfigOptions</code>                                                            | Custom TSConfig.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfigDev">tsconfigDev</a></code>                                 | <code>projen.javascript.TypescriptConfigOptions</code>                                                            | Custom tsconfig options for the development tsconfig.json file (used for testing).                                                                                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfigDevFile">tsconfigDevFile</a></code>                         | <code>string</code>                                                                                               | The name of the development tsconfig.json file.                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.typescriptVersion">typescriptVersion</a></code>                     | <code>string</code>                                                                                               | TypeScript version to use.                                                                                                                                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.author">author</a></code>                                           | <code>string</code>                                                                                               | The name of the library author.                                                                                                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorAddress">authorAddress</a></code>                             | <code>string</code>                                                                                               | Email or URL of the library author.                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repositoryUrl">repositoryUrl</a></code>                             | <code>string</code>                                                                                               | Git repository URL.                                                                                                                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.compat">compat</a></code>                                           | <code>boolean</code>                                                                                              | Automatically run API compatibility test against the latest version published to npm after compilation.                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.compatIgnore">compatIgnore</a></code>                               | <code>string</code>                                                                                               | Name of the ignore file for API compatibility tests.                                                                                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docgenFilePath">docgenFilePath</a></code>                           | <code>string</code>                                                                                               | File path for generated docs.                                                                                                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dotnet">dotnet</a></code>                                           | <code>projen.cdk.JsiiDotNetTarget</code>                                                                          | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.excludeTypescript">excludeTypescript</a></code>                     | <code>string[]</code>                                                                                             | Accepts a list of glob patterns.                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToGo">publishToGo</a></code>                                 | <code>projen.cdk.JsiiGoTarget</code>                                                                              | Publish Go bindings to a git repository.                                                                                                                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToMaven">publishToMaven</a></code>                           | <code>projen.cdk.JsiiJavaTarget</code>                                                                            | Publish to maven.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToNuget">publishToNuget</a></code>                           | <code>projen.cdk.JsiiDotNetTarget</code>                                                                          | Publish to NuGet.                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToPypi">publishToPypi</a></code>                             | <code>projen.cdk.JsiiPythonTarget</code>                                                                          | Publish to pypi.                                                                                                                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.python">python</a></code>                                           | <code>projen.cdk.JsiiPythonTarget</code>                                                                          | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.rootdir">rootdir</a></code>                                         | <code>string</code>                                                                                               | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.catalog">catalog</a></code>                                         | <code>projen.cdk.Catalog</code>                                                                                   | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.terraformModules">terraformModules</a></code>                       | <code><a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint">TerraformVersionConstraint</a>[]</code> | List of modules to generate bindings for.                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.cdktfVersion">cdktfVersion</a></code>                               | <code>string</code>                                                                                               | Minimum target version of this library.                                                                                                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.constructVersion">constructVersion</a></code>                       | <code>string</code>                                                                                               | Construct version to use.                                                                                                                                                                          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projectId">projectId</a></code>                                     | <code>string</code>                                                                                               | _No description._                                                                                                                                                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions.property.terraformProviders">terraformProviders</a></code>                   | <code><a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint">TerraformVersionConstraint</a>[]</code> | List of provider bindings to generate in addition to the modules.                                                                                                                                  |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string
- _Default:_ $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- _Type:_ projen.LoggerOptions
- _Default:_ {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string
- _Default:_ "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string
- _Default:_ "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- _Type:_ boolean
- _Default:_ false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- _Type:_ projen.ProjenrcOptions
- _Default:_ default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- _Type:_ projen.RenovatebotOptions
- _Default:_ default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- _Type:_ projen.github.AutoApproveOptions
- _Default:_ auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- _Type:_ projen.github.AutoMergeOptions
- _Default:_ see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- _Type:_ boolean
- _Default:_ true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- _Type:_ projen.github.GitHubOptions
- _Default:_ see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mergify"></a>

- _Deprecated:_ use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mergifyOptions"></a>

- _Deprecated:_ use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- _Type:_ projen.github.MergifyOptions
- _Default:_ default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projectType"></a>

- _Deprecated:_ no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType
- _Default:_ ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- _Type:_ projen.github.GithubCredentials
- _Default:_ use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenTokenSecret"></a>

- _Deprecated:_ use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- _Type:_ string
- _Default:_ "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- _Type:_ projen.SampleReadmeProps
- _Default:_ { filename: 'README.md', contents: '# replace this' }

The README setup.

---

_Example_

```typescript
"{ filename: 'readme.md', contents: '# title' }";
```

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- _Type:_ boolean
- _Default:_ false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- _Type:_ projen.github.StaleOptions
- _Default:_ see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean
- _Default:_ true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- _Type:_ string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- _Type:_ string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- _Type:_ boolean

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- _Type:_ string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- _Type:_ string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- _Type:_ string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- _Type:_ string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- _Type:_ projen.javascript.CodeArtifactOptions
- _Default:_ undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- _Type:_ string[]
- _Default:_ []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
["express", "lodash", "foo@^2"];
```

##### `description`<sup>Optional</sup> <a name="description" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.description"></a>

```typescript
public readonly description: string;
```

- _Type:_ string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
["typescript", "@types/express"];
```

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- _Type:_ string
- _Default:_ "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- _Type:_ string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- _Type:_ string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.license"></a>

```typescript
public readonly license: string;
```

- _Type:_ string
- _Default:_ "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string
- _Default:_ no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string
- _Default:_ no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- _Type:_ projen.javascript.NpmAccess
- _Default:_ for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmRegistry"></a>

- _Deprecated:_ use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- _Type:_ string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- _Type:_ string
- _Default:_ "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- _Type:_ string
- _Default:_ "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager
- _Default:_ NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- _Type:_ string
- _Default:_ defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- _Type:_ projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- _Type:_ string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- _Type:_ string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- _Type:_ projen.javascript.ScopedPackagesOptions[]
- _Default:_ fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- _Type:_ string

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- _Type:_ number
- _Default:_ Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- _Type:_ string
- _Default:_ "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- _Type:_ string
- _Default:_ normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- _Type:_ boolean
- _Default:_ false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- _Type:_ {[ key: string ]: projen.release.BranchOptions}
- _Default:_ no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseEveryCommit"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- _Type:_ boolean
- _Default:_ false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- _Type:_ string
- _Default:_ "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseSchedule"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- _Type:_ string
- _Default:_ no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- _Type:_ string
- _Default:_ no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- _Type:_ projen.release.ReleaseTrigger
- _Default:_ Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- _Type:_ string
- _Default:_ "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- _Type:_ {[ key: string ]: any}
- _Default:_ standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- _Type:_ string
- _Default:_ default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- _Type:_ string[]
- _Default:_ ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- _Type:_ string
- _Default:_ "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string
- _Default:_ "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- _Type:_ projen.github.workflows.Triggers
- _Default:_ "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- _Type:_ projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- _Type:_ string
- _Default:_ if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- _Type:_ string
- _Default:_ defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- _Type:_ string
- _Default:_ current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- _Type:_ projen.github.DependabotOptions
- _Default:_ default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- _Type:_ boolean
- _Default:_ true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- _Type:_ projen.javascript.UpgradeDependenciesOptions
- _Default:_ default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- _Type:_ string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- _Type:_ projen.javascript.JestOptions
- _Default:_ default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmignore"></a>

- _Deprecated:_ - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- _Type:_ string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- _Type:_ boolean
- _Default:_ false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- _Type:_ projen.javascript.PrettierOptions
- _Default:_ default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- _Type:_ boolean
- _Default:_ true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- _Type:_ projen.javascript.ProjenrcOptions
- _Default:_ default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- _Type:_ string
- _Default:_ Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- _Type:_ boolean
- _Default:_ true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- _Type:_ string[]
- _Default:_ default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- _Type:_ boolean
- _Default:_ true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- _Type:_ boolean
- _Default:_ false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.releaseWorkflow"></a>

- _Deprecated:_ see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- _Type:_ projen.github.GitIdentity
- _Default:_ GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- _Type:_ string
- _Default:_ same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- _Type:_ boolean
- _Default:_ false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean
- _Default:_ false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string
- _Default:_ "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- _Type:_ string
- _Default:_ .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- _Type:_ projen.javascript.EslintOptions
- _Default:_ opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string
- _Default:_ "lib"

Typescript artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- _Type:_ projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string
- _Default:_ "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string
- _Default:_ "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- _Type:_ string
- _Default:_ "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.author"></a>

```typescript
public readonly author: string;
```

- _Type:_ string
- _Default:_ $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- _Type:_ string
- _Default:_ $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- _Type:_ string
- _Default:_ $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- _Type:_ boolean
- _Default:_ false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.

- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- _Type:_ string
- _Default:_ ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- _Type:_ string
- _Default:_ "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.dotnet"></a>

- _Deprecated:_ use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- _Type:_ projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- _Type:_ string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all \*.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- _Type:_ projen.cdk.JsiiGoTarget
- _Default:_ no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- _Type:_ projen.cdk.JsiiJavaTarget
- _Default:_ no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- _Type:_ projen.cdk.JsiiDotNetTarget
- _Default:_ no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- _Type:_ projen.cdk.JsiiPythonTarget
- _Default:_ no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.python"></a>

- _Deprecated:_ use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- _Type:_ projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- _Type:_ string
- _Default:_ "."

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.catalog"></a>

```typescript
public readonly catalog: Catalog;
```

- _Type:_ projen.cdk.Catalog
- _Default:_ new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

> [https://github.com/construct-catalog/catalog](https://github.com/construct-catalog/catalog)

---

##### `terraformModules`<sup>Required</sup> <a name="terraformModules" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: TerraformVersionConstraint[];
```

- _Type:_ <a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint">TerraformVersionConstraint</a>[]

List of modules to generate bindings for.

---

##### `cdktfVersion`<sup>Optional</sup> <a name="cdktfVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.cdktfVersion"></a>

```typescript
public readonly cdktfVersion: string;
```

- _Type:_ string
- _Default:_ "^0.10.1"

Minimum target version of this library.

---

##### `constructVersion`<sup>Optional</sup> <a name="constructVersion" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.constructVersion"></a>

```typescript
public readonly constructVersion: string;
```

- _Type:_ string
- _Default:_ "^10.0.12"

Construct version to use.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- _Type:_ string

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="projen-cdktf-hybrid-construct.TerraformModuleOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: TerraformVersionConstraint[];
```

- _Type:_ <a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint">TerraformVersionConstraint</a>[]

List of provider bindings to generate in addition to the modules.

---

### TerraformVersionConstraint <a name="TerraformVersionConstraint" id="projen-cdktf-hybrid-construct.TerraformVersionConstraint"></a>

#### Initializer <a name="Initializer" id="projen-cdktf-hybrid-construct.TerraformVersionConstraint.Initializer"></a>

```typescript
import { TerraformVersionConstraint } from 'projen-cdktf-hybrid-construct'

const terraformVersionConstraint: TerraformVersionConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                      | **Type**            | **Description**   |
| ------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.name">name</a></code>       | <code>string</code> | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.source">source</a></code>   | <code>string</code> | _No description._ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.version">version</a></code> | <code>string</code> | _No description._ |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

---

##### `source`<sup>Required</sup> <a name="source" id="projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.source"></a>

```typescript
public readonly source: string;
```

- _Type:_ string

---

##### `version`<sup>Required</sup> <a name="version" id="projen-cdktf-hybrid-construct.TerraformVersionConstraint.property.version"></a>

```typescript
public readonly version: string;
```

- _Type:_ string

---

## Classes <a name="Classes" id="Classes"></a>

### HybridModule <a name="HybridModule" id="projen-cdktf-hybrid-construct.HybridModule"></a>

Hybrid CDKTF Construct / Terraform Module.

#### Initializers <a name="Initializers" id="projen-cdktf-hybrid-construct.HybridModule.Initializer"></a>

```typescript
import { HybridModule } from 'projen-cdktf-hybrid-construct'

new HybridModule(options: HybridModuleOptions)
```

| **Name**                                                                                                     | **Type**                                                                                          | **Description**   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.Initializer.parameter.options">options</a></code> | <code><a href="#projen-cdktf-hybrid-construct.HybridModuleOptions">HybridModuleOptions</a></code> | _No description._ |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-cdktf-hybrid-construct.HybridModule.Initializer.parameter.options"></a>

- _Type:_ <a href="#projen-cdktf-hybrid-construct.HybridModuleOptions">HybridModuleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                           | **Description**                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup.                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addGitIgnore">addGitIgnore</a></code>                   | Adds a .gitignore pattern.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addPackageIgnore">addPackageIgnore</a></code>           | Exclude these files from the bundled package.                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addTask">addTask</a></code>                             | Adds a new task to this project.                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addTip">addTip</a></code>                               | Prints a "tip" message during synthesis.                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.annotateGenerated">annotateGenerated</a></code>         | Marks the provided file(s) as being generated.                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.postSynthesize">postSynthesize</a></code>               | Called after all components are synthesized.                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.preSynthesize">preSynthesize</a></code>                 | Called before all components are synthesized.                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.removeTask">removeTask</a></code>                       | Removes a task from a project.                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.runTaskCommand">runTaskCommand</a></code>               | Returns the shell command to execute in order to run a task.                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.synth">synth</a></code>                                 | Synthesize all project files into `outdir`.                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.tryFindFile">tryFindFile</a></code>                     | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.tryFindJsonFile">tryFindJsonFile</a></code>             | Finds a json file by name.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.tryFindObjectFile">tryFindObjectFile</a></code>         | Finds an object file (like JsonFile, YamlFile, etc.) by name.                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.tryRemoveFile">tryRemoveFile</a></code>                 | Finds a file at the specified relative path within this project and removes it.          |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addBins">addBins</a></code>                             | _No description._                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addBundledDeps">addBundledDeps</a></code>               | Defines bundled dependencies.                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addCompileCommand">addCompileCommand</a></code>         | DEPRECATED.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addDeps">addDeps</a></code>                             | Defines normal dependencies.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addDevDeps">addDevDeps</a></code>                       | Defines development/test dependencies.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addFields">addFields</a></code>                         | Directly set fields in `package.json`.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addKeywords">addKeywords</a></code>                     | Adds keywords to package.json (deduplicated).                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addPeerDeps">addPeerDeps</a></code>                     | Defines peer dependencies.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.addTestCommand">addTestCommand</a></code>               | DEPRECATED.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.hasScript">hasScript</a></code>                         | Indicates if a script by the name name is defined.                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.removeScript">removeScript</a></code>                   | Removes the npm script (always successful).                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.renderWorkflowSetup">renderWorkflowSetup</a></code>     | Returns the set of workflow steps which should be executed to bootstrap a workflow.      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.setScript">setScript</a></code>                         | Replaces the contents of an npm package.json script.                                     |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-cdktf-hybrid-construct.HybridModule.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-cdktf-hybrid-construct.HybridModule.addExcludeFromCleanup.parameter.globs"></a>

- _Type:_ string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-cdktf-hybrid-construct.HybridModule.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-cdktf-hybrid-construct.HybridModule.addGitIgnore.parameter.pattern"></a>

- _Type:_ string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-cdktf-hybrid-construct.HybridModule.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-cdktf-hybrid-construct.HybridModule.addPackageIgnore.parameter.pattern"></a>

- _Type:_ string

---

##### `addTask` <a name="addTask" id="projen-cdktf-hybrid-construct.HybridModule.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.addTask.parameter.name"></a>

- _Type:_ string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-cdktf-hybrid-construct.HybridModule.addTask.parameter.props"></a>

- _Type:_ projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-cdktf-hybrid-construct.HybridModule.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-cdktf-hybrid-construct.HybridModule.addTip.parameter.message"></a>

- _Type:_ string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-cdktf-hybrid-construct.HybridModule.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-cdktf-hybrid-construct.HybridModule.annotateGenerated.parameter.glob"></a>

- _Type:_ string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-cdktf-hybrid-construct.HybridModule.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is _not_ guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-cdktf-hybrid-construct.HybridModule.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-cdktf-hybrid-construct.HybridModule.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.removeTask.parameter.name"></a>

- _Type:_ string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-cdktf-hybrid-construct.HybridModule.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-cdktf-hybrid-construct.HybridModule.runTaskCommand.parameter.task"></a>

- _Type:_ projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-cdktf-hybrid-construct.HybridModule.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-cdktf-hybrid-construct.HybridModule.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.HybridModule.tryFindFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-cdktf-hybrid-construct.HybridModule.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.HybridModule.tryFindJsonFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-cdktf-hybrid-construct.HybridModule.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.HybridModule.tryFindObjectFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-cdktf-hybrid-construct.HybridModule.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.HybridModule.tryRemoveFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-cdktf-hybrid-construct.HybridModule.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-cdktf-hybrid-construct.HybridModule.addBins.parameter.bins"></a>

- _Type:_ {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-cdktf-hybrid-construct.HybridModule.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModule.addBundledDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-cdktf-hybrid-construct.HybridModule.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-cdktf-hybrid-construct.HybridModule.addCompileCommand.parameter.commands"></a>

- _Type:_ string

---

##### `addDeps` <a name="addDeps" id="projen-cdktf-hybrid-construct.HybridModule.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModule.addDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-cdktf-hybrid-construct.HybridModule.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModule.addDevDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-cdktf-hybrid-construct.HybridModule.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-cdktf-hybrid-construct.HybridModule.addFields.parameter.fields"></a>

- _Type:_ {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-cdktf-hybrid-construct.HybridModule.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-cdktf-hybrid-construct.HybridModule.addKeywords.parameter.keywords"></a>

- _Type:_ string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-cdktf-hybrid-construct.HybridModule.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModule.addPeerDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-cdktf-hybrid-construct.HybridModule.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-cdktf-hybrid-construct.HybridModule.addTestCommand.parameter.commands"></a>

- _Type:_ string

---

##### `hasScript` <a name="hasScript" id="projen-cdktf-hybrid-construct.HybridModule.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.hasScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-cdktf-hybrid-construct.HybridModule.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.removeScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-cdktf-hybrid-construct.HybridModule.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-cdktf-hybrid-construct.HybridModule.renderWorkflowSetup.parameter.options"></a>

- _Type:_ projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-cdktf-hybrid-construct.HybridModule.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.setScript.parameter.name"></a>

- _Type:_ string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-cdktf-hybrid-construct.HybridModule.setScript.parameter.command"></a>

- _Type:_ string

The command to execute.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                  | **Type**                                           | **Description**                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.buildTask">buildTask</a></code>                                       | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.compileTask">compileTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.components">components</a></code>                                     | <code>projen.Component[]</code>                    | Returns all the components within this project.                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.deps">deps</a></code>                                                 | <code>projen.Dependencies</code>                   | Project dependencies.                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.ejected">ejected</a></code>                                           | <code>boolean</code>                               | Whether or not the project is being ejected.                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.files">files</a></code>                                               | <code>projen.FileBase[]</code>                     | All files in this project.                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.gitattributes">gitattributes</a></code>                               | <code>projen.GitAttributesFile</code>              | The .gitattributes file for this repository.                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.gitignore">gitignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | .gitignore.                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.logger">logger</a></code>                                             | <code>projen.Logger</code>                         | Logging utilities.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.name">name</a></code>                                                 | <code>string</code>                                | Project name.                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.outdir">outdir</a></code>                                             | <code>string</code>                                | Absolute output directory of this project.                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.packageTask">packageTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.postCompileTask">postCompileTask</a></code>                           | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.preCompileTask">preCompileTask</a></code>                             | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.projectBuild">projectBuild</a></code>                                 | <code>projen.ProjectBuild</code>                   | Manages the build process of the project.                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.projenCommand">projenCommand</a></code>                               | <code>string</code>                                | The command to use in order to run the projen CLI.                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.root">root</a></code>                                                 | <code>projen.Project</code>                        | The root project.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.tasks">tasks</a></code>                                               | <code>projen.Tasks</code>                          | Project tasks.                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.testTask">testTask</a></code>                                         | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.defaultTask">defaultTask</a></code>                                   | <code>projen.Task</code>                           | This is the "default" task, the one that executes "projen".                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.initProject">initProject</a></code>                                   | <code>projen.InitProject</code>                    | The options used when this project is bootstrapped via `projen new`.                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.parent">parent</a></code>                                             | <code>projen.Project</code>                        | A parent project.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.projectType">projectType</a></code>                                   | <code>projen.ProjectType</code>                    | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.autoApprove">autoApprove</a></code>                                   | <code>projen.github.AutoApprove</code>             | Auto approve set up for this project.                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.devContainer">devContainer</a></code>                                 | <code>projen.vscode.DevContainer</code>            | Access for .devcontainer.json (used for GitHub Codespaces).                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.github">github</a></code>                                             | <code>projen.github.GitHub</code>                  | Access all github components.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.gitpod">gitpod</a></code>                                             | <code>projen.Gitpod</code>                         | Access for Gitpod.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.vscode">vscode</a></code>                                             | <code>projen.vscode.VsCode</code>                  | Access all VSCode components.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.allowLibraryDependencies">allowLibraryDependencies</a></code>         | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.artifactsDirectory">artifactsDirectory</a></code>                     | <code>string</code>                                | The build output directory.                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code>                                | The location of the npm tarball after build (`${artifactsDirectory}/js`).                        |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.bundler">bundler</a></code>                                           | <code>projen.javascript.Bundler</code>             | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.entrypoint">entrypoint</a></code>                                     | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.manifest">manifest</a></code>                                         | <code>any</code>                                   | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.package">package</a></code>                                           | <code>projen.javascript.NodePackage</code>         | API for managing the node package.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.packageManager">packageManager</a></code>                             | <code>projen.javascript.NodePackageManager</code>  | The package manager to use.                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.runScriptCommand">runScriptCommand</a></code>                         | <code>string</code>                                | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.autoMerge">autoMerge</a></code>                                       | <code>projen.github.AutoMerge</code>               | Component that sets up mergify for merging approved pull requests.                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.buildWorkflow">buildWorkflow</a></code>                               | <code>projen.build.BuildWorkflow</code>            | The PR build GitHub workflow.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.buildWorkflowJobId">buildWorkflowJobId</a></code>                     | <code>string</code>                                | The job ID of the build workflow.                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.jest">jest</a></code>                                                 | <code>projen.javascript.Jest</code>                | The Jest configuration (if enabled).                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.maxNodeVersion">maxNodeVersion</a></code>                             | <code>string</code>                                | Maximum node version required by this pacakge.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.minNodeVersion">minNodeVersion</a></code>                             | <code>string</code>                                | Minimum node.js version required by this package.                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.npmignore">npmignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | The .npmignore file.                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.prettier">prettier</a></code>                                         | <code>projen.javascript.Prettier</code>            | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.publisher">publisher</a></code>                                       | <code>projen.release.Publisher</code>              | Package publisher.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.release">release</a></code>                                           | <code>projen.release.Release</code>                | Release management.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.upgradeWorkflow">upgradeWorkflow</a></code>                           | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow.                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.docsDirectory">docsDirectory</a></code>                               | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.libdir">libdir</a></code>                                             | <code>string</code>                                | The directory in which compiled .js files reside.                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.srcdir">srcdir</a></code>                                             | <code>string</code>                                | The directory in which the .ts sources reside.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.testdir">testdir</a></code>                                           | <code>string</code>                                | The directory in which tests reside.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.tsconfigDev">tsconfigDev</a></code>                                   | <code>projen.javascript.TypescriptConfig</code>    | A typescript configuration file which covers all files (sources, tests, projen).                 |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.watchTask">watchTask</a></code>                                       | <code>projen.Task</code>                           | The "watch" task.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.docgen">docgen</a></code>                                             | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.eslint">eslint</a></code>                                             | <code>projen.javascript.Eslint</code>              | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.tsconfig">tsconfig</a></code>                                         | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.tsconfigEslint">tsconfigEslint</a></code>                             | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-cdktf-hybrid-construct.HybridModule.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- _Type:_ projen.Task

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-cdktf-hybrid-construct.HybridModule.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- _Type:_ projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-cdktf-hybrid-construct.HybridModule.property.components"></a>

```typescript
public readonly components: Component[];
```

- _Type:_ projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.HybridModule.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- _Type:_ projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-cdktf-hybrid-construct.HybridModule.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- _Type:_ boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-cdktf-hybrid-construct.HybridModule.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- _Type:_ projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-cdktf-hybrid-construct.HybridModule.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- _Type:_ projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-cdktf-hybrid-construct.HybridModule.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-cdktf-hybrid-construct.HybridModule.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- _Type:_ projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.HybridModule.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-cdktf-hybrid-construct.HybridModule.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-cdktf-hybrid-construct.HybridModule.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- _Type:_ projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-cdktf-hybrid-construct.HybridModule.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-cdktf-hybrid-construct.HybridModule.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-cdktf-hybrid-construct.HybridModule.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- _Type:_ projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-cdktf-hybrid-construct.HybridModule.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-cdktf-hybrid-construct.HybridModule.property.root"></a>

```typescript
public readonly root: Project;
```

- _Type:_ projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-cdktf-hybrid-construct.HybridModule.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- _Type:_ projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-cdktf-hybrid-construct.HybridModule.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- _Type:_ projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-cdktf-hybrid-construct.HybridModule.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- _Type:_ projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-cdktf-hybrid-construct.HybridModule.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- _Type:_ projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cdktf-hybrid-construct.HybridModule.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-cdktf-hybrid-construct.HybridModule.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-cdktf-hybrid-construct.HybridModule.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- _Type:_ projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-cdktf-hybrid-construct.HybridModule.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- _Type:_ projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-cdktf-hybrid-construct.HybridModule.property.github"></a>

```typescript
public readonly github: GitHub;
```

- _Type:_ projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-cdktf-hybrid-construct.HybridModule.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- _Type:_ projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-cdktf-hybrid-construct.HybridModule.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- _Type:_ projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-cdktf-hybrid-construct.HybridModule.property.allowLibraryDependencies"></a>

- _Deprecated:_ use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-cdktf-hybrid-construct.HybridModule.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-cdktf-hybrid-construct.HybridModule.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- _Type:_ string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-cdktf-hybrid-construct.HybridModule.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- _Type:_ projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-cdktf-hybrid-construct.HybridModule.property.entrypoint"></a>

- _Deprecated:_ use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- _Type:_ string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-cdktf-hybrid-construct.HybridModule.property.manifest"></a>

- _Deprecated:_ use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- _Type:_ any

---

##### `package`<sup>Required</sup> <a name="package" id="projen-cdktf-hybrid-construct.HybridModule.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- _Type:_ projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-cdktf-hybrid-construct.HybridModule.property.packageManager"></a>

- _Deprecated:_ use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-cdktf-hybrid-construct.HybridModule.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- _Type:_ string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-cdktf-hybrid-construct.HybridModule.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- _Type:_ projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-cdktf-hybrid-construct.HybridModule.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- _Type:_ projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-cdktf-hybrid-construct.HybridModule.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- _Type:_ string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-cdktf-hybrid-construct.HybridModule.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- _Type:_ projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-cdktf-hybrid-construct.HybridModule.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-cdktf-hybrid-construct.HybridModule.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-cdktf-hybrid-construct.HybridModule.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-cdktf-hybrid-construct.HybridModule.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- _Type:_ projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-cdktf-hybrid-construct.HybridModule.property.publisher"></a>

- _Deprecated:_ use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- _Type:_ projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-cdktf-hybrid-construct.HybridModule.property.release"></a>

```typescript
public readonly release: Release;
```

- _Type:_ projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-cdktf-hybrid-construct.HybridModule.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- _Type:_ projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-cdktf-hybrid-construct.HybridModule.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-cdktf-hybrid-construct.HybridModule.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-cdktf-hybrid-construct.HybridModule.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-cdktf-hybrid-construct.HybridModule.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-cdktf-hybrid-construct.HybridModule.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-cdktf-hybrid-construct.HybridModule.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- _Type:_ projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-cdktf-hybrid-construct.HybridModule.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-cdktf-hybrid-construct.HybridModule.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- _Type:_ projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-cdktf-hybrid-construct.HybridModule.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-cdktf-hybrid-construct.HybridModule.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name**                                                                                                  | **Type**            | **Description**                                                                          |
| --------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.HybridModule.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-cdktf-hybrid-construct.HybridModule.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- _Type:_ string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### TerraformModule <a name="TerraformModule" id="projen-cdktf-hybrid-construct.TerraformModule"></a>

Terraform Modules republished as CDKTF Constructs.

#### Initializers <a name="Initializers" id="projen-cdktf-hybrid-construct.TerraformModule.Initializer"></a>

```typescript
import { TerraformModule } from 'projen-cdktf-hybrid-construct'

new TerraformModule(options: TerraformModuleOptions)
```

| **Name**                                                                                                        | **Type**                                                                                                | **Description**   |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.Initializer.parameter.options">options</a></code> | <code><a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions">TerraformModuleOptions</a></code> | _No description._ |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-cdktf-hybrid-construct.TerraformModule.Initializer.parameter.options"></a>

- _Type:_ <a href="#projen-cdktf-hybrid-construct.TerraformModuleOptions">TerraformModuleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                              | **Description**                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup.                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addGitIgnore">addGitIgnore</a></code>                   | Adds a .gitignore pattern.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addPackageIgnore">addPackageIgnore</a></code>           | Exclude these files from the bundled package.                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addTask">addTask</a></code>                             | Adds a new task to this project.                                                         |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addTip">addTip</a></code>                               | Prints a "tip" message during synthesis.                                                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.annotateGenerated">annotateGenerated</a></code>         | Marks the provided file(s) as being generated.                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.postSynthesize">postSynthesize</a></code>               | Called after all components are synthesized.                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.preSynthesize">preSynthesize</a></code>                 | Called before all components are synthesized.                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.removeTask">removeTask</a></code>                       | Removes a task from a project.                                                           |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.runTaskCommand">runTaskCommand</a></code>               | Returns the shell command to execute in order to run a task.                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.synth">synth</a></code>                                 | Synthesize all project files into `outdir`.                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.tryFindFile">tryFindFile</a></code>                     | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.tryFindJsonFile">tryFindJsonFile</a></code>             | Finds a json file by name.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.tryFindObjectFile">tryFindObjectFile</a></code>         | Finds an object file (like JsonFile, YamlFile, etc.) by name.                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.tryRemoveFile">tryRemoveFile</a></code>                 | Finds a file at the specified relative path within this project and removes it.          |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addBins">addBins</a></code>                             | _No description._                                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addBundledDeps">addBundledDeps</a></code>               | Defines bundled dependencies.                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addCompileCommand">addCompileCommand</a></code>         | DEPRECATED.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addDeps">addDeps</a></code>                             | Defines normal dependencies.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addDevDeps">addDevDeps</a></code>                       | Defines development/test dependencies.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addFields">addFields</a></code>                         | Directly set fields in `package.json`.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addKeywords">addKeywords</a></code>                     | Adds keywords to package.json (deduplicated).                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addPeerDeps">addPeerDeps</a></code>                     | Defines peer dependencies.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.addTestCommand">addTestCommand</a></code>               | DEPRECATED.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.hasScript">hasScript</a></code>                         | Indicates if a script by the name name is defined.                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.removeScript">removeScript</a></code>                   | Removes the npm script (always successful).                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.renderWorkflowSetup">renderWorkflowSetup</a></code>     | Returns the set of workflow steps which should be executed to bootstrap a workflow.      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.setScript">setScript</a></code>                         | Replaces the contents of an npm package.json script.                                     |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-cdktf-hybrid-construct.TerraformModule.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-cdktf-hybrid-construct.TerraformModule.addExcludeFromCleanup.parameter.globs"></a>

- _Type:_ string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-cdktf-hybrid-construct.TerraformModule.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-cdktf-hybrid-construct.TerraformModule.addGitIgnore.parameter.pattern"></a>

- _Type:_ string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-cdktf-hybrid-construct.TerraformModule.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-cdktf-hybrid-construct.TerraformModule.addPackageIgnore.parameter.pattern"></a>

- _Type:_ string

---

##### `addTask` <a name="addTask" id="projen-cdktf-hybrid-construct.TerraformModule.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.addTask.parameter.name"></a>

- _Type:_ string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-cdktf-hybrid-construct.TerraformModule.addTask.parameter.props"></a>

- _Type:_ projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-cdktf-hybrid-construct.TerraformModule.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-cdktf-hybrid-construct.TerraformModule.addTip.parameter.message"></a>

- _Type:_ string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-cdktf-hybrid-construct.TerraformModule.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-cdktf-hybrid-construct.TerraformModule.annotateGenerated.parameter.glob"></a>

- _Type:_ string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-cdktf-hybrid-construct.TerraformModule.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is _not_ guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-cdktf-hybrid-construct.TerraformModule.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-cdktf-hybrid-construct.TerraformModule.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.removeTask.parameter.name"></a>

- _Type:_ string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-cdktf-hybrid-construct.TerraformModule.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-cdktf-hybrid-construct.TerraformModule.runTaskCommand.parameter.task"></a>

- _Type:_ projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-cdktf-hybrid-construct.TerraformModule.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindJsonFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.TerraformModule.tryFindObjectFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-cdktf-hybrid-construct.TerraformModule.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cdktf-hybrid-construct.TerraformModule.tryRemoveFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-cdktf-hybrid-construct.TerraformModule.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-cdktf-hybrid-construct.TerraformModule.addBins.parameter.bins"></a>

- _Type:_ {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-cdktf-hybrid-construct.TerraformModule.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModule.addBundledDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-cdktf-hybrid-construct.TerraformModule.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-cdktf-hybrid-construct.TerraformModule.addCompileCommand.parameter.commands"></a>

- _Type:_ string

---

##### `addDeps` <a name="addDeps" id="projen-cdktf-hybrid-construct.TerraformModule.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModule.addDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-cdktf-hybrid-construct.TerraformModule.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModule.addDevDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-cdktf-hybrid-construct.TerraformModule.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-cdktf-hybrid-construct.TerraformModule.addFields.parameter.fields"></a>

- _Type:_ {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-cdktf-hybrid-construct.TerraformModule.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-cdktf-hybrid-construct.TerraformModule.addKeywords.parameter.keywords"></a>

- _Type:_ string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-cdktf-hybrid-construct.TerraformModule.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModule.addPeerDeps.parameter.deps"></a>

- _Type:_ string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-cdktf-hybrid-construct.TerraformModule.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-cdktf-hybrid-construct.TerraformModule.addTestCommand.parameter.commands"></a>

- _Type:_ string

---

##### `hasScript` <a name="hasScript" id="projen-cdktf-hybrid-construct.TerraformModule.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.hasScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-cdktf-hybrid-construct.TerraformModule.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.removeScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-cdktf-hybrid-construct.TerraformModule.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-cdktf-hybrid-construct.TerraformModule.renderWorkflowSetup.parameter.options"></a>

- _Type:_ projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-cdktf-hybrid-construct.TerraformModule.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.setScript.parameter.name"></a>

- _Type:_ string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-cdktf-hybrid-construct.TerraformModule.setScript.parameter.command"></a>

- _Type:_ string

The command to execute.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                     | **Type**                                           | **Description**                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.buildTask">buildTask</a></code>                                       | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.compileTask">compileTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.components">components</a></code>                                     | <code>projen.Component[]</code>                    | Returns all the components within this project.                                                  |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.deps">deps</a></code>                                                 | <code>projen.Dependencies</code>                   | Project dependencies.                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.ejected">ejected</a></code>                                           | <code>boolean</code>                               | Whether or not the project is being ejected.                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.files">files</a></code>                                               | <code>projen.FileBase[]</code>                     | All files in this project.                                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.gitattributes">gitattributes</a></code>                               | <code>projen.GitAttributesFile</code>              | The .gitattributes file for this repository.                                                     |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.gitignore">gitignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | .gitignore.                                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.logger">logger</a></code>                                             | <code>projen.Logger</code>                         | Logging utilities.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.name">name</a></code>                                                 | <code>string</code>                                | Project name.                                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.outdir">outdir</a></code>                                             | <code>string</code>                                | Absolute output directory of this project.                                                       |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.packageTask">packageTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.postCompileTask">postCompileTask</a></code>                           | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.preCompileTask">preCompileTask</a></code>                             | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.projectBuild">projectBuild</a></code>                                 | <code>projen.ProjectBuild</code>                   | Manages the build process of the project.                                                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.projenCommand">projenCommand</a></code>                               | <code>string</code>                                | The command to use in order to run the projen CLI.                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.root">root</a></code>                                                 | <code>projen.Project</code>                        | The root project.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.tasks">tasks</a></code>                                               | <code>projen.Tasks</code>                          | Project tasks.                                                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.testTask">testTask</a></code>                                         | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.defaultTask">defaultTask</a></code>                                   | <code>projen.Task</code>                           | This is the "default" task, the one that executes "projen".                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.initProject">initProject</a></code>                                   | <code>projen.InitProject</code>                    | The options used when this project is bootstrapped via `projen new`.                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.parent">parent</a></code>                                             | <code>projen.Project</code>                        | A parent project.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.projectType">projectType</a></code>                                   | <code>projen.ProjectType</code>                    | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.autoApprove">autoApprove</a></code>                                   | <code>projen.github.AutoApprove</code>             | Auto approve set up for this project.                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.devContainer">devContainer</a></code>                                 | <code>projen.vscode.DevContainer</code>            | Access for .devcontainer.json (used for GitHub Codespaces).                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.github">github</a></code>                                             | <code>projen.github.GitHub</code>                  | Access all github components.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.gitpod">gitpod</a></code>                                             | <code>projen.Gitpod</code>                         | Access for Gitpod.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.vscode">vscode</a></code>                                             | <code>projen.vscode.VsCode</code>                  | Access all VSCode components.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.allowLibraryDependencies">allowLibraryDependencies</a></code>         | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.artifactsDirectory">artifactsDirectory</a></code>                     | <code>string</code>                                | The build output directory.                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code>                                | The location of the npm tarball after build (`${artifactsDirectory}/js`).                        |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.bundler">bundler</a></code>                                           | <code>projen.javascript.Bundler</code>             | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.entrypoint">entrypoint</a></code>                                     | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.manifest">manifest</a></code>                                         | <code>any</code>                                   | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.package">package</a></code>                                           | <code>projen.javascript.NodePackage</code>         | API for managing the node package.                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.packageManager">packageManager</a></code>                             | <code>projen.javascript.NodePackageManager</code>  | The package manager to use.                                                                      |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.runScriptCommand">runScriptCommand</a></code>                         | <code>string</code>                                | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.autoMerge">autoMerge</a></code>                                       | <code>projen.github.AutoMerge</code>               | Component that sets up mergify for merging approved pull requests.                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.buildWorkflow">buildWorkflow</a></code>                               | <code>projen.build.BuildWorkflow</code>            | The PR build GitHub workflow.                                                                    |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.buildWorkflowJobId">buildWorkflowJobId</a></code>                     | <code>string</code>                                | The job ID of the build workflow.                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.jest">jest</a></code>                                                 | <code>projen.javascript.Jest</code>                | The Jest configuration (if enabled).                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.maxNodeVersion">maxNodeVersion</a></code>                             | <code>string</code>                                | Maximum node version required by this pacakge.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.minNodeVersion">minNodeVersion</a></code>                             | <code>string</code>                                | Minimum node.js version required by this package.                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.npmignore">npmignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | The .npmignore file.                                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.prettier">prettier</a></code>                                         | <code>projen.javascript.Prettier</code>            | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.publisher">publisher</a></code>                                       | <code>projen.release.Publisher</code>              | Package publisher.                                                                               |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.release">release</a></code>                                           | <code>projen.release.Release</code>                | Release management.                                                                              |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.upgradeWorkflow">upgradeWorkflow</a></code>                           | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow.                                                                            |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.docsDirectory">docsDirectory</a></code>                               | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.libdir">libdir</a></code>                                             | <code>string</code>                                | The directory in which compiled .js files reside.                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.srcdir">srcdir</a></code>                                             | <code>string</code>                                | The directory in which the .ts sources reside.                                                   |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.testdir">testdir</a></code>                                           | <code>string</code>                                | The directory in which tests reside.                                                             |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.tsconfigDev">tsconfigDev</a></code>                                   | <code>projen.javascript.TypescriptConfig</code>    | A typescript configuration file which covers all files (sources, tests, projen).                 |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.watchTask">watchTask</a></code>                                       | <code>projen.Task</code>                           | The "watch" task.                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.docgen">docgen</a></code>                                             | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.eslint">eslint</a></code>                                             | <code>projen.javascript.Eslint</code>              | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.tsconfig">tsconfig</a></code>                                         | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.tsconfigEslint">tsconfigEslint</a></code>                             | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- _Type:_ projen.Task

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- _Type:_ projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-cdktf-hybrid-construct.TerraformModule.property.components"></a>

```typescript
public readonly components: Component[];
```

- _Type:_ projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-cdktf-hybrid-construct.TerraformModule.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- _Type:_ projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-cdktf-hybrid-construct.TerraformModule.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- _Type:_ boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-cdktf-hybrid-construct.TerraformModule.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- _Type:_ projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-cdktf-hybrid-construct.TerraformModule.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- _Type:_ projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-cdktf-hybrid-construct.TerraformModule.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-cdktf-hybrid-construct.TerraformModule.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- _Type:_ projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cdktf-hybrid-construct.TerraformModule.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-cdktf-hybrid-construct.TerraformModule.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- _Type:_ projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-cdktf-hybrid-construct.TerraformModule.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- _Type:_ projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-cdktf-hybrid-construct.TerraformModule.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-cdktf-hybrid-construct.TerraformModule.property.root"></a>

```typescript
public readonly root: Project;
```

- _Type:_ projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-cdktf-hybrid-construct.TerraformModule.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- _Type:_ projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- _Type:_ projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- _Type:_ projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-cdktf-hybrid-construct.TerraformModule.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- _Type:_ projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cdktf-hybrid-construct.TerraformModule.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-cdktf-hybrid-construct.TerraformModule.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-cdktf-hybrid-construct.TerraformModule.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- _Type:_ projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-cdktf-hybrid-construct.TerraformModule.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- _Type:_ projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-cdktf-hybrid-construct.TerraformModule.property.github"></a>

```typescript
public readonly github: GitHub;
```

- _Type:_ projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-cdktf-hybrid-construct.TerraformModule.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- _Type:_ projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-cdktf-hybrid-construct.TerraformModule.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- _Type:_ projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-cdktf-hybrid-construct.TerraformModule.property.allowLibraryDependencies"></a>

- _Deprecated:_ use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-cdktf-hybrid-construct.TerraformModule.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-cdktf-hybrid-construct.TerraformModule.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- _Type:_ string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-cdktf-hybrid-construct.TerraformModule.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- _Type:_ projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-cdktf-hybrid-construct.TerraformModule.property.entrypoint"></a>

- _Deprecated:_ use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- _Type:_ string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-cdktf-hybrid-construct.TerraformModule.property.manifest"></a>

- _Deprecated:_ use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- _Type:_ any

---

##### `package`<sup>Required</sup> <a name="package" id="projen-cdktf-hybrid-construct.TerraformModule.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- _Type:_ projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-cdktf-hybrid-construct.TerraformModule.property.packageManager"></a>

- _Deprecated:_ use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-cdktf-hybrid-construct.TerraformModule.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- _Type:_ string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-cdktf-hybrid-construct.TerraformModule.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- _Type:_ projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-cdktf-hybrid-construct.TerraformModule.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- _Type:_ projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-cdktf-hybrid-construct.TerraformModule.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- _Type:_ string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-cdktf-hybrid-construct.TerraformModule.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- _Type:_ projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-cdktf-hybrid-construct.TerraformModule.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-cdktf-hybrid-construct.TerraformModule.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-cdktf-hybrid-construct.TerraformModule.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-cdktf-hybrid-construct.TerraformModule.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- _Type:_ projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-cdktf-hybrid-construct.TerraformModule.property.publisher"></a>

- _Deprecated:_ use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- _Type:_ projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-cdktf-hybrid-construct.TerraformModule.property.release"></a>

```typescript
public readonly release: Release;
```

- _Type:_ projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-cdktf-hybrid-construct.TerraformModule.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- _Type:_ projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-cdktf-hybrid-construct.TerraformModule.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-cdktf-hybrid-construct.TerraformModule.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-cdktf-hybrid-construct.TerraformModule.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-cdktf-hybrid-construct.TerraformModule.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-cdktf-hybrid-construct.TerraformModule.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-cdktf-hybrid-construct.TerraformModule.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- _Type:_ projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-cdktf-hybrid-construct.TerraformModule.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-cdktf-hybrid-construct.TerraformModule.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- _Type:_ projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-cdktf-hybrid-construct.TerraformModule.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-cdktf-hybrid-construct.TerraformModule.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name**                                                                                                     | **Type**            | **Description**                                                                          |
| ------------------------------------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-cdktf-hybrid-construct.TerraformModule.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-cdktf-hybrid-construct.TerraformModule.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- _Type:_ string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---
