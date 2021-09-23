import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#app_name SagemakerApp#app_name}
    */
    readonly appName: string;
    /**
    * The type of app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#app_type SagemakerApp#app_type}
    */
    readonly appType: string;
    /**
    * The domain ID.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#domain_id SagemakerApp#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#resource_spec SagemakerApp#resource_spec}
    */
    readonly resourceSpec?: SagemakerAppResourceSpec;
    /**
    * A list of tags to apply to the app.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#tags SagemakerApp#tags}
    */
    readonly tags?: SagemakerAppTags[];
    /**
    * The user profile name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#user_profile_name SagemakerApp#user_profile_name}
    */
    readonly userProfileName: string;
}
export interface SagemakerAppResourceSpec {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#instance_type SagemakerApp#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#sage_maker_image_arn SagemakerApp#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#sage_maker_image_version_arn SagemakerApp#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export declare function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpec): any;
export interface SagemakerAppTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#key SagemakerApp#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html#value SagemakerApp#value}
    */
    readonly value: string;
}
export declare function sagemakerAppTagsToTerraform(struct?: SagemakerAppTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html awscc_sagemaker_app}
*/
export declare class SagemakerApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app.html awscc_sagemaker_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppConfig);
    get appArn(): string;
    private _appName;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string;
    private _appType;
    get appType(): string;
    set appType(value: string);
    get appTypeInput(): string;
    private _domainId;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
    get id(): string;
    private _resourceSpec?;
    get resourceSpec(): SagemakerAppResourceSpec;
    set resourceSpec(value: SagemakerAppResourceSpec);
    resetResourceSpec(): void;
    get resourceSpecInput(): SagemakerAppResourceSpec | undefined;
    private _tags?;
    get tags(): SagemakerAppTags[];
    set tags(value: SagemakerAppTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerAppTags[] | undefined;
    private _userProfileName;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
