import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NimblestudioStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#admin_role_arn NimblestudioStudio#admin_role_arn}
    */
    readonly adminRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#display_name NimblestudioStudio#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}
    */
    readonly studioEncryptionConfiguration?: NimblestudioStudioStudioEncryptionConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#studio_name NimblestudioStudio#studio_name}
    */
    readonly studioName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#tags NimblestudioStudio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#user_role_arn NimblestudioStudio#user_role_arn}
    */
    readonly userRoleArn: string;
}
export interface NimblestudioStudioStudioEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#key_arn NimblestudioStudio#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#key_type NimblestudioStudio#key_type}
    */
    readonly keyType: string;
}
export declare function nimblestudioStudioStudioEncryptionConfigurationToTerraform(struct?: NimblestudioStudioStudioEncryptionConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html awscc_nimblestudio_studio}
*/
export declare class NimblestudioStudio extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html awscc_nimblestudio_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NimblestudioStudioConfig
    */
    constructor(scope: Construct, id: string, config: NimblestudioStudioConfig);
    private _adminRoleArn;
    get adminRoleArn(): string;
    set adminRoleArn(value: string);
    get adminRoleArnInput(): string;
    private _displayName;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string;
    get homeRegion(): string;
    get id(): string;
    get ssoClientId(): string;
    private _studioEncryptionConfiguration?;
    get studioEncryptionConfiguration(): NimblestudioStudioStudioEncryptionConfiguration;
    set studioEncryptionConfiguration(value: NimblestudioStudioStudioEncryptionConfiguration);
    resetStudioEncryptionConfiguration(): void;
    get studioEncryptionConfigurationInput(): NimblestudioStudioStudioEncryptionConfiguration | undefined;
    get studioId(): string;
    private _studioName;
    get studioName(): string;
    set studioName(value: string);
    get studioNameInput(): string;
    get studioUrl(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _userRoleArn;
    get userRoleArn(): string;
    set userRoleArn(value: string);
    get userRoleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
