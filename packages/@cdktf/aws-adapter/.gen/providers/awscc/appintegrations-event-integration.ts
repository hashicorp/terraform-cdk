// https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppintegrationsEventIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The event integration description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#description AppintegrationsEventIntegration#description}
  */
  readonly description?: string;
  /**
  * The Amazon Eventbridge bus for the event integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#event_bridge_bus AppintegrationsEventIntegration#event_bridge_bus}
  */
  readonly eventBridgeBus: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#event_filter AppintegrationsEventIntegration#event_filter}
  */
  readonly eventFilter: AppintegrationsEventIntegrationEventFilter;
  /**
  * The name of the event integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#name AppintegrationsEventIntegration#name}
  */
  readonly name: string;
  /**
  * The tags (keys and values) associated with the event integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#tags AppintegrationsEventIntegration#tags}
  */
  readonly tags?: AppintegrationsEventIntegrationTags[];
}
export interface AppintegrationsEventIntegrationAssociationsClientAssociationMetadata {
  /**
  * A key to identify the metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#key AppintegrationsEventIntegration#key}
  */
  readonly key: string;
  /**
  * Corresponding metadata value for the key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#value AppintegrationsEventIntegration#value}
  */
  readonly value: string;
}

export function appintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform(struct?: AppintegrationsEventIntegrationAssociationsClientAssociationMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AppintegrationsEventIntegrationAssociations extends cdktf.ComplexComputedList {

  // client_association_metadata - computed: true, optional: true, required: false
  private _clientAssociationMetadata?: AppintegrationsEventIntegrationAssociationsClientAssociationMetadata[];
  public get clientAssociationMetadata() {
    return this.interpolationForAttribute('client_association_metadata') as any;
  }
  public set clientAssociationMetadata(value: AppintegrationsEventIntegrationAssociationsClientAssociationMetadata[]) {
    this._clientAssociationMetadata = value;
  }
  public resetClientAssociationMetadata() {
    this._clientAssociationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssociationMetadataInput() {
    return this._clientAssociationMetadata
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // event_bridge_rule_name - computed: true, optional: true, required: false
  private _eventBridgeRuleName?: string;
  public get eventBridgeRuleName() {
    return this.getStringAttribute('event_bridge_rule_name');
  }
  public set eventBridgeRuleName(value: string) {
    this._eventBridgeRuleName = value;
  }
  public resetEventBridgeRuleName() {
    this._eventBridgeRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeRuleNameInput() {
    return this._eventBridgeRuleName
  }

  // event_integration_association_arn - computed: true, optional: true, required: false
  private _eventIntegrationAssociationArn?: string;
  public get eventIntegrationAssociationArn() {
    return this.getStringAttribute('event_integration_association_arn');
  }
  public set eventIntegrationAssociationArn(value: string) {
    this._eventIntegrationAssociationArn = value;
  }
  public resetEventIntegrationAssociationArn() {
    this._eventIntegrationAssociationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIntegrationAssociationArnInput() {
    return this._eventIntegrationAssociationArn
  }

  // event_integration_association_id - computed: true, optional: true, required: false
  private _eventIntegrationAssociationId?: string;
  public get eventIntegrationAssociationId() {
    return this.getStringAttribute('event_integration_association_id');
  }
  public set eventIntegrationAssociationId(value: string) {
    this._eventIntegrationAssociationId = value;
  }
  public resetEventIntegrationAssociationId() {
    this._eventIntegrationAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIntegrationAssociationIdInput() {
    return this._eventIntegrationAssociationId
  }
}

export function appintegrationsEventIntegrationAssociationsToTerraform(struct?: AppintegrationsEventIntegrationAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_association_metadata: cdktf.listMapper(appintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform)(struct!.clientAssociationMetadata),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    event_bridge_rule_name: cdktf.stringToTerraform(struct!.eventBridgeRuleName),
    event_integration_association_arn: cdktf.stringToTerraform(struct!.eventIntegrationAssociationArn),
    event_integration_association_id: cdktf.stringToTerraform(struct!.eventIntegrationAssociationId),
  }
}

export interface AppintegrationsEventIntegrationEventFilter {
  /**
  * The source of the events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#source AppintegrationsEventIntegration#source}
  */
  readonly source: string;
}

export function appintegrationsEventIntegrationEventFilterToTerraform(struct?: AppintegrationsEventIntegrationEventFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface AppintegrationsEventIntegrationTags {
  /**
  * A key to identify the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#key AppintegrationsEventIntegration#key}
  */
  readonly key: string;
  /**
  * Corresponding tag value for the key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#value AppintegrationsEventIntegration#value}
  */
  readonly value: string;
}

export function appintegrationsEventIntegrationTagsToTerraform(struct?: AppintegrationsEventIntegrationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html awscc_appintegrations_event_integration}
*/
export class AppintegrationsEventIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appintegrations_event_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html awscc_appintegrations_event_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppintegrationsEventIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig) {
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
    this._description = config.description;
    this._eventBridgeBus = config.eventBridgeBus;
    this._eventFilter = config.eventFilter;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: false
  public get associations() {
    return this.interpolationForAttribute('associations') as any;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // event_bridge_bus - computed: false, optional: false, required: true
  private _eventBridgeBus: string;
  public get eventBridgeBus() {
    return this.getStringAttribute('event_bridge_bus');
  }
  public set eventBridgeBus(value: string) {
    this._eventBridgeBus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeBusInput() {
    return this._eventBridgeBus
  }

  // event_filter - computed: false, optional: false, required: true
  private _eventFilter: AppintegrationsEventIntegrationEventFilter;
  public get eventFilter() {
    return this.interpolationForAttribute('event_filter') as any;
  }
  public set eventFilter(value: AppintegrationsEventIntegrationEventFilter) {
    this._eventFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter
  }

  // event_integration_arn - computed: true, optional: false, required: false
  public get eventIntegrationArn() {
    return this.getStringAttribute('event_integration_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AppintegrationsEventIntegrationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AppintegrationsEventIntegrationTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      event_bridge_bus: cdktf.stringToTerraform(this._eventBridgeBus),
      event_filter: appintegrationsEventIntegrationEventFilterToTerraform(this._eventFilter),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(appintegrationsEventIntegrationTagsToTerraform)(this._tags),
    };
  }
}
