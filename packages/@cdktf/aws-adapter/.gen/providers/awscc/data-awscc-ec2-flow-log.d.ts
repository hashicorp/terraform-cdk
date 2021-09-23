import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html#id DataAwsccEc2FlowLog#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2FlowLogTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2FlowLogTagsToTerraform(struct?: DataAwsccEc2FlowLogTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html awscc_ec2_flow_log}
*/
export declare class DataAwsccEc2FlowLog extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html awscc_ec2_flow_log} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2FlowLogConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2FlowLogConfig);
    get deliverLogsPermissionArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get logDestination(): string;
    get logDestinationType(): string;
    get logFormat(): string;
    get logGroupName(): string;
    get maxAggregationInterval(): number;
    get resourceId(): string;
    get resourceType(): string;
    get tags(): any;
    get trafficType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
