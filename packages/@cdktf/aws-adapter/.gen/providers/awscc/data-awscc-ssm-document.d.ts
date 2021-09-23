import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssm_document.html#id DataAwsccSsmDocument#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmDocumentAttachments extends cdktf.ComplexComputedList {
    get key(): string;
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccSsmDocumentAttachmentsToTerraform(struct?: DataAwsccSsmDocumentAttachments): any;
export declare class DataAwsccSsmDocumentRequires extends cdktf.ComplexComputedList {
    get name(): string;
    get version(): string;
}
export declare function dataAwsccSsmDocumentRequiresToTerraform(struct?: DataAwsccSsmDocumentRequires): any;
export declare class DataAwsccSsmDocumentTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSsmDocumentTagsToTerraform(struct?: DataAwsccSsmDocumentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_document.html awscc_ssm_document}
*/
export declare class DataAwsccSsmDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_document.html awscc_ssm_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmDocumentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmDocumentConfig);
    get attachments(): any;
    get content(): string;
    get documentFormat(): string;
    get documentType(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get requires(): any;
    get tags(): any;
    get targetType(): string;
    get versionName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
