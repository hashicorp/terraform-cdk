import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowOutputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html#id DataAwsccMediaconnectFlowOutput#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediaconnectFlowOutputEncryption extends cdktf.ComplexComputedList {
    get algorithm(): string;
    get keyType(): string;
    get roleArn(): string;
    get secretArn(): string;
}
export declare function dataAwsccMediaconnectFlowOutputEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowOutputEncryption): any;
export declare class DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment extends cdktf.ComplexComputedList {
    get vpcInterfaceName(): string;
}
export declare function dataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html awscc_mediaconnect_flow_output}
*/
export declare class DataAwsccMediaconnectFlowOutput extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html awscc_mediaconnect_flow_output} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowOutputConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowOutputConfig);
    get cidrAllowList(): string[];
    get description(): string;
    get destination(): string;
    get encryption(): any;
    get flowArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get maxLatency(): number;
    get name(): string;
    get outputArn(): string;
    get port(): number;
    get protocol(): string;
    get remoteId(): string;
    get smoothingLatency(): number;
    get streamId(): string;
    get vpcInterfaceAttachment(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
