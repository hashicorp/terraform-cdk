import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotTopicRulesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rules.html awscc_iot_topic_rules}
*/
export declare class DataAwsccIotTopicRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rules.html awscc_iot_topic_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotTopicRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotTopicRulesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
