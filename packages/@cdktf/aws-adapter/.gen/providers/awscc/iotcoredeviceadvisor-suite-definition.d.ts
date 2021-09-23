import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotcoredeviceadvisorSuiteDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}
    */
    readonly suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#tags IotcoredeviceadvisorSuiteDefinition#tags}
    */
    readonly tags?: IotcoredeviceadvisorSuiteDefinitionTags[];
}
export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}
    */
    readonly thingArn?: string;
}
export declare function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any;
export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {
    /**
    * The device permission role arn of the test suite.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}
    */
    readonly devicePermissionRoleArn: string;
    /**
    * The devices being tested in the test suite
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#devices IotcoredeviceadvisorSuiteDefinition#devices}
    */
    readonly devices?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[];
    /**
    * Whether the tests are intended for qualification in a suite.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}
    */
    readonly intendedForQualification?: boolean | cdktf.IResolvable;
    /**
    * The root group of the test suite.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#root_group IotcoredeviceadvisorSuiteDefinition#root_group}
    */
    readonly rootGroup: string;
    /**
    * The Name of the suite definition.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}
    */
    readonly suiteDefinitionName?: string;
}
export declare function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any;
export interface IotcoredeviceadvisorSuiteDefinitionTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#key IotcoredeviceadvisorSuiteDefinition#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#value IotcoredeviceadvisorSuiteDefinition#value}
    */
    readonly value: string;
}
export declare function iotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition}
*/
export declare class IotcoredeviceadvisorSuiteDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotcoredeviceadvisorSuiteDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: IotcoredeviceadvisorSuiteDefinitionConfig);
    get id(): string;
    get suiteDefinitionArn(): string;
    private _suiteDefinitionConfiguration;
    get suiteDefinitionConfiguration(): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
    set suiteDefinitionConfiguration(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration);
    get suiteDefinitionConfigurationInput(): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
    get suiteDefinitionId(): string;
    get suiteDefinitionVersion(): string;
    private _tags?;
    get tags(): IotcoredeviceadvisorSuiteDefinitionTags[];
    set tags(value: IotcoredeviceadvisorSuiteDefinitionTags[]);
    resetTags(): void;
    get tagsInput(): IotcoredeviceadvisorSuiteDefinitionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
