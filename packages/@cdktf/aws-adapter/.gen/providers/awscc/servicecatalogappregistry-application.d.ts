import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_application.html#description ServicecatalogappregistryApplication#description}
    */
    readonly description?: string;
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_application.html#name ServicecatalogappregistryApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_application.html#tags ServicecatalogappregistryApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_application.html awscc_servicecatalogappregistry_application}
*/
export declare class ServicecatalogappregistryApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_application.html awscc_servicecatalogappregistry_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryApplicationConfig);
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
