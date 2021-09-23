// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotsitewiseProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the portal in which to create the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#portal_id IotsitewiseProject#portal_id}
  */
  readonly portalId: string;
  /**
  * A description for the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#project_description IotsitewiseProject#project_description}
  */
  readonly projectDescription?: string;
  /**
  * A friendly name for the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#project_name IotsitewiseProject#project_name}
  */
  readonly projectName: string;
  /**
  * A list of key-value pairs that contain metadata for the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#tags IotsitewiseProject#tags}
  */
  readonly tags?: IotsitewiseProjectTags[];
}
export interface IotsitewiseProjectTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#key IotsitewiseProject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#value IotsitewiseProject#value}
  */
  readonly value: string;
}

export function iotsitewiseProjectTagsToTerraform(struct?: IotsitewiseProjectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html awscc_iotsitewise_project}
*/
export class IotsitewiseProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html awscc_iotsitewise_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseProjectConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_project',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._portalId = config.portalId;
    this._projectDescription = config.projectDescription;
    this._projectName = config.projectName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId: string;
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId
  }

  // project_arn - computed: true, optional: false, required: false
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }

  // project_description - computed: false, optional: true, required: false
  private _projectDescription?: string;
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }
  public set projectDescription(value: string ) {
    this._projectDescription = value;
  }
  public resetProjectDescription() {
    this._projectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDescriptionInput() {
    return this._projectDescription
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewiseProjectTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewiseProjectTags[] ) {
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
      portal_id: cdktf.stringToTerraform(this._portalId),
      project_description: cdktf.stringToTerraform(this._projectDescription),
      project_name: cdktf.stringToTerraform(this._projectName),
      tags: cdktf.listMapper(iotsitewiseProjectTagsToTerraform)(this._tags),
    };
  }
}
