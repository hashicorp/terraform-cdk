import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsDbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#db_proxy_endpoint_name RdsDbProxyEndpoint#db_proxy_endpoint_name}
    */
    readonly dbProxyEndpointName: string;
    /**
    * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#db_proxy_name RdsDbProxyEndpoint#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#tags RdsDbProxyEndpoint#tags}
    */
    readonly tags?: RdsDbProxyEndpointTags[];
    /**
    * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#target_role RdsDbProxyEndpoint#target_role}
    */
    readonly targetRole?: string;
    /**
    * VPC security group IDs to associate with the new DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#vpc_security_group_ids RdsDbProxyEndpoint#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * VPC subnet IDs to associate with the new DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#vpc_subnet_ids RdsDbProxyEndpoint#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
}
export interface RdsDbProxyEndpointTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#key RdsDbProxyEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#value RdsDbProxyEndpoint#value}
    */
    readonly value?: string;
}
export declare function rdsDbProxyEndpointTagsToTerraform(struct?: RdsDbProxyEndpointTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint}
*/
export declare class RdsDbProxyEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsDbProxyEndpointConfig
    */
    constructor(scope: Construct, id: string, config: RdsDbProxyEndpointConfig);
    get dbProxyEndpointArn(): string;
    private _dbProxyEndpointName;
    get dbProxyEndpointName(): string;
    set dbProxyEndpointName(value: string);
    get dbProxyEndpointNameInput(): string;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get endpoint(): string;
    get id(): string;
    get isDefault(): cdktf.IResolvable;
    private _tags?;
    get tags(): RdsDbProxyEndpointTags[];
    set tags(value: RdsDbProxyEndpointTags[]);
    resetTags(): void;
    get tagsInput(): RdsDbProxyEndpointTags[] | undefined;
    private _targetRole?;
    get targetRole(): string;
    set targetRole(value: string);
    resetTargetRole(): void;
    get targetRoleInput(): string | undefined;
    get vpcId(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _vpcSubnetIds;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
