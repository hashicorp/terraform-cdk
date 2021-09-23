import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#key_group_config CloudfrontKeyGroup#key_group_config}
    */
    readonly keyGroupConfig: CloudfrontKeyGroupKeyGroupConfig;
}
export interface CloudfrontKeyGroupKeyGroupConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#comment CloudfrontKeyGroup#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#items CloudfrontKeyGroup#items}
    */
    readonly items: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html#name CloudfrontKeyGroup#name}
    */
    readonly name: string;
}
export declare function cloudfrontKeyGroupKeyGroupConfigToTerraform(struct?: CloudfrontKeyGroupKeyGroupConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group}
*/
export declare class CloudfrontKeyGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_key_group.html awscc_cloudfront_key_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontKeyGroupConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontKeyGroupConfig);
    get id(): string;
    private _keyGroupConfig;
    get keyGroupConfig(): CloudfrontKeyGroupKeyGroupConfig;
    set keyGroupConfig(value: CloudfrontKeyGroupKeyGroupConfig);
    get keyGroupConfigInput(): CloudfrontKeyGroupKeyGroupConfig;
    get lastModifiedTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
