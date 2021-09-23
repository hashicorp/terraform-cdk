import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewisePortalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#alarms IotsitewisePortal#alarms}
    */
    readonly alarms?: IotsitewisePortalAlarms;
    /**
    * The email address that sends alarm notifications.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#notification_sender_email IotsitewisePortal#notification_sender_email}
    */
    readonly notificationSenderEmail?: string;
    /**
    * The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_auth_mode IotsitewisePortal#portal_auth_mode}
    */
    readonly portalAuthMode?: string;
    /**
    * The AWS administrator's contact email address.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_contact_email IotsitewisePortal#portal_contact_email}
    */
    readonly portalContactEmail: string;
    /**
    * A description for the portal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_description IotsitewisePortal#portal_description}
    */
    readonly portalDescription?: string;
    /**
    * A friendly name for the portal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_name IotsitewisePortal#portal_name}
    */
    readonly portalName: string;
    /**
    * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#role_arn IotsitewisePortal#role_arn}
    */
    readonly roleArn: string;
    /**
    * A list of key-value pairs that contain metadata for the portal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#tags IotsitewisePortal#tags}
    */
    readonly tags?: IotsitewisePortalTags[];
}
export interface IotsitewisePortalAlarms {
    /**
    * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#alarm_role_arn IotsitewisePortal#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
    /**
    * The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}
    */
    readonly notificationLambdaArn?: string;
}
export declare function iotsitewisePortalAlarmsToTerraform(struct?: IotsitewisePortalAlarms): any;
export interface IotsitewisePortalTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#key IotsitewisePortal#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#value IotsitewisePortal#value}
    */
    readonly value: string;
}
export declare function iotsitewisePortalTagsToTerraform(struct?: IotsitewisePortalTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html awscc_iotsitewise_portal}
*/
export declare class IotsitewisePortal extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html awscc_iotsitewise_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewisePortalConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewisePortalConfig);
    private _alarms?;
    get alarms(): IotsitewisePortalAlarms;
    set alarms(value: IotsitewisePortalAlarms);
    resetAlarms(): void;
    get alarmsInput(): IotsitewisePortalAlarms | undefined;
    get id(): string;
    private _notificationSenderEmail?;
    get notificationSenderEmail(): string;
    set notificationSenderEmail(value: string);
    resetNotificationSenderEmail(): void;
    get notificationSenderEmailInput(): string | undefined;
    get portalArn(): string;
    private _portalAuthMode?;
    get portalAuthMode(): string;
    set portalAuthMode(value: string);
    resetPortalAuthMode(): void;
    get portalAuthModeInput(): string | undefined;
    get portalClientId(): string;
    private _portalContactEmail;
    get portalContactEmail(): string;
    set portalContactEmail(value: string);
    get portalContactEmailInput(): string;
    private _portalDescription?;
    get portalDescription(): string;
    set portalDescription(value: string);
    resetPortalDescription(): void;
    get portalDescriptionInput(): string | undefined;
    get portalId(): string;
    private _portalName;
    get portalName(): string;
    set portalName(value: string);
    get portalNameInput(): string;
    get portalStartUrl(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): IotsitewisePortalTags[];
    set tags(value: IotsitewisePortalTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewisePortalTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
