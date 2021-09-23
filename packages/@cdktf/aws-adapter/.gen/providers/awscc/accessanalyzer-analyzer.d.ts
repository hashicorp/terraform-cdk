import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Analyzer name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#analyzer_name AccessanalyzerAnalyzer#analyzer_name}
    */
    readonly analyzerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#archive_rules AccessanalyzerAnalyzer#archive_rules}
    */
    readonly archiveRules?: AccessanalyzerAnalyzerArchiveRules[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#tags AccessanalyzerAnalyzer#tags}
    */
    readonly tags?: AccessanalyzerAnalyzerTags[];
    /**
    * The type of the analyzer, must be ACCOUNT or ORGANIZATION
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#type AccessanalyzerAnalyzer#type}
    */
    readonly type: string;
}
export interface AccessanalyzerAnalyzerArchiveRulesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#contains AccessanalyzerAnalyzer#contains}
    */
    readonly contains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#eq AccessanalyzerAnalyzer#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#exists AccessanalyzerAnalyzer#exists}
    */
    readonly exists?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#neq AccessanalyzerAnalyzer#neq}
    */
    readonly neq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#property AccessanalyzerAnalyzer#property}
    */
    readonly property: string;
}
export declare function accessanalyzerAnalyzerArchiveRulesFilterToTerraform(struct?: AccessanalyzerAnalyzerArchiveRulesFilter): any;
export interface AccessanalyzerAnalyzerArchiveRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#filter AccessanalyzerAnalyzer#filter}
    */
    readonly filter: AccessanalyzerAnalyzerArchiveRulesFilter[];
    /**
    * The archive rule name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#rule_name AccessanalyzerAnalyzer#rule_name}
    */
    readonly ruleName: string;
}
export declare function accessanalyzerAnalyzerArchiveRulesToTerraform(struct?: AccessanalyzerAnalyzerArchiveRules): any;
export interface AccessanalyzerAnalyzerTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#key AccessanalyzerAnalyzer#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#value AccessanalyzerAnalyzer#value}
    */
    readonly value: string;
}
export declare function accessanalyzerAnalyzerTagsToTerraform(struct?: AccessanalyzerAnalyzerTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer}
*/
export declare class AccessanalyzerAnalyzer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessanalyzerAnalyzerConfig
    */
    constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig);
    private _analyzerName?;
    get analyzerName(): string;
    set analyzerName(value: string);
    resetAnalyzerName(): void;
    get analyzerNameInput(): string | undefined;
    private _archiveRules?;
    get archiveRules(): AccessanalyzerAnalyzerArchiveRules[];
    set archiveRules(value: AccessanalyzerAnalyzerArchiveRules[]);
    resetArchiveRules(): void;
    get archiveRulesInput(): AccessanalyzerAnalyzerArchiveRules[] | undefined;
    get arn(): string;
    get id(): string;
    private _tags?;
    get tags(): AccessanalyzerAnalyzerTags[];
    set tags(value: AccessanalyzerAnalyzerTags[]);
    resetTags(): void;
    get tagsInput(): AccessanalyzerAnalyzerTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
