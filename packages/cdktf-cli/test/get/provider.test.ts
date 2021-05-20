import { expectImportMatchSnapshot } from "./util";
import { TerraformDependencyConstraint, TerraformProviderConstraint } from "../../lib/config";

const getProvider = (constraint: TerraformDependencyConstraint) =>
  expectImportMatchSnapshot(constraint);

getProvider(new TerraformProviderConstraint('aws@= 2.60.0'));

getProvider(new TerraformProviderConstraint('phillbaker/elasticsearch@= 1.5.1'));

getProvider(new TerraformProviderConstraint('oci@= 4.13.0'));