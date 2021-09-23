import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotProvisioningTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html#id DataAwsccIotProvisioningTemplate#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotProvisioningTemplatePreProvisioningHook extends cdktf.ComplexComputedList {
    get payloadVersion(): string;
    get targetArn(): string;
}
export declare function dataAwsccIotProvisioningTemplatePreProvisioningHookToTerraform(struct?: DataAwsccIotProvisioningTemplatePreProvisioningHook): any;
export declare class DataAwsccIotProvisioningTemplateTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotProvisioningTemplateTagsToTerraform(struct?: DataAwsccIotProvisioningTemplateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html awscc_iot_provisioning_template}
*/
export declare class DataAwsccIotProvisioningTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html awscc_iot_provisioning_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotProvisioningTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotProvisioningTemplateConfig);
    get description(): string;
    get enabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get preProvisioningHook(): any;
    get provisioningRoleArn(): string;
    get tags(): any;
    get templateArn(): string;
    get templateBody(): string;
    get templateName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
