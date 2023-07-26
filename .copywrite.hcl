schema_version = 1

project {
  license        = "MPL-2.0"
  copyright_year = 2020

  header_ignore = [
    "**node_modules**",
    ".github/ISSUE_TEMPLATE/*.yml",
    "packages/@cdktf/cli-core/templates/**",
    "test/verdaccio.yaml",
    "test/local-registry.sh"
  ]
}
