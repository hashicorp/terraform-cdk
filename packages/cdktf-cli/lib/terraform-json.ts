export interface TerraformJsonMetadata {
  version: string;
  stackName: string;
}
export interface TerraformJsonRootComment {
  metadata: TerraformJsonMetadata;
}

export interface TerraformJsonConfigBackendRemoteWorkspace {
  name?: string;
  prefix?: string;
}

export interface TerraformJsonConfigBackendRemote {
  organization: string;
  hostname?: string;
  token?: string;
  workspaces: TerraformJsonConfigBackendRemoteWorkspace;
}

export interface TerraformJsonConfigCloudWorkspace {
  name?: string;
}
export interface TerraformJsonConfigCloud {
  organization: string;
  hostname?: string;
  token?: string;
  workspaces: TerraformJsonConfigCloudWorkspace;
}

export interface TerraformJsonConfigBackend {
  remote?: TerraformJsonConfigBackendRemote;
}
export interface TerraformJsonConfig {
  backend?: TerraformJsonConfigBackend;
  cloud?: TerraformJsonConfigCloud;
}
export interface TerraformJson {
  "//": TerraformJsonRootComment;
  resource: { [key: string]: any };
  terraform?: TerraformJsonConfig;
}
