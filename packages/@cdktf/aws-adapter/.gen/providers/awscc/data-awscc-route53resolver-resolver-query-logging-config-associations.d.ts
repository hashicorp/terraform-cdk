import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_associations.html awscc_route53resolver_resolver_query_logging_config_associations}
*/
export declare class DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_associations.html awscc_route53resolver_resolver_query_logging_config_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
