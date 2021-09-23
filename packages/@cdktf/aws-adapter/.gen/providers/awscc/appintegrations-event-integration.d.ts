import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function appintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform(struct?: AppintegrationsEventIntegrationAssociationsClientAssociationMetadata): any;
export declare class AppintegrationsEventIntegrationAssociations extends cdktf.ComplexComputedList {
    private _clientAssociationMetadata?;
    get clientAssociationMetadata(): AppintegrationsEventIntegrationAssociationsClientAssociationMetadata[];
    set clientAssociationMetadata(value: AppintegrationsEventIntegrationAssociationsClientAssociationMetadata[]);
    resetClientAssociationMetadata(): void;
    get clientAssociationMetadataInput(): AppintegrationsEventIntegrationAssociationsClientAssociationMetadata[] | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _eventBridgeRuleName?;
    get eventBridgeRuleName(): string;
    set eventBridgeRuleName(value: string);
    resetEventBridgeRuleName(): void;
    get eventBridgeRuleNameInput(): string | undefined;
    private _eventIntegrationAssociationArn?;
    get eventIntegrationAssociationArn(): string;
    set eventIntegrationAssociationArn(value: string);
    resetEventIntegrationAssociationArn(): void;
    get eventIntegrationAssociationArnInput(): string | undefined;
    private _eventIntegrationAssociationId?;
    get eventIntegrationAssociationId(): string;
    set eventIntegrationAssociationId(value: string);
    resetEventIntegrationAssociationId(): void;
    get eventIntegrationAssociationIdInput(): string | undefined;
}
export declare function appintegrationsEventIntegrationAssociationsToTerraform(struct?: AppintegrationsEventIntegrationAssociations): any;
export interface AppintegrationsEventIntegrationEventFilter {
    /**
    * The source of the events.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html#source AppintegrationsEventIntegration#source}
    */
    readonly source: string;
}
export declare function appintegrationsEventIntegrationEventFilterToTerraform(struct?: AppintegrationsEventIntegrationEventFilter): any;
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
export declare function appintegrationsEventIntegrationTagsToTerraform(struct?: AppintegrationsEventIntegrationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html awscc_appintegrations_event_integration}
*/
export declare class AppintegrationsEventIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appintegrations_event_integration.html awscc_appintegrations_event_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppintegrationsEventIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig);
    get associations(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventBridgeBus;
    get eventBridgeBus(): string;
    set eventBridgeBus(value: string);
    get eventBridgeBusInput(): string;
    private _eventFilter;
    get eventFilter(): AppintegrationsEventIntegrationEventFilter;
    set eventFilter(value: AppintegrationsEventIntegrationEventFilter);
    get eventFilterInput(): AppintegrationsEventIntegrationEventFilter;
    get eventIntegrationArn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): AppintegrationsEventIntegrationTags[];
    set tags(value: AppintegrationsEventIntegrationTags[]);
    resetTags(): void;
    get tagsInput(): AppintegrationsEventIntegrationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
