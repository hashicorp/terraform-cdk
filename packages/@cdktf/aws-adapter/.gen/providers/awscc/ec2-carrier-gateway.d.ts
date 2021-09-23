import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2CarrierGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html#tags Ec2CarrierGateway#tags}
    */
    readonly tags?: Ec2CarrierGatewayTags[];
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html#vpc_id Ec2CarrierGateway#vpc_id}
    */
    readonly vpcId: string;
}
export interface Ec2CarrierGatewayTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html#key Ec2CarrierGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html#value Ec2CarrierGateway#value}
    */
    readonly value?: string;
}
export declare function ec2CarrierGatewayTagsToTerraform(struct?: Ec2CarrierGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html awscc_ec2_carrier_gateway}
*/
export declare class Ec2CarrierGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_carrier_gateway.html awscc_ec2_carrier_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CarrierGatewayConfig
    */
    constructor(scope: Construct, id: string, config: Ec2CarrierGatewayConfig);
    get carrierGatewayId(): string;
    get id(): string;
    get ownerId(): string;
    get state(): string;
    private _tags?;
    get tags(): Ec2CarrierGatewayTags[];
    set tags(value: Ec2CarrierGatewayTags[]);
    resetTags(): void;
    get tagsInput(): Ec2CarrierGatewayTags[] | undefined;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
