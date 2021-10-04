type Prefix = string;
export type ResourceNamespace = {
  name: string;
  comment: string;
  additionalPrefix?: Prefix[];
};

// If the same prefix is used, the longest will take precedent over the others.
const aws: Record<Prefix, ResourceNamespace> = {
  acmpa: {
    name: "ACMPCA",
    comment: "AWS Certificate Manager Private Certificate Authority",
  },
  acm: { name: "ACM", comment: "Amazon Certificate Manager" },
  apigatewayv2: {
    name: "APIGatewayV2",
    comment: "Amazon API Gateway Websocket and HTTP APIs",
  },
  api_gateway: {
    name: "APIGateway",
    comment: "API Gateway",
  },
  accessanalyzer: {
    name: "AccessAnalyzer",
    comment: "Access Analyzer Analyzer",
  },
  prometheus: {
    name: "Prometheus",
    comment: "Prometheus",
  },
  amplify: {
    name: "Amplify",
    comment: "AWS Amplify",
  },
  apprunner: {
    name: "AppRunner",
    comment: "App Runner",
  },
  appconfig: {
    name: "AppConfig",
    comment: "AppConfig",
  },
  appmesh: {
    name: "AppMesh",
    comment: "App Mesh",
  },
  appstream: {
    name: "AppStream",
    comment: "AppStream",
  },
  appsync: {
    name: "AppSync",
    comment: "AWS AppSync",
  },
  appautoscaling: {
    name: "AppAutoScaling",
    comment: "AWS AppAutoScaling",
  },
  athena: {
    name: "Athena",
    comment: "Amazon Athena",
  },
  autoscalingplans: {
    name: "AutoScalingPlans",
    comment: "AWS Auto Scaling Plans",
  },
  autoscaling: {
    name: "AutoScaling",
    comment: "AWS Auto Scaling",
    additionalPrefix: ["launch_configuration"],
  },
  backup: {
    name: "Backup",
    comment: "AWS Backup",
  },
  batch: {
    name: "Batch",
    comment: "AWS Batch",
  },
  budgets: {
    name: "Budgets",
    comment: "AWS Budgets",
  },
  chime: {
    name: "Chime",
    comment: "Amazon Chime",
  },
  cloud9: {
    name: "Cloud9",
    comment: "AWS Cloud9",
  },
  cloudformation: {
    name: "CloudFormation",
    comment: "AWS CloudFormation",
  },
  cloudfront: {
    name: "CloudFront",
    comment: "AWS CloudFront",
  },
  cloudhsm: {
    name: "CloudHSM",
    comment: "AWS CloudHSM",
  },
  cloudtrail: {
    name: "CloudTrail",
    comment: "AWS CloudTrail",
  },
  cloudwatch: {
    name: "CloudWatch",
    comment: "AWS CloudWatch",
  },
  codeartifact: {
    name: "CodeArtifact",
    comment: "AWS CodeArtifact",
  },
  codebuild: {
    name: "CodeBuild",
    comment: "AWS CodeBuild",
  },
  codecommit: {
    name: "CodeCommit",
    comment: "AWS CodeCommit",
  },
  codedeploy: {
    name: "CodeDeploy",
    comment: "AWS CodeDeploy",
  },
  codepipeline: {
    name: "CodePipeline",
    comment: "AWS CodePipeline",
  },
  codestar: {
    name: "CodeStar",
    comment: "AWS CodeStar",
  },
  cognito: {
    name: "Cognito",
    comment: "AWS Cognito",
  },
  config: {
    name: "Config",
    comment: "AWS Config",
  },
  connect: {
    name: "Connect",
    comment: "AWS Connect",
  },
  cur: {
    name: "Cur",
    comment: "AWS Cost and Usage Report",
  },
  dlm: {
    name: "DLM",
    comment: "AWS Data Lifecycle Manager",
  },
  datapipeline: {
    name: "DataPipeline",
    comment: "AWS Data Pipeline",
  },
  datasync: {
    name: "DataSync",
    comment: "AWS DataSync",
  },
  dms: {
    name: "DMS",
    comment: "AWS Database Migration Service",
  },
  devicefarm: {
    name: "DeviceFarm",
    comment: "AWS Device Farm",
  },
  dx: {
    name: "DirectConnect",
    comment: "AWS Direct Connect",
  },
  directory_service: {
    name: "DirectoryService",
    comment: "AWS Directory Service",
  },
  docdb: {
    name: "DocumentDB",
    comment: "AWS DocumentDB",
  },
  dynamodb: {
    name: "DynamoDB",
    comment: "AWS DynamoDB",
  },
  dax: {
    name: "DAX",
    comment: "AWS DynamoDB Accelerator",
  },
  ec2: {
    name: "EC2",
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
    name: "ECR",
    comment: "AWS EC2 Container Registry",
  },
  ecs: {
    name: "ECS",
    comment: "AWS EC2 Container Service",
  },
  efs: {
    name: "EFS",
    comment: "AWS EFS",
  },
  eks: {
    name: "EKS",
    comment: "AWS Elastic Kubernetes Service",
  },
  elasticache: {
    name: "ElastiCache",
    comment: "AWS ElastiCache",
  },
  elastic_beanstalk: {
    name: "ElasticBeanstalk",
    comment: "AWS Elastic Beanstalk",
  },
  lb: {
    name: "ELB",
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
    name: "EMR",
    comment: "AWS Elastic MapReduce",
  },
  elastictranscoder: {
    name: "ElasticTranscoder",
    comment: "AWS Elastic Transcoder",
  },
  elasticsearch: {
    name: "ElasticSearch",
    comment: "AWS ElasticSearch Service",
  },
  cloudwatch_event: {
    name: "CloudWatchEventBridge",
    comment: "AWS CloudWatch Event Bridge",
  },
  schemas: {
    name: "EventBridgeSchemas",
    comment: "AWS EventBridge Schemas",
  },
  fsx: {
    name: "FSx",
    comment: "AWS File System FSx",
  },
  fms: {
    name: "FMS",
    comment: "AWS Firewall Management Service",
  },
  gamelift: {
    name: "GameLift",
    comment: "AWS GameLift",
  },
  glacier: {
    name: "Glacier",
    comment: "AWS Glacier",
  },
  globalaccelerator: {
    name: "GlobalAccelerator",
    comment: "AWS Global Accelerator",
  },
  glue: {
    name: "Glue",
    comment: "AWS Glue",
  },
  guardduty: {
    name: "GuardDuty",
    comment: "AWS GuardDuty",
  },
  iam: {
    name: "IAM",
    comment: "AWS Identity and Access Management",
  },
  identitiystore: {
    name: "IdentityStore",
    comment: "AWS Identity Store",
  },
  imagebuilder: {
    name: "ImageBuilder",
    comment: "AWS Image Builder",
  },
  inspector: {
    name: "Inspector",
    comment: "AWS Inspector",
    additionalPrefix: ["inspector_assessment_target"],
  },
  iot: {
    name: "IoT",
    comment: "AWS IoT",
  },
  kms: {
    name: "KMS",
    comment: "AWS Key Management Service",
  },
  kinesis: {
    name: "Kinesis",
    comment: "AWS Kinesis",
  },
  lakeformation: {
    name: "LakeFormation",
    comment: "AWS Lake Formation",
  },
  lambda: {
    name: "Lambda",
    comment: "AWS Lambda",
  },
  lex: {
    name: "Lex",
    comment: "AWS Lex",
  },
  licensemanager: {
    name: "LicenseManager",
    comment: "AWS License Manager",
  },
  lightsail: {
    name: "Lightsail",
    comment: "AWS Lightsail",
  },
  mq: {
    name: "MQ",
    comment: "AWS Managed Message Queue",
  },
  macie2: {
    name: "Macie2",
    comment: "AWS Macie 2",
  },
  macie: {
    name: "Macie",
    comment: "AWS Macie",
  },
  msk: {
    name: "MSK",
    comment: "AWS Managed Streaming for Kafka",
  },
  mwaa: {
    name: "MWAA",
    comment: "AWS Managed Workloads for Apache Airflow",
  },
  media_convert: {
    name: "MediaConvert",
    comment: "AWS MediaConvert",
  },
  media_package: {
    name: "MediaPackage",
    comment: "Media Package",
  },
  media_store: {
    name: "MediaStore",
    comment: "AWS Media Store",
  },
  neptune: {
    name: "Neptune",
    comment: "AWS Neptune",
  },
  networkfirewall: {
    name: "NetworkFirewall",
    comment: "AWS Network Firewall",
  },
  opsworks: {
    name: "OpsWorks",
    comment: "AWS OpsWorks",
  },
  organizations: {
    name: "Organizations",
    comment: "AWS Organizations",
  },
  outposts: {
    name: "Outposts",
    comment: "AWS Outposts",
  },
  pinpoint: {
    name: "Pinpoint",
    comment: "AWS Pinpoint",
  },
  pricing: {
    name: "Pricing",
    comment: "AWS Pricing",
  },
  qldb: {
    name: "QLDB",
    comment: "AWS Quantum Ledger Database",
  },
  quicksight: {
    name: "QuickSight",
    comment: "AWS QuickSight",
  },
  ram: {
    name: "RAM",
    comment: "AWS Resource Access Manager",
  },
  rds: {
    name: "RDS",
    comment: "AWS Relational Database Service",
    additionalPrefix: ["db"],
  },
  redshift: {
    name: "Redshift",
    comment: "AWS Redshift",
  },
  resourcegroups: {
    name: "ResourceGroups",
    comment: "AWS Resource Groups",
  },
  route53: {
    name: "Route53",
    comment: "AWS Route 53",
  },
  s3: {
    name: "S3",
    comment: "AWS Simple Storage Service",
  },
  ses: {
    name: "SES",
    comment: "AWS Simple Email Service",
  },
  sns: {
    name: "SNS",
    comment: "AWS Simple Notification Service",
  },
  sqs: {
    name: "SQS",
    comment: "AWS Simple Queue Service",
  },
  ssm: {
    name: "SSM",
    comment: "AWS Systems Manager",
  },
  ssoadmin: {
    name: "SSOAdmin",
    comment: "AWS SSO Admin",
  },
  swf: {
    name: "SWF",
    comment: "AWS Simple Workflow Service",
  },
  sagemaker: {
    name: "SageMaker",
    comment: "AWS SageMaker",
  },
  secretsmanager: {
    name: "SecretsManager",
    comment: "AWS Secrets Manager",
  },
  securityhub: {
    name: "SecurityHub",
    comment: "AWS Security Hub",
  },
  serverlessapplicationrepository: {
    name: "ServerlessApplicationRepository",
    comment: "AWS Serverless Application Repository",
  },
  servicecatalog: {
    name: "ServiceCatalog",
    comment: "AWS Service Catalog",
  },
  service_discovery: {
    name: "ServiceDiscovery",
    comment: "AWS Service Discovery",
  },
  servicequotas: {
    name: "ServiceQuotas",
    comment: "AWS Service Quotas",
  },
  shield: {
    name: "Shield",
    comment: "AWS Shield Protection",
  },
  signer: {
    name: "Signer",
    comment: "AWS Signer",
  },
  simpledb: {
    name: "SimpleDB",
    comment: "AWS SimpleDB",
  },
  sfn: {
    name: "SFN",
    comment: "AWS Step Functions",
  },
  storagegateway: {
    name: "StorageGateway",
    comment: "AWS Storage Gateway",
  },
  synthetics: {
    name: "Synthetics",
    comment: "AWS Synthetics",
  },
  timestreamwrite: {
    name: "TimestreamWrite",
    comment: "AWS Timestream Write",
  },
  transfer: {
    name: "Transfer",
    comment: "AWS Transfer",
  },
  vpc: {
    name: "VPC",
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
    name: "WAFV2",
    comment: "AWS WAF V2",
  },
  wafregional: {
    name: "WAFRegional",
    comment: "AWS WAF Regional",
  },
  waf: {
    name: "WAF",
    comment: "AWS WAF",
  },
  worklink: {
    name: "WorkLink",
    comment: "AWS WorkLink",
  },
  workspaces: {
    name: "Workspaces",
    comment: "AWS WorkSpaces",
  },
  xray: {
    name: "XRay",
    comment: "AWS X-Ray",
  },
  _datasources: {
    name: "DataSources",
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
