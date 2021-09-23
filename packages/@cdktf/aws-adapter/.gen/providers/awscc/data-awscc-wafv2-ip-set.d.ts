import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWafv2IpSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_ip_set.html#id DataAwsccWafv2IpSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccWafv2IpSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccWafv2IpSetTagsToTerraform(struct?: DataAwsccWafv2IpSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_ip_set.html awscc_wafv2_ip_set}
*/
export declare class DataAwsccWafv2IpSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_ip_set.html awscc_wafv2_ip_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWafv2IpSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccWafv2IpSetConfig);
    get addresses(): string[];
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ipAddressVersion(): string;
    get name(): string;
    get scope(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
