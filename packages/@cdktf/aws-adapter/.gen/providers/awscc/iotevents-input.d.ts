import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IoteventsInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * The definition of the input.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_definition IoteventsInput#input_definition}
    */
    readonly inputDefinition: IoteventsInputInputDefinition;
    /**
    * A brief description of the input.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_description IoteventsInput#input_description}
    */
    readonly inputDescription?: string;
    /**
    * The name of the input.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_name IoteventsInput#input_name}
    */
    readonly inputName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
  
  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#tags IoteventsInput#tags}
    */
    readonly tags?: IoteventsInputTags[];
}
export interface IoteventsInputInputDefinitionAttributes {
    /**
    * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.
  
  _Syntax_: `<field-name>.<field-name>...`
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#json_path IoteventsInput#json_path}
    */
    readonly jsonPath: string;
}
export declare function ioteventsInputInputDefinitionAttributesToTerraform(struct?: IoteventsInputInputDefinitionAttributes): any;
export interface IoteventsInputInputDefinition {
    /**
    * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#attributes IoteventsInput#attributes}
    */
    readonly attributes: IoteventsInputInputDefinitionAttributes[];
}
export declare function ioteventsInputInputDefinitionToTerraform(struct?: IoteventsInputInputDefinition): any;
export interface IoteventsInputTags {
    /**
    * Key of the Tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#key IoteventsInput#key}
    */
    readonly key: string;
    /**
    * Value of the Tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#value IoteventsInput#value}
    */
    readonly value: string;
}
export declare function ioteventsInputTagsToTerraform(struct?: IoteventsInputTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html awscc_iotevents_input}
*/
export declare class IoteventsInput extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html awscc_iotevents_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IoteventsInputConfig
    */
    constructor(scope: Construct, id: string, config: IoteventsInputConfig);
    get id(): string;
    private _inputDefinition;
    get inputDefinition(): IoteventsInputInputDefinition;
    set inputDefinition(value: IoteventsInputInputDefinition);
    get inputDefinitionInput(): IoteventsInputInputDefinition;
    private _inputDescription?;
    get inputDescription(): string;
    set inputDescription(value: string);
    resetInputDescription(): void;
    get inputDescriptionInput(): string | undefined;
    private _inputName?;
    get inputName(): string;
    set inputName(value: string);
    resetInputName(): void;
    get inputNameInput(): string | undefined;
    private _tags?;
    get tags(): IoteventsInputTags[];
    set tags(value: IoteventsInputTags[]);
    resetTags(): void;
    get tagsInput(): IoteventsInputTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
