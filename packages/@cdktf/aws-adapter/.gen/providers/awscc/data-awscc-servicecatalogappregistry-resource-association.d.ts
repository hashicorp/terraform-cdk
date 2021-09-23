import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogappregistryResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_resource_association.html#id DataAwsccServicecatalogappregistryResourceAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association}
*/
export declare class DataAwsccServicecatalogappregistryResourceAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogappregistryResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogappregistryResourceAssociationConfig);
    get application(): string;
    get applicationArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resource(): string;
    get resourceArn(): string;
    get resourceType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
