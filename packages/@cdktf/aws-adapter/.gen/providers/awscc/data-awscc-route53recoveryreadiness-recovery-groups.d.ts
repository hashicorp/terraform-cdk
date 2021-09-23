import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoveryreadinessRecoveryGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_groups.html awscc_route53recoveryreadiness_recovery_groups}
*/
export declare class DataAwsccRoute53RecoveryreadinessRecoveryGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_groups.html awscc_route53recoveryreadiness_recovery_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessRecoveryGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53RecoveryreadinessRecoveryGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
