import { exec } from "../../../lib/util";

export const terraformBinaryName =
  process.env.TERRAFORM_BINARY_NAME || "terraform";
export const terraformVersion = exec(
  terraformBinaryName,
  ["version", "-json"],
  {}
)
  .then((versionString) => JSON.parse(versionString).terraform_version)
  .catch((err) => `Unknown: Error loading terraform version ${err}`);
