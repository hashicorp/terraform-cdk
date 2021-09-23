import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html#id DataAwsccElasticacheUserGroup#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html awscc_elasticache_user_group}
*/
export declare class DataAwsccElasticacheUserGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_user_group.html awscc_elasticache_user_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccElasticacheUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccElasticacheUserGroupConfig);
    get arn(): string;
    get engine(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get status(): string;
    get userGroupId(): string;
    get userIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
