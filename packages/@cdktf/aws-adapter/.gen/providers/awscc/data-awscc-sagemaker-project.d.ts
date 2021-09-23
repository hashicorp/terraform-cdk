import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html#id DataAwsccSagemakerProject#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails extends cdktf.ComplexComputedList {
    get provisionedProductId(): string;
    get provisionedProductStatusMessage(): string;
}
export declare function dataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails): any;
export declare class DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters): any;
export declare class DataAwsccSagemakerProjectServiceCatalogProvisioningDetails extends cdktf.ComplexComputedList {
    get pathId(): string;
    get productId(): string;
    get provisioningArtifactId(): string;
    get provisioningParameters(): any;
}
export declare function dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisioningDetails): any;
export declare class DataAwsccSagemakerProjectTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerProjectTagsToTerraform(struct?: DataAwsccSagemakerProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html awscc_sagemaker_project}
*/
export declare class DataAwsccSagemakerProject extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html awscc_sagemaker_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerProjectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerProjectConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get projectArn(): string;
    get projectDescription(): string;
    get projectId(): string;
    get projectName(): string;
    get projectStatus(): string;
    get serviceCatalogProvisionedProductDetails(): any;
    get serviceCatalogProvisioningDetails(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
