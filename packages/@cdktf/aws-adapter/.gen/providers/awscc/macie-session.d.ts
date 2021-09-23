import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieSessionConfig extends cdktf.TerraformMetaArguments {
    /**
    * A enumeration value that specifies how frequently finding updates are published.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html#finding_publishing_frequency MacieSession#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * A enumeration value that specifies the status of the Macie Session.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html#status MacieSession#status}
    */
    readonly status?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html awscc_macie_session}
*/
export declare class MacieSession extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_session.html awscc_macie_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieSessionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: MacieSessionConfig);
    get awsAccountId(): string;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string | undefined;
    get id(): string;
    get serviceRole(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
