CDK for Terraform uses feature flags to enable potentially breaking behaviors in a release. Flags are stored as Runtime context values in cdktf.json as shown here.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "context": {
      "excludeStackIdFromLogicalIds": "true"
  }
}
```

Feature flags are disabled by default, so existing projects that do not specify the flag will continue to work as expected with later CDKTF releases. New projects created using `cdktf init` include flags enabling all features available in the release that created the project. Edit `cdktf.json` to disable any flags for which you prefer the old behavior, or to add flags to enable new behaviors after upgrading the CDK for Terraform.

See the CHANGELOG in a given release for a description of any new feature flags added in that release. The CDKTF source file [features.ts](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf/lib/features.ts) provides a complete list of all current feature flags.