import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html#id DataAwsccIotAuthorizer#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotAuthorizerTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotAuthorizerTagsToTerraform(struct?: DataAwsccIotAuthorizerTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html awscc_iot_authorizer}
*/
export declare class DataAwsccIotAuthorizer extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html awscc_iot_authorizer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotAuthorizerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotAuthorizerConfig);
    get arn(): string;
    get authorizerFunctionArn(): string;
    get authorizerName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get signingDisabled(): cdktf.IResolvable;
    get status(): string;
    get tags(): any;
    get tokenKeyName(): string;
    tokenSigningPublicKeys(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
