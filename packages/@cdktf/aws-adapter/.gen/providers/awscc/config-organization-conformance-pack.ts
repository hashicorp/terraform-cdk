// https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of ConformancePackInputParameter objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}
  */
  readonly conformancePackInputParameters?: ConfigOrganizationConformancePackConformancePackInputParameters[];
  /**
  * AWS Config stores intermediate files while processing conformance pack template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
  */
  readonly deliveryS3Bucket?: string;
  /**
  * The prefix for the delivery S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
  */
  readonly deliveryS3KeyPrefix?: string;
  /**
  * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * The name of the organization conformance pack.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}
  */
  readonly organizationConformancePackName: string;
  /**
  * A string containing full conformance pack template body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#template_body ConfigOrganizationConformancePack#template_body}
  */
  readonly templateBody?: string;
  /**
  * Location of file containing the template body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
  */
  readonly templateS3Uri?: string;
}
export interface ConfigOrganizationConformancePackConformancePackInputParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#parameter_name ConfigOrganizationConformancePack#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#parameter_value ConfigOrganizationConformancePack#parameter_value}
  */
  readonly parameterValue: string;
}

export function configOrganizationConformancePackConformancePackInputParametersToTerraform(struct?: ConfigOrganizationConformancePackConformancePackInputParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html awscc_config_organization_conformance_pack}
*/
export class ConfigOrganizationConformancePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_organization_conformance_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html awscc_config_organization_conformance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigOrganizationConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_organization_conformance_pack',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._conformancePackInputParameters = config.conformancePackInputParameters;
    this._deliveryS3Bucket = config.deliveryS3Bucket;
    this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
    this._excludedAccounts = config.excludedAccounts;
    this._organizationConformancePackName = config.organizationConformancePackName;
    this._templateBody = config.templateBody;
    this._templateS3Uri = config.templateS3Uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conformance_pack_input_parameters - computed: false, optional: true, required: false
  private _conformancePackInputParameters?: ConfigOrganizationConformancePackConformancePackInputParameters[];
  public get conformancePackInputParameters() {
    return this.interpolationForAttribute('conformance_pack_input_parameters') as any;
  }
  public set conformancePackInputParameters(value: ConfigOrganizationConformancePackConformancePackInputParameters[] ) {
    this._conformancePackInputParameters = value;
  }
  public resetConformancePackInputParameters() {
    this._conformancePackInputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformancePackInputParametersInput() {
    return this._conformancePackInputParameters
  }

  // delivery_s3_bucket - computed: false, optional: true, required: false
  private _deliveryS3Bucket?: string;
  public get deliveryS3Bucket() {
    return this.getStringAttribute('delivery_s3_bucket');
  }
  public set deliveryS3Bucket(value: string ) {
    this._deliveryS3Bucket = value;
  }
  public resetDeliveryS3Bucket() {
    this._deliveryS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3BucketInput() {
    return this._deliveryS3Bucket
  }

  // delivery_s3_key_prefix - computed: false, optional: true, required: false
  private _deliveryS3KeyPrefix?: string;
  public get deliveryS3KeyPrefix() {
    return this.getStringAttribute('delivery_s3_key_prefix');
  }
  public set deliveryS3KeyPrefix(value: string ) {
    this._deliveryS3KeyPrefix = value;
  }
  public resetDeliveryS3KeyPrefix() {
    this._deliveryS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3KeyPrefixInput() {
    return this._deliveryS3KeyPrefix
  }

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[];
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[] ) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_conformance_pack_name - computed: false, optional: false, required: true
  private _organizationConformancePackName: string;
  public get organizationConformancePackName() {
    return this.getStringAttribute('organization_conformance_pack_name');
  }
  public set organizationConformancePackName(value: string) {
    this._organizationConformancePackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationConformancePackNameInput() {
    return this._organizationConformancePackName
  }

  // template_body - computed: false, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string ) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // template_s3_uri - computed: false, optional: true, required: false
  private _templateS3Uri?: string;
  public get templateS3Uri() {
    return this.getStringAttribute('template_s3_uri');
  }
  public set templateS3Uri(value: string ) {
    this._templateS3Uri = value;
  }
  public resetTemplateS3Uri() {
    this._templateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateS3UriInput() {
    return this._templateS3Uri
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conformance_pack_input_parameters: cdktf.listMapper(configOrganizationConformancePackConformancePackInputParametersToTerraform)(this._conformancePackInputParameters),
      delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
      delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
      excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
      organization_conformance_pack_name: cdktf.stringToTerraform(this._organizationConformancePackName),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
    };
  }
}
