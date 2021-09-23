import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique string (ID) used to identify a hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#hosted_zone_id Route53KeySigningKey#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#key_management_service_arn Route53KeySigningKey#key_management_service_arn}
    */
    readonly keyManagementServiceArn: string;
    /**
    * An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#name Route53KeySigningKey#name}
    */
    readonly name: string;
    /**
    * A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#status Route53KeySigningKey#status}
    */
    readonly status: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html awscc_route53_key_signing_key}
*/
export declare class Route53KeySigningKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html awscc_route53_key_signing_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53KeySigningKeyConfig
    */
    constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig);
    private _hostedZoneId;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string;
    get id(): string;
    private _keyManagementServiceArn;
    get keyManagementServiceArn(): string;
    set keyManagementServiceArn(value: string);
    get keyManagementServiceArnInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _status;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
