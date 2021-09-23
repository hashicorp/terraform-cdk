import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogCloudformationProvisionedProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#path_id ServicecatalogCloudformationProvisionedProduct#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#path_name ServicecatalogCloudformationProvisionedProduct#path_name}
    */
    readonly pathName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#product_id ServicecatalogCloudformationProvisionedProduct#product_id}
    */
    readonly productId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#product_name ServicecatalogCloudformationProvisionedProduct#product_name}
    */
    readonly productName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}
    */
    readonly provisionedProductName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}
    */
    readonly provisioningArtifactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}
    */
    readonly provisioningParameters?: ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}
    */
    readonly provisioningPreferences?: ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#tags ServicecatalogCloudformationProvisionedProduct#tags}
    */
    readonly tags?: ServicecatalogCloudformationProvisionedProductTags[];
}
export interface ServicecatalogCloudformationProvisionedProductProvisioningParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#key ServicecatalogCloudformationProvisionedProduct#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#value ServicecatalogCloudformationProvisionedProduct#value}
    */
    readonly value: string;
}
export declare function servicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogCloudformationProvisionedProductProvisioningParameters): any;
export interface ServicecatalogCloudformationProvisionedProductProvisioningPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}
    */
    readonly stackSetAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}
    */
    readonly stackSetFailureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}
    */
    readonly stackSetFailureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}
    */
    readonly stackSetMaxConcurrencyCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}
    */
    readonly stackSetMaxConcurrencyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}
    */
    readonly stackSetOperationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}
    */
    readonly stackSetRegions?: string[];
}
export declare function servicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(struct?: ServicecatalogCloudformationProvisionedProductProvisioningPreferences): any;
export interface ServicecatalogCloudformationProvisionedProductTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#key ServicecatalogCloudformationProvisionedProduct#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#value ServicecatalogCloudformationProvisionedProduct#value}
    */
    readonly value: string;
}
export declare function servicecatalogCloudformationProvisionedProductTagsToTerraform(struct?: ServicecatalogCloudformationProvisionedProductTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product}
*/
export declare class ServicecatalogCloudformationProvisionedProduct extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogCloudformationProvisionedProductConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ServicecatalogCloudformationProvisionedProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get cloudformationStackArn(): string;
    get id(): string;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[] | undefined;
    outputs(key: string): string;
    private _pathId?;
    get pathId(): string;
    set pathId(value: string);
    resetPathId(): void;
    get pathIdInput(): string | undefined;
    private _pathName?;
    get pathName(): string;
    set pathName(value: string);
    resetPathName(): void;
    get pathNameInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    resetProductId(): void;
    get productIdInput(): string | undefined;
    private _productName?;
    get productName(): string;
    set productName(value: string);
    resetProductName(): void;
    get productNameInput(): string | undefined;
    get provisionedProductId(): string;
    private _provisionedProductName?;
    get provisionedProductName(): string;
    set provisionedProductName(value: string);
    resetProvisionedProductName(): void;
    get provisionedProductNameInput(): string | undefined;
    private _provisioningArtifactId?;
    get provisioningArtifactId(): string;
    set provisioningArtifactId(value: string);
    resetProvisioningArtifactId(): void;
    get provisioningArtifactIdInput(): string | undefined;
    private _provisioningArtifactName?;
    get provisioningArtifactName(): string;
    set provisioningArtifactName(value: string);
    resetProvisioningArtifactName(): void;
    get provisioningArtifactNameInput(): string | undefined;
    private _provisioningParameters?;
    get provisioningParameters(): ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
    set provisioningParameters(value: ServicecatalogCloudformationProvisionedProductProvisioningParameters[]);
    resetProvisioningParameters(): void;
    get provisioningParametersInput(): ServicecatalogCloudformationProvisionedProductProvisioningParameters[] | undefined;
    private _provisioningPreferences?;
    get provisioningPreferences(): ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
    set provisioningPreferences(value: ServicecatalogCloudformationProvisionedProductProvisioningPreferences);
    resetProvisioningPreferences(): void;
    get provisioningPreferencesInput(): ServicecatalogCloudformationProvisionedProductProvisioningPreferences | undefined;
    get recordId(): string;
    private _tags?;
    get tags(): ServicecatalogCloudformationProvisionedProductTags[];
    set tags(value: ServicecatalogCloudformationProvisionedProductTags[]);
    resetTags(): void;
    get tagsInput(): ServicecatalogCloudformationProvisionedProductTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
