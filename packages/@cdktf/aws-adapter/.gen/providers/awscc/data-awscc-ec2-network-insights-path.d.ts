import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html#id DataAwsccEc2NetworkInsightsPath#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2NetworkInsightsPathTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2NetworkInsightsPathTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsPathTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html awscc_ec2_network_insights_path}
*/
export declare class DataAwsccEc2NetworkInsightsPath extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_path.html awscc_ec2_network_insights_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2NetworkInsightsPathConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsPathConfig);
    get createdDate(): string;
    get destination(): string;
    get destinationIp(): string;
    get destinationPort(): number;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get networkInsightsPathArn(): string;
    get networkInsightsPathId(): string;
    get protocol(): string;
    get source(): string;
    get sourceIp(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
