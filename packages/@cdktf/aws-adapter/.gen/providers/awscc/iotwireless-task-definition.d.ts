import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotwirelessTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}
    */
    readonly autoCreateTasks: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}
    */
    readonly loRaWanUpdateGatewayTaskEntry?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
    /**
    * The name of the new resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#name IotwirelessTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#tags IotwirelessTaskDefinition#tags}
    */
    readonly tags?: IotwirelessTaskDefinitionTags[];
    /**
    * A filter to list only the wireless gateway task definitions that use this task definition type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#task_definition_type IotwirelessTaskDefinition#task_definition_type}
    */
    readonly taskDefinitionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update IotwirelessTaskDefinition#update}
    */
    readonly update?: IotwirelessTaskDefinitionUpdate;
}
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
    */
    readonly station?: string;
}
export declare function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any;
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
    */
    readonly station?: string;
}
export declare function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any;
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#current_version IotwirelessTaskDefinition#current_version}
    */
    readonly currentVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_version IotwirelessTaskDefinition#update_version}
    */
    readonly updateVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
}
export declare function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any;
export interface IotwirelessTaskDefinitionTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#key IotwirelessTaskDefinition#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#value IotwirelessTaskDefinition#value}
    */
    readonly value?: string;
}
export declare function iotwirelessTaskDefinitionTagsToTerraform(struct?: IotwirelessTaskDefinitionTags): any;
export interface IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
    */
    readonly station?: string;
}
export declare function iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any;
export interface IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#model IotwirelessTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#package_version IotwirelessTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#station IotwirelessTaskDefinition#station}
    */
    readonly station?: string;
}
export declare function iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any;
export interface IotwirelessTaskDefinitionUpdateLoRaWan {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#current_version IotwirelessTaskDefinition#current_version}
    */
    readonly currentVersion?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}
    */
    readonly sigKeyCrc?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_signature IotwirelessTaskDefinition#update_signature}
    */
    readonly updateSignature?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_version IotwirelessTaskDefinition#update_version}
    */
    readonly updateVersion?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
}
export declare function iotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWan): any;
export interface IotwirelessTaskDefinitionUpdate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}
    */
    readonly loRaWan?: IotwirelessTaskDefinitionUpdateLoRaWan;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_data_role IotwirelessTaskDefinition#update_data_role}
    */
    readonly updateDataRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html#update_data_source IotwirelessTaskDefinition#update_data_source}
    */
    readonly updateDataSource?: string;
}
export declare function iotwirelessTaskDefinitionUpdateToTerraform(struct?: IotwirelessTaskDefinitionUpdate): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html awscc_iotwireless_task_definition}
*/
export declare class IotwirelessTaskDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_task_definition.html awscc_iotwireless_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: IotwirelessTaskDefinitionConfig);
    get arn(): string;
    private _autoCreateTasks;
    get autoCreateTasks(): boolean | cdktf.IResolvable;
    set autoCreateTasks(value: boolean | cdktf.IResolvable);
    get autoCreateTasksInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _loRaWanUpdateGatewayTaskEntry?;
    get loRaWanUpdateGatewayTaskEntry(): IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
    set loRaWanUpdateGatewayTaskEntry(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry);
    resetLoRaWanUpdateGatewayTaskEntry(): void;
    get loRaWanUpdateGatewayTaskEntryInput(): IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): IotwirelessTaskDefinitionTags[];
    set tags(value: IotwirelessTaskDefinitionTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessTaskDefinitionTags[] | undefined;
    private _taskDefinitionType?;
    get taskDefinitionType(): string;
    set taskDefinitionType(value: string);
    resetTaskDefinitionType(): void;
    get taskDefinitionTypeInput(): string | undefined;
    private _update?;
    get update(): IotwirelessTaskDefinitionUpdate;
    set update(value: IotwirelessTaskDefinitionUpdate);
    resetUpdate(): void;
    get updateInput(): IotwirelessTaskDefinitionUpdate | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
