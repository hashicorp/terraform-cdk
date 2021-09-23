import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotTopicRuleDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#http_url_properties IotTopicRuleDestination#http_url_properties}
    */
    readonly httpUrlProperties?: IotTopicRuleDestinationHttpUrlProperties;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#status IotTopicRuleDestination#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#vpc_properties IotTopicRuleDestination#vpc_properties}
    */
    readonly vpcProperties?: IotTopicRuleDestinationVpcProperties;
}
export interface IotTopicRuleDestinationHttpUrlProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#confirmation_url IotTopicRuleDestination#confirmation_url}
    */
    readonly confirmationUrl?: string;
}
export declare function iotTopicRuleDestinationHttpUrlPropertiesToTerraform(struct?: IotTopicRuleDestinationHttpUrlProperties): any;
export interface IotTopicRuleDestinationVpcProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#role_arn IotTopicRuleDestination#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#security_groups IotTopicRuleDestination#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#subnet_ids IotTopicRuleDestination#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#vpc_id IotTopicRuleDestination#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function iotTopicRuleDestinationVpcPropertiesToTerraform(struct?: IotTopicRuleDestinationVpcProperties): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html awscc_iot_topic_rule_destination}
*/
export declare class IotTopicRuleDestination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html awscc_iot_topic_rule_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleDestinationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotTopicRuleDestinationConfig);
    get arn(): string;
    private _httpUrlProperties?;
    get httpUrlProperties(): IotTopicRuleDestinationHttpUrlProperties;
    set httpUrlProperties(value: IotTopicRuleDestinationHttpUrlProperties);
    resetHttpUrlProperties(): void;
    get httpUrlPropertiesInput(): IotTopicRuleDestinationHttpUrlProperties | undefined;
    get id(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    get statusReason(): string;
    private _vpcProperties?;
    get vpcProperties(): IotTopicRuleDestinationVpcProperties;
    set vpcProperties(value: IotTopicRuleDestinationVpcProperties);
    resetVpcProperties(): void;
    get vpcPropertiesInput(): IotTopicRuleDestinationVpcProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
