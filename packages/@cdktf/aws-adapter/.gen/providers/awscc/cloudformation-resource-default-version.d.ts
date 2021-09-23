import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationResourceDefaultVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the type being registered.
  
  We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#type_name CloudformationResourceDefaultVersion#type_name}
    */
    readonly typeName?: string;
    /**
    * The Amazon Resource Name (ARN) of the type version.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#type_version_arn CloudformationResourceDefaultVersion#type_version_arn}
    */
    readonly typeVersionArn?: string;
    /**
    * The ID of an existing version of the resource to set as the default.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#version_id CloudformationResourceDefaultVersion#version_id}
    */
    readonly versionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html awscc_cloudformation_resource_default_version}
*/
export declare class CloudformationResourceDefaultVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html awscc_cloudformation_resource_default_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationResourceDefaultVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudformationResourceDefaultVersionConfig);
    get arn(): string;
    get id(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _typeVersionArn?;
    get typeVersionArn(): string;
    set typeVersionArn(value: string);
    resetTypeVersionArn(): void;
    get typeVersionArnInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
