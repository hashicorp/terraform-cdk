import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNimblestudioStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html#id DataAwsccNimblestudioStudio#id}
    */
    readonly id: string;
}
export declare class DataAwsccNimblestudioStudioStudioEncryptionConfiguration extends cdktf.ComplexComputedList {
    get keyArn(): string;
    get keyType(): string;
}
export declare function dataAwsccNimblestudioStudioStudioEncryptionConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioStudioEncryptionConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html awscc_nimblestudio_studio}
*/
export declare class DataAwsccNimblestudioStudio extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html awscc_nimblestudio_studio} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNimblestudioStudioConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStudioConfig);
    get adminRoleArn(): string;
    get displayName(): string;
    get homeRegion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ssoClientId(): string;
    get studioEncryptionConfiguration(): any;
    get studioId(): string;
    get studioName(): string;
    get studioUrl(): string;
    tags(key: string): string;
    get userRoleArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
