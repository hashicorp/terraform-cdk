import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_component.html#id DataAwsccImagebuilderComponent#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_component.html awscc_imagebuilder_component}
*/
export declare class DataAwsccImagebuilderComponent extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_component.html awscc_imagebuilder_component} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderComponentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderComponentConfig);
    get arn(): string;
    get changeDescription(): string;
    get data(): string;
    get description(): string;
    get encrypted(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get name(): string;
    get platform(): string;
    get supportedOsVersions(): string[];
    tags(key: string): string;
    get type(): string;
    get uri(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
