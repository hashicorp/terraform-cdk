// https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the ReadinessCheck to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
  */
  readonly readinessCheckName: string;
  /**
  * The name of the resource set to check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
  */
  readonly resourceSetName?: string;
  /**
  * A collection of tags associated with a resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#tags Route53RecoveryreadinessReadinessCheck#tags}
  */
  readonly tags?: Route53RecoveryreadinessReadinessCheckTags[];
}
export interface Route53RecoveryreadinessReadinessCheckTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#key Route53RecoveryreadinessReadinessCheck#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#value Route53RecoveryreadinessReadinessCheck#value}
  */
  readonly value: string[];
}

export function route53RecoveryreadinessReadinessCheckTagsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check}
*/
export class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_readiness_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessReadinessCheckConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_readiness_check',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._readinessCheckName = config.readinessCheckName;
    this._resourceSetName = config.resourceSetName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // readiness_check_arn - computed: true, optional: false, required: false
  public get readinessCheckArn() {
    return this.getStringAttribute('readiness_check_arn');
  }

  // readiness_check_name - computed: false, optional: false, required: true
  private _readinessCheckName: string;
  public get readinessCheckName() {
    return this.getStringAttribute('readiness_check_name');
  }
  public set readinessCheckName(value: string) {
    this._readinessCheckName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessCheckNameInput() {
    return this._readinessCheckName
  }

  // resource_set_name - computed: false, optional: true, required: false
  private _resourceSetName?: string;
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string ) {
    this._resourceSetName = value;
  }
  public resetResourceSetName() {
    this._resourceSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Route53RecoveryreadinessReadinessCheckTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53RecoveryreadinessReadinessCheckTags[] ) {
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
      readiness_check_name: cdktf.stringToTerraform(this._readinessCheckName),
      resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
      tags: cdktf.listMapper(route53RecoveryreadinessReadinessCheckTagsToTerraform)(this._tags),
    };
  }
}
