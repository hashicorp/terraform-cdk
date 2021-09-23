import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationResourceVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html#id DataAwsccCloudformationResourceVersion#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudformationResourceVersionLoggingConfig extends cdktf.ComplexComputedList {
    get logGroupName(): string;
    get logRoleArn(): string;
}
export declare function dataAwsccCloudformationResourceVersionLoggingConfigToTerraform(struct?: DataAwsccCloudformationResourceVersionLoggingConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html awscc_cloudformation_resource_version}
*/
export declare class DataAwsccCloudformationResourceVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_resource_version.html awscc_cloudformation_resource_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationResourceVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationResourceVersionConfig);
    get arn(): string;
    get executionRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get isDefaultVersion(): cdktf.IResolvable;
    get loggingConfig(): any;
    get provisioningType(): string;
    get schemaHandlerPackage(): string;
    get typeArn(): string;
    get typeName(): string;
    get versionId(): string;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
