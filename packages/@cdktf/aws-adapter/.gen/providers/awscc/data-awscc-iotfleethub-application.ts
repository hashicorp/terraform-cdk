// https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotfleethubApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html#id DataAwsccIotfleethubApplication#id}
  */
  readonly id: string;
}
export class DataAwsccIotfleethubApplicationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotfleethubApplicationTagsToTerraform(struct?: DataAwsccIotfleethubApplicationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html awscc_iotfleethub_application}
*/
export class DataAwsccIotfleethubApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotfleethub_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html awscc_iotfleethub_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotfleethubApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotfleethubApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotfleethub_application',
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

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_creation_date - computed: true, optional: false, required: false
  public get applicationCreationDate() {
    return this.getNumberAttribute('application_creation_date');
  }

  // application_description - computed: true, optional: false, required: false
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_last_update_date - computed: true, optional: false, required: false
  public get applicationLastUpdateDate() {
    return this.getNumberAttribute('application_last_update_date');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_state - computed: true, optional: false, required: false
  public get applicationState() {
    return this.getStringAttribute('application_state');
  }

  // application_url - computed: true, optional: false, required: false
  public get applicationUrl() {
    return this.getStringAttribute('application_url');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
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
