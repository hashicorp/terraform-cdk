import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotfleethubApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html#id DataAwsccIotfleethubApplication#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotfleethubApplicationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotfleethubApplicationTagsToTerraform(struct?: DataAwsccIotfleethubApplicationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html awscc_iotfleethub_application}
*/
export declare class DataAwsccIotfleethubApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotfleethub_application.html awscc_iotfleethub_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotfleethubApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotfleethubApplicationConfig);
    get applicationArn(): string;
    get applicationCreationDate(): number;
    get applicationDescription(): string;
    get applicationId(): string;
    get applicationLastUpdateDate(): number;
    get applicationName(): string;
    get applicationState(): string;
    get applicationUrl(): string;
    get errorMessage(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get roleArn(): string;
    get ssoClientId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
