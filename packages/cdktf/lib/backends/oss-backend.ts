import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class OssBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: OssBackendProps) {
    super(scope, "backend", "oss");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    _scope: Construct,
    _name: string,
    _fromStack: string
  ): TerraformRemoteState {
    throw new Error(
      "The OssBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateOss extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateOssConfig
  ) {
    super(scope, id, "oss", config);
  }
}

export interface OssBackendProps {
  readonly accessKey?: string;
  readonly secretKey?: string;
  readonly securityToken?: string;
  readonly ecsRoleName?: string;
  readonly region?: string;
  readonly endpoint?: string;
  readonly bucket: string;
  readonly prefix?: string;
  readonly key?: string;
  readonly tablestoreEndpoint?: string;
  readonly tablestoreTable?: string;
  readonly encrypt?: boolean;
  readonly acl?: string;
  readonly sharedCredentialsFile?: string;
  readonly profile?: string;
  readonly assumeRole?: OssAssumeRole;
}

export interface OssAssumeRole {
  readonly roleArn: string;
  readonly policy?: string;
  readonly sessionName?: string;
  readonly sessionExpiration?: number;
}

export interface DataTerraformRemoteStateOssConfig
  extends DataTerraformRemoteStateConfig,
    OssBackendProps {}
