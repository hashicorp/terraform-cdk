import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieCustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#description MacieCustomDataIdentifier#description}
    */
    readonly description?: string;
    /**
    * Words to be ignored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#ignore_words MacieCustomDataIdentifier#ignore_words}
    */
    readonly ignoreWords?: string[];
    /**
    * Keywords to be matched against.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#keywords MacieCustomDataIdentifier#keywords}
    */
    readonly keywords?: string[];
    /**
    * Maximum match distance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#maximum_match_distance MacieCustomDataIdentifier#maximum_match_distance}
    */
    readonly maximumMatchDistance?: number;
    /**
    * Name of custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#name MacieCustomDataIdentifier#name}
    */
    readonly name: string;
    /**
    * Regular expression for custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html#regex MacieCustomDataIdentifier#regex}
    */
    readonly regex: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html awscc_macie_custom_data_identifier}
*/
export declare class MacieCustomDataIdentifier extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_custom_data_identifier.html awscc_macie_custom_data_identifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieCustomDataIdentifierConfig
    */
    constructor(scope: Construct, id: string, config: MacieCustomDataIdentifierConfig);
    get arn(): string;
    get createdAt(): string;
    get deleted(): cdktf.IResolvable;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ignoreWords?;
    get ignoreWords(): string[];
    set ignoreWords(value: string[]);
    resetIgnoreWords(): void;
    get ignoreWordsInput(): string[] | undefined;
    private _keywords?;
    get keywords(): string[];
    set keywords(value: string[]);
    resetKeywords(): void;
    get keywordsInput(): string[] | undefined;
    private _maximumMatchDistance?;
    get maximumMatchDistance(): number;
    set maximumMatchDistance(value: number);
    resetMaximumMatchDistance(): void;
    get maximumMatchDistanceInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regex;
    get regex(): string;
    set regex(value: string);
    get regexInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
