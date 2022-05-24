import { convert } from "../lib/index";
import * as fs from "fs";
import * as path from "path";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";
import { execSync } from "child_process";
const providers = [
  "hashicorp/aws@ ~>3.74.0",
  "kreuzwerker/docker@ ~>2.15.0",
  "hashicorp/google@ ~>3.87.0",
  "hashicorp/null@ ~>3.1.0",
  "hashicorp/azuread@ ~>2.17.0",
  "hashicorp/local@ ~>2.1.0",
  "alexkappa/auth0@ ~>0.26.2",
  "DataDog/datadog@ ~>3.8.1",
];

enum Synth {
  yes,
  needsAFix_BooleanAsIResolvable, // https://github.com/hashicorp/terraform-cdk/issues/1550
  needsAFix_UnforseenClassRename, // https://github.com/hashicorp/terraform-cdk/issues/1552
  needsAFix_UnforseenPropertyRename, // https://github.com/hashicorp/terraform-cdk/issues/1708
  never, // Some examples are built so that they will never synth but test a specific generation edge case
}

const cdktfBin = path.join(__dirname, "../../../cdktf-cli/bin/cdktf");
const cdktfDist = path.join(__dirname, "../../../../dist");

const createTestCase =
  (describeFn: typeof describe) =>
  (name: string, hcl: string, shouldSynth: Synth) => {
    describeFn(name, () => {
      let result: ReturnType<typeof convert>;
      beforeAll(() => {
        result = convert(hcl, {
          language: "typescript",
          providerSchema: cachedProviderSchema,
        });
      });

      it("snapshot", async () => {
        const { all } = await result;
        expect(all).toMatchSnapshot();
      });

      if (shouldSynth === Synth.yes) {
        it("plan", async () => {
          const filename = name.replace(/\s/g, "-");
          const { imports, code } = await result;
          // Have a before all somewhere above bootstrap a TS project
          // __dirname should be replaceed by the bootstrapped directory
          const pathToThisProjectsFile = path.join(
            projectDir,
            filename + ".ts"
          );
          const fileContent = `
        import { Construct } from "constructs";
        import { App, TerraformStack } from "cdktf";
        ${imports}
        
        class MyStack extends TerraformStack {
          constructor(scope: Construct, name: string) {
            super(scope, name);
        
            ${code}
            
          }
        }
        
        const app = new App();
        new MyStack(app, "${filename}");
        app.synth();
        `;
          fs.writeFileSync(pathToThisProjectsFile, fileContent, "utf8");

          const stdout = execSync(
            `cd ${projectDir} && ${cdktfBin} synth -a 'npx ts-node ${filename}.ts' -o ./${filename}-output`
          );
          expect(stdout.toString()).toEqual(
            expect.stringContaining(`Generated Terraform code for the stacks`)
          );
        });
      }

      if ([Synth.needsAFix_BooleanAsIResolvable].includes(shouldSynth)) {
        it.todo("plans");
      }
    });
  };
const testCase = {
  test: createTestCase(describe),
  only: createTestCase(describe.only),
  skip: createTestCase(describe.skip),
};

let cachedProviderSchema: any;
let projectDir: string;
describe("convert", () => {
  beforeAll(async () => {
    // Get all the provider schemas
    const { providerSchema } = await readSchema(
      providers.map((spec) =>
        ConstructsMakerProviderTarget.from(
          new config.TerraformProviderConstraint(spec),
          LANGUAGES[0]
        )
      )
    );

    cachedProviderSchema = providerSchema;

    // Initialize a new project
    projectDir = fs.mkdtempSync("cdktf-convert-test");
    execSync(
      `cd ${projectDir} && ${cdktfBin} init --local --dist=${cdktfDist} --project-name="hello" --project-description="world" --template=typescript --enable-crash-reporting=false`
    );
    const cdktfJson = JSON.parse(
      fs.readFileSync(path.join(projectDir, "cdktf.json"), "utf8")
    );
    fs.writeFileSync(
      path.join(projectDir, "cdktf.json"),
      JSON.stringify(
        {
          ...cdktfJson,
          terraformProviders: providers,
          terraformModules: ["terraform-aws-modules/vpc/aws@ ~>3.11.5"],
        },
        null,
        2
      )
    );
    execSync(`cd ${projectDir} && ${cdktfBin} get`);
  }, 500_000);

  afterAll(() => {
    fs.rmdirSync(projectDir, { recursive: true });
  });

  testCase.test(
    "output",
    `
      output "cidr_out" {
          value = "test"
      }`,
    Synth.yes
  );
  testCase.test(
    "sensitive output",
    `
      output "cidr_out" {
          value = "test"
          sensitive = true
      }`,
    Synth.yes
  );
  testCase.test(
    "output withdescription",
    `
      output "cidr_out" {
          value = "test"
          sensitive = true
          description = "Best output"
      }`,
    Synth.yes
  );

  testCase.test(
    "multiple outputs",
    `
      output "first_cidr_out" {
          value = "first"
      }
      output "second_cidr_out" {
          value = "second"
      }`,
    Synth.yes
  );
  testCase.test("empty provider", `provider "docker" {}`, Synth.yes);
  testCase.test(
    "null provider",
    `provider "null" {}
  resource "null_resource" "test" {}
  `,
    Synth.yes
  );

  testCase.test(
    "provider with complex config",
    `
    provider "aws" {
      access_key                  = "mock_access_key"
      region                      = "us-east-1"
      secret_key                  = "mock_secret_key"
      skip_credentials_validation = true
      skip_metadata_api_check     = true
      skip_requesting_account_id  = true
    
      endpoints {
        dynamodb = "http://localhost:8000"
      }
    }
  `,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "simple resource",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_vpc" "example" {
      cidr_block = "10.0.0.0/16"
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "complex resource",
    ` 
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_cloudfront_distribution" "s3_distribution" {
      origin {
        domain_name = "aws_s3_bucket.b.bucket_regional_domain_name"
        origin_id   = "local_s3_origin_id"
    
        s3_origin_config {
          origin_access_identity = "origin-access-identity/cloudfront/ABCDEFG1234567"
        }
      }
    
      enabled             = true
      is_ipv6_enabled     = true
      comment             = "Some comment"
      default_root_object = "index.html"
    
      logging_config {
        include_cookies = false
        bucket          = "mylogs.s3.amazonaws.com"
        prefix          = "myprefix"
      }
    
      aliases = ["mysite.example.com", "yoursite.example.com"]
    
      default_cache_behavior {
        allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "local_s3_origin_id"
    
        forwarded_values {
          query_string = false
    
          cookies {
            forward = "none"
          }
        }
    
        viewer_protocol_policy = "allow-all"
        min_ttl                = 0
        default_ttl            = 3600
        max_ttl                = 86400
      }
    
      # Cache behavior with precedence 0
      ordered_cache_behavior {
        path_pattern     = "/content/immutable/*"
        allowed_methods  = ["GET", "HEAD", "OPTIONS"]
        cached_methods   = ["GET", "HEAD", "OPTIONS"]
        target_origin_id = "local_s3_origin_id"
    
        forwarded_values {
          query_string = false
          headers      = ["Origin"]
    
          cookies {
            forward = "none"
          }
        }
    
        min_ttl                = 0
        default_ttl            = 86400
        max_ttl                = 31536000
        compress               = true
        viewer_protocol_policy = "redirect-to-https"
      }
    
      # Cache behavior with precedence 1
      ordered_cache_behavior {
        path_pattern     = "/content/*"
        allowed_methods  = ["GET", "HEAD", "OPTIONS"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "local_s3_origin_id"
    
        forwarded_values {
          query_string = false
    
          cookies {
            forward = "none"
          }
        }
    
        min_ttl                = 0
        default_ttl            = 3600
        max_ttl                = 86400
        compress               = true
        viewer_protocol_policy = "redirect-to-https"
      }
    
      price_class = "PriceClass_200"
    
      restrictions {
        geo_restriction {
          restriction_type = "whitelist"
          locations        = ["US", "CA", "GB", "DE"]
        }
      }
    
      tags = {
        Environment = "production"
      }
    
      viewer_certificate {
        cloudfront_default_certificate = true
      }
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "simple data source",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    data "aws_subnet" "selected" {
      vpc_id = "subnet_id"
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "locals",
    `
    locals {
      service_name = "forum"
      owner        = "Community Team"
      is_it_great  = true
      how_many     = 42
    }
    output "combined-so-it-does-not-get-removed" {
      value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
    }
    `,
    Synth.yes
  );

  testCase.test(
    "multiple locals blocks",
    `
    locals {
      service_name = "forum"
      owner        = "Community Team"
    }

    locals {
      is_it_great  = true
      how_many     = 42
    }
    
    output "combined-so-it-does-not-get-removed" {
      value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
    }`,
    Synth.yes
  );

  testCase.test(
    "resource references",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_kms_key" "examplekms" {
      description             = "KMS key 1"
      deletion_window_in_days = 7
    }
    
    resource "aws_s3_bucket" "examplebucket" {
      bucket = "examplebuckettftest"
      acl    = "private"
    }
    
    resource "aws_s3_bucket_object" "examplebucket_object" {
      key        = "someobject"
      bucket     = aws_s3_bucket.examplebucket.id
      source     = "index.html"
      kms_key_id = aws_kms_key.examplekms.arn
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "locals references",
    `
    provider "aws" {
      region                      = "us-east-1"
    }

    locals {
      bucket_name = "foo"
    }
    
    resource "aws_s3_bucket" "examplebucket" {
      bucket = local.bucket_name
      acl    = "private"
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "variable references",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    variable "bucket_name" {
      type    = string
      default = "demo"
    }
    
    resource "aws_s3_bucket" "examplebucket" {
      bucket = var.bucket_name
      acl    = "private"
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "data references",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    variable "bucket_name" {
      type    = string
      default = "demo"
    }
    
    data "aws_s3_bucket" "examplebucket" {
      bucket = var.bucket_name
    }
    
    resource "aws_s3_bucket_object" "examplebucket_object" {
      key        = "someobject"
      bucket     = data.aws_s3_bucket.examplebucket.arn
      source     = "index.html"
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "double references",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    variable "bucket_name" {
      type    = string
      default = "demo"
    }
    
    resource "aws_s3_bucket" "examplebucket" {
      bucket = var.bucket_name
      acl    = "private"
      tags = {
        tag-key = var.bucket_name
      }
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "modules",
    `
    module "vpc" {
      source = "terraform-aws-modules/vpc/aws"
    
      name = "my-vpc"
      cidr = "10.0.0.0/16"
    
      azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
      private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
      public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
    
      enable_nat_gateway = true
      enable_vpn_gateway = true
    
      tags = {
        Terraform = "true"
        Environment = "dev"
      }
    }`,
    Synth.yes
  );

  testCase.test(
    "duplicate modules",
    `
    module "vpca" {
      source = "terraform-aws-modules/vpc/aws"
    
      name = "my-vpc-a"
    }
    
    module "vpcb" {
      source = "terraform-aws-modules/vpc/aws"
    
      name = "my-vpc-b"
    }`,
    Synth.yes
  );

  testCase.test(
    "referenced modules",
    `
      module "vpc" {
        source = "terraform-aws-modules/vpc/aws"
      
        name = "my-vpc"
        cidr = "10.0.0.0/16"
      
        azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
        private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
        public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
      
        enable_nat_gateway = true
        enable_vpn_gateway = true
      
        tags = {
          Terraform = "true"
          Environment = "dev"
        }
      }
      
      output "subnet_ids" {
        value = module.vpc.public_subnets
      }`,
    Synth.yes
  );

  testCase.test(
    "arithmetics",
    `
      variable "members" {
        type = number
      }
      variable "admins" {
        type = number
      }
      
      output "arithmetics" {
        value = var.members + var.admins
      }`,
    Synth.yes
  );

  testCase.test(
    "conditionals",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        resource "aws_kms_key" "examplekms" {
          description             = "KMS key 1"
          deletion_window_in_days = 7
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = "examplebuckettftest"
          acl    = "private"
        }
        
        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []
          source     = "index.html"
          kms_key_id = aws_kms_key.examplekms.arn
        }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "for expression 1",
    `
        variable "users" {
          type = map(object({
            is_admin = boolean
          }))
        }
        
        locals {
          admin_users = {
            for name, user in var.users : name => user
            if user.is_admin
          }
          regular_users = {
            for name, user in var.users : name => user
            if !user.is_admin
          }
        }
        
        output "combined-so-it-does-not-get-removed" {
          value = "\${local.admin_users},\${local.regular_users}"
        }
        `,
    Synth.yes
  );

  testCase.test(
    "for expression 2",
    `
      variable "users" {
        type = map(object({
          role = string
        }))
      }
      
      locals {
        users_by_role = {
          for name, user in var.users : user.role => name...
        }
      }
      
      output "so-it-does-not-get-removed" {
        value = local.users_by_role
      }`,
    Synth.yes
  );

  testCase.test(
    "for expression 3",
    `
        provider "datadog" {
          api_key = "api_key"
          app_key = "app_key"
        }

        variable "users" {
          type = list(object({
            id = string
          }))
        }
        
        resource "datadog_monitor" "hard_query" {
          name    = "queries are hard"
          message = "here we go"
          query   = join(" && ", [for o in var.users : "!(!\${o.id})"])
          type    = "metric alert"
        }`,
    Synth.yes
  );

  testCase.test(
    "resource references with HCL functions",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_kms_key" "examplekms" {
        description             = "KMS key 1"
        deletion_window_in_days = 7
      }
      
      resource "aws_s3_bucket" "examplebucket" {
        bucket = "examplebuckettftest"
        acl    = "private"
      }
      
      resource "aws_s3_bucket_object" "examplebucket_object" {
        key        = "someobject"
        bucket     = element(aws_s3_bucket.examplebucket, 0).id
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "for each on list using splat",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "buckets" {
        type    = list(string)
      }

      resource "aws_kms_key" "examplekms" {
        description             = "KMS key 1"
        deletion_window_in_days = 7
      }
      
      resource "aws_s3_bucket" "examplebucket" {
        for_each = toset(var.buckets.*)

        bucket = each.key
        acl    = "private"
      }
      
      resource "aws_s3_bucket_object" "examplebucket_object" {
        for_each = toset(aws_s3_bucket.examplebucket.*)

        key        = "someobject"
        bucket     = each.key
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }
      `,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "for_each loops",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
      variable "users" {
        type = set(string)
      }

      resource "aws_iam_user" "lb" {
        for_each = var.users
        name = each.key
        path = "/system/"
      
        tags = {
          tag-key = "tag-value"
        }
      }
      `,
    Synth.yes
  );

  testCase.test(
    "property access through []",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "settings" {
        type = map(string)
      }

      resource "aws_s3_bucket" "examplebucket" {
        bucket = var.settings["bucket_name"]
        acl    = "private"
      }
      `,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "list access through []",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "settings" {
        type = list(map(string))
      }

      resource "aws_s3_bucket" "examplebucket" {
        bucket = var.settings[0]["bucket_name"]
        acl    = "private"
      }
      `,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "count loops",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "users" {
          type = set(string)
        }

        resource "aws_iam_user" "lb" {
          count = length(var.users)
          name = element(var.users, count.index)
          path = "/system/"
        
          tags = {
            tag-key = "tag-value"
          }
        }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "simple count",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_instance" "multiple_servers" {
      count = 4
    
      ami           = "ami-0c2b8ca1dad447f8a"
      instance_type = "t2.micro"
    
      tags = {
        Name = "Server \${count.index}"
      }
    }
    `,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "dynamic blocks",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "settings" {
        type = list(map(string))
      }

      variable "namespace" {
        type = string
      }

      resource "aws_elastic_beanstalk_environment" "tfenvtest" {
        name                = "tf-test-name"
        application         = "best-app"
        solution_stack_name = "64bit Amazon Linux 2018.03 v2.11.4 running Go 1.12.6"
      
        dynamic "setting" {
          for_each = var.settings
          content {
            namespace = var.namespace
            name = setting.value["name"]
            value = setting.value["value"]
          }
        }
      }`,
    Synth.yes
  );

  testCase.test(
    "multiple blocks",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_security_group" "allow_tls" {
      name        = "allow_tls"
      description = "Allow TLS inbound traffic"
    
      ingress {
        description      = "TLS from VPC"
        from_port        = 443
        to_port          = 443
        protocol         = "tcp"
      }

      ingress {
        description      = "TLS from VPC"
        from_port        = 80
        to_port          = 80
        protocol         = "tcp"
      }

      ingress {
        from_port        = 8080
        to_port          = 8080
        protocol         = "tcp"
      }
    
      egress {
        from_port        = 0
        to_port          = 0
        protocol         = "-1"
        cidr_blocks      = ["0.0.0.0/0"]
        ipv6_cidr_blocks = ["::/0"]
      }
    
      tags = {
        Name = "allow_tls"
      }
    }`,
    Synth.needsAFix_BooleanAsIResolvable
  );

  testCase.test(
    "provider alias",
    `
      provider "aws" {
        region = "us-east-1"
      }

      provider "aws" {
        alias  = "west"
        region = "us-west-2"
      }

      resource "aws_instance" "foo" {
        provider = aws.west
      
        foo = "bar"
      }

      module "vpc" {
        source = "terraform-aws-modules/vpc/aws"
        providers = {
          aws = aws.west
        }
      }        
      `,
    Synth.never
  );

  testCase.test(
    "local module",
    `
    module "aws_vpc" {
      source = "./aws_vpc"
    }        
    `,
    Synth.never
  );

  testCase.test(
    "complex for each loops",
    `
  provider "aws" {
    region = "us-east-1"
  }

  resource "aws_acm_certificate" "example" {
    domain_name       = "example.com"
    validation_method = "DNS"
  }
  
  data "aws_route53_zone" "example" {
    name         = "example.com"
    private_zone = false
  }
  
  resource "aws_route53_record" "example" {
    for_each = {
      for dvo in aws_acm_certificate.example.domain_validation_options : dvo.domain_name => {
        name   = dvo.resource_record_name
        record = dvo.resource_record_value
        type   = dvo.resource_record_type
      }
    }
  
    allow_overwrite = true
    name            = each.value.name
    records         = [each.value.record]
    ttl             = 60
    type            = each.value.type
    zone_id         = data.aws_route53_zone.example.zone_id
  }
  
  resource "aws_acm_certificate_validation" "example" {
    certificate_arn         = aws_acm_certificate.example.arn
    validation_record_fqdns = [for record in aws_route53_record.example : record.fqdn]
  }
  
  resource "aws_lb_listener" "example" {
    # ... other configuration ...
    
    certificate_arn   = aws_acm_certificate_validation.example.certificate_arn
    load_balancer_arn = "best-lb-arn" 
    default_action  {
      type             = "forward"
      target_group_arn = "best-target"
    }
  }
          
  `,
    Synth.yes
  );

  testCase.test(
    "local backend",
    `
      terraform {
        backend "local" {
          path = "relative/path/to/terraform.tfstate"
        }
      }     
      `,
    Synth.yes
  );

  testCase.test(
    "remote backend",
    `
      terraform {
        backend "remote" {
          hostname = "app.terraform.io"
          organization = "company"
      
          workspaces {
            name = "my-app-prod"
          }
        }
      }
      `,
    Synth.yes
  );

  testCase.test(
    "numeric property access",
    `
      provider "google" {
        project = "my-project"
        region  = "us-central1"
      }
      resource "google_compute_instance" "example" {
        name          = "example"
        machine_type  = "f1-micro"
        zone          = "us-east1-b"

        boot_disk {
          initialize_params {
            image = "debian-cloud/debian-9"
          }
        }

        network_interface {
          network = "default"

          access_config {
            // Ephemeral IP
          }
        }
      }

      output "public_ip" {
        value = "\${google_compute_instance.example.network_interface.0.access_config.0.assigned_nat_ip}"
      }
      `,
    Synth.yes
  );

  testCase.test(
    "blocks should be arrays",
    `
    provider "google" {
      project = "my-project"
      region  = "us-central1"
    }
    resource "google_compute_autoscaler" "example" {
      name   = "example-autoscaler"
      zone   = "us-east1-b"
      target = "target-for-example-autoscaler"
    
      autoscaling_policy = {
        max_replicas    = 8
        min_replicas    = 2
        cooldown_period = 60
    
        cpu_utilization = {
          target = 0.5
        }
      }
    }
    `,
    Synth.yes
  );

  testCase.test(
    "provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = "client_id"
      client_secret = "client_secret"
    }
    `,
    Synth.yes
  );

  testCase.test(
    "data local_file",
    `
    provider "local" {}
    data "local_file" "_01_please_verify" {
      filename = "./email_templates/01_please_verify/template.html"
    }
    `,
    Synth.yes
  );

  testCase.test(
    "required namespaced provider",
    `
      variable "domain" {
        description = "A domain"
      }
      provider "auth0" {
        domain = var.domain
        client_id = "42"
        client_secret = "secret"
      }
      
      terraform {
        required_providers {
          auth0 = {
            source  = "alexkappa/auth0"
            version = "0.19.0"
          }
        }
      }
      `,
    Synth.yes
  );

  testCase.test(
    "for_each with var usage",
    `
      variable "one_set_of_users" {
        description = "users"
      }
      variable "other_set_of_users" {
        description = "users"
      }
      variable "azure_ad_domain_name" {
        description = "domain"
      }
      resource "azuread_user" "azure_users" {
        for_each = merge(
          var.one_set_of_users,
          var.other_set_of_users,
        )
      
        user_principal_name = "\${each.value}\${var.azure_ad_domain_name}"
        display_name        = each.key
      }
      `,
    Synth.needsAFix_UnforseenClassRename
  );

  testCase.test(
    "terraform workspace",
    `
    module "example" {
      source = "./my-module"
      name_prefix = "app-\${terraform.workspace}"
    }
    `,
    Synth.never
  );

  testCase.test(
    "all module types",
    `
      module "consul" {
        source = "./consul"
      }
      module "consul-registry" {
        source = "hashicorp/consul/aws"
        version = "0.1.0"
      }
      module "consul-hosted-registry" {
        source = "app.terraform.io/example-corp/k8s-cluster/azurerm"
        version = "1.1.0"
      }
      module "consul-github" {
        source = "github.com/hashicorp/example"
      }
      module "consul-git" {
        source = "git@github.com:hashicorp/example.git"
      }
      module "consul-butbucket" {
        source = "bitbucket.org/hashicorp/terraform-consul-aws"
      }
      module "vpc" {
        source = "git::https://example.com/vpc.git"
      }
      module "storage" {
        source = "git::ssh://username@example.com/storage.git"
      }
      `,
    Synth.never
  );

  testCase.test(
    "number output",
    `
    output "test" {
      value = 42
    }
    `,
    Synth.yes
  );

  testCase.test(
    "same name local, var, out",
    `
    variable "test" {
      type    = string
    }
    locals {
      test = "\${var.test} + 1"
    }
    output "test" {
      value = "\${local.test}"
    }
    `,
    Synth.yes
  );

  testCase.test(
    "aliased duplicate provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    variable "client_id" {
      description = "A client_id"
    }
    variable "client_secret" {
      description = "A client_secret"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
    }
    provider "auth0" {
      alias         = "private_auth0"
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
      debug         = true
    }
    `,
    Synth.yes
  );

  testCase.test(
    "remote state",
    `
      data "terraform_remote_state" "vpc" {
        backend = "remote"

        config = {
          organization = "hashicorp"
          workspaces = {
            name = "vpc-prod"
          }
        }
      }
      `,
    Synth.yes
  );

  testCase.test(
    "remote state types",
    `
      data "terraform_remote_state" "etcdv3" {
        backend = "etcdv3"

        config = {
          endpoints = ["etcd-1:2379", "etcd-2:2379", "etcd-3:2379"]
          lock      = true
          prefix    = "terraform-state/"
        }
      }

      data "terraform_remote_state" "s3" {
        backend = "s3"

        config = {
          bucket = "mybucket"
          key    = "path/to/my/key"
          region = "us-east-1"
        }
      }
      `,
    Synth.yes
  );

  testCase.test(
    "property level renamings",
    `
    provider "aws" {
      region                      = "us-east-1"
    }
    resource "aws_guardduty_filter" "MyFilter" {
      name        = "MyFilter"
      action      = "ARCHIVE"
      detector_id = "id"
      rank        = 1
    
      finding_criteria {
        criterion {
          field  = "region"
          equals = ["eu-west-1"]
        }
    
        criterion {
          field      = "service.additionalInfo.threatListName"
          not_equals = ["some-threat", "another-threat"]
        }
    
        criterion {
          field        = "updatedAt"
          greater_than = "2020-01-01T00:00:00Z"
          less_than    = "2020-02-01T00:00:00Z"
        }
    
        criterion {
          field                 = "severity"
          greater_than_or_equal = "4"
        }
      }
    }
      `,
    Synth.needsAFix_UnforseenPropertyRename
  );

  const targetLanguages = ["typescript", "python", "csharp", "java"];
  describe("Cross-Language Support", () => {
    it.each(targetLanguages)("supports %s", (language) => {
      const hcl = `
      resource "aws_kms_key" "examplekms" {
        description             = "KMS key 1"
        deletion_window_in_days = 7
      }
      
      resource "aws_s3_bucket" "examplebucket" {
        bucket = "examplebuckettftest"
        acl    = "private"
      }
      
      resource "aws_s3_bucket_object" "examplebucket_object" {
        key        = "someobject"
        bucket     = element(aws_s3_bucket.examplebucket, 0).id
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }
      `;
      expect(
        convert(hcl, {
          language: language as any,
          providerSchema: cachedProviderSchema,
        })
      ).toMatchSnapshot();
    });
  });

  it("exposes stats for telemetry", async () => {
    const { stats } = await convert(
      `
  resource "aws_kms_key" "examplekms" {
    description             = "KMS key 1"
    deletion_window_in_days = 7
  }
  
  resource "aws_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_three" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }

  resource "internal_cloud_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "internal_cloud_s3_bucket_object" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  
  resource "aws_s3_bucket_object" "examplebucket_object" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "aws_s3_bucket_object" "examplebucket_object_two" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "google_compute_autoscaler" "example" {
    name   = "example-autoscaler"
    zone   = "us-east1-b"
  
    autoscaling_policy = {
      max_replicas    = 8
      min_replicas    = 2
      cooldown_period = 60
  
      cpu_utilization = {
        target = 0.5
      }
    }
  }
  `,
      { language: "typescript", providerSchema: cachedProviderSchema }
    );

    expect(stats).toMatchInlineSnapshot(`
      Object {
        "convertedLines": 55,
        "data": Object {},
        "language": "typescript",
        "numberOfModules": 0,
        "numberOfProviders": 3,
        "resources": Object {
          "aws": Object {
            "kms_key": 1,
            "s3_bucket": 3,
            "s3_bucket_object": 2,
          },
          "google": Object {
            "compute_autoscaler": 1,
          },
          "other": Object {
            "other": 1,
          },
        },
      }
    `);
  });
});
