import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * A description of the registry. If description is not provided, there will not be any default value for this.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#description GlueRegistry#description}
    */
    readonly description?: string;
    /**
    * Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#name GlueRegistry#name}
    */
    readonly name: string;
    /**
    * List of tags to tag the Registry
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#tags GlueRegistry#tags}
    */
    readonly tags?: GlueRegistryTags[];
}
export interface GlueRegistryTags {
    /**
    * A key to identify the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#key GlueRegistry#key}
    */
    readonly key: string;
    /**
    * Corresponding tag value for the key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html#value GlueRegistry#value}
    */
    readonly value: string;
}
export declare function glueRegistryTagsToTerraform(struct?: GlueRegistryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html awscc_glue_registry}
*/
export declare class GlueRegistry extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_registry.html awscc_glue_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueRegistryConfig
    */
    constructor(scope: Construct, id: string, config: GlueRegistryConfig);
    get arn(): string;
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
    get tags(): GlueRegistryTags[];
    set tags(value: GlueRegistryTags[]);
    resetTags(): void;
    get tagsInput(): GlueRegistryTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
