import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ses_configuration_set.html#id DataAwsccSesConfigurationSet#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ses_configuration_set.html awscc_ses_configuration_set}
*/
export declare class DataAwsccSesConfigurationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ses_configuration_set.html awscc_ses_configuration_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSesConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSesConfigurationSetConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
