import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the configuration set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_configuration_set.html#name SesConfigurationSet#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ses_configuration_set.html awscc_ses_configuration_set}
*/
export declare class SesConfigurationSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ses_configuration_set.html awscc_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesConfigurationSetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SesConfigurationSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
