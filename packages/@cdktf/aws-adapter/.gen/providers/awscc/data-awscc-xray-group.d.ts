import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccXrayGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html#id DataAwsccXrayGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccXrayGroupInsightsConfiguration extends cdktf.ComplexComputedList {
    get insightsEnabled(): any;
    get notificationsEnabled(): any;
}
export declare function dataAwsccXrayGroupInsightsConfigurationToTerraform(struct?: DataAwsccXrayGroupInsightsConfiguration): any;
export declare class DataAwsccXrayGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccXrayGroupTagsToTerraform(struct?: DataAwsccXrayGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html awscc_xray_group}
*/
export declare class DataAwsccXrayGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html awscc_xray_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccXrayGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccXrayGroupConfig);
    get filterExpression(): string;
    get groupArn(): string;
    get groupName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get insightsConfiguration(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
