import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoInstanceAccessControlAttributeConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}
    */
    readonly accessControlAttributes?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
    /**
    * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}
    */
    readonly instanceAccessControlAttributeConfiguration?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
    /**
    * The ARN of the AWS SSO instance under which the operation will be executed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}
    */
    readonly instanceArn: string;
}
export interface SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#source SsoInstanceAccessControlAttributeConfiguration#source}
    */
    readonly source: string[];
}
export declare function ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any;
export interface SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#key SsoInstanceAccessControlAttributeConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#value SsoInstanceAccessControlAttributeConfiguration#value}
    */
    readonly value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
}
export declare function ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any;
export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#source SsoInstanceAccessControlAttributeConfiguration#source}
    */
    readonly source: string[];
}
export declare function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any;
export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#key SsoInstanceAccessControlAttributeConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#value SsoInstanceAccessControlAttributeConfiguration#value}
    */
    readonly value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
}
export declare function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any;
export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}
    */
    readonly accessControlAttributes: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
}
export declare function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration}
*/
export declare class SsoInstanceAccessControlAttributeConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoInstanceAccessControlAttributeConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SsoInstanceAccessControlAttributeConfigurationConfig);
    private _accessControlAttributes?;
    get accessControlAttributes(): SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
    set accessControlAttributes(value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[]);
    resetAccessControlAttributes(): void;
    get accessControlAttributesInput(): SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[] | undefined;
    get id(): string;
    private _instanceAccessControlAttributeConfiguration?;
    get instanceAccessControlAttributeConfiguration(): SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
    set instanceAccessControlAttributeConfiguration(value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration);
    resetInstanceAccessControlAttributeConfiguration(): void;
    get instanceAccessControlAttributeConfigurationInput(): SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration | undefined;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
