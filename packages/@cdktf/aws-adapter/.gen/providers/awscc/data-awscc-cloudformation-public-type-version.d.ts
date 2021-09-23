import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationPublicTypeVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html#id DataAwsccCloudformationPublicTypeVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html awscc_cloudformation_public_type_version}
*/
export declare class DataAwsccCloudformationPublicTypeVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html awscc_cloudformation_public_type_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationPublicTypeVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationPublicTypeVersionConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get logDeliveryBucket(): string;
    get publicTypeArn(): string;
    get publicVersionNumber(): string;
    get publisherId(): string;
    get type(): string;
    get typeName(): string;
    get typeVersionArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
