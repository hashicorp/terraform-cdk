// https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html#id DataAwsccServicecatalogServiceAction#id}
  */
  readonly id: string;
}
export class DataAwsccServicecatalogServiceActionDefinition extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccServicecatalogServiceActionDefinitionToTerraform(struct?: DataAwsccServicecatalogServiceActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html awscc_servicecatalog_service_action}
*/
export class DataAwsccServicecatalogServiceAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_service_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action.html awscc_servicecatalog_service_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogServiceActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogServiceActionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: true, optional: false, required: false
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }

  // definition_type - computed: true, optional: false, required: false
  public get definitionType() {
    return this.getStringAttribute('definition_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
