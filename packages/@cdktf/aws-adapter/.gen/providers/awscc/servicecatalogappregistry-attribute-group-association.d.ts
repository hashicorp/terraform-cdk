import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name or the Id of the Application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html#application ServicecatalogappregistryAttributeGroupAssociation#application}
    */
    readonly application: string;
    /**
    * The name or the Id of the AttributeGroup.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html#attribute_group ServicecatalogappregistryAttributeGroupAssociation#attribute_group}
    */
    readonly attributeGroup: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association}
*/
export declare class ServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryAttributeGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupAssociationConfig);
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    get applicationArn(): string;
    private _attributeGroup;
    get attributeGroup(): string;
    set attributeGroup(value: string);
    get attributeGroupInput(): string;
    get attributeGroupArn(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
