import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAppintegrationsEventIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html#id DataAwsccAppintegrationsEventIntegration#id}
    */
    readonly id: string;
}
export declare class DataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadata extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadataToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationAssociationsClientAssociationMetadata): any;
export declare class DataAwsccAppintegrationsEventIntegrationAssociations extends cdktf.ComplexComputedList {
    get clientAssociationMetadata(): any;
    get clientId(): string;
    get eventBridgeRuleName(): string;
    get eventIntegrationAssociationArn(): string;
    get eventIntegrationAssociationId(): string;
}
export declare function dataAwsccAppintegrationsEventIntegrationAssociationsToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationAssociations): any;
export declare class DataAwsccAppintegrationsEventIntegrationEventFilter extends cdktf.ComplexComputedList {
    get source(): string;
}
export declare function dataAwsccAppintegrationsEventIntegrationEventFilterToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationEventFilter): any;
export declare class DataAwsccAppintegrationsEventIntegrationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAppintegrationsEventIntegrationTagsToTerraform(struct?: DataAwsccAppintegrationsEventIntegrationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html awscc_appintegrations_event_integration}
*/
export declare class DataAwsccAppintegrationsEventIntegration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appintegrations_event_integration.html awscc_appintegrations_event_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAppintegrationsEventIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAppintegrationsEventIntegrationConfig);
    get associations(): any;
    get description(): string;
    get eventBridgeBus(): string;
    get eventFilter(): any;
    get eventIntegrationArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
