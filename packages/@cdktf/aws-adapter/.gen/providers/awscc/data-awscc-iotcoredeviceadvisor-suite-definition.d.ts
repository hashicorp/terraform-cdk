import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html#id DataAwsccIotcoredeviceadvisorSuiteDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices extends cdktf.ComplexComputedList {
    get certificateArn(): string;
    get thingArn(): string;
}
export declare function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any;
export declare class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration extends cdktf.ComplexComputedList {
    get devicePermissionRoleArn(): string;
    get devices(): any;
    get intendedForQualification(): any;
    get rootGroup(): string;
    get suiteDefinitionName(): string;
}
export declare function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any;
export declare class DataAwsccIotcoredeviceadvisorSuiteDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition}
*/
export declare class DataAwsccIotcoredeviceadvisorSuiteDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get suiteDefinitionArn(): string;
    get suiteDefinitionConfiguration(): any;
    get suiteDefinitionId(): string;
    get suiteDefinitionVersion(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
