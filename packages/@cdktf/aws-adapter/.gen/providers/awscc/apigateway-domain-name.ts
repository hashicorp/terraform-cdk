// https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#certificate_arn ApigatewayDomainName#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#domain_name ApigatewayDomainName#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#endpoint_configuration ApigatewayDomainName#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApigatewayDomainNameEndpointConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: ApigatewayDomainNameMutualTlsAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#ownership_verification_certificate_arn ApigatewayDomainName#ownership_verification_certificate_arn}
  */
  readonly ownershipVerificationCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}
  */
  readonly regionalCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#security_policy ApigatewayDomainName#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#tags ApigatewayDomainName#tags}
  */
  readonly tags?: ApigatewayDomainNameTags[];
}
export interface ApigatewayDomainNameEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#types ApigatewayDomainName#types}
  */
  readonly types?: string[];
}

export function apigatewayDomainNameEndpointConfigurationToTerraform(struct?: ApigatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
  }
}

export interface ApigatewayDomainNameMutualTlsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#truststore_uri ApigatewayDomainName#truststore_uri}
  */
  readonly truststoreUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#truststore_version ApigatewayDomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}

export function apigatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApigatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}

export interface ApigatewayDomainNameTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#key ApigatewayDomainName#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#value ApigatewayDomainName#value}
  */
  readonly value?: string;
}

export function apigatewayDomainNameTagsToTerraform(struct?: ApigatewayDomainNameTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name}
*/
export class ApigatewayDomainName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_domain_name";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayDomainNameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApigatewayDomainNameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._domainName = config.domainName;
    this._endpointConfiguration = config.endpointConfiguration;
    this._mutualTlsAuthentication = config.mutualTlsAuthentication;
    this._ownershipVerificationCertificateArn = config.ownershipVerificationCertificateArn;
    this._regionalCertificateArn = config.regionalCertificateArn;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string ) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // distribution_domain_name - computed: true, optional: false, required: false
  public get distributionDomainName() {
    return this.getStringAttribute('distribution_domain_name');
  }

  // distribution_hosted_zone_id - computed: true, optional: false, required: false
  public get distributionHostedZoneId() {
    return this.getStringAttribute('distribution_hosted_zone_id');
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApigatewayDomainNameEndpointConfiguration;
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: ApigatewayDomainNameEndpointConfiguration ) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication?: ApigatewayDomainNameMutualTlsAuthentication;
  public get mutualTlsAuthentication() {
    return this.interpolationForAttribute('mutual_tls_authentication') as any;
  }
  public set mutualTlsAuthentication(value: ApigatewayDomainNameMutualTlsAuthentication ) {
    this._mutualTlsAuthentication = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication
  }

  // ownership_verification_certificate_arn - computed: false, optional: true, required: false
  private _ownershipVerificationCertificateArn?: string;
  public get ownershipVerificationCertificateArn() {
    return this.getStringAttribute('ownership_verification_certificate_arn');
  }
  public set ownershipVerificationCertificateArn(value: string ) {
    this._ownershipVerificationCertificateArn = value;
  }
  public resetOwnershipVerificationCertificateArn() {
    this._ownershipVerificationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipVerificationCertificateArnInput() {
    return this._ownershipVerificationCertificateArn
  }

  // regional_certificate_arn - computed: false, optional: true, required: false
  private _regionalCertificateArn?: string;
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }
  public set regionalCertificateArn(value: string ) {
    this._regionalCertificateArn = value;
  }
  public resetRegionalCertificateArn() {
    this._regionalCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateArnInput() {
    return this._regionalCertificateArn
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_hosted_zone_id - computed: true, optional: false, required: false
  public get regionalHostedZoneId() {
    return this.getStringAttribute('regional_hosted_zone_id');
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string;
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string ) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ApigatewayDomainNameTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApigatewayDomainNameTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      domain_name: cdktf.stringToTerraform(this._domainName),
      endpoint_configuration: apigatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration),
      mutual_tls_authentication: apigatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication),
      ownership_verification_certificate_arn: cdktf.stringToTerraform(this._ownershipVerificationCertificateArn),
      regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      tags: cdktf.listMapper(apigatewayDomainNameTagsToTerraform)(this._tags),
    };
  }
}
