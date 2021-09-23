// https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html#id DataAwsccIotDomainConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccIotDomainConfigurationAuthorizerConfig extends cdktf.ComplexComputedList {

  // allow_authorizer_override - computed: true, optional: false, required: false
  public get allowAuthorizerOverride() {
    return this.getBooleanAttribute('allow_authorizer_override');
  }

  // default_authorizer_name - computed: true, optional: false, required: false
  public get defaultAuthorizerName() {
    return this.getStringAttribute('default_authorizer_name');
  }
}

export function dataAwsccIotDomainConfigurationAuthorizerConfigToTerraform(struct?: DataAwsccIotDomainConfigurationAuthorizerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_authorizer_override: cdktf.booleanToTerraform(struct!.allowAuthorizerOverride),
    default_authorizer_name: cdktf.stringToTerraform(struct!.defaultAuthorizerName),
  }
}

export class DataAwsccIotDomainConfigurationServerCertificates extends cdktf.ComplexComputedList {

  // server_certificate_arn - computed: true, optional: false, required: false
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }

  // server_certificate_status - computed: true, optional: false, required: false
  public get serverCertificateStatus() {
    return this.getStringAttribute('server_certificate_status');
  }

  // server_certificate_status_detail - computed: true, optional: false, required: false
  public get serverCertificateStatusDetail() {
    return this.getStringAttribute('server_certificate_status_detail');
  }
}

export function dataAwsccIotDomainConfigurationServerCertificatesToTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    server_certificate_arn: cdktf.stringToTerraform(struct!.serverCertificateArn),
    server_certificate_status: cdktf.stringToTerraform(struct!.serverCertificateStatus),
    server_certificate_status_detail: cdktf.stringToTerraform(struct!.serverCertificateStatusDetail),
  }
}

export class DataAwsccIotDomainConfigurationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotDomainConfigurationTagsToTerraform(struct?: DataAwsccIotDomainConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html awscc_iot_domain_configuration}
*/
export class DataAwsccIotDomainConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_domain_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html awscc_iot_domain_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotDomainConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotDomainConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_domain_configuration',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_config - computed: true, optional: false, required: false
  public get authorizerConfig() {
    return this.interpolationForAttribute('authorizer_config') as any;
  }

  // domain_configuration_name - computed: true, optional: false, required: false
  public get domainConfigurationName() {
    return this.getStringAttribute('domain_configuration_name');
  }

  // domain_configuration_status - computed: true, optional: false, required: false
  public get domainConfigurationStatus() {
    return this.getStringAttribute('domain_configuration_status');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
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

  // server_certificate_arns - computed: true, optional: false, required: false
  public get serverCertificateArns() {
    return this.getListAttribute('server_certificate_arns');
  }

  // server_certificates - computed: true, optional: false, required: false
  public get serverCertificates() {
    return this.interpolationForAttribute('server_certificates') as any;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // validation_certificate_arn - computed: true, optional: false, required: false
  public get validationCertificateArn() {
    return this.getStringAttribute('validation_certificate_arn');
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
