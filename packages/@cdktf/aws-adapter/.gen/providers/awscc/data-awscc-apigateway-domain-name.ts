// https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApigatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html#id DataAwsccApigatewayDomainName#id}
  */
  readonly id: string;
}
export class DataAwsccApigatewayDomainNameEndpointConfiguration extends cdktf.ComplexComputedList {

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}

export function dataAwsccApigatewayDomainNameEndpointConfigurationToTerraform(struct?: DataAwsccApigatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
  }
}

export class DataAwsccApigatewayDomainNameMutualTlsAuthentication extends cdktf.ComplexComputedList {

  // truststore_uri - computed: true, optional: false, required: false
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }

  // truststore_version - computed: true, optional: false, required: false
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
}

export function dataAwsccApigatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: DataAwsccApigatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}

export class DataAwsccApigatewayDomainNameTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApigatewayDomainNameTagsToTerraform(struct?: DataAwsccApigatewayDomainNameTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html awscc_apigateway_domain_name}
*/
export class DataAwsccApigatewayDomainName extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_domain_name";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html awscc_apigateway_domain_name} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayDomainNameConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // distribution_domain_name - computed: true, optional: false, required: false
  public get distributionDomainName() {
    return this.getStringAttribute('distribution_domain_name');
  }

  // distribution_hosted_zone_id - computed: true, optional: false, required: false
  public get distributionHostedZoneId() {
    return this.getStringAttribute('distribution_hosted_zone_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // mutual_tls_authentication - computed: true, optional: false, required: false
  public get mutualTlsAuthentication() {
    return this.interpolationForAttribute('mutual_tls_authentication') as any;
  }

  // ownership_verification_certificate_arn - computed: true, optional: false, required: false
  public get ownershipVerificationCertificateArn() {
    return this.getStringAttribute('ownership_verification_certificate_arn');
  }

  // regional_certificate_arn - computed: true, optional: false, required: false
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_hosted_zone_id - computed: true, optional: false, required: false
  public get regionalHostedZoneId() {
    return this.getStringAttribute('regional_hosted_zone_id');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
