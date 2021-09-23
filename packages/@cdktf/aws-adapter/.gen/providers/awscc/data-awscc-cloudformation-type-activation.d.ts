import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationTypeActivationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html#id DataAwsccCloudformationTypeActivation#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudformationTypeActivationLoggingConfig extends cdktf.ComplexComputedList {
    get logGroupName(): string;
    get logRoleArn(): string;
}
export declare function dataAwsccCloudformationTypeActivationLoggingConfigToTerraform(struct?: DataAwsccCloudformationTypeActivationLoggingConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html awscc_cloudformation_type_activation}
*/
export declare class DataAwsccCloudformationTypeActivation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_type_activation.html awscc_cloudformation_type_activation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationTypeActivationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationTypeActivationConfig);
    get arn(): string;
    get autoUpdate(): cdktf.IResolvable;
    get executionRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loggingConfig(): any;
    get majorVersion(): string;
    get publicTypeArn(): string;
    get publisherId(): string;
    get type(): string;
    get typeName(): string;
    get typeNameAlias(): string;
    get versionBump(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
