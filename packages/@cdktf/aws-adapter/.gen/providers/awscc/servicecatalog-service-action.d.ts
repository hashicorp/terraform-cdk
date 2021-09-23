import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#accept_language ServicecatalogServiceAction#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#definition ServicecatalogServiceAction#definition}
    */
    readonly definition: ServicecatalogServiceActionDefinition[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#definition_type ServicecatalogServiceAction#definition_type}
    */
    readonly definitionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#description ServicecatalogServiceAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
}
export interface ServicecatalogServiceActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#key ServicecatalogServiceAction#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html#value ServicecatalogServiceAction#value}
    */
    readonly value: string;
}
export declare function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinition): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html awscc_servicecatalog_service_action}
*/
export declare class ServicecatalogServiceAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action.html awscc_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogServiceActionConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _definition;
    get definition(): ServicecatalogServiceActionDefinition[];
    set definition(value: ServicecatalogServiceActionDefinition[]);
    get definitionInput(): ServicecatalogServiceActionDefinition[];
    private _definitionType;
    get definitionType(): string;
    set definitionType(value: string);
    get definitionTypeInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
