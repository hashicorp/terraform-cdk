import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogServiceActionAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html#id DataAwsccServicecatalogServiceActionAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association}
*/
export declare class DataAwsccServicecatalogServiceActionAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogServiceActionAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogServiceActionAssociationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get productId(): string;
    get provisioningArtifactId(): string;
    get serviceActionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
