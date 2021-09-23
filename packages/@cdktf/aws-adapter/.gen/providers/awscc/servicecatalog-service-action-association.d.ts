import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogServiceActionAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#product_id ServicecatalogServiceActionAssociation#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#provisioning_artifact_id ServicecatalogServiceActionAssociation#provisioning_artifact_id}
    */
    readonly provisioningArtifactId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#service_action_id ServicecatalogServiceActionAssociation#service_action_id}
    */
    readonly serviceActionId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association}
*/
export declare class ServicecatalogServiceActionAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogServiceActionAssociationConfig);
    get id(): string;
    private _productId;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string;
    private _provisioningArtifactId;
    get provisioningArtifactId(): string;
    set provisioningArtifactId(value: string);
    get provisioningArtifactIdInput(): string;
    private _serviceActionId;
    get serviceActionId(): string;
    set serviceActionId(value: string);
    get serviceActionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
