type Prefix = string;
export type ResourceNamespace = {
  name: string;
  comment: string;
  additionalPrefix?: Prefix[];
};

// If the same prefix is used, the longest will take precedent over the others.
const aws: Record<Prefix, ResourceNamespace> = {
  acmpa: {
    name: "acmpca",
    comment: "AWS Certificate Manager Private Certificate Authority",
  },
  acm: { name: "acm", comment: "Amazon Certificate Manager" },
  apigatewayv2: {
    name: "apigatewayv2",
    comment: "Amazon API Gateway Websocket and HTTP APIs",
  },
  api_gateway: {
    name: "apigateway",
    comment: "API Gateway",
  },
  accessanalyzer: {
    name: "accessanalyzer",
    comment: "Access Analyzer Analyzer",
  },
  prometheus: {
    name: "prometheus",
    comment: "Prometheus",
  },
  amplify: {
    name: "amplify",
    comment: "AWS Amplify",
  },
  apprunner: {
    name: "apprunner",
    comment: "App Runner",
  },
  appconfig: {
    name: "appconfig",
    comment: "AppConfig",
  },
  appmesh: {
    name: "appmesh",
    comment: "App Mesh",
  },
  appstream: {
    name: "appstream",
    comment: "AppStream",
  },
  appsync: {
    name: "appsync",
    comment: "AWS AppSync",
  },
  appautoscaling: {
    name: "appautoscaling",
    comment: "AWS AppAutoScaling",
  },
  athena: {
    name: "athena",
    comment: "Amazon Athena",
  },
  autoscalingplans: {
    name: "autoscalingplans",
    comment: "AWS Auto Scaling Plans",
  },
  autoscaling: {
    name: "autoscaling",
    comment: "AWS Auto Scaling",
    additionalPrefix: ["launch_configuration"],
  },
  backup: {
    name: "backup",
    comment: "AWS Backup",
  },
  batch: {
    name: "batch",
    comment: "AWS Batch",
  },
  budgets: {
    name: "budgets",
    comment: "AWS Budgets",
  },
  chime: {
    name: "chime",
    comment: "Amazon Chime",
  },
  cloud9: {
    name: "cloud9",
    comment: "AWS Cloud9",
  },
  cloudformation: {
    name: "cloudformation",
    comment: "AWS CloudFormation",
  },
  cloudfront: {
    name: "cloudfront",
    comment: "AWS CloudFront",
  },
  cloudhsm: {
    name: "cloudhsm",
    comment: "AWS CloudHSM",
  },
  cloudtrail: {
    name: "cloudtrail",
    comment: "AWS CloudTrail",
  },
  cloudwatch: {
    name: "cloudwatch",
    comment: "AWS CloudWatch",
  },
  codeartifact: {
    name: "codeartifact",
    comment: "AWS CodeArtifact",
  },
  codebuild: {
    name: "codebuild",
    comment: "AWS CodeBuild",
  },
  codecommit: {
    name: "codecommit",
    comment: "AWS CodeCommit",
  },
  codedeploy: {
    name: "codedeploy",
    comment: "AWS CodeDeploy",
  },
  codepipeline: {
    name: "codepipeline",
    comment: "AWS CodePipeline",
  },
  codestar: {
    name: "codestar",
    comment: "AWS CodeStar",
  },
  cognito: {
    name: "cognito",
    comment: "AWS Cognito",
  },
  config: {
    name: "config",
    comment: "AWS Config",
  },
  connect: {
    name: "connect",
    comment: "AWS Connect",
  },
  cur: {
    name: "cur",
    comment: "AWS Cost and Usage Report",
  },
  dlm: {
    name: "dlm",
    comment: "AWS Data Lifecycle Manager",
  },
  datapipeline: {
    name: "datapipeline",
    comment: "AWS Data Pipeline",
  },
  datasync: {
    name: "datasync",
    comment: "AWS DataSync",
  },
  dms: {
    name: "dms",
    comment: "AWS Database Migration Service",
  },
  devicefarm: {
    name: "devicefarm",
    comment: "AWS Device Farm",
  },
  dx: {
    name: "directconnect",
    comment: "AWS Direct Connect",
  },
  directory_service: {
    name: "directoryservice",
    comment: "AWS Directory Service",
  },
  docdb: {
    name: "documentdb",
    comment: "AWS DocumentDB",
  },
  dynamodb: {
    name: "dynamodb",
    comment: "AWS DynamoDB",
  },
  dax: {
    name: "dax",
    comment: "AWS DynamoDB Accelerator",
  },
  ec2: {
    name: "ec2",
    comment: "AWS EC2",
    additionalPrefix: [
      "ami",
      "ebs",
      "eip",
      "instance",
      "key_pair",
      "launch_template",
      "placement_group",
      "snapshot_create_volume_permission",
      "spot",
      "volume_attachment",
    ],
  },
  ecr: {
    name: "ecr",
    comment: "AWS EC2 Container Registry",
  },
  ecs: {
    name: "ecs",
    comment: "AWS EC2 Container Service",
  },
  efs: {
    name: "efs",
    comment: "AWS EFS",
  },
  eks: {
    name: "eks",
    comment: "AWS Elastic Kubernetes Service",
  },
  elasticache: {
    name: "elasticache",
    comment: "AWS ElastiCache",
  },
  elastic_beanstalk: {
    name: "elasticbeanstalk",
    comment: "AWS Elastic Beanstalk",
  },
  lb: {
    name: "elb",
    comment: "AWS Elastic Load Balancer",
    additionalPrefix: [
      "alb",
      "elb",
      "app_cookie_stickiness_policy",
      "proxy_protocol_policy",
      "load_balancer",
    ],
  },
  emr: {
    name: "emr",
    comment: "AWS Elastic MapReduce",
  },
  elastictranscoder: {
    name: "elastictranscoder",
    comment: "AWS Elastic Transcoder",
  },
  elasticsearch: {
    name: "elasticsearch",
    comment: "AWS ElasticSearch Service",
  },
  cloudwatch_event: {
    name: "eventbridge",
    comment: "AWS CloudWatch Event Bridge",
  },
  schemas: {
    name: "eventbridgeschemas",
    comment: "AWS EventBridge Schemas",
  },
  fsx: {
    name: "fsx",
    comment: "AWS File System FSx",
  },
  fms: {
    name: "fms",
    comment: "AWS Firewall Management Service",
  },
  gamelift: {
    name: "gamelift",
    comment: "AWS GameLift",
  },
  glacier: {
    name: "glacier",
    comment: "AWS Glacier",
  },
  globalaccelerator: {
    name: "globalaccelerator",
    comment: "AWS Global Accelerator",
  },
  glue: {
    name: "glue",
    comment: "AWS Glue",
  },
  guardduty: {
    name: "guardduty",
    comment: "AWS GuardDuty",
  },
  iam: {
    name: "iam",
    comment: "AWS Identity and Access Management",
  },
  identitiystore: {
    name: "identitystore",
    comment: "AWS Identity Store",
  },
  imagebuilder: {
    name: "imagebuilder",
    comment: "AWS Image Builder",
  },
  inspector: {
    name: "inspector",
    comment: "AWS Inspector",
    additionalPrefix: ["inspector_assessment_target"],
  },
  iot: {
    name: "iot",
    comment: "AWS IoT",
  },
  kms: {
    name: "kms",
    comment: "AWS Key Management Service",
  },
  kinesis: {
    name: "kinesis",
    comment: "AWS Kinesis",
  },
  lakeformation: {
    name: "lakeformation",
    comment: "AWS Lake Formation",
  },
  lambda: {
    name: "lambdafunction",
    comment: "AWS Lambda",
  },
  lex: {
    name: "lex",
    comment: "AWS Lex",
  },
  licensemanager: {
    name: "licensemanager",
    comment: "AWS License Manager",
  },
  lightsail: {
    name: "lightsail",
    comment: "AWS Lightsail",
  },
  mq: {
    name: "mq",
    comment: "AWS Managed Message Queue",
  },
  macie2: {
    name: "macie2",
    comment: "AWS Macie 2",
  },
  macie: {
    name: "macie",
    comment: "AWS Macie",
  },
  msk: {
    name: "msk",
    comment: "AWS Managed Streaming for Kafka",
  },
  mwaa: {
    name: "mwaa",
    comment: "AWS Managed Workloads for Apache Airflow",
  },
  media_convert: {
    name: "mediaconvert",
    comment: "AWS MediaConvert",
  },
  media_package: {
    name: "mediapackage",
    comment: "Media Package",
  },
  media_store: {
    name: "mediastore",
    comment: "AWS Media Store",
  },
  neptune: {
    name: "neptune",
    comment: "AWS Neptune",
  },
  networkfirewall: {
    name: "networkfirewall",
    comment: "AWS Network Firewall",
  },
  opsworks: {
    name: "opsworks",
    comment: "AWS OpsWorks",
  },
  organizations: {
    name: "organizations",
    comment: "AWS Organizations",
  },
  outposts: {
    name: "outposts",
    comment: "AWS Outposts",
  },
  pinpoint: {
    name: "pinpoint",
    comment: "AWS Pinpoint",
  },
  pricing: {
    name: "pricing",
    comment: "AWS Pricing",
  },
  qldb: {
    name: "qldb",
    comment: "AWS Quantum Ledger Database",
  },
  quicksight: {
    name: "quicksight",
    comment: "AWS QuickSight",
  },
  ram: {
    name: "ram",
    comment: "AWS Resource Access Manager",
  },
  rds: {
    name: "rds",
    comment: "AWS Relational Database Service",
    additionalPrefix: ["db"],
  },
  redshift: {
    name: "redshift",
    comment: "AWS Redshift",
  },
  resourcegroups: {
    name: "resourcegroups",
    comment: "AWS Resource Groups",
  },
  route53: {
    name: "route53",
    comment: "AWS Route 53",
  },
  s3: {
    name: "s3",
    comment: "AWS Simple Storage Service",
  },
  ses: {
    name: "ses",
    comment: "AWS Simple Email Service",
  },
  sns: {
    name: "sns",
    comment: "AWS Simple Notification Service",
  },
  sqs: {
    name: "sqs",
    comment: "AWS Simple Queue Service",
  },
  ssm: {
    name: "ssm",
    comment: "AWS Systems Manager",
  },
  ssoadmin: {
    name: "ssoadmin",
    comment: "AWS SSO Admin",
  },
  swf: {
    name: "swf",
    comment: "AWS Simple Workflow Service",
  },
  sagemaker: {
    name: "sagemaker",
    comment: "AWS SageMaker",
  },
  secretsmanager: {
    name: "secretsmanager",
    comment: "AWS Secrets Manager",
  },
  securityhub: {
    name: "securityhub",
    comment: "AWS Security Hub",
  },
  serverlessapplicationrepository: {
    name: "serverlessapplicationrepository",
    comment: "AWS Serverless Application Repository",
  },
  servicecatalog: {
    name: "servicecatalog",
    comment: "AWS Service Catalog",
  },
  service_discovery: {
    name: "servicediscovery",
    comment: "AWS Service Discovery",
  },
  servicequotas: {
    name: "servicequotas",
    comment: "AWS Service Quotas",
  },
  shield: {
    name: "shield",
    comment: "AWS Shield Protection",
  },
  signer: {
    name: "signer",
    comment: "AWS Signer",
  },
  simpledb: {
    name: "simpledb",
    comment: "AWS SimpleDB",
  },
  sfn: {
    name: "sfn",
    comment: "AWS Step Functions",
  },
  storagegateway: {
    name: "storagegateway",
    comment: "AWS Storage Gateway",
  },
  synthetics: {
    name: "synthetics",
    comment: "AWS Synthetics",
  },
  timestreamwrite: {
    name: "timestreamwrite",
    comment: "AWS Timestream Write",
  },
  transfer: {
    name: "transfer",
    comment: "AWS Transfer",
  },
  vpc: {
    name: "vpc",
    comment: "AWS VPC",
    additionalPrefix: [
      "customer_gateway",
      "default_network_acl",
      "default_route_table",
      "default_security_group",
      "default_subnet",
      "default_vpc",
      "egress_only_internet_gateway",
      "flow_log",
      "internet_gateway",
      "main_route",
      "nat_gateway",
      "network",
      "route_table",
      "route",
      "security_group",
      "subnet",
      "vpn",
    ],
  },
  wafv2: {
    name: "wafv2",
    comment: "AWS WAF V2",
  },
  wafregional: {
    name: "wafregional",
    comment: "AWS WAF Regional",
  },
  waf: {
    name: "waf",
    comment: "AWS WAF",
  },
  worklink: {
    name: "worklink",
    comment: "AWS WorkLink",
  },
  workspaces: {
    name: "workspaces",
    comment: "AWS WorkSpaces",
  },
  xray: {
    name: "xray",
    comment: "AWS X-Ray",
  },
  _datasources: {
    name: "datasources",
    comment: "AWS Data Sources",
    additionalPrefix: [
      "arn",
      "availability_zone",
      "billing_service_account",
      "caller_identity",
      "canonical_user_id",
      "elb_hosted_zone_id",
      "elb",
      "ip_ranges",
      "launch_configuration",
      "partition",
      "prefix_list",
      "region",
    ],
  },
};

const google: Record<Prefix, ResourceNamespace> = {
  api_gateway: {
    name: "apigateway",
    comment: "A consumable API that can be used by multiple Gateways.",
  },
  access_approval: {
    name: "accessapproval",
    comment: "Access Approval",
    additionalPrefix: [
      "folder_access_approval",
      "organization_access_approval",
      "project_access_approval",
    ],
  },
  access_context_manager: {
    name: "accesscontextmanager",
    comment: "Access Context Manager (VPC Service Controls)",
  },
  apigee: {
    name: "apigee",
    comment:
      "Use the Apigee API to programmatically develop and manage APIs with a set of RESTful operations. Develop and secure API proxies, deploy and undeploy API proxy revisions, monitor APIs, configure environments, manage users, and more.",
  },
  apikeys: {
    name: "apikeys",
    comment: "API Keys",
  },
  app_engine: {
    name: "appengine",
    comment: "App Engine",
  },
  artifact_registry: {
    name: "artifactregistry",
    comment: "Artifact Registry",
  },

  assured_workloads: {
    name: "assuredworkloads",
    comment: "Assured Workloads",
  },
  bigquery: {
    name: "bigquery",
    comment: "BigQuery",
  },
  binary_authorization: {
    name: "binaryauthorization",
    comment: "Binary Authorization",
  },
  privateca: {
    name: "privateca",
    comment: "Private CA",
  },
  certificate_manager: {
    name: "certificatemanager",
    comment: "Certificate Manager",
  },
  logging: {
    name: "logging",
    comment: "Cloud (Stackdriver) Logging",
  },
  monitoring: {
    name: "monitoring",
    comment: "Cloud (Stackdriver) Monitoring",
  },
  notebooks: {
    name: "notebooks",
    comment: "Cloud AI Platform Notebook",
  },
  cloud_asset: {
    name: "cloudasset",
    comment: "Cloud Asset",
  },
  bigtable: {
    name: "bigtable",
    comment: "Cloud Bigtable",
  },
  billing: {
    name: "billing",
    comment: "Cloud Billing",
  },
  cloudbuild: {
    name: "cloudbuild",
    comment: "Cloud Build",
  },
  composer: {
    name: "composer",
    comment: "Cloud Composer",
  },
  dns: {
    name: "dns",
    comment: "DNS",
  },
  data_fusion: {
    name: "datafusion",
    comment: "Data Fusion",
  },
  clouddeploy: {
    name: "clouddeploy",
    comment: "Cloud Deploy",
  },
  deployment_manager: {
    name: "deploymentmanager",
    comment: "Deployment Manager",
  },
  endpoints: {
    name: "endpoints",
    comment: "Cloud Endpoints",
  },
  cloudfunctions: {
    name: "cloudfunctions",
    comment: "Cloud Functions",
  },
  cloudfunctions2: {
    name: "cloudfunctions2",
    comment: "Cloud Functions",
  },
  healthcare: {
    name: "healthcare",
    comment:
      "Manage, store, and access healthcare data in Google Cloud Platform.",
  },
  iam: {
    name: "iam",
    comment: "Identity and Access Management",
  },
  cloud_identity: {
    name: "cloudidentity",
    comment: "Cloud Identity",
  },
  cloudiot: {
    name: "cloudiot",
    comment: "Cloud IoT",
  },
  kms: {
    name: "kms",
    comment: "Cloud Key Management Service",
  },
  project: {
    name: "cloudplatform",
    comment: "Cloud Platform",
    additionalPrefix: [
      "billing_subaccount",
      "folder",
      "organization",
      "service",
      "active_folder",
      "netblock_ip_ranges",
      "client_config",
      "client_openid_userinfo",
    ],
  },
  pubsub: {
    name: "pubsub",
    comment: "Cloud Pub/Sub",
  },
  cloud_run: {
    name: "cloudrun",
    comment: "Cloud Run",
  },
  sql: {
    name: "cloudsql",
    comment: "Cloud SQL",
  },
  cloud_scheduler: {
    name: "cloudscheduler",
    comment: "Cloud Scheduler",
  },
  security_scanner: {
    name: "securityscanner",
    comment: "Cloud Security Scanner",
  },
  sourcerepo: {
    name: "sourcerepo",
    comment: "Cloud Source Repositories",
  },
  spanner: {
    name: "spanner",
    comment: "Cloud Spanner",
  },
  storage: {
    name: "storage",
    comment: "Cloud Storage",
  },
  tpu: {
    name: "tpu",
    comment: "Cloud TPU",
  },
  cloud_tasks: {
    name: "cloudtasks",
    comment: "Cloud Tasks",
  },
  compute: {
    name: "compute",
    comment: "Compute Engine",
  },

  container_aws: {
    name: "containeraws",
    comment: "Anthos on AWS",
  },
  container_azure: {
    name: "containerazure",
    comment: "Anthos on Azure",
  },
  container_cluster: {
    name: "gke",
    comment: "Google Kubernetes Engine",
    additionalPrefix: ["container_node_pool", "container_engine_versions"],
  },
  container: {
    name: "container",
    comment: "Container Engine",
  },
  data_catalog: {
    name: "datacatalog",
    comment: "Cloud Data Catalog",
    additionalPrefix: ["catalog"],
  },
  data_loss_prevention: {
    name: "datalossprevention",
    comment: "Cloud Data Loss Prevention",
    additionalPrefix: ["loss_prevention"],
  },
  dataflow: {
    name: "dataflow",
    comment: "Dataflow",
  },
  dataplex: {
    name: "dataplex",
    comment: "Dataplex",
  },
  dataproc_metastore: {
    name: "dataprocmetastore",
    comment: "Dataproc Metastore",
  },

  dataproc: {
    name: "dataproc",
    comment: "Dataproc",
  },
  datastore: {
    name: "datastore",
    comment: "Datastore",
  },
  dialogflow_cx: {
    name: "dialogflowcx",
    comment: "Dialogflow CX",
  },
  dialogflow: {
    name: "dialogflow",
    comment: "Dialogflow",
  },
  document_ai: {
    name: "documentai",
    comment: "Essential Contacts",
    additionalPrefix: ["essential_contacts"],
  },
  eventarc: {
    name: "eventarc",
    comment: "Eventarc",
  },
  filestore: {
    name: "filestore",
    comment: "Filestore",
  },
  firebaserules: {
    name: "firebaserules",
    comment: "Firebase Rules",
  },
  firebase: {
    name: "firebase",
    comment: "Firebase",
  },
  firestore: {
    name: "firestore",
    comment: "Firestore",
  },
  gke_hub: {
    name: "gkehub",
    comment: "GKE Hub",
  },
  game_services: {
    name: "gameservices",
    comment: "Game Services",
  },
  identity_platform: {
    name: "identityplatform",
    comment: "Identity Platform",
  },
  iap: {
    name: "iap",
    comment: "Identity-Aware Proxy",
  },
  ml_engine: {
    name: "mlengine",
    comment: "Cloud Machine Learning Engine",
  },
  active_directory: {
    name: "activedirectory",
    comment: "Active Directory",
  },
  memcache: {
    name: "memcache",
    comment: "Memcache",
  },
  redis: {
    name: "redis",
    comment: "Memorystore (Redis)",
  },
  network_services: {
    name: "networkservices",
    comment: "Network Services",
  },
  network_connectivity: {
    name: "networkconnectivity",
    comment: "Network Connectivity",
  },
  network_management: {
    name: "networkmanagement",
    comment: "Network Management",
  },
  os_config: {
    name: "osconfig",
    comment: "OS Config",
  },
  os_login: {
    name: "oslogin",
    comment: "OS Login",
  },
  org_policy: {
    name: "orgpolicy",
    comment: "Org Policy",
  },
  recaptcha: {
    name: "recaptcha",
    comment: "RecaptchaEnterprise",
  },
  resource_manager: {
    name: "resourcemanager",
    comment: "Cloud Resource Manager",
  },
  runtimeconfig: {
    name: "runtimeconfig",
    comment: "Cloud Runtime Config",
  },
  secret_manager: {
    name: "secretmanager",
    comment: "Secret Manager",
    additionalPrefix: ["scc_source"],
  },
  scc_notification: {
    name: "sccnotification",
    comment: "SCC Notification",
  },
  vpc_access: {
    name: "vpcaccess",
    comment: "Serverless VPC Access",
  },
  service_directory: {
    name: "servicedirectory",
    comment: "Service Directory",
  },
  service_networking: {
    name: "servicenetworking",
    comment: "Service Networking",
  },
  service_usage: {
    name: "serviceusage",
    comment: "Service Usage",
  },
  storage_transfer: {
    name: "storagetransfer",
    comment: "Storage Transfer",
  },
  tags: {
    name: "tags",
    comment: "Tags",
  },
  vertex_ai: {
    name: "vertexai",
    comment: "Vertex AI",
  },
  workflows: {
    name: "workflows",
    comment: "Workflows",
  },
};

const PROVIDER_NAMESPACES: Record<string, Record<Prefix, ResourceNamespace>> = {
  aws,
  google,
};

// Comments per namespace mapping
export function getResourceNamespace(
  provider: string,
  resource: string
): ResourceNamespace | undefined {
  const resourceNamespaces = PROVIDER_NAMESPACES[provider];
  if (!resourceNamespaces) {
    return undefined;
  }

  const normalizedResource = resource
    .replace(`${provider}_`, "")
    .replace(`data_`, "");

  const namespace = Object.keys(resourceNamespaces)
    // we want the longest prefix to be first
    .sort((a, b) => {
      if (a.startsWith(b)) {
        return -1;
      }
      if (b.startsWith(a)) {
        return 1;
      }
      return a.localeCompare(b);
    })
    .find(
      (ns) =>
        normalizedResource.startsWith(ns) ||
        resourceNamespaces[ns].additionalPrefix?.some((prefix) =>
          normalizedResource.startsWith(prefix)
        )
    );
  if (!namespace) {
    return undefined;
  }

  return resourceNamespaces[namespace];
}
