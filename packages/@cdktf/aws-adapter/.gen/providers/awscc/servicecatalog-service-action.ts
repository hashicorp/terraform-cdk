// https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#accept_language ServicecatalogServiceAction#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#definition ServicecatalogServiceAction#definition}
  */
  readonly definition: ServicecatalogServiceActionDefinition[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#definition_type ServicecatalogServiceAction#definition_type}
  */
  readonly definitionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#description ServicecatalogServiceAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
  */
  readonly name: string;
}
export interface ServicecatalogServiceActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#key ServicecatalogServiceAction#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#value ServicecatalogServiceAction#value}
  */
  readonly value: string;
}

export function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html awscc_servicecatalog_service_action}
*/
export class ServicecatalogServiceAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_service_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html awscc_servicecatalog_service_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogServiceActionConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogServiceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_service_action',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._definition = config.definition;
    this._definitionType = config.definitionType;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // definition - computed: false, optional: false, required: true
  private _definition: ServicecatalogServiceActionDefinition[];
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: ServicecatalogServiceActionDefinition[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // definition_type - computed: false, optional: false, required: true
  private _definitionType: string;
  public get definitionType() {
    return this.getStringAttribute('definition_type');
  }
  public set definitionType(value: string) {
    this._definitionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionTypeInput() {
    return this._definitionType
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      definition: cdktf.listMapper(servicecatalogServiceActionDefinitionToTerraform)(this._definition),
      definition_type: cdktf.stringToTerraform(this._definitionType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
