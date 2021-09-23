import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowSourceAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_source.html#id DataAwsccMediaconnectFlowSourceA#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediaconnectFlowSourceDecryptionA extends cdktf.ComplexComputedList {
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
export declare function dataAwsccMediaconnectFlowSourceDecryptionAToTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryptionA): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_source.html awscc_mediaconnect_flow_source}
*/
export declare class DataAwsccMediaconnectFlowSourceA extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_source.html awscc_mediaconnect_flow_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowSourceAConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowSourceAConfig);
    get decryption(): any;
    get description(): string;
    get entitlementArn(): string;
    get flowArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
