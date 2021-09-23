import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html#id DataAwsccRoute53RecoveryreadinessRecoveryGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoveryreadinessRecoveryGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string[];
}
export declare function dataAwsccRoute53RecoveryreadinessRecoveryGroupTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessRecoveryGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group}
*/
export declare class DataAwsccRoute53RecoveryreadinessRecoveryGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig);
    get cells(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get recoveryGroupArn(): string;
    get recoveryGroupName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
