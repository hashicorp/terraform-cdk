import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotTopicRuleDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html#id DataAwsccIotTopicRuleDestination#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotTopicRuleDestinationHttpUrlProperties extends cdktf.ComplexComputedList {
    get confirmationUrl(): string;
}
export declare function dataAwsccIotTopicRuleDestinationHttpUrlPropertiesToTerraform(struct?: DataAwsccIotTopicRuleDestinationHttpUrlProperties): any;
export declare class DataAwsccIotTopicRuleDestinationVpcProperties extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get securityGroups(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare function dataAwsccIotTopicRuleDestinationVpcPropertiesToTerraform(struct?: DataAwsccIotTopicRuleDestinationVpcProperties): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html awscc_iot_topic_rule_destination}
*/
export declare class DataAwsccIotTopicRuleDestination extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html awscc_iot_topic_rule_destination} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotTopicRuleDestinationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotTopicRuleDestinationConfig);
    get arn(): string;
    get httpUrlProperties(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get status(): string;
    get statusReason(): string;
    get vpcProperties(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
