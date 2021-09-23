import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html#id DataAwsccConnectQuickConnect#id}
    */
    readonly id: string;
}
export declare class DataAwsccConnectQuickConnectQuickConnectConfigPhoneConfig extends cdktf.ComplexComputedList {
    get phoneNumber(): string;
}
export declare function dataAwsccConnectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigPhoneConfig): any;
export declare class DataAwsccConnectQuickConnectQuickConnectConfigQueueConfig extends cdktf.ComplexComputedList {
    get contactFlowArn(): string;
    get queueArn(): string;
}
export declare function dataAwsccConnectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigQueueConfig): any;
export declare class DataAwsccConnectQuickConnectQuickConnectConfigUserConfig extends cdktf.ComplexComputedList {
    get contactFlowArn(): string;
    get userArn(): string;
}
export declare function dataAwsccConnectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigUserConfig): any;
export declare class DataAwsccConnectQuickConnectQuickConnectConfig extends cdktf.ComplexComputedList {
    get phoneConfig(): any;
    get queueConfig(): any;
    get quickConnectType(): string;
    get userConfig(): any;
}
export declare function dataAwsccConnectQuickConnectQuickConnectConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfig): any;
export declare class DataAwsccConnectQuickConnectTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccConnectQuickConnectTagsToTerraform(struct?: DataAwsccConnectQuickConnectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html awscc_connect_quick_connect}
*/
export declare class DataAwsccConnectQuickConnect extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html awscc_connect_quick_connect} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConnectQuickConnectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConnectQuickConnectConfig);
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceArn(): string;
    get name(): string;
    get quickConnectArn(): string;
    get quickConnectConfig(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
