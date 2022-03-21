import { Testing, TerraformStack } from "../lib";
import * as b from "../lib/backends";
import { TestResource } from "./helper";
import { TestProvider } from "./helper/provider";

test("local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateLocal(stack, "remote", {
    path: "relative/path/to/terraform.tfstate",
    workspaceDir: "local_workspace",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("remote", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteState(stack, "remote", {
    hostname: "app.terraform.io",
    organization: "company",

    workspaces: {
      name: "my-app-prod",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("artifactory", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateArtifactory(stack, "remote", {
    username: "SheldonCooper",
    password: "AmyFarrahFowler",
    url: "https://custom.artifactoryonline.com/artifactory",
    repo: "foo",
    subpath: "terraform-bar",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("azurerm", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateAzurerm(stack, "remote", {
    resourceGroupName: "StorageAccount-ResourceGroup",
    storageAccountName: "abcd1234",
    containerName: "tfstate",
    key: "prod.terraform.tfstate",
    clientId: "ARM_CLIENT_ID",
    clientSecret: "ARM_CLIENT_SECRET",
    endpoint: "ARM_ENDPOINT",
    environment: "public",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("consul", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateConsul(stack, "remote", {
    address: "demo.consul.io",
    scheme: "https",
    path: "full/path",
    accessToken: "CONSUL_HTTP_TOKEN",
    caFile: "CONSUL_CACERT",
    certFile: "CONSUL_CLIENT_CERT",
    datacenter: "agent",
    gzip: true,
    httpAuth: "CONSUL_HTTP_AUTH",
    keyFile: "CONSUL_CLIENT_KEY",
    lock: true,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("cos", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateCos(stack, "remote", {
    region: "ap-guangzhou",
    bucket: "bucket-for-terraform-state-1258798060",
    prefix: "terraform/state",
    secretId: "TENCENTCLOUD_SECRET_ID",
    secretKey: "TENCENTCLOUD_SECRET_KEY",
    acl: "private",
    encrypt: true,
    key: "terraform.tfstate",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("etcd", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateEtcd(stack, "remote", {
    path: "path/to/terraform.tfstate",
    endpoints: "http://one:4001 http://two:4001",
    username: "the user",
    password: "the password",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("etcdv3", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateEtcdV3(stack, "remote", {
    endpoints: ["etcd-1:2379", "etcd-2:2379", "etcd-3:2379"],
    lock: true,
    prefix: "terraform-state/",
    username: "ETCDV3_USERNAME",
    password: "ETCDV3_PASSWORD",
    cacertPath: "CA bundle",
    certPath: "certificate",
    keyPath: "encoded key",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("gcs", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateGcs(stack, "remote", {
    bucket: "tf-state-prod",
    prefix: "terraform/state",
    accessToken: "Authorization: Bearer",
    credentials: "GOOGLE_BACKEND_CREDENTIALS",
    encryptionKey: "GOOGLE_ENCRYPTION_KEY",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("http", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateHttp(stack, "remote", {
    address: "http://myrest.api.com/foo",
    lockAddress: "http://myrest.api.com/foo",
    unlockAddress: "http://myrest.api.com/foo",
    lockMethod: "LOCK",
    password: "HTTP basic auth password",
    retryMax: 2,
    retryWaitMax: 30,
    retryWaitMin: 1,
    skipCertVerification: false,
    unlockMethod: "UNLOCK",
    updateMethod: "POST",
    username: "HTTP basic auth user",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("manta", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateManta(stack, "remote", {
    path: "random/path",
    objectName: "terraform.tfstate",
    account: "SDC_ACCOUNT",
    user: "SDC_USER",
    url: "MANTA_URL",
    keyMaterial: "SDC_KEY_MATERIAL",
    keyId: "SDC_KEY",
    insecureSkipTlsVerify: false,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("oss", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateOss(stack, "remote", {
    bucket: "bucket-for-terraform-state",
    prefix: "path/mystate",
    key: "version-1.tfstate",
    region: "cn-beijing",
    tablestoreEndpoint: "https://terraform-remote.cn-hangzhou.ots.aliyuncs.com",
    tablestoreTable: "statelock",
    accessKey: "ALICLOUD_ACCESS_KEY",
    secretKey: "ALICLOUD_SECRET_KEY",
    securityToken: "ALICLOUD_SECURITY_TOKEN",
    ecsRoleName: "RAM Role Name",
    acl: "object acl",
    assumeRole: {
      roleArn: "ALICLOUD_ASSUME_ROLE_ARN",
      policy: "restrictive policy",
      sessionName: "ALICLOUD_ASSUME_ROLE_SESSION_NAME",
      sessionExpiration: 3600,
    },
    encrypt: true,
    endpoint: "ALICLOUD_OSS_ENDPOINT",
    profile: "ALICLOUD_PROFILE",
    sharedCredentialsFile: "ALICLOUD_SHARED_CREDENTIALS_FILE",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("pg", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStatePg(stack, "remote", {
    connStr: "postgres://user:pass@db.example.com/terraform_backend",
    schemaName: "terraform_remote_state",
    skipSchemaCreation: true,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("s3", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateS3(stack, "remote", {
    bucket: "mybucket",
    key: "path/to/my/key",
    region: "us-east-1",
    endpoint: "AWS_S3_ENDPOINT",
    encrypt: true,
    acl: "Canned ACL",
    accessKey: "AWS_ACCESS_KEY_ID",
    secretKey: "AWS_SECRET_ACCESS_KEY",
    kmsKeyId: "ARN of a KMS Key",
    dynamodbTable: "DynamoDB table",
    profile: "AWS_PROFILE",
    sharedCredentialsFile: "~/.aws/credentials",
    token: "AWS_SESSION_TOKEN",
    roleArn: "role to be assumed",
    assumeRolePolicy: "permissions for assuming role",
    externalId: "external ID",
    sessionName: "role session name",
    workspaceKeyPrefix: "env:",
    dynamodbEndpoint: "AWS_DYNAMODB_ENDPOINT",
    iamEndpoint: "AWS_IAM_ENDPOINT",
    stsEndpoint: "AWS_STS_ENDPOINT",
    forcePathStyle: false,
    skipCredentialsValidation: false,
    skipMetadataApiCheck: true,
    sseCustomerKey: "AWS_SSE_CUSTOMER_KEY",
    maxRetries: 5,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("s3 with options", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateS3(stack, "remote", {
    bucket: "mybucket",
    key: "path/to/my/key",
    workspace: "my_workspace",
    defaults: {
      someProp: "some_value",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("s3 reference", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});

  const remoteState = new b.DataTerraformRemoteStateS3(stack, "remote", {
    bucket: "mybucket",
    key: "path/to/my/key",
  });

  new TestResource(stack, "test_resource", {
    name: remoteState.getString("name"),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("swift", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new b.DataTerraformRemoteStateSwift(stack, "remote", {
    container: "terraform-state",
    archiveContainer: "terraform-state-archive",
    authUrl: "OS_AUTH_URL",
    cloud: "OS_CLOUD",
    stateName: "tfstate.tf",
    userName: "OS_USERNAME",
    userId: "OS_USER_ID",
    password: "OS_PASSWORD",
    applicationCredentialId: "ID of app cred",
    applicationCredentialName: "name of app cred",
    applicationCredentialSecret: "secret of app cred",
    token: "OS_AUTH_TOKEN",
    regionName: "OS_REGION_NAME",
    tenantId: "OS_TENANT_ID",
    tenantName: "OS_TENANT_NAME",
    domainId: "OS_USER_DOMAIN_ID",
    domainName: "OS_USER_DOMAIN_NAME",
    userDomainName: "OS_USER_DOMAIN_NAME",
    userDomainId: "OS_USER_DOMAIN_ID",
    projectDomainName: "OS_PROJECT_DOMAIN_NAME",
    projectDomainId: "OS_PROJECT_DOMAIN_ID",
    defaultDomain: "OS_DEFAULT_DOMAIN",
    insecure: true,
    cacertFile: "OS_CACERT",
    cert: "OS_CERT",
    key: "OS_KEY",
    expireAfter: "3d",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
