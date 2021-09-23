// https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#authorizer_config IotDomainConfiguration#authorizer_config}
  */
  readonly authorizerConfig?: IotDomainConfigurationAuthorizerConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_configuration_name IotDomainConfiguration#domain_configuration_name}
  */
  readonly domainConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_configuration_status IotDomainConfiguration#domain_configuration_status}
  */
  readonly domainConfigurationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_name IotDomainConfiguration#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#server_certificate_arns IotDomainConfiguration#server_certificate_arns}
  */
  readonly serverCertificateArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#service_type IotDomainConfiguration#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#tags IotDomainConfiguration#tags}
  */
  readonly tags?: IotDomainConfigurationTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}
  */
  readonly validationCertificateArn?: string;
}
export interface IotDomainConfigurationAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}
  */
  readonly allowAuthorizerOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#default_authorizer_name IotDomainConfiguration#default_authorizer_name}
  */
  readonly defaultAuthorizerName?: string;
}

export function iotDomainConfigurationAuthorizerConfigToTerraform(struct?: IotDomainConfigurationAuthorizerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_authorizer_override: cdktf.booleanToTerraform(struct!.allowAuthorizerOverride),
    default_authorizer_name: cdktf.stringToTerraform(struct!.defaultAuthorizerName),
  }
}

export class IotDomainConfigurationServerCertificates extends cdktf.ComplexComputedList {

  // server_certificate_arn - computed: true, optional: true, required: false
  private _serverCertificateArn?: string;
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }
  public resetServerCertificateArn() {
    this._serverCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnInput() {
    return this._serverCertificateArn
  }

  // server_certificate_status - computed: true, optional: true, required: false
  private _serverCertificateStatus?: string;
  public get serverCertificateStatus() {
    return this.getStringAttribute('server_certificate_status');
  }
  public set serverCertificateStatus(value: string) {
    this._serverCertificateStatus = value;
  }
  public resetServerCertificateStatus() {
    this._serverCertificateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateStatusInput() {
    return this._serverCertificateStatus
  }

  // server_certificate_status_detail - computed: true, optional: true, required: false
  private _serverCertificateStatusDetail?: string;
  public get serverCertificateStatusDetail() {
    return this.getStringAttribute('server_certificate_status_detail');
  }
  public set serverCertificateStatusDetail(value: string) {
    this._serverCertificateStatusDetail = value;
  }
  public resetServerCertificateStatusDetail() {
    this._serverCertificateStatusDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateStatusDetailInput() {
    return this._serverCertificateStatusDetail
  }
}

export function iotDomainConfigurationServerCertificatesToTerraform(struct?: IotDomainConfigurationServerCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    server_certificate_arn: cdktf.stringToTerraform(struct!.serverCertificateArn),
    server_certificate_status: cdktf.stringToTerraform(struct!.serverCertificateStatus),
    server_certificate_status_detail: cdktf.stringToTerraform(struct!.serverCertificateStatusDetail),
  }
}

export interface IotDomainConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#key IotDomainConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#value IotDomainConfiguration#value}
  */
  readonly value: string;
}

export function iotDomainConfigurationTagsToTerraform(struct?: IotDomainConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html awscc_iot_domain_configuration}
*/
export class IotDomainConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_domain_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html awscc_iot_domain_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDomainConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotDomainConfigurationConfig = {}) {
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
    this._authorizerConfig = config.authorizerConfig;
    this._domainConfigurationName = config.domainConfigurationName;
    this._domainConfigurationStatus = config.domainConfigurationStatus;
    this._domainName = config.domainName;
    this._serverCertificateArns = config.serverCertificateArns;
    this._serviceType = config.serviceType;
    this._tags = config.tags;
    this._validationCertificateArn = config.validationCertificateArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_config - computed: false, optional: true, required: false
  private _authorizerConfig?: IotDomainConfigurationAuthorizerConfig;
  public get authorizerConfig() {
    return this.interpolationForAttribute('authorizer_config') as any;
  }
  public set authorizerConfig(value: IotDomainConfigurationAuthorizerConfig ) {
    this._authorizerConfig = value;
  }
  public resetAuthorizerConfig() {
    this._authorizerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigInput() {
    return this._authorizerConfig
  }

  // domain_configuration_name - computed: true, optional: true, required: false
  private _domainConfigurationName?: string;
  public get domainConfigurationName() {
    return this.getStringAttribute('domain_configuration_name');
  }
  public set domainConfigurationName(value: string) {
    this._domainConfigurationName = value;
  }
  public resetDomainConfigurationName() {
    this._domainConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainConfigurationNameInput() {
    return this._domainConfigurationName
  }

  // domain_configuration_status - computed: false, optional: true, required: false
  private _domainConfigurationStatus?: string;
  public get domainConfigurationStatus() {
    return this.getStringAttribute('domain_configuration_status');
  }
  public set domainConfigurationStatus(value: string ) {
    this._domainConfigurationStatus = value;
  }
  public resetDomainConfigurationStatus() {
    this._domainConfigurationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainConfigurationStatusInput() {
    return this._domainConfigurationStatus
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

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_certificate_arns - computed: true, optional: true, required: false
  private _serverCertificateArns?: string[];
  public get serverCertificateArns() {
    return this.getListAttribute('server_certificate_arns');
  }
  public set serverCertificateArns(value: string[]) {
    this._serverCertificateArns = value;
  }
  public resetServerCertificateArns() {
    this._serverCertificateArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnsInput() {
    return this._serverCertificateArns
  }

  // server_certificates - computed: true, optional: false, required: false
  public get serverCertificates() {
    return this.interpolationForAttribute('server_certificates') as any;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string;
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotDomainConfigurationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotDomainConfigurationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // validation_certificate_arn - computed: true, optional: true, required: false
  private _validationCertificateArn?: string;
  public get validationCertificateArn() {
    return this.getStringAttribute('validation_certificate_arn');
  }
  public set validationCertificateArn(value: string) {
    this._validationCertificateArn = value;
  }
  public resetValidationCertificateArn() {
    this._validationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCertificateArnInput() {
    return this._validationCertificateArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_config: iotDomainConfigurationAuthorizerConfigToTerraform(this._authorizerConfig),
      domain_configuration_name: cdktf.stringToTerraform(this._domainConfigurationName),
      domain_configuration_status: cdktf.stringToTerraform(this._domainConfigurationStatus),
      domain_name: cdktf.stringToTerraform(this._domainName),
      server_certificate_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._serverCertificateArns),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tags: cdktf.listMapper(iotDomainConfigurationTagsToTerraform)(this._tags),
      validation_certificate_arn: cdktf.stringToTerraform(this._validationCertificateArn),
    };
  }
}
