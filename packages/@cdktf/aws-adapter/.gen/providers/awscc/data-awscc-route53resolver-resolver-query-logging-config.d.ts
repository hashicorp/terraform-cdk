import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config.html#id DataAwsccRoute53ResolverResolverQueryLoggingConfig#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config.html awscc_route53resolver_resolver_query_logging_config}
*/
export declare class DataAwsccRoute53ResolverResolverQueryLoggingConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config.html awscc_route53resolver_resolver_query_logging_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig);
    get arn(): string;
    get associationCount(): number;
    get creationTime(): string;
    get creatorRequestId(): string;
    get destinationArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get ownerId(): string;
    get shareStatus(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
