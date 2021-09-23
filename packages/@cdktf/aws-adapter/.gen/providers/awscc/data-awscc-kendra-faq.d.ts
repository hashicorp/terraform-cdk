import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKendraFaqConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kendra_faq.html#id DataAwsccKendraFaq#id}
    */
    readonly id: string;
}
export declare class DataAwsccKendraFaqS3Path extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccKendraFaqS3PathToTerraform(struct?: DataAwsccKendraFaqS3Path): any;
export declare class DataAwsccKendraFaqTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKendraFaqTagsToTerraform(struct?: DataAwsccKendraFaqTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_faq.html awscc_kendra_faq}
*/
export declare class DataAwsccKendraFaq extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_faq.html awscc_kendra_faq} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKendraFaqConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKendraFaqConfig);
    get arn(): string;
    get description(): string;
    get fileFormat(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get indexId(): string;
    get name(): string;
    get roleArn(): string;
    get s3Path(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
