// https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventschemasRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#policy EventschemasRegistryPolicy#policy}
  */
  readonly policy: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#registry_name EventschemasRegistryPolicy#registry_name}
  */
  readonly registryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#revision_id EventschemasRegistryPolicy#revision_id}
  */
  readonly revisionId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html awscc_eventschemas_registry_policy}
*/
export class EventschemasRegistryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_eventschemas_registry_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html awscc_eventschemas_registry_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventschemasRegistryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EventschemasRegistryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eventschemas_registry_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policy = config.policy;
    this._registryName = config.registryName;
    this._revisionId = config.revisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy: { [key: string]: string } | cdktf.IResolvable;
  public get policy() {
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: { [key: string]: string } | cdktf.IResolvable) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // registry_name - computed: false, optional: false, required: true
  private _registryName: string;
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName
  }

  // revision_id - computed: false, optional: true, required: false
  private _revisionId?: string;
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }
  public set revisionId(value: string ) {
    this._revisionId = value;
  }
  public resetRevisionId() {
    this._revisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionIdInput() {
    return this._revisionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy: cdktf.hashMapper(cdktf.anyToTerraform)(this._policy),
      registry_name: cdktf.stringToTerraform(this._registryName),
      revision_id: cdktf.stringToTerraform(this._revisionId),
    };
  }
}
