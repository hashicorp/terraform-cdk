import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertificatemanagerAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html#expiry_events_configuration CertificatemanagerAccount#expiry_events_configuration}
    */
    readonly expiryEventsConfiguration: CertificatemanagerAccountExpiryEventsConfiguration;
}
export interface CertificatemanagerAccountExpiryEventsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html#days_before_expiry CertificatemanagerAccount#days_before_expiry}
    */
    readonly daysBeforeExpiry?: number;
}
export declare function certificatemanagerAccountExpiryEventsConfigurationToTerraform(struct?: CertificatemanagerAccountExpiryEventsConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account}
*/
export declare class CertificatemanagerAccount extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificatemanagerAccountConfig
    */
    constructor(scope: Construct, id: string, config: CertificatemanagerAccountConfig);
    get accountId(): string;
    private _expiryEventsConfiguration;
    get expiryEventsConfiguration(): CertificatemanagerAccountExpiryEventsConfiguration;
    set expiryEventsConfiguration(value: CertificatemanagerAccountExpiryEventsConfiguration);
    get expiryEventsConfigurationInput(): CertificatemanagerAccountExpiryEventsConfiguration;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
