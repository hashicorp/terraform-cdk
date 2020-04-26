import https = require('https');
import { format } from 'url';

const BASE_URL = `https://registry.terraform.io/v1/modules`;

// see https://stackoverflow.com/questions/40201533/sort-version-dotted-number-strings-in-javascript
const semverSort = ((a: string , b: string) => a.localeCompare(b, undefined, { numeric: true }) )

export async function getLatestVersion(source: string) {
  const versions = await get(`${BASE_URL}/${source}/versions`) as Versions;

  for (const m of versions.modules) {
    return m.versions.map(x => x.version).sort(semverSort).pop();
  }

  return undefined;
}

export async function getModule(source: string, version?: string) {
   if (!version) {
     version = await getLatestVersion(source);
   }

   return await get(`${BASE_URL}/${source}/${version}`) as Module;
}

async function get(url: string) {
  return new Promise<any>((ok, ko) => {
    const req = https.request(format(url), res => {
      if (res.statusCode !== 200) {
        return ko(new Error(res.statusMessage));
      }
      const data = new Array<Buffer>();
      res.on('data', chunk => data.push(chunk));

      res.once('error', err => ko(err));
      res.once('end', () => {
        const response = JSON.parse(Buffer.concat(data).toString('utf-8'));
        return ok(response);
      });
    });

    req.end();
  })
}

interface Versions {
  readonly modules: ModuleVersions[];
}

interface ModuleVersions {
  readonly source: string;
  readonly versions: ModuleVersion[];
}

interface ModuleVersion {
  readonly version: string;
}

export interface Module {
  id: string;
  owner: string;
  namespace: string;
  name: string;
  version: string;
  provider: string;
  description: string;
  source: string;
  tag?: string;
  providers?: string[];
  versions: string[];
  submodules?: Submodule[];
  root: Submodule;
}

export interface Submodule {
  path: string;
  name: string;
  readme: string;
  empty?: boolean;
  inputs: Input[];
  outputs: Output[];
  dependencies: any[];
}

export interface Output {
  name: string;
  type: string;
}

export interface Input {
  name: string;
  type: string;
  description?: string;
  default?: string;
  required: boolean;
}

/**
 * {
  "id": "hashicorp/consul/aws/0.7.2",
  "owner": "gruntwork-team",
  "namespace": "hashicorp",
  "name": "consul",
  "version": "0.7.2",
  "provider": "aws",
  "description": "A Terraform Module for how to run Consul on AWS using Terraform and Packer",
  "source": "https://github.com/hashicorp/terraform-aws-consul",
  "tag": "v0.7.2",
  "published_at": "2019-07-22T13:39:23.840599Z",
  "downloads": 22672,
  "verified": true,
  "root": {
    "path": "",
    "name": "consul",
    "readme": "[![Maintained by Gruntwork.io](https://img.shields.io/badge/maintained%20by-gruntwork.io-%235849a6.svg)](https://gruntwork.io/?ref=repo_aws_consul)\n# Consul AWS Module\n\nThis repo contains a set of modules in the [modules folder](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules) for deploying a [Consul](https://www.consul.io/) cluster on \n[AWS](https://aws.amazon.com/) using [Terraform](https://www.terraform.io/). Consul is a distributed, highly-available \ntool that you can use for service discovery and key/value storage. A Consul cluster typically includes a small number\nof server nodes, which are responsible for being part of the [consensus \nquorum](https://www.consul.io/docs/internals/consensus.html), and a larger number of client nodes, which you typically \nrun alongside your apps:\n\n![Consul architecture](https://github.com/hashicorp/terraform-aws-consul/blob/master/_docs/architecture.png?raw=true)\n\n\n\n## How to use this Module\n\nThis repo has the following folder structure:\n\n* [modules](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules): This folder contains several standalone, reusable, production-grade modules that you can use to deploy Consul.\n* [examples](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples): This folder shows examples of different ways to combine the modules in the `modules` folder to deploy Consul.\n* [test](https://github.com/hashicorp/terraform-aws-consul/tree/master/test): Automated tests for the modules and examples.\n* [root folder](https://github.com/hashicorp/terraform-aws-consul/tree/master): The root folder is *an example* of how to use the [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster) \n  module to deploy a [Consul](https://www.consul.io/) cluster in [AWS](https://aws.amazon.com/). The Terraform Registry requires the root of every repo to contain Terraform code, so we've put one of the examples there. This example is great for learning and experimenting, but for production use, please use the underlying modules in the [modules folder](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules) directly.\n\nTo deploy Consul servers for production using this repo:\n\n1. Create a Consul AMI using a Packer template that references the [install-consul module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul).\n   Here is an [example Packer template](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-ami#quick-start). \n   \n   If you are just experimenting with this Module, you may find it more convenient to use one of our official public AMIs:\n   - [Latest Ubuntu 16 AMIs](https://github.com/hashicorp/terraform-aws-consul/tree/master/_docs/ubuntu16-ami-list.md).\n   - [Latest Amazon Linux 2 AMIs](https://github.com/hashicorp/terraform-aws-consul/tree/master/_docs/amazon-linux-ami-list.md).\n  \n    **WARNING! Do NOT use these AMIs in your production setup. In production, you should build your own AMIs in your own \n    AWS account.**\n   \n1. Deploy that AMI across an Auto Scaling Group using the Terraform [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster) \n   and execute the [run-consul script](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul) with the `--server` flag during boot on each \n   Instance in the Auto Scaling Group to form the Consul cluster. Here is [an example Terraform \n   configuration](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example#quick-start) to provision a Consul cluster.\n\nTo deploy Consul clients for production using this repo:\n \n1. Use the [install-consul module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul) to install Consul alongside your application code.\n1. Before booting your app, execute the [run-consul script](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul) with `--client` flag.\n1. Your app can now use the local Consul agent for service discovery and key/value storage.\n1. Optionally, you can use the [install-dnsmasq module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-dnsmasq) for Ubuntu 16.04 and Amazon Linux 2 or [setup-systemd-resolved](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/setup-systemd-resolved) for Ubuntu 18.04 to configure Consul as the DNS for a\n   specific domain (e.g. `.consul`) so that URLs such as `foo.service.consul` resolve automatically to the IP \n   address(es) for a service `foo` registered in Consul (all other domain names will be continue to resolve using the\n   default resolver on the OS).\n   \n \n\n\n## What's a Module?\n\nA Module is a canonical, reusable, best-practices definition for how to run a single piece of infrastructure, such \nas a database or server cluster. Each Module is created using [Terraform](https://www.terraform.io/), and\nincludes automated tests, examples, and documentation. It is maintained both by the open source community and \ncompanies that provide commercial support. \n\nInstead of figuring out the details of how to run a piece of infrastructure from scratch, you can reuse \nexisting code that has been proven in production. And instead of maintaining all that infrastructure code yourself, \nyou can leverage the work of the Module community to pick up infrastructure improvements through\na version number bump.\n \n \n \n## Who maintains this Module?\n\nThis Module is maintained by [Gruntwork](http://www.gruntwork.io/). If you're looking for help or commercial \nsupport, send an email to [modules@gruntwork.io](mailto:modules@gruntwork.io?Subject=Consul%20Module). \nGruntwork can help with:\n\n* Setup, customization, and support for this Module.\n* Modules for other types of infrastructure, such as VPCs, Docker clusters, databases, and continuous integration.\n* Modules that meet compliance requirements, such as HIPAA.\n* Consulting & Training on AWS, Terraform, and DevOps.\n\n\n\n## Code included in this Module:\n\n* [install-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul): This module installs Consul using a\n  [Packer](https://www.packer.io/) template to create a Consul \n  [Amazon Machine Image (AMI)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html).\n\n* [consul-cluster](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster): The module includes Terraform code to deploy a Consul AMI across an [Auto \n  Scaling Group](https://aws.amazon.com/autoscaling/). \n  \n* [run-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul): This module includes the scripts to configure and run Consul. It is used\n  by the above Packer module at build-time to set configurations, and by the Terraform module at runtime \n  with [User Data](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html#user-data-shell-scripts)\n  to create the cluster.\n\n* [install-dnsmasq module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-dnsmasq): Install [Dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html)\n  for Ubuntu 16.04 and Amazon Linux 2 and configure it to forward requests for a specific domain to Consul. This allows you to use Consul as a DNS server\n  for URLs such as `foo.service.consul`.\n\n* [setup-systemd-resolved module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/setup-systemd-resolved): Setup [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html)\n  for ubuntu 18.04 and configure it to forward requests for a specific domain to Consul. This allows you to use Consul as a DNS server\n  for URLs such as `foo.service.consul`.\n\n* [consul-iam-policies](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-iam-policies): Defines the IAM policies necessary for a Consul cluster. \n\n* [consul-security-group-rules](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-security-group-rules): Defines the security group rules used by a \n  Consul cluster to control the traffic that is allowed to go in and out of the cluster.\n\n* [consul-client-security-group-rules](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-client-security-group-rules): Defines the security group rules\n  used by a Consul agent to control the traffic that is allowed to go in and out.\n\n\n\n## How do I contribute to this Module?\n\nContributions are very welcome! Check out the [Contribution Guidelines](https://github.com/hashicorp/terraform-aws-consul/tree/master/CONTRIBUTING.md) for instructions.\n\n\n\n## How is this Module versioned?\n\nThis Module follows the principles of [Semantic Versioning](http://semver.org/). You can find each new release, \nalong with the changelog, in the [Releases Page](../../releases). \n\nDuring initial development, the major version will be 0 (e.g., `0.x.y`), which indicates the code does not yet have a \nstable API. Once we hit `1.0.0`, we will make every effort to maintain a backwards compatible API and use the MAJOR, \nMINOR, and PATCH versions on each release to indicate any incompatibilities. \n\n\n\n## License\n\nThis code is released under the Apache 2.0 License. Please see [LICENSE](https://github.com/hashicorp/terraform-aws-consul/tree/master/LICENSE) and [NOTICE](https://github.com/hashicorp/terraform-aws-consul/tree/master/NOTICE) for more \ndetails.\n\nCopyright &copy; 2017 Gruntwork, Inc.\n",
    "empty": false,
    "inputs": [
      {
        "name": "cluster_tag_key",
        "type": "string",
        "description": "The tag the EC2 Instances will look for to automatically discover each other and form a cluster.",
        "default": "\"consul-servers\"",
        "required": false
      },
      {
        "name": "num_clients",
        "type": "number",
        "description": "The number of Consul client nodes to deploy. You typically run the Consul client alongside your apps, so set this value to however many Instances make sense for your app code.",
        "default": "6",
        "required": false
      },
      {
        "name": "num_servers",
        "type": "number",
        "description": "The number of Consul server nodes to deploy. We strongly recommend using 3 or 5.",
        "default": "3",
        "required": false
      },
      {
        "name": "cluster_name",
        "type": "string",
        "description": "What to name the Consul cluster and all of its associated resources",
        "default": "\"consul-example\"",
        "required": false
      },
      {
        "name": "ami_id",
        "type": "string",
        "description": "The ID of the AMI to run in the cluster. This should be an AMI built from the Packer template under examples/consul-ami/consul.json. To keep this example simple, we run the same AMI on both server and client nodes, but in real-world usage, your client nodes would also run your apps. If the default value is used, Terraform will look up the latest AMI build automatically.",
        "default": "",
        "required": true
      },
      {
        "name": "spot_price",
        "type": "number",
        "description": "The maximum hourly price to pay for EC2 Spot Instances.",
        "default": "",
        "required": true
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The ID of the VPC in which the nodes will be deployed.  Uses default VPC if not supplied.",
        "default": "",
        "required": true
      },
      {
        "name": "ssh_key_name",
        "type": "string",
        "description": "The name of an EC2 Key Pair that can be used to SSH to the EC2 Instances in this cluster. Set to an empty string to not associate a Key Pair.",
        "default": "",
        "required": true
      }
    ],
    "outputs": [
      {
        "name": "aws_region",
        "description": ""
      },
      {
        "name": "asg_name_servers",
        "description": ""
      },
      {
        "name": "security_group_id_clients",
        "description": ""
      },
      {
        "name": "iam_role_arn_clients",
        "description": ""
      },
      {
        "name": "launch_config_name_clients",
        "description": ""
      },
      {
        "name": "security_group_id_servers",
        "description": ""
      },
      {
        "name": "iam_role_id_servers",
        "description": ""
      },
      {
        "name": "num_servers",
        "description": ""
      },
      {
        "name": "iam_role_id_clients",
        "description": ""
      },
      {
        "name": "asg_name_clients",
        "description": ""
      },
      {
        "name": "iam_role_arn_servers",
        "description": ""
      },
      {
        "name": "launch_config_name_servers",
        "description": ""
      },
      {
        "name": "num_clients",
        "description": ""
      },
      {
        "name": "consul_servers_cluster_tag_value",
        "description": ""
      },
      {
        "name": "consul_servers_cluster_tag_key",
        "description": ""
      }
    ],
    "dependencies": [],
    "resources": []
  },
  "submodules": [
    {
      "path": "modules/consul-iam-policies",
      "name": "consul-iam-policies",
      "readme": "# Consul IAM Policies\n\nThis folder contains a [Terraform](https://www.terraform.io/) module that defines the IAM Policies used by a \n[Consul](https://www.consul.io/) cluster. \n\nNormally, you'd get these policies by default if you're using the [consul-cluster submodule](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster), \nbut if you're running Consul on top of a different cluster (e.g. you're co-locating Consul with Nomad), then you can \nuse this module to add the necessary IAM policies to that that cluster. For example, imagine you were using the \n[nomad-cluster module](https://github.com/hashicorp/terraform-aws-nomad/tree/master/modules/nomad-cluster) to run a \ncluster of servers that have both Nomad and Consul on each node:\n\n```hcl\nmodule \"nomad_servers\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-nomad.git//modules/nomad-cluster?ref=v0.0.1\"\n  \n  # This AMI has both Nomad and Consul installed\n  ami_id = \"ami-1234abcd\"\n}\n```\n\nThe `nomad-cluster` module will provide the IAM policies for Nomad, but not for Consul. To ensure those servers\nhave the necessary IAM permissions to run Consul, you can use this module as follows:\n\n```hcl\nmodule \"iam_policies\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-consul.git//modules/consul-iam-policies?ref=v0.0.2\"\n\n  iam_role_id = \"${module.nomad_servers.iam_role_id}\"\n  \n  # ... (other params omitted) ...\n}\n```\n\nNote the following parameters:\n\n* `source`: Use this parameter to specify the URL of this module. The double slash (`//`) is intentional \n  and required. Terraform uses it to specify subfolders within a Git repo (see [module \n  sources](https://www.terraform.io/docs/modules/sources.html)). The `ref` parameter specifies a specific Git tag in \n  this repo. That way, instead of using the latest version of this module from the `master` branch, which \n  will change every time you run Terraform, you're using a fixed version of the repo.\n\n* `iam_role_id`: Use this parameter to specify the ID of the IAM Role to which the rules in this module\n  should be added.\n  \nYou can find the other parameters in [variables.tf](variables.tf).\n\nCheck out the [consul-cluster example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example) for working sample code.\n",
      "empty": false,
      "inputs": [
        {
          "name": "enabled",
          "type": "bool",
          "description": "Give the option to disable this module if required",
          "default": "true",
          "required": false
        },
        {
          "name": "iam_role_id",
          "type": "string",
          "description": "The ID of the IAM Role to which these IAM policies should be attached",
          "default": "",
          "required": true
        }
      ],
      "outputs": [],
      "dependencies": [],
      "resources": [
        {
          "name": "auto_discover_cluster",
          "type": "aws_iam_role_policy"
        }
      ]
    },
    {
      "path": "modules/consul-client-security-group-rules",
      "name": "consul-client-security-group-rules",
      "readme": "# Consul Client Security Group Rules Module\n\nThis folder contains a [Terraform](https://www.terraform.io/) module that defines the security group rules used by a \n[Consul](https://www.consul.io/) client to control the traffic that is allowed to go in and out. \n\nNormally, you'd get these rules by default if you're using the [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster), but if \nyou're running Consul on top of a different cluster, then you can use this module to add the necessary security group \nrules to that cluster. For example, imagine you were using the [vault-cluster \nmodule](https://github.com/hashicorp/terraform-aws-vault/tree/master/modules/vault-cluster) to run a cluster of \nservers that have both Vault and Consul agent on each node:\n\n```hcl\nmodule \"vault_servers\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-vault.git//modules/vault-cluster?ref=v0.0.1\"\n  \n  # This AMI has both Vault and Consul installed\n  ami_id = \"ami-1234abcd\"\n}\n```\n\nThe `vault-cluster` module will provide the security group rules for Vault, but not for the Consul agent. To ensure those servers\nhave the necessary ports open for using Consul, you can use this module as follows:\n\n```hcl\nmodule \"security_group_rules\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-consul.git//modules/consul-client-security-group-rules?ref=v0.0.2\"\n\n  security_group_id = \"${module.vault_servers.security_group_id}\"\n  \n  # ... (other params omitted) ...\n}\n```\n\nNote the following parameters:\n\n* `source`: Use this parameter to specify the URL of this module. The double slash (`//`) is intentional \n  and required. Terraform uses it to specify subfolders within a Git repo (see [module \n  sources](https://www.terraform.io/docs/modules/sources.html)). The `ref` parameter specifies a specific Git tag in \n  this repo. That way, instead of using the latest version of this module from the `master` branch, which \n  will change every time you run Terraform, you're using a fixed version of the repo.\n\n* `security_group_id`: Use this parameter to specify the ID of the security group to which the rules in this module\n  should be added.\n  \nYou can find the other parameters in [variables.tf](variables.tf).\n\nCheck out the [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster) for working sample code.\n",
      "empty": false,
      "inputs": [
        {
          "name": "allowed_inbound_security_group_count",
          "type": "string",
          "description": "The number of entries in var.allowed_inbound_security_group_ids. Ideally, this value could be computed dynamically, but we pass this variable to a Terraform resource's 'count' property and Terraform requires that 'count' be computed with literals or data sources only.",
          "default": "0",
          "required": false
        },
        {
          "name": "allowed_inbound_security_group_ids",
          "type": "list(string)",
          "description": "A list of security group IDs that will be allowed to connect to Consul",
          "default": "[]",
          "required": false
        },
        {
          "name": "allowed_inbound_cidr_blocks",
          "type": "list(string)",
          "description": "A list of CIDR-formatted IP address ranges from which the EC2 Instances will allow connections to Consul",
          "default": "",
          "required": true
        },
        {
          "name": "security_group_id",
          "type": "string",
          "description": "The ID of the security group to which we should add the Consul security group rules",
          "default": "",
          "required": true
        },
        {
          "name": "serf_lan_port",
          "type": "string",
          "description": "The port used to handle gossip in the LAN. Required by all agents.",
          "default": "8301",
          "required": false
        }
      ],
      "outputs": [],
      "dependencies": [],
      "resources": [
        {
          "name": "allow_serf_lan_tcp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_lan_udp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_lan_tcp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_lan_udp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_lan_tcp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_lan_udp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        }
      ]
    },
    {
      "path": "modules/consul-security-group-rules",
      "name": "consul-security-group-rules",
      "readme": "# Consul Security Group Rules Module\n\nThis folder contains a [Terraform](https://www.terraform.io/) module that defines the security group rules used by a \n[Consul](https://www.consul.io/) cluster to control the traffic that is allowed to go in and out of the cluster. \n\nNormally, you'd get these rules by default if you're using the [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster), but if \nyou're running Consul on top of a different cluster, then you can use this module to add the necessary security group \nrules to that cluster. For example, imagine you were using the [nomad-cluster \nmodule](https://github.com/hashicorp/terraform-aws-nomad/tree/master/modules/nomad-cluster) to run a cluster of \nservers that have both Nomad and Consul on each node:\n\n```hcl\nmodule \"nomad_servers\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-nomad.git//modules/nomad-cluster?ref=v0.0.1\"\n  \n  # This AMI has both Nomad and Consul installed\n  ami_id = \"ami-1234abcd\"\n}\n```\n\nThe `nomad-cluster` module will provide the security group rules for Nomad, but not for Consul. To ensure those servers\nhave the necessary ports open for using Consul, you can use this module as follows:\n\n```hcl\nmodule \"security_group_rules\" {\n  source = \"git::git@github.com:hashicorp/terraform-aws-consul.git//modules/consul-security-group-rules?ref=v0.0.2\"\n\n  security_group_id = \"${module.nomad_servers.security_group_id}\"\n  \n  # ... (other params omitted) ...\n}\n```\n\nNote the following parameters:\n\n* `source`: Use this parameter to specify the URL of this module. The double slash (`//`) is intentional \n  and required. Terraform uses it to specify subfolders within a Git repo (see [module \n  sources](https://www.terraform.io/docs/modules/sources.html)). The `ref` parameter specifies a specific Git tag in \n  this repo. That way, instead of using the latest version of this module from the `master` branch, which \n  will change every time you run Terraform, you're using a fixed version of the repo.\n\n* `security_group_id`: Use this parameter to specify the ID of the security group to which the rules in this module\n  should be added.\n  \nYou can find the other parameters in [variables.tf](variables.tf).\n\nCheck out the [consul-cluster example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example) for working sample code.\n",
      "empty": false,
      "inputs": [
        {
          "name": "cli_rpc_port",
          "type": "number",
          "description": "The port used by all agents to handle RPC from the CLI.",
          "default": "8400",
          "required": false
        },
        {
          "name": "server_rpc_port",
          "type": "number",
          "description": "The port used by servers to handle incoming requests from other agents.",
          "default": "8300",
          "required": false
        },
        {
          "name": "allowed_inbound_security_group_count",
          "type": "number",
          "description": "The number of entries in var.allowed_inbound_security_group_ids. Ideally, this value could be computed dynamically, but we pass this variable to a Terraform resource's 'count' property and Terraform requires that 'count' be computed with literals or data sources only.",
          "default": "0",
          "required": false
        },
        {
          "name": "security_group_id",
          "type": "string",
          "description": "The ID of the security group to which we should add the Consul security group rules",
          "default": "",
          "required": true
        },
        {
          "name": "serf_lan_port",
          "type": "number",
          "description": "The port used to handle gossip in the LAN. Required by all agents.",
          "default": "8301",
          "required": false
        },
        {
          "name": "http_api_port",
          "type": "number",
          "description": "The port used by clients to talk to the HTTP API",
          "default": "8500",
          "required": false
        },
        {
          "name": "serf_wan_port",
          "type": "number",
          "description": "The port used by servers to gossip over the WAN to other servers.",
          "default": "8302",
          "required": false
        },
        {
          "name": "allowed_inbound_security_group_ids",
          "type": "list(string)",
          "description": "A list of security group IDs that will be allowed to connect to Consul",
          "default": "[]",
          "required": false
        },
        {
          "name": "allowed_inbound_cidr_blocks",
          "type": "list(string)",
          "description": "A list of CIDR-formatted IP address ranges from which the EC2 Instances will allow connections to Consul",
          "default": "",
          "required": true
        },
        {
          "name": "dns_port",
          "type": "number",
          "description": "The port used to resolve DNS queries.",
          "default": "8600",
          "required": false
        }
      ],
      "outputs": [],
      "dependencies": [],
      "resources": [
        {
          "name": "allow_server_rpc_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_udp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_tcp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_tcp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_http_api_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_server_rpc_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_cli_rpc_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_tcp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_http_api_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_server_rpc_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_udp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_http_api_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_udp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_cli_rpc_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_udp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_tcp_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_cli_rpc_inbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_udp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_udp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_serf_wan_tcp_inbound_from_self",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_dns_tcp_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        }
      ]
    },
    {
      "path": "modules/consul-cluster",
      "name": "consul-cluster",
      "readme": "# Consul Cluster\n\nThis folder contains a [Terraform](https://www.terraform.io/) module to deploy a\n[Consul](https://www.consul.io/) cluster in [AWS](https://aws.amazon.com/) on top of an Auto Scaling Group. This module\nis designed to deploy an [Amazon Machine Image (AMI)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)\nthat has Consul installed via the [install-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul) module in this Module.\n\n\n\n## How do you use this module?\n\nThis folder defines a [Terraform module](https://www.terraform.io/docs/modules/usage.html), which you can use in your\ncode by adding a `module` configuration and setting its `source` parameter to URL of this folder:\n\n```hcl\nmodule \"consul_cluster\" {\n  # TODO: update this to the final URL\n  # Use version v0.0.5 of the consul-cluster module\n  source = \"github.com/hashicorp/terraform-aws-consul//modules/consul-cluster?ref=v0.0.5\"\n\n  # Specify the ID of the Consul AMI. You should build this using the scripts in the install-consul module.\n  ami_id = \"ami-abcd1234\"\n\n  # Add this tag to each node in the cluster\n  cluster_tag_key   = \"consul-cluster\"\n  cluster_tag_value = \"consul-cluster-example\"\n\n  # Configure and start Consul during boot. It will automatically form a cluster with all nodes that have that same tag.\n  user_data = <<-EOF\n              #!/bin/bash\n              /opt/consul/bin/run-consul --server --cluster-tag-key consul-cluster\n              EOF\n\n  # ... See variables.tf for the other parameters you must define for the consul-cluster module\n}\n```\n\nNote the following parameters:\n\n* `source`: Use this parameter to specify the URL of the consul-cluster module. The double slash (`//`) is intentional\n  and required. Terraform uses it to specify subfolders within a Git repo (see [module\n  sources](https://www.terraform.io/docs/modules/sources.html)). The `ref` parameter specifies a specific Git tag in\n  this repo. That way, instead of using the latest version of this module from the `master` branch, which\n  will change every time you run Terraform, you're using a fixed version of the repo.\n\n* `ami_id`: Use this parameter to specify the ID of a Consul [Amazon Machine Image\n  (AMI)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) to deploy on each server in the cluster. You\n  should install Consul in this AMI using the scripts in the [install-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul) module.\n\n* `user_data`: Use this parameter to specify a [User\n  Data](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html#user-data-shell-scripts) script that each\n  server will run during boot. This is where you can use the [run-consul script](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul) to configure and\n  run Consul. The `run-consul` script is one of the scripts installed by the [install-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul)\n  module.\n\nYou can find the other parameters in [variables.tf](variables.tf).\n\nCheck out the [consul-cluster example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example) for fully-working sample code.\n\n\n\n\n## How do you connect to the Consul cluster?\n\n### Using the HTTP API from your own computer\n\nIf you want to connect to the cluster from your own computer, the easiest way is to use the [HTTP\nAPI](https://www.consul.io/docs/agent/http.html). Note that this only works if the Consul cluster is running in public\nsubnets and/or your default VPC (as in the [consul-cluster example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example)), which is OK for testing\nand experimentation, but NOT recommended for production usage.\n\nTo use the HTTP API, you first need to get the public IP address of one of the Consul Servers. You can find Consul\nservers by using AWS tags. If you're running the [consul-cluster example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/root-example), the\n[consul-examples-helper.sh script](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-examples-helper/consul-examples-helper.sh) will do the tag lookup\nfor you automatically (note, you must have the [AWS CLI](https://aws.amazon.com/cli/),\n[jq](https://stedolan.github.io/jq/), and the [Consul agent](https://www.consul.io/) installed locally):\n\n```\n> ../consul-examples-helper/consul-examples-helper.sh\n\nYour Consul servers are running at the following IP addresses:\n\n34.200.218.123\n34.205.127.138\n34.201.165.11\n```\n\nYou can use one of these IP addresses with the `members` command to see a list of cluster nodes:\n\n```\n> consul members -http-addr=11.22.33.44:8500\n\nNode                 Address             Status  Type    Build  Protocol  DC\ni-0051c3ea00e9691a0  172.31.35.148:8301  alive   client  0.8.0  2         us-east-1\ni-00aea529cce1761d4  172.31.47.236:8301  alive   client  0.8.0  2         us-east-1\ni-01bc94ccfa032d82d  172.31.27.193:8301  alive   client  0.8.0  2         us-east-1\ni-04271e97808f15d63  172.31.25.174:8301  alive   server  0.8.0  2         us-east-1\ni-0483b07abe49ea7ff  172.31.5.42:8301    alive   client  0.8.0  2         us-east-1\ni-098fb1ebd5ca443bf  172.31.55.203:8301  alive   client  0.8.0  2         us-east-1\ni-0eb961b6825f7871c  172.31.65.9:8301    alive   client  0.8.0  2         us-east-1\ni-0ee6dcf715adbff5f  172.31.67.235:8301  alive   server  0.8.0  2         us-east-1\ni-0fd0e63682a94b245  172.31.54.84:8301   alive   server  0.8.0  2         us-east-1\n```\n\nYou can also try inserting a value:\n\n```\n> consul kv put -http-addr=11.22.33.44:8500 foo bar\n\nSuccess! Data written to: foo\n```\n\nAnd reading that value back:\n\n```\n> consul kv get -http-addr=11.22.33.44:8500 foo\n\nbar\n```\n\nFinally, you can try opening up the Consul UI in your browser at the URL `http://11.22.33.44:8500/ui/`.\n\n![Consul UI](https://github.com/hashicorp/terraform-aws-consul/blob/master/_docs/consul-ui-screenshot.png?raw=true)\n\n\n### Using the Consul agent on another EC2 Instance\n\nThe easiest way to run [Consul agent](https://www.consul.io/docs/agent/basics.html) and have it connect to the Consul\ncluster is to use the same EC2 tags the Consul servers use to discover each other during bootstrapping.\n\nFor example, imagine you deployed a Consul cluster in `us-east-1` as follows:\n\n<!-- TODO: update this to the final URL -->\n\n```hcl\nmodule \"consul_cluster\" {\n  source = \"github.com/hashicorp/terraform-aws-consul//modules/consul-cluster?ref=v0.0.5\"\n\n  # Add this tag to each node in the cluster\n  cluster_tag_key   = \"consul-cluster\"\n  cluster_tag_value = \"consul-cluster-example\"\n\n  # ... Other params omitted ...\n}\n```\n\nUsing the `retry-join-ec2-xxx` params, you can connect run a Consul agent on an EC2 Instance as follows:\n\n```\nconsul agent -retry-join-ec2-tag-key=consul-cluster -retry-join-ec2-tag-value=consul-cluster-example -data-dir=/tmp/consul\n```\n\nTwo important notes about this command:\n\n1. By default, the Consul cluster nodes advertise their *private* IP addresses, so the command above only works from\n   EC2 Instances inside the same VPC (or any VPC with proper peering connections and route table entries).\n1. In order to look up the EC2 tags, the EC2 Instance where you're running this command must have an IAM role with\n   the `ec2:DescribeInstances` permission.\n\n\n\n## How do you connect load balancers to the Auto Scaling Group (ASG)?\n\nYou can use the [`aws_autoscaling_attachment`](https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html) resource.\n\nFor example, if you are using the new application or network load balancers:\n\n```hcl\nresource \"aws_lb_target_group\" \"test\" {\n  // ...\n}\n\n# Create a new Consul Cluster\nmodule \"consul\" {\n  source =\"...\"\n  // ...\n}\n\n# Create a new load balancer attachment\nresource \"aws_autoscaling_attachment\" \"asg_attachment_bar\" {\n  autoscaling_group_name = \"${module.consul.asg_name}\"\n  alb_target_group_arn   = \"${aws_alb_target_group.test.arn}\"\n}\n```\n\nIf you are using a \"classic\" load balancer:\n\n```hcl\n# Create a new load balancer\nresource \"aws_elb\" \"bar\" {\n  // ...\n}\n\n# Create a new Consul Cluster\nmodule \"consul\" {\n  source =\"...\"\n  // ...\n}\n\n# Create a new load balancer attachment\nresource \"aws_autoscaling_attachment\" \"asg_attachment_bar\" {\n  autoscaling_group_name = \"${module.consul.asg_name}\"\n  elb                    = \"${aws_elb.bar.id}\"\n}\n```\n\n\n\n## What's included in this module?\n\nThis module creates the following architecture:\n\n![Consul architecture](https://github.com/hashicorp/terraform-aws-consul/blob/master/_docs/architecture.png?raw=true)\n\nThis architecture consists of the following resources:\n\n* [Auto Scaling Group](#auto-scaling-group)\n* [EC2 Instance Tags](#ec2-instance-tags)\n* [Security Group](#security-group)\n* [IAM Role and Permissions](#iam-role-and-permissions)\n\n\n### Auto Scaling Group\n\nThis module runs Consul on top of an [Auto Scaling Group (ASG)](https://aws.amazon.com/autoscaling/). Typically, you\nshould run the ASG with 3 or 5 EC2 Instances spread across multiple [Availability\nZones](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html). Each of the EC2\nInstances should be running an AMI that has Consul installed via the [install-consul](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/install-consul)\nmodule. You pass in the ID of the AMI to run using the `ami_id` input parameter.\n\n\n### EC2 Instance Tags\n\nThis module allows you to specify a tag to add to each EC2 instance in the ASG. We recommend using this tag with the\n[retry_join_ec2](https://www.consul.io/docs/agent/options.html?#retry_join_ec2) configuration to allow the EC2\nInstances to find each other and automatically form a cluster.\n\n\n### Security Group\n\nEach EC2 Instance in the ASG has a Security Group that allows:\n\n* All outbound requests\n* All the inbound ports specified in the [Consul documentation](https://www.consul.io/docs/agent/options.html?#ports-used)\n\nThe Security Group ID is exported as an output variable if you need to add additional rules.\n\nCheck out the [Security section](#security) for more details.\n\n\n### IAM Role and Permissions\n\nEach EC2 Instance in the ASG has an [IAM Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) attached.\nWe give this IAM role a small set of IAM permissions that each EC2 Instance can use to automatically discover the other\nInstances in its ASG and form a cluster with them. See the [run-consul required permissions\ndocs](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul#required-permissions) for details.\n\nThe IAM Role ARN is exported as an output variable if you need to add additional permissions.\n\nYou can disable the creation of the IAM role and policies if needed by setting `enable_iam_setup` variable to false.  This allows you to create the role seperately from this module and supply the external role arn via the `iam_instance_profile_name` variable.\n\n\n## How do you roll out updates?\n\nIf you want to deploy a new version of Consul across the cluster, the best way to do that is to:\n\n1. Build a new AMI.\n1. Set the `ami_id` parameter to the ID of the new AMI.\n1. Run `terraform apply`.\n\nThis updates the Launch Configuration of the ASG, so any new Instances in the ASG will have your new AMI, but it does\nNOT actually deploy those new instances. To make that happen, you should do the following:\n\n1. Issue an API call to one of the old Instances in the ASG to have it leave gracefully. E.g.:\n\n    ```\n    curl -X PUT <OLD_INSTANCE_IP>:8500/v1/agent/leave\n    ```\n\n1. Once the instance has left the cluster, terminate it:\n\n    ```\n    aws ec2 terminate-instances --instance-ids <OLD_INSTANCE_ID>\n    ```\n\n1. After a minute or two, the ASG should automatically launch a new Instance, with the new AMI, to replace the old one.\n\n1. Wait for the new Instance to boot and join the cluster.\n\n1. Repeat these steps for each of the other old Instances in the ASG.\n\nWe will add a script in the future to automate this process (PRs are welcome!).\n\n\n\n\n## What happens if a node crashes?\n\nThere are two ways a Consul node may go down:\n\n1. The Consul process may crash. In that case, `systemd` should restart it automatically.\n1. The EC2 Instance running Consul dies. In that case, the Auto Scaling Group should launch a replacement automatically.\n   Note that in this case, since the Consul agent did not exit gracefully, and the replacement will have a different ID,\n   you may have to manually clean out the old nodes using the [force-leave\n   command](https://www.consul.io/docs/commands/force-leave.html). We may add a script to do this\n   automatically in the future. For more info, see the [Consul Outage\n   documentation](https://www.consul.io/docs/guides/outage.html).\n\n\n\n\n## Security\n\nHere are some of the main security considerations to keep in mind when using this module:\n\n1. [Encryption in transit](#encryption-in-transit)\n1. [Encryption at rest](#encryption-at-rest)\n1. [Dedicated instances](#dedicated-instances)\n1. [Security groups](#security-groups)\n1. [SSH access](#ssh-access)\n\n\n### Encryption in transit\n\nConsul can encrypt all of its network traffic. For instructions on enabling network encryption, have a look at the\n[How do you handle encryption documentation](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/run-consul#how-do-you-handle-encryption).\n\n\n### Encryption at rest\n\nThe EC2 Instances in the cluster store all their data on the root EBS Volume. To enable encryption for the data at\nrest, you must enable encryption in your Consul AMI. If you're creating the AMI using Packer (e.g. as shown in\nthe [consul-ami example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-ami)), you need to set the [encrypt_boot\nparameter](https://www.packer.io/docs/builders/amazon-ebs.html#encrypt_boot) to `true`.\n\n\n### Dedicated instances\n\nIf you wish to use dedicated instances, you can set the `tenancy` parameter to `\"dedicated\"` in this module.\n\n\n### Security groups\n\nThis module attaches a security group to each EC2 Instance that allows inbound requests as follows:\n\n* **Consul**: For all the [ports used by Consul](https://www.consul.io/docs/agent/options.html#ports), you can\n  use the `allowed_inbound_cidr_blocks` parameter to control the list of\n  [CIDR blocks](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) that will be allowed access and the `allowed_inbound_security_group_ids` parameter to control the security groups that will be allowed access.\n\n* **SSH**: For the SSH port (default: 22), you can use the `allowed_ssh_cidr_blocks` parameter to control the list of\n  [CIDR blocks](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) that will be allowed access. You can use the `allowed_inbound_ssh_security_group_ids` parameter to control the list of source Security Groups that will be allowed access.\n\nNote that all the ports mentioned above are configurable via the `xxx_port` variables (e.g. `server_rpc_port`). See\n[variables.tf](variables.tf) for the full list.\n\n\n\n### SSH access\n\nYou can associate an [EC2 Key Pair](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) with each\nof the EC2 Instances in this cluster by specifying the Key Pair's name in the `ssh_key_name` variable. If you don't\nwant to associate a Key Pair with these servers, set `ssh_key_name` to an empty string.\n\n\n\n\n\n## What's NOT included in this module?\n\nThis module does NOT handle the following items, which you may want to provide on your own:\n\n* [Monitoring, alerting, log aggregation](#monitoring-alerting-log-aggregation)\n* [VPCs, subnets, route tables](#vpcs-subnets-route-tables)\n* [DNS entries](#dns-entries)\n\n\n### Monitoring, alerting, log aggregation\n\nThis module does not include anything for monitoring, alerting, or log aggregation. All ASGs and EC2 Instances come\nwith limited [CloudWatch](https://aws.amazon.com/cloudwatch/) metrics built-in, but beyond that, you will have to\nprovide your own solutions.\n\n\n### VPCs, subnets, route tables\n\nThis module assumes you've already created your network topology (VPC, subnets, route tables, etc). You will need to\npass in the the relevant info about your network topology (e.g. `vpc_id`, `subnet_ids`) as input variables to this\nmodule.\n\n\n### DNS entries\n\nThis module does not create any DNS entries for Consul (e.g. in Route 53).\n\n\n",
      "empty": false,
      "inputs": [
        {
          "name": "cluster_name",
          "type": "string",
          "description": "The name of the Consul cluster (e.g. consul-stage). This variable is used to namespace all resources created by this module.",
          "default": "",
          "required": true
        },
        {
          "name": "enabled_metrics",
          "type": "list(string)",
          "description": "List of autoscaling group metrics to enable.",
          "default": "[]",
          "required": false
        },
        {
          "name": "ssh_port",
          "type": "number",
          "description": "The port used for SSH connections",
          "default": "22",
          "required": false
        },
        {
          "name": "dns_port",
          "type": "number",
          "description": "The port used to resolve DNS queries.",
          "default": "8600",
          "required": false
        },
        {
          "name": "root_volume_type",
          "type": "string",
          "description": "The type of volume. Must be one of: standard, gp2, or io1.",
          "default": "\"standard\"",
          "required": false
        },
        {
          "name": "allowed_inbound_security_group_count",
          "type": "number",
          "description": "The number of entries in var.allowed_inbound_security_group_ids. Ideally, this value could be computed dynamically, but we pass this variable to a Terraform resource's 'count' property and Terraform requires that 'count' be computed with literals or data sources only.",
          "default": "0",
          "required": false
        },
        {
          "name": "availability_zones",
          "type": "list(string)",
          "description": "The availability zones into which the EC2 Instances should be deployed. We recommend one availability zone per node in the cluster_size variable. At least one of var.subnet_ids or var.availability_zones must be non-empty.",
          "default": "[]",
          "required": false
        },
        {
          "name": "root_volume_size",
          "type": "number",
          "description": "The size, in GB, of the root EBS volume.",
          "default": "50",
          "required": false
        },
        {
          "name": "instance_profile_path",
          "type": "string",
          "description": "Path in which to create the IAM instance profile.",
          "default": "\"/\"",
          "required": false
        },
        {
          "name": "vpc_id",
          "type": "string",
          "description": "The ID of the VPC in which to deploy the Consul cluster",
          "default": "",
          "required": true
        },
        {
          "name": "server_rpc_port",
          "type": "number",
          "description": "The port used by servers to handle incoming requests from other agents.",
          "default": "8300",
          "required": false
        },
        {
          "name": "cluster_tag_key",
          "type": "string",
          "description": "Add a tag with this key and the value var.cluster_tag_value to each Instance in the ASG. This can be used to automatically find other Consul nodes and form a cluster.",
          "default": "\"consul-servers\"",
          "required": false
        },
        {
          "name": "cluster_size",
          "type": "number",
          "description": "The number of nodes to have in the Consul cluster. We strongly recommended that you use either 3 or 5.",
          "default": "3",
          "required": false
        },
        {
          "name": "user_data",
          "type": "string",
          "description": "A User Data script to execute while the server is booting. We recommend passing in a bash script that executes the run-consul script, which should have been installed in the Consul AMI by the install-consul module.",
          "default": "",
          "required": true
        },
        {
          "name": "tags",
          "type": "list(object({ key : string, value : string, propagate_at_launch : bool }))",
          "description": "List of extra tag blocks added to the autoscaling group configuration. Each element in the list is a map containing keys 'key', 'value', and 'propagate_at_launch' mapped to the respective values.",
          "default": "[]",
          "required": false
        },
        {
          "name": "wait_for_capacity_timeout",
          "type": "string",
          "description": "A maximum duration that Terraform should wait for ASG instances to be healthy before timing out. Setting this to '0' causes Terraform to skip all Capacity Waiting behavior.",
          "default": "\"10m\"",
          "required": false
        },
        {
          "name": "tenancy",
          "type": "string",
          "description": "The tenancy of the instance. Must be one of: null, default or dedicated. For EC2 Spot Instances only null or dedicated can be used.",
          "default": "",
          "required": true
        },
        {
          "name": "security_group_tags",
          "type": "map(string)",
          "description": "Tags to be applied to the LC security group",
          "default": "{}",
          "required": false
        },
        {
          "name": "allowed_inbound_security_group_ids",
          "type": "list(string)",
          "description": "A list of security group IDs that will be allowed to connect to Consul",
          "default": "[]",
          "required": false
        },
        {
          "name": "instance_type",
          "type": "string",
          "description": "The type of EC2 Instances to run for each node in the cluster (e.g. t2.micro).",
          "default": "",
          "required": true
        },
        {
          "name": "iam_instance_profile_name",
          "type": "string",
          "description": "If enable_iam_setup is false then this will be the name of the IAM instance profile to attach",
          "default": "",
          "required": true
        },
        {
          "name": "http_api_port",
          "type": "number",
          "description": "The port used by clients to talk to the HTTP API",
          "default": "8500",
          "required": false
        },
        {
          "name": "serf_lan_port",
          "type": "number",
          "description": "The port used to handle gossip in the LAN. Required by all agents.",
          "default": "8301",
          "required": false
        },
        {
          "name": "health_check_grace_period",
          "type": "number",
          "description": "Time, in seconds, after instance comes into service before checking health.",
          "default": "300",
          "required": false
        },
        {
          "name": "ssh_key_name",
          "type": "string",
          "description": "The name of an EC2 Key Pair that can be used to SSH to the EC2 Instances in this cluster. Set to an empty string to not associate a Key Pair.",
          "default": "",
          "required": true
        },
        {
          "name": "health_check_type",
          "type": "string",
          "description": "Controls how health checking is done. Must be one of EC2 or ELB.",
          "default": "\"EC2\"",
          "required": false
        },
        {
          "name": "service_linked_role_arn",
          "type": "string",
          "description": "The ARN of the service-linked role that the ASG will use to call other AWS services",
          "default": "",
          "required": true
        },
        {
          "name": "root_volume_ebs_optimized",
          "type": "bool",
          "description": "If true, the launched EC2 instance will be EBS-optimized.",
          "default": "false",
          "required": false
        },
        {
          "name": "spot_price",
          "type": "number",
          "description": "The maximum hourly price to pay for EC2 Spot Instances.",
          "default": "",
          "required": true
        },
        {
          "name": "associate_public_ip_address",
          "type": "bool",
          "description": "If set to true, associate a public IP address with each EC2 Instance in the cluster.",
          "default": "false",
          "required": false
        },
        {
          "name": "allowed_ssh_security_group_count",
          "type": "number",
          "description": "The number of entries in var.allowed_ssh_security_group_ids. Ideally, this value could be computed dynamically, but we pass this variable to a Terraform resource's 'count' property and Terraform requires that 'count' be computed with literals or data sources only.",
          "default": "0",
          "required": false
        },
        {
          "name": "allowed_ssh_security_group_ids",
          "type": "list(string)",
          "description": "A list of security group IDs from which the EC2 Instances will allow SSH connections",
          "default": "[]",
          "required": false
        },
        {
          "name": "allowed_inbound_cidr_blocks",
          "type": "list(string)",
          "description": "A list of CIDR-formatted IP address ranges from which the EC2 Instances will allow connections to Consul",
          "default": "",
          "required": true
        },
        {
          "name": "allowed_ssh_cidr_blocks",
          "type": "list(string)",
          "description": "A list of CIDR-formatted IP address ranges from which the EC2 Instances will allow SSH connections",
          "default": "[]",
          "required": false
        },
        {
          "name": "subnet_ids",
          "type": "list(string)",
          "description": "The subnet IDs into which the EC2 Instances should be deployed. We recommend one subnet ID per node in the cluster_size variable. At least one of var.subnet_ids or var.availability_zones must be non-empty.",
          "default": "[]",
          "required": false
        },
        {
          "name": "ami_id",
          "type": "string",
          "description": "The ID of the AMI to run in this cluster. Should be an AMI that had Consul installed and configured by the install-consul module.",
          "default": "",
          "required": true
        },
        {
          "name": "enable_iam_setup",
          "type": "bool",
          "description": "If true, create the IAM Role, IAM Instance Profile, and IAM Policies. If false, these will not be created, and you can pass in your own IAM Instance Profile via var.iam_instance_profile_name.",
          "default": "true",
          "required": false
        },
        {
          "name": "serf_wan_port",
          "type": "number",
          "description": "The port used by servers to gossip over the WAN to other servers.",
          "default": "8302",
          "required": false
        },
        {
          "name": "cli_rpc_port",
          "type": "number",
          "description": "The port used by all agents to handle RPC from the CLI.",
          "default": "8400",
          "required": false
        },
        {
          "name": "root_volume_delete_on_termination",
          "type": "bool",
          "description": "Whether the volume should be destroyed on instance termination.",
          "default": "true",
          "required": false
        },
        {
          "name": "termination_policies",
          "type": "string",
          "description": "A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are OldestInstance, NewestInstance, OldestLaunchConfiguration, ClosestToNextInstanceHour, Default.",
          "default": "\"Default\"",
          "required": false
        },
        {
          "name": "additional_security_group_ids",
          "type": "list(string)",
          "description": "A list of additional security group IDs to add to Consul EC2 Instances",
          "default": "[]",
          "required": false
        },
        {
          "name": "cluster_tag_value",
          "type": "string",
          "description": "Add a tag with key var.clsuter_tag_key and this value to each Instance in the ASG. This can be used to automatically find other Consul nodes and form a cluster.",
          "default": "\"auto-join\"",
          "required": false
        }
      ],
      "outputs": [
        {
          "name": "cluster_tag_key",
          "description": "This is the tag key used to allow the consul servers to autojoin"
        },
        {
          "name": "security_group_id",
          "description": "This is the id of security group that governs ingress and egress for the cluster instances"
        },
        {
          "name": "iam_role_id",
          "description": "This is the id of instance role if enable_iam_setup variable is set to true"
        },
        {
          "name": "iam_role_arn",
          "description": "This is the arn of instance role if enable_iam_setup variable is set to true"
        },
        {
          "name": "launch_config_name",
          "description": "This is the name of the launch_configuration used to bootstrap the cluster instances"
        },
        {
          "name": "cluster_size",
          "description": "This is the desired size of the consul cluster in the autoscaling group"
        },
        {
          "name": "asg_name",
          "description": "This is the name for the autoscaling group generated by the module"
        },
        {
          "name": "cluster_tag_value",
          "description": "This is the tag value used to allow the consul servers to autojoin"
        }
      ],
      "dependencies": [],
      "resources": [
        {
          "name": "lc_security_group",
          "type": "aws_security_group"
        },
        {
          "name": "launch_configuration",
          "type": "aws_launch_configuration"
        },
        {
          "name": "autoscaling_group",
          "type": "aws_autoscaling_group"
        },
        {
          "name": "instance_role",
          "type": "aws_iam_role"
        },
        {
          "name": "instance_profile",
          "type": "aws_iam_instance_profile"
        },
        {
          "name": "allow_all_outbound",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_ssh_inbound_from_security_group_ids",
          "type": "aws_security_group_rule"
        },
        {
          "name": "allow_ssh_inbound",
          "type": "aws_security_group_rule"
        }
      ]
    }
  ],
  "examples": [
    {
      "path": "examples/example-with-encryption",
      "name": "example-with-encryption",
      "readme": "# Consul cluster with encryption example\n\nThis folder contains a set of Terraform manifest for deploying a Consul cluster in AWS, including a Packer manifest that creates an AMI with a set of insecured certs for TLS validation, as well as installing an updated version of the `run-consul` script that accepts parameters for enabling RPC and gossip encryption.\n\nThe resulting AMI id can then be passed as a parameter to `variables.tf`. The `enable_gossip_encryption` and `enable_rpc_encryption` variables are set to `true` by default in this example, but they don't have to be in your implementation. In this example they're passed as parameters to the `user_data` template to generate the flags passed to `run-consul` but you can use a different strategy.\n\nThe end result of this example should be a cluster of 3 Consul servers and 3 Consul clients, all running on individual EC2 instances. If the default variables are used, both gossip and RPC encryption will be enabled. You can validate this by trying to bring up another Consul node or cluster NOT running with encryption and attempt to join the existing cluster.\n\nRunning this example with encryption turned off and then attempt to upgrade it to use encryption is a good exercise to validate that a production cluster can be upgraded with minimal impact.\n\nTo understand more about how Consul handles encryption or how you can upgrade to use encryption without downtime, check out the [Consul encryption documentation](https://www.consul.io/docs/agent/encryption.html). **IMPORTANT:** The certs included in this repo are **NOT** meant to be used in production. You should generate your own certs if you're running this for anything other than experimenting or testing.\n\n## Quick start\n\nTo deploy a Consul cluster with encryption enabled:\n\n1. Create a new AMI using the Packer manifest and the certificates in the `packer` directory.\n1. Modify `main.tf` to add your provider credentials, VPC/subnet ids if you need to, etc.\n1. Modify `variables.tf` to customize the cluster. **NOTE:** the `gossip_encryption_key` variable must be a 16-byte key that can be generated offline with `consul keygen`. It's **NOT** a good idea to keep this key **in plain text** in source control. It should be encrypted beforehand (with something like KMS) and decrypted by Consul during boot.\n1. Run `terraform init`.\n1. Run `terraform apply`.\n1. `ssh` into one of the boxes and make sure all nodes correctly discover each other (by running `consul members` for example).\n1. You can also validate that encryption is turned on by looking at `/opt/consul/log/consul-stdout.log` and verifying you see `Encrypt: Gossip: true, TLS-Outgoing: true, TLS-Incoming: true`.",
      "empty": false,
      "inputs": [
        {
          "name": "key_file_path",
          "type": "string",
          "description": "Path to the certificate key used to verify incoming connections.",
          "default": "\"/opt/consul/tls/consul.key.pem\"",
          "required": false
        },
        {
          "name": "enable_gossip_encryption",
          "type": "bool",
          "description": "Encrypt gossip traffic between nodes. Must also specify encryption key.",
          "default": "true",
          "required": false
        },
        {
          "name": "vpc_id",
          "type": "string",
          "description": "The ID of the VPC in which the nodes will be deployed.  Uses default VPC if not supplied.",
          "default": "",
          "required": true
        },
        {
          "name": "ssh_key_name",
          "type": "string",
          "description": "The name of an EC2 Key Pair that can be used to SSH to the EC2 Instances in this cluster. Set to an empty string to not associate a Key Pair.",
          "default": "",
          "required": true
        },
        {
          "name": "cluster_name",
          "type": "string",
          "description": "What to name the Consul cluster and all of its associated resources",
          "default": "\"consul-example\"",
          "required": false
        },
        {
          "name": "ca_path",
          "type": "string",
          "description": "Path to the directory of CA files used to verify outgoing connections.",
          "default": "\"/opt/consul/tls/ca\"",
          "required": false
        },
        {
          "name": "gossip_encryption_key",
          "type": "string",
          "description": "16 byte cryptographic key to encrypt gossip traffic between nodes. Must set 'enable_gossip_encryption' to true for this to take effect. WARNING: Setting the encryption key here means it will be stored in plain text. We're doing this here to keep the example simple, but in production you should inject it more securely, e.g. retrieving it from KMS.",
          "default": "\"\"",
          "required": false
        },
        {
          "name": "enable_rpc_encryption",
          "type": "bool",
          "description": "Encrypt RPC traffic between nodes. Must also specify TLS certificates and keys.",
          "default": "true",
          "required": false
        },
        {
          "name": "spot_price",
          "type": "string",
          "description": "The maximum hourly price to pay for EC2 Spot Instances.",
          "default": "",
          "required": true
        },
        {
          "name": "cluster_tag_key",
          "type": "string",
          "description": "The tag the EC2 Instances will look for to automatically discover each other and form a cluster.",
          "default": "\"consul-servers\"",
          "required": false
        },
        {
          "name": "ami_id",
          "type": "string",
          "description": "The ID of the AMI to run in the cluster. This should be an AMI built from the Packer template under examples/example-with-encryption/packer/consul-with-certs.json. To keep this example simple, we run the same AMI on both server and client nodes, but in real-world usage, your client nodes would also run your apps. If the default value is used, Terraform will look up the latest AMI build automatically.",
          "default": "",
          "required": true
        },
        {
          "name": "cert_file_path",
          "type": "string",
          "description": "Path to the certificate file used to verify incoming connections.",
          "default": "\"/opt/consul/tls/consul.crt.pem\"",
          "required": false
        },
        {
          "name": "num_clients",
          "type": "number",
          "description": "The number of Consul client nodes to deploy. You typically run the Consul client alongside your apps, so set this value to however many Instances make sense for your app code.",
          "default": "3",
          "required": false
        },
        {
          "name": "num_servers",
          "type": "number",
          "description": "The number of Consul server nodes to deploy. We strongly recommend using 3 or 5.",
          "default": "3",
          "required": false
        }
      ],
      "outputs": [
        {
          "name": "launch_config_name_clients",
          "description": ""
        },
        {
          "name": "num_clients",
          "description": ""
        },
        {
          "name": "asg_name_servers",
          "description": ""
        },
        {
          "name": "consul_servers_cluster_tag_value",
          "description": ""
        },
        {
          "name": "iam_role_arn_clients",
          "description": ""
        },
        {
          "name": "iam_role_arn_servers",
          "description": ""
        },
        {
          "name": "launch_config_name_servers",
          "description": ""
        },
        {
          "name": "num_servers",
          "description": ""
        },
        {
          "name": "security_group_id_servers",
          "description": ""
        },
        {
          "name": "aws_region",
          "description": ""
        },
        {
          "name": "security_group_id_clients",
          "description": ""
        },
        {
          "name": "iam_role_id_servers",
          "description": ""
        },
        {
          "name": "consul_servers_cluster_tag_key",
          "description": ""
        },
        {
          "name": "iam_role_id_clients",
          "description": ""
        },
        {
          "name": "asg_name_clients",
          "description": ""
        }
      ],
      "dependencies": [],
      "resources": []
    },
    {
      "path": "examples/example-with-custom-asg-role",
      "name": "example-with-custom-asg-role",
      "readme": "# Consul Cluster Example\n\nThis folder shows an example of Terraform code that uses the [consul-cluster module](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster) to deploy \na [Consul](https://www.consul.io/) cluster in [AWS](https://aws.amazon.com/). The cluster consists of two Auto Scaling\nGroups (ASGs): one with a small number of Consul server nodes, which are responsible for being part of the [consensus \nquorum](https://www.consul.io/docs/internals/consensus.html), and one with a larger number of client nodes, which \nwould typically run alongside your apps:\n\n![Consul architecture](https://github.com/hashicorp/terraform-aws-consul/blob/master/_docs/architecture.png?raw=true)\n\nThe Consul server nodes are launched using a custom autoscaling service-linked role for the autoscaling group instead of the default autoscaling service-linked role.  This enables a  custom role to be assigned which may be desired for using KMS encrypted AMIs.  [More Information](https://forums.aws.amazon.com/thread.jspa?threadID=277523)\n\nYou will need to create an [Amazon Machine Image (AMI)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) \nthat has Consul installed, which you can do using the [consul-ami example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-ami)). Note that to keep \nthis example simple, both the server ASG and client ASG are running the exact same AMI. In real-world usage, you'd \nprobably have multiple client ASGs, and each of those ASGs would run a different AMI that has the Consul agent \ninstalled alongside your apps.\n\nFor more info on how the Consul cluster works, check out the [consul-cluster](https://github.com/hashicorp/terraform-aws-consul/tree/master/modules/consul-cluster) documentation.\n\n\n\n## Quick start\n\nTo deploy a Consul Cluster:\n\n1. `git clone` this repo to your computer.\n1. Optional: build a Consul AMI. See the [consul-ami example](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-ami) documentation for instructions. Make sure to\n   note down the ID of the AMI.\n1. Install [Terraform](https://www.terraform.io/).\n1. Open `variables.tf`, set the environment variables specified at the top of the file, and fill in any other variables that\n   don't have a default. If you built a custom AMI, put the AMI ID into the `ami_id` variable. Otherwise, one of our\n   public example AMIs will be used by default. These AMIs are great for learning/experimenting, but are NOT\n   recommended for production use.\n1. Run `terraform init`.\n1. Run `terraform apply`.\n1. Run the [consul-examples-helper.sh script](https://github.com/hashicorp/terraform-aws-consul/tree/master/examples/consul-examples-helper/consul-examples-helper.sh) to \n   print out the IP addresses of the Consul servers and some example commands you can run to interact with the cluster:\n   `../consul-examples-helper/consul-examples-helper.sh`.\n\n",
      "empty": false,
      "inputs": [
        {
          "name": "key_file_path",
          "type": "string",
          "description": "Path to the certificate key used to verify incoming connections.",
          "default": "\"/opt/consul/tls/consul.key.pem\"",
          "required": false
        },
        {
          "name": "ca_path",
          "type": "string",
          "description": "Path to the directory of CA files used to verify outgoing connections.",
          "default": "\"/opt/consul/tls/ca\"",
          "required": false
        },
        {
          "name": "vpc_id",
          "type": "string",
          "description": "The ID of the VPC in which the nodes will be deployed.  Uses default VPC if not supplied.",
          "default": "",
          "required": true
        },
        {
          "name": "cert_file_path",
          "type": "string",
          "description": "Path to the certificate file used to verify incoming connections.",
          "default": "\"/opt/consul/tls/consul.crt.pem\"",
          "required": false
        },
        {
          "name": "num_servers",
          "type": "number",
          "description": "The number of Consul server nodes to deploy. We strongly recommend using 3 or 5.",
          "default": "3",
          "required": false
        },
        {
          "name": "enable_rpc_encryption",
          "type": "bool",
          "description": "Encrypt RPC traffic between nodes. Must also specify TLS certificates and keys.",
          "default": "true",
          "required": false
        },
        {
          "name": "ssh_key_name",
          "type": "string",
          "description": "The name of an EC2 Key Pair that can be used to SSH to the EC2 Instances in this cluster. Set to an empty string to not associate a Key Pair.",
          "default": "",
          "required": true
        },
        {
          "name": "cluster_tag_key",
          "type": "string",
          "description": "The tag the EC2 Instances will look for to automatically discover each other and form a cluster.",
          "default": "\"consul-servers\"",
          "required": false
        },
        {
          "name": "num_clients",
          "type": "number",
          "description": "The number of Consul client nodes to deploy. You typically run the Consul client alongside your apps, so set this value to however many Instances make sense for your app code.",
          "default": "3",
          "required": false
        },
        {
          "name": "cluster_name",
          "type": "string",
          "description": "What to name the Consul cluster and all of its associated resources",
          "default": "\"consul-example\"",
          "required": false
        },
        {
          "name": "consul_service_linked_role_suffix",
          "type": "string",
          "description": "Suffix for the aws_iam_service_linked_role created for the consul cluster auto scaling group to use",
          "default": "\"test-consul-service-linked-role\"",
          "required": false
        },
        {
          "name": "gossip_encryption_key",
          "type": "string",
          "description": "16 byte cryptographic key to encrypt gossip traffic between nodes. Must set 'enable_gossip_encryption' to true for this to take effect. WARNING: Setting the encryption key here means it will be stored in plain text. We're doing this here to keep the example simple, but in production you should inject it more securely, e.g. retrieving it from KMS.",
          "default": "",
          "required": true
        },
        {
          "name": "enable_gossip_encryption",
          "type": "bool",
          "description": "Encrypt gossip traffic between nodes. Must also specify encryption key.",
          "default": "true",
          "required": false
        },
        {
          "name": "spot_price",
          "type": "string",
          "description": "The maximum hourly price to pay for EC2 Spot Instances.",
          "default": "",
          "required": true
        },
        {
          "name": "ami_id",
          "type": "string",
          "description": "The ID of the AMI to run in the cluster. This should be an AMI built from the Packer template under examples/example-with-encryption/packer/consul-with-certs.json. To keep this example simple, we run the same AMI on both server and client nodes, but in real-world usage, your client nodes would also run your apps. If the default value is used, Terraform will look up the latest AMI build automatically.",
          "default": "",
          "required": true
        }
      ],
      "outputs": [
        {
          "name": "security_group_id_servers",
          "description": ""
        },
        {
          "name": "iam_role_id_servers",
          "description": ""
        },
        {
          "name": "iam_role_arn_servers",
          "description": ""
        },
        {
          "name": "num_servers",
          "description": ""
        },
        {
          "name": "iam_role_arn_clients",
          "description": ""
        },
        {
          "name": "launch_config_name_clients",
          "description": ""
        },
        {
          "name": "asg_name_clients",
          "description": ""
        },
        {
          "name": "num_clients",
          "description": ""
        },
        {
          "name": "launch_config_name_servers",
          "description": ""
        },
        {
          "name": "consul_servers_cluster_tag_key",
          "description": ""
        },
        {
          "name": "consul_servers_cluster_tag_value",
          "description": ""
        },
        {
          "name": "aws_region",
          "description": ""
        },
        {
          "name": "security_group_id_clients",
          "description": ""
        },
        {
          "name": "asg_name_servers",
          "description": ""
        },
        {
          "name": "iam_role_id_clients",
          "description": ""
        }
      ],
      "dependencies": [],
      "resources": [
        {
          "name": "consul_asg_role",
          "type": "aws_iam_service_linked_role"
        }
      ]
    }
  ],
  "providers": [
    "aws",
    "azurerm",
    "google"
  ],
  "versions": [
    "0.0.1",
    "0.0.2",
    "0.0.3",
    "0.0.4",
    "0.0.5",
    "0.1.0",
    "0.1.1",
    "0.1.2",
    "0.2.0",
    "0.2.1",
    "0.2.2",
    "0.3.0",
    "0.3.1",
    "0.3.2",
    "0.3.3",
    "0.3.4",
    "0.3.5",
    "0.3.6",
    "0.3.7",
    "0.3.8",
    "0.3.9",
    "0.3.10",
    "0.4.0",
    "0.4.1",
    "0.4.2",
    "0.4.3",
    "0.4.4",
    "0.4.5",
    "0.5.0",
    "0.6.0",
    "0.6.1",
    "0.7.0",
    "0.7.1",
    "0.7.2",
    "0.7.3"
  ]
}

 */