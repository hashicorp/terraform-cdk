// https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotfleethubApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Description, should be between 1 and 2048 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#application_description IotfleethubApplication#application_description}
  */
  readonly applicationDescription?: string;
  /**
  * Application Name, should be between 1 and 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#application_name IotfleethubApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#role_arn IotfleethubApplication#role_arn}
  */
  readonly roleArn: string;
  /**
  * A list of key-value pairs that contain metadata for the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#tags IotfleethubApplication#tags}
  */
  readonly tags?: IotfleethubApplicationTags[];
}
export interface IotfleethubApplicationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#key IotfleethubApplication#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#value IotfleethubApplication#value}
  */
  readonly value: string;
}

export function iotfleethubApplicationTagsToTerraform(struct?: IotfleethubApplicationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html awscc_iotfleethub_application}
*/
export class IotfleethubApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotfleethub_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html awscc_iotfleethub_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotfleethubApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: IotfleethubApplicationConfig) {
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
    this._applicationDescription = config.applicationDescription;
    this._applicationName = config.applicationName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
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

  // application_description - computed: false, optional: true, required: false
  private _applicationDescription?: string;
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }
  public set applicationDescription(value: string ) {
    this._applicationDescription = value;
  }
  public resetApplicationDescription() {
    this._applicationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescriptionInput() {
    return this._applicationDescription
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_last_update_date - computed: true, optional: false, required: false
  public get applicationLastUpdateDate() {
    return this.getNumberAttribute('application_last_update_date');
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName: string;
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotfleethubApplicationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotfleethubApplicationTags[] ) {
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
      application_description: cdktf.stringToTerraform(this._applicationDescription),
      application_name: cdktf.stringToTerraform(this._applicationName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(iotfleethubApplicationTagsToTerraform)(this._tags),
    };
  }
}
