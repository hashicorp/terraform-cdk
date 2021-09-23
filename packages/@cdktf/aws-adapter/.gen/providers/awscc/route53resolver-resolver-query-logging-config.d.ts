import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverResolverQueryLoggingConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * destination arn
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config.html#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * ResolverQueryLogConfigName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config.html#name Route53ResolverResolverQueryLoggingConfig#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config.html awscc_route53resolver_resolver_query_logging_config}
*/
export declare class Route53ResolverResolverQueryLoggingConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config.html awscc_route53resolver_resolver_query_logging_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverResolverQueryLoggingConfigConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53ResolverResolverQueryLoggingConfigConfig);
    get arn(): string;
    get associationCount(): number;
    get creationTime(): string;
    get creatorRequestId(): string;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    resetDestinationArn(): void;
    get destinationArnInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get ownerId(): string;
    get shareStatus(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
