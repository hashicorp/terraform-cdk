import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html#id DataAwsccSagemakerUserProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerUserProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerUserProfileTagsToTerraform(struct?: DataAwsccSagemakerUserProfileTags): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get sageMakerImageArn(): string;
    get sageMakerImageVersionArn(): string;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings extends cdktf.ComplexComputedList {
    get defaultResourceSpec(): any;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages extends cdktf.ComplexComputedList {
    get appImageConfigName(): string;
    get imageName(): string;
    get imageVersionNumber(): number;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get sageMakerImageArn(): string;
    get sageMakerImageVersionArn(): string;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings extends cdktf.ComplexComputedList {
    get customImages(): any;
    get defaultResourceSpec(): any;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings): any;
export declare class DataAwsccSagemakerUserProfileUserSettingsSharingSettings extends cdktf.ComplexComputedList {
    get notebookOutputOption(): string;
    get s3KmsKeyId(): string;
    get s3OutputPath(): string;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSharingSettings): any;
export declare class DataAwsccSagemakerUserProfileUserSettings extends cdktf.ComplexComputedList {
    get executionRole(): string;
    get jupyterServerAppSettings(): any;
    get kernelGatewayAppSettings(): any;
    get securityGroups(): string[];
    get sharingSettings(): any;
}
export declare function dataAwsccSagemakerUserProfileUserSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html awscc_sagemaker_user_profile}
*/
export declare class DataAwsccSagemakerUserProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html awscc_sagemaker_user_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerUserProfileConfig);
    get domainId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get singleSignOnUserIdentifier(): string;
    get singleSignOnUserValue(): string;
    get tags(): any;
    get userProfileArn(): string;
    get userProfileName(): string;
    get userSettings(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
