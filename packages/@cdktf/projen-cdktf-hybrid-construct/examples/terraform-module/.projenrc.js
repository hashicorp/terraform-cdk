const { cdktf } = require("projen");
const project = new cdktf.ConstructLibraryCdktf({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  cdktfVersion: "^0.8.3",
  defaultReleaseBranch: "main",
  name: "terraform-module",
  repositoryUrl:
    "git@github.com:DanielMSchmidt/projen-cdktf-hybrid-construct.git",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
