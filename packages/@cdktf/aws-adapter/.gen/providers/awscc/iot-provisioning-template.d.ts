import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotProvisioningTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#description IotProvisioningTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#enabled IotProvisioningTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}
    */
    readonly preProvisioningHook?: IotProvisioningTemplatePreProvisioningHook;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}
    */
    readonly provisioningRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#tags IotProvisioningTemplate#tags}
    */
    readonly tags?: IotProvisioningTemplateTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#template_body IotProvisioningTemplate#template_body}
    */
    readonly templateBody: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#template_name IotProvisioningTemplate#template_name}
    */
    readonly templateName?: string;
}
export interface IotProvisioningTemplatePreProvisioningHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#payload_version IotProvisioningTemplate#payload_version}
    */
    readonly payloadVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#target_arn IotProvisioningTemplate#target_arn}
    */
    readonly targetArn?: string;
}
export declare function iotProvisioningTemplatePreProvisioningHookToTerraform(struct?: IotProvisioningTemplatePreProvisioningHook): any;
export interface IotProvisioningTemplateTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#key IotProvisioningTemplate#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#value IotProvisioningTemplate#value}
    */
    readonly value: string;
}
export declare function iotProvisioningTemplateTagsToTerraform(struct?: IotProvisioningTemplateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html awscc_iot_provisioning_template}
*/
export declare class IotProvisioningTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html awscc_iot_provisioning_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotProvisioningTemplateConfig
    */
    constructor(scope: Construct, id: string, config: IotProvisioningTemplateConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _preProvisioningHook?;
    get preProvisioningHook(): IotProvisioningTemplatePreProvisioningHook;
    set preProvisioningHook(value: IotProvisioningTemplatePreProvisioningHook);
    resetPreProvisioningHook(): void;
    get preProvisioningHookInput(): IotProvisioningTemplatePreProvisioningHook | undefined;
    private _provisioningRoleArn;
    get provisioningRoleArn(): string;
    set provisioningRoleArn(value: string);
    get provisioningRoleArnInput(): string;
    private _tags?;
    get tags(): IotProvisioningTemplateTags[];
    set tags(value: IotProvisioningTemplateTags[]);
    resetTags(): void;
    get tagsInput(): IotProvisioningTemplateTags[] | undefined;
    get templateArn(): string;
    private _templateBody;
    get templateBody(): string;
    set templateBody(value: string);
    get templateBodyInput(): string;
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    resetTemplateName(): void;
    get templateNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
