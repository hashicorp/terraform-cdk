import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationModuleVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the module being registered.
  
  Recommended module naming pattern: company_or_organization::service::type::MODULE.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html#module_name CloudformationModuleVersion#module_name}
    */
    readonly moduleName: string;
    /**
    * The url to the S3 bucket containing the schema and template fragment for the module you want to register.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html#module_package CloudformationModuleVersion#module_package}
    */
    readonly modulePackage: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html awscc_cloudformation_module_version}
*/
export declare class CloudformationModuleVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html awscc_cloudformation_module_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationModuleVersionConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationModuleVersionConfig);
    get arn(): string;
    get description(): string;
    get documentationUrl(): string;
    get id(): string;
    get isDefaultVersion(): cdktf.IResolvable;
    private _moduleName;
    get moduleName(): string;
    set moduleName(value: string);
    get moduleNameInput(): string;
    private _modulePackage;
    get modulePackage(): string;
    set modulePackage(value: string);
    get modulePackageInput(): string;
    get schema(): string;
    get timeCreated(): string;
    get versionId(): string;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
