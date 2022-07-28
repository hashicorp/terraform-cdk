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

const PROVIDER_NAMESPACES: Record<string, Record<Prefix, ResourceNamespace>> = {
  aws,
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
