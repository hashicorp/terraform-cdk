// https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html#id DataAwsccConfigOrganizationConformancePack#id}
  */
  readonly id: string;
}
export class DataAwsccConfigOrganizationConformancePackConformancePackInputParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccConfigOrganizationConformancePackConformancePackInputParametersToTerraform(struct?: DataAwsccConfigOrganizationConformancePackConformancePackInputParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html awscc_config_organization_conformance_pack}
*/
export class DataAwsccConfigOrganizationConformancePack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_organization_conformance_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html awscc_config_organization_conformance_pack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigOrganizationConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigOrganizationConformancePackConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conformance_pack_input_parameters - computed: true, optional: false, required: false
  public get conformancePackInputParameters() {
    return this.interpolationForAttribute('conformance_pack_input_parameters') as any;
  }

  // delivery_s3_bucket - computed: true, optional: false, required: false
  public get deliveryS3Bucket() {
    return this.getStringAttribute('delivery_s3_bucket');
  }

  // delivery_s3_key_prefix - computed: true, optional: false, required: false
  public get deliveryS3KeyPrefix() {
    return this.getStringAttribute('delivery_s3_key_prefix');
  }

  // excluded_accounts - computed: true, optional: false, required: false
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
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

  // organization_conformance_pack_name - computed: true, optional: false, required: false
  public get organizationConformancePackName() {
    return this.getStringAttribute('organization_conformance_pack_name');
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // template_s3_uri - computed: true, optional: false, required: false
  public get templateS3Uri() {
    return this.getStringAttribute('template_s3_uri');
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
