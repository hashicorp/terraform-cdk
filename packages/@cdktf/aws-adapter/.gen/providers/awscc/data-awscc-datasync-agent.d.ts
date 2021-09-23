import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncAgentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html#id DataAwsccDatasyncAgent#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncAgentTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncAgentTagsToTerraform(struct?: DataAwsccDatasyncAgentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html awscc_datasync_agent}
*/
export declare class DataAwsccDatasyncAgent extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_agent.html awscc_datasync_agent} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncAgentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncAgentConfig);
    get activationKey(): string;
    get agentArn(): string;
    get agentName(): string;
    get endpointType(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get securityGroupArns(): string[];
    get subnetArns(): string[];
    get tags(): any;
    get vpcEndpointId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
