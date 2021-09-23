import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationModuleDefaultVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_default_version.html#id DataAwsccCloudformationModuleDefaultVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_default_version.html awscc_cloudformation_module_default_version}
*/
export declare class DataAwsccCloudformationModuleDefaultVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_module_default_version.html awscc_cloudformation_module_default_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationModuleDefaultVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationModuleDefaultVersionConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get moduleName(): string;
    get versionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
