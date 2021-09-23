import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotAccountAuditConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configurations.html awscc_iot_account_audit_configurations}
*/
export declare class DataAwsccIotAccountAuditConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_account_audit_configurations.html awscc_iot_account_audit_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotAccountAuditConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotAccountAuditConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
