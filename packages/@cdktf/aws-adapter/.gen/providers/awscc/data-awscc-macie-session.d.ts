import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMacieSessionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/macie_session.html#id DataAwsccMacieSession#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/macie_session.html awscc_macie_session}
*/
export declare class DataAwsccMacieSession extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/macie_session.html awscc_macie_session} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMacieSessionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMacieSessionConfig);
    get awsAccountId(): string;
    get findingPublishingFrequency(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get serviceRole(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
