import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigAggregationAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The 12-digit account ID of the account authorized to aggregate data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#authorized_account_id ConfigAggregationAuthorization#authorized_account_id}
    */
    readonly authorizedAccountId: string;
    /**
    * The region authorized to collect aggregated data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#authorized_aws_region ConfigAggregationAuthorization#authorized_aws_region}
    */
    readonly authorizedAwsRegion: string;
    /**
    * The tags for the AggregationAuthorization.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#tags ConfigAggregationAuthorization#tags}
    */
    readonly tags?: ConfigAggregationAuthorizationTags[];
}
export interface ConfigAggregationAuthorizationTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#key ConfigAggregationAuthorization#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html#value ConfigAggregationAuthorization#value}
    */
    readonly value: string;
}
export declare function configAggregationAuthorizationTagsToTerraform(struct?: ConfigAggregationAuthorizationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html awscc_config_aggregation_authorization}
*/
export declare class ConfigAggregationAuthorization extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_aggregation_authorization.html awscc_config_aggregation_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigAggregationAuthorizationConfig
    */
    constructor(scope: Construct, id: string, config: ConfigAggregationAuthorizationConfig);
    get aggregationAuthorizationArn(): string;
    private _authorizedAccountId;
    get authorizedAccountId(): string;
    set authorizedAccountId(value: string);
    get authorizedAccountIdInput(): string;
    private _authorizedAwsRegion;
    get authorizedAwsRegion(): string;
    set authorizedAwsRegion(value: string);
    get authorizedAwsRegionInput(): string;
    get id(): string;
    private _tags?;
    get tags(): ConfigAggregationAuthorizationTags[];
    set tags(value: ConfigAggregationAuthorizationTags[]);
    resetTags(): void;
    get tagsInput(): ConfigAggregationAuthorizationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
