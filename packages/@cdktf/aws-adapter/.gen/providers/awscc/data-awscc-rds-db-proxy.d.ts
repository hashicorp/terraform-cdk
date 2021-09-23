import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsDbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html#id DataAwsccRdsDbProxy#id}
    */
    readonly id: string;
}
export declare class DataAwsccRdsDbProxyAuth extends cdktf.ComplexComputedList {
    get authScheme(): string;
    get description(): string;
    get iamAuth(): string;
    get secretArn(): string;
    get userName(): string;
}
export declare function dataAwsccRdsDbProxyAuthToTerraform(struct?: DataAwsccRdsDbProxyAuth): any;
export declare class DataAwsccRdsDbProxyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRdsDbProxyTagsToTerraform(struct?: DataAwsccRdsDbProxyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html awscc_rds_db_proxy}
*/
export declare class DataAwsccRdsDbProxy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html awscc_rds_db_proxy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsDbProxyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyConfig);
    get auth(): any;
    get dbProxyArn(): string;
    get dbProxyName(): string;
    get debugLogging(): cdktf.IResolvable;
    get endpoint(): string;
    get engineFamily(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get idleClientTimeout(): number;
    get requireTls(): cdktf.IResolvable;
    get roleArn(): string;
    get tags(): any;
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    get vpcSubnetIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
