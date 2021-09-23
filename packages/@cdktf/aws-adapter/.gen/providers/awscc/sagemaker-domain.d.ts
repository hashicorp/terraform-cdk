import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * The mode of authentication that members use to access the domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
    */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
    /**
    * A name for the domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The VPC subnets that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * A list of tags to apply to the user profile.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#tags SagemakerDomain#tags}
    */
    readonly tags?: SagemakerDomainTags[];
    /**
    * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}
    */
    readonly vpcId: string;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any;
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#custom_images SagemakerDomain#custom_images}
    */
    readonly customImages?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
    * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettings): any;
export interface SagemakerDomainDefaultUserSettings {
    /**
    * The user profile Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The JupyterServer app settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    /**
    * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
    */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
}
export declare function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettings): any;
export interface SagemakerDomainTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#key SagemakerDomain#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#value SagemakerDomain#value}
    */
    readonly value: string;
}
export declare function sagemakerDomainTagsToTerraform(struct?: SagemakerDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html awscc_sagemaker_domain}
*/
export declare class SagemakerDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html awscc_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDomainConfig);
    private _appNetworkAccessType?;
    get appNetworkAccessType(): string;
    set appNetworkAccessType(value: string);
    resetAppNetworkAccessType(): void;
    get appNetworkAccessTypeInput(): string | undefined;
    private _authMode;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string;
    private _defaultUserSettings;
    get defaultUserSettings(): SagemakerDomainDefaultUserSettings;
    set defaultUserSettings(value: SagemakerDomainDefaultUserSettings);
    get defaultUserSettingsInput(): SagemakerDomainDefaultUserSettings;
    get domainArn(): string;
    get domainId(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get homeEfsFileSystemId(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get singleSignOnManagedApplicationInstanceId(): string;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    private _tags?;
    get tags(): SagemakerDomainTags[];
    set tags(value: SagemakerDomainTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerDomainTags[] | undefined;
    get url(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
