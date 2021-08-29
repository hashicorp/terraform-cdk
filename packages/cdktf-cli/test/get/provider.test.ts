import { expectImportMatchSnapshot } from "./util";
import { TerraformProviderConstraint } from "../../lib/config";
import { TerraformDependencyConstraint } from "@cdktf/hcl2cdk";

const getProvider = (constraint: TerraformDependencyConstraint) =>
  expectImportMatchSnapshot(constraint);

getProvider(new TerraformProviderConstraint("aws@= 2.60.0"));

getProvider(
  new TerraformProviderConstraint("phillbaker/elasticsearch@= 1.5.1")
);

getProvider(new TerraformProviderConstraint("oci@= 4.13.0"));
