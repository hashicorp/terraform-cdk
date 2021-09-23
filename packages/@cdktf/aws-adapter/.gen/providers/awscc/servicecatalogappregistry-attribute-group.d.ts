import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryAttributeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html#attributes ServicecatalogappregistryAttributeGroup#attributes}
    */
    readonly attributes: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The description of the attribute group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html#description ServicecatalogappregistryAttributeGroup#description}
    */
    readonly description?: string;
    /**
    * The name of the attribute group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html#name ServicecatalogappregistryAttributeGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html#tags ServicecatalogappregistryAttributeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html awscc_servicecatalogappregistry_attribute_group}
*/
export declare class ServicecatalogappregistryAttributeGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group.html awscc_servicecatalogappregistry_attribute_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryAttributeGroupConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupConfig);
    get arn(): string;
    private _attributes;
    get attributes(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set attributes(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get attributesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
