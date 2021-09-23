import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotProvisioningTemplatesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_templates.html awscc_iot_provisioning_templates}
*/
export declare class DataAwsccIotProvisioningTemplates extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_templates.html awscc_iot_provisioning_templates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotProvisioningTemplatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotProvisioningTemplatesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
