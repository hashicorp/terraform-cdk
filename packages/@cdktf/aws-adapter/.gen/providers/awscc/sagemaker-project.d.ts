import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#project_description SagemakerProject#project_description}
    */
    readonly projectDescription?: string;
    /**
    * The name of the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#project_name SagemakerProject#project_name}
    */
    readonly projectName: string;
    /**
    * Input ServiceCatalog Provisioning Details
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}
    */
    readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#tags SagemakerProject#tags}
    */
    readonly tags?: SagemakerProjectTags[];
}
export declare class SagemakerProjectServiceCatalogProvisionedProductDetails extends cdktf.ComplexComputedList {
    private _provisionedProductId?;
    get provisionedProductId(): string;
    set provisionedProductId(value: string);
    resetProvisionedProductId(): void;
    get provisionedProductIdInput(): string | undefined;
    private _provisionedProductStatusMessage?;
    get provisionedProductStatusMessage(): string;
    set provisionedProductStatusMessage(value: string);
    resetProvisionedProductStatusMessage(): void;
    get provisionedProductStatusMessageInput(): string | undefined;
}
export declare function sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisionedProductDetails): any;
export interface SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters {
    /**
    * The parameter key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#key SagemakerProject#key}
    */
    readonly key: string;
    /**
    * The parameter value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#value SagemakerProject#value}
    */
    readonly value: string;
}
export declare function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters): any;
export interface SagemakerProjectServiceCatalogProvisioningDetails {
    /**
    * The path identifier of the product.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#path_id SagemakerProject#path_id}
    */
    readonly pathId?: string;
    /**
    * Service Catalog product identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#product_id SagemakerProject#product_id}
    */
    readonly productId: string;
    /**
    * The identifier of the provisioning artifact (also known as a version).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}
    */
    readonly provisioningArtifactId: string;
    /**
    * Parameters specified by the administrator that are required for provisioning the product.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#provisioning_parameters SagemakerProject#provisioning_parameters}
    */
    readonly provisioningParameters?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[];
}
export declare function sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetails): any;
export interface SagemakerProjectTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#key SagemakerProject#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#value SagemakerProject#value}
    */
    readonly value: string;
}
export declare function sagemakerProjectTagsToTerraform(struct?: SagemakerProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project}
*/
export declare class SagemakerProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerProjectConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerProjectConfig);
    get creationTime(): string;
    get id(): string;
    get projectArn(): string;
    private _projectDescription?;
    get projectDescription(): string;
    set projectDescription(value: string);
    resetProjectDescription(): void;
    get projectDescriptionInput(): string | undefined;
    get projectId(): string;
    private _projectName;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    get projectStatus(): string;
    get serviceCatalogProvisionedProductDetails(): any;
    private _serviceCatalogProvisioningDetails;
    get serviceCatalogProvisioningDetails(): SagemakerProjectServiceCatalogProvisioningDetails;
    set serviceCatalogProvisioningDetails(value: SagemakerProjectServiceCatalogProvisioningDetails);
    get serviceCatalogProvisioningDetailsInput(): SagemakerProjectServiceCatalogProvisioningDetails;
    private _tags?;
    get tags(): SagemakerProjectTags[];
    set tags(value: SagemakerProjectTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerProjectTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
