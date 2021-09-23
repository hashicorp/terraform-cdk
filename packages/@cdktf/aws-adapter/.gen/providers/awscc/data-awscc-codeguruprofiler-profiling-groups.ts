// https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCodeguruprofilerProfilingGroupsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_groups.html awscc_codeguruprofiler_profiling_groups}
*/
export class DataAwsccCodeguruprofilerProfilingGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codeguruprofiler_profiling_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_groups.html awscc_codeguruprofiler_profiling_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodeguruprofilerProfilingGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodeguruprofilerProfilingGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeguruprofiler_profiling_groups',
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
