// https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_sets.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoveryreadinessResourceSetsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_sets.html awscc_route53recoveryreadiness_resource_sets}
*/
export class DataAwsccRoute53RecoveryreadinessResourceSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_resource_sets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_sets.html awscc_route53recoveryreadiness_resource_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoveryreadinessResourceSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessResourceSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_resource_sets',
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
