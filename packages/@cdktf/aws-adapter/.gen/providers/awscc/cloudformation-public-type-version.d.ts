import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationPublicTypeVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * A url to the S3 bucket where logs for the testType run will be available
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}
    */
    readonly logDeliveryBucket?: string;
    /**
    * The version number of a public third-party extension
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#public_version_number CloudformationPublicTypeVersion#public_version_number}
    */
    readonly publicVersionNumber?: string;
    /**
    * The kind of extension
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#type CloudformationPublicTypeVersion#type}
    */
    readonly type?: string;
    /**
    * The name of the type being registered.
  
  We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#type_name CloudformationPublicTypeVersion#type_name}
    */
    readonly typeName?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html awscc_cloudformation_public_type_version}
*/
export declare class CloudformationPublicTypeVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html awscc_cloudformation_public_type_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationPublicTypeVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudformationPublicTypeVersionConfig);
    get arn(): string;
    get id(): string;
    private _logDeliveryBucket?;
    get logDeliveryBucket(): string;
    set logDeliveryBucket(value: string);
    resetLogDeliveryBucket(): void;
    get logDeliveryBucketInput(): string | undefined;
    get publicTypeArn(): string;
    private _publicVersionNumber?;
    get publicVersionNumber(): string;
    set publicVersionNumber(value: string);
    resetPublicVersionNumber(): void;
    get publicVersionNumberInput(): string | undefined;
    get publisherId(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    get typeVersionArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
