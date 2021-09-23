import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue extends cdktf.ComplexComputedList {
    get source(): string[];
}
export declare function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any;
export declare class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): any;
}
export declare function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any;
export declare class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue extends cdktf.ComplexComputedList {
    get source(): string[];
}
export declare function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any;
export declare class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): any;
}
export declare function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any;
export declare class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration extends cdktf.ComplexComputedList {
    get accessControlAttributes(): any;
}
export declare function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration}
*/
export declare class DataAwsccSsoInstanceAccessControlAttributeConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig);
    get accessControlAttributes(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceAccessControlAttributeConfiguration(): any;
    get instanceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
