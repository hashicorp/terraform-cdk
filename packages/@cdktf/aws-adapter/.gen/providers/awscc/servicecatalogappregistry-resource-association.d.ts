import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name or the Id of the Application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#application ServicecatalogappregistryResourceAssociation#application}
    */
    readonly application: string;
    /**
    * The name or the Id of the Resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#resource ServicecatalogappregistryResourceAssociation#resource}
    */
    readonly resource: string;
    /**
    * The type of the CFN Resource for now it's enum CFN_STACK.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#resource_type ServicecatalogappregistryResourceAssociation#resource_type}
    */
    readonly resourceType: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association}
*/
export declare class ServicecatalogappregistryResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryResourceAssociationConfig);
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    get applicationArn(): string;
    get id(): string;
    private _resource;
    get resource(): string;
    set resource(value: string);
    get resourceInput(): string;
    get resourceArn(): string;
    private _resourceType;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
