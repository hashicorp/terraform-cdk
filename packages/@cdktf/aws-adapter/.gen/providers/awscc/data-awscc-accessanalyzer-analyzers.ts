// https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzers.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAccessanalyzerAnalyzersConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzers.html awscc_accessanalyzer_analyzers}
*/
export class DataAwsccAccessanalyzerAnalyzers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_accessanalyzer_analyzers";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzers.html awscc_accessanalyzer_analyzers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAccessanalyzerAnalyzersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAccessanalyzerAnalyzersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_accessanalyzer_analyzers',
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
