// https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAmplifyDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html#id DataAwsccAmplifyDomain#id}
  */
  readonly id: string;
}
export class DataAwsccAmplifyDomainSubDomainSettings extends cdktf.ComplexComputedList {

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export function dataAwsccAmplifyDomainSubDomainSettingsToTerraform(struct?: DataAwsccAmplifyDomainSubDomainSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html awscc_amplify_domain}
*/
export class DataAwsccAmplifyDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html awscc_amplify_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAmplifyDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAmplifyDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_amplify_domain',
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

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_sub_domain_creation_patterns - computed: true, optional: false, required: false
  public get autoSubDomainCreationPatterns() {
    return this.getListAttribute('auto_sub_domain_creation_patterns');
  }

  // auto_sub_domain_iam_role - computed: true, optional: false, required: false
  public get autoSubDomainIamRole() {
    return this.getStringAttribute('auto_sub_domain_iam_role');
  }

  // certificate_record - computed: true, optional: false, required: false
  public get certificateRecord() {
    return this.getStringAttribute('certificate_record');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_status - computed: true, optional: false, required: false
  public get domainStatus() {
    return this.getStringAttribute('domain_status');
  }

  // enable_auto_sub_domain - computed: true, optional: false, required: false
  public get enableAutoSubDomain() {
    return this.getBooleanAttribute('enable_auto_sub_domain');
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

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // sub_domain_settings - computed: true, optional: false, required: false
  public get subDomainSettings() {
    return this.interpolationForAttribute('sub_domain_settings') as any;
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
