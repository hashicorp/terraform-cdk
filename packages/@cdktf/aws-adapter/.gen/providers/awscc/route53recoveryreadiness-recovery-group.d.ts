import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * A list of the cell Amazon Resource Names (ARNs) in the recovery group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#cells Route53RecoveryreadinessRecoveryGroup#cells}
    */
    readonly cells?: string[];
    /**
    * The name of the recovery group to create.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
    */
    readonly recoveryGroupName: string;
    /**
    * A collection of tags associated with a resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#tags Route53RecoveryreadinessRecoveryGroup#tags}
    */
    readonly tags?: Route53RecoveryreadinessRecoveryGroupTags[];
}
export interface Route53RecoveryreadinessRecoveryGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#key Route53RecoveryreadinessRecoveryGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html#value Route53RecoveryreadinessRecoveryGroup#value}
    */
    readonly value: string[];
}
export declare function route53RecoveryreadinessRecoveryGroupTagsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group}
*/
export declare class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_recovery_group.html awscc_route53recoveryreadiness_recovery_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessRecoveryGroupConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig);
    private _cells?;
    get cells(): string[];
    set cells(value: string[]);
    resetCells(): void;
    get cellsInput(): string[] | undefined;
    get id(): string;
    get recoveryGroupArn(): string;
    private _recoveryGroupName;
    get recoveryGroupName(): string;
    set recoveryGroupName(value: string);
    get recoveryGroupNameInput(): string;
    private _tags?;
    get tags(): Route53RecoveryreadinessRecoveryGroupTags[];
    set tags(value: Route53RecoveryreadinessRecoveryGroupTags[]);
    resetTags(): void;
    get tagsInput(): Route53RecoveryreadinessRecoveryGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
