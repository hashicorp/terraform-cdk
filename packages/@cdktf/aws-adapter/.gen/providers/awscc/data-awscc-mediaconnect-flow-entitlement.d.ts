import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowEntitlementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html#id DataAwsccMediaconnectFlowEntitlement#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediaconnectFlowEntitlementEncryption extends cdktf.ComplexComputedList {
    get algorithm(): string;
    get constantInitializationVector(): string;
    get deviceId(): string;
    get keyType(): string;
    get region(): string;
    get resourceId(): string;
    get roleArn(): string;
    get secretArn(): string;
    get url(): string;
}
export declare function dataAwsccMediaconnectFlowEntitlementEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowEntitlementEncryption): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement}
*/
export declare class DataAwsccMediaconnectFlowEntitlement extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowEntitlementConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowEntitlementConfig);
    get dataTransferSubscriberFeePercent(): number;
    get description(): string;
    get encryption(): any;
    get entitlementArn(): string;
    get entitlementStatus(): string;
    get flowArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get subscribers(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
