import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_key_signing_key.html#id DataAwsccRoute53KeySigningKey#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_key_signing_key.html awscc_route53_key_signing_key}
*/
export declare class DataAwsccRoute53KeySigningKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_key_signing_key.html awscc_route53_key_signing_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53KeySigningKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53KeySigningKeyConfig);
    get hostedZoneId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyManagementServiceArn(): string;
    get name(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
