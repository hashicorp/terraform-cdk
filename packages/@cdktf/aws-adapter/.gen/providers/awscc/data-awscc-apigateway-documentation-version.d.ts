import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayDocumentationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_documentation_version.html#id DataAwsccApigatewayDocumentationVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_documentation_version.html awscc_apigateway_documentation_version}
*/
export declare class DataAwsccApigatewayDocumentationVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_documentation_version.html awscc_apigateway_documentation_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayDocumentationVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayDocumentationVersionConfig);
    get description(): string;
    get documentationVersion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get restApiId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
