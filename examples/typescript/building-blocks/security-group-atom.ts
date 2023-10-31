/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import {
  SecurityGroup,
  SecurityGroupConfig,
  SecurityGroupTimeouts,
} from "./.gen/providers/aws/security-group";
import { Vpc } from "./.gen/modules/vpc";
import { Token } from "cdktf";

export interface TypedSecurityGroupIngress {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}
   */
  readonly cidrBlocks?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#description SecurityGroup#description}
   */
  readonly description?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#from_port SecurityGroup#from_port}
   */
  readonly fromPort?: number;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
   */
  readonly ipv6CidrBlocks?: Vpc;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}
   */
  readonly prefixListIds?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#protocol SecurityGroup#protocol}
   */
  readonly protocol?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}
   */
  readonly securityGroups?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#self SecurityGroup#self}
   */
  readonly selfAttribute?: boolean;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#to_port SecurityGroup#to_port}
   */
  readonly toPort?: number;
}
export interface TypedSecurityGroupEgress {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}
   */
  readonly cidrBlocks?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#description SecurityGroup#description}
   */
  readonly description?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#from_port SecurityGroup#from_port}
   */
  readonly fromPort?: number;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
   */
  readonly ipv6CidrBlocks?: Vpc;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}
   */
  readonly prefixListIds?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#protocol SecurityGroup#protocol}
   */
  readonly protocol?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}
   */
  readonly securityGroups?: string[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#self SecurityGroup#self}
   */
  readonly selfAttribute?: boolean;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#to_port SecurityGroup#to_port}
   */
  readonly toPort?: number;
}
export interface TypedSecurityGroupConfig {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#description SecurityGroup#description}
   */
  readonly description?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#egress SecurityGroup#egress}
   */
  readonly egress?: TypedSecurityGroupEgress[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#id SecurityGroup#id}
   *
   * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
   * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
   */
  readonly id?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#ingress SecurityGroup#ingress}
   */
  readonly ingress?: TypedSecurityGroupIngress[];
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#name SecurityGroup#name}
   */
  readonly name?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#name_prefix SecurityGroup#name_prefix}
   */
  readonly namePrefix?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}
   */
  readonly revokeRulesOnDelete?: boolean;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#tags SecurityGroup#tags}
   */
  readonly tags?: { [key: string]: string };
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#tags_all SecurityGroup#tags_all}
   */
  readonly tagsAll?: { [key: string]: string };
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#vpc_id SecurityGroup#vpc_id}
   */
  readonly vpcId?: Vpc;
  /**
   * timeouts block
   *
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/security_group#timeouts SecurityGroup#timeouts}
   */
  readonly timeouts?: SecurityGroupTimeouts;
}

const valueExtractorMap = {
  vpcId: (vpc: Vpc | any) => {
    return Token.asString(vpc.vpcIdOutput);
  },
  ipv6CidrBlocks: (vpc: Vpc | any) => {
    return [vpc.vpcCidrBlockOutput];
  },
};

export class TerraformSecurityGroupAtom {
  public defaultValues = {
    name: `access-db`,
    description: "Allows to access the DB",
    ingress: [
      {
        fromPort: 5432,
        toPort: 5432,
        protocol: "tcp",
        description: "Postgres access from within the VPC",
      },
      {
        fromPort: 1024,
        toPort: 65535,
        protocol: "tcp",
        description: "S3 ephemeral port traffic back to lambda in VPC",
      },
    ],
    egress: [
      {
        fromPort: 5432,
        toPort: 5432,
        protocol: "tcp",
        description: "Postgres access from within the VPC",
      },
      {
        fromPort: 443,
        toPort: 443,
        protocol: "tcp",
        ipv6CidrBlocks: ["0.0.0.0/0"],
      },
    ],
  };
  constructor(scope: Construct, id: string, config: TypedSecurityGroupConfig) {
    const resourceConfig = this._convertConfig(config);

    SecurityGroup.createResource(
      scope,
      id,
      resourceConfig as SecurityGroupConfig
    );
  }

  private _deepMerge(newConfig: any, defaultConfig: any): any {
    if (!newConfig && !defaultConfig) {
      return;
    }
    if (Array.isArray(newConfig) && Array.isArray(defaultConfig)) {
      return [
        {
          ...newConfig[0],
          ...defaultConfig[0],
        },
        this._deepMerge(newConfig.shift(), defaultConfig.shift()),
      ];
    } else {
      return {
        ...newConfig,
        ...defaultConfig,
      };
    }
  }

  private _convertConfig(typedConfig: any) {
    const userSpecifiedConfig =
      this._userSpecifiedAttributesConvert(typedConfig);
    const newConfig = this._populateDefaultValues(userSpecifiedConfig);
    return newConfig;
  }

  private _userSpecifiedAttributesConvert(typedConfig: any) {
    if (!typedConfig) {
      return;
    }
    type NewConfig = { [key: string]: any };
    let newConfig: NewConfig = {};
    for (const key in typedConfig) {
      type TypedConfigKey = keyof typeof typedConfig;
      const typeConfigKey = key as TypedConfigKey;
      if (key in valueExtractorMap) {
        type ValueExtractorKey = keyof typeof valueExtractorMap;
        const valueExtractorKey = key as ValueExtractorKey;
        newConfig[key] = valueExtractorMap[valueExtractorKey](
          typedConfig[typeConfigKey]
        );
      }
      // need to deal with the case that its an array as well
      else if (typeof typedConfig[key] === "object") {
        if (Array.isArray(typedConfig[key])) {
          const attributeArray = [];
          for (const attribute of typedConfig[key]) {
            attributeArray.push(
              this._userSpecifiedAttributesConvert(attribute)
            );
          }
          newConfig[key] = attributeArray;
        } else {
          newConfig[key] = this._userSpecifiedAttributesConvert(
            typedConfig[key]
          );
        }
      } else {
        newConfig[key] = typedConfig[key];
      }
    }
    return newConfig;
  }
  // still isn't working correctly, first element of array is repeated
  private _populateDefaultValues(userSpecifiedConfig: any) {
    type NewConfig = { [key: string]: any };
    let newConfig: NewConfig = userSpecifiedConfig;
    for (const key in this.defaultValues) {
      type DefaultValueKey = keyof typeof this.defaultValues;
      const defaultValueKey = key as DefaultValueKey;
      if (!newConfig.hasOwnProperty(key)) {
        newConfig[key] = this.defaultValues[defaultValueKey];
      } else if (
        newConfig.hasOwnProperty(key) &&
        typeof newConfig[key] === "object"
      ) {
        newConfig[key] = this._deepMerge(
          newConfig[key],
          this.defaultValues[defaultValueKey]
        );
      }
    }
    return newConfig;
  }
}
