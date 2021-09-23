import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html#id DataAwsccServicecatalogappregistryAttributeGroupAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association}
*/
export declare class DataAwsccServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogappregistryAttributeGroupAssociationConfig);
    get application(): string;
    get applicationArn(): string;
    get attributeGroup(): string;
    get attributeGroupArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
