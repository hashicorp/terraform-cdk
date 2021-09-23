import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsDbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_endpoint.html#id DataAwsccRdsDbProxyEndpoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccRdsDbProxyEndpointTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRdsDbProxyEndpointTagsToTerraform(struct?: DataAwsccRdsDbProxyEndpointTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint}
*/
export declare class DataAwsccRdsDbProxyEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsDbProxyEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyEndpointConfig);
    get dbProxyEndpointArn(): string;
    get dbProxyEndpointName(): string;
    get dbProxyName(): string;
    get endpoint(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get isDefault(): cdktf.IResolvable;
    get tags(): any;
    get targetRole(): string;
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    get vpcSubnetIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
