import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationModuleVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_version.html#id DataAwsccCloudformationModuleVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_version.html awscc_cloudformation_module_version}
*/
export declare class DataAwsccCloudformationModuleVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_version.html awscc_cloudformation_module_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationModuleVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationModuleVersionConfig);
    get arn(): string;
    get description(): string;
    get documentationUrl(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get isDefaultVersion(): cdktf.IResolvable;
    get moduleName(): string;
    get modulePackage(): string;
    get schema(): string;
    get timeCreated(): string;
    get versionId(): string;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
