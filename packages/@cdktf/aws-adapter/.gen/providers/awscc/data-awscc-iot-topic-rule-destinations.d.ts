import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotTopicRuleDestinationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destinations.html awscc_iot_topic_rule_destinations}
*/
export declare class DataAwsccIotTopicRuleDestinations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destinations.html awscc_iot_topic_rule_destinations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotTopicRuleDestinationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotTopicRuleDestinationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
