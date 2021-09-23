import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the associated Domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}
    */
    readonly domainId: string;
    /**
    * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
    */
    readonly singleSignOnUserIdentifier?: string;
    /**
    * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
    */
    readonly singleSignOnUserValue?: string;
    /**
    * A list of tags to apply to the user profile.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}
    */
    readonly tags?: SagemakerUserProfileTags[];
    /**
    * A name for the UserProfile.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
    */
    readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#key SagemakerUserProfile#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#value SagemakerUserProfile#value}
    */
    readonly value: string;
}
export declare function sagemakerUserProfileTagsToTerraform(struct?: SagemakerUserProfileTags): any;
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettings): any;
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any;
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#custom_images SagemakerUserProfile#custom_images}
    */
    readonly customImages?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any;
export interface SagemakerUserProfileUserSettingsSharingSettings {
    /**
    * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettings): any;
export interface SagemakerUserProfileUserSettings {
    /**
    * The user profile Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The JupyterServer app settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
    /**
    * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
    */
    readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
}
export declare function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html awscc_sagemaker_user_profile}
*/
export declare class SagemakerUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html awscc_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig);
    private _domainId;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
    get id(): string;
    private _singleSignOnUserIdentifier?;
    get singleSignOnUserIdentifier(): string;
    set singleSignOnUserIdentifier(value: string);
    resetSingleSignOnUserIdentifier(): void;
    get singleSignOnUserIdentifierInput(): string | undefined;
    private _singleSignOnUserValue?;
    get singleSignOnUserValue(): string;
    set singleSignOnUserValue(value: string);
    resetSingleSignOnUserValue(): void;
    get singleSignOnUserValueInput(): string | undefined;
    private _tags?;
    get tags(): SagemakerUserProfileTags[];
    set tags(value: SagemakerUserProfileTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerUserProfileTags[] | undefined;
    get userProfileArn(): string;
    private _userProfileName;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    private _userSettings?;
    get userSettings(): SagemakerUserProfileUserSettings;
    set userSettings(value: SagemakerUserProfileUserSettings);
    resetUserSettings(): void;
    get userSettingsInput(): SagemakerUserProfileUserSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
