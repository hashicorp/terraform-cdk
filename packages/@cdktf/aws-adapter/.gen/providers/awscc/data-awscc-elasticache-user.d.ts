import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user.html#id DataAwsccElasticacheUser#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user.html awscc_elasticache_user}
*/
export declare class DataAwsccElasticacheUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user.html awscc_elasticache_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccElasticacheUserConfig);
    get accessString(): string;
    get arn(): string;
    get engine(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get noPasswordRequired(): cdktf.IResolvable;
    get passwords(): string[];
    get status(): string;
    get userId(): string;
    get userName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
