import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html#id DataAwsccIotwirelessTaskDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion extends cdktf.ComplexComputedList {
    get model(): string;
    get packageVersion(): string;
    get station(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any;
export declare class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion extends cdktf.ComplexComputedList {
    get model(): string;
    get packageVersion(): string;
    get station(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any;
export declare class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry extends cdktf.ComplexComputedList {
    get currentVersion(): any;
    get updateVersion(): any;
}
export declare function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any;
export declare class DataAwsccIotwirelessTaskDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionTagsToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionTags): any;
export declare class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion extends cdktf.ComplexComputedList {
    get model(): string;
    get packageVersion(): string;
    get station(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any;
export declare class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion extends cdktf.ComplexComputedList {
    get model(): string;
    get packageVersion(): string;
    get station(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any;
export declare class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan extends cdktf.ComplexComputedList {
    get currentVersion(): any;
    get sigKeyCrc(): number;
    get updateSignature(): string;
    get updateVersion(): any;
}
export declare function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan): any;
export declare class DataAwsccIotwirelessTaskDefinitionUpdate extends cdktf.ComplexComputedList {
    get loRaWan(): any;
    get updateDataRole(): string;
    get updateDataSource(): string;
}
export declare function dataAwsccIotwirelessTaskDefinitionUpdateToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdate): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html awscc_iotwireless_task_definition}
*/
export declare class DataAwsccIotwirelessTaskDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_task_definition.html awscc_iotwireless_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessTaskDefinitionConfig);
    get arn(): string;
    get autoCreateTasks(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loRaWanUpdateGatewayTaskEntry(): any;
    get name(): string;
    get tags(): any;
    get taskDefinitionType(): string;
    get update(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
