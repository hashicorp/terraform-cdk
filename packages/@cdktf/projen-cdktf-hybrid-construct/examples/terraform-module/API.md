# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eks <a name="Eks" id="my-module.Eks"></a>

#### Initializers <a name="Initializers" id="my-module.Eks.Initializer"></a>

```typescript
import { Eks } from 'my-module'

new Eks(scope: Construct, id: string, options?: EksOptions)
```

| **Name**                                                                        | **Type**                                                    | **Description**   |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.Eks.Initializer.parameter.scope">scope</a></code>     | <code>constructs.Construct</code>                           | _No description._ |
| <code><a href="#my-module.Eks.Initializer.parameter.id">id</a></code>           | <code>string</code>                                         | _No description._ |
| <code><a href="#my-module.Eks.Initializer.parameter.options">options</a></code> | <code><a href="#my-module.EksOptions">EksOptions</a></code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="my-module.Eks.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="my-module.Eks.Initializer.parameter.id"></a>

- _Type:_ string

---

##### `options`<sup>Optional</sup> <a name="options" id="my-module.Eks.Initializer.parameter.options"></a>

- _Type:_ <a href="#my-module.EksOptions">EksOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                | **Description**                                                                   |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <code><a href="#my-module.Eks.toString">toString</a></code>                             | Returns a string representation of this construct.                                |
| <code><a href="#my-module.Eks.addOverride">addOverride</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.Eks.overrideLogicalId">overrideLogicalId</a></code>           | Overrides the auto-generated logical ID with a specific ID.                       |
| <code><a href="#my-module.Eks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#my-module.Eks.toMetadata">toMetadata</a></code>                         | _No description._                                                                 |
| <code><a href="#my-module.Eks.toTerraform">toTerraform</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.Eks.addProvider">addProvider</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.Eks.getString">getString</a></code>                           | _No description._                                                                 |
| <code><a href="#my-module.Eks.interpolationForOutput">interpolationForOutput</a></code> | _No description._                                                                 |

---

##### `toString` <a name="toString" id="my-module.Eks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="my-module.Eks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="my-module.Eks.addOverride.parameter.path"></a>

- _Type:_ string

---

###### `value`<sup>Required</sup> <a name="value" id="my-module.Eks.addOverride.parameter.value"></a>

- _Type:_ any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="my-module.Eks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="my-module.Eks.overrideLogicalId.parameter.newLogicalId"></a>

- _Type:_ string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="my-module.Eks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="my-module.Eks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="my-module.Eks.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="my-module.Eks.addProvider"></a>

```typescript
public addProvider(provider: TerraformModuleProvider | TerraformProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="my-module.Eks.addProvider.parameter.provider"></a>

- _Type:_ cdktf.TerraformModuleProvider | cdktf.TerraformProvider

---

##### `getString` <a name="getString" id="my-module.Eks.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="my-module.Eks.getString.parameter.output"></a>

- _Type:_ string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="my-module.Eks.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="my-module.Eks.interpolationForOutput.parameter.moduleOutput"></a>

- _Type:_ string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                          | **Description**               |
| ----------------------------------------------------------------- | ----------------------------- |
| <code><a href="#my-module.Eks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="my-module.Eks.isConstruct"></a>

```typescript
import { Eks } from 'my-module'

Eks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="my-module.Eks.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                             | **Type**                                                                | **Description**   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.Eks.property.node">node</a></code>                                                                                         | <code>constructs.Node</code>                                            | The tree node.    |
| <code><a href="#my-module.Eks.property.cdktfStack">cdktfStack</a></code>                                                                             | <code>cdktf.TerraformStack</code>                                       | _No description._ |
| <code><a href="#my-module.Eks.property.friendlyUniqueId">friendlyUniqueId</a></code>                                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.fqn">fqn</a></code>                                                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.source">source</a></code>                                                                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.providers">providers</a></code>                                                                               | <code>cdktf.TerraformModuleProvider \| cdktf.TerraformProvider[]</code> | _No description._ |
| <code><a href="#my-module.Eks.property.version">version</a></code>                                                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.dependsOn">dependsOn</a></code>                                                                               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthConfigmapYamlOutput">awsAuthConfigmapYamlOutput</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.cloudwatchLogGroupArnOutput">cloudwatchLogGroupArnOutput</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.cloudwatchLogGroupNameOutput">cloudwatchLogGroupNameOutput</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterAddonsOutput">clusterAddonsOutput</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterArnOutput">clusterArnOutput</a></code>                                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterCertificateAuthorityDataOutput">clusterCertificateAuthorityDataOutput</a></code>                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEndpointOutput">clusterEndpointOutput</a></code>                                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIamRoleArnOutput">clusterIamRoleArnOutput</a></code>                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIamRoleNameOutput">clusterIamRoleNameOutput</a></code>                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIamRoleUniqueIdOutput">clusterIamRoleUniqueIdOutput</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIdentityProvidersOutput">clusterIdentityProvidersOutput</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIdOutput">clusterIdOutput</a></code>                                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterOidcIssuerUrlOutput">clusterOidcIssuerUrlOutput</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterPlatformVersionOutput">clusterPlatformVersionOutput</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterPrimarySecurityGroupIdOutput">clusterPrimarySecurityGroupIdOutput</a></code>                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupArnOutput">clusterSecurityGroupArnOutput</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupIdOutput">clusterSecurityGroupIdOutput</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterStatusOutput">clusterStatusOutput</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterVersionOutput">clusterVersionOutput</a></code>                                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.eksManagedNodeGroupsAutoscalingGroupNamesOutput">eksManagedNodeGroupsAutoscalingGroupNamesOutput</a></code>   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.eksManagedNodeGroupsOutput">eksManagedNodeGroupsOutput</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.fargateProfilesOutput">fargateProfilesOutput</a></code>                                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupArnOutput">nodeSecurityGroupArnOutput</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupIdOutput">nodeSecurityGroupIdOutput</a></code>                                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.oidcProviderArnOutput">oidcProviderArnOutput</a></code>                                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.oidcProviderOutput">oidcProviderOutput</a></code>                                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.selfManagedNodeGroupsAutoscalingGroupNamesOutput">selfManagedNodeGroupsAutoscalingGroupNamesOutput</a></code> | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.selfManagedNodeGroupsOutput">selfManagedNodeGroupsOutput</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterAddons">clusterAddons</a></code>                                                                       | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionConfig">clusterEncryptionConfig</a></code>                                                   | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIdentityProviders">clusterIdentityProviders</a></code>                                                 | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupAdditionalRules">clusterSecurityGroupAdditionalRules</a></code>                           | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.eksManagedNodeGroupDefaults">eksManagedNodeGroupDefaults</a></code>                                           | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.eksManagedNodeGroups">eksManagedNodeGroups</a></code>                                                         | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.fargateProfileDefaults">fargateProfileDefaults</a></code>                                                     | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.fargateProfiles">fargateProfiles</a></code>                                                                   | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupAdditionalRules">nodeSecurityGroupAdditionalRules</a></code>                                 | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.selfManagedNodeGroupDefaults">selfManagedNodeGroupDefaults</a></code>                                         | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.selfManagedNodeGroups">selfManagedNodeGroups</a></code>                                                       | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.Eks.property.attachClusterEncryptionPolicy">attachClusterEncryptionPolicy</a></code>                                       | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthAccounts">awsAuthAccounts</a></code>                                                                   | <code>any[]</code>                                                      | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthFargateProfilePodExecutionRoleArns">awsAuthFargateProfilePodExecutionRoleArns</a></code>               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthNodeIamRoleArnsNonWindows">awsAuthNodeIamRoleArnsNonWindows</a></code>                                 | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthNodeIamRoleArnsWindows">awsAuthNodeIamRoleArnsWindows</a></code>                                       | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthRoles">awsAuthRoles</a></code>                                                                         | <code>any[]</code>                                                      | _No description._ |
| <code><a href="#my-module.Eks.property.awsAuthUsers">awsAuthUsers</a></code>                                                                         | <code>any[]</code>                                                      | _No description._ |
| <code><a href="#my-module.Eks.property.cloudwatchLogGroupKmsKeyId">cloudwatchLogGroupKmsKeyId</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.cloudwatchLogGroupRetentionInDays">cloudwatchLogGroupRetentionInDays</a></code>                               | <code>number</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterAdditionalSecurityGroupIds">clusterAdditionalSecurityGroupIds</a></code>                               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEnabledLogTypes">clusterEnabledLogTypes</a></code>                                                     | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionPolicyDescription">clusterEncryptionPolicyDescription</a></code>                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionPolicyName">clusterEncryptionPolicyName</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionPolicyPath">clusterEncryptionPolicyPath</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionPolicyTags">clusterEncryptionPolicyTags</a></code>                                           | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEncryptionPolicyUseNamePrefix">clusterEncryptionPolicyUseNamePrefix</a></code>                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEndpointPrivateAccess">clusterEndpointPrivateAccess</a></code>                                         | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEndpointPublicAccess">clusterEndpointPublicAccess</a></code>                                           | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.clusterEndpointPublicAccessCidrs">clusterEndpointPublicAccessCidrs</a></code>                                 | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIamRoleDnsSuffix">clusterIamRoleDnsSuffix</a></code>                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterIpFamily">clusterIpFamily</a></code>                                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterName">clusterName</a></code>                                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupDescription">clusterSecurityGroupDescription</a></code>                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code>                                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupName">clusterSecurityGroupName</a></code>                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupTags">clusterSecurityGroupTags</a></code>                                                 | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.clusterSecurityGroupUseNamePrefix">clusterSecurityGroupUseNamePrefix</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code>                                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.clusterTags">clusterTags</a></code>                                                                           | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.clusterTimeouts">clusterTimeouts</a></code>                                                                   | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.clusterVersion">clusterVersion</a></code>                                                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.create">create</a></code>                                                                                     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createAwsAuthConfigmap">createAwsAuthConfigmap</a></code>                                                     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createCloudwatchLogGroup">createCloudwatchLogGroup</a></code>                                                 | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createClusterPrimarySecurityGroupTags">createClusterPrimarySecurityGroupTags</a></code>                       | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createClusterSecurityGroup">createClusterSecurityGroup</a></code>                                             | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createCniIpv6IamPolicy">createCniIpv6IamPolicy</a></code>                                                     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createIamRole">createIamRole</a></code>                                                                       | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.createNodeSecurityGroup">createNodeSecurityGroup</a></code>                                                   | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.customOidcThumbprints">customOidcThumbprints</a></code>                                                       | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.enableIrsa">enableIrsa</a></code>                                                                             | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code>                                               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleArn">iamRoleArn</a></code>                                                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleDescription">iamRoleDescription</a></code>                                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleName">iamRoleName</a></code>                                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.iamRolePath">iamRolePath</a></code>                                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleTags">iamRoleTags</a></code>                                                                           | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code>                                                         | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.manageAwsAuthConfigmap">manageAwsAuthConfigmap</a></code>                                                     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupDescription">nodeSecurityGroupDescription</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupId">nodeSecurityGroupId</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupName">nodeSecurityGroupName</a></code>                                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupTags">nodeSecurityGroupTags</a></code>                                                       | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.nodeSecurityGroupUseNamePrefix">nodeSecurityGroupUseNamePrefix</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.openidConnectAudiences">openidConnectAudiences</a></code>                                                     | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.prefixSeparator">prefixSeparator</a></code>                                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.Eks.property.putinKhuylo">putinKhuylo</a></code>                                                                           | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.Eks.property.subnetIds">subnetIds</a></code>                                                                               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.Eks.property.tags">tags</a></code>                                                                                         | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.Eks.property.vpcId">vpcId</a></code>                                                                                       | <code>string</code>                                                     | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="my-module.Eks.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="my-module.Eks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- _Type:_ cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="my-module.Eks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- _Type:_ string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="my-module.Eks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- _Type:_ string

---

##### `source`<sup>Required</sup> <a name="source" id="my-module.Eks.property.source"></a>

```typescript
public readonly source: string;
```

- _Type:_ string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="my-module.Eks.property.providers"></a>

```typescript
public readonly providers: TerraformModuleProvider | TerraformProvider[];
```

- _Type:_ cdktf.TerraformModuleProvider | cdktf.TerraformProvider[]

---

##### `version`<sup>Optional</sup> <a name="version" id="my-module.Eks.property.version"></a>

```typescript
public readonly version: string;
```

- _Type:_ string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="my-module.Eks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- _Type:_ string[]

---

##### `awsAuthConfigmapYamlOutput`<sup>Required</sup> <a name="awsAuthConfigmapYamlOutput" id="my-module.Eks.property.awsAuthConfigmapYamlOutput"></a>

```typescript
public readonly awsAuthConfigmapYamlOutput: string;
```

- _Type:_ string

---

##### `cloudwatchLogGroupArnOutput`<sup>Required</sup> <a name="cloudwatchLogGroupArnOutput" id="my-module.Eks.property.cloudwatchLogGroupArnOutput"></a>

```typescript
public readonly cloudwatchLogGroupArnOutput: string;
```

- _Type:_ string

---

##### `cloudwatchLogGroupNameOutput`<sup>Required</sup> <a name="cloudwatchLogGroupNameOutput" id="my-module.Eks.property.cloudwatchLogGroupNameOutput"></a>

```typescript
public readonly cloudwatchLogGroupNameOutput: string;
```

- _Type:_ string

---

##### `clusterAddonsOutput`<sup>Required</sup> <a name="clusterAddonsOutput" id="my-module.Eks.property.clusterAddonsOutput"></a>

```typescript
public readonly clusterAddonsOutput: string;
```

- _Type:_ string

---

##### `clusterArnOutput`<sup>Required</sup> <a name="clusterArnOutput" id="my-module.Eks.property.clusterArnOutput"></a>

```typescript
public readonly clusterArnOutput: string;
```

- _Type:_ string

---

##### `clusterCertificateAuthorityDataOutput`<sup>Required</sup> <a name="clusterCertificateAuthorityDataOutput" id="my-module.Eks.property.clusterCertificateAuthorityDataOutput"></a>

```typescript
public readonly clusterCertificateAuthorityDataOutput: string;
```

- _Type:_ string

---

##### `clusterEndpointOutput`<sup>Required</sup> <a name="clusterEndpointOutput" id="my-module.Eks.property.clusterEndpointOutput"></a>

```typescript
public readonly clusterEndpointOutput: string;
```

- _Type:_ string

---

##### `clusterIamRoleArnOutput`<sup>Required</sup> <a name="clusterIamRoleArnOutput" id="my-module.Eks.property.clusterIamRoleArnOutput"></a>

```typescript
public readonly clusterIamRoleArnOutput: string;
```

- _Type:_ string

---

##### `clusterIamRoleNameOutput`<sup>Required</sup> <a name="clusterIamRoleNameOutput" id="my-module.Eks.property.clusterIamRoleNameOutput"></a>

```typescript
public readonly clusterIamRoleNameOutput: string;
```

- _Type:_ string

---

##### `clusterIamRoleUniqueIdOutput`<sup>Required</sup> <a name="clusterIamRoleUniqueIdOutput" id="my-module.Eks.property.clusterIamRoleUniqueIdOutput"></a>

```typescript
public readonly clusterIamRoleUniqueIdOutput: string;
```

- _Type:_ string

---

##### `clusterIdentityProvidersOutput`<sup>Required</sup> <a name="clusterIdentityProvidersOutput" id="my-module.Eks.property.clusterIdentityProvidersOutput"></a>

```typescript
public readonly clusterIdentityProvidersOutput: string;
```

- _Type:_ string

---

##### `clusterIdOutput`<sup>Required</sup> <a name="clusterIdOutput" id="my-module.Eks.property.clusterIdOutput"></a>

```typescript
public readonly clusterIdOutput: string;
```

- _Type:_ string

---

##### `clusterOidcIssuerUrlOutput`<sup>Required</sup> <a name="clusterOidcIssuerUrlOutput" id="my-module.Eks.property.clusterOidcIssuerUrlOutput"></a>

```typescript
public readonly clusterOidcIssuerUrlOutput: string;
```

- _Type:_ string

---

##### `clusterPlatformVersionOutput`<sup>Required</sup> <a name="clusterPlatformVersionOutput" id="my-module.Eks.property.clusterPlatformVersionOutput"></a>

```typescript
public readonly clusterPlatformVersionOutput: string;
```

- _Type:_ string

---

##### `clusterPrimarySecurityGroupIdOutput`<sup>Required</sup> <a name="clusterPrimarySecurityGroupIdOutput" id="my-module.Eks.property.clusterPrimarySecurityGroupIdOutput"></a>

```typescript
public readonly clusterPrimarySecurityGroupIdOutput: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupArnOutput`<sup>Required</sup> <a name="clusterSecurityGroupArnOutput" id="my-module.Eks.property.clusterSecurityGroupArnOutput"></a>

```typescript
public readonly clusterSecurityGroupArnOutput: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupIdOutput`<sup>Required</sup> <a name="clusterSecurityGroupIdOutput" id="my-module.Eks.property.clusterSecurityGroupIdOutput"></a>

```typescript
public readonly clusterSecurityGroupIdOutput: string;
```

- _Type:_ string

---

##### `clusterStatusOutput`<sup>Required</sup> <a name="clusterStatusOutput" id="my-module.Eks.property.clusterStatusOutput"></a>

```typescript
public readonly clusterStatusOutput: string;
```

- _Type:_ string

---

##### `clusterVersionOutput`<sup>Required</sup> <a name="clusterVersionOutput" id="my-module.Eks.property.clusterVersionOutput"></a>

```typescript
public readonly clusterVersionOutput: string;
```

- _Type:_ string

---

##### `eksManagedNodeGroupsAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="eksManagedNodeGroupsAutoscalingGroupNamesOutput" id="my-module.Eks.property.eksManagedNodeGroupsAutoscalingGroupNamesOutput"></a>

```typescript
public readonly eksManagedNodeGroupsAutoscalingGroupNamesOutput: string;
```

- _Type:_ string

---

##### `eksManagedNodeGroupsOutput`<sup>Required</sup> <a name="eksManagedNodeGroupsOutput" id="my-module.Eks.property.eksManagedNodeGroupsOutput"></a>

```typescript
public readonly eksManagedNodeGroupsOutput: string;
```

- _Type:_ string

---

##### `fargateProfilesOutput`<sup>Required</sup> <a name="fargateProfilesOutput" id="my-module.Eks.property.fargateProfilesOutput"></a>

```typescript
public readonly fargateProfilesOutput: string;
```

- _Type:_ string

---

##### `nodeSecurityGroupArnOutput`<sup>Required</sup> <a name="nodeSecurityGroupArnOutput" id="my-module.Eks.property.nodeSecurityGroupArnOutput"></a>

```typescript
public readonly nodeSecurityGroupArnOutput: string;
```

- _Type:_ string

---

##### `nodeSecurityGroupIdOutput`<sup>Required</sup> <a name="nodeSecurityGroupIdOutput" id="my-module.Eks.property.nodeSecurityGroupIdOutput"></a>

```typescript
public readonly nodeSecurityGroupIdOutput: string;
```

- _Type:_ string

---

##### `oidcProviderArnOutput`<sup>Required</sup> <a name="oidcProviderArnOutput" id="my-module.Eks.property.oidcProviderArnOutput"></a>

```typescript
public readonly oidcProviderArnOutput: string;
```

- _Type:_ string

---

##### `oidcProviderOutput`<sup>Required</sup> <a name="oidcProviderOutput" id="my-module.Eks.property.oidcProviderOutput"></a>

```typescript
public readonly oidcProviderOutput: string;
```

- _Type:_ string

---

##### `selfManagedNodeGroupsAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="selfManagedNodeGroupsAutoscalingGroupNamesOutput" id="my-module.Eks.property.selfManagedNodeGroupsAutoscalingGroupNamesOutput"></a>

```typescript
public readonly selfManagedNodeGroupsAutoscalingGroupNamesOutput: string;
```

- _Type:_ string

---

##### `selfManagedNodeGroupsOutput`<sup>Required</sup> <a name="selfManagedNodeGroupsOutput" id="my-module.Eks.property.selfManagedNodeGroupsOutput"></a>

```typescript
public readonly selfManagedNodeGroupsOutput: string;
```

- _Type:_ string

---

##### `clusterAddons`<sup>Required</sup> <a name="clusterAddons" id="my-module.Eks.property.clusterAddons"></a>

```typescript
public readonly clusterAddons: any;
```

- _Type:_ any

---

##### `clusterEncryptionConfig`<sup>Required</sup> <a name="clusterEncryptionConfig" id="my-module.Eks.property.clusterEncryptionConfig"></a>

```typescript
public readonly clusterEncryptionConfig: any;
```

- _Type:_ any

---

##### `clusterIdentityProviders`<sup>Required</sup> <a name="clusterIdentityProviders" id="my-module.Eks.property.clusterIdentityProviders"></a>

```typescript
public readonly clusterIdentityProviders: any;
```

- _Type:_ any

---

##### `clusterSecurityGroupAdditionalRules`<sup>Required</sup> <a name="clusterSecurityGroupAdditionalRules" id="my-module.Eks.property.clusterSecurityGroupAdditionalRules"></a>

```typescript
public readonly clusterSecurityGroupAdditionalRules: any;
```

- _Type:_ any

---

##### `eksManagedNodeGroupDefaults`<sup>Required</sup> <a name="eksManagedNodeGroupDefaults" id="my-module.Eks.property.eksManagedNodeGroupDefaults"></a>

```typescript
public readonly eksManagedNodeGroupDefaults: any;
```

- _Type:_ any

---

##### `eksManagedNodeGroups`<sup>Required</sup> <a name="eksManagedNodeGroups" id="my-module.Eks.property.eksManagedNodeGroups"></a>

```typescript
public readonly eksManagedNodeGroups: any;
```

- _Type:_ any

---

##### `fargateProfileDefaults`<sup>Required</sup> <a name="fargateProfileDefaults" id="my-module.Eks.property.fargateProfileDefaults"></a>

```typescript
public readonly fargateProfileDefaults: any;
```

- _Type:_ any

---

##### `fargateProfiles`<sup>Required</sup> <a name="fargateProfiles" id="my-module.Eks.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: any;
```

- _Type:_ any

---

##### `nodeSecurityGroupAdditionalRules`<sup>Required</sup> <a name="nodeSecurityGroupAdditionalRules" id="my-module.Eks.property.nodeSecurityGroupAdditionalRules"></a>

```typescript
public readonly nodeSecurityGroupAdditionalRules: any;
```

- _Type:_ any

---

##### `selfManagedNodeGroupDefaults`<sup>Required</sup> <a name="selfManagedNodeGroupDefaults" id="my-module.Eks.property.selfManagedNodeGroupDefaults"></a>

```typescript
public readonly selfManagedNodeGroupDefaults: any;
```

- _Type:_ any

---

##### `selfManagedNodeGroups`<sup>Required</sup> <a name="selfManagedNodeGroups" id="my-module.Eks.property.selfManagedNodeGroups"></a>

```typescript
public readonly selfManagedNodeGroups: any;
```

- _Type:_ any

---

##### `attachClusterEncryptionPolicy`<sup>Optional</sup> <a name="attachClusterEncryptionPolicy" id="my-module.Eks.property.attachClusterEncryptionPolicy"></a>

```typescript
public readonly attachClusterEncryptionPolicy: boolean;
```

- _Type:_ boolean

---

##### `awsAuthAccounts`<sup>Optional</sup> <a name="awsAuthAccounts" id="my-module.Eks.property.awsAuthAccounts"></a>

```typescript
public readonly awsAuthAccounts: any[];
```

- _Type:_ any[]

---

##### `awsAuthFargateProfilePodExecutionRoleArns`<sup>Optional</sup> <a name="awsAuthFargateProfilePodExecutionRoleArns" id="my-module.Eks.property.awsAuthFargateProfilePodExecutionRoleArns"></a>

```typescript
public readonly awsAuthFargateProfilePodExecutionRoleArns: string[];
```

- _Type:_ string[]

---

##### `awsAuthNodeIamRoleArnsNonWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsNonWindows" id="my-module.Eks.property.awsAuthNodeIamRoleArnsNonWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsNonWindows: string[];
```

- _Type:_ string[]

---

##### `awsAuthNodeIamRoleArnsWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsWindows" id="my-module.Eks.property.awsAuthNodeIamRoleArnsWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsWindows: string[];
```

- _Type:_ string[]

---

##### `awsAuthRoles`<sup>Optional</sup> <a name="awsAuthRoles" id="my-module.Eks.property.awsAuthRoles"></a>

```typescript
public readonly awsAuthRoles: any[];
```

- _Type:_ any[]

---

##### `awsAuthUsers`<sup>Optional</sup> <a name="awsAuthUsers" id="my-module.Eks.property.awsAuthUsers"></a>

```typescript
public readonly awsAuthUsers: any[];
```

- _Type:_ any[]

---

##### `cloudwatchLogGroupKmsKeyId`<sup>Optional</sup> <a name="cloudwatchLogGroupKmsKeyId" id="my-module.Eks.property.cloudwatchLogGroupKmsKeyId"></a>

```typescript
public readonly cloudwatchLogGroupKmsKeyId: string;
```

- _Type:_ string

---

##### `cloudwatchLogGroupRetentionInDays`<sup>Optional</sup> <a name="cloudwatchLogGroupRetentionInDays" id="my-module.Eks.property.cloudwatchLogGroupRetentionInDays"></a>

```typescript
public readonly cloudwatchLogGroupRetentionInDays: number;
```

- _Type:_ number

---

##### `clusterAdditionalSecurityGroupIds`<sup>Optional</sup> <a name="clusterAdditionalSecurityGroupIds" id="my-module.Eks.property.clusterAdditionalSecurityGroupIds"></a>

```typescript
public readonly clusterAdditionalSecurityGroupIds: string[];
```

- _Type:_ string[]

---

##### `clusterEnabledLogTypes`<sup>Optional</sup> <a name="clusterEnabledLogTypes" id="my-module.Eks.property.clusterEnabledLogTypes"></a>

```typescript
public readonly clusterEnabledLogTypes: string[];
```

- _Type:_ string[]

---

##### `clusterEncryptionPolicyDescription`<sup>Optional</sup> <a name="clusterEncryptionPolicyDescription" id="my-module.Eks.property.clusterEncryptionPolicyDescription"></a>

```typescript
public readonly clusterEncryptionPolicyDescription: string;
```

- _Type:_ string

---

##### `clusterEncryptionPolicyName`<sup>Optional</sup> <a name="clusterEncryptionPolicyName" id="my-module.Eks.property.clusterEncryptionPolicyName"></a>

```typescript
public readonly clusterEncryptionPolicyName: string;
```

- _Type:_ string

---

##### `clusterEncryptionPolicyPath`<sup>Optional</sup> <a name="clusterEncryptionPolicyPath" id="my-module.Eks.property.clusterEncryptionPolicyPath"></a>

```typescript
public readonly clusterEncryptionPolicyPath: string;
```

- _Type:_ string

---

##### `clusterEncryptionPolicyTags`<sup>Optional</sup> <a name="clusterEncryptionPolicyTags" id="my-module.Eks.property.clusterEncryptionPolicyTags"></a>

```typescript
public readonly clusterEncryptionPolicyTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `clusterEncryptionPolicyUseNamePrefix`<sup>Optional</sup> <a name="clusterEncryptionPolicyUseNamePrefix" id="my-module.Eks.property.clusterEncryptionPolicyUseNamePrefix"></a>

```typescript
public readonly clusterEncryptionPolicyUseNamePrefix: string;
```

- _Type:_ string

---

##### `clusterEndpointPrivateAccess`<sup>Optional</sup> <a name="clusterEndpointPrivateAccess" id="my-module.Eks.property.clusterEndpointPrivateAccess"></a>

```typescript
public readonly clusterEndpointPrivateAccess: boolean;
```

- _Type:_ boolean

---

##### `clusterEndpointPublicAccess`<sup>Optional</sup> <a name="clusterEndpointPublicAccess" id="my-module.Eks.property.clusterEndpointPublicAccess"></a>

```typescript
public readonly clusterEndpointPublicAccess: boolean;
```

- _Type:_ boolean

---

##### `clusterEndpointPublicAccessCidrs`<sup>Optional</sup> <a name="clusterEndpointPublicAccessCidrs" id="my-module.Eks.property.clusterEndpointPublicAccessCidrs"></a>

```typescript
public readonly clusterEndpointPublicAccessCidrs: string[];
```

- _Type:_ string[]

---

##### `clusterIamRoleDnsSuffix`<sup>Optional</sup> <a name="clusterIamRoleDnsSuffix" id="my-module.Eks.property.clusterIamRoleDnsSuffix"></a>

```typescript
public readonly clusterIamRoleDnsSuffix: string;
```

- _Type:_ string

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="my-module.Eks.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- _Type:_ string

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="my-module.Eks.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupDescription`<sup>Optional</sup> <a name="clusterSecurityGroupDescription" id="my-module.Eks.property.clusterSecurityGroupDescription"></a>

```typescript
public readonly clusterSecurityGroupDescription: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="my-module.Eks.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="clusterSecurityGroupName" id="my-module.Eks.property.clusterSecurityGroupName"></a>

```typescript
public readonly clusterSecurityGroupName: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupTags`<sup>Optional</sup> <a name="clusterSecurityGroupTags" id="my-module.Eks.property.clusterSecurityGroupTags"></a>

```typescript
public readonly clusterSecurityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `clusterSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="clusterSecurityGroupUseNamePrefix" id="my-module.Eks.property.clusterSecurityGroupUseNamePrefix"></a>

```typescript
public readonly clusterSecurityGroupUseNamePrefix: string;
```

- _Type:_ string

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="my-module.Eks.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- _Type:_ string

---

##### `clusterTags`<sup>Optional</sup> <a name="clusterTags" id="my-module.Eks.property.clusterTags"></a>

```typescript
public readonly clusterTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `clusterTimeouts`<sup>Optional</sup> <a name="clusterTimeouts" id="my-module.Eks.property.clusterTimeouts"></a>

```typescript
public readonly clusterTimeouts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="my-module.Eks.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- _Type:_ string

---

##### `create`<sup>Optional</sup> <a name="create" id="my-module.Eks.property.create"></a>

```typescript
public readonly create: boolean;
```

- _Type:_ boolean

---

##### `createAwsAuthConfigmap`<sup>Optional</sup> <a name="createAwsAuthConfigmap" id="my-module.Eks.property.createAwsAuthConfigmap"></a>

```typescript
public readonly createAwsAuthConfigmap: boolean;
```

- _Type:_ boolean

---

##### `createCloudwatchLogGroup`<sup>Optional</sup> <a name="createCloudwatchLogGroup" id="my-module.Eks.property.createCloudwatchLogGroup"></a>

```typescript
public readonly createCloudwatchLogGroup: boolean;
```

- _Type:_ boolean

---

##### `createClusterPrimarySecurityGroupTags`<sup>Optional</sup> <a name="createClusterPrimarySecurityGroupTags" id="my-module.Eks.property.createClusterPrimarySecurityGroupTags"></a>

```typescript
public readonly createClusterPrimarySecurityGroupTags: boolean;
```

- _Type:_ boolean

---

##### `createClusterSecurityGroup`<sup>Optional</sup> <a name="createClusterSecurityGroup" id="my-module.Eks.property.createClusterSecurityGroup"></a>

```typescript
public readonly createClusterSecurityGroup: boolean;
```

- _Type:_ boolean

---

##### `createCniIpv6IamPolicy`<sup>Optional</sup> <a name="createCniIpv6IamPolicy" id="my-module.Eks.property.createCniIpv6IamPolicy"></a>

```typescript
public readonly createCniIpv6IamPolicy: boolean;
```

- _Type:_ boolean

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="my-module.Eks.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- _Type:_ boolean

---

##### `createNodeSecurityGroup`<sup>Optional</sup> <a name="createNodeSecurityGroup" id="my-module.Eks.property.createNodeSecurityGroup"></a>

```typescript
public readonly createNodeSecurityGroup: boolean;
```

- _Type:_ boolean

---

##### `customOidcThumbprints`<sup>Optional</sup> <a name="customOidcThumbprints" id="my-module.Eks.property.customOidcThumbprints"></a>

```typescript
public readonly customOidcThumbprints: string[];
```

- _Type:_ string[]

---

##### `enableIrsa`<sup>Optional</sup> <a name="enableIrsa" id="my-module.Eks.property.enableIrsa"></a>

```typescript
public readonly enableIrsa: boolean;
```

- _Type:_ boolean

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="my-module.Eks.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- _Type:_ string[]

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="my-module.Eks.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- _Type:_ string

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="my-module.Eks.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- _Type:_ string

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="my-module.Eks.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- _Type:_ string

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="my-module.Eks.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- _Type:_ string

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="my-module.Eks.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- _Type:_ string

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="my-module.Eks.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="my-module.Eks.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- _Type:_ boolean

---

##### `manageAwsAuthConfigmap`<sup>Optional</sup> <a name="manageAwsAuthConfigmap" id="my-module.Eks.property.manageAwsAuthConfigmap"></a>

```typescript
public readonly manageAwsAuthConfigmap: boolean;
```

- _Type:_ boolean

---

##### `nodeSecurityGroupDescription`<sup>Optional</sup> <a name="nodeSecurityGroupDescription" id="my-module.Eks.property.nodeSecurityGroupDescription"></a>

```typescript
public readonly nodeSecurityGroupDescription: string;
```

- _Type:_ string

---

##### `nodeSecurityGroupId`<sup>Optional</sup> <a name="nodeSecurityGroupId" id="my-module.Eks.property.nodeSecurityGroupId"></a>

```typescript
public readonly nodeSecurityGroupId: string;
```

- _Type:_ string

---

##### `nodeSecurityGroupName`<sup>Optional</sup> <a name="nodeSecurityGroupName" id="my-module.Eks.property.nodeSecurityGroupName"></a>

```typescript
public readonly nodeSecurityGroupName: string;
```

- _Type:_ string

---

##### `nodeSecurityGroupTags`<sup>Optional</sup> <a name="nodeSecurityGroupTags" id="my-module.Eks.property.nodeSecurityGroupTags"></a>

```typescript
public readonly nodeSecurityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `nodeSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="nodeSecurityGroupUseNamePrefix" id="my-module.Eks.property.nodeSecurityGroupUseNamePrefix"></a>

```typescript
public readonly nodeSecurityGroupUseNamePrefix: string;
```

- _Type:_ string

---

##### `openidConnectAudiences`<sup>Optional</sup> <a name="openidConnectAudiences" id="my-module.Eks.property.openidConnectAudiences"></a>

```typescript
public readonly openidConnectAudiences: string[];
```

- _Type:_ string[]

---

##### `prefixSeparator`<sup>Optional</sup> <a name="prefixSeparator" id="my-module.Eks.property.prefixSeparator"></a>

```typescript
public readonly prefixSeparator: string;
```

- _Type:_ string

---

##### `putinKhuylo`<sup>Optional</sup> <a name="putinKhuylo" id="my-module.Eks.property.putinKhuylo"></a>

```typescript
public readonly putinKhuylo: boolean;
```

- _Type:_ boolean

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="my-module.Eks.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- _Type:_ string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="my-module.Eks.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="my-module.Eks.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- _Type:_ string

---

### EksManagedNodegroup <a name="EksManagedNodegroup" id="my-module.EksManagedNodegroup"></a>

#### Initializers <a name="Initializers" id="my-module.EksManagedNodegroup.Initializer"></a>

```typescript
import { EksManagedNodegroup } from 'my-module'

new EksManagedNodegroup(scope: Construct, id: string, options?: EksManagedNodegroupOptions)
```

| **Name**                                                                                        | **Type**                                                                                    | **Description**   |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.EksManagedNodegroup.Initializer.parameter.scope">scope</a></code>     | <code>constructs.Construct</code>                                                           | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.Initializer.parameter.id">id</a></code>           | <code>string</code>                                                                         | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.Initializer.parameter.options">options</a></code> | <code><a href="#my-module.EksManagedNodegroupOptions">EksManagedNodegroupOptions</a></code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="my-module.EksManagedNodegroup.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="my-module.EksManagedNodegroup.Initializer.parameter.id"></a>

- _Type:_ string

---

##### `options`<sup>Optional</sup> <a name="options" id="my-module.EksManagedNodegroup.Initializer.parameter.options"></a>

- _Type:_ <a href="#my-module.EksManagedNodegroupOptions">EksManagedNodegroupOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                | **Description**                                                                   |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <code><a href="#my-module.EksManagedNodegroup.toString">toString</a></code>                             | Returns a string representation of this construct.                                |
| <code><a href="#my-module.EksManagedNodegroup.addOverride">addOverride</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.EksManagedNodegroup.overrideLogicalId">overrideLogicalId</a></code>           | Overrides the auto-generated logical ID with a specific ID.                       |
| <code><a href="#my-module.EksManagedNodegroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#my-module.EksManagedNodegroup.toMetadata">toMetadata</a></code>                         | _No description._                                                                 |
| <code><a href="#my-module.EksManagedNodegroup.toTerraform">toTerraform</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.EksManagedNodegroup.addProvider">addProvider</a></code>                       | _No description._                                                                 |
| <code><a href="#my-module.EksManagedNodegroup.getString">getString</a></code>                           | _No description._                                                                 |
| <code><a href="#my-module.EksManagedNodegroup.interpolationForOutput">interpolationForOutput</a></code> | _No description._                                                                 |

---

##### `toString` <a name="toString" id="my-module.EksManagedNodegroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="my-module.EksManagedNodegroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="my-module.EksManagedNodegroup.addOverride.parameter.path"></a>

- _Type:_ string

---

###### `value`<sup>Required</sup> <a name="value" id="my-module.EksManagedNodegroup.addOverride.parameter.value"></a>

- _Type:_ any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="my-module.EksManagedNodegroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="my-module.EksManagedNodegroup.overrideLogicalId.parameter.newLogicalId"></a>

- _Type:_ string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="my-module.EksManagedNodegroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="my-module.EksManagedNodegroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="my-module.EksManagedNodegroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="my-module.EksManagedNodegroup.addProvider"></a>

```typescript
public addProvider(provider: TerraformModuleProvider | TerraformProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="my-module.EksManagedNodegroup.addProvider.parameter.provider"></a>

- _Type:_ cdktf.TerraformModuleProvider | cdktf.TerraformProvider

---

##### `getString` <a name="getString" id="my-module.EksManagedNodegroup.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="my-module.EksManagedNodegroup.getString.parameter.output"></a>

- _Type:_ string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="my-module.EksManagedNodegroup.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="my-module.EksManagedNodegroup.interpolationForOutput.parameter.moduleOutput"></a>

- _Type:_ string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                          | **Description**               |
| --------------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#my-module.EksManagedNodegroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="my-module.EksManagedNodegroup.isConstruct"></a>

```typescript
import { EksManagedNodegroup } from 'my-module'

EksManagedNodegroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="my-module.EksManagedNodegroup.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                     | **Type**                                                                | **Description**   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| <code><a href="#my-module.EksManagedNodegroup.property.node">node</a></code>                                                                 | <code>constructs.Node</code>                                            | The tree node.    |
| <code><a href="#my-module.EksManagedNodegroup.property.cdktfStack">cdktfStack</a></code>                                                     | <code>cdktf.TerraformStack</code>                                       | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.friendlyUniqueId">friendlyUniqueId</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.fqn">fqn</a></code>                                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.source">source</a></code>                                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.providers">providers</a></code>                                                       | <code>cdktf.TerraformModuleProvider \| cdktf.TerraformProvider[]</code> | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.version">version</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.dependsOn">dependsOn</a></code>                                                       | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleArnOutput">iamRoleArnOutput</a></code>                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleNameOutput">iamRoleNameOutput</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleUniqueIdOutput">iamRoleUniqueIdOutput</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateArnOutput">launchTemplateArnOutput</a></code>                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateIdOutput">launchTemplateIdOutput</a></code>                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateLatestVersionOutput">launchTemplateLatestVersionOutput</a></code>       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.nodeGroupArnOutput">nodeGroupArnOutput</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.nodeGroupAutoscalingGroupNamesOutput">nodeGroupAutoscalingGroupNamesOutput</a></code> | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.nodeGroupIdOutput">nodeGroupIdOutput</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.nodeGroupResourcesOutput">nodeGroupResourcesOutput</a></code>                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.nodeGroupStatusOutput">nodeGroupStatusOutput</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupArnOutput">securityGroupArnOutput</a></code>                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupIdOutput">securityGroupIdOutput</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.blockDeviceMappings">blockDeviceMappings</a></code>                                   | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.capacityReservationSpecification">capacityReservationSpecification</a></code>         | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.instanceMarketOptions">instanceMarketOptions</a></code>                               | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.remoteAccess">remoteAccess</a></code>                                                 | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupRules">securityGroupRules</a></code>                                     | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.taints">taints</a></code>                                                             | <code>any</code>                                                        | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.amiId">amiId</a></code>                                                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.amiReleaseVersion">amiReleaseVersion</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.amiType">amiType</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.capacityType">capacityType</a></code>                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterAuthBase64">clusterAuthBase64</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterEndpoint">clusterEndpoint</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterIpFamily">clusterIpFamily</a></code>                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterName">clusterName</a></code>                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code>               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code>                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code>                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.clusterVersion">clusterVersion</a></code>                                             | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.cpuOptions">cpuOptions</a></code>                                                     | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.create">create</a></code>                                                             | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.createIamRole">createIamRole</a></code>                                               | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.createLaunchTemplate">createLaunchTemplate</a></code>                                 | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.createSecurityGroup">createSecurityGroup</a></code>                                   | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.creditSpecification">creditSpecification</a></code>                                   | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.desiredSize">desiredSize</a></code>                                                   | <code>number</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.disableApiTermination">disableApiTermination</a></code>                               | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.diskSize">diskSize</a></code>                                                         | <code>number</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.ebsOptimized">ebsOptimized</a></code>                                                 | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code>                         | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code>                   | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.enableBootstrapUserData">enableBootstrapUserData</a></code>                           | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.enableMonitoring">enableMonitoring</a></code>                                         | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.enclaveOptions">enclaveOptions</a></code>                                             | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.forceUpdateVersion">forceUpdateVersion</a></code>                                     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code>                       | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleArn">iamRoleArn</a></code>                                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code>                             | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleDescription">iamRoleDescription</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleName">iamRoleName</a></code>                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRolePath">iamRolePath</a></code>                                                   | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code>                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleTags">iamRoleTags</a></code>                                                   | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code>                                 | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.instanceTypes">instanceTypes</a></code>                                               | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.kernelId">kernelId</a></code>                                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.keyName">keyName</a></code>                                                           | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.labels">labels</a></code>                                                             | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code>                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateDescription">launchTemplateDescription</a></code>                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateName">launchTemplateName</a></code>                                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateTags">launchTemplateTags</a></code>                                     | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code>                   | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.launchTemplateVersion">launchTemplateVersion</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.licenseSpecifications">licenseSpecifications</a></code>                               | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.maxSize">maxSize</a></code>                                                           | <code>number</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.metadataOptions">metadataOptions</a></code>                                           | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.minSize">minSize</a></code>                                                           | <code>number</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.name">name</a></code>                                                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.networkInterfaces">networkInterfaces</a></code>                                       | <code>any[]</code>                                                      | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.placement">placement</a></code>                                                       | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.platform">platform</a></code>                                                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.postBootstrapUserData">postBootstrapUserData</a></code>                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.preBootstrapUserData">preBootstrapUserData</a></code>                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.ramDiskId">ramDiskId</a></code>                                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupDescription">securityGroupDescription</a></code>                         | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupName">securityGroupName</a></code>                                       | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupTags">securityGroupTags</a></code>                                       | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code>                     | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.subnetIds">subnetIds</a></code>                                                       | <code>string[]</code>                                                   | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.tags">tags</a></code>                                                                 | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.timeouts">timeouts</a></code>                                                         | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.updateConfig">updateConfig</a></code>                                                 | <code>{[ key: string ]: string}</code>                                  | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code>     | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.useNamePrefix">useNamePrefix</a></code>                                               | <code>boolean</code>                                                    | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.userDataTemplatePath">userDataTemplatePath</a></code>                                 | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.vpcId">vpcId</a></code>                                                               | <code>string</code>                                                     | _No description._ |
| <code><a href="#my-module.EksManagedNodegroup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code>                                   | <code>string[]</code>                                                   | _No description._ |

---

##### `node`<sup>Required</sup> <a name="node" id="my-module.EksManagedNodegroup.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="my-module.EksManagedNodegroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- _Type:_ cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="my-module.EksManagedNodegroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- _Type:_ string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="my-module.EksManagedNodegroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- _Type:_ string

---

##### `source`<sup>Required</sup> <a name="source" id="my-module.EksManagedNodegroup.property.source"></a>

```typescript
public readonly source: string;
```

- _Type:_ string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="my-module.EksManagedNodegroup.property.providers"></a>

```typescript
public readonly providers: TerraformModuleProvider | TerraformProvider[];
```

- _Type:_ cdktf.TerraformModuleProvider | cdktf.TerraformProvider[]

---

##### `version`<sup>Optional</sup> <a name="version" id="my-module.EksManagedNodegroup.property.version"></a>

```typescript
public readonly version: string;
```

- _Type:_ string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="my-module.EksManagedNodegroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- _Type:_ string[]

---

##### `iamRoleArnOutput`<sup>Required</sup> <a name="iamRoleArnOutput" id="my-module.EksManagedNodegroup.property.iamRoleArnOutput"></a>

```typescript
public readonly iamRoleArnOutput: string;
```

- _Type:_ string

---

##### `iamRoleNameOutput`<sup>Required</sup> <a name="iamRoleNameOutput" id="my-module.EksManagedNodegroup.property.iamRoleNameOutput"></a>

```typescript
public readonly iamRoleNameOutput: string;
```

- _Type:_ string

---

##### `iamRoleUniqueIdOutput`<sup>Required</sup> <a name="iamRoleUniqueIdOutput" id="my-module.EksManagedNodegroup.property.iamRoleUniqueIdOutput"></a>

```typescript
public readonly iamRoleUniqueIdOutput: string;
```

- _Type:_ string

---

##### `launchTemplateArnOutput`<sup>Required</sup> <a name="launchTemplateArnOutput" id="my-module.EksManagedNodegroup.property.launchTemplateArnOutput"></a>

```typescript
public readonly launchTemplateArnOutput: string;
```

- _Type:_ string

---

##### `launchTemplateIdOutput`<sup>Required</sup> <a name="launchTemplateIdOutput" id="my-module.EksManagedNodegroup.property.launchTemplateIdOutput"></a>

```typescript
public readonly launchTemplateIdOutput: string;
```

- _Type:_ string

---

##### `launchTemplateLatestVersionOutput`<sup>Required</sup> <a name="launchTemplateLatestVersionOutput" id="my-module.EksManagedNodegroup.property.launchTemplateLatestVersionOutput"></a>

```typescript
public readonly launchTemplateLatestVersionOutput: string;
```

- _Type:_ string

---

##### `nodeGroupArnOutput`<sup>Required</sup> <a name="nodeGroupArnOutput" id="my-module.EksManagedNodegroup.property.nodeGroupArnOutput"></a>

```typescript
public readonly nodeGroupArnOutput: string;
```

- _Type:_ string

---

##### `nodeGroupAutoscalingGroupNamesOutput`<sup>Required</sup> <a name="nodeGroupAutoscalingGroupNamesOutput" id="my-module.EksManagedNodegroup.property.nodeGroupAutoscalingGroupNamesOutput"></a>

```typescript
public readonly nodeGroupAutoscalingGroupNamesOutput: string;
```

- _Type:_ string

---

##### `nodeGroupIdOutput`<sup>Required</sup> <a name="nodeGroupIdOutput" id="my-module.EksManagedNodegroup.property.nodeGroupIdOutput"></a>

```typescript
public readonly nodeGroupIdOutput: string;
```

- _Type:_ string

---

##### `nodeGroupResourcesOutput`<sup>Required</sup> <a name="nodeGroupResourcesOutput" id="my-module.EksManagedNodegroup.property.nodeGroupResourcesOutput"></a>

```typescript
public readonly nodeGroupResourcesOutput: string;
```

- _Type:_ string

---

##### `nodeGroupStatusOutput`<sup>Required</sup> <a name="nodeGroupStatusOutput" id="my-module.EksManagedNodegroup.property.nodeGroupStatusOutput"></a>

```typescript
public readonly nodeGroupStatusOutput: string;
```

- _Type:_ string

---

##### `securityGroupArnOutput`<sup>Required</sup> <a name="securityGroupArnOutput" id="my-module.EksManagedNodegroup.property.securityGroupArnOutput"></a>

```typescript
public readonly securityGroupArnOutput: string;
```

- _Type:_ string

---

##### `securityGroupIdOutput`<sup>Required</sup> <a name="securityGroupIdOutput" id="my-module.EksManagedNodegroup.property.securityGroupIdOutput"></a>

```typescript
public readonly securityGroupIdOutput: string;
```

- _Type:_ string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="my-module.EksManagedNodegroup.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- _Type:_ any

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="my-module.EksManagedNodegroup.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- _Type:_ any

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="my-module.EksManagedNodegroup.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- _Type:_ any

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="my-module.EksManagedNodegroup.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: any;
```

- _Type:_ any

---

##### `securityGroupRules`<sup>Required</sup> <a name="securityGroupRules" id="my-module.EksManagedNodegroup.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- _Type:_ any

---

##### `taints`<sup>Required</sup> <a name="taints" id="my-module.EksManagedNodegroup.property.taints"></a>

```typescript
public readonly taints: any;
```

- _Type:_ any

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="my-module.EksManagedNodegroup.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- _Type:_ string

---

##### `amiReleaseVersion`<sup>Optional</sup> <a name="amiReleaseVersion" id="my-module.EksManagedNodegroup.property.amiReleaseVersion"></a>

```typescript
public readonly amiReleaseVersion: string;
```

- _Type:_ string

---

##### `amiType`<sup>Optional</sup> <a name="amiType" id="my-module.EksManagedNodegroup.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- _Type:_ string

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="my-module.EksManagedNodegroup.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- _Type:_ string

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="my-module.EksManagedNodegroup.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- _Type:_ string

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="my-module.EksManagedNodegroup.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- _Type:_ string

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="my-module.EksManagedNodegroup.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- _Type:_ string

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="my-module.EksManagedNodegroup.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- _Type:_ string

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="my-module.EksManagedNodegroup.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- _Type:_ string

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="my-module.EksManagedNodegroup.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- _Type:_ string

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="my-module.EksManagedNodegroup.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- _Type:_ string

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="my-module.EksManagedNodegroup.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- _Type:_ string

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="my-module.EksManagedNodegroup.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- _Type:_ string

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="my-module.EksManagedNodegroup.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `create`<sup>Optional</sup> <a name="create" id="my-module.EksManagedNodegroup.property.create"></a>

```typescript
public readonly create: boolean;
```

- _Type:_ boolean

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="my-module.EksManagedNodegroup.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- _Type:_ boolean

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="my-module.EksManagedNodegroup.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- _Type:_ boolean

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="my-module.EksManagedNodegroup.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- _Type:_ boolean

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="my-module.EksManagedNodegroup.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="my-module.EksManagedNodegroup.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- _Type:_ number

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="my-module.EksManagedNodegroup.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- _Type:_ boolean

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="my-module.EksManagedNodegroup.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- _Type:_ number

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="my-module.EksManagedNodegroup.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- _Type:_ boolean

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="my-module.EksManagedNodegroup.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="my-module.EksManagedNodegroup.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `enableBootstrapUserData`<sup>Optional</sup> <a name="enableBootstrapUserData" id="my-module.EksManagedNodegroup.property.enableBootstrapUserData"></a>

```typescript
public readonly enableBootstrapUserData: boolean;
```

- _Type:_ boolean

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="my-module.EksManagedNodegroup.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- _Type:_ boolean

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="my-module.EksManagedNodegroup.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="my-module.EksManagedNodegroup.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean;
```

- _Type:_ boolean

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="my-module.EksManagedNodegroup.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- _Type:_ string[]

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="my-module.EksManagedNodegroup.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- _Type:_ string

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="my-module.EksManagedNodegroup.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- _Type:_ boolean

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="my-module.EksManagedNodegroup.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- _Type:_ string

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="my-module.EksManagedNodegroup.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- _Type:_ string

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="my-module.EksManagedNodegroup.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- _Type:_ string

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="my-module.EksManagedNodegroup.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- _Type:_ string

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="my-module.EksManagedNodegroup.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="my-module.EksManagedNodegroup.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- _Type:_ boolean

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="my-module.EksManagedNodegroup.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- _Type:_ string[]

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="my-module.EksManagedNodegroup.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- _Type:_ string

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="my-module.EksManagedNodegroup.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- _Type:_ string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="my-module.EksManagedNodegroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="my-module.EksManagedNodegroup.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- _Type:_ string

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="my-module.EksManagedNodegroup.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- _Type:_ string

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="my-module.EksManagedNodegroup.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- _Type:_ string

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="my-module.EksManagedNodegroup.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="my-module.EksManagedNodegroup.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- _Type:_ boolean

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="my-module.EksManagedNodegroup.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- _Type:_ string

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="my-module.EksManagedNodegroup.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="my-module.EksManagedNodegroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- _Type:_ number

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="my-module.EksManagedNodegroup.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="my-module.EksManagedNodegroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- _Type:_ number

---

##### `name`<sup>Optional</sup> <a name="name" id="my-module.EksManagedNodegroup.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="my-module.EksManagedNodegroup.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- _Type:_ any[]

---

##### `placement`<sup>Optional</sup> <a name="placement" id="my-module.EksManagedNodegroup.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="my-module.EksManagedNodegroup.property.platform"></a>

```typescript
public readonly platform: string;
```

- _Type:_ string

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="my-module.EksManagedNodegroup.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- _Type:_ string

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="my-module.EksManagedNodegroup.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- _Type:_ string

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="my-module.EksManagedNodegroup.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- _Type:_ string

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="my-module.EksManagedNodegroup.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- _Type:_ string

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="my-module.EksManagedNodegroup.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- _Type:_ string

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="my-module.EksManagedNodegroup.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="my-module.EksManagedNodegroup.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- _Type:_ string

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="my-module.EksManagedNodegroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- _Type:_ string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="my-module.EksManagedNodegroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="my-module.EksManagedNodegroup.property.timeouts"></a>

```typescript
public readonly timeouts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="my-module.EksManagedNodegroup.property.updateConfig"></a>

```typescript
public readonly updateConfig: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="my-module.EksManagedNodegroup.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- _Type:_ boolean

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="my-module.EksManagedNodegroup.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- _Type:_ boolean

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="my-module.EksManagedNodegroup.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- _Type:_ string

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="my-module.EksManagedNodegroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- _Type:_ string

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="my-module.EksManagedNodegroup.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- _Type:_ string[]

---

## Structs <a name="Structs" id="Structs"></a>

### EksManagedNodegroupOptions <a name="EksManagedNodegroupOptions" id="my-module.EksManagedNodegroupOptions"></a>

#### Initializer <a name="Initializer" id="my-module.EksManagedNodegroupOptions.Initializer"></a>

```typescript
import { EksManagedNodegroupOptions } from 'my-module'

const eksManagedNodegroupOptions: EksManagedNodegroupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                        | **Type**                               | **Description**                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.amiId">amiId</a></code>                                                           | <code>string</code>                    | The AMI from which to launch the instance.                                                                                                                                                                    |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.amiReleaseVersion">amiReleaseVersion</a></code>                                   | <code>string</code>                    | AMI version of the EKS Node Group.                                                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.amiType">amiType</a></code>                                                       | <code>string</code>                    | Type of Amazon Machine Image (AMI) associated with the EKS Node Group.                                                                                                                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.blockDeviceMappings">blockDeviceMappings</a></code>                               | <code>any</code>                       | Specify volumes to attach to the instance besides the volumes specified by the AMI.                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.bootstrapExtraArgs">bootstrapExtraArgs</a></code>                                 | <code>string</code>                    | Additional arguments passed to the bootstrap script.                                                                                                                                                          |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.capacityReservationSpecification">capacityReservationSpecification</a></code>     | <code>any</code>                       | Targeting for EC2 capacity reservations.                                                                                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.capacityType">capacityType</a></code>                                             | <code>string</code>                    | Type of capacity associated with the EKS Node Group.                                                                                                                                                          |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterAuthBase64">clusterAuthBase64</a></code>                                   | <code>string</code>                    | Base64 encoded CA of associated EKS cluster.                                                                                                                                                                  |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterEndpoint">clusterEndpoint</a></code>                                       | <code>string</code>                    | Endpoint of associated EKS cluster.                                                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterIpFamily">clusterIpFamily</a></code>                                       | <code>string</code>                    | The IP family used to assign Kubernetes pod and service addresses.                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterName">clusterName</a></code>                                               | <code>string</code>                    | Name of associated EKS cluster.                                                                                                                                                                               |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterPrimarySecurityGroupId">clusterPrimarySecurityGroupId</a></code>           | <code>string</code>                    | The ID of the EKS cluster primary security group to associate with the instance(s).                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code>                         | <code>string</code>                    | Cluster control plane security group ID.                                                                                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code>                         | <code>string</code>                    | The CIDR block to assign Kubernetes service IP addresses from.                                                                                                                                                |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.clusterVersion">clusterVersion</a></code>                                         | <code>string</code>                    | Kubernetes version.                                                                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.cpuOptions">cpuOptions</a></code>                                                 | <code>{[ key: string ]: string}</code> | The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                                          |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.create">create</a></code>                                                         | <code>boolean</code>                   | Determines whether to create EKS managed node group or not.                                                                                                                                                   |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.createIamRole">createIamRole</a></code>                                           | <code>boolean</code>                   | Determines whether an IAM role is created or to use an existing IAM role.                                                                                                                                     |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.createLaunchTemplate">createLaunchTemplate</a></code>                             | <code>boolean</code>                   | Determines whether to create a launch template or not.                                                                                                                                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.createSecurityGroup">createSecurityGroup</a></code>                               | <code>boolean</code>                   | Determines whether to create a security group.                                                                                                                                                                |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.creditSpecification">creditSpecification</a></code>                               | <code>{[ key: string ]: string}</code> | Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.desiredSize">desiredSize</a></code>                                               | <code>number</code>                    | Desired number of instances/nodes.                                                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.disableApiTermination">disableApiTermination</a></code>                           | <code>boolean</code>                   | If true, enables EC2 instance termination protection.                                                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.diskSize">diskSize</a></code>                                                     | <code>number</code>                    | Disk size in GiB for nodes.                                                                                                                                                                                   |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.ebsOptimized">ebsOptimized</a></code>                                             | <code>boolean</code>                   | If true, the launched EC2 instance(s) will be EBS-optimized.                                                                                                                                                  |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code>                     | <code>{[ key: string ]: string}</code> | The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                                 |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code>               | <code>{[ key: string ]: string}</code> | Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}. |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.enableBootstrapUserData">enableBootstrapUserData</a></code>                       | <code>boolean</code>                   | Determines whether the bootstrap configurations are populated within the user data template.                                                                                                                  |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.enableMonitoring">enableMonitoring</a></code>                                     | <code>boolean</code>                   | Enables/disables detailed monitoring.                                                                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.enclaveOptions">enclaveOptions</a></code>                                         | <code>{[ key: string ]: string}</code> | Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                               |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.forceUpdateVersion">forceUpdateVersion</a></code>                                 | <code>boolean</code>                   | Force version update if existing pods are unable to be drained due to a pod disruption budget issue.                                                                                                          |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code>                   | <code>string[]</code>                  | Additional policies to be added to the IAM role.                                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleArn">iamRoleArn</a></code>                                                 | <code>string</code>                    | Existing IAM role ARN for the node group.                                                                                                                                                                     |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleAttachCniPolicy">iamRoleAttachCniPolicy</a></code>                         | <code>boolean</code>                   | Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role.                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleDescription">iamRoleDescription</a></code>                                 | <code>string</code>                    | Description of the role.                                                                                                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleName">iamRoleName</a></code>                                               | <code>string</code>                    | Name to use on IAM role created.                                                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRolePath">iamRolePath</a></code>                                               | <code>string</code>                    | IAM role path.                                                                                                                                                                                                |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code>                 | <code>string</code>                    | ARN of the policy that is used to set the permissions boundary for the IAM role.                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleTags">iamRoleTags</a></code>                                               | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the IAM role created.                                                                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code>                             | <code>boolean</code>                   | Determines whether the IAM role name (`iam_role_name`) is used as a prefix.                                                                                                                                   |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.instanceMarketOptions">instanceMarketOptions</a></code>                           | <code>any</code>                       | The market (purchasing) option for the instance.                                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.instanceTypes">instanceTypes</a></code>                                           | <code>string[]</code>                  | Set of instance types associated with the EKS Node Group.                                                                                                                                                     |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.kernelId">kernelId</a></code>                                                     | <code>string</code>                    | The kernel ID.                                                                                                                                                                                                |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.keyName">keyName</a></code>                                                       | <code>string</code>                    | The key name that should be used for the instance(s).                                                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.labels">labels</a></code>                                                         | <code>{[ key: string ]: string}</code> | Key-value map of Kubernetes labels.                                                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateDefaultVersion">launchTemplateDefaultVersion</a></code>             | <code>string</code>                    | Default version of the launch template.                                                                                                                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateDescription">launchTemplateDescription</a></code>                   | <code>string</code>                    | Description of the launch template.                                                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateName">launchTemplateName</a></code>                                 | <code>string</code>                    | Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`).                                                                     |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateTags">launchTemplateTags</a></code>                                 | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the tag_specifications of launch template created.                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateUseNamePrefix">launchTemplateUseNamePrefix</a></code>               | <code>boolean</code>                   | Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix.                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.launchTemplateVersion">launchTemplateVersion</a></code>                           | <code>string</code>                    | Launch template version number.                                                                                                                                                                               |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.licenseSpecifications">licenseSpecifications</a></code>                           | <code>{[ key: string ]: string}</code> | A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.maxSize">maxSize</a></code>                                                       | <code>number</code>                    | Maximum number of instances/nodes.                                                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.metadataOptions">metadataOptions</a></code>                                       | <code>{[ key: string ]: string}</code> | Customize the metadata options for the instance.                                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.minSize">minSize</a></code>                                                       | <code>number</code>                    | Minimum number of instances/nodes.                                                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.name">name</a></code>                                                             | <code>string</code>                    | Name of the EKS managed node group.                                                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.networkInterfaces">networkInterfaces</a></code>                                   | <code>any[]</code>                     | Customize network interfaces to be attached at instance boot time.                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.placement">placement</a></code>                                                   | <code>{[ key: string ]: string}</code> | The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.                                                             |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.platform">platform</a></code>                                                     | <code>string</code>                    | Identifies if the OS platform is `bottlerocket` or `linux` based;                                                                                                                                             |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.postBootstrapUserData">postBootstrapUserData</a></code>                           | <code>string</code>                    | User data that is appended to the user data script after of the EKS bootstrap script.                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.preBootstrapUserData">preBootstrapUserData</a></code>                             | <code>string</code>                    | User data that is injected into the user data script ahead of the EKS bootstrap script.                                                                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.ramDiskId">ramDiskId</a></code>                                                   | <code>string</code>                    | The ID of the ram disk.                                                                                                                                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.remoteAccess">remoteAccess</a></code>                                             | <code>any</code>                       | Configuration block with remote access settings.                                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.securityGroupDescription">securityGroupDescription</a></code>                     | <code>string</code>                    | Description for the security group created.                                                                                                                                                                   |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.securityGroupName">securityGroupName</a></code>                                   | <code>string</code>                    | Name to use on security group created.                                                                                                                                                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.securityGroupRules">securityGroupRules</a></code>                                 | <code>any</code>                       | List of security group rules to add to the security group created.                                                                                                                                            |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.securityGroupTags">securityGroupTags</a></code>                                   | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the security group created.                                                                                                                                                |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.securityGroupUseNamePrefix">securityGroupUseNamePrefix</a></code>                 | <code>string</code>                    | Determines whether the security group name (`security_group_name`) is used as a prefix.                                                                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.subnetIds">subnetIds</a></code>                                                   | <code>string[]</code>                  | Identifiers of EC2 Subnets to associate with the EKS Node Group.                                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.tags">tags</a></code>                                                             | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources.                                                                                                                                                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.taints">taints</a></code>                                                         | <code>any</code>                       | The Kubernetes taints to be applied to the nodes in the node group.                                                                                                                                           |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.timeouts">timeouts</a></code>                                                     | <code>{[ key: string ]: string}</code> | Create, update, and delete timeout configurations for the node group.                                                                                                                                         |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.updateConfig">updateConfig</a></code>                                             | <code>{[ key: string ]: string}</code> | Configuration block of settings for max unavailable resources during node group updates.                                                                                                                      |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.updateLaunchTemplateDefaultVersion">updateLaunchTemplateDefaultVersion</a></code> | <code>boolean</code>                   | Whether to update the launch templates default version on each update.                                                                                                                                        |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.useNamePrefix">useNamePrefix</a></code>                                           | <code>boolean</code>                   | Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix.                                                                                                       |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.userDataTemplatePath">userDataTemplatePath</a></code>                             | <code>string</code>                    | Path to a local, custom user data template file to use when rendering user data.                                                                                                                              |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.vpcId">vpcId</a></code>                                                           | <code>string</code>                    | ID of the VPC where the security group/nodes will be provisioned.                                                                                                                                             |
| <code><a href="#my-module.EksManagedNodegroupOptions.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code>                               | <code>string[]</code>                  | A list of security group IDs to associate.                                                                                                                                                                    |

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="my-module.EksManagedNodegroupOptions.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- _Type:_ string

The AMI from which to launch the instance.

If not supplied, EKS will use its own default image

---

##### `amiReleaseVersion`<sup>Optional</sup> <a name="amiReleaseVersion" id="my-module.EksManagedNodegroupOptions.property.amiReleaseVersion"></a>

```typescript
public readonly amiReleaseVersion: string;
```

- _Type:_ string

AMI version of the EKS Node Group.

Defaults to latest version for Kubernetes version

---

##### `amiType`<sup>Optional</sup> <a name="amiType" id="my-module.EksManagedNodegroupOptions.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- _Type:_ string

Type of Amazon Machine Image (AMI) associated with the EKS Node Group.

Valid values are `AL2_x86_64`, `AL2_x86_64_GPU`, `AL2_ARM_64`, `CUSTOM`, `BOTTLEROCKET_ARM_64`, `BOTTLEROCKET_x86_64`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="my-module.EksManagedNodegroupOptions.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: any;
```

- _Type:_ any
- _Default:_ [object Object]

Specify volumes to attach to the instance besides the volumes specified by the AMI.

---

##### `bootstrapExtraArgs`<sup>Optional</sup> <a name="bootstrapExtraArgs" id="my-module.EksManagedNodegroupOptions.property.bootstrapExtraArgs"></a>

```typescript
public readonly bootstrapExtraArgs: string;
```

- _Type:_ string

Additional arguments passed to the bootstrap script.

When `platform` = `bottlerocket`; these are additional [settings](https://github.com/bottlerocket-os/bottlerocket#settings) that are provided to the Bottlerocket user data

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="my-module.EksManagedNodegroupOptions.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: any;
```

- _Type:_ any

Targeting for EC2 capacity reservations.

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="my-module.EksManagedNodegroupOptions.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- _Type:_ string
- _Default:_ ON_DEMAND

Type of capacity associated with the EKS Node Group.

Valid values: `ON_DEMAND`, `SPOT`

---

##### `clusterAuthBase64`<sup>Optional</sup> <a name="clusterAuthBase64" id="my-module.EksManagedNodegroupOptions.property.clusterAuthBase64"></a>

```typescript
public readonly clusterAuthBase64: string;
```

- _Type:_ string

Base64 encoded CA of associated EKS cluster.

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="my-module.EksManagedNodegroupOptions.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- _Type:_ string

Endpoint of associated EKS cluster.

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="my-module.EksManagedNodegroupOptions.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- _Type:_ string

The IP family used to assign Kubernetes pod and service addresses.

Valid values are `ipv4` (default) and `ipv6`

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="my-module.EksManagedNodegroupOptions.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- _Type:_ string

Name of associated EKS cluster.

---

##### `clusterPrimarySecurityGroupId`<sup>Optional</sup> <a name="clusterPrimarySecurityGroupId" id="my-module.EksManagedNodegroupOptions.property.clusterPrimarySecurityGroupId"></a>

```typescript
public readonly clusterPrimarySecurityGroupId: string;
```

- _Type:_ string

The ID of the EKS cluster primary security group to associate with the instance(s).

This is the security group that is automatically created by the EKS service

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="my-module.EksManagedNodegroupOptions.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- _Type:_ string

Cluster control plane security group ID.

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="my-module.EksManagedNodegroupOptions.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- _Type:_ string

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="my-module.EksManagedNodegroupOptions.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- _Type:_ string

Kubernetes version.

Defaults to EKS Cluster Kubernetes version

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="my-module.EksManagedNodegroupOptions.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

The CPU options for the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `create`<sup>Optional</sup> <a name="create" id="my-module.EksManagedNodegroupOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to create EKS managed node group or not.

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="my-module.EksManagedNodegroupOptions.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether an IAM role is created or to use an existing IAM role.

---

##### `createLaunchTemplate`<sup>Optional</sup> <a name="createLaunchTemplate" id="my-module.EksManagedNodegroupOptions.property.createLaunchTemplate"></a>

```typescript
public readonly createLaunchTemplate: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to create a launch template or not.

If set to `false`, EKS will use its own default launch template

---

##### `createSecurityGroup`<sup>Optional</sup> <a name="createSecurityGroup" id="my-module.EksManagedNodegroupOptions.property.createSecurityGroup"></a>

```typescript
public readonly createSecurityGroup: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to create a security group.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="my-module.EksManagedNodegroupOptions.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Customize the credit specification of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="my-module.EksManagedNodegroupOptions.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- _Type:_ number
- _Default:_ 1

Desired number of instances/nodes.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="my-module.EksManagedNodegroupOptions.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- _Type:_ boolean

If true, enables EC2 instance termination protection.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="my-module.EksManagedNodegroupOptions.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- _Type:_ number

Disk size in GiB for nodes.

Defaults to `20`

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="my-module.EksManagedNodegroupOptions.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- _Type:_ boolean

If true, the launched EC2 instance(s) will be EBS-optimized.

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="my-module.EksManagedNodegroupOptions.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

The elastic GPU to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="my-module.EksManagedNodegroupOptions.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Configuration block containing an Elastic Inference Accelerator to attach to the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `enableBootstrapUserData`<sup>Optional</sup> <a name="enableBootstrapUserData" id="my-module.EksManagedNodegroupOptions.property.enableBootstrapUserData"></a>

```typescript
public readonly enableBootstrapUserData: boolean;
```

- _Type:_ boolean

Determines whether the bootstrap configurations are populated within the user data template.

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="my-module.EksManagedNodegroupOptions.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enables/disables detailed monitoring.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="my-module.EksManagedNodegroupOptions.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Enable Nitro Enclaves on launched instances The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="my-module.EksManagedNodegroupOptions.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean;
```

- _Type:_ boolean

Force version update if existing pods are unable to be drained due to a pod disruption budget issue.

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="my-module.EksManagedNodegroupOptions.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- _Type:_ string[]

Additional policies to be added to the IAM role.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="my-module.EksManagedNodegroupOptions.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- _Type:_ string

Existing IAM role ARN for the node group.

Required if `create_iam_role` is set to `false`

---

##### `iamRoleAttachCniPolicy`<sup>Optional</sup> <a name="iamRoleAttachCniPolicy" id="my-module.EksManagedNodegroupOptions.property.iamRoleAttachCniPolicy"></a>

```typescript
public readonly iamRoleAttachCniPolicy: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role.

WARNING: If set `false` the permissions must be assigned to the `aws-node` DaemonSet pods via another method or nodes will not be able to join the cluster

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="my-module.EksManagedNodegroupOptions.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- _Type:_ string

Description of the role.

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="my-module.EksManagedNodegroupOptions.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- _Type:_ string

Name to use on IAM role created.

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="my-module.EksManagedNodegroupOptions.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- _Type:_ string

IAM role path.

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="my-module.EksManagedNodegroupOptions.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- _Type:_ string

ARN of the policy that is used to set the permissions boundary for the IAM role.

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="my-module.EksManagedNodegroupOptions.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the IAM role created.

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="my-module.EksManagedNodegroupOptions.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether the IAM role name (`iam_role_name`) is used as a prefix.

---

##### `instanceMarketOptions`<sup>Optional</sup> <a name="instanceMarketOptions" id="my-module.EksManagedNodegroupOptions.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: any;
```

- _Type:_ any

The market (purchasing) option for the instance.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="my-module.EksManagedNodegroupOptions.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- _Type:_ string[]

Set of instance types associated with the EKS Node Group.

Defaults to `["t3.medium"]`

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="my-module.EksManagedNodegroupOptions.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- _Type:_ string

The kernel ID.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="my-module.EksManagedNodegroupOptions.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- _Type:_ string

The key name that should be used for the instance(s).

---

##### `labels`<sup>Optional</sup> <a name="labels" id="my-module.EksManagedNodegroupOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Key-value map of Kubernetes labels.

Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed
The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

---

##### `launchTemplateDefaultVersion`<sup>Optional</sup> <a name="launchTemplateDefaultVersion" id="my-module.EksManagedNodegroupOptions.property.launchTemplateDefaultVersion"></a>

```typescript
public readonly launchTemplateDefaultVersion: string;
```

- _Type:_ string

Default version of the launch template.

---

##### `launchTemplateDescription`<sup>Optional</sup> <a name="launchTemplateDescription" id="my-module.EksManagedNodegroupOptions.property.launchTemplateDescription"></a>

```typescript
public readonly launchTemplateDescription: string;
```

- _Type:_ string

Description of the launch template.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="my-module.EksManagedNodegroupOptions.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- _Type:_ string

Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`).

---

##### `launchTemplateTags`<sup>Optional</sup> <a name="launchTemplateTags" id="my-module.EksManagedNodegroupOptions.property.launchTemplateTags"></a>

```typescript
public readonly launchTemplateTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the tag_specifications of launch template created.

---

##### `launchTemplateUseNamePrefix`<sup>Optional</sup> <a name="launchTemplateUseNamePrefix" id="my-module.EksManagedNodegroupOptions.property.launchTemplateUseNamePrefix"></a>

```typescript
public readonly launchTemplateUseNamePrefix: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix.

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="my-module.EksManagedNodegroupOptions.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- _Type:_ string

Launch template version number.

The default is `$Default`

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="my-module.EksManagedNodegroupOptions.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

A list of license specifications to associate with The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="my-module.EksManagedNodegroupOptions.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- _Type:_ number
- _Default:_ 3

Maximum number of instances/nodes.

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="my-module.EksManagedNodegroupOptions.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Customize the metadata options for the instance.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="my-module.EksManagedNodegroupOptions.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- _Type:_ number

Minimum number of instances/nodes.

---

##### `name`<sup>Optional</sup> <a name="name" id="my-module.EksManagedNodegroupOptions.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

Name of the EKS managed node group.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="my-module.EksManagedNodegroupOptions.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: any[];
```

- _Type:_ any[]

Customize network interfaces to be attached at instance boot time.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="my-module.EksManagedNodegroupOptions.property.placement"></a>

```typescript
public readonly placement: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

The placement of the instance The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="my-module.EksManagedNodegroupOptions.property.platform"></a>

```typescript
public readonly platform: string;
```

- _Type:_ string
- _Default:_ linux

Identifies if the OS platform is `bottlerocket` or `linux` based;

`windows` is not supported

---

##### `postBootstrapUserData`<sup>Optional</sup> <a name="postBootstrapUserData" id="my-module.EksManagedNodegroupOptions.property.postBootstrapUserData"></a>

```typescript
public readonly postBootstrapUserData: string;
```

- _Type:_ string

User data that is appended to the user data script after of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `preBootstrapUserData`<sup>Optional</sup> <a name="preBootstrapUserData" id="my-module.EksManagedNodegroupOptions.property.preBootstrapUserData"></a>

```typescript
public readonly preBootstrapUserData: string;
```

- _Type:_ string

User data that is injected into the user data script ahead of the EKS bootstrap script.

Not used when `platform` = `bottlerocket`

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="my-module.EksManagedNodegroupOptions.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- _Type:_ string

The ID of the ram disk.

---

##### `remoteAccess`<sup>Optional</sup> <a name="remoteAccess" id="my-module.EksManagedNodegroupOptions.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: any;
```

- _Type:_ any
- _Default:_ [object Object]

Configuration block with remote access settings.

---

##### `securityGroupDescription`<sup>Optional</sup> <a name="securityGroupDescription" id="my-module.EksManagedNodegroupOptions.property.securityGroupDescription"></a>

```typescript
public readonly securityGroupDescription: string;
```

- _Type:_ string
- _Default:_ EKS managed node group security group

Description for the security group created.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="my-module.EksManagedNodegroupOptions.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- _Type:_ string

Name to use on security group created.

---

##### `securityGroupRules`<sup>Optional</sup> <a name="securityGroupRules" id="my-module.EksManagedNodegroupOptions.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: any;
```

- _Type:_ any
- _Default:_ [object Object]

List of security group rules to add to the security group created.

---

##### `securityGroupTags`<sup>Optional</sup> <a name="securityGroupTags" id="my-module.EksManagedNodegroupOptions.property.securityGroupTags"></a>

```typescript
public readonly securityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the security group created.

---

##### `securityGroupUseNamePrefix`<sup>Optional</sup> <a name="securityGroupUseNamePrefix" id="my-module.EksManagedNodegroupOptions.property.securityGroupUseNamePrefix"></a>

```typescript
public readonly securityGroupUseNamePrefix: string;
```

- _Type:_ string
- _Default:_ true

Determines whether the security group name (`security_group_name`) is used as a prefix.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="my-module.EksManagedNodegroupOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- _Type:_ string[]

Identifiers of EC2 Subnets to associate with the EKS Node Group.

These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME`

---

##### `tags`<sup>Optional</sup> <a name="tags" id="my-module.EksManagedNodegroupOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of tags to add to all resources.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="my-module.EksManagedNodegroupOptions.property.taints"></a>

```typescript
public readonly taints: any;
```

- _Type:_ any
- _Default:_ [object Object]

The Kubernetes taints to be applied to the nodes in the node group.

Maximum of 50 taints per node group

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="my-module.EksManagedNodegroupOptions.property.timeouts"></a>

```typescript
public readonly timeouts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Create, update, and delete timeout configurations for the node group.

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="my-module.EksManagedNodegroupOptions.property.updateConfig"></a>

```typescript
public readonly updateConfig: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Configuration block of settings for max unavailable resources during node group updates.

---

##### `updateLaunchTemplateDefaultVersion`<sup>Optional</sup> <a name="updateLaunchTemplateDefaultVersion" id="my-module.EksManagedNodegroupOptions.property.updateLaunchTemplateDefaultVersion"></a>

```typescript
public readonly updateLaunchTemplateDefaultVersion: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether to update the launch templates default version on each update.

Conflicts with `launch_template_default_version`

---

##### `useNamePrefix`<sup>Optional</sup> <a name="useNamePrefix" id="my-module.EksManagedNodegroupOptions.property.useNamePrefix"></a>

```typescript
public readonly useNamePrefix: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix.

---

##### `userDataTemplatePath`<sup>Optional</sup> <a name="userDataTemplatePath" id="my-module.EksManagedNodegroupOptions.property.userDataTemplatePath"></a>

```typescript
public readonly userDataTemplatePath: string;
```

- _Type:_ string

Path to a local, custom user data template file to use when rendering user data.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="my-module.EksManagedNodegroupOptions.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- _Type:_ string

ID of the VPC where the security group/nodes will be provisioned.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="my-module.EksManagedNodegroupOptions.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- _Type:_ string[]

A list of security group IDs to associate.

---

### EksOptions <a name="EksOptions" id="my-module.EksOptions"></a>

#### Initializer <a name="Initializer" id="my-module.EksOptions.Initializer"></a>

```typescript
import { EksOptions } from 'my-module'

const eksOptions: EksOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                      | **Type**                               | **Description**                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><a href="#my-module.EksOptions.property.attachClusterEncryptionPolicy">attachClusterEncryptionPolicy</a></code>                         | <code>boolean</code>                   | Indicates whether or not to attach an additional policy for the cluster IAM role to utilize the encryption key provided.                                           |
| <code><a href="#my-module.EksOptions.property.awsAuthAccounts">awsAuthAccounts</a></code>                                                     | <code>any[]</code>                     | List of account maps to add to the aws-auth configmap.                                                                                                             |
| <code><a href="#my-module.EksOptions.property.awsAuthFargateProfilePodExecutionRoleArns">awsAuthFargateProfilePodExecutionRoleArns</a></code> | <code>string[]</code>                  | List of Fargate profile pod execution role ARNs to add to the aws-auth configmap.                                                                                  |
| <code><a href="#my-module.EksOptions.property.awsAuthNodeIamRoleArnsNonWindows">awsAuthNodeIamRoleArnsNonWindows</a></code>                   | <code>string[]</code>                  | List of non-Windows based node IAM role ARNs to add to the aws-auth configmap.                                                                                     |
| <code><a href="#my-module.EksOptions.property.awsAuthNodeIamRoleArnsWindows">awsAuthNodeIamRoleArnsWindows</a></code>                         | <code>string[]</code>                  | List of Windows based node IAM role ARNs to add to the aws-auth configmap.                                                                                         |
| <code><a href="#my-module.EksOptions.property.awsAuthRoles">awsAuthRoles</a></code>                                                           | <code>any[]</code>                     | List of role maps to add to the aws-auth configmap.                                                                                                                |
| <code><a href="#my-module.EksOptions.property.awsAuthUsers">awsAuthUsers</a></code>                                                           | <code>any[]</code>                     | List of user maps to add to the aws-auth configmap.                                                                                                                |
| <code><a href="#my-module.EksOptions.property.cloudwatchLogGroupKmsKeyId">cloudwatchLogGroupKmsKeyId</a></code>                               | <code>string</code>                    | If a KMS Key ARN is set, this key will be used to encrypt the corresponding log group.                                                                             |
| <code><a href="#my-module.EksOptions.property.cloudwatchLogGroupRetentionInDays">cloudwatchLogGroupRetentionInDays</a></code>                 | <code>number</code>                    | Number of days to retain log events.                                                                                                                               |
| <code><a href="#my-module.EksOptions.property.clusterAdditionalSecurityGroupIds">clusterAdditionalSecurityGroupIds</a></code>                 | <code>string[]</code>                  | List of additional, externally created security group IDs to attach to the cluster control plane.                                                                  |
| <code><a href="#my-module.EksOptions.property.clusterAddons">clusterAddons</a></code>                                                         | <code>any</code>                       | Map of cluster addon configurations to enable for the cluster.                                                                                                     |
| <code><a href="#my-module.EksOptions.property.clusterEnabledLogTypes">clusterEnabledLogTypes</a></code>                                       | <code>string[]</code>                  | A list of the desired control plane logs to enable.                                                                                                                |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionConfig">clusterEncryptionConfig</a></code>                                     | <code>any</code>                       | Configuration block with encryption configuration for the cluster.                                                                                                 |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionPolicyDescription">clusterEncryptionPolicyDescription</a></code>               | <code>string</code>                    | Description of the cluster encryption policy created.                                                                                                              |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionPolicyName">clusterEncryptionPolicyName</a></code>                             | <code>string</code>                    | Name to use on cluster encryption policy created.                                                                                                                  |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionPolicyPath">clusterEncryptionPolicyPath</a></code>                             | <code>string</code>                    | Cluster encryption policy path.                                                                                                                                    |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionPolicyTags">clusterEncryptionPolicyTags</a></code>                             | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster encryption policy created.                                                                                          |
| <code><a href="#my-module.EksOptions.property.clusterEncryptionPolicyUseNamePrefix">clusterEncryptionPolicyUseNamePrefix</a></code>           | <code>string</code>                    | Determines whether cluster encryption policy name (`cluster_encryption_policy_name`) is used as a prefix.                                                          |
| <code><a href="#my-module.EksOptions.property.clusterEndpointPrivateAccess">clusterEndpointPrivateAccess</a></code>                           | <code>boolean</code>                   | Indicates whether or not the Amazon EKS private API server endpoint is enabled.                                                                                    |
| <code><a href="#my-module.EksOptions.property.clusterEndpointPublicAccess">clusterEndpointPublicAccess</a></code>                             | <code>boolean</code>                   | Indicates whether or not the Amazon EKS public API server endpoint is enabled.                                                                                     |
| <code><a href="#my-module.EksOptions.property.clusterEndpointPublicAccessCidrs">clusterEndpointPublicAccessCidrs</a></code>                   | <code>string[]</code>                  | List of CIDR blocks which can access the Amazon EKS public API server endpoint.                                                                                    |
| <code><a href="#my-module.EksOptions.property.clusterIamRoleDnsSuffix">clusterIamRoleDnsSuffix</a></code>                                     | <code>string</code>                    | Base DNS domain name for the current partition (e.g., amazonaws.com in AWS Commercial, amazonaws.com.cn in AWS China).                                             |
| <code><a href="#my-module.EksOptions.property.clusterIdentityProviders">clusterIdentityProviders</a></code>                                   | <code>any</code>                       | Map of cluster identity provider configurations to enable for the cluster.                                                                                         |
| <code><a href="#my-module.EksOptions.property.clusterIpFamily">clusterIpFamily</a></code>                                                     | <code>string</code>                    | The IP family used to assign Kubernetes pod and service addresses.                                                                                                 |
| <code><a href="#my-module.EksOptions.property.clusterName">clusterName</a></code>                                                             | <code>string</code>                    | Name of the EKS cluster.                                                                                                                                           |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupAdditionalRules">clusterSecurityGroupAdditionalRules</a></code>             | <code>any</code>                       | List of additional security group rules to add to the cluster security group created.                                                                              |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupDescription">clusterSecurityGroupDescription</a></code>                     | <code>string</code>                    | Description of the cluster security group created.                                                                                                                 |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code>                                       | <code>string</code>                    | Existing security group ID to be attached to the cluster.                                                                                                          |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupName">clusterSecurityGroupName</a></code>                                   | <code>string</code>                    | Name to use on cluster security group created.                                                                                                                     |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupTags">clusterSecurityGroupTags</a></code>                                   | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster security group created.                                                                                             |
| <code><a href="#my-module.EksOptions.property.clusterSecurityGroupUseNamePrefix">clusterSecurityGroupUseNamePrefix</a></code>                 | <code>string</code>                    | Determines whether cluster security group name (`cluster_security_group_name`) is used as a prefix.                                                                |
| <code><a href="#my-module.EksOptions.property.clusterServiceIpv4Cidr">clusterServiceIpv4Cidr</a></code>                                       | <code>string</code>                    | The CIDR block to assign Kubernetes service IP addresses from.                                                                                                     |
| <code><a href="#my-module.EksOptions.property.clusterTags">clusterTags</a></code>                                                             | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the cluster.                                                                                                                    |
| <code><a href="#my-module.EksOptions.property.clusterTimeouts">clusterTimeouts</a></code>                                                     | <code>{[ key: string ]: string}</code> | Create, update, and delete timeout configurations for the cluster.                                                                                                 |
| <code><a href="#my-module.EksOptions.property.clusterVersion">clusterVersion</a></code>                                                       | <code>string</code>                    | Kubernetes `<major>.<minor>` version to use for the EKS cluster (i.e.: `1.21`).                                                                                    |
| <code><a href="#my-module.EksOptions.property.create">create</a></code>                                                                       | <code>boolean</code>                   | Controls if EKS resources should be created (affects nearly all resources).                                                                                        |
| <code><a href="#my-module.EksOptions.property.createAwsAuthConfigmap">createAwsAuthConfigmap</a></code>                                       | <code>boolean</code>                   | Determines whether to create the aws-auth configmap.                                                                                                               |
| <code><a href="#my-module.EksOptions.property.createCloudwatchLogGroup">createCloudwatchLogGroup</a></code>                                   | <code>boolean</code>                   | Determines whether a log group is created by this module for the cluster logs.                                                                                     |
| <code><a href="#my-module.EksOptions.property.createClusterPrimarySecurityGroupTags">createClusterPrimarySecurityGroupTags</a></code>         | <code>boolean</code>                   | Indicates whether or not to tag the cluster's primary security group.                                                                                              |
| <code><a href="#my-module.EksOptions.property.createClusterSecurityGroup">createClusterSecurityGroup</a></code>                               | <code>boolean</code>                   | Determines if a security group is created for the cluster or use the existing `cluster_security_group_id`.                                                         |
| <code><a href="#my-module.EksOptions.property.createCniIpv6IamPolicy">createCniIpv6IamPolicy</a></code>                                       | <code>boolean</code>                   | Determines whether to create an [`AmazonEKS_CNI_IPv6_Policy`](https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html#cni-iam-role-create-ipv6-policy). |
| <code><a href="#my-module.EksOptions.property.createIamRole">createIamRole</a></code>                                                         | <code>boolean</code>                   | Determines whether a an IAM role is created or to use an existing IAM role.                                                                                        |
| <code><a href="#my-module.EksOptions.property.createNodeSecurityGroup">createNodeSecurityGroup</a></code>                                     | <code>boolean</code>                   | Determines whether to create a security group for the node groups or use the existing `node_security_group_id`.                                                    |
| <code><a href="#my-module.EksOptions.property.customOidcThumbprints">customOidcThumbprints</a></code>                                         | <code>string[]</code>                  | Additional list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).                                         |
| <code><a href="#my-module.EksOptions.property.eksManagedNodeGroupDefaults">eksManagedNodeGroupDefaults</a></code>                             | <code>any</code>                       | Map of EKS managed node group default configurations.                                                                                                              |
| <code><a href="#my-module.EksOptions.property.eksManagedNodeGroups">eksManagedNodeGroups</a></code>                                           | <code>any</code>                       | Map of EKS managed node group definitions to create.                                                                                                               |
| <code><a href="#my-module.EksOptions.property.enableIrsa">enableIrsa</a></code>                                                               | <code>boolean</code>                   | Determines whether to create an OpenID Connect Provider for EKS to enable IRSA.                                                                                    |
| <code><a href="#my-module.EksOptions.property.fargateProfileDefaults">fargateProfileDefaults</a></code>                                       | <code>any</code>                       | Map of Fargate Profile default configurations.                                                                                                                     |
| <code><a href="#my-module.EksOptions.property.fargateProfiles">fargateProfiles</a></code>                                                     | <code>any</code>                       | Map of Fargate Profile definitions to create.                                                                                                                      |
| <code><a href="#my-module.EksOptions.property.iamRoleAdditionalPolicies">iamRoleAdditionalPolicies</a></code>                                 | <code>string[]</code>                  | Additional policies to be added to the IAM role.                                                                                                                   |
| <code><a href="#my-module.EksOptions.property.iamRoleArn">iamRoleArn</a></code>                                                               | <code>string</code>                    | Existing IAM role ARN for the cluster.                                                                                                                             |
| <code><a href="#my-module.EksOptions.property.iamRoleDescription">iamRoleDescription</a></code>                                               | <code>string</code>                    | Description of the role.                                                                                                                                           |
| <code><a href="#my-module.EksOptions.property.iamRoleName">iamRoleName</a></code>                                                             | <code>string</code>                    | Name to use on IAM role created.                                                                                                                                   |
| <code><a href="#my-module.EksOptions.property.iamRolePath">iamRolePath</a></code>                                                             | <code>string</code>                    | Cluster IAM role path.                                                                                                                                             |
| <code><a href="#my-module.EksOptions.property.iamRolePermissionsBoundary">iamRolePermissionsBoundary</a></code>                               | <code>string</code>                    | ARN of the policy that is used to set the permissions boundary for the IAM role.                                                                                   |
| <code><a href="#my-module.EksOptions.property.iamRoleTags">iamRoleTags</a></code>                                                             | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the IAM role created.                                                                                                           |
| <code><a href="#my-module.EksOptions.property.iamRoleUseNamePrefix">iamRoleUseNamePrefix</a></code>                                           | <code>boolean</code>                   | Determines whether the IAM role name (`iam_role_name`) is used as a prefix.                                                                                        |
| <code><a href="#my-module.EksOptions.property.manageAwsAuthConfigmap">manageAwsAuthConfigmap</a></code>                                       | <code>boolean</code>                   | Determines whether to manage the aws-auth configmap.                                                                                                               |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupAdditionalRules">nodeSecurityGroupAdditionalRules</a></code>                   | <code>any</code>                       | List of additional security group rules to add to the node security group created.                                                                                 |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupDescription">nodeSecurityGroupDescription</a></code>                           | <code>string</code>                    | Description of the node security group created.                                                                                                                    |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupId">nodeSecurityGroupId</a></code>                                             | <code>string</code>                    | ID of an existing security group to attach to the node groups created.                                                                                             |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupName">nodeSecurityGroupName</a></code>                                         | <code>string</code>                    | Name to use on node security group created.                                                                                                                        |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupTags">nodeSecurityGroupTags</a></code>                                         | <code>{[ key: string ]: string}</code> | A map of additional tags to add to the node security group created.                                                                                                |
| <code><a href="#my-module.EksOptions.property.nodeSecurityGroupUseNamePrefix">nodeSecurityGroupUseNamePrefix</a></code>                       | <code>string</code>                    | Determines whether node security group name (`node_security_group_name`) is used as a prefix.                                                                      |
| <code><a href="#my-module.EksOptions.property.openidConnectAudiences">openidConnectAudiences</a></code>                                       | <code>string[]</code>                  | List of OpenID Connect audience client IDs to add to the IRSA provider.                                                                                            |
| <code><a href="#my-module.EksOptions.property.prefixSeparator">prefixSeparator</a></code>                                                     | <code>string</code>                    | The separator to use between the prefix and the generated timestamp for resource names.                                                                            |
| <code><a href="#my-module.EksOptions.property.putinKhuylo">putinKhuylo</a></code>                                                             | <code>boolean</code>                   | Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?                                                                           |
| <code><a href="#my-module.EksOptions.property.selfManagedNodeGroupDefaults">selfManagedNodeGroupDefaults</a></code>                           | <code>any</code>                       | Map of self-managed node group default configurations.                                                                                                             |
| <code><a href="#my-module.EksOptions.property.selfManagedNodeGroups">selfManagedNodeGroups</a></code>                                         | <code>any</code>                       | Map of self-managed node group definitions to create.                                                                                                              |
| <code><a href="#my-module.EksOptions.property.subnetIds">subnetIds</a></code>                                                                 | <code>string[]</code>                  | A list of subnet IDs where the EKS cluster (ENIs) will be provisioned along with the nodes/node groups.                                                            |
| <code><a href="#my-module.EksOptions.property.tags">tags</a></code>                                                                           | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources.                                                                                                                             |
| <code><a href="#my-module.EksOptions.property.vpcId">vpcId</a></code>                                                                         | <code>string</code>                    | ID of the VPC where the cluster and its nodes will be provisioned.                                                                                                 |

---

##### `attachClusterEncryptionPolicy`<sup>Optional</sup> <a name="attachClusterEncryptionPolicy" id="my-module.EksOptions.property.attachClusterEncryptionPolicy"></a>

```typescript
public readonly attachClusterEncryptionPolicy: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates whether or not to attach an additional policy for the cluster IAM role to utilize the encryption key provided.

---

##### `awsAuthAccounts`<sup>Optional</sup> <a name="awsAuthAccounts" id="my-module.EksOptions.property.awsAuthAccounts"></a>

```typescript
public readonly awsAuthAccounts: any[];
```

- _Type:_ any[]

List of account maps to add to the aws-auth configmap.

---

##### `awsAuthFargateProfilePodExecutionRoleArns`<sup>Optional</sup> <a name="awsAuthFargateProfilePodExecutionRoleArns" id="my-module.EksOptions.property.awsAuthFargateProfilePodExecutionRoleArns"></a>

```typescript
public readonly awsAuthFargateProfilePodExecutionRoleArns: string[];
```

- _Type:_ string[]

List of Fargate profile pod execution role ARNs to add to the aws-auth configmap.

---

##### `awsAuthNodeIamRoleArnsNonWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsNonWindows" id="my-module.EksOptions.property.awsAuthNodeIamRoleArnsNonWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsNonWindows: string[];
```

- _Type:_ string[]

List of non-Windows based node IAM role ARNs to add to the aws-auth configmap.

---

##### `awsAuthNodeIamRoleArnsWindows`<sup>Optional</sup> <a name="awsAuthNodeIamRoleArnsWindows" id="my-module.EksOptions.property.awsAuthNodeIamRoleArnsWindows"></a>

```typescript
public readonly awsAuthNodeIamRoleArnsWindows: string[];
```

- _Type:_ string[]

List of Windows based node IAM role ARNs to add to the aws-auth configmap.

---

##### `awsAuthRoles`<sup>Optional</sup> <a name="awsAuthRoles" id="my-module.EksOptions.property.awsAuthRoles"></a>

```typescript
public readonly awsAuthRoles: any[];
```

- _Type:_ any[]

List of role maps to add to the aws-auth configmap.

---

##### `awsAuthUsers`<sup>Optional</sup> <a name="awsAuthUsers" id="my-module.EksOptions.property.awsAuthUsers"></a>

```typescript
public readonly awsAuthUsers: any[];
```

- _Type:_ any[]

List of user maps to add to the aws-auth configmap.

---

##### `cloudwatchLogGroupKmsKeyId`<sup>Optional</sup> <a name="cloudwatchLogGroupKmsKeyId" id="my-module.EksOptions.property.cloudwatchLogGroupKmsKeyId"></a>

```typescript
public readonly cloudwatchLogGroupKmsKeyId: string;
```

- _Type:_ string

If a KMS Key ARN is set, this key will be used to encrypt the corresponding log group.

Please be sure that the KMS Key has an appropriate key policy (https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)

---

##### `cloudwatchLogGroupRetentionInDays`<sup>Optional</sup> <a name="cloudwatchLogGroupRetentionInDays" id="my-module.EksOptions.property.cloudwatchLogGroupRetentionInDays"></a>

```typescript
public readonly cloudwatchLogGroupRetentionInDays: number;
```

- _Type:_ number
- _Default:_ 90

Number of days to retain log events.

Default retention - 90 days

---

##### `clusterAdditionalSecurityGroupIds`<sup>Optional</sup> <a name="clusterAdditionalSecurityGroupIds" id="my-module.EksOptions.property.clusterAdditionalSecurityGroupIds"></a>

```typescript
public readonly clusterAdditionalSecurityGroupIds: string[];
```

- _Type:_ string[]

List of additional, externally created security group IDs to attach to the cluster control plane.

---

##### `clusterAddons`<sup>Optional</sup> <a name="clusterAddons" id="my-module.EksOptions.property.clusterAddons"></a>

```typescript
public readonly clusterAddons: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of cluster addon configurations to enable for the cluster.

Addon name can be the map keys or set with `name`

---

##### `clusterEnabledLogTypes`<sup>Optional</sup> <a name="clusterEnabledLogTypes" id="my-module.EksOptions.property.clusterEnabledLogTypes"></a>

```typescript
public readonly clusterEnabledLogTypes: string[];
```

- _Type:_ string[]
- _Default:_ audit,api,authenticator

A list of the desired control plane logs to enable.

For more information, see Amazon EKS Control Plane Logging documentation (https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html)

---

##### `clusterEncryptionConfig`<sup>Optional</sup> <a name="clusterEncryptionConfig" id="my-module.EksOptions.property.clusterEncryptionConfig"></a>

```typescript
public readonly clusterEncryptionConfig: any;
```

- _Type:_ any

Configuration block with encryption configuration for the cluster.

---

##### `clusterEncryptionPolicyDescription`<sup>Optional</sup> <a name="clusterEncryptionPolicyDescription" id="my-module.EksOptions.property.clusterEncryptionPolicyDescription"></a>

```typescript
public readonly clusterEncryptionPolicyDescription: string;
```

- _Type:_ string
- _Default:_ Cluster encryption policy to allow cluster role to utilize CMK provided

Description of the cluster encryption policy created.

---

##### `clusterEncryptionPolicyName`<sup>Optional</sup> <a name="clusterEncryptionPolicyName" id="my-module.EksOptions.property.clusterEncryptionPolicyName"></a>

```typescript
public readonly clusterEncryptionPolicyName: string;
```

- _Type:_ string

Name to use on cluster encryption policy created.

---

##### `clusterEncryptionPolicyPath`<sup>Optional</sup> <a name="clusterEncryptionPolicyPath" id="my-module.EksOptions.property.clusterEncryptionPolicyPath"></a>

```typescript
public readonly clusterEncryptionPolicyPath: string;
```

- _Type:_ string

Cluster encryption policy path.

---

##### `clusterEncryptionPolicyTags`<sup>Optional</sup> <a name="clusterEncryptionPolicyTags" id="my-module.EksOptions.property.clusterEncryptionPolicyTags"></a>

```typescript
public readonly clusterEncryptionPolicyTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster encryption policy created.

---

##### `clusterEncryptionPolicyUseNamePrefix`<sup>Optional</sup> <a name="clusterEncryptionPolicyUseNamePrefix" id="my-module.EksOptions.property.clusterEncryptionPolicyUseNamePrefix"></a>

```typescript
public readonly clusterEncryptionPolicyUseNamePrefix: string;
```

- _Type:_ string
- _Default:_ true

Determines whether cluster encryption policy name (`cluster_encryption_policy_name`) is used as a prefix.

---

##### `clusterEndpointPrivateAccess`<sup>Optional</sup> <a name="clusterEndpointPrivateAccess" id="my-module.EksOptions.property.clusterEndpointPrivateAccess"></a>

```typescript
public readonly clusterEndpointPrivateAccess: boolean;
```

- _Type:_ boolean

Indicates whether or not the Amazon EKS private API server endpoint is enabled.

---

##### `clusterEndpointPublicAccess`<sup>Optional</sup> <a name="clusterEndpointPublicAccess" id="my-module.EksOptions.property.clusterEndpointPublicAccess"></a>

```typescript
public readonly clusterEndpointPublicAccess: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates whether or not the Amazon EKS public API server endpoint is enabled.

---

##### `clusterEndpointPublicAccessCidrs`<sup>Optional</sup> <a name="clusterEndpointPublicAccessCidrs" id="my-module.EksOptions.property.clusterEndpointPublicAccessCidrs"></a>

```typescript
public readonly clusterEndpointPublicAccessCidrs: string[];
```

- _Type:_ string[]
- _Default:_ 0.0.0.0/0

List of CIDR blocks which can access the Amazon EKS public API server endpoint.

---

##### `clusterIamRoleDnsSuffix`<sup>Optional</sup> <a name="clusterIamRoleDnsSuffix" id="my-module.EksOptions.property.clusterIamRoleDnsSuffix"></a>

```typescript
public readonly clusterIamRoleDnsSuffix: string;
```

- _Type:_ string

Base DNS domain name for the current partition (e.g., amazonaws.com in AWS Commercial, amazonaws.com.cn in AWS China).

---

##### `clusterIdentityProviders`<sup>Optional</sup> <a name="clusterIdentityProviders" id="my-module.EksOptions.property.clusterIdentityProviders"></a>

```typescript
public readonly clusterIdentityProviders: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of cluster identity provider configurations to enable for the cluster.

Note - this is different/separate from IRSA

---

##### `clusterIpFamily`<sup>Optional</sup> <a name="clusterIpFamily" id="my-module.EksOptions.property.clusterIpFamily"></a>

```typescript
public readonly clusterIpFamily: string;
```

- _Type:_ string

The IP family used to assign Kubernetes pod and service addresses.

Valid values are `ipv4` (default) and `ipv6`. You can only specify an IP family when you create a cluster, changing this value will force a new cluster to be created

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="my-module.EksOptions.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- _Type:_ string

Name of the EKS cluster.

---

##### `clusterSecurityGroupAdditionalRules`<sup>Optional</sup> <a name="clusterSecurityGroupAdditionalRules" id="my-module.EksOptions.property.clusterSecurityGroupAdditionalRules"></a>

```typescript
public readonly clusterSecurityGroupAdditionalRules: any;
```

- _Type:_ any
- _Default:_ [object Object]

List of additional security group rules to add to the cluster security group created.

Set `source_node_security_group = true` inside rules to set the `node_security_group` as source

---

##### `clusterSecurityGroupDescription`<sup>Optional</sup> <a name="clusterSecurityGroupDescription" id="my-module.EksOptions.property.clusterSecurityGroupDescription"></a>

```typescript
public readonly clusterSecurityGroupDescription: string;
```

- _Type:_ string
- _Default:_ EKS cluster security group

Description of the cluster security group created.

---

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="clusterSecurityGroupId" id="my-module.EksOptions.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- _Type:_ string

Existing security group ID to be attached to the cluster.

Required if `create_cluster_security_group` = `false`

---

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="clusterSecurityGroupName" id="my-module.EksOptions.property.clusterSecurityGroupName"></a>

```typescript
public readonly clusterSecurityGroupName: string;
```

- _Type:_ string

Name to use on cluster security group created.

---

##### `clusterSecurityGroupTags`<sup>Optional</sup> <a name="clusterSecurityGroupTags" id="my-module.EksOptions.property.clusterSecurityGroupTags"></a>

```typescript
public readonly clusterSecurityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster security group created.

---

##### `clusterSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="clusterSecurityGroupUseNamePrefix" id="my-module.EksOptions.property.clusterSecurityGroupUseNamePrefix"></a>

```typescript
public readonly clusterSecurityGroupUseNamePrefix: string;
```

- _Type:_ string
- _Default:_ true

Determines whether cluster security group name (`cluster_security_group_name`) is used as a prefix.

---

##### `clusterServiceIpv4Cidr`<sup>Optional</sup> <a name="clusterServiceIpv4Cidr" id="my-module.EksOptions.property.clusterServiceIpv4Cidr"></a>

```typescript
public readonly clusterServiceIpv4Cidr: string;
```

- _Type:_ string

The CIDR block to assign Kubernetes service IP addresses from.

If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks

---

##### `clusterTags`<sup>Optional</sup> <a name="clusterTags" id="my-module.EksOptions.property.clusterTags"></a>

```typescript
public readonly clusterTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the cluster.

---

##### `clusterTimeouts`<sup>Optional</sup> <a name="clusterTimeouts" id="my-module.EksOptions.property.clusterTimeouts"></a>

```typescript
public readonly clusterTimeouts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

Create, update, and delete timeout configurations for the cluster.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="my-module.EksOptions.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- _Type:_ string

Kubernetes `<major>.<minor>` version to use for the EKS cluster (i.e.: `1.21`).

---

##### `create`<sup>Optional</sup> <a name="create" id="my-module.EksOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- _Type:_ boolean
- _Default:_ true

Controls if EKS resources should be created (affects nearly all resources).

---

##### `createAwsAuthConfigmap`<sup>Optional</sup> <a name="createAwsAuthConfigmap" id="my-module.EksOptions.property.createAwsAuthConfigmap"></a>

```typescript
public readonly createAwsAuthConfigmap: boolean;
```

- _Type:_ boolean

Determines whether to create the aws-auth configmap.

NOTE - this is only intended for scenarios where the configmap does not exist (i.e. - when using only self-managed node groups). Most users should use `manage_aws_auth_configmap`

---

##### `createCloudwatchLogGroup`<sup>Optional</sup> <a name="createCloudwatchLogGroup" id="my-module.EksOptions.property.createCloudwatchLogGroup"></a>

```typescript
public readonly createCloudwatchLogGroup: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether a log group is created by this module for the cluster logs.

If not, AWS will automatically create one if logging is enabled

---

##### `createClusterPrimarySecurityGroupTags`<sup>Optional</sup> <a name="createClusterPrimarySecurityGroupTags" id="my-module.EksOptions.property.createClusterPrimarySecurityGroupTags"></a>

```typescript
public readonly createClusterPrimarySecurityGroupTags: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates whether or not to tag the cluster's primary security group.

This security group is created by the EKS service, not the module, and therefore tagging is handled after cluster creation

---

##### `createClusterSecurityGroup`<sup>Optional</sup> <a name="createClusterSecurityGroup" id="my-module.EksOptions.property.createClusterSecurityGroup"></a>

```typescript
public readonly createClusterSecurityGroup: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines if a security group is created for the cluster or use the existing `cluster_security_group_id`.

---

##### `createCniIpv6IamPolicy`<sup>Optional</sup> <a name="createCniIpv6IamPolicy" id="my-module.EksOptions.property.createCniIpv6IamPolicy"></a>

```typescript
public readonly createCniIpv6IamPolicy: boolean;
```

- _Type:_ boolean

Determines whether to create an [`AmazonEKS_CNI_IPv6_Policy`](https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html#cni-iam-role-create-ipv6-policy).

---

##### `createIamRole`<sup>Optional</sup> <a name="createIamRole" id="my-module.EksOptions.property.createIamRole"></a>

```typescript
public readonly createIamRole: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether a an IAM role is created or to use an existing IAM role.

---

##### `createNodeSecurityGroup`<sup>Optional</sup> <a name="createNodeSecurityGroup" id="my-module.EksOptions.property.createNodeSecurityGroup"></a>

```typescript
public readonly createNodeSecurityGroup: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to create a security group for the node groups or use the existing `node_security_group_id`.

---

##### `customOidcThumbprints`<sup>Optional</sup> <a name="customOidcThumbprints" id="my-module.EksOptions.property.customOidcThumbprints"></a>

```typescript
public readonly customOidcThumbprints: string[];
```

- _Type:_ string[]

Additional list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).

---

##### `eksManagedNodeGroupDefaults`<sup>Optional</sup> <a name="eksManagedNodeGroupDefaults" id="my-module.EksOptions.property.eksManagedNodeGroupDefaults"></a>

```typescript
public readonly eksManagedNodeGroupDefaults: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of EKS managed node group default configurations.

---

##### `eksManagedNodeGroups`<sup>Optional</sup> <a name="eksManagedNodeGroups" id="my-module.EksOptions.property.eksManagedNodeGroups"></a>

```typescript
public readonly eksManagedNodeGroups: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of EKS managed node group definitions to create.

---

##### `enableIrsa`<sup>Optional</sup> <a name="enableIrsa" id="my-module.EksOptions.property.enableIrsa"></a>

```typescript
public readonly enableIrsa: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether to create an OpenID Connect Provider for EKS to enable IRSA.

---

##### `fargateProfileDefaults`<sup>Optional</sup> <a name="fargateProfileDefaults" id="my-module.EksOptions.property.fargateProfileDefaults"></a>

```typescript
public readonly fargateProfileDefaults: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of Fargate Profile default configurations.

---

##### `fargateProfiles`<sup>Optional</sup> <a name="fargateProfiles" id="my-module.EksOptions.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of Fargate Profile definitions to create.

---

##### `iamRoleAdditionalPolicies`<sup>Optional</sup> <a name="iamRoleAdditionalPolicies" id="my-module.EksOptions.property.iamRoleAdditionalPolicies"></a>

```typescript
public readonly iamRoleAdditionalPolicies: string[];
```

- _Type:_ string[]

Additional policies to be added to the IAM role.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="my-module.EksOptions.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- _Type:_ string

Existing IAM role ARN for the cluster.

Required if `create_iam_role` is set to `false`

---

##### `iamRoleDescription`<sup>Optional</sup> <a name="iamRoleDescription" id="my-module.EksOptions.property.iamRoleDescription"></a>

```typescript
public readonly iamRoleDescription: string;
```

- _Type:_ string

Description of the role.

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="my-module.EksOptions.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- _Type:_ string

Name to use on IAM role created.

---

##### `iamRolePath`<sup>Optional</sup> <a name="iamRolePath" id="my-module.EksOptions.property.iamRolePath"></a>

```typescript
public readonly iamRolePath: string;
```

- _Type:_ string

Cluster IAM role path.

---

##### `iamRolePermissionsBoundary`<sup>Optional</sup> <a name="iamRolePermissionsBoundary" id="my-module.EksOptions.property.iamRolePermissionsBoundary"></a>

```typescript
public readonly iamRolePermissionsBoundary: string;
```

- _Type:_ string

ARN of the policy that is used to set the permissions boundary for the IAM role.

---

##### `iamRoleTags`<sup>Optional</sup> <a name="iamRoleTags" id="my-module.EksOptions.property.iamRoleTags"></a>

```typescript
public readonly iamRoleTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the IAM role created.

---

##### `iamRoleUseNamePrefix`<sup>Optional</sup> <a name="iamRoleUseNamePrefix" id="my-module.EksOptions.property.iamRoleUseNamePrefix"></a>

```typescript
public readonly iamRoleUseNamePrefix: boolean;
```

- _Type:_ boolean
- _Default:_ true

Determines whether the IAM role name (`iam_role_name`) is used as a prefix.

---

##### `manageAwsAuthConfigmap`<sup>Optional</sup> <a name="manageAwsAuthConfigmap" id="my-module.EksOptions.property.manageAwsAuthConfigmap"></a>

```typescript
public readonly manageAwsAuthConfigmap: boolean;
```

- _Type:_ boolean

Determines whether to manage the aws-auth configmap.

---

##### `nodeSecurityGroupAdditionalRules`<sup>Optional</sup> <a name="nodeSecurityGroupAdditionalRules" id="my-module.EksOptions.property.nodeSecurityGroupAdditionalRules"></a>

```typescript
public readonly nodeSecurityGroupAdditionalRules: any;
```

- _Type:_ any
- _Default:_ [object Object]

List of additional security group rules to add to the node security group created.

Set `source_cluster_security_group = true` inside rules to set the `cluster_security_group` as source

---

##### `nodeSecurityGroupDescription`<sup>Optional</sup> <a name="nodeSecurityGroupDescription" id="my-module.EksOptions.property.nodeSecurityGroupDescription"></a>

```typescript
public readonly nodeSecurityGroupDescription: string;
```

- _Type:_ string
- _Default:_ EKS node shared security group

Description of the node security group created.

---

##### `nodeSecurityGroupId`<sup>Optional</sup> <a name="nodeSecurityGroupId" id="my-module.EksOptions.property.nodeSecurityGroupId"></a>

```typescript
public readonly nodeSecurityGroupId: string;
```

- _Type:_ string

ID of an existing security group to attach to the node groups created.

---

##### `nodeSecurityGroupName`<sup>Optional</sup> <a name="nodeSecurityGroupName" id="my-module.EksOptions.property.nodeSecurityGroupName"></a>

```typescript
public readonly nodeSecurityGroupName: string;
```

- _Type:_ string

Name to use on node security group created.

---

##### `nodeSecurityGroupTags`<sup>Optional</sup> <a name="nodeSecurityGroupTags" id="my-module.EksOptions.property.nodeSecurityGroupTags"></a>

```typescript
public readonly nodeSecurityGroupTags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of additional tags to add to the node security group created.

---

##### `nodeSecurityGroupUseNamePrefix`<sup>Optional</sup> <a name="nodeSecurityGroupUseNamePrefix" id="my-module.EksOptions.property.nodeSecurityGroupUseNamePrefix"></a>

```typescript
public readonly nodeSecurityGroupUseNamePrefix: string;
```

- _Type:_ string
- _Default:_ true

Determines whether node security group name (`node_security_group_name`) is used as a prefix.

---

##### `openidConnectAudiences`<sup>Optional</sup> <a name="openidConnectAudiences" id="my-module.EksOptions.property.openidConnectAudiences"></a>

```typescript
public readonly openidConnectAudiences: string[];
```

- _Type:_ string[]

List of OpenID Connect audience client IDs to add to the IRSA provider.

---

##### `prefixSeparator`<sup>Optional</sup> <a name="prefixSeparator" id="my-module.EksOptions.property.prefixSeparator"></a>

```typescript
public readonly prefixSeparator: string;
```

- _Type:_ string
- _Default:_

The separator to use between the prefix and the generated timestamp for resource names.

---

##### `putinKhuylo`<sup>Optional</sup> <a name="putinKhuylo" id="my-module.EksOptions.property.putinKhuylo"></a>

```typescript
public readonly putinKhuylo: boolean;
```

- _Type:_ boolean
- _Default:_ true

Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?

More info: https://en.wikipedia.org/wiki/Putin_khuylo!

---

##### `selfManagedNodeGroupDefaults`<sup>Optional</sup> <a name="selfManagedNodeGroupDefaults" id="my-module.EksOptions.property.selfManagedNodeGroupDefaults"></a>

```typescript
public readonly selfManagedNodeGroupDefaults: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of self-managed node group default configurations.

---

##### `selfManagedNodeGroups`<sup>Optional</sup> <a name="selfManagedNodeGroups" id="my-module.EksOptions.property.selfManagedNodeGroups"></a>

```typescript
public readonly selfManagedNodeGroups: any;
```

- _Type:_ any
- _Default:_ [object Object]

Map of self-managed node group definitions to create.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="my-module.EksOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- _Type:_ string[]

A list of subnet IDs where the EKS cluster (ENIs) will be provisioned along with the nodes/node groups.

Node groups can be deployed within a different set of subnet IDs from within the node group configuration

---

##### `tags`<sup>Optional</sup> <a name="tags" id="my-module.EksOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}

A map of tags to add to all resources.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="my-module.EksOptions.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- _Type:_ string

ID of the VPC where the cluster and its nodes will be provisioned.

---
