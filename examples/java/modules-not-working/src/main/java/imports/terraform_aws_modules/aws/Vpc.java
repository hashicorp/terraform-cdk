package imports.terraform_aws_modules.aws;

/**
 * Defines an Vpc based on a Terraform module.
 * <p>
 * Docs at Terraform Registry: {@link https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/5.0.0 terraform-aws-modules/vpc/aws}
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.91.0 (build 1b1f239)", date = "2023-11-27T19:56:36.282Z")
@software.amazon.jsii.Jsii(module = imports.terraform_aws_modules.aws.$Module.class, fqn = "vpc.Vpc")
public class Vpc extends com.hashicorp.cdktf.TerraformModule {

    protected Vpc(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vpc(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Vpc(final @org.jetbrains.annotations.NotNull software.constructs.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable imports.terraform_aws_modules.aws.VpcConfig config) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), config });
    }

    public Vpc(final @org.jetbrains.annotations.NotNull software.constructs.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> synthesizeAttributes() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "synthesizeAttributes", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getAzsOutput() {
        return software.amazon.jsii.Kernel.get(this, "azsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getCgwArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "cgwArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getCgwIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "cgwIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseInternetGatewayRouteIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseInternetGatewayRouteIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseIpv6EgressRouteIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseIpv6EgressRouteIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseNatGatewayRouteIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseNatGatewayRouteIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetGroupNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupNameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetGroupOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDatabaseSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultRouteTableIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultRouteTableIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultSecurityGroupIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcCidrBlockOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcCidrBlockOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcDefaultNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcDefaultNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcDefaultRouteTableIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcDefaultRouteTableIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcDefaultSecurityGroupIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcDefaultSecurityGroupIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcEnableDnsHostnamesOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsHostnamesOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcEnableDnsSupportOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsSupportOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcInstanceTenancyOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcInstanceTenancyOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDefaultVpcMainRouteTableIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcMainRouteTableIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDhcpOptionsIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "dhcpOptionsIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getEgressOnlyInternetGatewayIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "egressOnlyInternetGatewayIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetGroupNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupNameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetGroupOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getElasticacheSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIgwArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "igwArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIgwIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "igwIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getIntraSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getNameOutput() {
        return software.amazon.jsii.Kernel.get(this, "nameOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getNatgwIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "natgwIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getNatIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "natIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getNatPublicIpsOutput() {
        return software.amazon.jsii.Kernel.get(this, "natPublicIpsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getOutpostSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateIpv6EgressRouteIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateIpv6EgressRouteIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateNatGatewayRouteIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateNatGatewayRouteIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPrivateSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicInternetGatewayIpv6RouteIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicInternetGatewayIpv6RouteIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicInternetGatewayRouteIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicInternetGatewayRouteIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getPublicSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftNetworkAclArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftNetworkAclArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftNetworkAclIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftNetworkAclIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftPublicRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftPublicRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftRouteTableAssociationIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftRouteTableAssociationIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftRouteTableIdsOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftRouteTableIdsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftSubnetArnsOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetArnsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftSubnetGroupOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetGroupOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftSubnetsCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetsCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftSubnetsIpv6CidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetsIpv6CidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRedshiftSubnetsOutput() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetsOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getThisCustomerGatewayOutput() {
        return software.amazon.jsii.Kernel.get(this, "thisCustomerGatewayOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVgwArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "vgwArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVgwIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vgwIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcCidrBlockOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcCidrBlockOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcEnableDnsHostnamesOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcEnableDnsHostnamesOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcEnableDnsSupportOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcEnableDnsSupportOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcFlowLogCloudwatchIamRoleArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcFlowLogCloudwatchIamRoleArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcFlowLogDestinationArnOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcFlowLogDestinationArnOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcFlowLogDestinationTypeOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcFlowLogDestinationTypeOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcFlowLogIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcFlowLogIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcInstanceTenancyOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcInstanceTenancyOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcIpv6AssociationIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcIpv6AssociationIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcIpv6CidrBlockOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcIpv6CidrBlockOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcMainRouteTableIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcMainRouteTableIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcOwnerIdOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcOwnerIdOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getVpcSecondaryCidrBlocksOutput() {
        return software.amazon.jsii.Kernel.get(this, "vpcSecondaryCidrBlocksOutput", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getAmazonSideAsn() {
        return software.amazon.jsii.Kernel.get(this, "amazonSideAsn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setAmazonSideAsn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "amazonSideAsn", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAzs() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "azs", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setAzs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "azs", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getCidr() {
        return software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cidr", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseInternetGatewayRoute() {
        return software.amazon.jsii.Kernel.get(this, "createDatabaseInternetGatewayRoute", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDatabaseInternetGatewayRoute(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDatabaseInternetGatewayRoute", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseNatGatewayRoute() {
        return software.amazon.jsii.Kernel.get(this, "createDatabaseNatGatewayRoute", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDatabaseNatGatewayRoute(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDatabaseNatGatewayRoute", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseSubnetGroup() {
        return software.amazon.jsii.Kernel.get(this, "createDatabaseSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDatabaseSubnetGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDatabaseSubnetGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateDatabaseSubnetRouteTable() {
        return software.amazon.jsii.Kernel.get(this, "createDatabaseSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateDatabaseSubnetRouteTable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createDatabaseSubnetRouteTable", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateEgressOnlyIgw() {
        return software.amazon.jsii.Kernel.get(this, "createEgressOnlyIgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateEgressOnlyIgw(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createEgressOnlyIgw", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateElasticacheSubnetGroup() {
        return software.amazon.jsii.Kernel.get(this, "createElasticacheSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateElasticacheSubnetGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createElasticacheSubnetGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateElasticacheSubnetRouteTable() {
        return software.amazon.jsii.Kernel.get(this, "createElasticacheSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateElasticacheSubnetRouteTable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createElasticacheSubnetRouteTable", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateFlowLogCloudwatchIamRole() {
        return software.amazon.jsii.Kernel.get(this, "createFlowLogCloudwatchIamRole", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateFlowLogCloudwatchIamRole(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createFlowLogCloudwatchIamRole", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateFlowLogCloudwatchLogGroup() {
        return software.amazon.jsii.Kernel.get(this, "createFlowLogCloudwatchLogGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateFlowLogCloudwatchLogGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createFlowLogCloudwatchLogGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateIgw() {
        return software.amazon.jsii.Kernel.get(this, "createIgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateIgw(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createIgw", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRedshiftSubnetGroup() {
        return software.amazon.jsii.Kernel.get(this, "createRedshiftSubnetGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateRedshiftSubnetGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createRedshiftSubnetGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateRedshiftSubnetRouteTable() {
        return software.amazon.jsii.Kernel.get(this, "createRedshiftSubnetRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateRedshiftSubnetRouteTable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createRedshiftSubnetRouteTable", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getCreateVpc() {
        return software.amazon.jsii.Kernel.get(this, "createVpc", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setCreateVpc(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createVpc", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> getCustomerGateways() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>>)(software.amazon.jsii.Kernel.get(this, "customerGateways", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setCustomerGateways(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.Object>> value) {
        software.amazon.jsii.Kernel.set(this, "customerGateways", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getCustomerGatewayTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "customerGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setCustomerGatewayTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "customerGatewayTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getCustomerOwnedIpv4Pool() {
        return software.amazon.jsii.Kernel.get(this, "customerOwnedIpv4Pool", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setCustomerOwnedIpv4Pool(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customerOwnedIpv4Pool", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDatabaseAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "databaseDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "databaseInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDatabaseInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "databaseInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDatabaseOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "databaseOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDatabaseOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "databaseOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDatabaseRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetGroupName() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDatabaseSubnetGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDatabaseSubnetGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDatabaseSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDatabaseSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDatabaseSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDatabaseSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDatabaseSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDatabaseSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDatabaseSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDatabaseSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "databaseSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDatabaseSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDatabaseSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "databaseSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDatabaseSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "databaseSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclEgress() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "defaultNetworkAclEgress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultNetworkAclEgress(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "defaultNetworkAclEgress", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultNetworkAclIngress() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "defaultNetworkAclIngress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultNetworkAclIngress(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "defaultNetworkAclIngress", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDefaultNetworkAclName() {
        return software.amazon.jsii.Kernel.get(this, "defaultNetworkAclName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDefaultNetworkAclName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultNetworkAclName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultNetworkAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "defaultNetworkAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDefaultNetworkAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "defaultNetworkAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDefaultRouteTableName() {
        return software.amazon.jsii.Kernel.get(this, "defaultRouteTableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDefaultRouteTableName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultRouteTableName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDefaultRouteTablePropagatingVgws() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "defaultRouteTablePropagatingVgws", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultRouteTablePropagatingVgws(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "defaultRouteTablePropagatingVgws", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultRouteTableRoutes() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "defaultRouteTableRoutes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultRouteTableRoutes(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "defaultRouteTableRoutes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "defaultRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDefaultRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "defaultRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupEgress() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupEgress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultSecurityGroupEgress(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "defaultSecurityGroupEgress", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getDefaultSecurityGroupIngress() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupIngress", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDefaultSecurityGroupIngress(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "defaultSecurityGroupIngress", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDefaultSecurityGroupName() {
        return software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDefaultSecurityGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultSecurityGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultSecurityGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "defaultSecurityGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDefaultSecurityGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "defaultSecurityGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDefaultVpcEnableDnsHostnames() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsHostnames", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDefaultVpcEnableDnsHostnames(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "defaultVpcEnableDnsHostnames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getDefaultVpcEnableDnsSupport() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcEnableDnsSupport", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setDefaultVpcEnableDnsSupport(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "defaultVpcEnableDnsSupport", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDefaultVpcName() {
        return software.amazon.jsii.Kernel.get(this, "defaultVpcName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDefaultVpcName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultVpcName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDefaultVpcTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "defaultVpcTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDefaultVpcTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "defaultVpcTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDhcpOptionsDomainName() {
        return software.amazon.jsii.Kernel.get(this, "dhcpOptionsDomainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDhcpOptionsDomainName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsDomainName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsDomainNameServers() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dhcpOptionsDomainNameServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDhcpOptionsDomainNameServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsDomainNameServers", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsNetbiosNameServers() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dhcpOptionsNetbiosNameServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDhcpOptionsNetbiosNameServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsNetbiosNameServers", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getDhcpOptionsNetbiosNodeType() {
        return software.amazon.jsii.Kernel.get(this, "dhcpOptionsNetbiosNodeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setDhcpOptionsNetbiosNodeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsNetbiosNodeType", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDhcpOptionsNtpServers() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dhcpOptionsNtpServers", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setDhcpOptionsNtpServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsNtpServers", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDhcpOptionsTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "dhcpOptionsTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setDhcpOptionsTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "dhcpOptionsTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setElasticacheAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "elasticacheInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setElasticacheInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getElasticacheOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "elasticacheOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setElasticacheOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setElasticacheRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetGroupName() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setElasticacheSubnetGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setElasticacheSubnetGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getElasticacheSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setElasticacheSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setElasticacheSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setElasticacheSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setElasticacheSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getElasticacheSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setElasticacheSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getElasticacheSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "elasticacheSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setElasticacheSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getElasticacheSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "elasticacheSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setElasticacheSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "elasticacheSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDhcpOptions() {
        return software.amazon.jsii.Kernel.get(this, "enableDhcpOptions", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableDhcpOptions(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableDhcpOptions", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDnsHostnames() {
        return software.amazon.jsii.Kernel.get(this, "enableDnsHostnames", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableDnsHostnames(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableDnsHostnames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableDnsSupport() {
        return software.amazon.jsii.Kernel.get(this, "enableDnsSupport", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableDnsSupport(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableDnsSupport", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableFlowLog() {
        return software.amazon.jsii.Kernel.get(this, "enableFlowLog", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableFlowLog(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableFlowLog", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableIpv6() {
        return software.amazon.jsii.Kernel.get(this, "enableIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableIpv6(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableIpv6", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableNatGateway() {
        return software.amazon.jsii.Kernel.get(this, "enableNatGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableNatGateway(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableNatGateway", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableNetworkAddressUsageMetrics() {
        return software.amazon.jsii.Kernel.get(this, "enableNetworkAddressUsageMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableNetworkAddressUsageMetrics(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableNetworkAddressUsageMetrics", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnablePublicRedshift() {
        return software.amazon.jsii.Kernel.get(this, "enablePublicRedshift", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnablePublicRedshift(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enablePublicRedshift", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableVpnGateway() {
        return software.amazon.jsii.Kernel.get(this, "enableVpnGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableVpnGateway(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableVpnGateway", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExternalNatIpIds() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "externalNatIpIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setExternalNatIpIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "externalNatIpIds", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExternalNatIps() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "externalNatIps", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setExternalNatIps(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "externalNatIps", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchIamRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchIamRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogCloudwatchIamRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogCloudwatchIamRoleArn", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogCloudwatchLogGroupKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogCloudwatchLogGroupKmsKeyId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupNamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogCloudwatchLogGroupNamePrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogCloudwatchLogGroupNamePrefix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogCloudwatchLogGroupNameSuffix() {
        return software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupNameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogCloudwatchLogGroupNameSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogCloudwatchLogGroupNameSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getFlowLogCloudwatchLogGroupRetentionInDays() {
        return software.amazon.jsii.Kernel.get(this, "flowLogCloudwatchLogGroupRetentionInDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setFlowLogCloudwatchLogGroupRetentionInDays(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "flowLogCloudwatchLogGroupRetentionInDays", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogDestinationArn() {
        return software.amazon.jsii.Kernel.get(this, "flowLogDestinationArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogDestinationArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogDestinationArn", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogDestinationType() {
        return software.amazon.jsii.Kernel.get(this, "flowLogDestinationType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogDestinationType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogDestinationType", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogFileFormat() {
        return software.amazon.jsii.Kernel.get(this, "flowLogFileFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogFileFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogFileFormat", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getFlowLogHiveCompatiblePartitions() {
        return software.amazon.jsii.Kernel.get(this, "flowLogHiveCompatiblePartitions", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setFlowLogHiveCompatiblePartitions(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "flowLogHiveCompatiblePartitions", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogLogFormat() {
        return software.amazon.jsii.Kernel.get(this, "flowLogLogFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogLogFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogLogFormat", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getFlowLogMaxAggregationInterval() {
        return software.amazon.jsii.Kernel.get(this, "flowLogMaxAggregationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setFlowLogMaxAggregationInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "flowLogMaxAggregationInterval", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getFlowLogPerHourPartition() {
        return software.amazon.jsii.Kernel.get(this, "flowLogPerHourPartition", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setFlowLogPerHourPartition(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "flowLogPerHourPartition", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getFlowLogTrafficType() {
        return software.amazon.jsii.Kernel.get(this, "flowLogTrafficType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setFlowLogTrafficType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogTrafficType", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIgwTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "igwTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setIgwTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "igwTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceTenancy() {
        return software.amazon.jsii.Kernel.get(this, "instanceTenancy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setInstanceTenancy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceTenancy", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setIntraAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "intraDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "intraInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setIntraInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "intraInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getIntraOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "intraOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setIntraOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "intraOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setIntraRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getIntraSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setIntraSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setIntraSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setIntraSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIntraSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIntraSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getIntraSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setIntraSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIntraSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "intraSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIntraSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getIntraSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "intraSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setIntraSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "intraSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIpv4IpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "ipv4IpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIpv4IpamPoolId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv4IpamPoolId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getIpv4NetmaskLength() {
        return software.amazon.jsii.Kernel.get(this, "ipv4NetmaskLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setIpv4NetmaskLength(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipv4NetmaskLength", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "ipv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIpv6Cidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Cidr", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIpv6CidrBlockNetworkBorderGroup() {
        return software.amazon.jsii.Kernel.get(this, "ipv6CidrBlockNetworkBorderGroup", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIpv6CidrBlockNetworkBorderGroup(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6CidrBlockNetworkBorderGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getIpv6IpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "ipv6IpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setIpv6IpamPoolId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6IpamPoolId", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Number getIpv6NetmaskLength() {
        return software.amazon.jsii.Kernel.get(this, "ipv6NetmaskLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    public void setIpv6NetmaskLength(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipv6NetmaskLength", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "manageDefaultNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setManageDefaultNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "manageDefaultNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultRouteTable() {
        return software.amazon.jsii.Kernel.get(this, "manageDefaultRouteTable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setManageDefaultRouteTable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "manageDefaultRouteTable", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultSecurityGroup() {
        return software.amazon.jsii.Kernel.get(this, "manageDefaultSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setManageDefaultSecurityGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "manageDefaultSecurityGroup", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getManageDefaultVpc() {
        return software.amazon.jsii.Kernel.get(this, "manageDefaultVpc", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setManageDefaultVpc(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "manageDefaultVpc", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getMapCustomerOwnedIpOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "mapCustomerOwnedIpOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setMapCustomerOwnedIpOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mapCustomerOwnedIpOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getMapPublicIpOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "mapPublicIpOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setMapPublicIpOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mapPublicIpOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getNatEipTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "natEipTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setNatEipTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "natEipTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getNatGatewayDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "natGatewayDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setNatGatewayDestinationCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natGatewayDestinationCidrBlock", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getNatGatewayTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "natGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setNatGatewayTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "natGatewayTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOneNatGatewayPerAz() {
        return software.amazon.jsii.Kernel.get(this, "oneNatGatewayPerAz", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOneNatGatewayPerAz(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "oneNatGatewayPerAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOutpostAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "outpostAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setOutpostAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "outpostAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOutpostArn() {
        return software.amazon.jsii.Kernel.get(this, "outpostArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOutpostArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outpostArn", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOutpostAz() {
        return software.amazon.jsii.Kernel.get(this, "outpostAz", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOutpostAz(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outpostAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "outpostDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "outpostInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setOutpostInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "outpostInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getOutpostOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "outpostOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setOutpostOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "outpostOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getOutpostSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setOutpostSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "outpostSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setOutpostSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "outpostSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setOutpostSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOutpostSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOutpostSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOutpostSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "outpostSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setOutpostSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getOutpostSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "outpostSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setOutpostSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getOutpostSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "outpostSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setOutpostSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "outpostSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPrivateAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "privateDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "privateInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPrivateInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "privateInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPrivateOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "privateOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPrivateOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "privateOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPrivateRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPrivateSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPrivateSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPrivateSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPrivateSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPrivateSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPrivateSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPrivateSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPrivateSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "privateSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPrivateSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPrivateSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "privateSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPrivateSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPrivateSubnetTagsPerAz() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "privateSubnetTagsPerAz", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPrivateSubnetTagsPerAz(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "privateSubnetTagsPerAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagateIntraRouteTablesVgw() {
        return software.amazon.jsii.Kernel.get(this, "propagateIntraRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPropagateIntraRouteTablesVgw(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "propagateIntraRouteTablesVgw", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagatePrivateRouteTablesVgw() {
        return software.amazon.jsii.Kernel.get(this, "propagatePrivateRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPropagatePrivateRouteTablesVgw(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "propagatePrivateRouteTablesVgw", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPropagatePublicRouteTablesVgw() {
        return software.amazon.jsii.Kernel.get(this, "propagatePublicRouteTablesVgw", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPropagatePublicRouteTablesVgw(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "propagatePublicRouteTablesVgw", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPublicAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "publicDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "publicInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPublicInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "publicInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getPublicOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "publicOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPublicOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "publicOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPublicRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPublicSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPublicSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPublicSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPublicSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPublicSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPublicSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getPublicSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setPublicSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getPublicSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "publicSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setPublicSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getPublicSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "publicSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPublicSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> getPublicSubnetTagsPerAz() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "publicSubnetTagsPerAz", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setPublicSubnetTagsPerAz(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "publicSubnetTagsPerAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getPutinKhuylo() {
        return software.amazon.jsii.Kernel.get(this, "putinKhuylo", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setPutinKhuylo(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "putinKhuylo", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftAclTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftAclTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setRedshiftAclTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftAclTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftDedicatedNetworkAcl() {
        return software.amazon.jsii.Kernel.get(this, "redshiftDedicatedNetworkAcl", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftDedicatedNetworkAcl(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftDedicatedNetworkAcl", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftInboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "redshiftInboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setRedshiftInboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftInboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> getRedshiftOutboundAclRules() {
        return java.util.Optional.ofNullable((java.util.List<java.util.Map<java.lang.String, java.lang.String>>)(software.amazon.jsii.Kernel.get(this, "redshiftOutboundAclRules", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setRedshiftOutboundAclRules(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.String>> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftOutboundAclRules", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftRouteTableTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftRouteTableTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setRedshiftRouteTableTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftRouteTableTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetAssignIpv6AddressOnCreation() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetAssignIpv6AddressOnCreation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftSubnetAssignIpv6AddressOnCreation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetAssignIpv6AddressOnCreation", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableDns64() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableDns64", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftSubnetEnableDns64(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetEnableDns64", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetEnableResourceNameDnsARecordOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetEnableResourceNameDnsARecordOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftSubnetEnableResourceNameDnsARecordOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetEnableResourceNameDnsARecordOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetGroupName() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setRedshiftSubnetGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetGroupName", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetGroupTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftSubnetGroupTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setRedshiftSubnetGroupTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetGroupTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getRedshiftSubnetIpv6Native() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetIpv6Native", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setRedshiftSubnetIpv6Native(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetIpv6Native", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnetIpv6Prefixes() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftSubnetIpv6Prefixes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setRedshiftSubnetIpv6Prefixes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetIpv6Prefixes", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnetNames() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftSubnetNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setRedshiftSubnetNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetNames", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetPrivateDnsHostnameTypeOnLaunch() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetPrivateDnsHostnameTypeOnLaunch", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setRedshiftSubnetPrivateDnsHostnameTypeOnLaunch(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetPrivateDnsHostnameTypeOnLaunch", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRedshiftSubnets() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftSubnets", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setRedshiftSubnets(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnets", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getRedshiftSubnetSuffix() {
        return software.amazon.jsii.Kernel.get(this, "redshiftSubnetSuffix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setRedshiftSubnetSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetSuffix", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getRedshiftSubnetTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "redshiftSubnetTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setRedshiftSubnetTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "redshiftSubnetTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getReuseNatIps() {
        return software.amazon.jsii.Kernel.get(this, "reuseNatIps", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setReuseNatIps(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "reuseNatIps", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSecondaryCidrBlocks() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "secondaryCidrBlocks", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public void setSecondaryCidrBlocks(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "secondaryCidrBlocks", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getSingleNatGateway() {
        return software.amazon.jsii.Kernel.get(this, "singleNatGateway", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setSingleNatGateway(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "singleNatGateway", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.Boolean getUseIpamPool() {
        return software.amazon.jsii.Kernel.get(this, "useIpamPool", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setUseIpamPool(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useIpamPool", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getVpcFlowLogPermissionsBoundary() {
        return software.amazon.jsii.Kernel.get(this, "vpcFlowLogPermissionsBoundary", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setVpcFlowLogPermissionsBoundary(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcFlowLogPermissionsBoundary", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpcFlowLogTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "vpcFlowLogTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setVpcFlowLogTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "vpcFlowLogTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpcTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "vpcTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setVpcTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "vpcTags", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getVpnGatewayAz() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayAz", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setVpnGatewayAz(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayAz", value);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String getVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public void setVpnGatewayId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", value);
    }

    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getVpnGatewayTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.String>)(software.amazon.jsii.Kernel.get(this, "vpnGatewayTags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    public void setVpnGatewayTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayTags", value);
    }

    /**
     * A fluent builder for {@link imports.terraform_aws_modules.aws.Vpc}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<imports.terraform_aws_modules.aws.Vpc> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final software.constructs.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final software.constructs.Construct scope;
        private final java.lang.String id;
        private imports.terraform_aws_modules.aws.VpcConfig.Builder config;

        private Builder(final software.constructs.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * @return {@code this}
         * @param dependsOn This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder dependsOn(final java.util.List<? extends com.hashicorp.cdktf.ITerraformDependable> dependsOn) {
            this.config().dependsOn(dependsOn);
            return this;
        }

        /**
         * @return {@code this}
         * @param forEach This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder forEach(final com.hashicorp.cdktf.ITerraformIterator forEach) {
            this.config().forEach(forEach);
            return this;
        }

        /**
         * @return {@code this}
         * @param providers This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder providers(final java.util.List<? extends java.lang.Object> providers) {
            this.config().providers(providers);
            return this;
        }

        /**
         * @return {@code this}
         * @param skipAssetCreationFromLocalModules This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder skipAssetCreationFromLocalModules(final java.lang.Boolean skipAssetCreationFromLocalModules) {
            this.config().skipAssetCreationFromLocalModules(skipAssetCreationFromLocalModules);
            return this;
        }

        /**
         * The Autonomous System Number (ASN) for the Amazon side of the gateway.
         * <p>
         * By default the virtual private gateway is created with the current default Amazon ASN
         * 64512
         * <p>
         * @return {@code this}
         * @param amazonSideAsn The Autonomous System Number (ASN) for the Amazon side of the gateway. This parameter is required.
         */
        public Builder amazonSideAsn(final java.lang.String amazonSideAsn) {
            this.config().amazonSideAsn(amazonSideAsn);
            return this;
        }

        /**
         * A list of availability zones names or ids in the region.
         * <p>
         * @return {@code this}
         * @param azs A list of availability zones names or ids in the region. This parameter is required.
         */
        public Builder azs(final java.util.List<java.lang.String> azs) {
            this.config().azs(azs);
            return this;
        }

        /**
         * (Optional) The IPv4 CIDR block for the VPC.
         * <p>
         * CIDR can be explicitly set or it can be derived from IPAM using <code>ipv4_netmask_length</code> &amp; <code>ipv4_ipam_pool_id</code>
         * 10.0.0.0/16
         * <p>
         * @return {@code this}
         * @param cidr (Optional) The IPv4 CIDR block for the VPC. This parameter is required.
         */
        public Builder cidr(final java.lang.String cidr) {
            this.config().cidr(cidr);
            return this;
        }

        /**
         * Controls if an internet gateway route for public database access should be created.
         * <p>
         * @return {@code this}
         * @param createDatabaseInternetGatewayRoute Controls if an internet gateway route for public database access should be created. This parameter is required.
         */
        public Builder createDatabaseInternetGatewayRoute(final java.lang.Boolean createDatabaseInternetGatewayRoute) {
            this.config().createDatabaseInternetGatewayRoute(createDatabaseInternetGatewayRoute);
            return this;
        }

        /**
         * Controls if a nat gateway route should be created to give internet access to the database subnets.
         * <p>
         * @return {@code this}
         * @param createDatabaseNatGatewayRoute Controls if a nat gateway route should be created to give internet access to the database subnets. This parameter is required.
         */
        public Builder createDatabaseNatGatewayRoute(final java.lang.Boolean createDatabaseNatGatewayRoute) {
            this.config().createDatabaseNatGatewayRoute(createDatabaseNatGatewayRoute);
            return this;
        }

        /**
         * Controls if database subnet group should be created (n.b. database_subnets must also be set) true.
         * <p>
         * @return {@code this}
         * @param createDatabaseSubnetGroup Controls if database subnet group should be created (n.b. database_subnets must also be set) true. This parameter is required.
         */
        public Builder createDatabaseSubnetGroup(final java.lang.Boolean createDatabaseSubnetGroup) {
            this.config().createDatabaseSubnetGroup(createDatabaseSubnetGroup);
            return this;
        }

        /**
         * Controls if separate route table for database should be created.
         * <p>
         * @return {@code this}
         * @param createDatabaseSubnetRouteTable Controls if separate route table for database should be created. This parameter is required.
         */
        public Builder createDatabaseSubnetRouteTable(final java.lang.Boolean createDatabaseSubnetRouteTable) {
            this.config().createDatabaseSubnetRouteTable(createDatabaseSubnetRouteTable);
            return this;
        }

        /**
         * Controls if an Egress Only Internet Gateway is created and its related routes true.
         * <p>
         * @return {@code this}
         * @param createEgressOnlyIgw Controls if an Egress Only Internet Gateway is created and its related routes true. This parameter is required.
         */
        public Builder createEgressOnlyIgw(final java.lang.Boolean createEgressOnlyIgw) {
            this.config().createEgressOnlyIgw(createEgressOnlyIgw);
            return this;
        }

        /**
         * Controls if elasticache subnet group should be created true.
         * <p>
         * @return {@code this}
         * @param createElasticacheSubnetGroup Controls if elasticache subnet group should be created true. This parameter is required.
         */
        public Builder createElasticacheSubnetGroup(final java.lang.Boolean createElasticacheSubnetGroup) {
            this.config().createElasticacheSubnetGroup(createElasticacheSubnetGroup);
            return this;
        }

        /**
         * Controls if separate route table for elasticache should be created.
         * <p>
         * @return {@code this}
         * @param createElasticacheSubnetRouteTable Controls if separate route table for elasticache should be created. This parameter is required.
         */
        public Builder createElasticacheSubnetRouteTable(final java.lang.Boolean createElasticacheSubnetRouteTable) {
            this.config().createElasticacheSubnetRouteTable(createElasticacheSubnetRouteTable);
            return this;
        }

        /**
         * Whether to create IAM role for VPC Flow Logs.
         * <p>
         * @return {@code this}
         * @param createFlowLogCloudwatchIamRole Whether to create IAM role for VPC Flow Logs. This parameter is required.
         */
        public Builder createFlowLogCloudwatchIamRole(final java.lang.Boolean createFlowLogCloudwatchIamRole) {
            this.config().createFlowLogCloudwatchIamRole(createFlowLogCloudwatchIamRole);
            return this;
        }

        /**
         * Whether to create CloudWatch log group for VPC Flow Logs.
         * <p>
         * @return {@code this}
         * @param createFlowLogCloudwatchLogGroup Whether to create CloudWatch log group for VPC Flow Logs. This parameter is required.
         */
        public Builder createFlowLogCloudwatchLogGroup(final java.lang.Boolean createFlowLogCloudwatchLogGroup) {
            this.config().createFlowLogCloudwatchLogGroup(createFlowLogCloudwatchLogGroup);
            return this;
        }

        /**
         * Controls if an Internet Gateway is created for public subnets and the related routes that connect them true.
         * <p>
         * @return {@code this}
         * @param createIgw Controls if an Internet Gateway is created for public subnets and the related routes that connect them true. This parameter is required.
         */
        public Builder createIgw(final java.lang.Boolean createIgw) {
            this.config().createIgw(createIgw);
            return this;
        }

        /**
         * Controls if redshift subnet group should be created true.
         * <p>
         * @return {@code this}
         * @param createRedshiftSubnetGroup Controls if redshift subnet group should be created true. This parameter is required.
         */
        public Builder createRedshiftSubnetGroup(final java.lang.Boolean createRedshiftSubnetGroup) {
            this.config().createRedshiftSubnetGroup(createRedshiftSubnetGroup);
            return this;
        }

        /**
         * Controls if separate route table for redshift should be created.
         * <p>
         * @return {@code this}
         * @param createRedshiftSubnetRouteTable Controls if separate route table for redshift should be created. This parameter is required.
         */
        public Builder createRedshiftSubnetRouteTable(final java.lang.Boolean createRedshiftSubnetRouteTable) {
            this.config().createRedshiftSubnetRouteTable(createRedshiftSubnetRouteTable);
            return this;
        }

        /**
         * Controls if VPC should be created (it affects almost all resources) true.
         * <p>
         * @return {@code this}
         * @param createVpc Controls if VPC should be created (it affects almost all resources) true. This parameter is required.
         */
        public Builder createVpc(final java.lang.Boolean createVpc) {
            this.config().createVpc(createVpc);
            return this;
        }

        /**
         * Maps of Customer Gateway's attributes (BGP ASN and Gateway's Internet-routable external IP address) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param customerGateways Maps of Customer Gateway's attributes (BGP ASN and Gateway's Internet-routable external IP address) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder customerGateways(final java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> customerGateways) {
            this.config().customerGateways(customerGateways);
            return this;
        }

        /**
         * Additional tags for the Customer Gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param customerGatewayTags Additional tags for the Customer Gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder customerGatewayTags(final java.util.Map<java.lang.String, java.lang.String> customerGatewayTags) {
            this.config().customerGatewayTags(customerGatewayTags);
            return this;
        }

        /**
         * The customer owned IPv4 address pool.
         * <p>
         * Typically used with the <code>map_customer_owned_ip_on_launch</code> argument. The <code>outpost_arn</code> argument must be specified when configured
         * <p>
         * @return {@code this}
         * @param customerOwnedIpv4Pool The customer owned IPv4 address pool. This parameter is required.
         */
        public Builder customerOwnedIpv4Pool(final java.lang.String customerOwnedIpv4Pool) {
            this.config().customerOwnedIpv4Pool(customerOwnedIpv4Pool);
            return this;
        }

        /**
         * Additional tags for the database subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseAclTags Additional tags for the database subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseAclTags(final java.util.Map<java.lang.String, java.lang.String> databaseAclTags) {
            this.config().databaseAclTags(databaseAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for database subnets.
         * <p>
         * @return {@code this}
         * @param databaseDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for database subnets. This parameter is required.
         */
        public Builder databaseDedicatedNetworkAcl(final java.lang.Boolean databaseDedicatedNetworkAcl) {
            this.config().databaseDedicatedNetworkAcl(databaseDedicatedNetworkAcl);
            return this;
        }

        /**
         * Database subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseInboundAclRules Database subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> databaseInboundAclRules) {
            this.config().databaseInboundAclRules(databaseInboundAclRules);
            return this;
        }

        /**
         * Database subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseOutboundAclRules Database subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> databaseOutboundAclRules) {
            this.config().databaseOutboundAclRules(databaseOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the database route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseRouteTableTags Additional tags for the database route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> databaseRouteTableTags) {
            this.config().databaseRouteTableTags(databaseRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param databaseSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder databaseSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean databaseSubnetAssignIpv6AddressOnCreation) {
            this.config().databaseSubnetAssignIpv6AddressOnCreation(databaseSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param databaseSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder databaseSubnetEnableDns64(final java.lang.Boolean databaseSubnetEnableDns64) {
            this.config().databaseSubnetEnableDns64(databaseSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch(databaseSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param databaseSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder databaseSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean databaseSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().databaseSubnetEnableResourceNameDnsARecordOnLaunch(databaseSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Name of database subnet group.
         * <p>
         * @return {@code this}
         * @param databaseSubnetGroupName Name of database subnet group. This parameter is required.
         */
        public Builder databaseSubnetGroupName(final java.lang.String databaseSubnetGroupName) {
            this.config().databaseSubnetGroupName(databaseSubnetGroupName);
            return this;
        }

        /**
         * Additional tags for the database subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseSubnetGroupTags Additional tags for the database subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseSubnetGroupTags(final java.util.Map<java.lang.String, java.lang.String> databaseSubnetGroupTags) {
            this.config().databaseSubnetGroupTags(databaseSubnetGroupTags);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param databaseSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder databaseSubnetIpv6Native(final java.lang.Boolean databaseSubnetIpv6Native) {
            this.config().databaseSubnetIpv6Native(databaseSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 database subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param databaseSubnetIpv6Prefixes Assigns IPv6 database subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder databaseSubnetIpv6Prefixes(final java.util.List<java.lang.String> databaseSubnetIpv6Prefixes) {
            this.config().databaseSubnetIpv6Prefixes(databaseSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on database subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param databaseSubnetNames Explicit values to use in the Name tag on database subnets. This parameter is required.
         */
        public Builder databaseSubnetNames(final java.util.List<java.lang.String> databaseSubnetNames) {
            this.config().databaseSubnetNames(databaseSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param databaseSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder databaseSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String databaseSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().databaseSubnetPrivateDnsHostnameTypeOnLaunch(databaseSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of database subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param databaseSubnets A list of database subnets inside the VPC. This parameter is required.
         */
        public Builder databaseSubnets(final java.util.List<java.lang.String> databaseSubnets) {
            this.config().databaseSubnets(databaseSubnets);
            return this;
        }

        /**
         * Suffix to append to database subnets name db.
         * <p>
         * @return {@code this}
         * @param databaseSubnetSuffix Suffix to append to database subnets name db. This parameter is required.
         */
        public Builder databaseSubnetSuffix(final java.lang.String databaseSubnetSuffix) {
            this.config().databaseSubnetSuffix(databaseSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the database subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param databaseSubnetTags Additional tags for the database subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder databaseSubnetTags(final java.util.Map<java.lang.String, java.lang.String> databaseSubnetTags) {
            this.config().databaseSubnetTags(databaseSubnetTags);
            return this;
        }

        /**
         * List of maps of egress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultNetworkAclEgress List of maps of egress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultNetworkAclEgress(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclEgress) {
            this.config().defaultNetworkAclEgress(defaultNetworkAclEgress);
            return this;
        }

        /**
         * List of maps of ingress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultNetworkAclIngress List of maps of ingress rules to set on the Default Network ACL [object Object] [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultNetworkAclIngress(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultNetworkAclIngress) {
            this.config().defaultNetworkAclIngress(defaultNetworkAclIngress);
            return this;
        }

        /**
         * Name to be used on the Default Network ACL.
         * <p>
         * @return {@code this}
         * @param defaultNetworkAclName Name to be used on the Default Network ACL. This parameter is required.
         */
        public Builder defaultNetworkAclName(final java.lang.String defaultNetworkAclName) {
            this.config().defaultNetworkAclName(defaultNetworkAclName);
            return this;
        }

        /**
         * Additional tags for the Default Network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultNetworkAclTags Additional tags for the Default Network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultNetworkAclTags(final java.util.Map<java.lang.String, java.lang.String> defaultNetworkAclTags) {
            this.config().defaultNetworkAclTags(defaultNetworkAclTags);
            return this;
        }

        /**
         * Name to be used on the default route table.
         * <p>
         * @return {@code this}
         * @param defaultRouteTableName Name to be used on the default route table. This parameter is required.
         */
        public Builder defaultRouteTableName(final java.lang.String defaultRouteTableName) {
            this.config().defaultRouteTableName(defaultRouteTableName);
            return this;
        }

        /**
         * List of virtual gateways for propagation.
         * <p>
         * @return {@code this}
         * @param defaultRouteTablePropagatingVgws List of virtual gateways for propagation. This parameter is required.
         */
        public Builder defaultRouteTablePropagatingVgws(final java.util.List<java.lang.String> defaultRouteTablePropagatingVgws) {
            this.config().defaultRouteTablePropagatingVgws(defaultRouteTablePropagatingVgws);
            return this;
        }

        /**
         * Configuration block of routes. See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table#route.
         * <p>
         * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * <p>
         * @return {@code this}
         * @param defaultRouteTableRoutes Configuration block of routes. See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table#route. This parameter is required.
         */
        public Builder defaultRouteTableRoutes(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultRouteTableRoutes) {
            this.config().defaultRouteTableRoutes(defaultRouteTableRoutes);
            return this;
        }

        /**
         * Additional tags for the default route table The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultRouteTableTags Additional tags for the default route table The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> defaultRouteTableTags) {
            this.config().defaultRouteTableTags(defaultRouteTableTags);
            return this;
        }

        /**
         * List of maps of egress rules to set on the default security group.
         * <p>
         * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * <p>
         * @return {@code this}
         * @param defaultSecurityGroupEgress List of maps of egress rules to set on the default security group. This parameter is required.
         */
        public Builder defaultSecurityGroupEgress(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupEgress) {
            this.config().defaultSecurityGroupEgress(defaultSecurityGroupEgress);
            return this;
        }

        /**
         * List of maps of ingress rules to set on the default security group.
         * <p>
         * The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}
         * <p>
         * @return {@code this}
         * @param defaultSecurityGroupIngress List of maps of ingress rules to set on the default security group. This parameter is required.
         */
        public Builder defaultSecurityGroupIngress(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> defaultSecurityGroupIngress) {
            this.config().defaultSecurityGroupIngress(defaultSecurityGroupIngress);
            return this;
        }

        /**
         * Name to be used on the default security group.
         * <p>
         * @return {@code this}
         * @param defaultSecurityGroupName Name to be used on the default security group. This parameter is required.
         */
        public Builder defaultSecurityGroupName(final java.lang.String defaultSecurityGroupName) {
            this.config().defaultSecurityGroupName(defaultSecurityGroupName);
            return this;
        }

        /**
         * Additional tags for the default security group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultSecurityGroupTags Additional tags for the default security group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultSecurityGroupTags(final java.util.Map<java.lang.String, java.lang.String> defaultSecurityGroupTags) {
            this.config().defaultSecurityGroupTags(defaultSecurityGroupTags);
            return this;
        }

        /**
         * Should be true to enable DNS hostnames in the Default VPC true.
         * <p>
         * @return {@code this}
         * @param defaultVpcEnableDnsHostnames Should be true to enable DNS hostnames in the Default VPC true. This parameter is required.
         */
        public Builder defaultVpcEnableDnsHostnames(final java.lang.Boolean defaultVpcEnableDnsHostnames) {
            this.config().defaultVpcEnableDnsHostnames(defaultVpcEnableDnsHostnames);
            return this;
        }

        /**
         * Should be true to enable DNS support in the Default VPC true.
         * <p>
         * @return {@code this}
         * @param defaultVpcEnableDnsSupport Should be true to enable DNS support in the Default VPC true. This parameter is required.
         */
        public Builder defaultVpcEnableDnsSupport(final java.lang.Boolean defaultVpcEnableDnsSupport) {
            this.config().defaultVpcEnableDnsSupport(defaultVpcEnableDnsSupport);
            return this;
        }

        /**
         * Name to be used on the Default VPC.
         * <p>
         * @return {@code this}
         * @param defaultVpcName Name to be used on the Default VPC. This parameter is required.
         */
        public Builder defaultVpcName(final java.lang.String defaultVpcName) {
            this.config().defaultVpcName(defaultVpcName);
            return this;
        }

        /**
         * Additional tags for the Default VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param defaultVpcTags Additional tags for the Default VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder defaultVpcTags(final java.util.Map<java.lang.String, java.lang.String> defaultVpcTags) {
            this.config().defaultVpcTags(defaultVpcTags);
            return this;
        }

        /**
         * Specifies DNS name for DHCP options set (requires enable_dhcp_options set to true).
         * <p>
         * @return {@code this}
         * @param dhcpOptionsDomainName Specifies DNS name for DHCP options set (requires enable_dhcp_options set to true). This parameter is required.
         */
        public Builder dhcpOptionsDomainName(final java.lang.String dhcpOptionsDomainName) {
            this.config().dhcpOptionsDomainName(dhcpOptionsDomainName);
            return this;
        }

        /**
         * Specify a list of DNS server addresses for DHCP options set, default to AWS provided (requires enable_dhcp_options set to true) AmazonProvidedDNS.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsDomainNameServers Specify a list of DNS server addresses for DHCP options set, default to AWS provided (requires enable_dhcp_options set to true) AmazonProvidedDNS. This parameter is required.
         */
        public Builder dhcpOptionsDomainNameServers(final java.util.List<java.lang.String> dhcpOptionsDomainNameServers) {
            this.config().dhcpOptionsDomainNameServers(dhcpOptionsDomainNameServers);
            return this;
        }

        /**
         * Specify a list of netbios servers for DHCP options set (requires enable_dhcp_options set to true).
         * <p>
         * @return {@code this}
         * @param dhcpOptionsNetbiosNameServers Specify a list of netbios servers for DHCP options set (requires enable_dhcp_options set to true). This parameter is required.
         */
        public Builder dhcpOptionsNetbiosNameServers(final java.util.List<java.lang.String> dhcpOptionsNetbiosNameServers) {
            this.config().dhcpOptionsNetbiosNameServers(dhcpOptionsNetbiosNameServers);
            return this;
        }

        /**
         * Specify netbios node_type for DHCP options set (requires enable_dhcp_options set to true).
         * <p>
         * @return {@code this}
         * @param dhcpOptionsNetbiosNodeType Specify netbios node_type for DHCP options set (requires enable_dhcp_options set to true). This parameter is required.
         */
        public Builder dhcpOptionsNetbiosNodeType(final java.lang.String dhcpOptionsNetbiosNodeType) {
            this.config().dhcpOptionsNetbiosNodeType(dhcpOptionsNetbiosNodeType);
            return this;
        }

        /**
         * Specify a list of NTP servers for DHCP options set (requires enable_dhcp_options set to true).
         * <p>
         * @return {@code this}
         * @param dhcpOptionsNtpServers Specify a list of NTP servers for DHCP options set (requires enable_dhcp_options set to true). This parameter is required.
         */
        public Builder dhcpOptionsNtpServers(final java.util.List<java.lang.String> dhcpOptionsNtpServers) {
            this.config().dhcpOptionsNtpServers(dhcpOptionsNtpServers);
            return this;
        }

        /**
         * Additional tags for the DHCP option set (requires enable_dhcp_options set to true) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsTags Additional tags for the DHCP option set (requires enable_dhcp_options set to true) The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder dhcpOptionsTags(final java.util.Map<java.lang.String, java.lang.String> dhcpOptionsTags) {
            this.config().dhcpOptionsTags(dhcpOptionsTags);
            return this;
        }

        /**
         * Additional tags for the elasticache subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheAclTags Additional tags for the elasticache subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheAclTags(final java.util.Map<java.lang.String, java.lang.String> elasticacheAclTags) {
            this.config().elasticacheAclTags(elasticacheAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for elasticache subnets.
         * <p>
         * @return {@code this}
         * @param elasticacheDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for elasticache subnets. This parameter is required.
         */
        public Builder elasticacheDedicatedNetworkAcl(final java.lang.Boolean elasticacheDedicatedNetworkAcl) {
            this.config().elasticacheDedicatedNetworkAcl(elasticacheDedicatedNetworkAcl);
            return this;
        }

        /**
         * Elasticache subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheInboundAclRules Elasticache subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> elasticacheInboundAclRules) {
            this.config().elasticacheInboundAclRules(elasticacheInboundAclRules);
            return this;
        }

        /**
         * Elasticache subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheOutboundAclRules Elasticache subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> elasticacheOutboundAclRules) {
            this.config().elasticacheOutboundAclRules(elasticacheOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the elasticache route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheRouteTableTags Additional tags for the elasticache route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> elasticacheRouteTableTags) {
            this.config().elasticacheRouteTableTags(elasticacheRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder elasticacheSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean elasticacheSubnetAssignIpv6AddressOnCreation) {
            this.config().elasticacheSubnetAssignIpv6AddressOnCreation(elasticacheSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder elasticacheSubnetEnableDns64(final java.lang.Boolean elasticacheSubnetEnableDns64) {
            this.config().elasticacheSubnetEnableDns64(elasticacheSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch(elasticacheSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder elasticacheSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean elasticacheSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().elasticacheSubnetEnableResourceNameDnsARecordOnLaunch(elasticacheSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Name of elasticache subnet group.
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetGroupName Name of elasticache subnet group. This parameter is required.
         */
        public Builder elasticacheSubnetGroupName(final java.lang.String elasticacheSubnetGroupName) {
            this.config().elasticacheSubnetGroupName(elasticacheSubnetGroupName);
            return this;
        }

        /**
         * Additional tags for the elasticache subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetGroupTags Additional tags for the elasticache subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheSubnetGroupTags(final java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetGroupTags) {
            this.config().elasticacheSubnetGroupTags(elasticacheSubnetGroupTags);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder elasticacheSubnetIpv6Native(final java.lang.Boolean elasticacheSubnetIpv6Native) {
            this.config().elasticacheSubnetIpv6Native(elasticacheSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 elasticache subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetIpv6Prefixes Assigns IPv6 elasticache subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder elasticacheSubnetIpv6Prefixes(final java.util.List<java.lang.String> elasticacheSubnetIpv6Prefixes) {
            this.config().elasticacheSubnetIpv6Prefixes(elasticacheSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on elasticache subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetNames Explicit values to use in the Name tag on elasticache subnets. This parameter is required.
         */
        public Builder elasticacheSubnetNames(final java.util.List<java.lang.String> elasticacheSubnetNames) {
            this.config().elasticacheSubnetNames(elasticacheSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder elasticacheSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String elasticacheSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().elasticacheSubnetPrivateDnsHostnameTypeOnLaunch(elasticacheSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of elasticache subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param elasticacheSubnets A list of elasticache subnets inside the VPC. This parameter is required.
         */
        public Builder elasticacheSubnets(final java.util.List<java.lang.String> elasticacheSubnets) {
            this.config().elasticacheSubnets(elasticacheSubnets);
            return this;
        }

        /**
         * Suffix to append to elasticache subnets name elasticache.
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetSuffix Suffix to append to elasticache subnets name elasticache. This parameter is required.
         */
        public Builder elasticacheSubnetSuffix(final java.lang.String elasticacheSubnetSuffix) {
            this.config().elasticacheSubnetSuffix(elasticacheSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the elasticache subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param elasticacheSubnetTags Additional tags for the elasticache subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder elasticacheSubnetTags(final java.util.Map<java.lang.String, java.lang.String> elasticacheSubnetTags) {
            this.config().elasticacheSubnetTags(elasticacheSubnetTags);
            return this;
        }

        /**
         * Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type.
         * <p>
         * @return {@code this}
         * @param enableDhcpOptions Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type. This parameter is required.
         */
        public Builder enableDhcpOptions(final java.lang.Boolean enableDhcpOptions) {
            this.config().enableDhcpOptions(enableDhcpOptions);
            return this;
        }

        /**
         * Should be true to enable DNS hostnames in the VPC true.
         * <p>
         * @return {@code this}
         * @param enableDnsHostnames Should be true to enable DNS hostnames in the VPC true. This parameter is required.
         */
        public Builder enableDnsHostnames(final java.lang.Boolean enableDnsHostnames) {
            this.config().enableDnsHostnames(enableDnsHostnames);
            return this;
        }

        /**
         * Should be true to enable DNS support in the VPC true.
         * <p>
         * @return {@code this}
         * @param enableDnsSupport Should be true to enable DNS support in the VPC true. This parameter is required.
         */
        public Builder enableDnsSupport(final java.lang.Boolean enableDnsSupport) {
            this.config().enableDnsSupport(enableDnsSupport);
            return this;
        }

        /**
         * Whether or not to enable VPC Flow Logs.
         * <p>
         * @return {@code this}
         * @param enableFlowLog Whether or not to enable VPC Flow Logs. This parameter is required.
         */
        public Builder enableFlowLog(final java.lang.Boolean enableFlowLog) {
            this.config().enableFlowLog(enableFlowLog);
            return this;
        }

        /**
         * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
         * <p>
         * You cannot specify the range of IP addresses, or the size of the CIDR block
         * <p>
         * @return {@code this}
         * @param enableIpv6 Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. This parameter is required.
         */
        public Builder enableIpv6(final java.lang.Boolean enableIpv6) {
            this.config().enableIpv6(enableIpv6);
            return this;
        }

        /**
         * Should be true if you want to provision NAT Gateways for each of your private networks.
         * <p>
         * @return {@code this}
         * @param enableNatGateway Should be true if you want to provision NAT Gateways for each of your private networks. This parameter is required.
         */
        public Builder enableNatGateway(final java.lang.Boolean enableNatGateway) {
            this.config().enableNatGateway(enableNatGateway);
            return this;
        }

        /**
         * Determines whether network address usage metrics are enabled for the VPC.
         * <p>
         * @return {@code this}
         * @param enableNetworkAddressUsageMetrics Determines whether network address usage metrics are enabled for the VPC. This parameter is required.
         */
        public Builder enableNetworkAddressUsageMetrics(final java.lang.Boolean enableNetworkAddressUsageMetrics) {
            this.config().enableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics);
            return this;
        }

        /**
         * Controls if redshift should have public routing table.
         * <p>
         * @return {@code this}
         * @param enablePublicRedshift Controls if redshift should have public routing table. This parameter is required.
         */
        public Builder enablePublicRedshift(final java.lang.Boolean enablePublicRedshift) {
            this.config().enablePublicRedshift(enablePublicRedshift);
            return this;
        }

        /**
         * Should be true if you want to create a new VPN Gateway resource and attach it to the VPC.
         * <p>
         * @return {@code this}
         * @param enableVpnGateway Should be true if you want to create a new VPN Gateway resource and attach it to the VPC. This parameter is required.
         */
        public Builder enableVpnGateway(final java.lang.Boolean enableVpnGateway) {
            this.config().enableVpnGateway(enableVpnGateway);
            return this;
        }

        /**
         * List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips).
         * <p>
         * @return {@code this}
         * @param externalNatIpIds List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips). This parameter is required.
         */
        public Builder externalNatIpIds(final java.util.List<java.lang.String> externalNatIpIds) {
            this.config().externalNatIpIds(externalNatIpIds);
            return this;
        }

        /**
         * List of EIPs to be used for <code>nat_public_ips</code> output (used in combination with reuse_nat_ips and external_nat_ip_ids).
         * <p>
         * @return {@code this}
         * @param externalNatIps List of EIPs to be used for <code>nat_public_ips</code> output (used in combination with reuse_nat_ips and external_nat_ip_ids). This parameter is required.
         */
        public Builder externalNatIps(final java.util.List<java.lang.String> externalNatIps) {
            this.config().externalNatIps(externalNatIps);
            return this;
        }

        /**
         * The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group.
         * <p>
         * When flow_log_destination_arn is set to ARN of Cloudwatch Logs, this argument needs to be provided
         * <p>
         * @return {@code this}
         * @param flowLogCloudwatchIamRoleArn The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group. This parameter is required.
         */
        public Builder flowLogCloudwatchIamRoleArn(final java.lang.String flowLogCloudwatchIamRoleArn) {
            this.config().flowLogCloudwatchIamRoleArn(flowLogCloudwatchIamRoleArn);
            return this;
        }

        /**
         * The ARN of the KMS Key to use when encrypting log data for VPC flow logs.
         * <p>
         * @return {@code this}
         * @param flowLogCloudwatchLogGroupKmsKeyId The ARN of the KMS Key to use when encrypting log data for VPC flow logs. This parameter is required.
         */
        public Builder flowLogCloudwatchLogGroupKmsKeyId(final java.lang.String flowLogCloudwatchLogGroupKmsKeyId) {
            this.config().flowLogCloudwatchLogGroupKmsKeyId(flowLogCloudwatchLogGroupKmsKeyId);
            return this;
        }

        /**
         * Specifies the name prefix of CloudWatch Log Group for VPC flow logs /aws/vpc-flow-log/.
         * <p>
         * @return {@code this}
         * @param flowLogCloudwatchLogGroupNamePrefix Specifies the name prefix of CloudWatch Log Group for VPC flow logs /aws/vpc-flow-log/. This parameter is required.
         */
        public Builder flowLogCloudwatchLogGroupNamePrefix(final java.lang.String flowLogCloudwatchLogGroupNamePrefix) {
            this.config().flowLogCloudwatchLogGroupNamePrefix(flowLogCloudwatchLogGroupNamePrefix);
            return this;
        }

        /**
         * Specifies the name suffix of CloudWatch Log Group for VPC flow logs.
         * <p>
         * @return {@code this}
         * @param flowLogCloudwatchLogGroupNameSuffix Specifies the name suffix of CloudWatch Log Group for VPC flow logs. This parameter is required.
         */
        public Builder flowLogCloudwatchLogGroupNameSuffix(final java.lang.String flowLogCloudwatchLogGroupNameSuffix) {
            this.config().flowLogCloudwatchLogGroupNameSuffix(flowLogCloudwatchLogGroupNameSuffix);
            return this;
        }

        /**
         * Specifies the number of days you want to retain log events in the specified log group for VPC flow logs.
         * <p>
         * @return {@code this}
         * @param flowLogCloudwatchLogGroupRetentionInDays Specifies the number of days you want to retain log events in the specified log group for VPC flow logs. This parameter is required.
         */
        public Builder flowLogCloudwatchLogGroupRetentionInDays(final java.lang.Number flowLogCloudwatchLogGroupRetentionInDays) {
            this.config().flowLogCloudwatchLogGroupRetentionInDays(flowLogCloudwatchLogGroupRetentionInDays);
            return this;
        }

        /**
         * The ARN of the CloudWatch log group or S3 bucket where VPC Flow Logs will be pushed.
         * <p>
         * If this ARN is a S3 bucket the appropriate permissions need to be set on that bucket's policy. When create_flow_log_cloudwatch_log_group is set to false this argument must be provided
         * <p>
         * @return {@code this}
         * @param flowLogDestinationArn The ARN of the CloudWatch log group or S3 bucket where VPC Flow Logs will be pushed. This parameter is required.
         */
        public Builder flowLogDestinationArn(final java.lang.String flowLogDestinationArn) {
            this.config().flowLogDestinationArn(flowLogDestinationArn);
            return this;
        }

        /**
         * Type of flow log destination.
         * <p>
         * Can be s3 or cloud-watch-logs
         * cloud-watch-logs
         * <p>
         * @return {@code this}
         * @param flowLogDestinationType Type of flow log destination. This parameter is required.
         */
        public Builder flowLogDestinationType(final java.lang.String flowLogDestinationType) {
            this.config().flowLogDestinationType(flowLogDestinationType);
            return this;
        }

        /**
         * (Optional) The format for the flow log.
         * <p>
         * Valid values: <code>plain-text</code>, <code>parquet</code>
         * <p>
         * @return {@code this}
         * @param flowLogFileFormat (Optional) The format for the flow log. This parameter is required.
         */
        public Builder flowLogFileFormat(final java.lang.String flowLogFileFormat) {
            this.config().flowLogFileFormat(flowLogFileFormat);
            return this;
        }

        /**
         * (Optional) Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
         * <p>
         * @return {@code this}
         * @param flowLogHiveCompatiblePartitions (Optional) Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. This parameter is required.
         */
        public Builder flowLogHiveCompatiblePartitions(final java.lang.Boolean flowLogHiveCompatiblePartitions) {
            this.config().flowLogHiveCompatiblePartitions(flowLogHiveCompatiblePartitions);
            return this;
        }

        /**
         * The fields to include in the flow log record, in the order in which they should appear.
         * <p>
         * @return {@code this}
         * @param flowLogLogFormat The fields to include in the flow log record, in the order in which they should appear. This parameter is required.
         */
        public Builder flowLogLogFormat(final java.lang.String flowLogLogFormat) {
            this.config().flowLogLogFormat(flowLogLogFormat);
            return this;
        }

        /**
         * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
         * <p>
         * Valid Values: <code>60</code> seconds or <code>600</code> seconds
         * 600
         * <p>
         * @return {@code this}
         * @param flowLogMaxAggregationInterval The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. This parameter is required.
         */
        public Builder flowLogMaxAggregationInterval(final java.lang.Number flowLogMaxAggregationInterval) {
            this.config().flowLogMaxAggregationInterval(flowLogMaxAggregationInterval);
            return this;
        }

        /**
         * (Optional) Indicates whether to partition the flow log per hour.
         * <p>
         * This reduces the cost and response time for queries
         * <p>
         * @return {@code this}
         * @param flowLogPerHourPartition (Optional) Indicates whether to partition the flow log per hour. This parameter is required.
         */
        public Builder flowLogPerHourPartition(final java.lang.Boolean flowLogPerHourPartition) {
            this.config().flowLogPerHourPartition(flowLogPerHourPartition);
            return this;
        }

        /**
         * The type of traffic to capture.
         * <p>
         * Valid values: ACCEPT, REJECT, ALL
         * ALL
         * <p>
         * @return {@code this}
         * @param flowLogTrafficType The type of traffic to capture. This parameter is required.
         */
        public Builder flowLogTrafficType(final java.lang.String flowLogTrafficType) {
            this.config().flowLogTrafficType(flowLogTrafficType);
            return this;
        }

        /**
         * Additional tags for the internet gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param igwTags Additional tags for the internet gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder igwTags(final java.util.Map<java.lang.String, java.lang.String> igwTags) {
            this.config().igwTags(igwTags);
            return this;
        }

        /**
         * A tenancy option for instances launched into the VPC default.
         * <p>
         * @return {@code this}
         * @param instanceTenancy A tenancy option for instances launched into the VPC default. This parameter is required.
         */
        public Builder instanceTenancy(final java.lang.String instanceTenancy) {
            this.config().instanceTenancy(instanceTenancy);
            return this;
        }

        /**
         * Additional tags for the intra subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param intraAclTags Additional tags for the intra subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder intraAclTags(final java.util.Map<java.lang.String, java.lang.String> intraAclTags) {
            this.config().intraAclTags(intraAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for intra subnets.
         * <p>
         * @return {@code this}
         * @param intraDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for intra subnets. This parameter is required.
         */
        public Builder intraDedicatedNetworkAcl(final java.lang.Boolean intraDedicatedNetworkAcl) {
            this.config().intraDedicatedNetworkAcl(intraDedicatedNetworkAcl);
            return this;
        }

        /**
         * Intra subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param intraInboundAclRules Intra subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder intraInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> intraInboundAclRules) {
            this.config().intraInboundAclRules(intraInboundAclRules);
            return this;
        }

        /**
         * Intra subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param intraOutboundAclRules Intra subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder intraOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> intraOutboundAclRules) {
            this.config().intraOutboundAclRules(intraOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the intra route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param intraRouteTableTags Additional tags for the intra route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder intraRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> intraRouteTableTags) {
            this.config().intraRouteTableTags(intraRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param intraSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder intraSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean intraSubnetAssignIpv6AddressOnCreation) {
            this.config().intraSubnetAssignIpv6AddressOnCreation(intraSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param intraSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder intraSubnetEnableDns64(final java.lang.Boolean intraSubnetEnableDns64) {
            this.config().intraSubnetEnableDns64(intraSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch(intraSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param intraSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder intraSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean intraSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().intraSubnetEnableResourceNameDnsARecordOnLaunch(intraSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param intraSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder intraSubnetIpv6Native(final java.lang.Boolean intraSubnetIpv6Native) {
            this.config().intraSubnetIpv6Native(intraSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 intra subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param intraSubnetIpv6Prefixes Assigns IPv6 intra subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder intraSubnetIpv6Prefixes(final java.util.List<java.lang.String> intraSubnetIpv6Prefixes) {
            this.config().intraSubnetIpv6Prefixes(intraSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on intra subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param intraSubnetNames Explicit values to use in the Name tag on intra subnets. This parameter is required.
         */
        public Builder intraSubnetNames(final java.util.List<java.lang.String> intraSubnetNames) {
            this.config().intraSubnetNames(intraSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param intraSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder intraSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String intraSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().intraSubnetPrivateDnsHostnameTypeOnLaunch(intraSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of intra subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param intraSubnets A list of intra subnets inside the VPC. This parameter is required.
         */
        public Builder intraSubnets(final java.util.List<java.lang.String> intraSubnets) {
            this.config().intraSubnets(intraSubnets);
            return this;
        }

        /**
         * Suffix to append to intra subnets name intra.
         * <p>
         * @return {@code this}
         * @param intraSubnetSuffix Suffix to append to intra subnets name intra. This parameter is required.
         */
        public Builder intraSubnetSuffix(final java.lang.String intraSubnetSuffix) {
            this.config().intraSubnetSuffix(intraSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the intra subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param intraSubnetTags Additional tags for the intra subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder intraSubnetTags(final java.util.Map<java.lang.String, java.lang.String> intraSubnetTags) {
            this.config().intraSubnetTags(intraSubnetTags);
            return this;
        }

        /**
         * (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR.
         * <p>
         * @return {@code this}
         * @param ipv4IpamPoolId (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. This parameter is required.
         */
        public Builder ipv4IpamPoolId(final java.lang.String ipv4IpamPoolId) {
            this.config().ipv4IpamPoolId(ipv4IpamPoolId);
            return this;
        }

        /**
         * (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC.
         * <p>
         * Requires specifying a ipv4_ipam_pool_id
         * <p>
         * @return {@code this}
         * @param ipv4NetmaskLength (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC. This parameter is required.
         */
        public Builder ipv4NetmaskLength(final java.lang.Number ipv4NetmaskLength) {
            this.config().ipv4NetmaskLength(ipv4NetmaskLength);
            return this;
        }

        /**
         * (Optional) IPv6 CIDR block to request from an IPAM Pool.
         * <p>
         * Can be set explicitly or derived from IPAM using <code>ipv6_netmask_length</code>
         * <p>
         * @return {@code this}
         * @param ipv6Cidr (Optional) IPv6 CIDR block to request from an IPAM Pool. This parameter is required.
         */
        public Builder ipv6Cidr(final java.lang.String ipv6Cidr) {
            this.config().ipv6Cidr(ipv6Cidr);
            return this;
        }

        /**
         * By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC.
         * <p>
         * This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlockNetworkBorderGroup By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC. This parameter is required.
         */
        public Builder ipv6CidrBlockNetworkBorderGroup(final java.lang.String ipv6CidrBlockNetworkBorderGroup) {
            this.config().ipv6CidrBlockNetworkBorderGroup(ipv6CidrBlockNetworkBorderGroup);
            return this;
        }

        /**
         * (Optional) IPAM Pool ID for a IPv6 pool.
         * <p>
         * Conflicts with <code>assign_generated_ipv6_cidr_block</code>
         * <p>
         * @return {@code this}
         * @param ipv6IpamPoolId (Optional) IPAM Pool ID for a IPv6 pool. This parameter is required.
         */
        public Builder ipv6IpamPoolId(final java.lang.String ipv6IpamPoolId) {
            this.config().ipv6IpamPoolId(ipv6IpamPoolId);
            return this;
        }

        /**
         * (Optional) Netmask length to request from IPAM Pool.
         * <p>
         * Conflicts with <code>ipv6_cidr_block</code>. This can be omitted if IPAM pool as a <code>allocation_default_netmask_length</code> set. Valid values: <code>56</code>
         * <p>
         * @return {@code this}
         * @param ipv6NetmaskLength (Optional) Netmask length to request from IPAM Pool. This parameter is required.
         */
        public Builder ipv6NetmaskLength(final java.lang.Number ipv6NetmaskLength) {
            this.config().ipv6NetmaskLength(ipv6NetmaskLength);
            return this;
        }

        /**
         * Should be true to adopt and manage Default Network ACL true.
         * <p>
         * @return {@code this}
         * @param manageDefaultNetworkAcl Should be true to adopt and manage Default Network ACL true. This parameter is required.
         */
        public Builder manageDefaultNetworkAcl(final java.lang.Boolean manageDefaultNetworkAcl) {
            this.config().manageDefaultNetworkAcl(manageDefaultNetworkAcl);
            return this;
        }

        /**
         * Should be true to manage default route table true.
         * <p>
         * @return {@code this}
         * @param manageDefaultRouteTable Should be true to manage default route table true. This parameter is required.
         */
        public Builder manageDefaultRouteTable(final java.lang.Boolean manageDefaultRouteTable) {
            this.config().manageDefaultRouteTable(manageDefaultRouteTable);
            return this;
        }

        /**
         * Should be true to adopt and manage default security group true.
         * <p>
         * @return {@code this}
         * @param manageDefaultSecurityGroup Should be true to adopt and manage default security group true. This parameter is required.
         */
        public Builder manageDefaultSecurityGroup(final java.lang.Boolean manageDefaultSecurityGroup) {
            this.config().manageDefaultSecurityGroup(manageDefaultSecurityGroup);
            return this;
        }

        /**
         * Should be true to adopt and manage Default VPC.
         * <p>
         * @return {@code this}
         * @param manageDefaultVpc Should be true to adopt and manage Default VPC. This parameter is required.
         */
        public Builder manageDefaultVpc(final java.lang.Boolean manageDefaultVpc) {
            this.config().manageDefaultVpc(manageDefaultVpc);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the subnet should be assigned a customer owned IP address.
         * <p>
         * The <code>customer_owned_ipv4_pool</code> and <code>outpost_arn</code> arguments must be specified when set to <code>true</code>. Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param mapCustomerOwnedIpOnLaunch Specify true to indicate that network interfaces created in the subnet should be assigned a customer owned IP address. This parameter is required.
         */
        public Builder mapCustomerOwnedIpOnLaunch(final java.lang.Boolean mapCustomerOwnedIpOnLaunch) {
            this.config().mapCustomerOwnedIpOnLaunch(mapCustomerOwnedIpOnLaunch);
            return this;
        }

        /**
         * Specify true to indicate that instances launched into the subnet should be assigned a public IP address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param mapPublicIpOnLaunch Specify true to indicate that instances launched into the subnet should be assigned a public IP address. This parameter is required.
         */
        public Builder mapPublicIpOnLaunch(final java.lang.Boolean mapPublicIpOnLaunch) {
            this.config().mapPublicIpOnLaunch(mapPublicIpOnLaunch);
            return this;
        }

        /**
         * Name to be used on all the resources as identifier.
         * <p>
         * @return {@code this}
         * @param name Name to be used on all the resources as identifier. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.config().name(name);
            return this;
        }

        /**
         * Additional tags for the NAT EIP The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param natEipTags Additional tags for the NAT EIP The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder natEipTags(final java.util.Map<java.lang.String, java.lang.String> natEipTags) {
            this.config().natEipTags(natEipTags);
            return this;
        }

        /**
         * Used to pass a custom destination route for private NAT Gateway.
         * <p>
         * If not specified, the default 0.0.0.0/0 is used as a destination route
         * 0.0.0.0/0
         * <p>
         * @return {@code this}
         * @param natGatewayDestinationCidrBlock Used to pass a custom destination route for private NAT Gateway. This parameter is required.
         */
        public Builder natGatewayDestinationCidrBlock(final java.lang.String natGatewayDestinationCidrBlock) {
            this.config().natGatewayDestinationCidrBlock(natGatewayDestinationCidrBlock);
            return this;
        }

        /**
         * Additional tags for the NAT gateways The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param natGatewayTags Additional tags for the NAT gateways The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder natGatewayTags(final java.util.Map<java.lang.String, java.lang.String> natGatewayTags) {
            this.config().natGatewayTags(natGatewayTags);
            return this;
        }

        /**
         * Should be true if you want only one NAT Gateway per availability zone.
         * <p>
         * Requires <code>var.azs</code> to be set, and the number of <code>public_subnets</code> created to be greater than or equal to the number of availability zones specified in <code>var.azs</code>
         * <p>
         * @return {@code this}
         * @param oneNatGatewayPerAz Should be true if you want only one NAT Gateway per availability zone. This parameter is required.
         */
        public Builder oneNatGatewayPerAz(final java.lang.Boolean oneNatGatewayPerAz) {
            this.config().oneNatGatewayPerAz(oneNatGatewayPerAz);
            return this;
        }

        /**
         * Additional tags for the outpost subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param outpostAclTags Additional tags for the outpost subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder outpostAclTags(final java.util.Map<java.lang.String, java.lang.String> outpostAclTags) {
            this.config().outpostAclTags(outpostAclTags);
            return this;
        }

        /**
         * ARN of Outpost you want to create a subnet in.
         * <p>
         * @return {@code this}
         * @param outpostArn ARN of Outpost you want to create a subnet in. This parameter is required.
         */
        public Builder outpostArn(final java.lang.String outpostArn) {
            this.config().outpostArn(outpostArn);
            return this;
        }

        /**
         * AZ where Outpost is anchored.
         * <p>
         * @return {@code this}
         * @param outpostAz AZ where Outpost is anchored. This parameter is required.
         */
        public Builder outpostAz(final java.lang.String outpostAz) {
            this.config().outpostAz(outpostAz);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for outpost subnets.
         * <p>
         * @return {@code this}
         * @param outpostDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for outpost subnets. This parameter is required.
         */
        public Builder outpostDedicatedNetworkAcl(final java.lang.Boolean outpostDedicatedNetworkAcl) {
            this.config().outpostDedicatedNetworkAcl(outpostDedicatedNetworkAcl);
            return this;
        }

        /**
         * Outpost subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param outpostInboundAclRules Outpost subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder outpostInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> outpostInboundAclRules) {
            this.config().outpostInboundAclRules(outpostInboundAclRules);
            return this;
        }

        /**
         * Outpost subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param outpostOutboundAclRules Outpost subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder outpostOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> outpostOutboundAclRules) {
            this.config().outpostOutboundAclRules(outpostOutboundAclRules);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param outpostSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder outpostSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean outpostSubnetAssignIpv6AddressOnCreation) {
            this.config().outpostSubnetAssignIpv6AddressOnCreation(outpostSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param outpostSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder outpostSubnetEnableDns64(final java.lang.Boolean outpostSubnetEnableDns64) {
            this.config().outpostSubnetEnableDns64(outpostSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch(outpostSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param outpostSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder outpostSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean outpostSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().outpostSubnetEnableResourceNameDnsARecordOnLaunch(outpostSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param outpostSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder outpostSubnetIpv6Native(final java.lang.Boolean outpostSubnetIpv6Native) {
            this.config().outpostSubnetIpv6Native(outpostSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 outpost subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param outpostSubnetIpv6Prefixes Assigns IPv6 outpost subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder outpostSubnetIpv6Prefixes(final java.util.List<java.lang.String> outpostSubnetIpv6Prefixes) {
            this.config().outpostSubnetIpv6Prefixes(outpostSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on outpost subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param outpostSubnetNames Explicit values to use in the Name tag on outpost subnets. This parameter is required.
         */
        public Builder outpostSubnetNames(final java.util.List<java.lang.String> outpostSubnetNames) {
            this.config().outpostSubnetNames(outpostSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param outpostSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder outpostSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String outpostSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().outpostSubnetPrivateDnsHostnameTypeOnLaunch(outpostSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of outpost subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param outpostSubnets A list of outpost subnets inside the VPC. This parameter is required.
         */
        public Builder outpostSubnets(final java.util.List<java.lang.String> outpostSubnets) {
            this.config().outpostSubnets(outpostSubnets);
            return this;
        }

        /**
         * Suffix to append to outpost subnets name outpost.
         * <p>
         * @return {@code this}
         * @param outpostSubnetSuffix Suffix to append to outpost subnets name outpost. This parameter is required.
         */
        public Builder outpostSubnetSuffix(final java.lang.String outpostSubnetSuffix) {
            this.config().outpostSubnetSuffix(outpostSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the outpost subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param outpostSubnetTags Additional tags for the outpost subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder outpostSubnetTags(final java.util.Map<java.lang.String, java.lang.String> outpostSubnetTags) {
            this.config().outpostSubnetTags(outpostSubnetTags);
            return this;
        }

        /**
         * Additional tags for the private subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateAclTags Additional tags for the private subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateAclTags(final java.util.Map<java.lang.String, java.lang.String> privateAclTags) {
            this.config().privateAclTags(privateAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for private subnets.
         * <p>
         * @return {@code this}
         * @param privateDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for private subnets. This parameter is required.
         */
        public Builder privateDedicatedNetworkAcl(final java.lang.Boolean privateDedicatedNetworkAcl) {
            this.config().privateDedicatedNetworkAcl(privateDedicatedNetworkAcl);
            return this;
        }

        /**
         * Private subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateInboundAclRules Private subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> privateInboundAclRules) {
            this.config().privateInboundAclRules(privateInboundAclRules);
            return this;
        }

        /**
         * Private subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateOutboundAclRules Private subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> privateOutboundAclRules) {
            this.config().privateOutboundAclRules(privateOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the private route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateRouteTableTags Additional tags for the private route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> privateRouteTableTags) {
            this.config().privateRouteTableTags(privateRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param privateSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder privateSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean privateSubnetAssignIpv6AddressOnCreation) {
            this.config().privateSubnetAssignIpv6AddressOnCreation(privateSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param privateSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder privateSubnetEnableDns64(final java.lang.Boolean privateSubnetEnableDns64) {
            this.config().privateSubnetEnableDns64(privateSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch(privateSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param privateSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder privateSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean privateSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().privateSubnetEnableResourceNameDnsARecordOnLaunch(privateSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param privateSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder privateSubnetIpv6Native(final java.lang.Boolean privateSubnetIpv6Native) {
            this.config().privateSubnetIpv6Native(privateSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 private subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param privateSubnetIpv6Prefixes Assigns IPv6 private subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder privateSubnetIpv6Prefixes(final java.util.List<java.lang.String> privateSubnetIpv6Prefixes) {
            this.config().privateSubnetIpv6Prefixes(privateSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on private subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param privateSubnetNames Explicit values to use in the Name tag on private subnets. This parameter is required.
         */
        public Builder privateSubnetNames(final java.util.List<java.lang.String> privateSubnetNames) {
            this.config().privateSubnetNames(privateSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param privateSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder privateSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String privateSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().privateSubnetPrivateDnsHostnameTypeOnLaunch(privateSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of private subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param privateSubnets A list of private subnets inside the VPC. This parameter is required.
         */
        public Builder privateSubnets(final java.util.List<java.lang.String> privateSubnets) {
            this.config().privateSubnets(privateSubnets);
            return this;
        }

        /**
         * Suffix to append to private subnets name private.
         * <p>
         * @return {@code this}
         * @param privateSubnetSuffix Suffix to append to private subnets name private. This parameter is required.
         */
        public Builder privateSubnetSuffix(final java.lang.String privateSubnetSuffix) {
            this.config().privateSubnetSuffix(privateSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the private subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateSubnetTags Additional tags for the private subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateSubnetTags(final java.util.Map<java.lang.String, java.lang.String> privateSubnetTags) {
            this.config().privateSubnetTags(privateSubnetTags);
            return this;
        }

        /**
         * Additional tags for the private subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param privateSubnetTagsPerAz Additional tags for the private subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder privateSubnetTagsPerAz(final java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, java.lang.String>> privateSubnetTagsPerAz) {
            this.config().privateSubnetTagsPerAz(privateSubnetTagsPerAz);
            return this;
        }

        /**
         * Should be true if you want route table propagation.
         * <p>
         * @return {@code this}
         * @param propagateIntraRouteTablesVgw Should be true if you want route table propagation. This parameter is required.
         */
        public Builder propagateIntraRouteTablesVgw(final java.lang.Boolean propagateIntraRouteTablesVgw) {
            this.config().propagateIntraRouteTablesVgw(propagateIntraRouteTablesVgw);
            return this;
        }

        /**
         * Should be true if you want route table propagation.
         * <p>
         * @return {@code this}
         * @param propagatePrivateRouteTablesVgw Should be true if you want route table propagation. This parameter is required.
         */
        public Builder propagatePrivateRouteTablesVgw(final java.lang.Boolean propagatePrivateRouteTablesVgw) {
            this.config().propagatePrivateRouteTablesVgw(propagatePrivateRouteTablesVgw);
            return this;
        }

        /**
         * Should be true if you want route table propagation.
         * <p>
         * @return {@code this}
         * @param propagatePublicRouteTablesVgw Should be true if you want route table propagation. This parameter is required.
         */
        public Builder propagatePublicRouteTablesVgw(final java.lang.Boolean propagatePublicRouteTablesVgw) {
            this.config().propagatePublicRouteTablesVgw(propagatePublicRouteTablesVgw);
            return this;
        }

        /**
         * Additional tags for the public subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicAclTags Additional tags for the public subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicAclTags(final java.util.Map<java.lang.String, java.lang.String> publicAclTags) {
            this.config().publicAclTags(publicAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for public subnets.
         * <p>
         * @return {@code this}
         * @param publicDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for public subnets. This parameter is required.
         */
        public Builder publicDedicatedNetworkAcl(final java.lang.Boolean publicDedicatedNetworkAcl) {
            this.config().publicDedicatedNetworkAcl(publicDedicatedNetworkAcl);
            return this;
        }

        /**
         * Public subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicInboundAclRules Public subnets inbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> publicInboundAclRules) {
            this.config().publicInboundAclRules(publicInboundAclRules);
            return this;
        }

        /**
         * Public subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicOutboundAclRules Public subnets outbound network ACLs [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> publicOutboundAclRules) {
            this.config().publicOutboundAclRules(publicOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the public route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicRouteTableTags Additional tags for the public route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> publicRouteTableTags) {
            this.config().publicRouteTableTags(publicRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param publicSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder publicSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean publicSubnetAssignIpv6AddressOnCreation) {
            this.config().publicSubnetAssignIpv6AddressOnCreation(publicSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param publicSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder publicSubnetEnableDns64(final java.lang.Boolean publicSubnetEnableDns64) {
            this.config().publicSubnetEnableDns64(publicSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch(publicSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param publicSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder publicSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean publicSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().publicSubnetEnableResourceNameDnsARecordOnLaunch(publicSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param publicSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder publicSubnetIpv6Native(final java.lang.Boolean publicSubnetIpv6Native) {
            this.config().publicSubnetIpv6Native(publicSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 public subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param publicSubnetIpv6Prefixes Assigns IPv6 public subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder publicSubnetIpv6Prefixes(final java.util.List<java.lang.String> publicSubnetIpv6Prefixes) {
            this.config().publicSubnetIpv6Prefixes(publicSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on public subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param publicSubnetNames Explicit values to use in the Name tag on public subnets. This parameter is required.
         */
        public Builder publicSubnetNames(final java.util.List<java.lang.String> publicSubnetNames) {
            this.config().publicSubnetNames(publicSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param publicSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder publicSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String publicSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().publicSubnetPrivateDnsHostnameTypeOnLaunch(publicSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of public subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param publicSubnets A list of public subnets inside the VPC. This parameter is required.
         */
        public Builder publicSubnets(final java.util.List<java.lang.String> publicSubnets) {
            this.config().publicSubnets(publicSubnets);
            return this;
        }

        /**
         * Suffix to append to public subnets name public.
         * <p>
         * @return {@code this}
         * @param publicSubnetSuffix Suffix to append to public subnets name public. This parameter is required.
         */
        public Builder publicSubnetSuffix(final java.lang.String publicSubnetSuffix) {
            this.config().publicSubnetSuffix(publicSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the public subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicSubnetTags Additional tags for the public subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicSubnetTags(final java.util.Map<java.lang.String, java.lang.String> publicSubnetTags) {
            this.config().publicSubnetTags(publicSubnetTags);
            return this;
        }

        /**
         * Additional tags for the public subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param publicSubnetTagsPerAz Additional tags for the public subnets where the primary key is the AZ The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder publicSubnetTagsPerAz(final java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, java.lang.String>> publicSubnetTagsPerAz) {
            this.config().publicSubnetTagsPerAz(publicSubnetTagsPerAz);
            return this;
        }

        /**
         * Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?
         * <p>
         * More info: https://en.wikipedia.org/wiki/Putin_khuylo!
         * true
         * <p>
         * @return {@code this}
         * @param putinKhuylo Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity?. This parameter is required.
         */
        public Builder putinKhuylo(final java.lang.Boolean putinKhuylo) {
            this.config().putinKhuylo(putinKhuylo);
            return this;
        }

        /**
         * Additional tags for the redshift subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftAclTags Additional tags for the redshift subnets network ACL The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftAclTags(final java.util.Map<java.lang.String, java.lang.String> redshiftAclTags) {
            this.config().redshiftAclTags(redshiftAclTags);
            return this;
        }

        /**
         * Whether to use dedicated network ACL (not default) and custom rules for redshift subnets.
         * <p>
         * @return {@code this}
         * @param redshiftDedicatedNetworkAcl Whether to use dedicated network ACL (not default) and custom rules for redshift subnets. This parameter is required.
         */
        public Builder redshiftDedicatedNetworkAcl(final java.lang.Boolean redshiftDedicatedNetworkAcl) {
            this.config().redshiftDedicatedNetworkAcl(redshiftDedicatedNetworkAcl);
            return this;
        }

        /**
         * Redshift subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftInboundAclRules Redshift subnets inbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftInboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> redshiftInboundAclRules) {
            this.config().redshiftInboundAclRules(redshiftInboundAclRules);
            return this;
        }

        /**
         * Redshift subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftOutboundAclRules Redshift subnets outbound network ACL rules [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftOutboundAclRules(final java.util.List<? extends java.util.Map<java.lang.String, java.lang.String>> redshiftOutboundAclRules) {
            this.config().redshiftOutboundAclRules(redshiftOutboundAclRules);
            return this;
        }

        /**
         * Additional tags for the redshift route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftRouteTableTags Additional tags for the redshift route tables The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftRouteTableTags(final java.util.Map<java.lang.String, java.lang.String> redshiftRouteTableTags) {
            this.config().redshiftRouteTableTags(redshiftRouteTableTags);
            return this;
        }

        /**
         * Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address.
         * <p>
         * Default is <code>false</code>
         * <p>
         * @return {@code this}
         * @param redshiftSubnetAssignIpv6AddressOnCreation Specify true to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This parameter is required.
         */
        public Builder redshiftSubnetAssignIpv6AddressOnCreation(final java.lang.Boolean redshiftSubnetAssignIpv6AddressOnCreation) {
            this.config().redshiftSubnetAssignIpv6AddressOnCreation(redshiftSubnetAssignIpv6AddressOnCreation);
            return this;
        }

        /**
         * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param redshiftSubnetEnableDns64 Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. This parameter is required.
         */
        public Builder redshiftSubnetEnableDns64(final java.lang.Boolean redshiftSubnetEnableDns64) {
            this.config().redshiftSubnetEnableDns64(redshiftSubnetEnableDns64);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
         * <p>
         * Default: <code>true</code>
         * true
         * <p>
         * @return {@code this}
         * @param redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. This parameter is required.
         */
        public Builder redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch(final java.lang.Boolean redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch) {
            this.config().redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch(redshiftSubnetEnableResourceNameDnsAaaaRecordOnLaunch);
            return this;
        }

        /**
         * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param redshiftSubnetEnableResourceNameDnsARecordOnLaunch Indicates whether to respond to DNS queries for instance hostnames with DNS A records. This parameter is required.
         */
        public Builder redshiftSubnetEnableResourceNameDnsARecordOnLaunch(final java.lang.Boolean redshiftSubnetEnableResourceNameDnsARecordOnLaunch) {
            this.config().redshiftSubnetEnableResourceNameDnsARecordOnLaunch(redshiftSubnetEnableResourceNameDnsARecordOnLaunch);
            return this;
        }

        /**
         * Name of redshift subnet group.
         * <p>
         * @return {@code this}
         * @param redshiftSubnetGroupName Name of redshift subnet group. This parameter is required.
         */
        public Builder redshiftSubnetGroupName(final java.lang.String redshiftSubnetGroupName) {
            this.config().redshiftSubnetGroupName(redshiftSubnetGroupName);
            return this;
        }

        /**
         * Additional tags for the redshift subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftSubnetGroupTags Additional tags for the redshift subnet group The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftSubnetGroupTags(final java.util.Map<java.lang.String, java.lang.String> redshiftSubnetGroupTags) {
            this.config().redshiftSubnetGroupTags(redshiftSubnetGroupTags);
            return this;
        }

        /**
         * Indicates whether to create an IPv6-only subnet.
         * <p>
         * Default: <code>false</code>
         * <p>
         * @return {@code this}
         * @param redshiftSubnetIpv6Native Indicates whether to create an IPv6-only subnet. This parameter is required.
         */
        public Builder redshiftSubnetIpv6Native(final java.lang.Boolean redshiftSubnetIpv6Native) {
            this.config().redshiftSubnetIpv6Native(redshiftSubnetIpv6Native);
            return this;
        }

        /**
         * Assigns IPv6 redshift subnet id based on the Amazon provided /56 prefix base 10 integer (0-256).
         * <p>
         * Must be of equal length to the corresponding IPv4 subnet list
         * <p>
         * @return {@code this}
         * @param redshiftSubnetIpv6Prefixes Assigns IPv6 redshift subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). This parameter is required.
         */
        public Builder redshiftSubnetIpv6Prefixes(final java.util.List<java.lang.String> redshiftSubnetIpv6Prefixes) {
            this.config().redshiftSubnetIpv6Prefixes(redshiftSubnetIpv6Prefixes);
            return this;
        }

        /**
         * Explicit values to use in the Name tag on redshift subnets.
         * <p>
         * If empty, Name tags are generated
         * <p>
         * @return {@code this}
         * @param redshiftSubnetNames Explicit values to use in the Name tag on redshift subnets. This parameter is required.
         */
        public Builder redshiftSubnetNames(final java.util.List<java.lang.String> redshiftSubnetNames) {
            this.config().redshiftSubnetNames(redshiftSubnetNames);
            return this;
        }

        /**
         * The type of hostnames to assign to instances in the subnet at launch.
         * <p>
         * For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: <code>ip-name</code>, <code>resource-name</code>
         * <p>
         * @return {@code this}
         * @param redshiftSubnetPrivateDnsHostnameTypeOnLaunch The type of hostnames to assign to instances in the subnet at launch. This parameter is required.
         */
        public Builder redshiftSubnetPrivateDnsHostnameTypeOnLaunch(final java.lang.String redshiftSubnetPrivateDnsHostnameTypeOnLaunch) {
            this.config().redshiftSubnetPrivateDnsHostnameTypeOnLaunch(redshiftSubnetPrivateDnsHostnameTypeOnLaunch);
            return this;
        }

        /**
         * A list of redshift subnets inside the VPC.
         * <p>
         * @return {@code this}
         * @param redshiftSubnets A list of redshift subnets inside the VPC. This parameter is required.
         */
        public Builder redshiftSubnets(final java.util.List<java.lang.String> redshiftSubnets) {
            this.config().redshiftSubnets(redshiftSubnets);
            return this;
        }

        /**
         * Suffix to append to redshift subnets name redshift.
         * <p>
         * @return {@code this}
         * @param redshiftSubnetSuffix Suffix to append to redshift subnets name redshift. This parameter is required.
         */
        public Builder redshiftSubnetSuffix(final java.lang.String redshiftSubnetSuffix) {
            this.config().redshiftSubnetSuffix(redshiftSubnetSuffix);
            return this;
        }

        /**
         * Additional tags for the redshift subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param redshiftSubnetTags Additional tags for the redshift subnets The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder redshiftSubnetTags(final java.util.Map<java.lang.String, java.lang.String> redshiftSubnetTags) {
            this.config().redshiftSubnetTags(redshiftSubnetTags);
            return this;
        }

        /**
         * Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable.
         * <p>
         * @return {@code this}
         * @param reuseNatIps Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable. This parameter is required.
         */
        public Builder reuseNatIps(final java.lang.Boolean reuseNatIps) {
            this.config().reuseNatIps(reuseNatIps);
            return this;
        }

        /**
         * List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlocks List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool. This parameter is required.
         */
        public Builder secondaryCidrBlocks(final java.util.List<java.lang.String> secondaryCidrBlocks) {
            this.config().secondaryCidrBlocks(secondaryCidrBlocks);
            return this;
        }

        /**
         * Should be true if you want to provision a single shared NAT Gateway across all of your private networks.
         * <p>
         * @return {@code this}
         * @param singleNatGateway Should be true if you want to provision a single shared NAT Gateway across all of your private networks. This parameter is required.
         */
        public Builder singleNatGateway(final java.lang.Boolean singleNatGateway) {
            this.config().singleNatGateway(singleNatGateway);
            return this;
        }

        /**
         * A map of tags to add to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param tags A map of tags to add to all resources The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, java.lang.String> tags) {
            this.config().tags(tags);
            return this;
        }

        /**
         * Determines whether IPAM pool is used for CIDR allocation.
         * <p>
         * @return {@code this}
         * @param useIpamPool Determines whether IPAM pool is used for CIDR allocation. This parameter is required.
         */
        public Builder useIpamPool(final java.lang.Boolean useIpamPool) {
            this.config().useIpamPool(useIpamPool);
            return this;
        }

        /**
         * The ARN of the Permissions Boundary for the VPC Flow Log IAM Role.
         * <p>
         * @return {@code this}
         * @param vpcFlowLogPermissionsBoundary The ARN of the Permissions Boundary for the VPC Flow Log IAM Role. This parameter is required.
         */
        public Builder vpcFlowLogPermissionsBoundary(final java.lang.String vpcFlowLogPermissionsBoundary) {
            this.config().vpcFlowLogPermissionsBoundary(vpcFlowLogPermissionsBoundary);
            return this;
        }

        /**
         * Additional tags for the VPC Flow Logs The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param vpcFlowLogTags Additional tags for the VPC Flow Logs The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder vpcFlowLogTags(final java.util.Map<java.lang.String, java.lang.String> vpcFlowLogTags) {
            this.config().vpcFlowLogTags(vpcFlowLogTags);
            return this;
        }

        /**
         * Additional tags for the VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param vpcTags Additional tags for the VPC The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder vpcTags(final java.util.Map<java.lang.String, java.lang.String> vpcTags) {
            this.config().vpcTags(vpcTags);
            return this;
        }

        /**
         * The Availability Zone for the VPN Gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayAz The Availability Zone for the VPN Gateway. This parameter is required.
         */
        public Builder vpnGatewayAz(final java.lang.String vpnGatewayAz) {
            this.config().vpnGatewayAz(vpnGatewayAz);
            return this;
        }

        /**
         * ID of VPN Gateway to attach to the VPC.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId ID of VPN Gateway to attach to the VPC. This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.config().vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * Additional tags for the VPN gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}.
         * <p>
         * @return {@code this}
         * @param vpnGatewayTags Additional tags for the VPN gateway The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}. This parameter is required.
         */
        public Builder vpnGatewayTags(final java.util.Map<java.lang.String, java.lang.String> vpnGatewayTags) {
            this.config().vpnGatewayTags(vpnGatewayTags);
            return this;
        }

        /**
         * @return a newly built instance of {@link imports.terraform_aws_modules.aws.Vpc}.
         */
        @Override
        public imports.terraform_aws_modules.aws.Vpc build() {
            return new imports.terraform_aws_modules.aws.Vpc(
                this.scope,
                this.id,
                this.config != null ? this.config.build() : null
            );
        }

        private imports.terraform_aws_modules.aws.VpcConfig.Builder config() {
            if (this.config == null) {
                this.config = new imports.terraform_aws_modules.aws.VpcConfig.Builder();
            }
            return this.config;
        }
    }
}
