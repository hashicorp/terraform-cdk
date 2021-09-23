// https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastores.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccHealthlakeFhirDatastoresConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastores.html awscc_healthlake_fhir_datastores}
*/
export class DataAwsccHealthlakeFhirDatastores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_healthlake_fhir_datastores";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastores.html awscc_healthlake_fhir_datastores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccHealthlakeFhirDatastoresConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccHealthlakeFhirDatastoresConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_healthlake_fhir_datastores',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
