import { expectImportMatchSnapshot } from "./util";
import { TerraformDependencyConstraint, TerraformProviderConstraint } from "../../lib/config";

const getProvider = (constraint: TerraformDependencyConstraint) =>
  expectImportMatchSnapshot(constraint);

getProvider(new TerraformProviderConstraint('aws@= 2.60.0'));