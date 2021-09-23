// https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#app_id AmplifyDomain#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}
  */
  readonly autoSubDomainCreationPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}
  */
  readonly autoSubDomainIamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#domain_name AmplifyDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}
  */
  readonly enableAutoSubDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#sub_domain_settings AmplifyDomain#sub_domain_settings}
  */
  readonly subDomainSettings: AmplifyDomainSubDomainSettings[];
}
export interface AmplifyDomainSubDomainSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#branch_name AmplifyDomain#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#prefix AmplifyDomain#prefix}
  */
  readonly prefix: string;
}

export function amplifyDomainSubDomainSettingsToTerraform(struct?: AmplifyDomainSubDomainSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain}
*/
export class AmplifyDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyDomainConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyDomainConfig) {
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
    this._appId = config.appId;
    this._autoSubDomainCreationPatterns = config.autoSubDomainCreationPatterns;
    this._autoSubDomainIamRole = config.autoSubDomainIamRole;
    this._domainName = config.domainName;
    this._enableAutoSubDomain = config.enableAutoSubDomain;
    this._subDomainSettings = config.subDomainSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_sub_domain_creation_patterns - computed: false, optional: true, required: false
  private _autoSubDomainCreationPatterns?: string[];
  public get autoSubDomainCreationPatterns() {
    return this.getListAttribute('auto_sub_domain_creation_patterns');
  }
  public set autoSubDomainCreationPatterns(value: string[] ) {
    this._autoSubDomainCreationPatterns = value;
  }
  public resetAutoSubDomainCreationPatterns() {
    this._autoSubDomainCreationPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubDomainCreationPatternsInput() {
    return this._autoSubDomainCreationPatterns
  }

  // auto_sub_domain_iam_role - computed: false, optional: true, required: false
  private _autoSubDomainIamRole?: string;
  public get autoSubDomainIamRole() {
    return this.getStringAttribute('auto_sub_domain_iam_role');
  }
  public set autoSubDomainIamRole(value: string ) {
    this._autoSubDomainIamRole = value;
  }
  public resetAutoSubDomainIamRole() {
    this._autoSubDomainIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubDomainIamRoleInput() {
    return this._autoSubDomainIamRole
  }

  // certificate_record - computed: true, optional: false, required: false
  public get certificateRecord() {
    return this.getStringAttribute('certificate_record');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_status - computed: true, optional: false, required: false
  public get domainStatus() {
    return this.getStringAttribute('domain_status');
  }

  // enable_auto_sub_domain - computed: false, optional: true, required: false
  private _enableAutoSubDomain?: boolean | cdktf.IResolvable;
  public get enableAutoSubDomain() {
    return this.getBooleanAttribute('enable_auto_sub_domain');
  }
  public set enableAutoSubDomain(value: boolean | cdktf.IResolvable ) {
    this._enableAutoSubDomain = value;
  }
  public resetEnableAutoSubDomain() {
    this._enableAutoSubDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSubDomainInput() {
    return this._enableAutoSubDomain
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // sub_domain_settings - computed: false, optional: false, required: true
  private _subDomainSettings: AmplifyDomainSubDomainSettings[];
  public get subDomainSettings() {
    return this.interpolationForAttribute('sub_domain_settings') as any;
  }
  public set subDomainSettings(value: AmplifyDomainSubDomainSettings[]) {
    this._subDomainSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainSettingsInput() {
    return this._subDomainSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      auto_sub_domain_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoSubDomainCreationPatterns),
      auto_sub_domain_iam_role: cdktf.stringToTerraform(this._autoSubDomainIamRole),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable_auto_sub_domain: cdktf.booleanToTerraform(this._enableAutoSubDomain),
      sub_domain_settings: cdktf.listMapper(amplifyDomainSubDomainSettingsToTerraform)(this._subDomainSettings),
    };
  }
}
