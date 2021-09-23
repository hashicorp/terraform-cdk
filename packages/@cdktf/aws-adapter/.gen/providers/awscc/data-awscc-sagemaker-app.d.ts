import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app.html#id DataAwsccSagemakerApp#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerAppResourceSpec extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get sageMakerImageArn(): string;
    get sageMakerImageVersionArn(): string;
}
export declare function dataAwsccSagemakerAppResourceSpecToTerraform(struct?: DataAwsccSagemakerAppResourceSpec): any;
export declare class DataAwsccSagemakerAppTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerAppTagsToTerraform(struct?: DataAwsccSagemakerAppTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app.html awscc_sagemaker_app}
*/
export declare class DataAwsccSagemakerApp extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app.html awscc_sagemaker_app} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerAppConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerAppConfig);
    get appArn(): string;
    get appName(): string;
    get appType(): string;
    get domainId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resourceSpec(): any;
    get tags(): any;
    get userProfileName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
