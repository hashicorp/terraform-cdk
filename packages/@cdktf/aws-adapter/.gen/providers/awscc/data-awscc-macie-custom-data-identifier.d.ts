import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMacieCustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html#id DataAwsccMacieCustomDataIdentifier#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html awscc_macie_custom_data_identifier}
*/
export declare class DataAwsccMacieCustomDataIdentifier extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/macie_custom_data_identifier.html awscc_macie_custom_data_identifier} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMacieCustomDataIdentifierConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMacieCustomDataIdentifierConfig);
    get arn(): string;
    get createdAt(): string;
    get deleted(): cdktf.IResolvable;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ignoreWords(): string[];
    get keywords(): string[];
    get maximumMatchDistance(): number;
    get name(): string;
    get regex(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
