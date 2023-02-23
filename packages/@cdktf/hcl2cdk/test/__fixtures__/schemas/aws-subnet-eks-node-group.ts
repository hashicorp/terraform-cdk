export default `
{
  "format_version": "1.0",
  "provider_schemas": {
    "registry.terraform.io/hashicorp/aws": {
      "provider": {},
      "resource_schemas": {
        "aws_subnet": {
          "version": 1,
          "block": {
            "attributes": {
              "arn": {
                "type": "string",
                "description_kind": "plain",
                "computed": true
              },
              "assign_ipv6_address_on_creation": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "availability_zone": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "availability_zone_id": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "cidr_block": {
                "type": "string",
                "description_kind": "plain",
                "optional": true
              },
              "customer_owned_ipv4_pool": {
                "type": "string",
                "description_kind": "plain",
                "optional": true
              },
              "enable_dns64": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "enable_resource_name_dns_a_record_on_launch": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "enable_resource_name_dns_aaaa_record_on_launch": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "id": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "ipv6_cidr_block": {
                "type": "string",
                "description_kind": "plain",
                "optional": true
              },
              "ipv6_cidr_block_association_id": {
                "type": "string",
                "description_kind": "plain",
                "computed": true
              },
              "ipv6_native": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "map_customer_owned_ip_on_launch": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "map_public_ip_on_launch": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "outpost_arn": {
                "type": "string",
                "description_kind": "plain",
                "optional": true
              },
              "owner_id": {
                "type": "string",
                "description_kind": "plain",
                "computed": true
              },
              "private_dns_hostname_type_on_launch": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "tags": {
                "type": [
                  "map",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true
              },
              "tags_all": {
                "type": [
                  "map",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "vpc_id": {
                "type": "string",
                "description_kind": "plain",
                "required": true
              }
            },
            "block_types": {
              "timeouts": {
                "nesting_mode": "single",
                "block": {
                  "attributes": {
                    "create": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    },
                    "delete": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                }
              }
            },
            "description_kind": "plain"
          }
        },
        "aws_eks_node_group": {
          "version": 0,
          "block": {
            "attributes": {
              "ami_type": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "arn": {
                "type": "string",
                "description_kind": "plain",
                "computed": true
              },
              "capacity_type": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "cluster_name": {
                "type": "string",
                "description_kind": "plain",
                "required": true
              },
              "disk_size": {
                "type": "number",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "force_update_version": {
                "type": "bool",
                "description_kind": "plain",
                "optional": true
              },
              "id": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "instance_types": {
                "type": [
                  "list",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "labels": {
                "type": [
                  "map",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true
              },
              "node_group_name": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "node_group_name_prefix": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "node_role_arn": {
                "type": "string",
                "description_kind": "plain",
                "required": true
              },
              "release_version": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "resources": {
                "type": [
                  "list",
                  [
                    "object",
                    {
                      "autoscaling_groups": [
                        "list",
                        [
                          "object",
                          {
                            "name": "string"
                          }
                        ]
                      ],
                      "remote_access_security_group_id": "string"
                    }
                  ]
                ],
                "description_kind": "plain",
                "computed": true
              },
              "status": {
                "type": "string",
                "description_kind": "plain",
                "computed": true
              },
              "subnet_ids": {
                "type": [
                  "set",
                  "string"
                ],
                "description_kind": "plain",
                "required": true
              },
              "tags": {
                "type": [
                  "map",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true
              },
              "tags_all": {
                "type": [
                  "map",
                  "string"
                ],
                "description_kind": "plain",
                "optional": true,
                "computed": true
              },
              "version": {
                "type": "string",
                "description_kind": "plain",
                "optional": true,
                "computed": true
              }
            },
            "block_types": {
              "launch_template": {
                "nesting_mode": "list",
                "block": {
                  "attributes": {
                    "id": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true,
                      "computed": true
                    },
                    "name": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true,
                      "computed": true
                    },
                    "version": {
                      "type": "string",
                      "description_kind": "plain",
                      "required": true
                    }
                  },
                  "description_kind": "plain"
                },
                "max_items": 1
              },
              "remote_access": {
                "nesting_mode": "list",
                "block": {
                  "attributes": {
                    "ec2_ssh_key": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    },
                    "source_security_group_ids": {
                      "type": [
                        "set",
                        "string"
                      ],
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                },
                "max_items": 1
              },
              "scaling_config": {
                "nesting_mode": "list",
                "block": {
                  "attributes": {
                    "desired_size": {
                      "type": "number",
                      "description_kind": "plain",
                      "required": true
                    },
                    "max_size": {
                      "type": "number",
                      "description_kind": "plain",
                      "required": true
                    },
                    "min_size": {
                      "type": "number",
                      "description_kind": "plain",
                      "required": true
                    }
                  },
                  "description_kind": "plain"
                },
                "min_items": 1,
                "max_items": 1
              },
              "taint": {
                "nesting_mode": "set",
                "block": {
                  "attributes": {
                    "effect": {
                      "type": "string",
                      "description_kind": "plain",
                      "required": true
                    },
                    "key": {
                      "type": "string",
                      "description_kind": "plain",
                      "required": true
                    },
                    "value": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                },
                "max_items": 50
              },
              "timeouts": {
                "nesting_mode": "single",
                "block": {
                  "attributes": {
                    "create": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    },
                    "delete": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    },
                    "update": {
                      "type": "string",
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                }
              },
              "update_config": {
                "nesting_mode": "list",
                "block": {
                  "attributes": {
                    "max_unavailable": {
                      "type": "number",
                      "description_kind": "plain",
                      "optional": true
                    },
                    "max_unavailable_percentage": {
                      "type": "number",
                      "description_kind": "plain",
                      "optional": true
                    }
                  },
                  "description_kind": "plain"
                },
                "max_items": 1
              }
            },
            "description_kind": "plain"
          }
        }
      },
      "data_source_schemas": {}
    }
  }
}

`;
