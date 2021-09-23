// https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinspaceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#description FinspaceEnvironment#description}
  */
  readonly description?: string;
  /**
  * Federation mode used with the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_mode FinspaceEnvironment#federation_mode}
  */
  readonly federationMode?: string;
  /**
  * Additional parameters to identify Federation mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_parameters FinspaceEnvironment#federation_parameters}
  */
  readonly federationParameters?: FinspaceEnvironmentFederationParameters;
  /**
  * KMS key used to encrypt customer data within FinSpace Environment infrastructure
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#kms_key_id FinspaceEnvironment#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Name of the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#name FinspaceEnvironment#name}
  */
  readonly name: string;
}
export interface FinspaceEnvironmentFederationParameters {
  /**
  * SAML metadata URL to link with the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#application_call_back_url FinspaceEnvironment#application_call_back_url}
  */
  readonly applicationCallBackUrl?: string;
  /**
  * Attribute map for SAML configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#attribute_map FinspaceEnvironment#attribute_map}
  */
  readonly attributeMap?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Federation provider name to link with the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_provider_name FinspaceEnvironment#federation_provider_name}
  */
  readonly federationProviderName?: string;
  /**
  * SAML metadata URL to link with the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_urn FinspaceEnvironment#federation_urn}
  */
  readonly federationUrn?: string;
  /**
  * SAML metadata document to link the federation provider to the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#saml_metadata_document FinspaceEnvironment#saml_metadata_document}
  */
  readonly samlMetadataDocument?: string;
  /**
  * SAML metadata URL to link with the Environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#saml_metadata_url FinspaceEnvironment#saml_metadata_url}
  */
  readonly samlMetadataUrl?: string;
}

export function finspaceEnvironmentFederationParametersToTerraform(struct?: FinspaceEnvironmentFederationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_call_back_url: cdktf.stringToTerraform(struct!.applicationCallBackUrl),
    attribute_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributeMap),
    federation_provider_name: cdktf.stringToTerraform(struct!.federationProviderName),
    federation_urn: cdktf.stringToTerraform(struct!.federationUrn),
    saml_metadata_document: cdktf.stringToTerraform(struct!.samlMetadataDocument),
    saml_metadata_url: cdktf.stringToTerraform(struct!.samlMetadataUrl),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html awscc_finspace_environment}
*/
export class FinspaceEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_finspace_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html awscc_finspace_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinspaceEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: FinspaceEnvironmentConfig) {
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
    this._description = config.description;
    this._federationMode = config.federationMode;
    this._federationParameters = config.federationParameters;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // federation_mode - computed: false, optional: true, required: false
  private _federationMode?: string;
  public get federationMode() {
    return this.getStringAttribute('federation_mode');
  }
  public set federationMode(value: string ) {
    this._federationMode = value;
  }
  public resetFederationMode() {
    this._federationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationModeInput() {
    return this._federationMode
  }

  // federation_parameters - computed: false, optional: true, required: false
  private _federationParameters?: FinspaceEnvironmentFederationParameters;
  public get federationParameters() {
    return this.interpolationForAttribute('federation_parameters') as any;
  }
  public set federationParameters(value: FinspaceEnvironmentFederationParameters ) {
    this._federationParameters = value;
  }
  public resetFederationParameters() {
    this._federationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationParametersInput() {
    return this._federationParameters
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
      description: cdktf.stringToTerraform(this._description),
      federation_mode: cdktf.stringToTerraform(this._federationMode),
      federation_parameters: finspaceEnvironmentFederationParametersToTerraform(this._federationParameters),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
