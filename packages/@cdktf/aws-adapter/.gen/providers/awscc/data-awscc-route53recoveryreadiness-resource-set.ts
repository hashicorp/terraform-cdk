// https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html#id DataAwsccRoute53RecoveryreadinessResourceSet#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource extends cdktf.ComplexComputedList {

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // record_set_id - computed: true, optional: false, required: false
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource extends cdktf.ComplexComputedList {

  // nlb_resource - computed: true, optional: false, required: false
  public get nlbResource() {
    return this.interpolationForAttribute('nlb_resource') as any;
  }

  // r53_resource - computed: true, optional: false, required: false
  public get r53Resource() {
    return this.interpolationForAttribute('r53_resource') as any;
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nlb_resource: dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct!.nlbResource),
    r53_resource: dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct!.r53Resource),
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource extends cdktf.ComplexComputedList {

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // hosted_zone_arn - computed: true, optional: false, required: false
  public get hostedZoneArn() {
    return this.getStringAttribute('hosted_zone_arn');
  }

  // record_set_id - computed: true, optional: false, required: false
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // target_resource - computed: true, optional: false, required: false
  public get targetResource() {
    return this.interpolationForAttribute('target_resource') as any;
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    hosted_zone_arn: cdktf.stringToTerraform(struct!.hostedZoneArn),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    target_resource: dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct!.targetResource),
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResources extends cdktf.ComplexComputedList {

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // dns_target_resource - computed: true, optional: false, required: false
  public get dnsTargetResource() {
    return this.interpolationForAttribute('dns_target_resource') as any;
  }

  // readiness_scopes - computed: true, optional: false, required: false
  public get readinessScopes() {
    return this.getListAttribute('readiness_scopes');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_id: cdktf.stringToTerraform(struct!.componentId),
    dns_target_resource: dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct!.dnsTargetResource),
    readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.readinessScopes),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export function dataAwsccRoute53RecoveryreadinessResourceSetTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set}
*/
export class DataAwsccRoute53RecoveryreadinessResourceSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoveryreadiness_resource_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoveryreadinessResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_resource_set',
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

  // resource_set_arn - computed: true, optional: false, required: false
  public get resourceSetArn() {
    return this.getStringAttribute('resource_set_arn');
  }

  // resource_set_name - computed: true, optional: false, required: false
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }

  // resource_set_type - computed: true, optional: false, required: false
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.interpolationForAttribute('resources') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
