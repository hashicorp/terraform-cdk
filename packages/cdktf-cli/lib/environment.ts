// All switches based on environment variables in one place

function envVarToBoolean(envVar: string | undefined): boolean {
  return envVar === "true" || envVar === "1";
}

export const DISABLE_VERSION_CHECK = envVarToBoolean(
  process.env.DISABLE_VERSION_CHECK
);
export const CHECKPOINT_DISABLE = envVarToBoolean(
  process.env.CHECKPOINT_DISABLE
);
export const CDKTF_DISABLE_PLUGIN_CACHE_ENV = envVarToBoolean(
  process.env.CDKTF_DISABLE_PLUGIN_CACHE_ENV
);
