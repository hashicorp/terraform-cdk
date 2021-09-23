// https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFinspaceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html#id DataAwsccFinspaceEnvironment#id}
  */
  readonly id: string;
}
export class DataAwsccFinspaceEnvironmentFederationParameters extends cdktf.ComplexComputedList {

  // application_call_back_url - computed: true, optional: false, required: false
  public get applicationCallBackUrl() {
    return this.getStringAttribute('application_call_back_url');
  }

  // attribute_map - computed: true, optional: false, required: false
  public get attributeMap() {
    return this.interpolationForAttribute('attribute_map') as any;
  }

  // federation_provider_name - computed: true, optional: false, required: false
  public get federationProviderName() {
    return this.getStringAttribute('federation_provider_name');
  }

  // federation_urn - computed: true, optional: false, required: false
  public get federationUrn() {
    return this.getStringAttribute('federation_urn');
  }

  // saml_metadata_document - computed: true, optional: false, required: false
  public get samlMetadataDocument() {
    return this.getStringAttribute('saml_metadata_document');
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }
}

export function dataAwsccFinspaceEnvironmentFederationParametersToTerraform(struct?: DataAwsccFinspaceEnvironmentFederationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_call_back_url: cdktf.stringToTerraform(struct!.applicationCallBackUrl),
    attribute_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributeMap),
    federation_provider_name: cdktf.stringToTerraform(struct!.federationProviderName),
    federation_urn: cdktf.stringToTerraform(struct!.federationUrn),
    saml_metadata_document: cdktf.stringToTerraform(struct!.samlMetadataDocument),
    saml_metadata_url: cdktf.stringToTerraform(struct!.samlMetadataUrl),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html awscc_finspace_environment}
*/
export class DataAwsccFinspaceEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_finspace_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html awscc_finspace_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFinspaceEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFinspaceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_finspace_environment',
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

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // dedicated_service_account_id - computed: true, optional: false, required: false
  public get dedicatedServiceAccountId() {
    return this.getStringAttribute('dedicated_service_account_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_arn - computed: true, optional: false, required: false
  public get environmentArn() {
    return this.getStringAttribute('environment_arn');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_url - computed: true, optional: false, required: false
  public get environmentUrl() {
    return this.getStringAttribute('environment_url');
  }

  // federation_mode - computed: true, optional: false, required: false
  public get federationMode() {
    return this.getStringAttribute('federation_mode');
  }

  // federation_parameters - computed: true, optional: false, required: false
  public get federationParameters() {
    return this.interpolationForAttribute('federation_parameters') as any;
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sage_maker_studio_domain_url - computed: true, optional: false, required: false
  public get sageMakerStudioDomainUrl() {
    return this.getStringAttribute('sage_maker_studio_domain_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
