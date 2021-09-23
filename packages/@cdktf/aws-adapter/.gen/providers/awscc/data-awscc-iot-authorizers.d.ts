import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotAuthorizersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizers.html awscc_iot_authorizers}
*/
export declare class DataAwsccIotAuthorizers extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizers.html awscc_iot_authorizers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotAuthorizersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotAuthorizersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
