import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorVariableConfig extends cdktf.TerraformMetaArguments {
    /**
    * The source of the data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#data_source FrauddetectorVariable#data_source}
    */
    readonly dataSource: string;
    /**
    * The data type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#data_type FrauddetectorVariable#data_type}
    */
    readonly dataType: string;
    /**
    * The default value for the variable when no value is received.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#default_value FrauddetectorVariable#default_value}
    */
    readonly defaultValue: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#description FrauddetectorVariable#description}
    */
    readonly description?: string;
    /**
    * The name of the variable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#name FrauddetectorVariable#name}
    */
    readonly name: string;
    /**
    * Tags associated with this variable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#tags FrauddetectorVariable#tags}
    */
    readonly tags?: FrauddetectorVariableTags[];
    /**
    * The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#variable_type FrauddetectorVariable#variable_type}
    */
    readonly variableType?: string;
}
export interface FrauddetectorVariableTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#key FrauddetectorVariable#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#value FrauddetectorVariable#value}
    */
    readonly value: string;
}
export declare function frauddetectorVariableTagsToTerraform(struct?: FrauddetectorVariableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html awscc_frauddetector_variable}
*/
export declare class FrauddetectorVariable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html awscc_frauddetector_variable} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorVariableConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorVariableConfig);
    get arn(): string;
    get createdTime(): string;
    private _dataSource;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string;
    private _dataType;
    get dataType(): string;
    set dataType(value: string);
    get dataTypeInput(): string;
    private _defaultValue;
    get defaultValue(): string;
    set defaultValue(value: string);
    get defaultValueInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): FrauddetectorVariableTags[];
    set tags(value: FrauddetectorVariableTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorVariableTags[] | undefined;
    private _variableType?;
    get variableType(): string;
    set variableType(value: string);
    resetVariableType(): void;
    get variableTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
