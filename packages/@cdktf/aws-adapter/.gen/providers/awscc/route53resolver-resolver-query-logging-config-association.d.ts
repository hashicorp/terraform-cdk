import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverResolverQueryLoggingConfigAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * ResolverQueryLogConfigId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html#resolver_query_log_config_id Route53ResolverResolverQueryLoggingConfigAssociation#resolver_query_log_config_id}
    */
    readonly resolverQueryLogConfigId?: string;
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html#resource_id Route53ResolverResolverQueryLoggingConfigAssociation#resource_id}
    */
    readonly resourceId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association}
*/
export declare class Route53ResolverResolverQueryLoggingConfigAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverResolverQueryLoggingConfigAssociationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53ResolverResolverQueryLoggingConfigAssociationConfig);
    get creationTime(): string;
    get error(): string;
    get errorMessage(): string;
    get id(): string;
    private _resolverQueryLogConfigId?;
    get resolverQueryLogConfigId(): string;
    set resolverQueryLogConfigId(value: string);
    resetResolverQueryLogConfigId(): void;
    get resolverQueryLogConfigIdInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    resetResourceId(): void;
    get resourceIdInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
