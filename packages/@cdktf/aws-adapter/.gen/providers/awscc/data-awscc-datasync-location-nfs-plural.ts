// https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs_plural.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncLocationNfsPluralConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs_plural.html awscc_datasync_location_nfs_plural}
*/
export class DataAwsccDatasyncLocationNfsPlural extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_nfs_plural";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs_plural.html awscc_datasync_location_nfs_plural} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationNfsPluralConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationNfsPluralConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_nfs_plural',
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
