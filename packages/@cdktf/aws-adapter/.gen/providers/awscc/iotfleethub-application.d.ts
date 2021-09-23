import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotfleethubApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Application Description, should be between 1 and 2048 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#application_description IotfleethubApplication#application_description}
    */
    readonly applicationDescription?: string;
    /**
    * Application Name, should be between 1 and 256 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#application_name IotfleethubApplication#application_name}
    */
    readonly applicationName: string;
    /**
    * The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#role_arn IotfleethubApplication#role_arn}
    */
    readonly roleArn: string;
    /**
    * A list of key-value pairs that contain metadata for the application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#tags IotfleethubApplication#tags}
    */
    readonly tags?: IotfleethubApplicationTags[];
}
export interface IotfleethubApplicationTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#key IotfleethubApplication#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html#value IotfleethubApplication#value}
    */
    readonly value: string;
}
export declare function iotfleethubApplicationTagsToTerraform(struct?: IotfleethubApplicationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html awscc_iotfleethub_application}
*/
export declare class IotfleethubApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotfleethub_application.html awscc_iotfleethub_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotfleethubApplicationConfig
    */
    constructor(scope: Construct, id: string, config: IotfleethubApplicationConfig);
    get applicationArn(): string;
    get applicationCreationDate(): number;
    private _applicationDescription?;
    get applicationDescription(): string;
    set applicationDescription(value: string);
    resetApplicationDescription(): void;
    get applicationDescriptionInput(): string | undefined;
    get applicationId(): string;
    get applicationLastUpdateDate(): number;
    private _applicationName;
    get applicationName(): string;
    set applicationName(value: string);
    get applicationNameInput(): string;
    get applicationState(): string;
    get applicationUrl(): string;
    get errorMessage(): string;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get ssoClientId(): string;
    private _tags?;
    get tags(): IotfleethubApplicationTags[];
    set tags(value: IotfleethubApplicationTags[]);
    resetTags(): void;
    get tagsInput(): IotfleethubApplicationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
