import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccServicecatalogCloudformationProvisionedProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}
    */
    readonly id: string;
}
export declare class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters): any;
export declare class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences extends cdktf.ComplexComputedList {
    get stackSetAccounts(): string[];
    get stackSetFailureToleranceCount(): number;
    get stackSetFailureTolerancePercentage(): number;
    get stackSetMaxConcurrencyCount(): number;
    get stackSetMaxConcurrencyPercentage(): number;
    get stackSetOperationType(): string;
    get stackSetRegions(): string[];
}
export declare function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences): any;
export declare class DataAwsccServicecatalogCloudformationProvisionedProductTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccServicecatalogCloudformationProvisionedProductTagsToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product}
*/
export declare class DataAwsccServicecatalogCloudformationProvisionedProduct extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccServicecatalogCloudformationProvisionedProductConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccServicecatalogCloudformationProvisionedProductConfig);
    get acceptLanguage(): string;
    get cloudformationStackArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get notificationArns(): string[];
    outputs(key: string): string;
    get pathId(): string;
    get pathName(): string;
    get productId(): string;
    get productName(): string;
    get provisionedProductId(): string;
    get provisionedProductName(): string;
    get provisioningArtifactId(): string;
    get provisioningArtifactName(): string;
    get provisioningParameters(): any;
    get provisioningPreferences(): any;
    get recordId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
