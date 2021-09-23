import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationModuleDefaultVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of a module existing in the registry.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html#module_name CloudformationModuleDefaultVersion#module_name}
    */
    readonly moduleName?: string;
    /**
    * The ID of an existing version of the named module to set as the default.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html#version_id CloudformationModuleDefaultVersion#version_id}
    */
    readonly versionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version}
*/
export declare class CloudformationModuleDefaultVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationModuleDefaultVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudformationModuleDefaultVersionConfig);
    get arn(): string;
    get id(): string;
    private _moduleName?;
    get moduleName(): string;
    set moduleName(value: string);
    resetModuleName(): void;
    get moduleNameInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
