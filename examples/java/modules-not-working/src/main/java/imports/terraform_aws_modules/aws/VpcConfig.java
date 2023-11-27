package imports.terraform_aws_modules.aws;

@javax.annotation.Generated(value = "jsii-pacmak/1.91.0 (build 1b1f239)", date = "2023-11-27T19:56:36.298Z")
@software.amazon.jsii.Jsii(module = imports.terraform_aws_modules.aws.$Module.class, fqn = "vpc.VpcConfig")
@software.amazon.jsii.Jsii.Proxy(VpcConfig.Jsii$Proxy.class)
public interface VpcConfig extends software.amazon.jsii.JsiiSerializable, com.hashicorp.cdktf.TerraformModuleUserConfig {

    /**
     * The Autonomous System Number (ASN) for the Amazon side of the gateway.
     * <p>
     * By default the virtual private gateway is created with the current default Amazon ASN
     * 64512
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAmazonSideAsn() {
        return null;
    }

    /**
     * A list of availability zones names or ids in the region.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAzs() {
        return null;
    }

    /**
     * (Optional) The IPv4 CIDR block for the VPC.
     * <p>
     * CIDR can be explicitly set or it can be derived from IPAM using <code>ipv4_netmask_length</code> &amp; <code>ipv4_ipam_pool_id</code>
     * 10.0.0.0/16
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCidr() {
        return null;
    }

    /**
     * Controls if an internet gateway route for public database access should be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseInternetGatewayRoute() {
        return null;
    }

    /**
     * Controls if a nat gateway route should be created to give internet access to the database subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseNatGatewayRoute() {
        return null;
    }

    /**
     * Controls if database subnet group should be created (n.b. database_subnets must also be set) true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseSubnetGroup() {
        return null;
    }

    /**
     * Controls if separate route table for database should be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseSubnetRouteTable() {
        return null;
    }

    /**
     * Controls if an Egress Only Internet Gateway is created and its related routes true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateEgressOnlyIgw() {
        return null;
    }

    /**
     * Controls if elasticache subnet group should be created true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateElasticacheSubnetGroup() {
        return null;
    }

    /**
     * Controls if separate route table for elasticache should be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateElasticacheSubnetRouteTable() {
        return null;
    }

    /**
     * Whether to create IAM role for VPC Flow Logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateFlowLogCloudwatchIamRole() {
        return null;
    }

    /**
     * Whether to create CloudWatch log group for VPC Flow Logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateFlowLogCloudwatchLogGroup() {
        return null;
    }

    /**
     * Controls if an Internet Gateway is created for public subnets and the related routes that connect them true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateIgw() {
        return null;
    }

    /**
     * Controls if redshift subnet group should be created true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRedshiftSubnetGroup() {
        return null;
    }

    /**
     * Controls if separate route table for redshift should be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRedshiftSubnetRouteTable() {
        return null;
    }

    /**
     * Controls if VPC should be created (it affects almost all resources) true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateVpc() {
        return null;
    }

    /**
     * Maps of Customer Gateway's attributes (BGP ASN and Gateway's Internet-routable external IP address) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> getCustomerGateways() {
        return null;
    }

    /**
     * Additional tags for the Customer Gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getCustomerGatewayTags() {
        return null;
    }

    /**
     * The customer owned IPv4 address pool.
     * <p>
     * Typically used with the <code>map_customer_owned_ip_on_launch</code> argument. The <code>outpost_arn</code> argument must be specified when configured
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCustomerOwnedIpv4Pool() {
        return null;
    }

    /**
     * Additional tags for the database subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for database subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Database subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseInboundAclRules() {
        return null;
    }

    /**
     * Database subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the database route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Name of database subnet group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetGroupName() {
        return null;
    }

    /**
     * Additional tags for the database subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetGroupTags() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 database subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on database subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of database subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnets() {
        return null;
    }

    /**
     * Suffix to append to database subnets name db.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the database subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetTags() {
        return null;
    }

    /**
     * List of maps of egress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclEgress() {
        return null;
    }

    /**
     * List of maps of ingress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclIngress() {
        return null;
    }

    /**
     * Name to be used on the Default Network ACL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultNetworkAclName() {
        return null;
    }

    /**
     * Additional tags for the Default Network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultNetworkAclTags() {
        return null;
    }

    /**
     * Name to be used on the default route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultRouteTableName() {
        return null;
    }

    /**
     * List of virtual gateways for propagation.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDefaultRouteTablePropagatingVgws() {
        return null;
    }

    /**
     * Configuration block of routes. See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table#route.
     * <p>
     * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultRouteTableRoutes() {
        return null;
    }

    /**
     * Additional tags for the default route table The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultRouteTableTags() {
        return null;
    }

    /**
     * List of maps of egress rules to set on the default security group.
     * <p>
     * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupEgress() {
        return null;
    }

    /**
     * List of maps of ingress rules to set on the default security group.
     * <p>
     * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupIngress() {
        return null;
    }

    /**
     * Name to be used on the default security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultSecurityGroupName() {
        return null;
    }

    /**
     * Additional tags for the default security group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultSecurityGroupTags() {
        return null;
    }

    /**
     * Should be true to enable DNS hostnames in the Default VPC true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDefaultVpcEnableDnsHostnames() {
        return null;
    }

    /**
     * Should be true to enable DNS support in the Default VPC true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDefaultVpcEnableDnsSupport() {
        return null;
    }

    /**
     * Name to be used on the Default VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultVpcName() {
        return null;
    }

    /**
     * Additional tags for the Default VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultVpcTags() {
        return null;
    }

    /**
     * Specifies DNS name for DHCP options set (requires enable_dhcp_options set to true).
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDhcpOptionsDomainName() {
        return null;
    }

    /**
     * Specify a list of DNS server addresses for DHCP options set, default to AWS provided (requires enable_dhcp_options set to true) AmazonProvidedDNS.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsDomainNameServers() {
        return null;
    }

    /**
     * Specify a list of netbios servers for DHCP options set (requires enable_dhcp_options set to true).
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsNetbiosNameServers() {
        return null;
    }

    /**
     * Specify netbios node_type for DHCP options set (requires enable_dhcp_options set to true).
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDhcpOptionsNetbiosNodeType() {
        return null;
    }

    /**
     * Specify a list of NTP servers for DHCP options set (requires enable_dhcp_options set to true).
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsNtpServers() {
        return null;
    }

    /**
     * Additional tags for the DHCP option set (requires enable_dhcp_options set to true) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDhcpOptionsTags() {
        return null;
    }

    /**
     * Additional tags for the elasticache subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for elasticache subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Elasticache subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheInboundAclRules() {
        return null;
    }

    /**
     * Elasticache subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the elasticache route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Name of elasticache subnet group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetGroupName() {
        return null;
    }

    /**
     * Additional tags for the elasticache subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetGroupTags() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 elasticache subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on elasticache subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of elasticache subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnets() {
        return null;
    }

    /**
     * Suffix to append to elasticache subnets name elasticache.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the elasticache subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetTags() {
        return null;
    }

    /**
     * Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDhcpOptions() {
        return null;
    }

    /**
     * Should be true to enable DNS hostnames in the VPC true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDnsHostnames() {
        return null;
    }

    /**
     * Should be true to enable DNS support in the VPC true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDnsSupport() {
        return null;
    }

    /**
     * Whether or not to enable VPC Flow Logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableFlowLog() {
        return null;
    }

    /**
     * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
     * <p>
     * You cannot specify the range of IP addresses, or the size of the CIDR block
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableIpv6() {
        return null;
    }

    /**
     * Should be true if you want to provision NAT Gateways for each of your private networks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableNatGateway() {
        return null;
    }

    /**
     * Determines whether network address usage metrics are enabled for the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableNetworkAddressUsageMetrics() {
        return null;
    }

    /**
     * Controls if redshift should have public routing table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnablePublicRedshift() {
        return null;
    }

    /**
     * Should be true if you want to create a new VPN Gateway resource and attach it to the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableVpnGateway() {
        return null;
    }

    /**
     * List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips).
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExternalNatIpIds() {
        return null;
    }

    /**
     * List of EIPs to be used for <code>nat_public_ips</code> output (used in combination with reuse_nat_ips and external_nat_ip_ids).
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExternalNatIps() {
        return null;
    }

    /**
     * The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group.
     * <p>
     * When flow_log_destination_arn is set to ARN of Cloudwatch Logs, this argument needs to be provided
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchIamRoleArn() {
        return null;
    }

    /**
     * The ARN of the KMS Key to use when encrypting log data for VPC flow logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupKmsKeyId() {
        return null;
    }

    /**
     * Specifies the name prefix of CloudWatch Log Group for VPC flow logs /aws/vpc-flow-log/.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupNamePrefix() {
        return null;
    }

    /**
     * Specifies the name suffix of CloudWatch Log Group for VPC flow logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupNameSuffix() {
        return null;
    }

    /**
     * Specifies the number of days you want to retain log events in the specified log group for VPC flow logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getFlowLogCloudwatchLogGroupRetentionInDays() {
        return null;
    }

    /**
     * The ARN of the CloudWatch log group or S3 bucket where VPC Flow Logs will be pushed.
     * <p>
     * If this ARN is a S3 bucket the appropriate permissions need to be set on that bucket's policy. When create_flow_log_cloudwatch_log_group is set to false this argument must be provided
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogDestinationArn() {
        return null;
    }

    /**
     * Type of flow log destination.
     * <p>
     * Can be s3 or cloud-watch-logs
     * cloud-watch-logs
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogDestinationType() {
        return null;
    }

    /**
     * (Optional) The format for the flow log.
     * <p>
     * Valid values: <code>plain-text</code>, <code>parquet</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogFileFormat() {
        return null;
    }

    /**
     * (Optional) Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getFlowLogHiveCompatiblePartitions() {
        return null;
    }

    /**
     * The fields to include in the flow log record, in the order in which they should appear.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogLogFormat() {
        return null;
    }

    /**
     * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
     * <p>
     * Valid Values: <code>60</code> seconds or <code>600</code> seconds
     * 600
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getFlowLogMaxAggregationInterval() {
        return null;
    }

    /**
     * (Optional) Indicates whether to partition the flow log per hour.
     * <p>
     * This reduces the cost and response time for queries
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getFlowLogPerHourPartition() {
        return null;
    }

    /**
     * The type of traffic to capture.
     * <p>
     * Valid values: ACCEPT, REJECT, ALL
     * ALL
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFlowLogTrafficType() {
        return null;
    }

    /**
     * Additional tags for the internet gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIgwTags() {
        return null;
    }

    /**
     * A tenancy option for instances launched into the VPC default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceTenancy() {
        return null;
    }

    /**
     * Additional tags for the intra subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for intra subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Intra subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraInboundAclRules() {
        return null;
    }

    /**
     * Intra subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the intra route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 intra subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on intra subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIntraSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of intra subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnets() {
        return null;
    }

    /**
     * Suffix to append to intra subnets name intra.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIntraSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the intra subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraSubnetTags() {
        return null;
    }

    /**
     * (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv4IpamPoolId() {
        return null;
    }

    /**
     * (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC.
     * <p>
     * Requires specifying a ipv4_ipam_pool_id
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIpv4NetmaskLength() {
        return null;
    }

    /**
     * (Optional) IPv6 CIDR block to request from an IPAM Pool.
     * <p>
     * Can be set explicitly or derived from IPAM using <code>ipv6_netmask_length</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6Cidr() {
        return null;
    }

    /**
     * By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC.
     * <p>
     * This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6CidrBlockNetworkBorderGroup() {
        return null;
    }

    /**
     * (Optional) IPAM Pool ID for a IPv6 pool.
     * <p>
     * Conflicts with <code>assign_generated_ipv6_cidr_block</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6IpamPoolId() {
        return null;
    }

    /**
     * (Optional) Netmask length to request from IPAM Pool.
     * <p>
     * Conflicts with <code>ipv6_cidr_block</code>. This can be omitted if IPAM pool as a <code>allocation_default_netmask_length</code> set. Valid values: <code>56</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIpv6NetmaskLength() {
        return null;
    }

    /**
     * Should be true to adopt and manage Default Network ACL true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultNetworkAcl() {
        return null;
    }

    /**
     * Should be true to manage default route table true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultRouteTable() {
        return null;
    }

    /**
     * Should be true to adopt and manage default security group true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultSecurityGroup() {
        return null;
    }

    /**
     * Should be true to adopt and manage Default VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultVpc() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the subnet should be assigned a customer owned IP address.
     * <p>
     * The <code>customer_owned_ipv4_pool</code> and <code>outpost_arn</code> arguments must be specified when set to <code>true</code>. Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getMapCustomerOwnedIpOnLaunch() {
        return null;
    }

    /**
     * Specify true to indicate that instances launched into the subnet should be assigned a public IP address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getMapPublicIpOnLaunch() {
        return null;
    }

    /**
     * Name to be used on all the resources as identifier.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     * Additional tags for the NAT EIP The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getNatEipTags() {
        return null;
    }

    /**
     * Used to pass a custom destination route for private NAT Gateway.
     * <p>
     * If not specified, the default 0.0.0.0/0 is used as a destination route
     * 0.0.0.0/0
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNatGatewayDestinationCidrBlock() {
        return null;
    }

    /**
     * Additional tags for the NAT gateways The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getNatGatewayTags() {
        return null;
    }

    /**
     * Should be true if you want only one NAT Gateway per availability zone.
     * <p>
     * Requires <code>var.azs</code> to be set, and the number of <code>public_subnets</code> created to be greater than or equal to the number of availability zones specified in <code>var.azs</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOneNatGatewayPerAz() {
        return null;
    }

    /**
     * Additional tags for the outpost subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOutpostAclTags() {
        return null;
    }

    /**
     * ARN of Outpost you want to create a subnet in.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutpostArn() {
        return null;
    }

    /**
     * AZ where Outpost is anchored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutpostAz() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for outpost subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Outpost subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostInboundAclRules() {
        return null;
    }

    /**
     * Outpost subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostOutboundAclRules() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 outpost subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on outpost subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutpostSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of outpost subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnets() {
        return null;
    }

    /**
     * Suffix to append to outpost subnets name outpost.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutpostSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the outpost subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOutpostSubnetTags() {
        return null;
    }

    /**
     * Additional tags for the private subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for private subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Private subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateInboundAclRules() {
        return null;
    }

    /**
     * Private subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the private route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 private subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on private subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of private subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnets() {
        return null;
    }

    /**
     * Suffix to append to private subnets name private.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the private subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateSubnetTags() {
        return null;
    }

    /**
     * Additional tags for the private subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPrivateSubnetTagsPerAz() {
        return null;
    }

    /**
     * Should be true if you want route table propagation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagateIntraRouteTablesVgw() {
        return null;
    }

    /**
     * Should be true if you want route table propagation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagatePrivateRouteTablesVgw() {
        return null;
    }

    /**
     * Should be true if you want route table propagation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagatePublicRouteTablesVgw() {
        return null;
    }

    /**
     * Additional tags for the public subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for public subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Public subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicInboundAclRules() {
        return null;
    }

    /**
     * Public subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the public route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 public subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on public subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPublicSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of public subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnets() {
        return null;
    }

    /**
     * Suffix to append to public subnets name public.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPublicSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the public subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicSubnetTags() {
        return null;
    }

    /**
     * Additional tags for the public subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPublicSubnetTagsPerAz() {
        return null;
    }

    /**
     * Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?
     * <p>
     * More info: https://en.wikipedia.org/wiki/Putin_khuylo!
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPutinKhuylo() {
        return null;
    }

    /**
     * Additional tags for the redshift subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftAclTags() {
        return null;
    }

    /**
     * Whether to use dedicated network ACL (not default) and custom rules for redshift subnets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftDedicatedNetworkAcl() {
        return null;
    }

    /**
     * Redshift subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftInboundAclRules() {
        return null;
    }

    /**
     * Redshift subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftOutboundAclRules() {
        return null;
    }

    /**
     * Additional tags for the redshift route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftRouteTableTags() {
        return null;
    }

    /**
     * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
     * <p>
     * Default is <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetAssignIpv6AddressOnCreation() {
        return null;
    }

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableDns64() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     * <p>
     * Default: <code>true</code>
     * true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return null;
    }

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch() {
        return null;
    }

    /**
     * Name of redshift subnet group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetGroupName() {
        return null;
    }

    /**
     * Additional tags for the redshift subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetGroupTags() {
        return null;
    }

    /**
     * Indicates whether to create an IPv6-only subnet.
     * <p>
     * Default: <code>false</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetIpv6Native() {
        return null;
    }

    /**
     * Assigns IPv6 redshift subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
     * <p>
     * Must be of equal length to the corresponding IPv4 subnet list
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnetIpv6Prefixes() {
        return null;
    }

    /**
     * Explicit values to use in the Name tag on redshift subnets.
     * <p>
     * If empty, Name tags are generated
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnetNames() {
        return null;
    }

    /**
     * The type of hostnames to assign to instances in the subnet at launch.
     * <p>
     * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch() {
        return null;
    }

    /**
     * A list of redshift subnets inside the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnets() {
        return null;
    }

    /**
     * Suffix to append to redshift subnets name redshift.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetSuffix() {
        return null;
    }

    /**
     * Additional tags for the redshift subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetTags() {
        return null;
    }

    /**
     * Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getReuseNatIps() {
        return null;
    }

    /**
     * List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSecondaryCidrBlocks() {
        return null;
    }

    /**
     * Should be true if you want to provision a single shared NAT Gateway across all of your private networks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getSingleNatGateway() {
        return null;
    }

    /**
     * A map of tags to add to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTags() {
        return null;
    }

    /**
     * Determines whether IPAM pool is used for CIDR allocation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getUseIpamPool() {
        return null;
    }

    /**
     * The ARN of the Permissions Boundary for the VPC Flow Log IAM Role.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcFlowLogPermissionsBoundary() {
        return null;
    }

    /**
     * Additional tags for the VPC Flow Logs The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpcFlowLogTags() {
        return null;
    }

    /**
     * Additional tags for the VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpcTags() {
        return null;
    }

    /**
     * The Availability Zone for the VPN Gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpnGatewayAz() {
        return null;
    }

    /**
     * ID of VPN Gateway to attach to the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpnGatewayId() {
        return null;
    }

    /**
     * Additional tags for the VPN gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpnGatewayTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcConfig}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcConfig}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcConfig> {
        java.lang.String amazonSideAsn;
        java.util.List<java.lang.String> azs;
        java.lang.String cidr;
        java.lang.Boolean createDatabaseInternetGatewayRoute;
        java.lang.Boolean createDatabaseNatGatewayRoute;
        java.lang.Boolean createDatabaseSubnetGroup;
        java.lang.Boolean createDatabaseSubnetRouteTable;
        java.lang.Boolean createEgressOnlyIgw;
        java.lang.Boolean createElasticacheSubnetGroup;
        java.lang.Boolean createElasticacheSubnetRouteTable;
        java.lang.Boolean createFlowLogCloudwatchIamRole;
        java.lang.Boolean createFlowLogCloudwatchLogGroup;
        java.lang.Boolean createIgw;
        java.lang.Boolean createRedshiftSubnetGroup;
        java.lang.Boolean createRedshiftSubnetRouteTable;
        java.lang.Boolean createVpc;
        java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> customerGateways;
        java.util.Map<java.lang.String, java.lang.String> customerGatewayTags;
        java.lang.String customerOwnedIpv4Pool;
        java.util.Map<java.lang.String, java.lang.String> databaseAclTags;
        java.lang.Boolean databaseDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> databaseInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> databaseOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> databaseRouteTableTags;
        java.lang.Boolean databaseSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean databaseSubnetEnableDns64;
        java.lang.Boolean databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean databaseSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.String databaseSubnetGroupName;
        java.util.Map<java.lang.String, java.lang.String> databaseSubnetGroupTags;
        java.lang.Boolean databaseSubnetIpv6Native;
        java.util.List<java.lang.String> databaseSubnetIpv6Prefixes;
        java.util.List<java.lang.String> databaseSubnetNames;
        java.lang.String databaseSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> databaseSubnets;
        java.lang.String databaseSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> databaseSubnetTags;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclEgress;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclIngress;
        java.lang.String defaultNetworkAclName;
        java.util.Map<java.lang.String, java.lang.String> defaultNetworkAclTags;
        java.lang.String defaultRouteTableName;
        java.util.List<java.lang.String> defaultRouteTablePropagatingVgws;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultRouteTableRoutes;
        java.util.Map<java.lang.String, java.lang.String> defaultRouteTableTags;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupEgress;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupIngress;
        java.lang.String defaultSecurityGroupName;
        java.util.Map<java.lang.String, java.lang.String> defaultSecurityGroupTags;
        java.lang.Boolean defaultVpcEnableDnsHostnames;
        java.lang.Boolean defaultVpcEnableDnsSupport;
        java.lang.String defaultVpcName;
        java.util.Map<java.lang.String, java.lang.String> defaultVpcTags;
        java.lang.String dhcpOptionsDomainName;
        java.util.List<java.lang.String> dhcpOptionsDomainNameServers;
        java.util.List<java.lang.String> dhcpOptionsNetbiosNameServers;
        java.lang.String dhcpOptionsNetbiosNodeType;
        java.util.List<java.lang.String> dhcpOptionsNtpServers;
        java.util.Map<java.lang.String, java.lang.String> dhcpOptionsTags;
        java.util.Map<java.lang.String, java.lang.String> elasticacheAclTags;
        java.lang.Boolean elasticacheDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> elasticacheInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> elasticacheOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> elasticacheRouteTableTags;
        java.lang.Boolean elasticacheSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean elasticacheSubnetEnableDns64;
        java.lang.Boolean elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean elasticacheSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.String elasticacheSubnetGroupName;
        java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetGroupTags;
        java.lang.Boolean elasticacheSubnetIpv6Native;
        java.util.List<java.lang.String> elasticacheSubnetIpv6Prefixes;
        java.util.List<java.lang.String> elasticacheSubnetNames;
        java.lang.String elasticacheSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> elasticacheSubnets;
        java.lang.String elasticacheSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetTags;
        java.lang.Boolean enableDhcpOptions;
        java.lang.Boolean enableDnsHostnames;
        java.lang.Boolean enableDnsSupport;
        java.lang.Boolean enableFlowLog;
        java.lang.Boolean enableIpv6;
        java.lang.Boolean enableNatGateway;
        java.lang.Boolean enableNetworkAddressUsageMetrics;
        java.lang.Boolean enablePublicRedshift;
        java.lang.Boolean enableVpnGateway;
        java.util.List<java.lang.String> externalNatIpIds;
        java.util.List<java.lang.String> externalNatIps;
        java.lang.String flowLogCloudwatchIamRoleArn;
        java.lang.String flowLogCloudwatchLogGroupKmsKeyId;
        java.lang.String flowLogCloudwatchLogGroupNamePrefix;
        java.lang.String flowLogCloudwatchLogGroupNameSuffix;
        java.lang.Number flowLogCloudwatchLogGroupRetentionInDays;
        java.lang.String flowLogDestinationArn;
        java.lang.String flowLogDestinationType;
        java.lang.String flowLogFileFormat;
        java.lang.Boolean flowLogHiveCompatiblePartitions;
        java.lang.String flowLogLogFormat;
        java.lang.Number flowLogMaxAggregationInterval;
        java.lang.Boolean flowLogPerHourPartition;
        java.lang.String flowLogTrafficType;
        java.util.Map<java.lang.String, java.lang.String> igwTags;
        java.lang.String instanceTenancy;
        java.util.Map<java.lang.String, java.lang.String> intraAclTags;
        java.lang.Boolean intraDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> intraInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> intraOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> intraRouteTableTags;
        java.lang.Boolean intraSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean intraSubnetEnableDns64;
        java.lang.Boolean intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean intraSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.Boolean intraSubnetIpv6Native;
        java.util.List<java.lang.String> intraSubnetIpv6Prefixes;
        java.util.List<java.lang.String> intraSubnetNames;
        java.lang.String intraSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> intraSubnets;
        java.lang.String intraSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> intraSubnetTags;
        java.lang.String ipv4IpamPoolId;
        java.lang.Number ipv4NetmaskLength;
        java.lang.String ipv6Cidr;
        java.lang.String ipv6CidrBlockNetworkBorderGroup;
        java.lang.String ipv6IpamPoolId;
        java.lang.Number ipv6NetmaskLength;
        java.lang.Boolean manageDefaultNetworkAcl;
        java.lang.Boolean manageDefaultRouteTable;
        java.lang.Boolean manageDefaultSecurityGroup;
        java.lang.Boolean manageDefaultVpc;
        java.lang.Boolean mapCustomerOwnedIpOnLaunch;
        java.lang.Boolean mapPublicIpOnLaunch;
        java.lang.String name;
        java.util.Map<java.lang.String, java.lang.String> natEipTags;
        java.lang.String natGatewayDestinationCidrBlock;
        java.util.Map<java.lang.String, java.lang.String> natGatewayTags;
        java.lang.Boolean oneNatGatewayPerAz;
        java.util.Map<java.lang.String, java.lang.String> outpostAclTags;
        java.lang.String outpostArn;
        java.lang.String outpostAz;
        java.lang.Boolean outpostDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> outpostInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> outpostOutboundAclRules;
        java.lang.Boolean outpostSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean outpostSubnetEnableDns64;
        java.lang.Boolean outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean outpostSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.Boolean outpostSubnetIpv6Native;
        java.util.List<java.lang.String> outpostSubnetIpv6Prefixes;
        java.util.List<java.lang.String> outpostSubnetNames;
        java.lang.String outpostSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> outpostSubnets;
        java.lang.String outpostSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> outpostSubnetTags;
        java.util.Map<java.lang.String, java.lang.String> privateAclTags;
        java.lang.Boolean privateDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> privateInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> privateOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> privateRouteTableTags;
        java.lang.Boolean privateSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean privateSubnetEnableDns64;
        java.lang.Boolean privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean privateSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.Boolean privateSubnetIpv6Native;
        java.util.List<java.lang.String> privateSubnetIpv6Prefixes;
        java.util.List<java.lang.String> privateSubnetNames;
        java.lang.String privateSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> privateSubnets;
        java.lang.String privateSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> privateSubnetTags;
        java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> privateSubnetTagsPerAz;
        java.lang.Boolean propagateIntraRouteTablesVgw;
        java.lang.Boolean propagatePrivateRouteTablesVgw;
        java.lang.Boolean propagatePublicRouteTablesVgw;
        java.util.Map<java.lang.String, java.lang.String> publicAclTags;
        java.lang.Boolean publicDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> publicInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> publicOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> publicRouteTableTags;
        java.lang.Boolean publicSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean publicSubnetEnableDns64;
        java.lang.Boolean publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean publicSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.Boolean publicSubnetIpv6Native;
        java.util.List<java.lang.String> publicSubnetIpv6Prefixes;
        java.util.List<java.lang.String> publicSubnetNames;
        java.lang.String publicSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> publicSubnets;
        java.lang.String publicSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> publicSubnetTags;
        java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> publicSubnetTagsPerAz;
        java.lang.Boolean putinKhuylo;
        java.util.Map<java.lang.String, java.lang.String> redshiftAclTags;
        java.lang.Boolean redshiftDedicatedNetworkAcl;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> redshiftInboundAclRules;
        java.util.List<java.util.Map<java.lang.String, java.lang.String>> redshiftOutboundAclRules;
        java.util.Map<java.lang.String, java.lang.String> redshiftRouteTableTags;
        java.lang.Boolean redshiftSubnetAssignIpv6AddressOnCreation;
        java.lang.Boolean redshiftSubnetEnableDns64;
        java.lang.Boolean redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        java.lang.Boolean redshiftSubnetEnableResourceNameDnsARecordOnLaunch;
        java.lang.String redshiftSubnetGroupName;
        java.util.Map<java.lang.String, java.lang.String> redshiftSubnetGroupTags;
        java.lang.Boolean redshiftSubnetIpv6Native;
        java.util.List<java.lang.String> redshiftSubnetIpv6Prefixes;
        java.util.List<java.lang.String> redshiftSubnetNames;
        java.lang.String redshiftSubnetPrivateDnsHostnameTypeOnLaunch;
        java.util.List<java.lang.String> redshiftSubnets;
        java.lang.String redshiftSubnetSuffix;
        java.util.Map<java.lang.String, java.lang.String> redshiftSubnetTags;
        java.lang.Boolean reuseNatIps;
        java.util.List<java.lang.String> secondaryCidrBlocks;
        java.lang.Boolean singleNatGateway;
        java.util.Map<java.lang.String, java.lang.String> tags;
        java.lang.Boolean useIpamPool;
        java.lang.String vpcFlowLogPermissionsBoundary;
        java.util.Map<java.lang.String, java.lang.String> vpcFlowLogTags;
        java.util.Map<java.lang.String, java.lang.String> vpcTags;
        java.lang.String vpnGatewayAz;
        java.lang.String vpnGatewayId;
        java.util.Map<java.lang.String, java.lang.String> vpnGatewayTags;
        java.util.List<com.hashicorp.cdktf.ITerraformDependable> dependsOn;
        com.hashicorp.cdktf.ITerraformIterator forEach;
        java.util.List<java.lang.Object> providers;
        java.lang.Boolean skipAssetCreationFromLocalModules;

        /**
         * Sets the value of {@link VpcConfig#getAmazonSideAsn}
         * @param amazonSideAsn The Autonomous System Number (ASN) for the Amazon side of the gateway.
         *                      By default the virtual private gateway is created with the current default Amazon ASN
         *                      64512
         * @return {@code this}
         */
        public Builder amazonSideAsn(java.lang.String amazonSideAsn) {
            this.amazonSideAsn = amazonSideAsn;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getAzs}
         * @param azs A list of availability zones names or ids in the region.
         * @return {@code this}
         */
        public Builder azs(java.util.List<java.lang.String> azs) {
            this.azs = azs;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCidr}
         * @param cidr (Optional) The IPv4 CIDR block for the VPC.
         *             CIDR can be explicitly set or it can be derived from IPAM using <code>ipv4_netmask_length</code> &amp; <code>ipv4_ipam_pool_id</code>
         *             10.0.0.0/16
         * @return {@code this}
         */
        public Builder cidr(java.lang.String cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateDatabaseInternetGatewayRoute}
         * @param createDatabaseInternetGatewayRoute Controls if an internet gateway route for public database access should be created.
         * @return {@code this}
         */
        public Builder createDatabaseInternetGatewayRoute(java.lang.Boolean createDatabaseInternetGatewayRoute) {
            this.createDatabaseInternetGatewayRoute = createDatabaseInternetGatewayRoute;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateDatabaseNatGatewayRoute}
         * @param createDatabaseNatGatewayRoute Controls if a nat gateway route should be created to give internet access to the database subnets.
         * @return {@code this}
         */
        public Builder createDatabaseNatGatewayRoute(java.lang.Boolean createDatabaseNatGatewayRoute) {
            this.createDatabaseNatGatewayRoute = createDatabaseNatGatewayRoute;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateDatabaseSubnetGroup}
         * @param createDatabaseSubnetGroup Controls if database subnet group should be created (n.b. database_subnets must also be set) true.
         * @return {@code this}
         */
        public Builder createDatabaseSubnetGroup(java.lang.Boolean createDatabaseSubnetGroup) {
            this.createDatabaseSubnetGroup = createDatabaseSubnetGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateDatabaseSubnetRouteTable}
         * @param createDatabaseSubnetRouteTable Controls if separate route table for database should be created.
         * @return {@code this}
         */
        public Builder createDatabaseSubnetRouteTable(java.lang.Boolean createDatabaseSubnetRouteTable) {
            this.createDatabaseSubnetRouteTable = createDatabaseSubnetRouteTable;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateEgressOnlyIgw}
         * @param createEgressOnlyIgw Controls if an Egress Only Internet Gateway is created and its related routes true.
         * @return {@code this}
         */
        public Builder createEgressOnlyIgw(java.lang.Boolean createEgressOnlyIgw) {
            this.createEgressOnlyIgw = createEgressOnlyIgw;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateElasticacheSubnetGroup}
         * @param createElasticacheSubnetGroup Controls if elasticache subnet group should be created true.
         * @return {@code this}
         */
        public Builder createElasticacheSubnetGroup(java.lang.Boolean createElasticacheSubnetGroup) {
            this.createElasticacheSubnetGroup = createElasticacheSubnetGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateElasticacheSubnetRouteTable}
         * @param createElasticacheSubnetRouteTable Controls if separate route table for elasticache should be created.
         * @return {@code this}
         */
        public Builder createElasticacheSubnetRouteTable(java.lang.Boolean createElasticacheSubnetRouteTable) {
            this.createElasticacheSubnetRouteTable = createElasticacheSubnetRouteTable;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateFlowLogCloudwatchIamRole}
         * @param createFlowLogCloudwatchIamRole Whether to create IAM role for VPC Flow Logs.
         * @return {@code this}
         */
        public Builder createFlowLogCloudwatchIamRole(java.lang.Boolean createFlowLogCloudwatchIamRole) {
            this.createFlowLogCloudwatchIamRole = createFlowLogCloudwatchIamRole;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateFlowLogCloudwatchLogGroup}
         * @param createFlowLogCloudwatchLogGroup Whether to create CloudWatch log group for VPC Flow Logs.
         * @return {@code this}
         */
        public Builder createFlowLogCloudwatchLogGroup(java.lang.Boolean createFlowLogCloudwatchLogGroup) {
            this.createFlowLogCloudwatchLogGroup = createFlowLogCloudwatchLogGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateIgw}
         * @param createIgw Controls if an Internet Gateway is created for public subnets and the related routes that connect them true.
         * @return {@code this}
         */
        public Builder createIgw(java.lang.Boolean createIgw) {
            this.createIgw = createIgw;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateRedshiftSubnetGroup}
         * @param createRedshiftSubnetGroup Controls if redshift subnet group should be created true.
         * @return {@code this}
         */
        public Builder createRedshiftSubnetGroup(java.lang.Boolean createRedshiftSubnetGroup) {
            this.createRedshiftSubnetGroup = createRedshiftSubnetGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateRedshiftSubnetRouteTable}
         * @param createRedshiftSubnetRouteTable Controls if separate route table for redshift should be created.
         * @return {@code this}
         */
        public Builder createRedshiftSubnetRouteTable(java.lang.Boolean createRedshiftSubnetRouteTable) {
            this.createRedshiftSubnetRouteTable = createRedshiftSubnetRouteTable;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCreateVpc}
         * @param createVpc Controls if VPC should be created (it affects almost all resources) true.
         * @return {@code this}
         */
        public Builder createVpc(java.lang.Boolean createVpc) {
            this.createVpc = createVpc;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCustomerGateways}
         * @param customerGateways Maps of Customer Gateway's attributes (BGP ASN and Gateway's Internet-routable external IP address) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder customerGateways(java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> customerGateways) {
            this.customerGateways = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>>)customerGateways;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCustomerGatewayTags}
         * @param customerGatewayTags Additional tags for the Customer Gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder customerGatewayTags(java.util.Map<java.lang.String, java.lang.String> customerGatewayTags) {
            this.customerGatewayTags = customerGatewayTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getCustomerOwnedIpv4Pool}
         * @param customerOwnedIpv4Pool The customer owned IPv4 address pool.
         *                              Typically used with the <code>map_customer_owned_ip_on_launch</code> argument. The <code>outpost_arn</code> argument must be specified when configured
         * @return {@code this}
         */
        public Builder customerOwnedIpv4Pool(java.lang.String customerOwnedIpv4Pool) {
            this.customerOwnedIpv4Pool = customerOwnedIpv4Pool;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseAclTags}
         * @param databaseAclTags Additional tags for the database subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder databaseAclTags(java.util.Map<java.lang.String, java.lang.String> databaseAclTags) {
            this.databaseAclTags = databaseAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseDedicatedNetworkAcl}
         * @param databaseDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for database subnets.
         * @return {@code this}
         */
        public Builder databaseDedicatedNetworkAcl(java.lang.Boolean databaseDedicatedNetworkAcl) {
            this.databaseDedicatedNetworkAcl = databaseDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseInboundAclRules}
         * @param databaseInboundAclRules Database subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder databaseInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> databaseInboundAclRules) {
            this.databaseInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)databaseInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseOutboundAclRules}
         * @param databaseOutboundAclRules Database subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder databaseOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> databaseOutboundAclRules) {
            this.databaseOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)databaseOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseRouteTableTags}
         * @param databaseRouteTableTags Additional tags for the database route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder databaseRouteTableTags(java.util.Map<java.lang.String, java.lang.String> databaseRouteTableTags) {
            this.databaseRouteTableTags = databaseRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetAssignIpv6AddressOnCreation}
         * @param databaseSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                  Default is <code>false</code>
         * @return {@code this}
         */
        public Builder databaseSubnetAssignIpv6AddressOnCreation(java.lang.Boolean databaseSubnetAssignIpv6AddressOnCreation) {
            this.databaseSubnetAssignIpv6AddressOnCreation = databaseSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetEnableDns64}
         * @param databaseSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                  Default: <code>true</code>
         *                                  true
         * @return {@code this}
         */
        public Builder databaseSubnetEnableDns64(java.lang.Boolean databaseSubnetEnableDns64) {
            this.databaseSubnetEnableDns64 = databaseSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                              Default: <code>true</code>
         *                                                              true
         * @return {@code this}
         */
        public Builder databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch = databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param databaseSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                           Default: <code>false</code>
         * @return {@code this}
         */
        public Builder databaseSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean databaseSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.databaseSubnetEnableResourceNameDnsARecordOnLaunch = databaseSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetGroupName}
         * @param databaseSubnetGroupName Name of database subnet group.
         * @return {@code this}
         */
        public Builder databaseSubnetGroupName(java.lang.String databaseSubnetGroupName) {
            this.databaseSubnetGroupName = databaseSubnetGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetGroupTags}
         * @param databaseSubnetGroupTags Additional tags for the database subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder databaseSubnetGroupTags(java.util.Map<java.lang.String, java.lang.String> databaseSubnetGroupTags) {
            this.databaseSubnetGroupTags = databaseSubnetGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetIpv6Native}
         * @param databaseSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                                 Default: <code>false</code>
         * @return {@code this}
         */
        public Builder databaseSubnetIpv6Native(java.lang.Boolean databaseSubnetIpv6Native) {
            this.databaseSubnetIpv6Native = databaseSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetIpv6Prefixes}
         * @param databaseSubnetIpv6Prefixes Assigns IPv6 database subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                   Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder databaseSubnetIpv6Prefixes(java.util.List<java.lang.String> databaseSubnetIpv6Prefixes) {
            this.databaseSubnetIpv6Prefixes = databaseSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetNames}
         * @param databaseSubnetNames Explicit values to use in the Name tag on database subnets.
         *                            If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder databaseSubnetNames(java.util.List<java.lang.String> databaseSubnetNames) {
            this.databaseSubnetNames = databaseSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param databaseSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                     For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder databaseSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String databaseSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.databaseSubnetPrivateDnsHostnameTypeOnLaunch = databaseSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnets}
         * @param databaseSubnets A list of database subnets inside the VPC.
         * @return {@code this}
         */
        public Builder databaseSubnets(java.util.List<java.lang.String> databaseSubnets) {
            this.databaseSubnets = databaseSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetSuffix}
         * @param databaseSubnetSuffix Suffix to append to database subnets name db.
         * @return {@code this}
         */
        public Builder databaseSubnetSuffix(java.lang.String databaseSubnetSuffix) {
            this.databaseSubnetSuffix = databaseSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDatabaseSubnetTags}
         * @param databaseSubnetTags Additional tags for the database subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder databaseSubnetTags(java.util.Map<java.lang.String, java.lang.String> databaseSubnetTags) {
            this.databaseSubnetTags = databaseSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultNetworkAclEgress}
         * @param defaultNetworkAclEgress List of maps of egress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder defaultNetworkAclEgress(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclEgress) {
            this.defaultNetworkAclEgress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)defaultNetworkAclEgress;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultNetworkAclIngress}
         * @param defaultNetworkAclIngress List of maps of ingress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder defaultNetworkAclIngress(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclIngress) {
            this.defaultNetworkAclIngress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)defaultNetworkAclIngress;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultNetworkAclName}
         * @param defaultNetworkAclName Name to be used on the Default Network ACL.
         * @return {@code this}
         */
        public Builder defaultNetworkAclName(java.lang.String defaultNetworkAclName) {
            this.defaultNetworkAclName = defaultNetworkAclName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultNetworkAclTags}
         * @param defaultNetworkAclTags Additional tags for the Default Network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder defaultNetworkAclTags(java.util.Map<java.lang.String, java.lang.String> defaultNetworkAclTags) {
            this.defaultNetworkAclTags = defaultNetworkAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultRouteTableName}
         * @param defaultRouteTableName Name to be used on the default route table.
         * @return {@code this}
         */
        public Builder defaultRouteTableName(java.lang.String defaultRouteTableName) {
            this.defaultRouteTableName = defaultRouteTableName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultRouteTablePropagatingVgws}
         * @param defaultRouteTablePropagatingVgws List of virtual gateways for propagation.
         * @return {@code this}
         */
        public Builder defaultRouteTablePropagatingVgws(java.util.List<java.lang.String> defaultRouteTablePropagatingVgws) {
            this.defaultRouteTablePropagatingVgws = defaultRouteTablePropagatingVgws;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultRouteTableRoutes}
         * @param defaultRouteTableRoutes Configuration block of routes. See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table#route.
         *                                The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder defaultRouteTableRoutes(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultRouteTableRoutes) {
            this.defaultRouteTableRoutes = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)defaultRouteTableRoutes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultRouteTableTags}
         * @param defaultRouteTableTags Additional tags for the default route table The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder defaultRouteTableTags(java.util.Map<java.lang.String, java.lang.String> defaultRouteTableTags) {
            this.defaultRouteTableTags = defaultRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultSecurityGroupEgress}
         * @param defaultSecurityGroupEgress List of maps of egress rules to set on the default security group.
         *                                   The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder defaultSecurityGroupEgress(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupEgress) {
            this.defaultSecurityGroupEgress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)defaultSecurityGroupEgress;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultSecurityGroupIngress}
         * @param defaultSecurityGroupIngress List of maps of ingress rules to set on the default security group.
         *                                    The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder defaultSecurityGroupIngress(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupIngress) {
            this.defaultSecurityGroupIngress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)defaultSecurityGroupIngress;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultSecurityGroupName}
         * @param defaultSecurityGroupName Name to be used on the default security group.
         * @return {@code this}
         */
        public Builder defaultSecurityGroupName(java.lang.String defaultSecurityGroupName) {
            this.defaultSecurityGroupName = defaultSecurityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultSecurityGroupTags}
         * @param defaultSecurityGroupTags Additional tags for the default security group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder defaultSecurityGroupTags(java.util.Map<java.lang.String, java.lang.String> defaultSecurityGroupTags) {
            this.defaultSecurityGroupTags = defaultSecurityGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultVpcEnableDnsHostnames}
         * @param defaultVpcEnableDnsHostnames Should be true to enable DNS hostnames in the Default VPC true.
         * @return {@code this}
         */
        public Builder defaultVpcEnableDnsHostnames(java.lang.Boolean defaultVpcEnableDnsHostnames) {
            this.defaultVpcEnableDnsHostnames = defaultVpcEnableDnsHostnames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultVpcEnableDnsSupport}
         * @param defaultVpcEnableDnsSupport Should be true to enable DNS support in the Default VPC true.
         * @return {@code this}
         */
        public Builder defaultVpcEnableDnsSupport(java.lang.Boolean defaultVpcEnableDnsSupport) {
            this.defaultVpcEnableDnsSupport = defaultVpcEnableDnsSupport;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultVpcName}
         * @param defaultVpcName Name to be used on the Default VPC.
         * @return {@code this}
         */
        public Builder defaultVpcName(java.lang.String defaultVpcName) {
            this.defaultVpcName = defaultVpcName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDefaultVpcTags}
         * @param defaultVpcTags Additional tags for the Default VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder defaultVpcTags(java.util.Map<java.lang.String, java.lang.String> defaultVpcTags) {
            this.defaultVpcTags = defaultVpcTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsDomainName}
         * @param dhcpOptionsDomainName Specifies DNS name for DHCP options set (requires enable_dhcp_options set to true).
         * @return {@code this}
         */
        public Builder dhcpOptionsDomainName(java.lang.String dhcpOptionsDomainName) {
            this.dhcpOptionsDomainName = dhcpOptionsDomainName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsDomainNameServers}
         * @param dhcpOptionsDomainNameServers Specify a list of DNS server addresses for DHCP options set, default to AWS provided (requires enable_dhcp_options set to true) AmazonProvidedDNS.
         * @return {@code this}
         */
        public Builder dhcpOptionsDomainNameServers(java.util.List<java.lang.String> dhcpOptionsDomainNameServers) {
            this.dhcpOptionsDomainNameServers = dhcpOptionsDomainNameServers;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsNetbiosNameServers}
         * @param dhcpOptionsNetbiosNameServers Specify a list of netbios servers for DHCP options set (requires enable_dhcp_options set to true).
         * @return {@code this}
         */
        public Builder dhcpOptionsNetbiosNameServers(java.util.List<java.lang.String> dhcpOptionsNetbiosNameServers) {
            this.dhcpOptionsNetbiosNameServers = dhcpOptionsNetbiosNameServers;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsNetbiosNodeType}
         * @param dhcpOptionsNetbiosNodeType Specify netbios node_type for DHCP options set (requires enable_dhcp_options set to true).
         * @return {@code this}
         */
        public Builder dhcpOptionsNetbiosNodeType(java.lang.String dhcpOptionsNetbiosNodeType) {
            this.dhcpOptionsNetbiosNodeType = dhcpOptionsNetbiosNodeType;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsNtpServers}
         * @param dhcpOptionsNtpServers Specify a list of NTP servers for DHCP options set (requires enable_dhcp_options set to true).
         * @return {@code this}
         */
        public Builder dhcpOptionsNtpServers(java.util.List<java.lang.String> dhcpOptionsNtpServers) {
            this.dhcpOptionsNtpServers = dhcpOptionsNtpServers;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDhcpOptionsTags}
         * @param dhcpOptionsTags Additional tags for the DHCP option set (requires enable_dhcp_options set to true) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder dhcpOptionsTags(java.util.Map<java.lang.String, java.lang.String> dhcpOptionsTags) {
            this.dhcpOptionsTags = dhcpOptionsTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheAclTags}
         * @param elasticacheAclTags Additional tags for the elasticache subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder elasticacheAclTags(java.util.Map<java.lang.String, java.lang.String> elasticacheAclTags) {
            this.elasticacheAclTags = elasticacheAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheDedicatedNetworkAcl}
         * @param elasticacheDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for elasticache subnets.
         * @return {@code this}
         */
        public Builder elasticacheDedicatedNetworkAcl(java.lang.Boolean elasticacheDedicatedNetworkAcl) {
            this.elasticacheDedicatedNetworkAcl = elasticacheDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheInboundAclRules}
         * @param elasticacheInboundAclRules Elasticache subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder elasticacheInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> elasticacheInboundAclRules) {
            this.elasticacheInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)elasticacheInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheOutboundAclRules}
         * @param elasticacheOutboundAclRules Elasticache subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder elasticacheOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> elasticacheOutboundAclRules) {
            this.elasticacheOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)elasticacheOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheRouteTableTags}
         * @param elasticacheRouteTableTags Additional tags for the elasticache route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder elasticacheRouteTableTags(java.util.Map<java.lang.String, java.lang.String> elasticacheRouteTableTags) {
            this.elasticacheRouteTableTags = elasticacheRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetAssignIpv6AddressOnCreation}
         * @param elasticacheSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                     Default is <code>false</code>
         * @return {@code this}
         */
        public Builder elasticacheSubnetAssignIpv6AddressOnCreation(java.lang.Boolean elasticacheSubnetAssignIpv6AddressOnCreation) {
            this.elasticacheSubnetAssignIpv6AddressOnCreation = elasticacheSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetEnableDns64}
         * @param elasticacheSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                     Default: <code>true</code>
         *                                     true
         * @return {@code this}
         */
        public Builder elasticacheSubnetEnableDns64(java.lang.Boolean elasticacheSubnetEnableDns64) {
            this.elasticacheSubnetEnableDns64 = elasticacheSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                                 Default: <code>true</code>
         *                                                                 true
         * @return {@code this}
         */
        public Builder elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch = elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param elasticacheSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                              Default: <code>false</code>
         * @return {@code this}
         */
        public Builder elasticacheSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean elasticacheSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch = elasticacheSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetGroupName}
         * @param elasticacheSubnetGroupName Name of elasticache subnet group.
         * @return {@code this}
         */
        public Builder elasticacheSubnetGroupName(java.lang.String elasticacheSubnetGroupName) {
            this.elasticacheSubnetGroupName = elasticacheSubnetGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetGroupTags}
         * @param elasticacheSubnetGroupTags Additional tags for the elasticache subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder elasticacheSubnetGroupTags(java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetGroupTags) {
            this.elasticacheSubnetGroupTags = elasticacheSubnetGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetIpv6Native}
         * @param elasticacheSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                                    Default: <code>false</code>
         * @return {@code this}
         */
        public Builder elasticacheSubnetIpv6Native(java.lang.Boolean elasticacheSubnetIpv6Native) {
            this.elasticacheSubnetIpv6Native = elasticacheSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetIpv6Prefixes}
         * @param elasticacheSubnetIpv6Prefixes Assigns IPv6 elasticache subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                      Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder elasticacheSubnetIpv6Prefixes(java.util.List<java.lang.String> elasticacheSubnetIpv6Prefixes) {
            this.elasticacheSubnetIpv6Prefixes = elasticacheSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetNames}
         * @param elasticacheSubnetNames Explicit values to use in the Name tag on elasticache subnets.
         *                               If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder elasticacheSubnetNames(java.util.List<java.lang.String> elasticacheSubnetNames) {
            this.elasticacheSubnetNames = elasticacheSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param elasticacheSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                        For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder elasticacheSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String elasticacheSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch = elasticacheSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnets}
         * @param elasticacheSubnets A list of elasticache subnets inside the VPC.
         * @return {@code this}
         */
        public Builder elasticacheSubnets(java.util.List<java.lang.String> elasticacheSubnets) {
            this.elasticacheSubnets = elasticacheSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetSuffix}
         * @param elasticacheSubnetSuffix Suffix to append to elasticache subnets name elasticache.
         * @return {@code this}
         */
        public Builder elasticacheSubnetSuffix(java.lang.String elasticacheSubnetSuffix) {
            this.elasticacheSubnetSuffix = elasticacheSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getElasticacheSubnetTags}
         * @param elasticacheSubnetTags Additional tags for the elasticache subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder elasticacheSubnetTags(java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetTags) {
            this.elasticacheSubnetTags = elasticacheSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableDhcpOptions}
         * @param enableDhcpOptions Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type.
         * @return {@code this}
         */
        public Builder enableDhcpOptions(java.lang.Boolean enableDhcpOptions) {
            this.enableDhcpOptions = enableDhcpOptions;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableDnsHostnames}
         * @param enableDnsHostnames Should be true to enable DNS hostnames in the VPC true.
         * @return {@code this}
         */
        public Builder enableDnsHostnames(java.lang.Boolean enableDnsHostnames) {
            this.enableDnsHostnames = enableDnsHostnames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableDnsSupport}
         * @param enableDnsSupport Should be true to enable DNS support in the VPC true.
         * @return {@code this}
         */
        public Builder enableDnsSupport(java.lang.Boolean enableDnsSupport) {
            this.enableDnsSupport = enableDnsSupport;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableFlowLog}
         * @param enableFlowLog Whether or not to enable VPC Flow Logs.
         * @return {@code this}
         */
        public Builder enableFlowLog(java.lang.Boolean enableFlowLog) {
            this.enableFlowLog = enableFlowLog;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableIpv6}
         * @param enableIpv6 Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
         *                   You cannot specify the range of IP addresses, or the size of the CIDR block
         * @return {@code this}
         */
        public Builder enableIpv6(java.lang.Boolean enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableNatGateway}
         * @param enableNatGateway Should be true if you want to provision NAT Gateways for each of your private networks.
         * @return {@code this}
         */
        public Builder enableNatGateway(java.lang.Boolean enableNatGateway) {
            this.enableNatGateway = enableNatGateway;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableNetworkAddressUsageMetrics}
         * @param enableNetworkAddressUsageMetrics Determines whether network address usage metrics are enabled for the VPC.
         * @return {@code this}
         */
        public Builder enableNetworkAddressUsageMetrics(java.lang.Boolean enableNetworkAddressUsageMetrics) {
            this.enableNetworkAddressUsageMetrics = enableNetworkAddressUsageMetrics;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnablePublicRedshift}
         * @param enablePublicRedshift Controls if redshift should have public routing table.
         * @return {@code this}
         */
        public Builder enablePublicRedshift(java.lang.Boolean enablePublicRedshift) {
            this.enablePublicRedshift = enablePublicRedshift;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getEnableVpnGateway}
         * @param enableVpnGateway Should be true if you want to create a new VPN Gateway resource and attach it to the VPC.
         * @return {@code this}
         */
        public Builder enableVpnGateway(java.lang.Boolean enableVpnGateway) {
            this.enableVpnGateway = enableVpnGateway;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getExternalNatIpIds}
         * @param externalNatIpIds List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips).
         * @return {@code this}
         */
        public Builder externalNatIpIds(java.util.List<java.lang.String> externalNatIpIds) {
            this.externalNatIpIds = externalNatIpIds;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getExternalNatIps}
         * @param externalNatIps List of EIPs to be used for <code>nat_public_ips</code> output (used in combination with reuse_nat_ips and external_nat_ip_ids).
         * @return {@code this}
         */
        public Builder externalNatIps(java.util.List<java.lang.String> externalNatIps) {
            this.externalNatIps = externalNatIps;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogCloudwatchIamRoleArn}
         * @param flowLogCloudwatchIamRoleArn The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group.
         *                                    When flow_log_destination_arn is set to ARN of Cloudwatch Logs, this argument needs to be provided
         * @return {@code this}
         */
        public Builder flowLogCloudwatchIamRoleArn(java.lang.String flowLogCloudwatchIamRoleArn) {
            this.flowLogCloudwatchIamRoleArn = flowLogCloudwatchIamRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogCloudwatchLogGroupKmsKeyId}
         * @param flowLogCloudwatchLogGroupKmsKeyId The ARN of the KMS Key to use when encrypting log data for VPC flow logs.
         * @return {@code this}
         */
        public Builder flowLogCloudwatchLogGroupKmsKeyId(java.lang.String flowLogCloudwatchLogGroupKmsKeyId) {
            this.flowLogCloudwatchLogGroupKmsKeyId = flowLogCloudwatchLogGroupKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogCloudwatchLogGroupNamePrefix}
         * @param flowLogCloudwatchLogGroupNamePrefix Specifies the name prefix of CloudWatch Log Group for VPC flow logs /aws/vpc-flow-log/.
         * @return {@code this}
         */
        public Builder flowLogCloudwatchLogGroupNamePrefix(java.lang.String flowLogCloudwatchLogGroupNamePrefix) {
            this.flowLogCloudwatchLogGroupNamePrefix = flowLogCloudwatchLogGroupNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogCloudwatchLogGroupNameSuffix}
         * @param flowLogCloudwatchLogGroupNameSuffix Specifies the name suffix of CloudWatch Log Group for VPC flow logs.
         * @return {@code this}
         */
        public Builder flowLogCloudwatchLogGroupNameSuffix(java.lang.String flowLogCloudwatchLogGroupNameSuffix) {
            this.flowLogCloudwatchLogGroupNameSuffix = flowLogCloudwatchLogGroupNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogCloudwatchLogGroupRetentionInDays}
         * @param flowLogCloudwatchLogGroupRetentionInDays Specifies the number of days you want to retain log events in the specified log group for VPC flow logs.
         * @return {@code this}
         */
        public Builder flowLogCloudwatchLogGroupRetentionInDays(java.lang.Number flowLogCloudwatchLogGroupRetentionInDays) {
            this.flowLogCloudwatchLogGroupRetentionInDays = flowLogCloudwatchLogGroupRetentionInDays;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogDestinationArn}
         * @param flowLogDestinationArn The ARN of the CloudWatch log group or S3 bucket where VPC Flow Logs will be pushed.
         *                              If this ARN is a S3 bucket the appropriate permissions need to be set on that bucket's policy. When create_flow_log_cloudwatch_log_group is set to false this argument must be provided
         * @return {@code this}
         */
        public Builder flowLogDestinationArn(java.lang.String flowLogDestinationArn) {
            this.flowLogDestinationArn = flowLogDestinationArn;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogDestinationType}
         * @param flowLogDestinationType Type of flow log destination.
         *                               Can be s3 or cloud-watch-logs
         *                               cloud-watch-logs
         * @return {@code this}
         */
        public Builder flowLogDestinationType(java.lang.String flowLogDestinationType) {
            this.flowLogDestinationType = flowLogDestinationType;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogFileFormat}
         * @param flowLogFileFormat (Optional) The format for the flow log.
         *                          Valid values: <code>plain-text</code>, <code>parquet</code>
         * @return {@code this}
         */
        public Builder flowLogFileFormat(java.lang.String flowLogFileFormat) {
            this.flowLogFileFormat = flowLogFileFormat;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogHiveCompatiblePartitions}
         * @param flowLogHiveCompatiblePartitions (Optional) Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
         * @return {@code this}
         */
        public Builder flowLogHiveCompatiblePartitions(java.lang.Boolean flowLogHiveCompatiblePartitions) {
            this.flowLogHiveCompatiblePartitions = flowLogHiveCompatiblePartitions;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogLogFormat}
         * @param flowLogLogFormat The fields to include in the flow log record, in the order in which they should appear.
         * @return {@code this}
         */
        public Builder flowLogLogFormat(java.lang.String flowLogLogFormat) {
            this.flowLogLogFormat = flowLogLogFormat;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogMaxAggregationInterval}
         * @param flowLogMaxAggregationInterval The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
         *                                      Valid Values: <code>60</code> seconds or <code>600</code> seconds
         *                                      600
         * @return {@code this}
         */
        public Builder flowLogMaxAggregationInterval(java.lang.Number flowLogMaxAggregationInterval) {
            this.flowLogMaxAggregationInterval = flowLogMaxAggregationInterval;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogPerHourPartition}
         * @param flowLogPerHourPartition (Optional) Indicates whether to partition the flow log per hour.
         *                                This reduces the cost and response time for queries
         * @return {@code this}
         */
        public Builder flowLogPerHourPartition(java.lang.Boolean flowLogPerHourPartition) {
            this.flowLogPerHourPartition = flowLogPerHourPartition;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getFlowLogTrafficType}
         * @param flowLogTrafficType The type of traffic to capture.
         *                           Valid values: ACCEPT, REJECT, ALL
         *                           ALL
         * @return {@code this}
         */
        public Builder flowLogTrafficType(java.lang.String flowLogTrafficType) {
            this.flowLogTrafficType = flowLogTrafficType;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIgwTags}
         * @param igwTags Additional tags for the internet gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder igwTags(java.util.Map<java.lang.String, java.lang.String> igwTags) {
            this.igwTags = igwTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getInstanceTenancy}
         * @param instanceTenancy A tenancy option for instances launched into the VPC default.
         * @return {@code this}
         */
        public Builder instanceTenancy(java.lang.String instanceTenancy) {
            this.instanceTenancy = instanceTenancy;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraAclTags}
         * @param intraAclTags Additional tags for the intra subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder intraAclTags(java.util.Map<java.lang.String, java.lang.String> intraAclTags) {
            this.intraAclTags = intraAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraDedicatedNetworkAcl}
         * @param intraDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for intra subnets.
         * @return {@code this}
         */
        public Builder intraDedicatedNetworkAcl(java.lang.Boolean intraDedicatedNetworkAcl) {
            this.intraDedicatedNetworkAcl = intraDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraInboundAclRules}
         * @param intraInboundAclRules Intra subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder intraInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> intraInboundAclRules) {
            this.intraInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)intraInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraOutboundAclRules}
         * @param intraOutboundAclRules Intra subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder intraOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> intraOutboundAclRules) {
            this.intraOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)intraOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraRouteTableTags}
         * @param intraRouteTableTags Additional tags for the intra route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder intraRouteTableTags(java.util.Map<java.lang.String, java.lang.String> intraRouteTableTags) {
            this.intraRouteTableTags = intraRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetAssignIpv6AddressOnCreation}
         * @param intraSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                               Default is <code>false</code>
         * @return {@code this}
         */
        public Builder intraSubnetAssignIpv6AddressOnCreation(java.lang.Boolean intraSubnetAssignIpv6AddressOnCreation) {
            this.intraSubnetAssignIpv6AddressOnCreation = intraSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetEnableDns64}
         * @param intraSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                               Default: <code>true</code>
         *                               true
         * @return {@code this}
         */
        public Builder intraSubnetEnableDns64(java.lang.Boolean intraSubnetEnableDns64) {
            this.intraSubnetEnableDns64 = intraSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                           Default: <code>true</code>
         *                                                           true
         * @return {@code this}
         */
        public Builder intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch = intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param intraSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                        Default: <code>false</code>
         * @return {@code this}
         */
        public Builder intraSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean intraSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.intraSubnetEnableResourceNameDnsARecordOnLaunch = intraSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetIpv6Native}
         * @param intraSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                              Default: <code>false</code>
         * @return {@code this}
         */
        public Builder intraSubnetIpv6Native(java.lang.Boolean intraSubnetIpv6Native) {
            this.intraSubnetIpv6Native = intraSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetIpv6Prefixes}
         * @param intraSubnetIpv6Prefixes Assigns IPv6 intra subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder intraSubnetIpv6Prefixes(java.util.List<java.lang.String> intraSubnetIpv6Prefixes) {
            this.intraSubnetIpv6Prefixes = intraSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetNames}
         * @param intraSubnetNames Explicit values to use in the Name tag on intra subnets.
         *                         If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder intraSubnetNames(java.util.List<java.lang.String> intraSubnetNames) {
            this.intraSubnetNames = intraSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param intraSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                  For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder intraSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String intraSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.intraSubnetPrivateDnsHostnameTypeOnLaunch = intraSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnets}
         * @param intraSubnets A list of intra subnets inside the VPC.
         * @return {@code this}
         */
        public Builder intraSubnets(java.util.List<java.lang.String> intraSubnets) {
            this.intraSubnets = intraSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetSuffix}
         * @param intraSubnetSuffix Suffix to append to intra subnets name intra.
         * @return {@code this}
         */
        public Builder intraSubnetSuffix(java.lang.String intraSubnetSuffix) {
            this.intraSubnetSuffix = intraSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIntraSubnetTags}
         * @param intraSubnetTags Additional tags for the intra subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder intraSubnetTags(java.util.Map<java.lang.String, java.lang.String> intraSubnetTags) {
            this.intraSubnetTags = intraSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv4IpamPoolId}
         * @param ipv4IpamPoolId (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR.
         * @return {@code this}
         */
        public Builder ipv4IpamPoolId(java.lang.String ipv4IpamPoolId) {
            this.ipv4IpamPoolId = ipv4IpamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv4NetmaskLength}
         * @param ipv4NetmaskLength (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC.
         *                          Requires specifying a ipv4_ipam_pool_id
         * @return {@code this}
         */
        public Builder ipv4NetmaskLength(java.lang.Number ipv4NetmaskLength) {
            this.ipv4NetmaskLength = ipv4NetmaskLength;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv6Cidr}
         * @param ipv6Cidr (Optional) IPv6 CIDR block to request from an IPAM Pool.
         *                 Can be set explicitly or derived from IPAM using <code>ipv6_netmask_length</code>
         * @return {@code this}
         */
        public Builder ipv6Cidr(java.lang.String ipv6Cidr) {
            this.ipv6Cidr = ipv6Cidr;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv6CidrBlockNetworkBorderGroup}
         * @param ipv6CidrBlockNetworkBorderGroup By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC.
         *                                        This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones
         * @return {@code this}
         */
        public Builder ipv6CidrBlockNetworkBorderGroup(java.lang.String ipv6CidrBlockNetworkBorderGroup) {
            this.ipv6CidrBlockNetworkBorderGroup = ipv6CidrBlockNetworkBorderGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv6IpamPoolId}
         * @param ipv6IpamPoolId (Optional) IPAM Pool ID for a IPv6 pool.
         *                       Conflicts with <code>assign_generated_ipv6_cidr_block</code>
         * @return {@code this}
         */
        public Builder ipv6IpamPoolId(java.lang.String ipv6IpamPoolId) {
            this.ipv6IpamPoolId = ipv6IpamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getIpv6NetmaskLength}
         * @param ipv6NetmaskLength (Optional) Netmask length to request from IPAM Pool.
         *                          Conflicts with <code>ipv6_cidr_block</code>. This can be omitted if IPAM pool as a <code>allocation_default_netmask_length</code> set. Valid values: <code>56</code>
         * @return {@code this}
         */
        public Builder ipv6NetmaskLength(java.lang.Number ipv6NetmaskLength) {
            this.ipv6NetmaskLength = ipv6NetmaskLength;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getManageDefaultNetworkAcl}
         * @param manageDefaultNetworkAcl Should be true to adopt and manage Default Network ACL true.
         * @return {@code this}
         */
        public Builder manageDefaultNetworkAcl(java.lang.Boolean manageDefaultNetworkAcl) {
            this.manageDefaultNetworkAcl = manageDefaultNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getManageDefaultRouteTable}
         * @param manageDefaultRouteTable Should be true to manage default route table true.
         * @return {@code this}
         */
        public Builder manageDefaultRouteTable(java.lang.Boolean manageDefaultRouteTable) {
            this.manageDefaultRouteTable = manageDefaultRouteTable;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getManageDefaultSecurityGroup}
         * @param manageDefaultSecurityGroup Should be true to adopt and manage default security group true.
         * @return {@code this}
         */
        public Builder manageDefaultSecurityGroup(java.lang.Boolean manageDefaultSecurityGroup) {
            this.manageDefaultSecurityGroup = manageDefaultSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getManageDefaultVpc}
         * @param manageDefaultVpc Should be true to adopt and manage Default VPC.
         * @return {@code this}
         */
        public Builder manageDefaultVpc(java.lang.Boolean manageDefaultVpc) {
            this.manageDefaultVpc = manageDefaultVpc;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getMapCustomerOwnedIpOnLaunch}
         * @param mapCustomerOwnedIpOnLaunch Specify true to indicate that network interfaces created in the subnet should be assigned a customer owned IP address.
         *                                   The <code>customer_owned_ipv4_pool</code> and <code>outpost_arn</code> arguments must be specified when set to <code>true</code>. Default is <code>false</code>
         * @return {@code this}
         */
        public Builder mapCustomerOwnedIpOnLaunch(java.lang.Boolean mapCustomerOwnedIpOnLaunch) {
            this.mapCustomerOwnedIpOnLaunch = mapCustomerOwnedIpOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getMapPublicIpOnLaunch}
         * @param mapPublicIpOnLaunch Specify true to indicate that instances launched into the subnet should be assigned a public IP address.
         *                            Default is <code>false</code>
         * @return {@code this}
         */
        public Builder mapPublicIpOnLaunch(java.lang.Boolean mapPublicIpOnLaunch) {
            this.mapPublicIpOnLaunch = mapPublicIpOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getName}
         * @param name Name to be used on all the resources as identifier.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getNatEipTags}
         * @param natEipTags Additional tags for the NAT EIP The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder natEipTags(java.util.Map<java.lang.String, java.lang.String> natEipTags) {
            this.natEipTags = natEipTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getNatGatewayDestinationCidrBlock}
         * @param natGatewayDestinationCidrBlock Used to pass a custom destination route for private NAT Gateway.
         *                                       If not specified, the default 0.0.0.0/0 is used as a destination route
         *                                       0.0.0.0/0
         * @return {@code this}
         */
        public Builder natGatewayDestinationCidrBlock(java.lang.String natGatewayDestinationCidrBlock) {
            this.natGatewayDestinationCidrBlock = natGatewayDestinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getNatGatewayTags}
         * @param natGatewayTags Additional tags for the NAT gateways The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder natGatewayTags(java.util.Map<java.lang.String, java.lang.String> natGatewayTags) {
            this.natGatewayTags = natGatewayTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOneNatGatewayPerAz}
         * @param oneNatGatewayPerAz Should be true if you want only one NAT Gateway per availability zone.
         *                           Requires <code>var.azs</code> to be set, and the number of <code>public_subnets</code> created to be greater than or equal to the number of availability zones specified in <code>var.azs</code>
         * @return {@code this}
         */
        public Builder oneNatGatewayPerAz(java.lang.Boolean oneNatGatewayPerAz) {
            this.oneNatGatewayPerAz = oneNatGatewayPerAz;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostAclTags}
         * @param outpostAclTags Additional tags for the outpost subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder outpostAclTags(java.util.Map<java.lang.String, java.lang.String> outpostAclTags) {
            this.outpostAclTags = outpostAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostArn}
         * @param outpostArn ARN of Outpost you want to create a subnet in.
         * @return {@code this}
         */
        public Builder outpostArn(java.lang.String outpostArn) {
            this.outpostArn = outpostArn;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostAz}
         * @param outpostAz AZ where Outpost is anchored.
         * @return {@code this}
         */
        public Builder outpostAz(java.lang.String outpostAz) {
            this.outpostAz = outpostAz;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostDedicatedNetworkAcl}
         * @param outpostDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for outpost subnets.
         * @return {@code this}
         */
        public Builder outpostDedicatedNetworkAcl(java.lang.Boolean outpostDedicatedNetworkAcl) {
            this.outpostDedicatedNetworkAcl = outpostDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostInboundAclRules}
         * @param outpostInboundAclRules Outpost subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder outpostInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> outpostInboundAclRules) {
            this.outpostInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)outpostInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostOutboundAclRules}
         * @param outpostOutboundAclRules Outpost subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder outpostOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> outpostOutboundAclRules) {
            this.outpostOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)outpostOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetAssignIpv6AddressOnCreation}
         * @param outpostSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                 Default is <code>false</code>
         * @return {@code this}
         */
        public Builder outpostSubnetAssignIpv6AddressOnCreation(java.lang.Boolean outpostSubnetAssignIpv6AddressOnCreation) {
            this.outpostSubnetAssignIpv6AddressOnCreation = outpostSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetEnableDns64}
         * @param outpostSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                 Default: <code>true</code>
         *                                 true
         * @return {@code this}
         */
        public Builder outpostSubnetEnableDns64(java.lang.Boolean outpostSubnetEnableDns64) {
            this.outpostSubnetEnableDns64 = outpostSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                             Default: <code>true</code>
         *                                                             true
         * @return {@code this}
         */
        public Builder outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch = outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param outpostSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                          Default: <code>false</code>
         * @return {@code this}
         */
        public Builder outpostSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean outpostSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.outpostSubnetEnableResourceNameDnsARecordOnLaunch = outpostSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetIpv6Native}
         * @param outpostSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                                Default: <code>false</code>
         * @return {@code this}
         */
        public Builder outpostSubnetIpv6Native(java.lang.Boolean outpostSubnetIpv6Native) {
            this.outpostSubnetIpv6Native = outpostSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetIpv6Prefixes}
         * @param outpostSubnetIpv6Prefixes Assigns IPv6 outpost subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                  Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder outpostSubnetIpv6Prefixes(java.util.List<java.lang.String> outpostSubnetIpv6Prefixes) {
            this.outpostSubnetIpv6Prefixes = outpostSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetNames}
         * @param outpostSubnetNames Explicit values to use in the Name tag on outpost subnets.
         *                           If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder outpostSubnetNames(java.util.List<java.lang.String> outpostSubnetNames) {
            this.outpostSubnetNames = outpostSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param outpostSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                    For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder outpostSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String outpostSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.outpostSubnetPrivateDnsHostnameTypeOnLaunch = outpostSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnets}
         * @param outpostSubnets A list of outpost subnets inside the VPC.
         * @return {@code this}
         */
        public Builder outpostSubnets(java.util.List<java.lang.String> outpostSubnets) {
            this.outpostSubnets = outpostSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetSuffix}
         * @param outpostSubnetSuffix Suffix to append to outpost subnets name outpost.
         * @return {@code this}
         */
        public Builder outpostSubnetSuffix(java.lang.String outpostSubnetSuffix) {
            this.outpostSubnetSuffix = outpostSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getOutpostSubnetTags}
         * @param outpostSubnetTags Additional tags for the outpost subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder outpostSubnetTags(java.util.Map<java.lang.String, java.lang.String> outpostSubnetTags) {
            this.outpostSubnetTags = outpostSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateAclTags}
         * @param privateAclTags Additional tags for the private subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder privateAclTags(java.util.Map<java.lang.String, java.lang.String> privateAclTags) {
            this.privateAclTags = privateAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateDedicatedNetworkAcl}
         * @param privateDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for private subnets.
         * @return {@code this}
         */
        public Builder privateDedicatedNetworkAcl(java.lang.Boolean privateDedicatedNetworkAcl) {
            this.privateDedicatedNetworkAcl = privateDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateInboundAclRules}
         * @param privateInboundAclRules Private subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder privateInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> privateInboundAclRules) {
            this.privateInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)privateInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateOutboundAclRules}
         * @param privateOutboundAclRules Private subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder privateOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> privateOutboundAclRules) {
            this.privateOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)privateOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateRouteTableTags}
         * @param privateRouteTableTags Additional tags for the private route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder privateRouteTableTags(java.util.Map<java.lang.String, java.lang.String> privateRouteTableTags) {
            this.privateRouteTableTags = privateRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetAssignIpv6AddressOnCreation}
         * @param privateSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                 Default is <code>false</code>
         * @return {@code this}
         */
        public Builder privateSubnetAssignIpv6AddressOnCreation(java.lang.Boolean privateSubnetAssignIpv6AddressOnCreation) {
            this.privateSubnetAssignIpv6AddressOnCreation = privateSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetEnableDns64}
         * @param privateSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                 Default: <code>true</code>
         *                                 true
         * @return {@code this}
         */
        public Builder privateSubnetEnableDns64(java.lang.Boolean privateSubnetEnableDns64) {
            this.privateSubnetEnableDns64 = privateSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                             Default: <code>true</code>
         *                                                             true
         * @return {@code this}
         */
        public Builder privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch = privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param privateSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                          Default: <code>false</code>
         * @return {@code this}
         */
        public Builder privateSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean privateSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.privateSubnetEnableResourceNameDnsARecordOnLaunch = privateSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetIpv6Native}
         * @param privateSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                                Default: <code>false</code>
         * @return {@code this}
         */
        public Builder privateSubnetIpv6Native(java.lang.Boolean privateSubnetIpv6Native) {
            this.privateSubnetIpv6Native = privateSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetIpv6Prefixes}
         * @param privateSubnetIpv6Prefixes Assigns IPv6 private subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                  Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder privateSubnetIpv6Prefixes(java.util.List<java.lang.String> privateSubnetIpv6Prefixes) {
            this.privateSubnetIpv6Prefixes = privateSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetNames}
         * @param privateSubnetNames Explicit values to use in the Name tag on private subnets.
         *                           If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder privateSubnetNames(java.util.List<java.lang.String> privateSubnetNames) {
            this.privateSubnetNames = privateSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param privateSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                    For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder privateSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String privateSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.privateSubnetPrivateDnsHostnameTypeOnLaunch = privateSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnets}
         * @param privateSubnets A list of private subnets inside the VPC.
         * @return {@code this}
         */
        public Builder privateSubnets(java.util.List<java.lang.String> privateSubnets) {
            this.privateSubnets = privateSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetSuffix}
         * @param privateSubnetSuffix Suffix to append to private subnets name private.
         * @return {@code this}
         */
        public Builder privateSubnetSuffix(java.lang.String privateSubnetSuffix) {
            this.privateSubnetSuffix = privateSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetTags}
         * @param privateSubnetTags Additional tags for the private subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder privateSubnetTags(java.util.Map<java.lang.String, java.lang.String> privateSubnetTags) {
            this.privateSubnetTags = privateSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPrivateSubnetTagsPerAz}
         * @param privateSubnetTagsPerAz Additional tags for the private subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder privateSubnetTagsPerAz(java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, java.lang.String>> privateSubnetTagsPerAz) {
            this.privateSubnetTagsPerAz = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)privateSubnetTagsPerAz;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPropagateIntraRouteTablesVgw}
         * @param propagateIntraRouteTablesVgw Should be true if you want route table propagation.
         * @return {@code this}
         */
        public Builder propagateIntraRouteTablesVgw(java.lang.Boolean propagateIntraRouteTablesVgw) {
            this.propagateIntraRouteTablesVgw = propagateIntraRouteTablesVgw;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPropagatePrivateRouteTablesVgw}
         * @param propagatePrivateRouteTablesVgw Should be true if you want route table propagation.
         * @return {@code this}
         */
        public Builder propagatePrivateRouteTablesVgw(java.lang.Boolean propagatePrivateRouteTablesVgw) {
            this.propagatePrivateRouteTablesVgw = propagatePrivateRouteTablesVgw;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPropagatePublicRouteTablesVgw}
         * @param propagatePublicRouteTablesVgw Should be true if you want route table propagation.
         * @return {@code this}
         */
        public Builder propagatePublicRouteTablesVgw(java.lang.Boolean propagatePublicRouteTablesVgw) {
            this.propagatePublicRouteTablesVgw = propagatePublicRouteTablesVgw;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicAclTags}
         * @param publicAclTags Additional tags for the public subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder publicAclTags(java.util.Map<java.lang.String, java.lang.String> publicAclTags) {
            this.publicAclTags = publicAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicDedicatedNetworkAcl}
         * @param publicDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for public subnets.
         * @return {@code this}
         */
        public Builder publicDedicatedNetworkAcl(java.lang.Boolean publicDedicatedNetworkAcl) {
            this.publicDedicatedNetworkAcl = publicDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicInboundAclRules}
         * @param publicInboundAclRules Public subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder publicInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> publicInboundAclRules) {
            this.publicInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)publicInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicOutboundAclRules}
         * @param publicOutboundAclRules Public subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder publicOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> publicOutboundAclRules) {
            this.publicOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)publicOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicRouteTableTags}
         * @param publicRouteTableTags Additional tags for the public route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder publicRouteTableTags(java.util.Map<java.lang.String, java.lang.String> publicRouteTableTags) {
            this.publicRouteTableTags = publicRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetAssignIpv6AddressOnCreation}
         * @param publicSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                Default is <code>false</code>
         * @return {@code this}
         */
        public Builder publicSubnetAssignIpv6AddressOnCreation(java.lang.Boolean publicSubnetAssignIpv6AddressOnCreation) {
            this.publicSubnetAssignIpv6AddressOnCreation = publicSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetEnableDns64}
         * @param publicSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                Default: <code>true</code>
         *                                true
         * @return {@code this}
         */
        public Builder publicSubnetEnableDns64(java.lang.Boolean publicSubnetEnableDns64) {
            this.publicSubnetEnableDns64 = publicSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                            Default: <code>true</code>
         *                                                            true
         * @return {@code this}
         */
        public Builder publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch = publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param publicSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                         Default: <code>false</code>
         * @return {@code this}
         */
        public Builder publicSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean publicSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.publicSubnetEnableResourceNameDnsARecordOnLaunch = publicSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetIpv6Native}
         * @param publicSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                               Default: <code>false</code>
         * @return {@code this}
         */
        public Builder publicSubnetIpv6Native(java.lang.Boolean publicSubnetIpv6Native) {
            this.publicSubnetIpv6Native = publicSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetIpv6Prefixes}
         * @param publicSubnetIpv6Prefixes Assigns IPv6 public subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                 Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder publicSubnetIpv6Prefixes(java.util.List<java.lang.String> publicSubnetIpv6Prefixes) {
            this.publicSubnetIpv6Prefixes = publicSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetNames}
         * @param publicSubnetNames Explicit values to use in the Name tag on public subnets.
         *                          If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder publicSubnetNames(java.util.List<java.lang.String> publicSubnetNames) {
            this.publicSubnetNames = publicSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param publicSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                   For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder publicSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String publicSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.publicSubnetPrivateDnsHostnameTypeOnLaunch = publicSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnets}
         * @param publicSubnets A list of public subnets inside the VPC.
         * @return {@code this}
         */
        public Builder publicSubnets(java.util.List<java.lang.String> publicSubnets) {
            this.publicSubnets = publicSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetSuffix}
         * @param publicSubnetSuffix Suffix to append to public subnets name public.
         * @return {@code this}
         */
        public Builder publicSubnetSuffix(java.lang.String publicSubnetSuffix) {
            this.publicSubnetSuffix = publicSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetTags}
         * @param publicSubnetTags Additional tags for the public subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder publicSubnetTags(java.util.Map<java.lang.String, java.lang.String> publicSubnetTags) {
            this.publicSubnetTags = publicSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPublicSubnetTagsPerAz}
         * @param publicSubnetTagsPerAz Additional tags for the public subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder publicSubnetTagsPerAz(java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, java.lang.String>> publicSubnetTagsPerAz) {
            this.publicSubnetTagsPerAz = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)publicSubnetTagsPerAz;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getPutinKhuylo}
         * @param putinKhuylo Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?.
         *                    More info: https://en.wikipedia.org/wiki/Putin_khuylo!
         *                    true
         * @return {@code this}
         */
        public Builder putinKhuylo(java.lang.Boolean putinKhuylo) {
            this.putinKhuylo = putinKhuylo;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftAclTags}
         * @param redshiftAclTags Additional tags for the redshift subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder redshiftAclTags(java.util.Map<java.lang.String, java.lang.String> redshiftAclTags) {
            this.redshiftAclTags = redshiftAclTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftDedicatedNetworkAcl}
         * @param redshiftDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for redshift subnets.
         * @return {@code this}
         */
        public Builder redshiftDedicatedNetworkAcl(java.lang.Boolean redshiftDedicatedNetworkAcl) {
            this.redshiftDedicatedNetworkAcl = redshiftDedicatedNetworkAcl;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftInboundAclRules}
         * @param redshiftInboundAclRules Redshift subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder redshiftInboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> redshiftInboundAclRules) {
            this.redshiftInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)redshiftInboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftOutboundAclRules}
         * @param redshiftOutboundAclRules Redshift subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder redshiftOutboundAclRules(java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> redshiftOutboundAclRules) {
            this.redshiftOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)redshiftOutboundAclRules;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftRouteTableTags}
         * @param redshiftRouteTableTags Additional tags for the redshift route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder redshiftRouteTableTags(java.util.Map<java.lang.String, java.lang.String> redshiftRouteTableTags) {
            this.redshiftRouteTableTags = redshiftRouteTableTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetAssignIpv6AddressOnCreation}
         * @param redshiftSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         *                                                  Default is <code>false</code>
         * @return {@code this}
         */
        public Builder redshiftSubnetAssignIpv6AddressOnCreation(java.lang.Boolean redshiftSubnetAssignIpv6AddressOnCreation) {
            this.redshiftSubnetAssignIpv6AddressOnCreation = redshiftSubnetAssignIpv6AddressOnCreation;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetEnableDns64}
         * @param redshiftSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         *                                  Default: <code>true</code>
         *                                  true
         * @return {@code this}
         */
        public Builder redshiftSubnetEnableDns64(java.lang.Boolean redshiftSubnetEnableDns64) {
            this.redshiftSubnetEnableDns64 = redshiftSubnetEnableDns64;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch}
         * @param redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         *                                                              Default: <code>true</code>
         *                                                              true
         * @return {@code this}
         */
        public Builder redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch = redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch}
         * @param redshiftSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         *                                                           Default: <code>false</code>
         * @return {@code this}
         */
        public Builder redshiftSubnetEnableResourceNameDnsARecordOnLaunch(java.lang.Boolean redshiftSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch = redshiftSubnetEnableResourceNameDnsARecordOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetGroupName}
         * @param redshiftSubnetGroupName Name of redshift subnet group.
         * @return {@code this}
         */
        public Builder redshiftSubnetGroupName(java.lang.String redshiftSubnetGroupName) {
            this.redshiftSubnetGroupName = redshiftSubnetGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetGroupTags}
         * @param redshiftSubnetGroupTags Additional tags for the redshift subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder redshiftSubnetGroupTags(java.util.Map<java.lang.String, java.lang.String> redshiftSubnetGroupTags) {
            this.redshiftSubnetGroupTags = redshiftSubnetGroupTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetIpv6Native}
         * @param redshiftSubnetIpv6Native Indicates whether to create an IPv6-only subnet.
         *                                 Default: <code>false</code>
         * @return {@code this}
         */
        public Builder redshiftSubnetIpv6Native(java.lang.Boolean redshiftSubnetIpv6Native) {
            this.redshiftSubnetIpv6Native = redshiftSubnetIpv6Native;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetIpv6Prefixes}
         * @param redshiftSubnetIpv6Prefixes Assigns IPv6 redshift subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         *                                   Must be of equal length to the corresponding IPv4 subnet list
         * @return {@code this}
         */
        public Builder redshiftSubnetIpv6Prefixes(java.util.List<java.lang.String> redshiftSubnetIpv6Prefixes) {
            this.redshiftSubnetIpv6Prefixes = redshiftSubnetIpv6Prefixes;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetNames}
         * @param redshiftSubnetNames Explicit values to use in the Name tag on redshift subnets.
         *                            If empty, Name tags are generated
         * @return {@code this}
         */
        public Builder redshiftSubnetNames(java.util.List<java.lang.String> redshiftSubnetNames) {
            this.redshiftSubnetNames = redshiftSubnetNames;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch}
         * @param redshiftSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch.
         *                                                     For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * @return {@code this}
         */
        public Builder redshiftSubnetPrivateDnsHostnameTypeOnLaunch(java.lang.String redshiftSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch = redshiftSubnetPrivateDnsHostnameTypeOnLaunch;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnets}
         * @param redshiftSubnets A list of redshift subnets inside the VPC.
         * @return {@code this}
         */
        public Builder redshiftSubnets(java.util.List<java.lang.String> redshiftSubnets) {
            this.redshiftSubnets = redshiftSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetSuffix}
         * @param redshiftSubnetSuffix Suffix to append to redshift subnets name redshift.
         * @return {@code this}
         */
        public Builder redshiftSubnetSuffix(java.lang.String redshiftSubnetSuffix) {
            this.redshiftSubnetSuffix = redshiftSubnetSuffix;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getRedshiftSubnetTags}
         * @param redshiftSubnetTags Additional tags for the redshift subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder redshiftSubnetTags(java.util.Map<java.lang.String, java.lang.String> redshiftSubnetTags) {
            this.redshiftSubnetTags = redshiftSubnetTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getReuseNatIps}
         * @param reuseNatIps Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable.
         * @return {@code this}
         */
        public Builder reuseNatIps(java.lang.Boolean reuseNatIps) {
            this.reuseNatIps = reuseNatIps;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getSecondaryCidrBlocks}
         * @param secondaryCidrBlocks List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool.
         * @return {@code this}
         */
        public Builder secondaryCidrBlocks(java.util.List<java.lang.String> secondaryCidrBlocks) {
            this.secondaryCidrBlocks = secondaryCidrBlocks;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getSingleNatGateway}
         * @param singleNatGateway Should be true if you want to provision a single shared NAT Gateway across all of your private networks.
         * @return {@code this}
         */
        public Builder singleNatGateway(java.lang.Boolean singleNatGateway) {
            this.singleNatGateway = singleNatGateway;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getTags}
         * @param tags A map of tags to add to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder tags(java.util.Map<java.lang.String, java.lang.String> tags) {
            this.tags = tags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getUseIpamPool}
         * @param useIpamPool Determines whether IPAM pool is used for CIDR allocation.
         * @return {@code this}
         */
        public Builder useIpamPool(java.lang.Boolean useIpamPool) {
            this.useIpamPool = useIpamPool;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpcFlowLogPermissionsBoundary}
         * @param vpcFlowLogPermissionsBoundary The ARN of the Permissions Boundary for the VPC Flow Log IAM Role.
         * @return {@code this}
         */
        public Builder vpcFlowLogPermissionsBoundary(java.lang.String vpcFlowLogPermissionsBoundary) {
            this.vpcFlowLogPermissionsBoundary = vpcFlowLogPermissionsBoundary;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpcFlowLogTags}
         * @param vpcFlowLogTags Additional tags for the VPC Flow Logs The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder vpcFlowLogTags(java.util.Map<java.lang.String, java.lang.String> vpcFlowLogTags) {
            this.vpcFlowLogTags = vpcFlowLogTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpcTags}
         * @param vpcTags Additional tags for the VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder vpcTags(java.util.Map<java.lang.String, java.lang.String> vpcTags) {
            this.vpcTags = vpcTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpnGatewayAz}
         * @param vpnGatewayAz The Availability Zone for the VPN Gateway.
         * @return {@code this}
         */
        public Builder vpnGatewayAz(java.lang.String vpnGatewayAz) {
            this.vpnGatewayAz = vpnGatewayAz;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpnGatewayId}
         * @param vpnGatewayId ID of VPN Gateway to attach to the VPC.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getVpnGatewayTags}
         * @param vpnGatewayTags Additional tags for the VPN gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * @return {@code this}
         */
        public Builder vpnGatewayTags(java.util.Map<java.lang.String, java.lang.String> vpnGatewayTags) {
            this.vpnGatewayTags = vpnGatewayTags;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getDependsOn}
         * @param dependsOn the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @SuppressWarnings("unchecked")
        public Builder dependsOn(java.util.List<? extends com.hashicorp.cdktf.ITerraformDependable> dependsOn) {
            this.dependsOn = (java.util.List<com.hashicorp.cdktf.ITerraformDependable>)dependsOn;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getForEach}
         * @param forEach the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder forEach(com.hashicorp.cdktf.ITerraformIterator forEach) {
            this.forEach = forEach;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getProviders}
         * @param providers the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @SuppressWarnings("unchecked")
        public Builder providers(java.util.List<? extends java.lang.Object> providers) {
            this.providers = (java.util.List<java.lang.Object>)providers;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfig#getSkipAssetCreationFromLocalModules}
         * @param skipAssetCreationFromLocalModules the value to be set.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder skipAssetCreationFromLocalModules(java.lang.Boolean skipAssetCreationFromLocalModules) {
            this.skipAssetCreationFromLocalModules = skipAssetCreationFromLocalModules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcConfig}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcConfig build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcConfig}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfig {
        private final java.lang.String amazonSideAsn;
        private final java.util.List<java.lang.String> azs;
        private final java.lang.String cidr;
        private final java.lang.Boolean createDatabaseInternetGatewayRoute;
        private final java.lang.Boolean createDatabaseNatGatewayRoute;
        private final java.lang.Boolean createDatabaseSubnetGroup;
        private final java.lang.Boolean createDatabaseSubnetRouteTable;
        private final java.lang.Boolean createEgressOnlyIgw;
        private final java.lang.Boolean createElasticacheSubnetGroup;
        private final java.lang.Boolean createElasticacheSubnetRouteTable;
        private final java.lang.Boolean createFlowLogCloudwatchIamRole;
        private final java.lang.Boolean createFlowLogCloudwatchLogGroup;
        private final java.lang.Boolean createIgw;
        private final java.lang.Boolean createRedshiftSubnetGroup;
        private final java.lang.Boolean createRedshiftSubnetRouteTable;
        private final java.lang.Boolean createVpc;
        private final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> customerGateways;
        private final java.util.Map<java.lang.String, java.lang.String> customerGatewayTags;
        private final java.lang.String customerOwnedIpv4Pool;
        private final java.util.Map<java.lang.String, java.lang.String> databaseAclTags;
        private final java.lang.Boolean databaseDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> databaseInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> databaseOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> databaseRouteTableTags;
        private final java.lang.Boolean databaseSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean databaseSubnetEnableDns64;
        private final java.lang.Boolean databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean databaseSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.String databaseSubnetGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> databaseSubnetGroupTags;
        private final java.lang.Boolean databaseSubnetIpv6Native;
        private final java.util.List<java.lang.String> databaseSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> databaseSubnetNames;
        private final java.lang.String databaseSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> databaseSubnets;
        private final java.lang.String databaseSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> databaseSubnetTags;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclEgress;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclIngress;
        private final java.lang.String defaultNetworkAclName;
        private final java.util.Map<java.lang.String, java.lang.String> defaultNetworkAclTags;
        private final java.lang.String defaultRouteTableName;
        private final java.util.List<java.lang.String> defaultRouteTablePropagatingVgws;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultRouteTableRoutes;
        private final java.util.Map<java.lang.String, java.lang.String> defaultRouteTableTags;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupEgress;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupIngress;
        private final java.lang.String defaultSecurityGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> defaultSecurityGroupTags;
        private final java.lang.Boolean defaultVpcEnableDnsHostnames;
        private final java.lang.Boolean defaultVpcEnableDnsSupport;
        private final java.lang.String defaultVpcName;
        private final java.util.Map<java.lang.String, java.lang.String> defaultVpcTags;
        private final java.lang.String dhcpOptionsDomainName;
        private final java.util.List<java.lang.String> dhcpOptionsDomainNameServers;
        private final java.util.List<java.lang.String> dhcpOptionsNetbiosNameServers;
        private final java.lang.String dhcpOptionsNetbiosNodeType;
        private final java.util.List<java.lang.String> dhcpOptionsNtpServers;
        private final java.util.Map<java.lang.String, java.lang.String> dhcpOptionsTags;
        private final java.util.Map<java.lang.String, java.lang.String> elasticacheAclTags;
        private final java.lang.Boolean elasticacheDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> elasticacheInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> elasticacheOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> elasticacheRouteTableTags;
        private final java.lang.Boolean elasticacheSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean elasticacheSubnetEnableDns64;
        private final java.lang.Boolean elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean elasticacheSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.String elasticacheSubnetGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetGroupTags;
        private final java.lang.Boolean elasticacheSubnetIpv6Native;
        private final java.util.List<java.lang.String> elasticacheSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> elasticacheSubnetNames;
        private final java.lang.String elasticacheSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> elasticacheSubnets;
        private final java.lang.String elasticacheSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetTags;
        private final java.lang.Boolean enableDhcpOptions;
        private final java.lang.Boolean enableDnsHostnames;
        private final java.lang.Boolean enableDnsSupport;
        private final java.lang.Boolean enableFlowLog;
        private final java.lang.Boolean enableIpv6;
        private final java.lang.Boolean enableNatGateway;
        private final java.lang.Boolean enableNetworkAddressUsageMetrics;
        private final java.lang.Boolean enablePublicRedshift;
        private final java.lang.Boolean enableVpnGateway;
        private final java.util.List<java.lang.String> externalNatIpIds;
        private final java.util.List<java.lang.String> externalNatIps;
        private final java.lang.String flowLogCloudwatchIamRoleArn;
        private final java.lang.String flowLogCloudwatchLogGroupKmsKeyId;
        private final java.lang.String flowLogCloudwatchLogGroupNamePrefix;
        private final java.lang.String flowLogCloudwatchLogGroupNameSuffix;
        private final java.lang.Number flowLogCloudwatchLogGroupRetentionInDays;
        private final java.lang.String flowLogDestinationArn;
        private final java.lang.String flowLogDestinationType;
        private final java.lang.String flowLogFileFormat;
        private final java.lang.Boolean flowLogHiveCompatiblePartitions;
        private final java.lang.String flowLogLogFormat;
        private final java.lang.Number flowLogMaxAggregationInterval;
        private final java.lang.Boolean flowLogPerHourPartition;
        private final java.lang.String flowLogTrafficType;
        private final java.util.Map<java.lang.String, java.lang.String> igwTags;
        private final java.lang.String instanceTenancy;
        private final java.util.Map<java.lang.String, java.lang.String> intraAclTags;
        private final java.lang.Boolean intraDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> intraInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> intraOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> intraRouteTableTags;
        private final java.lang.Boolean intraSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean intraSubnetEnableDns64;
        private final java.lang.Boolean intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean intraSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.Boolean intraSubnetIpv6Native;
        private final java.util.List<java.lang.String> intraSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> intraSubnetNames;
        private final java.lang.String intraSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> intraSubnets;
        private final java.lang.String intraSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> intraSubnetTags;
        private final java.lang.String ipv4IpamPoolId;
        private final java.lang.Number ipv4NetmaskLength;
        private final java.lang.String ipv6Cidr;
        private final java.lang.String ipv6CidrBlockNetworkBorderGroup;
        private final java.lang.String ipv6IpamPoolId;
        private final java.lang.Number ipv6NetmaskLength;
        private final java.lang.Boolean manageDefaultNetworkAcl;
        private final java.lang.Boolean manageDefaultRouteTable;
        private final java.lang.Boolean manageDefaultSecurityGroup;
        private final java.lang.Boolean manageDefaultVpc;
        private final java.lang.Boolean mapCustomerOwnedIpOnLaunch;
        private final java.lang.Boolean mapPublicIpOnLaunch;
        private final java.lang.String name;
        private final java.util.Map<java.lang.String, java.lang.String> natEipTags;
        private final java.lang.String natGatewayDestinationCidrBlock;
        private final java.util.Map<java.lang.String, java.lang.String> natGatewayTags;
        private final java.lang.Boolean oneNatGatewayPerAz;
        private final java.util.Map<java.lang.String, java.lang.String> outpostAclTags;
        private final java.lang.String outpostArn;
        private final java.lang.String outpostAz;
        private final java.lang.Boolean outpostDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> outpostInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> outpostOutboundAclRules;
        private final java.lang.Boolean outpostSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean outpostSubnetEnableDns64;
        private final java.lang.Boolean outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean outpostSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.Boolean outpostSubnetIpv6Native;
        private final java.util.List<java.lang.String> outpostSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> outpostSubnetNames;
        private final java.lang.String outpostSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> outpostSubnets;
        private final java.lang.String outpostSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> outpostSubnetTags;
        private final java.util.Map<java.lang.String, java.lang.String> privateAclTags;
        private final java.lang.Boolean privateDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> privateInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> privateOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> privateRouteTableTags;
        private final java.lang.Boolean privateSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean privateSubnetEnableDns64;
        private final java.lang.Boolean privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean privateSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.Boolean privateSubnetIpv6Native;
        private final java.util.List<java.lang.String> privateSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> privateSubnetNames;
        private final java.lang.String privateSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> privateSubnets;
        private final java.lang.String privateSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> privateSubnetTags;
        private final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> privateSubnetTagsPerAz;
        private final java.lang.Boolean propagateIntraRouteTablesVgw;
        private final java.lang.Boolean propagatePrivateRouteTablesVgw;
        private final java.lang.Boolean propagatePublicRouteTablesVgw;
        private final java.util.Map<java.lang.String, java.lang.String> publicAclTags;
        private final java.lang.Boolean publicDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> publicInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> publicOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> publicRouteTableTags;
        private final java.lang.Boolean publicSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean publicSubnetEnableDns64;
        private final java.lang.Boolean publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean publicSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.Boolean publicSubnetIpv6Native;
        private final java.util.List<java.lang.String> publicSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> publicSubnetNames;
        private final java.lang.String publicSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> publicSubnets;
        private final java.lang.String publicSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> publicSubnetTags;
        private final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> publicSubnetTagsPerAz;
        private final java.lang.Boolean putinKhuylo;
        private final java.util.Map<java.lang.String, java.lang.String> redshiftAclTags;
        private final java.lang.Boolean redshiftDedicatedNetworkAcl;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> redshiftInboundAclRules;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.String>> redshiftOutboundAclRules;
        private final java.util.Map<java.lang.String, java.lang.String> redshiftRouteTableTags;
        private final java.lang.Boolean redshiftSubnetAssignIpv6AddressOnCreation;
        private final java.lang.Boolean redshiftSubnetEnableDns64;
        private final java.lang.Boolean redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        private final java.lang.Boolean redshiftSubnetEnableResourceNameDnsARecordOnLaunch;
        private final java.lang.String redshiftSubnetGroupName;
        private final java.util.Map<java.lang.String, java.lang.String> redshiftSubnetGroupTags;
        private final java.lang.Boolean redshiftSubnetIpv6Native;
        private final java.util.List<java.lang.String> redshiftSubnetIpv6Prefixes;
        private final java.util.List<java.lang.String> redshiftSubnetNames;
        private final java.lang.String redshiftSubnetPrivateDnsHostnameTypeOnLaunch;
        private final java.util.List<java.lang.String> redshiftSubnets;
        private final java.lang.String redshiftSubnetSuffix;
        private final java.util.Map<java.lang.String, java.lang.String> redshiftSubnetTags;
        private final java.lang.Boolean reuseNatIps;
        private final java.util.List<java.lang.String> secondaryCidrBlocks;
        private final java.lang.Boolean singleNatGateway;
        private final java.util.Map<java.lang.String, java.lang.String> tags;
        private final java.lang.Boolean useIpamPool;
        private final java.lang.String vpcFlowLogPermissionsBoundary;
        private final java.util.Map<java.lang.String, java.lang.String> vpcFlowLogTags;
        private final java.util.Map<java.lang.String, java.lang.String> vpcTags;
        private final java.lang.String vpnGatewayAz;
        private final java.lang.String vpnGatewayId;
        private final java.util.Map<java.lang.String, java.lang.String> vpnGatewayTags;
        private final java.util.List<com.hashicorp.cdktf.ITerraformDependable> dependsOn;
        private final com.hashicorp.cdktf.ITerraformIterator forEach;
        private final java.util.List<java.lang.Object> providers;
        private final java.lang.Boolean skipAssetCreationFromLocalModules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.amazonSideAsn = software.amazon.jsii.Kernel.get(this, "amazonSideAsn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.azs = software.amazon.jsii.Kernel.get(this, "azs", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.cidr = software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.createDatabaseInternetGatewayRoute = software.amazon.jsii.Kernel.get(this, "createDatabaseInternetGatewayRoute", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDatabaseNatGatewayRoute = software.amazon.jsii.Kernel.get(this, "createDatabaseNatGatewayRoute", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDatabaseSubnetGroup = software.amazon.jsii.Kernel.get(this, "createDatabaseSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createDatabaseSubnetRouteTable = software.amazon.jsii.Kernel.get(this, "createDatabaseSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createEgressOnlyIgw = software.amazon.jsii.Kernel.get(this, "createEgressOnlyIgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createElasticacheSubnetGroup = software.amazon.jsii.Kernel.get(this, "createElasticacheSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createElasticacheSubnetRouteTable = software.amazon.jsii.Kernel.get(this, "createElasticacheSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createFlowLogCloudwatchIamRole = software.amazon.jsii.Kernel.get(this, "createFlowLogCloudwatchIamRole", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createFlowLogCloudwatchLogGroup = software.amazon.jsii.Kernel.get(this, "createFlowLogCloudwatchLogGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createIgw = software.amazon.jsii.Kernel.get(this, "createIgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createRedshiftSubnetGroup = software.amazon.jsii.Kernel.get(this, "createRedshiftSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createRedshiftSubnetRouteTable = software.amazon.jsii.Kernel.get(this, "createRedshiftSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.createVpc = software.amazon.jsii.Kernel.get(this, "createVpc", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.customerGateways = software.amazon.jsii.Kernel.get(this, "customerGateways", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
            this.customerGatewayTags = software.amazon.jsii.Kernel.get(this, "customerGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.customerOwnedIpv4Pool = software.amazon.jsii.Kernel.get(this, "customerOwnedIpv4Pool", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseAclTags = software.amazon.jsii.Kernel.get(this, "databaseAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "databaseDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseInboundAclRules = software.amazon.jsii.Kernel.get(this, "databaseInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.databaseOutboundAclRules = software.amazon.jsii.Kernel.get(this, "databaseOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.databaseRouteTableTags = software.amazon.jsii.Kernel.get(this, "databaseRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "databaseSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseSubnetGroupName = software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseSubnetGroupTags = software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "databaseSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.databaseSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "databaseSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseSubnetNames = software.amazon.jsii.Kernel.get(this, "databaseSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "databaseSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseSubnets = software.amazon.jsii.Kernel.get(this, "databaseSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.databaseSubnetSuffix = software.amazon.jsii.Kernel.get(this, "databaseSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseSubnetTags = software.amazon.jsii.Kernel.get(this, "databaseSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.defaultNetworkAclEgress = software.amazon.jsii.Kernel.get(this, "defaultNetworkAclEgress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.defaultNetworkAclIngress = software.amazon.jsii.Kernel.get(this, "defaultNetworkAclIngress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.defaultNetworkAclName = software.amazon.jsii.Kernel.get(this, "defaultNetworkAclName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultNetworkAclTags = software.amazon.jsii.Kernel.get(this, "defaultNetworkAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.defaultRouteTableName = software.amazon.jsii.Kernel.get(this, "defaultRouteTableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultRouteTablePropagatingVgws = software.amazon.jsii.Kernel.get(this, "defaultRouteTablePropagatingVgws", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.defaultRouteTableRoutes = software.amazon.jsii.Kernel.get(this, "defaultRouteTableRoutes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.defaultRouteTableTags = software.amazon.jsii.Kernel.get(this, "defaultRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.defaultSecurityGroupEgress = software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupEgress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.defaultSecurityGroupIngress = software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupIngress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.defaultSecurityGroupName = software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultSecurityGroupTags = software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.defaultVpcEnableDnsHostnames = software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsHostnames", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.defaultVpcEnableDnsSupport = software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsSupport", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.defaultVpcName = software.amazon.jsii.Kernel.get(this, "defaultVpcName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultVpcTags = software.amazon.jsii.Kernel.get(this, "defaultVpcTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dhcpOptionsDomainName = software.amazon.jsii.Kernel.get(this, "dhcpOptionsDomainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dhcpOptionsDomainNameServers = software.amazon.jsii.Kernel.get(this, "dhcpOptionsDomainNameServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dhcpOptionsNetbiosNameServers = software.amazon.jsii.Kernel.get(this, "dhcpOptionsNetbiosNameServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dhcpOptionsNetbiosNodeType = software.amazon.jsii.Kernel.get(this, "dhcpOptionsNetbiosNodeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dhcpOptionsNtpServers = software.amazon.jsii.Kernel.get(this, "dhcpOptionsNtpServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dhcpOptionsTags = software.amazon.jsii.Kernel.get(this, "dhcpOptionsTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheAclTags = software.amazon.jsii.Kernel.get(this, "elasticacheAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "elasticacheDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheInboundAclRules = software.amazon.jsii.Kernel.get(this, "elasticacheInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.elasticacheOutboundAclRules = software.amazon.jsii.Kernel.get(this, "elasticacheOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.elasticacheRouteTableTags = software.amazon.jsii.Kernel.get(this, "elasticacheRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheSubnetGroupName = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.elasticacheSubnetGroupTags = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.elasticacheSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheSubnetNames = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.elasticacheSubnets = software.amazon.jsii.Kernel.get(this, "elasticacheSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.elasticacheSubnetSuffix = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.elasticacheSubnetTags = software.amazon.jsii.Kernel.get(this, "elasticacheSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.enableDhcpOptions = software.amazon.jsii.Kernel.get(this, "enableDhcpOptions", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableDnsHostnames = software.amazon.jsii.Kernel.get(this, "enableDnsHostnames", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableDnsSupport = software.amazon.jsii.Kernel.get(this, "enableDnsSupport", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableFlowLog = software.amazon.jsii.Kernel.get(this, "enableFlowLog", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableIpv6 = software.amazon.jsii.Kernel.get(this, "enableIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableNatGateway = software.amazon.jsii.Kernel.get(this, "enableNatGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableNetworkAddressUsageMetrics = software.amazon.jsii.Kernel.get(this, "enableNetworkAddressUsageMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enablePublicRedshift = software.amazon.jsii.Kernel.get(this, "enablePublicRedshift", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.enableVpnGateway = software.amazon.jsii.Kernel.get(this, "enableVpnGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.externalNatIpIds = software.amazon.jsii.Kernel.get(this, "externalNatIpIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.externalNatIps = software.amazon.jsii.Kernel.get(this, "externalNatIps", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.flowLogCloudwatchIamRoleArn = software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchIamRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogCloudwatchLogGroupKmsKeyId = software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogCloudwatchLogGroupNamePrefix = software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogCloudwatchLogGroupNameSuffix = software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupNameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogCloudwatchLogGroupRetentionInDays = software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupRetentionInDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.flowLogDestinationArn = software.amazon.jsii.Kernel.get(this, "flowLogDestinationArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogDestinationType = software.amazon.jsii.Kernel.get(this, "flowLogDestinationType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogFileFormat = software.amazon.jsii.Kernel.get(this, "flowLogFileFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogHiveCompatiblePartitions = software.amazon.jsii.Kernel.get(this, "flowLogHiveCompatiblePartitions", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.flowLogLogFormat = software.amazon.jsii.Kernel.get(this, "flowLogLogFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowLogMaxAggregationInterval = software.amazon.jsii.Kernel.get(this, "flowLogMaxAggregationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.flowLogPerHourPartition = software.amazon.jsii.Kernel.get(this, "flowLogPerHourPartition", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.flowLogTrafficType = software.amazon.jsii.Kernel.get(this, "flowLogTrafficType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.igwTags = software.amazon.jsii.Kernel.get(this, "igwTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.instanceTenancy = software.amazon.jsii.Kernel.get(this, "instanceTenancy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.intraAclTags = software.amazon.jsii.Kernel.get(this, "intraAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.intraDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "intraDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraInboundAclRules = software.amazon.jsii.Kernel.get(this, "intraInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.intraOutboundAclRules = software.amazon.jsii.Kernel.get(this, "intraOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.intraRouteTableTags = software.amazon.jsii.Kernel.get(this, "intraRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.intraSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "intraSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "intraSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "intraSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "intraSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.intraSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "intraSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.intraSubnetNames = software.amazon.jsii.Kernel.get(this, "intraSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.intraSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "intraSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.intraSubnets = software.amazon.jsii.Kernel.get(this, "intraSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.intraSubnetSuffix = software.amazon.jsii.Kernel.get(this, "intraSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.intraSubnetTags = software.amazon.jsii.Kernel.get(this, "intraSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.ipv4IpamPoolId = software.amazon.jsii.Kernel.get(this, "ipv4IpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv4NetmaskLength = software.amazon.jsii.Kernel.get(this, "ipv4NetmaskLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ipv6Cidr = software.amazon.jsii.Kernel.get(this, "ipv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6CidrBlockNetworkBorderGroup = software.amazon.jsii.Kernel.get(this, "ipv6CidrBlockNetworkBorderGroup", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6IpamPoolId = software.amazon.jsii.Kernel.get(this, "ipv6IpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6NetmaskLength = software.amazon.jsii.Kernel.get(this, "ipv6NetmaskLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.manageDefaultNetworkAcl = software.amazon.jsii.Kernel.get(this, "manageDefaultNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.manageDefaultRouteTable = software.amazon.jsii.Kernel.get(this, "manageDefaultRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.manageDefaultSecurityGroup = software.amazon.jsii.Kernel.get(this, "manageDefaultSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.manageDefaultVpc = software.amazon.jsii.Kernel.get(this, "manageDefaultVpc", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.mapCustomerOwnedIpOnLaunch = software.amazon.jsii.Kernel.get(this, "mapCustomerOwnedIpOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.mapPublicIpOnLaunch = software.amazon.jsii.Kernel.get(this, "mapPublicIpOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.natEipTags = software.amazon.jsii.Kernel.get(this, "natEipTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.natGatewayDestinationCidrBlock = software.amazon.jsii.Kernel.get(this, "natGatewayDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.natGatewayTags = software.amazon.jsii.Kernel.get(this, "natGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.oneNatGatewayPerAz = software.amazon.jsii.Kernel.get(this, "oneNatGatewayPerAz", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostAclTags = software.amazon.jsii.Kernel.get(this, "outpostAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.outpostArn = software.amazon.jsii.Kernel.get(this, "outpostArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.outpostAz = software.amazon.jsii.Kernel.get(this, "outpostAz", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.outpostDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "outpostDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostInboundAclRules = software.amazon.jsii.Kernel.get(this, "outpostInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.outpostOutboundAclRules = software.amazon.jsii.Kernel.get(this, "outpostOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.outpostSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "outpostSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "outpostSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.outpostSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "outpostSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.outpostSubnetNames = software.amazon.jsii.Kernel.get(this, "outpostSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.outpostSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "outpostSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.outpostSubnets = software.amazon.jsii.Kernel.get(this, "outpostSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.outpostSubnetSuffix = software.amazon.jsii.Kernel.get(this, "outpostSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.outpostSubnetTags = software.amazon.jsii.Kernel.get(this, "outpostSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateAclTags = software.amazon.jsii.Kernel.get(this, "privateAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "privateDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateInboundAclRules = software.amazon.jsii.Kernel.get(this, "privateInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.privateOutboundAclRules = software.amazon.jsii.Kernel.get(this, "privateOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.privateRouteTableTags = software.amazon.jsii.Kernel.get(this, "privateRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "privateSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "privateSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "privateSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "privateSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.privateSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "privateSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateSubnetNames = software.amazon.jsii.Kernel.get(this, "privateSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "privateSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateSubnets = software.amazon.jsii.Kernel.get(this, "privateSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateSubnetSuffix = software.amazon.jsii.Kernel.get(this, "privateSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateSubnetTags = software.amazon.jsii.Kernel.get(this, "privateSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.privateSubnetTagsPerAz = software.amazon.jsii.Kernel.get(this, "privateSubnetTagsPerAz", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.propagateIntraRouteTablesVgw = software.amazon.jsii.Kernel.get(this, "propagateIntraRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.propagatePrivateRouteTablesVgw = software.amazon.jsii.Kernel.get(this, "propagatePrivateRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.propagatePublicRouteTablesVgw = software.amazon.jsii.Kernel.get(this, "propagatePublicRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicAclTags = software.amazon.jsii.Kernel.get(this, "publicAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "publicDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicInboundAclRules = software.amazon.jsii.Kernel.get(this, "publicInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.publicOutboundAclRules = software.amazon.jsii.Kernel.get(this, "publicOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.publicRouteTableTags = software.amazon.jsii.Kernel.get(this, "publicRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "publicSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "publicSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "publicSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "publicSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.publicSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "publicSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicSubnetNames = software.amazon.jsii.Kernel.get(this, "publicSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "publicSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.publicSubnets = software.amazon.jsii.Kernel.get(this, "publicSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicSubnetSuffix = software.amazon.jsii.Kernel.get(this, "publicSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.publicSubnetTags = software.amazon.jsii.Kernel.get(this, "publicSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.publicSubnetTagsPerAz = software.amazon.jsii.Kernel.get(this, "publicSubnetTagsPerAz", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.putinKhuylo = software.amazon.jsii.Kernel.get(this, "putinKhuylo", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftAclTags = software.amazon.jsii.Kernel.get(this, "redshiftAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftDedicatedNetworkAcl = software.amazon.jsii.Kernel.get(this, "redshiftDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftInboundAclRules = software.amazon.jsii.Kernel.get(this, "redshiftInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.redshiftOutboundAclRules = software.amazon.jsii.Kernel.get(this, "redshiftOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.redshiftRouteTableTags = software.amazon.jsii.Kernel.get(this, "redshiftRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftSubnetAssignIpv6AddressOnCreation = software.amazon.jsii.Kernel.get(this, "redshiftSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftSubnetEnableDns64 = software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch = software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch = software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftSubnetGroupName = software.amazon.jsii.Kernel.get(this, "redshiftSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.redshiftSubnetGroupTags = software.amazon.jsii.Kernel.get(this, "redshiftSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftSubnetIpv6Native = software.amazon.jsii.Kernel.get(this, "redshiftSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.redshiftSubnetIpv6Prefixes = software.amazon.jsii.Kernel.get(this, "redshiftSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftSubnetNames = software.amazon.jsii.Kernel.get(this, "redshiftSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch = software.amazon.jsii.Kernel.get(this, "redshiftSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.redshiftSubnets = software.amazon.jsii.Kernel.get(this, "redshiftSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.redshiftSubnetSuffix = software.amazon.jsii.Kernel.get(this, "redshiftSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.redshiftSubnetTags = software.amazon.jsii.Kernel.get(this, "redshiftSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.reuseNatIps = software.amazon.jsii.Kernel.get(this, "reuseNatIps", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.secondaryCidrBlocks = software.amazon.jsii.Kernel.get(this, "secondaryCidrBlocks", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.singleNatGateway = software.amazon.jsii.Kernel.get(this, "singleNatGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.useIpamPool = software.amazon.jsii.Kernel.get(this, "useIpamPool", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.vpcFlowLogPermissionsBoundary = software.amazon.jsii.Kernel.get(this, "vpcFlowLogPermissionsBoundary", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcFlowLogTags = software.amazon.jsii.Kernel.get(this, "vpcFlowLogTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.vpcTags = software.amazon.jsii.Kernel.get(this, "vpcTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.vpnGatewayAz = software.amazon.jsii.Kernel.get(this, "vpnGatewayAz", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpnGatewayTags = software.amazon.jsii.Kernel.get(this, "vpnGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dependsOn = software.amazon.jsii.Kernel.get(this, "dependsOn", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.hashicorp.cdktf.ITerraformDependable.class)));
            this.forEach = software.amazon.jsii.Kernel.get(this, "forEach", software.amazon.jsii.NativeType.forClass(com.hashicorp.cdktf.ITerraformIterator.class));
            this.providers = software.amazon.jsii.Kernel.get(this, "providers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.skipAssetCreationFromLocalModules = software.amazon.jsii.Kernel.get(this, "skipAssetCreationFromLocalModules", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.amazonSideAsn = builder.amazonSideAsn;
            this.azs = builder.azs;
            this.cidr = builder.cidr;
            this.createDatabaseInternetGatewayRoute = builder.createDatabaseInternetGatewayRoute;
            this.createDatabaseNatGatewayRoute = builder.createDatabaseNatGatewayRoute;
            this.createDatabaseSubnetGroup = builder.createDatabaseSubnetGroup;
            this.createDatabaseSubnetRouteTable = builder.createDatabaseSubnetRouteTable;
            this.createEgressOnlyIgw = builder.createEgressOnlyIgw;
            this.createElasticacheSubnetGroup = builder.createElasticacheSubnetGroup;
            this.createElasticacheSubnetRouteTable = builder.createElasticacheSubnetRouteTable;
            this.createFlowLogCloudwatchIamRole = builder.createFlowLogCloudwatchIamRole;
            this.createFlowLogCloudwatchLogGroup = builder.createFlowLogCloudwatchLogGroup;
            this.createIgw = builder.createIgw;
            this.createRedshiftSubnetGroup = builder.createRedshiftSubnetGroup;
            this.createRedshiftSubnetRouteTable = builder.createRedshiftSubnetRouteTable;
            this.createVpc = builder.createVpc;
            this.customerGateways = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>>)builder.customerGateways;
            this.customerGatewayTags = builder.customerGatewayTags;
            this.customerOwnedIpv4Pool = builder.customerOwnedIpv4Pool;
            this.databaseAclTags = builder.databaseAclTags;
            this.databaseDedicatedNetworkAcl = builder.databaseDedicatedNetworkAcl;
            this.databaseInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.databaseInboundAclRules;
            this.databaseOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.databaseOutboundAclRules;
            this.databaseRouteTableTags = builder.databaseRouteTableTags;
            this.databaseSubnetAssignIpv6AddressOnCreation = builder.databaseSubnetAssignIpv6AddressOnCreation;
            this.databaseSubnetEnableDns64 = builder.databaseSubnetEnableDns64;
            this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.databaseSubnetEnableResourceNameDnsARecordOnLaunch = builder.databaseSubnetEnableResourceNameDnsARecordOnLaunch;
            this.databaseSubnetGroupName = builder.databaseSubnetGroupName;
            this.databaseSubnetGroupTags = builder.databaseSubnetGroupTags;
            this.databaseSubnetIpv6Native = builder.databaseSubnetIpv6Native;
            this.databaseSubnetIpv6Prefixes = builder.databaseSubnetIpv6Prefixes;
            this.databaseSubnetNames = builder.databaseSubnetNames;
            this.databaseSubnetPrivateDnsHostnameTypeOnLaunch = builder.databaseSubnetPrivateDnsHostnameTypeOnLaunch;
            this.databaseSubnets = builder.databaseSubnets;
            this.databaseSubnetSuffix = builder.databaseSubnetSuffix;
            this.databaseSubnetTags = builder.databaseSubnetTags;
            this.defaultNetworkAclEgress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.defaultNetworkAclEgress;
            this.defaultNetworkAclIngress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.defaultNetworkAclIngress;
            this.defaultNetworkAclName = builder.defaultNetworkAclName;
            this.defaultNetworkAclTags = builder.defaultNetworkAclTags;
            this.defaultRouteTableName = builder.defaultRouteTableName;
            this.defaultRouteTablePropagatingVgws = builder.defaultRouteTablePropagatingVgws;
            this.defaultRouteTableRoutes = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.defaultRouteTableRoutes;
            this.defaultRouteTableTags = builder.defaultRouteTableTags;
            this.defaultSecurityGroupEgress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.defaultSecurityGroupEgress;
            this.defaultSecurityGroupIngress = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.defaultSecurityGroupIngress;
            this.defaultSecurityGroupName = builder.defaultSecurityGroupName;
            this.defaultSecurityGroupTags = builder.defaultSecurityGroupTags;
            this.defaultVpcEnableDnsHostnames = builder.defaultVpcEnableDnsHostnames;
            this.defaultVpcEnableDnsSupport = builder.defaultVpcEnableDnsSupport;
            this.defaultVpcName = builder.defaultVpcName;
            this.defaultVpcTags = builder.defaultVpcTags;
            this.dhcpOptionsDomainName = builder.dhcpOptionsDomainName;
            this.dhcpOptionsDomainNameServers = builder.dhcpOptionsDomainNameServers;
            this.dhcpOptionsNetbiosNameServers = builder.dhcpOptionsNetbiosNameServers;
            this.dhcpOptionsNetbiosNodeType = builder.dhcpOptionsNetbiosNodeType;
            this.dhcpOptionsNtpServers = builder.dhcpOptionsNtpServers;
            this.dhcpOptionsTags = builder.dhcpOptionsTags;
            this.elasticacheAclTags = builder.elasticacheAclTags;
            this.elasticacheDedicatedNetworkAcl = builder.elasticacheDedicatedNetworkAcl;
            this.elasticacheInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.elasticacheInboundAclRules;
            this.elasticacheOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.elasticacheOutboundAclRules;
            this.elasticacheRouteTableTags = builder.elasticacheRouteTableTags;
            this.elasticacheSubnetAssignIpv6AddressOnCreation = builder.elasticacheSubnetAssignIpv6AddressOnCreation;
            this.elasticacheSubnetEnableDns64 = builder.elasticacheSubnetEnableDns64;
            this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch = builder.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch;
            this.elasticacheSubnetGroupName = builder.elasticacheSubnetGroupName;
            this.elasticacheSubnetGroupTags = builder.elasticacheSubnetGroupTags;
            this.elasticacheSubnetIpv6Native = builder.elasticacheSubnetIpv6Native;
            this.elasticacheSubnetIpv6Prefixes = builder.elasticacheSubnetIpv6Prefixes;
            this.elasticacheSubnetNames = builder.elasticacheSubnetNames;
            this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch = builder.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch;
            this.elasticacheSubnets = builder.elasticacheSubnets;
            this.elasticacheSubnetSuffix = builder.elasticacheSubnetSuffix;
            this.elasticacheSubnetTags = builder.elasticacheSubnetTags;
            this.enableDhcpOptions = builder.enableDhcpOptions;
            this.enableDnsHostnames = builder.enableDnsHostnames;
            this.enableDnsSupport = builder.enableDnsSupport;
            this.enableFlowLog = builder.enableFlowLog;
            this.enableIpv6 = builder.enableIpv6;
            this.enableNatGateway = builder.enableNatGateway;
            this.enableNetworkAddressUsageMetrics = builder.enableNetworkAddressUsageMetrics;
            this.enablePublicRedshift = builder.enablePublicRedshift;
            this.enableVpnGateway = builder.enableVpnGateway;
            this.externalNatIpIds = builder.externalNatIpIds;
            this.externalNatIps = builder.externalNatIps;
            this.flowLogCloudwatchIamRoleArn = builder.flowLogCloudwatchIamRoleArn;
            this.flowLogCloudwatchLogGroupKmsKeyId = builder.flowLogCloudwatchLogGroupKmsKeyId;
            this.flowLogCloudwatchLogGroupNamePrefix = builder.flowLogCloudwatchLogGroupNamePrefix;
            this.flowLogCloudwatchLogGroupNameSuffix = builder.flowLogCloudwatchLogGroupNameSuffix;
            this.flowLogCloudwatchLogGroupRetentionInDays = builder.flowLogCloudwatchLogGroupRetentionInDays;
            this.flowLogDestinationArn = builder.flowLogDestinationArn;
            this.flowLogDestinationType = builder.flowLogDestinationType;
            this.flowLogFileFormat = builder.flowLogFileFormat;
            this.flowLogHiveCompatiblePartitions = builder.flowLogHiveCompatiblePartitions;
            this.flowLogLogFormat = builder.flowLogLogFormat;
            this.flowLogMaxAggregationInterval = builder.flowLogMaxAggregationInterval;
            this.flowLogPerHourPartition = builder.flowLogPerHourPartition;
            this.flowLogTrafficType = builder.flowLogTrafficType;
            this.igwTags = builder.igwTags;
            this.instanceTenancy = builder.instanceTenancy;
            this.intraAclTags = builder.intraAclTags;
            this.intraDedicatedNetworkAcl = builder.intraDedicatedNetworkAcl;
            this.intraInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.intraInboundAclRules;
            this.intraOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.intraOutboundAclRules;
            this.intraRouteTableTags = builder.intraRouteTableTags;
            this.intraSubnetAssignIpv6AddressOnCreation = builder.intraSubnetAssignIpv6AddressOnCreation;
            this.intraSubnetEnableDns64 = builder.intraSubnetEnableDns64;
            this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.intraSubnetEnableResourceNameDnsARecordOnLaunch = builder.intraSubnetEnableResourceNameDnsARecordOnLaunch;
            this.intraSubnetIpv6Native = builder.intraSubnetIpv6Native;
            this.intraSubnetIpv6Prefixes = builder.intraSubnetIpv6Prefixes;
            this.intraSubnetNames = builder.intraSubnetNames;
            this.intraSubnetPrivateDnsHostnameTypeOnLaunch = builder.intraSubnetPrivateDnsHostnameTypeOnLaunch;
            this.intraSubnets = builder.intraSubnets;
            this.intraSubnetSuffix = builder.intraSubnetSuffix;
            this.intraSubnetTags = builder.intraSubnetTags;
            this.ipv4IpamPoolId = builder.ipv4IpamPoolId;
            this.ipv4NetmaskLength = builder.ipv4NetmaskLength;
            this.ipv6Cidr = builder.ipv6Cidr;
            this.ipv6CidrBlockNetworkBorderGroup = builder.ipv6CidrBlockNetworkBorderGroup;
            this.ipv6IpamPoolId = builder.ipv6IpamPoolId;
            this.ipv6NetmaskLength = builder.ipv6NetmaskLength;
            this.manageDefaultNetworkAcl = builder.manageDefaultNetworkAcl;
            this.manageDefaultRouteTable = builder.manageDefaultRouteTable;
            this.manageDefaultSecurityGroup = builder.manageDefaultSecurityGroup;
            this.manageDefaultVpc = builder.manageDefaultVpc;
            this.mapCustomerOwnedIpOnLaunch = builder.mapCustomerOwnedIpOnLaunch;
            this.mapPublicIpOnLaunch = builder.mapPublicIpOnLaunch;
            this.name = builder.name;
            this.natEipTags = builder.natEipTags;
            this.natGatewayDestinationCidrBlock = builder.natGatewayDestinationCidrBlock;
            this.natGatewayTags = builder.natGatewayTags;
            this.oneNatGatewayPerAz = builder.oneNatGatewayPerAz;
            this.outpostAclTags = builder.outpostAclTags;
            this.outpostArn = builder.outpostArn;
            this.outpostAz = builder.outpostAz;
            this.outpostDedicatedNetworkAcl = builder.outpostDedicatedNetworkAcl;
            this.outpostInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.outpostInboundAclRules;
            this.outpostOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.outpostOutboundAclRules;
            this.outpostSubnetAssignIpv6AddressOnCreation = builder.outpostSubnetAssignIpv6AddressOnCreation;
            this.outpostSubnetEnableDns64 = builder.outpostSubnetEnableDns64;
            this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.outpostSubnetEnableResourceNameDnsARecordOnLaunch = builder.outpostSubnetEnableResourceNameDnsARecordOnLaunch;
            this.outpostSubnetIpv6Native = builder.outpostSubnetIpv6Native;
            this.outpostSubnetIpv6Prefixes = builder.outpostSubnetIpv6Prefixes;
            this.outpostSubnetNames = builder.outpostSubnetNames;
            this.outpostSubnetPrivateDnsHostnameTypeOnLaunch = builder.outpostSubnetPrivateDnsHostnameTypeOnLaunch;
            this.outpostSubnets = builder.outpostSubnets;
            this.outpostSubnetSuffix = builder.outpostSubnetSuffix;
            this.outpostSubnetTags = builder.outpostSubnetTags;
            this.privateAclTags = builder.privateAclTags;
            this.privateDedicatedNetworkAcl = builder.privateDedicatedNetworkAcl;
            this.privateInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.privateInboundAclRules;
            this.privateOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.privateOutboundAclRules;
            this.privateRouteTableTags = builder.privateRouteTableTags;
            this.privateSubnetAssignIpv6AddressOnCreation = builder.privateSubnetAssignIpv6AddressOnCreation;
            this.privateSubnetEnableDns64 = builder.privateSubnetEnableDns64;
            this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.privateSubnetEnableResourceNameDnsARecordOnLaunch = builder.privateSubnetEnableResourceNameDnsARecordOnLaunch;
            this.privateSubnetIpv6Native = builder.privateSubnetIpv6Native;
            this.privateSubnetIpv6Prefixes = builder.privateSubnetIpv6Prefixes;
            this.privateSubnetNames = builder.privateSubnetNames;
            this.privateSubnetPrivateDnsHostnameTypeOnLaunch = builder.privateSubnetPrivateDnsHostnameTypeOnLaunch;
            this.privateSubnets = builder.privateSubnets;
            this.privateSubnetSuffix = builder.privateSubnetSuffix;
            this.privateSubnetTags = builder.privateSubnetTags;
            this.privateSubnetTagsPerAz = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)builder.privateSubnetTagsPerAz;
            this.propagateIntraRouteTablesVgw = builder.propagateIntraRouteTablesVgw;
            this.propagatePrivateRouteTablesVgw = builder.propagatePrivateRouteTablesVgw;
            this.propagatePublicRouteTablesVgw = builder.propagatePublicRouteTablesVgw;
            this.publicAclTags = builder.publicAclTags;
            this.publicDedicatedNetworkAcl = builder.publicDedicatedNetworkAcl;
            this.publicInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.publicInboundAclRules;
            this.publicOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.publicOutboundAclRules;
            this.publicRouteTableTags = builder.publicRouteTableTags;
            this.publicSubnetAssignIpv6AddressOnCreation = builder.publicSubnetAssignIpv6AddressOnCreation;
            this.publicSubnetEnableDns64 = builder.publicSubnetEnableDns64;
            this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.publicSubnetEnableResourceNameDnsARecordOnLaunch = builder.publicSubnetEnableResourceNameDnsARecordOnLaunch;
            this.publicSubnetIpv6Native = builder.publicSubnetIpv6Native;
            this.publicSubnetIpv6Prefixes = builder.publicSubnetIpv6Prefixes;
            this.publicSubnetNames = builder.publicSubnetNames;
            this.publicSubnetPrivateDnsHostnameTypeOnLaunch = builder.publicSubnetPrivateDnsHostnameTypeOnLaunch;
            this.publicSubnets = builder.publicSubnets;
            this.publicSubnetSuffix = builder.publicSubnetSuffix;
            this.publicSubnetTags = builder.publicSubnetTags;
            this.publicSubnetTagsPerAz = (java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)builder.publicSubnetTagsPerAz;
            this.putinKhuylo = builder.putinKhuylo;
            this.redshiftAclTags = builder.redshiftAclTags;
            this.redshiftDedicatedNetworkAcl = builder.redshiftDedicatedNetworkAcl;
            this.redshiftInboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.redshiftInboundAclRules;
            this.redshiftOutboundAclRules = (java.util.List<java.util.Map<java.lang.String, java.lang.String>>)builder.redshiftOutboundAclRules;
            this.redshiftRouteTableTags = builder.redshiftRouteTableTags;
            this.redshiftSubnetAssignIpv6AddressOnCreation = builder.redshiftSubnetAssignIpv6AddressOnCreation;
            this.redshiftSubnetEnableDns64 = builder.redshiftSubnetEnableDns64;
            this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch = builder.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
            this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch = builder.redshiftSubnetEnableResourceNameDnsARecordOnLaunch;
            this.redshiftSubnetGroupName = builder.redshiftSubnetGroupName;
            this.redshiftSubnetGroupTags = builder.redshiftSubnetGroupTags;
            this.redshiftSubnetIpv6Native = builder.redshiftSubnetIpv6Native;
            this.redshiftSubnetIpv6Prefixes = builder.redshiftSubnetIpv6Prefixes;
            this.redshiftSubnetNames = builder.redshiftSubnetNames;
            this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch = builder.redshiftSubnetPrivateDnsHostnameTypeOnLaunch;
            this.redshiftSubnets = builder.redshiftSubnets;
            this.redshiftSubnetSuffix = builder.redshiftSubnetSuffix;
            this.redshiftSubnetTags = builder.redshiftSubnetTags;
            this.reuseNatIps = builder.reuseNatIps;
            this.secondaryCidrBlocks = builder.secondaryCidrBlocks;
            this.singleNatGateway = builder.singleNatGateway;
            this.tags = builder.tags;
            this.useIpamPool = builder.useIpamPool;
            this.vpcFlowLogPermissionsBoundary = builder.vpcFlowLogPermissionsBoundary;
            this.vpcFlowLogTags = builder.vpcFlowLogTags;
            this.vpcTags = builder.vpcTags;
            this.vpnGatewayAz = builder.vpnGatewayAz;
            this.vpnGatewayId = builder.vpnGatewayId;
            this.vpnGatewayTags = builder.vpnGatewayTags;
            this.dependsOn = (java.util.List<com.hashicorp.cdktf.ITerraformDependable>)builder.dependsOn;
            this.forEach = builder.forEach;
            this.providers = (java.util.List<java.lang.Object>)builder.providers;
            this.skipAssetCreationFromLocalModules = builder.skipAssetCreationFromLocalModules;
        }

        @Override
        public final java.lang.String getAmazonSideAsn() {
            return this.amazonSideAsn;
        }

        @Override
        public final java.util.List<java.lang.String> getAzs() {
            return this.azs;
        }

        @Override
        public final java.lang.String getCidr() {
            return this.cidr;
        }

        @Override
        public final java.lang.Boolean getCreateDatabaseInternetGatewayRoute() {
            return this.createDatabaseInternetGatewayRoute;
        }

        @Override
        public final java.lang.Boolean getCreateDatabaseNatGatewayRoute() {
            return this.createDatabaseNatGatewayRoute;
        }

        @Override
        public final java.lang.Boolean getCreateDatabaseSubnetGroup() {
            return this.createDatabaseSubnetGroup;
        }

        @Override
        public final java.lang.Boolean getCreateDatabaseSubnetRouteTable() {
            return this.createDatabaseSubnetRouteTable;
        }

        @Override
        public final java.lang.Boolean getCreateEgressOnlyIgw() {
            return this.createEgressOnlyIgw;
        }

        @Override
        public final java.lang.Boolean getCreateElasticacheSubnetGroup() {
            return this.createElasticacheSubnetGroup;
        }

        @Override
        public final java.lang.Boolean getCreateElasticacheSubnetRouteTable() {
            return this.createElasticacheSubnetRouteTable;
        }

        @Override
        public final java.lang.Boolean getCreateFlowLogCloudwatchIamRole() {
            return this.createFlowLogCloudwatchIamRole;
        }

        @Override
        public final java.lang.Boolean getCreateFlowLogCloudwatchLogGroup() {
            return this.createFlowLogCloudwatchLogGroup;
        }

        @Override
        public final java.lang.Boolean getCreateIgw() {
            return this.createIgw;
        }

        @Override
        public final java.lang.Boolean getCreateRedshiftSubnetGroup() {
            return this.createRedshiftSubnetGroup;
        }

        @Override
        public final java.lang.Boolean getCreateRedshiftSubnetRouteTable() {
            return this.createRedshiftSubnetRouteTable;
        }

        @Override
        public final java.lang.Boolean getCreateVpc() {
            return this.createVpc;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> getCustomerGateways() {
            return this.customerGateways;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getCustomerGatewayTags() {
            return this.customerGatewayTags;
        }

        @Override
        public final java.lang.String getCustomerOwnedIpv4Pool() {
            return this.customerOwnedIpv4Pool;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDatabaseAclTags() {
            return this.databaseAclTags;
        }

        @Override
        public final java.lang.Boolean getDatabaseDedicatedNetworkAcl() {
            return this.databaseDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseInboundAclRules() {
            return this.databaseInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseOutboundAclRules() {
            return this.databaseOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDatabaseRouteTableTags() {
            return this.databaseRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getDatabaseSubnetAssignIpv6AddressOnCreation() {
            return this.databaseSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getDatabaseSubnetEnableDns64() {
            return this.databaseSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.databaseSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.String getDatabaseSubnetGroupName() {
            return this.databaseSubnetGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetGroupTags() {
            return this.databaseSubnetGroupTags;
        }

        @Override
        public final java.lang.Boolean getDatabaseSubnetIpv6Native() {
            return this.databaseSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getDatabaseSubnetIpv6Prefixes() {
            return this.databaseSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getDatabaseSubnetNames() {
            return this.databaseSubnetNames;
        }

        @Override
        public final java.lang.String getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.databaseSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getDatabaseSubnets() {
            return this.databaseSubnets;
        }

        @Override
        public final java.lang.String getDatabaseSubnetSuffix() {
            return this.databaseSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetTags() {
            return this.databaseSubnetTags;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclEgress() {
            return this.defaultNetworkAclEgress;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclIngress() {
            return this.defaultNetworkAclIngress;
        }

        @Override
        public final java.lang.String getDefaultNetworkAclName() {
            return this.defaultNetworkAclName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDefaultNetworkAclTags() {
            return this.defaultNetworkAclTags;
        }

        @Override
        public final java.lang.String getDefaultRouteTableName() {
            return this.defaultRouteTableName;
        }

        @Override
        public final java.util.List<java.lang.String> getDefaultRouteTablePropagatingVgws() {
            return this.defaultRouteTablePropagatingVgws;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultRouteTableRoutes() {
            return this.defaultRouteTableRoutes;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDefaultRouteTableTags() {
            return this.defaultRouteTableTags;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupEgress() {
            return this.defaultSecurityGroupEgress;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupIngress() {
            return this.defaultSecurityGroupIngress;
        }

        @Override
        public final java.lang.String getDefaultSecurityGroupName() {
            return this.defaultSecurityGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDefaultSecurityGroupTags() {
            return this.defaultSecurityGroupTags;
        }

        @Override
        public final java.lang.Boolean getDefaultVpcEnableDnsHostnames() {
            return this.defaultVpcEnableDnsHostnames;
        }

        @Override
        public final java.lang.Boolean getDefaultVpcEnableDnsSupport() {
            return this.defaultVpcEnableDnsSupport;
        }

        @Override
        public final java.lang.String getDefaultVpcName() {
            return this.defaultVpcName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDefaultVpcTags() {
            return this.defaultVpcTags;
        }

        @Override
        public final java.lang.String getDhcpOptionsDomainName() {
            return this.dhcpOptionsDomainName;
        }

        @Override
        public final java.util.List<java.lang.String> getDhcpOptionsDomainNameServers() {
            return this.dhcpOptionsDomainNameServers;
        }

        @Override
        public final java.util.List<java.lang.String> getDhcpOptionsNetbiosNameServers() {
            return this.dhcpOptionsNetbiosNameServers;
        }

        @Override
        public final java.lang.String getDhcpOptionsNetbiosNodeType() {
            return this.dhcpOptionsNetbiosNodeType;
        }

        @Override
        public final java.util.List<java.lang.String> getDhcpOptionsNtpServers() {
            return this.dhcpOptionsNtpServers;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDhcpOptionsTags() {
            return this.dhcpOptionsTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getElasticacheAclTags() {
            return this.elasticacheAclTags;
        }

        @Override
        public final java.lang.Boolean getElasticacheDedicatedNetworkAcl() {
            return this.elasticacheDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheInboundAclRules() {
            return this.elasticacheInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheOutboundAclRules() {
            return this.elasticacheOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getElasticacheRouteTableTags() {
            return this.elasticacheRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getElasticacheSubnetAssignIpv6AddressOnCreation() {
            return this.elasticacheSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getElasticacheSubnetEnableDns64() {
            return this.elasticacheSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.String getElasticacheSubnetGroupName() {
            return this.elasticacheSubnetGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetGroupTags() {
            return this.elasticacheSubnetGroupTags;
        }

        @Override
        public final java.lang.Boolean getElasticacheSubnetIpv6Native() {
            return this.elasticacheSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getElasticacheSubnetIpv6Prefixes() {
            return this.elasticacheSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getElasticacheSubnetNames() {
            return this.elasticacheSubnetNames;
        }

        @Override
        public final java.lang.String getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getElasticacheSubnets() {
            return this.elasticacheSubnets;
        }

        @Override
        public final java.lang.String getElasticacheSubnetSuffix() {
            return this.elasticacheSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetTags() {
            return this.elasticacheSubnetTags;
        }

        @Override
        public final java.lang.Boolean getEnableDhcpOptions() {
            return this.enableDhcpOptions;
        }

        @Override
        public final java.lang.Boolean getEnableDnsHostnames() {
            return this.enableDnsHostnames;
        }

        @Override
        public final java.lang.Boolean getEnableDnsSupport() {
            return this.enableDnsSupport;
        }

        @Override
        public final java.lang.Boolean getEnableFlowLog() {
            return this.enableFlowLog;
        }

        @Override
        public final java.lang.Boolean getEnableIpv6() {
            return this.enableIpv6;
        }

        @Override
        public final java.lang.Boolean getEnableNatGateway() {
            return this.enableNatGateway;
        }

        @Override
        public final java.lang.Boolean getEnableNetworkAddressUsageMetrics() {
            return this.enableNetworkAddressUsageMetrics;
        }

        @Override
        public final java.lang.Boolean getEnablePublicRedshift() {
            return this.enablePublicRedshift;
        }

        @Override
        public final java.lang.Boolean getEnableVpnGateway() {
            return this.enableVpnGateway;
        }

        @Override
        public final java.util.List<java.lang.String> getExternalNatIpIds() {
            return this.externalNatIpIds;
        }

        @Override
        public final java.util.List<java.lang.String> getExternalNatIps() {
            return this.externalNatIps;
        }

        @Override
        public final java.lang.String getFlowLogCloudwatchIamRoleArn() {
            return this.flowLogCloudwatchIamRoleArn;
        }

        @Override
        public final java.lang.String getFlowLogCloudwatchLogGroupKmsKeyId() {
            return this.flowLogCloudwatchLogGroupKmsKeyId;
        }

        @Override
        public final java.lang.String getFlowLogCloudwatchLogGroupNamePrefix() {
            return this.flowLogCloudwatchLogGroupNamePrefix;
        }

        @Override
        public final java.lang.String getFlowLogCloudwatchLogGroupNameSuffix() {
            return this.flowLogCloudwatchLogGroupNameSuffix;
        }

        @Override
        public final java.lang.Number getFlowLogCloudwatchLogGroupRetentionInDays() {
            return this.flowLogCloudwatchLogGroupRetentionInDays;
        }

        @Override
        public final java.lang.String getFlowLogDestinationArn() {
            return this.flowLogDestinationArn;
        }

        @Override
        public final java.lang.String getFlowLogDestinationType() {
            return this.flowLogDestinationType;
        }

        @Override
        public final java.lang.String getFlowLogFileFormat() {
            return this.flowLogFileFormat;
        }

        @Override
        public final java.lang.Boolean getFlowLogHiveCompatiblePartitions() {
            return this.flowLogHiveCompatiblePartitions;
        }

        @Override
        public final java.lang.String getFlowLogLogFormat() {
            return this.flowLogLogFormat;
        }

        @Override
        public final java.lang.Number getFlowLogMaxAggregationInterval() {
            return this.flowLogMaxAggregationInterval;
        }

        @Override
        public final java.lang.Boolean getFlowLogPerHourPartition() {
            return this.flowLogPerHourPartition;
        }

        @Override
        public final java.lang.String getFlowLogTrafficType() {
            return this.flowLogTrafficType;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getIgwTags() {
            return this.igwTags;
        }

        @Override
        public final java.lang.String getInstanceTenancy() {
            return this.instanceTenancy;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getIntraAclTags() {
            return this.intraAclTags;
        }

        @Override
        public final java.lang.Boolean getIntraDedicatedNetworkAcl() {
            return this.intraDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraInboundAclRules() {
            return this.intraInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraOutboundAclRules() {
            return this.intraOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getIntraRouteTableTags() {
            return this.intraRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getIntraSubnetAssignIpv6AddressOnCreation() {
            return this.intraSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getIntraSubnetEnableDns64() {
            return this.intraSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getIntraSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.intraSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getIntraSubnetIpv6Native() {
            return this.intraSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getIntraSubnetIpv6Prefixes() {
            return this.intraSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getIntraSubnetNames() {
            return this.intraSubnetNames;
        }

        @Override
        public final java.lang.String getIntraSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.intraSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getIntraSubnets() {
            return this.intraSubnets;
        }

        @Override
        public final java.lang.String getIntraSubnetSuffix() {
            return this.intraSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getIntraSubnetTags() {
            return this.intraSubnetTags;
        }

        @Override
        public final java.lang.String getIpv4IpamPoolId() {
            return this.ipv4IpamPoolId;
        }

        @Override
        public final java.lang.Number getIpv4NetmaskLength() {
            return this.ipv4NetmaskLength;
        }

        @Override
        public final java.lang.String getIpv6Cidr() {
            return this.ipv6Cidr;
        }

        @Override
        public final java.lang.String getIpv6CidrBlockNetworkBorderGroup() {
            return this.ipv6CidrBlockNetworkBorderGroup;
        }

        @Override
        public final java.lang.String getIpv6IpamPoolId() {
            return this.ipv6IpamPoolId;
        }

        @Override
        public final java.lang.Number getIpv6NetmaskLength() {
            return this.ipv6NetmaskLength;
        }

        @Override
        public final java.lang.Boolean getManageDefaultNetworkAcl() {
            return this.manageDefaultNetworkAcl;
        }

        @Override
        public final java.lang.Boolean getManageDefaultRouteTable() {
            return this.manageDefaultRouteTable;
        }

        @Override
        public final java.lang.Boolean getManageDefaultSecurityGroup() {
            return this.manageDefaultSecurityGroup;
        }

        @Override
        public final java.lang.Boolean getManageDefaultVpc() {
            return this.manageDefaultVpc;
        }

        @Override
        public final java.lang.Boolean getMapCustomerOwnedIpOnLaunch() {
            return this.mapCustomerOwnedIpOnLaunch;
        }

        @Override
        public final java.lang.Boolean getMapPublicIpOnLaunch() {
            return this.mapPublicIpOnLaunch;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getNatEipTags() {
            return this.natEipTags;
        }

        @Override
        public final java.lang.String getNatGatewayDestinationCidrBlock() {
            return this.natGatewayDestinationCidrBlock;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getNatGatewayTags() {
            return this.natGatewayTags;
        }

        @Override
        public final java.lang.Boolean getOneNatGatewayPerAz() {
            return this.oneNatGatewayPerAz;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getOutpostAclTags() {
            return this.outpostAclTags;
        }

        @Override
        public final java.lang.String getOutpostArn() {
            return this.outpostArn;
        }

        @Override
        public final java.lang.String getOutpostAz() {
            return this.outpostAz;
        }

        @Override
        public final java.lang.Boolean getOutpostDedicatedNetworkAcl() {
            return this.outpostDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostInboundAclRules() {
            return this.outpostInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostOutboundAclRules() {
            return this.outpostOutboundAclRules;
        }

        @Override
        public final java.lang.Boolean getOutpostSubnetAssignIpv6AddressOnCreation() {
            return this.outpostSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getOutpostSubnetEnableDns64() {
            return this.outpostSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getOutpostSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.outpostSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getOutpostSubnetIpv6Native() {
            return this.outpostSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getOutpostSubnetIpv6Prefixes() {
            return this.outpostSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getOutpostSubnetNames() {
            return this.outpostSubnetNames;
        }

        @Override
        public final java.lang.String getOutpostSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.outpostSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getOutpostSubnets() {
            return this.outpostSubnets;
        }

        @Override
        public final java.lang.String getOutpostSubnetSuffix() {
            return this.outpostSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getOutpostSubnetTags() {
            return this.outpostSubnetTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPrivateAclTags() {
            return this.privateAclTags;
        }

        @Override
        public final java.lang.Boolean getPrivateDedicatedNetworkAcl() {
            return this.privateDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateInboundAclRules() {
            return this.privateInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateOutboundAclRules() {
            return this.privateOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPrivateRouteTableTags() {
            return this.privateRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getPrivateSubnetAssignIpv6AddressOnCreation() {
            return this.privateSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getPrivateSubnetEnableDns64() {
            return this.privateSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getPrivateSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.privateSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getPrivateSubnetIpv6Native() {
            return this.privateSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getPrivateSubnetIpv6Prefixes() {
            return this.privateSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getPrivateSubnetNames() {
            return this.privateSubnetNames;
        }

        @Override
        public final java.lang.String getPrivateSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.privateSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getPrivateSubnets() {
            return this.privateSubnets;
        }

        @Override
        public final java.lang.String getPrivateSubnetSuffix() {
            return this.privateSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPrivateSubnetTags() {
            return this.privateSubnetTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPrivateSubnetTagsPerAz() {
            return this.privateSubnetTagsPerAz;
        }

        @Override
        public final java.lang.Boolean getPropagateIntraRouteTablesVgw() {
            return this.propagateIntraRouteTablesVgw;
        }

        @Override
        public final java.lang.Boolean getPropagatePrivateRouteTablesVgw() {
            return this.propagatePrivateRouteTablesVgw;
        }

        @Override
        public final java.lang.Boolean getPropagatePublicRouteTablesVgw() {
            return this.propagatePublicRouteTablesVgw;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPublicAclTags() {
            return this.publicAclTags;
        }

        @Override
        public final java.lang.Boolean getPublicDedicatedNetworkAcl() {
            return this.publicDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicInboundAclRules() {
            return this.publicInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicOutboundAclRules() {
            return this.publicOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPublicRouteTableTags() {
            return this.publicRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getPublicSubnetAssignIpv6AddressOnCreation() {
            return this.publicSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getPublicSubnetEnableDns64() {
            return this.publicSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getPublicSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.publicSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getPublicSubnetIpv6Native() {
            return this.publicSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getPublicSubnetIpv6Prefixes() {
            return this.publicSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getPublicSubnetNames() {
            return this.publicSubnetNames;
        }

        @Override
        public final java.lang.String getPublicSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.publicSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getPublicSubnets() {
            return this.publicSubnets;
        }

        @Override
        public final java.lang.String getPublicSubnetSuffix() {
            return this.publicSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getPublicSubnetTags() {
            return this.publicSubnetTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPublicSubnetTagsPerAz() {
            return this.publicSubnetTagsPerAz;
        }

        @Override
        public final java.lang.Boolean getPutinKhuylo() {
            return this.putinKhuylo;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getRedshiftAclTags() {
            return this.redshiftAclTags;
        }

        @Override
        public final java.lang.Boolean getRedshiftDedicatedNetworkAcl() {
            return this.redshiftDedicatedNetworkAcl;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftInboundAclRules() {
            return this.redshiftInboundAclRules;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftOutboundAclRules() {
            return this.redshiftOutboundAclRules;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getRedshiftRouteTableTags() {
            return this.redshiftRouteTableTags;
        }

        @Override
        public final java.lang.Boolean getRedshiftSubnetAssignIpv6AddressOnCreation() {
            return this.redshiftSubnetAssignIpv6AddressOnCreation;
        }

        @Override
        public final java.lang.Boolean getRedshiftSubnetEnableDns64() {
            return this.redshiftSubnetEnableDns64;
        }

        @Override
        public final java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
            return this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch;
        }

        @Override
        public final java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch() {
            return this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch;
        }

        @Override
        public final java.lang.String getRedshiftSubnetGroupName() {
            return this.redshiftSubnetGroupName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetGroupTags() {
            return this.redshiftSubnetGroupTags;
        }

        @Override
        public final java.lang.Boolean getRedshiftSubnetIpv6Native() {
            return this.redshiftSubnetIpv6Native;
        }

        @Override
        public final java.util.List<java.lang.String> getRedshiftSubnetIpv6Prefixes() {
            return this.redshiftSubnetIpv6Prefixes;
        }

        @Override
        public final java.util.List<java.lang.String> getRedshiftSubnetNames() {
            return this.redshiftSubnetNames;
        }

        @Override
        public final java.lang.String getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch() {
            return this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch;
        }

        @Override
        public final java.util.List<java.lang.String> getRedshiftSubnets() {
            return this.redshiftSubnets;
        }

        @Override
        public final java.lang.String getRedshiftSubnetSuffix() {
            return this.redshiftSubnetSuffix;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetTags() {
            return this.redshiftSubnetTags;
        }

        @Override
        public final java.lang.Boolean getReuseNatIps() {
            return this.reuseNatIps;
        }

        @Override
        public final java.util.List<java.lang.String> getSecondaryCidrBlocks() {
            return this.secondaryCidrBlocks;
        }

        @Override
        public final java.lang.Boolean getSingleNatGateway() {
            return this.singleNatGateway;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Boolean getUseIpamPool() {
            return this.useIpamPool;
        }

        @Override
        public final java.lang.String getVpcFlowLogPermissionsBoundary() {
            return this.vpcFlowLogPermissionsBoundary;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getVpcFlowLogTags() {
            return this.vpcFlowLogTags;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getVpcTags() {
            return this.vpcTags;
        }

        @Override
        public final java.lang.String getVpnGatewayAz() {
            return this.vpnGatewayAz;
        }

        @Override
        public final java.lang.String getVpnGatewayId() {
            return this.vpnGatewayId;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getVpnGatewayTags() {
            return this.vpnGatewayTags;
        }

        @Override
        public final java.util.List<com.hashicorp.cdktf.ITerraformDependable> getDependsOn() {
            return this.dependsOn;
        }

        @Override
        public final com.hashicorp.cdktf.ITerraformIterator getForEach() {
            return this.forEach;
        }

        @Override
        public final java.util.List<java.lang.Object> getProviders() {
            return this.providers;
        }

        @Override
        public final java.lang.Boolean getSkipAssetCreationFromLocalModules() {
            return this.skipAssetCreationFromLocalModules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAmazonSideAsn() != null) {
                data.set("amazonSideAsn", om.valueToTree(this.getAmazonSideAsn()));
            }
            if (this.getAzs() != null) {
                data.set("azs", om.valueToTree(this.getAzs()));
            }
            if (this.getCidr() != null) {
                data.set("cidr", om.valueToTree(this.getCidr()));
            }
            if (this.getCreateDatabaseInternetGatewayRoute() != null) {
                data.set("createDatabaseInternetGatewayRoute", om.valueToTree(this.getCreateDatabaseInternetGatewayRoute()));
            }
            if (this.getCreateDatabaseNatGatewayRoute() != null) {
                data.set("createDatabaseNatGatewayRoute", om.valueToTree(this.getCreateDatabaseNatGatewayRoute()));
            }
            if (this.getCreateDatabaseSubnetGroup() != null) {
                data.set("createDatabaseSubnetGroup", om.valueToTree(this.getCreateDatabaseSubnetGroup()));
            }
            if (this.getCreateDatabaseSubnetRouteTable() != null) {
                data.set("createDatabaseSubnetRouteTable", om.valueToTree(this.getCreateDatabaseSubnetRouteTable()));
            }
            if (this.getCreateEgressOnlyIgw() != null) {
                data.set("createEgressOnlyIgw", om.valueToTree(this.getCreateEgressOnlyIgw()));
            }
            if (this.getCreateElasticacheSubnetGroup() != null) {
                data.set("createElasticacheSubnetGroup", om.valueToTree(this.getCreateElasticacheSubnetGroup()));
            }
            if (this.getCreateElasticacheSubnetRouteTable() != null) {
                data.set("createElasticacheSubnetRouteTable", om.valueToTree(this.getCreateElasticacheSubnetRouteTable()));
            }
            if (this.getCreateFlowLogCloudwatchIamRole() != null) {
                data.set("createFlowLogCloudwatchIamRole", om.valueToTree(this.getCreateFlowLogCloudwatchIamRole()));
            }
            if (this.getCreateFlowLogCloudwatchLogGroup() != null) {
                data.set("createFlowLogCloudwatchLogGroup", om.valueToTree(this.getCreateFlowLogCloudwatchLogGroup()));
            }
            if (this.getCreateIgw() != null) {
                data.set("createIgw", om.valueToTree(this.getCreateIgw()));
            }
            if (this.getCreateRedshiftSubnetGroup() != null) {
                data.set("createRedshiftSubnetGroup", om.valueToTree(this.getCreateRedshiftSubnetGroup()));
            }
            if (this.getCreateRedshiftSubnetRouteTable() != null) {
                data.set("createRedshiftSubnetRouteTable", om.valueToTree(this.getCreateRedshiftSubnetRouteTable()));
            }
            if (this.getCreateVpc() != null) {
                data.set("createVpc", om.valueToTree(this.getCreateVpc()));
            }
            if (this.getCustomerGateways() != null) {
                data.set("customerGateways", om.valueToTree(this.getCustomerGateways()));
            }
            if (this.getCustomerGatewayTags() != null) {
                data.set("customerGatewayTags", om.valueToTree(this.getCustomerGatewayTags()));
            }
            if (this.getCustomerOwnedIpv4Pool() != null) {
                data.set("customerOwnedIpv4Pool", om.valueToTree(this.getCustomerOwnedIpv4Pool()));
            }
            if (this.getDatabaseAclTags() != null) {
                data.set("databaseAclTags", om.valueToTree(this.getDatabaseAclTags()));
            }
            if (this.getDatabaseDedicatedNetworkAcl() != null) {
                data.set("databaseDedicatedNetworkAcl", om.valueToTree(this.getDatabaseDedicatedNetworkAcl()));
            }
            if (this.getDatabaseInboundAclRules() != null) {
                data.set("databaseInboundAclRules", om.valueToTree(this.getDatabaseInboundAclRules()));
            }
            if (this.getDatabaseOutboundAclRules() != null) {
                data.set("databaseOutboundAclRules", om.valueToTree(this.getDatabaseOutboundAclRules()));
            }
            if (this.getDatabaseRouteTableTags() != null) {
                data.set("databaseRouteTableTags", om.valueToTree(this.getDatabaseRouteTableTags()));
            }
            if (this.getDatabaseSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("databaseSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getDatabaseSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getDatabaseSubnetEnableDns64() != null) {
                data.set("databaseSubnetEnableDns64", om.valueToTree(this.getDatabaseSubnetEnableDns64()));
            }
            if (this.getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("databaseSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getDatabaseSubnetGroupName() != null) {
                data.set("databaseSubnetGroupName", om.valueToTree(this.getDatabaseSubnetGroupName()));
            }
            if (this.getDatabaseSubnetGroupTags() != null) {
                data.set("databaseSubnetGroupTags", om.valueToTree(this.getDatabaseSubnetGroupTags()));
            }
            if (this.getDatabaseSubnetIpv6Native() != null) {
                data.set("databaseSubnetIpv6Native", om.valueToTree(this.getDatabaseSubnetIpv6Native()));
            }
            if (this.getDatabaseSubnetIpv6Prefixes() != null) {
                data.set("databaseSubnetIpv6Prefixes", om.valueToTree(this.getDatabaseSubnetIpv6Prefixes()));
            }
            if (this.getDatabaseSubnetNames() != null) {
                data.set("databaseSubnetNames", om.valueToTree(this.getDatabaseSubnetNames()));
            }
            if (this.getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("databaseSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getDatabaseSubnets() != null) {
                data.set("databaseSubnets", om.valueToTree(this.getDatabaseSubnets()));
            }
            if (this.getDatabaseSubnetSuffix() != null) {
                data.set("databaseSubnetSuffix", om.valueToTree(this.getDatabaseSubnetSuffix()));
            }
            if (this.getDatabaseSubnetTags() != null) {
                data.set("databaseSubnetTags", om.valueToTree(this.getDatabaseSubnetTags()));
            }
            if (this.getDefaultNetworkAclEgress() != null) {
                data.set("defaultNetworkAclEgress", om.valueToTree(this.getDefaultNetworkAclEgress()));
            }
            if (this.getDefaultNetworkAclIngress() != null) {
                data.set("defaultNetworkAclIngress", om.valueToTree(this.getDefaultNetworkAclIngress()));
            }
            if (this.getDefaultNetworkAclName() != null) {
                data.set("defaultNetworkAclName", om.valueToTree(this.getDefaultNetworkAclName()));
            }
            if (this.getDefaultNetworkAclTags() != null) {
                data.set("defaultNetworkAclTags", om.valueToTree(this.getDefaultNetworkAclTags()));
            }
            if (this.getDefaultRouteTableName() != null) {
                data.set("defaultRouteTableName", om.valueToTree(this.getDefaultRouteTableName()));
            }
            if (this.getDefaultRouteTablePropagatingVgws() != null) {
                data.set("defaultRouteTablePropagatingVgws", om.valueToTree(this.getDefaultRouteTablePropagatingVgws()));
            }
            if (this.getDefaultRouteTableRoutes() != null) {
                data.set("defaultRouteTableRoutes", om.valueToTree(this.getDefaultRouteTableRoutes()));
            }
            if (this.getDefaultRouteTableTags() != null) {
                data.set("defaultRouteTableTags", om.valueToTree(this.getDefaultRouteTableTags()));
            }
            if (this.getDefaultSecurityGroupEgress() != null) {
                data.set("defaultSecurityGroupEgress", om.valueToTree(this.getDefaultSecurityGroupEgress()));
            }
            if (this.getDefaultSecurityGroupIngress() != null) {
                data.set("defaultSecurityGroupIngress", om.valueToTree(this.getDefaultSecurityGroupIngress()));
            }
            if (this.getDefaultSecurityGroupName() != null) {
                data.set("defaultSecurityGroupName", om.valueToTree(this.getDefaultSecurityGroupName()));
            }
            if (this.getDefaultSecurityGroupTags() != null) {
                data.set("defaultSecurityGroupTags", om.valueToTree(this.getDefaultSecurityGroupTags()));
            }
            if (this.getDefaultVpcEnableDnsHostnames() != null) {
                data.set("defaultVpcEnableDnsHostnames", om.valueToTree(this.getDefaultVpcEnableDnsHostnames()));
            }
            if (this.getDefaultVpcEnableDnsSupport() != null) {
                data.set("defaultVpcEnableDnsSupport", om.valueToTree(this.getDefaultVpcEnableDnsSupport()));
            }
            if (this.getDefaultVpcName() != null) {
                data.set("defaultVpcName", om.valueToTree(this.getDefaultVpcName()));
            }
            if (this.getDefaultVpcTags() != null) {
                data.set("defaultVpcTags", om.valueToTree(this.getDefaultVpcTags()));
            }
            if (this.getDhcpOptionsDomainName() != null) {
                data.set("dhcpOptionsDomainName", om.valueToTree(this.getDhcpOptionsDomainName()));
            }
            if (this.getDhcpOptionsDomainNameServers() != null) {
                data.set("dhcpOptionsDomainNameServers", om.valueToTree(this.getDhcpOptionsDomainNameServers()));
            }
            if (this.getDhcpOptionsNetbiosNameServers() != null) {
                data.set("dhcpOptionsNetbiosNameServers", om.valueToTree(this.getDhcpOptionsNetbiosNameServers()));
            }
            if (this.getDhcpOptionsNetbiosNodeType() != null) {
                data.set("dhcpOptionsNetbiosNodeType", om.valueToTree(this.getDhcpOptionsNetbiosNodeType()));
            }
            if (this.getDhcpOptionsNtpServers() != null) {
                data.set("dhcpOptionsNtpServers", om.valueToTree(this.getDhcpOptionsNtpServers()));
            }
            if (this.getDhcpOptionsTags() != null) {
                data.set("dhcpOptionsTags", om.valueToTree(this.getDhcpOptionsTags()));
            }
            if (this.getElasticacheAclTags() != null) {
                data.set("elasticacheAclTags", om.valueToTree(this.getElasticacheAclTags()));
            }
            if (this.getElasticacheDedicatedNetworkAcl() != null) {
                data.set("elasticacheDedicatedNetworkAcl", om.valueToTree(this.getElasticacheDedicatedNetworkAcl()));
            }
            if (this.getElasticacheInboundAclRules() != null) {
                data.set("elasticacheInboundAclRules", om.valueToTree(this.getElasticacheInboundAclRules()));
            }
            if (this.getElasticacheOutboundAclRules() != null) {
                data.set("elasticacheOutboundAclRules", om.valueToTree(this.getElasticacheOutboundAclRules()));
            }
            if (this.getElasticacheRouteTableTags() != null) {
                data.set("elasticacheRouteTableTags", om.valueToTree(this.getElasticacheRouteTableTags()));
            }
            if (this.getElasticacheSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("elasticacheSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getElasticacheSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getElasticacheSubnetEnableDns64() != null) {
                data.set("elasticacheSubnetEnableDns64", om.valueToTree(this.getElasticacheSubnetEnableDns64()));
            }
            if (this.getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("elasticacheSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getElasticacheSubnetGroupName() != null) {
                data.set("elasticacheSubnetGroupName", om.valueToTree(this.getElasticacheSubnetGroupName()));
            }
            if (this.getElasticacheSubnetGroupTags() != null) {
                data.set("elasticacheSubnetGroupTags", om.valueToTree(this.getElasticacheSubnetGroupTags()));
            }
            if (this.getElasticacheSubnetIpv6Native() != null) {
                data.set("elasticacheSubnetIpv6Native", om.valueToTree(this.getElasticacheSubnetIpv6Native()));
            }
            if (this.getElasticacheSubnetIpv6Prefixes() != null) {
                data.set("elasticacheSubnetIpv6Prefixes", om.valueToTree(this.getElasticacheSubnetIpv6Prefixes()));
            }
            if (this.getElasticacheSubnetNames() != null) {
                data.set("elasticacheSubnetNames", om.valueToTree(this.getElasticacheSubnetNames()));
            }
            if (this.getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("elasticacheSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getElasticacheSubnets() != null) {
                data.set("elasticacheSubnets", om.valueToTree(this.getElasticacheSubnets()));
            }
            if (this.getElasticacheSubnetSuffix() != null) {
                data.set("elasticacheSubnetSuffix", om.valueToTree(this.getElasticacheSubnetSuffix()));
            }
            if (this.getElasticacheSubnetTags() != null) {
                data.set("elasticacheSubnetTags", om.valueToTree(this.getElasticacheSubnetTags()));
            }
            if (this.getEnableDhcpOptions() != null) {
                data.set("enableDhcpOptions", om.valueToTree(this.getEnableDhcpOptions()));
            }
            if (this.getEnableDnsHostnames() != null) {
                data.set("enableDnsHostnames", om.valueToTree(this.getEnableDnsHostnames()));
            }
            if (this.getEnableDnsSupport() != null) {
                data.set("enableDnsSupport", om.valueToTree(this.getEnableDnsSupport()));
            }
            if (this.getEnableFlowLog() != null) {
                data.set("enableFlowLog", om.valueToTree(this.getEnableFlowLog()));
            }
            if (this.getEnableIpv6() != null) {
                data.set("enableIpv6", om.valueToTree(this.getEnableIpv6()));
            }
            if (this.getEnableNatGateway() != null) {
                data.set("enableNatGateway", om.valueToTree(this.getEnableNatGateway()));
            }
            if (this.getEnableNetworkAddressUsageMetrics() != null) {
                data.set("enableNetworkAddressUsageMetrics", om.valueToTree(this.getEnableNetworkAddressUsageMetrics()));
            }
            if (this.getEnablePublicRedshift() != null) {
                data.set("enablePublicRedshift", om.valueToTree(this.getEnablePublicRedshift()));
            }
            if (this.getEnableVpnGateway() != null) {
                data.set("enableVpnGateway", om.valueToTree(this.getEnableVpnGateway()));
            }
            if (this.getExternalNatIpIds() != null) {
                data.set("externalNatIpIds", om.valueToTree(this.getExternalNatIpIds()));
            }
            if (this.getExternalNatIps() != null) {
                data.set("externalNatIps", om.valueToTree(this.getExternalNatIps()));
            }
            if (this.getFlowLogCloudwatchIamRoleArn() != null) {
                data.set("flowLogCloudwatchIamRoleArn", om.valueToTree(this.getFlowLogCloudwatchIamRoleArn()));
            }
            if (this.getFlowLogCloudwatchLogGroupKmsKeyId() != null) {
                data.set("flowLogCloudwatchLogGroupKmsKeyId", om.valueToTree(this.getFlowLogCloudwatchLogGroupKmsKeyId()));
            }
            if (this.getFlowLogCloudwatchLogGroupNamePrefix() != null) {
                data.set("flowLogCloudwatchLogGroupNamePrefix", om.valueToTree(this.getFlowLogCloudwatchLogGroupNamePrefix()));
            }
            if (this.getFlowLogCloudwatchLogGroupNameSuffix() != null) {
                data.set("flowLogCloudwatchLogGroupNameSuffix", om.valueToTree(this.getFlowLogCloudwatchLogGroupNameSuffix()));
            }
            if (this.getFlowLogCloudwatchLogGroupRetentionInDays() != null) {
                data.set("flowLogCloudwatchLogGroupRetentionInDays", om.valueToTree(this.getFlowLogCloudwatchLogGroupRetentionInDays()));
            }
            if (this.getFlowLogDestinationArn() != null) {
                data.set("flowLogDestinationArn", om.valueToTree(this.getFlowLogDestinationArn()));
            }
            if (this.getFlowLogDestinationType() != null) {
                data.set("flowLogDestinationType", om.valueToTree(this.getFlowLogDestinationType()));
            }
            if (this.getFlowLogFileFormat() != null) {
                data.set("flowLogFileFormat", om.valueToTree(this.getFlowLogFileFormat()));
            }
            if (this.getFlowLogHiveCompatiblePartitions() != null) {
                data.set("flowLogHiveCompatiblePartitions", om.valueToTree(this.getFlowLogHiveCompatiblePartitions()));
            }
            if (this.getFlowLogLogFormat() != null) {
                data.set("flowLogLogFormat", om.valueToTree(this.getFlowLogLogFormat()));
            }
            if (this.getFlowLogMaxAggregationInterval() != null) {
                data.set("flowLogMaxAggregationInterval", om.valueToTree(this.getFlowLogMaxAggregationInterval()));
            }
            if (this.getFlowLogPerHourPartition() != null) {
                data.set("flowLogPerHourPartition", om.valueToTree(this.getFlowLogPerHourPartition()));
            }
            if (this.getFlowLogTrafficType() != null) {
                data.set("flowLogTrafficType", om.valueToTree(this.getFlowLogTrafficType()));
            }
            if (this.getIgwTags() != null) {
                data.set("igwTags", om.valueToTree(this.getIgwTags()));
            }
            if (this.getInstanceTenancy() != null) {
                data.set("instanceTenancy", om.valueToTree(this.getInstanceTenancy()));
            }
            if (this.getIntraAclTags() != null) {
                data.set("intraAclTags", om.valueToTree(this.getIntraAclTags()));
            }
            if (this.getIntraDedicatedNetworkAcl() != null) {
                data.set("intraDedicatedNetworkAcl", om.valueToTree(this.getIntraDedicatedNetworkAcl()));
            }
            if (this.getIntraInboundAclRules() != null) {
                data.set("intraInboundAclRules", om.valueToTree(this.getIntraInboundAclRules()));
            }
            if (this.getIntraOutboundAclRules() != null) {
                data.set("intraOutboundAclRules", om.valueToTree(this.getIntraOutboundAclRules()));
            }
            if (this.getIntraRouteTableTags() != null) {
                data.set("intraRouteTableTags", om.valueToTree(this.getIntraRouteTableTags()));
            }
            if (this.getIntraSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("intraSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getIntraSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getIntraSubnetEnableDns64() != null) {
                data.set("intraSubnetEnableDns64", om.valueToTree(this.getIntraSubnetEnableDns64()));
            }
            if (this.getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getIntraSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("intraSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getIntraSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getIntraSubnetIpv6Native() != null) {
                data.set("intraSubnetIpv6Native", om.valueToTree(this.getIntraSubnetIpv6Native()));
            }
            if (this.getIntraSubnetIpv6Prefixes() != null) {
                data.set("intraSubnetIpv6Prefixes", om.valueToTree(this.getIntraSubnetIpv6Prefixes()));
            }
            if (this.getIntraSubnetNames() != null) {
                data.set("intraSubnetNames", om.valueToTree(this.getIntraSubnetNames()));
            }
            if (this.getIntraSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("intraSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getIntraSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getIntraSubnets() != null) {
                data.set("intraSubnets", om.valueToTree(this.getIntraSubnets()));
            }
            if (this.getIntraSubnetSuffix() != null) {
                data.set("intraSubnetSuffix", om.valueToTree(this.getIntraSubnetSuffix()));
            }
            if (this.getIntraSubnetTags() != null) {
                data.set("intraSubnetTags", om.valueToTree(this.getIntraSubnetTags()));
            }
            if (this.getIpv4IpamPoolId() != null) {
                data.set("ipv4IpamPoolId", om.valueToTree(this.getIpv4IpamPoolId()));
            }
            if (this.getIpv4NetmaskLength() != null) {
                data.set("ipv4NetmaskLength", om.valueToTree(this.getIpv4NetmaskLength()));
            }
            if (this.getIpv6Cidr() != null) {
                data.set("ipv6Cidr", om.valueToTree(this.getIpv6Cidr()));
            }
            if (this.getIpv6CidrBlockNetworkBorderGroup() != null) {
                data.set("ipv6CidrBlockNetworkBorderGroup", om.valueToTree(this.getIpv6CidrBlockNetworkBorderGroup()));
            }
            if (this.getIpv6IpamPoolId() != null) {
                data.set("ipv6IpamPoolId", om.valueToTree(this.getIpv6IpamPoolId()));
            }
            if (this.getIpv6NetmaskLength() != null) {
                data.set("ipv6NetmaskLength", om.valueToTree(this.getIpv6NetmaskLength()));
            }
            if (this.getManageDefaultNetworkAcl() != null) {
                data.set("manageDefaultNetworkAcl", om.valueToTree(this.getManageDefaultNetworkAcl()));
            }
            if (this.getManageDefaultRouteTable() != null) {
                data.set("manageDefaultRouteTable", om.valueToTree(this.getManageDefaultRouteTable()));
            }
            if (this.getManageDefaultSecurityGroup() != null) {
                data.set("manageDefaultSecurityGroup", om.valueToTree(this.getManageDefaultSecurityGroup()));
            }
            if (this.getManageDefaultVpc() != null) {
                data.set("manageDefaultVpc", om.valueToTree(this.getManageDefaultVpc()));
            }
            if (this.getMapCustomerOwnedIpOnLaunch() != null) {
                data.set("mapCustomerOwnedIpOnLaunch", om.valueToTree(this.getMapCustomerOwnedIpOnLaunch()));
            }
            if (this.getMapPublicIpOnLaunch() != null) {
                data.set("mapPublicIpOnLaunch", om.valueToTree(this.getMapPublicIpOnLaunch()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getNatEipTags() != null) {
                data.set("natEipTags", om.valueToTree(this.getNatEipTags()));
            }
            if (this.getNatGatewayDestinationCidrBlock() != null) {
                data.set("natGatewayDestinationCidrBlock", om.valueToTree(this.getNatGatewayDestinationCidrBlock()));
            }
            if (this.getNatGatewayTags() != null) {
                data.set("natGatewayTags", om.valueToTree(this.getNatGatewayTags()));
            }
            if (this.getOneNatGatewayPerAz() != null) {
                data.set("oneNatGatewayPerAz", om.valueToTree(this.getOneNatGatewayPerAz()));
            }
            if (this.getOutpostAclTags() != null) {
                data.set("outpostAclTags", om.valueToTree(this.getOutpostAclTags()));
            }
            if (this.getOutpostArn() != null) {
                data.set("outpostArn", om.valueToTree(this.getOutpostArn()));
            }
            if (this.getOutpostAz() != null) {
                data.set("outpostAz", om.valueToTree(this.getOutpostAz()));
            }
            if (this.getOutpostDedicatedNetworkAcl() != null) {
                data.set("outpostDedicatedNetworkAcl", om.valueToTree(this.getOutpostDedicatedNetworkAcl()));
            }
            if (this.getOutpostInboundAclRules() != null) {
                data.set("outpostInboundAclRules", om.valueToTree(this.getOutpostInboundAclRules()));
            }
            if (this.getOutpostOutboundAclRules() != null) {
                data.set("outpostOutboundAclRules", om.valueToTree(this.getOutpostOutboundAclRules()));
            }
            if (this.getOutpostSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("outpostSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getOutpostSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getOutpostSubnetEnableDns64() != null) {
                data.set("outpostSubnetEnableDns64", om.valueToTree(this.getOutpostSubnetEnableDns64()));
            }
            if (this.getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getOutpostSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("outpostSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getOutpostSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getOutpostSubnetIpv6Native() != null) {
                data.set("outpostSubnetIpv6Native", om.valueToTree(this.getOutpostSubnetIpv6Native()));
            }
            if (this.getOutpostSubnetIpv6Prefixes() != null) {
                data.set("outpostSubnetIpv6Prefixes", om.valueToTree(this.getOutpostSubnetIpv6Prefixes()));
            }
            if (this.getOutpostSubnetNames() != null) {
                data.set("outpostSubnetNames", om.valueToTree(this.getOutpostSubnetNames()));
            }
            if (this.getOutpostSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("outpostSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getOutpostSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getOutpostSubnets() != null) {
                data.set("outpostSubnets", om.valueToTree(this.getOutpostSubnets()));
            }
            if (this.getOutpostSubnetSuffix() != null) {
                data.set("outpostSubnetSuffix", om.valueToTree(this.getOutpostSubnetSuffix()));
            }
            if (this.getOutpostSubnetTags() != null) {
                data.set("outpostSubnetTags", om.valueToTree(this.getOutpostSubnetTags()));
            }
            if (this.getPrivateAclTags() != null) {
                data.set("privateAclTags", om.valueToTree(this.getPrivateAclTags()));
            }
            if (this.getPrivateDedicatedNetworkAcl() != null) {
                data.set("privateDedicatedNetworkAcl", om.valueToTree(this.getPrivateDedicatedNetworkAcl()));
            }
            if (this.getPrivateInboundAclRules() != null) {
                data.set("privateInboundAclRules", om.valueToTree(this.getPrivateInboundAclRules()));
            }
            if (this.getPrivateOutboundAclRules() != null) {
                data.set("privateOutboundAclRules", om.valueToTree(this.getPrivateOutboundAclRules()));
            }
            if (this.getPrivateRouteTableTags() != null) {
                data.set("privateRouteTableTags", om.valueToTree(this.getPrivateRouteTableTags()));
            }
            if (this.getPrivateSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("privateSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getPrivateSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getPrivateSubnetEnableDns64() != null) {
                data.set("privateSubnetEnableDns64", om.valueToTree(this.getPrivateSubnetEnableDns64()));
            }
            if (this.getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getPrivateSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("privateSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getPrivateSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getPrivateSubnetIpv6Native() != null) {
                data.set("privateSubnetIpv6Native", om.valueToTree(this.getPrivateSubnetIpv6Native()));
            }
            if (this.getPrivateSubnetIpv6Prefixes() != null) {
                data.set("privateSubnetIpv6Prefixes", om.valueToTree(this.getPrivateSubnetIpv6Prefixes()));
            }
            if (this.getPrivateSubnetNames() != null) {
                data.set("privateSubnetNames", om.valueToTree(this.getPrivateSubnetNames()));
            }
            if (this.getPrivateSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("privateSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getPrivateSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getPrivateSubnets() != null) {
                data.set("privateSubnets", om.valueToTree(this.getPrivateSubnets()));
            }
            if (this.getPrivateSubnetSuffix() != null) {
                data.set("privateSubnetSuffix", om.valueToTree(this.getPrivateSubnetSuffix()));
            }
            if (this.getPrivateSubnetTags() != null) {
                data.set("privateSubnetTags", om.valueToTree(this.getPrivateSubnetTags()));
            }
            if (this.getPrivateSubnetTagsPerAz() != null) {
                data.set("privateSubnetTagsPerAz", om.valueToTree(this.getPrivateSubnetTagsPerAz()));
            }
            if (this.getPropagateIntraRouteTablesVgw() != null) {
                data.set("propagateIntraRouteTablesVgw", om.valueToTree(this.getPropagateIntraRouteTablesVgw()));
            }
            if (this.getPropagatePrivateRouteTablesVgw() != null) {
                data.set("propagatePrivateRouteTablesVgw", om.valueToTree(this.getPropagatePrivateRouteTablesVgw()));
            }
            if (this.getPropagatePublicRouteTablesVgw() != null) {
                data.set("propagatePublicRouteTablesVgw", om.valueToTree(this.getPropagatePublicRouteTablesVgw()));
            }
            if (this.getPublicAclTags() != null) {
                data.set("publicAclTags", om.valueToTree(this.getPublicAclTags()));
            }
            if (this.getPublicDedicatedNetworkAcl() != null) {
                data.set("publicDedicatedNetworkAcl", om.valueToTree(this.getPublicDedicatedNetworkAcl()));
            }
            if (this.getPublicInboundAclRules() != null) {
                data.set("publicInboundAclRules", om.valueToTree(this.getPublicInboundAclRules()));
            }
            if (this.getPublicOutboundAclRules() != null) {
                data.set("publicOutboundAclRules", om.valueToTree(this.getPublicOutboundAclRules()));
            }
            if (this.getPublicRouteTableTags() != null) {
                data.set("publicRouteTableTags", om.valueToTree(this.getPublicRouteTableTags()));
            }
            if (this.getPublicSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("publicSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getPublicSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getPublicSubnetEnableDns64() != null) {
                data.set("publicSubnetEnableDns64", om.valueToTree(this.getPublicSubnetEnableDns64()));
            }
            if (this.getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getPublicSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("publicSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getPublicSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getPublicSubnetIpv6Native() != null) {
                data.set("publicSubnetIpv6Native", om.valueToTree(this.getPublicSubnetIpv6Native()));
            }
            if (this.getPublicSubnetIpv6Prefixes() != null) {
                data.set("publicSubnetIpv6Prefixes", om.valueToTree(this.getPublicSubnetIpv6Prefixes()));
            }
            if (this.getPublicSubnetNames() != null) {
                data.set("publicSubnetNames", om.valueToTree(this.getPublicSubnetNames()));
            }
            if (this.getPublicSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("publicSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getPublicSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getPublicSubnets() != null) {
                data.set("publicSubnets", om.valueToTree(this.getPublicSubnets()));
            }
            if (this.getPublicSubnetSuffix() != null) {
                data.set("publicSubnetSuffix", om.valueToTree(this.getPublicSubnetSuffix()));
            }
            if (this.getPublicSubnetTags() != null) {
                data.set("publicSubnetTags", om.valueToTree(this.getPublicSubnetTags()));
            }
            if (this.getPublicSubnetTagsPerAz() != null) {
                data.set("publicSubnetTagsPerAz", om.valueToTree(this.getPublicSubnetTagsPerAz()));
            }
            if (this.getPutinKhuylo() != null) {
                data.set("putinKhuylo", om.valueToTree(this.getPutinKhuylo()));
            }
            if (this.getRedshiftAclTags() != null) {
                data.set("redshiftAclTags", om.valueToTree(this.getRedshiftAclTags()));
            }
            if (this.getRedshiftDedicatedNetworkAcl() != null) {
                data.set("redshiftDedicatedNetworkAcl", om.valueToTree(this.getRedshiftDedicatedNetworkAcl()));
            }
            if (this.getRedshiftInboundAclRules() != null) {
                data.set("redshiftInboundAclRules", om.valueToTree(this.getRedshiftInboundAclRules()));
            }
            if (this.getRedshiftOutboundAclRules() != null) {
                data.set("redshiftOutboundAclRules", om.valueToTree(this.getRedshiftOutboundAclRules()));
            }
            if (this.getRedshiftRouteTableTags() != null) {
                data.set("redshiftRouteTableTags", om.valueToTree(this.getRedshiftRouteTableTags()));
            }
            if (this.getRedshiftSubnetAssignIpv6AddressOnCreation() != null) {
                data.set("redshiftSubnetAssignIpv6AddressOnCreation", om.valueToTree(this.getRedshiftSubnetAssignIpv6AddressOnCreation()));
            }
            if (this.getRedshiftSubnetEnableDns64() != null) {
                data.set("redshiftSubnetEnableDns64", om.valueToTree(this.getRedshiftSubnetEnableDns64()));
            }
            if (this.getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch() != null) {
                data.set("redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch", om.valueToTree(this.getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch()));
            }
            if (this.getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch() != null) {
                data.set("redshiftSubnetEnableResourceNameDnsARecordOnLaunch", om.valueToTree(this.getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch()));
            }
            if (this.getRedshiftSubnetGroupName() != null) {
                data.set("redshiftSubnetGroupName", om.valueToTree(this.getRedshiftSubnetGroupName()));
            }
            if (this.getRedshiftSubnetGroupTags() != null) {
                data.set("redshiftSubnetGroupTags", om.valueToTree(this.getRedshiftSubnetGroupTags()));
            }
            if (this.getRedshiftSubnetIpv6Native() != null) {
                data.set("redshiftSubnetIpv6Native", om.valueToTree(this.getRedshiftSubnetIpv6Native()));
            }
            if (this.getRedshiftSubnetIpv6Prefixes() != null) {
                data.set("redshiftSubnetIpv6Prefixes", om.valueToTree(this.getRedshiftSubnetIpv6Prefixes()));
            }
            if (this.getRedshiftSubnetNames() != null) {
                data.set("redshiftSubnetNames", om.valueToTree(this.getRedshiftSubnetNames()));
            }
            if (this.getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch() != null) {
                data.set("redshiftSubnetPrivateDnsHostnameTypeOnLaunch", om.valueToTree(this.getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch()));
            }
            if (this.getRedshiftSubnets() != null) {
                data.set("redshiftSubnets", om.valueToTree(this.getRedshiftSubnets()));
            }
            if (this.getRedshiftSubnetSuffix() != null) {
                data.set("redshiftSubnetSuffix", om.valueToTree(this.getRedshiftSubnetSuffix()));
            }
            if (this.getRedshiftSubnetTags() != null) {
                data.set("redshiftSubnetTags", om.valueToTree(this.getRedshiftSubnetTags()));
            }
            if (this.getReuseNatIps() != null) {
                data.set("reuseNatIps", om.valueToTree(this.getReuseNatIps()));
            }
            if (this.getSecondaryCidrBlocks() != null) {
                data.set("secondaryCidrBlocks", om.valueToTree(this.getSecondaryCidrBlocks()));
            }
            if (this.getSingleNatGateway() != null) {
                data.set("singleNatGateway", om.valueToTree(this.getSingleNatGateway()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUseIpamPool() != null) {
                data.set("useIpamPool", om.valueToTree(this.getUseIpamPool()));
            }
            if (this.getVpcFlowLogPermissionsBoundary() != null) {
                data.set("vpcFlowLogPermissionsBoundary", om.valueToTree(this.getVpcFlowLogPermissionsBoundary()));
            }
            if (this.getVpcFlowLogTags() != null) {
                data.set("vpcFlowLogTags", om.valueToTree(this.getVpcFlowLogTags()));
            }
            if (this.getVpcTags() != null) {
                data.set("vpcTags", om.valueToTree(this.getVpcTags()));
            }
            if (this.getVpnGatewayAz() != null) {
                data.set("vpnGatewayAz", om.valueToTree(this.getVpnGatewayAz()));
            }
            if (this.getVpnGatewayId() != null) {
                data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            }
            if (this.getVpnGatewayTags() != null) {
                data.set("vpnGatewayTags", om.valueToTree(this.getVpnGatewayTags()));
            }
            if (this.getDependsOn() != null) {
                data.set("dependsOn", om.valueToTree(this.getDependsOn()));
            }
            if (this.getForEach() != null) {
                data.set("forEach", om.valueToTree(this.getForEach()));
            }
            if (this.getProviders() != null) {
                data.set("providers", om.valueToTree(this.getProviders()));
            }
            if (this.getSkipAssetCreationFromLocalModules() != null) {
                data.set("skipAssetCreationFromLocalModules", om.valueToTree(this.getSkipAssetCreationFromLocalModules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("vpc.VpcConfig"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcConfig.Jsii$Proxy that = (VpcConfig.Jsii$Proxy) o;

            if (this.amazonSideAsn != null ? !this.amazonSideAsn.equals(that.amazonSideAsn) : that.amazonSideAsn != null) return false;
            if (this.azs != null ? !this.azs.equals(that.azs) : that.azs != null) return false;
            if (this.cidr != null ? !this.cidr.equals(that.cidr) : that.cidr != null) return false;
            if (this.createDatabaseInternetGatewayRoute != null ? !this.createDatabaseInternetGatewayRoute.equals(that.createDatabaseInternetGatewayRoute) : that.createDatabaseInternetGatewayRoute != null) return false;
            if (this.createDatabaseNatGatewayRoute != null ? !this.createDatabaseNatGatewayRoute.equals(that.createDatabaseNatGatewayRoute) : that.createDatabaseNatGatewayRoute != null) return false;
            if (this.createDatabaseSubnetGroup != null ? !this.createDatabaseSubnetGroup.equals(that.createDatabaseSubnetGroup) : that.createDatabaseSubnetGroup != null) return false;
            if (this.createDatabaseSubnetRouteTable != null ? !this.createDatabaseSubnetRouteTable.equals(that.createDatabaseSubnetRouteTable) : that.createDatabaseSubnetRouteTable != null) return false;
            if (this.createEgressOnlyIgw != null ? !this.createEgressOnlyIgw.equals(that.createEgressOnlyIgw) : that.createEgressOnlyIgw != null) return false;
            if (this.createElasticacheSubnetGroup != null ? !this.createElasticacheSubnetGroup.equals(that.createElasticacheSubnetGroup) : that.createElasticacheSubnetGroup != null) return false;
            if (this.createElasticacheSubnetRouteTable != null ? !this.createElasticacheSubnetRouteTable.equals(that.createElasticacheSubnetRouteTable) : that.createElasticacheSubnetRouteTable != null) return false;
            if (this.createFlowLogCloudwatchIamRole != null ? !this.createFlowLogCloudwatchIamRole.equals(that.createFlowLogCloudwatchIamRole) : that.createFlowLogCloudwatchIamRole != null) return false;
            if (this.createFlowLogCloudwatchLogGroup != null ? !this.createFlowLogCloudwatchLogGroup.equals(that.createFlowLogCloudwatchLogGroup) : that.createFlowLogCloudwatchLogGroup != null) return false;
            if (this.createIgw != null ? !this.createIgw.equals(that.createIgw) : that.createIgw != null) return false;
            if (this.createRedshiftSubnetGroup != null ? !this.createRedshiftSubnetGroup.equals(that.createRedshiftSubnetGroup) : that.createRedshiftSubnetGroup != null) return false;
            if (this.createRedshiftSubnetRouteTable != null ? !this.createRedshiftSubnetRouteTable.equals(that.createRedshiftSubnetRouteTable) : that.createRedshiftSubnetRouteTable != null) return false;
            if (this.createVpc != null ? !this.createVpc.equals(that.createVpc) : that.createVpc != null) return false;
            if (this.customerGateways != null ? !this.customerGateways.equals(that.customerGateways) : that.customerGateways != null) return false;
            if (this.customerGatewayTags != null ? !this.customerGatewayTags.equals(that.customerGatewayTags) : that.customerGatewayTags != null) return false;
            if (this.customerOwnedIpv4Pool != null ? !this.customerOwnedIpv4Pool.equals(that.customerOwnedIpv4Pool) : that.customerOwnedIpv4Pool != null) return false;
            if (this.databaseAclTags != null ? !this.databaseAclTags.equals(that.databaseAclTags) : that.databaseAclTags != null) return false;
            if (this.databaseDedicatedNetworkAcl != null ? !this.databaseDedicatedNetworkAcl.equals(that.databaseDedicatedNetworkAcl) : that.databaseDedicatedNetworkAcl != null) return false;
            if (this.databaseInboundAclRules != null ? !this.databaseInboundAclRules.equals(that.databaseInboundAclRules) : that.databaseInboundAclRules != null) return false;
            if (this.databaseOutboundAclRules != null ? !this.databaseOutboundAclRules.equals(that.databaseOutboundAclRules) : that.databaseOutboundAclRules != null) return false;
            if (this.databaseRouteTableTags != null ? !this.databaseRouteTableTags.equals(that.databaseRouteTableTags) : that.databaseRouteTableTags != null) return false;
            if (this.databaseSubnetAssignIpv6AddressOnCreation != null ? !this.databaseSubnetAssignIpv6AddressOnCreation.equals(that.databaseSubnetAssignIpv6AddressOnCreation) : that.databaseSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.databaseSubnetEnableDns64 != null ? !this.databaseSubnetEnableDns64.equals(that.databaseSubnetEnableDns64) : that.databaseSubnetEnableDns64 != null) return false;
            if (this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.databaseSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.databaseSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.databaseSubnetEnableResourceNameDnsARecordOnLaunch) : that.databaseSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.databaseSubnetGroupName != null ? !this.databaseSubnetGroupName.equals(that.databaseSubnetGroupName) : that.databaseSubnetGroupName != null) return false;
            if (this.databaseSubnetGroupTags != null ? !this.databaseSubnetGroupTags.equals(that.databaseSubnetGroupTags) : that.databaseSubnetGroupTags != null) return false;
            if (this.databaseSubnetIpv6Native != null ? !this.databaseSubnetIpv6Native.equals(that.databaseSubnetIpv6Native) : that.databaseSubnetIpv6Native != null) return false;
            if (this.databaseSubnetIpv6Prefixes != null ? !this.databaseSubnetIpv6Prefixes.equals(that.databaseSubnetIpv6Prefixes) : that.databaseSubnetIpv6Prefixes != null) return false;
            if (this.databaseSubnetNames != null ? !this.databaseSubnetNames.equals(that.databaseSubnetNames) : that.databaseSubnetNames != null) return false;
            if (this.databaseSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.databaseSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.databaseSubnetPrivateDnsHostnameTypeOnLaunch) : that.databaseSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.databaseSubnets != null ? !this.databaseSubnets.equals(that.databaseSubnets) : that.databaseSubnets != null) return false;
            if (this.databaseSubnetSuffix != null ? !this.databaseSubnetSuffix.equals(that.databaseSubnetSuffix) : that.databaseSubnetSuffix != null) return false;
            if (this.databaseSubnetTags != null ? !this.databaseSubnetTags.equals(that.databaseSubnetTags) : that.databaseSubnetTags != null) return false;
            if (this.defaultNetworkAclEgress != null ? !this.defaultNetworkAclEgress.equals(that.defaultNetworkAclEgress) : that.defaultNetworkAclEgress != null) return false;
            if (this.defaultNetworkAclIngress != null ? !this.defaultNetworkAclIngress.equals(that.defaultNetworkAclIngress) : that.defaultNetworkAclIngress != null) return false;
            if (this.defaultNetworkAclName != null ? !this.defaultNetworkAclName.equals(that.defaultNetworkAclName) : that.defaultNetworkAclName != null) return false;
            if (this.defaultNetworkAclTags != null ? !this.defaultNetworkAclTags.equals(that.defaultNetworkAclTags) : that.defaultNetworkAclTags != null) return false;
            if (this.defaultRouteTableName != null ? !this.defaultRouteTableName.equals(that.defaultRouteTableName) : that.defaultRouteTableName != null) return false;
            if (this.defaultRouteTablePropagatingVgws != null ? !this.defaultRouteTablePropagatingVgws.equals(that.defaultRouteTablePropagatingVgws) : that.defaultRouteTablePropagatingVgws != null) return false;
            if (this.defaultRouteTableRoutes != null ? !this.defaultRouteTableRoutes.equals(that.defaultRouteTableRoutes) : that.defaultRouteTableRoutes != null) return false;
            if (this.defaultRouteTableTags != null ? !this.defaultRouteTableTags.equals(that.defaultRouteTableTags) : that.defaultRouteTableTags != null) return false;
            if (this.defaultSecurityGroupEgress != null ? !this.defaultSecurityGroupEgress.equals(that.defaultSecurityGroupEgress) : that.defaultSecurityGroupEgress != null) return false;
            if (this.defaultSecurityGroupIngress != null ? !this.defaultSecurityGroupIngress.equals(that.defaultSecurityGroupIngress) : that.defaultSecurityGroupIngress != null) return false;
            if (this.defaultSecurityGroupName != null ? !this.defaultSecurityGroupName.equals(that.defaultSecurityGroupName) : that.defaultSecurityGroupName != null) return false;
            if (this.defaultSecurityGroupTags != null ? !this.defaultSecurityGroupTags.equals(that.defaultSecurityGroupTags) : that.defaultSecurityGroupTags != null) return false;
            if (this.defaultVpcEnableDnsHostnames != null ? !this.defaultVpcEnableDnsHostnames.equals(that.defaultVpcEnableDnsHostnames) : that.defaultVpcEnableDnsHostnames != null) return false;
            if (this.defaultVpcEnableDnsSupport != null ? !this.defaultVpcEnableDnsSupport.equals(that.defaultVpcEnableDnsSupport) : that.defaultVpcEnableDnsSupport != null) return false;
            if (this.defaultVpcName != null ? !this.defaultVpcName.equals(that.defaultVpcName) : that.defaultVpcName != null) return false;
            if (this.defaultVpcTags != null ? !this.defaultVpcTags.equals(that.defaultVpcTags) : that.defaultVpcTags != null) return false;
            if (this.dhcpOptionsDomainName != null ? !this.dhcpOptionsDomainName.equals(that.dhcpOptionsDomainName) : that.dhcpOptionsDomainName != null) return false;
            if (this.dhcpOptionsDomainNameServers != null ? !this.dhcpOptionsDomainNameServers.equals(that.dhcpOptionsDomainNameServers) : that.dhcpOptionsDomainNameServers != null) return false;
            if (this.dhcpOptionsNetbiosNameServers != null ? !this.dhcpOptionsNetbiosNameServers.equals(that.dhcpOptionsNetbiosNameServers) : that.dhcpOptionsNetbiosNameServers != null) return false;
            if (this.dhcpOptionsNetbiosNodeType != null ? !this.dhcpOptionsNetbiosNodeType.equals(that.dhcpOptionsNetbiosNodeType) : that.dhcpOptionsNetbiosNodeType != null) return false;
            if (this.dhcpOptionsNtpServers != null ? !this.dhcpOptionsNtpServers.equals(that.dhcpOptionsNtpServers) : that.dhcpOptionsNtpServers != null) return false;
            if (this.dhcpOptionsTags != null ? !this.dhcpOptionsTags.equals(that.dhcpOptionsTags) : that.dhcpOptionsTags != null) return false;
            if (this.elasticacheAclTags != null ? !this.elasticacheAclTags.equals(that.elasticacheAclTags) : that.elasticacheAclTags != null) return false;
            if (this.elasticacheDedicatedNetworkAcl != null ? !this.elasticacheDedicatedNetworkAcl.equals(that.elasticacheDedicatedNetworkAcl) : that.elasticacheDedicatedNetworkAcl != null) return false;
            if (this.elasticacheInboundAclRules != null ? !this.elasticacheInboundAclRules.equals(that.elasticacheInboundAclRules) : that.elasticacheInboundAclRules != null) return false;
            if (this.elasticacheOutboundAclRules != null ? !this.elasticacheOutboundAclRules.equals(that.elasticacheOutboundAclRules) : that.elasticacheOutboundAclRules != null) return false;
            if (this.elasticacheRouteTableTags != null ? !this.elasticacheRouteTableTags.equals(that.elasticacheRouteTableTags) : that.elasticacheRouteTableTags != null) return false;
            if (this.elasticacheSubnetAssignIpv6AddressOnCreation != null ? !this.elasticacheSubnetAssignIpv6AddressOnCreation.equals(that.elasticacheSubnetAssignIpv6AddressOnCreation) : that.elasticacheSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.elasticacheSubnetEnableDns64 != null ? !this.elasticacheSubnetEnableDns64.equals(that.elasticacheSubnetEnableDns64) : that.elasticacheSubnetEnableDns64 != null) return false;
            if (this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch) : that.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.elasticacheSubnetGroupName != null ? !this.elasticacheSubnetGroupName.equals(that.elasticacheSubnetGroupName) : that.elasticacheSubnetGroupName != null) return false;
            if (this.elasticacheSubnetGroupTags != null ? !this.elasticacheSubnetGroupTags.equals(that.elasticacheSubnetGroupTags) : that.elasticacheSubnetGroupTags != null) return false;
            if (this.elasticacheSubnetIpv6Native != null ? !this.elasticacheSubnetIpv6Native.equals(that.elasticacheSubnetIpv6Native) : that.elasticacheSubnetIpv6Native != null) return false;
            if (this.elasticacheSubnetIpv6Prefixes != null ? !this.elasticacheSubnetIpv6Prefixes.equals(that.elasticacheSubnetIpv6Prefixes) : that.elasticacheSubnetIpv6Prefixes != null) return false;
            if (this.elasticacheSubnetNames != null ? !this.elasticacheSubnetNames.equals(that.elasticacheSubnetNames) : that.elasticacheSubnetNames != null) return false;
            if (this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch) : that.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.elasticacheSubnets != null ? !this.elasticacheSubnets.equals(that.elasticacheSubnets) : that.elasticacheSubnets != null) return false;
            if (this.elasticacheSubnetSuffix != null ? !this.elasticacheSubnetSuffix.equals(that.elasticacheSubnetSuffix) : that.elasticacheSubnetSuffix != null) return false;
            if (this.elasticacheSubnetTags != null ? !this.elasticacheSubnetTags.equals(that.elasticacheSubnetTags) : that.elasticacheSubnetTags != null) return false;
            if (this.enableDhcpOptions != null ? !this.enableDhcpOptions.equals(that.enableDhcpOptions) : that.enableDhcpOptions != null) return false;
            if (this.enableDnsHostnames != null ? !this.enableDnsHostnames.equals(that.enableDnsHostnames) : that.enableDnsHostnames != null) return false;
            if (this.enableDnsSupport != null ? !this.enableDnsSupport.equals(that.enableDnsSupport) : that.enableDnsSupport != null) return false;
            if (this.enableFlowLog != null ? !this.enableFlowLog.equals(that.enableFlowLog) : that.enableFlowLog != null) return false;
            if (this.enableIpv6 != null ? !this.enableIpv6.equals(that.enableIpv6) : that.enableIpv6 != null) return false;
            if (this.enableNatGateway != null ? !this.enableNatGateway.equals(that.enableNatGateway) : that.enableNatGateway != null) return false;
            if (this.enableNetworkAddressUsageMetrics != null ? !this.enableNetworkAddressUsageMetrics.equals(that.enableNetworkAddressUsageMetrics) : that.enableNetworkAddressUsageMetrics != null) return false;
            if (this.enablePublicRedshift != null ? !this.enablePublicRedshift.equals(that.enablePublicRedshift) : that.enablePublicRedshift != null) return false;
            if (this.enableVpnGateway != null ? !this.enableVpnGateway.equals(that.enableVpnGateway) : that.enableVpnGateway != null) return false;
            if (this.externalNatIpIds != null ? !this.externalNatIpIds.equals(that.externalNatIpIds) : that.externalNatIpIds != null) return false;
            if (this.externalNatIps != null ? !this.externalNatIps.equals(that.externalNatIps) : that.externalNatIps != null) return false;
            if (this.flowLogCloudwatchIamRoleArn != null ? !this.flowLogCloudwatchIamRoleArn.equals(that.flowLogCloudwatchIamRoleArn) : that.flowLogCloudwatchIamRoleArn != null) return false;
            if (this.flowLogCloudwatchLogGroupKmsKeyId != null ? !this.flowLogCloudwatchLogGroupKmsKeyId.equals(that.flowLogCloudwatchLogGroupKmsKeyId) : that.flowLogCloudwatchLogGroupKmsKeyId != null) return false;
            if (this.flowLogCloudwatchLogGroupNamePrefix != null ? !this.flowLogCloudwatchLogGroupNamePrefix.equals(that.flowLogCloudwatchLogGroupNamePrefix) : that.flowLogCloudwatchLogGroupNamePrefix != null) return false;
            if (this.flowLogCloudwatchLogGroupNameSuffix != null ? !this.flowLogCloudwatchLogGroupNameSuffix.equals(that.flowLogCloudwatchLogGroupNameSuffix) : that.flowLogCloudwatchLogGroupNameSuffix != null) return false;
            if (this.flowLogCloudwatchLogGroupRetentionInDays != null ? !this.flowLogCloudwatchLogGroupRetentionInDays.equals(that.flowLogCloudwatchLogGroupRetentionInDays) : that.flowLogCloudwatchLogGroupRetentionInDays != null) return false;
            if (this.flowLogDestinationArn != null ? !this.flowLogDestinationArn.equals(that.flowLogDestinationArn) : that.flowLogDestinationArn != null) return false;
            if (this.flowLogDestinationType != null ? !this.flowLogDestinationType.equals(that.flowLogDestinationType) : that.flowLogDestinationType != null) return false;
            if (this.flowLogFileFormat != null ? !this.flowLogFileFormat.equals(that.flowLogFileFormat) : that.flowLogFileFormat != null) return false;
            if (this.flowLogHiveCompatiblePartitions != null ? !this.flowLogHiveCompatiblePartitions.equals(that.flowLogHiveCompatiblePartitions) : that.flowLogHiveCompatiblePartitions != null) return false;
            if (this.flowLogLogFormat != null ? !this.flowLogLogFormat.equals(that.flowLogLogFormat) : that.flowLogLogFormat != null) return false;
            if (this.flowLogMaxAggregationInterval != null ? !this.flowLogMaxAggregationInterval.equals(that.flowLogMaxAggregationInterval) : that.flowLogMaxAggregationInterval != null) return false;
            if (this.flowLogPerHourPartition != null ? !this.flowLogPerHourPartition.equals(that.flowLogPerHourPartition) : that.flowLogPerHourPartition != null) return false;
            if (this.flowLogTrafficType != null ? !this.flowLogTrafficType.equals(that.flowLogTrafficType) : that.flowLogTrafficType != null) return false;
            if (this.igwTags != null ? !this.igwTags.equals(that.igwTags) : that.igwTags != null) return false;
            if (this.instanceTenancy != null ? !this.instanceTenancy.equals(that.instanceTenancy) : that.instanceTenancy != null) return false;
            if (this.intraAclTags != null ? !this.intraAclTags.equals(that.intraAclTags) : that.intraAclTags != null) return false;
            if (this.intraDedicatedNetworkAcl != null ? !this.intraDedicatedNetworkAcl.equals(that.intraDedicatedNetworkAcl) : that.intraDedicatedNetworkAcl != null) return false;
            if (this.intraInboundAclRules != null ? !this.intraInboundAclRules.equals(that.intraInboundAclRules) : that.intraInboundAclRules != null) return false;
            if (this.intraOutboundAclRules != null ? !this.intraOutboundAclRules.equals(that.intraOutboundAclRules) : that.intraOutboundAclRules != null) return false;
            if (this.intraRouteTableTags != null ? !this.intraRouteTableTags.equals(that.intraRouteTableTags) : that.intraRouteTableTags != null) return false;
            if (this.intraSubnetAssignIpv6AddressOnCreation != null ? !this.intraSubnetAssignIpv6AddressOnCreation.equals(that.intraSubnetAssignIpv6AddressOnCreation) : that.intraSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.intraSubnetEnableDns64 != null ? !this.intraSubnetEnableDns64.equals(that.intraSubnetEnableDns64) : that.intraSubnetEnableDns64 != null) return false;
            if (this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.intraSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.intraSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.intraSubnetEnableResourceNameDnsARecordOnLaunch) : that.intraSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.intraSubnetIpv6Native != null ? !this.intraSubnetIpv6Native.equals(that.intraSubnetIpv6Native) : that.intraSubnetIpv6Native != null) return false;
            if (this.intraSubnetIpv6Prefixes != null ? !this.intraSubnetIpv6Prefixes.equals(that.intraSubnetIpv6Prefixes) : that.intraSubnetIpv6Prefixes != null) return false;
            if (this.intraSubnetNames != null ? !this.intraSubnetNames.equals(that.intraSubnetNames) : that.intraSubnetNames != null) return false;
            if (this.intraSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.intraSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.intraSubnetPrivateDnsHostnameTypeOnLaunch) : that.intraSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.intraSubnets != null ? !this.intraSubnets.equals(that.intraSubnets) : that.intraSubnets != null) return false;
            if (this.intraSubnetSuffix != null ? !this.intraSubnetSuffix.equals(that.intraSubnetSuffix) : that.intraSubnetSuffix != null) return false;
            if (this.intraSubnetTags != null ? !this.intraSubnetTags.equals(that.intraSubnetTags) : that.intraSubnetTags != null) return false;
            if (this.ipv4IpamPoolId != null ? !this.ipv4IpamPoolId.equals(that.ipv4IpamPoolId) : that.ipv4IpamPoolId != null) return false;
            if (this.ipv4NetmaskLength != null ? !this.ipv4NetmaskLength.equals(that.ipv4NetmaskLength) : that.ipv4NetmaskLength != null) return false;
            if (this.ipv6Cidr != null ? !this.ipv6Cidr.equals(that.ipv6Cidr) : that.ipv6Cidr != null) return false;
            if (this.ipv6CidrBlockNetworkBorderGroup != null ? !this.ipv6CidrBlockNetworkBorderGroup.equals(that.ipv6CidrBlockNetworkBorderGroup) : that.ipv6CidrBlockNetworkBorderGroup != null) return false;
            if (this.ipv6IpamPoolId != null ? !this.ipv6IpamPoolId.equals(that.ipv6IpamPoolId) : that.ipv6IpamPoolId != null) return false;
            if (this.ipv6NetmaskLength != null ? !this.ipv6NetmaskLength.equals(that.ipv6NetmaskLength) : that.ipv6NetmaskLength != null) return false;
            if (this.manageDefaultNetworkAcl != null ? !this.manageDefaultNetworkAcl.equals(that.manageDefaultNetworkAcl) : that.manageDefaultNetworkAcl != null) return false;
            if (this.manageDefaultRouteTable != null ? !this.manageDefaultRouteTable.equals(that.manageDefaultRouteTable) : that.manageDefaultRouteTable != null) return false;
            if (this.manageDefaultSecurityGroup != null ? !this.manageDefaultSecurityGroup.equals(that.manageDefaultSecurityGroup) : that.manageDefaultSecurityGroup != null) return false;
            if (this.manageDefaultVpc != null ? !this.manageDefaultVpc.equals(that.manageDefaultVpc) : that.manageDefaultVpc != null) return false;
            if (this.mapCustomerOwnedIpOnLaunch != null ? !this.mapCustomerOwnedIpOnLaunch.equals(that.mapCustomerOwnedIpOnLaunch) : that.mapCustomerOwnedIpOnLaunch != null) return false;
            if (this.mapPublicIpOnLaunch != null ? !this.mapPublicIpOnLaunch.equals(that.mapPublicIpOnLaunch) : that.mapPublicIpOnLaunch != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.natEipTags != null ? !this.natEipTags.equals(that.natEipTags) : that.natEipTags != null) return false;
            if (this.natGatewayDestinationCidrBlock != null ? !this.natGatewayDestinationCidrBlock.equals(that.natGatewayDestinationCidrBlock) : that.natGatewayDestinationCidrBlock != null) return false;
            if (this.natGatewayTags != null ? !this.natGatewayTags.equals(that.natGatewayTags) : that.natGatewayTags != null) return false;
            if (this.oneNatGatewayPerAz != null ? !this.oneNatGatewayPerAz.equals(that.oneNatGatewayPerAz) : that.oneNatGatewayPerAz != null) return false;
            if (this.outpostAclTags != null ? !this.outpostAclTags.equals(that.outpostAclTags) : that.outpostAclTags != null) return false;
            if (this.outpostArn != null ? !this.outpostArn.equals(that.outpostArn) : that.outpostArn != null) return false;
            if (this.outpostAz != null ? !this.outpostAz.equals(that.outpostAz) : that.outpostAz != null) return false;
            if (this.outpostDedicatedNetworkAcl != null ? !this.outpostDedicatedNetworkAcl.equals(that.outpostDedicatedNetworkAcl) : that.outpostDedicatedNetworkAcl != null) return false;
            if (this.outpostInboundAclRules != null ? !this.outpostInboundAclRules.equals(that.outpostInboundAclRules) : that.outpostInboundAclRules != null) return false;
            if (this.outpostOutboundAclRules != null ? !this.outpostOutboundAclRules.equals(that.outpostOutboundAclRules) : that.outpostOutboundAclRules != null) return false;
            if (this.outpostSubnetAssignIpv6AddressOnCreation != null ? !this.outpostSubnetAssignIpv6AddressOnCreation.equals(that.outpostSubnetAssignIpv6AddressOnCreation) : that.outpostSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.outpostSubnetEnableDns64 != null ? !this.outpostSubnetEnableDns64.equals(that.outpostSubnetEnableDns64) : that.outpostSubnetEnableDns64 != null) return false;
            if (this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.outpostSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.outpostSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.outpostSubnetEnableResourceNameDnsARecordOnLaunch) : that.outpostSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.outpostSubnetIpv6Native != null ? !this.outpostSubnetIpv6Native.equals(that.outpostSubnetIpv6Native) : that.outpostSubnetIpv6Native != null) return false;
            if (this.outpostSubnetIpv6Prefixes != null ? !this.outpostSubnetIpv6Prefixes.equals(that.outpostSubnetIpv6Prefixes) : that.outpostSubnetIpv6Prefixes != null) return false;
            if (this.outpostSubnetNames != null ? !this.outpostSubnetNames.equals(that.outpostSubnetNames) : that.outpostSubnetNames != null) return false;
            if (this.outpostSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.outpostSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.outpostSubnetPrivateDnsHostnameTypeOnLaunch) : that.outpostSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.outpostSubnets != null ? !this.outpostSubnets.equals(that.outpostSubnets) : that.outpostSubnets != null) return false;
            if (this.outpostSubnetSuffix != null ? !this.outpostSubnetSuffix.equals(that.outpostSubnetSuffix) : that.outpostSubnetSuffix != null) return false;
            if (this.outpostSubnetTags != null ? !this.outpostSubnetTags.equals(that.outpostSubnetTags) : that.outpostSubnetTags != null) return false;
            if (this.privateAclTags != null ? !this.privateAclTags.equals(that.privateAclTags) : that.privateAclTags != null) return false;
            if (this.privateDedicatedNetworkAcl != null ? !this.privateDedicatedNetworkAcl.equals(that.privateDedicatedNetworkAcl) : that.privateDedicatedNetworkAcl != null) return false;
            if (this.privateInboundAclRules != null ? !this.privateInboundAclRules.equals(that.privateInboundAclRules) : that.privateInboundAclRules != null) return false;
            if (this.privateOutboundAclRules != null ? !this.privateOutboundAclRules.equals(that.privateOutboundAclRules) : that.privateOutboundAclRules != null) return false;
            if (this.privateRouteTableTags != null ? !this.privateRouteTableTags.equals(that.privateRouteTableTags) : that.privateRouteTableTags != null) return false;
            if (this.privateSubnetAssignIpv6AddressOnCreation != null ? !this.privateSubnetAssignIpv6AddressOnCreation.equals(that.privateSubnetAssignIpv6AddressOnCreation) : that.privateSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.privateSubnetEnableDns64 != null ? !this.privateSubnetEnableDns64.equals(that.privateSubnetEnableDns64) : that.privateSubnetEnableDns64 != null) return false;
            if (this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.privateSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.privateSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.privateSubnetEnableResourceNameDnsARecordOnLaunch) : that.privateSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.privateSubnetIpv6Native != null ? !this.privateSubnetIpv6Native.equals(that.privateSubnetIpv6Native) : that.privateSubnetIpv6Native != null) return false;
            if (this.privateSubnetIpv6Prefixes != null ? !this.privateSubnetIpv6Prefixes.equals(that.privateSubnetIpv6Prefixes) : that.privateSubnetIpv6Prefixes != null) return false;
            if (this.privateSubnetNames != null ? !this.privateSubnetNames.equals(that.privateSubnetNames) : that.privateSubnetNames != null) return false;
            if (this.privateSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.privateSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.privateSubnetPrivateDnsHostnameTypeOnLaunch) : that.privateSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.privateSubnets != null ? !this.privateSubnets.equals(that.privateSubnets) : that.privateSubnets != null) return false;
            if (this.privateSubnetSuffix != null ? !this.privateSubnetSuffix.equals(that.privateSubnetSuffix) : that.privateSubnetSuffix != null) return false;
            if (this.privateSubnetTags != null ? !this.privateSubnetTags.equals(that.privateSubnetTags) : that.privateSubnetTags != null) return false;
            if (this.privateSubnetTagsPerAz != null ? !this.privateSubnetTagsPerAz.equals(that.privateSubnetTagsPerAz) : that.privateSubnetTagsPerAz != null) return false;
            if (this.propagateIntraRouteTablesVgw != null ? !this.propagateIntraRouteTablesVgw.equals(that.propagateIntraRouteTablesVgw) : that.propagateIntraRouteTablesVgw != null) return false;
            if (this.propagatePrivateRouteTablesVgw != null ? !this.propagatePrivateRouteTablesVgw.equals(that.propagatePrivateRouteTablesVgw) : that.propagatePrivateRouteTablesVgw != null) return false;
            if (this.propagatePublicRouteTablesVgw != null ? !this.propagatePublicRouteTablesVgw.equals(that.propagatePublicRouteTablesVgw) : that.propagatePublicRouteTablesVgw != null) return false;
            if (this.publicAclTags != null ? !this.publicAclTags.equals(that.publicAclTags) : that.publicAclTags != null) return false;
            if (this.publicDedicatedNetworkAcl != null ? !this.publicDedicatedNetworkAcl.equals(that.publicDedicatedNetworkAcl) : that.publicDedicatedNetworkAcl != null) return false;
            if (this.publicInboundAclRules != null ? !this.publicInboundAclRules.equals(that.publicInboundAclRules) : that.publicInboundAclRules != null) return false;
            if (this.publicOutboundAclRules != null ? !this.publicOutboundAclRules.equals(that.publicOutboundAclRules) : that.publicOutboundAclRules != null) return false;
            if (this.publicRouteTableTags != null ? !this.publicRouteTableTags.equals(that.publicRouteTableTags) : that.publicRouteTableTags != null) return false;
            if (this.publicSubnetAssignIpv6AddressOnCreation != null ? !this.publicSubnetAssignIpv6AddressOnCreation.equals(that.publicSubnetAssignIpv6AddressOnCreation) : that.publicSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.publicSubnetEnableDns64 != null ? !this.publicSubnetEnableDns64.equals(that.publicSubnetEnableDns64) : that.publicSubnetEnableDns64 != null) return false;
            if (this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.publicSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.publicSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.publicSubnetEnableResourceNameDnsARecordOnLaunch) : that.publicSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.publicSubnetIpv6Native != null ? !this.publicSubnetIpv6Native.equals(that.publicSubnetIpv6Native) : that.publicSubnetIpv6Native != null) return false;
            if (this.publicSubnetIpv6Prefixes != null ? !this.publicSubnetIpv6Prefixes.equals(that.publicSubnetIpv6Prefixes) : that.publicSubnetIpv6Prefixes != null) return false;
            if (this.publicSubnetNames != null ? !this.publicSubnetNames.equals(that.publicSubnetNames) : that.publicSubnetNames != null) return false;
            if (this.publicSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.publicSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.publicSubnetPrivateDnsHostnameTypeOnLaunch) : that.publicSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.publicSubnets != null ? !this.publicSubnets.equals(that.publicSubnets) : that.publicSubnets != null) return false;
            if (this.publicSubnetSuffix != null ? !this.publicSubnetSuffix.equals(that.publicSubnetSuffix) : that.publicSubnetSuffix != null) return false;
            if (this.publicSubnetTags != null ? !this.publicSubnetTags.equals(that.publicSubnetTags) : that.publicSubnetTags != null) return false;
            if (this.publicSubnetTagsPerAz != null ? !this.publicSubnetTagsPerAz.equals(that.publicSubnetTagsPerAz) : that.publicSubnetTagsPerAz != null) return false;
            if (this.putinKhuylo != null ? !this.putinKhuylo.equals(that.putinKhuylo) : that.putinKhuylo != null) return false;
            if (this.redshiftAclTags != null ? !this.redshiftAclTags.equals(that.redshiftAclTags) : that.redshiftAclTags != null) return false;
            if (this.redshiftDedicatedNetworkAcl != null ? !this.redshiftDedicatedNetworkAcl.equals(that.redshiftDedicatedNetworkAcl) : that.redshiftDedicatedNetworkAcl != null) return false;
            if (this.redshiftInboundAclRules != null ? !this.redshiftInboundAclRules.equals(that.redshiftInboundAclRules) : that.redshiftInboundAclRules != null) return false;
            if (this.redshiftOutboundAclRules != null ? !this.redshiftOutboundAclRules.equals(that.redshiftOutboundAclRules) : that.redshiftOutboundAclRules != null) return false;
            if (this.redshiftRouteTableTags != null ? !this.redshiftRouteTableTags.equals(that.redshiftRouteTableTags) : that.redshiftRouteTableTags != null) return false;
            if (this.redshiftSubnetAssignIpv6AddressOnCreation != null ? !this.redshiftSubnetAssignIpv6AddressOnCreation.equals(that.redshiftSubnetAssignIpv6AddressOnCreation) : that.redshiftSubnetAssignIpv6AddressOnCreation != null) return false;
            if (this.redshiftSubnetEnableDns64 != null ? !this.redshiftSubnetEnableDns64.equals(that.redshiftSubnetEnableDns64) : that.redshiftSubnetEnableDns64 != null) return false;
            if (this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? !this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch.equals(that.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch) : that.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null) return false;
            if (this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch != null ? !this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch.equals(that.redshiftSubnetEnableResourceNameDnsARecordOnLaunch) : that.redshiftSubnetEnableResourceNameDnsARecordOnLaunch != null) return false;
            if (this.redshiftSubnetGroupName != null ? !this.redshiftSubnetGroupName.equals(that.redshiftSubnetGroupName) : that.redshiftSubnetGroupName != null) return false;
            if (this.redshiftSubnetGroupTags != null ? !this.redshiftSubnetGroupTags.equals(that.redshiftSubnetGroupTags) : that.redshiftSubnetGroupTags != null) return false;
            if (this.redshiftSubnetIpv6Native != null ? !this.redshiftSubnetIpv6Native.equals(that.redshiftSubnetIpv6Native) : that.redshiftSubnetIpv6Native != null) return false;
            if (this.redshiftSubnetIpv6Prefixes != null ? !this.redshiftSubnetIpv6Prefixes.equals(that.redshiftSubnetIpv6Prefixes) : that.redshiftSubnetIpv6Prefixes != null) return false;
            if (this.redshiftSubnetNames != null ? !this.redshiftSubnetNames.equals(that.redshiftSubnetNames) : that.redshiftSubnetNames != null) return false;
            if (this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch != null ? !this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch.equals(that.redshiftSubnetPrivateDnsHostnameTypeOnLaunch) : that.redshiftSubnetPrivateDnsHostnameTypeOnLaunch != null) return false;
            if (this.redshiftSubnets != null ? !this.redshiftSubnets.equals(that.redshiftSubnets) : that.redshiftSubnets != null) return false;
            if (this.redshiftSubnetSuffix != null ? !this.redshiftSubnetSuffix.equals(that.redshiftSubnetSuffix) : that.redshiftSubnetSuffix != null) return false;
            if (this.redshiftSubnetTags != null ? !this.redshiftSubnetTags.equals(that.redshiftSubnetTags) : that.redshiftSubnetTags != null) return false;
            if (this.reuseNatIps != null ? !this.reuseNatIps.equals(that.reuseNatIps) : that.reuseNatIps != null) return false;
            if (this.secondaryCidrBlocks != null ? !this.secondaryCidrBlocks.equals(that.secondaryCidrBlocks) : that.secondaryCidrBlocks != null) return false;
            if (this.singleNatGateway != null ? !this.singleNatGateway.equals(that.singleNatGateway) : that.singleNatGateway != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.useIpamPool != null ? !this.useIpamPool.equals(that.useIpamPool) : that.useIpamPool != null) return false;
            if (this.vpcFlowLogPermissionsBoundary != null ? !this.vpcFlowLogPermissionsBoundary.equals(that.vpcFlowLogPermissionsBoundary) : that.vpcFlowLogPermissionsBoundary != null) return false;
            if (this.vpcFlowLogTags != null ? !this.vpcFlowLogTags.equals(that.vpcFlowLogTags) : that.vpcFlowLogTags != null) return false;
            if (this.vpcTags != null ? !this.vpcTags.equals(that.vpcTags) : that.vpcTags != null) return false;
            if (this.vpnGatewayAz != null ? !this.vpnGatewayAz.equals(that.vpnGatewayAz) : that.vpnGatewayAz != null) return false;
            if (this.vpnGatewayId != null ? !this.vpnGatewayId.equals(that.vpnGatewayId) : that.vpnGatewayId != null) return false;
            if (this.vpnGatewayTags != null ? !this.vpnGatewayTags.equals(that.vpnGatewayTags) : that.vpnGatewayTags != null) return false;
            if (this.dependsOn != null ? !this.dependsOn.equals(that.dependsOn) : that.dependsOn != null) return false;
            if (this.forEach != null ? !this.forEach.equals(that.forEach) : that.forEach != null) return false;
            if (this.providers != null ? !this.providers.equals(that.providers) : that.providers != null) return false;
            return this.skipAssetCreationFromLocalModules != null ? this.skipAssetCreationFromLocalModules.equals(that.skipAssetCreationFromLocalModules) : that.skipAssetCreationFromLocalModules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.amazonSideAsn != null ? this.amazonSideAsn.hashCode() : 0;
            result = 31 * result + (this.azs != null ? this.azs.hashCode() : 0);
            result = 31 * result + (this.cidr != null ? this.cidr.hashCode() : 0);
            result = 31 * result + (this.createDatabaseInternetGatewayRoute != null ? this.createDatabaseInternetGatewayRoute.hashCode() : 0);
            result = 31 * result + (this.createDatabaseNatGatewayRoute != null ? this.createDatabaseNatGatewayRoute.hashCode() : 0);
            result = 31 * result + (this.createDatabaseSubnetGroup != null ? this.createDatabaseSubnetGroup.hashCode() : 0);
            result = 31 * result + (this.createDatabaseSubnetRouteTable != null ? this.createDatabaseSubnetRouteTable.hashCode() : 0);
            result = 31 * result + (this.createEgressOnlyIgw != null ? this.createEgressOnlyIgw.hashCode() : 0);
            result = 31 * result + (this.createElasticacheSubnetGroup != null ? this.createElasticacheSubnetGroup.hashCode() : 0);
            result = 31 * result + (this.createElasticacheSubnetRouteTable != null ? this.createElasticacheSubnetRouteTable.hashCode() : 0);
            result = 31 * result + (this.createFlowLogCloudwatchIamRole != null ? this.createFlowLogCloudwatchIamRole.hashCode() : 0);
            result = 31 * result + (this.createFlowLogCloudwatchLogGroup != null ? this.createFlowLogCloudwatchLogGroup.hashCode() : 0);
            result = 31 * result + (this.createIgw != null ? this.createIgw.hashCode() : 0);
            result = 31 * result + (this.createRedshiftSubnetGroup != null ? this.createRedshiftSubnetGroup.hashCode() : 0);
            result = 31 * result + (this.createRedshiftSubnetRouteTable != null ? this.createRedshiftSubnetRouteTable.hashCode() : 0);
            result = 31 * result + (this.createVpc != null ? this.createVpc.hashCode() : 0);
            result = 31 * result + (this.customerGateways != null ? this.customerGateways.hashCode() : 0);
            result = 31 * result + (this.customerGatewayTags != null ? this.customerGatewayTags.hashCode() : 0);
            result = 31 * result + (this.customerOwnedIpv4Pool != null ? this.customerOwnedIpv4Pool.hashCode() : 0);
            result = 31 * result + (this.databaseAclTags != null ? this.databaseAclTags.hashCode() : 0);
            result = 31 * result + (this.databaseDedicatedNetworkAcl != null ? this.databaseDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.databaseInboundAclRules != null ? this.databaseInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.databaseOutboundAclRules != null ? this.databaseOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.databaseRouteTableTags != null ? this.databaseRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetAssignIpv6AddressOnCreation != null ? this.databaseSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetEnableDns64 != null ? this.databaseSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.databaseSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetGroupName != null ? this.databaseSubnetGroupName.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetGroupTags != null ? this.databaseSubnetGroupTags.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetIpv6Native != null ? this.databaseSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetIpv6Prefixes != null ? this.databaseSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetNames != null ? this.databaseSubnetNames.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.databaseSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.databaseSubnets != null ? this.databaseSubnets.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetSuffix != null ? this.databaseSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.databaseSubnetTags != null ? this.databaseSubnetTags.hashCode() : 0);
            result = 31 * result + (this.defaultNetworkAclEgress != null ? this.defaultNetworkAclEgress.hashCode() : 0);
            result = 31 * result + (this.defaultNetworkAclIngress != null ? this.defaultNetworkAclIngress.hashCode() : 0);
            result = 31 * result + (this.defaultNetworkAclName != null ? this.defaultNetworkAclName.hashCode() : 0);
            result = 31 * result + (this.defaultNetworkAclTags != null ? this.defaultNetworkAclTags.hashCode() : 0);
            result = 31 * result + (this.defaultRouteTableName != null ? this.defaultRouteTableName.hashCode() : 0);
            result = 31 * result + (this.defaultRouteTablePropagatingVgws != null ? this.defaultRouteTablePropagatingVgws.hashCode() : 0);
            result = 31 * result + (this.defaultRouteTableRoutes != null ? this.defaultRouteTableRoutes.hashCode() : 0);
            result = 31 * result + (this.defaultRouteTableTags != null ? this.defaultRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.defaultSecurityGroupEgress != null ? this.defaultSecurityGroupEgress.hashCode() : 0);
            result = 31 * result + (this.defaultSecurityGroupIngress != null ? this.defaultSecurityGroupIngress.hashCode() : 0);
            result = 31 * result + (this.defaultSecurityGroupName != null ? this.defaultSecurityGroupName.hashCode() : 0);
            result = 31 * result + (this.defaultSecurityGroupTags != null ? this.defaultSecurityGroupTags.hashCode() : 0);
            result = 31 * result + (this.defaultVpcEnableDnsHostnames != null ? this.defaultVpcEnableDnsHostnames.hashCode() : 0);
            result = 31 * result + (this.defaultVpcEnableDnsSupport != null ? this.defaultVpcEnableDnsSupport.hashCode() : 0);
            result = 31 * result + (this.defaultVpcName != null ? this.defaultVpcName.hashCode() : 0);
            result = 31 * result + (this.defaultVpcTags != null ? this.defaultVpcTags.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsDomainName != null ? this.dhcpOptionsDomainName.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsDomainNameServers != null ? this.dhcpOptionsDomainNameServers.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsNetbiosNameServers != null ? this.dhcpOptionsNetbiosNameServers.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsNetbiosNodeType != null ? this.dhcpOptionsNetbiosNodeType.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsNtpServers != null ? this.dhcpOptionsNtpServers.hashCode() : 0);
            result = 31 * result + (this.dhcpOptionsTags != null ? this.dhcpOptionsTags.hashCode() : 0);
            result = 31 * result + (this.elasticacheAclTags != null ? this.elasticacheAclTags.hashCode() : 0);
            result = 31 * result + (this.elasticacheDedicatedNetworkAcl != null ? this.elasticacheDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.elasticacheInboundAclRules != null ? this.elasticacheInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.elasticacheOutboundAclRules != null ? this.elasticacheOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.elasticacheRouteTableTags != null ? this.elasticacheRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetAssignIpv6AddressOnCreation != null ? this.elasticacheSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetEnableDns64 != null ? this.elasticacheSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.elasticacheSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetGroupName != null ? this.elasticacheSubnetGroupName.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetGroupTags != null ? this.elasticacheSubnetGroupTags.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetIpv6Native != null ? this.elasticacheSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetIpv6Prefixes != null ? this.elasticacheSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetNames != null ? this.elasticacheSubnetNames.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.elasticacheSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnets != null ? this.elasticacheSubnets.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetSuffix != null ? this.elasticacheSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.elasticacheSubnetTags != null ? this.elasticacheSubnetTags.hashCode() : 0);
            result = 31 * result + (this.enableDhcpOptions != null ? this.enableDhcpOptions.hashCode() : 0);
            result = 31 * result + (this.enableDnsHostnames != null ? this.enableDnsHostnames.hashCode() : 0);
            result = 31 * result + (this.enableDnsSupport != null ? this.enableDnsSupport.hashCode() : 0);
            result = 31 * result + (this.enableFlowLog != null ? this.enableFlowLog.hashCode() : 0);
            result = 31 * result + (this.enableIpv6 != null ? this.enableIpv6.hashCode() : 0);
            result = 31 * result + (this.enableNatGateway != null ? this.enableNatGateway.hashCode() : 0);
            result = 31 * result + (this.enableNetworkAddressUsageMetrics != null ? this.enableNetworkAddressUsageMetrics.hashCode() : 0);
            result = 31 * result + (this.enablePublicRedshift != null ? this.enablePublicRedshift.hashCode() : 0);
            result = 31 * result + (this.enableVpnGateway != null ? this.enableVpnGateway.hashCode() : 0);
            result = 31 * result + (this.externalNatIpIds != null ? this.externalNatIpIds.hashCode() : 0);
            result = 31 * result + (this.externalNatIps != null ? this.externalNatIps.hashCode() : 0);
            result = 31 * result + (this.flowLogCloudwatchIamRoleArn != null ? this.flowLogCloudwatchIamRoleArn.hashCode() : 0);
            result = 31 * result + (this.flowLogCloudwatchLogGroupKmsKeyId != null ? this.flowLogCloudwatchLogGroupKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.flowLogCloudwatchLogGroupNamePrefix != null ? this.flowLogCloudwatchLogGroupNamePrefix.hashCode() : 0);
            result = 31 * result + (this.flowLogCloudwatchLogGroupNameSuffix != null ? this.flowLogCloudwatchLogGroupNameSuffix.hashCode() : 0);
            result = 31 * result + (this.flowLogCloudwatchLogGroupRetentionInDays != null ? this.flowLogCloudwatchLogGroupRetentionInDays.hashCode() : 0);
            result = 31 * result + (this.flowLogDestinationArn != null ? this.flowLogDestinationArn.hashCode() : 0);
            result = 31 * result + (this.flowLogDestinationType != null ? this.flowLogDestinationType.hashCode() : 0);
            result = 31 * result + (this.flowLogFileFormat != null ? this.flowLogFileFormat.hashCode() : 0);
            result = 31 * result + (this.flowLogHiveCompatiblePartitions != null ? this.flowLogHiveCompatiblePartitions.hashCode() : 0);
            result = 31 * result + (this.flowLogLogFormat != null ? this.flowLogLogFormat.hashCode() : 0);
            result = 31 * result + (this.flowLogMaxAggregationInterval != null ? this.flowLogMaxAggregationInterval.hashCode() : 0);
            result = 31 * result + (this.flowLogPerHourPartition != null ? this.flowLogPerHourPartition.hashCode() : 0);
            result = 31 * result + (this.flowLogTrafficType != null ? this.flowLogTrafficType.hashCode() : 0);
            result = 31 * result + (this.igwTags != null ? this.igwTags.hashCode() : 0);
            result = 31 * result + (this.instanceTenancy != null ? this.instanceTenancy.hashCode() : 0);
            result = 31 * result + (this.intraAclTags != null ? this.intraAclTags.hashCode() : 0);
            result = 31 * result + (this.intraDedicatedNetworkAcl != null ? this.intraDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.intraInboundAclRules != null ? this.intraInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.intraOutboundAclRules != null ? this.intraOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.intraRouteTableTags != null ? this.intraRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.intraSubnetAssignIpv6AddressOnCreation != null ? this.intraSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.intraSubnetEnableDns64 != null ? this.intraSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.intraSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.intraSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.intraSubnetIpv6Native != null ? this.intraSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.intraSubnetIpv6Prefixes != null ? this.intraSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.intraSubnetNames != null ? this.intraSubnetNames.hashCode() : 0);
            result = 31 * result + (this.intraSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.intraSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.intraSubnets != null ? this.intraSubnets.hashCode() : 0);
            result = 31 * result + (this.intraSubnetSuffix != null ? this.intraSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.intraSubnetTags != null ? this.intraSubnetTags.hashCode() : 0);
            result = 31 * result + (this.ipv4IpamPoolId != null ? this.ipv4IpamPoolId.hashCode() : 0);
            result = 31 * result + (this.ipv4NetmaskLength != null ? this.ipv4NetmaskLength.hashCode() : 0);
            result = 31 * result + (this.ipv6Cidr != null ? this.ipv6Cidr.hashCode() : 0);
            result = 31 * result + (this.ipv6CidrBlockNetworkBorderGroup != null ? this.ipv6CidrBlockNetworkBorderGroup.hashCode() : 0);
            result = 31 * result + (this.ipv6IpamPoolId != null ? this.ipv6IpamPoolId.hashCode() : 0);
            result = 31 * result + (this.ipv6NetmaskLength != null ? this.ipv6NetmaskLength.hashCode() : 0);
            result = 31 * result + (this.manageDefaultNetworkAcl != null ? this.manageDefaultNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.manageDefaultRouteTable != null ? this.manageDefaultRouteTable.hashCode() : 0);
            result = 31 * result + (this.manageDefaultSecurityGroup != null ? this.manageDefaultSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.manageDefaultVpc != null ? this.manageDefaultVpc.hashCode() : 0);
            result = 31 * result + (this.mapCustomerOwnedIpOnLaunch != null ? this.mapCustomerOwnedIpOnLaunch.hashCode() : 0);
            result = 31 * result + (this.mapPublicIpOnLaunch != null ? this.mapPublicIpOnLaunch.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.natEipTags != null ? this.natEipTags.hashCode() : 0);
            result = 31 * result + (this.natGatewayDestinationCidrBlock != null ? this.natGatewayDestinationCidrBlock.hashCode() : 0);
            result = 31 * result + (this.natGatewayTags != null ? this.natGatewayTags.hashCode() : 0);
            result = 31 * result + (this.oneNatGatewayPerAz != null ? this.oneNatGatewayPerAz.hashCode() : 0);
            result = 31 * result + (this.outpostAclTags != null ? this.outpostAclTags.hashCode() : 0);
            result = 31 * result + (this.outpostArn != null ? this.outpostArn.hashCode() : 0);
            result = 31 * result + (this.outpostAz != null ? this.outpostAz.hashCode() : 0);
            result = 31 * result + (this.outpostDedicatedNetworkAcl != null ? this.outpostDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.outpostInboundAclRules != null ? this.outpostInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.outpostOutboundAclRules != null ? this.outpostOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetAssignIpv6AddressOnCreation != null ? this.outpostSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetEnableDns64 != null ? this.outpostSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.outpostSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetIpv6Native != null ? this.outpostSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetIpv6Prefixes != null ? this.outpostSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetNames != null ? this.outpostSubnetNames.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.outpostSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.outpostSubnets != null ? this.outpostSubnets.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetSuffix != null ? this.outpostSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.outpostSubnetTags != null ? this.outpostSubnetTags.hashCode() : 0);
            result = 31 * result + (this.privateAclTags != null ? this.privateAclTags.hashCode() : 0);
            result = 31 * result + (this.privateDedicatedNetworkAcl != null ? this.privateDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.privateInboundAclRules != null ? this.privateInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.privateOutboundAclRules != null ? this.privateOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.privateRouteTableTags != null ? this.privateRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.privateSubnetAssignIpv6AddressOnCreation != null ? this.privateSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.privateSubnetEnableDns64 != null ? this.privateSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.privateSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.privateSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.privateSubnetIpv6Native != null ? this.privateSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.privateSubnetIpv6Prefixes != null ? this.privateSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.privateSubnetNames != null ? this.privateSubnetNames.hashCode() : 0);
            result = 31 * result + (this.privateSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.privateSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.privateSubnets != null ? this.privateSubnets.hashCode() : 0);
            result = 31 * result + (this.privateSubnetSuffix != null ? this.privateSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.privateSubnetTags != null ? this.privateSubnetTags.hashCode() : 0);
            result = 31 * result + (this.privateSubnetTagsPerAz != null ? this.privateSubnetTagsPerAz.hashCode() : 0);
            result = 31 * result + (this.propagateIntraRouteTablesVgw != null ? this.propagateIntraRouteTablesVgw.hashCode() : 0);
            result = 31 * result + (this.propagatePrivateRouteTablesVgw != null ? this.propagatePrivateRouteTablesVgw.hashCode() : 0);
            result = 31 * result + (this.propagatePublicRouteTablesVgw != null ? this.propagatePublicRouteTablesVgw.hashCode() : 0);
            result = 31 * result + (this.publicAclTags != null ? this.publicAclTags.hashCode() : 0);
            result = 31 * result + (this.publicDedicatedNetworkAcl != null ? this.publicDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.publicInboundAclRules != null ? this.publicInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.publicOutboundAclRules != null ? this.publicOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.publicRouteTableTags != null ? this.publicRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.publicSubnetAssignIpv6AddressOnCreation != null ? this.publicSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.publicSubnetEnableDns64 != null ? this.publicSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.publicSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.publicSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.publicSubnetIpv6Native != null ? this.publicSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.publicSubnetIpv6Prefixes != null ? this.publicSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.publicSubnetNames != null ? this.publicSubnetNames.hashCode() : 0);
            result = 31 * result + (this.publicSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.publicSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.publicSubnets != null ? this.publicSubnets.hashCode() : 0);
            result = 31 * result + (this.publicSubnetSuffix != null ? this.publicSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.publicSubnetTags != null ? this.publicSubnetTags.hashCode() : 0);
            result = 31 * result + (this.publicSubnetTagsPerAz != null ? this.publicSubnetTagsPerAz.hashCode() : 0);
            result = 31 * result + (this.putinKhuylo != null ? this.putinKhuylo.hashCode() : 0);
            result = 31 * result + (this.redshiftAclTags != null ? this.redshiftAclTags.hashCode() : 0);
            result = 31 * result + (this.redshiftDedicatedNetworkAcl != null ? this.redshiftDedicatedNetworkAcl.hashCode() : 0);
            result = 31 * result + (this.redshiftInboundAclRules != null ? this.redshiftInboundAclRules.hashCode() : 0);
            result = 31 * result + (this.redshiftOutboundAclRules != null ? this.redshiftOutboundAclRules.hashCode() : 0);
            result = 31 * result + (this.redshiftRouteTableTags != null ? this.redshiftRouteTableTags.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetAssignIpv6AddressOnCreation != null ? this.redshiftSubnetAssignIpv6AddressOnCreation.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetEnableDns64 != null ? this.redshiftSubnetEnableDns64.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch != null ? this.redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch != null ? this.redshiftSubnetEnableResourceNameDnsARecordOnLaunch.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetGroupName != null ? this.redshiftSubnetGroupName.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetGroupTags != null ? this.redshiftSubnetGroupTags.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetIpv6Native != null ? this.redshiftSubnetIpv6Native.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetIpv6Prefixes != null ? this.redshiftSubnetIpv6Prefixes.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetNames != null ? this.redshiftSubnetNames.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch != null ? this.redshiftSubnetPrivateDnsHostnameTypeOnLaunch.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnets != null ? this.redshiftSubnets.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetSuffix != null ? this.redshiftSubnetSuffix.hashCode() : 0);
            result = 31 * result + (this.redshiftSubnetTags != null ? this.redshiftSubnetTags.hashCode() : 0);
            result = 31 * result + (this.reuseNatIps != null ? this.reuseNatIps.hashCode() : 0);
            result = 31 * result + (this.secondaryCidrBlocks != null ? this.secondaryCidrBlocks.hashCode() : 0);
            result = 31 * result + (this.singleNatGateway != null ? this.singleNatGateway.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.useIpamPool != null ? this.useIpamPool.hashCode() : 0);
            result = 31 * result + (this.vpcFlowLogPermissionsBoundary != null ? this.vpcFlowLogPermissionsBoundary.hashCode() : 0);
            result = 31 * result + (this.vpcFlowLogTags != null ? this.vpcFlowLogTags.hashCode() : 0);
            result = 31 * result + (this.vpcTags != null ? this.vpcTags.hashCode() : 0);
            result = 31 * result + (this.vpnGatewayAz != null ? this.vpnGatewayAz.hashCode() : 0);
            result = 31 * result + (this.vpnGatewayId != null ? this.vpnGatewayId.hashCode() : 0);
            result = 31 * result + (this.vpnGatewayTags != null ? this.vpnGatewayTags.hashCode() : 0);
            result = 31 * result + (this.dependsOn != null ? this.dependsOn.hashCode() : 0);
            result = 31 * result + (this.forEach != null ? this.forEach.hashCode() : 0);
            result = 31 * result + (this.providers != null ? this.providers.hashCode() : 0);
            result = 31 * result + (this.skipAssetCreationFromLocalModules != null ? this.skipAssetCreationFromLocalModules.hashCode() : 0);
            return result;
        }
    }
}
