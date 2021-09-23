import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html#id DataAwsccMediaconnectFlow#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediaconnectFlowSourceDecryption extends cdktf.ComplexComputedList {
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
export declare function dataAwsccMediaconnectFlowSourceDecryptionToTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryption): any;
export declare class DataAwsccMediaconnectFlowSource extends cdktf.ComplexComputedList {
    get decryption(): any;
    get description(): string;
    get entitlementArn(): string;
    get ingestIp(): string;
    get ingestPort(): number;
    get maxBitrate(): number;
    get maxLatency(): number;
    get name(): string;
    get protocol(): string;
    get sourceArn(): string;
    get streamId(): string;
    get vpcInterfaceName(): string;
    get whitelistCidr(): string;
}
export declare function dataAwsccMediaconnectFlowSourceToTerraform(struct?: DataAwsccMediaconnectFlowSource): any;
export declare class DataAwsccMediaconnectFlowSourceFailoverConfig extends cdktf.ComplexComputedList {
    get recoveryWindow(): number;
    get state(): string;
}
export declare function dataAwsccMediaconnectFlowSourceFailoverConfigToTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html awscc_mediaconnect_flow}
*/
export declare class DataAwsccMediaconnectFlow extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow.html awscc_mediaconnect_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowConfig);
    get availabilityZone(): string;
    get flowArn(): string;
    get flowAvailabilityZone(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get source(): any;
    get sourceFailoverConfig(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
