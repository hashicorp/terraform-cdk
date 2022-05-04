// All switches based on environment variables in one place

function envVarToBoolean(envVar: string | undefined): boolean {
  return envVar === "true" || envVar === "1";
}

export const DISABLE_VERSION_CHECK = envVarToBoolean(
  process.env.DISABLE_VERSION_CHECK
);
// This is a Terraform global environment variable, so we can't use the same logic as the other env vars
// https://www.terraform.io/cli/commands#upgrade-and-security-bulletin-checks
export const CHECKPOINT_DISABLE = Boolean(process.env.CHECKPOINT_DISABLE);

export const CDKTF_DISABLE_PLUGIN_CACHE_ENV = envVarToBoolean(
  process.env.CDKTF_DISABLE_PLUGIN_CACHE_ENV
);
