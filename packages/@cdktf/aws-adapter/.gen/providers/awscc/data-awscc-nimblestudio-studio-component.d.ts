import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNimblestudioStudioComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html#id DataAwsccNimblestudioStudioComponent#id}
    */
    readonly id: string;
}
export declare class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any;
export declare class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration extends cdktf.ComplexComputedList {
    get computerAttributes(): any;
    get directoryId(): string;
    get organizationalUnitDistinguishedName(): string;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any;
export declare class DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration extends cdktf.ComplexComputedList {
    get activeDirectoryUser(): string;
    get endpoint(): string;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration): any;
export declare class DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration extends cdktf.ComplexComputedList {
    get endpoint(): string;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any;
export declare class DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration extends cdktf.ComplexComputedList {
    get endpoint(): string;
    get fileSystemId(): string;
    get linuxMountPoint(): string;
    get shareName(): string;
    get windowsMountDrive(): string;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any;
export declare class DataAwsccNimblestudioStudioComponentConfiguration extends cdktf.ComplexComputedList {
    get activeDirectoryConfiguration(): any;
    get computeFarmConfiguration(): any;
    get licenseServiceConfiguration(): any;
    get sharedFileSystemConfiguration(): any;
}
export declare function dataAwsccNimblestudioStudioComponentConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfiguration): any;
export declare class DataAwsccNimblestudioStudioComponentInitializationScripts extends cdktf.ComplexComputedList {
    get launchProfileProtocolVersion(): string;
    get platform(): string;
    get runContext(): string;
    get script(): string;
}
export declare function dataAwsccNimblestudioStudioComponentInitializationScriptsToTerraform(struct?: DataAwsccNimblestudioStudioComponentInitializationScripts): any;
export declare class DataAwsccNimblestudioStudioComponentScriptParameters extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNimblestudioStudioComponentScriptParametersToTerraform(struct?: DataAwsccNimblestudioStudioComponentScriptParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html awscc_nimblestudio_studio_component}
*/
export declare class DataAwsccNimblestudioStudioComponent extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio_component.html awscc_nimblestudio_studio_component} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNimblestudioStudioComponentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStudioComponentConfig);
    get configuration(): any;
    get description(): string;
    get ec2SecurityGroupIds(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get initializationScripts(): any;
    get name(): string;
    get scriptParameters(): any;
    get studioComponentId(): string;
    get studioId(): string;
    get subtype(): string;
    tags(key: string): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
