import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html#id DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association}
*/
export declare class DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig);
    get creationTime(): string;
    get error(): string;
    get errorMessage(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resolverQueryLogConfigId(): string;
    get resourceId(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
