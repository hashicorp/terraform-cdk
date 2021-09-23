// https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAppintegrationsEventIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html#id DataAwsccAppintegrationsEventIntegration#id}
  */
  readonly id: string;
}
export class DataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadata extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAppintegrationsEventIntegrationAssociations extends cdktf.ComplexComputedList {

  // client_association_metadata - computed: true, optional: false, required: false
  public get clientAssociationMetadata() {
    return this.interpolationForAttribute('client_association_metadata') as any;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // event_bridge_rule_name - computed: true, optional: false, required: false
  public get eventBridgeRuleName() {
    return this.getStringAttribute('event_bridge_rule_name');
  }

  // event_integration_association_arn - computed: true, optional: false, required: false
  public get eventIntegrationAssociationArn() {
    return this.getStringAttribute('event_integration_association_arn');
  }

  // event_integration_association_id - computed: true, optional: false, required: false
  public get eventIntegrationAssociationId() {
    return this.getStringAttribute('event_integration_association_id');
  }
}

export function dataAwsccAppintegrationsEventIntegrationAssociationsToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_association_metadata: cdktf.listMapper(dataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform)(struct!.clientAssociationMetadata),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    event_bridge_rule_name: cdktf.stringToTerraform(struct!.eventBridgeRuleName),
    event_integration_association_arn: cdktf.stringToTerraform(struct!.eventIntegrationAssociationArn),
    event_integration_association_id: cdktf.stringToTerraform(struct!.eventIntegrationAssociationId),
  }
}

export class DataAwsccAppintegrationsEventIntegrationEventFilter extends cdktf.ComplexComputedList {

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export function dataAwsccAppintegrationsEventIntegrationEventFilterToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationEventFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class DataAwsccAppintegrationsEventIntegrationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAppintegrationsEventIntegrationTagsToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html awscc_appintegrations_event_integration}
*/
export class DataAwsccAppintegrationsEventIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appintegrations_event_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html awscc_appintegrations_event_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppintegrationsEventIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppintegrationsEventIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appintegrations_event_integration',
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

  // associations - computed: true, optional: false, required: false
  public get associations() {
    return this.interpolationForAttribute('associations') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_bridge_bus - computed: true, optional: false, required: false
  public get eventBridgeBus() {
    return this.getStringAttribute('event_bridge_bus');
  }

  // event_filter - computed: true, optional: false, required: false
  public get eventFilter() {
    return this.interpolationForAttribute('event_filter') as any;
  }

  // event_integration_arn - computed: true, optional: false, required: false
  public get eventIntegrationArn() {
    return this.getStringAttribute('event_integration_arn');
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
